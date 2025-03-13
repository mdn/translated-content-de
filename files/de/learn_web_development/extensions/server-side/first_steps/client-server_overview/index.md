---
title: Überblick über Client-Server
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Nun, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der meiste serverseitige Code von Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, wird Ihnen dies helfen, zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis davon, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von Client-Server-Interaktionen in einer dynamischen Website und insbesondere, welche Operationen serverseitiger Code ausführen muss.
      </td>
    </tr>
  </tbody>
</table>

Es gibt keinen echten Code in der Diskussion, da wir noch kein Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie auswählen.

## Webserver und HTTP (ein Grundkurs)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite einen Link anklicken, ein Formular absenden oder eine Suche starten, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL, die den Zielserver und die Ressource identifiziert (z. B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein Tool zum Ausführen).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei zu erhalten oder um Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:

  - `GET`: Eine bestimmte Ressource abrufen (z.B. eine HTML-Datei, die Informationen über ein Produkt enthält, oder eine Liste von Produkten).
  - `POST`: Eine neue Ressource erstellen (z.B. einen neuen Artikel zu einem Wiki hinzufügen, einen neuen Kontakt zu einer Datenbank hinzufügen).
  - `HEAD`: Metadateninformationen über eine bestimmte Ressource erhalten, ohne den Body abzurufen, wie es `GET` tun würde. Zum Beispiel könnte man eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (teuerere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, falls sie sich geändert hat.
  - `PUT`: Eine vorhandene Ressource aktualisieren (oder eine neue erstellen, falls sie nicht existiert).
  - `DELETE`: Die angegebene Ressource löschen.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger gebräuchliche/fortgeschrittene Aufgaben, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen, die mit der Anfrage kodiert werden können (z.B. HTML-Formulardaten). Informationen können kodiert werden als:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem sie Namen/Wert-Paare an ihren Endungen hinzufügen — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein Kaufmännisches Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und dann erneut eingereicht werden könnten. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten innerhalb des Anfragekörpers kodiert sind.
  - Client-seitige Cookies. Cookies enthalten Sitzungdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um den Anmeldestatus und die Berechtigungen/Zugänge zu Ressourcen zu bestimmen.

Webserver warten auf Client-Anfragemeldungen, verarbeiten sie bei Ankunft und antworten dem Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Response-Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war oder nicht (zum Beispiel {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}} wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}} wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, etc.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Im Rahmen der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z.B. eine HTML-Seite verweist normalerweise auf JavaScript- und CSS-Dateien) und separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (die in den folgenden Abschnitten besprochen werden) verwenden genau dasselbe Kommunikationsprotokoll/-muster.

### Beispiel für eine GET-Anfrage/Antwort

Sie können eine einfache `GET`-Anfrage durchführen, indem Sie auf einen Link klicken oder auf einer Seite (wie auf einer Suchmaschinen-Startseite) suchen. Zum Beispiel sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "client-server overview" suchen, sehr ähnlich aus wie der unten gezeigte Text (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Webstandard" ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)) definiert. Sie müssen diesen Detaillierungsgrad nicht kennen, aber zumindest wissen Sie jetzt, woher das alles kommt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird als **Header** bezeichnet und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Head](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt selbst, der im Body steht):

```http
GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

Die erste und zweite Zeile enthalten die meisten der oben besprochenen Informationen:

- Die Art der Anfrage (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Host-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält auch eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — Sie sehen, dass das Cookie in diesem Fall eine ID zur Sitzungsverwaltung enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die verbleibenden Zeilen enthalten Informationen über den verwendeten Browser und die Art von Antworten, die er verarbeiten kann.
Beispielsweise können Sie hier sehen:

- Mein Browser (`User-Agent`) ist Mozilla Firefox (`Mozilla/5.0`).
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann die angegebenen Sprachen akzeptieren (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d.h. den Ursprung der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage ist unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns sagt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort als `text/html` formatiert ist (`Content-Type`).
- Außerdem können wir sehen, dass sie das UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Header gibt uns auch an, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der das tatsächliche HTML enthält, das durch die Anfrage zurückgegeben wird.

```http
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept, Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!doctype html>
<html lang="en-US" dir="ltr" class="redesign no-js" data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  …
```

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B. wann sie generiert wurde), den Server und wie er erwartet, dass der Browser die Seite behandelt (z.B. die Zeile `X-Frame-Options: DENY` teilt dem Browser mit, diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Seite einzubetten).

### Beispiel für eine POST-Anfrage/Antwort

Ein HTTP-`POST` wird ausgeführt, wenn Sie ein Formular mit Informationen absenden, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der Text unten zeigt die HTTP-Anfrage, die gesendet wird, wenn ein Benutzer auf dieser Seite neue Profildetails übermittelt. Das Format der Anfrage ist fast dasselbe wie das im vorherigen `GET`-Anfrage-Beispiel gezeigte, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

```http
POST /en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

Der Hauptunterschied besteht darin, dass die URL keine Parameter hat. Wie Sie sehen können, werden die Informationen aus dem Formular im Body der Anfrage kodiert (zum Beispiel wird der neue vollständige Benutzername festgelegt durch: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort auf die Anfrage ist unten gezeigt. Der Statuscode von `302 Found` teilt dem Browser mit, dass der Post erfolgreich war und dass er eine zweite HTTP-Anfrage senden muss, um die im `Location`-Feld festgelegte Seite zu laden. Die Informationen sind ansonsten ähnlich wie bei der Antwort auf eine `GET`-Anfrage.

```http
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

> [!NOTE]
> Die in diesen Beispielen gezeigten HTTP-Antworten und Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z.B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Webseite und bearbeiten Sie Profilinformationen, um die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser verfügen auch über Tools, die Netzwerk-Anfragen überwachen (zum Beispiel das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest codierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also beispielsweise eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Seite hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `my-product2.html`) und so weiter. Das kann wirklich ineffizient werden — was passiert, wenn Sie tausende von Produktseiten haben? Sie würden auf jeder Seite viel Code wiederholen (das grundlegende Seitentemplate, die Struktur, usw.), und wenn Sie etwas an der Seitenstruktur ändern wollten — wie z.B. einen neuen Abschnitt "verwandte Produkte" hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Sites sind ausgezeichnet, wenn Sie eine kleine Anzahl von Seiten haben und jedem Benutzer denselben Inhalt senden möchten. Sie können jedoch erhebliche Wartungskosten verursachen, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns noch einmal zusammenfassen, wie das funktioniert, indem wir uns das Diagramm der statischen Site-Architektur ansehen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL ihrer HTML-Seite spezifiziert. Der Server ruft das angeforderte Dokument von seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) von `200 OK` (was Erfolg anzeigt) enthält. Der Server könnte einen anderen Statuscode zurückgeben, zum Beispiel `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server für eine statische Site muss nur `GET`-Anfragen verarbeiten, da der Server keine modifizierbaren Daten speichert. Außerdem ändert er seine Antworten nicht basierend auf HTTP-Anfragedaten (z.B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Sites funktionieren, ist dennoch nützlich beim Erlernen der serverseitigen Programmierung, da dynamische Sites Anfragen für statische Dateien (CSS, JavaScript, statische Bilder, etc.) auf genau dieselbe Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfrage-URL und Daten generieren und zurückgeben kann (anstatt immer dieselbe fest codierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produkt-Site würde der Server Produkt-"Daten" in einer Datenbank speichern, anstatt einzelne HTML-Dateien. Bei Empfang einer HTTP-`GET`-Anfrage für ein Produkt bestimmt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und erstellt dann die HTML-Seite für die Antwort durch Einfügen der Daten in ein HTML-Template. Dies hat große Vorteile gegenüber einer statischen Site:

Die Verwendung einer Datenbank ermöglicht es, Produktinformationen effizient in einer einfach erweiterbaren, modifizierbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Templates macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einem Ort, in einem einzigen Template, und nicht über potenziell tausende von statischen Seiten hinweg geschehen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet einen Schritt-für-Schritt-Überblick über den "dynamischen" HTTP-Anfrage- und Antwortzyklus und baut auf dem auf, was wir im vorherigen Artikel betrachtet haben, mit viel mehr Details. Um "die Sache real zu halten", verwenden wir den Kontext einer Website für Sportmannschafts-Manager, wo ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen kann und eine vorgeschlagene "beste Aufstellung" für sein nächstes Spiel zurückbekommt.

Das Diagramm unten zeigt die Hauptelemente der "Teamcoach"-Website zusammen mit nummerierten Labels für die Abfolge der Operationen, wenn der Coach auf seine "beste Team"-Liste zugreift. Die Teile der Website, die sie dynamisch machen, sind die _Webanwendung_ (das ist der Begriff, den wir für den serverseitigen Code verwenden, der HTTP-Anfragen verarbeitet und HTTP-Antworten liefert), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, und die _HTML-Templates_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittzahlen für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Coach das Formular mit dem Teamnamen und der Spieleranzahl abgesendet hat, ist die Abfolge der Operationen wie folgt:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server using die Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spielerzahl entweder als URL-Parameter (z.B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B. `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, weil die Anfrage nur Daten abruft (und keine Daten ändert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie er unterschiedliche URLs basierend auf Musterabgleichen, die in seiner Konfiguration definiert sind, verarbeiten soll).
3. Die _Webanwendung_ identifiziert, dass die _Absicht_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten, und findet den erforderlichen Teamnamen und die Spieleranzahl aus der URL heraus. Die _Webanwendung_ holt dann die benötigten Informationen aus der Datenbank (unter Verwendung zusätzlicher "interner" Parameter, um zu definieren, welche Spieler "am besten" sind, und möglicherweise auch durch Ermittlung der Identität des angemeldeten Trainers aus einem clientseitigen Cookie).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb eines HTML-Templates einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser zurück (über den _Webserver_), zusammen mit einem HTTP-Statuscode von 200 ("Erfolg"). Wenn irgendetwas verhindert, dass das HTML zurückgegeben wird, gibt die _Webanwendung_ einen anderen Code zurück — zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann, das zurückgegebene HTML zu verarbeiten, wobei separate Anfragen gesendet werden, um andere CSS- oder JavaScript-Dateien, auf die verwiesen wird, herunterzuladen (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (wiederum basiert die korrekte Dateiverarbeitung auf Konfigurationsregeln und URL-Musterabgleich).

Eine Operation zur Aktualisierung eines Datensatzes in der Datenbank würde ähnlich gehandhabt, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage des Browsers als `POST`-Anfrage kodiert werden sollte.

### Andere Arbeiten erledigen

Die Aufgabe einer _Webanwendung_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zu liefern. Während die Interaktion mit einer Datenbank, um Informationen zu erhalten oder zu aktualisieren, sehr häufige Aufgaben sind, kann der Code gleichzeitig andere Dinge erledigen oder gar nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ durchführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Seite könnte auch Protokollierung durchführen oder andere Operationen ausführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss keine HTML-Snippets/Dateien in der Antwort zurückgeben. Stattdessen kann er andere Dateitypen (Text, PDF, CSV, etc.) oder sogar Daten (JSON, XML, etc.) dynamisch erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch Abrufen von Inhalten vom Server mit JavaScript arbeiten und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neue Inhalte angezeigt werden sollen. Siehe [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) für mehr über die Motivation für diesen Ansatz und wie dieses Modell aus der Sicht des Clients aussieht.

## Web-Frameworks vereinfachen serverseitige Webprogrammierung

Serverseitige Web-Frameworks erleichtern das Schreiben von Code zum Verwalten der oben beschriebenen Operationen erheblich.

Eine der wichtigsten Operationen, die sie ausführen, ist die Bereitstellung einfacher Mechanismen, um URLs für verschiedene Ressourcen/Seiten zu spezifischen Handler-Funktionen zuzuordnen. Dies erleichtert es, den Code, der mit jedem Ressourcentyp verbunden ist, getrennt zu halten. Es hat auch Vorteile in Bezug auf Wartung, da Sie die URL, die verwendet wird, um eine bestimmte Funktion bereitzustellen, in einem einzigen Bereich ändern können, ohne die Handler-Funktion ändern zu müssen.

Zum Beispiel betrachten Sie den folgenden Django (Python)-Code, der zwei URL-Muster zwei Ansichts-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im `views`-Modul übergeben wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-Ansichts-Funktion übergeben.

```python
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]
```

> [!NOTE]
> Die ersten Parameter in den `url()`-Funktionen mögen ein bisschen merkwürdig aussehen (z.B. `r'^junior/$'`), weil sie eine Musterabgleichstechnik namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen an dieser Stelle nicht wissen, wie reguläre Ausdrücke funktionieren, außer dass sie es uns ermöglichen, Muster in der URL abzugleichen (statt der oben harten kodierten Werte) und sie als Parameter in unseren Ansichts-Funktionen zu verwenden. Ein wirklich einfaches RegEx könnte zum Beispiel sagen: "Übereinstimmen mit einem einzelnen Großbuchstaben, gefolgt von zwischen 4 und 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach für eine Ansichts-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden sollen. Wenn wir ein Modell namens _Team_ mit einem Feld namens "_team_type_" haben, dann können wir eine einfache Abfragesyntax verwenden, um alle Teams mit einem bestimmten Typ zurückzubekommen.

Das Beispiel unten erhält eine Liste aller Teams, die den exakten (Groß-/Kleinschreibungsempfindlichen) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von doppeltem Unterstrich, und dann die Art des Abgleichs, die verwendet werden soll (in diesem Fall `exact`). Es gibt viele andere Arten von Abgleichen und wir können sie verketten. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die Funktion `junior()` die Liste der Junior-Teams erhalten hat, ruft sie die Funktion `render()` auf, übergibt die ursprüngliche `HttpRequest`, ein HTML-Template und ein "Kontext"-Objekt, das die in das Template einzuschließenden Informationen definiert. Die Funktion `render()` ist eine Komfortfunktion, die HTML mit einem Kontext und einem HTML-Template generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Ihnen Web-Frameworks bei einer Menge anderer Aufgaben helfen. Wir diskutieren viele weitere Vorteile und einige beliebte Web-Framework-Optionen im nächsten Artikel.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul helfen wir Ihnen, das beste Web-Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
