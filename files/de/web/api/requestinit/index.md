---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Optionen dar, die verwendet werden können, um eine [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktionsaufruf übergeben.

Sie können auch einen `Request` mit einem `RequestInit` konstruieren und den `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen festgelegt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine Javascript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt mit den folgenden Eigenschaften:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}
  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden sollen, z. B. in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:
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

- `browsingTopics` {{optional_inline}} {{deprecated_inline}}
  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}
  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt und sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _und wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _wird dann aber_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet,_ wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden gefolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"`-Modus nicht verletzen.

- `credentials` {{optional_inline}}
  - : Steuerung, ob und wie der Browser Anmeldeinformationen mit der Anfrage sendet, sowie ob **`Set-Cookie`** Header der Antwort berücksichtigt werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungs-Header mit einem Benutzernamen und Passwort. Diese Option kann einen der folgenden Werte haben:
    - `omit`
      - : Niemals Anmeldedaten in der Anfrage oder Antwort senden oder einbeziehen.
    - `same-origin`
      - : Nur Anmeldedaten für gleichherzige Anfragen senden und einbeziehen.
    - `include`
      - : Immer Anmeldedaten einbeziehen, auch für grenzüberschreitende Anfragen.

    Das Einbeziehen von Anmeldedaten in grenzüberschreitende Anfragen kann eine Seite anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen, deshalb, selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er die {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort aufnimmt. Zusätzlich muss der Server in dieser Situation den Ursprung des Clients explizit in der {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header spezifizieren (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Anmeldedaten einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardwert ist `same-origin`.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Steuert das Duplex-Verhalten der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten
    in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript festgelegt werden: Dies sind die {{Glossary("Forbidden_request_header", "Verbotene Anforderungs-Header")}}.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS sicherheitsgeprüfte Anforderungs-Header")}} festlegen.

    Weitere Details finden Sie unter [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity` {{optional_inline}}
  - : Enthält den [Subresource-Integrität](/de/docs/Web/Security/Defenses/Subresource_Integrity)
    Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genau wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut auf einem {{htmlelement("script")}} Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, lehnt der Browser die Abrufanfrage mit einem Netzwerkfehler ab.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` ist die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus.

    Standardwert ist ein leerer String.

- `keepalive` {{optional_inline}}
  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage, um Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden verwenden, die keine [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) sind, anfrageeigenschaften anpassen und die Serverantwort über die Erfüllung des fetch {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Dienstarbeitern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Der Standardwert ist `false`.

- `method` {{optional_inline}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Der Standardwert ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}
  - : Setzt das Verhalten über Ursprungsgrenzen hinweg für die Anfrage. Einer der folgenden Werte:
    - `same-origin`
      - : Verboten Anfragen über Ursprungsgrenzen hinweg. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`
      - : Wenn die Anfrage über Ursprungsgrenzen hinweg erfolgt, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS sichere Antwort-Header")}} werden in der Antwort offengelegt.

    - `no-cors`
      - : Deaktiviert CORS für Anfragen über Ursprungsgrenzen hinweg. Diese Option kommt mit den folgenden Einschränkungen:
        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS sicherheitsgeprüfte Anforderungs-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Dienstarbeitern hinzugefügten Header.
        - Die Antwort ist _opake_, das bedeutet, dass ihre Header und ihr Körper nicht in JavaScript verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die hauptsächliche Anwendung für `no-cors` ist für einen Dienstarbeiter: obwohl die Antwort auf eine `no-cors` Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Dienstarbeiter zwischengespeichert und dann als Antwort auf eine abgefangene Abrufanfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, weshalb Sie eine Zwischenspeicherstrategie anwenden sollten, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie [cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von der HTML-Navigation verwendet. Eine `navigate` Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Anfragen über Ursprungsgrenzen hinweg stellen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Der Standardwert ist `cors`.

- `priority` {{optional_inline}}
  - : Gibt die Priorität der fetch-Anfrage relativ zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:
    - `high`
      - : Eine Abfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Abfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzervorgabe für die fetch-Priorität.
        Es wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

    Der Standardwert ist `auto`.

- `privateToken` {{optional_inline}}
  - : Ein Objekt, das Optionen zum Initiieren einer [Privatstatus-Token](/de/docs/Web/API/Private_State_Token_API/Using) Operation enthält. Mögliche Eigenschaften umfassen:
    - `issuers`
      - : Ein Array von Strings, das die URLs von Ausstellern enthält, für die Sie Einlösungsdatensätze weiterleiten möchten. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `send-redemption-record` gesetzt, in welchem Fall das `issuers`-Array enthalten sein muss.
    - `operation`
      - : Ein String, der die Art der Token-Operation angibt, die Sie initiieren möchten. Wenn Sie die `privateToken`-Option angeben, ist diese Eigenschaft obligatorisch. Mögliche Werte sind:
        - `token-request`
          - : Initiiert eine [Token-Anfrage](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) Operation.
        - `token-redemption`
          - : Initiiert eine [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) Operation.
        - `send-redemption-record`
          - : Initiiert eine [Einlösungsdatensatz senden](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) Operation.
    - `refreshPolicy`
      - : Ein enumerierter Wert, der das erwartete Verhalten festlegt, wenn ein nicht abgelaufener Einlösungsdatensatz für den aktuellen Benutzer und die aktuelle Seite zuvor festgelegt wurde. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `token-redemption` gesetzt. Mögliche Werte sind:
        - `none`
          - : Der zuvor gesetzte Einlösungsdatensatz sollte verwendet werden, und ein neuer sollte nicht ausgestellt werden. Dies ist der Standardwert.
        - `refresh`
          - : Ein neuer Einlösungsdatensatz wird immer ausgestellt.
    - `version`
      - : Eine Zahl, die die Version des kryptografischen Protokolls angibt, das beim Generieren eines Tokens verwendet werden soll. Derzeit ist dies immer auf `1` gesetzt, was die einzige Version ist, die die Spezifikation unterstützt. Wenn die `privateToken`-Option angegeben wird, ist diese Eigenschaft obligatorisch.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers im Fall, dass der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:
    - `follow`
      - : Automatisch Umleitungen folgen.
    - `error`
      - : Das Promise mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen gefilterten Feldern zurückgeben, um einem Dienstarbeiter zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardwert ist `follow`.

- `referrer` {{optional_inline}}
  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}} Header der Anfrage verwendet werden soll. Eines der folgenden:
    - Eine relative oder absolute URL vom selben Ursprung
      - : Setzt den `Referer` Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Lässt den `Referer` Header weg.
    - `about:client`
      - : Setzt den `Referer` Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gemacht hat).

    Standardwert ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}} Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die `method`, `body` und `headers` Optionen direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Methodenaufruf:

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

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request), und übergeben denselben Satz von Optionen in seinen Konstruktor, und übergeben dann die Anfrage in `fetch()`:

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

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request), und übergeben die `method`, `headers` und `body` Optionen in seinen Konstruktor. Dann übergeben wir die Anfrage in `fetch()` zusammen mit den `body` und `referrer` Optionen:

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
