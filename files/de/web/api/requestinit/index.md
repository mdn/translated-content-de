---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 0129176c2bb0e16af7577067191f0889326fad73
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge an Optionen dar, die verwendet werden können, um eine Fetch-Anfrage zu konfigurieren.

Sie können ein `RequestInit` Objekt in den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch) Funktionsaufruf übergeben.

Sie können auch eine `Request` mit einem `RequestInit` konstruieren und die `Request` zu einem `fetch()` Aufruf zusammen mit einem weiteren `RequestInit` übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der direkt in `fetch()` übergebene Wert verwendet.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort auf die Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, kann die Antwort auf die Anfrage eine Attributionsquelle registrieren. Wenn auf `false` gesetzt, nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, kann die Antwort auf die Anfrage einen Attributionstrigger registrieren. Wenn auf `false` gesetzt, nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden, beispielsweise in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Einen Körper einstellen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein Boolean, der angibt, dass die ausgewählten Themen des aktuellen Nutzers in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn eine Übereinstimmung vorhanden und [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn eine Übereinstimmung vorhanden, aber [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn keine Übereinstimmung vorhanden ist, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser holt die Ressource vom Remote-Server, ohne zuerst im Cache nachzuschauen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom Remote-Server, ohne zuerst im Cache nachzuschauen, _aber dann wird_ der Cache mit der heruntergeladenen Ressource aktualisiert.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn eine Übereinstimmung vorhanden ist, _frisch oder veraltet,_ wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den Remote-Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorhanden ist, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn eine Übereinstimmung vorhanden ist, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorhanden ist, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn eine Übereinstimmung vorhanden ist, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorhanden ist, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden verfolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Weiterleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Steuert, ob der Browser Anmeldeinformationen mit der Anfrage sendet und, ob eventuelle **`Set-Cookie`** Antwort-Header beachtet werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}} Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einen der folgenden Werte haben:

    - `omit`
      - : Anmeldeinformationen werden weder in der Anfrage gesendet noch in der Antwort berücksichtigt.
    - `same-origin`
      - : Anmeldeinformationen werden nur für same-origin-Anfragen gesendet und berücksichtigt.
    - `include`
      - : Anmeldeinformationen werden immer berücksichtigt, auch bei cross-origin Anfragen.

    Das Einschließen von Anmeldeinformationen bei cross-origin Anfragen kann eine Seite anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server ihrer Einschließung zustimmen, indem er das {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort einschließt. Zusätzlich muss der Server in diesem Fall den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header explizit angeben (d.h. `*` ist nicht erlaubt).

    Siehe [Einschließen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standardmäßig auf `same-origin`.

- `headers` {{optional_inline}}

  - : Jegliche Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "Verbotene Header-Namen")}} genannt.

    Wenn die Option `mode` auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungs-Header")}} setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity`

  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
    Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genau so, wie es geschieht, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut auf einem {{htmlelement("script")}} Element gesetzt ist. Der Browser berechnet den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource unter Verwendung des angegebenen Algorithmus und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Fetch Request mit einem Netzwerkfehler abgelehnt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Resultats des Hashings der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean. Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird. Dies ermöglicht eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) beim Senden von Analysen am Ende einer Sitzung, was einige Vorteile hat (Sie können andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Antwort des Servers über die Erfüllung des {{jsxref("Promise")}}-Objekts zugreifen). Es ist auch in [Service-Arbeitern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Größe des Anforderungstextes für `keepalive` Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig auf `false`.

- `method` {{optional_inline}}

  - : Die [Anforderungs-Methode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Verbietet Cross-Origin Anfragen. Wenn eine `same-origin` Anfrage an einen anderen Ursprung gesendet wird, führt dies zu einem Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, verwendet sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) Mechanismus. Nur {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelistete Antwort-Header")}} werden in der Antwort offengelegt.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin Anfragen. Diese Option kommt mit folgenden Einschränkungen:

        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungs-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Service-Arbeitern hinzugefügten Header.
        - Die Antwort ist _opak_, was bedeutet, dass ihre Header und ihr Text JavaScript nicht zur Verfügung stehen, und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service-Arbeiter: obwohl die Antwort auf eine `no-cors` Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service-Arbeiter zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, also sollten Sie eine Caching-Strategie verwenden, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie [cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur für HTML-Navigation verwendet. Eine `navigate` Anfrage wird nur bei der Navigation zwischen Dokumenten erstellt.

    Siehe [Cross-Origin Anfragen stellen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für weitere Details.

    Standardmäßig auf `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage relativ zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität relativ zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität relativ zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzervorgabe für die Fetch-Priorität.
        Wird verwendet, wenn kein Wert gesetzt oder ein ungültiger Wert gesetzt ist.

    Standardmäßig auf `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Weiterleitungen folgen.
    - `error`
      - : Das Promise mit einem Netzwerkfehler zurückweisen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen gefilterten Feldern zurückgeben, um einem Service-Arbeiter zu ermöglichen, die Antwort zu speichern und später wiederzugeben.

    Standardmäßig auf `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}} Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine same-origin relative oder absolute URL
      - : Setzen Sie den `Referer` Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gemacht hat.
    - Ein leerer String
      - : Lassen Sie den `Referer` Header weg.
    - `about:client`
      - : Setzen Sie den `Referer` Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gemacht hat).

    Standardmäßig auf `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header setzt. Die Syntax und Semantik dieser Option entsprechen genau dem {{httpheader("Referrer-Policy")}} Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch) Methodenaufruf:

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

### Optionen in den `Request()` Konstruktor übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), übergeben das gleiche Set an Optionen in ihren Konstruktor und dann die Anfrage an `fetch()`:

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
