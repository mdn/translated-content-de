---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der es einem Server ermöglicht, alle {{Glossary("origin", "Origin")}} (Domain, Schema oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen zulassen soll, die nicht von ihm selbst stammen. CORS basiert auch auf einem Mechanismus, bei dem Browser eine "Voranfrage" an den Server senden, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulassen wird. In dieser Voranfrage sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Front-End-JavaScript-Code, der von `https://domain-a.com` geliefert wird, nutzt [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von derselben Domain anfordern kann, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Domains enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen ermöglichen für:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web Fonts (für die Verwendung von Schriftarten über Domains hinweg in `@font-face` innerhalb von CSS), wie in den [Schriftanforderungen beschrieben](https://drafts.csswg.org/css-fonts/#font-fetching-requirements), sodass Server TrueType-Schriftarten bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS Shapes von Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion der erforderlichen HTTP-Header.

## Funktionaler Überblick

Der Cross-Origin Resource Sharing-Standard funktioniert, indem er neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzufügt, die es Servern ermöglichen zu beschreiben, welche Origins berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich zu den HTTP-Anfrage-Methoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden, die nicht {{HTTPMethod("GET")}} sind, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), verlangt die Spezifikation, dass Browser die Anfrage "voranfragen" und unterstützte Methoden vom Server mit der HTTP {{HTTPMethod("OPTIONS")}}-Anfragemethode soliciten und nach "Genehmigung" durch den Server die eigentliche Anfrage senden. Server können auch Kunden darüber informieren, ob "Credentials" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind spezifische Informationen über den Fehler _nicht für JavaScript verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgegangen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

In den folgenden Abschnitten werden Szenarien diskutiert sowie eine Aufschlüsselung der verwendeten HTTP-Header vorgenommen.

## Beispiele für Zugriffskontrollszenarien

Es werden drei Szenarien vorgestellt, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das Cross-Origin-Anfragen in jedem unterstützenden Browser ermöglichen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Voranfrage")}} aus. Diese werden als _einfache Anfragen_ bezeichnet, aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Der Grundgedanke ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Cross-Site-`fetch()` und `XMLHttpRequest` vorangeht) einfache Anfragen an jede Origin senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss der Server nicht einwilligen (durch Antworten auf eine Voranfrage), um eine Anfrage zu erhalten, die wie ein Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die eines Formulars. Der Server muss jedoch immer noch über {{HTTPHeader("Access-Control-Allow-Origin")}} einwilligen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **all diese Bedingungen erfüllt**:

- Eine der erlaubten Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den vom User-Agent automatisch gesetzten Headern (z.B. {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder den {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Headern")}}) sind die einzigen Header, die manuell gesetzt werden dürfen, die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request-headers")}}, die sind:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Bereichs-Headerwert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typ-/Subtype-Kombinationen für den {{Glossary("MIME_type", "Media-Typ")}}, der im {{HTTPHeader("Content-Type")}}-Header angegeben ist, sind:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage über ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gestellt wird, sind keine Ereignis-Lister auf dem durch die Anfrage verwendeten Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft zurückgegeben wird; das heißt, bei einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Instanz `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener zur Überwachung des Uploads hinzuzufügen.
- Es wird kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview schränken die erlaubten Werte in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} weiter ein. Falls einer dieser Header "nicht standardmäßige" Werte enthält, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" ansehen, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Preflight für nicht-standardmäßige CORS-safelisted-Anfrageheader Accept, Accept-Language und Content-Language erforderlich machen](https://webkit.org/b/165178)
> - [Kommas in Accept, Accept-Language und Content-Language-Anfrageheadern für einfache CORS erlauben](https://webkit.org/b/165566)
> - [Zur Blacklist-Modell wechseln für eingeschränkte Accept-Header bei einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Angenommen, Webinhalte auf `https://foo.example` möchten JSON-Inhalte von der Domain `https://bar.other` abrufen. Solcher Code könnte in JavaScript, das auf `foo.example` bereitgestellt wird, verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Diese Operation führt einen einfachen Austausch zwischen dem Client und dem Server durch, indem CORS-Header verwendet werden, um die Berechtigungen zu handhaben:

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

Der hervorzuhebende Anfrage-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Sehen wir uns nun an, wie der Server darauf reagiert:

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass auf die Ressource von **jedem** Origin zugegriffen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffssteuerungsprotokolls. Wenn die Ressourceninhaber auf `https://bar.other` den Zugriff auf die Ressource nur auf Anfragen _ausschließlich_ von `https://foo.example` einschränken möchten (d.h. keine Domain außer `https://foo.example` darf in einer Cross-Origin-Manner auf die Ressource zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Beim Antworten auf eine [Anfrage mit Anmeldedaten](#anfragen_mit_anmeldedaten) muss der Server **einen Origin** im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt den `*`-Platzhalter anzugeben.

### Vorabgeprüfte Anfragen

Anders als [_einfache Anfragen_](#einfache_anfragen) sendet der Browser bei "vorabgeprüften" Anfragen zuerst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf dem anderen Origin, um festzustellen, ob die eigentliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorabgeprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Folgendes ist ein Beispiel für eine Anfrage, die vorabgeprüft wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet wird. Außerdem wird ein nicht-standardmäßiger HTTP-`X-PINGOTHER`-Anfrage-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber im Allgemeinen nützlich für Webanwendungen. Da die Anfrage ein `Content-Type` von `text/xml` verwendet und da ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage vorabgeprüft.

![Diagramm einer vorabgeprüften Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die eigentliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie werden nur für die `OPTIONS`-Anfrage benötigt.

Lassen Sie uns den vollständigen Austausch zwischen Client und Server betrachten. Der erste Austausch ist die _vorabgeprüfte Anfrage/Antwort_:

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

Der erste Block oben stellt die Vorab-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser stellt fest, dass dies basierend auf den Anfrageparametern gesendet werden muss, die der JavaScript-Codeausschnitt oben verwendet hat, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei weitere Anfrageheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Vorab-Anfrage, dass, wenn die eigentliche Anfrage gesendet wird, dies mit einer `POST`-Anfrag-Methode geschieht. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass, wenn die eigentliche Anfrage gesendet wird, dies mit den benutzerdefinierten Headern `X-PINGOTHER` und `Content-Type` geschieht. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, der angibt, dass die Anfragemethode (`POST`) und die Anfrageheader (`X-PINGOTHER`) akzeptabel sind. Schauen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, um den Zugriff auf die anfordernde Origin-Domain zu beschränken. Er antwortet auch mit `Access-Control-Allow-Methods`, welches besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist ähnlich dem {{HTTPHeader("Allow")}}-Antwortheader, wird jedoch streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit dem Wert `X-PINGOTHER, Content-Type`, was bestätigt, dass diese Header im Rahmen der tatsächlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, für wie lange die Antwort auf die Vorab-Anfrage ohne erneute Vorab-Anfrage zwischengespeichert werden kann. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (24 Stunden). Beachten Sie, dass jeder Browser einen [internen Maximalwert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` ihn überschreitet.

Sobald die Vorab-Anfrage abgeschlossen ist, wird die eigentliche Anfrage gesendet:

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

#### Vorabgeprüfte Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Verfolgen von Weiterleitungen nach einer vorabgeprüften Anfrage. Wenn nach einer solchen Anfrage eine Umleitung erfolgt, werden einige Browser derzeit eine Fehlermeldung wie die folgende melden:

> Die Anfrage wurde an `https://example.com/foo` umgeleitet, was für Cross-Origin-Anfragen, die eine Vorab-Prüfung erfordern, nicht zulässig ist.
> Anfrage erfordert Vorab-Prüfung, die nicht zulässig ist, um Cross-Origin-Umleitungen zu folgen.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde aber [anschließend geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben noch nicht alle Browser die Änderung implementiert und zeigen daher noch das ursprünglich erforderliche Verhalten.

Bis die Browser mit der Spezifikation Schritt halten, können Sie möglicherweise dieses Problem umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das serverseitige Verhalten, um die Vorabprüfung zu vermeiden und/oder die Umleitung zu vermeiden
- Ändern Sie die Anfrage so, dass es sich um eine [einfache Anfrage](#einfache_anfragen) handelt, die keine Vorab-Prüfung verursacht

Wenn das nicht möglich ist, besteht eine andere Möglichkeit darin:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um festzustellen, an welcher URL die eigentliche vorabgeprüfte Anfrage enden würde.
2. Machen Sie eine weitere Anfrage (die _eigentliche_ Anfrage) unter Verwendung der URL, die Sie in `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Wenn die Anfrage jedoch eine Vorab-Prüfung auslöst, die durch das Vorhandensein des `Authorization`-Headers in der Anfrage verursacht wird, können Sie die Einschränkung nicht mit den obigen Schritten umgehen. Und Sie werden es überhaupt nicht umgangen können, es sei denn, Sie haben Kontrolle über den Server, auf den die Anfrage durchgeführt wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Wenn Anfragen mit Anmeldedaten an eine andere Domain gemacht werden, gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer durchgesetzt, unabhängig von jeder Einrichtung auf dem Server und dem Client, wie in diesem Kapitel beschrieben.

Das interessanteste Feature, das sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch von CORS bereitgestellt wird, ist die Fähigkeit, "anmeldedatenbezogene" Anfragen zu machen, die sich [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldedaten.

Um eine `fetch()`-Anfrage zu bitten, Anmeldedaten einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu bitten, Anmeldedaten einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true`.

In diesem Beispiel lädt Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage zu einer Ressource auf `https://bar.other`, die Cookies setzt. Inhalte auf foo.example könnten JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, indem die `credentials`-Option auf `"include"` im Konstruktor gesetzt wird, und übergibt dann diese Anfrage an `fetch()`. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorabgeprüft, aber der Browser wird **jede Antwort ablehnen**, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header auf `true` gesetzt hat, und **macht** die Antwort nicht für den aufrufenden Webinhalt verfügbar.

![Diagramm einer GET-Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

Hier ist ein Beispiel für den Austausch zwischen Client und Server:

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für die Inhalte auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und nicht für die Webinhalte verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit Wert `true` antwortet, wie in diesem Beispiel demonstriert.

#### Vorabgeprüfte Anfragen und Anmeldedaten

CORS-Voranfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Voranfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die eigentliche Anfrage mit Anmeldedaten gemacht werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste verlangen, dass TLS-Clientzertifikate in Vorab-Anfragen gesendet werden, entgegen der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, indem die Präferenz `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Clientzertifikate in CORS-Voranfragen ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Anmeldedatenbezogene Anfragen und Platzhalter

Bei der Antwort auf eine Anfrage mit Anmeldedaten:

- Der Server darf den `*`-Platzhalter nicht für den `Access-Control-Allow-Origin`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen einen expliziten Origin angeben, zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server darf den `*`-Platzhalter nicht für den `Access-Control-Allow-Headers`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben, zum Beispiel `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server darf den `*`-Platzhalter nicht für den `Access-Control-Allow-Methods`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Methodennamen angeben, zum Beispiel `Access-Control-Allow-Methods: POST, GET`
- Der Server darf den `*`-Platzhalter nicht für den `Access-Control-Expose-Headers`-Antwort-Header-Wert spezifizieren, sondern muss stattdessen eine explizite Liste von Header-Namen angeben, zum Beispiel `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldedatum enthält (meistens einen `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header enthält (das heißt mit dem Platzhalter), blockiert der Browser den Zugriff auf die Antwort und gibt einen CORS-Fehler in der Entwicklertools-Konsole aus.

Wenn eine Anfrage jedoch ein Anmeldedatum enthält (wie der `Cookie`-Header) und die Antwort einen tatsächlichen Origin anstelle des Platzhalters enthält (beispielsweise `Access-Control-Allow-Origin: https://example.com`), dann erlaubt der Browser den Zugriff auf die Antwort von dem angegebenen Origin.

Außerdem beachten Sie, dass ein `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort der `*`-Platzhalter ist und nicht ein tatsächlicher Origin.

#### Cookies von Drittanbietern

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Drittanbieter-Cookie-Richtlinien unterliegen. In dem obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Set-Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookies, die in CORS-Anfragen und -Antworten gesetzt werden, unterliegen den normalen Drittanbieter-Cookie-Richtlinien.

Drittanbieter-Cookie-Richtlinien können verhindern, dass Drittanbieter-Cookies in Anfragen gesendet werden und somit eine Site daran hindern, Anfragen mit Anmeldedaten zu machen, selbst wenn dies durch den Drittanbieter-Server erlaubt ist (unter Verwendung von `Access-Control-Allow-Credentials`).
Die Standardrichtlinie unterscheidet sich zwischen Browsern, kann aber mit dem [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut festgelegt werden.

Selbst wenn Anfragen mit Anmeldedaten erlaubt sind, kann ein Browser so konfiguriert sein, dass alle Drittanbieter-Cookies in Antworten abgelehnt werden.

## Die HTTP-Antwort-Header

Dieses Kapitel listet die HTTP-Antwort-Header auf, die Server für Zugriffssteuerungsanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese im Einsatz.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Origin an, der Browsern mitteilt, dass dieser Origin auf die Ressource zugreifen darf, oder – für Anfragen ohne Anmeldedaten – den `*`-Platzhalter, der Browsern mitteilt, dass jeder Origin auf die Ressource zugreifen darf.

Zum Beispiel, um Code aus dem Origin `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie Folgendes angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Origin angibt (der sich basierend auf dem anfordernden Origin als Teil einer Allowlist dynamisch ändern kann) statt des `*`-Platzhalters, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header aufnehmen, um den Clients anzuzeigen, dass die Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anfrage-Headers variieren werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header zur Allowlist hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde das Folgende die Header `X-My-Custom-Header` und `X-Another-Custom-Header` erlauben, dem Browser offengelegt zu werden:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Vorab-Anfrage zwischengespeichert werden dürfen. Für ein Beispiel einer Vorab-Anfrage siehe die obigen Beispiele.

```http
Access-Control-Max-Age: <delta-seconds>
```

Das `delta-seconds`-Parameter gibt die Anzahl der Sekunden an, die die Ergebnisse zwischengespeichert werden dürfen.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag auf wahr gesetzt ist. Wenn er als Teil einer Antwort auf eine Vorab-Anfrage verwendet wird, gibt dies an, ob die eigentliche Anfrage mit Anmeldedaten gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorabgeprüft werden und wenn eine Anfrage für eine Ressource mit Anmeldedaten gemacht wird, wird die Antwort vom Browser ignoriert und nicht an den Webinhalt zurückgegeben, wenn dieser Header nicht mit der Ressource zurückkehrt.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldedaten](#anfragen_mit_anmeldedaten) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource erlaubt sind. Dieser wird als Antwort auf eine Vorab-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorabgeprüft wird, sind oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Voranfrage")}} wurde oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Voranfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die serverseitige Antwort auf den vom Browser gesendeten {{HTTPHeader("Access-Control-Request-Headers")}}-Header.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieses Kapitel listet Header auf, die Clients verwenden können, wenn sie HTTP-Anfragen stellen, um die funktionsübergreifende Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Aufrufe an Server machen. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anfrageheader programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanforderung oder Vorab-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Sie enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffssteuerungsanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird bei der Ausgabe einer Vorab-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode beim Machen der tatsächlichen Anfrage verwendet wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung können [oben gefunden werden.](#vorabgeprüfte_anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird bei der Ausgabe einer Vorab-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header beim Machen der tatsächlichen Anfrage verwendet werden (zum Beispiel, indem sie als die [`headers`](/de/docs/Web/API/RequestInit#headers)-Option übergeben werden). Dieser browserseitige Header wird durch den komplementären serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung können [oben gefunden werden](#vorabgeprüfte_anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [Enable CORS: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer und -Generator
- [Anleitung zum Ausführen von Chrome-Browser ohne CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung" zur Lösung häufiger Probleme](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man die CORS-Voranfrage vermeidet
  - Wie man einen CORS-Proxy verwendet, um das "Kein Access-Control-Allow-Origin-Header"-Problem zu umgehen
  - Wie man das Problem "Access-Control-Allow-Origin-Header darf nicht der Platzhalter sein" behebt
