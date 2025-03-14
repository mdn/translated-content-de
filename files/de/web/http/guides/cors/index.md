---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein {{Glossary("HTTP", "HTTP")}}-Header-basierter Mechanismus, der es einem Server ermöglicht, alle {{Glossary("origin", "Quellen")}} (Domain, Schema oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen erlauben soll, die nicht seine eigenen sind. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die tatsächliche Anfrage zulassen wird. In diesem Preflight sendet der Browser Header, die die HTTP-Methode und die Header angeben, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Front-End-JavaScript-Code von `https://domain-a.com` verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel befolgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von der gleichen Quelle anfragen kann, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Quellen enthält die richtigen CORS-Header.

![Diagrammatischer Überblick über den CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mildern.

## Welche Anfragen nutzen CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Zwecke ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web Fonts (für die Nutzung von Schriftarten über Domains hinweg in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriftarten bereitstellen können, die nur cross-origin geladen und von Webseiten verwendet werden können, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Videoframes, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS Shapes aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und beinhaltet eine Diskussion über die notwendigen HTTP-Header.

## Funktionaler Überblick

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzugefügt werden, die Servern erlauben, anzugeben, welche Quellen berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich, für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden, die nicht {{HTTPMethod("GET")}} sind, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), schreibt die Spezifikation vor, dass Browser die Anfrage "vorab untersuchen" (preflight), indem sie unterstützte Methoden vom Server mit der HTTP {{HTTPMethod("OPTIONS")}}-Anfragemethode abrufen und dann, nach Freigabe durch den Server, die eigentliche Anfrage senden. Server können auch darüber informieren, ob "Anmeldeinformationen" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler resultieren in Fehlern, aber aus Sicherheitsgründen sind die Einzelheiten des Fehlers für JavaScript _nicht verfügbar_. Alles, was der Code weiß, ist, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

Nachfolgende Abschnitte behandeln Szenarien und bieten eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugriffsszenarien

Wir präsentieren drei Szenarien, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser cross-origin Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden _einfache Anfragen_ aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) genannt, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die nun CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Cross-Site-[`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorausgeht) einfache Anfragen an jede Quelle senden kann, sodass jeder, der einen Server schreibt, sich bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) schützen muss. Unter dieser Annahme muss der Server sich nicht anmelden (indem er auf eine Preflight-Anfrage antwortet), um jede Anfrage zu erhalten, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch eine Formularübermittlung. Der Server muss jedoch trotzdem using {{HTTPHeader("Access-Control-Allow-Origin")}} opt-in wählen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen** erfüllt:

- Eine der zulässigen Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch durch den Benutzeragenten gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder den {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheadern")}}), dürfen nur die {{Glossary("CORS-safelisted_request_header", "CORS-safe-listed Request-Header")}} manuell gesetzt werden, und zwar:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (beachten Sie bitte die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ-/Subtypkombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} im {{HTTPHeader("Content-Type")}}-Header erlaubt sind, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mithilfe eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts gemacht wird, dürfen keine Ereignis-Listener auf dem durch die [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft zurückgegebenen Objekt registriert werden, das in der Anfrage verwendet wird; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` darf kein Code `xhr.upload.addEventListener()` aufrufen, um einen Ereignis-Listener hinzuzufügen, der den Upload überwacht.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Beschränkungen für die in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} erlaubten Werte. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Anfordern von Preflight für nicht standardmäßige CORS-safelisted Request-Header Accept, Accept-Language und Content-Language](https://webkit.org/b/165178)
> - [Erlauben von Kommata in Accept, Accept-Language und Content-Language-Anforderungsheadern für einfache CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Angenommen, Webinhalte auf `https://foo.example` möchten JSON-Inhalte von der Domain `https://bar.other` abrufen. Solcher Code könnte im JavaScript von `foo.example` verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Diese Operation führt einen einfachen Austausch zwischen dem Client und dem Server durch und verwendet CORS-Header, um die Berechtigungen zu verwalten:

![Diagramm einer einfachen CORS GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Schauen wir uns an, was der Browser in diesem Fall an den Server senden wird:

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

Der bemerkenswerte Anforderungs-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

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

In der Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung aus zugänglich ist.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourceneigentümer auf `https://bar.other` den Zugriff auf die Ressource _nur_ auf Anfragen von `https://foo.example` beschränken möchten (d.h. keine Domain außer `https://foo.example` kann auf die Ressource in einer Cross-Origin-Weise zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Antwort auf eine [anmeldepflichtige Anfrage](#anfragen_mit_anmeldedaten) muss der Server im Wert des `Access-Control-Allow-Origin`-Headers einen Ursprung angeben, statt des `*`-Wildcards.

### Preflighted-Anfragen

Anders als bei [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser für "preflighted" Anfragen zunächst eine HTTP-Anfrage unter Verwendung der {{HTTPMethod("OPTIONS")}}-Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorab kontrolliert (preflighted), da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die vorab kontrolliert wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet wird. Zudem wird ein nicht standardmäßiger HTTP-Anforderungs-Header `X-PINGOTHER` gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber allgemein für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und da ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorab geprüft.

![Diagramm einer Anfrage, die vorab geprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; diese sind nur für die `OPTIONS`-Anfrage erforderlich.

Schauen wir uns den gesamten Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/Antwort_:

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

Der erste Block oben stellt die Vorab-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser entscheidet, dass er dies aufgrund der Anfrageparameter senden muss, die der JavaScript-Code-Snippet oben verwendet hat, sodass der Server antworten kann, ob es zulässig ist, die Anfrage mit den tatsächlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei weitere Anforderungs-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Preflight-Anfrage, dass bei der tatsächlichen Anfrage eine `POST`-Anfragemethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass bei der tatsächlichen Anfrage die benutzerdefinierten Header `X-PINGOTHER` und `Content-Type` verwendet werden. Nun hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, und zeigt an, dass die Anfragemethode (`POST`) und die Anforderungsheader (`X-PINGOTHER`) akzeptabel sind. Schauen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur auf die anfordernde Ursprung-Domain beschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was angibt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ähnelt dem {{HTTPHeader("Allow")}}-Antwort-Header, aber wird streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch 'Access-Control-Allow-Headers' mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass dies erlaubte Header sind, um mit der tatsächlichen Anfrage verwendet zu werden. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine komma-separierte Liste von erlaubten Headern.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, für wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage senden zu müssen. Der Standardwert beträgt 5 Sekunden. In diesem Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen überschreitet.

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

#### Preflighted-Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Weiterleitungen nach einer vorab geprüften Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage erfolgt, werden einige Browser derzeit eine Fehlermeldung wie die folgende melden:

> Die Anfrage wurde zu `https://example.com/foo` weitergeleitet, was für Cross-Origin-Anfragen, die eine Preflight erfordern, nicht erlaubt ist.
> Anfrage erfordert Preflight, was nicht erlaubt ist, um Cross-Origin-Weiterleitungen zu folgen.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde jedoch [nachträglich geändert, um es nicht länger zu erfordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser diese Änderung implementiert und zeigen daher noch das ursprünglich geforderte Verhalten.

Bis die Browser mit der Spezifikation aufholen, können Sie dieses Problem umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das Verhalten auf der Serverseite, um die Preflight zu vermeiden und/oder um die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage so, dass es sich um eine [einfache Anfrage](#einfache_anfragen) handelt, die keine Preflight auslöst

Wenn das nicht möglich ist, dann gibt es eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, welche URL die tatsächliche vorab geprüfte Anfrage erreichen würde.
2. Machen Sie eine weitere Anfrage (die _eigentliche_ Anfrage), indem Sie die URL verwenden, die Sie aus `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Wenn die Anfrage jedoch aufgrund des Vorhandenseins des `Authorization`-Headers in der Anfrage eine Preflight auslöst, können Sie das Problem mit den oben genannten Schritten nicht umgehen. Und Sie können es überhaupt nicht umgehen, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gestellt wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Bei der Erstellung von Anfragen mit Anmeldedaten zu einer anderen Domain gelten immer noch Richtlinien für Drittanbieter-Cookies. Die Richtlinie wird immer durchgesetzt, unabhängig von irgendeiner Einrichtung auf dem Server und dem Client wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit, die sowohl durch [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch durch CORS freigelegt wird, ist die Möglichkeit, "anmeldungspflichtige" Anfragen durchzuführen, die über [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsdaten Bescheid wissen. Standardmäßig schicken Browser bei cross-origin `fetch()` oder `XMLHttpRequest` Anfragen _keine_ Anmeldedaten.

Um bei einer `fetch()`-Anfrage Anmeldedaten anzufordern, setzen Sie die Option [`credentials`](/de/docs/Web/API/RequestInit#credentials) auf `"include"`.

Um bei einer `XMLHttpRequest`-Anfrage Anmeldedaten anzufordern, setzen Sie die Eigenschaft [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) auf `true`.

In diesem Beispiel macht der Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalte auf foo.example könnten JavaScript-Code wie diesen enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, das die Option `credentials` im Konstruktor auf `"include"` setzt, und übergibt diese Anfrage dann an `fetch()`. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorab kontrolliert, aber der Browser **wird** jede Antwort ablehnen, die nicht das Header {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` hat, und wird **nicht** die Antwort für den aufrufenden Webinhalt verfügbar machen.

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

Obwohl der `Cookie`-Header der Anfrage das für `https://bar.other` bestimmte Cookie enthält, würde die Antwort ignoriert und nicht für den Webinhalt verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortet, wie in diesem Beispiel gezeigt.

#### Preflight-Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die eigentliche Anfrage mit Anmeldedaten gemacht werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was dem [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) entgegensteht.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, indem die Einstellung: `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox bug 1511151](https://bugzil.la/1511151)). Auf Chromium-basierenden Browsern werden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen gesendet ([Chrome bug 775438](https://crbug.com/775438)).

#### Anmeldepflichtige Anfragen und Wildcards

Beim Beantworten einer anmeldepflichtigen Anfrage:

- Der Server **darf nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Allow-Origin` angeben, sondern muss einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Allow-Headers` angeben, sondern muss eine explizite Liste von Headernamen angeben; zum Beispiel: `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Allow-Methods` angeben, sondern muss eine explizite Liste von Methodennamen angeben; zum Beispiel: `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den Wert des Antwort-Headers `Access-Control-Expose-Headers` angeben, sondern muss eine explizite Liste von Headernamen angeben; zum Beispiel: `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage eine Anmeldedaten enthält (am häufigsten ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header enthält (d.h. mit dem

Wildcard), blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklerkonsole.

Wenn eine Anfrage jedoch Anmeldedaten enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung statt des Wildcards enthält (wie z.B. `Access-Control-Allow-Origin: https://example.com`), erlaubt der Browser den Zugriff auf die Antwort vom angegebenen Ursprung.

Außerdem würde ein `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das `*`-Wildcard statt eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Richtlinien für Drittanbieter-Cookies unterliegen. In dem oben genannten Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass er alle Drittanbieter-Cookies ablehnt.

Das Cookie in der Anfrage kann auch bei normalen Richtlinien für Drittanbieter-Cookies unterdrückt werden. Die erzwungene Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Fähigkeit außer Kraft setzen und effektiv verhindern, dass Sie anmeldepflichtige Anfragen überhaupt erstellen können.

Die Cookie-Richtlinie bezüglich des [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attributs würde gelten.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der den Browsern mitteilt, diesen Ursprung den Zugriff auf die Ressource zu erlauben, oder – für Anfragen **ohne** Anmeldedaten – der `*`-Wildcard erlaubt es Browsern, jedem Ursprung den Zugriff auf die Ressource zu erlauben.

Zum Beispiel, um Code von der Quelle `https://mozilla.org` den Zugriff auf die Ressource zu erlauben, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der dynamisch basierend auf dem anfordernden Ursprung als Teil einer Erlaubensliste geändert werden kann) anstatt des `*`-Wildcards, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header einschließen, um den Kunden mitzuteilen, dass Serverantworten abhängig vom Wert des {{HTTPHeader("Origin")}}-Anforderungs-Headers unterschiedlich sein werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header zur Erlaubensliste hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, das folgende:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…würde es dem Browser erlauben, die Header `X-My-Custom-Header` und `X-Another-Custom-Header` anzuzeigen.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der Parameter `delta-seconds` gibt die Anzahl der Sekunden an, für die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header zeigt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt dies an, ob die tatsächliche Anfrage mit Anmeldedaten gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab geprüft werden, und wenn eine Anfrage nach einer Ressource mit Anmeldedaten gemacht wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, wird die Antwort vom Browser ignoriert und nicht dem Webinhalt zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Anmeldepflichtige Anfragen](#anfragen_mit_anmeldedaten) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource erlaubt sind. Dieser wird in der Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab geprüft wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird in der Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header verwendet werden können, wenn die tatsächliche Anfrage gemacht wird. Dieser Header ist die Serverseite-Antwort auf den Browser-Header {{HTTPHeader("Access-Control-Request-Headers")}}.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungs-Header

Dieser Abschnitt listet die Header auf, die Kunden bei der Ausgabe von HTTP-Anfragen verwenden können, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Aufrufe an Server gemacht werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anforderungs-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder der Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Es enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird bei der Ausgabe einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gemacht wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung finden Sie [oben.](#preflighted-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird bei der Ausgabe einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gemacht wird (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers)-Option übergeben werden). Dieser Browser-Seiten-Header wird durch den komplementären Server-Seiten-Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung können [oben gefunden werden](#preflighted-anfragen).

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
- [Anleitung zum Ausführen des Chrome-Browsers ohne CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung"-Infos zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - So vermeidet man die CORS-Preflight
  - So verwenden Sie einen CORS-Proxy, um das Problem _"No Access-Control-Allow-Origin header"_ zu umgehen
  - So beheben Sie das Problem _"Access-Control-Allow-Origin header must not be the wildcard"_
