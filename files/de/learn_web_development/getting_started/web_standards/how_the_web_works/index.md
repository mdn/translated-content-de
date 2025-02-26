---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 4116836ba4f83dd3e7f55329472d20f8e1b022b5
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine allgemeine Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren. Es erklärt die Magie, die im Hintergrund abläuft, um den entsprechenden Code an Ihren Computer zu liefern, damit der Browser etwas daran zusammenbauen kann, das Sie sich ansehen können.

Dieses theoretische Wissen ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund geschieht.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Dies wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf hoher Ebene funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf einem grundlegenden Niveau.</li>
          <li>Gängige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie miteinander interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Bezeichnung Anfrage geht vom Client zum Server, und ein Pfeil mit der Bezeichnung Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die typischen internetfähigen Geräte der Webnutzer (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren Webzugang-Programme (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf die Client-Maschine heruntergeladen, damit der Browser sie rendern und dem Benutzer anzeigen kann.

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere beteiligte Teile, die wir unten beschreiben werden.

Stellen Sie sich für den Moment das Internet als eine Straße vor. Am einen Ende der Straße steht der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weiß Foto einer Person, die eine Straße an einem Zebrastreifen überquert](road.jpg)

Um Daten hin und her zu übertragen, benötigen wir die folgenden Dinge:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollten. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder auf welchem anderen Weg Sie die Straße entlang reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die eigentliche Adresse, an der sich der Server befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: Das **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code**: Websites bestehen hauptsächlich aus HTML, CSS und JavaScript — die verschiedenen Programmiersprachen, in denen Websites geschrieben werden und die der Browser interpretiert und zu einer Webseite zusammenbaut, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie zum Beispiel Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können im späteren Kurs erfahren, wie der Browser diese Dateien zu einer Webseite zusammensetzt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert also genau?

Wenn Sie eine Webadresse (die technisch gesehen Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, laufen folgende Schritte ab:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie suchen die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anforderung an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen Client und Server gesendeten Daten werden über Ihre Internetverbindung mithilfe von TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server eine „200 OK“-Nachricht an den Client, was bedeutet „Natürlich können Sie diese Website ansehen! Hier ist sie“, und beginnt dann, die Dateien der Website in Form einer Reihe von kleinen Paketen namens [Datenpakete](#pakete_erklärt) an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zu Ihrem Haus zurück).
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neue glänzende Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in die Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und repräsentiert einen einzigartigen Ort im Web. Allerdings ist es nicht sehr leicht zu merken, oder? Aus diesem Grund wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie den Button.
> 2. Kopieren Sie im Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
> 3. Öffnen Sie einen neuen Browser-Tab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse dorthin zeigt.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir damit?

Grundsätzlich werden Daten, wenn sie über das Web gesendet werden, in Tausende von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am bedeutendsten ist:

- Sie werden manchmal verloren oder beschädigt und, wenn dies passiert, ist es schneller und einfacher, kleine Stücke zu ersetzen als ganze Dateien.
- Zusätzlich können die Pakete auf unterschiedlichen Wegen geroutet werden, was den Austausch schneller macht und es vielen verschiedenen Benutzern ermöglicht, die gleiche Website gleichzeitig herunterzuladen. Wenn jede Website als einzelnes großes Stück gesendet würde, könnte nur ein Benutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und nicht sehr angenehm machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen auszuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)). Die HTTP-`GET`-Methode ist die, die normalerweise verwendet wird, um HTTP-Anfragen der oben beschriebenen Art zu machen. Zum Beispiel könnte eine Anfrage nach der MDN-Startseite so aussehen:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Die vom Server gesendete Antwort könnte folgendermaßen aussehen:

```http
HTTP/2 200

date: Tue, 11 Feb 2025 11:13:30 GMT
expires: Tue, 11 Feb 2025 11:40:01 GMT
server: Google frontend
last-modified: Tue, 11 Feb 2025 00:49:32 GMT
etag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (the 45227 bytes of the requested web page HTML)
```

Die vollständige Antwort ist komplexer als dies, aber wir haben das Meiste davon aus Gründen der Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires` etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen bereitstellen und/oder ihr Verhalten ändern.
- `<!doctype html>` etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Siehe die MDN [HTTP-Dokumentation](/de/docs/Web/HTTP) für viel mehr Details zu HTTP, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview) ist ein guter Anfangspunkt.

### Weitere Statuscodes

Oben haben wir den `200`-[Statuscode](/de/docs/Web/HTTP/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden normalerweise nur einige davon sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort bereitgestellt wird. Dies wird zur Umleitung von Inhalten verwendet, wenn diese verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Das passiert normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server gewährt dem Client keinen Zugriff auf die angeforderte Ressource. Das passiert normalerweise, wenn der Server weiß, wer der Client ist, aber dieser keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht werden, ohne eine Umleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig der Fall, wenn Server wegen Wartungsarbeiten offline sind, und es wird erwartet, dass es vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie zum Beispiel in Ihrem Browser einen neuen Tab öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das verwendete **Protokoll**, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, das eine sichere Version von HTTP ist, die es bösen Menschen unmöglich macht, Ihre Daten zu lesen, während sie übertragen werden. Im modernen Web verwendet so ziemlich jeder Server HTTPS, sodass der Browser, wenn Sie es nicht explizit angeben, annimmt, dass dies das ist, was Sie verwenden, und es für Sie hinzufügt.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den erstklassigen Standort des Servers repräsentiert, mit dem Sie sich verbinden. In diesem Fall ist die von Ihnen eingegebene Webadresse gleich dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (eigenständiger Inhaltsbereich) der `mozilla.org`-Domain von Mozilla ist. Auf der Website von Mozilla gibt es andere Subdomains, die eigenständige Inhalte hosten — siehe beispielsweise [support.mozilla.org](https://support.mozilla.org) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org).
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN hält alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Ihr Browserstandardmäßig auf englische Inhalte eingestellt ist, dann wird Ihnen diese URL angezeigt, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingestellt ist, dass eine andere von MDN unterstützte Sprache bevorzugt wird, wie z. B. Französisch, werden Sie zu einer anderen URL wie `https://developer.mozilla.org/fr/` umgeleitet. Dies ist nicht standardmäßig für jede Website verfügbar; die Entwickler von MDN haben MDN so eingerichtet, dass Benutzer leicht auf die bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für mehr Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Bildnachweis

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
