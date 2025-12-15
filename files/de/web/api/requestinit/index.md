---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: d424e20ffce8770d7e66ee169203a17980bd88cf
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Wörterbuch der [Fetch API](/de-DE/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, mit denen eine [Fetch-Anfrage](/de-DE/docs/Web/API/Window/fetch) konfiguriert werden kann.

Sie können ein `RequestInit` Objekt in den [`Request()`](/de-DE/docs/Web/API/Request/Request) Konstruktor übergeben oder direkt in den Aufruf der [`fetch()`](/de-DE/docs/Web/API/Window/fetch) Funktion einfügen.

Sie können auch eine `Request` mit einem `RequestInit` konstruieren und die `Request` in einem `fetch()` Aufruf zusammen mit einem weiteren `RequestInit` übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen festgelegt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wurde.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine JavaScript-basierte [Attributionsquelle](/de-DE/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de-DE/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist dies nicht der Fall.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist dies nicht der Fall.

    Siehe die [Attribution Reporting API](/de-DE/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}
  - : Der Anfrage-Body enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:
    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de-DE/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de-DE/docs/Web/API/File)
    - [`FormData`](/de-DE/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de-DE/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de-DE/docs/Web/API/ReadableStream)

    Siehe [Setting a body](/de-DE/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen des aktuellen Benutzers in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Using the Topics API](/de-DE/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}
  - : Der [Cache-Modus](/de-DE/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt und sie [frisch](/de-DE/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, diese jedoch [abgelaufen](/de-DE/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, stellt der Browser eine [bedingte Anfrage](/de-DE/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server. Wenn der Server anzeigt, dass die Ressource nicht geändert wurde, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, und _wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _aber wird dann_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, stellt der Browser eine [bedingte Anfrage](/de-DE/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server. Wenn der Server anzeigt, dass die Ressource nicht geändert wurde, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden gefolgt, wenn die `redirect` Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}
  - : Kontrolliert, ob der Browser Anmeldedaten mit der Anfrage sendet oder nicht und ob **`Set-Cookie`** Antwortheader respektiert werden. Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:
    - `omit`
      - : Niemals Anmeldedaten in der Anfrage senden oder in der Antwort einschließen.
    - `same-origin`
      - : Anmeldedaten nur für Anfragen gleicher Herkunft senden und einschließen.
    - `include`
      - : Anmeldedaten immer einschließen, auch für Anfragen unterschiedlicher Herkunft.

    Das Einschließen von Anmeldedaten in Anfragen unterschiedlicher Herkunft kann eine Seite anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen, weshalb der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch ihrer Einbeziehung zustimmen muss, indem es den {{httpheader("Access-Control-Allow-Credentials")}} Header in seiner Antwort einfügt. Zusätzlich muss in diesem Fall der Server explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}} Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Siehe [Including credentials](/de-DE/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standardmäßig `same-origin`.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Steuerung des Duplex-Verhaltens der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de-DE/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Alle Header, die Sie der Anfrage hinzufügen möchten, enthalten
    innerhalb eines [`Headers`](/de-DE/docs/Web/API/Headers) Objekts oder eines Objektliterals, dessen Schlüssel die Header-Namen und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_request_header", "verbotene Anfrage-Header")}} bezeichnet.

    Wenn die `mode` Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safe-list Request-Header")}} setzen.

    Siehe [Setting headers](/de-DE/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity` {{optional_inline}}
  - : Enthält den [Subresource-Integrität](/de-DE/docs/Web/Security/Defenses/Subresource_Integrity)
    Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie es der Fall wäre, wenn das [`integrity`](/de-DE/docs/Web/HTML/Reference/Elements/script#integrity) Attribut auf einem {{htmlelement("script")}} Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht dem angegebenen Wert entspricht, weist der Browser die Fetch-Anfrage mit einem Netzwerkfehler zurück.

    Das Format dieser Option ist `<hash-algo>-<hash-source>` wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` ist die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses der Hash-Berechnung der Ressource mit dem angegebenen Hash-Algorithmus.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}
  - : Ein boolescher Wert.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht eine [`fetch()`](/de-DE/docs/Web/API/Window/fetch) Anfrage, Analytik am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de-DE/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie andere HTTP-Methoden als [`POST`](/de-DE/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch {{jsxref("Promise")}} zugreifen.
    Es steht auch in [Service Workern](/de-DE/docs/Web/API/Service_Worker_API) zur Verfügung.

    Die Körpergröße für `keepalive` Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}
  - : Die [Anfragemethode](/de-DE/docs/Web/HTTP/Reference/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}
  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:
    - `same-origin`
      - : Verhindert Cross-Origin-Anfragen. Wenn eine `same-origin` Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`
      - : Wenn die Anfrage eine Cross-Origin-Anfrage ist, verwendet sie den [Cross-Origin Resource Sharing (CORS)](/de-DE/docs/Web/HTTP/Guides/CORS) Mechanismus. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} werden in der Antwort angezeigt.

    - `no-cors`
      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option hat folgende Einschränkungen:
        - Die Methode darf nur eine der folgenden sein: `HEAD`, `GET` oder `POST`.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safe-list Request-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht zulässig ist. Dies gilt auch für alle von Service Workern hinzugefügten Header.
        - Die Antwort ist _opak_, das bedeutet, dass ihre Header und ihr Body für JavaScript nicht verfügbar sind und ihr [Statuscode](/de-DE/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: Auch wenn die Antwort auf eine `no-cors` Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, so dass Sie eine Caching-Strategie verwenden sollten, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie [Cache first with cache refresh](/de-DE/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur für HTML-Navigationen verwendet. Eine `navigate` Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Making cross-origin requests](/de-DE/docs/Web/API/Fetch_API/Using_Fetch#making_cross_origin_requests) für weitere Details.

    Standardmäßig `cors`.

- `priority` {{optional_inline}}
  - : Gibt die Priorität der Fetch-Anfrage relativ zu anderen Anfragen des gleichen Typs an. Muss einer der folgenden sein:
    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität relativ zu anderen Anfragen des gleichen Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität relativ zu anderen Anfragen des gleichen Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Wird verwendet, wenn kein Wert gesetzt oder ein ungültiger Wert gesetzt ist.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de-DE/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:
    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Das Promise mit einem Netzwerkfehler zurückweisen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort zurückgeben, bei der fast alle Felder herausgefiltert sind, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}
  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}} Header der Anfrage verwendet werden soll. Einer der folgenden:
    - Eine relative oder absolute URL gleicher Herkunft
      - : Den `Referer` Header auf den angegebenen Wert setzen. Relative URLs werden relativ zu der URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer` Header weglassen.
    - `about:client`
      - : Den `Referer` Header auf den Standardwert für den Kontext der Anfrage setzen (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}} Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de-DE/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufruf von [`abort()`](/de-DE/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in den [`fetch()`](/de-DE/docs/Web/API/Window/fetch) Methodenaufruf:

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

In diesem Beispiel erstellen wir eine [`Request`](/de-DE/docs/Web/API/Request), wobei wir denselben Satz von Optionen in ihren Konstruktor übergeben und dann die Anfrage an `fetch()` übergeben:

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

In diesem Beispiel erstellen wir eine [`Request`](/de-DE/docs/Web/API/Request), wobei wir die Optionen `method`, `headers` und `body` in ihren Konstruktor übergeben. Anschließend übergeben wir die Anfrage in `fetch()` zusammen mit den Optionen `body` und `referrer`:

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

- [Using Fetch](/de-DE/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de-DE/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/de-DE/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de-DE/docs/Web/HTTP)
