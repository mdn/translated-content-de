---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 667c1884597a2b576a5b51e0129f3c27a532cff6
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, die zum Konfigurieren einer Fetch-Anfrage verwendet werden können.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Funktionsaufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben.

Sie können auch eine `Request` mit einem `RequestInit` konstruieren und die `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen festgelegt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anforderung eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution-Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}

  - : Der Anfragekörper enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einem {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfrage. Es wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Einen Körper setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, diese aber [abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _wird_ jedoch den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _frisch oder abgestanden_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _frisch oder abgestanden_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _frisch oder abgestanden_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Gezwungene Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Weiterleitungen den `"same-origin"`-Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Bestimmt, ob der Browser Anmeldedaten mit der Anfrage sendet oder nicht und ob **`Set-Cookie`**-Antwortheader respektiert werden. Anmeldedaten sind Cookies, [TLS](/de/docs/Glossary/TLS)-Clientzertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einen der folgenden Werte haben:

    - `omit`
      - : Niemals Anmeldedaten in die Anfrage oder Antwort einschließen.
    - `same-origin`
      - : Anmeldedaten nur für gleichorigin-Bedingungen senden und einschließen.
    - `include`
      - : Anmeldedaten immer einschließen, auch für Cross-Origin-Anfragen.

    Das Einbeziehen von Anmeldedaten in Cross-Origin-Anfragen kann eine Seite für [CSRF](/de/docs/Glossary/CSRF)-Angriffe anfällig machen, daher muss der Server auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort einschließt. Zusätzlich muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (d.h. `*` ist nicht erlaubt).

    Siehe [Einbeziehung von Anmeldedaten](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standard ist `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie zu Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem objektliteralen, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden [verbotene Header-Namen](/de/docs/Glossary/Forbidden_header_name) genannt.

    Wenn die Option `mode` auf `no-cors` gesetzt ist, können Sie nur [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity`

  - : Enthält den Wert der [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) der Anfrage.

    Dies wird beim Abrufen der Ressource geprüft, genau wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den [Hash](/de/docs/Glossary/Cryptographic_hash_function) der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, lehnt der Browser die Abrufanfrage mit einem Netzwerkfehler ab.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` ist die [Base64-Codierung](/de/docs/Glossary/base64) des Ergebnisses der Hash-Erstellung der Ressource mit dem angegebenen Hash-Algorithmus.

    Standard ist ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean. Wenn `true`, wird der Browser die Anfrage nicht abbrechen, wenn die Seite, die sie gestellt hat, vor Abschluss der Anfrage entladen wird. Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) beim Senden von Analysen am Ende einer Sitzung zu fungieren.

    Die Körpergröße für keepalive-Anfragen ist auf 64 Kibibyte begrenzt.

    Standard ist `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standard ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Einer der folgenden Werte:

    - `same-origin`
      - : Untersagt Cross-Origin-Anfragen vollständig.
    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet.
    - `no-cors`
      - : Die Anfrage muss eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) sein, die die Einstellungen der Header auf [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) beschränkt und Methoden auf `GET`, `HEAD` und `POST` einschränkt.
    - `navigate`
      - : Wird nur von der HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur erstellt, während zwischen Dokumenten navigiert wird.
    - `websocket`
      - : Wird nur bei der Einrichtung einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet.

    Siehe [Cross-Origin-Anfragen stellen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross_origin_requests) für weitere Details.

    Standard ist `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage relativ zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität relativ zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität relativ zu anderen Anfragen desselben Typs.
    - `auto`
      - : Bestimmt die Priorität der Fetch-Anfrage automatisch relativ zu anderen Anfragen desselben Typs.

    Standard ist `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers im Falle einer [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) des Servers. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Weiterleitungen folgen.
    - `error`
      - : Verspricht mit einem Netzwerkfehler ablehnen, wenn eine Umleitungsantwort zurückgegeben wird.
    - `manual`
      - : Gibt eine Antwort mit fast allen gefilterten Feldern zurück, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später wiederzugeben.

    Standard ist `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleichorigin-relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Lässt den `Referer`-Header weg.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (z.B. die URL der Seite, die die Anfrage gestellt hat).

    Standard ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in den `fetch()`-Methodenaufruf:

```js
async function post() {
  const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.status);
}
```

### Optionen in den `Request()`-Konstruktor übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und übergeben den gleichen Satz von Optionen an ihren Konstruktor, und übergeben dann die Anfrage an `fetch()`:

```js
async function post() {
  const request = new Request("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await fetch(request);

  console.log(response.status);
}
```

### Optionen sowohl in `Request()` als auch `fetch()` übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und übergeben die Optionen `method`, `headers` und `body` an ihren Konstruktor. Wir übergeben dann die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

```js
async function post() {
  const request = new Request("https://example.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "example1" }),
  });

  const response = await fetch(request, {
    body: JSON.stringify({ username: "example2" }),
    referrer: "",
  });

  console.log(response.status);
}
```

In diesem Fall wird die Anfrage mit den folgenden Optionen gesendet:

- `method: "POST"`
- `headers: {"Content-Type": "application/json"}`
- `body: '{"username":"example2"}'`
- `referrer: ""`

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
