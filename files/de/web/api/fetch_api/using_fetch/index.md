---
title: Verwenden der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: fe1d7fb9b67ce826c4a748ce00e7b35ac4a54c7f
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Erstellen von HTTP-Anfragen und Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, ist Fetch versprechenbasiert und in moderne Web-Features wie [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API können Sie eine Anfrage durch einen Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) stellen, der sowohl im [`window`](/de/docs/Web/API/Window) als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope) Kontext global verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request) Objekt oder einen String mit der URL, die abgerufen werden soll, sowie ein optionales Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt wird, das die Antwort des Servers darstellt. Sie können dann den Anfragestatus überprüfen und den Körper der Antwort in verschiedenen Formaten extrahieren, darunter Text und JSON, indem Sie die entsprechende Methode auf der Antwort aufrufen.

Hier ist eine minimalistische Funktion, die `fetch()` verwendet, um einige JSON-Daten von einem Server abzurufen:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
```

Wir deklarieren einen String, der die URL enthält, und rufen dann `fetch()` auf, indem wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` lehnt das Versprechen bei einigen Fehlern ab, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen einen Fehler, wenn er nicht OK ist.

Andernfalls rufen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}} ab, indem wir die [`json()`](/de/docs/Web/API/Response/json) Methode von `Response` aufrufen und einen ihrer Werte protokollieren. Beachten Sie, dass `json()`, genau wie `fetch()` selbst, asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Antwortinhalt.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann einer der folgenden Punkte sein:
   - ein String, der die URL enthält
   - ein Objekt, wie ein Beispiel von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "Stringifier")}} besitzt, der einen String mit der URL produziert
   - eine Instanz von [`Request`](/de/docs/Web/API/Request)
2. optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um über alle Optionen, die angegeben werden können, zu lesen, sehen Sie sich die Referenzseite von [`fetch()`](/de/docs/Web/API/Window/fetch) an.

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}} Anfrage aus, aber Sie können die `method` Option verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

Wenn die `mode` Option auf `no-cors` gesetzt ist, muss `method` einer der Werte `GET`, `POST` oder `HEAD` sein.

### Einen Body festlegen

Der Anfragkörper ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Body mit `GET`-Anfragen einfügen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfragen. Wenn Sie beispielsweise eine Datei auf den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragkörper einfügen.

Um einen Anfragkörper festzulegen, übergeben Sie diesen als `body` Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Sie können den Body als Instanz eines der folgenden Typen bereitstellen:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden durch ihre `toString()` Methode in Strings konvertiert. Beispielsweise können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt verwenden, um Formulardaten zu kodieren (siehe [Header einstellen](#header_einstellen) für weitere Informationen):

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // …
});
```

Beachten Sie, dass genau wie Antwortkörper Anfragkörper Ströme sind und dass das Erstellen der Anfrage den Stream liest, sodass Sie eine Anfrage nicht zweimal stellen können, wenn sie einen Körper enthält:

```js example-bad
const request = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const response1 = await fetch(request);
console.log(response1.status);

// Will throw: "Body has already been consumed."
const response2 = await fetch(request);
console.log(response2.status);
```

Stattdessen müssten Sie [einen Klon erstellen](/de/docs/Web/API/Request/clone) der Anfrage, bevor Sie sie senden:

```js
const request1 = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const request2 = request1.clone();

const response1 = await fetch(request1);
console.log(response1.status);

const response2 = await fetch(request2);
console.log(response2.status);
```

Weitere Informationen finden Sie unter [Verriegelte und gestörte Streams](#verriegelte_und_gestörte_streams).

### Header einstellen

Anfrageheader geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der {{httpheader("Content-Type")}} Header bei einer `POST`-Anfrage dem Server das Format des Anfragetextes mit.

Um Anfrageheader einzustellen, weisen Sie sie der `headers` Option zu.

Sie können hier ein Objekt-Literal übergeben, das `header-name: header-value` Eigenschaften enthält:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers) Objekt konstruieren, Header zu diesem Objekt mithilfe von [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers` Objekt der `headers` Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Verglichen mit der Verwendung einfacher Objekte bietet das `Headers` Objekt eine zusätzliche Eingabesäuberung. Beispielsweise normalisiert es Header-Namen auf Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen von Head-Werten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "Verbotene Anfrageheader")}} genannt. Wenn die [`mode`](/de/docs/Web/API/Request/mode) Option auf `no-cors` gesetzt wird, ist der Satz erlaubter Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können dennoch Daten an den Server senden, indem Sie sie als Abfrage-String an die URL anhängen. Dies ist eine gebräuchliche Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren und sie dann an die URL anzuhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Übergreifende Anfragen machen

Ob eine Anfrage übergreifend ausgeführt werden kann oder nicht, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) Option bestimmt. Dieser kann einen von drei Werten annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass bei einer übergreifenden Anfrage der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwendet wird. Das bedeutet:
  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}} Header antworten, sonst teilt der Browser die Antwort nicht mit dem Anrufer.
  - Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), um zu überprüfen, ob der Server CORS versteht und die Anfrage erlaubt, und die eigentliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die Preflight-Anfrage mit den entsprechenden CORS-Headern.

- Wenn `mode` auf `same-origin` gesetzt ist, sind übergreifende Anfragen vollständig untersagt.

- Wenn `mode` auf `no-cors` gesetzt ist, wird CORS für übergreifende Anfragen deaktiviert. Dies schränkt die Setzung der Header ein und beschränkt die Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass deren Header und Körper nicht für JavaScript verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung dafür liegt in bestimmten Anwendungsfällen bei Service Workern.

Weitere Details finden Sie in der Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

### Anmeldeinformationen einbeziehen

Im Kontext der Fetch API ist ein Anmeldeinformation ein zusätzliches Datenelement, das zusammen mit der Anfrage gesendet wird und das Der Server verwenden kann, um den Benutzer zu authentifizieren. Alle folgenden Elemente werden als Anmeldeinformationen betrachtet:

- HTTP-Cookies
- {{Glossary("TLS", "TLS")}} Client-Zertifikate
- Die {{httpheader("Authorization")}} und {{httpheader("Proxy-Authorization")}} Header.

Standardmäßig sind Anmeldeinformationen nur in Same-Origin Anfragen enthalten. Um dieses Verhalten anzupassen und auch zu steuern, ob der Browser Antwort-Header des Typs **`Set-Cookie`** respektiert, setzen Sie die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Anmeldeinformationen niemals in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (der Standard): Anmeldeinformationen nur für Same-Origin Anfragen senden und einbeziehen.
- `include`: Anmeldeinformationen immer einbeziehen, auch übergreifend.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht sitzübergreifend gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldeinformationen in übergreifenden Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen, daher muss der Server auch ihrer Einbeziehung durch den Einschluss des {{httpheader("Access-Control-Allow-Credentials")}} Headers in seiner Antwort zustimmen, selbst wenn `credentials` auf `include` gesetzt ist. Zusätzlich muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header angeben (d.h. `*` ist nicht erlaubt).

Das bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage übergreifend ist:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header setzen, oder der Browser gibt einen Netzwerkfehler an den Anrufer zurück. Wenn der Server die korrekten Header setzt, wird die Antwort, einschließlich Anmeldeinformationen, an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header setzen, oder der Browser gibt einen Netzwerkfehler an den Anrufer zurück. Wenn der Server die korrekten Header setzt, wird der Browser mit der echten Anfrage fortfahren, einschließlich Anmeldeinformationen, und wird die echte Antwort, einschließlich Anmeldeinformationen, an den Anrufer liefern.

### Erstellen eines `Request` Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass anstelle der Übergabe von Optionen an `fetch()`, Sie dieselben Optionen an den `Request()` Konstruktor übergeben können und dann dieses Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine POST-Anfrage durch übergabe von Optionen an `fetch()` mit Code wie diesem machen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten dies jedoch so umschreiben, dass wir die gleichen Argumente an den `Request()` Konstruktor übergeben:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myRequest = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});

const response = await fetch(myRequest);
```

Dies bedeutet auch, dass Sie eine Anfrage aus einer anderen Anfrage erstellen können, und einige ihrer Eigenschaften mit dem zweiten Argument ändern können:

```js
async function post(request) {
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const request1 = new Request("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example1" }),
});

const request2 = new Request(request1, {
  body: JSON.stringify({ username: "example2" }),
});

post(request1);
post(request2);
```

## Eine Anfrage abbrechen

Um eine abbrechbare Anfrage zu erstellen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen Sie dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal` Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des Controllers auf. Der `fetch()`-Aufruf wird das Versprechen mit einer `AbortError` Ausnahme ablehnen.

```js
const controller = new AbortController();

const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async () => {
  try {
    console.log("Starting fetch");
    const response = await fetch("https://example.org/get", {
      signal: controller.signal,
    });
    console.log(`Response: ${response.status}`);
  } catch (e) {
    console.error(`Error: ${e}`);
  }
});

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {
  controller.abort();
  console.log("Canceled fetch");
});
```

Wenn die Anfrage nach der Erfüllung des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, führt der Versuch, den Antwortkörper zu lesen, zu einer `AbortError` Ausnahme.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // The next line will throw `AbortError`
  const text = await response.text();
  console.log(text);
}
```

## Die Antwort verarbeiten

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und potenziell bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Versprechen mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt.

### Antwortstatus prüfen

Das von `fetch()` zurückgegebene Versprechen wird bei einigen Fehlern wie einem Netzwerkfehler oder einem falschen Schema abgelehnt. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, sodass wir den Status prüfen müssen, bevor wir den Antwortkörper lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status) Eigenschaft gibt uns den numerischen Statuscode, und die [`Response.ok`](/de/docs/Web/API/Response/ok) Eigenschaft gibt `true` zurück, wenn der Status im [200 Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein häufiges Muster ist es, den Wert von `ok` zu prüfen und eine Ausnahme zu werfen, wenn er `false` ist:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // …
  } catch (error) {
    console.error(error.message);
  }
}
```

### Antworttyp prüfen

Antworten haben eine [`type`](/de/docs/Web/API/Response/type) Eigenschaft, die einen der folgenden Werte darstellen kann:

- `basic`: Die Anfrage war eine Same-Origin Anfrage.
- `cors`: Die Anfrage war eine übergreifende CORS-Anfrage.
- `opaque`: Die Anfrage war eine übergreifende einfache Anfrage, die mit dem `no-cors` Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect` Option auf `manual` gesetzt, und der Server hat einen [Weiterleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort, wie folgt:

- Basisantworten schließen Antwort-Header aus der Liste der {{Glossary("Forbidden_response_header_name", "Verbotenen Antwort-Headernamen")}} aus.

- CORS-Antworten beinhalten nur Antwort-Header aus der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}.

- Undurchsichtige Antworten und undurchsichtige Weiterleitungsantworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Körper.

### Header prüfen

Genau wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers) Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers) Objekt ist, und dieses enthält alle Antwort-Header, die für Skripte freigegeben sind, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp vorgenommen werden.

Ein häufiger Anwendungsfall dafür ist es, den Inhaltstyp zu überprüfen, bevor der Körper gelesen wird:

```js
async function fetchJSON(request) {
  try {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    // Otherwise, we can read the body as JSON
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Den Antwortkörper lesen

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Inhalt des Körpers in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Körperinhalt erfüllt wird.

In diesem Beispiel rufen wir ein Bild ab und lesen es als [`Blob`](/de/docs/Web/API/Blob), das wir dann verwenden können, um eine Objekt-URL zu erstellen:

```js
const image = document.querySelector("img");

const url = "flowers.jpg";

async function setImage() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  } catch (e) {
    console.error(e);
  }
}
```

Die Methode wird eine Ausnahme auslösen, wenn der Antwortkörper nicht im entsprechenden Format ist: Wenn Sie zum Beispiel `json()` auf einer Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Arbeitsspeichereffizienz, da der Browser nicht den gesamten Antwortinhalt im Arbeitsspeicher puffern muss, bevor der Anrufer ihn mit einer Methode wie `json()` abruft.

Dies bedeutet auch, dass der Anrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Betrachten Sie zum Beispiel eine `GET`-Anfrage, die eine große Textdatei abruft und auf eine gewisse Weise verarbeitet oder dem Benutzer anzeigt:

```js
const url = "https://www.example.org/a-large-file.txt";

async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.error(e);
  }
}
```

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir etwas davon verarbeiten können.

Wenn wir stattdessen die Antwort streamen, können wir Teile des Körpers verarbeiten, während sie vom Netzwerk empfangen werden:

```js
const url = "https://www.example.org/a-large-file.txt";

async function fetchTextAsStream(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const stream = response.body.pipeThrough(new TextDecoderStream());
    for await (const value of stream) {
      console.log(value);
    }
  } catch (e) {
    console.error(e);
  }
}
```

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jedes Stück, sobald es ankommt.

Beachten Sie, dass wenn Sie direkt auf den Körper zugreifen, wie in diesem Fall, erhalten Sie die rohen Bytes der Antwort und müssen sie selbst transformieren. In diesem Fall verwenden wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-codierten Körperdaten als Text decodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel beziehen wir eine Textressource und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Zur Vereinfachung gehen wir davon aus, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

```js
async function* makeTextFileLineIterator(fileURL) {
  const response = await fetch(fileURL);
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  let { value: chunk = "", done: readerDone } = await reader.read();

  const newline = /\r?\n/g;
  let startIndex = 0;

  while (true) {
    const result = newline.exec(chunk);
    if (!result) {
      if (readerDone) break;
      const remainder = chunk.slice(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk || "");
      startIndex = newline.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = newline.lastIndex;
  }

  if (startIndex < chunk.length) {
    // Last line didn't end in a newline char
    yield chunk.substring(startIndex);
  }
}

async function run(urlOfFile) {
  for await (const line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

function processLine(line) {
  console.log(line);
}

run("https://www.example.org/a-large-file.txt");
```

### Verriegelte und gestörte Streams

Die Konsequenzen von Anfrage- und Antwortkörpern als Streams sind, dass:

- Wenn ein Leser einem Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _verriegelt_, und nichts anderes kann den Stream lesen.
- Wenn irgendein Inhalt vom Stream gelesen wurde, ist der Stream _gestört_, und nichts anderes kann vom Stream lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-) Körper mehr als einmal zu lesen:

```js example-bad
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result1 = await response.json();
    const result2 = await response.json(); // will throw
  } catch (error) {
    console.error(error.message);
  }
}
```

Wenn Sie den Körper mehr als einmal lesen müssen, müssen Sie [`Response.clone()`](/de/docs/Web/API/Response/clone) aufrufen, bevor Sie den Körper lesen:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response1 = await fetch(url);
    if (!response1.ok) {
      throw new Error(`Response status: ${response1.status}`);
    }

    const response2 = response1.clone();

    const result1 = await response1.json();
    const result2 = await response2.json();
  } catch (error) {
    console.error(error.message);
  }
}
```

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Cache mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, sie aber auch zwischenspeichern. Daher klont er die Antwort, gibt das Original zurück und speichert den Klon:

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
- [Fetch-Beispiele auf GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
