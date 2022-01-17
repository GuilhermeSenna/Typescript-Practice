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

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

// Data Transfer Object (DDD)

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.email}: ${message.subject}`);
    }
}

export default EmailService;