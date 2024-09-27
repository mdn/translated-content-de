---
title: Client-Server-Übersicht
slug: Learn/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: cb02a672ccfd2489ee9fbbf67b3ac6322de50987
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Nun, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der meiste serverseitige Code von Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, wird Ihnen dies helfen zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis davon, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen von Client-Server-Interaktionen auf einer dynamischen Website und insbesondere welche Operationen durch serverseitigen Code durchgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt keinen echten Code in der Diskussion, da wir noch kein Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie auswählen.

## Webserver und HTTP (ein Überblick)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite einen Link anklicken, ein Formular absenden oder eine Suche durchführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage umfasst:

- Eine URL, die den Zielserver und die Ressource identifiziert (z. B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein Tool, das ausgeführt werden soll).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei abzurufen oder einige Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und deren zugehörige Aktionen sind unten aufgeführt:

  - `GET`: Abrufen einer spezifischen Ressource (z. B. einer HTML-Datei mit Informationen über ein Produkt oder eine Liste von Produkten).
  - `POST`: Erstellen einer neuen Ressource (z. B. Hinzufügen eines neuen Artikels zu einem Wiki, Hinzufügen eines neuen Kontakts zu einer Datenbank).
  - `HEAD`: Abrufen der Metadateninformationen über eine spezifische Ressource ohne den Body wie `GET`. Sie könnten beispielsweise eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (teurere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie geändert wurde.
  - `PUT`: Aktualisieren einer vorhandenen Ressource (oder Erstellen einer neuen, falls diese nicht existiert).
  - `DELETE`: Löschen der angegebenen Ressource.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger gängige/fortgeschrittene Aufgaben gedacht und werden hier nicht behandelt.

- Zusätzliche Informationen können in der Anfrage kodiert werden (zum Beispiel HTML-Formulardaten). Informationen können wie folgt kodiert werden:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem Name/Wert-Paare an dessen Ende hinzugefügt werden — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein Et-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und dann erneut übermittelt werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, die im Anfragetext kodiert sind.
  - Client-seitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüsseln, die der Server verwenden kann, um deren Anmeldestatus und Berechtigungen/Zugriffsrechte auf Ressourcen zu bestimmen.

Webserver warten auf Client-Anforderungsnachrichten, verarbeiten sie bei Eingang und antworten dem Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht (z. B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, usw.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Im Rahmen der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z. B. verweist eine HTML-Seite normalerweise auf JavaScript- und CSS-Dateien) und wird separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (die in den folgenden Abschnitten behandelt werden) verwenden genau dasselbe Kommunikationsprotokoll/-muster.

### Beispiel für eine GET-Anfrage/Antwort

Sie können eine einfache `GET`-Anfrage machen, indem Sie auf einen Link klicken oder auf einer Website suchen (wie auf einer Suchmaschinenseite). Zum Beispiel wird die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "client-server overview" suchen, ungefähr so aussehen wie der unten gezeigte Text (es wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Web-Standard" definiert ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detailniveau nicht kennen, aber jetzt wissen Sie zumindest, woher das alles stammt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird **Header** genannt und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Kopf](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt selbst, der im Body ist):

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
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

Die erste und zweite Zeile enthalten die meisten der oben besprochenen Informationen:

- Der Anfragetyp (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel/Host-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält auch eine kurze Zeichenfolge, die das spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — Sie können hier sehen, dass das Cookie eine ID zum Sitzungsmanagement enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die restlichen Zeilen enthalten Informationen über den verwendeten Browser und die Art von Antworten, die er verarbeiten kann.
Beispielsweise können Sie sehen, dass:

- Mein Browser (`User-Agent`) ist Mozilla Firefox (`Mozilla/5.0`).
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann den angegebenen Zeichensatz (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) und Sprachen (`Accept-Language: en-US,en;q=0.8,es;q=0.6`) akzeptieren.
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthalten hat (d.h. den Ursprung der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, der in diesem Fall jedoch leer ist.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage wird unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage erfolgreich war.
- Wir sehen, dass die Antwort im `text/html`-Format vorliegt (`Content-Type`).
- Wir sehen auch, dass sie den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Kopf gibt auch an, wie groß sie ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der enthält das eigentliche HTML, das von der Anfrage zurückgegeben wurde.

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
<html lang="en-US" dir="ltr" class="redesign no-js"  data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  …
```

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z. B. wann sie generiert wurde), den Server und wie er erwartet, dass der Browser die Seite behandelt (z. B. die `X-Frame-Options: DENY`-Zeile, die dem Browser mitteilt, dass diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden darf).

### Beispiel für eine POST-Anfrage/Antwort

Ein HTTP-`POST` wird gemacht, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der unten stehende Text zeigt die HTTP-Anfrage, die gesendet wird, wenn ein Benutzer auf dieser Seite neue Profildetails einreicht. Das Format der Anfrage ist fast identisch mit dem der oben gezeigten `GET`-Anfrage, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter enthält. Wie Sie sehen können, sind die Informationen aus dem Formular im Body der Anfrage kodiert (zum Beispiel ist der neue vollständige Benutzername gesetzt durch: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort auf die Anfrage wird unten gezeigt. Der Statuscode `302 Found` teilt dem Browser mit, dass der Post erfolgreich war und dass er eine zweite HTTP-Anfrage senden muss, um die im `Location`-Feld angegebene Seite zu laden. Die Informationen sind ansonsten ähnlich wie bei der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z. B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Seite und bearbeiten Sie Profilinformationen, um die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser haben ebenfalls Tools, die Netzwerk-Anfragen überwachen (z. B. das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest kodierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also beispielsweise eine Seite über ein Produkt unter `/static/myproduct1.html` haben, wird dieselbe Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt auf Ihrer Seite hinzufügen, müssen Sie eine weitere Seite hinzufügen (z. B. `myproduct2.html`) und so weiter. Dies kann wirklich ineffizient werden — was passiert, wenn Sie zu Tausenden von Produktseiten gelangen? Sie würden viel Code auf jeder Seite wiederholen (die grundlegende Seitenschablone, die Struktur usw.), und wenn Sie etwas an der Seitenstruktur ändern wollten — wie zum Beispiel einen neuen Abschnitt "Verwandte Produkte" hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind ausgezeichnet, wenn Sie nur eine geringe Anzahl von Seiten haben und denselben Inhalt an jeden Benutzer senden möchten. Sie können jedoch erhebliche Kosten bei der Verwaltung verursachen, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns rekapitulieren, wie dies funktioniert, indem wir erneut das Architekturdiagramm einer statischen Seite anschauen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer auf eine Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, in der die URL seiner HTML-Seite angegeben ist. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) von `200 OK` zurück (was Erfolg anzeigt). Der Server kann einen anderen Statuscode zurückgeben, zum Beispiel `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server für eine statische Seite wird nur jemals `GET`-Anfragen verarbeiten müssen, da der Server keine veränderbaren Daten speichert. Er ändert auch seine Antworten nicht basierend auf HTTP-Anfragedaten (z. B. URL-Parameter oder Cookies).

Zu verstehen, wie statische Seiten funktionieren, ist dennoch nützlich beim Erlernen der serverseitigen Programmierung, da dynamische Seiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder usw.) auf genau dieselbe Weise verarbeiten.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfrage-URL und den Daten generieren und zurückgeben kann (anstatt immer dieselbe fest kodierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produkt-Seite würde der Server Produkt-"Daten" in einer Datenbank anstelle einzelner HTML-Dateien speichern. Beim Empfang einer HTTP-`GET`-Anfrage nach einem Produkt ermittelt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und konstruiert dann die HTML-Seite für die Antwort, indem er die Daten in eine HTML-Vorlage einfügt. Dies hat erhebliche Vorteile gegenüber einer statischen Seite:

Die Verwendung einer Datenbank ermöglicht es, dass die Produktinformationen effizient auf eine leicht erweiterbare, änderbare und durchsuchbare Weise gespeichert werden.

Die Verwendung von HTML-Vorlagen macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einer Stelle in einer einzigen Vorlage und nicht über potenziell tausende von statischen Seiten geschehen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet eine Schritt-für-Schritt-Übersicht über den "dynamischen" HTTP-Anfrage- und Antwortzyklus und baut auf dem auf, was wir im letzten Artikel mit viel mehr Details betrachtet haben. Um die Dinge "real" zu halten, verwenden wir den Kontext einer Website für Sportteammanager, auf der ein Trainer den Teamnamen und die Teamgröße in einem HTML-Formular auswählen kann, um eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel zu erhalten.

Das Diagramm unten zeigt die Hauptelemente der "Team Coach"-Website zusammen mit nummerierten Beschriftungen für die Abfolge der Operationen, wenn der Trainer auf ihre "beste Team"-Liste zugreift. Die Teile der Seite, die sie dynamisch machen, sind die _Webanwendung_ (so bezeichnen wir den serverseitigen Code, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und deren Beziehungen enthält, und die _HTML-Vorlagen_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittzahlen für jeden der Schritte der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Spieleranzahl eingereicht hat, ist die Abfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server unter Verwendung der Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spielerzahl entweder als URL-Parameter (z. B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z. B. `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, weil die Anfrage nur Daten abrufen (nicht Daten ändern) soll.
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie er mit verschiedenen URLs umgehen soll, basierend auf Musterabgleichsregeln, die in seiner Konfiguration definiert sind).
3. Die _Webanwendung_ identifiziert, dass die _Absicht_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) abzurufen und ermittelt den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL. Die _Webanwendung_ ruft dann die erforderlichen Informationen aus der Datenbank ab (unter Verwendung zusätzlicher "interner" Parameter, um zu definieren, welche Spieler "am besten" sind, und möglicherweise auch indem sie die Identität des eingeloggten Trainers aus einem clientseitigen Cookie abruft).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb einer HTML-Vorlage einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser zurück (über den _Webserver_) zusammen mit einem HTTP-Statuscode von 200 ("Erfolg"). Wenn irgendetwas das Zurückgeben des HTMLs verhindert, wird die _Webanwendung_ einen anderen Code zurückgeben – zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser wird dann mit der Verarbeitung des zurückgegebenen HTMLs beginnen und separate Anfragen senden, um alle anderen CSS- oder JavaScript-Dateien, auf die verwiesen wird, zu erhalten (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (auch hier erfolgt die korrekte Dateiverarbeitung basierend auf Konfigurationsregeln und URL-Musterabgleich).

Eine Operation zur Aktualisierung eines Datensatzes in der Datenbank würde ähnlich behandelt werden, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage vom Browser als `POST`-Anfrage kodiert werden sollte.

### Andere Arbeiten ausführen

Die Aufgabe einer _Webanwendung_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank zum Abrufen oder Aktualisieren von Informationen sehr häufige Aufgaben sind, kann der Code gleichzeitig andere Dinge tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um deren Registrierung auf der Website zu bestätigen. Die Seite könnte auch Protokollierungen oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss keine HTML-Fragmente/Dateien in der Antwort zurückgeben. Es kann stattdessen dynamisch erstellen und andere Arten von Dateien (Text, PDF, CSV usw.) oder sogar Daten (JSON, XML usw.) zurückgeben.

Dies ist besonders relevant für Websites, die durch das Abrufen von Inhalten vom Server mit JavaScript arbeiten und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neuer Inhalt angezeigt werden soll. Siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) für mehr über die Motivation für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht.

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Web-Frameworks erleichtern das Schreiben von Code zur Handhabung der oben beschriebenen Operationen erheblich.

Eine der wichtigsten Operationen, die sie ausführen, ist die Bereitstellung einfacher Mechanismen, um URLs für verschiedene Ressourcen/Seiten bestimmten Handler-Funktionen zuzuordnen. Dies erleichtert es, den Code, der mit jedem Ressourcentyp verbunden ist, getrennt zu halten. Es bringt auch Vorteile in Bezug auf die Wartung mit sich, weil Sie die URL, die zur Bereitstellung eines bestimmten Features verwendet wird, an einer Stelle ändern können, ohne die Handler-Funktion ändern zu müssen.

Zum Beispiel das folgende Django (Python)-Code-Snippet, das zwei URL-Muster zwei Ansichtsfunktions zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion mit dem Namen `index()` im `views`-Modul weitergeleitet wird. Eine Anfrage, die das Muster `/best/junior`, hat, wird stattdessen an die `junior()`-Ansichtsfunktion weitergeleitet.

````python
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^

> [!NOTE]
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z. B. `r'^junior/$'`), weil sie eine Musterabgleichstechnologie namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen nicht wissen, wie reguläre Ausdrücke an dieser Stelle funktionieren, außer dass sie es uns ermöglichen, Muster in der URL (anstatt der oben fest codierten Werte) abzugleichen und sie als Parameter in unseren Ansichtsfunktionen zu verwenden. Zum Beispiel könnte ein wirklich einfacher RegEx sagen: "ergreife einen einzelnen Großbuchstaben, gefolgt von 4 bis 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach für eine Ansichts-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die zu speichernden Felder in der zugrundeliegenden Datenbank definieren. Wenn wir ein Modell namens _Team_ mit einem Feld namens "_team_type_" haben, dann können wir eine einfache Abfragesyntax verwenden, um alle Teams mit einem bestimmten Typ abzurufen.

Das Beispiel unten erhält eine Liste aller Teams, die den genauen (groß- und kleinschreibungssensiblen) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von doppeltem Unterstrich und dann der Typ des zu verwendenden Abgleichs (in diesem Fall `exact`). Es gibt viele andere Arten von Abgleichen und wir können sie verknüpfen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
````

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf, übergibt die ursprüngliche `HttpRequest`, eine HTML-Vorlage und ein "Kontext"-Objekt, das die Informationen definiert, die in der Vorlage enthalten sein sollen. Die `render()`-Funktion ist eine Komfortfunktion, die HTML unter Verwendung eines Kontexts und einer HTML-Vorlage generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir besprechen viele weitere Vorteile und einige beliebte Web-Framework-Optionen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}, views.index), # example: /best/junior/
url(r'^junior/

> [!NOTE]
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z. B. `r'^junior/$'`), weil sie eine Musterabgleichstechnologie namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen nicht wissen, wie reguläre Ausdrücke an dieser Stelle funktionieren, außer dass sie es uns ermöglichen, Muster in der URL (anstatt der oben fest codierten Werte) abzugleichen und sie als Parameter in unseren Ansichtsfunktionen zu verwenden. Zum Beispiel könnte ein wirklich einfacher RegEx sagen: "ergreife einen einzelnen Großbuchstaben, gefolgt von 4 bis 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach für eine Ansichts-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die zu speichernden Felder in der zugrundeliegenden Datenbank definieren. Wenn wir ein Modell namens _Team_ mit einem Feld namens "_team_type_" haben, dann können wir eine einfache Abfragesyntax verwenden, um alle Teams mit einem bestimmten Typ abzurufen.

Das Beispiel unten erhält eine Liste aller Teams, die den genauen (groß- und kleinschreibungssensiblen) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von doppeltem Unterstrich und dann der Typ des zu verwendenden Abgleichs (in diesem Fall `exact`). Es gibt viele andere Arten von Abgleichen und wir können sie verknüpfen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

![](5-f6def72a.md)

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf, übergibt die ursprüngliche `HttpRequest`, eine HTML-Vorlage und ein "Kontext"-Objekt, das die Informationen definiert, die in der Vorlage enthalten sein sollen. Die `render()`-Funktion ist eine Komfortfunktion, die HTML unter Verwendung eines Kontexts und einer HTML-Vorlage generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir besprechen viele weitere Vorteile und einige beliebte Web-Framework-Optionen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}, views.junior),
]

```

> [!NOTE]
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z. B. `r'^junior/$'`), weil sie eine Musterabgleichstechnologie namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen nicht wissen, wie reguläre Ausdrücke an dieser Stelle funktionieren, außer dass sie es uns ermöglichen, Muster in der URL (anstatt der oben fest codierten Werte) abzugleichen und sie als Parameter in unseren Ansichtsfunktionen zu verwenden. Zum Beispiel könnte ein wirklich einfacher RegEx sagen: "ergreife einen einzelnen Großbuchstaben, gefolgt von 4 bis 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach für eine Ansichts-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die zu speichernden Felder in der zugrundeliegenden Datenbank definieren. Wenn wir ein Modell namens _Team_ mit einem Feld namens "_team_type_" haben, dann können wir eine einfache Abfragesyntax verwenden, um alle Teams mit einem bestimmten Typ abzurufen.

Das Beispiel unten erhält eine Liste aller Teams, die den genauen (groß- und kleinschreibungssensiblen) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von doppeltem Unterstrich und dann der Typ des zu verwendenden Abgleichs (in diesem Fall `exact`). Es gibt viele andere Arten von Abgleichen und wir können sie verknüpfen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

![](5-f6def72a.md)

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf, übergibt die ursprüngliche `HttpRequest`, eine HTML-Vorlage und ein "Kontext"-Objekt, das die Informationen definiert, die in der Vorlage enthalten sein sollen. Die `render()`-Funktion ist eine Komfortfunktion, die HTML unter Verwendung eines Kontexts und einer HTML-Vorlage generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir besprechen viele weitere Vorteile und einige beliebte Web-Framework-Optionen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
```
