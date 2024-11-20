---
title: Überblick über Client-Server
slug: Learn/Server-side/First_steps/Client-Server_overview
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Nun, da Sie den Zweck und die potenziellen Vorteile der serverseitigen Programmierung kennen, werden wir im Detail untersuchen, was passiert, wenn ein Server eine „dynamische Anfrage“ von einem Browser erhält. Da der meiste serverseitige Code von Websites Anfragen und Antworten auf ähnliche Weise behandelt, wird dies Ihnen helfen zu verstehen, was Sie tun müssen, wenn Sie Ihren eigenen Code schreiben.

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
        Die Interaktionen zwischen Client und Server auf einer dynamischen Website zu verstehen, insbesondere welche Vorgänge vom serverseitigen Code ausgeführt werden müssen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt keinen echten Code in der Diskussion, weil wir noch kein Web-Framework ausgewählt haben, um unseren Code zu schreiben! Diese Diskussion ist jedoch immer noch sehr relevant, da das beschriebene Verhalten von Ihrem serverseitigen Code implementiert werden muss, unabhängig davon, welche Programmiersprache oder welches Web-Framework Sie auswählen.

## Webserver und HTTP (Einführung)

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Web/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche starten, sendet der Browser eine _HTTP-Anfrage_ an den Server.

Diese Anfrage umfasst:

- Eine URL, die den Zielserver und die Ressource identifiziert (z. B. eine HTML-Datei, einen bestimmten Datenpunkt auf dem Server oder ein auszuführendes Tool).
- Eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um eine Datei abzurufen oder Daten zu speichern oder zu aktualisieren). Die verschiedenen Methoden/Verben und ihre zugehörigen Aktionen sind unten aufgeführt:

  - `GET`: Eine bestimmte Ressource abrufen (z. B. eine HTML-Datei mit Informationen über ein Produkt oder eine Liste von Produkten).
  - `POST`: Eine neue Ressource erstellen (z. B. einen neuen Artikel zu einem Wiki hinzufügen oder einen neuen Kontakt zu einer Datenbank hinzufügen).
  - `HEAD`: Metadateninformationen über eine bestimmte Ressource erhalten, ohne den Body wie bei `GET` abzurufen. Sie könnten z. B. eine `HEAD`-Anfrage verwenden, um herauszufinden, wann eine Ressource zuletzt aktualisiert wurde, und dann nur die (teurere) `GET`-Anfrage verwenden, um die Ressource herunterzuladen, wenn sie sich geändert hat.
  - `PUT`: Eine bestehende Ressource aktualisieren (oder eine neue erstellen, wenn sie nicht existiert).
  - `DELETE`: Die angegebene Ressource löschen.
  - `TRACE`, `OPTIONS`, `CONNECT`, `PATCH`: Diese Verben sind für weniger häufige/fortgeschrittene Aufgaben, daher werden wir sie hier nicht behandeln.

- Zusätzliche Informationen können mit der Anfrage kodiert werden (zum Beispiel HTML-Formulardaten). Informationen können kodiert werden als:

  - URL-Parameter: `GET`-Anfragen kodieren Daten in der URL, die an den Server gesendet wird, indem Name/Wert-Paare an deren Ende angehängt werden — zum Beispiel `http://example.com?name=Fred&age=11`. Sie haben immer ein Fragezeichen (`?`), das den Rest der URL von den URL-Parametern trennt, ein Gleichheitszeichen (`=`), das jeden Namen von seinem zugehörigen Wert trennt, und ein kaufmännisches Und-Zeichen (`&`), das jedes Paar trennt. URL-Parameter sind von Natur aus „unsicher“, da sie von Benutzern geändert und dann erneut übermittelt werden können. Daher werden URL-Parameter/`GET`-Anfragen nicht für Anfragen verwendet, die Daten auf dem Server aktualisieren.
  - `POST`-Daten. `POST`-Anfragen fügen neue Ressourcen hinzu, deren Daten im Anfrage-Body kodiert sind.
  - Client-seitige Cookies. Cookies enthalten Sitzungsdaten über den Client, einschließlich Schlüssel, die der Server verwenden kann, um deren Anmeldestatus und Berechtigungen/Berechtigungen für Ressourcen zu bestimmen.

Webserver warten auf Client-Anforderungsmeldungen, verarbeiten sie bei Eingang und antworten dem Webbrowser mit einer HTTP-Antwortnachricht. Die Antwort enthält einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war (z. B. {{HTTPStatus("200", "200 OK")}} für Erfolg, {{HTTPStatus("404", "404 Not Found")}}, wenn die Ressource nicht gefunden werden kann, {{HTTPStatus("403", "403 Forbidden")}}, wenn der Benutzer nicht berechtigt ist, die Ressource zu sehen usw.). Der Body der Antwort auf eine erfolgreiche `GET`-Anfrage enthält die angeforderte Ressource.

Wenn eine HTML-Seite zurückgegeben wird, wird sie vom Webbrowser gerendert. Im Zuge der Verarbeitung kann der Browser Links zu anderen Ressourcen entdecken (z. B. eine HTML-Seite verweist normalerweise auf JavaScript- und CSS-Dateien) und separate HTTP-Anfragen senden, um diese Dateien herunterzuladen.

Sowohl statische als auch dynamische Websites (wie in den folgenden Abschnitten besprochen) verwenden genau dasselbe Kommunikationsprotokoll/Muster.

### Beispiel für eine GET-Anfrage/Antwort

Sie können eine einfache `GET`-Anfrage durchführen, indem Sie auf einen Link klicken oder auf einer Website (wie auf einer Suchmaschinenseite) suchen. Die HTTP-Anfrage, die gesendet wird, wenn Sie auf MDN nach dem Begriff „Client-Server-Übersicht“ suchen, sieht ungefähr so aus wie der unten gezeigte Text (sie wird nicht identisch sein, da Teile der Nachricht von Ihrem Browser/Setup abhängen).

> [!NOTE]
> Das Format von HTTP-Nachrichten ist in einem „Webstandard“ definiert ([RFC9110](https://httpwg.org/specs/rfc9110.html#messages)). Sie müssen dieses Detailniveau nicht kennen, aber jetzt wissen Sie, woher das alles stammt!

#### Die Anfrage

Jede Zeile der Anfrage enthält Informationen darüber. Der erste Teil wird **Header** genannt und enthält nützliche Informationen über die Anfrage, auf die gleiche Weise, wie ein [HTML-Kopf](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) nützliche Informationen über ein HTML-Dokument enthält (aber nicht der eigentliche Inhalt selbst, der im Body liegt):

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

Die erste und die zweite Zeile enthalten die meisten der oben besprochenen Informationen:

- Der Typ der Anfrage (`GET`).
- Die Zielressourcen-URL (`/en-US/search`).
- Die URL-Parameter (`q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
- Die Ziel/Host-Website (developer.mozilla.org).
- Das Ende der ersten Zeile enthält auch eine kurze Zeichenfolge, die die spezifische Protokollversion identifiziert (`HTTP/1.1`).

Die letzte Zeile enthält Informationen über die clientseitigen Cookies — Sie können in diesem Fall sehen, dass das Cookie eine ID zur Verwaltung von Sitzungen enthält (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …`).

Die restlichen Zeilen enthalten Informationen über den verwendeten Browser und die Art der Antworten, die er verarbeiten kann.
Zum Beispiel können Sie hier erkennen, dass:

- Mein Browser (`User-Agent`) Mozilla Firefox (`Mozilla/5.0`) ist.
- Er komprimierte Informationen im gzip-Format akzeptieren kann (`Accept-Encoding: gzip`).
- Er die angegebenen Sprachen akzeptieren kann (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
- Die `Referer`-Zeile gibt die Adresse der Webseite an, die den Link zu dieser Ressource enthielt (d. h. den Ursprung der Anfrage, `https://developer.mozilla.org/en-US/`).

HTTP-Anfragen können auch einen Body haben, aber in diesem Fall ist er leer.

#### Die Antwort

Der erste Teil der Antwort auf diese Anfrage ist unten gezeigt. Der Header enthält Informationen wie die folgenden:

- Die erste Zeile enthält den Antwortcode `200 OK`, der uns mitteilt, dass die Anfrage erfolgreich war.
- Wir können sehen, dass die Antwort im `text/html`-Format ist (`Content-Type`).
- Wir können auch sehen, dass der UTF-8-Zeichensatz verwendet wird (`Content-Type: text/html; charset=utf-8`).
- Der Header teilt uns auch mit, wie groß er ist (`Content-Length: 41823`).

Am Ende der Nachricht sehen wir den **Body**-Inhalt — der den tatsächlich durch die Anfrage zurückgegebenen HTML-Code enthält.

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

Der Rest des Antwort-Headers enthält Informationen über die Antwort (z. B. wann sie erzeugt wurde), den Server und wie er erwartet, dass der Browser die Seite behandelt (z. B. weist die Zeile `X-Frame-Options: DENY` den Browser an, diese Seite nicht in ein {{htmlelement("iframe")}} auf einer anderen Seite einzubetten).

### Beispiel für eine POST-Anfrage/Antwort

Ein HTTP-`POST` wird durchgeführt, wenn Sie ein Formular absenden, das Informationen enthält, die auf dem Server gespeichert werden sollen.

#### Die Anfrage

Der unten stehende Text zeigt die HTTP-Anfrage, die gesendet wird, wenn ein Benutzer auf dieser Seite neue Profildetails übermittelt. Das Format der Anfrage ist fast das gleiche wie im zuvor gezeigten `GET`-Anfragebeispiel, obwohl die erste Zeile diese Anfrage als `POST` identifiziert.

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

Der Hauptunterschied besteht darin, dass die URL keine Parameter aufweist. Wie Sie sehen können, werden die Informationen aus dem Formular im Body der Anfrage kodiert (zum Beispiel wird der neue Benutzer-Fullname festgelegt mit: `&user-fullname=Hamish+Willee`).

#### Die Antwort

Die Antwort aus der Anfrage ist unten gezeigt. Der Statuscode von `302 Found` teilt dem Browser mit, dass der Post erfolgreich war und dass eine zweite HTTP-Anfrage gestellt werden muss, um die im `Location`-Feld angegebene Seite zu laden. Die Informationen sind ansonsten ähnlich denen für die Antwort auf eine `GET`-Anfrage.

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
> Die in diesen Beispielen gezeigten HTTP-Antworten und -Anfragen wurden mit der [Fiddler](https://www.telerik.com/download/fiddler)-Anwendung erfasst, aber Sie können ähnliche Informationen mit Web-Sniffers (z. B. [WebSniffer](https://websniffer.com/)) oder Paketanalysatoren wie [Wireshark](https://www.wireshark.org/) erhalten. Sie können dies selbst ausprobieren. Verwenden Sie eines der verlinkten Tools und navigieren Sie dann durch eine Website und bearbeiten Sie Profilinformationen, um die verschiedenen Anfragen und Antworten zu sehen. Die meisten modernen Browser verfügen auch über Tools, die Netzwerk-Anfragen überwachen (zum Beispiel das [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tool in Firefox).

## Statische Seiten

Eine _statische Seite_ ist eine, die immer denselben fest codierten Inhalt vom Server zurückgibt, wenn eine bestimmte Ressource angefordert wird. Wenn Sie also beispielsweise eine Seite über ein Produkt unter `/static/my-product1.html` haben, wird diese gleiche Seite jedem Benutzer zurückgegeben. Wenn Sie Ihrer Website ein weiteres ähnliches Produkt hinzufügen, müssen Sie eine weitere Seite hinzufügen (z. B. `my-product2.html`) und so weiter. Dies kann wirklich ineffizient werden — was passiert, wenn Sie auf Tausende von Produktseiten stoßen? Sie würden viel Code auf jeder Seite wiederholen (das grundlegende Seitentemplate, die Struktur usw.), und wenn Sie etwas an der Seitenstruktur ändern wollten — wie zum Beispiel einen neuen Abschnitt „Verwandte Produkte“ hinzufügen — dann müssten Sie jede Seite einzeln ändern.

> [!NOTE]
> Statische Seiten sind ausgezeichnet, wenn Sie eine kleine Anzahl von Seiten haben und denselben Inhalt an jeden Benutzer senden möchten. Sie können jedoch erhebliche Wartungskosten verursachen, wenn die Anzahl der Seiten größer wird.

Lassen Sie uns zusammenfassen, wie dies funktioniert, indem wir uns erneut das Diagramm der statischen Seitenarchitektur ansehen, das wir im letzten Artikel betrachtet haben.

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-`GET`-Anfrage, die die URL seiner HTML-Seite angibt. Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) von `200 OK` (was auf Erfolg hinweist) enthält. Der Server könnte einen anderen Statuscode zurückgeben, beispielsweise `404 Not Found`, wenn die Datei nicht auf dem Server vorhanden ist, oder `301 Moved Permanently`, wenn die Datei existiert, aber an einen anderen Speicherort umgeleitet wurde.

Der Server für eine statische Seite muss nur `GET`-Anfragen verarbeiten, da der Server keine modifizierbaren Daten speichert. Er ändert auch seine Antworten nicht basierend auf HTTP-Anfragedaten (z. B. URL-Parameter oder Cookies).

Das Verständnis, wie statische Seiten funktionieren, ist dennoch nützlich, wenn man serverseitige Programmierung lernt, weil dynamische Seiten Anfragen zu statischen Dateien (CSS, JavaScript, statische Bilder usw.) auf genau die gleiche Weise behandeln.

## Dynamische Seiten

Eine _dynamische Seite_ ist eine, die Inhalte basierend auf der spezifischen Anfrage-URL und Daten generieren und zurückgeben kann (anstatt immer dieselbe fest codierte Datei für eine bestimmte URL zurückzugeben). Verwenden wir das Beispiel einer Produktwebsite, würde der Server Produkt„daten“ in einer Datenbank anstelle von individuellen HTML-Dateien speichern. Beim Empfang einer HTTP-`GET`-Anfrage für ein Produkt bestimmt der Server die Produkt-ID, holt die Daten aus der Datenbank und erstellt dann die HTML-Seite für die Antwort, indem er die Daten in eine HTML-Vorlage einfügt. Dies hat große Vorteile gegenüber einer statischen Website:

Verwendung einer Datenbank ermöglicht es, die Produktinformationen effizient in einer leicht erweiterbaren, modifizierbaren und durchsuchbaren Weise zu speichern.

Die Verwendung von HTML-Vorlagen macht es sehr einfach, die HTML-Struktur zu ändern, da dies nur an einem Ort, in einer einzigen Vorlage, und nicht über möglicherweise Tausende von statischen Seiten hinweg erfolgen muss.

### Anatomie einer dynamischen Anfrage

Dieser Abschnitt bietet eine Schritt-für-Schritt-Übersicht über den „dynamischen“ HTTP-Anfrage- und Antwortzyklus, in dem wir auf das, was wir im letzten Artikel betrachtet haben, mit viel mehr Details eingehen. Um es „realistisch“ zu halten, verwenden wir den Kontext einer Website für Mannschaftstrainer, auf der ein Trainer seinen Teamnamen und die Teamgröße in einem HTML-Formular auswählen und eine vorgeschlagene „beste Aufstellung“ für ihr nächstes Spiel erhalten kann.

Das unten stehende Diagramm zeigt die Hauptelemente der „Team Trainer“-Website zusammen mit nummerierten Etiketten für die Abfolge der Operationen, wenn der Trainer auf seine „beste Team“-Liste zugreift. Die Teile der Seite, die sie dynamisch machen, sind die _Webanwendung_ (so werden wir den serverseitigen Code nennen, der HTTP-Anfragen verarbeitet und HTTP-Antworten zurückgibt), die _Datenbank_, die Informationen über Spieler, Teams, Trainer und ihre Beziehungen enthält, und die _HTML-Vorlagen_.

![Dies ist ein Diagramm eines einfachen Webservers mit Schrittnummern für jeden Schritt der Client-Server-Interaktion.](web_application_with_html_and_steps.png)

Nachdem der Trainer das Formular mit dem Teamnamen und der Spieleranzahl abgesendet hat, ist die Abfolge der Operationen:

1. Der Webbrowser erstellt eine HTTP-`GET`-Anfrage an den Server unter Verwendung der Basis-URL für die Ressource (`/best`) und kodiert das Team und die Spieleranzahl entweder als URL-Parameter (z. B. `/best?team=my_team_name&show=11`) oder als Teil des URL-Musters (z. B. `/best/my_team_name/11/`). Eine `GET`-Anforderung wird verwendet, da die Anfrage nur Daten abruft (nicht ändert).
2. Der _Webserver_ erkennt, dass es sich bei der Anfrage um eine „dynamische“ handelt und leitet sie zur Verarbeitung an die _Webanwendung_ weiter (der Webserver bestimmt, wie er mit verschiedenen URLs umgehen soll, basierend auf Mustern, die in seiner Konfiguration definiert sind).
3. Die _Webanwendung_ identifiziert, dass die _Absicht_ der Anfrage darin besteht, die „beste Teamliste“ basierend auf der URL (`/best/`) abzurufen und findet aus der URL den erforderlichen Teamnamen und die Spieleranzahl heraus. Die _Webanwendung_ erhält dann die erforderlichen Informationen aus der Datenbank (unter Verwendung zusätzlicher „interner“ Parameter, um festzulegen, welche Spieler „am besten“ sind, und möglicherweise auch die Identität des eingeloggten Trainers aus einem clientseitigen Cookie extrahierend).
4. Die _Webanwendung_ erstellt dynamisch eine HTML-Seite, indem sie die Daten (aus der _Datenbank_) in Platzhalter innerhalb einer HTML-Vorlage einsetzt.
5. Die _Webanwendung_ gibt das generierte HTML an den Webbrowser (über den _Webserver_) zurück, zusammen mit einem HTTP-Statuscode von 200 („Erfolg“). Falls irgendetwas die HTML-Ausgabe verhindert, gibt die _Webanwendung_ einen anderen Code zurück – zum Beispiel „404“, um anzuzeigen, dass das Team nicht existiert.
6. Der Webbrowser wird dann beginnen, das zurückgegebene HTML zu verarbeiten, separate Anfragen zu senden, um alle anderen CSS- oder JavaScript-Dateien abzurufen, auf die er verweist (siehe Schritt 7).
7. Der Webserver lädt statische Dateien aus dem Dateisystem und gibt sie direkt an den Browser zurück (wieder basieren korrekte Dateioperationen auf Konfigurationsregeln und URL-Musterabgleich).

Eine Operation zur Aktualisierung eines Eintrags in der Datenbank würde ähnlich behandelt, außer dass wie bei jeder Datenbankaktualisierung die HTTP-Anfrage vom Browser als `POST`-Anforderung kodiert werden sollte.

### Andere Arbeiten erledigen

Die Aufgabe einer _Webanwendung_ besteht darin, HTTP-Anfragen zu empfangen und HTTP-Antworten zurückzugeben. Während die Interaktion mit einer Datenbank, um Informationen zu erhalten oder zu aktualisieren, sehr häufige Aufgaben sind, kann der Code gleichzeitig andere Dinge tun oder gar nicht mit einer Datenbank interagieren.

Ein gutes Beispiel für eine zusätzliche Aufgabe, die eine _Webanwendung_ ausführen könnte, wäre das Senden einer E-Mail an Benutzer, um ihre Registrierung auf der Seite zu bestätigen. Die Seite könnte auch Protokollierung oder andere Operationen durchführen.

### Etwas anderes als HTML zurückgeben

Serverseitiger Website-Code muss nicht HTML-Snippets/Dateien in der Antwort zurückgeben. Er kann stattdessen dynamisch andere Dateitypen (Text, PDF, CSV usw.) oder sogar Daten (JSON, XML usw.) erstellen und zurückgeben.

Dies ist besonders relevant für Websites, die durch die Verwendung von JavaScript Inhalte vom Server abrufen und die Seite dynamisch aktualisieren, anstatt immer eine neue Seite zu laden, wenn neue Inhalte angezeigt werden sollen. Siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) für mehr zu den Beweggründen für diesen Ansatz und wie dieses Modell aus Sicht des Clients aussieht.

## Web-Frameworks vereinfachen die serverseitige Webprogrammierung

Serverseitige Web-Frameworks erleichtern das Schreiben von Code für die oben beschriebenen Vorgänge erheblich.

Eine der wichtigsten Operationen, die sie ausführen, ist es, einfache Mechanismen bereitzustellen, um URLs für verschiedene Ressourcen/Seiten auf bestimmte Handler-Funktionen zuzuordnen. Dies erleichtert es, den mit jedem Ressourcentyp verbundenen Code getrennt zu halten. Es hat auch Vorteile in Bezug auf Wartung, weil Sie die URL, die verwendet wird, um eine bestimmte Funktion bereitzustellen, an einem Ort ändern können, ohne die Handler-Funktion ändern zu müssen.

Betrachten Sie zum Beispiel den folgenden Django (Python) Code, der zwei URL-Muster auf zwei View-Funktionen abbildet. Das erste Muster stellt sicher, dass eine HTTP-Anforderung mit einer Ressourcen-URL von `/best` an eine Funktion namens `index()` im `views`-Modul weitergeleitet wird. Eine Anforderung, die das Muster `/best/junior` hat, wird stattdessen an die `junior()`-View-Funktion übergeben.

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
> Die ersten Parameter in den `url()`-Funktionen können etwas seltsam aussehen (z. B. `r'^junior/$'`), weil sie eine Musterabgleichtechnik namens „reguläre Ausdrücke“ (RegEx oder RE) verwenden. Sie müssen nicht wissen, wie reguläre Ausdrücke an dieser Stelle funktionieren, außer dass sie es uns ermöglichen, Muster in der URL abzugleichen (anstatt der fest codierten Werte oben) und sie als Parameter in unseren View-Funktionen zu verwenden. Als Beispiel könnte ein wirklich einfaches RegEx sagen „einen einzelnen Großbuchstaben, gefolgt von 4 bis 7 Kleinbuchstaben, abgleichen“.

Das Web-Framework macht es auch einfach für eine View-Funktion, Informationen aus der Datenbank abzurufen. Die Struktur unserer Daten wird in Modellen definiert, das sind Python-Klassen, die die Felder definieren, die in der zugrunde liegenden Datenbank gespeichert werden sollen. Wenn wir ein Modell namens _Team_ mit einem Feld „_team_type_“ haben, dann können wir eine einfache Abfragesyntax verwenden, um alle Teams zurückzubekommen, die einen bestimmten Typ haben.

Das folgende Beispiel erhält eine Liste aller Teams, die den genauen (groß-/kleinschreibungssensitiven) `team_type` „junior“ haben — beachten Sie das Format: Feldname (`team_type`), gefolgt von einem Doppelunterstrich und dann der Art des zu verwendenden Abgleichs (in diesem Fall `exact`). Es gibt viele andere Arten von Abgleichen, und wir können sie aneinanderreihen. Wir können auch die Reihenfolge und die Anzahl der zurückgegebenen Ergebnisse steuern.

```python
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```

Nachdem die `junior()`-Funktion die Liste der Junior-Teams erhalten hat, ruft sie die `render()`-Funktion auf und übergibt die ursprüngliche `HttpRequest`, eine HTML-Vorlage und ein „Kontext“-Objekt, das die Informationen definiert, die in der Vorlage enthalten sein sollen. Die `render()`-Funktion ist eine bequeme Funktion, die HTML mit einem Kontext und einer HTML-Vorlage generiert und es in einem `HttpResponse`-Objekt zurückgibt.

Offensichtlich können Web-Frameworks Ihnen bei vielen anderen Aufgaben helfen. Wir diskutieren viele weitere Vorteile und einige beliebte Web-Framework-Auswahlmöglichkeiten im nächsten Artikel.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie ein gutes Verständnis der Operationen haben, die serverseitiger Code ausführen muss, und einige der Möglichkeiten kennen, in denen ein serverseitiges Web-Framework dies erleichtern kann.

In einem folgenden Modul werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Seite auszuwählen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
