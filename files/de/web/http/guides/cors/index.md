---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 210eb1d964922bbae94774dc6676ce92056e0423
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus. Er ermöglicht es einem Server anzugeben, von welchen anderen {{Glossary("origin", "Origins")}} (Domain, Schema oder Port) ein Browser Ressourcen laden darf. CORS verwendet außerdem einen Mechanismus, bei dem Browser eine „Preflight-Anfrage“ an den Server senden, der die Cross-Origin-Ressource bereitstellt. So prüfen sie, ob der Server die eigentliche Anfrage zulässt. In dieser Preflight-Anfrage sendet der Browser Header, die angeben, welche HTTP-Methode und welche Header in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der von `https://domain-a.com` bereitgestellte Frontend-JavaScript-Code verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um `https://domain-b.com/data.json` anzufordern.

Aus Sicherheitsgründen schränken Browser Cross-Origin-HTTP-Anfragen ein, die von Skripten ausgelöst werden. Beispielsweise unterliegen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von derselben Origin anfordern kann, von der die Anwendung geladen wurde – es sei denn, die Antwort einer anderen Origin enthält die richtigen CORS-Header.

![Schematische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datenübertragungen zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu verringern.

## Welche Anfragen verwenden CORS?

Der [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen unter anderem in folgenden Fällen ermöglichen:

- HTML:
  - Ressourcen, die von HTML-Elementen mit dem Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) abgerufen werden, beispielsweise `<img crossorigin="anonymous">`
  - [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules), die mit `<script type="module">` geladen werden, sowie ihre Imports – auch wenn das Attribut `crossorigin` fehlt
- CSS:
  - Webfonts über [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face)
  - [CSS-Shapes aus Bildern](/de/docs/Web/CSS/Guides/Shapes/From_images)
- JavaScript:
  - Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben
  - [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - Bilder oder Videoframes, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf ein Canvas gezeichnet werden, ohne [das Canvas als „tainted“ zu markieren](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), sodass dessen Pixeldaten gelesen oder exportiert werden können

Wenn eine Website eine Ressource lediglich _einbettet_, ohne ihre Daten lesen zu können, oder lediglich in die externe Ressource _schreibt_, ist die Gefahr geringer, dass Nutzerdaten der externen Origin offengelegt werden. Solche Funktionen benötigen daher möglicherweise kein CORS. Browser gehen jedoch bei Cross-Origin-Anfragen im Allgemeinen zunehmend vorsichtig vor. Neue Webfunktionen, die Anfragen auslösen, erfordern deshalb in der Regel unabhängig von ihrer Art CORS.

Dieser Artikel bietet einen allgemeinen Überblick über Cross-Origin Resource Sharing und erläutert die dafür erforderlichen HTTP-Header.

## Funktionsweise im Überblick

Der Cross-Origin-Resource-Sharing-Standard ergänzt [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), mit denen Server angeben können, welche Origins diese Informationen über einen Webbrowser lesen dürfen. Bei HTTP-Anfragemethoden, die Änderungen an Serverdaten bewirken können – insbesondere bei anderen HTTP-Methoden als {{HTTPMethod("GET")}} oder bei {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) – schreibt die Spezifikation außerdem vor, dass Browser eine „Preflight-Anfrage“ durchführen. Dabei fragen sie mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} die unterstützten Methoden beim Server ab und senden die eigentliche Anfrage erst nach dessen „Zustimmung“. Server können Clients zudem mitteilen, ob „Anmeldedaten“ wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und Informationen zur [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlermeldungen, doch aus Sicherheitsgründen sind die Einzelheiten des Fehlers _für JavaScript nicht verfügbar_. Der Code erfährt lediglich, dass ein Fehler aufgetreten ist. Was genau schiefgelaufen ist, lässt sich nur anhand der Browserkonsole feststellen.

Die folgenden Abschnitte erläutern verschiedene Szenarien und die verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Die folgenden drei Szenarien zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), womit sich in jedem Browser, der diese Funktion unterstützt, Cross-Origin-Anfragen stellen lassen.

### Einfache Anfragen

Manche Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}} aus. In der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) werden sie als _einfache Anfragen_ bezeichnet. Die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/), die CORS inzwischen definiert, verwendet diesen Begriff jedoch nicht.

Der Grund dafür ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 – das es schon vor Cross-Site-Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gab – einfache Anfragen an jede Origin senden kann. Wer einen Server betreibt, muss daher bereits Schutzmaßnahmen gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) treffen. Unter dieser Voraussetzung muss ein Server dem Empfang einer Anfrage, die wie eine Formularübermittlung aussieht, nicht erst durch die Antwort auf eine Preflight-Anfrage zustimmen: Das CSRF-Risiko ist nicht größer als bei einer Formularübermittlung. Um die Antwort mit dem Skript zu _teilen_, muss der Server jedoch weiterhin seine Zustimmung mit {{HTTPHeader("Access-Control-Allow-Origin")}} ausdrücken.

Eine _einfache Anfrage_ **erfüllt alle folgenden Bedingungen**:

- Sie verwendet eine der zulässigen Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von Headern, die der User Agent automatisch setzt (beispielsweise {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder die {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}}), dürfen nur die folgenden {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anfrage-Header")}} manuell gesetzt werden:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (beachten Sie die zusätzlichen Anforderungen weiter unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value), etwa `bytes=256-` oder `bytes=127-255`)

- Für den im Header {{HTTPHeader("Content-Type")}} angegebenen {{Glossary("MIME_type", "Medientyp")}} sind nur folgende Kombinationen aus Typ und Subtyp zulässig:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gestellt wird, sind auf dem durch die Eigenschaft [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) zurückgegebenen Objekt keine Event-Listener registriert. Bei einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Instanz `xhr` darf also kein Code `xhr.upload.addEventListener()` aufgerufen haben, um einen Event-Listener zur Überwachung des Uploads hinzuzufügen.
- In der Anfrage wird kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview schränken die zulässigen Werte in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} zusätzlich ein. Hat einer dieser Header einen „nicht standardmäßigen“ Wert, betrachtet WebKit/Safari die Anfrage nicht als „einfache Anfrage“. Welche Werte WebKit/Safari als „nicht standardmäßig“ einstuft, ist – abgesehen von den folgenden WebKit-Bugreports – nicht dokumentiert:
>
> - [Preflight für nicht standardmäßige CORS-safelisted-Anfrage-Header Accept, Accept-Language und Content-Language erforderlich machen](https://webkit.org/b/165178)
> - [Kommas in den Anfrage-Headern Accept, Accept-Language und Content-Language für einfaches CORS zulassen](https://webkit.org/b/165566)
> - [Bei eingeschränkten Accept-Headern in einfachen CORS-Anfragen zu einem Blacklist-Modell wechseln](https://webkit.org/b/166363)
>
> Andere Browser implementieren diese zusätzlichen Einschränkungen nicht, da sie nicht Teil der Spezifikation sind.

Angenommen, Webinhalte auf `https://foo.example` möchten JSON-Inhalte von der Domain `https://bar.other` abrufen. In dem auf `foo.example` bereitgestellten JavaScript könnte dafür folgender Code verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dabei findet ein einfacher Austausch zwischen Client und Server statt; die Berechtigungen werden über CORS-Header geregelt:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

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

Wichtig ist hier der Anfrage-Header {{HTTPHeader("Origin")}}. Er zeigt, dass der Aufruf von `https://foo.example` stammt.

Nun zur Antwort des Servers:

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

Der Server gibt den Header {{HTTPHeader("Access-Control-Allow-Origin")}} mit `Access-Control-Allow-Origin: *` zurück. Das bedeutet, dass **jede** Origin auf die Ressource zugreifen darf.

```http
Access-Control-Allow-Origin: *
```

Diese Verwendung der Header {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}} ist die einfachste Form des Zugriffskontrollprotokolls. Wenn die Eigentümer der Ressource auf `https://bar.other` den Cross-Origin-Zugriff _ausschließlich_ auf Anfragen von `https://foo.example` beschränken möchten, sodass keine andere Domain auf die Ressource zugreifen kann, würden sie Folgendes senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Antwort auf eine [Anfrage mit Anmeldedaten](#anfragen_mit_anmeldedaten) **muss** der Server im Header `Access-Control-Allow-Origin` eine konkrete Origin angeben, statt den Platzhalter `*` zu verwenden.

### Anfragen mit Preflight

Anders als bei [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei Anfragen mit Preflight zunächst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf der anderen Origin. So prüft er, ob die eigentliche Anfrage sicher gesendet werden kann. Für solche Cross-Origin-Anfragen wird eine Preflight-Anfrage durchgeführt, da sie Auswirkungen auf Nutzerdaten haben können.

Das folgende Beispiel zeigt eine Anfrage, für die ein Preflight durchgeführt wird:

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

Im obigen Beispiel wird ein XML-Body erstellt, der mit der `POST`-Anfrage gesendet wird. Außerdem wird der nicht standardmäßige HTTP-Anfrage-Header `X-PINGOTHER` gesetzt. Solche Header gehören nicht zu HTTP/1.1, sind für Webanwendungen aber häufig nützlich. Da die Anfrage `text/xml` als `Content-Type` verwendet und ein benutzerdefinierter Header gesetzt wird, ist ein Preflight erforderlich.

![Diagramm einer Anfrage mit Preflight](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie weiter unten beschrieben, enthält die eigentliche `POST`-Anfrage keine `Access-Control-Request-*`-Header. Diese werden nur für die `OPTIONS`-Anfrage benötigt.

Sehen wir uns den vollständigen Austausch zwischen Client und Server an. Zuerst erfolgt der _Austausch von Preflight-Anfrage und -Antwort_:

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

Der erste Block oben zeigt die Preflight-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}}. Der Browser erkennt anhand der im obigen JavaScript-Code verwendeten Anfrageparameter, dass sie erforderlich ist. Der Server kann daraufhin mitteilen, ob eine Anfrage mit diesen Parametern zulässig ist. OPTIONS ist eine HTTP/1.1-Methode, mit der weitere Informationen von Servern abgefragt werden. Sie gilt als {{Glossary("Safe/HTTP", "sicher")}}, das heißt, sie kann die Ressource nicht verändern. Zusammen mit der OPTIONS-Anfrage werden zwei weitere Anfrage-Header gesendet:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Mit dem Header {{HTTPHeader("Access-Control-Request-Method")}} teilt der Browser dem Server in der Preflight-Anfrage mit, dass die eigentliche Anfrage die Methode `POST` verwenden wird. Mit {{HTTPHeader("Access-Control-Request-Headers")}} teilt er mit, dass die eigentliche Anfrage die benutzerdefinierten Header `X-PINGOTHER` und `Content-Type` enthalten wird. Der Server kann nun entscheiden, ob er eine Anfrage unter diesen Bedingungen akzeptiert.

Der zweite Block oben zeigt die Antwort des Servers. Sie gibt an, dass die Anfragemethode (`POST`) und die Anfrage-Header (`X-PINGOTHER`) zulässig sind. Sehen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example` und beschränkt den Zugriff damit auf die anfragende Origin. Außerdem sendet er `Access-Control-Allow-Methods`. Dieser Header gibt an, dass `POST` und `GET` zulässige Methoden für Anfragen an die betreffende Ressource sind. Er ähnelt dem Antwort-Header {{HTTPHeader("Allow")}}, wird aber ausschließlich im Kontext der Zugriffskontrolle verwendet.

Der Server sendet außerdem `Access-Control-Allow-Headers` mit dem Wert `X-PINGOTHER, Content-Type`. Damit bestätigt er, dass diese Header in der eigentlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` enthält auch `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste zulässiger Werte.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. In diesem Beispiel beträgt die maximale Dauer 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [internen Höchstwert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn `Access-Control-Max-Age` ihn überschreitet.

Nach Abschluss der Preflight-Anfrage wird die eigentliche Anfrage gesendet:

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

#### Anfragen mit Preflight und Weiterleitungen

Derzeit unterstützen nicht alle Browser das Folgen von Weiterleitungen nach einer Preflight-Anfrage. Wenn nach einer solchen Anfrage eine Weiterleitung erfolgt, geben einige Browser derzeit beispielsweise folgende Fehlermeldung aus:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet. Dies ist bei Cross-Origin-Anfragen, die einen Preflight erfordern, nicht zulässig.
> Die Anfrage erfordert einen Preflight; bei solchen Anfragen darf Cross-Origin-Weiterleitungen nicht gefolgt werden.

Das CORS-Protokoll schrieb dieses Verhalten ursprünglich vor, [wurde später jedoch geändert, sodass es nicht mehr erforderlich ist](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Nicht alle Browser haben die Änderung implementiert und zeigen deshalb weiterhin das ursprünglich vorgeschriebene Verhalten.

Bis die Browser die Spezifikation vollständig umsetzen, können Sie diese Einschränkung möglicherweise mit einer oder beiden der folgenden Maßnahmen umgehen:

- Ändern Sie das serverseitige Verhalten, um den Preflight und/oder die Weiterleitung zu vermeiden.
- Ändern Sie die Anfrage so, dass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keinen Preflight auslöst.

Falls das nicht möglich ist, können Sie wie folgt vorgehen:

1. Stellen Sie eine [einfache Anfrage](#einfache_anfragen), um zu ermitteln, unter welcher URL die eigentliche Anfrage mit Preflight nach den Weiterleitungen ankommen würde. Verwenden Sie dazu [`Response.url`](/de/docs/Web/API/Response/url) bei der Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL).
2. Stellen Sie eine weitere Anfrage – die _eigentliche_ Anfrage – mit der URL, die Sie im ersten Schritt über `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage allerdings wegen des Headers `Authorization` einen Preflight auslöst, lässt sich die Einschränkung mit diesen Schritten nicht umgehen. In diesem Fall können Sie sie nur umgehen, wenn Sie Kontrolle über den Server haben, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Bei Anfragen mit Anmeldedaten an eine andere Domain gelten weiterhin die Richtlinien für Drittanbieter-Cookies. Diese Richtlinien werden unabhängig von den in diesem Abschnitt beschriebenen Einstellungen auf Server- und Clientseite durchgesetzt.

Eine besonders nützliche Funktion von [`fetch()`](/de/docs/Web/API/Window/fetch) beziehungsweise [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) in Verbindung mit CORS ist die Möglichkeit, Anfragen mit Anmeldedaten zu stellen, die [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und Informationen zur HTTP-Authentifizierung berücksichtigen. Standardmäßig senden Browser bei Cross-Origin-Aufrufen von `fetch()` oder `XMLHttpRequest` _keine_ Anmeldedaten.

Damit eine `fetch()`-Anfrage Anmeldedaten enthält, setzen Sie die Option [`credentials`](/de/docs/Web/API/RequestInit#credentials) auf `"include"`.

Damit eine `XMLHttpRequest`-Anfrage Anmeldedaten enthält, setzen Sie die Eigenschaft [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) auf `true`.

In diesem Beispiel stellen ursprünglich von `https://foo.example` geladene Inhalte eine GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Die Inhalte auf foo.example könnten beispielsweise folgendes JavaScript enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, setzt im Konstruktor die Option `credentials` auf `"include"` und übergibt die Anfrage anschließend an `fetch()`. Da es sich um eine einfache `GET`-Anfrage handelt, findet kein Preflight statt. Der Browser **verwirft** jedoch jede Antwort, bei der der Header {{HTTPHeader("Access-Control-Allow-Credentials")}} nicht auf `true` gesetzt ist, und stellt sie den aufrufenden Webinhalten **nicht** zur Verfügung.

![Diagramm einer GET-Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

So könnte ein Austausch zwischen Client und Server aussehen:

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

Der `Cookie`-Header der Anfrage enthält zwar das für die Inhalte auf `https://bar.other` bestimmte Cookie. Würde bar.other jedoch nicht wie in diesem Beispiel mit {{HTTPHeader("Access-Control-Allow-Credentials")}} und dem Wert `true` antworten, würde der Browser die Antwort ignorieren und sie den Webinhalten nicht zur Verfügung stellen.

#### Preflight-Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um zu signalisieren, dass die eigentliche Anfrage mit Anmeldedaten gestellt werden darf.

> [!NOTE]
> Einige Authentifizierungsdienste für Unternehmen verlangen, dass TLS-Clientzertifikate in Preflight-Anfragen gesendet werden. Das widerspricht der [Fetch-Spezifikation](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials).
>
> In Firefox 87 lässt sich dieses nicht spezifikationskonforme Verhalten aktivieren, indem die Einstellung `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Chromium-basierte Browser senden derzeit immer TLS-Clientzertifikate in CORS-Preflight-Anfragen ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldedaten und Platzhalter

Bei der Antwort auf eine Anfrage mit Anmeldedaten gilt:

- Der Server darf für den Antwort-Header `Access-Control-Allow-Origin` **nicht** den Platzhalter `*` angeben, sondern muss eine konkrete Origin nennen, beispielsweise `Access-Control-Allow-Origin: https://example.com`.
- Der Server darf für den Antwort-Header `Access-Control-Allow-Headers` **nicht** den Platzhalter `*` angeben, sondern muss eine konkrete Liste von Header-Namen nennen, beispielsweise `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`.
- Der Server darf für den Antwort-Header `Access-Control-Allow-Methods` **nicht** den Platzhalter `*` angeben, sondern muss eine konkrete Liste von Methodennamen nennen, beispielsweise `Access-Control-Allow-Methods: POST, GET`.
- Der Server darf für den Antwort-Header `Access-Control-Expose-Headers` **nicht** den Platzhalter `*` angeben, sondern muss eine konkrete Liste von Header-Namen nennen, beispielsweise `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`.

Wenn eine Anfrage Anmeldedaten enthält – meist in Form eines `Cookie`-Headers – und die Antwort den Header `Access-Control-Allow-Origin: *` mit dem Platzhalter enthält, blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Konsole der Entwicklertools.

Wenn eine Anfrage Anmeldedaten wie einen `Cookie`-Header enthält und die Antwort statt des Platzhalters eine konkrete Origin angibt, beispielsweise `Access-Control-Allow-Origin: https://example.com`, erlaubt der Browser dagegen den Zugriff auf die Antwort von der angegebenen Origin aus.

Beachten Sie außerdem: Ein `Set-Cookie`-Antwort-Header setzt kein Cookie, wenn `Access-Control-Allow-Origin` in derselben Antwort den Platzhalter `*` statt einer konkreten Origin enthält.

#### Drittanbieter-Cookies

Cookies, die in CORS-Antworten gesetzt werden, unterliegen den üblichen Richtlinien für Drittanbieter-Cookies. Im obigen Beispiel wird die Seite von `foo.example` geladen, der `Set-Cookie`-Header in der Antwort stammt jedoch von `bar.other`. Ist der Browser so konfiguriert, dass er alle Drittanbieter-Cookies ablehnt, wird dieses Cookie daher nicht gespeichert.

Cookies in CORS-Anfragen und -Antworten unterliegen den üblichen Richtlinien für Drittanbieter-Cookies.

Diese Richtlinien können verhindern, dass Drittanbieter-Cookies mit Anfragen gesendet werden. Dadurch kann eine Website möglicherweise keine Anfragen mit Anmeldedaten stellen, selbst wenn der Drittanbieter-Server dies mit `Access-Control-Allow-Credentials` erlaubt.
Die Standardrichtlinie unterscheidet sich je nach Browser, kann aber über das Attribut [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) festgelegt werden.

Auch wenn Anfragen mit Anmeldedaten zulässig sind, kann ein Browser so konfiguriert sein, dass er alle Drittanbieter-Cookies in Antworten ablehnt.

## Die HTTP-Antwort-Header

Dieser Abschnitt führt die HTTP-Antwort-Header auf, die Server gemäß der Cross-Origin-Resource-Sharing-Spezifikation bei Zugriffskontrollanfragen zurückgeben. Der vorherige Abschnitt zeigt anhand von Beispielen, wie sie eingesetzt werden.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgender Syntax enthalten:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder eine einzelne Origin an, der Browser den Zugriff auf die Ressource erlauben sollen, oder – bei Anfragen **ohne** Anmeldedaten – den Platzhalter `*`, der den Zugriff von jeder Origin erlaubt.

Um beispielsweise Code von der Origin `https://mozilla.org` den Zugriff auf die Ressource zu erlauben, können Sie Folgendes angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server statt des Platzhalters `*` eine einzelne Origin angibt, die sich abhängig von der anfragenden Origin anhand einer Allowlist dynamisch ändern kann, sollte er außerdem `Origin` in den Antwort-Header {{HTTPHeader("Vary")}} aufnehmen. So teilt er Clients mit, dass die Serverantwort vom Wert des Anfrage-Headers {{HTTPHeader("Origin")}} abhängt.

### Access-Control-Expose-Headers

Der Header {{HTTPHeader("Access-Control-Expose-Headers")}} fügt die angegebenen Header zur Allowlist der Header hinzu, auf die JavaScript im Browser – beispielsweise über [`Response.headers`](/de/docs/Web/API/Response/headers) – zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Das folgende Beispiel würde dem Browser den Zugriff auf die Header `X-My-Custom-Header` und `X-Another-Custom-Header` ermöglichen:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der Header {{HTTPHeader("Access-Control-Max-Age")}} gibt an, wie lange das Ergebnis einer Preflight-Anfrage zwischengespeichert werden kann. Ein Beispiel für eine Preflight-Anfrage finden Sie weiter oben.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der Parameter `delta-seconds` gibt die Anzahl der Sekunden an, für die das Ergebnis zwischengespeichert werden kann.

### Access-Control-Allow-Credentials

Der Header {{HTTPHeader("Access-Control-Allow-Credentials")}} gibt an, ob die Antwort auf eine Anfrage zugänglich gemacht werden darf, wenn das `credentials`-Flag auf true gesetzt ist. In der Antwort auf eine Preflight-Anfrage gibt er an, ob die eigentliche Anfrage mit Anmeldedaten gestellt werden darf. Einfache `GET`-Anfragen lösen keinen Preflight aus. Wird eine solche Anfrage mit Anmeldedaten gestellt und dieser Header nicht mit der Ressource zurückgegeben, ignoriert der Browser die Antwort und stellt sie den Webinhalten nicht zur Verfügung.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldedaten](#anfragen_mit_anmeldedaten) werden weiter oben erläutert.

### Access-Control-Allow-Methods

Der Header {{HTTPHeader("Access-Control-Allow-Methods")}} gibt an, welche Methode oder Methoden beim Zugriff auf die Ressource zulässig sind. Er wird in der Antwort auf eine Preflight-Anfrage verwendet. Unter welchen Bedingungen ein Preflight stattfindet, wird weiter oben erläutert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Weiter oben finden Sie ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}}, einschließlich einer Antwort, die diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der Header {{HTTPHeader("Access-Control-Allow-Headers")}} wird in der Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet. Er gibt an, welche HTTP-Header in der eigentlichen Anfrage verwendet werden dürfen. Damit antwortet der Server auf den Header {{HTTPHeader("Access-Control-Request-Headers")}} des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieser Abschnitt führt die Header auf, die Clients bei HTTP-Anfragen verwenden können, um Cross-Origin Sharing zu nutzen. Diese Header werden beim Aufruf eines Servers automatisch gesetzt. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine entsprechenden Anfrage-Header programmgesteuert setzen.

### Origin

Der Header {{HTTPHeader("Origin")}} gibt die Origin der Cross-Origin-Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Die Origin ist eine URL, die den Server angibt, von dem die Anfrage ausgeht. Sie enthält keine Pfadangaben, sondern nur den Servernamen.

> [!NOTE]
> Der Wert von `origin` kann `null` sein.

Beachten Sie, dass der Header {{HTTPHeader("Origin")}} bei jeder Zugriffskontrollanfrage **immer** gesendet wird.

### Access-Control-Request-Method

Der Header {{HTTPHeader("Access-Control-Request-Method")}} wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode die eigentliche Anfrage verwenden wird.

```http
Access-Control-Request-Method: <method>
```

[Weiter oben finden Sie Beispiele](#anfragen_mit_preflight) für diese Verwendung.

### Access-Control-Request-Headers

Der Header {{HTTPHeader("Access-Control-Request-Headers")}} wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header die eigentliche Anfrage verwenden wird – beispielsweise Header, die über die Option [`headers`](/de/docs/Web/API/RequestInit#headers) übergeben werden. Der Server antwortet auf diesen vom Browser gesendeten Header mit dem entsprechenden Header {{HTTPHeader("Access-Control-Allow-Headers")}}.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

[Weiter oben finden Sie Beispiele](#anfragen_mit_preflight) für diese Verwendung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Funktioniert es mit CORS?](https://httptoolkit.com/will-it-cors/) – eine interaktive CORS-Erklärung mit Generator
- [Chrome ohne CORS ausführen](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen modernen Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack-Overflow-Antwort mit Anleitungen zur Lösung häufiger Probleme](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - So vermeiden Sie einen CORS-Preflight
  - So umgehen Sie _„No Access-Control-Allow-Origin header“_ mit einem CORS-Proxy
  - So beheben Sie _„Access-Control-Allow-Origin header must not be the wildcard“_
