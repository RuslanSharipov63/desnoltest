import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";


const CustomAlert = () => {
    return (
        <Alert variant="destructive" className="w-[300px]">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Отмена</AlertTitle>
            <AlertDescription>
                Неверный логин или пароль.
            </AlertDescription>
        </Alert>
    );
}

export default CustomAlert;