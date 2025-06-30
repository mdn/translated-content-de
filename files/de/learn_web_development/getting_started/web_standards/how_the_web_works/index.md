---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: f083453e50d27ada0d7aafcc6785883226fc08bc
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine hochrangige Beschreibung dessen, was passiert, wenn Sie mit einem Webbrowser zu einer Webseite navigieren, und erklärt die Magie, die im Hintergrund stattfindet, um den relevanten Code auf Ihren Computer zu liefern, damit der Browser ihn in etwas zusammensetzen kann, das Sie betrachten können.

Diese Theorie ist kurzfristig nicht unbedingt notwendig, um Webcode zu schreiben, aber schon bald werden Sie davon profitieren, zu verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser Code zu Webseiten rendern. Das wird in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) behandelt.

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
          <li>Clients und Server und deren Rollen im Web.</li>
          <li>DNS und wie es auf einem hohen Niveau funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>HTTP-Syntax auf einem grundlegenden Niveau.</li>
          <li>Häufige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein mit "Request" beschrifteter Pfeil geht vom Client zum Server und ein mit "Responses" beschrifteter Pfeil geht vom Server zum Client.](simple-client-server.png)

- Clients sind die internetverbundenen Geräte des typischen Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Handy, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren webbasierten Softwareanwendungen (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client auf eine Webseite zugreifen möchte, wird eine Kopie des Webseiten-Codes vom Server auf die Client-Maschine heruntergeladen, um vom Browser gerendert und dem Benutzer angezeigt zu werden.

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen wir uns für den Moment vor, das Internet sei eine Straße. Am einen Ende der Straße steht der Client, der wie Ihr Haus ist. Am anderen Ende der Straße steht der Server, der wie ein Geschäft ist, aus dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Um Daten hin und her zu übertragen, benötigen wir Folgendes:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist gewissermaßen wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder jede andere Möglichkeit, wie Sie die Straße entlang reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, sieht der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der sich der Server befindet —, bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist so, als würde man die Adresse des Geschäfts nachschlagen, bevor man es besucht.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie aus dem Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:
  - **Code**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt — die verschiedenen Programmiersprachen, in denen Websites geschrieben sind und die der Browser interpretiert und in eine Webseite zusammensetzt, um sie einem Benutzer anzuzeigen.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die nicht der Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Sie können später im Kurs herausfinden, wie der Browser diese Dateien in eine Webseite zusammensetzt, in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was genau passiert dabei?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, treten die folgenden Schritte ein:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie suchen die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server ausgetauscht werden, werden über Ihre Internetverbindung mithilfe von TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet: "Natürlich können Sie diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website an den Browser als eine Reihe kleiner Stücke, sogenannte [Datenpakete](#pakete_erklärt), zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück in Ihr Haus).
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (Sie bringen die Waren nach Hause — tolle neue Sachen, großartig!).

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebseiten zu finden. Es sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen eindeutigen Speicherort im Web dar. Es ist jedoch nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP)-Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adresse einer Website zu finden.

Schauen wir uns jetzt die IP-Adresse von MDN an und beweisen, dass sie auf denselben Ort wie die Webadresse zeigt:

1. Gehen Sie zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein, und drücken Sie die Schaltfläche.
2. Kopieren Sie im Ergebnisbildschirm die IP-Adresse (die IPv4-Adresse) in die Zwischenablage Ihres Systems.
3. Öffnen Sie einen neuen Browser-Tab, fügen Sie die IP-Adresse in die Adressleiste ein, und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten sehen, dass MDN geladen wird, was beweist, dass die IP-Adresse darauf zeigt.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir damit?

Grundsätzlich wird, wenn Daten über das Web gesendet werden, dies in Tausenden von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, am bedeutendsten jedoch:

- Sie gehen manchmal verloren oder werden beschädigt und wenn dies passiert, ist es schneller und einfacher, kleine Stücke zu ersetzen als ganze Dateien.
- Zusätzlich können die Pakete auf verschiedenen Wegen geleitet werden, was den Austausch schneller macht und es vielen verschiedenen Nutzern ermöglicht, gleichzeitig dieselbe Website herunterzuladen. Wenn jede Website als ein großes Stück gesendet würde, könnte sie nur ein Benutzer auf einmal herunterladen, was das Web sehr ineffizient machen und nicht viel Spaß machen würde zu benutzen.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen durchzuführen (siehe [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP-[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode ist die, die normalerweise verwendet wird, um HTTP-Anfragen des oben beschriebenen Typs zu stellen. Zum Beispiel könnte eine Anfrage für die MDN-Startseite so aussehen:

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
etag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (the 45227 bytes of the requested web page HTML)
```

Die vollständige Antwort ist komplexer als dies, aber wir haben die meisten Teile der Kürze halber weggelassen. Die Hauptbestandteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` zeigt Erfolg an.
- `date`, `expires` usw.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass auch Anfragen Header haben können), die zusätzliche Informationen bereitstellen und/oder deren Verhalten ändern.
- `<!doctype html>` usw.
  - : Der Antwortkörper, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Siehe das MDN [HTTP-Referenzdokument](/de/docs/Web/HTTP) für wesentlich mehr Details zu HTTP, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Ausgangspunkt.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der anzeigt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungszwecken, die Sie jedoch nur selten sehen werden:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Standort verschoben, der in der Antwort angegeben ist. Dies wird verwendet, um Inhalte umzuleiten, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies geschieht normalerweise, wenn die Anfrage nicht in einem Format vorliegt, das der Server versteht, oder wenn sie Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies geschieht normalerweise, wenn der Server weiß, wer der Client ist, aber er keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht werden, ohne dass eine Umleitung eingerichtet wird.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist üblich, wenn Server wegen Wartungsarbeiten offline sind, und es wird erwartet, dass es vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden die Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte eindeutiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie beispielsweise einen neuen Tab in Ihrem Browser öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptbestandteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall benutzen wir {{Glossary("HTTPS", "HTTPS")}}, das eine sichere Version von HTTP ist, die es bösen Menschen unmöglich macht, Ihre Daten beim Transport zu lesen. Auf dem modernen Web verwendet so ziemlich jeder Server HTTPS, sodass der Browser, falls Sie es nicht ausdrücklich angeben, annimmt, dass Sie es verwenden, und es für Sie hinzufügt.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den höchsten Standort des Servers, mit dem Sie sich verbinden, repräsentiert. In diesem Fall entspricht die eingegebene Webadresse dem Domainnamen, aber dies ist nicht immer der Fall — Sie könnten auch eine kompliziertere Webadresse eingeben. Beachten Sie, dass der Teil `developer` eine **Subdomain** (ein eigenständiger Inhaltsbereich) der Mozilla-Domain `mozilla.org` ist. Es gibt noch andere Subdomains auf der Mozilla-Website, die eigenständige Inhalte hosten — siehe zum Beispiel [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`
  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN behält alle seine US-englischen Inhalte in einem Ordner namens `en-US`, was dieser URL entspricht.

    Wenn Ihr Browser darauf eingestellt ist, standardmäßig englische Inhalte zu bevorzugen, werden Sie zu dieser URL weitergeleitet, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser darauf eingestellt ist, eine andere Sprache zu bevorzugen, die von MDN unterstützt wird, wie z. B. Französisch, werden Sie stattdessen zu einer anderen URL weitergeleitet, z. B. `https://developer.mozilla.org/fr/`. Dies ist nicht standardmäßig für jede Website verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Menschen problemlos auf die Sprache zugreifen können, die sie bevorzugen.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Weitere Details finden Sie unter [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL).

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Kredit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
