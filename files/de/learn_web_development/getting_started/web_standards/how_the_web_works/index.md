---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine detaillierte Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um eine Webseite zu besuchen. Es erklärt die Magie, die im Hintergrund abläuft, um den relevanten Code an Ihren Computer zu liefern, damit der Browser daraus etwas zusammenstellen kann, das Sie sich ansehen können.

Diese Theorie ist kurzfristig nicht unbedingt notwendig, um Webcode zu schreiben, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rolle im Web.</li>
          <li>DNS und wie es auf hoher Ebene funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>Grundlegende HTTP-Syntax.</li>
          <li>Gängige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server repräsentieren. Ein Pfeil mit der Bezeichnung Anfrage geht vom Client zum Server, und ein Pfeil mit der Bezeichnung Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die typischen internetverbundenen Geräte eines Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbare webzugreifende Software (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client eine Webseite aufrufen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client heruntergeladen, um vom Browser gerendert und dem Nutzer angezeigt zu werden.

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Beteiligte, und wir werden sie im Folgenden beschreiben.

Stellen wir uns vor, das Internet ist eine Straße. Am einen Ende der Straße befindet sich der Client, das ist wie Ihr Haus. Am anderen Ende der Straße befindet sich der Server, das ist wie ein Geschäft, in dem Sie etwas kaufen möchten.

![Ein Schwarzweißfoto einer Person, die an einem Fußgängerüberweg eine Straße überquert](road.jpg)

Um Daten hin und her zu übertragen, benötigen wir folgende Dinge:

- **Ihre Internetverbindung**: Ermöglicht Ihnen das Senden und Empfangen von Daten im Internet. Es ist im Grunde die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollten. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, ins Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist es wie ein Auto oder ein Fahrrad (oder wie auch immer Sie die Straße entlang reisen mögen).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der der Server zu finden ist — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für mehr Informationen). Der Browser muss herausfinden, auf welchem Server die Website liegt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: Das **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander kommunizieren können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien fallen in zwei Hauptkategorien:

  - **Code**: Websites bestehen hauptsächlich aus HTML, CSS und JavaScript — den verschiedenen Programmiersprachen, in denen Websites geschrieben sind, die der Browser interpretiert und zu einer Webseite zusammenstellt, um sie einem Nutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Wie der Browser diese Dateien zu einer Webseite zusammenstellt, erfahren Sie später im Kurs in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert genau?

Wenn Sie eine Webadresse (die technisch gesehen Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, passieren die folgenden Schritte:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website liegt (Sie suchen die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anfragenachricht an den Server und fordert ihn auf, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen Client und Server gesendeten Daten werden über Ihre Internetverbindung mithilfe von TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet "Natürlich können Sie diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website an den Browser als eine Reihe von kleinen Stücken, die sogenannte [Datenpakete](#pakete_erklärt) sind, zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie nach Hause).
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neue glänzende Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Nummern, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und repräsentiert einen eindeutigen Standort im Web. Es ist jedoch nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie zum [NsLookup.io DNS Lookup Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.
> 2. Kopieren Sie auf dem Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
> 3. Öffnen Sie einen neuen Browser-Tab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, wie MDN geladen wird, was beweist, dass die IP-Adresse darauf zeigt.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir hiermit?

Im Grunde genommen werden Daten, die über das Web gesendet werden, in Tausenden von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, am bedeutendsten:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn dies geschieht, ist es schneller und einfacher, kleine Stücke zu ersetzen als ganze Dateien.
- Außerdem können die Pakete auf verschiedenen Wegen geleitet werden, was den Austausch schneller macht und es vielen verschiedenen Nutzern ermöglicht, gleichzeitig dieselbe Website herunterzuladen. Wenn jede Website als ein großes Stück gesendet würde, könnte nur ein Nutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient machen und nicht viel Spaß machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen auszuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode wird normalerweise verwendet, um HTTP-Anfragen des oben beschriebenen Typs zu stellen. Zum Beispiel könnte eine Anfrage für die MDN-Homepage so aussehen:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Die Antwort, die der Server sendet, könnte etwa so aussehen:

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

Die vollständige Antwort ist komplizierter als das, aber wir haben das meiste davon zur Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass auch Anfragen Header haben können), die zusätzliche Informationen liefern und/oder deren Verhalten ändern.
- `<!doctype html>`, etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Homepage enthält.

> [!NOTE]
> Für mehr Details zu HTTP siehe das MDN [HTTP-Referenzhandbuch](/de/docs/Web/HTTP), wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben trafen wir den `200`-Statuscode, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungszwecken, aber Sie werden nur einige wenige häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben ist. Dies wird zum Weiterleiten von Inhalten verwendet, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder wenn sie Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies passiert normalerweise, wenn der Server weiß, wer der Client ist, aber er keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne dass eine Weiterleitung eingerichtet wurde.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist üblich, wenn Server wegen Wartungsarbeiten offline sind, und es wird erwartet, dass es vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden die Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Zum Beispiel, wenn Sie einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass unerwünschte Personen Ihre Daten lesen, während sie transportiert werden. Im modernen Web verwendet praktisch jeder Server HTTPS, also wenn Sie es nicht explizit angeben, geht der Browser davon aus, dass Sie es verwenden, und fügt es für Sie hinzu.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den übergeordneten Standort des Servers repräsentiert, mit dem Sie sich verbinden. In diesem Fall ist die von Ihnen eingegebene Webadresse gleich dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (ein separater Inhaltsbereich) von Mozillas `mozilla.org`-Domain ist. Es gibt andere Subdomains auf Mozillas Seite, die separaten Inhalt hosten — siehe [support.mozilla.org](https://support.mozilla.org) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org) zum Beispiel.
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf den Sie zugreifen. MDN speichert alle seine US-amerikanischen englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL verweist.

    Wenn Ihr Browser so eingerichtet ist, dass er standardmäßig englische Inhalte bevorzugt, dann ist dies die URL, zu der Sie weitergeleitet werden, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingerichtet ist, dass er eine andere Sprache bevorzugt, die MDN unterstützt, wie Französisch, werden Sie stattdessen zu einer anderen URL weitergeleitet, z.B. `https://developer.mozilla.org/fr/`. Dies ist nicht automatisch für jede Website verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Menschen leicht auf ihre bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für mehr Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Bildnachweis

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
