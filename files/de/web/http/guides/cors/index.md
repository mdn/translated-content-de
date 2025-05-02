---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein Mechanismus, der auf {{Glossary("HTTP", "HTTP")}}-Headern basiert und einem Server ermöglicht, Browsern die Erlaubnis zu geben, Ressourcen von anderen {{Glossary("origin", "Origins")}} (Domain, Schema oder Port) als der eigenen zu laden. CORS baut auch auf einem Mechanismus auf, bei dem Browser eine "Preflight"-Anfrage an den Server stellen, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulässt. Bei dieser Vorabprüfung sendet der Browser Header, die die HTTP-Methode und die in der eigentlichen Anfrage verwendeten Header anzeigen.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Front-End-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, nutzt [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs nutzt, nur Ressourcen von der gleichen Origin anfordern kann, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Origins enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen nutzen CORS?

Dieser [Cross-Origin-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Fälle ermöglichen:

- Aufruf von `fetch()` oder `XMLHttpRequest`, wie oben besprochen.
- Web Fonts (für den Einsatz von Schriftarten über Domains hinweg in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriftarten bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden können, die dies dürfen.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS-Shapes aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert durch Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die es Servern ermöglichen zu beschreiben, welche Origins berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich müssen Browser für HTTP-Anfragemethoden, die Nebeneffekte auf Serverdaten haben können (insbesondere HTTP-Methoden, die nicht {{HTTPMethod("GET")}} sind, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), die Anfrage "vorab prüfen", indem sie die vom Server unterstützten Methoden mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} abfragen und dann, nach Erhalt der "Genehmigung" vom Server, die eigentliche Anfrage senden. Server können auch den Clients mitteilen, ob "Anmeldedaten" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind die Details des Fehlers _nicht für JavaScript verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um zu bestimmen, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers für Details zu überprüfen.

Die folgenden Abschnitte behandeln Szenarien und bieten eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}} aus. Diese werden als _einfache Anfragen_ aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) bezeichnet, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Vorgänger von Cross-Site-`fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ist) einfache Anfragen an jede Origin senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss sich der Server nicht anmelden (indem er auf eine Preflight-Anfrage antwortet), um eine Anfrage zu erhalten, die wie ein Formularversand aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch Formularversand. Allerdings muss der Server dennoch die Antwort mithilfe von {{HTTPHeader("Access-Control-Allow-Origin")}} teilen, um die Antwort mit dem Skript zu teilen.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen** erfüllt:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den vom Benutzer-Agenten automatisch gesetzten Headern (z. B. {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder die {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}}), sind die einzigen Header, die manuell gesetzt werden dürfen, die {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteten Anfrage-Header")}}, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typ/Subtyp-Kombinationen für den im {{HTTPHeader("Content-Type")}}-Header angegebenen {{Glossary("MIME_type", "Medientyp")}} sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt durchgeführt wird, sind keine Ereignis-Listener für das Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft verwendet wird; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Ereignis-Listener hinzuzufügen, um den Upload zu überwachen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview legen zusätzliche Einschränkungen für die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} Headern erlaubten Werte fest. Wenn einer dieser Header "nicht standardmäßige" Werte enthält, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Fehlern:
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://webkit.org/b/165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://webkit.org/b/165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Nehmen wir zum Beispiel an, Web-Inhalte unter `https://foo.example` möchten JSON-Inhalte von der Domain `https://bar.other` abrufen. Code dieser Art könnte in JavaScript verwendet werden, das auf `foo.example` bereitgestellt wird:

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

Der bemerkenswerte Anfrage-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Schauen wir uns nun an, wie der Server antwortet:

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

In der Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Origin aufgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourcenbesitzer von `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken wollten (d.h. keine andere Domain außer `https://foo.example` kann die Ressource auf Cross-Origin-Weise zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Beantwortung einer [anmeldedatenorientierten Anfrage](#anfragen_mit_anmeldedaten) muss der Server **einen** Origin im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt das `*`-Wildcard anzugeben.

### Preflighted-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) schickt der Browser bei "preflighted" Anfragen zuerst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf der anderen Origin, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorab geprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die vorab geprüft wird:

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

Das obige Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anfrage-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber für Webanwendungen allgemein nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt wurde, wird diese Anfrage vorab geprüft.

![Diagramm einer Anfrage, die vorab geprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die eigentliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie sind nur für die `OPTIONS`-Anfrage erforderlich.

Schauen wir uns den vollständigen Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/Antwort_:

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

Der erste Block oben stellt die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser entscheidet, dass er dies basierend auf den Anfrageparametern, die der obige JavaScript-Code-Snippet verwendet hat, senden muss, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei weitere Anfrage-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Preflight-Anfrage, dass, wenn die tatsächliche Anfrage gesendet wird, dies mit einer `POST`-Anfragemethode geschehen wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass, wenn die tatsächliche Anfrage gesendet wird, dies mit `X-PINGOTHER` und `Content-Type` benutzerdefinierten Headern geschehen wird. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, was anzeigt, dass die Anfragemethode (`POST`) und die Anfrageheader (`X-PINGOTHER`) akzeptabel sind. Schauen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur auf die anfordernde Origin-Domain einschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist dem {{HTTPHeader("Allow")}}-Antwort-Header ähnlich, wird jedoch im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass dies die zulässigen Header sind, die mit der tatsächlichen Anfrage verwendet werden können. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine kommagetrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert ist 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen überschreitet.

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

#### Preflighted-Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Weiterleitungen nach einer preflighted-Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage erfolgt, melden einige Browser derzeit eine Fehlermeldung wie die folgende:

> Die Anfrage wurde auf `https://example.com/foo` umgeleitet, was für Cross-Origin-Anfragen, die eine Vorabprüfung erfordern, nicht erlaubt ist.
> Die Anfrage erfordert eine Vorabprüfung, die keine Cross-Origin-Weiterleitungen folgen darf.

Das CORS-Protokoll verlangte ursprünglich dieses Verhalten, wurde jedoch [anschließend geändert, um es nicht mehr zu erfordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich geforderte Verhalten.

Bis die Browser mit der Spezifikation übereinstimmen, können Sie möglicherweise dieses Limit umgehen, indem Sie eine der folgenden Maßnahmen ergreifen:

- Das serverseitige Verhalten ändern, um die Vorabprüfung zu vermeiden und/oder die Weiterleitung zu vermeiden
- Die Anfrage ändern, sodass es sich um eine [einfache Anfrage](#einfache_anfragen) handelt, die keine Vorabprüfung verursacht

Wenn das nicht möglich ist, dann gibt es einen anderen Weg:

1. Eine [einfache Anfrage](#einfache_anfragen) (mittels [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)) stellen, um zu bestimmen, auf welche URL die eigentliche preflighted-Anfrage führen würde.
2. Eine weitere Anfrage (die _tatsächliche_ Anfrage) unter Verwendung der URL stellen, die Sie in Schritt 1 von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn allerdings die Anfrage eine Vorabprüfung aufgrund des Vorhandenseins des `Authorization`-Headers in der Anfrage auslöst, können Sie diese Einschränkung nicht mit den obigen Schritten umgehen. Und Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, zu dem die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Bei der Erstellung von Anfragen mit Anmeldedaten zu einer anderen Domain gelten weiterhin Richtlinien für Drittanbieter-Cookies. Die Richtlinie wird immer durchgesetzt, unabhängig von Konfigurationen auf dem Server und dem Client, wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit, die sowohl durch [`fetch()`](/de/docs/Web/API/Window/fetch) als auch durch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) sowie CORS offenbart wird, ist die Möglichkeit, "anmeldedatenfähige" Anfragen zu stellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen **keine** Anmeldedaten.

Um eine `fetch()`-Anfrage mit Anmeldedaten anzufordern, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage mit Anmeldedaten zu stellen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true`.

In diesem Beispiel fordert Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage an eine Ressource auf `https://bar.other` an, die Cookies setzt. Inhalt auf foo.example könnte JavaScript enthalten wie dieses:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, wobei im Konstruktor die `credentials`-Option auf `"include"` gesetzt wird, und gibt diese Anfrage dann an `fetch()` weiter. Da dies eine einfache GET-Anfrage ist, wird sie nicht vorab geprüft, aber der Browser wird **jede** Antwort ablehnen, die den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header nicht auf `true` setzt, und **diese nicht** für den aufrufenden Webinhalt verfügbar machen.

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und nicht für den Webinhalt verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` geantwortet hat, wie in diesem Beispiel gezeigt.

#### Preflight-Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Der _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` spezifizieren, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldedaten gestellt werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation widerspricht.
>
> Firefox 87 erlaubt dieses nicht-konforme Verhalten, indem die Präferenz `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox Bug 1511151](https://bugzil.la/1511151)). Chromium-basierte Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Anmeldedatenfähige Anfragen und Wildcards

Bei der Beantwortung einer Anfrage mit Anmeldedaten:

- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Origin`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen einen expliziten Origin angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Headers`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Methods`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Expose-Headers`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage eine Anmeldedaten enthält (häufig ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header enthält (d.h. mit dem Wildcard), wird der Browser den Zugriff auf die Antwort blockieren und einen CORS-Fehler in der Entwicklerkonsole melden.

Aber wenn eine Anfrage eine Anmeldedaten enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Origin anstelle des Wildcards enthält (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), dann erlaubt der Browser den Zugriff auf die Antwort von dem angegebenen Origin.

Beachten Sie auch, dass jeder `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das `*`-Wildcard statt eines tatsächlichen Origins ist.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Richtlinien für Drittanbieter-Cookies unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde somit nicht gespeichert werden, wenn der Browser des Benutzers so konfiguriert ist, dass er alle Drittanbieter-Cookies ablehnt.

Das Cookie in der Anfrage kann auch durch normale Richtlinien für Drittanbieter-Cookies unterdrückt werden. Die erzwungene Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Funktionalität außer Kraft setzen und Sie effektiv daran hindern, Anfragen mit Anmeldedaten zu erstellen.

Die Cookie-Richtlinie rund um das [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut würde angewendet.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffskontrollanfragen gemäß der Spezifikation für Cross-Origin Resource Sharing zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` spezifiziert entweder einen einzelnen Origin, der den Browsern mitteilt, diesen Origin auf die Ressource zugreifen zu lassen; oder — für Anfragen **ohne** Anmeldedaten — das `*`-Wildcard, das den Browsern mitteilt, dass jeder Origin auf die Ressource zugreifen darf.

Zum Beispiel können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Falls der Server einen einzelnen Origin anstelle des `*`-Wildcards spezifiziert (der sich dynamisch basierend auf dem anfordernden Origin als Teil einer Erlaubnisliste ändern kann), sollte der Server auch `Origin` in den {{HTTPHeader("Vary")}}-Antwort-Header aufnehmen, um den Clients mitzuteilen, dass Serverantworten sich je nach Wert des {{HTTPHeader("Origin")}}-Anfrage-Headers unterscheiden werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header zur Erlaubnisliste hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, folgendes:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…würde die Header `X-My-Custom-Header` und `X-Another-Custom-Header` dem Browser zugänglich machen.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie oben.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds`-Parameter gibt die Anzahl der Sekunden an, für die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage verfügbar gemacht werden kann, wenn die `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt dies an, ob die eigentliche Anfrage unter Verwendung von Anmeldedaten gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab geprüft werden, und daher, wenn eine Anfrage für eine Ressource mit Anmeldedaten gemacht wird, diese Antwort ignoriert wird, wenn sie nicht mit dem Ressource zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Anmeldedatenorientierte Anfragen](#anfragen_mit_anmeldedaten) sind oben beschrieben.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine preflighted Anfrage genutzt. Die Bedingungen, unter denen eine Anfrage vorab geprüft wird, sind oben beschrieben.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header beim tatsächlichen Anfrage-Request verwendet werden dürfen. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}} des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieser Abschnitt listet Header auf, die Clients bei der Ausgabe von HTTP-Anfragen verwenden können, um die Funktion des Cross-Origin-Sharing zu nutzen. Beachten Sie, dass diese Header automatisch für Sie beim Aufrufen von Servern gesetzt werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anfrage-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header zeigt den Origin der Cross-Origin-Zugriffsanfrage oder der Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Origin ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Er enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird benutzt, wenn eine Preflight-Anfrage gestellt wird, um den Server darüber zu informieren, welche HTTP-Methode verwendet wird, wenn die eigentliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für den Einsatz dieser Methode [finden Sie oben](#preflighted-anfragen).

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird benutzt, um den Server darüber zu informieren, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gestellt wird (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergeben werden). Dieser browserseitige Header wird durch den Komplementär-Server-Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für den Einsatz dieser Methode [finden Sie oben](#preflighted-anfragen).

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
- [Anleitung zur Ausführung des Chrome-Browsers ohne CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung" Informationen zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Anleitung zur Vermeidung der CORS-Vorabprüfung
  - Anleitung zur Verwendung eines CORS-Proxys, um das Problem _"Kein Access-Control-Allow-Origin-Header"_ zu umgehen
  - Anleitung zur Behebung des Problems _"Access-Control-Allow-Origin-Header darf nicht das Wildcard sein"_
