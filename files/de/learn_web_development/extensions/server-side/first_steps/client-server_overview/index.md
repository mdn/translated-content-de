---
title: Übersicht Client-Server
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Jetzt, da Sie den Zweck und die potenziellen Vorteile der Server-seitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine "dynamische Anfrage" von einem Browser erhält. Da der meiste Server-seitige Code von Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, wird Ihnen dies helfen zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

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
        Verstehen der Interaktionen zwischen Client und Server in einer dynamischen Website, insbesondere der Operationen, die vom Server-seitigen Code durchgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt keinen realen Code in der Diskussion, da wir noch kein Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem Server-seitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie auswählen.

## Webserver und HTTP (eine Einführung)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite einen Link anklicken, ein Formular absenden oder eine Suche ausführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage beinhaltet:

- Eine URL, die den Zielserver und die Ressource identifiziert (z.B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein auszuführendes Tool).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel eine Datei abzurufen oder Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgelistet:

  - `GET`: Eine spezifische Ressource abrufen (z.B. eine HTML-Datei mit Informationen zu einem Produkt oder eine Liste von Produkten).
  - `POST`: Eine neue Ressource erstellen (z.B. einen neuen Artikel zu einem Wiki hinzufügen, einen neuen Kontakt zu einer Datenbank hinzufügen).
  - `HEAD`: Die Metadateninformationen zu einer spezifischen Ressource abrufen, ohne den Body abzurufen, wie es `GET` tun würde. Sie könnten zum Beispiel eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (teurere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie sich geändert hat.
  - `PUT`: Eine bestehende Ressource aktualisieren (oder eine neue erstellen, wenn sie nicht existiert).
  - `DELETE`: Die angegebene Ressource löschen.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger häufige/fortgeschrittene Aufgaben gedacht, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen, die mit der Anfrage kodiert werden können (zum Beispiel HTML-Formulardaten). Informationen können wie folgt kodiert werden:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem sie Name/Wert-Paare am Ende hinzufügen — zum Beispiel `http://example.com?name=Fred&age=11`. Es gibt immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein Kaufmanns-Und (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus "unsicher", da sie von Benutzern geändert und erneut gesendet werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten im Body der Anfrage kodiert sind.
  - Client-seitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server nutzen kann, um ihren Anmeldestatus und Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Client-Anfrage-Nachrichten, verarbeiten sie bei Eingang und beantworten den Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war oder nicht (z.B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen, usw.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, rendert der Webbrowser sie. Als Teil der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z.B. eine HTML-Seite verweist normalerweise auf JavaScript- und CSS-Dateien) und wird separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (wie in den folgenden Abschnitten besprochen) verwenden exakt dasselbe Kommunikationsprotokoll/muster.

### Beispiel für eine GET-Anfrage/Antwort

Sie können eine einfache `GET`-Anfrage stellen, indem Sie auf einen Link klicken oder auf einer Website suchen (wie auf einer Suchmaschine-Startseite). Beispielsweise sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff "client-server overview" suchen, ungefähr so aus wie der unten gezeigte Text (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem "Webstandard" festgelegt ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detail nicht kennen, aber zumindest wissen Sie jetzt, woher das alles stammt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird als **Header** bezeichnet und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Head](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) nützliche Informationen über ein HTML-Dokument enthält (aber nicht den eigentlichen Inhalt selbst, der sich im Body befindet):

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

- Die Art der Anfrage (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Host-Website (developer.mozilla.org).
- Am Ende der ersten Zeile befindet sich auch eine Zeichenkette, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

In der letzten Zeile befinden sich Informationen über die client-seitigen Cookies — Sie können in diesem Fall sehen, dass das Cookie eine ID zur Sitzungsverwaltung enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die verbleibenden Zeilen enthalten Informationen über den verwendeten Browser und die Art von Antworten, die er verarbeiten kann. Beispielsweise können Sie hier sehen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox ist (`Mozilla/5.0`).
- Er komprimierte Informationen im gzip-Format akzeptieren kann (`Accept-Encoding: gzip`).
- Er die angegebenen Sprachen akzeptieren kann (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die `Referer`-Zeile zeigt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d.h. die Herkunft der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage ist unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im `text/html`-Format ist (`Content-Type`).
- Es ist auch ersichtlich, dass der UTF-8-Zeichensatz verwendet wird (`Content-Type: text/html; charset=utf-8`).
- Der Kopfbereich teilt uns auch mit, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der den tatsächlichen HTML-Inhalt enthält, der von der Anfrage zurückgegeben wurde.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z.B. wann sie generiert wurde), den Server und wie er erwartet, dass der Browser die Seite verarbeitet (z.B. die Zeile `X-Frame-Options: DENY` weist den Browser an, diese Seite nicht in einem {{htmlelement("iframe")}} auf einer anderen Website einzubetten).

### Beispiel für eine POST-Anfrage/Antwort

Ein HTTP `POST` wird ausgeführt, wenn Sie ein Formular mit Informationen senden, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der Text unten zeigt die HTTP-Anfrage, die gemacht wird, wenn ein Benutzer neue Profildetails auf dieser Website übermittelt. Das Format der Anfrage ist fast dasselbe wie im zuvor gezeigten `GET`-Beispiel, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter hat. Wie Sie sehen können, sind die Informationen aus dem Formular im Body der Anfrage kodiert (zum Beispiel wird der neue Benutzer vollständiger Name mit folgender Syntax gesetzt: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort auf die Anfrage ist unten gezeigt. Der Statuscode `302 Found` teilt dem Browser mit, dass der Post erfolgreich war und dass er eine zweite HTTP-Anfrage senden muss, um die im `Location`-Feld angegebene Seite zu laden. Die Informationen sind ansonsten ähnlich wie bei der Antwort auf eine `GET`-Anfrage.

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
> Die HTTP-Antworten und -Anfragen, die in diesen Beispielen gezeigt werden, wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffern (z.B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Site und bearbeiten Sie Profilinformationen, um die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser haben auch Tools, die Netzwerk-Anfragen überwachen (zum Beispiel das [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Webseiten

Eine _statische Webseite_ ist eine, die bei jeder Anforderung einer bestimmten Ressource denselben fest codierten Inhalt vom Server zurückgibt. Wenn Sie also eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese Seite jedem Benutzer zurückgegeben. Wenn Sie ein weiteres ähnliches Produkt zu Ihrer Website hinzufügen, müssen Sie eine weitere Seite hinzufügen (z.B. `my-product2.html`) und so weiter. Dies kann sehr ineffizient werden — was passiert, wenn Sie tausende von Produktseiten haben? Sie würden viel Code auf jeder Seite wiederholen (das grundlegende Seitenvorlagen, die Struktur usw.), und wenn Sie etwas an der Seitenstruktur ändern möchten — wie z.B. einen neuen Bereich "verwandte Produkte" hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Webseiten sind hervorragend, wenn Sie nur eine kleine Anzahl von Seiten haben und denselben Inhalt an jeden Benutzer senden möchten. Sie können jedoch erhebliche Wartungskosten verursachen, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns noch einmal zusammenfassen, wie dies funktioniert, indem wir nochmals das Diagramm zur Architektur von statischen Websites ansehen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite spezifiziert. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) von `200 OK` (was Erfolg bedeutet) enthält. Der Server könnte einen anderen Statuscode zurückgeben, z.B. `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Speicherort verschoben wurde.

Der Server für eine statische Website muss nur `GET`-Anfragen verarbeiten, da der Server keine modifizierbaren Daten speichert. Er ändert seine Antworten auch nicht basierend auf HTTP-Anfragedaten (z.B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Websites funktionieren, ist dennoch nützlich beim Erlernen der Server-seitigen Programmierung, denn dynamische Websites verarbeiten Anfragen für statische Dateien (CSS, JavaScript, statische Bilder usw.) auf genau die gleiche Weise.

## Dynamische Webseiten

Eine _dynamische Webseite_ ist eine, die basierend auf der spezifischen Anforderungs-URL und den Daten Inhalte generieren und zurückgeben kann (anstatt immer dieselbe hart codierte Datei für eine bestimmte URL zurückzugeben). Am Beispiel einer Produktseite würde der Server Produkt"Daten" in einer Datenbank statt in einzelnen HTML-Dateien speichern. Beim Empfang einer HTTP-`GET`-Anfrage für ein Produkt würde der Server die Produkt-ID bestimmen, die Daten aus der Datenbank abrufen und dann die HTML-Seite für die Antwort erstellen, indem er die Daten in eine HTML-Vorlage einfügt. Dies hat große Vorteile gegenüber einer statischen Website:

Die Verwendung einer Datenbank ermöglicht es, die Produktinformationen effizient in einer leicht erweiterbaren, modifizierbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Vorlagen macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einer einzigen Stelle, in einer einzigen Vorlage, und nicht über potentiell tausende von statischen Seiten hinweg geschehen muss.

### Anatomie einer dynamischen Anfrage

In diesem Abschnitt erhalten Sie eine Schritt-für-Schritt-Übersicht über den "dynamischen" HTTP-Anfrage- und Antwortzyklus, der auf dem basiert, was wir im letzten Artikel mit wesentlich mehr Details besprochen haben. Um "die Dinge real zu halten", verwenden wir das Beispiel einer Website für Sportteam-Manager, auf der ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen und eine vorgeschlagene "beste Aufstellung" für ihr nächstes Spiel zurückerhalten kann.

Das untenstehende Diagramm zeigt die Hauptelemente der "Teamcoach"-Website zusammen mit nummerierten Labels für die Reihenfolge der Operationen, wenn der Coach seine "beste Team"-Liste abruft. Die Teile der Website, die sie dynamisch machen, sind die _Webanwendung_ (so bezeichnen wir den Server-seitigen Code, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, und die _HTML-Vorlagen_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schritt-Nummern für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Spieleranzahl absendet, ist die Reihenfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server, indem er die Basis-URL für die Ressource (`/best`) verwendet und das Team und die Spieleranzahl entweder als URL-Parameter (z.B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z.B. `/best/my_team_name/11/`) kodiert. Eine `GET`-Anfrage wird verwendet, weil die Anfrage nur Daten abruft (und keine Daten ändert).
2. Der _Webserver_ erkennt, dass die Anfrage "dynamisch" ist, und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie verschiedene URLs basierend auf Mustervorgaben in seiner Konfiguration verarbeitet werden sollen).
3. Die _Webanwendung_ identifiziert, dass das _Ziel_ der Anfrage darin besteht, die "beste Teamliste" basierend auf der URL (`/best/`) zu erhalten, und ermittelt den erforderlichen Teamnamen und die Spieleranzahl aus der URL. Die _Webanwendung_ erhält dann die benötigten Informationen aus der Datenbank (unter Verwendung zusätzlicher "interner" Parameter, um zu definieren, welche Spieler "am besten" sind, und möglicherweise auch durch Abrufen der Identität des angemeldeten Trainers aus einem Client-seitigen Cookie).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb einer HTML-Vorlage einfügt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser zurück (über den _Webserver_), zusammen mit einem HTTP-Statuscode von 200 ("erfolgreich"). Wenn etwas verhindert, dass das HTML zurückgegeben wird, gibt die _Webanwendung_ einen anderen Code zurück — zum Beispiel "404", um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt dann, das zurückgegebene HTML zu verarbeiten und sendet separate Anfragen, um alle anderen CSS- oder JavaScript-Dateien abzurufen, auf die verwiesen wird (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (erneut basierend auf Konfigurationsregeln und URL-Mustervorgaben).

Eine Operation zum Aktualisieren eines Datensatzes in der Datenbank würde ähnlich gehandhabt, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage vom Browser als `POST`-Anfrage kodiert werden sollte.

### Weitere Aufgaben

Die Aufgabe einer _Webanwendung_ ist es, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank, um Informationen abzurufen oder zu aktualisieren, eine sehr häufige Aufgabe ist, kann der Code zu bestimmten Zeiten auch andere Dinge tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ möglicherweise ausführen könnte, ist das Versenden einer E-Mail an Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Site könnte auch Logging oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Der Server-seitige Website-Code muss in der Antwort keine HTML-Snippets/-Dateien zurückgeben. Stattdessen kann er dynamisch andere Dateitypen (Text, PDF, CSV usw.) oder sogar Daten (JSON, XML usw.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch Abrufen von Inhalten vom Server mit JavaScript arbeiten und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neue Inhalte angezeigt werden sollen. Weitere Informationen zur Motivation für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht, finden Sie unter [Netzwerkanfragen mit JavaScript ausführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).

## Web-Frameworks vereinfachen das serverseitige Webprogrammieren

Server-seitige Web-Frameworks vereinfachen das Schreiben von Code zur Verarbeitung der oben beschriebenen Operationen erheblich.

Eine der wichtigsten Operationen, die sie ausführen, besteht darin, einfache Mechanismen bereitzustellen, um URLs für verschiedene Ressourcen/Seiten bestimmten Handler-Funktionen zuzuordnen. Dies erleichtert es, den Code, der mit jedem Ressourcentyp verbunden ist, getrennt zu halten. Es hat auch Vorteile im Hinblick auf die Wartung, da Sie die URL, die zum Bereitstellen einer bestimmten Funktion verwendet wird, an einer Stelle ändern können, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie beispielsweise den folgenden Django (Python) Code, der zwei URL-Muster zwei View-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im `views`-Modul weitergeleitet wird. Eine Anfrage, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-View-Funktion weitergeleitet.

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
> Die ersten Parameter in den `url()`-Funktionen sehen möglicherweise etwas seltsam aus (z.B. `r'^junior/$'`), da sie eine Musterabgleich-Technik namens "reguläre Ausdrücke" (RegEx, oder RE) verwenden. Sie müssen an diesem Punkt nicht wissen, wie reguläre Ausdrücke funktionieren, außer dass sie es uns ermöglichen, Muster in der URL zu erkennen (anstelle der hartcodierten Werte oben) und diese als Parameter in unseren View-Funktionen zu verwenden. Ein wirklich einfacher RegEx könnte zum Beispiel sagen: "Ein einzelner Großbuchstabe, gefolgt von 4 bis 7 Kleinbuchstaben."

Das Web-Framework macht es auch einfach, dass eine View-Funktion Informationen aus der Datenbank abruft. Die Struktur unserer Daten wird in Modellen definiert, die Python-Klassen sind, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden. Wenn wir ein Modell, das _Team_ heißt, mit einem Feld "_team_type_" haben, können wir eine einfache Anfragesyntax verwenden, um alle Teams zurückzubekommen, die einen bestimmten Typ haben.

Das untenstehende Beispiel erhält eine Liste aller Teams, die exakt (groß-/kleinschreibungssensitiv) den `team_type` "junior" haben — beachten Sie das Format: Feldname (`team_type`), gefolgt von Doppelunterstrich, und dann die Art des Vergleichs, die verwendet werden soll (in diesem Fall `exact`). Es gibt viele andere Arten von Vergleichen, und wir können sie zusammenschließen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf und übergibt die ursprüngliche `HttpRequest`, eine HTML-Vorlage und ein "Kontext"-Objekt, das die Informationen definiert, die in die Vorlage aufgenommen werden sollen. Die `render()`-Funktion ist eine Komfortfunktion, die HTML unter Verwendung eines Kontextes und einer HTML-Vorlage generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir besprechen weitere Vorteile und einige populäre Web-Framework-Auswahlen im nächsten Artikel.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie einen guten Überblick über die Operationen haben, die der Server-seitige Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Webframework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Webframework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
