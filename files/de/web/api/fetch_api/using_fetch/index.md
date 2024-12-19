---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 44665ebfcb0e39cd1cc4d32e8027ac3d22362f06
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle für das Erstellen von HTTP-Anfragen und das Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Rückrufe verwendet, basiert Fetch auf Promises und ist in moderne Web-Features wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) integriert.

Mit der Fetch API stellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, das sowohl im [`window`](/de/docs/Web/API/Window) als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope) Kontext als globale Funktion verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request) Objekt oder einen String, der die URL enthält, die abgerufen werden soll, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die `fetch()`-Funktion gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt wird, das die Antwort des Servers darstellt. Sie können dann den Status der Anfrage überprüfen und den Inhalt der Antwort in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Wir deklarieren einen String, der die URL enthält, und rufen dann `fetch()` auf, indem wir die URL ohne zusätzliche Optionen übergeben.

Die `fetch()`-Funktion wird das Promise bei einigen Fehlern ablehnen, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn er nicht in Ordnung ist.

Ansonsten rufen wir den Antwortinhalt als {{Glossary("JSON", "JSON")}} ab, indem wir die [`json()`](/de/docs/Web/API/Response/json) Methode von `Response` aufrufen, und protokollieren einen seiner Werte. Beachten Sie, dass `json()` wie `fetch()` selbst asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Antwortinhalt.

Im weiteren Verlauf dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer untersuchen.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die abgerufen werden soll. Dies kann eines der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, zum Beispiel eine Instanz von [`URL`](/de/docs/Web/API/URL), die einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request) Instanz
2. optional ein Objekt, das Optionen zum Konfigurieren der Anfrage enthält.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um alle Optionen zu lesen, die angegeben werden können, siehe die [`fetch()`](/de/docs/Web/API/Window/fetch) Referenzseite.

### Die Methode festlegen

Standardmäßig stellt `fetch()` eine {{httpmethod("GET")}}-Anfrage, aber Sie können die `method`-Option verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, muss `method` eine der `GET`, `POST` oder `HEAD` sein.

### Einen Body festlegen

Der Anfragetext ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Body in `GET`-Anfragen einbeziehen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie zum Beispiel {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie zum Beispiel eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragetext einfügen.

Um einen Anfragetext festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Text als Instanz eines der folgenden Typen angeben:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Beachten Sie, dass wie bei Antworttexten, Anfragetexte Streams sind, und das Stellen der Anfrage liest den Stream. Das bedeutet, dass, wenn eine Anfrage einen Body enthält, Sie sie nicht zweimal stellen können:

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

Siehe [Gesperrte und gestörte Streams](#gesperrte_und_gestörte_streams) für weitere Informationen.

### Header festlegen

Anfrageheader geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der {{httpheader("Content-Type")}}-Header dem Server das Format des Anfragetextes mit.

Um Anfrageheader festzulegen, weisen Sie sie der `headers`-Option zu.

Hier können Sie ein Objektliteral übergeben, das `header-name: header-value`-Eigenschaften enthält:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers) Objekt konstruieren, Header zu diesem Objekt mithilfe von [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers` Objekt der `headers`-Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_header_name", "Verbotene Headernamen")}} bezeichnet. Wenn die [`mode`](/de/docs/Web/API/Request/mode)-Option auf `no-cors` gesetzt ist, wird das Set der erlaubten Header weiter eingeschränkt.

### POST-Anfragen stellen

Wir können die `method`, `body` und `headers` Optionen kombinieren, um eine POST-Anfrage zu stellen:

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

Ob eine Anfrage Cross-Origin sein kann oder nicht, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option bestimmt. Diese kann einen von drei Werten annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass, wenn die Anfrage Cross-Origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwenden wird. Das bedeutet:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, dann wird die Anfrage immer gesendet, aber der Server muss mit dem richtigen {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, oder der Browser wird die Antwort nicht mit dem Aufrufer teilen.
  - wenn die Anfrage keine einfache Anfrage ist, dann wird der Browser eine [vorgeprüfte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) senden, um zu überprüfen, ob der Server CORS versteht und die Anfrage erlaubt, und die echte Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorgeprüfte Anfrage mit den entsprechenden CORS-Headern.

- Das Setzen von `mode` auf `same-origin` verbietet Cross-Origin-Anfragen vollständig.

- Das Setzen von `mode` auf `no-cors` deaktiviert CORS für Cross-Origin-Anfragen. Dies schränkt die Header ein, die gesetzt werden dürfen, und beschränkt Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Body in JavaScript nicht verfügbar sind. Die meisten Websites sollten `no-cors` nicht verwenden: Der Hauptanwendungsfall ist für bestimmte Service Worker-Verwendungsszenarien.

Siehe die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Enthalten von Anmeldeinformationen

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser irgendwelche **`Set-Cookie`** Antwort-Header respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (Standard): Nur Anmeldeinformationen für gleichherzige Anfragen senden und einbeziehen.
- `include`: Immer Anmeldeinformationen einbeziehen, auch Cross-Origin.

Beachten Sie, dass, wenn das `SameSite`-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht siteübergreifend gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen, daher muss selbst wenn `credentials` auf `include` gesetzt ist, der Server auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seine Antwort aufnimmt. Außerdem muss in diesem Fall der Server explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

Das bedeutet, wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, dann wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header setzen, oder der Browser wird einen Netzwerkfehler an den Anrufer zurückgeben. Wenn der Server die korrekten Header setzt, dann wird die Antwort, einschließlich der Anmeldeinformationen, an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, dann wird der Browser eine [vorgeprüfte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header setzen, oder der Browser wird einen Netzwerkfehler an den Anrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird der Browser mit der echten Anfrage folgen, einschließlich der Anmeldeinformationen, und die echte Antwort, einschließlich der Anmeldeinformationen, an den Anrufer liefern.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt dieselben Argumente wie `fetch()` selbst. Das bedeutet, anstatt Optionen an `fetch()` zu übergeben, können Sie dieselben Optionen an den `Request()`-Konstruktor übergeben und dieses Objekt dann an `fetch()` übergeben.

Zum Beispiel können wir eine POST-Anfrage stellen, indem wir Optionen in `fetch()` übergeben, mit folgendem Code:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten dies jedoch umschreiben, um dieselben Argumente an den `Request()`-Konstruktor zu übergeben:

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

Das bedeutet auch, dass Sie eine Anfrage von einer anderen Anfrage aus erstellen können, während Sie einige ihrer Eigenschaften mit dem zweiten Argument ändern:

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

Um die Anfrage abzubrechen, rufen Sie die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des Controllers auf. Der `fetch()` Aufruf lehnt das Promise mit einer `AbortError` Ausnahme ab.

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

Wenn die Anfrage nach der Erfüllung des `fetch()` Aufrufs, aber bevor der Antwortinhalt gelesen wurde, abgebrochen wird, wird der Versuch, den Antwortinhalt zu lesen, mit einer `AbortError` Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortinhalt selbst erhalten wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt.

### Überprüfung des Antwortstatus

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern, wie einem Netzwerkfehler oder einem schlechten Schema abgelehnt. Wenn jedoch der Server mit einem Fehler wie {{httpstatus("404")}} antwortet, dann erfüllt `fetch()` mit einem `Response`, daher müssen wir den Status überprüfen, bevor wir den Antwortinhalt lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status) Eigenschaft liefert uns den numerischen Statuscode, und die [`Response.ok`](/de/docs/Web/API/Response/ok) Eigenschaft gibt `true` zurück, wenn der Status im [200 Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

Ein häufiges Muster besteht darin, den Wert von `ok` zu überprüfen und eine Ausnahme zu werfen, wenn er `false` ist:

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

- `basic`: Die Anfrage war eine gleichherzige Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin Einfachanfrage, die mit dem `no-cors` Modus gestellt wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect` Option auf `manual` gesetzt, und der Server hat einen [Weiterleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwortheader aus der Liste der {{Glossary("Forbidden_response_header_name", "Verbotenen Antwortheadernamen")}} aus.

- CORS-Antworten schließen nur Antwortheader aus, die auf der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-gesicherten Antwortheader")}} stehen.

- Undurchsichtige Antworten und undurchsichtige Weiterleitungsantworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Inhalt.

### Überprüfung der Header

Genau wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers) Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers) Objekt ist, und dieses enthält alle Antwortheader, die für Skripte sichtbar sind, vorbehaltlich der in Bezug auf den Antworttyp gemachten Ausschlüsse.

Ein häufiges Einsatzszenario hierfür ist die Überprüfung des Content-Typs, bevor versucht wird, den Body zu lesen:

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

### Lesen des Antwortbodys

Die `Response`-Schnittstelle bietet eine Reihe von Methoden, um den gesamten Body-Inhalt in einer Vielzahl von verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Alle diese Methoden sind asynchron und geben ein {{jsxref("Promise")}} zurück, das mit dem Body-Inhalt erfüllt wird.

In diesem Beispiel holen wir ein Bild und lesen es als [`Blob`](/de/docs/Web/API/Blob), den wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortbody nicht im entsprechenden Format ist: Zum Beispiel, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON geparst werden kann.

### Streaming des Antwortbodys

Anfrage- und Antwortbodys sind eigentlich [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, weil der Browser den gesamten Antwortinhalt nicht im Speicher puffern muss, bevor der Anrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Anrufer den Inhalt schrittweise verarbeiten kann, während er empfangen wird.

Zum Beispiel, betrachten Sie eine `GET`-Anfrage, die eine große Textdatei holt und sie auf irgendeine Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir stattdessen die Antwort streamen, können wir den Inhalt in Stücken verarbeiten, während sie aus dem Netzwerk kommen:

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

Beachten Sie, dass wenn Sie direkt auf den Body zugreifen, Sie die Rohbytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Body-Daten als Text decodiert.

### Verarbeitung einer Textdatei Zeile für Zeile

Im folgenden Beispiel holen wir eine Textressource und verarbeiten sie Zeile für Zeile, indem wir einen regulären Ausdruck verwenden, um nach Zeilenumbrüchen zu suchen. Zur Vereinfachung nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

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

Die Konsequenzen von Anfrage- und Antwortbodys, die Streams sind, sind, dass:

- wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- wenn irgendein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann aus dem Stream lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-) Body mehr als einmal zu lesen:

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

Wenn Sie den Body mehr als einmal lesen müssen, müssen Sie [`Response.clone()`](/de/docs/Web/API/Response/clone) aufrufen, bevor Sie den Body lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Caches mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort cachen. Also klont er die Antwort, gibt das Original zurück und cachet den Klon:

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
- [Fetch Beispiele auf GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
