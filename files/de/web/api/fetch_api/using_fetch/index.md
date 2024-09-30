---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 667c1884597a2b576a5b51e0129f3c27a532cff6
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Ausführen von HTTP-Anfragen und Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Rückrufe verwendet, ist Fetch versprechenbasiert und integriert sich mit Funktionen des modernen Webs, wie [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Mit der Fetch API führen Sie eine Anfrage durch Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) aus, das als globale Funktion sowohl im {{domxref("Window", "window", "", "", "nocode")}} als auch im {{domxref("WorkerGlobalScope", "worker", "", "", "nocode")}} Kontext verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request) Objekt oder eine Zeichenkette, die die URL zum Abrufen enthält, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt wird, das die Antwort des Servers darstellt. Anschließend können Sie den Status der Anfrage überprüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Wir deklarieren eine Zeichenkette, die die URL enthält, und rufen dann `fetch()` auf, wobei wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` wird das Versprechen bei einigen Fehlern ablehnen, nicht aber, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher prüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn er nicht OK ist.

Andernfalls rufen wir den Inhalt des Antwortkörpers als [JSON](/de/docs/Glossary/JSON) ab, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass `json()` wie `fetch()` selbst asynchron ist, ebenso wie alle anderen Methoden, die auf den Inhalt des Antwortkörpers zugreifen.

Im Rest dieser Seite schauen wir uns die verschiedenen Phasen dieses Prozesses genauer an.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die abgerufen werden soll. Dies kann eine der folgenden sein:
   - eine Zeichenkette, die die URL enthält
   - ein Objekt, z. B. eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen [stringifier](/de/docs/Glossary/stringifier) besitzt, der eine Zeichenkette mit der URL produziert
   - eine [`Request`](/de/docs/Web/API/Request) Instanz
2. optional ein Objekt, das Optionen zur Konfiguration der Anfrage enthält.

In diesem Abschnitt betrachten wir einige der am häufigsten verwendeten Optionen. Um alle Optionen, die angegeben werden können, zu erfahren, besuchen Sie die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig macht `fetch()` eine {{httpmethod("GET")}} Anfrage, aber Sie können die Option `method` verwenden, um eine andere [Anforderungsmethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` eine der folgenden sein: `GET`, `POST` oder `HEAD`.

### Einen Body festlegen

Der Anfragetext ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Body mit `GET`-Anfragen einfügen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage machen und die Datei als Anfragetext beifügen.

Um einen Anfragetext festzulegen, übergeben Sie ihn als die Option `body`:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Body als Instanz eines der folgenden Typen bereitstellen:

- eine Zeichenkette
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Beachten Sie, dass Anfragetexte genau wie Antworttexte Streams sind und das Erstellen der Anfrage den Stream liest. Wenn eine Anfrage einen Body enthält, können Sie sie nicht zweimal ausführen:

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

### Header setzen

Anforderungsheader geben dem Server Informationen über die Anfrage: zum Beispiel teilt der {{httpheader("Content-Type")}}-Header dem Server das Format des Anfragetextes mit. Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden [Verbotene Headernamen](/de/docs/Glossary/Forbidden_header_name) genannt.

Um Anforderungsheader festzulegen, weisen Sie sie der Option `headers` zu.

Sie können hier ein Objektliteral übergeben, das `header-name: header-value`-Eigenschaften enthält:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers) Objekt erstellen, Header zu diesem Objekt mithilfe von [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der Option `headers` zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, können Sie nur [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) setzen.

### POST-Anfragen durchführen

Wir können die Optionen `method`, `body` und `headers` kombinieren, um eine POST-Anfrage zu erstellen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

### Cross-Origin-Anfragen ausführen

Ob eine Anfrage Cross-Origin ausgeführt werden kann oder nicht, wird durch den Wert der `mode`-Option bestimmt. Diese kann einen von drei Werten annehmen: `cors`, `no-cors` oder `same-origin`.

- Standardmäßig ist `mode` auf `cors` gesetzt, was bedeutet, dass, wenn die Anfrage Cross-Origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus nutzt. Das bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem richtigen {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, oder der Browser wird die Antwort nicht mit dem Anrufer teilen.
  - Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [Preflighted-Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) senden, um zu überprüfen, dass der Server CORS versteht und die Anfrage zulässt, und die eigentliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die Preflighted-Anfrage mit den entsprechenden CORS-Headern.

- Das Setzen von `mode` auf `same-origin` verbietet Cross-Origin-Anfragen vollständig.

- Das Setzen von `mode` auf `no-cors` bedeutet, dass die Anfrage eine einfache Anfrage sein muss, was die Header einschränkt, die gesetzt werden dürfen, und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.

### Einbinden von Anmeldeinformationen

Anmeldeinformationen sind Cookies, [TLS](/de/docs/Glossary/TLS)-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu bestimmen, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser irgendwelche **`Set-Cookie`**-Antwortheader respektiert, stellen Sie die `credentials`-Option ein, die einen der folgenden drei Werte annehmen kann:

- `omit`: niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (der Standard): nur Anmeldeinformationen für Same-Origin-Anfragen senden und einbeziehen.
- `include`: immer Anmeldeinformationen einschließen, auch Cross-Origin.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbinden von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website anfällig für [CSRF](/de/docs/Glossary/CSRF)-Angriffe machen. Daher muss der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einschließt. Zusätzlich muss der Server in dieser Situation ausdrücklich den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

Das bedeutet, dass, wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird dem Anrufer einen Netzwerkfehler zurückgeben. Wenn der Server die richtigen Header setzt, wird die Antwort, einschließlich der Anmeldeinformationen, an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [Preflighted-Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird dem Anrufer einen Netzwerkfehler zurückgeben. Wenn der Server die richtigen Header setzt, folgt der Browser mit der tatsächlichen Anfrage, einschließlich Anmeldeinformationen, und liefert die tatsächliche Antwort, einschließlich Anmeldeinformationen, an den Anrufer.

### Erstellen eines `Request` Objekts

Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass anstelle von Übergabe von Optionen an `fetch()` die gleichen Optionen an den `Request()` Konstruktor übergeben werden können, und dann dieses Objekt an `fetch()` übergeben werden kann.

Zum Beispiel können wir eine POST-Anfrage erstellen, indem wir Optionen in `fetch()` mit diesem Code übergeben:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Jedoch könnten wir dies umschreiben, um dieselben Argumente an den `Request()`-Konstruktor zu übergeben:

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

Das bedeutet auch, dass Sie eine Anfrage von einer anderen Anfrage erstellen können und dabei einige ihrer Eigenschaften mit dem zweiten Argument ändern:

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

## Abbrechen einer Anfrage

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal` Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der `fetch()` Aufruf wird das Versprechen mit einer `AbortError` Ausnahme ablehnen.

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

Wird die Anfrage nach Erfüllung des `fetch()`-Aufrufs, aber vor dem Lesen des Antwortkörpers abgebrochen, dann wird ein Versuch, den Antwortkörper zu lesen, mit einer `AbortError` Ausnahme abgelehnt.

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

## Bearbeitung der Antwort

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Versprechen mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt.

### Überprüfung des Antwortstatus

Das von `fetch()` zurückgegebene Versprechen wird bei einigen Fehlern abgelehnt, wie einem Netzwerkfehler oder einem schlechten Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, dann erfüllt `fetch()` mit einer `Response`, daher müssen wir den Status überprüfen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Statuscode, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

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

### Überprüfung des Antworttyps

Antworten haben eine [`type`](/de/docs/Web/API/Response/type) Eigenschaft, die einer der folgenden sein kann:

- `basic`: Die Anfrage war eine Same-Origin-Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem Modus `no-cors` gestellt wurde.
- `opaqueredirect`: Die Anfrage stellte die Option `redirect` auf `manual` und der Server gab einen [Redirect-Status](/de/docs/Web/HTTP/Status#redirection_messages) zurück.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwortheader von der Liste der [verbotenen Antwortheadernamen](/de/docs/Glossary/Forbidden_response_header_name) aus.
- CORS-Antworten enthalten nur Antwortheader aus der Liste der [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header).
- Opaque-Antworten und opake Redirect-Antworten haben einen `status` von `0`, eine leere Headerliste und einen `null` Körper.

### Header überprüfen

Genau wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers) Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers) Objekt ist, und dieses enthält alle Antwortheader, die Skripten zur Verfügung stehen, vorbehaltlich der Ausschlüsse basierend auf dem Antworttyp.

Ein häufiges Anwendungsbeispiel hierfür ist die Überprüfung des Inhaltstyps, bevor versucht wird, den Körper zu lesen:

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

### Lesen des Antwortkörpers

Die `Response` Schnittstelle bietet eine Reihe von Methoden, um den gesamten Inhalt des Körpers in einer Vielzahl verschiedener Formate abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Inhalt des Körpers erfüllt wird.

In diesem Beispiel rufen wir ein Bild ab und lesen es als [`Blob`](/de/docs/Web/API/Blob), den wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im richtigen Format vorliegt: Zum Beispiel, wenn Sie `json()` auf einer Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser den gesamten Antwortkörper nicht im Speicher puffern muss, bevor der Anrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Anrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Betrachten Sie beispielsweise eine `GET` Anfrage, die eine große Textdatei abruft und auf eine bestimmte Weise verarbeitet oder den Benutzer darstellt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir irgendeinen Teil davon verarbeiten können.

Wenn wir stattdessen den Stream verwenden, können wir die Teile des Körpers verarbeiten, während diese vom Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jeden Teil, sobald er eintrifft.

Beachten Sie, dass Sie, wenn Sie direkt auf den Körper zugreifen, die Rohdaten der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, welche die UTF-8-codierten Body-Daten als Text decodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel rufen wir eine Textressource ab und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Der Einfachheit halber nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

```js
async function* makeTextFileLineIterator(fileURL) {
  const response = await fetch(fileURL);
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk || "";

  const newline = /\r?\n/gm;
  let startIndex = 0;
  let result;

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

Die Konsequenzen davon, dass Anfrage- und Antwortkörper Streams sind, sind:

- Wenn ein Leser an einen Stream angefügt wurde, indem `ReadableStream.getReader()` verwendet wird, dann ist der Stream _gesperrt_ und es kann nichts anderes aus dem Stream gelesen werden.
- Wenn irgendein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_ und es kann nichts anderes mehr aus dem Stream gelesen werden.

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

Dies ist ein häufiges Muster bei der [Implementierung eines Offline-Caches mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, sie aber auch zwischenspeichern. Also klont er die Antwort, gibt das Original zurück und speichert den Klon:

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
