---
title: Überblick über Client-Server
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Jetzt, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der meiste serverseitige Code von Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, hilft Ihnen dies, zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

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
        Das Verständnis von Client-Server-Interaktionen auf einer dynamischen Website und insbesondere, welche Operationen vom serverseitigen Code ausgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt keinen echten Code in der Diskussion, da wir noch kein Webframework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Webframework Sie wählen.

## Webserver und HTTP (ein Primer)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) unter Verwendung des **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche durchführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL, die den Zielserver und die Ressource identifiziert (z.B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein auszuführendes Tool).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei zu erhalten oder um Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgelistet:

  - `GET`: Eine spezifische Ressource abrufen (z.B. eine HTML-Datei mit Informationen über ein Produkt oder eine Liste von Produkten).
  - `POST`: Eine neue Ressource erstellen (z.B. einen neuen Artikel zu einem Wiki hinzufügen, einen neuen Kontakt zu einer Datenbank hinzufügen).
  - `HEAD`: Die Metadateninformationen über eine spezifische Ressource abrufen, ohne den eigentlichen Inhalt wie bei `GET` zu erhalten. Sie könnten beispielsweise eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (aufwändigere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie sich geändert hat.
  - `PUT`: Eine bestehende Ressource aktualisieren (oder eine neue erstellen, wenn sie nicht existiert).
  - `DELETE`: Die angegebene Ressource löschen.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger häufige/komplexere Aufgaben, so dass wir sie hier nicht behandeln werden.

- Zusätzliche Informationen können mit der Anfrage kodiert werden (zum Beispiel HTML-Formulardaten). Informationen können kodiert werden als:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der an den Server gesendeten URL, indem Name/Wert-Paare am Ende angehängt werden, z.B. `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen mit seinem zugehörigen Wert trennt, und ein Kaufmanns-Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und erneut gesendet werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten im Anfragenkörper kodiert sind.
  - Client-seitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um deren Anmeldestatus und Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Anfragen von Clients, verarbeiten sie bei ihrem Eintreffen und antworten dem Webbrowser mit einer HTTP-Antwort. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war (z.B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, etc.). Der Körper der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Während der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z.B. eine HTML-Seite verweist normalerweise auf JavaScript- und CSS-Dateien) und wird separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (besprochen in den folgenden Abschnitten) verwenden genau dasselbe Kommunikationsprotokoll/-muster.

### Beispiel für `GET`-Anfrage/-Antwort

Sie können eine einfache `GET`-Anfrage machen, indem Sie auf einen Link klicken oder auf einer Seite (wie einer Suchmaschinen-Homepage) suchen. Zum Beispiel sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "client-server overview" suchen, dem unten gezeigten Text sehr ähnlich (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Ihrer Einrichtung abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Webstandard" definiert ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detailniveau nicht kennen, aber zumindest wissen Sie jetzt, woher das alles stammt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird **Header** genannt und enthält nützliche Informationen über die Anfrage, in ähnlicher Weise wie ein [HTML-Kopf](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt selbst, der im Körper ist):

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

Die ersten beiden Zeilen enthalten die meiste der oben besprochenen Informationen:

- Der Anfragetyp (`GET`).
- Die Ziel-Ressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Hosting-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält außerdem eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — in diesem Fall sehen Sie, dass das Cookie eine ID zur Verwaltung von Sitzungen enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die verbleibenden Zeilen enthalten Informationen über den verwendeten Browser und die Art der Antworten, die er verarbeiten kann. Zum Beispiel können Sie hier sehen:

- Mein Browser (`User-Agent`) ist Mozilla Firefox (`Mozilla/5.0`).
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann die angegebenen Sprachen akzeptieren (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d.h. den Ursprung der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Körper haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage wird unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im `text/html`-Format vorliegt (`Content-Type`).
- Wir können auch sehen, dass der UTF-8-Zeichensatz verwendet wird (`Content-Type: text/html; charset=utf-8`).
- Der Kopf gibt uns auch die Größe an (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Körper**-Inhalt — der das tatsächliche HTML enthält, das von der Anfrage zurückgegeben wird.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B. wann sie generiert wurde), den Server und wie er erwartet, dass der Browser die Seite verarbeitet (z.B. gibt die Zeile `X-Frame-Options: DENY` dem Browser an, dass diese Seite nicht in ein {{htmlelement("iframe")}} in einer anderen Seite eingebettet werden darf).

### Beispiel für `POST`-Anfrage/-Antwort

Eine HTTP-`POST`-Anfrage wird gesendet, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der untenstehende Text zeigt die HTTP-Anfrage, die gesendet wird, wenn ein Nutzer auf dieser Seite neue Profildaten einreicht. Das Format der Anfrage ist fast dasselbe wie das im vorherigen `GET`-Beispiel gezeigte, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

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

Der Hauptunterschied ist, dass die URL keine Parameter hat. Wie Sie sehen können, sind die Informationen aus dem Formular im Körper der Anfrage kodiert (zum Beispiel wird der neue vollständige Benutzername mit `&user-fullname=Hamish+Willee` gesetzt).

#### Die Antwort

Die Antwort auf die Anfrage wird unten gezeigt. Der Statuscode `302 Found` teilt dem Browser mit, dass das `POST` erfolgreich war und dass er eine zweite HTTP-Anfrage senden muss, um die im `Location`-Feld angegebene Seite zu laden. Die Informationen ähneln ansonsten denen der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z.B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Seite, um Profildaten zu bearbeiten und die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser haben auch Tools, die Netzwerk-Anfragen überwachen (zum Beispiel das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest kodierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also beispielsweise eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese gleiche Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Seite hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `my-product2.html`) und so weiter. Dies kann wirklich ineffizient werden — was passiert, wenn Sie Tausende von Produktseiten haben? Sie würden viel Code auf jeder Seite wiederholen (das grundlegende Seitentemplate, die Struktur usw.), und wenn Sie irgendetwas an der Seitenstruktur ändern wollten — wie z.B. einen neuen "Ähnliche Produkte"-Abschnitt hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind ausgezeichnet, wenn Sie nur eine kleine Anzahl von Seiten haben und denselben Inhalt an jeden Benutzer senden möchten. Sie können jedoch erhebliche Kosten für die Wartung haben, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns noch einmal zusammenfassen, wie dies funktioniert, indem wir erneut das Diagramm zur Architektur statischer Seiten betrachten, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite spezifiziert. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) von `200 OK` (indiziert Erfolg) zurück. Der Server könnte einen anderen Statuscode zurückgeben, z.B. `404 Not Found`, wenn die Datei auf dem Server nicht vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Standort umgeleitet wurde.

Der Server für eine statische Seite muss nur `GET`-Anfragen verarbeiten, da der Server keine änderbaren Daten speichert. Er ändert auch seine Antworten nicht basierend auf HTTP-Anfragedaten (z.B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Seiten funktionieren, ist dennoch nützlich beim Lernen der serverseitigen Programmierung, da dynamische Seiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder etc.) auf genau die gleiche Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfragen-URL und Daten generiert und zurückgibt (anstatt immer dieselbe fest kodierte Datei für eine bestimmte URL zurückzugeben). Im Beispiel einer Produktseite würde der Server Produkt"daten" in einer Datenbank speichern anstatt einzelner HTML-Dateien. Bei Empfang einer HTTP-`GET`-Anfrage für ein Produkt, bestimmt der Server die Produkt-ID, holt die Daten aus der Datenbank und konstruiert dann die HTML-Seite für die Antwort, indem er die Daten in ein HTML-Template einfügt. Dies hat große Vorteile gegenüber einer statischen Seite:

Das Verwenden einer Datenbank ermöglicht es, die Produktinformationen auf eine effiziente, leicht erweiterbare, modifizierbare und durchsuchbare Weise zu speichern.

HTML-Templates machen es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einem Ort in einem einzigen Template erfolgen muss und nicht über möglicherweise Tausende von statischen Seiten verteilt.

### Anatomie eines dynamischen Antrags

Dieser Abschnitt bietet einen Schritt-für-Schritt-Überblick über den "dynamischen" HTTP-Anfrage- und Antwortzyklus und baut auf dem auf, was wir im letzten Artikel betrachtet haben, jedoch viel detaillierter. Um "die Dinge real zu halten", werden wir den Kontext einer Website eines Sport-Team-Managers verwenden, bei der ein Trainer den Teamnamen und die Teamgröße in einem HTML-Formular auswählen und eine vorgeschlagene "beste Aufstellung" für das nächste Spiel zurückerhalten kann.

Das folgende Diagramm zeigt die Hauptelemente der "Team-Trainer"-Website, zusammen mit nummerierten Etiketten für die Sequenz der Operationen, wenn der Trainer auf seine "beste Team"-Liste zugreift. Die Teile der Webseite, die sie dynamisch machen, sind die _Webanwendung_ (dies ist, wie wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält und die _HTML-Templates_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittnummern für jeden der Schritte der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler eingereicht hat, ist die Abfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server unter Verwendung der Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spieleranzahl entweder als URL-Parameter (z.B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B. `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, weil die Anfrage nur Daten abruft (nicht modifiziert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie verschiedene URLs basierend auf Musterabgleichsregeln in seiner Konfiguration zu behandeln sind).
3. Die _Webanwendung_ identifiziert, dass das _Anliegen_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten und findet den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL heraus. Die _Webanwendung_ holt sich dann die benötigten Informationen aus der Datenbank (indem sie zusätzliche "interne" Parameter verwendet, um zu definieren, welche Spieler "beste" sind, und möglicherweise auch die Identität des angemeldeten Trainers aus einem clientseitigen Cookie abruft).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb eines HTML-Templates einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser zurück (via _Webserver_) zusammen mit einem HTTP-Statuscode 200 ("Erfolg"). Wenn irgendetwas verhindert, dass das HTML zurückgegeben wird, gibt die _Webanwendung_ einen anderen Code zurück — zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann, das zurückgegebene HTML zu verarbeiten und sendet separate Anfragen, um alle anderen CSS- oder JavaScript-Dateien zu holen, die es referenziert (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (wieder basiert die korrekte Dateiverarbeitung auf Konfigurationsregeln und URL-Musterabgleich).

Eine Operation zur Aktualisierung eines Datensatzes in der Datenbank würde ähnlich gehandhabt, außer dass, wie bei jedem Datenbank-Update, die HTTP-Anfrage des Browsers als `POST`-Anfrage kodiert werden sollte.

### Andere Arbeiten durchführen

Die Aufgabe einer _Webanwendung_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank, um Informationen zu erhalten oder zu aktualisieren, sehr häufige Aufgaben sind, könnte der Code andere Dinge gleichzeitig tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Website könnte auch Logging oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss nicht HTML-Snippets/Dateien in der Antwort zurückgeben. Stattdessen kann er dynamisch andere Dateitypen (Text, PDF, CSV, etc.) oder sogar Daten (JSON, XML, etc.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch Abrufen von Inhalten vom Server über JavaScript und dynamischen Seitenaktualisierungen arbeiten, anstatt immer eine neue Seite zu laden, wenn neuer Inhalt angezeigt werden soll. Weitere Informationen zur Motivation für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht, finden Sie unter [Netzwerkanfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).

## Webframeworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Webframeworks erleichtern das Schreiben von Code zur Verwaltung der oben beschriebenen Operationen erheblich.

Eine der wichtigsten Operationen, die sie ausführen, ist die Bereitstellung einfacher Mechanismen zur Zuordnung von URLs für verschiedene Ressourcen/Seiten zu bestimmten Handler-Funktionen. Dies erleichtert es, den mit jedem Ressourcentyp verknüpften Code zu trennen. Es hat auch Vorteile in Bezug auf die Wartung, da Sie die URL verwenden können, um ein bestimmtes Feature an einem Ort bereitzustellen, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie zum Beispiel den folgenden Django (Python) Code, der zwei URL-Muster zu zwei "View"-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im `views`-Modul übergeben wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-View-Funktion weitergegeben.

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
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z.B. `r'^junior/$'`), weil sie eine Musterabgleichsmethode namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen an dieser Stelle nicht wissen, wie reguläre Ausdrücke funktionieren, außer dass sie es uns erlauben, Muster in der URL zu erkennen (anstatt wie oben die fest kodierten Werte) und diese als Parameter in unseren View-Funktionen zu verwenden. Als Beispiel könnte ein wirklich einfacher RegEx sagen: "ein einzelner Großbuchstabe, gefolgt von zwischen 4 und 7 Kleinbuchstaben."

Das Webframework erleichtert es einer View-Funktion auch, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden sollen. Wenn wir ein Modell mit dem Namen _Team_ mit einem Feld "_team_type_" haben, können wir eine einfache Abfragesyntax verwenden, um alle Teams mit einem bestimmten Typ zurückzubekommen.

Das folgende Beispiel ruft eine Liste aller Teams ab, die den genauen (Groß- und Kleinschreibung berücksichtigenden) `team_type` von "junior" haben - beachten Sie das Format: Feldname (`team_type`), gefolgt von doppeltem Unterstrich und dann den entsprechenden Abgleichstyp (in diesem Fall `exact`). Es gibt viele andere Abgleichstypen, und wir können sie verketten. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf, übergibt die originale `HttpRequest`, ein HTML-Template und ein "Kontext"-Objekt, das die Informationen definiert, die im Template enthalten sein sollen. Die `render()`-Funktion ist eine Komfortfunktion, die HTML mithilfe eines Kontexts und eines HTML-Templates generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Webframeworks Ihnen auch bei vielen anderen Aufgaben helfen. Wir besprechen viele weitere Vorteile und einige beliebte Webframework-Optionen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Webframework dies erleichtern kann.

In einem folgenden Modul helfen wir Ihnen, das beste Webframework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
