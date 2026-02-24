import React from 'react'
import Footer from '../../components/Js/Footer.jsx';
import '../Css/Termos.css'

export default function Termos() {
    return (
        <div class="termos-wrapper">
            <div class="termos-content">
                <h1 class="termos-title">Termos de Uso</h1>
                <p class="termos-updated">Última atualização: 12 de Fevereiro de 2026</p>

                <p class="termos-text">Bem-vindo ao <strong>Montara</strong>. Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições:</p>

                <h2 class="termos-subtitle">1. Aceitação dos Termos</h2>
                <p class="termos-text">O acesso ao site é gratuito e implica na aceitação total destes Termos de Uso. Caso não concorde com algum dos pontos, o acesso deve ser interrompido.</p>

                <blockquote class="termos-quote">
                    Atenção: O uso indevido de qualquer ferramenta deste site pode resultar na suspensão da conta do usuário.
                </blockquote>

                <h2 class="termos-subtitle">2. Propriedade Intelectual</h2>
                <p class="termos-text">Todo o conteúdo disponível — textos, logos e artes — é de propriedade exclusiva do <strong>Montara</strong>.</p>

                <h2 class="termos-subtitle">3. Responsabilidades</h2>
                <ul class="termos-list">
                    <li class="termos-list-item">Não utilizar o site para fins ilegais.</li>
                    <li class="termos-list-item">Não transmitir vírus ou códigos maliciosos.</li>
                    <li class="termos-list-item">Respeitar os direitos de outros usuários.</li>
                </ul>

                <div class="termos-footer">
                    <hr class="termos-divider" />
                    <p class="termos-footer-text">Dúvidas? Entre em contato: suporte@seusite.com</p>

                    <button class="termos-btn-accept">Eu aceito os termos</button>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
