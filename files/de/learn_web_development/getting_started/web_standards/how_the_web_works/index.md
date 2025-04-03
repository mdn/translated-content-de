---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine allgemeine Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren, und erklärt, was hinter den Kulissen geschieht, um den relevanten Code an Ihren Computer zu liefern, damit der Browser ihn in etwas umwandeln kann, das Sie ansehen können.

Diese Theorie ist kurzfristig nicht entscheidend, um Webcode zu schreiben, aber mit der Zeit werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser Code in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf höherer Ebene funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf grundlegender Ebene.</li>
          <li>Gängige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung "Anfrage" geht vom Client zum Server und ein Pfeil mit der Beschriftung "Antworten" geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetverbundenen Geräte typischer Webnutzer (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren Webzugangssoftware (meist ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Sites oder Apps speichern. Wenn ein Client eine Webseite aufrufen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client heruntergeladen, damit er vom Browser gerendert und dem Benutzer angezeigt werden kann.

## Die anderen Teile des Werkzeugs

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen Sie sich für den Moment vor, dass das Internet eine Straße ist. Am einen Ende der Straße steht der Client, der wie Ihr Haus ist. Am anderen Ende der Straße steht der Server, der wie ein Geschäft ist, bei dem Sie etwas kaufen möchten.

![Ein schwarz-weiß Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin- und herfließen zu lassen, benötigen wir die folgenden Dinge:

- **Ihre Internetverbindung**: Ermöglicht Ihnen das Senden und Empfangen von Daten im Internet. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet transportiert werden sollen. Das ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist das wie ein Auto oder ein Fahrrad (oder wie auch immer Sie entlang der Straße reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden - die tatsächliche Adresse, an der sich der Server befindet - bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für mehr Informationen). Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Das ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: Das **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Das ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code**: Websites bestehen hauptsächlich aus HTML, CSS und JavaScript - die verschiedenen Programmiersprachen, in denen Websites geschrieben sind, die der Browser interpretiert und zu einer Webseite zusammensetzt, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen - wie Bilder, Musik, Videos, Word-Dokumente und PDFs -, die keine Codes sind, die der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien zu einer Webseite zusammenstellt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, erfolgt Folgendes:

1. Der Browser geht zum DNS-Server und findet die reale Adresse des Servers, auf dem die Website lebt (Sie suchen die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anfrage an den Server, in der er darum bittet, eine Kopie der Website an den Client zu senden (Sie gehen ins Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen dem Client und dem Server gesendeten Daten werden über Ihre Internetverbindung unter Verwendung von TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, was bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe kleiner Stücke, genannt [Datenpakete](#pakete_erklärt), an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie nach Hause).
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bekommen die Waren nach Hause - neue glänzende Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die netten, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies nennt man eine {{Glossary("IP_Address", "IP-Adresse")}}, und sie stellt einen einzigartigen Ort im Web dar. Allerdings ist sie nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der tatsächlichen (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Taste.
> 2. Kopieren Sie auf dem Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in Ihre Zwischenablage.
> 3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf zeigt.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir hiermit?

Im Grunde genommen werden Daten, die über das Web gesendet werden, in Tausenden kleiner Stücke gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, am bedeutendsten ist jedoch:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn dies passiert, ist es schneller und einfacher, kleine Teile zu ersetzen als ganze Dateien.
- Zusätzlich können die Pakete über verschiedene Pfade geleitet werden, was den Austausch schneller macht und es ermöglicht, dass viele verschiedene Nutzer gleichzeitig dieselbe Website herunterladen können. Wenn jede Website als ein einziges großes Stück gesendet würde, könnte nur ein Nutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und nicht besonders benutzerfreundlich machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache aus Verben, um Aktionen wie das Stellen von Anfragen auszuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-Methode [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) wird in der Regel verwendet, um HTTP-Anfragen des oben beschriebenen Typs zu stellen. Eine Anfrage für die MDN-Homepage könnte so aussehen:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Die vom Server gesendete Antwort könnte so aussehen:

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

Die vollständige Antwort ist komplexer als diese, aber wir haben die meisten Teile der Kürze halber weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die HTTP-Version, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` bedeutet Erfolg.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen bereitstellen und/oder ihr Verhalten modifizieren.
- `<!doctype html>`, etc.
  - : Der Antwortinhalt, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Siehe das MDN [HTTP-Referenz](/de/docs/Web/HTTP) für mehr Details zu HTTP, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Startpunkt.

### Weitere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der angibt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden normalerweise nur ein paar häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies geschieht in der Regel, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server gewährt dem Client keinen Zugang zur angeforderten Ressource. Dies geschieht in der Regel, wenn der Server weiß, wer der Client ist, aber dieser keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne eine Weiterleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Serverproblems nicht bearbeitet werden. Dies ist üblich, wenn Server wegen Wartungsarbeiten offline sind, und es wird erwartet, dass dies vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie zum Beispiel einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptbestandteile der URL sind:

- `https`
  - : Das verwendete **Protokoll**, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, das eine sichere Version von HTTP ist, die verhindert, dass böse Menschen Ihre Daten lesen, während sie transportiert werden. Im modernen Web verwenden fast alle Server HTTPS, sodass der Browser annimmt, dass Sie dies verwenden, und es für Sie hinzufügt, wenn Sie es nicht explizit angeben.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den Hauptstandort des Servers darstellt, mit dem Sie sich verbinden. In diesem Fall entspricht die Webadresse, die Sie eingegeben haben, dem Domainnamen, aber das ist nicht immer der Fall - Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (unterschiedlicher Inhaltsbereich) der Mozilla-Domain `mozilla.org` ist. Es gibt weitere Subdomains auf Mozilla's Seite, die unterschiedlichen Inhalt hosten - sehen Sie zum Beispiel [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN speichert alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Ihr Browser standardmäßig auf englische Inhalte eingestellt ist, werden Sie auf diese URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser standardmäßig auf eine andere von MDN unterstützte Sprache eingestellt ist, zum Beispiel Französisch, werden Sie stattdessen auf eine andere URL, wie `https://developer.mozilla.org/fr/`, weitergeleitet. Dies ist nicht standardmäßig für jede Website verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Benutzer leicht auf die von ihnen bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt noch viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Bildnachweis

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
