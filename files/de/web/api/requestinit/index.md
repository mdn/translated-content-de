---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

{{APIRef("Fetch API")}}

Das **`RequestInit`**-Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge von Optionen dar, die verwendet werden können, um eine [fetch request](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Funktionsaufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) einfügen.

Sie können auch ein `Request` mit einem `RequestInit` erstellen und das `Request` an einen `fetch()`-Aufruf zusammen mit einem anderen `RequestInit` übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen gesetzt ist, wird der Wert verwendet, der direkt in `fetch()` übergeben wurde.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{deprecated_inline}}
  - : Gibt an, dass die Antwort der Anfrage in der Lage sein soll, eine auf JavaScript basierende [Attributionquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt, das die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionquelle zu registrieren. Wenn auf `false` gesetzt, ist es nicht berechtigt.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution-Trigger zu registrieren. Wenn auf `false` gesetzt, ist es nicht berechtigt.

    Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- `body` {{optional_inline}}
  - : Der Anfrageninhalt enthält den Inhalt, der an den Server gesendet werden soll, beispielsweise in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Er wird als Instanz eines der folgenden Typen spezifiziert:
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

- `browsingTopics` {{optional_inline}} {{deprecated_inline}}
  - : Ein Boolean, der angibt, dass die ausgewählten Themen des aktuellen Nutzers in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollten.

- `cache` {{optional_inline}}
  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es ein Übereinstimmung gibt und sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, aber sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server senden. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource direkt vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _und wird den Cache nicht_ mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource direkt vom Remote-Server ab, ohne zuerst im Cache nachzusehen, _wird jedoch_ den Cache mit der heruntergeladenen Ressource aktualisieren.
    - `no-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server senden. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage `"follow"` ist und die Weiterleitungen den `"same-origin"` Modus nicht verletzen.

- `credentials` {{optional_inline}}
  - : Steuert, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`** Antwort-Header respektiert werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader mit einem Benutzernamen und Passwort. Diese Option kann einer der folgenden Werte sein:
    - `omit`
      - : Sendet niemals Anmeldeinformationen in der Anfrage oder nimmt Anmeldeinformationen in die Antwort auf.
    - `same-origin`
      - : Sendet und nimmt Anmeldeinformationen nur für Same-Origin Anfragen auf.
    - `include`
      - : Enthält immer Anmeldeinformationen, auch bei Cross-Origin Anfragen.

    Das Einbeziehen von Anmeldeinformationen bei Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrem Einschluss zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort einbezieht. Zudem muss der Server in diesem Fall ausdrücklich den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header angeben (d.h. `*` ist nicht erlaubt).

    Weitere Details finden Sie unter [Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

    Standardmäßig auf `same-origin`.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Steuert das Duplex-Verhalten der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Alle Header, die Sie zu Ihrer Anfrage hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder einem Objektliterale, dessen Schlüssel die Namen der Header und dessen Werte die Werte der Header sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Dies sind die sogenannten {{Glossary("Forbidden_request_header", "verbotenen Anfrage-Header")}}.

    Wenn die Option `mode` auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} setzen.

    Weitere Details finden Sie unter [Setting headers](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers).

- `integrity` {{optional_inline}}
  - : Enthält den Wert der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) der Anfrage.

    Dies wird geprüft, wenn die Ressource abgerufen wird, genauso wie es geprüft würde, wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut auf einem {{htmlelement("script")}} Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource unter Verwendung des angegebenen Algorithmus, und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, wird der Abrufversuch vom Browser mit einem Netzwerkfehler abgelehnt.

    Das Format dieser Option ist `<hash-algo>-<hash-source>`, wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` die {{Glossary("base64", "Base64-Codierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus ist.

    Standardmäßig ein leerer String.

- `keepalive` {{optional_inline}}
  - : Ein Boolean.
    Wenn er auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, geladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht es einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des {{jsxref("Promise")}} fetch zugreifen.
    Es steht auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) zur Verfügung.

    Die Körpergröße für `keepalive`-Anfragen ist auf 64 Kibibyte begrenzt.

    Standardmäßig `false`.

- `method` {{optional_inline}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardmäßig {{httpmethod("GET")}}.

- `mode` {{optional_inline}}
  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:
    - `same-origin`
      - : Erlaubt keine Cross-Origin-Anfragen. Wenn eine `same-origin`-Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzwerkfehler.

    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird der Mechanismus [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) angewendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} werden in der Antwort offengelegt.

    - `no-cors`
      - : Deaktiviert CORS für Cross-Origin-Anfragen. Diese Option kommt mit den folgenden Einschränkungen:
        - Die Methode darf nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} sein, mit dem zusätzlichen Ausschluss, dass der {{httpheader("Range")}} Header ebenfalls nicht erlaubt ist. Dies gilt auch für alle von Service Workern hinzugefügten Header.
        - Die Antwort ist _opaque_, was bedeutet, dass ihre Header und ihr Körper nicht für JavaScript zugänglich sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist für einen Service Worker: obwohl die Antwort auf eine `no-cors`-Anfrage nicht von JavaScript gelesen werden kann, kann sie von einem Service Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass Sie in dieser Situation nicht wissen, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Cache-Strategie anwenden, die es dem zwischengespeicherten Antwort ermöglicht, aus dem Netzwerk aktualisiert zu werden (wie [Cache first with cache refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate`-Anfrage wird nur während der Navigation zwischen Dokumenten erstellt.

    Weitere Details finden Sie unter [Making cross-origin requests](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests).

    Standardmäßig `cors`.

- `priority` {{optional_inline}}
  - : Legt die Priorität der Fetch-Anfrage im Vergleich zu anderen Anfragen desselben Typs fest. Muss einer der folgenden Werte sein:
    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Vergleich zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert gesetzt ist oder ein ungültiger Wert gesetzt ist.

    Standardmäßig `auto`.

- `privateToken` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Initiierung einer [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using) Operation enthält. Mögliche Eigenschaften sind:
    - `issuers`
      - : Ein Array von Strings, das die URLs von Ausstellern enthält, für die Sie Einlösungsdatensätze weiterleiten möchten. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `send-redemption-record` gesetzt, in diesem Fall muss das `issuers` Array enthalten sein.
    - `operation`
      - : Ein String, der den Typ der Token-Operation darstellt, die Sie initiieren möchten. Bei Angabe der `privateToken`-Option ist diese Eigenschaft obligatorisch. Mögliche Werte sind:
        - `token-request`
          - : Initiert eine [Tokenanfrage](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) Operation.
        - `token-redemption`
          - : Initiert eine [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) Operation.
        - `send-redemption-record`
          - : Initiert eine [Send Redemption Record](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) Operation.
    - `refreshPolicy`
      - : Ein enumerierter Wert, der das erwartete Verhalten angibt, wenn ein nicht abgelaufener Einlösungsdatensatz für den aktuellen Benutzer und die aktuelle Website zuvor festgelegt wurde. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `token-redemption` gesetzt. Mögliche Werte sind:
        - `none`
          - : Der zuvor festgelegte Einlösungsdatensatz sollte verwendet und kein neuer ausgegeben werden. Dies ist der Standardwert.
        - `refresh`
          - : Ein neuer Einlösungsdatensatz wird immer ausgegeben.
    - `version`
      - : Eine Zahl, die die Version des kryptographischen Protokolls angibt, das beim Generieren eines Tokens verwendet werden soll. Derzeit ist dies immer auf `1` gesetzt, was die einzige Version ist, die die Spezifikation unterstützt. Bei Angabe der `privateToken`-Option ist diese Eigenschaft obligatorisch.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers im Falle einer Serverantwort mit einem [Redirect-Status](/de/docs/Web/HTTP/Reference/Status#redirection_messages). Einer der folgenden Werte:
    - `follow`
      - : Leitet Weiterleitungen automatisch weiter.
    - `error`
      - : Lehnt das Versprechen mit einem Netzwerkfehler ab, wenn ein Weiterleitungsstatus zurückgegeben wird.
    - `manual`
      - : Gibt eine Antwort mit fast allen ausgefilterten Feldern zurück, um einem Service Worker zu ermöglichen, die Antwort zu speichern und später erneut abzuspielen.

    Standardmäßig `follow`.

- `referrer` {{optional_inline}}
  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}}-Header der Anfrage verwendet werden soll. Einer der folgenden:
    - Eine Same-Origin relative oder absolute URL
      - : Setzt den `Referer`-Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite aufgelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Lässt den `Referer`-Header weg.
    - `about:client`
      - : Setzt den `Referer`-Header auf den Standardwert für den Kontext der Anfrage (beispielsweise die URL der Seite, die die Anfrage gestellt hat).

    Standardmäßig `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}}-Header setzt. Die Syntax und Semantik dieser Option ist genau wie die des {{httpheader("Referrer-Policy")}} Headers.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden `AbortController` abgebrochen werden.
- `targetAddressSpace` {{optional_inline}}
  - : Ein enumerierter Wert, der angibt, ob die Anfrage als Loopback-, lokale oder öffentliche Anfrage gedacht ist. Dies steuert, wie der Benutzeragent mit gemischtem Inhalt umgeht.
    Gültige Werte sind:
    - `local`
      - : Die Anfrage erfolgt an eine lokale Adresse, die nur im lokalen Netzwerk zugänglich ist; ihr Ziel wird in verschiedenen Netzwerken unterschiedlich sein. Zum Beispiel `192.168.0.1`.
    - `loopback`
      - : Die Anfrage erfolgt an eine Loopback-Adresse, die nur auf dem lokalen Gerät zugänglich ist; ihr Ziel wird auf jedem Gerät unterschiedlich sein. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
    - `public`
      - : Die Anfrage erfolgt an eine Adresse, die von überall im Internet zugänglich ist; ihr Ziel ist global auf allen Geräten gleich.

    Weitere Informationen finden Sie unter [Local Network Access](/de/docs/Web/Security/Defenses/Local_network_access).

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt in die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methodenaufruf:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), übergeben denselben Satz von Optionen in ihren Konstruktor und übergeben die Anfrage dann an `fetch()`:

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

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` in ihren Konstruktor übergeben. Dann übergeben wir die Anfrage an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
