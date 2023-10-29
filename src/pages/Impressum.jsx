import { useLayoutEffect } from "react";


const Impressum = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return ( 
        <div className="main impressum"><h2>Impressum</h2>
    <div>
        <h3>Kontakt:</h3>
        <p>Aegean Dogs e. V.</p>
        <p>Meldenweg 1</p>
        <p>12357 Berlin</p>
        <p>E-Mail: vorsitz@aegean-dogs.de</p>
        <p>Telefon: 0170 - 472 2618</p>
    </div>

    <div>
        <h3>Vertretungsberechtigte Vorstandsmitglieder:</h3>
        <p>Manuela Tillack-Lübke, Vorstandsvorsitzende</p>
        <p>Rainer Kopacek, stellvertretender Vorsitzender</p>
        <p>Christiane Kopacek, Schriftführerin</p>
        <p>Janine Klatt, Schatzmeisterin</p>
    </div>

    <div>
        <h3>Registergericht:</h3>
        <p>Amtsgericht Charlottenburg</p>
    </div>

    <div>
        <h3>Registernummer:</h3>
        <p>VR 31043 B</p>
    </div>

    <div>
        <h3>Streitschlichtung</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a>.</p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </div>

    <div>
        <h3>Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    </div>

    <div>
        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    </div>

    <div>
        <h3>Urheberrecht</h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </div>
        </div>
        );
    }
     
    export default Impressum;