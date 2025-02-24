---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein {{Glossary("HTTP", "HTTP")}}-Header-basierter Mechanismus, der es einem Server ermöglicht, eine beliebige Anzahl von {{Glossary("origin", "Ursprüngen")}} (Domain, Schema oder Port) anzugeben, von denen ein Browser das Laden von Ressourcen erlauben soll. CORS basiert auch auf einem Mechanismus, bei dem Browser eine „Preflight“-Anfrage an den Server senden, der die ursprungsübergreifende Ressource hostet, um zu überprüfen, ob der Server die tatsächliche Anfrage zulässt. Bei diesem Preflight sendet der Browser Header, die die HTTP-Methode und Header anzeigen, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine ursprungsübergreifende Anfrage: Der Front-End-JavaScript-Code von `https://domain-a.com` verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen schränken Browser ursprungsübergreifende HTTP-Anfragen ein, die von Skripten initiiert werden. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, Ressourcen nur vom gleichen Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagramm zur Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere ursprungsübergreifende Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von ursprungsübergreifenden HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [ursprungsübergreifende Austauschstandard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann ursprungsübergreifende HTTP-Anfragen ermöglichen für:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web-Fonts (für die Verwendung von Schriften über Domains hinweg in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriften bereitstellen können, die nur ursprungsübergreifend geladen und von Websites verwendet werden können, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Videorahmen, die in ein Canvas gezeichnet werden, mit Hilfe von [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage).
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und umfasst eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Cross-Origin Resource Sharing-Standard funktioniert, indem neue [HTTP-Header](/de/docs/Web/HTTP/Headers) hinzugefügt werden, die es Servern ermöglichen, zu beschreiben, welche Ursprünge berechtigt sind, diese Informationen von einem Webbrowser zu lesen. Darüber hinaus schreibt die Spezifikation für HTTP-Anfragemethoden, die Seiteneffekte auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/MIME_types)), vor, dass Browser die Anfrage vor „erneut prüfen“ und unterstützte Methoden vom Server mit der {{HTTPMethod("OPTIONS")}}-Anfragemethode anfordern und dann nach „Genehmigung“ durch den Server die eigentliche Anfrage senden. Server können Clients auch mitteilen, ob „Anmeldeinformationen“ (wie [Cookies](/de/docs/Web/HTTP/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind die Einzelheiten des Fehlers _nicht für JavaScript verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Die einzige Möglichkeit, herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

In den folgenden Abschnitten werden Szenarien besprochen sowie eine Aufschlüsselung der verwendeten HTTP-Header bereitgestellt.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das in jedem unterstützenden Browser ursprungsübergreifende Anfragen stellen kann.

### Einfache Anfragen

Einige Anfragen führen nicht zu einer {{Glossary("Preflight_request", "CORS-Preflight")}}-Prüfung. Diese werden in der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) als _einfache Anfragen_ bezeichnet, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}}-Element aus HTML 4.0 (das vor der ursprungsübergreifenden Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) liegt) einfache Anfragen an jede Herkunft senden kann, sodass jeder, der einen Server schreibt, sich bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) schützen muss. Unter dieser Annahme muss der Server nicht einwilligen (durch die Antwort auf eine Preflight-Anfrage), um eine Anfrage zu erhalten, die aussieht wie eine Formularübermittlung, da die Bedrohung durch CSRF nicht schlimmer ist als die durch Formulareinreichung. Der Server muss jedoch trotzdem mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript zu _teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der zulässigen Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den vom Benutzeragenten automatisch gesetzten Headern (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder die {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}}) dürfen nur die {{Glossary("CORS-safelisted_request_header", "CORS-Sicherheitsanfragelisten-Header")}} manuell gesetzt werden, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereichsheaderwert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen erlaubten Typ-/Untertypkombinationen für den {{Glossary("MIME_type", "Medientyp")}}, der im Header {{HTTPHeader("Content-Type")}} angegeben ist, sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt erfolgt, sind keine Ereignislistener auf dem Objekt registriert, das von der Eigenschaft [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) des Objekts verwendet wird, das in der Anfrage verwendet wird; das heißt, bei einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Instanz `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Ereignislistener hinzuzufügen, der den Upload überwacht.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview legen zusätzliche Einschränkungen für die Werte fest, die in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} erlaubt sind. Wenn einer dieser Header "nicht standardmäßige" Werte aufweist, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachtet, ist nicht dokumentiert, außer in den folgenden WebKit-Fehlern:
>
> - [Erfordern Preflight für nicht standardmäßige CORS-Sicherheitsanfragelisten-Header Accept, Accept-Language und Content-Language](https://webkit.org/b/165178)
> - [Erlauben von Kommata in den Anfrage-Headern Accept, Accept-Language und Content-Language für einfache CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Nehmen wir zum Beispiel an, dass Webinhalte unter `https://foo.example` sich JSON-Inhalte von der Domain `https://bar.other` holen möchten. Derartige Code könnte in JavaScript eingesetzt werden, das auf `foo.example` bereitgestellt wird:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Austausch zwischen dem Client und dem Server durch, unter Verwendung von CORS-Headern, um die Berechtigungen zu handhaben:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Schauen wir, was der Browser in diesem Fall an den Server senden wird:

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

Der interessante Anforderungsheader ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Nun schauen wir, wie der Server antwortet:

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

Dieses Muster der {{HTTPHeader("Origin")}}-und-{{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourceninhaber auf `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken möchten (d.h. keine andere Domain als `https://foo.example` kann auf die Ressource in einer ursprungsübergreifenden Weise zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Bei einer Antwort auf eine [Anfrage mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) muss der Server einen Ursprung im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt den `*`-Wildcardsymbol zu verwenden.

### Preflight-Anfragen

Anders als [_einfache Anfragen_](#einfache_anfragen) sendet der Browser bei „vorgeprüften“ Anfragen zunächst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf dem anderen Ursprung, um festzustellen, ob die tatsächliche Anfrage sicher gesendet werden kann. Solche ursprungsübergreifenden Anfragen werden vorgeprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die vorgeprüft wird:

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

Das obenstehende Beispiel erstellt einen XML-Körper, der mit der `POST`-Anfrage gesendet wird. Außerdem wird ein nicht-standardmäßiger HTTP-`X-PINGOTHER`-Anforderungsheader gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber allgemein nützlich für Webanwendungen. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage vorab geprüft.

![Diagramm einer Anfrage, die vorgeprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie werden nur für die `OPTIONS`-Anfrage benötigt.

Schauen wir uns den kompletten Austausch zwischen Client und Server an. Der erste Austausch ist die _Preflight-Anfrage/Antwort_:

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

Der erste Block oben stellt die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser stellt fest, dass er dies senden muss, basierend auf den Anforderungsparametern, die der obige JavaScript-Code-Snippet verwendet hat, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht zur Änderung der Ressource verwendet werden kann. Beachten Sie, dass neben der OPTIONS-Anfrage zwei weitere Anforderungsheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header teilt dem Server im Rahmen einer Preflight-Anfrage mit, dass bei der tatsächlichen Anfrage eine `POST`-Anfragemethode verwendet wird. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass bei der tatsächlichen Anfrage die benutzerdefinierten Header `X-PINGOTHER` und `Content-Type` verwendet werden. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt und angibt, dass die Anfragemethode (`POST`) und die Anfrageheader (`X-PINGOTHER`) akzeptabel sind. Werfen wir einen genaueren Blick auf die folgenden Zeilen:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur auf die Anfrage des Ursprungsdomäne einschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, das besagt, dass `POST` und `GET` gültige Methoden sind, um die Ressource in Frage zu stellen (dieser Header entspricht dem {{HTTPHeader("Allow")}}-Antwortheader, wird jedoch streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet außerdem `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type` und bestätigt, dass diese Header mit der tatsächlichen Anfrage verwendet werden dürfen. Ähnlich wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste von akzeptablen Headern.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage zwischengespeichert werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert ist 5 Sekunden. Im aktuellen Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn das `Access-Control-Max-Age` diesen überschreitet.

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

#### Vorab geprüfte Anfragen und Weiterleitungen

Nicht alle Browser unterstützen derzeit das Verfolgen von Weiterleitungen nach einer vorab geprüften Anfrage. Wenn eine Weiterleitung nach einer solchen Anfrage erfolgt, berichten einige Browser derzeit eine Fehlermeldung wie die folgende:

> Die Anfrage wurde an `https://example.com/foo` weitergeleitet, was bei ursprungsübergreifenden Anfragen, die eine Vorprüfung erfordern, nicht erlaubt ist.
> Die Anfrage erfordert eine Vorprüfung, die nicht erlaubte Weiterleitungen über ursprungsübergreifende Zugriffe hinweg ist.

Das CORS-Protokoll erforderte ursprünglich dieses Verhalten, wurde jedoch [anschließend geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich geforderte Verhalten.

Bis die Browser die Spezifikation aufholen, können Sie in der Lage sein, diese Einschränkung zu umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das Serververhalten, um die Vorprüfung und/oder die Weiterleitung zu vermeiden.
- Ändern Sie die Anfrage so, dass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keine Vorprüfung verursacht.

Wenn das nicht möglich ist, dann gibt es eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (mithilfe von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, zu welcher URL die tatsächliche vorab geprüfte Anfrage am Ende gelangen würde.
2. Machen Sie eine weitere Anfrage (die _tatsächliche_ Anfrage) unter Verwendung der URL, die Sie in Schritt eins von `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn jedoch die Anfrage eine ist, die aufgrund der Anwesenheit des `Authorization`-Headers in der Anfrage eine Vorprüfung auslöst, können Sie die Einschränkung nicht mit den oben genannten Schritten umgehen. Und Sie können sie überhaupt nicht umgehen, es sei denn, Sie haben Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldeinformationen

> [!NOTE]
> Bei Anfragen mit Anmeldeinformationen zu einer anderen Domain gelten weiterhin Richtlinien zu Drittanbieter-Cookies. Die Richtlinie wird immer erzwungen, unabhängig von jeglicher Einrichtung auf dem Server und dem Client wie in diesem Kapitel beschrieben.

Die interessanteste Fähigkeit, die durch sowohl [`fetch()`](/de/docs/Web/API/Window/fetch) als auch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS aufgedeckt wird, ist die Fähigkeit, "eingegrenzte" Anfragen zu erstellen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) und HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser in ursprungsübergreifenden `fetch()`-oder `XMLHttpRequest`-Anrufen _keine_ Anmeldeinformationen.

Um eine `fetch()`-Anfrage anzugeben, die Anmeldeinformationen enthält, setzen Sie die Option [`credentials`](/de/docs/Web/API/RequestInit#credentials) auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage anzugeben, die Anmeldeinformationen enthält, setzen Sie die Eigenschaft [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) auf `true`.

In diesem Beispiel erstellt Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine einfache GET-Anfrage zu einer Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf foo.example könnte JavaScript wie dieses enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt, bei dem die Option `credentials` im Konstruktor auf `"include"` gesetzt wird und dieses Anforderungsobjekt dann in `fetch()` übergeben. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorab geprüft, aber der Browser wird **jede** Antwort ablehnen, die nicht den Header {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` hat, und die Antwort **nicht** dem aufrufenden Webinhalt zur Verfügung stellen.

![Diagramm einer einfachen GET-Anfrage mit Access-Control-Allow-Credentials](https://mdn.github.io/shared-assets/images/diagrams/http/cors/include-credentials.svg)

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` bestimmt ist, würde die Antwort ignoriert und nicht dem Webinhalt zur Verfügung gestellt, falls bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header mit dem Wert `true` antworten würde, wie in diesem Beispiel gezeigt.

#### Vorab geprüfte Anfragen und Anmeldeinformationen

CORS-Preflight-Anfragen dürfen niemals Anmeldeinformationen enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldeinformationen gestellt werden kann.

> [!NOTE]
> Einige Enterprise-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, im Widerspruch zur [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 ermöglicht dieses nicht-konforme Verhalten, indem die Präferenz `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox-Fehler 1511151](https://bugzil.la/1511151)). Browser auf Chromium-Basis senden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen ([Chrome-Fehler 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldeinformationen und Wildcards

Beim Antworten auf eine Anfrage mit Anmeldeinformationen:

- Der Server **darf nicht** das `*`-Wildcardsymbol für den `Access-Control-Allow-Origin`-Antwortheader-Wert angeben, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** das `*`-Wildcardsymbol für den `Access-Control-Allow-Headers`-Antwortheader-Wert angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** das `*`-Wildcardsymbol für den `Access-Control-Allow-Methods`-Antwortheader-Wert angeben, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** das `*`-Wildcardsymbol für den `Access-Control-Expose-Headers`-Antwortheader-Wert angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldeinformation beinhaltet (am häufigsten ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header (das heißt, mit dem Wildcardsymbol) enthält, blockiert der Browser den Zugriff auf die Antwort und gibt einen CORS-Fehler in der Entwicklerkonsole aus.

Aber wenn eine Anfrage tatsächlich ein Anmeldeinformation beinhaltet (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung anstatt des Wildcardsymbols enthält (wie zum Beispiel `Access-Control-Allow-Origin: https://example.com`), dann wird dem Browser der Zugriff auf die Antwort von dem angegebenen Ursprung erlaubt.

Beachten Sie außerdem, dass jeder `Set-Cookie`-Antwortheader in einer Antwort kein Cookie setzen würde, wenn der Wert von `Access-Control-Allow-Origin` in dieser Antwort das `*`-Wildcardsymbol wäre, anstatt eines tatsächlichen Ursprungs.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt sind, den normalen Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Benutzers so konfiguriert ist, alle Drittanbieter-Cookies abzulehnen.

Auch Cookies in der Anfrage können in den normalen Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie kann daher die in diesem Kapitel beschriebene Fähigkeit aufheben und Sie effektiv daran hindern, Anfragen mit Anmeldeinformationen überhaupt zu stellen.

Die Cookie-Richtlinie hinsichtlich des [SameSite](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attributs wäre anwendbar.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin Resource Sharing-Spezifikation zurückgeben. Der vorhergehende Abschnitt gibt einen Überblick über diese im Einsatz.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der Browsern sagt, dass dieser Ursprung auf die Ressource zugreifen darf; oder – für Anfragen **ohne** Anmeldeinformationen – das `*`-Wildcardsymbol sagt Browsern, dass jeder Ursprung auf die Ressource zugreifen darf.

Um beispielsweise Code vom Ursprung `https://mozilla.org` den Zugriff auf die Ressource zu ermöglichen, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung (der sich dynamisch ändern kann, basierend auf dem anfragenden Ursprung als Teil einer Whitelist) anstelle des `*`-Wildcardsymbols angibt, sollte der Server außerdem `Origin` im {{HTTPHeader("Vary")}}-Antwortheader enthalten, um den Clients anzuzeigen, dass die Serverantworten auf der Grundlage des Werts des {{HTTPHeader("Origin")}}-Anforderungsheaders variieren.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header der Whitelist hinzu, auf die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Beispielsweise das Folgende:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…würde die Header `X-My-Custom-Header` und `X-Another-Custom-Header` dem Browser zur Verfügung stellen.

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Für ein Beispiel einer Preflight-Anfrage siehe die obigen Beispiele.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der Parameter `delta-seconds` gibt die Anzahl der Sekunden an, die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage exponiert werden kann, wenn das `credentials`-Flag wahr ist. Wenn dieser als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt dies an, ob die tatsächliche Antragstellung unter Verwendung von Anmeldeinformationen erfolgen kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorab geprüft werden, und daher, wenn eine Anfrage für eine Ressource mit Anmeldeinformationen gestellt wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, die Antwort vom Browser ignoriert und dem Webinhalt nicht zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) werden oben besprochen.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}}-Header gibt die Methode oder die Methoden an, die beim Zugriff auf die Ressource erlaubt sind. Dies wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorab geprüft wird, werden oben besprochen.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die serverseitige Antwort auf den von der Browserseite gesendeten {{HTTPHeader("Access-Control-Request-Headers")}}-Header.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anforderungsheader

Dieser Abschnitt listet Header auf, die Clients verwenden können, wenn sie HTTP-Anfragen stellen, um die Funktion zum ursprungsübergreifenden Teilen zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Anrufungen an Server machen. Entwickler, die ursprungsübergreifende Anfragen stellen, müssen keine Header für die Anforderung des ursprungsübergreifenden Teilens programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Anforderung für den ursprungsübergreifenden Zugriff oder Preflight-Anforderung an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage ursprünglich ausgeht. Sie enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Die {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Nutzung können [oben gefunden werden.](#preflight-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden. Dieser browserseitige Header wird durch den ergänzenden serverseitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Nutzung können [oben gefunden werden](#preflight-anfragen).

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
- [Anleitung zur Ausführung des Chrome-Browsers ohne CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitung" Informationen zum Umgang mit häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man die CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy benutzt, um den _"Kein Access-Control-Allow-Origin-Header"_ zu umgehen
  - Wie man _"Access-Control-Allow-Origin-Header muss nicht das Wildcardsymbol sein"_ behebt
