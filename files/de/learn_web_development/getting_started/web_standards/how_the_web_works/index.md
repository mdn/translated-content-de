---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine umfassende Beschreibung dessen, was passiert, wenn Sie einen Webbrowser verwenden, um zu einer Webseite zu navigieren. Es erklärt die Magie, die im Hintergrund abläuft, um den relevanten Code an Ihren Computer zu liefern, damit der Browser ihn zu etwas zusammenfügt, das Sie ansehen können.

Diese Theorie ist für das Schreiben von Webcode kurzfristig nicht unbedingt erforderlich, aber schon bald werden Sie davon profitieren, wenn Sie verstehen, was im Hintergrund passiert.

> [!NOTE]
> Dieser Artikel behandelt nicht, wie Webbrowser Code tatsächlich in Webseiten rendern. Das wird in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) abgedeckt.

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
          <li>Clients und Server und deren Rollen im Web.</li>
          <li>DNS und wie es auf hoher Ebene funktioniert.</li>
          <li>Der Zweck von TCP/IP, HTTP und Paketen.</li>
          <li>Grundsyntax von HTTP.</li>
          <li>Gängige HTTP-Antwortcodes (z.B. 200, 301, 403, 404 und 500).</li>
          <li>Grundlegende Komponenten einer URL (Protokoll, Domain, Subdomain, Pfad).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden **Clients** und **Server** genannt. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die einen Client und einen Server darstellen. Ein Pfeil, der als Anfrage bezeichnet wird, geht vom Client zum Server, und ein Pfeil, der als Antwort bezeichnet wird, geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte eines typischen Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Smartphone, das mit Ihrem Mobilfunknetz verbunden ist) und die darauf verfügbaren Webzugangs-Softwares (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client eine Webseite aufrufen möchte, wird eine Kopie des Webseiten-Codes vom Server auf den Client-Computer heruntergeladen, wo er vom Browser gerendert und dem Nutzer angezeigt wird.

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet weitere Informationen zu Clients und Servern, einschließlich eines Quiz und einer Diskussion.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~0lq" scrimtitle="Clients und Server"></mdn-scrim-inline>

## Die anderen Teile des Werkzeugkastens

Die oben beschriebenen Clients und Server erzählen nicht die ganze Geschichte. Es gibt viele andere beteiligte Teile, die wir im Folgenden beschreiben werden.

Stellen Sie sich für den Moment das Internet als eine Straße vor. An einem Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, der wie ein Geschäft ist, von dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Damit Daten hin und her fließen können, benötigen wir die folgenden Dinge:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Internet zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: **Transmission Control Protocol** und **Internet Protocol** (TCP/IP) sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel entspricht dies einem Auto oder einem Fahrrad (oder wie auch immer Sie sonst entlang der Straße reisen könnten).
- **DNS**: Das **Domain Name System** (DNS) ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihrem Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden — die tatsächliche Adresse, an der sich der Server befindet — bevor er die Website abrufen kann (siehe [DNS erklärt](#dns_erklärt) unten für weitere Informationen). Der Browser muss herausfinden, auf welchem Server die Website liegt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, bevor Sie es besuchen.
- **HTTP**: **Hypertext Transfer Protocol** (HTTP) ist ein Anwendungs{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, in der Clients und Server miteinander sprechen. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen. Siehe [HTTP-Grundlagen](#http-grundlagen) unten.
- **Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Waren sind, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:
  - **Code**: Websites basieren hauptsächlich auf HTML, CSS und JavaScript — die verschiedenen Programmiersprachen, in denen Websites geschrieben werden und die der Browser interpretiert und zu einer Webseite zusammensetzt, die dem Benutzer angezeigt wird.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Elemente, die auf einer Website erscheinen — wie Bilder, Musik, Videos, Word-Dokumente und PDFs — die kein Code sind, den der Browser interpretiert.

  > [!NOTE]
  > Wie der Browser diese Dateien zu einer Webseite zusammensetzt, erfahren Sie später im Kurs in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

## Was passiert also genau?

Wenn Sie eine Webadresse (die technisch Teil einer [URL](#komponenten_einer_url) ist) in die Adressleiste Ihres Browsers eingeben, erfolgen die folgenden Schritte:

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website liegt.
2. Der Browser sendet eine HTTP-Anfragenachricht an den Server und bittet ihn, dem Client eine Kopie der Website zu senden. Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung mithilfe von TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe von kleinen Stücken, sogenannte [Pakete](#pakete_erklärt), an den Browser zu senden.
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an.

## DNS erklärt

Echte Webadressen ([URLs](#komponenten_einer_url)) sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste tippen, um Ihre Lieblingswebsites zu finden. Es sind spezielle Zahlen, die wie folgt aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen einzigartigen Ort im Web dar. Allerdings ist das nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie `mozilla.org`), mit der echten (IP-)Adresse der Website abgleichen. Große Websites sind häufig auf mehreren Servern verfügbar, damit sie effizient für verschiedene Nutzer weltweit geladen werden können. Infolgedessen kann die IP-Adresse je nach Standort variieren.

Sie können ein DNS-Lookup-Tool verwenden, um die IP-Adressen einer Website zu finden. Gehen Sie beispielsweise zum [NsLookup.io DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/), geben Sie `developer.mozilla.org` ein und drücken Sie die Schaltfläche.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir hiermit?

Wenn Daten über das Web gesendet werden, werden sie in mehreren kleinen Stücken, sogenannten Paketen, gesendet. Jedes Paket enthält:

- Einen **Header**, der Details wie die IP-Adresse des Servers und Clients, die Paketnummer, die Gesamtanzahl der Pakete in der Übertragung und Details der in der Übertragung verwendeten Protokolle enthält.
- Eine **Nutzlast**, die die tatsächlichen Daten enthält, die im Paket gesendet werden.

Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden, aber am bedeutendsten:

- Sie gehen manchmal verloren oder werden beschädigt. Wenn dies passiert, ist es schneller und einfacher für den Client, die fehlenden Pakete anstatt einer ganzen Datei anzufordern.
- Die Pakete können entlang verschiedener Pfade geleitet werden, was die Übertragung so effizient wie möglich macht und die Möglichkeit verringert, das Netzwerk zu verlangsamen — besonders wenn viele Nutzer gleichzeitig die gleiche Ressource anfordern. Die Pakete können außerhalb der Reihenfolge ankommen, aber der Client kann die Informationen in den Paket-Headern verwenden, um sicherzustellen, dass sie in der richtigen Reihenfolge zusammengefügt werden.

## HTTP-Grundlagen

HTTP verwendet eine einfache Sprache von Verben, um Aktionen wie das Stellen von Anfragen durchzuführen (siehe [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)). Die HTTP[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Methode ist die, die normalerweise verwendet wird, um HTTP-Anfragen des oben beschriebenen Typs zu stellen. Eine Anfrage für die MDN-Startseite könnte zum Beispiel so aussehen:

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

Die vollständige Antwort ist komplexer als diese, aber wir haben den größten Teil davon der Kürze halber weggelassen. Die Hauptteile sind wie folgt:

- `HTTP/2 200`
  - : Die Version von HTTP, die der Server verwendet, um die Antwort zu senden, in diesem Fall HTTP/2, gefolgt von einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war. `200` gibt einen Erfolg an.
- `date`, `expires`, etc.
  - : [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen über die Antwort enthalten (beachten Sie, dass Anfragen auch Header haben können), die zusätzliche Informationen liefern und/oder deren Verhalten ändern.
- `<!doctype html>`, etc.
  - : Der Antworttext, der in diesem Fall das HTML-Dokument der MDN-Startseite enthält.

> [!NOTE]
> Für eine Menge mehr Details zu HTTP sehen Sie in der MDN [HTTP-Referenz](/de/docs/Web/HTTP) nach, wenn Sie neugierig sind. [Ein Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview) ist ein guter Anfang.

### Andere Statuscodes

Oben haben wir den `200` [Statuscode](/de/docs/Web/HTTP/Reference/Status) kennengelernt, der angibt, dass die HTTP-Anfrage erfolgreich war. Es gibt viele HTTP-Statuscodes mit spezifischen Bedeutungen und Verwendungen, aber Sie werden normalerweise nur ein paar häufig sehen:

- `301`
  - : Die angeforderte Ressource wurde dauerhaft an einen neuen Standort verschoben, der in der Antwort angegeben ist. Dies wird zum Weiterleiten von Inhalten verwendet, wenn sie verschoben werden.
- `400`
  - : Der Server kann die Anfrage nicht verarbeiten. Dies passiert normalerweise, wenn die Anfrage nicht in einem Format ist, das der Server versteht, oder Fehler enthält.
- `403`
  - : Der Server wird dem Client keinen Zugriff auf die angeforderte Ressource gewähren. Dies geschieht in der Regel, wenn der Server weiß, wer der Client ist, aber der Client keine Berechtigung hat, auf die angeforderte Seite zuzugreifen.
- `404`
  - : Der Server kann die angeforderte Ressource nicht finden. Dieser Status wird häufig zurückgegeben, wenn die URL falsch ist oder wenn Inhalte gelöscht wurden, ohne dass eine Weiterleitung eingerichtet wurde.
- `503`
  - : Die Anfrage kann aufgrund eines Problems mit dem Server nicht bearbeitet werden. Dies ist häufig, wenn Server offline für Wartungsarbeiten sind, und es wird erwartet, dass es vorübergehend ist.

## Komponenten einer URL

Technisch gesehen bilden Webadressen, die Sie in die Adressleiste des Browsers eingeben, einen Teil der **Uniform Resource Locators** (**URLs**). URLs definieren die Standorte einzigartiger Ressourcen im Internet.

Eine URL ist eine Webadresse plus ein Protokoll: Wenn Sie zum Beispiel in Ihrem Browser einen neuen Tab öffnen, `developer.mozilla.org` in die Adressleiste eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, werden Sie zu einer URL wie der folgenden umgeleitet:

```plain
https://developer.mozilla.org/en-US/
```

Die Hauptteile der URL sind:

- `https`
  - : Das **Protokoll**, das verwendet wird, um die Anfrage zu senden. In diesem Fall verwenden wir {{Glossary("HTTPS", "HTTPS")}}, eine sichere Version von HTTP, die verhindert, dass böse Leute Ihre Daten lesen, während sie transportiert werden. Im modernen Web verwendet praktisch jeder Server HTTPS, sodass der Browser, wenn Sie es nicht ausdrücklich angeben, davon ausgeht, dass Sie es verwenden, und es für Sie hinzufügt.
- `developer.mozilla.org`
  - : Der [**Domainname**](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) der URL, der den obersten Standort des Servers darstellt, mit dem Sie sich verbinden. In diesem Fall ist die Webadresse, die Sie eingegeben haben, gleich der Domain, aber das ist nicht immer der Fall — Sie könnten sich dafür entscheiden, eine kompliziertere Webadresse einzugeben. Beachten Sie, dass der `developer`-Teil eine **Subdomain** (unterscheidbarer Inhaltsbereich) von Mozillas `mozilla.org`-Domain ist. Es gibt andere Subdomains auf Mozillas Website, die unterscheidbaren Inhalt hosten — siehe z.B. [support.mozilla.org](https://support.mozilla.org/) und [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`
  - : Der **Pfad** zur Ressource auf dem Server, auf die Sie zugreifen. MDN hält alle seine US-englischen Inhalte in einem Ordner namens `en-US`, auf den diese URL zeigt.

    Wenn Ihr Browser so eingestellt ist, dass er standardmäßig englische Inhalte bevorzugt, wird dies die URL sein, zu der Sie weitergeleitet werden, wenn Sie `developer.mozilla.org` eingeben. Wenn Ihr Browser so eingestellt ist, dass er eine andere Sprache bevorzugt, die MDN unterstützt, wie Französisch, werden Sie zu einer anderen URL weitergeleitet, wie etwa `https://developer.mozilla.org/fr/`. Dies ist nicht auf jeder Website von Haus aus verfügbar; die MDN-Entwickler haben MDN so eingerichtet, dass Benutzer einfach auf die bevorzugte Sprache zugreifen können.

> [!NOTE]
> Es gibt viele weitere Komponenten, die in URLs erscheinen können. Weitere Informationen finden Sie unter [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL).

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Quellenangabe

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
