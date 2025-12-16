---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine hochrangige Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um eine Webseite aufzurufen, und erklärt die Magie, die im Hintergrund abläuft, um den relevanten Code an Ihren Computer zu liefern, den der Browser dann zu etwas zusammensetzt, das Sie betrachten können.

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
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und seine Funktionsweise auf einer hohen Ebene.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>Grundlegende Syntax von HTTP.</li>
          <li>Häufige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte folgendermaßen aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung Anfrage zeigt vom Client zum Server, und ein Pfeil mit der Beschriftung Antworten zeigt vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte eines typischen Webbenutzers (zum Beispiel Ihr Computer, der mit Ihrem Wi-Fi verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren Webzugangsprogramme (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Seiten oder Apps speichern. Wenn ein Client eine Webseite aufrufen möchte, wird eine Kopie des Webseitencodes vom Server auf den Client-Computer heruntergeladen, um vom Browser gerendert und dem Benutzer angezeigt zu werden.

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet weitere Informationen zu Clients und Servern, einschließlich eines Quiz und einer Diskussion.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~0lq" scrimtitle="Clients and servers"></mdn-scrim-inline>

## Die anderen Teile des Werkzeugs

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie im Folgenden beschreiben.

Stellen wir uns zunächst vor, das Internet sei eine Straße. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, der wie ein Geschäft ist, aus dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto von einer Person, die über einen Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin und her zu bewegen, benötigen wir die folgenden Dinge:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollten. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie entlang der Straße reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser bei DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der der Server sich befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website liegt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: Das **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, damit Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie aus dem Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:
  - **Code**: Websites sind in erster Linie aus HTML, CSS und JavaScript aufgebaut — den verschiedenen Programmiersprachen, in denen Websites geschrieben werden, die der Browser interpretiert und zu einer Webseite zusammensetzt, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien zu einer Webseite zusammensetzt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert genau?

Wenn Sie eine Webadresse (die technisch gesehen Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, treten die folgenden Schritte auf:

1. Der Browser geht zum DNS-Server und findet die tatsächliche Adresse des Servers, auf dem die Website liegt.
2. Der Browser sendet eine HTTP-Anfrage-Nachricht an den Server und bittet darum, eine Kopie der Website an den Client zu senden. Diese Nachricht und alle anderen Daten, die zwischen Client und Server gesendet werden, werden über Ihre Internetverbindung mit TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als Serie von kleinen Stücken, die [Pakete](#pakete_erklärt) genannt werden, an den Browser zu senden.
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an.

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Es sind spezielle Nummern, die so aussehen: `192.0.2.172`.

Das nennt man eine {{Glossary("IP_Address", "IP-Adresse")}}, und sie repräsentiert einen einzigartigen Ort im Web. Allerdings ist es nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der tatsächlichen (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Suchwerkzeug verwenden, um die IP-Adresse einer Website zu finden.

Schauen wir uns nun die IP-Adresse von MDN an und beweisen, dass sie auf denselben Ort wie die Webadresse verweist:

1. Gehen Sie zum [NsLookup.io DNS-Suchwerkzeug](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie den Button.
2. Kopieren Sie auf dem Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Eingabe</kbd>/<kbd>Return</kbd>. Sie sollten sehen, wie MDN geladen wird, was beweist, dass die IP-Adresse darauf zeigt.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir damit?

Wenn Daten über das Web gesendet werden, werden sie in mehreren kleinen Stücken gesendet, die Pakete genannt werden. Jedes Paket enthält:

- Einen **Header**, der Details wie die Server- und Client-IP-Adresse, die Paketnummer, die Gesamtanzahl der Pakete in der Übertragung und Details der in der Übertragung verwendeten Protokolle enthält.
- Eine **Nutzlast**, die die tatsächlich im Paket gesendeten Daten enthält.

Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am bedeutendsten sind:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn dies passiert, ist es schneller und einfacher für den Client, die fehlenden Pakete anstelle einer gesamten Datei anzufordern.
- Die Pakete können auf unterschiedlichen Wegen geroutet werden, was die Übertragung so effizient wie möglich macht und die Möglichkeit verringert, das Netzwerk zu verlangsamen — besonders, wenn viele Benutzer gleichzeitig dieselbe Ressource anfordern. Die Pakete können außerhalb der Reihenfolge ankommen, aber der Client kann die Informationen in den Paket-Headern nutzen, um sicherzustellen, dass sie in der richtigen Reihenfolge zusammengesetzt werden.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen durchzuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode ist die, die normalerweise verwendet wird, um HTTP-Anfragen der oben beschriebenen Art zu stellen. Eine Anfrage für die MDN-Startseite könnte zum Beispiel so aussehen:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Die vom Server gesendete Antwort könnte in etwa so aussehen:

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

Die vollständige Antwort ist komplexer als diese, aber wir haben den Großteil zur Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen liefern und/oder ihr Verhalten modifizieren.
- `<!doctype html>`, etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Für mehr Details zu HTTP können Sie in der MDN [HTTP-Dokumentation](/de/docs/Web/HTTP) nachschlagen, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Anfangspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit speziellen Bedeutungen und Verwendungen, aber Sie werden nur einige davon häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben wurden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies passiert normalerweise, wenn der Server weiß, wer der Client ist, aber keine Berechtigung zur Anzeige der angeforderten Seite hat.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder Inhalte gelöscht wurden, ohne eine Umleitung einzurichten.
- `503`
  - : Die Anfrage kann wegen eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig der Fall, wenn Server zur Wartung offline sind, und es wird erwartet, dass es vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adressleiste des Browsers eingeben, Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie zum Beispiel einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Eingabe</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass bösartige Personen Ihre Daten lesen, während sie übertragen werden. Im modernen Web verwendet fast jeder Server HTTPS, sodass der Browser annimmt, dass Sie das verwenden, wenn Sie es nicht explizit angeben, und es für Sie hinzufügt.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den Top-Level-Standort des Servers repräsentiert, mit dem Sie sich verbinden. In diesem Fall ist die eingegebene Webadresse gleich dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der `developer`-Teil eine **Subdomain** (ein eigener Inhaltsbereich) der `mozilla.org`-Domain von Mozilla ist. Es gibt andere Subdomains auf der Website von Mozilla, die eigene Inhalte hosten — siehe [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/) zum Beispiel.
- `/en-US/`
  - : Der **Pfad** zu der Ressource auf dem Server, auf die Sie zugreifen. MDN hält alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Ihr Browser so eingestellt ist, dass er standardmäßig englische Inhalte bevorzugt, werden Sie zu dieser URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingestellt ist, dass er eine andere Sprache bevorzugt, die von MDN unterstützt wird, wie z. B. Französisch, werden Sie stattdessen zu einer anderen URL weitergeleitet, wie `https://developer.mozilla.org/fr/`. Dies ist nicht standardmäßig für jede Webseite verfügbar; die MDN-Entwickler haben MDN so eingerichtet, um Leuten den einfachen Zugang zu ihrer bevorzugten Sprache zu ermöglichen.

> [!NOTE]
> Es gibt noch viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für mehr Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Quellenangabe

Street photo: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
