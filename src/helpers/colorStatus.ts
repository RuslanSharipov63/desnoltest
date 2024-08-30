export const colorStatus = (param: string): string => {
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