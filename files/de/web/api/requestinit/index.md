---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 0985f662bf6c2351278ddb6c6629827d00ff6755
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge von Optionen dar, die verwendet werden können, um eine [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit` Objekt in den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch) Funktionsaufruf übergeben.

Sie können auch einen `Request` mit einem `RequestInit` konstruieren und den `Request` an einen `fetch()`-Aufruf zusammen mit einem anderen `RequestInit` übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen gesetzt ist, wird der Wert, der direkt an `fetch()` übergeben wurde, verwendet.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, kann die Antwort der Anfrage eine Attributionsquelle registrieren. Wenn auf `false` gesetzt, nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, kann die Antwort der Anfrage einen Attributionstrigger registrieren. Wenn auf `false` gesetzt, nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}
  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Es wird als Instanz eines der folgenden Typen angegeben:
    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Einen Body setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{deprecated_inline}}
  - : Ein Boolean, der angibt, dass die ausgewählten Themen des aktuellen Benutzers in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}
  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server senden. Falls der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage senden und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _und wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _aber dann_ wird der Cache mit der heruntergeladenen Ressource aktualisiert.
    - `no-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server senden. Falls der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage senden und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage senden und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden befolgt, wenn die `redirect` Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}
  - : Kontrolliert, ob der Browser Anmeldedaten mit der Anfrage sendet oder nicht und ob irgendwelche **`Set-Cookie`** Antwortheader akzeptiert werden. Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungsheader mit Benutzernamen und Passwort. Diese Option kann einen der folgenden Werte haben:
    - `omit`
      - : Anmeldedaten niemals mit der Anfrage senden oder in der Antwort einbeziehen.
    - `same-origin`
      - : Anmeldedaten nur für Same-Origin-Anfragen senden und einbeziehen.
    - `include`
      - : Anmeldedaten immer einbeziehen, auch für Cross-Origin-Anfragen.

    Das Einbeziehen von Anmeldedaten in Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}} Angriffe anfällig machen, daher muss der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort enthält. Darüber hinaus muss der Server in diesem Fall den Ursprung des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}} Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Siehe [Einbeziehen von Anmeldedaten](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für mehr Details.

    Standardwert ist `same-origin`.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Kontrolliert das Duplex-Verhalten der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Beliebige Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript festgelegt werden: Diese werden als {{Glossary("Forbidden_request_header", "Verbotene Anfrage-Header")}} bezeichnet.

    Wenn die `mode` Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}} setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity` {{optional_inline}}
  - : Enthält den Wert der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).

    Dies wird überprüft, wenn die Ressource abgerufen wird, genau wie es wäre, wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut in einem {{htmlelement("script")}} Element gesetzt wäre. Der Browser wird den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus berechnen, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Browser die Abrufanfrage mit einem Netzwerkfehler ablehnen.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384`, oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses des Hashens der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardwert ist ein leerer String.

- `keepalive` {{optional_inline}}
  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.
    Dies ermöglicht einer [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage, Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Beispielsweise können Sie andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageneigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Body-Größe für `keepalive` Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}
  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:
    - `same-origin`
      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin` Anfrage an einen anderen Ursprung gesendet wird, resultiert das in einem Netzwerkfehler.

    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}} werden in der Antwort offengelegt.

    - `no-cors`
      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option ist mit den folgenden Einschränkungen verbunden:
        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle Header, die von Service-Workern hinzugefügt werden.
        - Die Antwort ist _opak_, das bedeutet, dass ihre Header und ihr Body für JavaScript nicht zugänglich sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service-Worker: obwohl die Antwort auf eine `no-cors` Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service-Worker zwischengespeichert werden und später als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht. Daher sollten Sie eine Zwischenspeicherstrategie anwenden, die es ermöglicht, die zwischengespeicherte Antwort vom Netzwerk zu aktualisieren (wie [Cache zuerst mit Cache-Aktualisierung](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigationen verwendet. Eine `navigate` Anfrage wird nur während der Navigation zwischen Dokumenten erstellt.

    Siehe [Cross-Origin-Anfragen durchführen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für mehr Details.

    Standardwert ist `cors`.

- `priority` {{optional_inline}}
  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen des gleichen Typs an. Muss einer der folgenden Werte sein:
    - `high`
      - : Eine hoch priorisierte Fetch-Anfrage im Verhältnis zu anderen Anfragen des gleichen Typs.
    - `low`
      - : Eine niedrig priorisierte Fetch-Anfrage im Verhältnis zu anderen Anfragen des gleichen Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

    Standardmäßig `auto`.

- `privateToken` {{optional_inline}}
  - : Ein Objekt, das Optionen zum Starten einer [privaten Status-Token](/de/docs/Web/API/Private_State_Token_API/Using) Operation enthält. Mögliche Eigenschaften beinhalten:
    - `issuers`
      - : Ein Array von Strings, das die URLs der Herausgeber enthält, für die Sie Einlösungsdatensätze weiterleiten möchten. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `send-redemption-record` gesetzt, in diesem Fall muss das `issuers` Array enthalten sein.
    - `operation`
      - : Ein String, der den Typ der gewünschten Token-Operation darstellt. Bei Angabe der `privateToken` Option ist diese Eigenschaft obligatorisch. Mögliche Werte sind:
        - `token-request`
          - : Startet eine [Token-Anfrage](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) Operation.
        - `token-redemption`
          - : Startet eine [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) Operation.
        - `send-redemption-record`
          - : Startet eine [Sendereinlösungsdatensatz](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) Operation.
    - `refreshPolicy`
      - : Ein enumerierter Wert, der das erwartete Verhalten angibt, wenn ein nicht abgelaufener Einlösungsdatensatz für den aktuellen Benutzer und die aktuelle Seite bereits gesetzt wurde. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `token-redemption` gesetzt. Mögliche Werte sind:
        - `none`
          - : Der bereits gesetzte Einlösungsdatensatz sollte verwendet und keine neue ausgestellt werden. Dies ist der Standardwert.
        - `refresh`
          - : Ein neuer Einlösungsdatensatz wird immer ausgestellt.
    - `version`
      - : Eine Zahl, die die Version des kryptografischen Protokolls angibt, das Sie bei der Generierung eines Tokens verwenden möchten. Derzeit ist dies immer auf `1` gesetzt, was die einzige von der Spezifikation unterstützte Version ist. Bei Angabe der `privateToken` Option ist diese Eigenschaft obligatorisch.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers, wenn der Server mit einem [Redirect-Status](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:
    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Das Promise mit einem Netzwerkfehler ablehnen, wenn ein Redirect-Status zurückgegeben wird.
    - `manual`
      - : Eine Antwort zurückgeben, bei der fast alle Felder herausgefiltert sind, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später wiederzugeben.

    Standardwert ist `follow`.

- `referrer` {{optional_inline}}
  - : Ein String, der den zu verwendenden Wert für den {{httpheader("Referer")}} Header der Anfrage angibt. Einer der folgenden:
    - Eine Same-Origin-relative oder absolute URL
      - : Setzen Sie den `Referer` Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage erstellt hat.
    - Ein leerer String
      - : Unterlassen Sie den `Referer` Header.
    - `about:client`
      - : Setzen Sie den `Referer` Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage erstellt hat).

    Standardwert ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}} Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` aufgerufen wird.
- `targetAddressSpace` {{optional_inline}}
  - : Ein enumerierter Wert, der angibt, ob die Anfrage als Loopback-, lokale oder öffentliche Anfrage gedacht ist. Dies steuert, wie der Benutzeragent mit gemischtem Inhalt umgeht.
    Gültige Werte sind:
    - `local`
      - : Die Anfrage geht an eine lokale Adresse, die nur im lokalen Netzwerk zugänglich ist; das Ziel wird auf verschiedenen Netzwerken unterschiedlich sein. Zum Beispiel `192.168.0.1`.
    - `loopback`
      - : Die Anfrage geht an eine Loopback-Adresse, die nur auf dem lokalen Gerät zugänglich ist; das Ziel wird auf jedem Gerät unterschiedlich sein. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
    - `public`
      - : Die Anfrage geht an eine Adresse, die von überall im Internet zugänglich ist; das Ziel ist für alle Geräte weltweit gleich.

    Siehe [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access) für mehr Informationen.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die `method`, `body`, und `headers` Optionen direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch) Methodenaufruf:

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

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen in seinen Konstruktor übergeben, und dann den Request in `fetch()` übergeben:

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

### Optionen in sowohl `Request()` als auch `fetch()` übergeben

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request), indem wir die `method`, `headers`, und `body` Optionen in seinen Konstruktor übergeben. Wir übergeben dann den Request in `fetch()` zusammen mit den `body` und `referrer` Optionen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
