---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 667c1884597a2b576a5b51e0129f3c27a532cff6
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge von Optionen, die verwendet werden können, um eine Fetch-Anfrage zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den {{domxref("Request.Request()", "Request()")}}-Konstruktor oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion übergeben.

Sie können auch einen `Request` mit einem `RequestInit` erstellen und den `Request` zusammen mit einem anderen `RequestInit` in einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen festgelegt ist, wird der Wert genommen, der direkt in `fetch()` übergeben wurde.

## Instanzen-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage eine auf JavaScript basierende [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie dies nicht.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie dies nicht.

    Sehen Sie sich die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details an.

- `body` {{optional_inline}}

  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - {{domxref("Blob")}}
    - {{jsxref("DataView")}}
    - {{domxref("File")}}
    - {{domxref("FormData")}}
    - {{jsxref("TypedArray")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("ReadableStream")}}

    Sehen Sie sich [Festlegen eines Bodys](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details an.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Sehen Sie sich [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details an.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage ausführen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom entfernten Server ab, ohne zuerst im Cache nachzusehen, _jedoch wird_ der Cache mit der heruntergeladenen Ressource aktualisiert.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage ausführen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage ausführen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Gezwungene Redirects werden verfolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Redirects den `"same-origin"`-Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Steuert, ob der Browser Anmeldeinformationen mit der Anfrage sendet sowie ob irgendwelche **`Set-Cookie`**-Antwort-Header beachtet werden. Anmeldeinformationen sind Cookies, {{glossary("TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort enthalten.
    - `same-origin`
      - : Anmeldeinformationen nur bei gleichen Ursprungsanfragen senden und enthalten.
    - `include`
      - : Immer Anmeldeinformationen einbeziehen, auch bei Anfragen über verschiedene Ursprünge.

    Das Einbeziehen von Anmeldeinformationen bei Anfragen über verschiedene Ursprünge kann eine Seite anfällig für {{glossary("CSRF")}}-Angriffe machen, daher muss, selbst wenn `credentials` auf `include` gesetzt ist, der Server auch zustimmen, sie einzubeziehen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort aufnimmt. Außerdem muss der Server in diesem Fall die Herkunft des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header explizit angeben (das heißt, `*` ist nicht erlaubt).

    Sehen Sie sich [Einbeziehen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details an.

    Standardmäßig `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in
    einem {{domxref("Headers")}}-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Headerwerte sind.

    Viele Header werden vom Browser automatisch gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{glossary("Verbotener Headername", "verbotene Headernamen")}} genannt.

    Wenn die Option `mode` auf `no-cors` gesetzt ist, können Sie nur {{glossary("CORS-safelistierter Anforderungsheader", "CORS-safelistierte Anforderungsheader")}} setzen.

    Sehen Sie sich [Festlegen von Headern](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details an.

- `integrity`

  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)
    Wert der Anfrage.

    Dies wird geprüft, wenn die Ressource abgerufen wird, genauso wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt wäre. Der Browser berechnet den {{glossary("Kryptographische-Hash-Funktion", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Abruf der Anfrage mit einem Netzwerkfehler abgelehnt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{glossary("base64", "Base64-Kodierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein boolescher Wert. Wenn `true`, wird der Browser die Anfrage nicht abbrechen, falls die Seite, die sie gestellt hat, vor Abschluss der Anfrage entladen wird. Dies ermöglicht, dass eine Fetch-Anfrage als Alternative zu {{domxref("Navigator.sendBeacon()")}} fungiert, wenn am Ende einer Sitzung Analysen gesendet werden.

    Die Körpergröße für Keepalive-Anfragen ist auf 64 Kibibyte beschränkt.

    Standardmäßig `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Einer der folgenden Werte:

    - `same-origin`
      - : Erlaubt keine Anfragen über verschiedene Ursprünge.
    - `cors`
      - : Wenn die Anfrage über verschiedene Ursprünge erfolgt, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet.
    - `no-cors`
      - : Die Anfrage muss eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) sein, die die Header einschränkt, die auf {{glossary("CORS-safelistierter Anforderungsheader", "CORS-safelistierte Anforderungsheader")}} eingestellt werden dürfen, und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.
    - `navigate`
      - : Wird nur bei HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.
    - `websocket`
      - : Wird nur beim Aufbau einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet.

    Sehen Sie sich [Erstellen von Cross-Origin-Anfragen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für weitere Details an.

    Standardmäßig `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Vergleich zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Bestimmen Sie automatisch die Priorität der Fetch-Anfrage im Vergleich zu anderen Anfragen desselben Typs.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers im Falle, dass der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Folgt automatisch Umleitungen.
    - `error`
      - : Lehnen Sie das Versprechen mit einem Netzwerkfehler ab, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Gibt eine Antwort mit fast allen herausgefilterten Feldern zurück, um einem Serviceworker zu ermöglichen, die Antwort zu speichern und sie später erneut wiederzugeben.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleiche Herkunft relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind exakt die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein {{domxref("AbortSignal")}}. Wenn diese Option festgelegt ist, kann die Anfrage abgebrochen werden, indem {{domxref("AbortController.abort()", "abort()")}} auf den entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Übergabe von Optionen an `fetch()`

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

### Übergabe von Optionen an den `Request()`-Konstruktor

In diesem Beispiel erstellen wir eine {{domxref("Request")}}, und übergeben das gleiche Set an Optionen in seinen Konstruktor, und übergeben dann die Anfrage an `fetch()`:

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

In diesem Beispiel erstellen wir eine {{domxref("Request")}}, übergeben die `method`, `headers` und `body`-Optionen in seinen Konstruktor. Wir übergeben dann die Anfrage an `fetch()` zusammen mit `body` und `referrer`-Optionen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
