interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;

    // Optional argument
    // Array of strings
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

// Data Transfer Object (DDD)

class EmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.email}: ${message.subject}`);
    }
}

export default EmailService;