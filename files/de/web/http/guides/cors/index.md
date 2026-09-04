---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein {{Glossary("HTTP", "HTTP")}}-Header-basiertes Verfahren, das es einem Server ermöglicht, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) neben dem eigenen erlauben, dass ein Browser Ressourcen lädt. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulässt. In diesem Preflight sendet der Browser Header, die die HTTP-Methode und die Header anzeigen, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine cross-origin Anfrage: Der Front-End-JavaScript-Code wird von `https://domain-a.com` bereitgestellt und verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser cross-origin HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur auf Ressourcen des gleichen Ursprungs zugreifen kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammdarstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen nutzen CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen ermöglichen für:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben diskutiert.
- Web-Fonts (für die Cross-Domain-Schriftnutzung in `@font-face` innerhalb von CSS), wie in den [Font-Fetching-Anforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, sodass Server TrueType-Schriften bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden dürfen, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf ein Canvas gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/Guides/Shapes/From_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion über die notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem er neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzufügt, die es Servern ermöglichen, anzugeben, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich, für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), schreibt die Spezifikation vor, dass Browser die Anfrage "preflighten", die unterstützten Methoden vom Server mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} anfordern und dann, nach "Genehmigung" durch den Server, die eigentliche Anfrage senden. Server können auch mitteilen, ob "Anmeldedaten" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind Details zum Fehler _nicht für JavaScript verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

In den folgenden Abschnitten werden Szenarien diskutiert und eine Aufschlüsselung der verwendeten HTTP-Header bereitgestellt.

## Beispiele für Zugriffssteuerungsszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das Cross-Origin-Anfragen in jedem unterstützenden Browser ausführen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden _einfache Anfragen_ genannt, gemäß der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}}-Element von HTML 4.0 (das Cross-Site-`fetch()` und `XMLHttpRequest` vorausgeht) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) schützen muss. Unter dieser Annahme muss der Server sich nicht aktiv dafür entscheiden (indem er auf eine Preflight-Anfrage reagiert), um jede Anfrage zu erhalten, die wie ein Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch die Formularübermittlung. Der Server muss jedoch mittels {{HTTPHeader("Access-Control-Allow-Origin")}} aktiv zulassen, dass die Antwort mit dem Skript _geteilt_ wird.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen** erfüllt:

- Eine der erlaubten Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch vom Benutzeragenten gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder die {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheader")}}), sind die einzigen Header, die manuell gesetzt werden dürfen, die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Headers")}}, die sind:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (beachten Sie bitte die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Bereichsheader-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B., `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ/Untertyp-Kombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} im {{HTTPHeader("Content-Type")}} Header erlaubt sind, sind:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gestellt wird, sind keine Ereignislistener auf dem Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) Eigenschaft in der Anfrage verwendet wird; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Ereignislistener hinzuzufügen, der den Upload überwacht.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview haben zusätzliche Einschränkungen für die Werte, die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, und {{HTTPHeader("Content-Language")}} Headern erlaubt sind. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als eine "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, wird nicht dokumentiert, außer in den folgenden WebKit-Fehlern:
>
> - [Preflight für nicht standardmäßige CORS-safelisted Anforderungsheader Accept, Accept-Language und Content-Language erforderlich](https://webkit.org/b/165178)
> - [Erlauben von Kommas in Accept, Accept-Language und Content-Language Anforderungsheadern für einfache CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Andere Browser implementieren diese zusätzlichen Einschränkungen nicht, da sie nicht Teil der Spezifikation sind.

Zum Beispiel, nehmen wir an, dass Webinhalt unter `https://foo.example` JSON-Inhalt von der Domain `https://bar.other` abrufen möchte. Ein solcher Code könnte in JavaScript auf `foo.example` eingesetzt werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt zu einem einfachen Austausch zwischen dem Client und dem Server, bei dem CORS-Header zur Verwaltung der Berechtigungen verwendet werden:

![Diagramm einer einfachen CORS GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

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

Als Antwort sendet der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit `Access-Control-Allow-Origin: *`, was bedeutet, dass auf die Ressource von **jedem** Ursprung zugegriffen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}} Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourceneigentümer unter `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken wollten (d.h. keine andere Domain als `https://foo.example` kann in einer cross-origin Weise auf die Ressource zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Beantwortung einer [Request mit Anmeldedaten](#anfragen_mit_anmeldedaten) muss der Server einen Ursprung im Wert des `Access-Control-Allow-Origin` Headers angeben, anstatt ein `*`-Wildcard zu spezifizieren.

### Preflighted Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "preflighted" Anfragen zuerst eine HTTP-Anfrage unter Verwendung der {{HTTPMethod("OPTIONS")}} Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die eigentliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorgeprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Folgendes ist ein Beispiel für eine Anfrage, die vorgeprüft wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht-standardmäßiger HTTP-`X-PINGOTHER` Anforderungsheader gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber in der Regel für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage vorgeprüft.

![Diagramm einer Anfrage, die vorgeprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die eigentliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; sie sind nur für die `OPTIONS`-Anfrage erforderlich.

Sehen wir uns den gesamten Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/-Antwort_:

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

Der erste Block oben stellt die Preflight-Anforderung mit der {{HTTPMethod("OPTIONS")}} Methode dar. Der Browser stellt fest, dass er dies auf der Grundlage der Anforderungsparameter senden muss, die im obigen JavaScript-Code-Snippet verwendet wurden, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anforderung zwei weitere Anforderungsheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}} Header benachrichtigt den Server im Rahmen einer Preflight-Anfrage, dass bei der eigentlichen Anfrage eine `POST`-Anforderungsmethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}} Header benachrichtigt den Server, dass die eigentliche Anfrage mit den benutzerdefinierten Headern `X-PINGOTHER` und `Content-Type` gesendet wird. Jetzt hat der Server die Möglichkeit festzustellen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt und anzeigt, dass die Anforderungsmethode (`POST`) und die Anforderungsheader (`X-PINGOTHER`) akzeptabel sind. Sehen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, wodurch der Zugriff nur auf die anfordernde Ursprungdomäne beschränkt wird. Er antwortet auch mit `Access-Control-Allow-Methods`, was sagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ähnelt dem {{HTTPHeader("Allow")}} Antwortheader, wird jedoch ausschließlich im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, die bestätigt, dass diese Header mit der eigentlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste zulässiger Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, für wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert ist 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen überschreitet.

Sobald die Preflight-Anfrage abgeschlossen ist, wird die tatsächliche Anfrage gesendet:

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

#### Preflight-Anfragen und Umleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Umleitungen nach einer Preflight-Anfrage. Wenn nach einer solchen Anfrage eine Umleitung erfolgt, melden einige Browser derzeit einen Fehler wie den folgenden:

> Die Anfrage wurde zu `https://example.com/foo` umgeleitet, was für Cross-Origin-Anfragen, die einen Preflight erfordern, nicht erlaubt ist.
> Die Anfrage erfordert Preflight, was für Cross-Origin-Umleitungen nicht erlaubt ist.

Das CORS-Protokoll verlangte ursprünglich dieses Verhalten, wurde jedoch [später geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Nicht alle Browser haben jedoch die Änderung implementiert und zeigen daher weiterhin das ursprünglich erforderte Verhalten.

Bis Browser mit der Spezifikation aufholen, können Sie diese Einschränkung möglicherweise umgehen, indem Sie eine oder beide der folgenden Möglichkeiten verwenden:

- Ändern Sie das Server-seitige Verhalten, um den Preflight zu vermeiden und/oder die Umleitung zu vermeiden
- Ändern Sie die Anfrage so, dass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keinen Preflight verursacht

Wenn das nicht möglich ist, dann ist eine andere Möglichkeit:

1. Erstellen Sie eine [einfache Anfrage](#einfache_anfragen) (mit [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)) um festzustellen, zu welcher URL die tatsächliche vorgeprüfte Anfrage führen würde.
2. Erstellen Sie eine weitere Anfrage (die _eigentliche_ Anfrage) mit der URL, die Sie im ersten Schritt von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn es sich jedoch um eine Anfrage handelt, die aufgrund der Anwesenheit des `Authorization` Headers in der Anfrage einen Preflight auslöst, können Sie die Einschränkung mit den obigen Schritten nicht umgehen. Und Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Wenn Anfragen mit Anmeldedaten an eine andere Domain gestellt werden, gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer unabhängig von einer auf dem Server und dem Client beschriebenen Konfiguration durchgesetzt.

Die interessanteste Funktionalität, die sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS bereitgestellt wird, ist die Möglichkeit, "credentialed" Anfragen zu stellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin `fetch()` oder `XMLHttpRequest` Anfragen _keine_ Anmeldedaten.

Um eine `fetch()` Anfrage dazu zu bringen, Anmeldedaten einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest` Anfrage dazu zu bringen, Anmeldedaten einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel macht Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage zu einer Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf foo.example könnte JavaScript wie folgt enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request) Objekt, das die `credentials` Option im Konstruktor auf `"include"` setzt und dann diese Anforderung an `fetch()` weitergibt. Da es sich um eine einfache GET-Anfrage handelt, wird keine Vorabprüfung durchgeführt, aber der Browser wird **jede** Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}} Header mit `true` enthalten hat, und die Antwort **nicht** für den aufrufenden Webinhalt verfügbar machen.

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

Obwohl der `Cookie`-Header der Anfrage das für den Inhalt auf `https://bar.other` bestimmte Cookie enthält, würde die Antwort ignoriert werden, wenn `bar.other` nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` geantwortet hätte, wie in diesem Beispiel gezeigt.

#### Preflight-Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` spezifizieren, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldedaten erfolgen kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was den Vorschriften der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) Spezifikation widerspricht.
>
> Firefox 87 ermöglicht dieses nicht konforme Verhalten, indem die Einstellung `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox Bug 1511151](https://bugzil.la/1511151)). Browser auf Chromium-Basis senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldedaten und Wildcards

Beim Beantworten einer Anfrage mit Anmeldedaten:

- Der Server **darf nicht** das `*` Wildcard für den Wert des `Access-Control-Allow-Origin` Response-Headers spezifizieren, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*` Wildcard für den Wert des `Access-Control-Allow-Headers` Response-Headers spezifizieren, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*` Wildcard für den Wert des `Access-Control-Allow-Methods` Response-Headers spezifizieren, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*` Wildcard für den Wert des `Access-Control-Expose-Headers` Response-Headers spezifizieren, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldedatum (am häufigsten einen `Cookie`-Header) enthält und die Antwort einen `Access-Control-Allow-Origin: *` Header enthält (d.h. mit dem Wildcard), wird der Browser den Zugriff auf die Antwort blockieren und einen CORS-Fehler in der Entwicklerkonsole melden.

Wenn jedoch eine Anfrage ein Anmeldedatum enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung enthält, anstatt des Wildcards (wie beispielsweise `Access-Control-Allow-Origin: https://example.com`), dann wird der Browser den Zugriff auf die Antwort vom angegebenen Ursprung zulassen.

Beachten Sie auch, dass jede `Set-Cookie` Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin` Wert in dieser Antwort das `*` Wildcard anstelle eines tatsächlichen Ursprungs wäre.

#### Drittanbieter-Cookies

Beachten Sie, dass in CORS-Antworten gesetzte Cookies den normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Set-Cookie` Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookies, die in CORS-Anfragen und -Antworten gesetzt werden, unterliegen den normalen Drittanbieter-Cookie-Richtlinien.

Drittanbieter-Cookie-Richtlinien können verhindern, dass Drittanbieter-Cookies in Anfragen gesendet werden, was effektiv verhindert, dass eine Website Anfragen mit Anmeldedaten sendet, selbst wenn dies vom Drittanbieter-Server gestattet ist (unter Verwendung von `Access-Control-Allow-Credentials`).
Die Standardrichtlinie unterscheidet sich je nach Browser, kann aber mit dem [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut festgelegt werden.

Selbst wenn Anfragen mit Anmeldedaten erlaubt sind, kann ein Browser so konfiguriert sein, dass alle Drittanbieter-Cookies in den Antworten abgelehnt werden.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die von Servern für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgegeben werden. Der vorhergehende Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der den Browsern erlaubt, diesen Ursprung auf die Ressource zugreifen zu lassen; oder — bei Anfragen **ohne** Anmeldedaten — das `*` Wildcard, das den Browsern erlaubt, von jedem Ursprung auf die Ressource zuzugreifen.

Zum Beispiel, um Code vom Ursprung `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der möglicherweise basierend auf dem anfragenden Ursprung als Teil einer Zulassungsliste dynamisch geändert wird) anstelle des `*` Wildward, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}} Antwortheader einfügen, um den Clients anzuzeigen, dass Antwortaktualisierungen auf der Grundlage des Wertes des {{HTTPHeader("Origin")}} Anfrageheaders erfolgen.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}} Header fügt die angegebenen Header zur Zulassungsliste hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde das Folgende erlauben, dass die `X-My-Custom-Header` und `X-Another-Custom-Header` Header dem Browser offengelegt werden:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}} Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds` Parameter gibt die Anzahl der Sekunden an, in deren Ergebnis zwischengespeichert werden kann.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}} Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials` Flag wahr ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt dies an, ob die tatsächliche Anfrage mithilfe von Anmeldedaten durchgeführt werden kann. Beachten Sie, dass einfache `GET` Anfragen nicht vorgegeben werden, und wenn eine Anfrage für eine Ressource mit Anmeldedaten gestellt wird, wird die Antwort ignoriert, wenn dieser Header nicht mit der Ressource zurückgegeben wird, und nicht an den Webinhalt zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Credentialed requests](#anfragen_mit_anmeldedaten) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}} Header gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen für die vorab verprüft werden, werden oben besprochen.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}} Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anforderung verwendet werden können. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}} Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungsheader

Dieser Abschnitt listet Header auf, die von Clients bei der Ausstellung von HTTP-Anfragen verwendet werden können, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie beim Aufrufen von Servern gesetzt werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anforderungsheader programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}} Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder der Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage ausgeht. Es enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin` Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}} Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird beim Senden einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Methode bei der eigentlichen Anfrage verwendet wird.

```http
Access-Control-Request-Method: <method>
```

Verwendungsbeispiele finden Sie [oben.](#preflighted_anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}} Header wird beim Senden einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergeben werden). Dieser browserseitige Header wird durch den komplementären serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Verwendungsbeispiele finden Sie [oben](#preflighted_anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Using CORS with All (Modern) Browsers](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung" Informationen zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man das CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um "No Access-Control-Allow-Origin header" zu umgehen
  - Wie man "Access-Control-Allow-Origin header must not be the wildcard" behebt
