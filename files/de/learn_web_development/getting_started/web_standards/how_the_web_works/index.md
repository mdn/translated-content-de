---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine grundlegende Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um eine Webseite aufzurufen. Es erklärt die Magie, die im Hintergrund abläuft, um den relevanten Code an Ihren Computer zu liefern, damit der Browser daraus etwas machen kann, das Sie sich ansehen können.

Diese Theorie ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

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
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf hohem Niveau funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf grundlegender Ebene.</li>
          <li>Gängige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung Anfrage geht vom Client zum Server, und ein Pfeil mit der Beschriftung Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die typischen internetverbundenen Geräte eines Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren webbasierten Software (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client heruntergeladen, um vom Browser gerendert und dem Benutzer angezeigt zu werden.

## Die anderen Teile der Werkzeugkiste

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Für den Moment stellen wir uns vor, dass das Internet eine Straße ist. Am einen Ende der Straße ist der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, aus dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin und her zu übertragen, benötigen wir folgende Dinge:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gelangen und Ihre Waren zu kaufen. In unserem Beispiel wäre das wie ein Auto oder ein Fahrrad (oder wie auch immer Sie die Straße entlang reisen).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Webseiten. Wenn Sie eine Webadresse in Ihrem Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der sich der Server befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für mehr Informationen). Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie die Adresse des Geschäfts nachzuschlagen, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendung{{Glossary("Protocol", "sprotokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die den verschiedenen Waren entsprechen, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt — den verschiedenen Programmiersprachen, in denen Webseiten geschrieben werden, die der Browser interpretiert und in eine Webseite zusammensetzt, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien in eine Webseite zusammensetzt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Also, was passiert genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, treten folgende Schritte auf:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie suchen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung unter Verwendung von TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, was bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website in Form einer Reihe kleiner Pakete, genannt [Datenpakete](#pakete_erklärt), an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren und Sie bringen sie nach Hause).
4. Der Browser setzt die kleinen Pakete in eine vollständige Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neue tolle Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen eindeutigen Ort im Web dar. Es ist jedoch nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Taste.
> 2. Kopieren Sie auf dem Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in Ihre Zwischenablage.
> 3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten beobachten, wie MDN geladen wird, was beweist, dass die IP-Adresse darauf verweist.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hier?

Grundsätzlich werden Daten, wenn sie über das Web gesendet werden, in Tausenden von kleinen Paketen gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am signifikantesten:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn dies passiert, ist es schneller und einfacher, kleine Pakete zu ersetzen als ganze Dateien.
- Darüber hinaus können die Pakete über verschiedene Wege geleitet werden, was den Austausch beschleunigt und es vielen Benutzern gleichzeitig ermöglicht, dieselbe Website herunterzuladen. Wenn jede Website als ein einziger großer Block gesendet würde, könnte nur ein Benutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und wenig benutzerfreundlich machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen auszuführen (siehe [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode ist die, die normalerweise verwendet wird, um HTTP-Anfragen der oben beschriebenen Art zu machen. Zum Beispiel könnte eine Anfrage für die MDN-Startseite so aussehen:

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

Die vollständige Antwort ist komplexer als dies, aber wir haben das meiste der Kürze halber weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` deutet auf Erfolg hin.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen liefern und/oder ihr Verhalten modifizieren.
- `<!doctype html>`, etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Homepage enthält.

> [!NOTE]
> Sehen Sie sich das [HTTP-Referenz](/de/docs/Web/HTTP) von MDN an, wenn Sie neugierig sind, für viele weitere Details zu HTTP. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) gesehen, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber nur einige werden Sie häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben ist. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder wenn sie Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource geben. Dies passiert normalerweise, wenn der Server weiß, wer der Client ist, aber er keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht werden, ohne eine Umleitung einzurichten.
- `503`
  - : Die Anfrage kann wegen eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig der Fall, wenn Server für Wartungsarbeiten offline sind, und es wird erwartet, dass dies vorübergehend ist.

## Komponenten einer URL

Technisch gesehen, bilden Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Orte von einzigartigen Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Zum Beispiel, wenn Sie einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptbestandteile der URL sind:

- `https`
  - : Das **Protokoll**, das für die Übertragung der Anfrage verwendet wird. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass schlechte Leute Ihre Daten lesen, während sie transportiert werden. Im modernen Web verwenden so gut wie alle Server HTTPS, sodass der Browser dies automatisch hinzufügt, wenn Sie es nicht explizit eingeben.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den wichtigsten Ort des Servers repräsentiert, mit dem Sie sich verbinden. In diesem Fall ist die von Ihnen eingegebene Webadresse gleich dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten eine kompliziertere Webadresse eingeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (unabhängiger Inhaltsbereich) der `mozilla.org`-Domain von Mozilla ist. Es gibt andere Subdomains auf der Mozilla-Website, die unabhängige Inhalte hosten — siehe zum Beispiel [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`

  - : Der **Pfad** zu der Ressource auf dem Server, auf die Sie zugreifen. MDN hält alle seine englischen (US) Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Ihr Browser so eingerichtet ist, dass er standardmäßig englische Inhalte bevorzugt, werden Sie zu dieser URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingerichtet ist, dass er eine andere Sprache bevorzugt, die von MDN unterstützt wird, wie Französisch, werden Sie stattdessen zu einer anderen URL wie `https://developer.mozilla.org/fr/` weitergeleitet. Dies ist nicht standardmäßig für jede Website verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Menschen leicht auf die von ihnen bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Kredit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
