---
title: Client-Server-Übersicht
slug: Learn/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Jetzt, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine „dynamische Anfrage“ von einem Browser erhält. Da der größte Teil des serverseitigen Codes für Webseiten Anfragen und Antworten auf ähnliche Weise behandelt, wird dies Ihnen helfen zu verstehen, was Sie tun müssen, wenn Sie den Großteil Ihres eigenen Codes schreiben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um Interaktionen zwischen Client und Server in einer dynamischen Website zu verstehen und insbesondere, welche Operationen vom serverseitigen Code durchgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt in dieser Diskussion keinen echten Code, da wir noch keinen Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie auswählen.

## Webserver und HTTP (ein Primer)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche ausführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL, die den Zielserver und die Ressource identifiziert (z. B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein Tool, das ausgeführt werden soll).
- Eine Methode, die die erforderliche Aktion definiert (z. B. um eine Datei abzurufen oder Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:

  - `GET`: Abrufen einer bestimmten Ressource (z. B. einer HTML-Datei mit Informationen über ein Produkt oder einer Liste von Produkten).
  - `POST`: Erstellen einer neuen Ressource (z. B. Hinzufügen eines neuen Artikels zu einem Wiki, Hinzufügen eines neuen Kontakts zu einer Datenbank).
  - `HEAD`: Abrufen von Metadateninformationen über eine spezifische Ressource, ohne den Körper wie `GET` zu erhalten. Sie könnten beispielsweise eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (teurere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie geändert wurde.
  - `PUT`: Aktualisieren einer bestehenden Ressource (oder Erstellen einer neuen, wenn diese nicht existiert).
  - `DELETE`: Löschen der angegebenen Ressource.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger häufige/fortgeschrittene Aufgaben gedacht, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen können mit der Anfrage kodiert werden (z. B. HTML-Formulardaten). Informationen können kodiert werden als:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der an den Server gesendeten URL, indem sie Name/Wert-Paare an das Ende anfügen — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein kaufmännisches Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus „unsicher“, da sie von Benutzern geändert und dann erneut übermittelt werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten innerhalb des Anfragetextes kodiert sind.
  - Clientseitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um ihren Anmeldestatus und Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Client-Anforderungsmeldungen, verarbeiten sie, wenn sie eintreffen, und antworten dem Webbrowser mit einer HTTP-Antwortmeldung. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war (z. B. „`200 OK`“ für Erfolg, „`404 Not Found`“, wenn die Ressource nicht gefunden werden kann, „`403 Forbidden`“, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, usw.). Der Körper einer erfolgreichen Antwort auf eine `GET`-Anfrage würde die angeforderte Ressource enthalten.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Im Rahmen der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z. B. verweist eine HTML-Seite normalerweise auf JavaScript- und CSS-Dateien) und wird separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (in den folgenden Abschnitten besprochen) verwenden genau dasselbe Kommunikationsprotokoll/-muster.

### GET-Anfrage-/Antwortbeispiel

Sie können eine einfache `GET`-Anfrage stellen, indem Sie auf einen Link klicken oder auf einer Seite suchen (wie auf einer Suchmaschinen-Homepage). Zum Beispiel sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff „Client-Server-Übersicht“ suchen, dem unten gezeigten Text sehr ähnlich (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem „Webstandard“ ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)) definiert. Sie müssen dieses Detailniveau nicht kennen, aber jetzt wissen Sie, woher das alles stammt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird als **Header** bezeichnet und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Kopf](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt, der im Körper steht):

```http
GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, wie Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

Die erste und zweite Zeile enthalten die meisten der oben besprochenen Informationen:

- Die Art der Anfrage (`GET`).
- Die Zielressourcen-URL (`/en-US/search/`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Hostwebsite (developer.mozilla.org).
- Das Ende der ersten Zeile enthält auch eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — in diesem Fall sehen Sie, dass das Cookie eine ID zum Verwalten von Sitzungen enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die verbleibenden Zeilen enthalten Informationen über den verwendeten Browser und die Art von Antworten, die er verarbeiten kann.
Beispielsweise können Sie hier sehen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox (`Mozilla/5.0`) ist.
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann den angegebenen Zeichensatz (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) und die Sprachen (`Accept-Language: en-US,en;q=0.8,es;q=0.6`) akzeptieren.
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d. h. den Ursprung der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Körper haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage ist unten dargestellt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort `text/html` formatiert ist (`Content-Type`).
- Wir können auch sehen, dass sie den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Kopfbereich sagt uns auch, wie groß sie ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Körper**-Inhalt — der den eigentlichen HTML-Code enthält, der von der Anfrage zurückgegeben wurde.

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

Der Rest des Antwort-Headers enthält Informationen zur Antwort (z. B. wann sie generiert wurde), zum Server und dazu, wie der Browser die Seite behandeln soll (z. B. besagt die Zeile `X-Frame-Options: DENY` dem Browser, diese Seite nicht in einem {{htmlelement("iframe")}} in einer anderen Seite einzubetten).

### POST-Anfrage-/Antwortbeispiel

Ein HTTP-`POST` erfolgt, wenn Sie ein Formular mit Informationen einreichen, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der unten gezeigte Text zeigt die HTTP-Anfrage, die gemacht wird, wenn ein Benutzer neue Profildetails auf dieser Seite einreicht. Das Format der Anfrage ist fast das gleiche wie das des `GET`-Anfrage-Beispiels, das zuvor gezeigt wurde, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

```http
POST /en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, wie Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

Der Hauptunterschied besteht darin, dass die URL keine Parameter enthält. Wie Sie sehen, sind die Informationen aus dem Formular im Körper der Anfrage kodiert (zum Beispiel wird der neue Benutzername mit `&user-fullname=Hamish+Willee` gesetzt).

#### Die Antwort

Die Antwort auf die Anfrage wird unten gezeigt. Der Statuscode "`302 Found`" teilt dem Browser mit, dass der Post erfolgreich war und dass er eine zweite HTTP-Anfrage stellen muss, um die Seite zu laden, die im `Location`-Feld angegeben ist. Die Informationen sind ansonsten ähnlich wie bei der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z. B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können es selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Site und bearbeiten Sie Profilinformationen, um die verschiedenen Anforderungen und Antworten zu sehen. Die meisten modernen Browser haben auch Werkzeuge, die Netzwerkanfragen überwachen (zum Beispiel das [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Werkzeug in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest kodierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also beispielsweise eine Seite über ein Produkt unter `/static/myproduct1.html` haben, wird dieselbe Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Seite hinzufügen, müssen Sie eine weitere Seite hinzufügen (z. B. `myproduct2.html`) und so weiter. Das kann sehr ineffizient werden — was passiert, wenn Sie tausende von Produktseiten haben? Sie würden viel Code auf jeder Seite wiederholen (die grundlegende Seitenschablone, Struktur usw.), und wenn Sie die Seitenstruktur ändern wollten — wie z. B. einen neuen Bereich „Ähnliche Produkte“ hinzufügen — müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind ausgezeichnet, wenn Sie eine kleine Anzahl von Seiten haben und immer denselben Inhalt an jeden Benutzer senden möchten. Allerdings können sie erhebliche Wartungskosten haben, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns rekapitulieren, wie dies funktioniert, indem wir das Diagramm der statischen Seitenarchitektur, das wir im letzten Artikel betrachtet haben, erneut betrachten.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer auf eine Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite anzeigt. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) von „`200 OK`“ enthält (was auf Erfolg hinweist). Der Server könnte einen anderen Statuscode zurückgeben, beispielsweise „`404 Not Found`“, wenn die Datei auf dem Server nicht vorhanden ist, oder „`301 Moved Permanently`“, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server einer statischen Website wird nur `GET`-Anfragen verarbeiten müssen, da der Server keine modifizierbaren Daten speichert. Er ändert auch seine Antworten nicht basierend auf HTTP-Anfragedaten (z. B. URL-Parameter oder Cookies).

Das Verständnis davon, wie statische Seiten funktionieren, ist dennoch nützlich, wenn Sie die serverseitige Programmierung erlernen, da dynamische Seiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder usw.) auf genau dieselbe Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anforderungs-URL und den Daten generieren und zurückgeben kann (anstatt immer dieselbe fest kodierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produktseite würde der Server Produkt"daten" in einer Datenbank speichern, anstatt einzelne HTML-Dateien. Bei Empfang einer HTTP-`GET`-Anfrage für ein Produkt bestimmt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und erstellt dann die HTML-Seite für die Antwort, indem er die Daten in eine HTML-Schablone einfügt. Dies hat große Vorteile gegenüber einer statischen Seite:

Die Verwendung einer Datenbank ermöglicht es, Produktinformationen effizient in einer leicht erweiterbaren, modifizierbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Schablonen macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einem Ort, in einer einzigen Schablone, und nicht über potenziell tausende von statischen Seiten hinweg geschehen muss.

### Anatomie eines dynamischen Anrufs

Dieser Abschnitt bietet einen Schritt-für-Schritt-Überblick über den "dynamischen" HTTP-Anfrage- und Antwortzyklus, der auf dem aufbaut, was wir im letzten Artikel mit viel mehr Details betrachtet haben. Um die Sache "real" zu halten, werden wir den Kontext einer Website für Teammanager verwenden, bei der ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen und eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel zurückbekommen kann.

Das Diagramm unten zeigt die Hauptelemente der "Teamtrainer"-Website, zusammen mit nummerierten Labels für die Abfolge der Operationen, wenn der Trainer auf seine "beste Team"-Liste zugreift. Die Teile der Website, die sie dynamisch machen, sind die _Webanwendung_ (so werden wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, und die _HTML-Schablonen_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittnummern für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler eingereicht hat, ist die Abfolge der Operationen wie folgt:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server, der die Basis-URL für die Ressource (`/best`) verwendet und das Team und die Spielerzahl entweder als URL-Parameter (z. B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z. B. `/best/my_team_name/11/`) kodiert. Eine `GET`-Anfrage wird verwendet, da die Anfrage nur Daten abruft (und keine Daten ändert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt anhand von Mustermatching-Regeln, die in seiner Konfiguration definiert sind, wie verschiedene URLs behandelt werden).
3. Die _Webanwendung_ identifiziert, dass die _Absicht_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten, und ermittelt den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL. Die _Webanwendung_ ruft dann die benötigten Informationen aus der Datenbank ab (unter Verwendung zusätzlicher "interner" Parameter, um zu definieren, welche Spieler "beste" sind und möglicherweise auch die Identität des eingelogten Trainers aus einem clientseitigen Cookie zu erhalten).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter in einer HTML-Schablone einfügt.
5. Die _Webanwendung_ gibt dem Webbrowser (über den _Webserver_) das generierte HTML zurück, zusammen mit einem HTTP-Statuscode von 200 ("erfolgreich"). Wenn irgendetwas das Zurückgeben des HTML verhindert, wird die _Webanwendung_ einen anderen Code zurückgeben — beispielsweise „404“, um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann mit der Verarbeitung des zurückgegebenen HTML und sendet separate Anfragen, um alle anderen CSS- oder JavaScript-Dateien herunterzuladen, auf die verwiesen wird (siehe Schritt 7).
7. Der Webserver lädt statische Dateien vom Dateisystem und gibt sie direkt an den Browser zurück (wiederum basiert die korrekte Dateiverarbeitung auf Konfigurationsregeln und Mustermatching für die URL).

Ein Vorgang zum Aktualisieren eines Eintrags in der Datenbank würde ähnlich gehandhabt, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage des Browsers als `POST`-Anfrage kodiert werden sollte.

### Durchführen anderer Arbeiten

Die Aufgabe einer _Webanwendung_ ist es, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank zum Holen oder Aktualisieren von Informationen sehr häufige Aufgaben sind, kann der Code zur gleichen Zeit andere Dinge tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Seite könnte auch Protokollierungen oder andere Operationen durchführen.

### Rückgabe von etwas anderem als HTML

Serverseitiger Webseiten-Code muss nicht unbedingt HTML-Snippets/Dateien in der Antwort zurückgeben. Er kann stattdessen dynamisch andere Dateitypen (Text, PDF, CSV usw.) oder sogar Daten (JSON, XML usw.) erstellen und zurückgeben.

Dies ist besonders relevant für Webseiten, die durch das Abrufen von Inhalten vom Server mit JavaScript arbeiten und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neuer Inhalt angezeigt werden soll. Weitere Informationen zur Motivation für diesen Ansatz und dazu, wie dieses Modell aus Sicht des Clients aussieht, finden Sie unter [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Web-Frameworks machen das Schreiben von Code, um die oben beschriebenen Operationen durchzuführen, viel einfacher.

Eine der wichtigsten Operationen, die sie durchführen, ist die Bereitstellung einfacher Mechanismen zum Zuordnen von URLs für verschiedene Ressourcen/Seiten zu spezifischen Handlerfunktionen. Dies erleichtert es, den mit jedem Ressourcentyp verbundenen Code getrennt zu halten. Es hat auch Vorteile in Bezug auf die Wartung, da Sie die URL, die für eine bestimmte Funktion verwendet wird, an einer Stelle ändern können, ohne die Handlerfunktion ändern zu müssen.

Betrachten Sie zum Beispiel den folgenden Django (Python)-Code, der zwei URL-Muster zu zwei View-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im `views`-Modul weitergegeben wird. Eine Anfrage, die das Muster „`/best/junior`“ hat, wird stattdessen an die `junior()`-Ansichtsfunktion weitergegeben.

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
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z. B. `r'^junior/$'`), weil sie eine Mustermatching-Technik namens "reguläre Ausdrücke" (RegEx, oder RE) verwenden. Sie müssen nicht wissen, wie reguläre Ausdrücke an diesem Punkt funktionieren, außer dass sie es uns ermöglichen, Muster in der URL zu erkennen (anstelle der oben fest kodierten Werte) und sie als Parameter in unseren View-Funktionen zu verwenden. Ein wirklich einfaches Beispiel für einen RegEx könnte sagen: "Erkenne einen einzelnen Großbuchstaben, gefolgt von zwischen 4 und 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach, dass eine View-Funktion Informationen aus der Datenbank abruft. Die Struktur unserer Daten ist in Modellen definiert, bei denen es sich um Python-Klassen handelt, die die in der zugrunde liegenden Datenbank zu speichernden Felder definieren. Wenn wir ein Modell namens _Team_ mit einem Feld "_team_type_" haben, können wir eine einfache Abfragesyntax verwenden, um alle Teams zu erhalten, die einen bestimmten Typ haben.

Das unten stehende Beispiel erhält eine Liste aller Teams, die den genauen (Groß-/Kleinschreibung) `team_type` "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von Doppelunterstrichen und dann die Art des zu verwendenden Abgleichs (in diesem Fall `exact`). Es gibt viele andere Arten von Übereinstimmungen und wir können sie aneinanderreihen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf, übergibt die ursprüngliche `HttpRequest`, eine HTML-Schablone und ein "Kontext"-Objekt, das die in der Schablone einzuschließenden Informationen definiert. Die `render()`-Funktion ist eine Komfortfunktion, die HTML mit einem Kontext und einer HTML-Schablone generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir diskutieren viele weitere Vorteile und einige beliebte Web-Framework-Auswahlen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Seite zu wählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
