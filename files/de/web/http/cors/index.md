---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS", "CORS")}}) ist ein auf {{Glossary("HTTP", "HTTP")}}-Headern basierender Mechanismus, der einem Server ermöglicht, anzugeben, welche {{Glossary("origin", "Ursprünge")}} (Domain, Schema oder Port) zusätzlich zu seinem eigenen von einem Browser zugelassen sein sollen, um Ressourcen zu laden. CORS basiert ebenfalls auf einem Mechanismus, bei dem Browser eine "Preflight"-Anfrage an den Server richten, der die Cross-Origin-Ressource hostet, um zu überprüfen, ob der Server die eigentliche Anfrage zulässt. Bei diesem Preflight sendet der Browser Header, die die HTTP-Methode und die Header der eigentlichen Anfrage angeben.

Ein Beispiel für eine Cross-Origin-Anfrage: Der Front-End-JavaScript-Code, der von `https://domain-a.com` bereitgestellt wird, verwendet [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Anfrage für `https://domain-b.com/data.json` zu senden.

Aus Sicherheitsgründen beschränken Browser das Starten von Cross-Origin-HTTP-Anfragen aus Skripten. Zum Beispiel folgen `fetch()` und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung mit diesen APIs nur Ressourcen vom gleichen Ursprung anfordern kann, von dem die Anwendung geladen wurde, es sei denn, die Antwort von anderen Ursprüngen enthält die richtigen CORS-Header.

![Diagrammatische Darstellung des CORS-Mechanismus](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datentransfers zwischen Browsern und Servern. Browser verwenden CORS in APIs wie `fetch()` oder `XMLHttpRequest`, um die Risiken von Cross-Origin-HTTP-Anfragen zu mindern.

## Welche Anfragen verwenden CORS?

Dieser [Standard für Cross-Origin-Sharing](https://fetch.spec.whatwg.org/#http-cors-protocol) kann Cross-Origin-HTTP-Anfragen für folgende Fälle ermöglichen:

- Aufrufe von `fetch()` oder `XMLHttpRequest`, wie oben besprochen.
- Web Fonts (für Cross-Domain-Schriftverwendung in `@font-face` innerhalb von CSS), [damit Server TrueType-Schriften bereitstellen können, die nur Cross-Origin geladen und von Websites verwendet werden können, die dazu berechtigt sind.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Bilder/Video-Frames, die mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf einem Canvas gezeichnet werden.
- [CSS Shapes aus Bildern.](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images)

Dieser Artikel ist eine allgemeine Einführung in Cross-Origin Resource Sharing und beinhaltet eine Diskussion der notwendigen HTTP-Header.

## Funktionale Übersicht

Der Standard für Cross-Origin Resource Sharing funktioniert durch das Hinzufügen neuer [HTTP-Header](/de/docs/Web/HTTP/Headers), die Servern erlauben zu beschreiben, welche Ursprünge berechtigt sind, Informationen von einem Webbrowser zu lesen. Darüber hinaus verlangt die Spezifikation für HTTP-Anfragemethoden, die Nebenwirkungen auf Serverdaten haben können (insbesondere HTTP-Methoden, die {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} mit bestimmten [MIME-Typen](/de/docs/Web/HTTP/MIME_types) sind), dass Browser die Anfrage "vorfliegen", indem sie unterstützte Methoden vom Server mit der HTTP-Methode {{HTTPMethod("OPTIONS")}} erfragen und dann nach "Genehmigung" durch den Server die eigentliche Anfrage senden. Server können Kunden auch darüber informieren, ob "Anmeldeinformationen" (wie [Cookies](/de/docs/Web/HTTP/Cookies) und [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)) mit Anfragen gesendet werden sollen.

CORS-Fehler führen zu Fehlern, aber aus Sicherheitsgründen sind spezifische Details zu dem Fehler _nicht für JavaScript verfügbar_. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, ist, die Konsole des Browsers nach Details zu durchsuchen.

Die nachfolgenden Abschnitte diskutieren Szenarien und liefern eine Aufschlüsselung der verwendeten HTTP-Header.

## Beispiele für Zugriffskontrollszenarien

Wir präsentieren drei Szenarien, die zeigen, wie Cross-Origin Resource Sharing funktioniert. Alle diese Beispiele verwenden [`fetch()`](/de/docs/Web/API/Window/fetch), das Cross-Origin-Anfragen in jedem unterstützenden Browser ausführen kann.

### Einfache Anfragen

Einige Anfragen lösen keine {{Glossary("Preflight_request", "CORS-Vorprüfung")}} aus. Diese werden als _einfache Anfragen_ aus der veralteten [CORS-Spezifikation](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology) bezeichnet, obwohl die [Fetch-Spezifikation](https://fetch.spec.whatwg.org/) (die jetzt CORS definiert) diesen Begriff nicht verwendet.

Die Motivation ist, dass das {{HTMLElement("form")}}-Element von HTML 4.0 (das älter ist als cross-site [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)) einfache Anfragen an jeden Ursprung senden kann, sodass jeder, der einen Server schreibt, bereits gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} (CSRF) geschützt sein muss. Unter dieser Annahme muss der Server sich nicht anmelden (indem er auf eine Vorab-Anfrage antwortet), um eine Anfrage zu erhalten, die einer Formulareinreichung ähnelt, da die Bedrohung durch CSRF nicht schlimmer ist als die durch die Formularübermittlung. Der Server muss jedoch dennoch mit {{HTTPHeader("Access-Control-Allow-Origin")}} zustimmen, um die Antwort _mit_ dem Skript zu teilen.

Eine _einfache Anfrage_ ist eine, die **alle folgenden Bedingungen erfüllt**:

- Eine der erlaubten Methoden:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Abgesehen von den Headern, die automatisch vom Benutzeragenten gesetzt werden (zum Beispiel {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}} oder [die anderen in der Fetch-Spezifikation als _verbotener Headername_ definierten Header](https://fetch.spec.whatwg.org/#forbidden-header-name)), dürfen nur die Header manuell gesetzt werden, die die Fetch-Spezifikation als CORS-sichere Anforderungs-Header definiert, die sind:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (bitte beachten Sie die zusätzlichen Anforderungen unten)
  - {{HTTPHeader("Range")}} (nur mit einem [einfachen Bereichs-Headerwert](https://fetch.spec.whatwg.org/#simple-range-header-value); z.B. `bytes=256-` oder `bytes=127-255`)

- Die einzigen zulässigen Typen/Subtypen-Kombinationen für den im Header {{HTTPHeader("Content-Type")}} angegebenen {{Glossary("MIME_type", "Medientyp")}} sind:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Wenn die Anfrage mit einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gestellt wird, sind keine Ereignis-Listener in dem vom [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload)-Attribut zurückgegebenen Objekt in der Anfrage registriert; das heißt, bei einer Instanz von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `xhr` hat kein Code `xhr.upload.addEventListener()` aufgerufen, um einen Ereignis-Listener hinzuzufügen, um den Upload zu überwachen.
- Kein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt wird in der Anfrage verwendet.

> [!NOTE]
> WebKit Nightly und Safari Technology Preview setzen zusätzliche Beschränkungen für die in den Headern {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} zugelassenen Werte. Wenn einer dieser Header "nicht standardmäßige" Werte enthält, betrachtet WebKit/Safari die Anfrage nicht als "einfache Anfrage". Welche Werte WebKit/Safari als "nicht standardmäßig" betrachten, ist nicht dokumentiert, außer in den folgenden WebKit-Bugs:
>
> - [Vorab-Anfrage für nicht standardmäßige CORS-sichere Anforderungs-Header Accept, Accept-Language und Content-Language erforderlich](https://webkit.org/b/165178)
> - [Erlaube Kommas in Anfrage-Headern für Accept, Accept-Language und Content-Language bei einfachen CORS](https://webkit.org/b/165566)
> - [Wechsel zu einem Blacklist-Modell für eingeschränkte Accept-Header in einfachen CORS-Anfragen](https://webkit.org/b/166363)
>
> Keine anderen Browser implementieren diese zusätzlichen Einschränkungen, da sie nicht Teil der Spezifikation sind.

Zum Beispiel: Angenommen, Web-Inhalte bei `https://foo.example` möchten JSON-Inhalte von der Domain `https://bar.other` abrufen. Solche Art von Code könnte in JavaScript eingesetzt werden, das auf `foo.example` bereitgestellt wird:

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Dieser Vorgang führt einen einfachen Datenaustausch zwischen dem Client und dem Server durch und verwendet CORS-Header, um die Berechtigungen zu verwalten:

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

Der beachtenswerte Anfrage-Header ist {{HTTPHeader("Origin")}}, der anzeigt, dass der Aufruf von `https://foo.example` kommt.

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

Als Antwort sendet der Server einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit `Access-Control-Allow-Origin: *`, was bedeutet, dass die Ressource von **jedem** Ursprung abgerufen werden kann.

```http
Access-Control-Allow-Origin: *
```

Dieses Muster der {{HTTPHeader("Origin")}}- und {{HTTPHeader("Access-Control-Allow-Origin")}}-Header ist die einfachste Nutzung des Zugriffskontrollprotokolls. Wenn die Ressourcenbesitzer bei `https://bar.other` den Zugriff auf die Ressource auf Anfragen _nur_ von `https://foo.example` beschränken möchten (d.h. keine andere Domain als `https://foo.example` darf die Ressource in einer Cross-Origin-Weise abfragen), würden sie folgendes senden:

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> Wenn auf eine [anmeldebasierten Anfragen](#anfragen_mit_anmeldeinformationen) Anfrage geantwortet wird, muss der Server einen Ursprung im Wert des `Access-Control-Allow-Origin`-Headers angeben, anstatt den `*` Platzhalter zu spezifizieren.

### Vorab-Anfragen

Im Gegensatz zu [_einfachen Anfragen_](#einfache_anfragen) sendet der Browser bei "vorafgeflogenen" Anfragen zuerst eine HTTP-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} an die Ressource auf dem anderen Ursprung, um festzustellen, ob die eigentliche Anfrage sicher zu senden ist. Solche Cross-Origin-Anfragen werden vorabgeflogen, da sie Auswirkungen auf Benutzerdaten haben können.

Das folgende ist ein Beispiel für eine Anfrage, die vorabgeflogen wird:

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

Das obige Beispiel erstellt einen XML-Body, der mit der `POST`-Anfrage gesendet werden soll. Außerdem wird ein nicht standardmäßiger HTTP-`X-PINGOTHER`-Anforderungs-Header gesetzt. Solche Header sind nicht Teil von HTTP/1.1, sind aber im Allgemeinen für Webanwendungen nützlich. Da die Anfrage einen `Content-Type` von `text/xml` verwendet und ein benutzerdefinierter Header gesetzt ist, wird diese Anfrage vorabgeflogen.

![Diagramm einer Anfrage, die vorabgeflogen wird](https://mdn.github.io/shared-assets/images/diagrams/http/cors/preflight-correct.svg)

> [!NOTE]
> Wie unten beschrieben, enthält die eigentliche `POST`-Anfrage nicht die `Access-Control-Request-*`-Header; sie sind nur für die `OPTIONS`-Anfrage notwendig.

Betrachten wir den vollständigen Austausch zwischen Client und Server. Der erste Austausch ist die _Vorabfrage/-antwort_:

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

Der erste Block oben stellt die Vorab-Anfrage mit der Methode {{HTTPMethod("OPTIONS")}} dar. Der Browser bestimmt, dass er diese Anfrage senden muss, basierend auf den Anforderungsparametern, die der obige JavaScript-Code-Schnipsel verwendet, damit der Server antworten kann, ob es zulässig ist, die Anfrage mit den tatsächlichen Anforderungsparametern zu senden. OPTIONS ist eine HTTP/1.1-Methode, die verwendet wird, um weitere Informationen von Servern zu erhalten, und ist eine {{Glossary("Safe/HTTP", "sichere")}} Methode, was bedeutet, dass sie nicht verwendet werden kann, um die Ressource zu ändern. Beachten Sie, dass zusammen mit der OPTIONS-Anfrage zwei andere Anforderungs-Header gesendet werden:

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der Header {{HTTPHeader("Access-Control-Request-Method")}} benachrichtigt den Server als Teil einer Vorab-Anfrage, dass die tatsächliche Anfrage mit der `POST`-Anfragemethode gesendet wird. Der Header {{HTTPHeader("Access-Control-Request-Headers")}} benachrichtigt den Server, dass die tatsächliche Anfrage mit den benutzerdefinierten Headern `X-PINGOTHER` und `Content-Type` gesendet wird. Jetzt hat der Server die Möglichkeit zu bestimmen, ob er eine Anfrage unter diesen Bedingungen akzeptieren kann.

Der zweite Block oben ist die Antwort, die der Server zurückgibt, die anzeigt, dass die Anfragemethode (`POST`) und die Anforderungs-Header (`X-PINGOTHER`) akzeptabel sind. Lassen Sie uns die folgenden Zeilen genauer anschauen:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

Der Server antwortet mit `Access-Control-Allow-Origin: https://foo.example`, was den Zugriff nur für die anfragende Ursprungsdomain einschränkt. Er antwortet auch mit `Access-Control-Allow-Methods`, was sagt, dass `POST` und `GET` gültige Methoden sind, um die betreffende Ressource abzufragen (dieser Header ähnelt dem {{HTTPHeader("Allow")}}-Antwortheader, wird jedoch ausschließlich im Kontext der Zugriffskontrolle verwendet).

Der Server sendet auch `Access-Control-Allow-Headers` mit einem Wert von `X-PINGOTHER, Content-Type`, was bestätigt, dass diese Header bei der tatsächlichen Anfrage verwendet werden dürfen. Wie `Access-Control-Allow-Methods` ist `Access-Control-Allow-Headers` eine durch Kommas getrennte Liste zulässiger Header.

Schließlich gibt {{HTTPHeader("Access-Control-Max-Age")}} den Wert in Sekunden an, wie lange die Antwort auf die Vorab-Anfrage zwischengespeichert werden kann, ohne eine weitere Vorab-Anfrage zu senden. Der Standardwert beträgt 5 Sekunden. Im vorliegenden Fall beträgt das maximale Alter 86400 Sekunden (= 24 Stunden). Beachten Sie, dass jeder Browser einen [maximalen internen Wert](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age) hat, der Vorrang hat, wenn der `Access-Control-Max-Age` diesen übersteigt.

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

#### Vorab-Anfragen und Redirects

Nicht alle Browser unterstützen derzeit das Folgen von Redirects nach einer vorabgeflogenen Anfrage. Wenn ein Redirect nach einer solchen Anfrage erfolgt, melden einige Browser aktuell eine Fehlermeldung wie die folgende:

> Die Anfrage wurde auf `https://example.com/foo` umgeleitet, was bei Cross-Origin-Anfragen, die eine Vorab-Anfrage erfordern, nicht erlaubt ist.
> Anforderung erfordert Vorab-Anfrage, was das Folgen von Cross-Origin-Redirects nicht erlaubt.

Das CORS-Protokoll hat ursprünglich dieses Verhalten gefordert, wurde aber [später geändert, um es nicht mehr zu verlangen](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Allerdings haben nicht alle Browser die Änderung implementiert und zeigen daher immer noch das ursprünglich geforderte Verhalten.

Bis Browser die Spezifikation einholen, können Sie möglicherweise dieses Limit umgehen, indem Sie eine oder beide der folgenden Maßnahmen ergreifen:

- Ändern Sie das Server-Verhalten, um die Vorab-Anfrage und/oder das Redirect zu vermeiden
- Ändern Sie die Anfrage, sodass sie eine [einfache Anfrage](#einfache_anfragen) ist, die keine Vorab-Anfrage auslöst

Wenn das nicht möglich ist, gibt es einen anderen Weg:

1. Machen Sie eine [einfache Anfrage](#einfache_anfragen) (using [`Response.url`](/de/docs/Web/API/Response/url) bei der Fetch-API oder [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL)), um zu bestimmen, welche URL die echte vorabgeflogene Anfrage ansteuern würde.
2. Machen Sie eine weitere Anfrage (die _echte_ Anfrage) mit der URL, die Sie im ersten Schritt aus `Response.url` oder `XMLHttpRequest.responseURL` erhalten haben.

Wenn es sich jedoch um eine Anfrage handelt, die eine Vorab-Anfrage aufgrund der Präsenz des `Authorization`-Headers in der Anfrage auslöst, können Sie das Limit nicht mit den obigen Schritten umgehen. Und Sie können es überhaupt nicht umgehen, es sei denn, Sie haben die Kontrolle über den Server, an den die Anfrage gesendet wird.

### Anfragen mit Anmeldeinformationen

> [!NOTE]
> Bei der Erstellung von Anfragen mit Anmeldeinformationen an eine andere Domain gelten immer noch die Richtlinien für Drittanbieter-Cookies. Die Richtlinie wird stets unabhängig von jeglichen Einstellungen auf dem Server und dem Client, wie in diesem Kapitel beschrieben, durchgesetzt.

Die interessanteste Fähigkeit, die man sowohl mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und CORS erhält, ist die Möglichkeit, "anmeldungsfähige" Anfragen zu tätigen, die sich der [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) und der HTTP-Authentifizierungsinformationen bewusst sind. Standardmäßig senden Browser bei Cross-Origin-`fetch()`- oder `XMLHttpRequest`-Aufrufen _keine_ Anmeldeinformationen.

Um eine `fetch()`-Anfrage zu bitten, Anmeldeinformationen einzuschließen, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.

Um eine `XMLHttpRequest`-Anfrage mit Anmeldeinformationen zu stellen, setzen Sie die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.

In diesem Beispiel stellt Inhalt, der ursprünglich von `https://foo.example` geladen wurde, eine einfache GET-Anfrage an eine Ressource auf `https://bar.other`, die Cookies setzt. Inhalt auf `foo.example` könnte JavaScript enthalten, das so aussieht:

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

Dieser Code erstellt ein [`Request`](/de/docs/Web/API/Request)-Objekt und setzt die `credentials` Option im Konstruktor auf `"include"`, danach übergibt es dieses Request-Objekt an `fetch()`. Da dies eine einfache `GET`-Anfrage ist, wird sie nicht vorabgeflogen, aber der Browser wird **jede** Antwort ablehnen, die nicht den Header {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` enthält, und **nicht** die Antwort dem aufrufenden Webinhalt zur Verfügung stellen.

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

Obwohl der `Cookie`-Header der Anfrage das für die Inhalte auf `https://bar.other` bestimmte Cookie enthält, wenn bar.other nicht mit einem {{HTTPHeader("Access-Control-Allow-Credentials")}} mit Wert `true` antwortete, wie in diesem Beispiel gezeigt, würde die Antwort ignoriert und nicht dem Webinhalt zur Verfügung gestellt.

#### Vorab-Anfragen und Anmeldeinformationen

CORS-Vorab-Anfragen dürfen niemals Anmeldeinformationen einbeziehen. Die _Antwort_ auf eine Vorab-Anfrage muss `Access-Control-Allow-Credentials: true` spezifizieren, um anzuzeigen, dass die tatsächliche Anfrage mit Anmeldeinformationen gesendet werden kann.

> [!NOTE]
> Einige Unternehmens-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in Vorab-Anfragen gesendet werden, im Gegensatz zur [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials)-Spezifikation.
>
> Firefox 87 erlaubt dieses nicht-konforme Verhalten, um aktiviert zu werden, indem die Voreinstellung: `network.cors_preflight.allow_client_cert` auf `true` gesetzt wird ([Firefox-Bug 1511151](https://bugzil.la/1511151)). Auf Chromium-basierte Browser senden derzeit immer TLS-Client-Zertifikate in CORS-Vorab-Anfragen ([Chrome-Bug 775438](https://crbug.com/775438)).

#### Anfragen mit Anmeldeinformationen und Wildcards

Bei der Antwort auf eine Anfrage mit Anmeldeinformationen:

- Der Server **darf nicht** den `*` Platzhalter für den Wert des Headers `Access-Control-Allow-Origin` angeben, sondern muss stattdessen einen expliziten Ursprung angeben; zum Beispiel: `Access-Control-Allow-Origin: https://example.com`
- Der Server **darf nicht** den `*` Platzhalter für den Wert des Headers `Access-Control-Allow-Headers` angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`
- Der Server **darf nicht** den `*` Platzhalter für den Wert des Headers `Access-Control-Allow-Methods` angeben, sondern muss stattdessen eine explizite Liste von Methodennamen angeben; zum Beispiel, `Access-Control-Allow-Methods: POST, GET`
- Der Server **darf nicht** den `*` Platzhalter für den Wert des Headers `Access-Control-Expose-Headers` angeben, sondern muss stattdessen eine explizite Liste von Headernamen angeben; zum Beispiel, `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Wenn eine Anfrage ein Anmeldekennzeichen enthält (am häufigsten ein `Cookie`-Header) und die Antwort einen `Access-Control-Allow-Origin: *`-Header enthält (das heißt mit dem Platzhalter), blockiert der Browser den Zugriff auf die Antwort und meldet einen CORS-Fehler in der Entwicklungskonsole.

Wenn jedoch eine Anfrage ein Anmeldekennzeichen enthält (wie den `Cookie`-Header) und die Antwort anstelle des Platzhalters einen tatsächlichen Ursprung enthält (zum Beispiel `Access-Control-Allow-Origin: https://example.com`), erlaubt der Browser den Zugriff auf die Antwort vom angegebenen Ursprung.

Beachten Sie auch, dass jeder `Set-Cookie`-Antwort-Header in einer Antwort kein Cookie einstellt, wenn der `Access-Control-Allow-Origin`-Wert in dieser Antwort der `*` Platzhalter anstelle eines tatsächlichen Ursprunges ist.

#### Drittanbieter-Cookies

Beachten Sie, dass in CORS-Antworten gesetzte Cookies den regulären Drittanbieter-Cookie-Richtlinien unterliegen. Im obigen Beispiel wird die Seite von `foo.example` geladen, aber der `Cookie`-Header in der Antwort wird von `bar.other` gesendet und würde daher nicht gespeichert werden, wenn der Browser des Benutzers konfiguriert ist, alle Drittanbieter-Cookies abzulehnen.

Cookies in der Anfrage können auch in den regulären Drittanbieter-Cookie-Richtlinien unterdrückt werden. Die durchgesetzte Cookie-Richtlinie könnte daher die Fähigkeit, die in diesem Kapitel beschrieben wird, nullifizieren, effektiv verhindern, dass Sie Anfragen mit Anmeldeinformationen überhaupt stellen können.

Die Cookie-Richtlinien zum [SameSite](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut würden angewendet werden.

## Die HTTP-Antwort-Header

Dieser Abschnitt listet die HTTP-Antwort-Header auf, die Server für Zugriffskontrollanfragen gemäß der Cross-Origin-Resource-Sharing-Spezifikation zurückgeben. Der vorherige Abschnitt gibt einen Überblick über diese in Aktion.

### Access-Control-Allow-Origin

Eine zurückgegebene Ressource kann einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header mit folgendem Syntax haben:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` spezifiziert entweder einen einzelnen Ursprung, der Browsern erlaubt, diesen Ursprung auf die Ressource zugreifen zu lassen; oder - für Anfragen **ohne** Anmeldeinformationen - der `*`-Wildcard, der Browsern erlaubt, von jedem Ursprung aus auf die Ressource zuzugreifen.

Zum Beispiel, um dem Code aus dem Ursprung `https://mozilla.org` Zugriff auf die Ressource zu ermöglichen, können Sie angeben:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Wenn der Server einen einzigen Ursprung angibt (der sich dynamisch basierend auf dem anfragenden Ursprung als Teil einer Zulassungsliste ändern kann) anstelle des Platzhalters `*`, dann sollte der Server auch `Origin` im {{HTTPHeader("Vary")}}-Antwort-Header enthalten, um den Clients anzuzeigen, dass Serverantworten sich basierend auf dem Wert des {{HTTPHeader("Origin")}}-Anfrage-Headers unterscheiden werden.

### Access-Control-Expose-Headers

Der Header {{HTTPHeader("Access-Control-Expose-Headers")}} fügt die angegebenen Header zur Zulassungsliste hinzu, die JavaScript (wie [`Response.headers`](/de/docs/Web/API/Response/headers)) in Browsern zugreifen kann.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Zum Beispiel, das folgende:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

…würde es erlauben, dass die Header `X-My-Custom-Header` und `X-Another-Custom-Header` dem Browser ausgesetzt werden.

### Access-Control-Max-Age

Der Header {{HTTPHeader("Access-Control-Max-Age")}} gibt an, wie lange die Ergebnisse einer Vorab-Anfrage zwischengespeichert werden können. Ein Beispiel für eine Vorab-Anfrage finden Sie in den obigen Beispielen.

```http
Access-Control-Max-Age: <delta-seconds>
```

Der Parameter `delta-seconds` gibt die Anzahl der Sekunden an, in denen die Ergebnisse zwischengespeichert werden können.

### Access-Control-Allow-Credentials

Der Header {{HTTPHeader("Access-Control-Allow-Credentials")}} gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das `credentials`-Flag gesetzt ist. Wenn er als Teil einer Antwort auf eine Vorab-Anfrage verwendet wird, zeigt er an, ob die eigentliche Anfrage mit Anmeldeinformationen ausgeführt werden kann. Beachten Sie, dass einfache `GET`-Anfragen nicht vorabgeflogen werden, und wenn eine Anfrage für eine Ressource mit Anmeldeinformationen gestellt wird, wird die Antwort von der Ressource ignoriert, wenn dieser Header nicht zurückgegeben wird, und wird dem Webinhalt nicht zurückgegeben.

```http
Access-Control-Allow-Credentials: true
```

[Anfragen mit Anmeldeinformationen](#anfragen_mit_anmeldeinformationen) werden oben diskutiert.

### Access-Control-Allow-Methods

Der Header {{HTTPHeader("Access-Control-Allow-Methods")}} gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource zulässig sind. Dieser wird als Antwort auf eine Vorab-Anfrage verwendet. Die Bedingungen, unter denen eine Anfrage vorabgeflogen wird, werden oben diskutiert.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Ein Beispiel für eine {{Glossary("preflight_request", "Vorab-Anfrage")}} wird oben gegeben, einschließlich eines Beispiels, das diesen Header an den Browser sendet.

### Access-Control-Allow-Headers

Der Header {{HTTPHeader("Access-Control-Allow-Headers")}} wird als Antwort auf eine {{Glossary("preflight_request", "Vorab-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können. Dieser Header ist die Antwort des Servers auf den vom Browser gesandten {{HTTPHeader("Access-Control-Request-Headers")}}-Header.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Die HTTP-Anfrage-Header

Dieser Abschnitt listet Header auf, die Clients verwenden können, wenn sie HTTP-Anfragen stellen, um die Cross-Origin-Sharing-Funktion zu nutzen. Beachten Sie, dass diese Header für Sie beim Aufruf von Servern gesetzt werden. Entwickler, die Cross-Origin-Anfragen stellen, müssen keine Cross-Origin-Sharing-Anfrage-Header programmatisch setzen.

### Origin

Der {{HTTPHeader("Origin")}}-Header zeigt den Ursprung der Cross-Origin-Zugriffsanfrage oder Vorab-Anfrage an.

```http
Origin: <origin>
```

Der Ursprung ist eine URL, die den Server angibt, von dem die Anfrage initiiert wird. Sie enthält keine Pfadinformationen, nur den Servernamen.

> [!NOTE]
> Der `origin`-Wert kann `null` sein.

Beachten Sie, dass in jeder Zugriffskontrollanfrage der {{HTTPHeader("Origin")}}-Header **immer** gesendet wird.

### Access-Control-Request-Method

Der {{HTTPHeader("Access-Control-Request-Method")}} wird verwendet, wenn eine Vorab-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Methode verwendet wird, wenn die tatsächliche Anfrage gestellt wird.

```http
Access-Control-Request-Method: <method>
```

Beispiele für diese Verwendung finden Sie [oben.](#vorab-anfragen)

### Access-Control-Request-Headers

Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header wird verwendet, wenn eine Vorab-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die tatsächliche Anfrage gestellt wird (zum Beispiel, indem sie als [`headers`](/de/docs/Web/API/RequestInit#headers)-Option übergeben werden). Dieser browserseitige Header wird vom Komplementärserver-Seiten-Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet.

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

Beispiele für diese Verwendung finden Sie [oben](#vorab-anfragen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- [CORS aktivieren: Ich möchte meinem Server CORS-Unterstützung hinzufügen](https://enable-cors.org/server.html)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Will it CORS?](https://httptoolkit.com/will-it-cors/) - ein interaktiver CORS-Erklärer & Generator
- [Wie man den Chrome-Browser ohne CORS ausführt](https://alfilatov.com/posts/run-chrome-without-cors/)
- [CORS mit allen (modernen) Browsern verwenden](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow Antwort mit "Anleitung" zur Behandlung von häufigen Problemen](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Wie man die CORS-Vorab-Anfrage vermeidet
  - Wie man einen CORS-Proxy verwendet, um das Problem _"No Access-Control-Allow-Origin header"_ zu umgehen
  - Wie man das Problem _"Access-Control-Allow-Origin header must not be the wildcard"_ löst
