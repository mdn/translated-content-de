---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ([CORS](/de/docs/Glossary/CORS)) ist ein auf [HTTP](/de/docs/Glossary/HTTP)-Headern basierender Mechanismus, der einem Server ermöglicht, anzugeben, welche [Ursprünge](/de/docs/Glossary/origin) (Domain, Schema oder Port) außer seinem eigenen das Laden von Ressourcen durch einen Browser erlauben sollen. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server stellen, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die tatsächliche Anfrage zulässt. In diesem Preflight sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der von `https://domain-a.com` bereitgestellte Frontend-JavaScript-Code verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser von Skripten initiierte Cross-Origin-HTTP-Anfragen. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von dem gleichen Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für Folgendes ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web Fonts (für die plattformübergreifende Verwendung von Schriftarten in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriftarten bereitstellen können, die nur plattformübergreifend geladen und von Webseiten verwendet werden können, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf ein Canvas gezeichnet werden.
- [CSS-Shapes aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Headers) hinzugefügt werden, die es Servern ermöglichen, zu beschreiben, welche Ursprünge diese Informationen von einem Webbrowser lesen dürfen. Darüber hinaus fordert die Spezifikation für HTTP-Anfragemethoden, die Nebenwirkungen auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), dass Browser die Anfrage "vorab abfragen", indem sie die unterstützten Methoden vom Server mit der HTTP-{{HTTPMethod("OPTIONS")}}-Anfragemethode anfordern und dann, nach "Genehmigung" durch den Server, die eigentliche Anfrage senden. Server können Clients auch darüber informieren, ob "Anmeldedaten" (wie [Cookies](/de/docs/Web/HTTP/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind die Details des Fehlers _nicht im JavaScript_ verfügbar. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers nach Details zu durchsuchen.

In den nachfolgenden Abschnitten werden Szenarien erläutert sowie eine Übersicht der verwendeten HTTP-Header gegeben.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine [CORS-Preflight](/de/docs/Glossary/Preflight_request) aus. Diese werden _einfache Anfragen_ laut der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) genannt, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die CORS jetzt definiert) diesen Begriff nicht verwendet.

Der Grundgedanke ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Cross-Site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorweggenommen hat) einfache Anfragen an jeden Ursprung stellen kann, sodass jeder, der einen Server schreibt, bereits gegen [Cross-Site-Request-Forgery](/de/docs/Glossary/CSRF) (CSRF) geschützt sein muss. Unter dieser Annahme muss der Server nicht seinen Willen zur Annahme von Anfragen mitteilen (indem er auf eine Preflight-Anfrage antwortet), um eine Anfrage zu erhalten, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als bei der Formularübermittlung. Der Server muss jedoch dennoch optieren, die Antwort mit dem Skript zu _teilen_, indem er {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den vom Benutzeragenten automatisch gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder [die anderen Header, die in der Fetch-Spezifikation als _forbidden header name_ definiert sind](https://fetch.spec.whatwg.org/#forbidden-header-name)), dürfen nur die Header manuell gesetzt werden, die [die Fetch-Spezifikation als CORS-safelisted request-header definiert](https://fetch.spec.whatwg.org/#cors-safelisted-request-header), nämlich:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereichs-Headerwert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen typ/subtyp Kombinationsmöglichkeiten, die für den [Medientyp](/de/docs/Glossary/MIME_type) im {{HTTPHeader("Content-Type")}}-Header erlaubt sind, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage unter Verwendung eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts erfolgt, sind keine Ereignis-Listener für das Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft in der Anfrage verwendet wird; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), `xhr`, hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener zur Überwachung des Uploads hinzuzufügen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview schränken die Werte ein, die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} Headern erlaubt sind. Wenn einer dieser Header "nicht standardisierte" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardisiert" ansehen, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://webkit.org/b/165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://webkit.org/b/165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Beschränkungen, da sie nicht Teil der Spezifikation sind.

Beispielsweise nehmen wir an, dass Web-Content auf `https://foo.example` JSON-Inhalte von der Domain `https://bar.other` abfragen möchte. Ein Code dieser Art könnte in JavaScript auf `foo.example` verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Austausch zwischen Client und Server durch, wobei CORS-Header verwendet werden, um die Berechtigungen zu handhaben:

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

Der relevante Anfrageheader ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Jetzt sehen wir uns an, wie der Server antwortet:

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

In der Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung aus zugänglich ist.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourceninhaber bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` einschränken möchten (d. h. keine Domain außer `https://foo.example` kann in einer Cross-Origin-Weise auf die Ressource zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Wenn auf eine [verschränkte Anfragen](#anfragen_mit_anmeldedaten) Anfrage geantwortet wird, **muss** der Server einen Ursprung im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt den `*`-Wildcard zu spezifizieren.

### Preflighted-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "preflighted" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage gefahrlos gesendet werden kann. Solche Cross-Origin-Anfragen werden geprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die eine Vorabüberprüfung durchläuft:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet wird. Außerdem wird ein nicht standardmäßiger HTTP-Request-Header `X-PINGOTHER` gesetzt. Solche Header sind nicht Teil von HTTP/1.1, sind aber allgemein nützlich für Webanwendungen. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorab geprüft.

![Diagramm einer Anfrage, die vorab geprüft ist](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; sie werden nur für die `OPTIONS`-Anfrage benötigt.

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

Der erste Block oben stellt die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser ermittelt, dass er diese Anfrage basierend auf den Anfrageparametern senden muss, die der obige JavaScript-Code verwendet, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die dazu verwendet wird, weitere Informationen von Servern zu erhalten und ist eine [sichere](/de/docs/Glossary/Safe/HTTP) Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei weitere Anfrageheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Preflight-Anfrage, dass die tatsächliche Anfrage mit einer `POST`-Anfragemethode gesendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass die tatsächliche Anfrage mit `X-PINGOTHER` und benutzerdefinierten `Content-Type`-Headern gesendet wird. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die vom Server zurückgegebene Antwort, die anzeigt, dass die Anfragemethode (`POST`) und Anforderungsheader (`X-PINGOTHER`) akzeptabel sind. Lassen Sie uns einen genaueren Blick auf die folgenden Zeilen werfen:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur auf die anfordernde Ursprungsdomäne beschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ähnelt dem {{HTTPHeader("Allow")}}-Antwortheader, wird jedoch ausschließlich im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, wodurch bestätigt wird, dass dies zulässige Header sind, die mit der tatsächlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste zulässiger Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine andere Preflight-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt die maximale Gültigkeitsdauer 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn der `Access-Control-Max-Age`-Wert überschritten wird.

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

#### Preflighted-Anfragen und Umleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Umleitungen nach einer Preflighted-Anfrage. Wenn eine Umleitung nach einer solchen Anfrage erfolgt, werden einige Browser derzeit eine Fehlermeldung wie die folgende melden:

> Die Anfrage wurde zu `https://example.com/foo` umgeleitet, was für Cross-Origin-Anfragen, für die eine Preflighted-Abfrage erforderlich ist, unzulässig ist.
> Anfrage erfordert Preflight, was das Folgen von Cross-Origin-Umleitungen untersagt.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde jedoch [anschließend geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Nicht alle Browser haben jedoch die Änderung implementiert und zeigen daher noch das ursprünglich erforderliche Verhalten.

Bis die Browser mit der Spezifikation aufholen, können Sie möglicherweise diese Einschränkung umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das serverseitige Verhalten, um die Preflight zu vermeiden und/oder die Umleitung zu vermeiden
- Ändern Sie die Anfrage so, dass es sich um eine [einfache Anfrage](#einfache_anfragen) handelt, die keine Preflight verursacht

Wenn das nicht möglich ist, gibt es einen anderen Weg:

1. Stellen Sie eine [einfache Anfrage](#einfache_anfragen) (unter verwenden von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API, oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)) um die URL zu bestimmen, bei der die eigentliche Preflighted-Anfrage enden würde.
2. Stellen Sie eine weitere Anfrage (die _eigentliche_ Anfrage) mit der URL, die Sie im ersten Schritt aus `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage jedoch eine ist, die eine Preflight wegen des `Authorization`-Headers in der Anfrage auslöst, können Sie die Einschränkung mit den oben genannten Schritten nicht umgehen. Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Wenn authentifizierte Anfragen an eine andere Domain gestellt werden, gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer unabhängig von der Server- und Client-Konfiguration, wie in diesem Kapitel beschrieben, durchgesetzt.

Die interessanteste Fähigkeit, die sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS bereitgestellt wird, ist die Möglichkeit, "authentifizierte" Anfragen zu stellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin `fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldedaten.

Um für eine `fetch()`-Anfrage zu bitten, Anmeldedaten einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um für eine `XMLHttpRequest`-Anfrage zu bitten, Anmeldedaten einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true`.

In diesem Beispiel macht der ursprünglich von `https://foo.example` geladene Inhalt eine einfache GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Der Inhalt auf foo.example könnte JavaScript wie folgt enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, indem die `credentials`-Option im Konstruktor auf `"include"` gesetzt wird, und gibt diese Anfrage dann in `fetch()` weiter. Da es sich um eine einfache `GET`-Anfrage handelt, wird sie nicht vorab geprüft, aber der Browser wird **jede** Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}}: `true`-Header enthält und **die** Antwort nicht dem aufrufenden Web-Content zur Verfügung stellt.

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

Obwohl der `Cookie`-Header der Anforderung das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und nicht für den Web-Content bereitgestellt, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortet, wie in diesem Beispiel gezeigt.

#### Preflight-Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldedaten erfolgen darf.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Clientzertifikate in Preflight-Anfragen gesendet werden, entgegen der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, durch das Setzen der Voreinstellung: `network.cors_preflight.allow_client_cert` auf `true` ([Firefox Bug 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Clientzertifikate in CORS-Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Authentifizierte Anfragen und Wildcards

Wenn auf eine authentifizierte Anfrage geantwortet wird:

- Der Server darf **nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Allow-Origin` spezifizieren, sondern muss stattdessen einen expliziten Ursprung angeben; Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server darf **nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Allow-Headers` spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; Beispiel: `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server darf **nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Allow-Methods` spezifizieren, sondern muss stattdessen eine explizite Liste von Methoden-Namen angeben; Beispiel: `Access-Control-Allow-Methods: POST, GET`
- Der Server darf **nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Expose-Headers` spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; Beispiel: `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldedatum enthält (meistens einen `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header (d. h., mit dem Wildcard) enthält, blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklerkonsole.

Wenn jedoch eine Anfrage ein Anmeldedatum (wie den `Cookie`-Header) enthält und die Antwort einen tatsächlichen Ursprung anstelle des Wildcards (wie beispielsweise `Access-Control-Allow-Origin: https://example.com`) umfasst, lässt der Browser den Zugriff auf die Antwort von dem angegebenen Ursprung zu.

Beachten Sie auch, dass ein `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das `*`-Wildcard anstelle eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Richtlinien für Drittanbieter-Cookies unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookies in der Anfrage können auch unter normalen Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie kann die in diesem Kapitel beschriebene Fähigkeit also außer Kraft setzen und effektiv verhindern, dass Sie authentifizierte Anfragen stellen können.

Die Cookie-Richtlinie für das [SameSite](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut würde gelten.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt eine Übersicht über deren Verwendung.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der den Browsern erlaubt, diesem Ursprung den Zugriff auf die Ressource zu gestatten, oder andernfalls – für Anfragen **ohne** Anmeldedaten – dass das `*`-Wildcard den Browsern erlaubt, jedem Ursprung den Zugriff auf die Ressource zu gestatten.

Um zum Beispiel Code vom Ursprung `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie die folgende Spezifikation verwenden:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung (der in Abhängigkeit des anfordernden Ursprungs dynamisch anhand einer Positivliste geändert werden kann) statt des `*`-Wildcards spezifiziert, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}} Antwort-Header einschließen, um den Clients anzuzeigen, dass die Antworten des Servers sich anhand des Wertes des {{HTTPHeader("Origin")}} Anforderungs-Headers unterscheiden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header zur Positivliste hinzu, auf die JavaScript (wie zum Beispiel [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde Folgendes:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…die Header `X-My-Custom-Header` und `X-Another-Custom-Header` für den Browser zugänglich machen.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds`-Parameter gibt die Anzahl der Sekunden an, für die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage exponiert werden kann, wenn das `credentials`-Flag wahr ist. Wenn dieser Header als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, zeigt dies an, ob die tatsächliche Anfrage mit Anmeldedaten durchgeführt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab geprüft werden und daher, wenn eine Anfrage für eine Resource mit Anmeldedaten gestellt wird, die Antwort ignoriert wird und nicht vom Browser an den Web-Content zurückgegeben wird, wenn dieser Header nicht zusammen mit der Resource zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Authentifizierte Anfragen](#anfragen_mit_anmeldedaten) werden oben beschrieben.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder Methoden an, die beim Zugriff auf die Resource erlaubt sind. Dieser wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab geprüft wird, werden oben beschrieben.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) verwendet, um anzugeben, welche HTTP-Header beim tatsächlichen Anforderung verwendet werden dürfen. Dieser Header ist die Antwort des Servers auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungsheader

Dieser Abschnitt listet Header auf, die Clients bei der Ausgabe von HTTP-Anfragen verwenden können, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header bei der Durchführung von Aufrufen an Server für Sie gesetzt werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anforderungsheader programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wurde. Es sind keine Pfadinformationen enthalten, nur der Servername.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Nutzung finden Sie [oben.](#preflighted-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gestellt wird (zum Beispiel, indem man sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergibt). Dieser browserseitige Header wird durch den ergänzenden serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Nutzung finden Sie [oben](#preflighted-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung"-Infos für den Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man das CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy nutzt, um das Problem _"Kein Access-Control-Allow-Origin-Header vorhanden"_ zu umgehen
  - Wie man das Problem _"Access-Control-Allow-Origin-Header darf nicht das Wildcard sein"_ löst
