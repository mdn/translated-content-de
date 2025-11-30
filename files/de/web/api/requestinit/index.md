---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge an Optionen dar, die verwendet werden können, um eine [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor übergeben oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion.

Sie können auch ein `Request` mit einem `RequestInit` erstellen und das `Request` zusammen mit einem anderen `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen festgelegt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wurde.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}
  - : Gibt an, dass die Antwort der Anfrage die Registrierung einer JavaScript-basierten [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder eines [Attributionstriggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) ermöglichen soll. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie dies nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie dies nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}
  - : Der Anfragekörper enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz von einer der folgenden Typen angegeben:
    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Einen Körper setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für mehr Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}
  - : Ein Boolean, der angibt, dass die ausgewählten Themen des aktuellen Benutzers in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

- `cache` {{optional_inline}}
  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn ein Treffer vorhanden ist und er [fresh](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird er aus dem Cache zurückgegeben.
        - Wenn ein Treffer vorhanden ist, der aber [stale](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server senden. Wenn der Server angibt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn kein Treffer vorhanden ist, wird der Browser eine normale Anfrage durchführen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _und wird den_ Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _wird aber_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn ein Treffer vorhanden ist, _frisch oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server senden. Wenn der Server angibt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn kein Treffer vorhanden ist, wird der Browser eine normale Anfrage durchführen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn ein Treffer vorhanden ist, _frisch oder veraltet_, wird er aus dem Cache zurückgegeben.
        - Wenn kein Treffer vorhanden ist, wird der Browser eine normale Anfrage durchführen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`
      - : Der Browser sucht im HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}
        - Wenn ein Treffer vorhanden ist, _frisch oder veraltet_, wird er aus dem Cache zurückgegeben.
        - Wenn kein Treffer vorhanden ist, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"`-Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden verfolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Umleitungen nicht gegen den `"same-origin"`-Modus verstoßen.

- `credentials` {{optional_inline}}
  - : Bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob irgendwelche **`Set-Cookie`**-Antwort-Header respektiert werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:
    - `omit`
      - : Anmeldeinformationen werden niemals mit der Anfrage gesendet oder in der Antwort eingeschlossen.
    - `same-origin`
      - : Anmeldeinformationen werden nur für gleich-origin Anfragen gesendet und eingeschlossen.
    - `include`
      - : Anmeldeinformationen werden immer eingeschlossen, auch für Cross-Origin-Anfragen.

    Das Einschließen von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Site anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Daher muss selbst wenn `credentials` auf `include` gesetzt ist, der Server auch deren Einschluss zustimmen, indem er den Header {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort mit einbezieht. Zusätzlich muss der Server in diesem Fall explizit den Ursprung des Clients im Header {{httpheader("Access-Control-Allow-Origin")}} der Antwort angeben (d.h. `*` ist nicht erlaubt).

    Siehe [Einschließen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für mehr Details.

    Standardmäßig auf `same-origin`.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Bestimmt das Duplex-Verhalten der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_request_header", "verbotene Anfrage-Header")}} bezeichnet.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safegelistete Anfrage-Header")}} setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für mehr Details.

- `integrity` {{optional_inline}}
  - : Enthält den [Subresource-Integritätswert](/de/docs/Web/Security/Defenses/Subresource_Integrity) der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, lehnt der Browser die Fetch-Anfrage mit einem Netzwerkfehler ab.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses der Ressourcencodierung mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig auf einen leeren String.

- `keepalive` {{optional_inline}}
  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, abgeschlossen oder geschlossen wird, bevor die Anfrage vollständig ist.
    Dadurch kann eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage am Ende einer Sitzung Analysen senden, auch wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Beispielsweise können Sie HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig auf `false`.

- `method` {{optional_inline}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}
  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:
    - `same-origin`
      - : Cross-Origin-Anfragen sind nicht erlaubt. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safegelistete Antwort-Header")}} sind in der Antwort zugänglich.

    - `no-cors`
      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option bringt folgende Einschränkungen mit sich:
        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safegelistete Anfrage-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}}-Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Service-Workern hinzugefügten Header.
        - Die Antwort ist _opaqu_, das heißt, ihre Header und ihr Körper sind für JavaScript nicht verfügbar, und ihr [Statuscode](/de/docs/Web/API/Response/status) ist immer `0`.

        Die Hauptanwendung für `no-cors` ist für einen Service-Worker: Obwohl die Antwort auf eine `no-cors`-Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service-Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht. Daher sollten Sie eine Caching-Strategie anwenden, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (z. B. [Cache First mit Cache-Aktualisierung](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur bei HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Cross-Origin-Anfragen durchführen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für mehr Details.

    Standardmäßig auf `cors`.

- `priority` {{optional_inline}}
  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:
    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert festgelegt wurde.

    Standardmäßig auf `auto`.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:
    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Das Versprechen mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen herausgefilterten Feldern zurückgeben, damit ein Service-Worker die Antwort speichern und später wiedergeben kann.

    Standardmäßig auf `follow`.

- `referrer` {{optional_inline}}
  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:
    - Eine gleiche Ursprungs-relative oder absolute URL
      - : Setzen Sie den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite gelöst, die die Anfrage gemacht hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Setzen Sie den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (z. B. die URL der Seite, die die Anfrage gemacht hat).

    Standardmäßig auf `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) beim entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Übergeben von Optionen an `fetch()`

In diesem Beispiel übergeben wir die `method`, `body` und `headers`-Optionen direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode:

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

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen in seinen Konstruktor übergeben, und geben das Request dann in `fetch()` weiter:

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

### Übergeben von Optionen sowohl an `Request()` als auch an `fetch()`

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request), indem wir die `method`, `headers` und `body`-Optionen in seinen Konstruktor übergeben. Wir geben das Request dann in `fetch()` weiter zusammen mit den Optionen `body` und `referrer`:

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
