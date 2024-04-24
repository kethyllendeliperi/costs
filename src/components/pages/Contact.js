import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './Contact.module.css'

function Contact() {

    return (
        <div className={styles.form_contact}>
            <h1>Contato</h1>
            <form className={styles.form}>
                <Input
                    type="text"
                    text="Nome"
                    name="name"
                    placeholder="Insira seu nome e sobrenome"
                />
                <Input
                    type="tel"
                    text="Telefone"
                    name="budget"
                    placeholder="(XX) XXXXX-XXXX"
                />
                <p className={styles.contact_message}>Mensagem</p>
                <textarea className={styles.textarea} placeholder="Escreva sua mensagem" />
                <SubmitButton text="Enviar" />
            </form>
        </div>
    )
}

export default Contact