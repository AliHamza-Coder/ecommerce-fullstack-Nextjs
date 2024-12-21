
export const fetchProducts = async () => {
    const headers = {
      Authorization:
        "Bearer 8888f5b33a2b554d9f36b46a1413eae10874e0c6a3547e313d69da6d1414d4e33c2bec377a4cb33e63a9b70aeef35830deac04af2058338b0cb56630f739b8f54fed07ef760f4a29bf3026a51ce3950eef91c3b18e65829210431ac4ba4341e5cd1ac9309522b5e9d1b943aa44dc8dbdeb039cbf264de7f0acea51b841da48ef",
    };
  
    const response = await fetch("http://localhost:1337/api/products?populate=*", {
      headers,
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  
    const data = await response.json();
    return data.data.map((item) => ({
      id: item.id,
      title: item.title || "No Title",
      description: item.description || "No Description",
      imageUrl: item.imageUrl || "/default-image.jpg",
      price: item.price || 0,
    }));
  };
  