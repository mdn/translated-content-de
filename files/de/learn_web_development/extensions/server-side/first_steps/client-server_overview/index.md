---
title: Überblick über Client-Server
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Nun, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der meiste serverseitige Code von Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, wird dies Ihnen helfen zu verstehen, was zu tun ist, wenn Sie Ihren eigenen Code schreiben.

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
        Das Verständnis von Client-Server-Interaktionen auf einer dynamischen Website, insbesondere welche Operationen vom serverseitigen Code durchgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt in dieser Diskussion keinen echten Code, da wir noch kein Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch dennoch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie wählen.

## Webserver und HTTP (eine Einführung)

Web-Browser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotokoll ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche durchführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL, die den Zielserver und die Ressource identifiziert (z. B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein auszuführendes Tool).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei zu erhalten oder Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:

  - `GET`: Abrufen einer spezifischen Ressource (z.B. einer HTML-Datei mit Informationen über ein Produkt oder einer Liste von Produkten).
  - `POST`: Erstellen einer neuen Ressource (z.B. Hinzufügen eines neuen Artikels zu einem Wiki, eines neuen Kontakts zu einer Datenbank).
  - `HEAD`: Abrufen der Metadateninformationen über eine spezifische Ressource, ohne den Body wie `GET` zu erhalten. Sie könnten zum Beispiel eine `HEAD`-Anfrage nutzen, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (mehr "kostenintensive") `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie geändert wurde.
  - `PUT`: Aktualisieren einer bestehenden Ressource (oder Erstellen einer neuen, wenn sie nicht existiert).
  - `DELETE`: Löschen der angegebenen Ressource.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger häufige/fortgeschrittene Aufgaben gedacht, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen können in die Anfrage codiert werden (zum Beispiel HTML-Formulardaten). Informationen können codiert werden als:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem Namens-/Wertepaare am Ende hinzugefügt werden — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und dann erneut gesendet werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten: `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten im Request-Body codiert sind.
  - Clientseitige Cookies: Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüsseln, die der Server verwenden kann, um den Anmeldestatus und die Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Client-Anforderungsnachrichten, verarbeiten sie bei Ankunft und antworten dem Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht (z.B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, usw.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Als Teil der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z.B. verweist eine HTML-Seite normalerweise auf JavaScript- und CSS-Dateien) und sendet separate HTTP-Anfragen, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (die in den folgenden Abschnitten behandelt werden) verwenden genau dasselbe Kommunikationsprotokoll/-muster.

### Beispiel für eine GET-Anfrage/Antwort

Sie können eine einfache `GET`-Anfrage stellen, indem Sie auf einen Link klicken oder auf einer Website (z.B. einer Suchmaschinen-Startseite) suchen. Zum Beispiel wird die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "client-server overview" suchen, ungefähr so aussehen wie der unten gezeigte Text (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Webstandard" ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)) definiert. Sie müssen dieses Detail nicht wissen, aber zumindest wissen Sie jetzt, woher das alles kommt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird **Header** genannt und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Head](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt selbst, der sich im Body befindet):

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

Die erste und zweite Zeile enthalten die meisten Informationen, über die wir oben gesprochen haben:

- Den Anfragetyp (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Host-Website (developer.mozilla.org).
- Am Ende der ersten Zeile befindet sich auch eine kurze Zeichenkette, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen zu den clientseitigen Cookies — Sie können in diesem Fall sehen, dass das Cookie eine ID zur Sitzungsverwaltung enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die verbleibenden Zeilen enthalten Informationen über den verwendeten Browser und die Art von Antworten, die er verarbeiten kann.
Zum Beispiel können Sie hier sehen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox ist (`Mozilla/5.0`).
- Er kann gzip-komprimierte Informationen akzeptieren (`Accept-Encoding: gzip`).
- Er kann die angegebenen Sprachen akzeptieren (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d.h. die Herkunft der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, der in diesem Fall jedoch leer ist.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage ist unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile beinhaltet den Antwortcode `200 OK`, was uns sagt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im Format `text/html` vorliegt (`Content-Type`).
- Wir können auch sehen, dass es den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Header sagt uns auch, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der den eigentlichen HTML-Code enthält, der durch die Anfrage zurückgegeben wurde.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B. wann sie generiert wurde), den Server und wie der Browser die Seite behandeln soll (z.B. die Zeile `X-Frame-Options: DENY` sagt dem Browser, dass diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden soll).

### Beispiel für eine POST-Anfrage/Antwort

Ein HTTP-`POST` wird durchgeführt, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der unten stehende Text zeigt die HTTP-Anfrage, die gesendet wird, wenn ein Benutzer auf dieser Seite neue Profildaten einreicht. Das Format der Anfrage ist fast dasselbe wie das vorherige Beispiel einer `GET`-Anfrage, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter hat. Wie Sie sehen können, sind die Informationen aus dem Formular im Body der Anfrage codiert (zum Beispiel wird der neue Benutzer-Vollname gesetzt mit: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort auf die Anfrage ist unten gezeigt. Der Statuscode `302 Found` teilt dem Browser mit, dass der Post erfolgreich war und dass er eine zweite HTTP-Anfrage senden muss, um die im Feld `Location` angegebene Seite zu laden. Die Informationen sind ansonsten ähnlich wie die für die Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Schnüfflern (z.B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Site und bearbeiten Sie Profildaten, um die unterschiedlichen Anfragen und Antworten zu sehen. Die meisten modernen Browser verfügen auch über Tools, die Netzwerk-Anfragen überwachen (zum Beispiel das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest kodierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird. Wenn Sie also beispielsweise eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese gleiche Seite an jeden Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Website hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `my-product2.html`) und so weiter. Das kann sehr ineffizient werden — was passiert, wenn Sie zu Tausenden von Produktseiten gelangen? Sie würden viel Code auf jeder Seite wiederholen (das grundlegende Seitentemplate, die Struktur usw.), und wenn Sie irgendetwas an der Seitenstruktur ändern wollten — zum Beispiel einen neuen Abschnitt "Ähnliche Produkte" hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind ausgezeichnet, wenn Sie eine kleine Anzahl von Seiten haben und denselben Inhalt an jeden Benutzer senden möchten. Sie können jedoch erhebliche Kosten bei der Pflege verursachen, wenn die Anzahl der Seiten größer wird.

Erinnern wir uns, wie dies funktioniert, indem wir nochmals das Architekturschema für statische Seiten anschauen, das wir im letzten Artikel gesehen haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer auf eine Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite angibt. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) von `200 OK` (Erfolg anzeigend) enthält. Der Server kann einen anderen Statuscode zurückgeben, z.B. `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server für eine statische Seite muss nur `GET`-Anfragen verarbeiten, da der Server keine änderbaren Daten speichert. Er ändert seine Antworten auch nicht basierend auf HTTP-Anfrage-Daten (z.B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Seiten funktionieren, ist dennoch nützlich, wenn Sie serverseitige Programmierung lernen, da dynamische Seiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder usw.) auf genau dieselbe Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfrage-URL und Daten generieren und zurückgeben kann (anstatt immer dieselbe fest codierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produktseite würde der Server "Daten" in einer Datenbank anstelle von individuellen HTML-Dateien speichern. Wenn er eine HTTP-`GET`-Anfrage für ein Produkt erhält, bestimmt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und konstruiert dann die HTML-Seite für die Antwort, indem er die Daten in ein HTML-Template einfügt. Dies hat bedeutende Vorteile gegenüber einer statischen Seite:

Die Verwendung einer Datenbank ermöglicht es, die Produktinformationen effizient in einer leicht erweiterbaren, änderbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Templates macht es sehr einfach, die HTML-Struktur zu ändern, weil dies nur an einer Stelle, in einem einzigen Template, und nicht über potenziell Tausende von statischen Seiten hinweg geschehen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet eine Schritt-für-Schritt-Übersicht über den "dynamischen" HTTP-Anfrage und -Antwortzyklus und baut auf dem auf, was wir im letzten Artikel behandelt haben, mit viel mehr Details. Um "realistisch zu bleiben", verwenden wir den Kontext einer Website eines Sport-Team-Managers, auf der ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen und eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel erhalten kann.

Das Diagramm unten zeigt die Hauptelemente der "Team-Trainer" Website, zusammen mit nummerierten Etiketten für die Reihenfolge der Operationen, wenn der Trainer seine "beste Team"-Liste aufruft. Die Teile der Website, die sie dynamisch machen, sind die _Webanwendung_ (so werden wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, und die _HTML-Templates_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittzahlen für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler eingereicht hat, ist die Reihenfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server mit der Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spieleranzahl entweder als URL-Parameter (z.B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B. `/best/my_team_name/11/`). Eine `GET`-Anfrage wird verwendet, da die Anfrage nur Daten abruft (nicht ändert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie an die _Webanwendung_ zur Verarbeitung weiter (der Webserver bestimmt, wie er unterschiedliche URLs basierend auf in seiner Konfiguration definierten Musterabgleichen behandelt).
3. Die _Webanwendung_ identifiziert die _Absicht_ der Anfrage, indem sie die "beste Teamliste" basierend auf der URL (`/best/`) ermittelt und den erforderlichen Teamnamen und die Anzahl der Spieler aus der URL liest. Die _Webanwendung_ erhält dann die erforderlichen Informationen aus der Datenbank (unter Verwendung zusätzlicher "interner" Parameter, um zu definieren, welche Spieler "am besten" sind, und möglicherweise auch indem sie die Identität des angemeldeten Trainers aus einem clientseitigen Cookie erhält).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb eines HTML-Templates einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser (über den _Webserver_) zurück, zusammen mit einem HTTP-Statuscode 200 ("Erfolg"). Wenn irgendetwas verhindert, dass das HTML zurückgegeben wird, gibt die _Webanwendung_ einen anderen Code zurück — zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann mit der Verarbeitung des zurückgegebenen HTML-Codes und sendet separate Anfragen, um alle anderen CSS- oder JavaScript-Dateien zu erhalten, auf die er verweist (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (auch hier basiert die korrekte Dateiverarbeitung auf Konfigurationsregeln und URL-Musterabgleich).

Eine Operation zum Aktualisieren eines Datensatzes in der Datenbank würde ähnlich gehandhabt, außer, dass wie jede Datenbankaktualisierung die HTTP-Anfrage vom Browser als `POST`-Anfrage codiert werden sollte.

### Andere Arbeiten ausführen

Die Aufgabe einer _Webanwendung_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Obwohl das Interagieren mit einer Datenbank zum Abrufen oder Aktualisieren von Informationen sehr häufige Aufgaben sind, kann der Code gleichzeitig andere Dinge tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ durchführen könnte, wäre das Senden einer E-Mail an die Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Website könnte auch Protokollierung oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Server-seitiger Website-Code muss nicht unbedingt HTML-Snippets/Dateien in der Antwort zurückgeben. Es kann stattdessen dynamisch andere Dateitypen (Text, PDF, CSV usw.) oder sogar Daten (JSON, XML usw.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch das Abrufen von Inhalten vom Server mit JavaScript und dem dynamischen Aktualisieren der Seite arbeiten, anstatt immer eine neue Seite zu laden, wenn neuer Inhalt angezeigt werden soll. Weitere Informationen zur Motivation für diesen Ansatz und wie dieses Modell aus der Sicht des Clients aussieht, finden Sie unter [Netzwerkanfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).

## Web Frameworks vereinfachen die serverseitige Webprogrammierung

Server-seitige Web-Frameworks erleichtern das Schreiben von Code, um die oben beschriebenen Operationen durchzuführen, erheblich.

Eines der wichtigsten Operationen, die sie durchführen, ist das Bereitstellen einfacher Mechanismen, um URLs für verschiedene Ressourcen/Seiten auf spezifische Handler-Funktionen zuzuordnen. Dies macht es einfacher, den mit jedem Ressourcentyp verbundenen Code getrennt zu halten. Es hat auch Vorteile in Bezug auf die Wartung, da Sie die URL ändern können, die zur Bereitstellung einer bestimmten Funktion verwendet wird, ohne die Handler-Funktion ändern zu müssen.

Zum Beispiel betrachten Sie den folgenden Django (Python) Code, der zwei URL-Muster zwei Ansichts-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im Modul `views` übergeben wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die ansichtsfunktion `junior()` übergeben.

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
> Die ersten Parameter in den `url()`-Funktionen mögen etwas seltsam aussehen (z.B. `r'^junior/$'`), da sie eine Musterabgleichstechnik namens "Reguläre Ausdrücke" (RegEx, oder RE) verwenden. An dieser Stelle müssen Sie nicht wissen, wie reguläre Ausdrücke funktionieren, außer dass sie es uns ermöglichen, Muster in der URL abzugleichen (anstatt der fest kodierten Werte oben) und sie als Parameter in unseren Ansichts-Funktionen zu verwenden. Ein wirklich einfacher RegEx könnte zum Beispiel "eine einzelne Großbuchstabe gefolgt von 4 bis 7 Kleinbuchstaben" sagen.

Das Web-Framework macht es auch einfach für eine Ansichts-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten ist in Modellen definiert, die Python-Klassen sind, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden. Wenn wir ein Modell namens _Team_ mit einem Feld "_team_type_" haben, können wir eine einfache Abfragesyntax verwenden, um alle Teams zurückzubekommen, die einen bestimmten Typ haben.

Das folgende Beispiel erhält eine Liste aller Teams, die den genauen (Groß-/Kleinschreibung berücksichtigt) `team_type` von "junior" haben — beachten Sie das Format: Feldname (`team_type`) gefolgt von Doppelunterstrich, und dann der Typ des Abgleichs, der verwendet werden soll (in diesem Fall `exact`). Es gibt viele andere Arten von Übereinstimmungen, und wir können sie verketten. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die Funktion `junior()` die Liste der Junior-Teams erhalten hat, ruft sie die Funktion `render()` auf, übergibt die ursprüngliche `HttpRequest`, ein HTML-Template und ein "Kontext"-Objekt, das die Informationen definiert, die im Template enthalten sein sollen. Die Funktion `render()` ist eine Komfortfunktion, die HTML unter Verwendung eines Kontexts und eines HTML-Templates erstellt und in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir diskutieren viele weitere Vorteile und einige beliebte Web-Framework-Auswahlmöglichkeiten im nächsten Artikel.

## Zusammenfassung

An diesem Punkt sollten Sie einen guten Überblick über die Operationen haben, die serverseitiger Code durchführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul helfen wir Ihnen bei der Auswahl des besten Web-Frameworks für Ihre erste Seite.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
