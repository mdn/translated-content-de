---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der einem Server ermöglicht anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer der eigenen ein Browser erlauben soll, um Ressourcen zu laden. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulassen wird. In diesem Preflight sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der JavaScript-Code im Front-End, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen schränken Browser initiierte Cross-Origin-HTTP-Anfragen aus Skripten ein. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von dem gleichen Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatisches Schema des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Standard für Cross-Origin-Sharing](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Aktionen ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben besprochen.
- Web-Fonts (für die domainübergreifende Verwendung von Schriftarten in `@font-face` innerhalb von CSS), wie in den [Anforderungen an das Schriftartenabrufen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, sodass Server TrueType-Schriftarten bereitstellen können, die nur cross-origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und umfasst eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert durch das Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), die Servern ermöglichen, zu beschreiben, welche Ursprünge berechtigt sind, Informationen von einem Webbrowser zu lesen. Zusätzlich dazu verlangt die Spezifikation für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden andere als {{HTTPMethod("GET")}}, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), dass Browser die Anfrage in einem "Preflight" überprüfen, indem sie die unterstützten Methoden mit der HTTP {{HTTPMethod("OPTIONS")}}-Anfragemethode beim Server anfordern und dann die eigentliche Anfrage senden, nachdem der Server zugestimmt hat. Server können auch den Clients mitteilen, ob "Anmeldeinformationen" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind Einzelheiten zu dem Fehler _für JavaScript nicht verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgegangen ist, besteht darin, sich die Konsole des Browsers anzusehen.

In den nachfolgenden Abschnitten werden Szenarien diskutiert und die verwendeten HTTP-Header aufgeschlüsselt.

## Beispiele für Zugriffssteuerungsszenarien

Wir präsentieren drei Szenarien, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das Cross-Origin-Anfragen in jedem unterstützenden Browser stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden nach der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) _einfache Anfragen_ genannt, obwohl der [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Der Grundgedanke ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das cross-site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorausgeht) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site request forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss der Server nicht zustimmen (durch das Antworten auf eine Preflight-Anfrage), jede Anfrage zu erhalten, die wie ein Formularversand aussieht, da die Bedrohung durch CSRF nicht schlimmer als die eines Formularversands ist. Der Server muss jedoch weiterhin mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den vom Benutzeragenten automatisch gesetzten Headern (z. B. {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder den {{Glossary("Forbidden_request_header", "verbotenen Anforderungs-Headern")}}) sind die einzigen Header, die manuell gesetzt werden dürfen, die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request-headers")}}, die sind:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzigen Range-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ/Subtyp-Kombinationen, die für den im {{HTTPHeader("Content-Type")}}-Header angegebenen {{Glossary("MIME_type", "Medientyp")}} erlaubt sind, sind:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gemacht wird, sind keine Ereignislistener auf dem Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft verwendet wird; das heißt, kein Code hat `xhr.upload.addEventListener()` aufgerufen, um einen Eventlistener hinzuzufügen, der den Upload überwacht, gegeben ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Instanz `xhr`.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Beschränkungen für die in den {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} Headern erlaubten Werte. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://webkit.org/b/165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://webkit.org/b/165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Angenommen, Webinhalt unter `https://foo.example` möchte JSON-Inhalt von der Domain `https://bar.other` abrufen. Ähnlicher Code könnte in JavaScript auf `foo.example` eingesetzt sein:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Diese Operation führt einen einfachen Austausch zwischen dem Client und dem Server durch, wobei CORS-Header verwendet werden, um die Berechtigungen zu regeln:

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

Der bemerkenswerte Anforderungs-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Sehen wir nun, wie der Server antwortet:

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

In der Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass auf die Ressource von **jedem** Ursprung zugegriffen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}} Header ist die einfachste Nutzung des Zugriffssteuerungsprotokolls. Wenn die Ressourcenbesitzer bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` (d.h. keine andere Domain als `https://foo.example` kann in einer Cross-Origin-Weise auf die Ressource zugreifen) beschränken möchten, würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Beantwortung einer [anmeldedatengesicherten Anfrage](#anfragen_mit_anmeldeinformationen) muss der Server im Wert des `Access-Control-Allow-Origin` Headers einen Ursprung angeben, anstatt das `*`-Wildcard zu verwenden.

### Preflighted Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "preflighted" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher zu senden ist. Solche Cross-Origin-Anfragen sind vorab ausgelöst, da sie Auswirkungen auf Benutzerdaten haben können.

Im Folgenden ist ein Beispiel für eine Anfrage, die vorab überprüft wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht standardmäßiger HTTP `X-PINGOTHER` Anforderungs-Header gesetzt. Solche Header sind kein Teil von HTTP/1.1, aber für Webanwendungen im Allgemeinen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und da ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorab überprüft.

![Diagramm einer Anfrage, die vorab geprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die eigentliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; diese sind nur für die `OPTIONS`-Anfrage erforderlich.

Schauen wir uns den vollständigen Austausch zwischen dem Client und dem Server an. Der erste Austausch ist die _Preflight-Anfrage/Antwort_:

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

Der erste Block oben repräsentiert die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}} Methode. Der Browser entscheidet anhand der Anforderungsparameter, die der im vorherigen Abschnitt verwendete JavaScript-Code-Snippet verwendet, dass er diese senden muss, sodass der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht genutzt werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anforderungs-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}} Header informiert den Server als Teil einer Preflight-Anfrage darüber, dass beim Senden der tatsächlichen Anfrage eine `POST` Anfragemethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}} Header informiert den Server darüber, dass beim Senden der tatsächlichen Anfrage `X-PINGOTHER` und `Content-Type` benutzerdefinierte Header verwendet werden. Nun hat der Server die Möglichkeit festzustellen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurücksendet und angibt, dass die Anfragemethode (`POST`) und die Anforderungs-Header (`X-PINGOTHER`) akzeptabel sind. Betrachten wir näher die folgenden Zeilen:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, wodurch der Zugriff auf die anfordernde Ursprung Domain beschränkt wird. Er antwortet auch mit `Access-Control-Allow-Methods`, das besagt, dass `POST` und `GET` gültige Methoden sind, um die Ressource in Frage zu stellen (dieser Header ist ähnlich dem {{HTTPHeader("Allow")}} Antwort-Header, wird aber streng im Kontext der Zugriffssteuerung verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass dies zulässige Header sind, die mit der eigentlichen Anfrage verwendet werden können. Wie `Access-Control-Allow-Methods`, ist `Access-Control-Allow-Headers` eine kommagetrennte Liste von akzeptablen Headern.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage ohne Senden einer weiteren Preflight-Anfrage zwischengespeichert werden kann. Der Standardwert beträgt 5 Sekunden. Im gegenwärtigen Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn die `Access-Control-Max-Age` diesen überschreitet.

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

#### Preflighted Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Weiterleitungen nach einer vorübergehenden Anfrage. Wenn nach einer solchen Anfrage eine Weiterleitung auftritt, melden einige Browser derzeit eine Fehlermeldung wie folgende:

> Die Anfrage wurde nach `https://example.com/foo` umgeleitet, was für Cross-Origin-Anfragen nicht zulässig ist, die ein Preflight erfordern.
> Die Anfrage erfordert Preflight, das nicht folgen darf Cross-Origin-Weiterleitungen.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde jedoch [später geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Nicht alle Browser haben die Änderung implementiert und halten daher weiterhin das ursprünglich geforderte Verhalten aufrecht.

Bis die Browser mit der Spezifikation aufgeholt haben, können Sie möglicherweise diese Einschränkung umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das serverseitige Verhalten, um das Preflight zu vermeiden und/oder die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage so, dass sie eine [einfache Anfrage](#einfache_anfragen) ist, die kein Preflight verursacht

Wenn das nicht möglich ist, dann ist eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um herauszufinden, an welche URL die tatsächliche vorabgeprüfte Anfrage gelangen würde.
2. Machen Sie eine weitere Anfrage (die _tatsächliche_ Anfrage) unter Verwendung der URL, die Sie aus `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Wenn die Anfrage jedoch die Anforderung eines Präflights wegen der Existenz des `Authorization` Headers in der Anfrage auslöst, können Sie die Einschränkung nicht mit den oben beschriebenen Schritten umgehen. Und Sie können es überhaupt nicht umgehen, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gestellt wird.

### Anfragen mit Anmeldeinformationen

> [!NOTE]
> Bei der Ausführung von Anfragen mit Anmeldeinformationen zu einer anderen Domain gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer unabhängig von allen auf dem Server und dem Client beschriebenen Einstellungen durchgesetzt.

Die interessanteste Fähigkeit, die sowohl durch [`fetch()`](/de/docs/Web/API/Window/fetch) als auch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS freigelegt wird, ist die Möglichkeit, "anmeldedatumsgestützte" Anfragen zu stellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser keine Anmeldeinformationen bei Cross-Origin `fetch()` oder `XMLHttpRequest` Aufrufen.

Um eine `fetch()`-Anfrage zu stellen, die Anmeldeinformationen enthält, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu stellen, die Anmeldeinformationen enthält, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel fordert der ursprünglich von `https://foo.example` geladene Inhalt eine GET-Anfrage zu einer Ressource auf `https://bar.other` an, die Cookies setzt. Der Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request) Objekt, bei dem die `credentials` Option im Konstruktor auf `"include"` gesetzt wird, und übergibt diese Anfrage dann an `fetch()`. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorab überprüft, aber der Browser wird **jede** Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}} Header mit dem Wert `true` enthält, und macht die Antwort **nicht** für den aufrufenden Web-Inhalt verfügbar.

![Diagramm einer GET-Anforderung mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

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

Obwohl der `Cookie`-Header der Anfrage den für den Inhalt auf `https://bar.other` bestimmten Cookie enthält, würde die Antwort ignoriert und dem Web-Inhalt nicht zur Verfügung gestellt werden, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antworten würde, wie in diesem Beispiel demonstriert.

#### Preflight-Anfragen und Anmeldeinformationen

CORS-Preflight-Anfragen dürfen niemals Anmeldeinformationen enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldeinformationen gesendet werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was der [Fetch-Spezifikation](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) widerspricht.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten durch Setzen der Voreinstellung: `network.cors_preflight.allow_client_cert` auf `true` ([Firefox Bug 1511151](https://bugzil.la/1511151)). Chromium-basierte Browser senden derzeit immer TLS-Client-Zertifikate in CORS Preflight-Anfragen ([Chrome Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldeinformationen und Wildcards

Bei der Beantwortung einer Anforderung mit Anmeldeinformationen:

- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Origin`-Antwort-Header-Wert angeben, muss stattdessen aber einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Headers`-Antwort-Header-Wert angeben, muss stattdessen aber eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Methods`-Antwort-Header-Wert angeben, muss stattdessen aber eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Expose-Headers`-Antwort-Header-Wert angeben, muss stattdessen aber eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldeinformation (meistens ein `Cookie`-Header) enthält und die Antwort ein `Access-Control-Allow-Origin: *`-Header enthält (also mit dem Wildcard), wird der Browser den Zugriff auf die Antwort blockieren und einen CORS-Fehler in der Entwicklertools-Konsole melden.

Wenn eine Anfrage jedoch eine Anmeldedaten (wie etwa den `Cookie`-Header) enthält und die Antwort einen tatsächlichen Ursprung anstelle des Wildcards enthält (wie zum Beispiel `Access-Control-Allow-Origin: https://example.com`), erlaubt der Browser den Zugriff auf die Antwort vom angegebenen Ursprung.

Beachten Sie auch, dass jeder `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin` Wert in dieser Antwort der `*`-Wildcard anstelle eines tatsächlichen Ursprungs wäre.

#### Cookies von Drittanbietern

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt sind, den normalen Cookies-von-Drittanbietern-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, der `Cookie`-Header in der Antwort wird jedoch von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass er alle Drittanbieter-Cookies ablehnt.

Cookies in der Anfrage können auch in normalen Cookies-von-Drittanbietern-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Fähigkeit aufheben, was Sie daran hindert, überhaupt Anfragen mit Anmeldeinformationen zu stellen.

Die Cookie-Richtlinie rund um das [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut würde gelten.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffssteuerungsanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick, wie diese in Aktion verwendet werden.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax enthalten:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der Browsern erlaubt, diesen Ursprung den Zugriff auf die Ressource zu gestatten; oder — bei Anfragen **ohne** Anmeldedaten — das `*`-Wildcard, das Browsern erlaubt, jedem Ursprung den Zugriff auf die Ressource zu gestatten.

Zum Beispiel, um dem Code vom Ursprung `https://mozilla.org` zu erlauben, auf die Ressource zuzugreifen, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der basierend auf dem anfordernden Ursprung als Teil einer Erlaubnisliste dynamisch geändert werden kann) anstelle des `*`-Wildcards, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header aufnehmen, um den Clients anzuzeigen, dass Serverantworten je nach Wert des {{HTTPHeader("Origin")}}-Anforderungs-Headers unterschiedlich sein werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header zur Erlaubnisliste hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, folgendes würde den Zugriff auf die Header `X-My-Custom-Header` und `X-Another-Custom-Header` für den Browser erlauben:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Für ein Beispiel einer Preflight-Anfrage siehe die obigen Beispiele.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der Parameter `delta-seconds` gibt an, wie viele Sekunden die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag wahr ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, zeigt dieser an, ob die eigentliche Anfrage mit Anmeldedaten gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab geprüft werden und wenn daher eine Anfrage für eine Ressource mit Anmeldedaten gemacht wird und dieser Header nicht mit der Ressource zurückgegeben wird, die Antwort vom Browser ignoriert wird und nicht an Web-Inhalte zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header spezifiziert die Methode oder Methoden, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab überprüft wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben angegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header beim tatsächlichen Anfordern verwendet werden können. Dieser Header ist die Serverantwort auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungs-Header

Dieser Abschnitt listet Header auf, die Clients verwenden können, wenn sie HTTP-Anfragen stellen, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Serveraufrufe gemacht werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anforderungs-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder der Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Sie enthält keine Pfadangaben, nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass der {{HTTPHeader("Origin")}}-Header bei jeder Zugriffssteuerungs-Anfrage **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die eigentliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung können [oben gefunden.](#preflighted_anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gestellt wird (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergeben werden). Dieser browserseitige Header wird durch den entsprechenden serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung können [oben gefunden](#preflighted_anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch-API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Wird es CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & -Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Die Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitung"-Informationen zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man die CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um _"No Access-Control-Allow-Origin header"_ zu umgehen
  - Wie man _"Access-Control-Allow-Origin header must not be the wildcard"_ behebt
