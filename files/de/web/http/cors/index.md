---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS")}}) ist ein auf {{Glossary("HTTP")}}-Headern basierender Mechanismus, der einem Server erlaubt, anzugeben, welche {{glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer seinem eigenen vom Browser für das Laden von Ressourcen zugelassen werden sollen. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulassen wird. In dieser Preflight-Anfrage sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine cross-origin Anfrage: Der Front-End-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet {{domxref("Window/fetch", "fetch()")}}, um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen schränken Browser cross-origin HTTP-Anfragen ein, die durch Skripte initiiert wurden. Beispielweise befolgen `fetch()` und {{domxref("XMLHttpRequest")}} die [gleiche Ursprungsrichtlinie](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von demselben Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die korrekten CORS-Header.

![Diagramm der CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere cross-origin Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von cross-origin HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Standard für cross-origin Freigaben](https://fetch.spec.whatwg.org/#http-cors-protocol) kann cross-origin HTTP-Anfragen für folgende Fälle ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben besprochen.
- Web Fonts (für die Verwendung von Schriftarten über Domains hinweg in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriftarten bereitstellen können, die nur cross-origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Videoframes, die mit {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} auf eine Leinwand gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion der erforderlichen HTTP-Header.

## Funktionelle Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert durch das Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Headers), mit denen Server beschreiben können, welche Ursprünge berechtigt sind, Informationen von einem Webbrowser zu lesen. Zusätzlich dazu verlangt die Spezifikation, dass Browser für HTTP-Anfragemethoden, die Nebeneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), die Anfrage durch einen "Preflight" überprüfen, indem sie mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} eine Anfrage nach unterstützten Methoden an den Server senden und dann, nach Erlaubnis des Servers, die eigentliche Anfrage senden. Server können den Clients auch mitteilen, ob "Anmeldedaten" (wie [Cookies](/de/docs/Web/HTTP/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)) mit den Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind die Details über den Fehler _nicht für JavaScript verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers nach Details zu überprüfen.

Nachfolgende Abschnitte diskutieren Szenarien und bieten einen Überblick über die verwendeten HTTP-Header.

## Beispiele für Zugangskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden {{domxref("Window/fetch", "fetch()")}}, das in jedem unterstützenden Browser cross-origin Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS Preflight")}}-Anfrage aus. Diese werden _einfache Anfragen_ gemäß der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) genannt, auch wenn die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Der Grund dafür ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das vor der siteübergreifenden {{domxref("Window/fetch", "fetch()")}} und {{domxref("XMLHttpRequest")}} existierte) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss der Server nicht explizit zustimmen (indem er auf eine Preflight-Anfrage antwortet), jede Anfrage zu erhalten, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als bei Formularübermittlungen. Der Server muss jedoch weiterhin mit der Verwendung von {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eines der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch vom Benutzeragenten gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, oder [den anderen Headern, die in der Fetch-Spezifikation als _verbotene Headernamen_ definiert sind](https://fetch.spec.whatwg.org/#forbidden-header-name)), dürfen nur die Header manuell gesetzt werden, die in der Fetch-Spezifikation als CORS-gesicherte Anforderungs-Header definiert sind, nämlich:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (beachten Sie bitte die untenstehenden zusätzlichen Einschränkungen)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typen/Subtypen-Kombinationen für den im {{HTTPHeader("Content-Type")}} Header angegebenen {{Glossary("MIME type", "Medientyp")}} sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem {{domxref("XMLHttpRequest")}}-Objekt gestellt wird, sind keine Ereignis-Listener für das Objekt registriert, das durch die {{domxref("XMLHttpRequest.upload")}}-Eigenschaft der Anfrage zurückgegeben wird; das heißt, es wurde kein Code aufgerufen, um mit `xhr.upload.addEventListener()` einen Ereignis-Listener hinzuzufügen, der den Upload überwacht.
- Kein {{domxref("ReadableStream")}}-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview haben zusätzliche Einschränkungen für die Werte in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} Headern. Wenn einer dieser Header "nicht standardisierte" Werte enthält, wird die Anfrage von WebKit/Safari nicht als "einfache Anfrage" betrachtet. Welche Werte WebKit/Safari als "nicht standardisiert" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://webkit.org/b/165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://webkit.org/b/165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Beispielsweise möchte der Webinhalt unter `https://foo.example` JSON-Content von der Domain `https://bar.other` abrufen. JavaScript-Code dieser Art könnte auf `foo.example` bereitgestellt werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt den Austausch zwischen dem Client und dem Server aus, wobei CORS-Header verwendet werden, um die Berechtigungen zu verwalten:

![Diagramm eines einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Schauen wir uns an, was der Browser in diesem Fall an den Server sendet:

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
```

Der bemerkenswerte Request-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Nun sehen wir, wie der Server antwortet:

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[…XML Data…]
```

In der Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung aus zugänglich ist.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}} Header ist die einfachste Verwendung des Zugangskontrollprotokolls. Wenn die Ressourcenbesitzer von `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` einschränken möchten (d. h. keine andere Domain als `https://foo.example` kann auf die Ressource in einer cross-origin Weise zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Beantwortung einer [Anfrage mit Anmeldedaten](#anfragen_mit_anmeldedaten) muss der Server **einen Ursprung** im Wert des `Access-Control-Allow-Origin` Headers angeben, anstatt das "`*`" Platzhalterzeichen zu verwenden.

### Preflight-Anfragen

Anders als [_einfache Anfragen_](#einfache_anfragen) sendet der Browser bei "vorab genehmigten" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche cross-origin Anfragen werden vorab genehmigt, da sie Auswirkungen auf Nutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die vorab genehmigt wird:

```js
const fetchPromise = fetch("https://bar.other/doc", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "text/xml",
    "X-PINGOTHER": "pingpong",
  },
  body: "<person><name>Arun</name></person>",
});

fetchPromise.then((response) => {
  console.log(response.status);
});
```

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet wird. Ebenfalls wird ein benutzerdefinierter HTTP `X-PINGOTHER` Request-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber sind im Allgemeinen für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorab genehmigt.

![Diagramm einer vorab genehmigten Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, umfasst die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; diese sind nur für die `OPTIONS`-Anfrage erforderlich.

Sehen wir uns den vollständigen Austausch zwischen Client und Server an. Die erste Übertragung ist die _vorab genehmigte Anfrage/Antwort_:

```http
OPTIONS /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother

HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

Der erste Block oben stellt die vorab genehmigte Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode dar. Der Browser bestimmt, dass er dies basierend auf den Anforderungsparametern senden muss, die in der oben gezeigten JavaScript-Code-Snippet verwendet wurden, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu bestimmen und eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass mit der OPTIONS-Anfrage zwei weitere Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}} Header benachrichtigt den Server als Teil einer vorab genehmigten Anfrage, dass bei der tatsächlichen Anfrage eine `POST`-Anfragemethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}} Header benachrichtigt den Server, dass die tatsächliche Anfrage mit den benutzerdefinierten Headern `X-PINGOTHER` und `Content-Type` gesendet wird. Nun hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die besagt, dass die Anfragemethode (`POST`) und die Anfrage-Header (`X-PINGOTHER`) akzeptabel sind. Betrachten wir die folgenden Zeilen genauer:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, wodurch der Zugriff auf die anfragende Ursprungsdomäne beschränkt wird. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die Ressource in Frage zu stellen (dieser Header ist ähnlich dem {{HTTPHeader("Allow")}} Antwort-Header, wird jedoch streng im Zusammenhang mit dem Zugangskontrollkontext verwendet).

Der Server sendet außerdem `Access-Control-Allow-Headers` mit einem Wert von "`X-PINGOTHER, Content-Type`", der bestätigt, dass diese Header für die Verwendung mit der tatsächlichen Anfrage zulässig sind. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine kommaseparierte Liste zulässiger Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die vorab genehmigte Anfrage zwischengespeichert werden kann, ohne eine weitere vorab genehmigte Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn `Access-Control-Max-Age` diesen Wert überschreitet.

Sobald die vorab genehmigte Anfrage abgeschlossen ist, wird die eigentliche Anfrage gesendet:

```http
POST /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: https://foo.example
Pragma: no-cache
Cache-Control: no-cache

<person><name>Arun</name></person>

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Einige XML-Inhalte]
```

#### Preflight-Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Weiterleitungen nach einer vorab genehmigten Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage erfolgt, werden einige Browser derzeit eine Fehlermeldung melden, wie die folgende:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet, was für cross-origin Anfragen, die eine Vorabgenehmigung erfordern, nicht erlaubt ist.
> Die Anfrage erfordert eine Vorabgenehmigung, was es verbietet, cross-origin Weiterleitungen zu folgen.

Das CORS-Protokoll verlangte ursprünglich dieses Verhalten, wurde jedoch [anschließend geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert, sodass sie immer noch das ursprünglich geforderte Verhalten zeigen.

Bis Browser mit der Spezifikation aufholen, können Sie möglicherweise diese Einschränkung umgehen, indem Sie eines oder beide der folgenden Dinge tun:

- Ändern Sie das Serverseitige Verhalten, um die Vorabgenehmigung und/oder die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage, sodass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keine Vorabgenehmigung verursacht

Wenn das nicht möglich ist, dann ist eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (mithilfe von {{domxref("Response.url")}} für die Fetch API oder {{domxref("XMLHttpRequest.responseURL")}}), um zu bestimmen, an welche URL die tatsächliche vorab genehmigte Anfrage enden würde.
2. Machen Sie eine andere Anfrage (die _echte_ Anfrage) unter Verwendung der URL, die Sie im ersten Schritt von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage jedoch eine explizite Anfordung auslöst, da sie den `Authorization`-Header in der Anfrage enthält, können Sie die Einschränkung mit den oben genannten Schritten nicht umgehen. Und Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Wenn Anfragen mit Anmeldedaten an eine andere Domain gemacht werden, gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer erzwungen, unabhängig von einer Einrichtung auf dem Server und dem Client, wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit, die sowohl {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest")}} und CORS bieten, ist die Möglichkeit, "authentifizierte" Anfragen zu stellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. In standardmäßigen cross-origin `fetch()`- oder `XMLHttpRequest`-Anrufen werden Browser _keine_ Anmeldedaten senden.

Um eine `fetch()`-Anfrage zu stellen, die Anmeldedaten enthält, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu stellen, die Anmeldedaten enthält, setzen Sie die {{domxref("XMLHttpRequest.withCredentials")}}-Eigenschaft auf `true`.

In diesem Beispiel, fordert Originalinhalt von `https://foo.example` eine einfache GET-Anfrage an eine Ressource auf `https://bar.other` an, die Cookies setzt. Der Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein {{domxref("Request")}}-Objekt, wobei die `credentials`-Option in den Konstruktor auf `"include"` gesetzt wird, dann wird diese Anfrage in `fetch()` übergeben. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorab genehmigt, aber der Browser wird **jede Antwort ablehnen**, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}} `: true` Header enthält und die Antwort **nicht** für den aufrufenden Webinhalt verfügbar machen.

![Diagramm einer einfachen GET-Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

Hier ist ein Beispielaustausch zwischen Client und Server:

```http
GET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://foo.example/examples/credential.html
Origin: https://foo.example
Cookie: pageAccess=2

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

[text/plain content]
```

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortet, wie in diesem Beispiel gezeigt, würde die Antwort ignoriert und nicht für den Webinhalt verfügbar gemacht.

#### Vorab genehmigte Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die eigentliche Anfrage mit Anmeldedaten durchgeführt werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Clientzertifikate in Preflight-Anfragen gesendet werden, was der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) Spezifikation zuwiderläuft.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten durch Setzen der Einstellung: `network.cors_preflight.allow_client_cert` auf `true` ([Firefox Bug 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Clientzertifikate in CORS-Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Authentifizierte Anfragen und Wildcards

Bei der Beantwortung einer authentifizierten Anfrage:

- Der Server **darf nicht** das "`*`" Wildcard für den `Access-Control-Allow-Origin` Antwort-Header-Wert spezifizieren, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`

- Der Server **darf nicht** das "`*`" Wildcard für den `Access-Control-Allow-Headers` Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel: `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`

- Der Server **darf nicht** das "`*`" Wildcard für den `Access-Control-Allow-Methods` Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel: `Access-Control-Allow-Methods: POST, GET`

- Der Server **darf nicht** das "`*`" Wildcard für den `Access-Control-Expose-Headers` Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel: `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldedatum enthält (am häufigsten ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *` Header (d. h. mit dem Platzhalterzeichen) enthält, blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklerkonsole.

Wenn jedoch eine Anfrage ein Anmeldedatum enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung anstelle des Wildcards enthält (wie zum Beispiel `Access-Control-Allow-Origin: https://example.com`), dann erlaubt der Browser den Zugriff auf die Antwort von dem angegebenen Ursprung.

Beachten Sie auch, dass jeder `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das "`*`" Wildcard anstelle eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und wird daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookie in der Anfrage können auch in normalen Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die erzwungene Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Fähigkeit aufheben und effektiv verhindern, dass Sie authentifizierte Anfragen überhaupt stellen können.

Die Cookie-Richtlinie in Bezug auf das [SameSite](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut würde angewendet.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzigen Ursprung an, der den Browsern mitteilt, dass dieser Ursprung auf die Ressource zugreifen darf; oder alternativ — für Anfragen **ohne** Anmeldedaten — das "`*`" Wildcard, das den Browsern mitteilt, dass jeder Ursprung auf die Ressource zugreifen darf.

Beispielsweise, um Code vom Ursprung `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie folgendes angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung (der sich dynamisch basierend auf dem anfragenden Ursprung als Teil einer Erlaubnisliste ändern kann) angibt, anstelle des "`*`" Wildcard, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}} Antwort-Header einschließen, um Clients anzuzeigen, dass sich die Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anforderungs-Headers unterscheiden werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}} Header fügt die angegebenen Header der Erlaubnisliste hinzu, auf die JavaScript (wie {{domxref("Response.headers")}}) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Beispielsweise würde folgendes:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

es dem Browser erlauben, die Header `X-My-Custom-Header` und `X-Another-Custom-Header` offenzulegen.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}} Header gibt an, wie lange die Ergebnisse einer vorab genehmigten Anfrage zwischengespeichert werden können. Ein Beispiel für eine vorab genehmigte Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds` Parameter gibt die Anzahl der Sekunden an, die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}} Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine vorab genehmigte Anfrage verwendet wird, gibt er an, ob die tatsächliche Anfrage mit Anmeldedaten gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab genehmigt werden, und wenn eine Anfrage für eine Ressource mit Anmeldedaten gemacht wird und dieser Header nicht mit der Ressource zurückgegeben wird, wird die Antwort vom Browser ignoriert und nicht an den Webinhalt zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Authentifizierte Anfragen](#anfragen_mit_anmeldedaten) werden oben erörtert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}} Header spezifiziert die Methode oder Methoden, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine vorab genehmigte Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab genehmigt wird, werden oben erörtert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("vorab genehmigte Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}} Header wird als Antwort auf eine {{Glossary("vorab genehmigte Anfrage")}} verwendet, um anzugeben, welche HTTP-Header beim Erstellen der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die Serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}} Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungs-Header

Dieser Abschnitt listet Header auf, die Clients bei der Ausgabe von HTTP-Anfragen verwenden können, um die cross-origin Freigabefunktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Anfragen an Server stellen. Entwickler, die cross-origin Anfragen machen, müssen keine cross-origin Freigabe-Anfrage-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}} Header gibt den Ursprung der cross-origin Zugriffsanfrage oder der vorab genehmigten Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Sie enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin` Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}} Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine vorab genehmigte Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gemacht wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Nutzung finden Sie [oben.](#preflight-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}} Header wird verwendet, wenn eine vorab genehmigte Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gemacht wird (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergeben werden). Dieser Browser-seitige Header wird durch den komplementären Server-seitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Nutzung finden Sie [oben](#preflight-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- {{domxref("XMLHttpRequest")}}
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie Sie den Chrome-Browser ohne CORS ausführen](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "wie man"-Informationen für den Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man die CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um das _"Kein Access-Control-Allow-Origin Header"_ Problem zu umgehen
  - Wie man das Problem _"Access-Control-Allow-Origin Header darf nicht das Platzhalterzeichen sein"_ behebt
