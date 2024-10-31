---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 22526bdf0076aec093ba0a1ba32a6bb0d4ffd853
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge von Optionen, die verwendet werden können, um eine Fetch-Anfrage zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktionsaufruf übergeben.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und das `Request` in einen `fetch()`-Aufruf zusammen mit einem anderen `RequestInit` übergeben. Wenn Sie dies tun und die gleiche Option in beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage sein soll, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt mit den folgenden Eigenschaften:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie nicht berechtigt.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie nicht berechtigt.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden, beispielsweise in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Es wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Einrichten eines Bodys](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein Boolean, der angibt, dass die ausgewählten Themen des aktuellen Benutzers in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwenden der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt und sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [abgelaufen](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [konditionale Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage machen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _aber wird_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _ob frisch oder abgelaufen,_ wird der Browser eine [konditionale Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass sich die Ressource nicht verändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage machen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _ob frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage machen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _ob frisch oder abgelaufen_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage auf `"same-origin"` gesetzt ist. Zwischengespeicherte Umleitungen werden verfolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Umleitungen den `"same-origin"`-Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Kontrolliert, ob der Browser Anmeldedaten mit der Anfrage sendet und ob irgendwelche **`Set-Cookie`**-Antwortheader beachtet werden. Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldedaten mit der Anfrage senden oder in die Antwort aufnehmen.
    - `same-origin`
      - : Anmeldedaten nur für gleichoriginige Anfragen senden und einbeziehen.
    - `include`
      - : Immer Anmeldedaten einbeziehen, auch für Cross-Origin-Anfragen.

    Das Einbeziehen von Anmeldedaten in Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort aufnimmt. Darüber hinaus muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Siehe [Einbeziehen von Anmeldedaten](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standardmäßig auf `same-origin`.

- `headers` {{optional_inline}}

  - : Falls Sie Header zu Ihrer Anfrage hinzufügen möchten, innerhalb eines [`Headers`](/de/docs/Web/API/Headers)-Objekts oder eines Objektliterals, dessen Schlüssel die Namen der Header und dessen Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "verbotene Header-Namen")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} setzen.

    Siehe [Einstellen von Headern](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity` {{optional_inline}}

  - : Enthält den [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genau wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut an einem {{htmlelement("script")}}-Element gesetzt wäre. Der Browser wird den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus berechnen, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Browser die Fetch-Anfrage mit einem Netzwerkfehler ablehnen.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384`, oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses des Hashens der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean. Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies ermöglicht eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) beim Senden von Analysen am Ende einer Sitzung zu fungieren, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Antwort des Servers über die Erfüllung des Fetch {{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig auf `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Verbietet Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, resultiert dies in einem Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} sind in der Antwort verfügbar.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option weist die folgenden Einschränkungen auf:

        - Die Methode darf nur `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}}-Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Service-Worker hinzugefügten Header.
        - Die Antwort ist _undurchsichtig_, das bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist ein Service Worker: Obwohl die Antwort auf eine `no-cors`-Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie anwenden, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie [cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur für HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Wechsel zwischen Dokumenten erstellt.

    Siehe [Cross-Origin-Anfragen erstellen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für weitere Details.

    Standardmäßig auf `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert gesetzt ist oder wenn ein ungültiger Wert gesetzt ist.

    Standardmäßig auf `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Redirect-Status](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Redirects folgen.
    - `error`
      - : Das Promise mit einem Netzwerkfehler ablehnen, wenn ein Redirect-Status zurückgegeben wird.
    - `manual`
      - : Eine Antwort zurückgeben, bei der fast alle Felder gefiltert sind, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später zu wiederholen.

    Standardmäßig auf `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden Werte:

    - Eine gleiche Herkunft relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gemacht hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Den `Referer`-Header auf den Standardwert für den Kontext der Anfrage setzen (zum Beispiel die URL der Seite, die die Anfrage gemacht hat).

    Standardmäßig auf `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) am entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Übergabe von Optionen an `fetch()`

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

### Übergabe von Optionen an den `Request()`-Konstruktor

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen in seinen Konstruktor übergeben, und übergeben dann die Anfrage an `fetch()`:

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

### Übergabe von Optionen an sowohl `Request()` als auch `fetch()`

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` in seinen Konstruktor übergeben. Dann übergeben wir die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
