---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Optionen, die zur Konfiguration einer [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) verwendet werden können.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den `fetch()`-Funktionsaufruf übergeben.

Sie können auch ein `Request` mit einem `RequestInit` erstellen und das `Request` zusammen mit einem anderen `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und die gleiche Option an beiden Stellen gesetzt ist, wird der direkt an `fetch()` übergebene Wert verwendet.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, kann die Antwort der Anfrage eine Attributionsquelle registrieren. Wenn auf `false` gesetzt, nicht.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, kann die Antwort der Anfrage einen Attribution Trigger registrieren. Wenn auf `false` gesetzt, nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}

  - : Der Anfrageinhalt enthält Daten, die an den Server gesendet werden, zum Beispiel in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Es wird als Instanz eines der folgenden Typen spezifiziert:

    - ein String
    - {{jsxref("ArrayBuffer")}}
    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("DataView")}}
    - [`File`](/de/docs/Web/API/File)
    - [`FormData`](/de/docs/Web/API/FormData)
    - {{jsxref("TypedArray")}}
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)

    Siehe [Festlegen eines Bodys](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) für weitere Details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : Ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}}-Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}

  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:

    - `default`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Falls es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Falls es eine Übereinstimmung gibt, die [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, stellt der Browser eine [konditionale Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server. Wenn der Server angibt, dass die Ressource unverändert ist, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Falls keine Übereinstimmung vorliegt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `no-store`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _und wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _aber wird dann_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Falls es eine Übereinstimmung gibt, _frisch oder veraltet_, stellt der Browser eine [konditionale Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server. Wenn der Server angibt, dass die Ressource unverändert ist, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache aktualisiert.
        - Falls keine Übereinstimmung vorliegt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `force-cache`

      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Falls es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Falls keine Übereinstimmung vorliegt, stellt der Browser eine normale Anfrage und aktualisiert den Cache mit der heruntergeladenen Ressource.

    - `only-if-cached`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}
        - Falls es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Falls keine Übereinstimmung vorliegt, wird ein Netzwerkfehler zurückgegeben.

    Der `"only-if-cached"`-Modus kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden gefolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}

  - : Bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob `Set-Cookie`-Antwortheader respektiert werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einer der folgenden Werte sein:

    - `omit`
      - : Anmeldeinformationen niemals in der Anfrage senden oder in der Antwort einbeziehen.
    - `same-origin`
      - : Anmeldeinformationen nur für Anfragen mit demselben Ursprung senden und einbeziehen.
    - `include`
      - : Anmeldeinformationen immer einbeziehen, auch bei Cross-Origin-Anfragen.

    Das Einbeziehen von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort aufnimmt. In diesem Fall muss der Server außerdem explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

    Siehe [Einbeziehen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Der Standardwert ist `same-origin`.

- `headers` {{optional_inline}}

  - : Alle Header, die Sie zu Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral, dessen Schlüssel die Namen der Header und dessen Werte die Headerwerte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Dies sind die {{Glossary("Forbidden_request_header", "Verbotenen Anfrage-Header")}}.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}} setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity` {{optional_inline}}

  - : Enthält den [Subresource Integritätswert](/de/docs/Web/Security/Subresource_Integrity) der Anfrage.

    Dieser wird überprüft, wenn die Ressource abgerufen wird, genauso wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut auf einem {{htmlelement("script")}}-Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, lehnt der Browser die Fetch-Anfrage mit einem Netzwerkfehler ab.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:

    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses der Hash-Erstellung der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Der Standardwert ist ein leerer String.

- `keepalive` {{optional_inline}}

  - : Ein boolescher Wert.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht es einer `fetch()`-Anfrage, Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden außer `POST` verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Der Standardwert ist `false`.

- `method` {{optional_inline}}

  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Der Standardwert ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Setzt das Verhalten der Anfrage bei Cross-Origin. Einer der folgenden Werte:

    - `same-origin`

      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`

      - : Wenn die Anfrage Cross-Origin ist, dann wird sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwenden. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}} sind in der Antwort verfügbar.

    - `no-cors`

      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option bringt folgende Einschränkungen mit sich:

        - Die Methode darf nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}} sein, mit der zusätzlichen Einschränkung, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle Header, die von Service Workern hinzugefügt wurden.
        - Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: Obwohl die Antwort auf eine `no-cors`-Anfrage von JavaScript nicht gelesen werden kann, kann sie von einem Service Worker zwischengespeichert werden und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie übernehmen, die es ermöglicht, die zwischengespeicherte Antwort aus dem Netzwerk zu aktualisieren (wie [Cache zuerst mit Cache-Aktualisierung](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Cross-Origin-Anfragen durchführen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für weitere Details.

    Der Standardwert ist `cors`.

- `priority` {{optional_inline}}

  - : Gibt die Priorität der Fetch-Anfrage relativ zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:

    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität relativ zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität relativ zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzervorgabe für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

    Der Standardwert ist `auto`.

- `redirect` {{optional_inline}}

  - : Bestimmt das Verhalten des Browsers, wenn der Server mit einem [Weiterleitungs-Status](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:

    - `follow`
      - : Folgen Sie automatisch Weiterleitungen.
    - `error`
      - : Lehnen Sie das Versprechen mit einem Netzwerkfehler ab, wenn ein Weiterleitungsstatus zurückgegeben wird.
    - `manual`
      - : Geben Sie eine Antwort mit fast allen herausgefilterten Feldern zurück, um es einem Service Worker zu ermöglichen, die Antwort zu speichern und später abzuspielen.

    Der Standardwert ist `follow`.

- `referrer` {{optional_inline}}

  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:

    - Eine gleich-origin relative oder absolute URL
      - : Setzen Sie den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite, die die Anfrage gemacht hat, aufgelöst.
    - Ein leerer String
      - : Lassen Sie den `Referer`-Header weg.
    - `about:client`
      - : Setzen Sie den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage durchgeführt hat).

    Der Standardwert ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}}-Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) beim entsprechenden `AbortController` aufgerufen wird.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die `method`, `body` und `headers` Optionen direkt an den [`fetch()`](/de/docs/Web/API/Window/fetch)-Methodenaufruf:

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

### Optionen an den `Request()`-Konstruktor übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen an seinen Konstruktor übergeben, und dann die Anfrage an `fetch()` übergeben:

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

### Optionen an `Request()` und `fetch()` übergeben

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die `method`, `headers` und `body` Optionen an seinen Konstruktor übergeben. Dann übergeben wir die Anfrage an `fetch()` zusammen mit `body` und `referrer` Optionen:

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
- [HTTP Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
