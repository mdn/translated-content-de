---
title: Client-Server Übersicht
slug: Learn/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: cb02a672ccfd2489ee9fbbf67b3ac6322de50987
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Jetzt, da Sie die Ziele und potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der Großteil des serverseitigen Codes von Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, wird Ihnen dies helfen zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis dafür, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis der Client-Server-Interaktionen in einer dynamischen Website und insbesondere der Operationen, die vom serverseitigen Code ausgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Im Abschnitt wird kein echter Code behandelt, da wir noch keinen Web-Framework ausgewählt haben, mit dem wir unseren Code schreiben! Diese Erörterung ist jedoch weiterhin sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code umgesetzt werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie wählen.

## Webserver und HTTP (eine Einführung)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche durchführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL, die den Zielserver und die Ressource identifiziert (z.B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein Tool, das ausgeführt werden soll).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei abzurufen oder einige Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:

  - `GET`: Holen Sie sich eine bestimmte Ressource (z.B. eine HTML-Datei mit Informationen über ein Produkt oder eine Liste von Produkten).
  - `POST`: Erstellen Sie eine neue Ressource (z.B. einen neuen Artikel zu einem Wiki hinzufügen, einen neuen Kontakt in einer Datenbank hinzufügen).
  - `HEAD`: Holen Sie sich die Metadateninformation zu einer bestimmten Ressource, ohne den Body, wie es `GET` tun würde. Sie könnten zum Beispiel eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (teurer) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, falls sie sich geändert hat.
  - `PUT`: Aktualisieren Sie eine vorhandene Ressource (oder erstellen Sie eine neue, falls sie nicht existiert).
  - `DELETE`: Löschen Sie die angegebene Ressource.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger übliche/fortgeschrittene Aufgaben, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen können mit der Anfrage verschlüsselt werden (z.B. HTML-Formulardaten). Informationen können wie folgt codiert werden:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem Name/Wert-Paare angehängt werden — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein Kaufmanns-Und (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und dann erneut übermittelt werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten: `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten innerhalb des Requests im Body verschlüsselt sind.
  - Client-seitige Cookies: Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um ihren Login-Status und Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Anfrage-Nachrichten von Clients, verarbeiten sie, wenn sie eintreffen, und antworten dem Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war (z.B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht autorisiert ist, die Ressource zu sehen, usw.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Während der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z.B. eine HTML-Seite verweist normalerweise auf JavaScript- und CSS-Dateien) und wird separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (die in den folgenden Abschnitten behandelt werden) verwenden genau dasselbe Kommunikationsprotokoll/Muster.

### Beispiel für eine GET-Anfrage/Antwort

Sie können eine einfache `GET`-Anfrage stellen, indem Sie auf einen Link klicken oder auf einer Website suchen (wie bei einer Suchmaschinen-Startseite). Zum Beispiel sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "Client-Server Übersicht" suchen, sehr ähnlich wie der unten gezeigte Text aus (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Webstandard" definiert ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detailniveau nicht kennen, aber jetzt wissen Sie zumindest, woher das alles kam!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird als **Header** bezeichnet und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Kopf](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt selbst, der sich im Body befindet):

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

Die erste und zweite Zeile enthalten die meisten der oben genannten Informationen:

- Die Art der Anfrage (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel/Host-Website (developer.mozilla.org).
- Am Ende der ersten Zeile befindet sich auch eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — Sie können in diesem Fall sehen, dass das Cookie eine ID zur Verwaltung von Sitzungen enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die restlichen Zeilen enthalten Informationen über den verwendeten Browser und die Art der Antworten, die er verarbeiten kann.
Zum Beispiel können Sie hier sehen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox ist (`Mozilla/5.0`).
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann den angegebenen Zeichensatz (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) und die Sprachen (`Accept-Language: en-US,en;q=0.8,es;q=0.6`) akzeptieren.
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthalten hat (d.h. die Herkunft der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body enthalten, dieser ist jedoch in diesem Fall leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage ist unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns sagt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im `text/html`-Format ist (`Content-Type`).
- Wir können auch sehen, dass sie den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Kopf teilt uns auch mit, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der den tatsächlichen HTML-Code enthält, der durch die Anfrage zurückgegeben wurde.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B. wann sie erstellt wurde), den Server und wie der Browser die Seite handhaben soll (z.B. die Zeile `X-Frame-Options: DENY` weist den Browser an, diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Seite einzubetten).

### Beispiel für eine POST-Anfrage/Antwort

Ein HTTP `POST` wird durchgeführt, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der untenstehende Text zeigt die HTTP-Anfrage, die gestellt wird, wenn ein Benutzer neue Profildaten auf dieser Seite überträgt. Das Format der Anfrage ist fast dasselbe wie das zuvor gezeigte `GET`-Anfragebeispiel, obwohl die erste Zeile diese Anfrage als `POST` kennzeichnet.

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

Der Hauptunterschied ist, dass die URL keine Parameter hat. Wie Sie sehen können, sind die Informationen aus dem Formular im Body der Anfrage kodiert (zum Beispiel wird der neue Benutzer-Vollname festgelegt mit: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort auf die Anfrage ist unten dargestellt. Der Statuscode `302 Found` teilt dem Browser mit, dass das Posten erfolgreich war und dass er eine zweite HTTP-Anfrage stellen muss, um die im `Location`-Feld angegebene Seite zu laden. Die Informationen sind ansonsten ähnlich wie bei der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z.B. [WebSniffer](https://websniffer.com/)) oder Paket-Analysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Website und bearbeiten Sie Profildaten, um die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser haben ebenfalls Tools, die Netzwerkanfragen überwachen (zum Beispiel das [Netzwerkmonitor-Tool](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in Firefox).

## Statische Websites

Eine _statische Website_ ist eine, die immer denselben hartcodierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also eine Seite über ein Produkt bei `/static/myproduct1.html` haben, wird diese gleiche Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt auf Ihrer Seite hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `myproduct2.html`) und so weiter. Dies kann wirklich ineffizient werden — was passiert, wenn Sie zu Tausenden von Produktseiten kommen? Sie würden viel Code auf jeder Seite wiederholen (das Grundgerüst der Seite, die Struktur etc.), und wenn Sie irgendetwas an der Seitenstruktur ändern wollten — zum Beispiel einen neuen Abschnitt "verwandte Produkte" hinzufügen — müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Websites sind hervorragend, wenn Sie eine geringe Anzahl von Seiten haben und jedem Benutzer denselben Inhalt senden möchten. Sie können jedoch erhebliche Wartungskosten verursachen, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns noch einmal auffrischen, wie dies funktioniert, indem wir uns noch einmal das Diagramm der statischen Website-Architektur ansehen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite spezifiziert. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Statuscode](/de/docs/Web/HTTP/Status) von `200 OK` enthält (was Erfolg anzeigt). Der Server könnte einen anderen Statuscode zurückgeben, zum Beispiel `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server einer statischen Website wird nur jemals in der Lage sein, GET-Anfragen zu verarbeiten, da der Server keine modifizierbaren Daten speichert. Es ändert auch nicht seine Antworten basierend auf HTTP-Anfrage-Daten (z.B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Websites funktionieren, ist dennoch nützlich beim Erlernen der serverseitigen Programmierung, weil dynamische Websites Anfragen für statische Dateien (CSS, JavaScript, statische Bilder etc.) auf genau dieselbe Weise behandeln.

## Dynamische Websites

Eine _dynamische Website_ ist eine, die Inhalte basierend auf der spezifischen Anforderungs-URL und Daten generieren und zurückgeben kann (anstatt immer dieselbe fest codierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produktseite würde der Server Produkt"daten" in einer Datenbank speichern, anstelle individueller HTML-Dateien. Wenn eine HTTP-`GET`-Anfrage für ein Produkt eingeht, bestimmt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und erstellt dann die HTML-Seite für die Antwort, indem er die Daten in ein HTML-Template einfügt. Das hat große Vorteile gegenüber einer statischen Website:

Die Verwendung einer Datenbank ermöglicht es, Produktinformationen effizient auf eine leicht erweiterbare, modifizierbare und durchsuchbare Weise zu speichern.

Die Verwendung von HTML-Templates macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einer Stelle, in einem einzigen Template, und nicht auf potenziell Tausenden von statischen Seiten erfolgen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet einen Schritt-für-Schritt-Überblick über den „dynamischen“ HTTP-Anfrage- und Antwortzyklus und baut auf dem auf, was wir im letzten Artikel betrachtet haben, mit viel mehr Details. Um das Ganze "realistisch" zu halten, verwenden wir den Kontext einer Website eines Sportmannschafts-Managers, auf der ein Trainer den Namen seiner Mannschaft und die Größe des Teams in einem HTML-Formular auswählen und eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel erhalten kann.

Das Diagramm unten zeigt die Hauptelemente der "Team Coach"-Website, zusammen mit nummerierten Labels für die Reihenfolge der Operationen, wenn der Coach auf seine "beste Teamauswahl"-Liste zugreift. Die Teile der Website, die sie dynamisch machen, sind die _Web Application_ (so nennen wir den serverseitigen Code, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und deren Beziehungen enthält, und die _HTML-Templates_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittnummern für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler übermittelt hat, ist die Reihenfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server unter Verwendung der Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spieleranzahl entweder als URL-Parameter (z.B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B. `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, da die Anfrage nur Daten abruft (und keine Daten ändert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie zur Verarbeitung an die _Web Application_ weiter (der Webserver entscheidet, wie mit verschiedenen URLs basierend auf Mustermatchingregeln, die in seiner Konfiguration definiert sind, umzugehen ist).
3. Die _Web Application_ identifiziert, dass das _Ziel_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten, und ermittelt den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL. Die _Web Application_ holt dann die erforderlichen Informationen aus der Datenbank (unter Verwendung zusätzlicher "interner" Parameter zur Definition, welche Spieler "best" sind, und möglicherweise auch unter Verwendung der Identität des eingeloggten Trainers aus einem clientseitigen Cookie).
4. Die _Web Application_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb eines HTML-Templates einfügt.
5. Die _Web Application_ gibt das generierte HTML an den Webbrowser zurück (über den _Webserver_), zusammen mit einem HTTP-Statuscode von 200 ("Erfolg"). Sollte irgendetwas die Rückgabe des HTMLs verhindern, wird die _Web Application_ einen anderen Code zurückgeben – zum Beispiel „404“, um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann, das zurückgegebene HTML zu verarbeiten und sendet separate Anfragen, um alle anderen CSS- oder JavaScript-Dateien abzurufen, auf die es verweist (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (wiederum basiert die korrekte Dateiverarbeitung auf Konfigurationsregeln und URL-Mustermatching).

Ein Vorgang zum Aktualisieren eines Datensatzes in der Datenbank würde ähnlich behandelt, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage des Browsers als `POST`-Anfrage kodiert werden sollte.

### Andere Arbeiten erledigen

Die Aufgabe einer _Web Application_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank zur Datenabfrage oder -aktualisierung sehr häufige Aufgaben sind, kann der Code gleichzeitig andere Dinge tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Web Application_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Seite zu bestätigen. Die Seite könnte auch Protokollierung durchführen oder andere Operationen ausführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss nicht unbedingt HTML-Snippets/Dateien in der Antwort zurückgeben. Es kann stattdessen dynamisch andere Dateitypen (Text, PDF, CSV, etc.) oder sogar Daten (JSON, XML, etc.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch Abrufen von Inhalten vom Server mit JavaScript arbeiten und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neuer Inhalt angezeigt werden soll. Weitere Informationen zur Motivation für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht, finden Sie unter [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Web-Frameworks erleichtern das Schreiben von Code, um die oben beschriebenen Operationen zu handhaben.

Eine der wichtigsten Aufgaben, die sie durchführen, ist die Bereitstellung einfacher Mechanismen, um URLs für verschiedene Ressourcen/Seiten zu spezifischen Handler-Funktionen zuzuordnen. Dies erleichtert es, den Code, der mit jedem Ressourcentyp zu tun hat, separat zu halten. Es hat auch Vorteile hinsichtlich Wartung, da Sie die URL, die verwendet wird, um eine bestimmte Funktion zu liefern, an einer Stelle ändern können, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie zum Beispiel den folgenden Django (Python)-Code, der zwei URL-Muster mit zwei View-Funktionen verknüpft. Das erste Muster sorgt dafür, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im Modul `views` übergeben wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-View-Funktion übergeben.

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
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z.B. `r'^junior/$'`), weil sie eine Mustermatchingtechnik namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen jetzt nicht wissen, wie reguläre Ausdrücke funktionieren, außer dass sie es uns erlauben, Muster in der URL zu erkennen (anstatt die hartkodierten Werte oben) und sie als Parameter in unseren View-Funktionen zu verwenden. Als Beispiel könnte ein wirklich einfaches RegEx sagen "passen Sie einen einzelnen Großbuchstaben gefolgt von 4 bis 7 Kleinbuchstaben an."

Das Web-Framework macht es auch einfach für eine View-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden. Wenn wir ein Modell namens _Team_ mit einem Feld namens "_team_type_" haben, können wir eine einfache Abfragesyntax verwenden, um alle Teams zurückzubekommen, die einen bestimmten Typ haben.

Das folgende Beispiel erhält eine Liste aller Teams, die den genauen (groß-/kleinschreibungssensitiven) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von Doppel-Underscore und dann die Art des Abgleichs, der verwendet werden soll (in diesem Fall `exact`). Es gibt viele andere Arten von Übereinstimmungen und wir können sie verketten. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die Funktion `junior()` die Liste der Junior-Teams erhalten hat, ruft sie die Funktion `render()` auf, übergibt den ursprünglichen `HttpRequest`, ein HTML-Template und ein "Kontext"-Objekt, das die in das Template aufzunehmenden Informationen definiert. Die Funktion `render()` ist eine Komfortfunktion, die HTML unter Verwendung eines Kontexts und eines HTML-Templates generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen weiteren Aufgaben helfen. Wir erörtern viele weitere Vorteile und einige beliebte Web-Framework-Auswahlen im nächsten Artikel.

## Zusammenfassung

An dieser Stelle sollten Sie einen guten Überblick über die Aufgaben haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
