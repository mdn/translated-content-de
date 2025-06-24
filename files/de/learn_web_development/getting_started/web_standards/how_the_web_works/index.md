---
title: Wie das Internet funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Internet funktioniert_ bietet eine hochrangige Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren und erklärt die Magie, die hinter den Kulissen abläuft, um den relevanten Code auf Ihren Computer zu liefern, damit der Browser ihn in etwas zusammenfügen kann, das Sie sehen können.

Diese Theorie ist kurzfristig nicht unbedingt notwendig, um Webcode zu schreiben, aber schon bald werden Sie davon profitieren, zu verstehen, was im Hintergrund geschieht.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Das wird in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Internet.</li>
          <li>DNS und wie es auf einem hohen Niveau funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf einem grundlegenden Niveau.</li>
          <li>Gängige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm ihrer Interaktion könnte so aussehen:

![Zwei Kreise, die Klient und Server darstellen. Ein Pfeil mit der Bezeichnung Anfrage geht vom Klient zum Server, und ein Pfeil mit der Bezeichnung Antworten geht vom Server zum Klient](simple-client-server.png)

- Clients sind die internetverbundenen Geräte eines typischen Webnutzers (z. B. Ihr Computer, der mit Ihrem WLAN verbunden ist oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbare Web-Zugriffssoftware (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf die Clientmaschine heruntergeladen, damit sie vom Browser gerendert und dem Benutzer angezeigt werden kann.

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Im Moment stellen wir uns vor, dass das Internet eine Straße ist. Am einen Ende der Straße ist der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, der wie ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein Schwarzweißfoto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin und her zu schicken, benötigen wir folgende Dinge:

- **Ihre Internetverbindung**: Ermöglicht Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollten. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie auf der Straße reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der sich der Server befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklaert) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Das ist wie die Adresse des Geschäfts nachzuschlagen, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen. Das ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http_grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code**: Websites werden hauptsächlich aus HTML, CSS und JavaScript gebaut — die verschiedenen Programmiersprachen, in denen Websites geschrieben werden und die der Browser interpretiert und zu einer Webseite zusammensetzt, um sie einem Benutzer zu zeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können herausfinden, wie der Browser diese Dateien zu einer Webseite zusammenbaut, später im Kurs, in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert also genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#bestandteile_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, treten folgende Schritte auf:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie schauen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anfrage-Nachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung mit TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website an den Browser zu senden, als eine Serie von kleinen Teilen, die [Datenpakete](#pakete_erklaert) genannt werden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück zu Ihrem Haus).
4. Der Browser fügt die kleinen Teile zu einer kompletten Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — neue glänzende Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#bestandteile_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Es sind spezielle Nummern, die so aussehen: `192.0.2.172`.

Das wird eine {{Glossary("IP_Address", "IP-Adresse")}} genannt und stellt einen einzigartigen Standort im Web dar. Es ist jedoch nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

Lassen Sie uns jetzt die MDN-IP-Adresse nachschlagen und beweisen, dass sie auf denselben Ort wie die Webadresse zeigt:

1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.
2. Kopieren Sie auf dem Ergebnisschirm die IP-Adresse (die IPv4-Adresse) in Ihre System-Zwischenablage.
3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf zeigt.

## Pakete erklärt

Früher verwendeten wir den Begriff "Pakete", um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hiermit?

Grundsätzlich werden Daten, wenn sie über das Web gesendet werden, in tausenden von kleinen Teilen gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am bedeutendsten sind:

- Sie werden manchmal verloren oder beschädigt, und wenn dies geschieht, ist es schneller und einfacher, kleine Teile zu ersetzen als ganze Dateien.
- Darüber hinaus können die Pakete auf verschiedenen Wegen geleitet werden, was den Austausch schneller macht und es vielen verschiedenen Benutzern ermöglicht, dieselbe Website gleichzeitig herunterzuladen. Wenn jede Website in einem einzigen großen Stück gesendet würde, könnte nur ein Benutzer sie auf einmal herunterladen, was das Web sehr ineffizient machen und nicht besonders viel Spaß machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Anfordern von Ressourcen durchzuführen (siehe [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-`GET`-Methode ist diejenige, die normalerweise verwendet wird, um HTTP-Anfragen der oben beschriebenen Art zu machen. Zum Beispiel könnte eine Anfrage für die MDN-Startseite folgendermaßen aussehen:

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

Die vollständige Antwort ist komplexer als diese, aber wir haben den größten Teil davon aus Gründen der Kürze weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen liefern und/oder ihr Verhalten modifizieren.
- `<!doctype html>`, etc.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Homepage enthält.

> [!NOTE]
> Siehe das MDN [HTTP-Referenz](/de/docs/Web/HTTP) für viel mehr Details zu HTTP, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden nur einige häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort bereitgestellt wird. Dies wird verwendet, um Inhalte weiterzuleiten, wenn sie verschoben wurden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies geschieht normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server wird dem Client den Zugriff auf die angeforderte Ressource nicht gestatten. Dies geschieht normalerweise, wenn der Server weiß, wer der Client ist, aber er keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne eine Umleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig der Fall, wenn Server für Wartungsarbeiten offline sind, und es wird erwartet, dass es vorübergehend ist.

## Bestandteile einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte von eindeutigen Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Zum Beispiel werden Sie, wenn Sie in Ihrem Browser einen neuen Tab öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, zu einer URL wie der folgenden weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptbestandteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, das eine sichere Version von HTTP ist, die verhindert, dass böswillige Personen Ihre Daten lesen, während sie transportiert werden. Auf dem modernen Web verwenden fast alle Server HTTPS, also wenn Sie es nicht explizit angeben, nimmt der Browser an, dass dies das Protokoll ist, das Sie verwenden, und fügt es für Sie hinzu.
- `developer.mozilla.org`
  - : Der [**Domain-Name**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den primären Standort des Servers darstellt, mit dem Sie sich verbinden. In diesem Fall ist die eingegebene Webadresse gleich dem Domainname, aber das ist nicht immer der Fall — Sie könnten sich entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (ein separater Inhaltsbereich) der `mozilla.org`-Domain von Mozilla ist. Es gibt andere Subdomains auf der Site von Mozilla, die separate Inhalte hosten — siehe [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN hält alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL verweist.

    Wenn Ihr Browser so eingerichtet ist, dass er standardmäßig englische Inhalte bevorzugt, werden Sie beim Eingeben von `developer.mozilla.org` zu dieser URL weitergeleitet. Wenn Ihr Browser so eingerichtet ist, dass er eine andere Sprache bevorzugt, die von MDN unterstützt wird, wie Französisch, werden Sie stattdessen zu einer anderen URL weitergeleitet, z.B. `https://developer.mozilla.org/fr/`. Dies ist nicht standardmäßig für jede Website verfügbar; Die Entwickler von MDN haben die Website so eingerichtet, dass die Menschen leicht auf die von ihnen bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Siehe [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für weitere Details.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Bildnachweis

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
