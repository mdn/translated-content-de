---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: cded2163c26ba09c2830cabbd7932036c6e24d2c
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der einem Server erlaubt, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer seinem eigenen, ein Browser Ressourcen laden darf. CORS basiert auch auf einem Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die tatsächliche Anfrage zulassen wird. In diesem Preflight sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Frontend-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an `https://domain-b.com/data.json` zu senden.

Aus Sicherheitsgründen schränken Browser Cross-Origin HTTP-Anfragen ein, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, Ressourcen nur von dem gleichen Ursprung anfragen kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin HTTP-Anfragen zu minimieren.

## Welche Anfragen verwenden CORS?

Dieser [Standard für das Teilen zwischen Ursprüngen](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin HTTP-Anfragen ermöglichen für:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben besprochen.
- Web-Schriftarten (für die Verwendung von Schriftarten-Domänen in `@font-face` innerhalb von CSS), wie in den [Schriftanforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, sodass Server TrueType-Schriftarten bereitstellen können, die nur cross-origin geladen und von Websites verwendet werden, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf einen Canvas gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und beinhaltet eine Diskussion über die notwendigen HTTP-Header.

## Funktionaler Überblick

Der Cross-Origin Resource Sharing-Standard funktioniert durch das Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die Servern erlauben, zu beschreiben, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich, für HTTP-Anfragemethoden, die Seiteneffekte auf den Serverdaten verursachen können (insbesondere HTTP-Methoden, die nicht {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind), schreibt die Spezifikation vor, dass Browser die Anfrage "vorbereiten" und die unterstützten Methoden vom Server mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} anfordern und dann, nach "Genehmigung" durch den Server, die tatsächliche Anfrage senden. Server können auch Clients darüber informieren, ob "Berechtigungsnachweise" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollten.

CORS-Fehler resultieren in Fehlern, aber aus Sicherheitsgründen sind Details zum Fehler _nicht im JavaScript verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgegangen ist, ist, die Konsole des Browsers für Details zu überprüfen.

In den folgenden Abschnitten werden Szenarien diskutiert und die verwendeten HTTP-Header aufgeschlüsselt.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden _einfache Anfragen_ genannt, basierend auf der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation besteht darin, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Cross-Site[`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorausgeht) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, sich bereits gegen {{Glossary("CSRF", "CSRF")}} verteidigen muss. Unter dieser Annahme muss der Server nicht zustimmen (indem er auf eine Preflight-Anfrage antwortet), eine Anfrage zu empfangen, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die Formularübermittlung. Der Server muss jedoch immer noch zustimmen, indem er {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ erfüllt **alle folgenden Bedingungen**:

- Eine der erlaubten Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch durch den Benutzeragenten gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, oder den {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheadern")}}), dürfen nur die {{Glossary("CORS-safelisted_request_header", "CORS-sicherheitsgelistet Anforderungs-Header")}} manuell gesetzt werden:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (beachten Sie bitte die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Bereichsheader-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B., `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ-/Subtyp-Kombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} im {{HTTPHeader("Content-Type")}}-Header erlaubt sind, sind:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gemacht wird, sind keine Event-Listener auf dem durch die [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) Rückgabeobjekt registriert; das bedeutet, für eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Instanz `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener hinzuzufügen, der den Upload überwacht.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview legen zusätzliche Einschränkungen für die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, und {{HTTPHeader("Content-Language")}} Headern erlaubten Werte fest. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, ist nicht dokumentiert, mit Ausnahme der folgenden WebKit-Bugs:
>
> - [Erfordert Preflight für nicht-standardisierte CORS-sicherheitsgelistete Anforderungs-Header Accept, Accept-Language, und Content-Language](https://webkit.org/b/165178)
> - [Ermöglicht Kommas in Accept, Accept-Language und Content-Language Anforderungs-Headern für einfache CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Auf ein Beispiel: Angenommen, web content unter `https://foo.example` möchte JSON-Inhalte von der Domain `https://bar.other` abrufen. Code dieser Art könnte in JavaScript bereitgestellt werden auf `foo.example`:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt zu einem einfachen Austausch zwischen dem Client und dem Server, bei dem CORS-Header zur Handhabung der Berechtigungen verwendet werden:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Werfen wir einen Blick darauf, was der Browser in diesem Fall an den Server senden wird:

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

Der erwähnenswerte Anfrageheader ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` stammt.

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

In der Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung abgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}} Header ist der einfachste Gebrauch des Zugriffskontrollprotokolls. Wenn die Ressourceneigentümer bei `https://bar.other` den Zugriff auf die Ressource einschränken möchten, sodass _nur_ Anfragen von `https://foo.example` (d.h. keine andere Domain als `https://foo.example` kann die Ressource im Cross-Origin-Modus abrufen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Beim Beantworten einer Anfrage mit [Berechtigungsnachweisen](#anfragen_mit_berechtigungsnachweisen) muss der Server ein Ursprungs-Informed Value im `Access-Control-Allow-Origin` Header angeben, anstelle des `*` Wildcardwertes.

### Preflighted-Anfragen

Anders als bei [_einfachen Anfragen_](#einfache_anfragen), sendet der Browser bei "preflighted" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode an die Ressource im anderen Ursprung, um zu bestimmen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorverarbeitet, da sie Auswirkungen auf die Benutzerdaten haben können.

Das Folgende ist ein Beispiel für eine Anfrage, die vorverarbeitet wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet wird. Außerdem ist ein nicht-standardisierter HTTP `X-PINGOTHER` Anforderungs-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, sind aber generell für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorverarbeitet.

![Diagramm einer vorverarbeiteten Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; sie werden nur für die `OPTIONS` Anfrage benötigt.

Werfen wir einen Blick auf den vollständigen Austausch zwischen Client und Server. Der erste Austausch ist die _Preflight-Anfrage/-Antwort_:

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

Der erste Block oben repräsentiert die vorverarbeitete Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode. Der Browser stellt fest, dass er dies basierend auf den Anforderungsparametern senden muss, die der obige JavaScript-Codeausschnitt verwendet, sodass der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1 Methode, die dazu verwendet wird, weitere Informationen von Servern zu erhalten, und es ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anforderungsheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}} Header benachrichtigt den Server als Teil einer preflight Anfrage darüber, dass, wenn die tatsächliche Anfrage gesendet wird, sie mit einer `POST` Anforderungsmethode erfolgen wird. Der {{HTTPHeader("Access-Control-Request-Headers")}} Header benachrichtigt den Server darüber, dass, wenn die tatsächliche Anfrage gesendet wird, sie mit den benutzerdefinierten Headern `X-PINGOTHER` und `Content-Type` erfolgen wird. Jetzt hat der Server die Möglichkeit zu bestimmen, ob unter diesen Bedingungen eine Anfrage akzeptiert werden kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, welche angibt, dass die Anforderungsmethode (`POST`) und die Anforderungs-Header (`X-PINGOTHER`) akzeptabel sind. Sehen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, wodurch der Zugriff nur auf die Domain des anfordernden Ursprungs beschränkt wird. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist ähnlich dem {{HTTPHeader("Allow")}} Antwort-Header, wird aber streng im Kontext der Zugangskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, um zu bestätigen, dass dies zulässige Header sind, die mit der tatsächlichen Anfrage verwendet werden können. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine kommagetrennte Liste von zulässigen Headern.

Zuletzt gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im aktuellen Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn die `Access-Control-Max-Age` diesen überschreitet.

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

#### Preflight-Anfragen und Weiterleitungen

Nicht alle Browser unterstützen zurzeit das Folgen von Weiterleitungen nach einer vorverarbeiteten Anfrage. Wenn nach solch einer Anfrage eine Weiterleitung erfolgt, zeigen einige Browser derzeit eine Fehlermeldung wie die folgende an:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet, was für Cross-Origin-Anfragen, die Preflight benötigen, nicht erlaubt ist.
> Anfrage erfordert Preflight, das ist nicht erlaubt, um Cross-Origin-Weiterleitungen zu folgen.

Das CORS-Protokoll hat ursprünglich dieses Verhalten erfordert, wurde aber [anschließend geändert, um es nicht mehr zu erfordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen deswegen noch das ursprünglich geforderte Verhalten.

Bis die Browser mit der Spezifikation mithalten, können Sie möglicherweise diese Einschränkung umgehen, indem Sie Folgendes tun:

- Ändern Sie das serverseitige Verhalten, um die Preflight zu vermeiden und/oder die Umleitung zu vermeiden
- Ändern Sie die Anfrage so, dass es eine [einfache Anfrage](#einfache_anfragen) ist, die keine Preflight verursacht

Wenn das nicht möglich ist, ist eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, zu welcher URL die eigentliche vorverarbeitete Anfrage führen würde.
2. Machen Sie eine weitere Anfrage (die _tatsächliche_ Anfrage) unter Verwendung der URL, die Sie im ersten Schritt von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage jedoch eine ist, die eine Preflight aufgrund des Vorhandenseins des `Authorization` Headers in der Anfrage auslöst, werden Sie diese Einschränkung nicht mit den oben beschriebenen Schritten umgehen können. Und Sie werden sie überhaupt nicht umgehen können, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage geschickt wird.

### Anfragen mit Berechtigungsnachweisen

> [!NOTE]
> Beim Stellen von an-Domain-credientialed-Anfragen, gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer durchgesetzt, unabhängig von einer Einrichtung auf dem Server und dem Client, wie in diesem Kapitel beschrieben.

Die interessanteste Funktion, die sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS offenbart wird, ist die Möglichkeit, „berechtigte” Anfragen zu stellen, die sich HTTP-Cookies und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser in Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Berechtigungsnachweise.

Um eine `fetch()`-Anfrage so zu gestalten, dass sie Berechtigungsnachweise enthält, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage so zu gestalten, dass sie Berechtigungsnachweise enthält, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel macht der Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request) Objekt, das die `credentials` Option im Konstruktor auf `"include"` setzt und gibt dann diese Anfrage in `fetch()` ein. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorverarbeitet, aber der Browser wird jede Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}} Header auf `true` gesetzt hat, und die Antwort nicht dem aufrufenden Webinhalt verfügbar machen.

![Diagramm einer GET-Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

Hier ist ein Beispiel für einen Austausch zwischen Client und Server:

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

Obwohl der `Cookie` Header der Anfrage das für die Inhalte der `https://bar.other` bestimmte Cookie enthält, würde die Antwort ignoriert und nicht für den Webinhalt verfügbar gemacht werden, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortet, wie in diesem Beispiel demonstriert.

#### Preflight-Anfragen und Berechtigungsnachweise

CORS-Preflight-Anfragen dürfen niemals Berechtigungsnachweise enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um zu zeigen, dass die tatsächliche Anfrage mit Berechtigungsnachweisen gemacht werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) Spezifikation widerspricht.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, indem es die Einstellung "network.cors_preflight.allow_client_cert" auf "true" setzt ([Firefox Bug 1511151](https://bugzil.la/1511151)). Auf Chromium-basierte Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Berechtigte Anfragen und Platzhalter

Wenn auf eine berechtigte Anfrage geantwortet wird:

- Der Server **darf nicht** das `*` Platzhalterzeichen für den `Access-Control-Allow-Origin` Antwortheader-Wert angeben, sondern muss stattdessen einen spezifischen Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*` Platzhalterzeichen für den `Access-Control-Allow-Headers` Antwortheader-Wert angeben, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*` Platzhalterzeichen für den `Access-Control-Allow-Methods` Antwortheader-Wert angeben, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*` Platzhalterzeichen für den `Access-Control-Expose-Headers` Antwortheader-Wert angeben, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Berechtigungsnachweis enthält (meistens ein `Cookie` Header) und die Antwort einen `Access-Control-Allow-Origin: *` Header enthält (also mit dem Platzhalter), wird der Browser den Zugriff auf die Antwort blockieren und einen CORS-Fehler in der Devtools-Konsole protokollieren.

Aber wenn eine Anfrage ein Berechtigungsnachweis enthält (wie den `Cookie` Header) und die Antwort einen tatsächlichen Ursprung anstelle des Platzhalters enthält (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), dann wird der Browser den Zugriff auf die Antwort vom angegebenen Ursprung zulassen.

Beachten Sie auch, dass jeder `Set-Cookie` Antwortheader in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin` Wert in dieser Antwort das `*` Platzhalterzeichen anstelle eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Richtlinien für Drittanbieter-Cookies unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Set-Cookie` Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookies, die in CORS-Anfragen und -Antworten gesetzt werden, unterliegen den normalen Richtlinien für Drittanbieter-Cookies.

Drittanbieter-Cookie-Richtlinien können verhindern, dass Drittanbieter-Cookies in Anfragen gesendet werden, und effektiv eine Site daran hindern, berechtigte Anfragen zu stellen, selbst wenn dies vom Drittanbieter-Server erlaubt ist (Verwendung von `Access-Control-Allow-Credentials`).
Die Standardrichtlinie unterscheidet sich zwischen Browsern, kann jedoch mit dem [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut festgelegt werden.

Selbst wenn berechtigte Anfragen erlaubt sind, kann es vorkommen, dass ein Browser dafür eingerichtet ist, alle Drittanbieter-Cookies in Antworten abzulehnen.

## Die HTTP Antwort-Header

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der Browsern erlaubt, auf diese Ressource zuzugreifen, oder — für Anfragen **ohne** Berechtigungsnachweise — das `*` Platzhalterzeichen erlaubt Browsern, von jedem Ursprung auf die Ressource zuzugreifen.

Um beispielsweise zu erlauben, dass Code aus dem Ursprung `https://mozilla.org` auf die Ressource zugreift, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der sich je nach dem anfordernden Ursprung als Teil einer Whitelist dynamisch ändern kann) anstelle des `*` Platzhalters, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}} Antwortheader einschließen, um den Clients mitzuteilen, dass die Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}} Anfrageheaders variieren werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}} Header fügt die angegebenen Header zur Whitelist hinzu, die von JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugegriffen werden darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde das Folgende die Header `X-My-Custom-Header` und `X-Another-Custom-Header` für den Browser verfügbar machen:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}} Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds` Parameter gibt die Anzahl der Sekunden an, wie lange die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}} Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials` Flag wahr ist. Wenn es als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt es an, ob die tatsächliche Anfrage mit Berechtigungsnachweisen gestellt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorbearbeitet werden und so, wenn eine Anfrage für eine Ressource mit Anmeldeinformationen gestellt wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, wird die Antwort vom Browser ignoriert und nicht an den Webinhalt zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Berechtigte Anfragen](#anfragen_mit_berechtigungsnachweisen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}} Header spezifiziert die Methode oder Methoden, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorverarbeitet wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}} Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header verwendet werden können, wenn die tatsächliche Anfrage gestellt wird. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}} Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrageheader

Dieser Abschnitt listet Header auf, die Clients beim Ausgeben von HTTP-Anfragen verwenden können, um die Funktion der gemeinsamen Nutzung zwischen Ursprüngen zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Aufrufe zu Servern machen. Entwickler, die Cross-Origin-Anfragen machen, müssen keine Cross-Origin-Sharing-Anfrageheader programmatisch festlegen.

### Origin

Der {{HTTPHeader("Origin")}} Header gibt den Ursprung der Cross-Origin-Zugriffsanforderung oder Preflight-Anforderung an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wurde. Sie enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin` Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}} Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird beim Ausgeben einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gemacht wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung finden Sie [oben.](#preflighted-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}} Header wird beim Ausgeben einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gemacht wird (zum Beispiel, indem man sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergibt). Dieser Browser-seitige Header wird von dem komplementären server-seitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung finden Sie [oben](#preflighted-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [Enable CORS: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Wird es CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitung" Informationen zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man das CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um das _"Kein Access-Control-Allow-Origin-Header"_ zu umgehen
  - Wie man das _"Access-Control-Allow-Origin-Header darf nicht das Platzhalter sein"_ behebt
