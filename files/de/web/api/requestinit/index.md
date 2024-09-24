---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 4f0efd02396e920d7015832c3b6e52cde2542d0e
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge von Optionen, die zum Konfigurieren einer Fetch-Anfrage verwendet werden können.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion übergeben.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und das `Request` an einen `fetch()`-Aufruf zusammen mit einem weiteren `RequestInit` übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine JavaScript-basierte [Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attribution-Quelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution-Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}

  - : Der Anfragekörper enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise bei einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Es wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Setting a body](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header zusammen mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die mit der Anfrage übereinstimmt.

        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server senden. Wenn der Server angibt, dass die Ressource nicht geändert wurde, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser holt die Ressource vom Remote-Server, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom Remote-Server, ohne zuerst im Cache nachzusehen, _aber wird_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die mit der Anfrage übereinstimmt.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server senden. Wenn der Server angibt, dass die Ressource nicht geändert wurde, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die mit der Anfrage übereinstimmt.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die mit der Anfrage übereinstimmt. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur dann verwendet werden, wenn der `mode` der Anfrage auf `"same-origin"` gesetzt ist. Zwischengespeicherte Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Weiterleitungen nicht den `"same-origin"`-Modus verletzen.

- `credentials` {{optional_inline}}

  - : Steuert, ob der Browser Anmeldedaten mit der Anfrage sendet und ob Antwort-Header vom Typ **`Set-Cookie`** beachtet werden. Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldedaten in der Anfrage senden oder Anmeldedaten in der Antwort einbeziehen.
    - `same-origin`
      - : Anmeldedaten nur für gleich-origine Anfragen senden und einbeziehen.
    - `include`
      - : Immer Anmeldedaten einbeziehen, auch für Anfragen über verschiedene Ursprünge hinweg.

    Das Einbeziehen von Anmeldedaten bei Anfragen über verschiedene Ursprünge hinweg kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Auch wenn `credentials` auf `include` gesetzt ist, muss der Server folglich auch die Einbeziehung durch die Antwort des Headers {{httpheader("Access-Control-Allow-Credentials")}} zustimmen. Darüber hinaus muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Siehe [Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standardmäßig auf `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten
    innerhalb eines [`Headers`](/de/docs/Web/API/Headers)-Objekts oder eines Objekt-Literals, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch durch den Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "Verbotene Header-Namen")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} setzen.

    Siehe [Setting headers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity`

  - : Enthält die [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity)
    des Antrags.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genau wie es wäre, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser wird den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource unter Verwendung des angegebenen Algorithmus berechnen, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Browser die Fetch-Anfrage mit einem Netzwerkfehler ablehnen.

    Das Format dieser Option ist `<hash-algo>-<hash-source>` wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384`, oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein boolean. Wenn `true`, wird der Browser die Anfrage nicht abbrechen, wenn die Seite, die sie gemacht hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn am Ende einer Sitzung Analysen gesendet werden.

    Die Körpergröße für Keepalive-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Einer der folgenden Werte:

    - `same-origin`
      - : Erlaubt keine Anfragen über verschiedene Ursprünge hinweg.
    - `cors`
      - : Falls die Anfrage über verschiedene Ursprünge hinweg erfolgt, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet.
    - `no-cors`
      - : Die Anfrage muss eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) sein, was die Header einschränkt, die gesetzt werden können auf {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}}, und die Methoden auf `GET`, `HEAD`, und `POST` beschränkt.
    - `navigate`
      - : Wird nur für die HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Making cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross_origin_requests) für weitere Details.

    Standardmäßig `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage relativ zu anderen Anfragen des gleichen Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität relativ zu anderen Anfragen des gleichen Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität relativ zu anderen Anfragen des gleichen Typs.
    - `auto`
      - : Bestimmen Sie automatisch die Priorität der Fetch-Anfrage relativ zu anderen Anfragen des gleichen Typs.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers im Falle, dass der Server mit einem [Redirect-Status](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Weiterleitungen folgen.
    - `error`
      - : Das Versprechen mit einem Netzwerkfehler ablehnen, wenn ein Redirect-Status zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen gefilterten Feldern zurückgeben, um einem Service-Worker zu ermöglichen, die Antwort zu speichern und später wiederzugeben.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleich-origine relative oder absolute URL
      - : Setzen Sie den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Omitiere den `Referer`-Header.
    - `about:client`
      - : Setzen Sie den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage getätigt hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) beim entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir dasselbe Satz von Optionen in seinen Konstruktor übergeben, und übergeben dann die Anfrage in `fetch()`:

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

### Optionen sowohl in `Request()` als auch in `fetch()` übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir den `method`, `headers` und `body` Optionen in seinen Konstruktor übergeben. Wir übergeben dann die Anfrage in `fetch()` zusammen mit `body` und `referrer` Optionen:

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

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
