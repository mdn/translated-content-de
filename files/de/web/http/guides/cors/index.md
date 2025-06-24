---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der einem Server erlaubt, die Erlaubnis zu erteilen, Ressourcen von anderen {{Glossary("origin", "Herkünften")}} (Domain, Schema oder Port) als seiner eigenen zu laden. CORS basiert auch auf einem Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server, der die Cross-Origin-Ressource hostet, senden, um zu überprüfen, ob der Server die eigentliche Anfrage erlauben wird. In dieser Preflight-Anfrage sendet der Browser Header, die auf die HTTP-Methode und die Header hinweisen, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Frontend-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu machen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von derselben Herkunft anfordern kann, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Herkünften enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Punkte ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web Fonts (zur Verwendung von Schriftarten über Domain-Grenzen hinweg in `@font-face` innerhalb von CSS), wie in den [Schriftanforderungen beim Laden](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, so dass Server TrueType-Schriftarten bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Videoframes, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und beinhaltet eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzugefügt werden, die es Servern ermöglichen, zu beschreiben, welche Herkünfte berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich, für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden, die nicht {{HTTPMethod("GET")}} sind, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), verlangt die Spezifikation, dass Browser die Anfrage "preflighten", indem sie die unterstützten Methoden vom Server mit der HTTP {{HTTPMethod("OPTIONS")}} Anfragemethode erheben und dann, nach "Genehmigung" durch den Server, die eigentliche Anfrage senden. Server können auch Kunden darüber informieren, ob "Anmeldeinformationen" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollten.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind die Details über den Fehler _nicht für JavaScript verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Die einzige Möglichkeit, herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

Die folgenden Abschnitte diskutieren Szenarien und liefern eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden als _einfache Anfragen_ aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) bezeichnet, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}} Element aus HTML 4.0 (das Cross-Site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorausgeht) einfache Anfragen an jede Herkunft senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss der Server nicht (durch Beantworten einer Preflight-Anfrage) eingreifen, um eine Anfrage zu empfangen, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch Formularübermittlung. Der Server muss jedoch immer noch die {{HTTPHeader("Access-Control-Allow-Origin")}} verwenden, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen** erfüllt:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch vom Benutzeragenten gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, oder die {{Glossary("Forbidden_request_header", "verbotenen Anfrageheader")}}), sind die einzigen Header, die manuell gesetzt werden können, die {{Glossary("CORS-safelisted_request_header", "CORS-safelist Suggestierten Anfrageheader")}}, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Wertebereich](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ/Subtyp-Kombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} im {{HTTPHeader("Content-Type")}} Header erlaubt sind, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gemacht wird, sind keine Event-Listener am mit [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) zurückgegebenen Objekt registriert; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener hinzuzufügen, um den Upload zu überwachen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Einschränkungen für die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, und {{HTTPHeader("Content-Language")}} Headern erlaubten Werte. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Fehlern:
>
> - [Preflight für nicht standardmäßige CORS-safelistige Anfrageheader Accept, Accept-Language und Content-Language erfordern](https://webkit.org/b/165178)
> - [Erlaube Kommas in Accept, Accept-Language und Content-Language Anfrageheadern für einfache CORS](https://webkit.org/b/165566)
> - [Umstellung auf ein Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfriests](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Beispielsweise möchte Web-Inhalt auf `https://foo.example` JSON-Inhalte von der Domain `https://bar.other` abrufen. JavaScript auf `foo.example` könnte etwa so aussehen:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Austausch zwischen Client und Server durch, wobei CORS-Header verwendet werden, um die Berechtigungen zu verwalten:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

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

Der bemerkenswerte Anfrageheader ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jeder** Herkunft aufgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffsprotokolls. Wenn die Ressourceninhaber bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken möchten (d.h. keine andere Domain als `https://foo.example` darf die Ressource auf eine Cross-Origin-Weise aufrufen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Beantwortung einer [Anfrage mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) muss der Server im Wert des `Access-Control-Allow-Origin` Headers einen Ursprung spezifizieren, anstelle der Verwendung des `*` Platzhalters.

### Preflighted Requests

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei vorgeprüften Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die eigentliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorgeprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Nachfolgend ein Beispiel für eine Anfrage, die vorgeprüft wird:

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

Das obige Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anfrageheader gesetzt. Solche Header sind kein Teil von HTTP/1.1, aber im Allgemeinen für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorgeprüft.

![Diagramm einer Anfrage, die vorgeprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; diese sind nur bei der `OPTIONS`-Anfrage erforderlich.

Schauen wir uns den vollständigen Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/-antwort_:

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

Der erste Block oben stellt die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode dar. Der Browser stellt fest, dass er diese senden muss, basierend auf den Anfrageparametern, die das obige JavaScript-Codefragment verwendet hat, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anfrageheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}} Header benachrichtigt den Server als Teil einer Preflight-Anfrage darüber, dass bei der eigentlichen Anfrage eine `POST`-Anfrage-Methode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}} Header benachrichtigt den Server, dass bei der eigentlichen Anfrage die benutzerdefinierten Header `X-PINGOTHER` und `Content-Type` verwendet werden. Nun hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, und zeigt an, dass die Anfragemethode (`POST`) und Anfrageheader (`X-PINGOTHER`) akzeptabel sind. Schauen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff auf die anfordernde Herkunfts-Domain beschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist ähnlich dem {{HTTPHeader("Allow")}} Antwortheader, wird jedoch streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type` und bestätigt damit, dass dies erlaubte Header sind, die mit der eigentlichen Anfrage verwendet werden können. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste von zulässigen Headern.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn `Access-Control-Max-Age` diesen überschreitet.

Sobald die Preflight-Anfrage abgeschlossen ist, wird die eigentliche Anfrage gesendet:

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

#### Preflighted Requests und Weiterleitungen

Nicht alle Browser unterstützen derzeit die Verfolgung von Weiterleitungen nach einer vorgeprüften Anfrage. Wenn nach einer solchen Anfrage eine Weiterleitung erfolgt, melden einige Browser derzeit eine Fehlermeldung wie die folgende:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet, was für Cross-Origin-Anfragen, die einen Preflight erfordern, nicht erlaubt ist.
> Die Anfrage erfordert einen Preflight, der nicht befugt ist, Cross-Origin-Weiterleitungen zu folgen.

Das CORS-Protokoll hat ursprünglich dieses Verhalten gefordert, wurde aber [später geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich geforderte Verhalten.

Um diesen Einschränkungen zu begegnen, können Sie folgende Möglichkeiten versuchen:

- Ändern Sie das Serververhalten, um den Preflight zu vermeiden und/oder die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage so, dass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keinen Preflight auslöst

Ist dies nicht möglich, so wäre eine andere Möglichkeit:

1. Erstellen Sie eine [einfache Anfrage](#einfache_anfragen) (mithilfe von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, welche URL die echte vorgeprüfte Anfrage erreichen würde.
2. Erstellen Sie eine weitere Anfrage (die _eigentliche_ Anfrage) unter Verwendung der URL, die Sie im ersten Schritt mit `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage aufgrund der Anwesenheit des `Authorization`-Headers einen Preflight auslöst, können Sie die Einschränkung mit den obigen Schritten jedoch nicht umgehen. Und Sie können es überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gerichtet ist.

### Anfragen mit Anmeldeinformationen

> [!NOTE]
> Bei der Erstellung von Anfragen mit Anmeldeinformationen zu einer anderen Domain, gelten immer noch die Richtlinien für Drittcookies. Die Richtlinie wird unabhängig von jeglichem Setup auf dem Server und dem Client, wie in diesem Kapitel beschrieben, immer durchgesetzt.

Die interessanteste Fähigkeit, die sowohl durch [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS offengelegt wird, ist die Möglichkeit, "Credentialed"-Anfragen zu erstellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldeinformationen.

Um eine `fetch()`-Anfrage zu erstellen, die Anmeldeinformationen enthält, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu erstellen, die Anmeldeinformationen enthält, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel erstellt Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf foo.example könnte JavaScript enthalten, das so aussieht:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request) Objekt, das die `credentials`-Option auf `"include"` im Konstruktor setzt und dieses dann in `fetch()` übergibt. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorgeprüft. Der Browser wird jedoch **jede** Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}} Header auf `true` gesetzt hat, und die Antwort **nicht** für den Webinhalt verfügbar machen.

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das an den Inhalt auf `https://bar.other` gesendet wird, würde die Antwort ignoriert und nicht für den Webinhalt verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header mit dem Wert `true` antwortet, wie in diesem Beispiel demonstriert wird.

#### Preflight-Anfragen und Anmeldeinformationen

CORS-Preflight-Anfragen dürfen niemals Anmeldeinformationen enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` spezifizieren, um anzugeben, dass die eigentliche Anfrage mit Anmeldeinformationen erstellt werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste verlangen, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation widerspricht.
>
> Firefox 87 erlaubt die Aktivierung dieses nicht konformen Verhaltens durch Setzen der Präferenz: `network.cors_preflight.allow_client_cert` auf `true` ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Auf Chromium-basierte Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Credentialed-Anfragen und Wildcards

Beim Beantworten einer Credentialed-Anfrage:

- Der Server **darf nicht** den `*` Platzhalterwert für den `Access-Control-Allow-Origin` Antwortheader spezifizieren, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** den `*` Platzhalterwert für den `Access-Control-Allow-Headers` Antwortheader spezifizieren, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** den `*` Platzhalterwert für den `Access-Control-Allow-Methods` Antwortheader spezifizieren, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** den `*` Platzhalterwert für den `Access-Control-Expose-Headers` Antwortheader spezifizieren, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldeinformationen enthält (meistens ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header (also mit dem Platzhalter) enthält, blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklungswerkzeugkonsole.

Wenn eine Anfrage jedoch ein Anmeldeinformationen enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung anstelle des Platzhalters (zum Beispiel, `Access-Control-Allow-Origin: https://example.com`) enthält, erlaubt der Browser den Zugriff auf die Antwort vom angegebenen Ursprung.

Außerdem wird jedes `Set-Cookie` Antwort-Header nicht das Setzen eines Cookies erlauben, wenn der `Access-Control-Allow-Origin` Wert in dieser Antwort der `*` Platzhalter ist, anstelle eines tatsächlichen Ursprungs.

#### Drittcookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Drittcookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der in der Antwort gesendete Cookie-Header wird von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittcookies abgelehnt werden.

Cookie in der Anfrage kann auch bei normalen Drittcookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie könnte daher die in diesem Kapitel beschriebene Fähigkeit zunichte machen und Sie effektiv daran hindern, überhaupt Credentialed-Anfragen zu erstellen.

Die Cookie-Richtlinie bezüglich des [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attributs gilt.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server bei Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt eine Übersicht über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der den Browsern mitteilt, dass dieser Ursprung auf die Ressource zugreifen darf; oder — für Anfragen **ohne** Anmeldeinformationen — der `*` Platzhalter erlaubt den Browsern, jedem Ursprung den Zugriff auf die Ressource zu gestatten.

Um beispielsweise dem Code vom Ursprung `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie Folgendes angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung spezifiziert (der als Teil einer Zulassungsliste dynamisch je nach anfragender Herkunft geändert werden kann) anstelle des `*` Platzhalters, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}} Antwortheader enthalten, um den Clients mitzuteilen, dass die Serverantworten je nach Wert des {{HTTPHeader("Origin")}} Anfrageheaders unterschiedlich sein werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}} -Header fügt die spezifizierten Header der Liste hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Beispielsweise würde der folgende erlauben, dass die `X-My-Custom-Header` und `X-Another-Custom-Header` Header dem Browser gegenüber offengelegt werden:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie oben.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds` Parameter gibt die Anzahl der Sekunden an, für die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials` Flag wahr ist. Wenn dieser Header als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt er an, ob die eigentliche Anfrage mit Anmeldeinformationen gestellt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorgeprüft werden und dass, wenn eine Anfrage für eine Ressource mit Anmeldeinformationen gestellt wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, die Antwort vom Browser ignoriert wird und nicht an den Webinhalt zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Credentialed-Anfragen](#anfragen_mit_anmeldeinformationen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode(n) an, die beim Zugriff auf die Ressource zulässig sind. Dieser wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorgeprüft wird, sind oben diskutiert worden.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header verwendet werden können, wenn die eigentliche Anfrage gestellt wird. Dieser Header ist die Serverantwort auf den {{HTTPHeader("Access-Control-Request-Headers")}} Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrageheader

Dieser Abschnitt listet Header auf, die Clients bei HTTP-Anfragen verwenden können, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header automatisch gesetzt werden, wenn Aufrufe an Server gemacht werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anfrageheader programmgesteuert setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wurde. Er enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die eigentliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung finden Sie [oben.](#preflighted_requests)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}} Header wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gestellt wird (z. B. durch Übergeben als [`headers`](/de/docs/Web/API/RequestInit#headers) Option). Dieser Browser-seitige Header wird durch den komplementären Serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung finden sich [oben](#preflighted_requests).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung auf meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS betreibt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitung" Info zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man den CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um das _"No Access-Control-Allow-Origin header"_ Problem zu umgehen
  - Wie man das _"Access-Control-Allow-Origin header must not be the wildcard"_ Problem behebt
