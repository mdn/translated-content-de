---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 90e419a0ec9741f35bc564beb90e74210bc4c97a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine hochrangige Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren. Es erklärt die Magie, die hinter den Kulissen geschieht, um den relevanten Code an Ihren Computer zu liefern, damit der Browser ihn in etwas verwandeln kann, das Sie sich ansehen können.

Dieses theoretische Wissen ist kurzfristig nicht essentiell, um Webcode zu schreiben, aber schon bald werden Sie davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser tatsächlich Code in Webseiten rendern. Dies wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

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
          <li>DNS und wie es grundsätzlich funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Datenpaketen.</li>
          <li>Grundlagen der HTTP-Syntax.</li>
          <li>Gängige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte folgendermaßen aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung "Request" geht vom Client zum Server, ein Pfeil mit der Beschriftung "Response" geht vom Server zum Client](simple-client-server.png)

- Clients sind die typischen internetfähigen Geräte eines Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Mobiltelefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren Softwareanwendungen zum Zugriff auf das Web (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf die Client-Maschine heruntergeladen, vom Browser interpretiert und dem Benutzer angezeigt.

## Die anderen Teile des Werkzeugsatzes

Die oben beschriebenen Clients und Server erzählen nicht die ganze Geschichte. Es gibt viele weitere beteiligte Komponenten, die wir nachfolgend beschreiben.

Stellen wir uns vor, das Internet ist eine Straße. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße steht der Server, wie ein Geschäft, in dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto von einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin und her zu senden, benötigen wir Folgendes:

- **Ihre Internetverbindung**: Ermöglicht Ihnen das Senden und Empfangen von Daten im Internet. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet übertragen werden sollen. Das ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu fahren und Ihre Waren zu kaufen. In unserem Beispiel wäre das wie ein Auto oder ein Fahrrad (oder wie auch immer Sie die Straße entlang reisen).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, sucht der Browser im DNS nach der IP-Adresse der Website – der tatsächlichen Adresse, unter der sich der Server befindet – bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) weiter unten). Der Browser muss herausfinden, auf welchem Server die Website gehostet wird, damit er HTTP-Nachrichten an die richtige Stelle senden kann (siehe unten). Das ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: Das **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, die Clients und Server verwenden können, um miteinander zu kommunizieren. Das ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) weiter unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien lassen sich in zwei Haupttypen unterteilen:
  - **Code**: Websites werden hauptsächlich mit HTML, CSS und JavaScript erstellt – den verschiedenen Programmiersprachen, in denen Websites geschrieben sind, die der Browser interpretiert und zu einer Webseite zusammenfügt, die dem Benutzer angezeigt wird.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen – wie Bilder, Musik, Videos, Word-Dokumente und PDFs – die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien zu einer Webseite zusammenfügt, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Also, was passiert genau?

Wenn Sie eine Webadresse (die technisch gesehen Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, passiert Folgendes:

1. Der Browser kontaktiert den DNS-Server und findet die tatsächliche Adresse des Servers, auf dem die Website gehostet wird (Sie suchen die Adresse des Geschäfts nach).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen Client und Server gesendeten Daten werden über Ihre Internetverbindung mithilfe von TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, was bedeutet „Natürlich können Sie sich diese Website ansehen! Hier ist sie“, und beginnt dann, die Dateien der Website in Form von kleinen Paketen, den sogenannten [Datenpaketen](#pakete_erklärt), an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie nach Hause).
4. Der Browser fügt die kleinen Pakete zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause – neues glänzendes Zeug, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die netten, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Nummern, die so aussehen: `192.0.2.172`.

Dies wird eine {{Glossary("IP_Address", "IP-Adresse")}} genannt und stellt einen einzigartigen Ort im Web dar. Das ist jedoch nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, um die von Ihnen in den Browser eingegebene Webadresse (z. B. „mozilla.org“) mit der tatsächlichen (IP-)Adresse der Website zu verknüpfen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Abfragetool verwenden, um die IP-Adresse einer Website zu finden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie zum [NsLookup.io DNS-Abfragetool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.
> 2. Kopieren Sie im Ergebnisschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
> 3. Öffnen Sie einen neuen Browsertab, fügen Sie die IP-Adresse in die Adressleiste ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf verweist.

## Pakete erklärt

Früher verwendeten wir den Begriff „Pakete“, um das Format zu beschreiben, in dem Daten zwischen Client und Server übertragen werden. Was meinen wir damit?

Grundsätzlich werden Daten, die über das Web gesendet werden, in Tausende kleiner Stücke zerlegt. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden. Der wichtigste ist jedoch:

- Sie gehen manchmal verloren oder werden beschädigt, und wenn das passiert, ist es schneller und einfacher, kleine Stücke zu ersetzen als ganze Dateien.
- Zudem können die Pakete über verschiedene Wege geleitet werden, was den Austausch schneller macht und es ermöglicht, dass mehrere Nutzer gleichzeitig dieselbe Website herunterladen können. Wenn jede Website als ein einzelnes großes Stück gesendet würde, könnte nur ein Benutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und nicht gerade benutzerfreundlich machen würde.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Senden von Anfragen auszuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)). Die HTTP-`GET`-Methode wird normalerweise verwendet, um HTTP-Anfragen wie die oben beschriebene zu stellen. Ein Beispiel für eine Anfrage der MDN-Homepage könnte so aussehen:

```http
GET / HTTP/2

Host: https://developer.mozilla.org/en-US/
```

Die Antwort, die der Server sendet, könnte so aussehen:

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

Die vollständige Antwort ist komplexer als dies, aber wir haben den größten Teil der Antwort der Kürze halber weggelassen. Die Hauptbestandteile sind:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires`, usw.
  - : [HTTP-Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen ebenfalls Header haben können). Sie liefern Zusatzinformationen oder modifizieren das Verhalten der Antwort.
- `<!doctype html>`, usw.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Homepage enthält.

> [!NOTE]
> Siehe das MDN [HTTP-Referenzdokument](/de/docs/Web/HTTP) für wesentlich mehr Details zu HTTP, falls Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben sind wir dem Statuscode `200` begegnet, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen. Die gängigsten sind:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Ort verschoben, der in der Antwort angegeben wird. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Das passiert normalerweise, wenn die Anfrage in einem Format vorliegt, das der Server nicht versteht, oder wenn darin Fehler enthalten sind.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource geben. Das geschieht in der Regel, wenn der Server weiß, wer der Client ist, ihm aber die Berechtigung fehlt, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder Inhalte gelöscht wurden, ohne eine Weiterleitung einzurichten.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist üblich, wenn Server wegen Wartung offline sind, und wird voraussichtlich vorübergehend sein.

## Komponenten einer URL

Technisch gesehen bilden die Webadressen, die Sie in die Adressleiste Ihres Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Orte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Zum Beispiel, wenn Sie in einem neuen Tab Ihres Browsers `developer.mozilla.org` in die Adressleiste eingeben und die Eingabetaste (<kbd>Enter</kbd>/<kbd>Return</kbd>) drücken, werden Sie zu einer URL wie der folgenden weitergeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptbestandteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass bösartige Personen Ihre Daten während der Übertragung lesen. Auf dem modernen Web verwenden fast alle Server HTTPS. Wenn Sie es nicht explizit angeben, nimmt der Browser standardmäßig an, dass Sie HTTPS verwenden, und fügt es für Sie hinzu.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den obersten Ort des Servers darstellt, mit dem Sie sich verbinden. In diesem Fall entspricht die eingegebene Webadresse dem Domainnamen. Das ist jedoch nicht immer der Fall – Sie könnten eine kompliziertere Webadresse eingeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (einen separaten Inhaltsbereich) von Mozillas `mozilla.org`-Domain darstellt. Es gibt andere Subdomains auf Mozillas Website, die eigenständige Inhalte hosten – z. B. [support.mozilla.org](https://support.mozilla.org) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org).
- `/en-US/`

  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN speichert alle seine englischsprachigen Inhalte in einem Ordner namens `en-US`, worauf diese URL zeigt.

    Wenn Ihr Browser standardmäßig auf englische Inhalte eingestellt ist, werden Sie zu dieser URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser auf eine andere von MDN unterstützte Designsprache eingestellt ist, wie beispielsweise Französisch, werden Sie zu einer anderen URL weitergeleitet, z. B. `https://developer.mozilla.org/fr/`. Dies ist nicht bei jeder Website standardmäßig verfügbar; MDN wurde so eingerichtet, damit Benutzer leicht auf die bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs vorkommen können. Weitere Informationen finden Sie unter [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL).

## Siehe auch

- [Wie funktioniert das Internet?](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Quelle

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
