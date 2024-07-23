
export const getProducts = async(cat) => {

  const url = `https://fakestoreapi.com/products/category/${cat}?limit=10`
  console.log(url)

  const res = await fetch(url)
  const data = await res.json()
  
  console.log(data)
  return data
}
