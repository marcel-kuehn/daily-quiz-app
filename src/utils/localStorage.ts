export const getData = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const setData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}
