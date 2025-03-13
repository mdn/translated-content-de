---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein mechanismus auf Basis von {{Glossary("HTTP", "HTTP")}}-Headern, der einem Server erlaubt, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) neben seinem eigenen das Laden von Ressourcen durch einen Browser erlauben. CORS beruht auch auf einem Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server stellen, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die tatsächliche Anfrage zulässt. Bei diesem Preflight sendet der Browser Header, die angeben, welche HTTP-Methode und Header in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Frontend-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Dies bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von dem gleichen Ursprung anfragen kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammdarstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu minimieren.

## Welche Anfragen verwenden CORS?

Dieses [Standard für Cross-Origin Sharing](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen ermöglichen für:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben diskutiert.
- Web-Fonts (für die Nutzung von Schriftarten über Domains hinweg in `@font-face` innerhalb von CSS), [sodass Server TrueType-Schriftarten bereitstellen können, die nur Cross-Origin geladen und von Websites genutzt werden können, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Videoframes, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS Shapes von Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dieser Artikel bietet eine allgemeine Übersicht über Cross-Origin Resource Sharing und umfasst eine Diskussion der erforderlichen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzugefügt werden, die es Servern ermöglichen, zu beschreiben, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich fordert die Spezifikation für HTTP-Anfrage-Methoden, die Nebenwirkungen auf Serverdaten haben können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}}, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), dass Browser die Anfrage "preflighten", indem sie mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} die vom Server unterstützten Methoden erfragen und danach, mit Zustimmung des Servers, die tatsächliche Anfrage senden. Server können Kunden auch informieren, ob "Credentials" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP Authentication](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind Details über den Fehler für JavaScript _nicht verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers für Details zu konsultieren.

In den nachfolgenden Abschnitten werden Szenarien diskutiert sowie die HTTP-Header beschrieben.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), mit dem Cross-Origin-Anfragen in jedem unterstützenden Browser durchgeführt werden können.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden im veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) als _einfache Anfragen_ bezeichnet, obwohl der [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation besteht darin, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Cross-Site-[`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorausgeht) einfache Anfragen an jeden Ursprung senden kann, daher muss jeder, der einen Server schreibt, bereits Schutz gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) implementieren. Unter dieser Annahme muss der Server nicht zustimmen (indem er auf eine Preflight-Anfrage antwortet), um jegliche Anfrage zu empfangen, die wie ein Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch Formularübermittelung. Der Server muss jedoch dennoch mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript _zu teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den Headern, die automatisch vom Benutzeragenten gesetzt werden (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, oder die {{Glossary("Forbidden_request_header", "verbotene Anforderungs-Header")}}), dürfen nur die {{Glossary("CORS-safelisted_request_header", "CORS-sichergestellten Anforderungs-Header")}} manuell gesetzt werden, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereichswerte für Header](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B., `bytes=256-` oder `bytes=127-255`)

- Die einzigen Type/Subtype-Kombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} im {{HTTPHeader("Content-Type")}}-Header zulässig sind, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt erstellt wird, sind keine Event-Listener auf dem Objekt registriert, das durch die [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft verwendet wird; das bedeutet, gegeben ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Instanz `xhr`, hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener hinzuzufügen, um den Upload zu überwachen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Einschränkungen für die Werte, die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}}-Headern erlaubt sind. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" erachten, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Preflight erfordern für nicht standardmäßige CORS-sichergestellte Anforderungs-Header Accept, Accept-Language und Content-Language](https://webkit.org/b/165178)
> - [Kommata in den Anforderungs-Headern Accept, Accept-Language und Content-Language für einfache CORS zulassen](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)

Kein anderer Browser implementiert diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Als Beispiel nehmen wir an, dass Webinhalt bei `https://foo.example` JSON-Inhalte von der Domain `https://bar.other` abrufen möchte. Solcher Code könnte in JavaScript, das auf `foo.example` bereitgestellt wird, verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Austausch zwischen dem Client und dem Server durch und verwendet CORS-Header, um die Berechtigungen zu handhaben:

![Diagramm einer einfachen CORS GET Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

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

Der interessante Request-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass die Anfrage von `https://foo.example` stammt.

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

Der Server antwortet mit einem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *`, was bedeutet, dass die Ressource von **jedem** Ursprung zugegriffen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Nutzung des Zugriffskontrollprotokolls. Wenn die Ressourceneigentümer bei `https://bar.other` den Zugriff auf die Ressource nur auf Anfragen _ausschließlich_ von `https://foo.example` (d.h., keine andere Domain als `https://foo.example` kann auf die Ressource in einer Cross-Origin-Manier zugreifen) beschränken wollten, würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Beim Antworten auf eine [Anfrage mit Berechtigungen](#anfragen_mit_berechtigungen)-Anfrage muss der Server **einen Ursprung** bei dem Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt des `*` Wildcards.

### Preflight-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser für "preflighted" Anfragen zuerst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage gesendet werden kann. Solche Cross-Origin-Anfragen werden geprüft, da sie Implikationen für Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die geprüft wird:

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

Das obige Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet wird. Auch ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Request-Header wird gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber im Allgemeinen für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage überprüft.

![Diagramm einer Anfrage, die überprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie sind nur für die `OPTIONS`-Anfrage notwendig.

Sehen wir uns den gesamten Austausch zwischen dem Client und dem Server an. Der erste Austausch ist die _Preflight-Anfrage/Antwort_:

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

Der erste Block oben stellt die Preflight-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} dar. Der Browser bestimmt, dass er dies basierend auf den Anforderungsparametern, die der JavaScript-Code-Schnipsel oben verwendete, senden muss, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht zum Ändern der Ressource verwendet werden kann. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage, zwei andere Request-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Preflight-Anfrage, dass, wenn die tatsächliche Anfrage gesendet wird, dies mit einer `POST`-Anfrage-Methode geschieht. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass, wenn die tatsächliche Anfrage gesendet wird, dies mit den benutzerdefinierten Headern `X-PINGOTHER` und `Content-Type` geschieht. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die zeigt, dass die Anfragenmethode (`POST`) und die Anfrage-Header (`X-PINGOTHER`) akzeptabel sind. Schauen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur auf die anfragende Ursprungsdomäne beschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was sagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist dem {{HTTPHeader("Allow")}} Antwort-Header ähnlich, wird aber strikt im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einer Wertung von `X-PINGOTHER, Content-Type`, was bestätigt, dass diese Header für die tatsächliche Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert ist 5 Sekunden. Im vorliegenden Fall beträgt das Maximalalter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn `Access-Control-Max-Age` diesen überschreitet.

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

#### Preflight-Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Verfolgen von Weiterleitungen nach einer Preflight-Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage erfolgt, wird ein Fehlerbericht in einigen Browsern derzeit möglicherweise wie folgt ausgegeben:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet, was für Cross-Origin-Anfragen, die Preflight erfordern, nicht zulässig ist.
> Anforderung erfordert Preflight, was das Verfolgen von Cross-Origin-Weiterleitungen nicht erlaubt.

Das CORS-Protokoll hat ursprünglich dieses Verhalten verlangt, wurde aber [daraufhin geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen noch das ursprünglich geforderte Verhalten.

Bis die Browser mit der Spezifikation aufholen, könnten Sie in der Lage sein, dieses Limitation zu umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern des serverseitigen Verhaltens, um die Preflight zu vermeiden und/oder die Weiterleitung zu vermeiden
- Ändern der Anfrage, sodass es eine [einfache Anfrage](#einfache_anfragen) ist, die kein Preflight verursacht

Wenn das nicht möglich ist, dann gibt es noch einen anderen Weg:

1. Eine [einfache Anfrage](#einfache_anfragen) ausführen (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, auf welche URL die eigentliche Preflighted-Anfrage am Ende gelangen würde.
2. Eine weitere Anfrage ausführen (die _eigentliche_ Anfrage) mit der URL, die Sie von `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Jedoch, wenn die Anfrage eine ist, die ein Preflight aufgrund des Vorhandenseins des `Authorization`-Headers in der Anfrage auslöst, können Sie die Einschränkung mit den oben genannten Schritten nicht umgehen. Und Sie werden es überhaupt nicht umgehen können, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Berechtigungen

> [!NOTE]
> Bei der Durchführung von Anfragen mit Berechtigungen auf eine andere Domäne gelten weiterhin Richtlinien für Drittanbieter-Cookies. Die Richtlinie wird immer unabhängig von jeglicher Einrichtung auf dem Server und dem Client, wie in diesem Kapitel beschrieben, erzwungen.

Die interessanteste Möglichkeit, die sowohl durch [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS freigegeben wird, ist die Fähigkeit, "credentialed" Anfragen zu machen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Berechtigungen mit.

Um eine `fetch()`-Anfrage zu bitten, Berechtigungen zu inkludieren, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu bitten, Berechtigungen zu inkludieren, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true`.

In diesem Beispiel macht Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine einfache GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Der Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, setzt die `credentials`-Option auf `"include"` im Konstruktor und übergibt diese Anfrage dann an `fetch()`. Da dies eine einfache `GET`-Anfrage ist, wird kein Preflight durchgeführt, aber der Browser **verwehrt** jede Antwort, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}}: `true` Header enthält und **macht** die Antwort nicht für den aufrufenden Webinhalt verfügbar.

![Diagramm einer einfachen GET Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, wäre die Antwort ignoriert worden, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` geantwortet hätte, wie in diesem Beispiel gezeigt.

#### Preflight-Anfragen und Berechtigungen

CORS-Preflight-Anfragen dürfen niemals Berechtigungen beinhalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die tatsächliche Anfrage mit Berechtigungen gesendet werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste verlangen, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, entgegen der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, das aktiviert werden kann, indem die Einstellung: `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Auf Chromium-basierten Browsern werden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen gesendet ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Berechtigungen und Wildcards

Beim Antworten auf eine Anfrage mit Berechtigungen:

- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Origin`-Antwort-Header-Wert angeben, sondern muss stattdessen einen spezifischen Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Headers`-Antwort-Header-Wert angeben, sondern muss stattdessen eine spezifische Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Methods`-Antwort-Header-Wert angeben, sondern muss stattdessen eine spezifische Liste von Methoden angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Expose-Headers`-Antwort-Header-Wert angeben, sondern muss stattdessen eine spezifische Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Berechtigungsnachweis (meistens ein `Cookie`-Header) enthält und die Antwort enthält einen `Access-Control-Allow-Origin: *`-Header (d.h., mit dem Wildcard), blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Devtools-Konsole.

Aber wenn eine Anfrage ein Berechtigungsnachweis enthält (wie etwa der `Cookie`-Header) und die Antwort enthält einen tatsächlichen Ursprung anstelle des Wildcards (wie zum Beispiel `Access-Control-Allow-Origin: https://example.com`), dann erlaubt der Browser den Zugriff auf die Antwort vom angegebenen Ursprung.

Beachten Sie auch, dass ein `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das `*`-Wildcard anstelle eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Drittanbieter-Cookie-Richtlinien unterliegen. In dem obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Nutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookie in der Anfrage können auch unter normalen Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Möglichkeit aufheben, indem sie effektiv verhindert, dass Sie irgendwelche Anfragen mit Berechtigungen machen können.

Die Cookie-Richtlinie bezüglich des [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attributes würde gelten.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorhergehende Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` spezifiziert entweder einen einzelnen Ursprung, der den Browsern erlaubt, diesem Ursprung den Zugriff auf die Ressource zu gewähren; oder — für Anfragen **ohne** Berechtigungen — das `*`-Wildcard erlaubt es Browsern, jedem Ursprung den Zugriff auf die Ressource zu gewähren.

Zum Beispiel, um Code vom Ursprung `https://mozilla.org` Zugang zur Ressource zu gewähren, können Sie spezifizieren:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzigen Ursprung spezifiziert (der sich dynamisch basierend auf dem anfragenden Ursprung als Teil einer Erlaubnisliste ändern kann) anstelle des `*`-Wildcards, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header einschließen, um anzugeben, dass Serverantworten sich je nach dem Wert des {{HTTPHeader("Origin")}}-Request-Headers unterscheiden werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header zur Erlaubnisliste hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, das Folgende:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…würde die `X-My-Custom-Header` und `X-Another-Custom-Header`-Header dem Browser zugänglich machen.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds`-Parameter gibt die Anzahl der Sekunden an, die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage exponiert werden kann, wenn das `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt er an, ob die tatsächliche Anfrage unter Verwendung von Berechtigungen durchgeführt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht überprüft werden, und so, wenn eine Anfrage für eine Ressource mit Berechtigungen gemacht wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, wird die Antwort vom Browser ignoriert und nicht an Webinhalt zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Berechtigte Anfragen](#anfragen_mit_berechtigungen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode(n) an, die beim Zugriff auf die Ressource erlaubt sind. Dieser wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage überprüft wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird verwendet, um als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} anzugeben, welche HTTP-Header verwendet werden dürfen, wenn die tatsächliche Anfrage gemacht wird. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieser Abschnitt listet die Header auf, die Clients verwenden können, wenn sie HTTP-Anfragen stellen, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Aufrufe an Server gemacht werden. Entwickler, die Cross-Origin-Anfragen machen, müssen keine Cross-Origin-Sharing-Anfrage-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprungsbereich der Cross-Origin-Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Er enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Nutzung finden sich [oben.](#preflight-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gestellt wird (zum Beispiel, indem sie als die [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergeben werden). Dieser browserseitige Header wird durch den komplementären serverseitigen Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Nutzung finden sich [oben](#preflight-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Wird es CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS betreibt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung"-Informationen zum Umgang mit gängigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man die CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um das Problem _"Kein Access-Control-Allow-Origin-Header vorhanden"_ zu überwinden
  - Wie man das Problem _"Access-Control-Allow-Origin-Header darf nicht das Wildcard sein"_ behebt
