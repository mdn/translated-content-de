---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine grundlegende Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren, und erklärt die Magie, die im Hintergrund abläuft, um den relevanten Code auf Ihren Computer zu liefern, damit der Browser etwas zusammenstellen kann, das Sie sich ansehen können.

Diese Theorie ist kurzfristig nicht entscheidend, um Webcode zu schreiben, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Das wird in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

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
          <li>Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf einfachem Niveau.</li>
          <li>Häufige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung "request" geht vom Client zum Server, und ein Pfeil mit der Beschriftung "responses" geht vom Server zum Client](simple-client-server.png)

- Clients sind die typischen internetfähigen Geräte eines Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilnetz verbunden ist) und die auf diesen Geräten verfügbaren Software zur Webnutzung (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client-Rechner heruntergeladen, um vom Browser gerendert und dem Benutzer angezeigt zu werden.

## Die anderen Werkzeuge im Werkzeugkasten

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Komponenten, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen Sie sich für den Moment vor, das Internet sei eine Straße. Am einen Ende der Straße ist der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weißes Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin- und zurückzuschicken, benötigen wir folgende Dinge:

- **Ihre Internetverbindung**: Ermöglicht Ihnen das Senden und Empfangen von Daten im Internet. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet übertragen werden sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie die Straße entlang reisen).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der der Server sich befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website gespeichert ist, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, in der Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:

  - **Code**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt — die verschiedenen Programmiersprachen, in denen Websites geschrieben sind und die der Browser interpretiert und zu einer Webseite zusammenfügt, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die nicht der Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien zu einer Webseite zusammenbaut, in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adresszeile Ihres Browsers eingeben, treten folgende Schritte auf:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website gespeichert ist (Sie schlagen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung mit TCP/IP gesendet.
3. Wenn der Server die Anforderung des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, was bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website in einer Reihe von kleinen Stücken, die als [Datenpakete](#pakete_erklärt) bezeichnet werden, an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren und Sie bringen sie nach Hause).
4. Der Browser fügt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause – neue glänzende Sachen, fantastisch!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die netten, einprägsamen Zeichenfolgen, die Sie in die Adresszeile eingeben, um Ihre Lieblingswebsites zu finden. Es sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen einzigartigen Ort im Web dar. Es ist jedoch nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine von Ihnen in den Browser eingegebene Webadresse (wie "mozilla.org") mit der tatsächlichen (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie zum [NsLookup.io DNS Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie den Button.
> 2. Kopieren Sie im Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
> 3. Öffnen Sie einen neuen Browser-Tab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf verweist.

## Pakete erklärt

Früher verwendeten wir den Begriff "Pakete", um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hier?

Im Grunde genommen werden Daten, die über das Web gesendet werden, in Tausenden von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am bedeutsamsten:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn das passiert, ist es schneller und einfacher, kleine Stücke statt ganzer Dateien zu ersetzen.
- Darüber hinaus können die Pakete auf verschiedenen Wegen geroutet werden, was den Austausch beschleunigt und es vielen verschiedenen Benutzern ermöglicht, dieselbe Website gleichzeitig herunterzuladen. Wenn jede Website als ein großes Chunk gesendet würde, könnte nur ein Benutzer es gleichzeitig herunterladen, was das Web sehr ineffizient und nicht sehr angenehm in der Nutzung machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen durchzuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-`GET`-Methode ist die, die normalerweise verwendet wird, um HTTP-Anfragen der oben beschriebenen Art zu stellen. Zum Beispiel könnte eine Anfrage für die MDN-Startseite so aussehen:

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

Die vollständige Antwort ist komplexer als dies, aber wir haben den größten Teil davon der Kürze halber weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` bedeutet Erfolg.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass auch Anfragen Header haben können), welche zusätzliche Informationen liefern und/oder das Verhalten ändern.
- `<!doctype html>`, etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Sehen Sie sich das MDN-[HTTP-Referenz](/de/docs/Web/HTTP) für deutlich mehr Details zu HTTP an, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Einstiegspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) getroffen, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden nur einige davon häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben wurden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder wenn sie Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies passiert normalerweise, wenn der Server weiß, wer der Client ist, aber er keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne eine Weiterleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig, wenn Server für Wartungsarbeiten offline sind und es wird erwartet, dass dies vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden die Webadressen, die Sie in die Browser-Adressleiste eingeben, Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Orte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie beispielsweise einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptkomponenten der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die dafür sorgt, dass keine bösen Menschen Ihre Daten lesen können, während sie transportiert werden. Im modernen Web verwenden praktisch alle Server HTTPS, sodass der Browser dies für Sie hinzufügt, wenn Sie es nicht explizit angeben.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den obersten Standort des Servers darstellt, mit dem Sie sich verbinden. In diesem Fall entspricht die eingegebene Webadresse dem Domainnamen, aber das ist nicht immer der Fall – Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (unabhängiger Inhaltsbereich) der Mozilla-Domain `mozilla.org` darstellt. Es gibt andere Subdomains auf der Mozilla-Website, die unabhängige Inhalte beherbergen - siehe z.B. [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf den Sie zugreifen. MDN hält alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Sie Ihren Browser so eingerichtet haben, dass standardmäßig englische Inhalte bevorzugt werden, dann werden Sie umgeleitet zu dieser URL, wenn Sie `developer.mozilla.org` eingeben. Wenn Sie Ihren Browser so eingerichtet haben, dass standardmäßig eine andere von MDN unterstützte Sprache bevorzugt wird, wie z.B. Französisch, werden Sie zu einer anderen URL wie `https://developer.mozilla.org/fr/` umgeleitet. Dies ist nicht standardmäßig für jede Website verfügbar; die MDN-Entwickler haben MDN so eingerichtet, damit Menschen leicht auf die von ihnen bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Sehen Sie sich [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details an.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Quellenangabe

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
