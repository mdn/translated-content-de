---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Reihe von Optionen, die verwendet werden können, um eine [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Man kann ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch) Funktion übergeben.

Es ist auch möglich, ein `Request` mit einem `RequestInit` zu konstruieren und das `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()` Aufruf zu übergeben. Falls Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt an `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Zeigt an, dass Sie möchten, dass die Antwort der Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

- `body` {{optional_inline}}

  - : Der Anfragekörper enthält Inhalte, die an den Server gesendet werden sollen, beispielsweise in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Festlegen eines Körpers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für mehr Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein Boolean, der angibt, dass die ausgewählten Themen des aktuellen Benutzers in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt und sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, aber sie [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server stellen. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _aber wird_ dann den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den entfernten Server stellen. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden gefolgt, wenn die `redirect` Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen nicht den `"same-origin"` Modus verletzen.

- `credentials` {{optional_inline}}

  - : Steuert, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`** Antwort-Header berücksichtigt werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einen der folgenden Werte haben:

    - `omit`
      - : Senden Sie niemals Anmeldeinformationen in der Anfrage oder schließen Sie Anmeldeinformationen in der Antwort ein.
    - `same-origin`
      - : Senden und schließen Sie Anmeldeinformationen nur für same-origin Anfragen ein.
    - `include`
      - : Schließen Sie Anmeldeinformationen immer ein, auch für Cross-Origin-Anfragen.

    Das Einbeziehen von Anmeldeinformationen bei Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen, daher muss auch dann, wenn `credentials` auf `include` gesetzt ist, der Server ihrer Einbeziehung durch die Aufnahme des {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort zustimmen. Zusätzlich muss der Server in diesem Fall explizit den Herkunftsort des Clients im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Informationen finden Sie unter [Einbeziehen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig auf `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten
    sich in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder in einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: diese werden als {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}} bezeichnet.

    Wenn die `mode` Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-sichere Anforderungsheader")}} setzen.

    Siehe [Setzen von Headern](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für mehr Details.

- `integrity` {{optional_inline}}

  - : Enthält den [Subressourcen-Integritäts](/de/docs/Web/Security/Subresource_Integrity) Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie es überprüft wird, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut an einem {{htmlelement("script")}} Element gesetzt ist. Der Browser wird den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus berechnen, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird die Anfrage mit einem Netzwerkfehler abgelehnt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` ist das {{Glossary("base64", "Base64-kodierte")}} Ergebnis des Hashens der Ressource mit dem angegebenen Hash-Algorithmus.

    Standardmäßig auf einen leeren String gesetzt.

- `keepalive` {{optional_inline}}

  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht einer [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage, Analytik am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden verwenden, die nicht [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) sind, Anfrage-Eigenschaften anpassen und auf die Serverantwort über die Fulfillment des Fetch {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive` Anfragen ist auf 64 Kibibytes begrenzt.

    Standardmäßig auf `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig auf {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Ein Wert der folgenden:

    - `same-origin`

      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin` Anfrage an eine andere Herkunft gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}} werden in der Antwort offengelegt.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option bringt die folgenden Einschränkungen mit sich:

        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-sichere Anforderungsheader")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle Header, die von Service-Workern hinzugefügt werden.
        - Die Antwort ist _opaqu_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service-Worker: Auch wenn die Antwort auf eine `no-cors` Anfrage von JavaScript nicht gelesen werden kann, kann sie von einem Service-Worker zwischengespeichert werden und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Cache-Strategie annehmen, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (zum Beispiel [cache first mit cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von der HTML-Navigation verwendet. Eine `navigate` Anfrage wird nur während des Wechsels zwischen Dokumenten erstellt.

    Siehe [Creating cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für mehr Details.

    Standardmäßig auf `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Wird verwendet, wenn kein Wert gesetzt ist oder wenn ein ungültiger Wert gesetzt ist.

    Standardmäßig auf `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers im Fall, dass der Server mit einem [Weiterleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Weiterleitungen folgen.
    - `error`
      - : Das Versprechen mit einem Netzwerkfehler ablehnen, wenn ein Weiterleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen ausgefilterten Feldern zurückgeben, um einem Service-Worker zu ermöglichen, die Antwort zu speichern und später erneut auszuführen.

    Standardmäßig auf `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}} Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine same-origin relative oder absolute URL
      - : Setzen Sie den `Referer` Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gemacht hat.
    - Ein leerer String
      - : Den `Referer` Header weglassen.
    - `about:client`
      - : Setzen Sie den `Referer` Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gemacht hat).

    Standardmäßig auf `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}} Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen an `fetch()` übergeben

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir den gleichen Satz von Optionen in seinen Konstruktor übergeben, und geben dann die Anfrage an `fetch()` weiter:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` in seinen Konstruktor übergeben. Dann geben wir die Anfrage an `fetch()` zusammen mit `body` und `referrer` Optionen:

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
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
