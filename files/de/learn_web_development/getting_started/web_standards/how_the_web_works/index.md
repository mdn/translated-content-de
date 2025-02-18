---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 2db7f5b32350032c594e89d6e156f992825714e1
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine allgemeine Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um eine Webseite aufzurufen. Dabei wird erklärt, welche „Magie“ im Hintergrund abläuft, um den relevanten Code an Ihren Computer zu liefern, damit der Browser diesen in etwas Sichtbares umsetzt.

Dieses theoretische Wissen ist kurzfristig nicht notwendig, um Webcode zu schreiben. Aber langfristig werden Sie stark davon profitieren, zu verstehen, was im Hintergrund geschieht.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser Code in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf einer grundlegenden Ebene funktioniert.</li>
          <li>Die Bedeutung von TCP/IP, HTTP und Datenpaketen.</li>
          <li>Grundlagen der HTTP-Syntax.</li>
          <li>Häufige HTTP-Antwortcodes (z. B. 200, 301, 403, 404, und 500).</li>
          <li>Grundlegende Bestandteile einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm ihrer Interaktion könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung "request" zeigt vom Client zum Server, und ein Pfeil mit der Beschriftung "responses" zeigt vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte typischer Webnutzer (z. B. Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) sowie die auf diesen Geräten verfügbaren Webzugriffsprogramme (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client eine Webseite aufrufen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client heruntergeladen, damit der Browser diese rendern und dem Nutzer anzeigen kann.

## Die anderen Werkzeuge im Werkzeugkasten

Der oben beschriebene Client und Server erklären nicht das ganze Bild. Es gibt viele weitere Bestandteile, die dazugehören, und wir werden diese im Folgenden beschreiben.

Stellen Sie sich das Internet vorerst als Straße vor. Am einen Ende der Straße ist der Client, vergleichbar mit Ihrem Haus. Am anderen Ende ist der Server, der wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto einer Person, die einen Zebrastreifen überquert](road.jpg)

Um Daten hin- und herzutransferieren, benötigen wir Folgendes:

- **Ihre Internetverbindung**: Sie ermöglicht das Senden und Empfangen von Daten über das Internet. Das entspricht der Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet übertragen werden sollen. Dies kann man sich wie die Transportmittel vorstellen, mit denen Sie eine Bestellung aufgeben, zum Geschäft fahren und Ihre Waren kaufen. In unserem Beispiel wäre dies wie ein Auto oder ein Fahrrad (oder jedes andere Transportmittel, das Sie auf der Straße nutzen können).
- **DNS**: Das **Domain Name System** (DNS) funktioniert wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in den Browser eingeben, schaut dieser im DNS nach, um die IP-Adresse der Website — die tatsächliche Adresse des Servers — zu finden, bevor er die Website abruft (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server sich die Website befindet, um HTTP-Nachrichten an die richtige Stelle senden zu können (siehe unten). Dies entspricht dem Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: Das **Hypertext Transfer Protocol** (HTTP) ist ein {{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, die Clients und Server verwenden, um miteinander zu kommunizieren. Dies ist vergleichbar mit der Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, welche den verschiedenen Waren ähneln, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:

  - **Code**: Websites werden hauptsächlich mit HTML, CSS und JavaScript erstellt — den verschiedenen Programmiersprachen, in denen Websites geschrieben sind, die der Browser interpretiert und zu einer Webseite zusammenfügt, um sie anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie erfahren später im Kurs, wie der Browser diese Dateien zu einer Webseite zusammensetzt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was genau passiert nun?

Wenn Sie eine Webadresse (technisch Teil einer [URL](#komponenten_einer_url)) in die Adressleiste Ihres Browsers eingeben, passiert Folgendes:

1. Der Browser wendet sich an den DNS-Server und findet die reale Adresse des Servers, auf dem die Website gespeichert ist (Sie schauen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anfrage-Nachricht an den Server und bittet darum, eine Kopie der Website an den Client zu senden (Sie fahren zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle weiteren Daten, die zwischen Client und Server ausgetauscht werden, werden über Ihre Internetverbindung mithilfe von TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients akzeptiert, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website in Form von kleinen Datenpaketen zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück nach Hause).
4. Der Browser setzt die kleinen Pakete zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neues glänzendes Zeug, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen eindeutigen Ort im Web dar. Sie ist jedoch nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System entwickelt. Dieses System verwendet spezielle Server, um eine Webadresse, die Sie in Ihren Browser eingeben (wie „mozilla.org“), mit der echten (IP-)Adresse der Website abzugleichen.

Websites können direkt über ihre IP-Adressen aufgerufen werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Rufen Sie das [DNS-Lookup-Tool von NsLookup.io](https://www.nslookup.io/website-to-ip-lookup/) auf, geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.
> 2. Kopieren Sie auf dem Ergebnisbildschirm die IP-Adresse (IPv4-Adresse) in Ihre Zwischenablage.
> 3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, wie MDN geladen wird, was beweist, dass die IP-Adresse darauf verweist.

## Pakete erklärt

Früher verwendeten wir den Begriff "Pakete", um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir damit?

Grundsätzlich werden Daten, die über das Web gesendet werden, in Tausende von kleinen Paketen aufgeteilt. Es gibt verschiedene Gründe, warum Daten in kleinen Paketen gesendet werden, die wichtigsten sind:

- Sie gehen manchmal verloren oder werden beschädigt. Wenn das passiert, ist es schneller und einfacher, kleine Pakete zu ersetzen, als ganze Dateien.
- Zudem können die Pakete über unterschiedliche Wege geleitet werden, was den Austausch schneller macht und vielen Nutzern gleichzeitig erlaubt, dieselbe Website herunterzuladen. Würde jede Website als ein einziges großes Stück gesendet, könnte nur ein Nutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und wenig nutzerfreundlich machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache mit Verben, um Aktionen wie Anfragen auszuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)). Die HTTP-[`GET`](/de/docs/Web/HTTP/Methods/GET)-Methode ist die, die üblicherweise für HTTP-Anfragen der oben beschriebenen Art verwendet wird. Zum Beispiel könnte eine Anfrage für die MDN-Homepage so aussehen:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Die vom Server gesendete Antwort könnte etwa so aussehen:

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

Die vollständige Antwort ist komplexer, aber wir haben den Großteil zur Verkürzung ausgelassen. Die Hauptbestandteile sind:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden — in diesem Fall HTTP/2 — gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war. `200` bedeutet Erfolg.
- `date`, `expires`, usw.
  - : [HTTP-Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass auch Anfragen Header enthalten können), welche zusätzliche Informationen bereitstellen und/oder deren Verhalten ändern.
- `<!doctype html>`, usw.
  - : Der Antwort-Textkörper, der in diesem Fall das HTML-Dokument der MDN-Homepage enthält.

> [!NOTE]
> Weitere Details zu HTTP finden Sie in der MDN-[HTTP-Referenz](/de/docs/Web/HTTP). [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview) ist ein guter Einstiegspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Anwendungen, aber nur einige davon werden Sie häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Standort verschoben, der in der Antwort bereitgestellt wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben wurden.
- `400`
  - : Der Server kann die Anfrage nicht bearbeiten. Dies geschieht in der Regel, wenn die Anfrage nicht in einem vom Server verstandenen Format vorliegt oder Fehler enthält.
- `403`
  - : Der Server gibt dem Client keinen Zugriff auf die angeforderte Ressource. Dies passiert meist, wenn der Server weiß, wer der Client ist, ihm jedoch keine Berechtigung zum Zugriff auf die angeforderte Seite erteilt hat.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status tritt häufig auf, wenn die URL falsch ist oder Inhalte gelöscht wurden, ohne eine Umleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies geschieht oft, wenn Server für Wartungsarbeiten offline sind, und ist in der Regel vorübergehend.

## Komponenten einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adressleiste eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte von eindeutigen Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie z. B. einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie auf eine URL wie die folgende umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptbestandteile einer URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass Dritte Ihre Daten während der Übertragung lesen können. In der modernen Web-Welt nutzen fast alle Server HTTPS, sodass der Browser dies für Sie annimmt und hinzufügt, wenn Sie es nicht explizit eingeben.
- `developer.mozilla.org`
  - : Der [**Domain-Name**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, welcher den obersten Standort des Servers repräsentiert, mit dem Sie verbunden sind. In diesem Fall entspricht die eingegebene Webadresse dem Domain-Namen, aber das ist nicht immer so — Sie könnten eine kompliziertere Webadresse eingeben. Beachten Sie, dass der `developer-`Teil eine **Subdomain** (eigenständiger Inhaltsbereich) der `mozilla.org`-Domain ist. Es gibt andere Subdomains auf der Mozilla-Site, die unterschiedliche Inhalte hosten, z. B. [support.mozilla.org](https://support.mozilla.org) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org).
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN behält alle US-amerikanischen englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL verweist.

    Wenn Ihr Browser standardmäßig für englische Inhalte konfiguriert ist, werden Sie auf diese URL umgeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser für eine andere Sprache, die MDN unterstützt, wie beispielsweise Französisch, konfiguriert ist, werden Sie auf eine andere URL umgeleitet, wie `https://developer.mozilla.org/fr/`. Das ist nicht bei jeder Website automatisch verfügbar; die Entwickler von MDN haben MDN so eingerichtet, damit Benutzer problemlos auf die von ihnen bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Weitere Details finden Sie unter [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL).

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Credit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
