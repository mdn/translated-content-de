---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 9f02140982c8afe383e8ac117ab43a6593f24ca9
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der es einem Server ermöglicht, alle {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer dem eigenen anzugeben, von denen ein Browser das Laden von Ressourcen erlauben soll. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulässt. Während dieser Preflight-Anfrage sendet der Browser Header, die die HTTP-Methode und die Header angeben, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Frontend-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen schränken Browser Cross-Origin-HTTP-Anfragen ein, die von Skripten initiiert werden. Beispielsweise folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von dem gleichen Ursprungsort anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browser und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen nutzen CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Zwecke ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben erwähnt.
- Web Fonts (für die Verwendung von Schriften über Domains hinweg mit `@font-face` in CSS), [damit Server TrueType-Schriften bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden dürfen, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS Shapes aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und beinhaltet eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert durch das Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), mit denen Server beschreiben können, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich zu HTTP-Anforderungsmethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere andere HTTP-Methoden als {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), verlangt die Spezifikation, dass Browser die Anforderung "preflighten", indem sie mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} unterstützte Methoden vom Server erfragen und danach, nach "Genehmigung" durch den Server, die eigentliche Anfrage senden. Server können Clients auch darüber informieren, ob "Berechtigungen" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind JavaScript keine Details zum Fehler _verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

In den folgenden Abschnitten werden Szenarien diskutiert und ein Überblick über die verwendeten HTTP-Header gegeben.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen durchführen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden im veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) als _einfache Anfragen_ bezeichnet, obwohl der [Fetch-Standard](https://fetch.spec.whatwg.org/) (der nun CORS definiert) diesen Begriff nicht verwendet.

Die Motivation besteht darin, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das vor siteübergreifenden [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) liegt) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) schützen muss. Unter dieser Annahme muss der Server nicht (durch eine Antwort auf eine Preflight-Anfrage) zustimmen, um jede Anfrage zu empfangen, die wie ein Formularversand aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch Formulardaten. Der Server muss jedoch weiterhin zustimmen, indem er {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der zulässigen Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den Headern, die automatisch vom Benutzeragenten gesetzt werden (beispielsweise {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder die {{Glossary("Forbidden_request_header", "verboten Anfrage-Header")}}), dürfen nur die Header manuell gesetzt werden, die zu den {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request-headers")}} gehören, nämlich:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen zulässigen Typ/Subtyp-Kombinationen für den {{Glossary("MIME_type", "Medientyp")}}, der im {{HTTPHeader("Content-Type")}}-Header angegeben ist, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Falls die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gemacht wird, sind keine Ereignis-Listener auf dem von [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) zurückgegebenen Objekt registriert, das in der Anfrage verwendet wurde; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Ereignis-Listener zum Überwachen des Uploads hinzuzufügen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Beschränkungen für die in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} zulässigen Werte. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Preflight für nicht standardmäßige CORS-safelisted-Anfrage-Header Accept, Accept-Language und Content-Language erfordern](https://webkit.org/b/165178)
> - [Erlauben von Kommas in Accept, Accept-Language und Content-Language-Anfrage-Headern für einfache CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Restriktionen, da sie nicht Teil der Spezifikation sind.

Angenommen, Webcontent bei `https://foo.example` möchte JSON-Inhalte von der Domain `https://bar.other` abrufen. Solcher Code könnte in JavaScript auf `foo.example` verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Diese Operation führt einen einfachen Austausch zwischen Client und Server durch und verwendet CORS-Header, um die Rechte zu verwalten:

![Diagramm einer einfachen CORS GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Sehen wir uns an, was der Browser in diesem Fall an den Server sendet:

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

Der bemerkenswerte Anfrage-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass die Anfrage von `https://foo.example` kommt.

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung aufgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourceninhaber auf `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken wollten (d.h. keine Domain außer `https://foo.example` kann die Ressource auf eine cross-origin Weise anfragen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Antwort auf eine [credentialierten Anfrage](#anfragen_mit_berechtigungen) muss der Server im Wert des `Access-Control-Allow-Origin` Headers eine Origin angeben und darf nicht den `*` Platzhalter verwenden.

### Preflight-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "preflighteten" Anfragen zuerst eine HTTP-Anfrage unter Verwendung der {{HTTPMethod("OPTIONS")}}-Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden preflighted, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die preflightet wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anfrage-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber generell für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage preflighted.

![Diagramm einer Anfrage, die preflighted wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; sie werden nur für die `OPTIONS` Anfrage benötigt.

Sehen wir uns den vollständigen Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/Antwort_:

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

Der erste Block oben stellt die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser entscheidet, dass er dies basierend auf den Anforderungsparametern senden muss, die der obige JavaScript-Code-Snippet verwendet hat, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass neben der OPTIONS-Anfrage zwei weitere Anfrage-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Preflight-Anfrage, dass die tatsächliche Anfrage bei Verwendung `POST` als Anforderungsmethode genutzt wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass die tatsächliche Anfrage mit den `X-PINGOTHER` und `Content-Type` Headern erfolgen wird. Nun hat der Server die Gelegenheit, zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die anzeigt, dass die Anforderungsmethode (`POST`) und die Anfrage-Header (`X-PINGOTHER`) akzeptabel sind. Lassen Sie uns die folgenden Zeilen genauer betrachten:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff auf die anfragende Ursprung-Domain einschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist ähnlich wie der {{HTTPHeader("Allow")}}-Antwort-Header, wird jedoch streng im Zusammenhang mit dem Zugriffskontrollrahmen verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit dem Wert `X-PINGOTHER, Content-Type`, was bestätigt, dass diese Header in der eigentlichen Anfrage verwendet werden dürfen. Ähnlich wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage im Cache gehalten werden kann, ohne eine weitere Preflight-Anfrage senden zu müssen. Der Standardwert ist 5 Sekunden. Im vorliegenden Fall beträgt die maximale Alterung 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn `Access-Control-Max-Age` diesen überschreitet.

Nachdem die Preflight-Anfrage abgeschlossen ist, wird die eigentliche Anfrage gesendet:

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

#### Preflight-Anfragen und Redirects

Nicht alle Browser unterstützen derzeit das Folgen von Redirects nach einer preflighteten Anfrage. Wenn ein Redirect nach einer solchen Anfrage auftritt, melden einige Browser derzeit eine Fehlermeldung wie die folgende:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet, was bei Cross-Origin-Anfragen, die Preflight erfordern, nicht erlaubt ist.
> Anfrage erfordert Preflight, was Cross-Origin-Redirects nicht folgen darf.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde jedoch [anschließend geändert, um es nicht mehr zu erfordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Nicht alle Browser implementierten die Änderung, und zeigen daher immer noch das ursprünglich erforderliche Verhalten.

Bis Browser mit der Spezifikation übereinstimmen, können Sie möglicherweise eine Umgehung dieser Einschränkung vornehmen, indem Sie eines oder beide der folgenden tun:

- Ändern des Serververhaltens, um das Preflight zu vermeiden und/oder den Redirect zu vermeiden
- Ändern der Anfrage, sodass sie eine [einfache Anfrage](#einfache_anfragen) ist, die kein Preflight verursacht

Wenn das nicht möglich ist, dann ist eine andere Möglichkeit:

1. Erstellen einer [einfachen Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, zu welcher URL die eigentliche preflightete Anfrage führen würde.
2. Eine weitere Anfrage stellen (die _eigentliche_ Anfrage) unter Verwendung der URL, die Sie aus `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Wenn die Anfrage jedoch aufgrund des Vorhandenseins des `Authorization`-Headers in der Anfrage ein Preflight auslöst, können Sie die Einschränkung mit den obigen Schritten nicht umgehen. Und Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Berechtigungen

> [!NOTE]
> Beim Erstellen von Anfragen mit Berechtigungen an eine andere Domain gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer durchgesetzt, unabhängig von der auf dem Server und dem Client beschriebenen Einrichtung.

Die interessanteste Fähigkeit, die sowohl [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch CORS bietet, ist die Fähigkeit, "berechtigte" Anfragen zu stellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und der HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei cross-origin `fetch()` oder `XMLHttpRequest`-Aufrufen _keine_ Berechtigungen.

Um eine `fetch()`-Anfrage mit Berechtigungen anzufordern, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage mit Berechtigungen anzufordern, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel lädt der ursprünglich von `https://foo.example` geladene Inhalt eine GET-Anfrage an eine Ressource bei `https://bar.other`, die Cookies setzt. Inhalte auf foo.example könnten JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request) Objekt und setzt die `credentials`-Option auf `"include"` im Konstruktor und übergibt dann diese Anfrage an `fetch()`. Da dies eine einfache `GET`-Anfrage ist, wird kein Preflight durchgeführt, aber der Browser wird **jede** Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header mit dem Wert `true` enthält und **keine** Antwort für den aufrufenden Webinhalt verfügbar macht.

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und für den Webinhalt nicht verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` reagieren würde, wie in diesem Beispiel demonstriert.

#### Preflight-Anfragen und Berechtigungen

CORS-Preflight-Anfragen dürfen niemals Berechtigungen einschließen. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzugeben, dass die tatsächliche Anfrage mit Berechtigungen erfolgen kann.

> [!NOTE]
> Einige Enterprise-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was den [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikationen widerspricht.
>
> Firefox 87 erlaubt dieses nicht standardmäßige Verhalten durch Setzen der Einstellung `network.cors_preflight.allow_client_cert` auf `true` ([Firefox Bug 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Berechtigte Anfragen und Platzhalter

Bei der Beantwortung einer berechtigten Anfrage:

- Der Server **darf nicht** den `*` Platzhalter für den `Access-Control-Allow-Origin`-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Origin angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** den `*` Platzhalter für den `Access-Control-Allow-Headers`-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** den `*` Platzhalter für den `Access-Control-Allow-Methods`-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Methode-Namen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** den `*` Platzhalter für den `Access-Control-Expose-Headers`-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage eine Berechtigung (häufig ein `Cookie`-Header) enthält und die Antwort einen `Access-Control-Allow-Origin: *`-Header enthält (also mit dem Platzhalter), blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklertools-Konsole.

Wenn eine Anfrage jedoch eine Berechtigung enthält (wie den `Cookie`-Header) und die Antwort eine tatsächliche Origin anstelle des Platzhalters enthält (z.B. `Access-Control-Allow-Origin: https://example.com`), dann erlaubt der Browser den Zugriff auf die Antwort von der angegebenen Origin.

Beachten Sie auch, dass ein `Set-Cookie`-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort der `*`-Platzhalter anstelle einer tatsächlichen Origin wäre.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Benutzers konfiguriert ist, alle Drittanbieter-Cookies abzulehnen.

Cookie in der Anfrage können auch durch normale Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie könnte daher die in diesem Kapitel beschriebene Fähigkeit zunichte machen und effektiv verhindern, dass Sie berechtigte Anfragen machen können.

Die Cookie-Richtlinie rund um das [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut würde gelten.

## Die HTTP-Antwortheader

In diesem Abschnitt sind die HTTP-Antwortheader aufgelistet, die Server für Zugriffskontrollanforderungen gemäß der Spezifikation des Cross-Origin Resource Sharing zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgendem Syntaxmuster haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der den Browsern mitteilt, diesem Ursprung den Zugriff auf die Ressource zu erlauben; oder — für Anfragen **ohne** Berechtigungen — der `*` Wildcard gibt den Browsern an, jedem Ursprung den Zugriff auf die Ressource zu erlauben.

Um z.B. Code vom Ursprung `https://mozilla.org` den Zugriff auf die Ressource zu erlauben, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der sich möglicherweise basierend auf dem anfragenden Ursprung als Teil einer Erlaubnisliste dynamisch ändert) anstelle des `*`-Platzhalters, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Header der Antwort einschließen, um den Clients anzuzeigen, dass Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anfrage-Headers unterschiedlich ausfallen.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header der Erlaubnisliste hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugänglich sind.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Das folgende Beispiel erlaubt es, die `X-My-Custom-Header` und `X-Another-Custom-Header` Header dem Browser offenzulegen:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache gehalten werden können. Im obigen Abschnitt finden Sie ein Beispiel für eine Preflight-Anfrage.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds` Parameter gibt die Anzahl an Sekunden an, die die Ergebnisse im Cache bleiben können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header zeigt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, zeigt dies an, ob die tatsächliche Anfrage mit Berechtigungen durchgeführt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab überprüft werden und wenn eine Anfrage für eine Ressource mit Berechtigungen erfolgt, die Antwort wird ignoriert und dem Browser nicht zur Verfügung gestellt, wenn dieser Header nicht mit der Ressource zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Berechtigte Anfragen](#anfragen_mit_berechtigungen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die erlaubte Methode oder Methoden beim Zugreifen auf die Ressource an. Dieser wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab geprüft wird, sind oben beschrieben.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel einer {{Glossary("preflight_request", "Preflight-Anfrage")}} ist oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header beim Erstellen der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungsheader

In diesem Abschnitt sind Header aufgelistet, die Clients beim Erstellen von HTTP-Anfragen verwenden können, um die Funktion des Cross-Origin-Sharing zu nutzen. Beachten Sie, dass diese Header für Sie beim Erstellen von Aufrufen an Server gesetzt werden. Entwickler, die Cross-Origin-Anfragen machen, müssen keine Cross-Origin-Sharing-Anforderungsheader programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header zeigt den Ursprung der Cross-Origin-Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage ausgeht. Sie enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird beim Erstellen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gemacht wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele dieser Verwendung finden Sie [oben.](#preflight-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird beim Erstellen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gemacht wird (z.B. durch Übergabe als [`headers`](/de/docs/Web/API/RequestInit#headers) Option). Dieser browserseitige Header wird durch den komplementären serverseitigen Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele dieser Verwendung finden Sie [oben](#preflight-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch-API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Anleitung zum Ausführen des Chrome-Browsers ohne CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitung" für den Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man das CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy benutzt, um _"Kein Access-Control-Allow-Origin-Header"_ zu umgehen
  - Wie man _"Access-Control-Allow-Origin-Header darf nicht der Platzhalter sein"_ behebt
