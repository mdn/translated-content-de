---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: bd4e1b05874f321d54d1211493d7f5dbec7d8c9a
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Erstellen von HTTP-Anfragen und zum Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, basiert Fetch auf Promises und ist mit Funktionen des modernen Webs wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) integriert.

Mit der Fetch API erstellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, das als globale Funktion sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext verfügbar ist. Sie übergeben entweder ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine Zeichenkette, die die URL enthält, die geladen werden soll, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst wird, das die Antwort des Servers repräsentiert. Anschließend können Sie den Status der Anfrage prüfen und den Inhalt der Antwort in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf der Antwort aufrufen.

Hier ist eine minimale Funktion, die `fetch()` verwendet, um JSON-Daten von einem Server abzurufen:

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

Wir deklarieren eine Zeichenkette mit der URL und rufen dann `fetch()` auf, indem wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` lehnt das Promise bei einigen Fehlern ab, jedoch nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher prüfen wir auch den Status der Antwort und werfen eine Ausnahme, wenn er nicht OK ist.

Andernfalls rufen wir den Inhaltskorpus der Antwort als {{Glossary("JSON", "JSON")}} ab, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts aufrufen, und protokollieren einen seiner Werte. Beachten Sie, dass, ebenso wie `fetch()` selbst, `json()` asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Antwortinhalt.

Im weiteren Verlauf dieser Seite werden wir die verschiedenen Phasen dieses Prozesses im Detail betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die geladen werden soll. Dies kann eines der folgenden sein:
   - eine Zeichenkette, die die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das eine {{Glossary("stringifier", "Stringifier")}}-Methode hat, die eine Zeichenkette mit der URL erstellt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional ein Objekt, das Optionen zur Konfiguration der Anfrage enthält.

In diesem Abschnitt betrachten wir einige der am häufigsten verwendeten Optionen. Weitere Informationen über alle möglichen Optionen finden Sie auf der Referenzseite von [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig stellt `fetch()` eine {{httpmethod("GET")}}-Anfrage, aber Sie können die Option `method` verwenden, um eine andere [HTTP-Methode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` eine der folgenden sein: `GET`, `POST` oder `HEAD`.

### Einen Body festlegen

Der Anfrage-Body ist die Nutzlast der Anfrage, also der Inhalt, den der Client an den Server sendet. Sie können keinen Body mit `GET`-Anfragen verwenden, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie z. B. {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei an den Server hochladen möchten, können Sie eine `POST`-Anfrage erstellen und die Datei als Anfrage-Body anhängen.

Um einen Anfrage-Body festzulegen, übergeben Sie ihn als Option `body`:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Body als eine Instanz eines der folgenden Typen übergeben:

- eine Zeichenkette
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden mithilfe ihrer `toString()`-Methode in Zeichenketten umgewandelt. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Header festlegen](#header_festlegen) für weitere Informationen):

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // ...
});
```

Beachten Sie, dass Anfrage-Body-Inhalte, genau wie Antwort-Inhalte, Streams sind, und dass durch das Erstellen der Anfrage der Stream gelesen wird. Wenn eine Anfrage einen Body enthält, können Sie sie daher nicht zweimal ausführen:

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

Stattdessen müssten Sie eine [Kopie erstellen](/de/docs/Web/API/Request/clone), bevor Sie die Anfrage erneut senden:

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

Anfrage-Header geben dem Server Informationen über die Anfrage: Beispielsweise gibt der Header {{httpheader("Content-Type")}} dem Server das Format des Anfrage-Bodys an.

Um Anfrage-Header festzulegen, weisen Sie diese der Option `headers` zu.

Sie können hier ein Objektliteral übergeben, das Eigenschaften im Format `header-name: header-value` enthält:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ dazu können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt erstellen, dem Header mit [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzugefügt werden, und das Objekt dann der Option `headers` zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Im Vergleich zur Verwendung von einfachen Objekten bietet das `Headers`-Objekt zusätzliche Eingabesanitisierung. Es normalisiert beispielsweise Header-Namen auf Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen aus Header-Werten und verhindert das Setzen bestimmter Header. Viele Header werden vom Browser automatisch gesetzt und können von einem Skript nicht festgelegt werden: Diese werden als {{Glossary("Forbidden_header_name", "Verbotene Header-Namen")}} bezeichnet. Wenn die Option [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt ist, wird der Satz zulässiger Header zusätzlich eingeschränkt.

### POST-Anfragen erstellen

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

### Cross-Origin-Anfragen erstellen

Ob eine Anfrage cross-origin durchgeführt werden kann oder nicht, wird durch den Wert der Option [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) bestimmt. Diese kann einen der folgenden drei Werte annehmen: `cors`, `same-origin` oder `no-cors`.

- Bei Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass bei Cross-Origin-Anfragen der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet wird. Dies bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem richtigen {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, damit der Browser die Antwort mit dem Aufrufer teilt.
  - Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [preflighted-Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests), um sicherzustellen, dass der Server CORS versteht und die Anfrage erlaubt. Die tatsächliche Anfrage wird nur dann gesendet, wenn der Server auf die Preflight-Anfrage mit den entsprechenden CORS-Headern antwortet.

- Wenn `mode` auf `same-origin` gesetzt ist, werden Cross-Origin-Anfragen vollständig untersagt.

- Wenn `mode` auf `no-cors` gesetzt ist, wird CORS für Cross-Origin-Anfragen deaktiviert. Dies schränkt ein, welche Header gesetzt werden können, und beschränkt Methoden auf `GET`, `HEAD` und `POST`. Die Antwort ist _opaqu_, das bedeutet, dass Header und Body der Antwort für JavaScript nicht verfügbar sind. In der Regel sollte eine Website `no-cors` nicht verwenden; die Hauptanwendung ist für bestimmte Service-Worker-Anwendungsfälle.

Details finden Sie in der Referenzdokumentation von [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

### Anmeldeinformationen einbinden

Anmeldeinformationen umfassen Cookies, {{Glossary("TLS", "TLS")}}-Zertifikate für Clients oder Authentifizierungsheader mit Benutzername und Passwort.

Um zu steuern, ob der Browser Anmeldeinformationen sendet, sowie ob der Browser **`Set-Cookie`**-Header in der Antwort respektiert, setzen Sie die Option `credentials`. Sie kann einen der folgenden drei Werte annehmen:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder diese in der Antwort einbinden.
- `same-origin` (Standardwert): Anmeldeinformationen nur für Anfragen mit gleicher Herkunft senden und einbinden.
- `include`: Immer Anmeldeinformationen einbinden, auch über Cross-Origin.

Beachten Sie, dass ein Cookie, dessen [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut auf `Strict` oder `Lax` gesetzt ist, nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Cross-Origin-Anfragen mit Anmeldeinformationen können eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen, daher muss der Server, selbst wenn `credentials` auf `include` gesetzt ist, deren Einbindung durch den Header {{httpheader("Access-Control-Allow-Credentials")}} in seiner Antwort ebenfalls zulassen. Zusätzlich muss der Server in diesem Fall die Herkunft des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}}-Header angeben (das heißt, `*` ist nicht erlaubt).

Das bedeutet, wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird sie mit Anmeldeinformationen gesendet, aber der Server muss die Header {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} korrekt setzen, oder der Browser gibt dem Aufrufer einen Netzwerkfehler zurück. Wenn der Server die Header richtig setzt, wird die Antwort einschließlich der Anmeldeinformationen an den Aufrufer übermittelt.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [preflighted-Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldeinformationen, und der Server muss die Header {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} korrekt setzen, oder der Browser gibt dem Aufrufer einen Netzwerkfehler zurück. Wenn der Server die Header richtig setzt, folgt der Browser der tatsächlichen Anfrage einschließlich der Anmeldeinformationen und liefert die tatsächliche Antwort zusammen mit den Anmeldeinformationen an den Aufrufer.

### Ein `Request`-Objekt erstellen

Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) nimmt dieselben Argumente wie `fetch()` selbst. Das bedeutet, anstatt Optionen direkt an `fetch()` zu übergeben, können Sie dieselben Optionen an den Konstruktor von `Request()` übergeben und dieses Objekt anschließend an `fetch()` übergeben.

Beispielsweise können wir eine POST-Anfrage erstellen, indem wir Optionen an `fetch()` übergeben:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten dies jedoch umschreiben, um die Argumente an den Konstruktor von `Request()` zu übergeben:

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

Dies bedeutet auch, dass Sie eine Anfrage von einer anderen Anfrage erstellen können, während Sie einige ihrer Eigenschaften mit dem zweiten Argument ändern:

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

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der `fetch()`-Aufruf lehnt dann das Promise mit einer `AbortError`-Ausnahme ab.

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

Wenn die Anfrage abgebrochen wird, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortinhalt gelesen wurde, wird der Versuch, den Antwortinhalt zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortinhalt selbst empfangen wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst.

### Den Antwortstatus überprüfen

Das von `fetch()` zurückgegebene Promise lehnt bestimmte Fehler ab, wie z. B. einen Netzwerkausfall oder ein ungültiges Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` aufgelöst, sodass wir den Status überprüfen müssen, bevor wir den Antwortinhalt lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) liefert uns den numerischen Statuscode, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200er-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

Ein häufiges Muster ist es, den Wert von `ok` zu überprüfen und eine Ausnahme zu werfen, wenn er `false` ist:

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

### Den Antworttyp überprüfen

Antworten haben eine Eigenschaft [`type`](/de/docs/Web/API/Response/type), die eines der folgenden sein kann:

- `basic`: Die Anfrage war eine Anfrage mit gleicher Herkunft.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-Anfrage mit einfachem Modus (`no-cors`).
- `opaqueredirect`: Die Anfrage hat die Option `redirect` auf `manual` gesetzt, und der Server gab einen [Redirect-Status](/de/docs/Web/HTTP/Status#redirection_messages) zurück.

Der Typ bestimmt den möglichen Inhalt der Antwort wie folgt:

- Basic-Antworten schließen Antwortheader aus der Liste der {{Glossary("Forbidden_response_header_name", "Verbotenen Antwortheadernamen")}} aus.

- CORS-Antworten enthalten nur Antwortheader aus der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsgeprüften Antwortheader")}}.

- Opaque-Antworten und opaque Redirect-Antworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Body.

### Header überprüfen

Wie die Anfrage hat die Antwort eine Eigenschaft [`headers`](/de/docs/Web/API/Response/headers), die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwortheader, die für Skripte zugänglich sind, vorbehaltlich der Ausschlüsse basierend auf dem Antworttyp.

Ein häufiger Anwendungsfall besteht darin, den Inhaltstyp zu überprüfen, bevor versucht wird, den Body zu lesen:

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

### Den Antwort-Body lesen

Das `Response`-Interface stellt eine Reihe von Methoden bereit, um den gesamten Inhalt des Bodys in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Inhaltskörper aufgelöst wird.

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

Die Methode löst eine Ausnahme aus, wenn der Antwortinhalt nicht im entsprechenden Format vorliegt. Beispielsweise, wenn Sie `json()` auf einer Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwort-Body streamen

Anfrage- und Antwort-Bodies sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser den gesamten Antwortinhalt nicht im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Betrachten Sie beispielsweise eine `GET`-Anfrage, die eine große Textdatei abruft und sie irgendwie verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben gezeigt, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir einen Teil davon verarbeiten können.

Wenn wir die Antwort stattdessen streamen, können wir Teile des Bodys verarbeiten, sobald sie vom Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jeden Chunk so, wie er ankommt.

Beachten Sie, dass Sie beim direkten Zugriff auf den Body die rohen Bytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall verwenden wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Body-Daten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel holen wir eine Textressource ab und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um Zeilenenden zu erkennen. Der Einfachheit halber gehen wir davon aus, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

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

Die Konsequenzen von Anfrage- und Antwortbodies als Streams sind:

- Wenn ein Leser mit `ReadableStream.getReader()` an einen Stream angehängt wurde, ist der Stream _gesperrt_, und nichts anderes kann den Stream lesen.
- Wenn Inhalte aus dem Stream gelesen wurden, ist der Stream _gestört_, und nichts anderes kann aus dem Stream lesen.

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

Wenn Sie den Body mehrmals lesen müssen, müssen Sie [`Response.clone()`](/de/docs/Web/API/Response/clone) aufrufen, bevor Sie den Body lesen:

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

Dies ist ein häufiges Muster, wenn Sie [einen Offline-Cache mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching) implementieren. Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort cachen. Daher klont er die Antwort, gibt das Original zurück und cached die Kopie:

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
