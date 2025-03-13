---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, die verwendet werden können, um eine [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt dem Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion übergeben.

Sie können auch eine `Request` mit einem `RequestInit` erstellen und die `Request` an einen `fetch()`-Aufruf zusammen mit einem weiteren `RequestInit` übergeben. Wenn Sie dies tun und derselbe Parameter an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine JavaScript-basierte [Zuordnungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Zuordnungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Zuordnungsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Zuordnungsauslöser zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfrageinhalt enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

    - ein string
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

  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der für die Anfrage zu verwendende [Cache-Modus](/de/docs/Web/API/Request/cache). Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt und sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, aber sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server. Wenn der Server angibt, dass die Ressource nicht geändert wurde, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorhanden ist, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne vorher im Cache nachzusehen, und _wird nicht_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne vorher im Cache nachzusehen, _aber wird_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server. Wenn der Server angibt, dass die Ressource nicht geändert wurde, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn keine Übereinstimmung vorhanden ist, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorhanden ist, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn keine Übereinstimmung vorhanden ist, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Kontrolliert, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`**-Antwortheader respektiert werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort enthalten.
    - `same-origin`
      - : Anmeldeinformationen nur für gleichartige Anfragen senden und einfügen.
    - `include`
      - : Anmeldeinformationen immer einfügen, auch bei Anfragen an fremde Herkunft.

    Das Einfügen von Anmeldeinformationen in fremde Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort einfügt. Zusätzlich muss der Server die Herkunft des Clients in dem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader explizit angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_headers", "Forbidden request headers")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} setzen.

    Weitere Details finden Sie unter [Setting headers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity` {{optional_inline}}

  - : Enthält den Wert für die [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity).

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut auf einem {{htmlelement("Script")}}-Element gesetzt ist. Der Browser wird den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus berechnen, und wenn das Ergebnis nicht dem angegebenen Wert entspricht, wird der Browser die `fetch`-Anfrage mit einem Netzwerkfehler ablehnen.

    Das Format dieser Option ist `<hash-algo>-<hash-source>` wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer string.

- `keepalive` {{optional_inline}}

  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie gestartet hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dadurch kann eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage Analysedaten am Ende einer Sitzung senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Beispielsweise können Sie andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Eigenschaften der Anfrage anpassen und auf die Serverantwort über die Erfüllung des `fetch` {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Lässt keine Cross-Origin-Anfragen zu. Wenn eine `same-origin`-Anfrage an eine andere Herkunft gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, wird das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} sind in der Antwort sichtbar.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option beinhaltet die folgenden Einschränkungen:

        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}}-Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle Header, die durch Service Worker hinzugefügt werden.
        - Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: Obwohl die Antwort auf eine `no-cors`-Anfrage von JavaScript nicht gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene `fetch`-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie verwenden, die es ermöglicht, dass die zwischengespeicherte Antwort aus dem Netzwerk aktualisiert wird (wie z. B. [Cache-First mit Cache-Aktualisierung](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur bei HTML-Navigationen verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Making cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardmäßig `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der `fetch`-Anfrage relativ zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:

    - `high`
      - : Eine `fetch`-Anfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine `fetch`-Anfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die `fetch`-Priorität.
        Sie wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Weiterleitungen folgen.
    - `error`
      - : Das Promise bei Rückgabe eines Umleitungsstatus mit einem Netzwerkfehler ablehnen.
    - `manual`
      - : Eine Antwort mit fast allen gefilterten Feldern zurückgeben, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der angibt, welcher Wert für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleichartige relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite, die die Anfrage gemacht hat, aufgelöst.
    - Ein leerer string
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (z. B. die URL der Seite, die die Anfrage gemacht hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Übergeben von Optionen an `fetch()`

In diesem Beispiel übergeben wir die `method`, `body`, und `headers`-Optionen direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode:

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

### Übergeben von Optionen an den `Request()`-Konstruktor

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen in seinen Konstruktor übergeben und die Anfrage dann an `fetch()` übergeben:

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

### Übergeben von Optionen an sowohl `Request()` als auch `fetch()`

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die `method`, `headers`, und `body`-Optionen in seinen Konstruktor übergeben. Wir übergeben dann die Anfrage an `fetch()` zusammen mit `body` und `referrer`-Optionen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
