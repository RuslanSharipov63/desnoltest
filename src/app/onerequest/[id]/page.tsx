"use client";
import { requests } from "@/list/requests";
import { usePathname } from "next/navigation";
import { listRequestsType } from "@/types";

const OneRequest = () => {
  const pathname = usePathname();
  let id = pathname.slice(-1);

  const request: listRequestsType[] = requests.filter((item) => {
    return Number(id) === item.id;
  });
  console.log(request)
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-start">
        <p>
         Обращение № {request[0].numberUser} от {request[0].dateCreate}
         <h3>{request[0].topic}</h3>
        </p>
      </div>

      <div className="flex flex-col items-start"></div>
    </div>
  );
};

export default OneRequest;
