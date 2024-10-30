//for tests only
import data from "@/__mocks__/data.json";
import CustomSwiper from "@/components/customSwiper";
export default function Container() {
  return (
    <>
      {data.map((category, index) => (
        <CustomSwiper key={index} category={category} />
      ))}
    </>
  );
}
