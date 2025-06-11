---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der es einem Server ermöglicht, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer seinem eigenen von einem Browser zum Laden von Ressourcen zugelassen werden sollen. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server senden, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulässt. Bei dieser Preflight-Anfrage sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Frontend-JavaScript-Code, der von `https://domain-a.com` ausgeliefert wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage an `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen schränken Browser Cross-Origin-HTTP-Anfragen ein, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-origin policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von demselben Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagramm der Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datenübertragungen zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen aktivieren für:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web-Fonts (zur Verwendung von Schriftarten aus anderen Domains in `@font-face` innerhalb von CSS), wie in den [Anforderungen zum Laden von Schriftarten](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, sodass Server TrueType-Schriftarten bereitstellen können, die nur Cross-Origin geladen und von berechtigten Websites verwendet werden können.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und beinhaltet eine Diskussion über die notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzugefügt werden, mit denen Server beschreiben können, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich, für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}}, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), verlangt die Spezifikation, dass Browser die Anfrage "preflighten", indem sie unterstützte Methoden vom Server mit der HTTP-{{HTTPMethod("OPTIONS")}}-Anfragemethode anfordern und dann, nach der "Genehmigung" durch den Server, die eigentliche Anfrage senden. Server können auch Clients darüber informieren, ob "Anmeldedaten" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler resultieren in Fehlern, aber aus Sicherheitsgründen sind die Details zum Fehler _nicht für JavaScript verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, sich die Konsole des Browsers anzusehen, um Details zu erhalten.

Nachfolgende Abschnitte diskutieren Szenarien und bieten eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugangskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen senden kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight-Anfragen")}} aus. Diese werden _einfache Anfragen_ genannt, aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Der Hintergrund ist, dass das {{HTMLElement("form")}}-Element von HTML 4.0 (das Cross-Site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorhergeht) einfache Anfragen an jeden Ursprung richten kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss sich der Server nicht anmelden (indem er auf eine Preflight-Anfrage antwortet), um Anfragen zu erhalten, die wie eine Formularübermittlung aussehen, da die Gefahr von CSRF nicht schlimmer ist als die von Formularübertragungen. Der Server muss jedoch immer noch durch Verwendung von {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den Headern, die automatisch vom Benutzeragenten festgelegt werden (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, oder den {{Glossary("Forbidden_request_header", "verbotenen Anforderungs-Headern")}}), dürfen nur die {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteten Anforderungs-Header")}} manuell gesetzt werden, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einzelnen Bereichs-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ-/Subtyp-Kombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} erlaubt sind, der im {{HTTPHeader("Content-Type")}}-Header angegeben wird, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gemacht wird, sind keine Ereignis-Listener auf dem Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft verwendet wird; das heißt, wenn eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Instanz `xhr` ist, hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Ereignis-Listener hinzuzufügen, der den Upload überwacht.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview legen zusätzliche Einschränkungen für die in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} erlaubten Werte fest. Wenn einer dieser Header "nicht standardisierte" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Was WebKit/Safari als "nicht standardisiert" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Fehlerberichten:
>
> - [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://webkit.org/b/165178)
> - [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://webkit.org/b/165566)
> - [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Zum Beispiel, nehmen wir an, Webinhalte unter `https://foo.example` möchten JSON-Inhalte von der Domain `https://bar.other` abrufen. Code dieser Art könnte in JavaScript auf `foo.example` verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Austausch zwischen dem Client und dem Server durch, indem CORS-Header verwendet werden, um die Berechtigungen zu behandeln:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Werfen wir einen Blick darauf, was der Browser in diesem Fall an den Server sendet:

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

Der beachtenswerte Anfrage-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` stammt.

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung aus zugänglich ist.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffsprotokolls. Wenn die Eigentümer der Ressource unter `https://bar.other` den Zugriff auf Anfragen _nur_ von `https://foo.example` einschränken wollten (d.h. keine andere Domain als `https://foo.example` kann auf die Ressource in einer Cross-Origin-Art zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei der Antwort auf eine [Anfrage mit Anmeldedaten](#anfragen_mit_anmeldedaten) muss der Server **einen** Ursprung im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt das `*`-Wildcard zu verwenden.

### Vorgeprüfte Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser für "vorgeprüfte" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode an die Ressource in einem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden vorgeprüft, da sie Auswirkungen auf Nutzerdaten haben können.

Das Folgende ist ein Beispiel für eine Anfrage, die vorgeprüft wird:

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

Das obige Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet wird. Außerdem wird ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anfrage-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber generell nützlich für Webanwendungen. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage vorgeprüft.

![Diagramm einer Anfrage, die vorgeprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie sind nur für die `OPTIONS`-Anfrage erforderlich.

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

Der erste Block oben stellt die Preflight-Anfrage dar, die mit der {{HTTPMethod("OPTIONS")}}-Methode erfolgt. Der Browser bestimmt, dass er dies senden muss, basierend auf den Anforderungsparametern, die der obige JavaScript-Code-Schnipsel verwendete, sodass der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu ermitteln, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei weitere Anforderungsheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server im Rahmen einer Preflight-Anfrage, dass bei der tatsächlichen Anfrage eine `POST`-Anfragemethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header informiert den Server, dass bei der tatsächlichen Anfrage `X-PINGOTHER` und `Content-Type` als benutzerdefinierte Header verwendet werden. Nun hat der Server die Möglichkeit zu entscheiden, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die anzeigt, dass die Anfragemethode (`POST`) und die Anfrage-Header (`X-PINGOTHER`) akzeptabel sind. Lassen Sie uns die folgenden Zeilen näher betrachten:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, wodurch der Zugriff nur auf die anfragende Ursprungsdomain beschränkt wird. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource zu abfragen (dieser Header ist ähnlich wie der {{HTTPHeader("Allow")}}-Antwort-Header, wird aber ausschließlich im Kontext der Zugangskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass diese Header bei der tatsächlichen Anfrage verwendet werden dürfen. Ähnlich wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste von akzeptablen Headern.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage gespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert ist 5 Sekunden. Im vorliegenden Fall beträgt das maximal zulässige Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen Wert überschreitet.

Nachdem die Preflight-Anfrage abgeschlossen ist, wird die tatsächliche Anfrage gesendet:

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

#### Vorgeprüfte Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Weiterleitungen nach einer vorgeprüften Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage auftritt, werden einige Browser derzeit eine Fehlermeldung wie die folgende ausgeben:

> Die Anfrage wurde auf `https://example.com/foo` umgeleitet, was bei Cross-Origin-Anfragen, die eine Preflight-Anfrage erfordern, nicht zulässig ist.
> Anfrage erfordert Preflight, was es nicht erlaubt, Cross-Origin-Weiterleitungen zu folgen.

Das CORS-Protokoll hat ursprünglich dieses Verhalten gefordert, wurde aber [später geändert, um es nicht mehr zu fordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich geforderte Verhalten.

Bis die Browser bei der Spezifikation aufholen, können Sie möglicherweise dieses Problem umgehen, indem Sie eines oder beide der folgenden tun:

- Ändern Sie das serverseitige Verhalten, um die Preflight-Anfrage und/oder die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage so, dass es sich um eine [einfache Anfrage](#einfache_anfragen) handelt, die keine Preflight-Anfrage auslöst

Wenn das nicht möglich ist, besteht eine andere Möglichkeit darin:

1. Führen Sie eine [einfache Anfrage](#einfache_anfragen) (mithilfe von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um festzustellen, auf welche URL die tatsächliche vorgeprüfte Anfrage enden würde.
2. Stellen Sie eine weitere Anfrage (die _tatsächliche_ Anfrage) mithilfe der URL, die Sie aus `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Jedoch, wenn die Anfrage eine Preflight-Anfrage aufgrund des Vorhandenseins des `Authorization`-Headers in der Anfrage auslöst, können Sie die Einschränkung mit obigen Schritten nicht umgehen. Sie können sie gar nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Bei Anfragen mit Anmeldedaten an eine andere Domain gelten weiterhin die Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer durchgesetzt, unabhängig von der Konfiguration des Servers und des Clients, wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit, die sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS freigelegt wird, ist die Möglichkeit, "anmeldedatenbewusste" Anfragen zu machen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin-`fetch()` oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldedaten.

Um eine `fetch()`-Anfrage zu bitten, Anmeldedaten einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu bitten, Anmeldedaten einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true`.

In diesem Beispiel fordert der ursprünglich von `https://foo.example` geladene Inhalt eine GET-Anfrage an eine Ressource bei `https://bar.other` an, die Cookies setzt. Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, das die `credentials`-Option im Konstruktor auf `"include"` setzt und dann diese Anfrage an `fetch()` übergibt. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorgeprüft, aber der Browser wird **jede** Antwort ablehnen, die nicht den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header auf `true` gesetzt hat, und **nicht** die Antwort an den aufrufenden Webinhalt verfügbar machen.

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

Obwohl der `Cookie`-Header der Anfrage den Cookie enthält, der für die Inhalte auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und nicht für den Webinhalt verfügbar gemacht, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortete, wie in diesem Beispiel demonstriert.

#### Vorgeprüfte Anfragen und Anmeldedaten

CORS-Preflight-Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldedaten gemacht werden kann.

> [!NOTE]
> Einige Enterprise-Authentifizierungsdienste erfordern, dass TLS-Clientzertifikate in Preflight-Anfragen gesendet werden, entgegen der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, indem man die Präferenz: `network.cors_preflight.allow_client_cert` auf `true` setzt ([Firefox Fehler 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Clientzertifikate in CORS-Preflight-Anfragen ([Chrome Fehler 775438](https://crbug.com/775438)).

#### Anmeldedaten-Anfragen und Platzhalter

Bei der Antwort auf eine Anfrage mit Anmeldedaten:

- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Origin`-Antwort-Header-Wert angeben, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Headers`-Antwort-Header-Wert angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Allow-Methods`-Antwort-Header-Wert angeben, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den `Access-Control-Expose-Headers`-Antwort-Header-Wert angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage eine Anmeldeinformation (am häufigsten einen `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *` Header enthält (d.h. mit dem Wildcard), blockiert der Browser den Zugriff auf die Antwort und gibt eine CORS-Fehlermeldung in der Entwicklerkonsole aus.

Wenn jedoch eine Anfrage eine Anmeldeinformation beinhaltet (wie der `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung anstelle des Wildcards angibt (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), ermöglicht der Browser den Zugriff auf die Antwort aus dem angegebenen Ursprung.

Beachten Sie auch, dass jeder `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort das `*`-Wildcard anstelle eines tatsächlichen Ursprungs wäre.

#### Drittanbieter-Cookies

Beachten Sie, dass in CORS-Antworten gesetzte Cookies den normalen Richtlinien für Drittanbieter-Cookies unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass er alle Drittanbieter-Cookies ablehnt.

Cookies in der Anfrage können auch in den normalen Richtlinien für Drittanbieter-Cookies unterdrückt werden. Die durchgesetzte Cookie-Richtlinie könnte daher die in diesem Kapitel beschriebene Fähigkeit nullifizieren und effektiv verhindern, dass Sie Anfragen mit Anmeldedaten überhaupt machen können.

Die Cookie-Richtlinie um das [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut würde angewendet werden.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugangskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt bietet eine Übersicht über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der den Browsern sagt, dass dieser Ursprung Zugriff auf die Ressource haben darf; oder – für Anfragen **ohne** Anmeldedaten – das `*`-Wildcard sagt den Browsern, dass jeder Ursprung auf die Ressource zugreifen darf.

Zum Beispiel, um Code von dem Ursprung `https://mozilla.org` Zugriff auf die Ressource zu erlauben, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server statt des `*`-Wildcards einen einzelnen Ursprung angibt (der basierend auf dem anfragenden Ursprung als Teil einer Liste von erlaubten Ursprüngen dynamisch geändert werden kann), sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header einschließen, um den Clients anzuzeigen, dass sich die Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anfrage-Headers unterscheiden werden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header der Erlaubnisliste hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde das Folgende die Header `X-My-Custom-Header` und `X-Another-Custom-Header` erlauben, im Browser angezeigt zu werden:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds`-Parameter gibt die Anzahl der Sekunden an, wie lange die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage angezeigt werden kann, wenn das `credentials`-Flag wahr ist. Wenn dieser als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt er an, ob die tatsächliche Anfrage mit Anmeldedaten gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorgeprüft werden und daher, wenn eine Anfrage mit Anmeldedaten für eine Ressource gemacht wird, die Antwort ignoriert wird und nicht an den Webinhalt zurückgegeben wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldedaten](#anfragen_mit_anmeldedaten) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorgeprüft wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} ist oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header beim Stellen der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die Serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieser Abschnitt listet die Header auf, die Clients verwenden können, wenn sie HTTP-Anfragen senden, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Aufrufe zu Servern machen. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anfrage-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder der Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wurde. Sie enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um den Server wissen zu lassen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung finden Sie [oben.](#vorgeprüfte_anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um den Server wissen zu lassen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gestellt wird (zum Beispiel, indem sie als die [`headers`](/de/docs/Web/API/RequestInit#headers)-Option übergeben werden). Dieser browserseitige Header wird von dem entsprechenden Serverseitigen Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung finden Sie [oben](#vorgeprüfte_anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung auf meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktives CORS-Erklärungs- & Generationswerkzeug
- [So führen Sie den Chrome-Browser ohne CORS aus](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwendung von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Antwort auf Stack Overflow mit "how to"-Informationen zur Behandlung häufiger Probleme](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man die CORS-Preflight-Anfrage vermeidet
  - Wie man einen CORS-Proxy verwendet, um _"Kein Access-Control-Allow-Origin Header"_ zu umgehen
  - Wie man _"Access-Control-Allow-Origin-Header darf nicht das Wildcard sein"_ korrigiert
