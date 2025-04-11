---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge von Optionen, die verwendet werden können, um eine [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Funktionsaufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben.

Sie können auch ein `Request` mit einem `RequestInit` erstellen und das `Request` an einen `fetch()`-Aufruf zusammen mit einem anderen `RequestInit` übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen festgelegt wird, wird der Wert verwendet, der direkt in `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass die Antwort der Anfrage in der Lage sein soll, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage geeignet, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage geeignet, einen Attribution Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfrageinhalt enthält die Daten, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

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

  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollten.

    Weitere Informationen finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt und diese [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, diese jedoch [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, stellt der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remoteserver. Wenn der Server angibt, dass sich die Ressource nicht verändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser holt die Ressource vom Remoteserver, ohne zuerst im Cache nachzusehen, _und wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom Remoteserver, ohne zuerst im Cache nachzusehen, _wird jedoch_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet,_ wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remoteserver stellen. Wenn der Server angibt, dass sich die Ressource nicht verändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`

      - : Der Browser durchsucht seinen HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _aktuell oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden verfolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Umleitungen nicht gegen den `"same-origin"`-Modus verstoßen.

- `credentials` {{optional_inline}}

  - : Legt fest, ob der Browser Anmeldedaten mit der Anfrage sendet und ob **`Set-Cookie`**-Antwortheader beachtet werden. Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Nie Anmeldedaten in der Anfrage senden oder Anmeldedaten in der Antwort berücksichtigen.
    - `same-origin`
      - : Nur Anmeldedaten für Anfragen aus demselben Ursprung senden und berücksichtigen.
    - `include`
      - : Immer Anmeldedaten einschließen, selbst bei Cross-Origin-Anfragen.

    Das Einschließen von Anmeldedaten bei Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch deren Einbeziehung akzeptieren, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seine Antwort einfügt. Zusätzlich muss der Server in diesem Fall den Ursprungsort des Clients explizit in seinem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig auf `same-origin` gesetzt.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie zu Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Headerwerte sind.

    Viele Header werden automatisch vom Browser gesetzt und können von einem Skript nicht gesetzt werden: Diese werden als {{Glossary("Forbidden_request_header", "Verbotene Anforderungsüberschriften")}} bezeichnet.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können nur {{Glossary("CORS-safelisted_request_header", "CORS-freigegebene Anforderungsüberschriften")}} gesetzt werden.

    Weitere Details finden Sie unter [Setting headers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity` {{optional_inline}}

  - : Enthält den Wert der [Subressourcen-Integrität](/de/docs/Web/Security/Subresource_Integrity) der Anfrage.

    Dies wird beim Abruf der Ressource überprüft, genau wie wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus und lehnt die Abrufanfrage mit einem Netzwerkfehler ab, wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses der Hash-Berechnung der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig auf einen leeren String gesetzt.

- `keepalive` {{optional_inline}}

  - : Ein boolescher Wert.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht es einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, am Ende einer Sitzung Analysen zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

    Dies bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibytes begrenzt.

    Standardmäßig auf `false` gesetzt.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig auf {{httpmethod("GET")}} gesetzt.

- `mode` {{optional_inline}}

  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Verhindert Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage cross-origin ist, wird sie das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwenden. Es werden nur {{Glossary("CORS-safelisted_response_header", "CORS-freigegebene Antwortüberschriften")}} in der Antwort offengelegt.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option ist mit den folgenden Einschränkungen verbunden:

        - Die Methode darf nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-freigegebene Anforderungsüberschriften")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}}-Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle Header, die von Service Workern hinzugefügt werden.
        - Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Inhalt JavaScript nicht zur Verfügung stehen, und ihr [Statuscode](/de/docs/Web/API/Response/status) ist immer `0`.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: obwohl die Antwort auf eine `no-cors`-Anfrage von JavaScript nicht gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie anwenden, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie zum Beispiel [cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Informationen finden Sie unter [Making cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardmäßig auf `cors` gesetzt.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzervorgabe für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert gesetzt oder ein ungültiger Wert gesetzt wird.

    Standardmäßig auf `auto` gesetzt.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, wenn der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Verspricht mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort zurückgeben, bei der fast alle Felder gefiltert sind, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später wiederzugeben.

    Standardmäßig auf `follow` gesetzt.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleichursprüngliche relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite, die die Anfrage gestellt hat, aufgelöst.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig auf `about:client` gesetzt.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) am entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel geben wir die Optionen `method`, `body` und `headers` direkt in den Methodenaufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) ein:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen in deren Konstruktor übergeben, und übergeben dann die Anfrage an `fetch()`:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` in deren Konstruktor übergeben. Wir übergeben dann die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
