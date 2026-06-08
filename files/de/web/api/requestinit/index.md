---
title: RequestInit
slug: Web/API/RequestInit
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{APIRef("Fetch API")}}

Das **`RequestInit`** Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Menge von Optionen dar, die verwendet werden können, um eine [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zu konfigurieren.

Sie können ein `RequestInit`-Objekt in den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion übergeben.

Sie können auch ein `Request` mit einem `RequestInit` konstruieren und das `Request` zusammen mit einem weiteren `RequestInit` an einen `fetch()`-Aufruf übergeben. Wenn Sie dies tun und dieselbe Option an beiden Stellen festgelegt ist, wird der Wert verwendet, der direkt an `fetch()` übergeben wurde.

## Instanz-Eigenschaften

- `attributionReporting` {{optional_inline}} {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine Javascript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. `attributionReporting` ist ein Objekt mit den folgenden Eigenschaften:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attribution Trigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

    Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

- `body` {{optional_inline}}
  - : Der Anfragetext enthält Inhalte, die an den Server gesendet werden sollen, zum Beispiel in einer {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfrage. Er wird als Instanz eines der folgenden Typen angegeben:
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
  - : Ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer in einem {{httpheader("Sec-Browsing-Topics")}} Header mit der zugehörigen Anfrage gesendet werden sollen.

    Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `cache` {{optional_inline}}
  - : Der [Cache-Modus](/de/docs/Web/API/Request/cache), den Sie für die Anfrage verwenden möchten. Dies kann einer der folgenden Werte sein:
    - `default`
      - : Der Browser sucht in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt und diese [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird sie aus dem Cache zurückgegeben.
        - Wenn es eine Übereinstimmung gibt, die jedoch [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server stellen. Wenn der Server anzeigt, dass sich die Ressource nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `no-store`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzuschauen, _und wird_ den Cache nicht mit der heruntergeladenen Ressource aktualisieren.
    - `reload`
      - : Der Browser ruft die Ressource vom Remote-Server ab, ohne zuerst im Cache nachzuschauen, _aktualisiert anschließend_ jedoch den Cache mit der heruntergeladenen Ressource.
    - `no-cache`
      - : Der Browser schaut in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird der Browser eine [bedingte Anfrage](/de/docs/Web/HTTP/Guides/Conditional_requests) an den Remote-Server stellen. Wenn der Server anzeigt, dass die Ressource sich nicht geändert hat, wird sie aus dem Cache zurückgegeben. Andernfalls wird die Ressource vom Server heruntergeladen und der Cache wird aktualisiert.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `force-cache`
      - : Der Browser schaut in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht.
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird der Browser eine normale Anfrage stellen und den Cache mit der heruntergeladenen Ressource aktualisieren.

    - `only-if-cached`
      - : Der Browser schaut in seinem HTTP-Cache nach einer Antwort, die der Anfrage entspricht. {{experimental_inline}}
        - Wenn es eine Übereinstimmung gibt, _frisch oder veraltet_, wird sie aus dem Cache zurückgegeben.
        - Wenn es keine Übereinstimmung gibt, wird ein Netzwerkfehler zurückgegeben.

    Der Modus `"only-if-cached"` kann nur verwendet werden, wenn der `mode` der Anfrage `"same-origin"` ist. Zwischengespeicherte Weiterleitungen werden befolgt, wenn die `redirect`-Eigenschaft der Anfrage auf `"follow"` gesetzt ist und die Weiterleitungen den Modus `"same-origin"` nicht verletzen.

- `credentials` {{optional_inline}}
  - : Bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`** Header in der Antwort berücksichtigt werden. Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Diese Option kann einen der folgenden Werte haben:
    - `omit`
      - : Niemals Anmeldeinformationen in der Anfrage senden oder Anmeldeinformationen in der Antwort einbeziehen.
    - `same-origin`
      - : Anmeldeinformationen nur für gleich-originierte Anfragen senden und einbeziehen.
    - `include`
      - : Immer Anmeldeinformationen einbeziehen, auch für Cross-Origin-Anfragen.

    Das Einbeziehen von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}}-Angriffe verwundbar machen, daher muss der Server, auch wenn `credentials` auf `include` gesetzt ist, der Einbeziehung durch Einfügen des {{httpheader("Access-Control-Allow-Credentials")}} in seine Antwort zustimmen. Darüber hinaus muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header angeben (das heißt, `*` ist nicht erlaubt).

    Siehe [Einbeziehen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

    Standardwert ist `same-origin`.

- `duplex` {{optional_inline}} {{experimental_inline}}
  - : Kontrolliert das Duplex-Verhalten der Anfrage. Wenn dies vorhanden ist, muss es den Wert `half` haben, was bedeutet, dass der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.

    Diese Option muss vorhanden sein, wenn [`body`](#body) ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist.

- `headers` {{optional_inline}}
  - : Alle Header, die Sie zu Ihrer Anfrage hinzufügen möchten, enthalten
    in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder einem Objekt-Literal, dessen Schlüssel die Namen der Header und deren Werte die Header-Werte sind.

    Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_request_header", "verbotene Anforderungs-Header")}} bezeichnet.

    Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} setzen.

    Siehe [Header setzen](/de/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) für weitere Details.

- `integrity` {{optional_inline}}
  - : Enthält den [Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
    Wert der Anfrage.

    Dies wird überprüft, wenn die Ressource abgerufen wird, genauso wie es der Fall wäre, wenn das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut auf einem {{htmlelement("script")}} Element gesetzt ist. Der Browser berechnet den {{Glossary("hash_function", "Hash")}} der abgerufenen Ressource mit dem angegebenen Algorithmus und wenn das Ergebnis nicht mit dem angegebenen Wert übereinstimmt, lehnt der Browser die Fetch-Anfrage mit einem Netzfehler ab.

    Das Format dieser Option ist `<hash-algo>-<hash-source>` wobei:
    - `<hash-algo>` einer der folgenden Werte ist: `sha256`, `sha384` oder `sha512`
    - `<hash-source>` ist die {{Glossary("base64", "Base64-Kodierung")}} des Ergebnisses des Hashings der Ressource mit dem angegebenen Hash-Algorithmus.

    Standardwert ist ein leerer String.

- `keepalive` {{optional_inline}}
  - : Ein Boolean.
    Wenn auf `true` gesetzt, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
    Dies ermöglicht eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage, um Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

    Dies hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck.
    Zum Beispiel können Sie HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anforderungseigenschaften anpassen und die Serverantwort über die Erfüllung des Fetch {{jsxref("Promise")}} zugreifen.
    Es ist auch in [Service-Worker](/de/docs/Web/API/Service_Worker_API) verfügbar.

    Die Body-Größe für `keepalive` Anfragen ist auf 64 Kibibyte begrenzt.

    Standardwert ist `false`.

- `method` {{optional_inline}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods).

    Standardwert ist {{httpmethod("GET")}}.

- `mode` {{optional_inline}}
  - : Legt das Cross-Origin-Verhalten für die Anfrage fest. Einer der folgenden Werte:
    - `same-origin`
      - : Unterbindet Cross-Origin-Anfragen. Wenn eine `same-origin` Anfrage an einen anderen Ursprung gesendet wird, ist das Ergebnis ein Netzfehler.

    - `cors`
      - : Wenn die Anfrage Cross-Origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwendet. Nur {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} werden in der Antwort freigelegt.

    - `no-cors`
      - : CORS ist für Cross-Origin-Anfragen deaktiviert. Diese Option bringt die folgenden Einschränkungen mit sich:
        - Die Methode darf nur eine von `HEAD`, `GET` oder `POST` sein.
        - Die Header dürfen nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} sein, mit der zusätzlichen Einschränkung, dass auch der {{httpheader("Range")}} Header nicht erlaubt ist. Dies gilt auch für alle vom Service-Worker hinzugefügten Header.
        - Die Antwort ist _opaqu_, was bedeutet, dass ihre Header und ihr Body für JavaScript nicht verfügbar sind und ihr [Statuscode](/de/docs/Web/API/Response/status) immer `0` ist.

        Die Hauptanwendung für `no-cors` ist ein Service-Worker: Obwohl die Antwort auf eine `no-cors` Anfrage von JavaScript nicht gelesen werden kann, kann sie von einem Service-Worker zwischengespeichert und dann als Antwort auf eine abgefangene Fetch-Anfrage verwendet werden. Beachten Sie, dass in dieser Situation nicht bekannt ist, ob die Anfrage erfolgreich war oder nicht, daher sollten Sie eine Caching-Strategie annehmen, die die Aktualisierung der zwischengespeicherten Antwort aus dem Netzwerk ermöglicht (wie [Cache first mit Cache-Refresh](/de/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Wird nur von HTML-Navigation verwendet. Eine `navigate` Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

    Siehe [Cross-Origin-Anfragen durchführen](/de/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) für weitere Details.

    Standardwert ist `cors`.

- `priority` {{optional_inline}}
  - : Gibt die Priorität der Fetch-Anfrage im Verhältnis zu anderen Anfragen desselben Typs an. Muss einer der folgenden sein:
    - `high`
      - : Eine Fetch-Anfrage mit hoher Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `low`
      - : Eine Fetch-Anfrage mit niedriger Priorität im Verhältnis zu anderen Anfragen desselben Typs.
    - `auto`
      - : Keine Benutzerpräferenz für die Fetch-Priorität.
        Es wird verwendet, wenn kein Wert festgelegt ist oder ein ungültiger Wert festgelegt ist.

    Standardwert ist `auto`.

- `privateToken` {{optional_inline}}
  - : Ein Objekt, das Optionen für den Start einer [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using) Operation enthält. Mögliche Eigenschaften umfassen:
    - `issuers`
      - : Ein Array von Strings, das die URLs von Herausgebern enthält, für die Sie Einlösungsberichte weiterleiten möchten. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `send-redemption-record` gesetzt, in diesem Fall muss das `issuers` Array enthalten sein.
    - `operation`
      - : Ein String, der den Typ der Token-Operation angibt, die Sie starten möchten. Bei Angabe der `privateToken` Option ist diese Eigenschaft obligatorisch. Mögliche Werte sind:
        - `token-request`
          - : Startet eine [Token-Anfrage](/de/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) Operation.
        - `token-redemption`
          - : Startet eine [Token-Einlösung](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) Operation.
        - `send-redemption-record`
          - : Startet eine [Sendeeinlösungsbericht](/de/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) Operation.
    - `refreshPolicy`
      - : Ein enumerierter Wert, der das erwartete Verhalten angibt, wenn ein nicht abgelaufener Einlösungsbericht für den aktuellen Benutzer und die aktuelle Website zuvor festgelegt wurde. Diese Einstellung wird ignoriert, es sei denn, `operation` ist auf `token-redemption` gesetzt. Mögliche Werte sind:
        - `none`
          - : Der zuvor festgelegte Einlösungsbericht sollte verwendet und kein neuer ausgestellt werden. Dies ist der Standardwert.
        - `refresh`
          - : Ein neuer Einlösungsbericht wird immer ausgestellt.
    - `version`
      - : Eine Zahl, die die Version des kryptografischen Protokolls angibt, das Sie bei der Erstellung eines Tokens verwenden möchten. Derzeit ist dies immer auf `1` gesetzt, was die einzige Version ist, die die Spezifikation unterstützt. Bei Angabe der `privateToken` Option ist diese Eigenschaft erforderlich.

- `redirect` {{optional_inline}}
  - : Bestimmt das Verhalten des Browsers, falls der Server mit einem [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) antwortet. Einer der folgenden Werte:
    - `follow`
      - : Umleitungen automatisch folgen.
    - `error`
      - : Den Promise mit einem Netzwerkfehler ablehnen, wenn ein Umleitungsstatus zurückgegeben wird.
    - `manual`
      - : Eine Antwort mit fast allen gefilterten Feldern zurückgeben, um einem Service-Worker zu ermöglichen, die Antwort zu speichern und später wiederzugeben.

    Standardwert ist `follow`.

- `referrer` {{optional_inline}}
  - : Ein String, der den Wert angibt, der für den {{httpheader("Referer")}} Header der Anfrage verwendet werden soll. Einer der folgenden:
    - Eine gleiche Origin relative oder absolute URL
      - : Setzen Sie den `Referer` Header auf den angegebenen Wert. Relative URLs werden relativ zur URL der Seite gelöst, die die Anfrage gestellt hat.
    - Ein leerer String
      - : Den `Referer` Header auslassen.
    - `about:client`
      - : Setzen Sie den `Referer` Header auf den Standardwert für den Kontext der Anfrage (zum Beispiel die URL der Seite, die die Anfrage gestellt hat).

    Standardwert ist `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : Ein String, der eine Richtlinie für den {{httpheader("Referer")}} Header festlegt. Die Syntax und Semantik dieser Option sind genau dieselben wie für den {{httpheader("Referrer-Policy")}} Header.
- `signal` {{optional_inline}}
  - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn diese Option gesetzt ist, kann die Anfrage abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) am entsprechenden `AbortController` aufgerufen wird.
- `targetAddressSpace` {{optional_inline}}
  - : Ein enumerierter Wert, der angibt, ob die Anfrage eine Loopback-, lokale oder öffentliche Anfrage sein soll. Dies steuert, wie der Benutzeragent mit gemischten Inhalten umgeht.
    Gültige Werte sind:
    - `local`
      - : Die Anfrage ist an eine lokale Adresse gerichtet, die nur im lokalen Netzwerk zugänglich ist; ihr Ziel wird in verschiedenen Netzwerken unterschiedlich sein. Zum Beispiel, `192.168.0.1`.
    - `loopback`
      - : Die Anfrage ist an eine Loopback-Adresse gerichtet, die nur auf dem lokalen Gerät zugänglich ist; ihr Ziel wird auf jedem Gerät unterschiedlich sein. Zum Beispiel, `127.0.0.1`, das allgemein als `localhost` bekannt ist.
    - `public`
      - : Die Anfrage ist an eine Adresse gerichtet, die von überall im Internet erreichbar ist; ihr Ziel ist auf allen Geräten global gleich. Zum Beispiel, `104.18.27.120` (die IP-Adresse von `example.com`)

    Siehe [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access) für weitere Informationen.

## Beispiele

### Optionen in `fetch()` übergeben

In diesem Beispiel übergeben wir die Optionen `method`, `body` und `headers` direkt an den Aufruf der [`fetch()`](/de/docs/Web/API/Window/fetch) Methode:

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

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request), indem wir denselben Satz von Optionen an seinen Konstruktor übergeben, und übergeben dann das Request an `fetch()`:

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

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request), indem wir die Optionen `method`, `headers` und `body` an seinen Konstruktor übergeben. Wir übergeben dann das Request an `fetch()` zusammen mit den Optionen `body` und `referrer`:

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
- [HTTP Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
