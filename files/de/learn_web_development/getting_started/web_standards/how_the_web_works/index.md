---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine umfassende Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren. Es erklärt die Magie, die im Hintergrund stattfindet, um den relevanten Code an Ihren Computer zu liefern, damit der Browser ihn zu etwas zusammenfügen kann, das Sie ansehen können.

Diese Theorie ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf hohem Niveau funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf einem grundlegenden Level.</li>
          <li>Gängige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Bestandteile einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Aufschrift Anfrage zeigt vom Client zum Server, und ein Pfeil mit der Aufschrift Antworten zeigt vom Server zum Client](simple-client-server.png)

- Clients sind die üblichen mit dem Internet verbundenen Geräte eines Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem Wi-Fi verbunden ist, oder Ihr Handy, das mit Ihrem Mobilnetz verbunden ist) und die auf diesen Geräten verfügbare webzugreifende Software (meist ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf das Client-Gerät heruntergeladen, um vom Browser gerendert und dem Nutzer angezeigt zu werden.

## Die anderen Teile der Werkzeugkiste

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die daran beteiligt sind, und wir beschreiben sie unten.

Stellen Sie sich vor, das Internet sei eine Straße. Am einen Ende der Straße ist der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, aus dem Sie etwas kaufen möchten.

![Ein schwarz-weiß Foto einer Person, die auf einem Zebrastreifen eine Straße überquert](road.jpg)

Damit Daten hin und her gelangen können, brauchen wir folgende Dinge:

- **Ihre Internetverbindung**: Erlaubt es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet übertragen werden sollten. Dies ist wie die Transportmechanismen, die es ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie auf der Straße reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Webseiten. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der sich der Server befindet — bevor er die Website abrufen kann (siehe [DNS erläutert](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website liegt, damit er HTTP-Nachrichten an die richtige Stelle senden kann (siehe unten). Dies ist, als ob Sie die Adresse des Geschäfts nachschlagen würden, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist, wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:
  - **Code**: Websites bestehen hauptsächlich aus HTML, CSS und JavaScript — die verschiedenen Programmiersprachen, in denen Websites geschrieben werden und die der Browser interpretiert und zu einer Webseite zusammenfügt, die einem Nutzer angezeigt wird.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Dinge, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die nicht der Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Wie der Browser diese Dateien zu einer Webseite zusammenfügt, erfahren Sie später im Kurs in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert also genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#bestandteile_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, treten folgende Schritte auf:

1. Der Browser geht zum DNS-Server und findet die tatsächliche Adresse des Servers, auf dem die Website liegt (Sie schlagen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anfrage an den Server und bittet darum, eine Kopie der Website an den Client zu senden (Sie gehen ins Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen dem Client und dem Server gesendeten Daten werden über Ihre Internetverbindung mittels TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe kleiner Häppchen namens [Datenpakete](#pakete_erklärt) an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie nach Hause).
4. Der Browser setzt die kleinen Häppchen zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neue glänzende Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#bestandteile_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebseiten zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen eindeutigen Ort im Web dar. Sie ist jedoch nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der tatsächlichen (IP-)Adresse der Webseite abgleichen.

Webseiten können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

Lassen Sie uns jetzt die MDN-IP-Adresse nachschlagen und beweisen, dass sie auf denselben Ort zeigt wie die Webadresse:

1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.
2. Kopieren Sie auf dem Bildschirm mit den Ergebnissen die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
3. Öffnen Sie einen neuen Browser-Tab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf hinweist.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hiermit?

Grundsätzlich werden beim Übertragen von Daten über das Web diese in Tausenden von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am bedeutendsten:

- Sie gehen manchmal verloren oder werden beschädigt und wenn dies passiert, ist es schneller und einfacher, kleine Stücke als ganze Dateien zu ersetzen.
- Zusätzlich können die Pakete entlang verschiedener Pfade geroutet werden, was den Austausch schneller macht und es vielen unterschiedlichen Nutzern erlaubt, dieselbe Website gleichzeitig herunterzuladen. Wenn jede Webseite als einzelnes großes Stück gesendet würde, könnte sie nur ein Nutzer gleichzeitig herunterladen, was das Web sehr ineffizient und wenig unterhaltsam machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Verbsprache, um Aktionen wie Anfragen durchzuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-Methode [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) wird normalerweise verwendet, um HTTP-Anfragen der oben beschriebenen Art zu machen. Eine Anfrage für die MDN-Startseite könnte beispielsweise so aussehen:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Die vom Server gesendete Antwort könnte ungefähr so aussehen:

```http
HTTP/2 200

date: Tue, 11 Feb 2025 11:13:30 GMT
expires: Tue, 11 Feb 2025 11:40:01 GMT
server: Google frontend
last-modified: Tue, 11 Feb 2025 00:49:32 GMT
ETag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (the 45227 bytes of the requested web page HTML)
```

Die vollständige Antwort ist komplexer als diese, aber wir haben das meiste davon aus Gründen der Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die HTTP-Version, die der Server zum Senden der Antwort verwendet, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen liefern und/oder ihr Verhalten ändern.
- `<!doctype html>`, etc.
  - : Der Antworttext, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Weitere Details zu HTTP finden Sie im MDN [HTTP-Referenz](/de/docs/Web/HTTP). [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Anwendungen, aber Sie werden nur einige wenige gewöhnlich sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Standort verschoben, der in der Antwort bereitgestellt wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem vom Server verstandenen Format vorliegt oder Fehler aufweist.
- `403`
  - : Der Server gibt dem Client keinen Zugriff auf die angeforderte Ressource. Dies geschieht in der Regel, wenn der Server weiß, wer der Client ist, aber er keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder Inhalte gelöscht wurden, ohne einen Redirect zu implementieren.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig, wenn Server wegen Wartungsarbeiten offline sind, und es wird erwartet, dass dies vorübergehend ist.

## Bestandteile einer URL

Technisch bilden die Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil von **Uniform Resource Locators** (**URLs**). URLs definieren die Orte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Zum Beispiel, wenn Sie einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass böswillige Personen Ihre Daten lesen, während sie übertragen werden. Im modernen Web verwendet praktisch jeder Server HTTPS, sodass der Browser, wenn Sie es nicht explizit angeben, davon ausgeht, dass Sie es verwenden, und es für Sie hinzufügt.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den höchsten Standort des Servers darstellt, mit dem Sie sich verbinden. In diesem Fall entspricht die Webadresse, die Sie eingegeben haben, dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten wählen, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (ein eigenständiger Inhaltsbereich) von Mozillas `mozilla.org`-Domain ist. Es gibt andere Subdomains auf Mozillas Website, die eigenständige Inhalte hosten — siehe beispielsweise [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`
  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN sammelt alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL verweist.

    Wenn Ihr Browser so eingestellt ist, dass er standardmäßig englische Inhalte bevorzugt, dann ist dies die URL, zu der Sie weitergeleitet werden, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingestellt ist, dass er eine andere Sprache bevorzugt, die MDN unterstützt, wie Französisch, werden Sie zu einer anderen URL weitergeleitet, wie `https://developer.mozilla.org/fr/`. Dies ist nicht standardmäßig für jede Website verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Menschen leicht auf die bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Anerkennung

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
