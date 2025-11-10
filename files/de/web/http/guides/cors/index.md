---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der es einem Server ermöglicht, beliebige {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer seinem eigenen anzugeben, von denen ein Browser das Laden von Ressourcen erlauben sollte. CORS stützt sich auch auf einen Mechanismus, bei dem Browser eine "Voranfrage" an den Server senden, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulassen wird. Bei dieser Voranfrage sendet der Browser Header, die die HTTP-Methode und die Header angeben, die in der eigentlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der von `https://domain-a.com` bereitgestellte Front-End-JavaScript-Code verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Dies bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von dem Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Zwecke ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Webfonts (für die Verwendung von Schriften aus verschiedenen Domains in `@font-face` innerhalb von CSS), wie in den [Schriftschnitt-Anforderungen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, sodass Server TrueType-Schriften bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder / Videoframes, die auf eine Leinwand gezeichnet werden, die [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwendet.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/Guides/Shapes/From_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und enthält eine Diskussion der erforderlichen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzugefügt werden, die Servern ermöglichen zu beschreiben, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Zusätzlich, für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), schreibt die Spezifikation vor, dass Browser die Anfrage "vorab abfragen", indem sie unterstützte Methoden vom Server mit der HTTP-{{HTTPMethod("OPTIONS")}}-Anfragemethode anfordern, und dann, nach "Genehmigung" vom Server, die eigentliche Anfrage senden. Server können auch Kunden darüber informieren, ob "Berechtigungen" wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind Details über den Fehler _nicht für JavaScript verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schief gelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

Die nächsten Abschnitte diskutieren Szenarien und bieten eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser Cross-Origin-Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Voranfrage")}} aus. Diese werden als _einfache Anfragen_ aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) bezeichnet, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die nun CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das Cross-Site-`[`fetch()`](/de/docs/Web/API/Window/fetch)` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorausgehenden) kann einfache Anfragen an jeden Ursprung senden, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss sich der Server nicht einwilligen (indem er auf eine Voranfrage antwortet), um eine Anfrage zu erhalten, die wie eine Formularübermittlung aussieht, da die Bedrohung durch CSRF nicht schlimmer ist als die durch die Formularübermittlung. Der Server muss jedoch weiterhin mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den automatisch vom Benutzeragenten gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder den {{Glossary("Forbidden_request_header", "verbotenen Anforderungs-Headern")}}), sind die einzigen Header, die manuell gesetzt werden dürfen, die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen weiter unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereichsheader-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typ/Subtyp-Kombinationen für den {{Glossary("MIME_type", "Medientyp")}}, die im {{HTTPHeader("Content-Type")}}-Header angegeben sind, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gestellt wird, sind keine Event-Listener auf dem Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft verwendet wird; das heißt, gegeben ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Instanz `xhr`, hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener hinzuzufügen, der den Upload überwacht.
- Es wird kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview haben zusätzliche Einschränkungen für die in den {{HTTPHeader("Accept")}}-, {{HTTPHeader("Accept-Language")}}- und {{HTTPHeader("Content-Language")}}-Header erlaubten Werte. Wenn einer dieser Header "nicht standardmäßige" Werte hat, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Benötige Voranfrage für nicht-standardmäßige CORS-Angenommene Anforderungs-Header Accept, Accept-Language und Content-Language](https://webkit.org/b/165178)
> - [Erlaube Kommas in Accept-, Accept-Language- und Content-Language-Anforderungs-Headers für einfaches CORS](https://webkit.org/b/165566)
> - [Wechsle zu einem Blacklist-Modell für eingeschränkte Accept-Headers in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Zum Beispiel, nehmen wir an, Webinhalt auf `https://foo.example` möchte JSON-Inhalt von der Domain `https://bar.other` abrufen. Solcher Code könnte in JavaScript auf `foo.example` verwendet werden:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Austausch zwischen dem Client und dem Server durch, wobei CORS-Header zum Umgang mit den Berechtigungen verwendet werden:

![Diagramm der einfachen CORS-GET-Anforderung](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

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

Der bemerkenswerte Anforderungs-Header ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Nun sehen wir uns an, wie der Server antwortet:

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

Als Antwort gibt der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *` zurück, was bedeutet, dass die Ressource von **jedem** Ursprung abgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourceneigentümer bei `https://bar.other` den Zugriff auf die Ressource nur auf Anfragen von `https://foo.example` (d.h. keine Domain außer `https://foo.example` kann auf die Ressource Cross-Origin zugreifen) beschränken möchten, würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Wenn der Server auf eine [Anfrage mit Berechtigungen](#anfragen_mit_berechtigungen) antwortet, **muss** er einen Ursprung im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt den `*`-Platzhalter anzugeben.

### Vorab abgefragte Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser für "vorab abgefragte" Anfragen zunächst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} zu der Ressource auf dem anderen Ursprung, um festzustellen, ob die eigentliche Anfrage sicher gestellt werden kann. Solche Cross-Origin-Anfragen werden vorab abgefragt, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die vorab abgefragt wird:

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

Das obige Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet wird. Außerdem wird ein nicht-standardmäßiger HTTP-`X-PINGOTHER`-Anforderungs-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, sind aber generell für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorab abgefragt.

![Diagramm einer Anfrage, die vorab abgefragt wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, umfasst die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie werden nur für die `OPTIONS`-Anfrage benötigt.

Lassen Sie uns die vollständige Austausche zwischen Client und Server betrachten. Der erste Austausch ist die _Voranfrage / Antwort_:

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

Das erste Block oben stellt die Voranfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser bestimmt, dass er dies aufgrund der Anforderungsparameter senden muss, die der obige JavaScript-Codeabschnitt verwendete, damit der Server darauf antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die dazu verwendet wird, weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anforderungs-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header benachrichtigt den Server als Teil einer Voranfrage, dass, wenn die tatsächliche Anfrage gesendet wird, dies mit einer `POST`-Anfragemethode geschieht. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header benachrichtigt den Server, dass, wenn die tatsächliche Anfrage gesendet wird, dies mit `X-PINGOTHER`- und `Content-Type`-benutzerdefinierten Headern geschieht. Nun hat der Server die Möglichkeit festzustellen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die anzeigt, dass die Anfragemethode (`POST`) und Anforderungs-Header (`X-PINGOTHER`) akzeptabel sind. Lassen Sie uns einen genaueren Blick auf die folgenden Zeilen werfen:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur auf die anfordernde Ursprungsdomain beschränkt. Es antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist dem {{HTTPHeader("Allow")}}-Antwortheader ähnlich, wird jedoch strikt im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass dies zulässige Header sind, die mit der tatsächlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Voranfrage ohne Senden einer weiteren Voranfrage zwischengespeichert werden kann. Der Standardwert beträgt 5 Sekunden. Im gegenwärtigen Fall beträgt die maximale Alterung 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn `Access-Control-Max-Age` diesen überschreitet.

Sobald die Voranfrage abgeschlossen ist, wird die eigentliche Anfrage gesendet:

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

#### Vorab abgefragte Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Folgen von Weiterleitungen nach einer vorab abgefragten Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage erfolgt, berichten einige Browser derzeit über eine Fehlermeldung wie die folgende:

> Die Anfrage wurde an `https://example.com/foo` umgeleitet, was für Cross-Origin-Anfragen, die eine Vorabfrage erfordern, unzulässig ist.
> Anfrage erfordert Vorabfrage, die nicht über Cross-Origin-Weiterleitungen folgen darf.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde jedoch [anschließend geändert, um dies nicht mehr zu fordern](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). jedoch haben nicht alle Browser die Änderung implementiert und zeigen immer noch das ursprünglich erforderte Verhalten.

Bis die Browser mit der Spezifikation aufholen, können Sie möglicherweise diese Einschränkung umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das serverseitige Verhalten, um sowohl die Vorabfrage als auch die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage, sodass es sich um eine [einfache Anfrage](#einfache_anfragen) handelt, die keine Vorabfrage verursacht

Ist dies nicht möglich, dann ist ein anderer Weg:

1. Stellen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um festzustellen, zu welcher URL die tatsächliche vorab abgefragte Anfrage führen würde.
2. Stellen Sie eine andere Anfrage (die _tatsächliche_ Anfrage) unter Verwendung der URL, die Sie im ersten Schritt von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn die Anfrage jedoch durch das Vorhandensein des `Authorization`-Headers in der Anfrage eine Vorabfrage auslöst, können Sie die Einschränkung nicht mit den oben genannten Schritten umgehen. Und Sie können es überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gestellt wird.

### Anfragen mit Berechtigungen

> [!NOTE]
> Beim Stellen von Anfragen mit Berechtigungen an eine andere Domain gelten weiterhin Richtlinien für Drittanbieter-Cookies. Die Richtlinie wird unabhängig von jeder auf dem Server und dem Client beschriebenen Einrichtung immer durchgesetzt.

Die interessanteste Fähigkeit, die sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS offengelegt wird, ist die Fähigkeit, „berechtigte“ Anfragen zu stellen, die sich [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. In Cross-Origin-`fetch()` oder `XMLHttpRequest`-Aufrufen senden Browser standardmäßig _keine_ Berechtigungen.

Um eine `fetch()`-Anfrage zu bitten, Berechtigungen einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu bitten, Berechtigungen einzuschließen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true`.

In diesem Beispiel stellt der Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, wobei die `credentials`-Option im Konstruktor auf `"include"` gesetzt wird, und übergibt dann diese Anfrage an `fetch()`. Da es sich um eine einfache `GET`-Anfrage handelt, wird sie nicht vorab abgefragt, aber der Browser wird **jede Antwort ablehnen**, die den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header nicht auf `true` gesetzt hat, und **die Antwort nicht** für den aufrufenden Webinhalt verfügbar machen.

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

Obwohl der `Cookie`-Header der Anfrage das für den Inhalt auf `https://bar.other` bestimmte Cookie enthält, würde die Antwort ignoriert und dem Webinhalt nicht zugänglich gemacht, wenn bar.other nicht mit {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true` geantwortet hätte, wie in diesem Beispiel gezeigt.

#### Vorab angefragte Anfragen und Berechtigungen

CORS-Voranfrage-Anfragen dürfen niemals Berechtigungen enthalten. Die _Antwort_ auf eine Voranfrage muss `Access-Control-Allow-Credentials: true` angeben, um zu zeigen, dass die eigentliche Anfrage mit Berechtigungen gestellt werden kann.

> [!NOTE]
> Einige Unternehmensauthentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Vorabfragen gesendet werden, was im Widerspruch zur [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation steht.
>
> Firefox 87 erlaubt dieses nicht konforme Verhalten, indem er die Einstellung `network.cors_preflight.allow_client_cert` auf `true` setzt ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Auf Chromium basierende Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Voranfragen ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Berechtigte Anfragen und Platzhalter

Bei der Antwort auf eine berechtigte Anfrage:

- Der Server **darf nicht** den `*`-Platzhalter für den Antwortheader-Wert `Access-Control-Allow-Origin` angeben, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** den `*`-Platzhalter für den Antwortheader-Wert `Access-Control-Allow-Headers` angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** den `*`-Platzhalter für den Antwortheader-Wert `Access-Control-Allow-Methods` angeben, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** den `*`-Platzhalter für den Antwortheader-Wert `Access-Control-Expose-Headers` angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage eine Berechtigung (am häufigsten einen `Cookie`-Header) enthält und die Antwort einen `Access-Control-Allow-Origin: *`-Header enthält (das heißt, mit dem Platzhalter), blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Devtools-Konsole.

Wenn eine Anfrage jedoch eine Berechtigung enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung anstelle des Platzhalters enthält (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), erlaubt der Browser den Zugriff auf die Antwort von dem angegebenen Ursprung.

Achten Sie auch darauf, dass jeder `Set-Cookie`-Antwortheader in einer Antwort kein Cookie setzen würde, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort der `*`-Platzhalter anstelle eines tatsächlichen Ursprungs ist.

#### Drittanbieter-Cookies

Beachten Sie, dass in CORS-Antworten gesetzte Cookies den normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Set-Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert, wenn der Browser des Benutzers so konfiguriert ist, dass alle Drittanbieter-Cookies abgelehnt werden.

In CORS-Anfragen und -Antworten gesetzte Cookies unterliegen den normalen Drittanbieter-Cookie-Richtlinien.

Drittanbieter-Cookie-Richtlinien können Drittanbieter-Cookies daran hindern, in Anfragen gesendet zu werden, wodurch verhindert wird, dass eine Site berechtigte Anfragen stellt, selbst wenn dies vom Drittanbieter-Server gestattet wird (unter Verwendung von `Access-Control-Allow-Credentials`).
Die Standardrichtlinie unterscheidet sich zwischen den Browsern, kann aber mit dem [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut festgelegt werden.

Selbst wenn berechtigte Anfragen erlaubt sind, kann ein Browser so konfiguriert werden, dass alle Drittanbieter-Cookies in Antworten abgelehnt werden.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgender Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` spezifiziert entweder einen einzelnen Ursprung, der Browser anweist, diesen Ursprung den Zugriff auf die Ressource zu erlauben; oder - für Anfragen **ohne** Berechtigungen - der `*`-Platzhalter erlaubt es Browsern, jedem Ursprung den Zugriff auf die Ressource zu gewähren.

Um zum Beispiel Code vom Ursprung `https://mozilla.org` den Zugriff auf die Ressource zu erlauben, können Sie dies angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der sich basierend auf dem anfordernden Ursprung dynamisch ändern kann, als Teil einer Zulassungsliste), anstatt des `*`-Platzhalters, sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwortheader einschließen, um den Clients zu signalisieren, dass Serverantworten je nach Wert des {{HTTPHeader("Origin")}}-Anforderungsheaders unterschiedlich ausfallen.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt der Zulassungsliste angegebene Header hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel würde die folgende Anweisung erlauben, die `X-My-Custom-Header` und `X-Another-Custom-Header` Header dem Browser freizugeben:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Voranfrage zwischengespeichert werden können. Ein Beispiel für eine Voranfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der Parameter `delta-seconds` gibt die Anzahl von Sekunden an, die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header zeigt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn die `credentials`-Einstellung wahr ist. Wenn er als Teil einer Antwort auf eine Voranfrage verwendet wird, gibt dies an, ob die eigentliche Anfrage mit Berechtigungen gestellt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab abgefragt werden, und daher, wenn eine Anfrage für eine Ressource mit Berechtigungen gestellt wird, und dieser Header nicht mit der Ressource zurückgegeben wird, die Antwort vom Browser ignoriert und nicht an den Webinhalt zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Berechtigte Anfragen](#anfragen_mit_berechtigungen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header spezifiziert die Methode oder Methoden, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine Vorabfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab abgefragt wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Beispiele für eine {{Glossary("preflight_request", "Voranfrage")}} sind oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Voranfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die serverseitige Antwort auf den Browser-{{HTTPHeader("Access-Control-Request-Headers")}}-Header.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrageheader

Dieser Abschnitt listet Header auf, die Clients beim Ausstellen von HTTP-Anfragen verwenden können, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Aufrufe an Server machen. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anforderungs-Header programmgesteuert setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder Voranfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Er enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header wird verwendet, um bei einer Voranfrage den Server darüber zu informieren, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele dieser Nutzung können [oben gefunden werden.](#vorab_abgefragte_anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird verwendet, um bei einer Voranfrage den Server darüber zu informieren, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gestellt wird (zum Beispiel, indem Sie sie als die [`headers`](/de/docs/Web/API/RequestInit#headers)-Option übergeben). Dieser Browser-seitige Header wird durch den komplementären Server-seitigen Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele dieser Nutzung können [oben gefunden werden](#vorab_abgefragte_anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [Enable CORS: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Anleitung zum Ausführen des Chrome-Browsers ohne CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Verwenden von CORS mit allen (modernen) Browsern](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitung"-Informationen zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - So vermeiden Sie die CORS-Voranfrage
  - So verwenden Sie einen CORS-Proxy, um "Kein Access-Control-Allow-Origin-Header" zu umgehen
  - So beheben Sie "Access-Control-Allow-Origin-Header darf nicht der Platzhalter sein"
