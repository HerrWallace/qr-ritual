import { InfoPage } from "../../components/InfoPage"
import { Navbar } from "../../components/Navbars/Navbar"

const title = 'Как это работает?'

const infoText = [
    {
        text: 'Благодаря нашей услуге вы сможете создать Википедию человека и получить QR-code для мгновенного ее открытия при сканировании с камеры и нанесения на памятник. Тем самым память о человеке будет сохранена навсегда. Так давайте же разберёмся подробнее как у нас тут все устроено.' 
    },
    {
        title: 'Регистрация',
        text: 'Для вашего комфорта и удобства вам нужно будет зарегистрироваться на нашем портале. Для этого вам всего лишь нужно будет ввести свою почту и придумать пароль. Так же,у вас есть возможность зарегистрироваться через социальные сети.'
    },
    {
        title: 'Создание страницы человека',
        text: 'После входа вы окажетесь в вашем личном кабинете. Для того чтобы создать страницу человека, перейдите на вкладку «создать страницу» и воспользуйтесь нашим удобным конструктором страниц. Вам всего-то необходимо заполнить форму, внеся данные, которые вы хотели бы увидеть. Вы сможете добавить фото человека, видео с ним, его биографию и даже отметить место его захоронения.'
    },
    {
        title: 'Получение QR-кода и Бесплатный период пользования',
        text: 'После создания страницы вы сможете оценить ее дизайн, а так же отредактировать в случае необходимости. Сделать это можно на вкладке «мои страницы», там же будут отображаться все созданные вами страницы. После создания персональной Википедии для человека, вы бесплатно сможете получить QR-code, который будет работать в течении трёх дней. Для отслеживания оставшегося времени используйте вкладку «мои страницы». Мы считаем, что этого пробного периода достаточно, чтобы вы убедились в качестве и работоспособности нашего сервиса.'
    },
    {
        title: 'Получение безграничного доступа и пожизненного тех.обслуживания страницы',
        text: 'После того, как прошло три дня, информация на созданной вами странице станет скрыта и для того, чтобы разблокировать ее навсегда, необходимо будет оплатить данную услугу. Оплата производится лишь ОДИН раз, а работоспособность страницы в интернете и через QR-Code будет поддерживаться ВЕЧНО. Вдобавок, после оплаты вы получите много полезных функций, например таких, как: возможность скрывать вашу страницу, на случай, если вы не хотите чтобы кто-либо еще мог отсканировать ваш QR-code на памятнике и получить возможность видеть информацию, хранящуюся там.'
    },
    {
        title: 'Нанесение QR-кода на памятник',
        text: 'После создания страницы вы сможете скачать QR-Code себе на любое устройство. Для его гравировки на памятник, вам необходимо обратиться в любое ритуальное агенство или компанию, занимающуюся памятниками. Для этого достаточно будет лишь скинуть им фотографию QR-кода, точно также, как вы предоставляете им портрет человека или его годы жизни, для гравировки на памятник. Всю последующую работу они выполнят самостоятельно.'
    },
    {
        title: 'Как получить доступ к созданной Википедии человека?',
        text: 'Все очень просто. Для этого будет необходимо лишь открыть камеру на вашем смартфоне и поднести ее к QR-коду. Откроется ссылка на вашу страницу. Теперь вы можете с комфортом придаться воспоминаниям, не боясь, что память об этом человеке когда-нибудь утратится.'
    },
]

const Info = () => {
    return (
        <>
            <Navbar/>
            <InfoPage text={infoText} title={title}/>
        </>
    )
}

export default Info