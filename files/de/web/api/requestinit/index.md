---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge an Optionen dar, die zur Konfiguration einer [fetch-Anfrage](/de/docs/Web/API/Window/fetch) verwendet werden können.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktionsaufruf übergeben.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und das `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen festgelegt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wurde.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

- `body` {{optional_inline}}

  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Setzen eines Anfragetextes](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für mehr Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein boolean, der angibt, dass die ausgewählten Themen für den aktuellen Nutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Themen-API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, diese aber [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, und wird den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, wird aber dann den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, ob frisch oder veraltet, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, ob frisch oder veraltet, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, ob frisch oder veraltet, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Steuerung, ob der Browser Anmeldedaten mit der Anfrage sendet und ob **`Set-Cookie`** Antwort-Header beachtet werden. Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einen der folgenden Werte haben:

    - `omit`
      - : Niemals Anmeldedaten in der Anfrage senden oder in die Antwort aufnehmen.
    - `same-origin`
      - : Anmeldedaten nur für gleichherkunftige Anfragen senden und einfügen.
    - `include`
      - : Immer Anmeldedaten einfügen, auch für Cross-Origin-Anfragen.

    Das Einfügen von Anmeldedaten in Cross-Origin-Anfragen kann eine Site für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server ihrer Einfügung auch zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort einfügt. Zusätzlich muss der Server in dieser Situation den Ursprung des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header angeben (also ist `*` nicht erlaubt).

    Siehe [Einfügen von Anmeldedaten](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für mehr Details.

    Standard ist `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und deren Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "Verbotene Anfrage-Header")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anfrage-Header")}} setzen.

    Siehe [Setzen von Headern](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für mehr Details.

- `integrity` {{optional_inline}}

  - : Enthält den [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity) Wert der Anfrage.

    Dieser wird überprüft, wenn die Ressource abgerufen wird, genau so, wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser wird den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus berechnen. Wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Browser die Fetch-Anfrage mit einem Netzwerkfehler ablehnen.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses der Hashing der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standard ist ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, Analysedaten am Ende einer Sitzung zu senden, selbst wenn der Nutzer die Seite verlässt oder schließt.

    Dies bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung der Fetch {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standard ist `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standard ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, resultiert dies in einem Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, wird sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwenden. Nur {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelistete Antwort-Header")}} werden in der Antwort offengelegt.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option ist mit den folgenden Einschränkungen verbunden:

        - Die Methode darf nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anfrage-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}}-Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Service-Workern hinzugefügten Header.
        - Die Antwort ist _opak_, was bedeutet, dass ihre Header und ihr Inhalt für JavaScript nicht verfügbar sind und ihr [Status-Code](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service-Worker: obwohl die Antwort auf eine `no-cors`-Anfrage von JavaScript nicht gelesen werden kann, kann sie von einem Service-Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war, daher sollten Sie eine Caching-Strategie übernehmen, die es ermöglicht, die gecachte Antwort aus dem Netzwerk zu aktualisieren (wie [cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur durch HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Erstellen von Cross-Origin-Anfragen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für mehr Details.

    Standard ist `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Vergleich zu anderen Anfragen des gleichen Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine hochpriorisierte Fetch-Anfrage im Vergleich zu anderen Anfragen des gleichen Typs.
    - `low`
      - : Eine niedrigpriorisierte Fetch-Anfrage im Vergleich zu anderen Anfragen des gleichen Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Wird verwendet, wenn kein Wert gesetzt oder ein ungültiger Wert gesetzt ist.

    Standard ist `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, wenn der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Umleitungen folgen.
    - `error`
      - : Versprechen mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen herausgefilterten Feldern zurückgeben, um einem Service-Worker zu ermöglichen, die Antwort zu speichern und später abzuspielen.

    Standard ist `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Eines der folgenden:

    - Eine relative oder absolute URL mit gleicher Herkunft
      - : Den `Referer`-Header auf den angegebenen Wert setzen. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Den `Referer`-Header auf den Standardwert für den Kontext der Anfrage setzen (z.B. die URL der Seite, die die Anfrage gestellt hat).

    Standard ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Methodenaufruf:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir den gleichen Satz von Optionen in seinen Konstruktor übergeben und dann die Anfrage in `fetch()` übergeben:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` in seinen Konstruktor übergeben. Wir übergeben dann die Anfrage in `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
