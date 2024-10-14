---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge an Optionen dar, die verwendet werden können, um eine Fetch-Anfrage zu konfigurieren.

Sie können ein `RequestInit`-Objekt an den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt an den [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktionsaufruf übergeben.

Sie können auch ein `Request` mit einem `RequestInit` erstellen und das `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt an `fetch()` übergeben wird.

## Instanzeigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass die Antwort der Anfrage in der Lage sein soll, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt mit den folgenden Eigenschaften:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfragekörper enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

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

    Weitere Details entnehmen Sie bitte der [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt und sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die aber [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server stellen. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser lädt die Ressource vom Remote-Server herunter, ohne zuvor im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser lädt die Ressource vom Remote-Server herunter, ohne zuvor im Cache nachzusehen, _aber wird_ den Cache anschließend mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzfehler zurückgegeben.

    Der `"only-if-cached"`-Modus kann nur verwendet werden, wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage auf `"same-origin"` gesetzt ist. Zwischengespeicherte Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` steht und die Weiterleitungen den `"same-origin"`-Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Steuert, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob Antwortheader vom Typ **`Set-Cookie`** beachtet werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die Benutzername und Passwort enthalten. Diese Option kann einen der folgenden Werte haben:

    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einschließen.
    - `same-origin`
      - : Nur Anmeldeinformationen für Anfragen gleicher Herkunft (same-origin) senden und einbeziehen.
    - `include`
      - : Anmeldeinformationen immer einbeziehen, auch für anfragen zwischen unterschiedlichen Ursprüngen (cross-origin).

    Die Einbeziehung von Anmeldeinformationen in Anfragen zwischen unterschiedlichen Ursprüngen kann eine Seite anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Daher muss, selbst wenn `credentials` auf `include` gesetzt ist, der Server auch ihrer Einbeziehung zustimmen, indem er den Header {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort einfügt. Außerdem muss der Server in diesem Fall explizit den Ursprung des Clients im Header {{httpheader("Access-Control-Allow-Origin")}} angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Einbeziehen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig `same-origin`.

- `headers` {{optional_inline}}

  - : Beliebige Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten innerhalb eines [`Headers`](/de/docs/Web/API/Headers)-Objekts oder eines Objekt-Literals, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "Verbotene Header-Namen")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-gelistete Anfrage-Header")}} setzen.

    Weitere Details finden Sie unter [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity`

  - : Enthält den [Subressourcenintegrität](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anfrage.

    Dieser wird überprüft, wenn die Ressource abgerufen wird, genau wie wenn das Attribut [`integrity`](/de/docs/Web/HTML/Element/script#integrity) auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird die Fetch-Anfrage vom Browser mit einem Netzfehler abgelehnt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean. Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird. Dies ermöglicht es einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysen am Ende einer Sitzung gesendet werden, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Einer der folgenden Werte:

    - `same-origin`
      - : Verhindert komplett anfragen zwischen unterschiedlichen Ursprüngen (cross-origin).
    - `cors`
      - : Wenn die Anfrage ein anderer Ursprung ist, wird sie das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwenden.
    - `no-cors`
      - : Die Anfrage muss eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) sein, die die Header, die gesetzt werden dürfen, auf {{Glossary("CORS-safelisted_request_header", "CORS-gelistete Anfrage-Header")}} beschränkt und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.
    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Anfragen zwischen unterschiedlichen Ursprüngen machen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardmäßig `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage relativ zu anderen Anfragen des gleichen Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität relativ zu anderen Anfragen des gleichen Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität relativ zu anderen Anfragen des gleichen Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Dieser Wert wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Das Promise mit einem Netzfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen ausgefilterten Feldern zurückgeben, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine same-origin relative oder absolute URL
      - : Setzen Sie den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gemacht hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Setzen Sie den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gemacht hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Optionen an `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt an den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode:

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

### Optionen an den `Request()`-Konstruktor übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und übergeben das gleiche Set von Optionen an seinen Konstruktor und dann die Anfrage an `fetch()`:

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

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request) und übergeben die Optionen `method`, `headers` und `body` an seinen Konstruktor. Wir übergeben dann die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
