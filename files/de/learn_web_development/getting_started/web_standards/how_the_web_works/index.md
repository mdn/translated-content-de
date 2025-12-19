---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 5644a4bb7b85aa178e215e21fa56969ae7ef773b
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ liefert eine allgemeine Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren. Es erklärt die Zauberei, die hinter den Kulissen stattfindet, um den relevanten Code an Ihren Computer zu liefern, den der Browser zu etwas zusammensetzt, das Sie betrachten können.

Diese Theorie ist kurzfristig nicht notwendig, um Webcode zu schreiben, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser Code tatsächlich in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computer-Betriebssystems, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es funktioniert, auf hoher Ebene.</li>
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

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Aufschrift Anfrage geht vom Client zum Server, und ein Pfeil mit der Aufschrift Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die typischen internetfähigen Geräte eines Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren webzugreifenden Software (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Seiten oder Apps speichern. Wenn ein Client eine Webseite aufrufen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client-PC heruntergeladen, wo sie vom Browser gerendert und dem Benutzer angezeigt wird.

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet weitere Informationen zu Clients und Servern, einschließlich eines Quiz und einer Diskussion.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~0lq" scrimtitle="Clients and servers"></mdn-scrim-inline>

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen Sie sich jetzt vor, dass das Internet eine Straße ist. Am einen Ende der Straße befindet sich der Client, was wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, was wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weiß Foto von einer Person, die bei einem Zebrastreifen eine Straße überquert](road.jpg)

Damit Daten hin und her gelangen, benötigen wir folgende Dinge:

- **Ihre Internetverbindung**: Ermöglicht Ihnen das Senden und Empfangen von Daten im Internet. Es ist im Prinzip wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die festlegen, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, in das Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich auf der Straße fortbewegen).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Webseiten. Wenn Sie eine Webadresse in Ihren Browser eingeben, sucht der Browser im DNS nach der IP-Adresse der Webseite — der tatsächlichen Adresse, an der sich der Server befindet — bevor er die Webseite abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für mehr Informationen). Der Browser muss herausfinden, auf welchem Server die Webseite liegt, damit er HTTP-Nachrichten an die richtige Stelle senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP Grundlagen](#http_grundlagen) unten.
- **Dateien**: Eine Webseite besteht aus vielen verschiedenen Dateien, die wie die unterschiedlichen Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:
  - **Code**: Webseiten bestehen hauptsächlich aus HTML, CSS und JavaScript — den verschiedenen Programmiersprachen, in denen Webseiten geschrieben sind, die der Browser interpretiert und zu einer Webseite zusammenfügt, die einem Benutzer angezeigt wird.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Webseite erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs mehr darüber erfahren, wie der Browser diese Dateien zu einer Webseite zusammensetzt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, werden folgende Schritte durchlaufen:

1. Der Browser geht zum DNS-Server und findet die reale Adresse des Servers, auf dem die Webseite liegt.
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Webseite an den Client zu senden. Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung mithilfe von TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server eine "200 OK" Nachricht an den Client, was bedeutet "Natürlich können Sie diese Webseite ansehen! Hier ist sie", und beginnt dann, die Dateien der Webseite als eine Reihe von kleinen Stücken, sogenannten [Paketen](#pakete_erklärt), an den Browser zu senden.
4. Der Browser fügt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an.

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebseiten zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Das wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen einzigartigen Ort im Web dar. Das ist jedoch nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie `mozilla.org`), der realen (IP-)Adresse der Webseite zuordnen. Große Webseiten sind häufig auf mehreren Servern verfügbar, damit sie effizient für verschiedene Benutzer weltweit geladen werden können. Daher kann die IP-Adresse je nach Standort variieren.

Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adressen einer Webseite zu finden. Gehen Sie zum Beispiel zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie den Button.

## Pakete erklärt

Früher verwendeten wir den Begriff "Pakete", um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir damit?

Wenn Daten über das Web gesendet werden, geschieht dies in mehreren kleinen Stücken, die als Pakete bezeichnet werden. Jedes Paket enthält:

- Einen **Header**, der Details wie die IP-Adresse des Servers und des Clients, die Paketnummer, die Gesamtzahl der Pakete in der Übertragung und Details zu den in der Übertragung verwendeten Protokollen enthält.
- Eine **Nutzlast**, die die tatsächlichen Daten enthält, die im Paket gesendet werden.

Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, am bedeutendsten:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn das passiert, ist es schneller und einfacher für den Client, die fehlenden Pakete anstelle einer gesamten Datei anzufordern.
- Die Pakete können entlang unterschiedlicher Pfade geleitet werden, wodurch die Übertragung so effizient wie möglich wird und die Möglichkeit verringert wird, das Netzwerk zu verlangsamen — besonders dann, wenn viele Benutzer gleichzeitig die gleiche Ressource anfordern. Die Pakete können in einer falschen Reihenfolge ankommen, aber der Client kann die Informationen in den Paket-Headern verwenden, um sicherzustellen, dass sie in der richtigen Reihenfolge zusammengesetzt werden.

## HTTP Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie Anfragen zu erstellen (siehe [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode wird normalerweise verwendet, um HTTP-Anfragen der oben beschriebenen Art zu erstellen. Eine Anfrage für die Startseite von MDN könnte zum Beispiel so aussehen:

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
ETag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (the 45227 bytes of the requested web page HTML)
```

Die vollständige Antwort ist komplexer als diese, aber wir haben den größten Teil aus Gründen der Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` bedeutet Erfolg.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (Anfragen können auch Header haben), die zusätzliche Informationen bereitstellen und/oder ihr Verhalten modifizieren.
- `<!doctype html>`, etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Siehe die MDN [HTTP-Referenz](/de/docs/Web/HTTP) für viele weitere Details zu HTTP, wenn Sie neugierig sind. Ein guter Ausgangspunkt ist der [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview).

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der angibt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele spezifische HTTP-Statuscodes mit unterschiedlichen Bedeutungen und Einsatzmöglichkeiten, aber Sie werden nur ein paar davon häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort bereitgestellt wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem vom Server verstandenen Format vorliegt oder Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies passiert normalerweise, wenn der Server weiß, wer der Client ist, aber dieser keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird oft zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne dass eine Umleitung eingerichtet wurde.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist üblich, wenn Server für Wartung offline sind und sollte vorübergehend sein.

## Komponenten einer URL

Technisch gesehen sind Webadressen, die Sie in die Browsersuchleiste eingeben, Teil von **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie beispielsweise einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das verwendete **Protokoll**, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass böse Menschen Ihre Daten während des Transports lesen. Im modernen Web verwendet praktisch jeder Server HTTPS. Wenn Sie es nicht explizit angeben, nimmt der Browser an, dass Sie es verwenden, und fügt es für Sie hinzu.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den primären Standort des Servers angibt, mit dem Sie sich verbinden. In diesem Fall ist die eingegebene Webadresse gleich dem Domainnamen, aber das muss nicht immer so sein — Sie könnten eine komplexere Webadresse eingeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (unterschiedlicher Inhaltsbereich) der Mozilla-Domain `mozilla.org` ist. Es gibt andere Subdomains auf der Mozilla-Seite, die unterschiedliche Inhalte hosten — siehe [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/) als Beispiele.
- `/en-US/`
  - : Der **Pfad** zur Ressource auf dem Server, die Sie aufrufen. MDN speichert alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Ihr Browser standardmäßig so eingestellt ist, dass er englische Inhalte bevorzugt, werden Sie auf diese URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Sie Ihren Browser so eingestellt haben, dass er eine andere von MDN unterstützte Sprache bevorzugt, wie Französisch, werden Sie auf eine andere URL umgeleitet, z.B. `https://developer.mozilla.org/fr/`. Dies ist nicht standardmäßig für jede Webseite verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Menschen einfach auf die von ihnen bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Kredit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
