---
title: Überblick über Client und Server
slug: Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Nachdem Sie nun den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine „dynamische Anfrage“ von einem Browser empfängt. Da der serverseitige Code der meisten Websites Anfragen und Antworten auf ähnliche Weise verarbeitet, hilft Ihnen dies zu verstehen, was Sie beim Schreiben des größten Teils Ihres eigenen Codes tun müssen.

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
        Client-Server-Interaktionen in einer dynamischen Website zu verstehen,
        insbesondere welche Operationen durch serverseitigen Code ausgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

In dieser Besprechung gibt es keinen echten Code, da wir noch kein Web-Framework ausgewählt haben, mit dem wir unseren Code schreiben werden! Diese Besprechung ist dennoch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code umgesetzt werden muss – unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie auswählen.

## Webserver und HTTP (eine Einführung)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche ausführen, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage enthält:

- Eine URL, die den Zielserver und die Ressource identifiziert, z. B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein auszuführendes Werkzeug.
- Eine Methode, die die erforderliche Aktion definiert, beispielsweise das Abrufen einer Datei oder das Speichern bzw. Aktualisieren einiger Daten. Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:
  - `GET`: Eine bestimmte Ressource abrufen, z. B. eine HTML-Datei mit Informationen über ein Produkt oder eine Liste von Produkten.
  - `POST`: Eine neue Ressource erstellen, z. B. einen neuen Artikel zu einem Wiki hinzufügen oder einen neuen Kontakt zu einer Datenbank hinzufügen.
  - `HEAD`: Die Metadateninformationen über eine bestimmte Ressource abrufen, ohne den Body abzurufen, wie es `GET` tun würde. Sie könnten beispielsweise eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann die – aufwendigere – `GET`-Anfrage nur verwenden, um die Ressource herunterzuladen, wenn sie sich geändert hat.
  - `PUT`: Eine vorhandene Ressource aktualisieren oder eine neue erstellen, falls sie nicht existiert.
  - `DELETE`: Die angegebene Ressource löschen.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben dienen weniger häufigen bzw. fortgeschrittenen Aufgaben und werden hier daher nicht behandelt.

- Zusätzliche Informationen können mit der Anfrage kodiert werden, zum Beispiel HTML-Formulardaten. Informationen können wie folgt kodiert werden:
  - URL-Parameter: `GET`-Anfragen kodieren Daten in der an den Server gesendeten URL, indem Name/Wert-Paare an deren Ende angehängt werden – beispielsweise `http://example.com?name=Fred&age=11`. Ein Fragezeichen (`?`) trennt stets den Rest der URL von den URL-Parametern, ein Gleichheitszeichen (`=`) trennt jeden Namen von seinem zugehörigen Wert und ein kaufmännisches Und-Zeichen (`&`) trennt jedes Paar. URL-Parameter sind grundsätzlich „unsicher“, da sie von Benutzern geändert und anschließend erneut übermittelt werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten: `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten im Anfrage-Body kodiert sind.
  - Clientseitige Cookies: Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um dessen Anmeldestatus und Berechtigungen/Zugriffe auf Ressourcen zu bestimmen.

Webserver warten auf Anfrage-Nachrichten von Clients, verarbeiten sie bei ihrem Eintreffen und antworten dem Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht, z. B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, oder {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen. Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Bei der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken, beispielsweise verweist eine HTML-Seite üblicherweise auf JavaScript- und CSS-Dateien, und sendet separate HTTP-Anfragen, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites, die in den folgenden Abschnitten behandelt werden, verwenden genau dieselben Kommunikationsprotokolle und -muster.

### Beispiel für `GET`-Anfrage/-Antwort

Sie können eine einfache `GET`-Anfrage stellen, indem Sie auf einen Link klicken oder auf einer Website suchen, etwa auf der Startseite einer Suchmaschine. Beispielsweise sieht die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff „client-server overview“ suchen, dem unten gezeigten Text sehr ähnlich. Sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Ihrer Konfiguration abhängen.

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem „Webstandard“ ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)) definiert. Sie müssen dieses Detailniveau nicht kennen, aber zumindest wissen Sie jetzt, woher das alles kommt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird **Header** genannt und enthält nützliche Informationen über die Anfrage, ähnlich wie ein [HTML-Head](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) nützliche Informationen über ein HTML-Dokument enthält, jedoch nicht den eigentlichen Inhalt, der sich im Body befindet:

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

Die erste und die zweite Zeile enthalten die meisten Informationen, über die wir oben gesprochen haben:

- Die Art der Anfrage (`GET`).
- Die URL der Zielressource (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel-/Host-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält außerdem eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies. Sie sehen, dass das Cookie in diesem Fall eine ID zur Verwaltung von Sitzungen enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die übrigen Zeilen enthalten Informationen über den verwendeten Browser und die Arten von Antworten, die er verarbeiten kann.
Sie können hier beispielsweise sehen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox (`Mozilla/5.0`) ist.
- Er gzip-komprimierte Informationen akzeptieren kann (`Accept-Encoding: gzip`).
- Er die angegebenen Sprachen akzeptieren kann (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die Zeile `Referer` die Adresse der Webseite angibt, die den Link zu dieser Ressource enthielt, also den Ursprung der Anfrage (`https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, der in diesem Fall jedoch leer ist.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage wird unten gezeigt. Der Header enthält unter anderem folgende Informationen:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im Format `text/html` vorliegt (`Content-Type`).
- Wir können außerdem sehen, dass sie den UTF-8-Zeichensatz verwendet (`Content-Type: text/html; charset=utf-8`).
- Der Header teilt uns auch mit, wie groß sie ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den Inhalt des **Body** – er enthält das tatsächlich durch die Anfrage zurückgegebene HTML.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort, beispielsweise wann sie erzeugt wurde, über den Server und darüber, wie der Browser die Seite verarbeiten soll. Beispielsweise weist die Zeile `X-Frame-Options: DENY` den Browser an, nicht zuzulassen, dass diese Seite in ein {{htmlelement("iframe")}} auf einer anderen Website eingebettet wird.

### Beispiel für `POST`-Anfrage/-Antwort

Ein HTTP-`POST` wird ausgeführt, wenn Sie ein Formular absenden, das auf dem Server zu speichernde Informationen enthält.

#### Die Anfrage

Der untenstehende Text zeigt die HTTP-Anfrage, die gestellt wird, wenn ein Benutzer auf dieser Website neue Profildetails übermittelt. Das Format der Anfrage ist fast dasselbe wie beim zuvor gezeigten `GET`-Anfragebeispiel, wobei die erste Zeile diese Anfrage jedoch als `POST` kennzeichnet.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter enthält. Wie Sie sehen können, werden die Informationen aus dem Formular im Body der Anfrage kodiert, beispielsweise wird der neue vollständige Benutzername folgendermaßen festgelegt: `&user-fullname=Hamish+Willee`.

#### Die Antwort

Die Antwort auf die Anfrage wird unten gezeigt. Der Statuscode `302 Found` teilt dem Browser mit, dass das Absenden erfolgreich war und dass er eine zweite HTTP-Anfrage stellen muss, um die im Feld `Location` angegebene Seite zu laden. Die Informationen ähneln ansonsten denen der Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der Anwendung [Fiddler](https://www.telerik.com/download/fiddler) erfasst. Sie können jedoch ähnliche Informationen mit Web-Sniffern, z. B. [WebSniffer](https://websniffer.com/), oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren: Verwenden Sie eines der verlinkten Werkzeuge und navigieren Sie anschließend durch eine Website und bearbeiten Sie Profilinformationen, um die unterschiedlichen Anfragen und Antworten zu sehen. Die meisten modernen Browser verfügen außerdem über Werkzeuge zur Überwachung von Netzwerkanfragen, beispielsweise das Werkzeug [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in Firefox.

## Statische Websites

Eine _statische Website_ gibt jedes Mal denselben fest kodierten Inhalt vom Server zurück, wenn eine bestimmte Ressource angefordert wird. Wenn Sie beispielsweise eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird dieselbe Seite an jeden Benutzer zurückgegeben. Wenn Sie Ihrer Website ein weiteres ähnliches Produkt hinzufügen, müssen Sie eine weitere Seite hinzufügen, etwa `my-product2.html`, und so weiter. Dies kann sehr ineffizient werden – was passiert, wenn Sie Tausende von Produktseiten haben? Sie würden viel Code auf jeder Seite wiederholen, beispielsweise das grundlegende Seitentemplate und die Struktur, und wenn Sie etwas an der Seitenstruktur ändern möchten, etwa einen neuen Abschnitt für „ähnliche Produkte“ hinzufügen, müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Websites eignen sich hervorragend, wenn Sie nur eine kleine Anzahl von Seiten haben und jedem Benutzer denselben Inhalt senden möchten. Mit zunehmender Seitenzahl können sie jedoch einen erheblichen Wartungsaufwand verursachen.

Fassen wir zusammen, wie dies funktioniert, indem wir uns erneut das Diagramm der Architektur einer statischen Website ansehen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL ihrer HTML-Seite angibt. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) von `200 OK` enthält, der Erfolg anzeigt. Der Server kann einen anderen Statuscode zurückgeben, beispielsweise `404 Not Found`, wenn die Datei auf dem Server nicht vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Ort umgeleitet wurde.

Der Server einer statischen Website muss nur GET-Anfragen verarbeiten, da der Server keine veränderbaren Daten speichert. Außerdem ändert er seine Antworten nicht anhand von Daten aus HTTP-Anfragen, etwa URL-Parametern oder Cookies.

Zu verstehen, wie statische Websites funktionieren, ist beim Lernen der serverseitigen Programmierung dennoch nützlich, da dynamische Websites Anfragen nach statischen Dateien wie CSS, JavaScript und statischen Bildern auf genau dieselbe Weise verarbeiten.

## Dynamische Websites

Eine _dynamische Website_ kann Inhalte anhand der spezifischen Anfrage-URL und Daten erzeugen und zurückgeben, anstatt für eine bestimmte URL stets dieselbe fest kodierte Datei zurückzugeben. Am Beispiel einer Produktwebsite würde der Server Produkt-„Daten“ in einer Datenbank statt in einzelnen HTML-Dateien speichern. Beim Empfangen einer HTTP-`GET`-Anfrage für ein Produkt bestimmt der Server die Produkt-ID, ruft die Daten aus der Datenbank ab und erstellt anschließend die HTML-Seite für die Antwort, indem er die Daten in ein HTML-Template einfügt. Dies bietet gegenüber einer statischen Website erhebliche Vorteile:

Die Verwendung einer Datenbank ermöglicht es, Produktinformationen effizient, leicht erweiterbar, veränderbar und durchsuchbar zu speichern.

HTML-Templates erleichtern das Ändern der HTML-Struktur erheblich, da dies nur an einer Stelle, in einem einzelnen Template, und nicht auf potenziell Tausenden statischer Seiten erfolgen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet eine schrittweise Übersicht über den „dynamischen“ HTTP-Anfrage- und Antwortzyklus und erweitert das, was wir im letzten Artikel betrachtet haben, um deutlich mehr Details. Um „nah an der Realität“ zu bleiben, verwenden wir den Kontext einer Website zur Verwaltung eines Sportteams, auf der ein Trainer in einem HTML-Formular seinen Teamnamen und die Teamgröße auswählen und eine vorgeschlagene „beste Aufstellung“ für das nächste Spiel erhalten kann.

Das untenstehende Diagramm zeigt die Hauptelemente der Website des „Teamtrainers“ sowie nummerierte Beschriftungen für die Abfolge der Operationen, wenn der Trainer auf seine Liste des „besten Teams“ zugreift. Die Teile der Website, die sie dynamisch machen, sind die _Web Application_ – so werden wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt –, die _Database_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, sowie die _HTML Templates_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittzahlen für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Anzahl der Spieler abgesendet hat, lautet die Abfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server, wobei er die Basis-URL für die Ressource (`/best`) verwendet und das Team und die Spielerzahl entweder als URL-Parameter kodiert, beispielsweise `/best?team=my_team_name&show=11`, oder als Teil des URL-Musters, beispielsweise `/best/my_team_name/11/`. Eine `GET`-Anfrage wird verwendet, da die Anfrage nur Daten abruft und keine Daten verändert.
2. Der _Web Server_ erkennt, dass die Anfrage „dynamisch“ ist, und leitet sie zur Verarbeitung an die _Web Application_ weiter. Der Webserver bestimmt anhand von Musterabgleichsregeln, die in seiner Konfiguration definiert sind, wie verschiedene URLs verarbeitet werden.
3. Die _Web Application_ erkennt anhand der URL (`/best/`), dass die _Absicht_ der Anfrage darin besteht, die „beste Teamliste“ abzurufen, und ermittelt den erforderlichen Teamnamen sowie die Anzahl der Spieler aus der URL. Anschließend ruft die _Web Application_ die erforderlichen Informationen aus der Datenbank ab. Dazu verwendet sie zusätzliche „interne“ Parameter, um zu definieren, welche Spieler die „besten“ sind, und ermittelt möglicherweise auch die Identität des angemeldeten Trainers aus einem clientseitigen Cookie.
4. Die _Web Application_ erstellt dynamisch eine HTML-Seite, indem sie die Daten aus der _Database_ in Platzhalter innerhalb eines HTML-Templates einfügt.
5. Die _Web Application_ gibt das erzeugte HTML zusammen mit einem HTTP-Statuscode von 200 („Erfolg“) über den _Web Server_ an den Webbrowser zurück. Wenn etwas die Rückgabe des HTML verhindert, gibt die _Web Application_ einen anderen Code zurück, beispielsweise „404“, um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser beginnt anschließend mit der Verarbeitung des zurückgegebenen HTML und sendet separate Anfragen, um alle darin referenzierten CSS- oder JavaScript-Dateien abzurufen, siehe Schritt 7.
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück. Auch hier basiert die korrekte Dateiverarbeitung auf Konfigurationsregeln und URL-Musterabgleich.

Eine Operation zum Aktualisieren eines Eintrags in der Datenbank würde ähnlich verarbeitet werden. Wie bei jeder Datenbankaktualisierung sollte die HTTP-Anfrage des Browsers jedoch als `POST`-Anfrage kodiert werden.

### Andere Aufgaben ausführen

Die Aufgabe einer _Web Application_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Obwohl die Interaktion mit einer Datenbank zum Abrufen oder Aktualisieren von Informationen sehr häufige Aufgaben sind, kann der Code gleichzeitig andere Dinge tun oder überhaupt nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Web Application_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Website zu bestätigen. Die Website könnte außerdem Protokollierung oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss in der Antwort keine HTML-Snippets/-Dateien zurückgeben. Er kann stattdessen andere Arten von Dateien wie Text, PDF oder CSV dynamisch erzeugen und zurückgeben oder sogar Daten wie JSON oder XML.

Dies ist besonders relevant für Websites, die funktionieren, indem sie mithilfe von JavaScript Inhalte vom Server abrufen und die Seite dynamisch aktualisieren, statt stets eine neue Seite zu laden, wenn neue Inhalte angezeigt werden sollen. Weitere Informationen zur Motivation für diesen Ansatz und dazu, wie dieses Modell aus Sicht des Clients aussieht, finden Sie unter [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Web-Frameworks erleichtern das Schreiben von Code zur Verarbeitung der oben beschriebenen Operationen erheblich.

Eine der wichtigsten Operationen, die sie ausführen, ist die Bereitstellung einfacher Mechanismen, um URLs für verschiedene Ressourcen/Seiten bestimmten Handler-Funktionen zuzuordnen. Dadurch lässt sich der Code, der mit den einzelnen Ressourcentypen verbunden ist, leichter getrennt halten. Dies bietet auch Vorteile bei der Wartung, da Sie die URL, über die eine bestimmte Funktion bereitgestellt wird, an einer Stelle ändern können, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie beispielsweise den folgenden Django-Code (Python), der zwei URL-Muster zwei View-Funktionen zuordnet. Das erste Muster stellt sicher, dass eine HTTP-Anfrage mit einer Ressourcen-URL von `/best` an eine Funktion mit dem Namen `index()` im Modul `views` übergeben wird. Eine Anfrage mit dem Muster `/best/junior` wird stattdessen an die View-Funktion `junior()` übergeben.

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
> Die ersten Parameter in den Funktionen `url()` sehen möglicherweise etwas ungewöhnlich aus, z. B. `r'^junior/$'`, da sie eine Musterabgleichstechnik namens „reguläre Ausdrücke“ verwenden, kurz RegEx oder RE. Sie müssen zu diesem Zeitpunkt nicht wissen, wie reguläre Ausdrücke funktionieren. Es genügt zu wissen, dass sie es uns ermöglichen, Muster in der URL statt der oben genannten fest kodierten Werte abzugleichen und sie als Parameter in unseren View-Funktionen zu verwenden. Ein sehr einfacher RegEx könnte beispielsweise besagen: „Entspricht einem einzelnen Großbuchstaben, gefolgt von vier bis sieben Kleinbuchstaben.“

Das Web-Framework erleichtert es einer View-Funktion auch, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert. Dabei handelt es sich um Python-Klassen, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden. Wenn wir ein Modell namens _Team_ mit einem Feld namens „_team_type_“ haben, können wir eine einfache Abfragesyntax verwenden, um alle Teams eines bestimmten Typs abzurufen.

Das folgende Beispiel ruft eine Liste aller Teams ab, deren `team_type` exakt und unter Beachtung der Groß- und Kleinschreibung „junior“ lautet. Beachten Sie das Format: Feldname (`team_type`), gefolgt von zwei Unterstrichen und dann der zu verwendenden Art des Abgleichs, in diesem Fall `exact`. Es gibt viele weitere Arten von Abgleichen, die wir miteinander verketten können. Außerdem können wir die Reihenfolge und Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die Funktion `junior()` die Liste der Juniorenteams abgerufen hat, ruft sie die Funktion `render()` auf und übergibt die ursprüngliche `HttpRequest`, ein HTML-Template und ein „context“-Objekt, das die in das Template einzufügenden Informationen definiert. Die Funktion `render()` ist eine Hilfsfunktion, die mithilfe eines Kontextes und eines HTML-Templates HTML erzeugt und es in einem `HttpResponse`-Objekt zurückgibt.

Natürlich können Web-Frameworks Sie bei vielen weiteren Aufgaben unterstützen. Im nächsten Artikel behandeln wir weitere Vorteile sowie einige beliebte Web-Frameworks.

## Zusammenfassung

Sie sollten nun einen guten Überblick über die Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, wie ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul helfen wir Ihnen, das beste Web Framework für Ihre erste Website auszuwählen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Introduction", "Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
