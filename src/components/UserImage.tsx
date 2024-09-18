import { options } from "@/app/api/auth/[...nextauth]/options";
import { getuserImg } from "@/app/api/userInfos/root";
import { getServerSession, Session } from "next-auth";
import ResizeImg from "./ResizeImg";

const UserImage = () => {
  let img: string[];
  const func = async () => {
    const session: Session | null = await getServerSession(options);
    const userimg = await getuserImg(session);
    img = userimg?.userImgData ?? [];
    return (
      <div>
        <ResizeImg img={img[0]} />
      </div>
    );
  };

  return <div>{func()}</div>;
};

export default UserImage;
