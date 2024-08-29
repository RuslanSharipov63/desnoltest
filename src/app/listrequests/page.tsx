import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomExclamationMark from "@/customcomponent/CustomExclamationMark";
import CustomPagination from "@/customcomponent/CustomPagintaion";
import { requests } from "@/list/requests";

const ListRequests = () => {
  const colorStatus = (param: string): string => {
    let color = "";
    if (param === "В работе" || param === "Зарегистрировано") {
      color = "text-orange-300";
    }
    if (
      param === "На согласовании" ||
      param === "Выполнено. Требует подтверждения"
    ) {
      color = "text-blue-600";
    }
    return color;
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">тема</TableHead>
            <TableHead>Номер</TableHead>
            <TableHead>Дата создания</TableHead>
            <TableHead className="text-right">Дата изменения</TableHead>
            <TableHead className="text-right">Крайний срок</TableHead>
            <TableHead className="text-left w-[100px]">Состояние</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((el) => (
            <TableRow key={el.id}>
              <TableCell className="font-bold text-blue-600 flex justify-start items-center">
                <Link href={`onerequest/${el.id}`}> {el.topic} </Link>
                <span className="text-red-600 ml-2">
                  {el.sign === "Ожидает ответа" && <CustomExclamationMark />}
                </span>
              </TableCell>
              <TableCell>{el.numberUser}</TableCell>
              <TableCell>{el.dateCreate}</TableCell>
              <TableCell className="text-right">{el.dateUpdate}</TableCell>
              <TableCell className="text-right">{el.deadline}</TableCell>
              <TableCell className="text-left">
                <span className={`mr-2 text-lg ${colorStatus(el.status)}`}>
                  &bull;
                </span>
                {el.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPagination />
    </>
  );
};

export default ListRequests;
