---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 7a2d87c54eb8d51586602b703f33328ae878b928
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, die zur Konfiguration einer Fetch-Anfrage verwendet werden können.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Funktionsaufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und das `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt mit den folgenden Eigenschaften:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfrageinhalt, der an den Server gesendet werden soll, zum Beispiel in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Weitere Details finden Sie unter [Einen Body setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body).

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Weitere Informationen finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Das kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn eine Übereinstimmung vorliegt und diese [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn eine Übereinstimmung vorliegt, diese jedoch [abgelaufen](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server. Wenn der Server angibt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorliegt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, und wird _nicht_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _aber dann_ wird der Cache mit der heruntergeladenen Ressource aktualisiert.
    - `no-cache`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn eine Übereinstimmung vorliegt, _aktuell oder abgelaufen,_ stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server. Wenn der Server angibt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorliegt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn eine Übereinstimmung vorliegt, _aktuell oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorliegt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn eine Übereinstimmung vorliegt, _aktuell oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorliegt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage auf `"same-origin"` gesetzt ist. Zwischengespeicherte Umleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Umleitungen nicht den `"same-origin"`-Modus verletzen.

- `credentials` {{optional_inline}}

  - : Kontrolliert, ob der Browser Anmeldeinformationen mit der Anfrage sendet oder nicht, sowie, ob jegliche **`Set-Cookie`**-Antwortheader akzeptiert werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder Anmeldeinformationen in die Antwort aufnehmen.
    - `same-origin`
      - : Nur für gleich-originierte Anfragen Anmeldeinformationen senden und aufnehmen.
    - `include`
      - : Immer Anmeldeinformationen einschließen, auch bei Cross-Origin-Anfragen.

    Das Einschließen von Anmeldeinformationen bei Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen, daher muss selbst wenn `credentials` auf `include` gesetzt ist, der Server auch deren Einschluss zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort aufnimmt. Zudem muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Anmeldeinformationen einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig auf `same-origin` gesetzt.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Headerwerte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "Verbotene Headernamen")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safe-anfragen Header")}} setzen.

    Weitere Details finden Sie unter [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity`

  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anfrage.

    Dies wird geprüft, wenn die Ressource abgerufen wird, genau wie es auch gesetzt würde, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus und lehnt die Fetch-Anfrage mit einem Netzwerkfehler ab, wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses des Hashing der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean. Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies ermöglicht einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), um Analysen am Ende einer Sitzung zu senden, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}}-Objekts zugreifen). Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig auf `false` gesetzt.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Einer der folgenden Werte:

    - `same-origin`
      - : Verbietet Cross-Origin-Anfragen vollständig.
    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet.
    - `no-cors`
      - : Die Anfrage muss eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) sein, was die Header, die gesetzt werden dürfen, auf {{Glossary("CORS-safelisted_request_header", "CORS-safe-anfragen Header")}} beschränkt und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.
    - `navigate`
      - : Wird nur von der HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Cross-Origin-Anfragen durchführen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardmäßig auf `cors` gesetzt.

- `priority` {{optional_inline}}

  - : Spezifiziert die Priorität der Fetch-Anfrage im Vergleich zu anderen Anfragen desselben Typs. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Bestimmt automatisch die Priorität der Fetch-Anfrage im Vergleich zu anderen Anfragen desselben Typs.

    Standardmäßig auf `auto` gesetzt.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Das Promise mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Gibt eine Antwort mit fast allen gefilterten Feldern zurück, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig auf `follow` gesetzt.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert spezifiziert, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleich-originierte relative oder absolute URL
      - : Den `Referer`-Header auf den angegebenen Wert setzen. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Den `Referer`-Header auf den Standardwert für den Kontext der Anfrage setzen (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig auf `about:client` gesetzt.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) am entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in die Methode [`fetch()`](/de/docs/Web/API/Window/fetch):

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), übergeben das gleiche Optionssatz in ihren Konstruktor und übergeben dann die Anfrage an `fetch()`:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), übergeben die Optionen `method`, `headers` und `body` in ihren Konstruktor. Wir übergeben dann die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
