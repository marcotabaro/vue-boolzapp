const quotes= ['Come dici?', 'Sono daccordo con te!', 'Sei un grande', 'La penso uguale', 'non saprei', 'volere è potere amico!', 'Se solo guardassimo le stelle tanto quanto guardiamo il nostro riflesso',
'Mai, mai, mai arrendersi.', 'Preferisco morire in piedi piuttosto che vivere in ginocchio', 'È un piccolo passo per un uomo, ma un grande passo per l’umanità', 'Non potrai mai attraversare l’oceano se non hai il coraggio di perdere di vista la riva',
'Siate affamati, siate folli', 'L’unica vera saggezza è sapere di non sapere nulla', 'Chi comanda dev’essere conciso, preciso. E sempre saldo al timone', 'Io non so con quali armi sarà combattuta la terza guerra mondiale, ma so che la quarta sarà combattuta con pietre e bastoni', 'Se non posso fare grandi cose, posso fare piccole cose in un modo fantastico', 'Prendete in mano la vostra vita e fatene un capolavoro', 'sono daccordo con te', 'ciao, come staii', 'Ok MattPonk', 'Sei proprio un lavativo Mattponk!', 'Non fermarti nel passato, non sognare il futuro, focalizza il pensiero sul momento presente.', 'Non fermarti nel passato, non sognare il futuro, focalizza il pensiero sul momento presente.', 'L’unica costante della vita è il cambiamento.', 'Tutto ciò che puoi immaginare è reale.', 'Venne, amò. Le diede una stella, se ne andò', 'Cerca di essere sempre straordinario', 'A scuola ero il miglior ultimo della classe','La migliore libertà è essere se stessi','Non è quello che guardi che conta, è quello che vedi', 'Chi non osa nulla, non speri in nulla', 'Niente è più prezioso del vivere il momento presente', 'Se non scommetti, non vincerai mai', 'Il vero segno dell’intelligenza non è la conoscenza, ma l’immaginazione','L’unico vero errore è quello da cui non impariamo nulla'];
function updateDate() {
    let date = new Date();
    var currentDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    return currentDate;
}

var contatti = [
    {
        name: 'Michele',
        id: 0,
        propic: 'img/avatar_1.jpg',
        lastSeen: 'Ultimo accesso alle 13:49',
        message: [
            {
                text: quotes[Math.floor(Math.random() * quotes.length)],
                sent: false,
                date: updateDate()
            }
        ]
    },
    {
        name: 'Fabio',
        id: 1,
        propic: 'img/avatar_2.jpg',
        lastSeen: 'Ultimo accesso alle 12:59',
        message: [
            {
                text:quotes[Math.floor(Math.random() * quotes.length)],
                sent: false,
                date: updateDate()
            }
        ]
    },
    {
        name: 'Samuele',
        id: 2,
        propic: 'img/avatar_3.jpg',
        lastSeen: 'Ultimo accesso alle 18:43',
        message: [
            {
                text:quotes[Math.floor(Math.random() * quotes.length)],
                sent: false,
                date: updateDate()
            }
        ]
    },
    {
        name: 'Luisa',
        id: 3,
        propic:'img/avatar_4.jpg',
        lastSeen: 'Ultimo accesso ieri',
        message: [
            {
                text:quotes[Math.floor(Math.random() * quotes.length)],
                sent: false,
                date: updateDate()
            }
        ]
    }
]