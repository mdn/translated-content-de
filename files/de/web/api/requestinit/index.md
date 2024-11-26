---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 0ffc63a13598470ddb4a4d3281800eeb2bf6ae2b
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge von Optionen dar, die verwendet werden können, um eine [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion geben.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und dieses `Request` zusammen mit einem anderen `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt wird, dann wird der Wert verwendet, der direkt an `fetch()` übergeben wird.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt mit den folgenden Eigenschaften:

    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}

  - : Der Anfragetext enthält den Inhalt, der an den Server gesendet werden soll, zum Beispiel in einer {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:

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

  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, diese jedoch [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser holt die Ressource vom entfernten Server, ohne zuerst im Cache nachzusehen, _wird jedoch_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Conditional_requests) an den entfernten Server senden. Wenn der Server angibt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}

        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"` Modus kann nur verwendet werden, wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `"same-origin"` ist. Zwischengespeicherte Umleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Umleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet, sowie ob irgendwelche **`Set-Cookie`**-Antwortheader beachtet werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einbeziehen.
    - `same-origin`
      - : Anmeldeinformationen nur für Anfragen gleicher Herkunft senden und einbeziehen.
    - `include`
      - : Anmeldeinformationen immer einbeziehen, sogar für Anfragen über Herkunftsgrenzen hinweg.

    Das Einbeziehen von Anmeldeinformationen in Anfragen über Herkunftsgrenzen hinweg kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen, daher muss der Server in diesem Fall auch zustimmen, indem er die {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort einbezieht. Zusätzlich muss der Server in dieser Situation die Herkunft des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}} Antwortheader angeben (das bedeutet, `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig auf `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und deren Werte die Headerwerte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: diese werden {{Glossary("Forbidden_header_name", "Verbotene Headernamen")}} genannt.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} setzen.

    Weitere Details finden Sie unter [Setting headers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity` {{optional_inline}}

  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie beim Setzen des [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attributs auf einem {{htmlelement("script")}} Element. Der Browser berechnet den {{Glossary("Cryptographic_hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem spezifizierten Wert übereinstimmt, wird die Fetch-Anfrage mit einem Netzwerkfehler abgelehnt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses des Hashens der Ressource mit dem spezifizierten Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein Boolean. Wenn auf `true` gesetzt, bricht der Browser die zugehörige Anfrage nicht ab, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies ermöglicht eine [`fetch()`](/de/docs/Web/API/Window/fetch) Anfrage, Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu selben Zweck. Zum Beispiel können Sie HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Fulfillment des Fetch {{jsxref("Promise")}} zugreifen. Ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods).

    Standardmäßig ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Legt das Verhalten über Herkunftsgrenzen hinweg für die Anfrage fest. Einer der folgenden Werte:

    - `same-origin`

      - : Verbietet Anfragen über Herkunftsgrenzen hinweg. Wenn eine `same-origin`-Anfrage an eine andere Herkunft gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage über Herkunftsgrenzen hinweg erfolgt, wird das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Verfahren verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} werden in der Antwort angezeigt.

    - `no-cors`

      - : Deaktiviert CORS für Anfragen über Herkunftsgrenzen hinweg. Diese Option gilt mit den folgenden Einschränkungen:

        - Die Methode darf nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle Header, die von Service Workern hinzugefügt werden.
        - Die Antwort ist _undurchsichtig_, das bedeutet, dass ihre Header und ihr Körper nicht für JavaScript verfügbar sind, und ihr [Statuscode](/de/docs/Web/API/Response/status) ist immer `0`.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: auch wenn die Antwort auf eine `no-cors`-Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, sodass Sie eine Caching-Strategie anwenden sollten, die es ermöglicht, die zwischengespeicherte Antwort vom Netzwerk zu aktualisieren (wie [Cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Making cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardmäßig `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden Werte sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert festgelegt ist oder ein ungültiger Wert festgelegt ist.

    Standardmäßig `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Automatisch Umleitungen folgen.
    - `error`
      - : Das Versprechen mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen herausgefilterten Feldern zurückgeben, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleichherkunftsbezogene relative oder absolute URL
      - : Setzen Sie den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer`-Header weglassen.
    - `about:client`
      - : Setzen Sie den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind exakt die gleichen wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch einen Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` abgebrochen werden.

## Beispiele

### Übergeben von Optionen an `fetch()`

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt an den `fetch()`-Methodenaufruf:

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

### Übergeben von Optionen an sowohl `Request()` als auch `fetch()`

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` in seinen Konstruktor übergeben. Wir übergeben dann die Anfrage an `fetch()` zusammen mit `body` und `referrer` Optionen:

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
- [HTTP access control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
