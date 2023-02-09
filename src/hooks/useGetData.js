import baseURL from "../API/baseUrl";

//custom hooks for get data from API
const useGetData = async (url, params) => {
  //url : link of API
  //params:any parameters user pass with API
  const response = await baseURL.get(url, params);
  return response.data;
};
export default useGetData;
