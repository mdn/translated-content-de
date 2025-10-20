---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 4d0079996a0621722f0a9f45f29ff60c27f1cf4c
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine grobe Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren, und erklärt die Magie, die im Hintergrund vorgeht, um den relevanten Code an Ihren Computer zu liefern, damit der Browser ihn zu etwas zusammensetzen kann, das Sie betrachten können.

Diese Theorie ist kurzfristig nicht essenziell für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Das wird in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

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
          <li>DNS und wie es auf hoher Ebene funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf grundlegender Ebene.</li>
          <li>Gängige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundkomponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Bezeichnung Anfrage geht vom Client zum Server und ein Pfeil mit der Bezeichnung Antworten geht vom Server zum Client.](simple-client-server.png)

- Clients sind die internetfähigen Geräte des typischen Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbare Web-Software (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client-Computer heruntergeladen, damit sie vom Browser gerendert und dem Benutzer angezeigt werden kann.

## Die anderen Teile des Werkzeugsatzes

Die oben beschriebenen Clients und Server erzählen nicht die ganze Geschichte. Es gibt viele andere beteiligte Teile, und wir beschreiben sie unten.

Stellen Sie sich zunächst vor, dass das Internet eine Straße ist. Am einen Ende der Straße ist der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein Schwarzweißfoto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Damit Daten hin- und hergelangen können, benötigen wir Folgendes:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet transportiert werden sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie auf der Straße reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihrem Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der sich der Server befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, damit Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP Grundlagen](#http_grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:
  - **Code**: Websites bestehen hauptsächlich aus HTML, CSS und JavaScript — den verschiedenen Programmiersprachen, in denen Websites geschrieben sind und die der Browser interpretiert und zu einer Webseite zusammensetzt, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können herausfinden, wie der Browser diese Dateien zu einer Webseite zusammensetzt, indem Sie den Kurs später in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) verfolgen.

## Was passiert also genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, erfolgen die folgenden Schritte:

1. Der Browser geht zum DNS-Server und findet die tatsächliche Adresse des Servers, auf dem die Website lebt.
2. Der Browser sendet eine HTTP-Anfrage-Nachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden. Diese Nachricht und alle anderen zwischen dem Client und dem Server gesendeten Daten werden über Ihre Internetverbindung unter Verwendung von TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, was bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe von kleinen Stücken, sogenannte [Pakete](#pakete_erklärt), an den Browser zu senden.
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an.

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Es sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen einzigartigen Ort im Web dar. Jedoch ist es nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der tatsächlichen (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

Lassen Sie uns jetzt die MDN-IP-Adresse nachschlagen und beweisen, dass sie auf denselben Ort wie die Webadresse verweist:

1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und klicken Sie auf die Schaltfläche.
2. Kopieren Sie auf dem Ergebnisse-Bildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adresszeile ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, wie MDN geladen wird, was beweist, dass die IP-Adresse darauf verweist.

## Pakete erklärt

Zuvor haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hier?

Wenn Daten über das Web gesendet werden, werden sie in mehreren kleinen Stücken, sogenannten Paketen, gesendet. Jedes Paket enthält:

- Einen **Header**, der Details wie die Server- und Client-IP-Adresse, die Paketnummer, die Gesamtanzahl der Pakete in der Übertragung und Details der in der Übertragung verwendeten Protokolle enthält.
- Einen **Nutzlast**, der die tatsächlichen Daten enthält, die im Paket gesendet werden.

Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am wichtigsten:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn dies geschieht, ist es schneller und einfacher für den Client, die fehlenden Pakete anzufordern anstatt eine gesamte Datei.
- Die Pakete können über unterschiedliche Wege geleitet werden, um die Übertragung so effizient wie möglich zu gestalten und die Möglichkeit zu verringern, das Netzwerk zu verlangsamen — insbesondere, wenn viele Benutzer gleichzeitig die gleiche Ressource anfordern. Die Pakete können außerhalb der Reihenfolge ankommen, aber der Client kann die Informationen in den Paket-Headern verwenden, um sicherzustellen, dass sie in der richtigen Reihenfolge zusammengesetzt werden.

## HTTP Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen auszuführen (siehe [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-`GET`-Methode wird normalerweise verwendet, um HTTP-Anfragen der oben beschriebenen Art zu stellen. Beispielweise könnte eine Anfrage für die MDN-Startseite so aussehen:

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
ETag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (the 45227 bytes of the requested web page HTML)
```

Die vollständige Antwort ist komplexer als diese, aber wir haben den größten Teil weggelassen, um die Sache zu vereinfachen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war. `200` bedeutet Erfolg.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass auch Anfragen Header haben können), die zusätzliche Informationen bereitstellen und/oder ihr Verhalten ändern.
- `<!doctype html>`, etc.
  - : Der Antworttext, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Weitere Details zu HTTP finden Sie im MDN-[HTTP-Referenzteil](/de/docs/Web/HTTP). [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben haben wir den `200`- [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden nur einige häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Standort verschoben, der in der Antwort angegeben ist. Dies wird verwendet, um Inhalte weiterzuleiten, wenn sie verschoben wurden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies passiert in der Regel, wenn der Server weiß, wer der Client ist, aber der Client keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder Inhalte gelöscht wurden, ohne eine Weiterleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig der Fall, wenn Server wegen Wartungsarbeiten offline sind, und wird als vorübergehend erwartet.

## Komponenten einer URL

Technisch gesehen sind Webadressen, die Sie in die Adressleiste des Browsers eingeben, Teile von **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte von einzigartigen Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie beispielsweise einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie auf eine URL wie die folgende weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, das eine sichere Version von HTTP ist und verhindert, dass böswillige Personen Ihre Daten lesen, während sie übertragen werden. Im modernen Web verwenden fast alle Server HTTPS, also nimmt der Browser an, dass dies das ist, was Sie verwenden möchten, und fügt es für Sie hinzu.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den obersten Ort des Servers repräsentiert, mit dem Sie sich verbinden. In diesem Fall entspricht die Webadresse, die Sie eingegeben haben, dem Domainnamen, aber das ist nicht immer der Fall — Sie könnten eine komplexere Webadresse wählen. Beachten Sie, dass der Teil `developer` eine **Subdomain** (eigenständiger Inhaltsbereich) der Mozilla-`mozilla.org`-Domain ist. Es gibt andere Subdomains auf Mozillas Seite, die eigenständige Inhalte hosten — siehe z. B. [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`
  - : Der **Pfad** zur Ressource auf dem Server, auf den Sie zugreifen. MDN hält alle seine US-englischen Inhalte in einem Verzeichnis namens `en-US`, und das ist, worauf diese URL zeigt.

    Wenn Ihr Browser so eingestellt ist, dass er standardmäßig englische Inhalte bevorzugt, werden Sie zu dieser URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingerichtet ist, dass er eine andere Sprache bevorzugt, die MDN unterstützt, wie z.B. Französisch, werden Sie stattdessen zu einer anderen URL weitergeleitet, z.B. `https://developer.mozilla.org/fr/`. Dies ist nicht bei jeder Website standardmäßig verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Menschen leicht auf die Sprache zugreifen können, die sie bevorzugen.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Sehen Sie [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details.

## Siehe auch

- [Wie funktioniert das Internet?](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Quellenangabe

Straßenbild: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
