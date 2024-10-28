---
title: Verwenden der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 0129176c2bb0e16af7577067191f0889326fad73
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Erstellen von HTTP-Anfragen und zur Verarbeitung der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, basiert Fetch auf Promises und ist mit Features des modernen Webs integriert, wie z.B. [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Mit der Fetch API führen Sie eine Anfrage durch, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, eine globale Funktion, die sowohl im {{domxref("Window", "window", "", "", "nocode")}}-Kontext als auch im {{domxref("WorkerGlobalScope", "worker", "", "", "nocode")}}-Kontext verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String, der die zu ladende URL enthält, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt gefüllt wird, das die Antwort des Servers darstellt. Sie können dann den Status der Anfrage überprüfen und den Inhalt der Antwort in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode an der Antwort aufrufen.

Hier ist eine minimalistische Funktion, die `fetch()` verwendet, um einige JSON-Daten von einem Server abzurufen:

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

Wir deklarieren einen String, der die URL enthält, und rufen dann `fetch()` auf, indem wir die URL ohne zusätzliche Optionen übergeben.

Die `fetch()`-Funktion schlägt bei einigen Fehlern das Promise fehl, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet. Daher prüfen wir auch den Antwortstatus und werfen einen Fehler, wenn er nicht OK ist.

Andernfalls rufen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}} ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Methode des `Response`-Objekts aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass `json()` wie `fetch()` selbst asynchron ist, wie alle anderen Methoden, um auf den Inhalt des Antwortkörpers zuzugreifen.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die abgerufen werden soll. Dies kann eines der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), die einen {{Glossary("stringifier", "Stringifier")}} enthält, der einen String mit der URL produziert
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional ein Objekt, das Optionen zur Konfiguration der Anfrage enthält.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um mehr über alle Optionen zu erfahren, die angegeben werden können, lesen Sie die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig stellt `fetch()` eine {{httpmethod("GET")}}-Anfrage, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, dann muss `method` eine von `GET`, `POST` oder `HEAD` sein.

### Einen Körper festlegen

Der Anfragekörper ist die Nutzlast der Anfrage: es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einfügen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie z.B. {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei auf den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragekörper einfügen.

Um einen Anfragekörper festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Körper als Instanz eines der folgenden Typen übergeben:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Beachten Sie, dass Anfragekörper wie Antwortkörper Streams sind, und das Erstellen der Anfrage den Stream liest. Daher können Sie, wenn eine Anfrage einen Körper enthält, sie nicht zweimal senden:

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

Weitere Informationen finden Sie unter [Gesperrte und gestörte Streams](#gesperrte_und_gestörte_streams).

### Header festlegen

Anfrageheader geben dem Server Informationen über die Anfrage: beispielsweise informiert der Header {{httpheader("Content-Type")}} den Server über das Format des Anfragekörpers.

Um Anfrageheader festzulegen, weisen Sie sie der Option `headers` zu.

Sie können hier ein Objektliteral mit `header-name: header-value`-Eigenschaften übergeben:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, dem Objekt mit [`Headers.append()`](/de/docs/Web/API/Headers/append) Header hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Viele Header werden automatisch vom Browser gesetzt und können nicht per Skript gesetzt werden: diese werden {{Glossary("Forbidden_header_name", "Verbotene Header-Namen")}} genannt. Wenn die [`mode`](/de/docs/Web/API/Request/mode)-Option auf `no-cors` gesetzt ist, ist der Satz der erlaubten Header weiter eingeschränkt.

### POST-Anfragen stellen

Wir können die Optionen `method`, `body` und `headers` kombinieren, um eine POST-Anfrage zu stellen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

### Cross-Origin-Anfragen stellen

Ob eine Anfrage cross-origin gestellt werden kann oder nicht, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option bestimmt. Diese kann einen von drei Werten haben: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass, wenn die Anfrage cross-origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet. Das bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, andernfalls wird der Browser die Antwort nicht mit dem Aufrufer teilen.
  - Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorab gesendete Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) senden, um zu überprüfen, dass der Server CORS versteht und die Anfrage erlaubt. Die tatsächliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorab gesendete Anfrage mit den entsprechenden CORS-Headern.

- Der Modus `same-origin` verbietet komplett cross-origin-Anfragen.

- Der Modus `no-cors` deaktiviert CORS für cross-origin-Anfragen. Dies beschränkt die Header, die gesetzt werden können, und beschränkt Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper in JavaScript nicht verfügbar sind. Die meisten Webseiten sollten `no-cors` nicht verwenden: die Hauptanwendung ist für bestimmte Anwendungsfälle mit Service-Workern.

Weitere Details finden Sie in der Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

### Anmeldedaten einbeziehen

Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsköpfe mit einem Benutzernamen und Passwort.

Um zu kontrollieren, ob der Browser Anmeldedaten sendet oder nicht, sowie ob der Browser **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte haben kann:

- `omit`: niemals Anmeldedaten in der Anfrage senden oder Anmeldedaten in der Antwort einbeziehen.
- `same-origin` (Standard): nur Anmeldedaten für same-origin-Anfragen senden und einbeziehen.
- `include`: immer Anmeldedaten einbeziehen, auch bei cross-origin.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie auch nicht siteübergreifend gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldedaten in cross-origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen, daher muss der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seine Antwort einfügt. Darüber hinaus muss der Server in diesem Fall den Ursprung des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (d.h. `*` ist nicht erlaubt).

Das bedeutet, wenn `credentials` auf `include` gesetzt ist und die Anfrage cross-origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldedaten gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird einen Netzwerkfehler an den Aufrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird die Antwort, einschließlich der Anmeldedaten, an den Aufrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorab gesendete Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldedaten senden und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, sonst wird der Browser einen Netzwerkfehler an den Aufrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird der Browser die tatsächliche Anfrage mit Anmeldedaten senden und die wirkliche Antwort, einschließlich der Anmeldedaten, an den Aufrufer liefern.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass Sie anstatt Optionen in `fetch()` zu übergeben, die gleichen Optionen an den `Request()`-Konstruktor übergeben und dann dieses Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine POST-Anfrage stellen, indem wir Optionen in `fetch()` so übergeben:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Allerdings könnten wir dies umschreiben, um die gleichen Argumente an den `Request()`-Konstruktor zu übergeben:

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

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal`-Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des Controllers auf. Der `fetch()`-Aufruf wird das Promise mit einer `AbortError`-Ausnahme ablehnen.

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

Wenn die Anfrage nach Erfüllung des `fetch()`-Aufrufs, aber vor dem Lesen des Antwortkörpers abgebrochen wird, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

## Die Antwort behandeln

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und eventuell bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Überprüfen des Antwortstatus

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern abgelehnt, wie z.B. einem Netzwerkfehler oder einem schlechten Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, daher müssen wir den Status überprüfen, bevor wir den Antwortkörper lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status)-Eigenschaft gibt uns den numerischen Statuscode an und die [`Response.ok`](/de/docs/Web/API/Response/ok)-Eigenschaft gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

Ein übliches Muster ist es, den Wert von `ok` zu überprüfen und eine Ausnahme zu werfen, wenn er `false` ist:

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

### Überprüfen des Antworttyps

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einen der folgenden Werte annehmen kann:

- `basic`: die Anfrage war eine same-origin-Anfrage.
- `cors`: die Anfrage war eine cross-origin CORS-Anfrage.
- `opaque`: die Anfrage war eine cross-origin simple-Anfrage im Modus `no-cors`.
- `opaqueredirect`: die Anfrage hat die Option `redirect` auf `manual` gesetzt und der Server hat einen [Redirect-Status](/de/docs/Web/HTTP/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort wie folgt:

- Basic-Antworten schließen Antwortheader aus der Liste der {{Glossary("Forbidden_response_header_name", "Verbotenen Antwortheader-Namen")}} aus.

- CORS-Antworten enthalten nur Antwortheader aus der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteten Antwortheader")}}.

- Undurchsichtige Antworten und undurchsichtige Weiterleitungsantworten haben einen `status` von `0`, eine leere Headerliste und einen `null`-Body.

### Überprüfen der Header

Genau wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwortheader, die für Skripte zugänglich sind, vorbehaltlich der Ausschlüsse, die auf dem Antworttyp basieren.

Ein häufiger Anwendungsfall dafür ist das Überprüfen des Inhaltstyps, bevor versucht wird, den Körper zu lesen:

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

Die `Response`-Schnittstelle bietet eine Reihe von Methoden, um die gesamten Körperinhalte in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Dies sind alles asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Inhalt des Körpers erfüllt wird.

In diesem Beispiel laden wir ein Bild herunter und lesen es als [`Blob`](/de/docs/Web/API/Blob), das wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wirft eine Ausnahme, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: beispielsweise, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Das ist gut für die Speichereffizienz, da der Browser nicht den gesamten Antwortinhalt im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Dies bedeutet auch, dass der Aufrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Betrachten Sie beispielsweise eine `GET`-Anfrage, die eine große Textdatei abruft und irgendwie verarbeitet oder dem Benutzer anzeigt:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jeden Chunk, sobald er eintrifft.

Beachten Sie, dass wenn Sie direkt auf den Körper zugreifen, Sie die rohen Bytes der Antwort erhalten und sie selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körpersdaten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel laden wir eine Textressource herunter und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um nach Zeilenumbrüchen zu suchen. Der Einfachheit halber gehen wir davon aus, dass der Text UTF-8 ist und behandeln keine Fetch-Fehler:

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

Die Konsequenzen von Anfrage- und Antwortkörpern als Streams sind, dass:

- Wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- Wenn irgendein Inhalt aus dem Stream gelesen wurde, ist der Stream _gestört_ und nichts anderes kann den Stream lesen.

Dies bedeutet, dass es nicht möglich ist, den gleichen Antwort- (oder Anfrage-) körper mehr als einmal zu lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Caches mit Service-Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, sie aber auch zwischenspeichern. Er klont also die Antwort, gibt das Original zurück und speichert den Klon im Cache:

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
- [CORS](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
- [Fetch-Beispiele auf GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
