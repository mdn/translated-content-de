---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 667c1884597a2b576a5b51e0129f3c27a532cff6
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, die verwendet werden können, um eine Fetch-Anfrage zu konfigurieren.

Sie können ein `RequestInit` Objekt an den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor übergeben oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch) Funktion.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und das `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option in beiden Bereichen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanzeigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Es wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Weitere Details finden Sie unter [Einen Body festlegen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body).

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn eine Übereinstimmung vorliegt und diese [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn eine Übereinstimmung vorliegt, diese jedoch [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, führt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server durch. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorliegt, führt der Browser eine normale Anfrage durch und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser ruft die Ressource direkt vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource direkt vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _aber wird dann_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn eine Übereinstimmung vorliegt, _frisch oder veraltet,_ führt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server durch. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorliegt, führt der Browser eine normale Anfrage durch und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn eine Übereinstimmung vorliegt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorliegt, führt der Browser eine normale Anfrage durch und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}

        - Wenn eine Übereinstimmung vorliegt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorliegt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Im Cache gespeicherte Umleitungen werden befolgt, wenn die `redirect` Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Steuert, ob der Browser Anmeldedaten mit der Anfrage sendet oder ob **`Set-Cookie`** Antwortheader berücksichtigt werden. Anmeldedaten sind Cookies, [TLS](/de/docs/Glossary/TLS) Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldedaten in der Anfrage senden oder in die Antwort einbeziehen.
    - `same-origin`
      - : Nur Anmeldedaten für gleich-originale Anfragen senden und einbeziehen.
    - `include`
      - : Immer Anmeldedaten einschließen, auch für Cross-Origin-Anfragen.

    Das Einschließen von Anmeldedaten in Cross-Origin-Anfragen kann eine Webseite anfällig für [CSRF](/de/docs/Glossary/CSRF) Angriffe machen, daher muss der Server selbst dann, wenn `credentials` auf `include` gesetzt ist, ihre Einbeziehung auch akzeptieren, indem er das {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort einfügt. Darüber hinaus muss der Server in dieser Situation den Ursprung des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Anmeldedaten einschließen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig ist `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten
    innerhalb eines [`Headers`](/de/docs/Web/API/Headers) Objekts oder eines Objekt-Literals, dessen Schlüssel die Namen der Header sind und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: diese werden [Verbotene Headernamen](/de/docs/Glossary/Forbidden_header_name) genannt.

    Wenn die `mode` Option auf `no-cors` gesetzt ist, können Sie nur [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) setzen.

    Weitere Details finden Sie unter [Header festlegen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity`

  - : Enthält den [Subresource-Integritätswert](/de/docs/Web/Security/Subresource_Integrity)
    der Anfrage.

    Dieser wird überprüft, wenn die Ressource abgerufen wird, genau wie wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut auf einem {{htmlelement("script")}} Element gesetzt ist. Der Browser berechnet den [Hash](/de/docs/Glossary/Cryptographic_hash_function) der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, lehnt der Browser die Fetch-Anfrage mit einem Netzwerkfehler ab.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die [Base64-Codierung](/de/docs/Glossary/base64) des Ergebnisses des Hashens der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ist es ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein boolescher Wert. Wenn `true`, wird der Browser die Anfrage nicht abbrechen, wenn die Seite, die sie gestellt hat, bevor die Anfrage abgeschlossen ist, entladen wird. Dies ermöglicht es, dass eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) beim Senden von Analysen am Ende einer Sitzung fungiert.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Einer der folgenden Werte:

    - `same-origin`
      - : Verhindert vollständig Cross-Origin-Anfragen.
    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) Mechanismus verwendet.
    - `no-cors`
      - : Die Anfrage muss eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) sein, die die zu setzenden Header auf [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) beschränkt und Methoden auf `GET`, `HEAD` und `POST` beschränkt.
    - `navigate`
      - : Wird nur bei der HTML-Navigation verwendet. Eine `navigate` Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.
    - `websocket`
      - : Wird nur bei der Herstellung einer [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindung verwendet.

    Weitere Details finden Sie unter [Cross-Origin-Anfragen stellen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross_origin_requests).

    Standardmäßig `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Bestimmt automatisch die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Verspricht mit einem Netzwerkfehler abgelehnt, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Gibt eine Antwort mit fast allen gefilterten Feldern zurück, um es einem Service-Arbeiter zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}} Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleiche Ursprung relative oder absolute URL
      - : Setzt den `Referer` Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Der `Referer` Header wird weggelassen.
    - `about:client`
      - : Setzt den `Referer` Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header festlegt. Die Syntax und die Semantik dieser Option sind exakt identisch mit denen des {{httpheader("Referrer-Policy")}} Headers.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt wird, kann die Anfrage durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) am zugehörigen `AbortController` abgebrochen werden.

## Beispiele

### Weitergabe von Optionen an `fetch()`

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

### Optionen an den `Request()` Konstruktor übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen an dessen Konstruktor übergeben und dann die Anfrage an `fetch()` übergeben:

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

### Optionen sowohl an `Request()` als auch an `fetch()` übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` an seinen Konstruktor übergeben. Wir übergeben dann die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
