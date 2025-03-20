---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 8923afaabb668f4b7e95bc6cc159f24c2d61fc10
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle, um HTTP-Anfragen zu stellen und die Antworten zu verarbeiten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, basiert Fetch auf Promises und ist mit modernen Web-Features wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API senden Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen. Diese Funktion ist sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext global verfügbar. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String mit der URL, die abgerufen werden soll, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, welches die Antwort des Servers darstellt. Sie können dann den Status der Anfrage überprüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode auf der Antwort aufrufen.

Hier ist eine minimale Funktion, die `fetch()` verwendet, um einige JSON-Daten von einem Server abzurufen:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
```

Wir deklarieren einen String, der die URL enthält, und rufen dann `fetch()` auf, wobei wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` wird das Promise bei einigen Fehlern ablehnen, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, falls er nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}}, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass genau wie `fetch()` selbst auch `json()` asynchron ist, ebenso wie alle anderen Methoden, die Zugriff auf den Inhalt des Antwortkörpers gewähren.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. Eine Definition der Ressource, die abgerufen werden soll. Dies kann eine der folgenden Möglichkeiten sein:
   - Ein String, der die URL enthält
   - Ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String mit der URL erzeugt
   - Eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. Optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt betrachten wir einige der am häufigsten verwendeten Optionen. Um alle Optionen zu lesen, die angegeben werden können, siehe die Referenzseite [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` eine von `GET`, `POST` oder `HEAD` sein.

### Einen Hauptteil festlegen

Der Anfragekörper ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einbeziehen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie zum Beispiel eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragekörper einfügen.

Um einen Anfragekörper festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Body als Instanz eines der folgenden Typen liefern:

- Ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden mit ihrer `toString()`-Methode in Strings umgewandelt. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Header festlegen](#kopfzeilen_festlegen) für weitere Informationen):

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // ...
});
```

Beachten Sie, dass genau wie Antwortkörper auch Anfragkörper Streams sind, und das Stellen der Anfrage liest den Stream, sodass wenn eine Anfrage einen Körper enthält, Sie sie nicht zweimal senden können:

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

Stattdessen müssten Sie vor dem Senden [eine Kopie erstellen](/de/docs/Web/API/Request/clone) der Anfrage:

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

Siehe [Gesperrte und gestörte Streams](#gesperrte_und_gestörte_streams) für weitere Informationen.

### Kopfzeilen festlegen

Anfrage-Header geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der {{httpheader("Content-Type")}}-Header bei einer `POST`-Anfrage dem Server das Format des Anfragekörpers mit.

Um Anfrage-Header festzulegen, weisen Sie sie der `headers`-Option zu.

Sie können hier ein Objektliteral mit `header-name: header-value`-Eigenschaften übergeben:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, ihm Header mit [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Im Vergleich zur Verwendung einfacher Objekte bietet das `Headers`-Objekt einige zusätzliche Eingabesäuberungen. Zum Beispiel normalisiert es Headernamen in Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen aus Headerwerten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "verbotene Anfrage-Header")}} genannt. Wenn die Option [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt ist, ist die Menge der zulässigen Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können trotzdem Daten an den Server senden, indem Sie diese als Abfragezeichenfolge an die URL anhängen. Dies ist eine übliche Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und sie dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen stellen

Ob eine Anfrage Cross-Origin gestellt werden kann oder nicht, wird durch den Wert der Option [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) bestimmt. Diese kann einen der folgenden drei Werte annehmen: `cors`, `same-origin` oder `no-cors`.

- Bei Fetch-Anfragen ist der Standardwert von `mode` `cors`, d.h. wenn die Anfrage Cross-Origin ist, wird der Mechanismus [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) verwendet. Das bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird sie immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, sonst wird der Browser die Antwort nicht mit dem Anrufer teilen.
  - Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), um zu überprüfen, dass der Server CORS versteht und die Anfrage erlaubt, und die eigentliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die Preflight-Anfrage mit den entsprechenden CORS-Headern.

- Wenn `mode` auf `same-origin` eingestellt ist, werden Cross-Origin-Anfragen vollständig verboten.

- Wenn `mode` auf `no-cors` gesetzt ist, werden CORS für Cross-Origin-Anfragen deaktiviert. Dies schränkt die Header ein, die festgelegt werden dürfen, und beschränkt die Methoden auf `GET`, `HEAD` und `POST`. Die Antwort ist _undurchsichtig_, das bedeutet, dass ihre Header und ihr Körper nicht für JavaScript verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung davon ist für bestimmte Use Cases von Service-Workern.

Siehe die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Anmeldeinformationen einbinden

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser auf **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die Option `credentials`, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder Anmeldeinformationen in der Antwort einbeziehen.
- `same-origin` (der Standard): Nur Anmeldeinformationen für gleichherkunftige Anfragen senden und einbeziehen.
- `include`: Immer Anmeldeinformationen einbeziehen, auch bei Cross-Origin-Anfragen.

Beachten Sie, dass wenn das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) eines Cookies auf `Strict` oder `Lax` gesetzt ist, dann das Cookie nicht Cross-Site gesendet wird, auch wenn `credentials` auf `include` gesetzt ist.

Das Einbinden von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen, daher muss auch, wenn `credentials` auf `include` gesetzt ist, der Server ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einbezieht. Zusätzlich muss der Server in dieser Situation explizit den Ursprungs-Client im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader spezifizieren (das heißt, `*` ist nicht erlaubt).

Das bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}}-Header setzen oder der Browser wird dem Anrufer einen Netzwerkfehler zurückgeben. Setzt der Server die richtigen Header, wird die Antwort einschließlich Anmeldeinformationen an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Anmeldeinformationen, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}}-Header setzen, oder der Browser wird dem Anrufer einen Netzwerkfehler zurückgeben. Setzt der Server die richtigen Header, wird der Browser mit der eigentlichen Anfrage fortfahren, einschließlich Anmeldeinformationen, und die eigentliche Antwort, einschließlich Anmeldeinformationen, an den Anrufer liefern.

### Ein `Request`-Objekt erstellen

Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass Sie anstatt Optionen an `fetch()` zu übergeben, dieselben Optionen an den Konstruktor `Request()` übergeben können und dann dieses Objekt an `fetch()` übergeben.

Beispielsweise können wir eine POST-Anfrage stellen, indem wir Optionen an `fetch()` übergeben, wie in folgendem Code:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten dies jedoch umschreiben, indem wir die gleichen Argumente an den Konstruktor `Request()` übergeben:

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

Das bedeutet auch, dass Sie eine Anfrage aus einer anderen Anfrage erstellen können, während Sie einige ihrer Eigenschaften mit dem zweiten Argument ändern:

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

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen Sie dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal`-Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der `fetch()`-Aufruf wird das Promise mit einer `AbortError`-Ausnahme zurückweisen.

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

Wenn die Anfrage nach dem Erfüllen des `fetch()`-Aufrufs, aber vor dem Lesen des Antwortkörpers abgebrochen wird, wird das Lesen des Antwortkörpers mit einer `AbortError`-Ausnahme zurückgewiesen.

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

## Die Antwort bearbeiten

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (möglicherweise bevor der Antwortkörper selbst erhalten wurde), wird das Promise, das durch `fetch()` zurückgegeben wird, mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Status der Antwort überprüfen

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern abgelehnt, wie z.B. einem Netzwerkfehler oder einem ungültigen Schema. Wenn jedoch der Server mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, sodass wir den Status überprüfen müssen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Statuscode, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein häufiges Muster ist, den Wert von `ok` zu überprüfen und eine Ausnahme zu werfen, wenn er `false` ist:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // ...
  } catch (error) {
    console.error(error.message);
  }
}
```

### Antworttyp überprüfen

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einer der folgenden sein kann:

- `basic`: Die Anfrage war eine gleichherkunftige Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-Einfachanfrage, die im `no-cors`-Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwort-Header von der Liste der {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namen")}} aus.

- CORS-Antworten enthalten nur Antwort-Header aus der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Header")}}.

- Undurchsichtige Antworten und undurchsichtige Umleitungsantworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Körper.

### Header überprüfen

Genau wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwort-Header, die Skripten ausgesetzt sind, unter Berücksichtigung der Ausschlüsse, die auf der Grundlage des Antworttyps gemacht werden.

Ein häufiger Anwendungsfall dafür ist, den Inhaltstyp zu überprüfen, bevor versucht wird, den Körper zu lesen:

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

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Körperinhalt in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, welches mit dem Körperinhalt erfüllt wird.

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: Wenn Sie zum Beispiel `json()` auf eine Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, weil der Browser den gesamten Antwortkörper nicht im Speicher puffern muss, bevor der Anrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Anrufer den Inhalt inkrementell verarbeiten kann, wenn er empfangen wird.

Zum Beispiel beachten Sie eine `GET`-Anfrage, die eine große Textdatei abruft und sie in irgendeiner Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir einen Teil davon verarbeiten können.

Wenn wir stattdessen die Antwort streamen, können wir Teile des Körpers verarbeiten, während sie aus dem Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream, verarbeitend jeden Chunk, sobald er ankommt.

Beachten Sie, dass wenn Sie den Körper direkt wie diesen zugreifen, Sie die rohen Bytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-codierten Körperdaten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel rufen wir eine Textressource ab und verarbeiten sie zeilenweise, indem wir mit einem regulären Ausdruck nach Zeilenenden suchen. Der Einfachheit halber gehen wir davon aus, dass der Text UTF-8 ist und behandeln keine Fetch-Fehler:

```js
async function* makeTextFileLineIterator(fileURL) {
  const response = await fetch(fileURL);
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk || "";

  const newline = /\r?\n/gm;
  let startIndex = 0;

  while (true) {
    const result = newline.exec(chunk);
    if (!result) {
      if (readerDone) break;
      const remainder = chunk.substr(startIndex);
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

### Gesperrte und gestörte Streams

Die Konsequenzen von Anfrage- und Antwortkörpern, die Streams sind, sind:

- Wenn ein Leser an einen Stream mittels `ReadableStream.getReader()` gebunden wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- Wenn irgendetwas Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann aus dem Stream lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-)körper mehr als einmal zu lesen:

```js example-bad
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json1 = await response.json();
    const json2 = await response.json(); // will throw
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

    const json1 = await response1.json();
    const json2 = await response2.json();
  } catch (error) {
    console.error(error.message);
  }
}
```

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Caches mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort cachen. Also klont er die Antwort, gibt das Original zurück und cached die Kopie:

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
