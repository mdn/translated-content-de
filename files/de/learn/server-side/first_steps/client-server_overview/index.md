---
title: Client-Server Überblick
slug: Learn/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Nun, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung verstanden haben, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der meiste serverseitige Code von Webseiten Anfragen und Antworten auf ähnliche Weise behandelt, wird dies Ihnen helfen zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis darüber, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von Client-Server-Interaktionen in einer dynamischen Website, insbesondere welche Operationen vom serverseitigen Code ausgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt keinen realen Code in der Diskussion, da wir noch keinen Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie wählen.

## Webserver und HTTP (eine Einführung)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche starten, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage enthält:

- Eine URL, die den Zielserver und die Ressource identifiziert (z.B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein auszuführendes Tool).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei abzurufen oder einige Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgelistet:

  - `GET`: Abrufen einer spezifischen Ressource (z.B. eine HTML-Datei mit Produktinformationen oder einer Liste von Produkten).
  - `POST`: Erstellen einer neuen Ressource (z.B. Hinzufügen eines neuen Artikels zu einem Wiki, Hinzufügen eines neuen Kontakts zu einer Datenbank).
  - `HEAD`: Abrufen der Metadateninformationen über eine spezifische Ressource, ohne den Body wie `GET` zu erhalten. Man könnte zum Beispiel eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann die (teuerere) `GET`-Anfrage nur verwenden, wenn sich die Ressource geändert hat.
  - `PUT`: Aktualisieren einer vorhandenen Ressource (oder Erstellen einer neuen, wenn sie nicht existiert).
  - `DELETE`: Löschen der angegebenen Ressource.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger häufige/fortgeschrittene Aufgaben, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen können mit der Anfrage kodiert werden (z.B. HTML-Formulardaten). Informationen können folgendermaßen kodiert werden:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die zum Server gesendet wird, indem Name-/Wert-Paare am Ende angehängt werden — zum Beispiel `http://example.com?name=Fred&age=11`. Es gibt immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und das Kaufmanns-Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und dann erneut eingereicht werden können. Als Ergebnis werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten innerhalb des Anfrage-Bodys kodiert sind.
  - Client-seitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um deren Anmeldestatus und Berechtigungen/Zugriff auf Ressourcen zu bestimmen.

Webserver warten auf Anfragen von Clients, bearbeiten diese, wenn sie ankommen, und antworten dem Webbrowser mit einer HTTP-Antwort. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status), der anzeigt, ob die Anfrage erfolgreich war (z.B., {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}} wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}} wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen usw.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Während der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z.B. referenziert eine HTML-Seite normalerweise JavaScript- und CSS-Dateien) und wird separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (wie in den folgenden Abschnitten besprochen) verwenden genau dasselbe Kommunikationsprotokoll/muster.

### `GET`-Anfrage/Antwortbeispiel

Sie können eine einfache `GET`-Anfrage durchführen, indem Sie auf einen Link klicken oder auf einer Website suchen (wie auf einer Suchmaschinen-Homepage). Zum Beispiel sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "Client-Server-Übersicht" suchen, in etwa so aus wie der unten gezeigte Text (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Web-Standard" definiert ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detail nicht wissen, aber zumindest wissen Sie jetzt, woher das alles kommt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird als **Header** bezeichnet und enthält nützliche Informationen über die Anfrage, auf die gleiche Weise wie ein [HTML-Kopf](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt, der im Body ist):

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

Die erste und zweite Zeile enthalten den größten Teil der Informationen, über die wir oben gesprochen haben:

- Der Anfragetyp (`GET`).
- Die URL der Zielressource (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Host-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält auch eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — Sie können sehen, dass das Cookie in diesem Fall eine ID zur Verwaltung von Sitzungen enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die restlichen Zeilen enthalten Informationen über den verwendeten Browser und die Art von Antworten, die er verarbeiten kann.
Zum Beispiel sehen Sie hier, dass:

- Mein Browser (`User-Agent`) ist Mozilla Firefox (`Mozilla/5.0`).
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann den angegebenen Zeichensatz (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) und die Sprachen (`Accept-Language: en-US,en;q=0.8,es;q=0.6`) akzeptieren.
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d.h. die Herkunft der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage wird unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage Erfolg hatte.
- Wir können sehen, dass die Antwort im `text/html`-Format ist (`Content-Type`).
- Wir können auch sehen, dass es den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Kopf gibt uns auch an, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der das tatsächliche HTML enthält, das die Anfrage zurückgegeben hat.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B. wann sie generiert wurde), den Server und wie er erwartet, dass der Browser die Seite behandelt (z.B. die `X-Frame-Options: DENY`-Zeile teilt dem Browser mit, dass diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden darf).

### `POST`-Anfrage/Antwortbeispiel

Ein HTTP-`POST` geschieht, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der folgende Text zeigt die HTTP-Anfrage, die gesendet wird, wenn ein Benutzer neue Profildetails auf dieser Seite einreicht. Das Format der Anfrage ist fast dasselbe wie das im vorherigen Beispiel gezeigte `GET`-Anfrage, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter hat. Wie Sie sehen können, werden die Informationen aus dem Formular im Body der Anfrage kodiert (zum Beispiel wird der neue Benutzer-Benutzername mit folgender Anweisung gesetzt: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort von der Anfrage wird unten gezeigt. Der Statuscode `302 Found` teilt dem Browser mit, dass das Posten erfolgreich war, und dass er eine zweite HTTP-Anfrage stellen muss, um die im `Location`-Feld angegebene Seite zu laden. Die Informationen sind sonst ähnlich wie bei der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z.B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst versuchen. Verwenden Sie eines der verlinkten Werkzeuge und navigieren Sie dann durch eine Website und bearbeiten Sie Profilinformationen, um die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser haben auch Werkzeuge, die Netzwerk-Anfragen überwachen (zum Beispiel das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest kodierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also zum Beispiel eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese gleiche Seite an jeden Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Website hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `my-product2.html`) und so weiter. Dies kann wirklich ineffizient werden — was passiert, wenn Sie zu tausenden von Produktseiten kommen? Sie würden viel Code über jede Seite hinweg wiederholen (das grundlegende Seiten-Template, die Struktur usw.), und wenn Sie etwas an der Seitenstruktur ändern wollten — wie zum Beispiel einen neuen Abschnitt "verwandte Produkte" hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind ausgezeichnet, wenn Sie nur eine kleine Anzahl von Seiten haben und dasselbe Content an jeden Benutzer senden möchten. Sie können jedoch erheblichen Pflegeaufwand mit sich bringen, wenn die Anzahl der Seiten größer wird.

Fassen wir noch einmal zusammen, wie dies funktioniert, indem wir erneut das Architekturdiagramm der statischen Seite betrachten, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, in der die URL seiner HTML-Seite spezifiziert wird. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) von `200 OK` (was Erfolg anzeigt) zurück. Der Server könnte einen anderen Statuscode zurückgeben, zum Beispiel `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server einer statischen Seite muss nur `GET`-Anfragen verarbeiten, da der Server keine modifizierbaren Daten speichert. Er ändert auch seine Antworten nicht basierend auf HTTP-Anfragedaten (z. B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Seiten funktionieren, ist dennoch nützlich beim Erlernen der serverseitigen Programmierung, da dynamische Seiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder usw.) auf genau die gleiche Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfrage-URL und den Daten generieren und zurückgeben kann (anstatt immer die gleiche fest kodierte Datei für eine bestimmte URL zurückzugeben). Beim Beispiel einer Produktseite würde der Server Produktinformationen in einer Datenbank speichern, anstatt in einzelnen HTML-Dateien. Bei Empfang einer HTTP-`GET`-Anfrage für ein Produkt ermittelt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und erstellt dann die HTML-Seite für die Antwort, indem er die Daten in eine HTML-Vorlage einfügt. Dies hat große Vorteile gegenüber einer statischen Seite:

Die Verwendung einer Datenbank ermöglicht es, die Produktinformationen effizient in einer leicht erweiterbaren, modifizierbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Templates macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einem Ort, in einer einzigen Vorlage, und nicht in möglicherweise tausenden von statischen Seiten geschehen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet einen Schritt-für-Schritt-Überblick über den "dynamischen" HTTP-Anfrage- und Antwortzyklus und baut auf dem auf, was wir im letzten Artikel betrachtet haben, mit viel mehr Details. Um "die Sache real zu halten", verwenden wir den Kontext einer Sportteam-Manager-Website, bei der ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen und eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel zurückbekommen kann.

Das untenstehende Diagramm zeigt die Hauptelemente der "Team-Coach"-Website zusammen mit nummerierten Labels für die Abfolge von Operationen, wenn der Trainer auf seine "beste Team"-Liste zugreift. Die Teile der Website, die sie dynamisch machen, sind die _Webanwendung_ (so werden wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, und die _HTML-Templates_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittzahlen für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler eingereicht hat, ist die Abfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server unter Verwendung der Basis-URL für die Ressource (`/best`) und kodiert den Teamnamen und die Spieleranzahl entweder als URL-Parameter (z.B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B. `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, weil die Anfrage nur Daten abruft (und nicht modifiziert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie unterschiedliche URLs basierend auf den im Konfigurationsdokument definierten Musterübereinstimmungsregeln behandelt werden sollen).
3. Die _Webanwendung_ identifiziert, dass der _Zweck_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten, und ermittelt den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL. Die _Webanwendung_ ruft dann die erforderlichen Informationen aus der Datenbank ab (unter Verwendung zusätzlicher "internen" Parameter zur Definition, welche Spieler "am besten" sind und möglicherweise auch die Identität des angemeldeten Trainers von einem clientseitigen Cookie).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter in einem HTML-Template einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser zurück (via dem _Webserver_), zusammen mit einem HTTP-Statuscode von 200 ("Erfolg"). Falls etwas verhindert, dass das HTML zurückgegeben wird, wird die _Webanwendung_ einen anderen Code zurückgeben — zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann, das erreichte HTML zu verarbeiten, und sendet separate Anfragen, um eventuell andere referenzierte CSS- oder JavaScript-Dateien abzurufen (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (auch hier basiert die korrekte Datei-Verarbeitung auf Konfigurationsregeln und URL-Musterübereinstimmung).

Ein Vorgang zum Aktualisieren eines Eintrags in der Datenbank würde ähnlich behandelt, mit der Ausnahme, dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage vom Browser als `POST`-Anfrage kodiert werden sollte.

### Andere Arbeiten erledigen

Die Aufgabe einer _Webanwendung_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während das Interagieren mit einer Datenbank, um Informationen zu erhalten oder zu aktualisieren, sehr häufig ist, kann der Code andere Dinge gleichzeitig erledigen oder auch gar nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Seite könnte auch Logging oder andere Operationen ausführen.

### Etwas anderes als HTML zurückgeben

Server-seitiger Website-Code muss nicht zwingend HTML-Snippets/Dateien in den Antworten zurückgeben. Er kann stattdessen dynamisch andere Dateitypen (Texte, PDFs, CSVs usw.) oder sogar Daten (JSON, XML usw.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch das Abrufen von Inhalten vom Server über JavaScript funktionieren und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neuer Inhalt angezeigt werden soll. Siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) für mehr über die Motivation für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht.

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Server-seitige Web-Frameworks machen das Schreiben von Code, um die oben beschriebenen Operationen zu handhaben, viel einfacher.

Eine der wichtigsten Operationen, die sie ausführen, ist das Bereitstellen einfacher Mechanismen, um URLs für verschiedene Ressourcen/Seiten bestimmten Handler-Funktionen zuzuordnen. Dies erleichtert es, den Code, der mit jedem Ressourcentyp verbunden ist, getrennt zu halten. Es hat auch Vorteile in Bezug auf die Wartung, da Sie die URL, die für die Bereitstellung einer bestimmten Funktion verwendet wird, an einem Ort ändern können, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie zum Beispiel den folgenden Django (Python) Code, der zwei URL-Muster zwei View-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im `views`-Modul weitergegeben wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-View-Funktion weitergeleitet.

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
> Die ersten Parameter in den `url()`-Funktionen können etwas seltsam aussehen (z.B. `r'^junior/$'`), da sie eine Musterübereinstimmungstechnik namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen zu diesem Zeitpunkt nicht wissen, wie reguläre Ausdrücke funktionieren, außer dass sie es uns ermöglichen, Muster in der URL abzugleichen (anstatt der oben genannten fest kodierten Werte) und sie als Parameter in unseren View-Funktionen zu verwenden. Ein wirklich einfaches RegEx könnte zum Beispiel sagen: "Übereinstimmung mit einem einzelnen Großbuchstaben, gefolgt von zwischen 4 und 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach, für eine View-Funktion Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten ist in Modellen definiert, das sind Python-Klassen, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden sollen. Wenn wir ein Modell namens _Team_ mit einem Feld von "_team_type_" haben, dann können wir eine einfache Abfragesyntax verwenden, um alle Teams zurückzubekommen, die einen bestimmten Typ haben.

Das folgende Beispiel erhält eine Liste aller Teams, die einen genauen (Groß-/Kleinschreibung beachten) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von einem doppelten Unterstrich, und dann die Art der Übereinstimmung, die verwendet werden soll (in diesem Fall `exact`). Es gibt viele andere Arten von Übereinstimmungen und wir können sie in einer Kette aneinanderhängen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf, übergibt die ursprüngliche `HttpRequest`, eine HTML-Vorlage und ein "Kontext"-Objekt, das die in der Vorlage enthaltenen Informationen definiert. Die `render()`-Funktion ist eine Komfortfunktion, die HTML unter Verwendung eines Kontexts und einer HTML-Vorlage generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir diskutieren viele weitere Vorteile und einige beliebte Web-Framework-Optionen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul helfen wir Ihnen, das beste Web-Framework für Ihre erste Seite auszuwählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
