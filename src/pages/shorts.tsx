import { Shorts } from "@/containers";
import { DataType } from "@/contents/data";
import { popularList, hotList } from "@/contents/data";

export async function getServerSideProps() {
  try {
    const popularData: DataType[] = await popularList;
    const hotData: DataType[] = await hotList;
    return {
      props: {
        popularList: popularData,
        hotList: hotData,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
export default Shorts;
