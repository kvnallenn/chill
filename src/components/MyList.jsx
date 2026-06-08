import { useEffect, useState } from "react";
import { NIL as NIL_UUID } from "uuid";

const MyList = ({ data, fetchData }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [loading, setLoading] = useState(null);

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title);
  };

  const handleUpdate = async (id) => {
    await fetch(
      `https://6a26cd48a84f9d39e907e9c4.mockapi.io/api/v1/favorites/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editTitle,
        }),
      },
    );

    await fetchData();

    setEditingId(null);
    setEditTitle("");
  };

  const sendData = async () => {
    const response = await fetch(
      "https://6a26cd48a84f9d39e907e9c4.mockapi.io/api/v1/favorites",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(container),
      },
    );
    const result = await response.json();
    await fetchData();
  };

  const handleDelete = async (id) => {
    try {
      setLoading(id);
      const response = await fetch(
        `https://6a26cd48a84f9d39e907e9c4.mockapi.io/api/v1/favorites/${id}`,
        {
          method: "DELETE",
        },
      );

      await fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      setLoading(null);
    }
  };

  const [container, setContainer] = useState({
    title: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContainer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (id) => {
    setLoading(id);
    if (!container.title) {
      alert("Nama film tidak boleh kosong!");
      setLoading(null);
      return;
    }
    setContainer({
      title: "",
      id: NIL_UUID,
    });
    await sendData();
    setLoading(null);
  };

  return (
    <>
      <section className="relative">
        <h1 className="mb-4 text-[20px] font-bold text-white sm:text-[24px] md:mb-5 md:text-[28px] lg:text-[32px]">
          Daftar Tontonan Saya
        </h1>
      </section>
      <form>
        <input
          type="hidden"
          value={container.NIL_UUID}
          name="id"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Tulis Nama Film"
          name="title"
          value={container.title}
          onChange={handleChange}
          className="mb-4 w-full rounded-full bg-[#2b3547] px-5 py-2 text-[12px] text-white sm:px-6 sm:text-[14px]"
        />
        <button
          disabled={loading === `${container.NIL_UUID}`}
          type="button"
          onClick={() => handleClick(`${container.NIL_UUID}`)}
          className="rounded-full bg-[#0F1E93] px-5 py-2 text-[12px] font-bold text-white sm:px-6 sm:text-[14px]"
        >
          {loading === `${container.NIL_UUID}`
            ? "Menambahkan..."
            : "Tambah Tontonan"}
        </button>
      </form>
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:gap-5 md:gap-6 [&::-webkit-scrollbar]:hidden">
        {data.map((value) => (
          <div key={value.id} className="group relative justify-items-center">
            <div className="animate-pulse bg-[#2b3547] relative aspect-[2/3] w-[138px] shrink-0 snap-start overflow-hidden rounded-[4px] sm:w-[160px] md:w-[180px] lg:w-[210px]">
              <img className="h-full w-full object-cover" />

              <button
                disabled={loading === value.id}
                className="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-white"
                onClick={() => handleDelete(value.id)}
              >
                {loading === value.id ? "Menghapus..." : "Hapus"}
              </button>
              <button
                className="absolute left-2 top-2 rounded bg-blue-600 px-2 py-1 text-white"
                onClick={() => handleEdit(value)}
              >
                Edit
              </button>
            </div>

            {editingId === value.id ? (
              <div className="mt-4 flex flex-col gap-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="rounded bg-[#2b3547] px-3 py-2 text-white"
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(value.id)}
                    className="rounded bg-green-600 px-3 py-1 text-white"
                  >
                    Simpan
                  </button>

                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditTitle("");
                    }}
                    className="rounded bg-gray-600 px-3 py-1 text-white"
                  >
                    Batal
                  </button>
                </div>
              </div>
            ) : (
              <h1 className="mb-4 mt-4 text-[15px] font-bold text-white sm:text-[22px] md:mb-5 md:text-[26px] lg:text-[30px]">
                {value.title}
              </h1>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MyList;
