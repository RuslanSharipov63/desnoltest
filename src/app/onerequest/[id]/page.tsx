"use client";
import { useState } from "react";
import { requests } from "@/list/requests";
import { usePathname } from "next/navigation";
import { listRequestsType } from "@/types";
import { colorStatus } from '@/helpers/colorStatus';
import CustomExclamationMark from "@/customcomponent/CustomExclamationMark";
import { Button } from "@/components/ui/button";

const OneRequest = () => {

  const [height, setHeight] = useState<boolean>(false);

  const changeHeight = () => {
    setHeight(!height)
  }

  const pathname = usePathname();
  let id = pathname.slice(-1);

  const request: listRequestsType[] = requests.filter((item) => {
    return Number(id) === item.id;
  });

  return (
    <>
      <div className={`flex  
      flex-col
      sm:flex-row
      bg-emerald-100
      justify-between 
      bg-emerald-100
      flex-wrap
      w-[80%]
      ml-[10%] 
      mr-[10%] 
      border-2 
      border-inherit 
      rounded-md 
      ${height === false ? 'm-h-[330px] sm:h-[200px]' : 'sm:h-[300px]'}
       mt-[100px]
       transition-[height]
       delay-250
    p-4
    `}>
        <div className="flex flex-col items-start w-[50%] p-4">
          <p className="text-slate-600 text-xs">
            Обращение № {request[0].numberUser} от {request[0].dateCreate}
          </p>
          <h3 className="font-bold mb-4 text-xl">{request[0].topic}</h3>
          <p className="mb-4 text-sm">{request[0].description}</p>
        </div>

        <div className="flex flex-col items-start sm:items-end w-[50%] p-4">
          <p className="flex items-senter mb-4">
            {request[0].status} 
            <span className={`text-red-600 
              text-sm 
              ml-2 
              ${colorStatus(request[0].status)}`}>
              {request[0].sign === "Ожидает ответа" && <CustomExclamationMark />}
            </span>
          </p>
          <p className="text-slate-400 text-xs">Крайний срок</p>
          <p className="mb-4">{request[0].deadline}</p>
          <p className="text-slate-400 text-xs">Решение</p>
          <p className="mb-4">{request[0].solution === '' ? 'Ожидает решения' : request[0].solution}</p>
 
          {height && 
            <>
              <p className="text-slate-400 text-xs">Услуга</p>
              <p className="mb-4">{request[0].service}</p>
              <p className="text-slate-400 text-xs">Состав услуги</p>
              <p>{request[0].compositionService}</p> 
            </>
           } 
 
        </div>

      </div>
      <div className="flex justify-center">
        <Button className="w-24 mt-2 mb-2 p-2" onClick={changeHeight}>{height === false ? 'Развернуть' : 'Свернуть'}</Button>
      </div>
      <div className="flex justify-start items-center mt-4 bg-emerald-100 p-4 w-[70%] ml-[15%] mr-[15%] rounded-md border-2 border-gray-400">
        <p className="ml-4">Если остались вопросы, пожалуйста создайте новое обращение</p>
      </div>
    </>
  );
};

export default OneRequest;
