---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Erstellen von HTTP-Anfragen und zur Verarbeitung von Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Rückrufmethoden (Callbacks) verwendet, basiert Fetch auf Promises und ist in moderne Webfunktionen wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API erstellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, das sowohl im [`window`](/de/docs/Web/API/Window) als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope) Kontext als globale Funktion verfügbar ist. Sie übergeben ihr ein [`Request`](/de/docs/Web/API/Request) Objekt oder einen String mit der abzurufenden URL, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt wird, das die Antwort des Servers darstellt. Sie können dann den Anfragestatus prüfen und den Antwortinhalt in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf die Antwort aufrufen.

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

Die Funktion `fetch()` wird bei einigen Fehlern das Promise ablehnen, nicht jedoch, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher prüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn dieser nicht OK ist.

Andernfalls holen wir den Antwortinhalt als {{Glossary("JSON", "JSON")}}, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass wie bei `fetch()` selbst auch `json()` asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Antwortinhalt.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann eine der folgenden sein:
   - ein String mit der URL
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "stringifier")}} besitzt, der einen String mit der URL erstellt
   - eine [`Request`](/de/docs/Web/API/Request) Instanz
2. optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt schauen wir uns einige der am häufigsten verwendeten Optionen an. Um alle Optionen zu lesen, die angegeben werden können, sehen Sie sich die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch) an.

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}} Anfrage aus, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` `GET`, `POST` oder `HEAD` sein.

### Einen Body festlegen

Der Anfragbody ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können mit `GET`-Anfragen keinen Body einfügen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie z. B. {{httpmethod("POST")}} oder {{httpmethod("PUT")}} Anfragen. Wenn Sie beispielsweise eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage erstellen und die Datei als Anfragbody einfügen.

Um eine Anfrage mit einem Body festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // ...
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

Andere Objekte werden mit ihrer `toString()`-Methode in Strings umgewandelt. Sie können beispielsweise ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Objekt verwenden, um Formulardaten zu kodieren (siehe [Header festlegen](#header_festlegen) für weitere Informationen):

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

Beachten Sie, dass wie bei Antwort-Bodys auch Anfrag-Bodys Streams sind, und die Erstellung der Anfrage den Stream einliest. Wenn eine Anfrage einen Body enthält, können Sie diese daher nicht erneut ausführen:

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

Stattdessen müssten Sie [einen Klon erstellen](/de/docs/Web/API/Request/clone), bevor Sie die Anfrage senden:

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

Anfrage-Header geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der {{httpheader("Content-Type")}}-Header bei einer `POST`-Anfrage dem Server das Format des Anfragekörpers mit.

Um Header festzulegen, weisen Sie sie der Option `headers` zu.

Sie können hier ein Objektliteral übergeben, das `header-name: header-value` Eigenschaften enthält:

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers) Objekt erstellen, diesem mit [`Headers.append()`](/de/docs/Web/API/Headers/append) Header hinzufügen und dann das `Headers`-Objekt der Option `headers` zuweisen:

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

Im Vergleich zur Verwendung von einfachen Objekten bietet das `Headers`-Objekt einige zusätzliche Eingabereinigungen. Zum Beispiel normalisiert es Header-Namen zu Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen aus Header-Werten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "verbotene Anfrage-Header")}} genannt. Wenn die Option [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt ist, wird die Menge der zulässigen Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Body, aber Sie können dennoch Daten an den Server senden, indem Sie diese als Abfragezeichenfolge an die URL anhängen. Dies ist eine gängige Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und diese dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen erstellen

Ob eine Anfrage Cross-Origin sein kann oder nicht, wird durch den Wert der Option [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) bestimmt. Dieser kann einen von drei Werten annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass wenn die Anfrage Cross-Origin ist, dann das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Mechanismus verwendet wird. Dies bedeutet, dass:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, die Anfrage immer gesendet wird, aber der Server mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}} Header antworten muss, andernfalls wird der Browser die Antwort nicht mit dem Aufrufer teilen.
  - wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [vorab geprüfte Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), um zu prüfen, ob der Server CORS versteht und die Anfrage zulässt, und die tatsächliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorab geprüfte Anfrage mit den entsprechenden CORS-Headern.

- Das Setzen von `mode` auf `same-origin` verbietet Cross-Origin-Anfragen vollständig.

- Das Setzen von `mode` auf `no-cors` deaktiviert CORS für Cross-Origin-Anfragen. Dies schränkt die Kopfzeilen ein, die gesetzt werden dürfen, und beschränkt Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Kopfzeilen und der Body für JavaScript nicht verfügbar sind. Die meisten Webseiten sollten `no-cors` nicht nutzen: Die Hauptanwendung dafür sind bestimmte Service-Worker-Anwendungsfälle.

Weitere Details finden Sie in der Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

### Einschließen von Anmeldeinformationen

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}} Client-Zertifikate oder Authentifizierungsheader, die eine Benutzername- und Passwort-Kombination enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet und ob er **`Set-Cookie`**-Antwortheader beachtet, legen Sie die Option `credentials` fest, die einen der folgenden drei Werte annehmen kann:

- `omit`: nie Anmeldeinformationen in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (der Standard): Anmeldeinformationen nur bei same-origin Anfragen senden und einbeziehen.
- `include`: Anmeldeinformationen immer einbeziehen, sogar bei Cross-Origin.

Beachten Sie, dass wenn das Attribut `[SameSite](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)` eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}} Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} Header in seine Antwort einfügt. Zusätzlich muss der Server in dieser Situation den Ursprung des Clients explizit im {{httpheader("Access-Control-Allow-Origin")}} Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

Dies bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Kopfzeilen setzen, andernfalls wird der Browser einen Netzwerkfehler an den Aufrufer zurückgeben. Wenn der Server die korrekten Kopfzeilen setzt, wird die Antwort, einschließlich Anmeldeinformationen, an den Aufrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [vorab geprüfte Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Anmeldeinformationen. Der Server muss dann die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Kopfzeilen setzen, andernfalls wird der Browser einen Netzwerkfehler an den Aufrufer zurückgeben. Wenn der Server die korrekten Kopfzeilen setzt, wird der Browser die echte Anfrage folgen lassen, einschließlich Anmeldeinformationen, und die echte Antwort, einschließlich Anmeldeinformationen, an den Aufrufer liefern.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass Sie anstelle des Übergabens von Optionen an `fetch()`, die gleichen Optionen dem `Request()`-Konstruktor übergeben können, und dann dieses Objekt an `fetch()` übergeben.

Zum Beispiel, wir können eine POST-Anfrage durch das Übergeben von Optionen in `fetch()` mit folgendem Code machen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Allerdings könnten wir das umschreiben, um die gleichen Argumente an den `Request()`-Konstruktor zu übergeben:

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

Das bedeutet auch, dass Sie eine Anfrage von einer anderen Anfrage erstellen können, während Sie einige ihrer Eigenschaften mit dem zweiten Argument ändern:

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

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal` Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der `fetch()` Aufruf wird das Promise mit einer `AbortError` Ausnahme ablehnen.

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

Wenn die Anfrage nach dem Erfüllen des `fetch()` Aufrufs aber vor dem Lesen des Antwortinhalts abgebrochen wird, wird der Versuch, den Antwortinhalt zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und potenziell bevor der Antwortkörper selbst empfangen wurde), wird das Promise, das von `fetch()` zurückgegeben wurde, mit einem [`Response`](/de/docs/Web/API/Response) Objekt erfüllt.

### Überprüfen des Antwortstatus

Das von `fetch()` zurückgegebene Promise wird bei manchen Fehlern abgelehnt, z. B. bei einem Netzwerkfehler oder einem ungültigen Schema. Wenn jedoch der Server mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, sodass wir den Status prüfen müssen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Statuscode, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200er-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein häufiges Muster besteht darin, den Wert von `ok` zu prüfen und eine Ausnahme zu werfen, wenn dieser `false` ist:

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

Antworten haben eine [`type`](/de/docs/Web/API/Response/type) Eigenschaft, die einer der folgenden sein kann:

- `basic`: die Anfrage war eine Same-Origin-Anfrage.
- `cors`: die Anfrage war eine Cross-Origin CORS-Anfrage.
- `opaque`: die Anfrage war eine Cross-Origin einfache Anfrage mit dem `no-cors` Modus.
- `opaqueredirect`: die Anfrage setzte die `redirect` Option auf `manual`, und der Server gab einen [Redirect-Status](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurück.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwort-Header von der {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Header-Namens")}} Liste aus.

- CORS-Antworten umfassen nur Antwort-Header von der {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsgeprüften Antwort-Header")}} Liste.

- Undurchsichtige Antworten und undurchsichtige Redirect-Antworten haben einen `status` von `0`, eine leere Header-Liste und einen `null` Body.

### Überprüfen von Headers

Ebenso wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers) Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers) Objekt ist, und dieses enthält alle Antwort-Header, die Skripten freigegeben sind, unterliegen jedoch den Ausschlüssen, die basierend auf dem Antworttyp gemacht werden.

Ein häufiger Anwendungsfall hierfür ist das Überprüfen des Inhaltstyps, bevor versucht wird, den Body zu lesen:

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

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Body-Inhalt in verschiedenen Formaten zu erhalten:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchron, da sie ein {{jsxref("Promise")}} zurückgeben, das mit dem Body-Inhalt erfüllt wird.

In diesem Beispiel holen wir ein Bild und lesen es als [`Blob`](/de/docs/Web/API/Blob), das wir dann verwenden können, um ein Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im geeigneten Format ist: Zum Beispiel, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON analysiert werden kann.

### Streaming des Antwortkörpers

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream) Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Das ist gut für die Speichereffizienz, weil der Browser nicht die gesamte Antwort im Speicher puffern muss, bevor der Aufrufer sie mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Zum Beispiel betrachten wir eine `GET`-Anfrage, die eine große Textdatei abruft und diese in irgendeiner Weise verarbeitet oder dem Benutzer anzeigt:

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

Wenn wir die Antwort jedoch streamen, können wir Teile des Körpers verarbeiten, sobald sie über das Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jeden Chunk, sobald er ankommt.

Beachten Sie, dass wenn Sie direkt auf den Body zugreifen, Sie die rohen Bytes der Antwort erhalten und sie selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Body-Daten als Text dekodiert.

### Ein Textdokument Zeile für Zeile verarbeiten

Im folgenden Beispiel laden wir eine Textressource und verarbeiten sie Zeile für Zeile using a regular expression to identify line endings. Aus Gründen der Vereinfachung nehmen wir an, dass der Text UTF-8 ist und behandeln keine Abruffehler:

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

Die Konsequenzen daraus, dass Anfragen- und Antwortkörper Streams sind, sind, dass:

- wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- wenn irgendein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann mehr daraus gelesen werden.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-) Körper mehr als einmal zu lesen:

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

Dies ist ein häufiges Muster bei der [Implementierung eines Offline-Caches mit Service-Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Also klont er die Antwort, gibt das Original zurück und speichert den Klon:

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
