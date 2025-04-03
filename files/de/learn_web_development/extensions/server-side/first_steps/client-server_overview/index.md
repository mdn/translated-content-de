---
title: Übersicht von Client-Server
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Jetzt, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine „dynamische Anfrage“ von einem Browser erhält. Da der Code auf der Serverseite der meisten Websites Anfragen und Antworten in ähnlicher Weise verarbeitet, wird Ihnen dieser Abschnitt helfen zu verstehen, was Sie beim Schreiben Ihres eigenen Codes tun müssen.

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
        Verstehen der Client-Server-Interaktionen in einer dynamischen Website und insbesondere, welche Operationen vom serverseitigen Code ausgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

In dieser Diskussion gibt es keinen echten Code, weil wir noch kein Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie wählen.

## Web-Server und HTTP (eine Einführung)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche ausführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL zur Identifizierung des Zielservers und der Ressource (z. B. eine HTML-Datei, ein bestimmter Datenpunkt auf dem Server oder ein auszuführendes Werkzeug).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei zu erhalten oder einige Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:

  - `GET`: Holen einer bestimmten Ressource (z. B. eine HTML-Datei, die Informationen über ein Produkt enthält, oder eine Liste von Produkten).
  - `POST`: Erstellen einer neuen Ressource (z. B. Hinzufügen eines neuen Artikels zu einem Wiki, Hinzufügen eines neuen Kontakts zu einer Datenbank).
  - `HEAD`: Holen der Metadateninformationen über eine bestimmte Ressource ohne den eigentlichen Inhalt wie `GET` zu holen. Sie könnten z. B. eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann erst die (kostenintensivere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie sich geändert hat.
  - `PUT`: Aktualisieren einer vorhandenen Ressource (oder Erstellen einer neuen, falls sie nicht existiert).
  - `DELETE`: Löschen der angegebenen Ressource.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger übliche/fortschrittliche Aufgaben, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen können mit der Anfrage kodiert werden (zum Beispiel HTML-Formulardaten). Informationen können kodiert werden als:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem Name/Wert-Paare an ihr Ende angehängt werden — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein kaufmännisches Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und dann erneut übermittelt werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten im Anfragekörper kodiert sind.
  - Clientseitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüsseln, die der Server verwenden kann, um deren Anmeldestatus und Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Clientanfragen, verarbeiten sie bei Ankunft und antworten mit einer HTTP-Antwortnachricht an den Webbrowser. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war (z.B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}} wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}} wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, etc.). Der Körper der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Im Rahmen der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z. B. eine HTML-Seite verweist meist auf JavaScript- und CSS-Dateien) und sendet separate HTTP-Anfragen, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (im Folgenden besprochen) verwenden genau dasselbe Kommunikationsprotokoll/Muster.

### GET-Anfrage-Antwort-Beispiel

Sie können eine einfache `GET`-Anfrage stellen, indem Sie auf einen Link klicken oder auf einer Seite suchen (wie auf einer Suchmaschinen-Startseite). Zum Beispiel ähnelt die HTTP-Anfrage, die gesendet wird, wenn Sie eine Suche auf MDN mit dem Begriff "Client-Server-Übersicht" durchführen, stark dem unten gezeigten Text (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Webstandard" definiert ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detailniveau nicht kennen, aber zumindest wissen Sie jetzt, woher das alles stammt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird als **Header** bezeichnet und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Head](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) nützliche Informationen über ein HTML-Dokument enthält (jedoch nicht den eigentlichen Inhalt selbst, der im Körper ist):

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

- Den Anfragetyp (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Host-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält auch eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — in diesem Fall sehen Sie, dass das Cookie eine ID zur Sitzungsverwaltung enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die verbleibenden Zeilen enthalten Informationen über den verwendeten Browser und die Art der Antworten, die er verarbeiten kann.
Zum Beispiel können Sie hier sehen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox ist (`Mozilla/5.0`).
- Er gzip-komprimierte Informationen akzeptieren kann (`Accept-Encoding: gzip`).
- Er die angegebenen Sprachen akzeptieren kann (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthält (d.h. den Ursprung der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Körper haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort für diese Anfrage wird unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns sagt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im `text/html`-Format vorliegt (`Content-Type`).
- Wir können auch sehen, dass es den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Kopfteil gibt uns auch an, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Körperinhalt** — der den tatsächlich durch die Anfrage zurückgegebenen HTML-Code enthält.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B., wann sie generiert wurde), den Server und wie der Browser die Seite behandeln soll (z.B. die Zeile `X-Frame-Options: DENY` weist den Browser an, diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Seite einzubetten).

### POST Anfrage-/Antwort-Beispiel

Ein HTTP-`POST` wird gemacht, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der unten stehende Text zeigt die HTTP-Anfrage, die gemacht wird, wenn ein Benutzer neue Profildetails auf dieser Seite einreicht. Das Format der Anfrage ist fast dasselbe wie das des vorher gezeigten `GET`-Anfrage-Beispiels, allerdings wird die Anfrage in der ersten Zeile als `POST` identifiziert.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter enthält. Wie Sie sehen können, werden die Informationen aus dem Formular im Körper der Anfrage kodiert (zum Beispiel wird der neue Benutzer-Vollname festgelegt mit: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort auf die Anfrage wird unten gezeigt. Der Statuscode `302 Found` sagt dem Browser, dass der Beitrag erfolgreich war und dass er eine zweite HTTP-Anfrage ausstellen muss, um die im Feld `Location` angegebene Seite zu laden. Die Informationen sind ansonsten ähnlich denen der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Websniffern (z.B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Seite und bearbeiten Sie Profildaten, um die unterschiedlichen Anfragen und Antworten zu sehen. Die meisten modernen Browser verfügen auch über Tools, die Netzwerk-Anfragen überwachen (zum Beispiel das [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben hart kodierten Inhalt vom Server zurückgibt, wenn eine bestimmte Ressource angefordert wird. Wenn Sie zum Beispiel eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese gleiche Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Seite hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `my-product2.html`) und so weiter. Das kann sehr ineffizient werden — was passiert, wenn Sie zu Tausenden von Produktseiten kommen? Sie würden viel Code über jede Seite wiederholen (das grundlegende Seitentemplate, die Struktur, etc.), und wenn Sie etwas an der Seitenstruktur ändern möchten — wie zum Beispiel einen neuen Abschnitt "Verwandte Produkte" hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind hervorragend, wenn Sie eine kleine Anzahl von Seiten haben und denselben Inhalt an jeden Benutzer senden möchten. Sie können jedoch erhebliche Wartungskosten mit sich bringen, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns zusammenfassen, wie das funktioniert, indem wir uns noch einmal das Diagramm der statischen Seitenarchitektur ansehen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite angibt. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) von `200 OK` (der Erfolg bedeutet) enthält. Der Server kann einen anderen Statuscode zurückgeben, z.B. `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber zu einem anderen Standort umgeleitet wurde.

Der Server für eine statische Seite wird nur jemals GET-Anfragen verarbeiten müssen, da der Server keine modifizierbaren Daten speichert. Er ändert seine Antworten auch nicht basierend auf HTTP-Anfragedaten (z.B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Seiten funktionieren, ist dennoch nützlich beim Erlernen der serverseitigen Programmierung, da dynamische Seiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder, etc.) auf genau dieselbe Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfrage-URL und den Daten generieren und zurückgeben kann (anstatt immer dieselbe hart kodierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produktseite würde der Server Produkt-"Daten" in einer Datenbank speichern, anstatt individuelle HTML-Dateien. Wenn er eine HTTP-`GET`-Anfrage für ein Produkt empfängt, bestimmt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und erzeugt dann die HTML-Seite für die Antwort, indem er die Daten in ein HTML-Template einfügt. Dies hat große Vorteile gegenüber einer statischen Seite:

Die Verwendung einer Datenbank ermöglicht es, Produktinformationen effizient in einer leicht erweiterbaren, modifizierbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Templates erleichtert es, die HTML-Struktur zu ändern, da dies nur an einer Stelle, nämlich in einem einzigen Template, und nicht über möglicherweise Tausende von statischen Seiten hinweg, erfolgen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet eine schrittweise Übersicht über den "dynamischen" HTTP-Anfrage- und Antwortzyklus und baut auf dem auf, was wir im letzten Artikel mit viel mehr Details betrachtet haben. Um es "real" zu halten, verwenden wir den Kontext einer Sport-Team-Manager-Website, auf der ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen kann, um eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel zu erhalten.

Das folgende Diagramm zeigt die Hauptelemente der "Teamtrainer"-Website, zusammen mit nummerierten Labels für die Abfolge der Operationen, wenn der Trainer auf seine "beste Team"-Liste zugreift. Die Teile der Website, die sie dynamisch machen, sind die _Webanwendung_ (so werden wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und deren Beziehungen enthält, und die _HTML-Templates_.

![Dieses Diagramm zeigt einen einfachen Webserver mit Schritt-Nummern für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler eingereicht hat, ist die Abfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server unter Verwendung der Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spieleranzahl entweder als URL-Parameter (z.B., `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B., `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, da die Anfrage nur Daten abruft (nicht verändert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie verschiedene URLs behandelt werden, basierend auf Musterabgleichsregeln, die in seiner Konfiguration definiert sind).
3. Die _Webanwendung_ identifiziert, dass die _Absicht_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten, und ermittelt den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL. Die _Webanwendung_ erhält dann die benötigten Informationen aus der Datenbank (unter Verwendung zusätzlicher "interner" Parameter zur Definition, welche Spieler "am besten" sind, und möglicherweise auch durch Abrufen der Identität des angemeldeten Trainers aus einem clientseitigen Cookie).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb eines HTML-Templates einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser zurück (über den _Webserver_) zusammen mit einem HTTP-Statuscode von 200 ("Erfolg"). Wenn irgendetwas das Zurückgeben des HTML verhindert, gibt die _Webanwendung_ einen anderen Code zurück — zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann mit der Verarbeitung des zurückgegebenen HTML und sendet separate Anfragen, um alle anderen CSS- oder JavaScript-Dateien zu erhalten, auf die es verweist (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (auch hier basiert die korrekte Dateihandhabung auf Konfigurationsregeln und Musterabgleichsregeln in der URL).

Eine Operation zum Aktualisieren eines Datensatzes in der Datenbank würde ähnlich gehandhabt, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage des Browsers als `POST`-Anfrage kodiert sein sollte.

### Andere Arbeiten erledigen

Die Aufgabe einer _Webanwendung_ ist es, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank, um Informationen zu holen oder zu aktualisieren, sehr häufig ist, kann der Code auch andere Dinge gleichzeitig tun oder gar nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um deren Registrierung auf der Website zu bestätigen. Die Seite könnte auch Protokollierungen oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss im Antwort nicht HTML-Snippets/-Dateien zurückgeben. Er kann stattdessen dynamisch andere Arten von Dateien (Text, PDF, CSV, etc.) oder sogar Daten (JSON, XML, etc.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch das Abrufen von Inhalten vom Server mittels JavaScript arbeiten und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neue Inhalte angezeigt werden sollen. Siehe [Netzwerkanfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) für mehr über die Motivation für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht.

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Web-Frameworks erleichtern das Schreiben von Code zur Ausführung der oben beschriebenen Operationen erheblich.

Eine der wichtigsten Operationen, die sie ausführen, ist die Bereitstellung einfacher Mechanismen zur Zuordnung von URLs für verschiedene Ressourcen/Seiten zu bestimmten Handler-Funktionen. Dies erleichtert es, den mit jedem Ressourcentyp verbundenen Code getrennt zu halten. Es hat auch Vorteile in Bezug auf Wartung, da man die für eine bestimmte Funktion verwendete URL an einer Stelle ändern kann, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie zum Beispiel den folgenden Django (Python)-Code, der zwei URL-Muster zu zwei Ansichts-Funktionen zuordnet. Das erste Muster gewährleistet, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im Modul `views` übergeben wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-Ansichts-Funktion übergeben.

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
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z.B. `r'^junior/$'`), weil sie eine Musterabgleichstechnik namens "reguläre Ausdrücke" (RegEx oder RE) verwenden. Sie müssen nicht wissen, wie reguläre Ausdrücke zu diesem Zeitpunkt funktionieren, außer dass sie es uns ermöglichen, Muster in der URL abzugleichen (anstatt der oben fest codierten Werte) und sie als Parameter in unseren Ansichts-Funktionen zu verwenden. Als Beispiel könnte ein wirklich einfacher RegEx besagen "ein einzelner Großbuchstabe, gefolgt von 4 bis 7 Kleinbuchstaben".

Das Web-Framework erleichtert es auch, Informationen aus der Datenbank für eine Ansichts-Funktion zu holen. Die Struktur unserer Daten ist in Modellen definiert, die Python-Klassen sind, die die in der zugrunde liegenden Datenbank zu speichernden Felder definieren. Wenn wir ein Modell mit dem Namen _Team_ haben, das ein Feld "_team_type_" hat, können wir eine einfache Abfragesyntax verwenden, um alle Teams mit einem bestimmten Typ zurückzubekommen.

Das folgende Beispiel erhält eine Liste aller Teams, die den genauen (groß-/kleinschreibungssensitiven) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`), gefolgt von doppeltem Unterstrich, und dann die Art des zu verwendenden Abgleichs (in diesem Fall `exact`). Es gibt viele andere Arten von Abgleichungen und wir können sie aneinanderreihen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die `junior()`-Funktion die Liste der Junioren-Teams geholt hat, ruft sie die `render()`-Funktion auf und gibt die ursprünglichen `HttpRequest`, ein HTML-Template und ein "Kontext"-Objekt an, das die in das Template aufzunehmenden Informationen definiert. Die `render()`-Funktion ist eine Bequemlichkeitsfunktion, die HTML unter Verwendung eines Kontexts und eines HTML-Templates generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir diskutieren viele weitere Vorteile und einige beliebte Web-Framework-Auswahlen im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein Web-Framework auf der Serverseite dies erleichtern kann.

In einem folgenden Modul helfen wir Ihnen, das beste Web-Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
