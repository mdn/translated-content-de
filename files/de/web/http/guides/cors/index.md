---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 6a8eddda18359a72e652d2cb3e4cfb8a285063d7
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der es einem Server ermöglicht, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer seinem eigenen laden von Ressourcen erlauben soll. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Vorab-Anfrage" an den Server senden, der die cross-origin Ressource hostet, um zu prüfen, ob der Server die tatsächliche Anfrage zulässt. Bei dieser Vorab-Anfrage sendet der Browser Header, die angeben, welche HTTP-Methode und Header in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Frontend-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser HTTP-Anfragen über verschiedene Ursprünge hinweg, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von derselben Herkunft anfordern kann, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von HTTP-Anfragen über verschiedene Ursprünge hinweg zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Standard für Cross-Origin-Sharing](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin HTTP-Anfragen für folgende Fälle ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web-Fonts (für die Nutzung von Schriftarten über Domänen hinweg in `@font-face` innerhalb von CSS), wie in den [Anforderungen zum Abrufen von Schriftarten](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, sodass Server TrueType-Schriftarten bereitstellen können, die nur cross-origin geladen werden und von Websites verwendet werden dürfen, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die auf einen Canvas mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und umfasst eine Diskussion über die notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert durch das Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die es Servern ermöglichen, anzugeben, welche Ursprünge berechtigt sind, Informationen von einem Webbrowser zu lesen. Darüber hinaus schreibt die Spezifikation für HTTP-Anfragemethoden, die Nebenwirkungen auf Serverdaten verursachen können (insbesondere HTTP-Methoden, die keine {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind), vor, dass Browser die Anfrage "vorab" prüfen, wobei die unterstützten Methoden vom Server mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} abgefragt und dann, bei "Genehmigung" durch den Server, die tatsächliche Anfrage gesendet werden. Server können auch Clients darüber informieren, ob "Zugangsdaten" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollten.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind Details zu dem Fehler _nicht für JavaScript verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Die einzige Möglichkeit, genau festzustellen, was schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

Nachfolgende Abschnitte diskutieren Szenarien und geben eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das cross-origin Anfragen in jedem unterstützenden Browser ausführen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Vorab-Anfrage")}} aus. Diese werden im veralteten [CORS-Standard](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) als _einfache Anfragen_ bezeichnet, obwohl der [Fetch-Standard](https://fetch.spec.whatwg.org/) (der jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation dahinter ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das vor cross-site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) existiert) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits Schutzmaßnahmen gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) getroffen haben muss. Unter dieser Annahme muss der Server nicht zustimmen (indem er auf eine Vorab-Anfrage antwortet), um jede Anfrage zu akzeptieren, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch Formularübermittlung. Allerdings muss der Server dennoch mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch vom Benutzeragenten gesetzten Headern (z. B. {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder den {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Headern")}}), sind nur diejenigen Header gestattet, die manuell gesetzt werden, die {{Glossary("CORS-safelisted_request_header", "CORS-safe-gelistete Anfrage-Header")}} sind:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typ/Subtyp-Kombinationen für den {{Glossary("MIME_type", "Medientyp")}}, der im {{HTTPHeader("Content-Type")}}-Header angegeben wird, sind:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gemacht wird, sind keine Event-Listener auf dem Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft in der Anfrage verwendet wird; das heißt, es hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener hinzuzufügen, um den Upload zu überwachen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview haben zusätzliche Einschränkungen hinsichtlich der Werte, die in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} erlaubt sind. Wenn einer dieser Header "nicht standardisierte" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardisiert" betrachten, ist nicht dokumentiert, außer in den folgenden WebKit-Fehlern:
>
> - [Erfordert Vorabprüfung für nicht standardisierte CORS-safelisted-Anfrage-Header Accept, Accept-Language und Content-Language](https://webkit.org/b/165178)
> - [Erlaubt Kommas in den Anfrage-Headern Accept, Accept-Language und Content-Language für einfache CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Zum Beispiel, nehmen wir an, Webinhalte auf `https://foo.example` wünschen, JSON-Inhalte von der Domäne `https://bar.other` abzurufen. Code dieser Art könnte in JavaScript auf `foo.example` eingesetzt werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Diese Operation führt einen einfachen Austausch zwischen dem Client und dem Server durch und verwendet CORS-Header, um die Berechtigungen zu verwalten:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Sehen wir uns an, was der Browser in diesem Fall an den Server senden wird:

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

Der bemerkenswerte Anforderungsheader ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Sehen wir uns nun an, wie der Server antwortet:

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass auf die Ressource von **jedem** Ursprung zugegriffen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Nutzung des Zugriffskontrollprotokolls. Wenn die Ressourcenbesitzer bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken wollten (d.h. keine andere Domäne als `https://foo.example` kann auf die Ressource in einer Cross-Origin-Weise zugreifen), würden sie Folgendes senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Beim Beantworten einer [bekredentialisierten Anfrage](#anfragen_mit_zugangsdaten) **muss** der Server einen Ursprung im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt das `*`-Wildcard zu spezifizieren.

### Preflighted Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "vorab geprüften" Anfragen zuerst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorab geprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Das Folgende ist ein Beispiel für eine Anfrage, die vorab geprüft wird:

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

Das obige Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet wird. Außerdem wird ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anforderungsheader gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber im Allgemeinen nützlich für Webanwendungen. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und da ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage vorab geprüft.

![Diagramm einer vorab geprüften Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie werden nur für die `OPTIONS`-Anfrage benötigt.

Sehen wir uns den gesamten Austausch zwischen Client und Server an. Der erste Austausch ist die _Vorab-Anfrage/Antwort_:

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

Der obige Block stellt die Vorab-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} dar. Der Browser bestimmt, dass er dies auf der Grundlage der Anforderungsparameter, die im obigen JavaScript-Code-Snippet verwendet wurden, senden muss, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten und eine {{Glossary("Safe/HTTP", "sichere")}} Methode ist, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei weitere Anforderungsheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Vorab-Anfrage, dass die tatsächliche Anfrage mit einer `POST`-Anfragemethode gesendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass die tatsächliche Anfrage mit `X-PINGOTHER` und benutzerdefinierten `Content-Type`-Headern gesendet wird. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt und anzeigen, dass die Anfragemethode (`POST`) und die Anforderungsheader (`X-PINGOTHER`) akzeptabel sind. Schauen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example` und beschränkt den Zugriff nur auf die verlangende Ursprung-Domäne. Es antwortet auch mit `Access-Control-Allow-Methods`, was sagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist dem {{HTTPHeader("Allow")}}-Antwort-Header ähnlich, wird jedoch streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type` und bestätigt, dass dies erlaubte Header sind, die in der tatsächlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommata getrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Vorab-Anfrage zwischengespeichert werden kann, ohne eine weitere Vorab-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen überschreitet.

Sobald die Vorab-Anfrage abgeschlossen ist, wird die tatsächliche Anfrage gesendet:

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

[Some XML content]
```

#### Vorab-Anfragen und Umleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Umleitungen nach einer vorab geprüften Anfrage. Wenn eine Umleitung nach einer solchen Anfrage auftritt, berichten einige Browser derzeit möglicherweise eine Fehlermeldung wie die folgende:

> Die Anfrage wurde an `https://example.com/foo` umgeleitet, was für cross-origin Anfragen, die eine Vorabprüfung erfordern, nicht erlaubt ist.
> Anfrage erfordert Vorabprüfung, was nicht erlaubt ist, um cross-origin Umleitungen zu folgen.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde aber [nachträglich geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung umgesetzt, und daher zeigen sie immer noch das ursprünglich geforderte Verhalten.

Bis Browser mit der Spezifikation aufholen, können Sie möglicherweise diese Einschränkung umgehen, indem Sie eines oder beide der folgenden tun:

- Ändern Sie das Server-Verhalten, um die Vorabprüfung und/oder die Umleitung zu vermeiden
- Ändern Sie die Anfrage, sodass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keine Vorabprüfung auslöst

Wenn das nicht möglich ist, dann ist eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, an welcher URL die tatsächliche vorab geprüfte Anfrage enden würde.
2. Machen Sie eine weitere Anfrage (die _eigentliche_ Anfrage) mit der URL, die Sie im ersten Schritt von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage jedoch eine Vorabprüfung wegen des Vorhandenseins des `Authorization`-Headers in der Anfrage auslöst, können Sie die Einschränkung mit den oben genannten Schritten nicht umgehen. Und Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gerichtet ist.

### Anfragen mit Zugangsdaten

> [!NOTE]
> Bei der Verwendung von Anfragen mit Zugangsdaten zu einer anderen Domäne gelten weiterhin Cookies-Richtlinien von Drittanbietern. Die Richtlinie wird immer durchgesetzt, unabhängig von jeglicher Einrichtung auf dem Server und dem Client, wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit, die sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS bereitgestellt wird, ist die Möglichkeit, "credentialed" Anfragen zu machen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. De默认情况下，跨域 `fetch()` 或 `XMLHttpRequest` 请求，浏览器不发送凭证。

Um eine `fetch()`-Anfrage zu bitten, Zugangsdaten einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu bitten, Zugangsdaten einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel macht ein Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage zu einer Ressource auf `https://bar.other`, die Cookies setzt. Inhalte auf foo.example könnten JavaScript mit diesem Code enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt und setzt die `credentials`-Option im Konstruktor auf `"include"`, dann wird diese Anfrage an `fetch()` übergeben. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorab geprüft, aber der Browser **verwirft** jede Antwort, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header mit dem Wert `true` hat, und **macht** die Antwort nicht für die aufrufenden Webinhalte verfügbar.

![Diagramm einer GET-Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und nicht für die Webinhalte verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortet, wie in diesem Beispiel dargestellt.

#### Vorabprüfungsanfragen und Zugangsdaten

CORS-Vorabprüfungsanfragen dürfen niemals Zugangsdaten enthalten. Die _Antwort_ auf eine Vorabprüfungsanfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die tatsächliche Anfrage mit Zugangsdaten gestellt werden kann.

> [!NOTE]
> Einige Unternehmens-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Vorabprüfungsanfragen gesendet werden, entgegen der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 ermöglicht es, dieses nicht konforme Verhalten durch das Setzen der Präferenz einzuschalten: `network.cors_preflight.allow_client_cert` auf `true` ([Firefox bug 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Vorabprüfungsanfragen ([Chrome bug 775438](https://crbug.com/775438)).

#### Bekredentialisierte Anfragen und Platzhalter

Bei der Antwort auf eine bekredentialisierte Anfrage:

- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Origin`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Headers`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Methods`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Methodenamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Expose-Headers`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Zugangsdaten enthält (meistens ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header (d.h. mit dem Wildcard) enthält, blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklerkonsole.

Aber wenn eine Anfrage eine Berechtigung (wie den `Cookie`-Header) enthält und die Antwort einen tatsächlichen Ursprung anstelle des Platzhalters (wie zum Beispiel `Access-Control-Allow-Origin: https://example.com`) enthält, dann erlaubt der Browser den Zugriff auf die Antwort vom angegebenen Ursprung.

Beachten Sie auch, dass jeder `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das `*`-Wildcard anstelle eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Set-Cookie`-Header in der Antwort wird von `bar.other` gesendet, und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookies in der Anfrage können auch durch normale Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie kann daher die im vorliegenden Kapitel beschriebene Fähigkeit hinfällig machen und verhindern, dass Sie überhaupt bekredentialisierte Anfragen machen können.

Cookie-Richtlinien bezüglich des [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attributs würden Anwendung finden.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffssteuerungsanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorhergehende Abschnitt gibt eine Übersicht über deren Anwendung.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der dem Browser mitteilt, dass dieser Ursprung auf die Ressource zugreifen darf, oder alternativ — für Anfragen **ohne** Zugangsdaten — das `*`-Wildcard, das dem Browser erlaubt, jedem Ursprung den Zugriff auf die Ressource zu gestatten.

Zum Beispiel, um Code vom Ursprung `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie folgendes angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der möglicherweise je nach erlaubter Liste dynamisch je nach anfragendem Ursprung ändert), anstelle des `*`-Wildcards, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header einschließen, um den Clients zu signalisieren, dass sich Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anfrage-Headers unterscheiden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header der erlaubten Liste hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern lesen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde folgender Eintrag die Header `X-My-Custom-Header` und `X-Another-Custom-Header` für den Browser zugänglich machen:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Vorab-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Vorab-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds`-Parameter gibt die Anzahl der Sekunden an, die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine Vorab-Anfrage verwendet wird, zeigt dies an, ob die tatsächliche Anfrage mit Zugangsdaten gestellt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab geprüft werden. Wenn eine Anfrage mit Zugangsdaten gestellt wird und dieser Header nicht mit der Ressource zurückgegeben wird, wird die Antwort vom Browser ignoriert und nicht an die Webinhalte zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Zugangsdaten](#anfragen_mit_zugangsdaten) werden oben besprochen.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder Methoden an, die beim Zugreifen auf die Ressource erlaubt sind. Dieser wird als Antwort auf eine Vorab-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab geprüft wird, werden oben besprochen.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Vorab-Anfrage")}} ist oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Vorab-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei den tatsächlichen Anforderungen verwendet werden dürfen. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieser Abschnitt listet die Header auf, die Clients beim Senden von HTTP-Anfragen verwenden können, um das Cross-Origin-Sharing-Feature zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Aufrufe an Server machen. Entwickler, die Cross-Origin-Anfragen machen, müssen keine Cross-Origin-Sharing-Anfrage-Header programmgesteuert setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder Vorab-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Es enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird bei der Ausgabe einer Vorab-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode bei der tatsächlichen Anfrage verwendet wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung finden Sie [oben.](#preflighted_anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird bei der Ausgabe einer Vorab-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden (zum Beispiel, indem diese als [`headers`](/de/docs/Web/API/RequestInit#headers)-Option übergeben werden). Dieser browserseitige Header wird durch den komplementären serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung finden Sie [oben](#preflighted_anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [Enable CORS: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Using CORS with All (Modern) Browsers](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitungs"-Informationen zur Bewältigung häufiger Probleme](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man die CORS-Vorabprüfung vermeidet
  - Wie man einen CORS-Proxy verwendet, um das _"Kein Access-Control-Allow-Origin-Header"_ zu umgehen
  - Wie man _"Access-Control-Allow-Origin-Header darf nicht das Wildcard sein"_ behebt
