---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/Guides/CORS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Header basierender Mechanismus, der es einem Server ermöglicht, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) außer seinem eigenen ein Browser das Laden von Ressourcen erlauben soll. CORS beruht auch auf einem Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server stellen, der die cross-origin Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulässt. Bei diesem Preflight sendet der Browser Header, die die HTTP-Methode und die Header angeben, die in der tatsächlichen Anfrage verwendet werden.

Ein Beispiel für eine Cross-Origin-Anfrage: Der im Frontend bereitgestellte JavaScript-Code von `https://domain-a.com` verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu stellen.

Aus Sicherheitsgründen beschränken Browser Cross-Origin-HTTP-Anfragen, die von Skripten initiiert werden. Beispielsweise folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur Ressourcen von demselben Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Cross-Origin-Sharing-Standard](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für Folgendes ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben beschrieben.
- Web-Schriften (für die Verwendung von Schriften über Domains hinweg in `@font-face` innerhalb von CSS), wie in den [Schriftanforderungen beim Abrufen](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) beschrieben, damit Server TrueType-Schriften bereitstellen können, die nur über das Cross-Origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf eine Leinwand gezeichnet werden.
- [CSS-Formen aus Bildern.](/de/docs/Web/CSS/Guides/Shapes/From_images)

Dies ist ein allgemeiner Artikel über Cross-Origin Resource Sharing und beinhaltet eine Diskussion der notwendigen HTTP-Header.

## Funktionaler Überblick

Der Cross-Origin Resource Sharing-Standard funktioniert, indem er neue [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) hinzufügt, die es Servern ermöglichen, anzugeben, welche Ursprünge berechtigt sind, diese Informationen aus einem Webbrowser zu lesen. Zusätzlich zu HTTP-Anfragemethoden, die Nebenwirkungen auf Serverdaten verursachen können (insbesondere HTTP-Methoden außer {{HTTPMethod("GET")}}, oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)), verlangt die Spezifikation, dass Browser die Anfrage "vorab überprüfen" und unterstützte Methoden vom Server mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} anfordern und dann, nach "Genehmigung" durch den Server, die eigentliche Anfrage senden. Server können Kunden auch mitteilen, ob "Anmeldeinformationen" (wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind Einzelheiten zu dem Fehler _JavaScript nicht verfügbar_. Der einzige verfügbare Hinweis besteht darin, dass ein Fehler aufgetreten ist. Die einzige Möglichkeit zur Bestimmung, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers nach Details zu durchsuchen.

Die nachfolgenden Abschnitte diskutieren Szenarien und bieten eine Übersicht der verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die demonstrieren, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das Cross-Origin-Anfragen in jedem unterstützenden Browser stellen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Preflight")}} aus. Diese werden _einfache Anfragen_ genannt gemäß der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die CORS jetzt definiert) diesen Begriff nicht verwendet.

Der Grund dafür ist, dass das {{HTMLElement("form")}}-Element von HTML 4.0 (das vor cross-site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) war) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) geschützt sein muss. Angesichts dieser Annahme muss der Server nicht extra zustimmen (indem er auf eine Preflight-Anfrage antwortet), um Anfragen zu erhalten, die wie Formularübermittlungen aussehen, da die CSRF-Bedrohung nicht schlimmer ist als die einer Formularübermittlung. Allerdings muss der Server immer noch mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort mit dem Skript _zu teilen_.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen** erfüllt:

- Eine der erlaubten Methoden:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den Headern, die automatisch vom User-Agent gesetzt werden (z. B. {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder den {{Glossary("Forbidden_request_header", "verbotenen Anforderungsheadern")}}), sind die einzigen Header, die manuell gesetzt werden dürfen, die {{Glossary("CORS-safelisted_request_header", "CORS-gesicherten Anfrageheader")}}, die sind:
  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereich-Header-Wert](https://fetch.spec.whatwg.org/#simple-range-header-value); z. B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen Typ-/Subtype-Kombinationen, die für den {{Glossary("MIME_type", "Medientyp")}} im {{HTTPHeader("Content-Type")}}-Header erlaubt sind, sind:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Falls die Anfrage unter Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht wird, sind keine Ereignis-Listener auf dem Objekt registriert, das von der [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Eigenschaft verwendet wird; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Event-Listener hinzuzufügen, der den Upload überwacht.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Einschränkungen für die Werte in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}}. Falls einer dieser Header "nicht standardmäßige" Werte enthält, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, ist nicht dokumentiert, außer in den folgenden WebKit-Fehlern:
>
> - [Preflight für nicht standardmäßige CORS-sicher gelistete Anfrageheader Require in Accept, Accept-Language und Content-Language](https://webkit.org/b/165178)
> - [Erkundigungen zu erlaubten Kommata in Accept-, Accept-Language- und Content-Language-Headern in einfachen CORS-Anfragen](https://webkit.org/b/165566)
> - [Umstellung auf ein Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Beschränkungen, da sie nicht Teil der Spezifikation sind.

Zum Beispiel möchte der Webinhalt auf `https://foo.example` JSON-Inhalt von der Domain `https://bar.other` abrufen. Ein solcher Code könnte in JavaScript bereitgestellt werden, das auf `foo.example` läuft:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt zu einem einfachen Austausch zwischen dem Client und dem Server, bei dem CORS-Header zum Einsatz kommen, um die Berechtigungen zu verwalten:

![Diagramm einer einfachen CORS-GET-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/cors/simple-request.svg)

Schauen wir uns an, was der Browser in diesem Fall an den Server senden würde:

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

Der bemerkenswerte Header der Anfrage ist {{HTTPHeader("Origin")}}, der zeigt, dass der Aufruf von `https://foo.example` kommt.

Nun sehen wir uns die Antwort des Servers an:

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

Der Server antwortet mit einem {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *`, was bedeutet, dass die Ressource von **jedem** Ursprung aus zugänglich ist.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster des {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Headers ist die einfachste Verwendung des Zugriffskontrollprotokolls. Wenn die Ressourcenbesitzer bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken wollten (d.h. keine andere Domain als `https://foo.example` kann auf die Ressource in einer Cross-Origin-Weise zugreifen), würden sie senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Beim Beantworten einer [Anfrage mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) muss der Server im Wert des `Access-Control-Allow-Origin`-Headers einen Ursprung angeben, anstatt den `*`-Wildcard anzugeben.

### Preflighted-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "preflighted" Anfragen zuerst eine HTTP-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode an die Ressource auf dem anderen Ursprung, um festzustellen, ob die eigentliche Anfrage sicher gesendet werden kann. Solche Cross-Origin-Anfragen werden überprüft, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die überprüft wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht-standardmäßiger `X-PINGOTHER`-HTTP-Anforderungsheader gesetzt. Solche Header sind nicht Teil von HTTP/1.1, aber im Allgemeinen für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet, und da ein benutzerdefinierter Header gesetzt wird, wird diese Anfrage überprüft.

![Diagramm einer Anfrage, die überprüft wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die tatsächliche `POST`-Anfrage nicht die `Access-Control-Request-*` Header; diese sind nur für die `OPTIONS`-Anfrage erforderlich.

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

Der erste Block oben stellt die Preflight-Anfrage mit der {{HTTPMethod("OPTIONS")}}-Methode dar. Der Browser ermittelt, dass er dies basierend auf den Anfrageparametern senden muss, die im JavaScript-Code-Snippet oben verwendet wurden, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage mit den eigentlichen Anfrageparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht zum Ändern der Ressource verwendet werden kann. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anfrageheader gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der {{HTTPHeader("Access-Control-Request-Method")}}-Header teilt dem Server im Rahmen einer Preflight-Anfrage mit, dass, wenn die eigentliche Anfrage gesendet wird, dies mit einer `POST`-Anforderungsmethode erfolgt. Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass, wenn die eigentliche Anfrage gesendet wird, dies mit `X-PINGOTHER` und `Content-Type` benutzerdefinierten Headern erfolgt. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die angibt, dass die Anforderungsmethode (`POST`) und die Anforderungsheader (`X-PINGOTHER`) akzeptabel sind. Lassen Sie uns einen genaueren Blick auf die folgenden Zeilen werfen:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, wodurch der Zugriff nur auf die anfordernde Ursprungsdomain beschränkt wird. Er antwortet auch mit `Access-Control-Allow-Methods`, was besagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ist dem {{HTTPHeader("Allow")}}-Antwortheader ähnlich, wird jedoch streng im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass diese Header verwendet werden dürfen, um die eigentliche Anfrage zu stellen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste akzeptabler Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Preflight-Anfrage im Cache gehalten werden kann, ohne eine weitere Preflight-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn die `Access-Control-Max-Age` ihn übersteigt.

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

Nicht alle Browser unterstützen derzeit das Folgen von Redirects nach einer Preflighted-Anfrage. Wenn nach einer solchen Anfrage eine Weiterleitung erfolgt, melden einige Browser derzeit eine Fehlermeldung wie die folgende:

> Die Anfrage wurde zu `https://example.com/foo` umgeleitet, was bei cross-origin-Anfragen, die Preflight erfordern, nicht erlaubt ist.
> Die Anfrage erfordert Preflight, was nicht erlaubt ist, um Cross-Origin-Redirects zu folgen.

Das CORS-Protokoll hat ursprünglich dieses Verhalten erfordert, wurde jedoch [anschließend geändert, um es nicht mehr zu benötigen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich erforderte Verhalten.

Bis die Browser die Spezifikation übernehmen, könnten Sie in der Lage sein, diese Einschränkung zu umgehen, indem Sie eine oder mehrere der folgenden Maßnahmen ergreifen:

- Ändern Sie das serverseitige Verhalten, um das Preflight zu vermeiden und/oder die Weiterleitung zu vermeiden
- Ändern Sie die Anfrage, sodass sie eine [einfache Anfrage](#einfache_anfragen) ist, die kein Preflight auslöst

Wenn das nicht möglich ist, ist eine andere Möglichkeit:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (unter Verwendung von [`Response.url`](/de/docs/Web/API/Response/url) für die Fetch API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um festzustellen, welche URL die eigentliche Preflighted-Anfrage erreichen würde.
2. Machen Sie eine weitere Anfrage (die _eigentliche_ Anfrage) unter Verwendung der URL, die Sie aus `Response.url` oder `XMLHttpRequest.responseURL` im ersten Schritt erhalten haben.

Wenn die Anfrage eine ist, die wegen des Vorhandenseins des `Authorization`-Headers in der Anfrage ein Preflight auslöst, können Sie die Einschränkung jedoch nicht mit den obigen Schritten umgehen. Und Sie werden sie überhaupt nicht umgehen können, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gestellt wird.

### Anfragen mit Anmeldeinformationen

> [!NOTE]
> Beim Stellen von Anfragen mit Anmeldeinformationen zu einer anderen Domain gelten weiterhin Richtlinien für Drittanbieter-Cookies. Die Richtlinie wird immer umgesetzt, unabhängig von jeglicher Einrichtung auf dem Server und dem Client, wie in diesem Kapitel beschrieben.

Das interessanteste Merkmal, das sowohl von [`fetch()`](/de/docs/Web/API/Window/fetch) als auch von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS freigelegt wird, ist die Fähigkeit, "credentialed" Anfragen zu stellen, die sich der Informationen über [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) und die HTTP-Authentifizierung bewusst sind. Standardmäßig senden Browser bei Cross-Origin `fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldeinformationen.

Um eine `fetch()`-Anfrage zu stellen, die Anmeldeinformationen einbezieht, setzen Sie die Option [`credentials`](/de/docs/Web/API/RequestInit#credentials) auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage zu stellen, die Anmeldeinformationen einbezieht, setzen Sie die Eigenschaft [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) auf `true`.

In diesem Beispiel macht der ursprünglich von `https://foo.example` geladene Inhalt eine GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf foo.example könnte JavaScript wie folgt enthalten:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt und setzt die `credentials`-Option im Konstruktor auf `"include"`, um diese Anfrage dann in `fetch()` einzusetzen. Da es sich um eine einfache `GET`-Anfrage handelt, wird sie nicht vorübergeprüft, aber der Browser wird **jede Antwort ablehnen**, die nicht das {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header mit dem Wert `true` enthält, und die Antwort **nicht** dem aufrufenden Webinhalt zur Verfügung stellen.

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

Obwohl der `Cookie`-Header der Anfrage das Cookie enthält, das für den Inhalt auf `https://bar.other` vorgesehen ist, würde die Antwort ohne {{HTTPHeader("Access-Control-Allow-Credentials")}} mit dem Wert `true`, wie in diesem Beispiel gezeigt, von der Antwort ignoriert und nicht dem Webinhalt zur Verfügung gestellt.

#### Preflight-Anfragen und Anmeldeinformationen

CORS-Preflight-Anfragen dürfen niemals Anmeldeinformationen enthalten. Die _Antwort_ auf eine Preflight-Anfrage muss `Access-Control-Allow-Credentials: true` angeben, um anzuzeigen, dass die eigentliche Anfrage mit Anmeldeinformationen gestellt werden kann.

> [!NOTE]
> Einige Unternehmens-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Preflight-Anfragen gesendet werden, entgegen der [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 erlaubt, dieses nicht konforme Verhalten zu aktivieren, indem die Präferenz `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox Bug 1511151](https://bugzil.la/1511151)). Auf Chromium-basierten Browsern werden derzeit immer TLS-Client-Zertifikate in CORS-Preflight-Anfragen gesendet ([Chrome Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldeinformationen und Platzhalter

Bei der Beantwortung einer Anfrage mit Anmeldeinformationen:

- Der Server **darf nicht** den `*`-Wildcard für den Wert des `Access-Control-Allow-Origin`-Headers angeben, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** den `*`-Wildcard für den Wert des `Access-Control-Allow-Headers`-Headers angeben, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** den `*`-Wildcard für den Wert des `Access-Control-Allow-Methods`-Headers angeben, sondern muss stattdessen eine explizite Liste von Methoden-Namen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** den `*`-Wildcard für den Wert des `Access-Control-Expose-Headers`-Headers angeben, sondern muss stattdessen eine explizite Liste von Header-Namen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage eine Anmeldeinformation (meist einen `Cookie`-Header) enthält und die Antwort einen `Access-Control-Allow-Origin: *` Header enthält (d.h. mit dem Platzhalter), blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Developer-Konsole.

Wenn jedoch eine Anfrage eine Anmeldeinformation enthält (wie den `Cookie`-Header) und die Antwort einen tatsächlichen Ursprung anstelle des Platzhalters enthält (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), lässt der Browser den Zugriff auf die Antwort von dem angegebenen Ursprung zu.

Beachten Sie auch, dass jedwedem `Set-Cookie`-Header in einer Antwort kein Cookie gesetzt wird, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort der `*`-Platzhalter ist, anstatt eines tatsächlichen Ursprungs.

#### Drittanbieter-Cookies

Beachten Sie, dass Cookies, die in CORS-Antworten gesetzt werden, normalen Richtlinien für Drittanbieter-Cookies unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Set-Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde somit nicht gespeichert werden, wenn der Browser des Benutzers so konfiguriert ist, dass er alle Drittanbieter-Cookies ablehnt.

Cookies, die in CORS-Anfragen und -Antworten gesetzt werden, unterliegen normalen Drittanbieter-Cookie-Richtlinien.

Richtlinien für Drittanbieter-Cookies können verhindern, dass Drittanbieter-Cookies in Anfragen gesendet werden, was effektiv eine Seite daran hindert, Anfragen mit Anmeldeinformationen zu stellen, auch wenn dies vom Drittanbieter-Server zugelassen ist (unter Verwendung von `Access-Control-Allow-Credentials`).
Die Standardrichtlinie unterscheidet sich zwischen den Browsern, kann jedoch mit dem [SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut eingestellt werden.

Selbst wenn Anfragen mit Anmeldeinformationen zugelassen sind, kann ein Browser so konfiguriert sein, dass er alle Drittanbieter-Cookies in Antworten ablehnt.

## Die HTTP-Antwortheader

Dieser Abschnitt listet die HTTP-Antwortheader auf, die Server für Zugriffskontrollanfragen zurückgeben, wie es von der Cross-Origin Resource Sharing-Spezifikation definiert ist. Der vorherige Abschnitt bietet eine Übersicht dieser in der Praxis.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit der folgenden Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` gibt entweder einen einzelnen Ursprung an, der Browsern erlaubt, diesen Ursprung die Ressource zugreifen zu lassen, oder — für Anfragen **ohne** Anmeldeinformationen — sagt der `*`-Wildcard den Browsern, dass jeder Ursprung auf die Ressource zugreifen kann.

Zum Beispiel, um Code vom Ursprung `https://mozilla.org` den Zugriff auf die Ressource zu ermöglichen, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzelnen Ursprung angibt (der sich basierend auf dem anfordernden Ursprung als Teil einer `Allowlist` dynamisch ändern kann), anstelle des `*`-Wildcard, dann sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwortheader einschließen, um den Clients mitzuteilen, dass sich die Serverantworten basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anfrageheaders unterscheiden.

### Access-Control-Expose-Headers

Der {{HTTPHeader("Access-Control-Expose-Headers")}}-Header fügt die angegebenen Header der Allowlist hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen darf.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, das Folgende würde die Header `X-My-Custom-Header` und `X-Another-Custom-Header` für den Zugriff durch den Browser freigeben:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

### Access-Control-Max-Age

Der {{HTTPHeader("Access-Control-Max-Age")}}-Header gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Preflight-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Das `delta-seconds`-Parameter gibt die Anzahl von Sekunden an, für die die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag wahr ist. Wenn es als Teil einer Antwort auf eine Preflight-Anfrage verwendet wird, gibt es an, ob die eigentliche Anfrage mit Anmeldeinformationen gemacht werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorübergeprüft werden und daher, wenn eine Anfrage mit Anmeldeinformationen gestellt wird, wenn dieser Header nicht mit der Ressource zurückgegeben wird, die Antwort vom Browser ignoriert und nicht an den Webinhalt zurückgegeben wird.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der {{HTTPHeader("Access-Control-Allow-Methods")}} gibt die erlaubte Methode oder Methoden beim Zugriff auf die Ressource an. Dieser wird als Antwort auf eine Preflight-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorübergeprüft wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der {{HTTPHeader("Access-Control-Allow-Headers")}}-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden können. Dieser Header ist die serverseitige Antwort auf den {{HTTPHeader("Access-Control-Request-Headers")}}-Header des Browsers.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrageheader

Dieser Abschnitt listet Header auf, die Clients beim Ausführen von HTTP-Anfragen verwenden können, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie gesetzt werden, wenn Sie Anfragen an Server senden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anfrageheader programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header gibt den Ursprung der Cross-Origin-Zugriffsanfrage oder Preflight-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage ausgeht. Sie enthält keine Pfadinformationen, sondern nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass bei jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird beim Stellen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die eigentliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Nutzung finden Sie [oben.](#preflighted-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird beim Stellen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gestellt wird (zum Beispiel durch Übergabe als [`headers`](/de/docs/Web/API/RequestInit#headers) Option). Dieser Browser-seitige Header wird durch den komplementären server-seitigen Header von {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Nutzung finden Sie [oben](#preflighted-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer und -Generator
- [Wie man Chrome ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow-Antwort mit "Anleitungen" für den Umgang mit allgemeinen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):
  - Wie man den CORS-Preflight vermeidet
  - Wie man einen CORS-Proxy verwendet, um das Problem _"Kein Access-Control-Allow-Origin-Header"_ zu umgehen
  - Wie man das Problem _"Access-Control-Allow-Origin-Header darf nicht der Platzhalter sein"_ behebt
