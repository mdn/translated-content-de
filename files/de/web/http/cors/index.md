---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ([CORS](/de/docs/Glossary/CORS)) ist ein auf [HTTP](/de/docs/Glossary/HTTP)-Headern basierender Mechanismus, der es einem Server erlaubt, anzugeben, welche [Herkünfte](/de/docs/Glossary/origin) (Domain, Schema oder Port) außer seiner eigenen ein Browser zulassen soll, um Ressourcen zu laden. CORS verlässt sich auch auf einen Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server stellen, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulassen wird. In diesem Preflight sendet der Browser Header, die die HTTP-Methode und Header angeben, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Front-End-JavaScript-Code von `https://domain-a.com` nutzt [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen schränken Browser Cross-Origin-HTTP-Anfragen ein, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von derselben Herkunft anfordern kann, von der die Anwendung geladen wurde, es sei denn, die Antwort von anderen Herkünften enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für Folgendes aktivieren:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web Fonts (für die Verwendung von Fonts aus einer anderen Domain in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriften bereitstellen können, die nur von zugelassenen Websites geladen und verwendet werden können.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Videoframes, die auf einer Leinwand mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet werden.
- [CSS Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Headers) hinzugefügt werden, die es Servern ermöglichen, zu beschreiben, welche Herkunftsseiten die Informationen von einem Webbrowser lesen dürfen. Zusätzlich müssen Browser bei HTTP-Anfragemethoden, die Nebeneffekte auf Serverdaten haben können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}}, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), die Anfragen "vorfliegen" und unterstützte Methoden vom Server durch die HTTP-{{HTTPMethod("OPTIONS")}}-Anfragemethode ermitteln. Nach "Genehmigung" durch den Server wird die tatsächliche Anfrage gesendet. Server können auch den Clients mitteilen, ob "Anmeldedaten" (wie [Cookies](/de/docs/Web/HTTP/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen stehen Details zum Fehler _nicht in JavaScript_ zur Verfügung. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

In den folgenden Abschnitten werden Szenarien diskutiert sowie ein Überblick über die verwendeten HTTP-Header gegeben.

## Beispiele für Zugriffskontrollszenarien

Wir stellen drei Szenarien vor, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das Cross-Origin-Anfragen in jedem unterstützenden Browser ausführen kann.

### Einfache Anfragen

Einige Anfragen lösen keine [CORS-Preflight](/de/docs/Glossary/Preflight_request) aus. Diese werden aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) _einfache Anfragen_ genannt, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Das Motiv ist, dass das {{HTMLElement("form")}} Element aus HTML 4.0 (das vor Cross-Site-[`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) existiert) einfache Anfragen an jede Herkunft einreichen kann. Daher muss sich jemand, der einen Server schreibt, bereits gegen [Cross-Site-Request-Forgery](/de/docs/Glossary/CSRF) (CSRF) schützen. Unter dieser Annahme muss der Server nicht "einwilligen" (durch Antwort auf eine Preflight-Anfrage), um jede Anfrage entgegenzunehmen, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die der Formularübermittlung. Der Server muss jedoch mit {{HTTPHeader("Access-Control-Allow-Origin")}} einwilligen, um die Antwort mit dem Skript _zu teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch vom Benutzer-Agent gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, oder [die anderen in der Fetch-Spezifikation als _verbotene Header-Namen_ definierten Header](https://fetch.spec.whatwg.org/#forbidden-header-name)), sind die einzigen Header, die manuell gesetzt werden dürfen, [diejenigen, die die Fetch-Spezifikation als CORS-safelisted request-header definiert](https://fetch.spec.whatwg.org/#cors-safelisted-request-header), das sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereichsheaderwert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typ-/Subtyp-Kombinationen für den im {{HTTPHeader("Content-Type")}} Header angegebenen [Medientyp](/de/docs/Glossary/MIME_type) sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gestellt wird, sind keine Event-Listener auf dem Objekt registriert, das durch die [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) Eigenschaft in der Anfrage verwendet wird; das heißt, gegeben ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Instanz `xhr`, hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener zum Überwachen des Uploads hinzuzufügen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Einschränkungen bei den erlaubten Werten in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}}. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Preflight für nicht standardmäßige CORS-safelisted Anfrage-Header Accept, Accept-Language und Content-Language verlangen](https://webkit.org/b/165178)
> - [Kommas in Accept-, Accept-Language- und Content-Language-Anfrage-Headern für einfaches CORS erlauben](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Zum Beispiel, nehmen wir an, Webinhalte unter `https://foo.example` möchten JSON-Inhalt von der Domain `https://bar.other` abrufen. Code dieser Art könnte in JavaScript auf `foo.example` verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Diese Operation führt einen einfachen Austausch zwischen dem Client und dem Server durch, wobei CORS-Header verwendet werden, um die Berechtigungen zu handhaben:

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

Der bemerkenswerte Anfrage-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass die Anfrage von `https://foo.example` kommt.

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jeder** Herkunft aufgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}} und {{HTTPHeader("Access-Control-Allow-Origin")}} Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourcenbesitzer bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken wollten (d.h., keine andere Domain als `https://foo.example` kann in Cross-Origin-Weise auf die Ressource zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Wenn auf eine Anfrage mit Anmeldedaten [geantwortet wird](#anfragen_mit_anmeldedaten), muss der Server einen Ursprung im Wert des `Access-Control-Allow-Origin` Headers angeben, anstatt das `*`-Wildcard zu verwenden.

### Preflight-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) senden Browser bei "preflighteten" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode an die Ressource auf dem anderen Ursprung, um zu bestimmen, ob die eigentliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden preflightet, da sie möglicherweise Auswirkungen auf Benutzerdaten haben.

Das folgende ist ein Beispiel für eine Anfrage, die preflightet wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet wird. Es wird auch ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anfrage-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, sind aber im Allgemeinen für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage preflightet.

![Diagramm einer Anfrage, die preflightet wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die eigentliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; sie werden nur für die `OPTIONS`-Anfrage benötigt.

Sehen wir uns den gesamten Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/-Antwort_:

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

Der erste Block oben repräsentiert die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode. Der Browser bestimmt, dass er dies senden muss, basierend auf den Anfrageparametern, die der obige JavaScript-Code-Snippet verwendete, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu ermitteln und ist eine [sichere](/de/docs/Glossary/Safe/HTTP) Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anfrage-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}} Header benachrichtigt den Server als Teil einer Preflight-Anfrage, dass bei der eigentlichen Anfrage eine `POST`-Anfragemethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}} Header benachrichtigt den Server, dass bei der eigentlichen Anfrage die benutzerdefinierten Header `X-PINGOTHER` und `Content-Type` verwendet werden. Nun hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die anzeigt, dass die Anfragemethode (`POST`) und die Anfrage-Header (`X-PINGOTHER`) akzeptabel sind. Sehen wir uns die folgenden Zeilen genauer an:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff auf die anfragende Origin-Domain beschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist ähnlich dem {{HTTPHeader("Allow")}} Antwort-Header, wird jedoch streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass dies zulässige Header sind, die mit der tatsächlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste zulässiger Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, für wie lange die Antwort auf die Preflight-Anfrage ohne erneute Preflight-Anfrage zwischengespeichert werden kann. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das Maximalalter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen überschreitet.

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

#### Preflight-Anfragen und Umleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Umleitungen nach einer Preflight-Anfrage. Wenn eine Umleitung nach einer solchen Anfrage erfolgt, melden einige Browser derzeit eine Fehlermeldung wie die folgende:

> Die Anfrage wurde zu `https://example.com/foo` umgeleitet, was bei Cross-Origin-Anfragen, die eine Preflight benötigen, nicht erlaubt ist.
> Die Anfrage erfordert eine Preflight, die nicht erlaubt ist, um Cross-Origin-Umleitungen zu folgen.

Das CORS-Protokoll verlangte ursprünglich dieses Verhalten, wurde aber [anschließend geändert, um es nicht mehr zu erfordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben noch nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich erforderliche Verhalten.

Bis die Browser mit der Spezifikation aufholen, könnten Sie in der Lage sein, dieses Einschränkung mit einer der folgenden Methoden zu umgehen:

- Ändern Sie das Serververhalten, um die Preflight zu vermeiden und/oder die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage so, dass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keine Preflight auslöst

Falls das nicht möglich ist, besteht eine andere Möglichkeit darin:

1. Eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)) zu machen, um zu bestimmen, zu welcher URL die eigentliche preflighted Anfrage führen würde.
2. Eine weitere Anfrage (die _eigentliche_ Anfrage) mit der URL zu machen, die Sie im ersten Schritt von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage jedoch eine Preflight auslöst, weil der `Authorization` Header in der Anfrage vorhanden ist, können Sie das Einschränkung nicht mit den obigen Schritten umgehen. Und Sie können es überhaupt nicht umgehen, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldedaten

> [!NOTE]
> Bei der Erstellung von Anfragen mit Anmeldedaten zu einer anderen Domain gelten weiterhin Drittanbieter-Cookie-Richtlinien. Die Richtlinie wird immer unabhängig von jeglichen Einstellungen auf dem Server und dem Client eingehalten, wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit von sowohl [`fetch()`](/de/docs/Web/API/Window/fetch) als auch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS ist die Möglichkeit, "credentialed" Anfragen zu machen, die über [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) und HTTP-Authentifizierungsinformationen Bescheid wissen. Standardmäßig senden Browser in Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldedaten.

Um eine `fetch()`-Anfrage aufzufordern, Anmeldedaten aufzunehmen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage aufzufordern, Anmeldedaten einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel lädt ursprünglich geladener Inhalt von `https://foo.example` eine einfache GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf `foo.example` könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request) Objekt, welches die `credentials` Option im Konstruktor auf `"include"` setzt, und gibt diese Anfrage dann an `fetch()` weiter. Da es sich um eine einfache `GET`-Anfrage handelt, wird sie nicht vorgeflogen, aber der Browser wird **jeder** Antwort ablehnen, die nicht den Header {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` enthält, und die Antwort **nicht** für den aufgerufenen Webinhalt verfügbar machen.

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

Obwohl der `Cookie` Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und dem Webinhalt nicht verfügbar gemacht, wenn `bar.other` nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` antwortete, wie in diesem Beispiel gezeigt.

#### Preflight-Anfragen und Anmeldedaten

CORS-preflight Anfragen dürfen niemals Anmeldedaten enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die eigentliche Anfrage mit Anmeldedaten erfolgen kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, was der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) Spezifikation widerspricht.
>
> Firefox 87 erlaubt es, dieses nicht konforme Verhalten zu aktivieren, indem die Präferenz: `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Chromium-basierte Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldedaten und Wildcards

Bei der Beantwortung einer Anfrage mit Anmeldedaten:

- Der Server **darf nicht** das `*`-Wildcard für den Wert des `Access-Control-Allow-Origin` Antwort-Headers angeben, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcard für den Wert des `Access-Control-Allow-Headers` Antwort-Headers angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcard für den Wert des `Access-Control-Allow-Methods` Antwort-Headers angeben, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcard für den Wert des `Access-Control-Expose-Headers` Antwort-Headers angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldedatum (am häufigsten ein `Cookie` Header) enthält und die Antwort einen `Access-Control-Allow-Origin: *` Header enthält (das ist, mit dem Wildcard), blockiert der Browser den Zugriff auf die Antwort und gibt einen CORS-Fehler in der Entwicklerkonsole aus.

Aber wenn eine Anfrage ein Anmeldedatum (wie den `Cookie` Header) enthält und die Antwort einen tatsächlichen Ursprung anstelle des Wildcards enthält (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), dann erlaubt der Browser den Zugriff auf die Antwort von dem angegebenen Ursprung.

Beachten Sie auch, dass jeder `Set-Cookie` Antwort-Header in einer Antwort kein Cookie setzt, wenn der `Access-Control-Allow-Origin` Wert in dieser Antwort das `*`-Wildcard ist anstelle eines tatsächlichen Ursprungs.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, den normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie` Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

Cookies in der Anfrage können auch in normalen Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Fähigkeit aufheben und effektiv verhindern, dass Sie Anfragen mit Anmeldedaten überhaupt machen.

Die Cookie-Richtlinie in Bezug auf das [SameSite](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut würde gelten.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}} Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der Browsern erlaubt, diesen Ursprung den Zugriff auf die Ressource zu gewähren; oder aber – für Anfragen **ohne** Anmeldedaten – das `*`-Wildcard erlaubt es Browsern, jedem Ursprung den Zugriff auf die Ressource zu gewähren.

Beispielsweise, um Code aus dem Ursprung `https://mozilla.org` den Zugriff auf die Ressource zu erlauben, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der sich möglicherweise dynamisch basierend auf dem anfragenden Ursprung als Teil einer Zulassungsliste ändert), anstatt des `*`-Wildcards, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}} Antwort-Header einschließen, um den Clients anzuzeigen, dass Serverantworten je nach Wert des {{HTTPHeader("Origin")}} Anfrage-Headers unterschiedlich ausfallen.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}} Header fügt die angegebenen Header zur Zulassungsliste hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, das Folgende:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…würde die Header `X-My-Custom-Header` und `X-Another-Custom-Header` erlauben, dem Browser offengelegt zu werden.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}} Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie oben.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der `delta-seconds` Parameter gibt die Anzahl der Sekunden an, wie lange die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}} Header gibt an, ob die Antwort auf die Anfrage freigegeben werden kann, wenn das `credentials` Flag true ist. Wenn er als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, wird angegeben, ob die eigentliche Anfrage mit Anmeldedaten vorgenommen werden kann. Beachten Sie, dass einfache `GET` Anfragen nicht vorgeflogen werden, und daher, wenn eine Anfrage für eine Ressource mit Anmeldedaten gemacht wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, die Antwort vom Browser ignoriert und nicht an den Webinhalt zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldedaten](#anfragen_mit_anmeldedaten) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}} Header gibt die erlaubte Methode oder Methoden an, wenn auf die Ressource zugegriffen wird. Dies wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorgeflogen wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel einer [Preflight-Anfrage](/de/docs/Glossary/preflight_request) wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}} Header wird als Antwort auf eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden dürfen. Dieser Header ist die serverseitige Antwort auf den Header {{HTTPHeader("Access-Control-Request-Headers")}} des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrageheader

Dieser Abschnitt listet die Header auf, die Clients beim Senden von HTTP-Anfragen verwenden können, um die Funktion des Cross-Origin-Sharing zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Aufrufe an Server erstellt werden. Entwickler, die Cross-Origin-Anfragen machen, müssen nicht programmatisch Set anfordern Sharing-Anfrage-Header.

### Origin

Der {{HTTPHeader("Origin")}} Header gibt den Ursprung der cross-origin Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Sie enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin` Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}} Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die eigentliche Anfrage gemacht wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung können [oben gefunden werden.](#preflight-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}} Header wird verwendet, um dem Server bei einer Preflight-Anfrage mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gemacht wird (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers) Option übergeben werden). Dieser Browser-seitige Header wird durch den entsprechenden serverseitigen Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung können [oben gefunden werden](#preflight-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [Enable CORS: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Wird es CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung" für den Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man die CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy benutzt, um das _"No Access-Control-Allow-Origin header"_ zu umgehen
  - Wie man das _"Access-Control-Allow-Origin header must not be the wildcard"_ Problem behebt
