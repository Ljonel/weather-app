const useGetTodayDate = () => {
  const day = new Date().toLocaleString("en-US", { day: "numeric" });
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const year = new Date().getFullYear();
  const date = `${day} ${month} ${year}`;
  return date;
};

export default useGetTodayDate;
