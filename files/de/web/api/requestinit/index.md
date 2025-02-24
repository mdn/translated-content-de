---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge an Optionen dar, die verwendet werden können, um eine [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt an den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor übergeben oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion.

Sie können auch eine `Request` mit einem `RequestInit` erstellen und die `Request` zusammen mit einem anderen `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass die Antwort der Anfrage in der Lage sein soll, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfrage-Körper enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfrage. Es wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Weitere Details finden Sie unter [Setting a body](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body).

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein Boolean, der angibt, dass die für den aktuellen Benutzer ausgewählten Themen in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt und sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, sie aber [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht verändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _und wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _wird aber_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet,_ wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht verändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"`-Modus kann nur verwendet werden, wenn der `mode` der Anfrage auf `"same-origin"` gesetzt ist. Zwischengespeicherte Umleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"`-Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`**-Antwortheader beachtet werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder Anmeldeinformationen in die Antwort aufnehmen.
    - `same-origin`
      - : Nur Anmeldeinformationen für gleichoriginierte Anfragen senden und aufnehmen.
    - `include`
      - : Anmeldeinformationen immer einbeziehen, auch für Anfragen von fremden Ursprüngen.

    Das Einbeziehen von Anmeldeinformationen in Anfragen von fremden Ursprüngen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort einschließt. Darüber hinaus muss der Server in dieser Situation ausdrücklich den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardwert ist `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten
    in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und deren Werte die Headerwerte sind.

    Viele Header werden vom Browser automatisch gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_request_headers", "verbotene Anfrageheader")}} bezeichnet.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anfrageheader")}} setzen.

    Weitere Details finden Sie unter [Setting headers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity` {{optional_inline}}

  - : Enthält den [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity)
    Wert der Anfrage.

    Dieser wird überprüft, wenn die Ressource abgerufen wird, genauso wie wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus und lehnt die fetch-Anfrage mit einem Netzwerkfehler ab, falls das Ergebnis nicht mit dem angegebenen Wert übereinstimmt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses der Ressource-Hashing mit dem angegebenen Hash-Algorithmus ist.

    Standardwert ist ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie gestartet hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht es einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Fetch-{{jsxref("Promise")}}-Erfüllung zugreifen.
    Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibytes begrenzt.

    Standardwert ist `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardwert ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted-Antwortheader")}} werden in der Antwort offengelegt.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option bringt folgende Einschränkungen mit sich:

        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anfrageheader")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}}-Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Service Workern hinzugefügten Header.
        - Die Antwort ist _opaque_, was bedeutet, dass ihre Header und der Körper für JavaScript nicht verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: Obwohl die Antwort auf eine `no-cors`-Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie verwenden, die es der zwischengespeicherten Antwort ermöglicht, vom Netzwerk aktualisiert zu werden (z. B. [cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von der HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Making cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardwert ist `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Wird verwendet, wenn kein Wert gesetzt oder ein ungültiger Wert gesetzt ist.

    Standardwert ist `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers im Falle einer [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) des Servers. Einer der folgenden Werte:

    - `follow`
      - : Automatisches Folgen von Umleitungen.
    - `error`
      - : Das Versprechen mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit nahezu allen herausgefilterten Feldern zurückgeben, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardwert ist `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleiche-origin relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer`-Header auslassen.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardwert ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` aufgerufen wird.

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und übergeben dasselbe Set an Optionen in deren Konstruktor, und dann die Anfrage in `fetch()`:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und übergeben die Optionen `method`, `headers` und `body` in deren Konstruktor. Dann übergeben wir die Anfrage zusammen mit den Optionen `body` und `referrer` in `fetch()`:

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
- [HTTP access control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
