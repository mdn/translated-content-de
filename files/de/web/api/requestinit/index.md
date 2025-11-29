---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 03bec1862b095fc71beac2341a9faaaa8d209f49
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, die verwendet werden können, um eine [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt entweder in den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in den Aufruf der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben.

Es ist auch möglich, ein `Request` mit einem `RequestInit` zu konstruieren und das `Request` in einen `fetch()`-Aufruf zusammen mit einem weiteren `RequestInit` zu übergeben. Wenn Sie dies tun und die gleiche Option in beiden festgelegt ist, wird der Wert, der direkt in `fetch()` übergeben wird, verwendet.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}
  - : Der Anfrage-Body enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:
    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Einen Body festlegen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}
  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}
  - : Der [Cachemodus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt und sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [konditionelle Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zunächst im Cache nachzusehen und _aktualisiert den Cache nicht_ mit der heruntergeladenen Ressource.
    - `reload`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zunächst im Cache nachzusehen, _und aktualisiert dann_ den Cache mit der heruntergeladenen Ressource.
    - `no-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen,_ wird der Browser eine [konditionelle Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server stellen. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt.
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die zur Anfrage passt. {{experimental_inline}}
        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkausfall zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden gefolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}
  - : Kontrolliert, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`**-Antwortheader berücksichtigt werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einen der folgenden Werte haben:
    - `omit`
      - : Anmeldeinformationen niemals in der Anfrage senden oder in der Antwort berücksichtigen.
    - `same-origin`
      - : Nur Anmeldeinformationen für `same-origin`-Anfragen senden und berücksichtigen.
    - `include`
      - : Anmeldeinformationen immer einbeziehen, auch für Anfragen über verschiedene Ursprünge hinweg.

    Das Einbeziehen von Anmeldeinformationen in Anfragen über verschiedene Ursprünge hinweg kann eine Site anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen, sodass selbst wenn `credentials` auf `include` gesetzt ist, der Server ihre Einbeziehung ebenfalls durch das Aufnehmen des Headers {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort akzeptieren muss. Zudem muss der Server in dieser Situation explizit den Ursprung des Clients im Antwortheader {{httpheader("Access-Control-Allow-Origin")}} angeben (d.h. `*` ist nicht erlaubt).

    Siehe [Anmeldeinformationen einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standardmäßig auf `same-origin` gesetzt.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Steuert das Duplexverhalten der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Beliebige Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteralen, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_request_header", "Verbotene Anforderungsheader")}} bezeichnet.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungsheader")}} setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity` {{optional_inline}}
  - : Enthält den [Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
    Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie sie überprüft würde, wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser wird den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus berechnen, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Browser die Abrufanfrage mit einem Netzwerkausfall ablehnen.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses der Hash-Berechnung der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig auf einen leeren String gesetzt.

- `keepalive` {{optional_inline}}
  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht es einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden verwenden, die nicht [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) sind, Anforderungseigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Servicearbeiter](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Body-Größe für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig auf `false` gesetzt.

- `method` {{optional_inline}}
  - : Die [Anforderungsmethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig auf {{httpmethod("GET")}} gesetzt.

- `mode` {{optional_inline}}
  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:
    - `same-origin`
      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkausfall.

    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwenden. Nur {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelistete Antwortheader")}} sind in der Antwort sichtbar.

    - `no-cors`
      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option bringt die folgenden Einschränkungen mit sich:
        - Die Methode kann nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungsheader")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Servicearbeitern hinzugefügten Header.
        - Die Antwort ist _nicht durchsichtig_, das heißt, dass ihre Header und ihr Body über JavaScript nicht verfügbar sind, und ihr [Statuscode](/de/docs/Web/API/Response/status) ist immer `0`.

        Die Hauptanwendung für `no-cors` ist für einen Servicearbeiter: Obwohl die Antwort auf eine `no-cors`-Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Servicearbeiter zwischengespeichert und dann als Antwort auf eine abgefangene fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie anwenden, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie [Cache zuerst mit Cache-Aktualisierung](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Cross-Origin-Anfragen erstellen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für weitere Details.

    Standardmäßig auf `cors` gesetzt.

- `priority` {{optional_inline}}
  - : Gibt die Priorität der Abrufanfrage im Vergleich zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:
    - `high`
      - : Eine Abrufanfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Abrufanfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Abrufpriorität.
        Es wird verwendet, wenn kein Wert festgelegt oder ein ungültiger Wert gesetzt ist.

    Standardmäßig auf `auto` gesetzt.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers bei einer Antwort des Servers mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages). Einer der folgenden Werte:
    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Das Versprechen mit einem Netzwerkausfall ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen gefilterten Feldern zurückgeben, um einem Servicearbeiter zu ermöglichen, die Antwort zu speichern und später erneut abzurufen.

    Standardmäßig auf `follow` gesetzt.

- `referrer` {{optional_inline}}
  - : Ein String, der den zu verwendenden Wert für den {{httpheader("Referer")}}-Header der Anfrage angibt. Einer der folgenden:
    - Eine gleiche Ursprungs-Relativ- oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Lässt den `Referer`-Header aus.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage stellte).

    Standardmäßig auf `about:client` gesetzt.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.

- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) am entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt an den Aufruf der [`fetch()`-Methode](/de/docs/Web/API/Window/fetch):

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen in seinen Konstruktor übergeben und dann die Anfrage in `fetch()` übergeben:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), wobei wir die Optionen `method`, `headers` und `body` in seinen Konstruktor übergeben. Wir übergeben dann die Anfrage in `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
