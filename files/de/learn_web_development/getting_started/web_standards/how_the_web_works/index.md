---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine überblicksartige Beschreibung darüber, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren, und erklärt, welche magischen Abläufe im Hintergrund geschehen, um den relevanten Code an Ihren Computer zu liefern, damit der Browser daraus etwas Zusammenhängendes anzeigen kann.

Diese Theorie ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie davon profitieren, zu verstehen, was im Hintergrund geschieht.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

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
          <li>Clients und Server und deren Rollen im Web.</li>
          <li>DNS und seine Funktionsweise auf hoher Ebene.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>Grundlegende HTTP-Syntax.</li>
          <li>Häufige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, das zeigt, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung "Anfrage" geht vom Client zum Server, und ein Pfeil mit der Beschriftung "Antworten" geht vom Server zum Client.](simple-client-server.png)

- Clients sind die internetverbundenen Geräte typischer Webnutzer (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die darauf verfügbaren webzugreifenden Softwareprogramme (meistens ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf das Client-Gerät heruntergeladen, damit sie vom Browser gerendert und für den Nutzer angezeigt werden kann.

## Die anderen Teile der Werkzeugkiste

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen Sie sich vor, das Internet ist eine Straße. Am einen Ende der Straße ist der Client, der wie Ihr Zuhause ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weißes Foto einer Person, die einen Zebrastreifen überquert](road.jpg)

Um Daten hin und her zu senden, benötigen wir die folgenden Dinge:

- **Ihre Internetverbindung**: Erlaubt Ihnen, Daten im Internet zu senden und zu empfangen. Sie ist im Grunde wie die Straße zwischen Ihrem Zuhause und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmittel, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist das wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sonst die Straße entlangfahren).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihrem Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der der Server zu finden ist — bevor er die Website abrufen kann (siehe unten [DNS erklärt](#dns_erklärt) für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website liegt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, in der Clients und Server miteinander kommunizieren. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:

  - **Code**: Websites werden hauptsächlich aus HTML, CSS und JavaScript aufgebaut — den verschiedenen Programmiersprachen, in denen Websites geschrieben sind und die der Browser interpretiert und zu einer Webseite zusammensetzt, die einem Nutzer angezeigt wird.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die nicht der vom Browser interpretierte Code sind.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien zu einer Webseite zusammensetzt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert also genau?

Wenn Sie eine Webadresse (die technisch gesehen Teil einer [URL](#komponenten_einer_url) ist) in die Adresszeile Ihres Browsers eingeben, geschehen die folgenden Schritte:

1. Der Browser fragt den DNS-Server ab und findet die tatsächliche Adresse des Servers, auf dem die Website liegt (Sie schlagen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet darum, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung mit TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine „200 OK“-Nachricht, was bedeutet: „Natürlich können Sie sich diese Website ansehen! Hier ist sie“, und beginnt dann, die Dateien der Website als eine Reihe kleiner Häppchen, die [Datenpakete](#pakete_erklärt) genannt werden, an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück nach Hause).
4. Der Browser setzt die kleinen Häppchen zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neue glänzende Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adresszeile eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Nummern, die so aussehen: `192.0.2.172`.

Das wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen eindeutigen Ort im Web dar. Allerdings ist es nicht besonders einfach zu merken, oder? Aus diesem Grund wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine von Ihnen in Ihren Browser eingegebene Webadresse (wie "mozilla.org") mit der tatsächlichen (IP) Adresse der Website verknüpfen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

Schauen wir uns jetzt die IP-Adresse von MDN an und prüfen, ob sie auf denselben Ort wie die Webadresse zeigt:

1. Gehen Sie zum [NsLookup.io DNS Lookup Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.
2. Kopieren Sie auf dem Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
3. Öffnen Sie einen neuen Browser-Tab, fügen Sie die IP-Adresse in die Adresszeile ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf zeigt.

## Pakete erklärt

Zuvor verwendeten wir den Begriff „Pakete“, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir damit?

Grundsätzlich werden beim Datentransfer über das Web die Daten in Tausenden von kleinen Häppchen gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, vor allem:

- Sie gehen manchmal verloren oder sind beschädigt, und wenn das passiert, ist es schneller und einfacher, kleine Häppchen als ganze Dateien zu ersetzen.
- Zusätzlich können die Pakete auf verschiedenen Wegen geroutet werden, was den Austausch beschleunigt und es vielen verschiedenen Nutzern ermöglicht, dieselbe Website gleichzeitig herunterzuladen. Wenn jede Website als ein einzelnes großes Häppchen gesendet würde, könnte nur ein Nutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und nicht sehr unterhaltsam machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen auszuführen (siehe [HTTP-Request-Methoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-`GET`-Methode ist die, die normalerweise für HTTP-Anfragen des oben beschriebenen Typs verwendet wird. Eine Anfrage für die MDN-Startseite könnte zum Beispiel so aussehen:

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

Die vollständige Antwort ist komplexer als das, aber wir haben den größten Teil aus Gründen der Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die HTTP-Version, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires` usw.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen bereitstellen und/oder ihr Verhalten modifizieren.
- `<!doctype html>` usw.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Siehe das MDN [HTTP-Referenz](/de/docs/Web/HTTP) für viel mehr Details über HTTP, wenn Sie neugierig sind. [Eine Übersicht über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben haben wir den `200`-Statuscode getroffen, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden nur einige häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben wurden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies geschieht normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource geben. Dies geschieht normalerweise, wenn der Server weiß, wer der Client ist, er aber keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne eine Umleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies tritt häufig auf, wenn Server für Wartungszwecke offline sind, und es wird erwartet, dass dies vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adresszeile des Browsers eingeben, Teile von **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie zum Beispiel einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adresszeile eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass böse Menschen Ihre Daten lesen, während sie transportiert werden. Im modernen Web verwendet so ziemlich jeder Server HTTPS, sodass der Browser dies für Sie annimmt und hinzufügt, wenn Sie es nicht ausdrücklich angeben.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den obersten Standort des Servers darstellt, zu dem Sie eine Verbindung herstellen. In diesem Fall ist die Webadresse, die Sie eingegeben haben, gleich dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (eigener Inhaltsbereich) der Mozilla-Domain `mozilla.org` ist. Auf der Mozilla-Website gibt es weitere Subdomains, die eigene Inhalte hosten — sehen Sie sich zum Beispiel [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/) an.
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf den Sie zugreifen. MDN hält alle seine Inhalte in US-Englisch in einem Ordner namens `en-US`, und genau auf diesen verweist diese URL.

    Wenn Ihr Browser standardmäßig so eingestellt ist, dass englischsprachige Inhalte bevorzugt werden, dann werden Sie auf diese URL umgeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingestellt ist, dass eine andere Sprache bevorzugt wird, die MDN unterstützt, wie zum Beispiel Französisch, dann werden Sie zu einer anderen URL umgeleitet, wie `https://developer.mozilla.org/fr/`. Dies steht nicht jeder Website standardmäßig zur Verfügung; die MDN-Entwickler haben MDN so eingerichtet, um es den Menschen zu ermöglichen, leicht auf die von ihnen bevorzugte Sprache zuzugreifen.

> [!NOTE]
> Es gibt noch viele weitere Komponenten, die in URLs erscheinen können. Weitere Einzelheiten finden Sie unter [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL).

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Fotos

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
