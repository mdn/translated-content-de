---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle für das Durchführen von HTTP-Anfragen und die Verarbeitung der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Anders als `XMLHttpRequest`, das Rückruffunktionen verwendet, basiert Fetch auf Promises und ist mit Funktionen des modernen Webs wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API machen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, das sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext als globale Funktion verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String, der die zu fetchende URL enthält, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Antwort des Servers repräsentiert. Sie können dann den Status der Anfrage überprüfen und den Inhalt der Antwort in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode an der Antwort aufrufen.

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

Die Funktion `fetch()` wird das Versprechen bei einigen Fehlern ablehnen, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, falls er nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}} ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Methode von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass `json()` wie `fetch()` selbst asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Inhalt des Antwortkörpers.

Im restlichen Teil dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der zu fetchenden Ressource. Dies kann eines der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), die einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String zurückgibt, der die URL enthält
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional, ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt betrachten wir einige der am häufigsten verwendeten Optionen. Um alle Optionen zu lesen, die übergeben werden können, siehe die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` eine von `GET`, `POST` oder `HEAD` sein.

### Einen Körper festlegen

Der Anfragetext ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Text in `GET`-Anfragen einfügen, aber er ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Zum Beispiel, wenn Sie eine Datei auf den Server hochladen möchten, könnten Sie eine `POST`-Anfrage erstellen und die Datei als Anfragetext einschließen.

Um einen Anfragetext festzulegen, übergeben Sie ihn als Option `body`:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
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

Andere Objekte werden mit ihrer `toString()`-Methode in Strings umgewandelt. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Headers festlegen](#headers_festlegen) für weitere Informationen):

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

Beachten Sie, dass Anfragetexte, genauso wie Antworttexte, Ströme sind, und dass die Anfrage den Stream liest, d.h. wenn eine Anfrage einen Text enthält, können Sie sie nicht zweimal senden:

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

### Headers festlegen

Anfrage-Header geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der {{httpheader("Content-Type")}}-Header bei einer `POST`-Anfrage dem Server das Format des Anfragetextes mit.

Um Anfrage-Header festzulegen, weisen Sie sie der Option `headers` zu.

Sie können ein Objektliteral übergeben, das `header-name: header-value`-Eigenschaften enthält:

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt erstellen, dem Objekt mittels [`Headers.append()`](/de/docs/Web/API/Headers/append) Header hinzufügen und das `Headers`-Objekt der Option `headers` zuweisen:

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

Verglichen mit der Verwendung von einfachen Objekten bietet das `Headers`-Objekt einige zusätzliche Eingabesanitierungen. Zum Beispiel normalisiert es die Header-Namen in Kleinbuchstaben, entfernt führende und nachgestellte Leerzeichen von Header-Werten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "Verbotene Anfrage-Header")}} genannt. Wenn die Option [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt ist, ist die Menge der erlaubten Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können trotzdem Daten an den Server senden, indem Sie sie als Abfragezeichenfolge an die URL anhängen. Dies ist eine übliche Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und sie dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen durchführen

Ob eine Anfrage Cross-Origin durchgeführt werden kann oder nicht, wird durch den Wert der Option [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) bestimmt. Diese kann einen von drei Werten annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass wenn die Anfrage Cross-Origin ist, das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwendet wird. Das bedeutet:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, sonst wird der Browser die Antwort nicht mit dem Anrufer teilen.
  - wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorherige Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) senden, um zu prüfen, ob der Server CORS versteht und die Anfrage zulässt, und die eigentliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorherige Anfrage mit den entsprechenden CORS-Headern.

- Das Setzen von `mode` auf `same-origin` lehnt Cross-Origin-Anfragen vollständig ab.

- Das Setzen von `mode` auf `no-cors` deaktiviert CORS für Cross-Origin-Anfragen. Dies schränkt die Header ein, die gesetzt werden dürfen, und beschränkt Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind. Die meiste Zeit sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung davon ist für bestimmte Service-Worker-Anwendungsfälle.

Siehe die Referenzdokumentation zu [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Credentials einschließen

Credentials sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Credentials sendet oder nicht, sowie ob der Browser alle **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die Option `credentials`, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Credentials in der Anfrage senden oder in die Antwort einschließen.
- `same-origin` (der Standard): Nur Credentials für gleich-originäre Anfragen senden und einfügen.
- `include`: Immer Credentials einfügen, auch bei Cross-Origin.

Beachten Sie, dass, wenn das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) eines Cookies auf `Strict` oder `Lax` gesetzt ist, dann wird das Cookie nicht site-übergreifend gesendet, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einschließen von Credentials in Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen, daher muss der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch ihrer Aufnahme zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einschließt. Darüber hinaus muss der Server in dieser Situation explizit die Herkunft des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (d.h. `*` ist nicht erlaubt).

Das bedeutet, dass, wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, dann wird die Anfrage mit Credentials gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird einen Netzwerkfehler an den Anrufer zurückgeben. Wenn der Server die richtigen Header setzt, wird die Antwort, einschließlich Credentials, dem Anrufer zugestellt.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorherige Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Credentials senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird einen Netzwerkfehler an den Anrufer zurückgeben. Wenn der Server die richtigen Header setzt, wird der Browser mit der eigentlichen Anfrage, einschließlich Credentials, fortfahren und die eigentliche Antwort, einschließlich Credentials, an den Anrufer zurücksenden.

### Ein `Request`-Objekt erstellen

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass anstatt Optionen an `fetch()` zu übergeben, Sie die gleichen Optionen an den `Request()`-Konstruktor übergeben und dann dieses Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine POST-Anfrage erstellen, indem wir Optionen in `fetch()` mit folgendem Code übergeben:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten dies jedoch umschreiben, um die gleichen Argumente an den `Request()`-Konstruktor zu übergeben:

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

Wenn die Anfrage nach der Erfüllung des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Antwortstatus überprüfen

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern, wie einem Netzwerkfehler oder einem schlechten Schema, abgelehnt. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, daher müssen wir den Status überprüfen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt den numerischen Statuscode an, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200er-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein häufiges Muster ist, den Wert von `ok` zu überprüfen und einen Fehler zu werfen, wenn dieser `false` ist:

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

### Antworttyp überprüfen

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einer der folgenden Werte sein kann:

- `basic`: Die Anfrage war eine gleich-originäre Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem `no-cors`-Modus ausgeführt wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Redirect-Status](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort wie folgt:

- Basic-Antworten schließen Antwortheader von der Liste der {{Glossary("Forbidden_response_header_name", "Verbotenen Antwortheadernamen")}} aus.

- CORS-Antworten beinhalten nur Antwortheader von der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-Sicherheitsliste der Antwortheader")}}.

- Undurchsichtige Antworten und undurchsichtige Redirect-Antworten haben einen `status` von `0`, eine leere Headerliste und einen `null` Körper.

### Headers überprüfen

Genauso wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwortheader, die Skripten ausgesetzt sind, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp gemacht werden.

Ein häufiges Verwendungsszenario hierfür ist die Prüfung des Content-Typs, bevor der Versuch unternommen wird, den Körper zu lesen:

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

Die `Response`-Schnittstelle bietet eine Reihe von Methoden, um den gesamten Inhalt des Körpers in verschiedenen Formaten abzurufen:

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

Die Methode wird eine Ausnahme auslösen, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: Zum Beispiel, wenn Sie `json()` auf einer Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser den gesamten Antwortinhalt nicht im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt schrittweise verarbeiten kann, wie er empfangen wird.

Zum Beispiel, betrachten Sie eine `GET`-Anfrage, die eine große Textdatei abruft und sie auf eine bestimmte Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir die Antwort stattdessen streamen, können wir Teile des Körpers verarbeiten, sobald sie aus dem Netzwerk ankommen:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jeden Teil, sobald er ankommt.

Beachten Sie, dass, wenn Sie direkt auf den Körper zugreifen, Sie die rohen Bytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körpersdaten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel rufen wir eine Textressource ab und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Zur Vereinfachung nehmen wir an, dass der Text UTF-8 ist und behandeln keine Fetch-Fehler:

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

Die Konsequenzen von Anfragen- und Antwortkörpern, die Streams sind, bestehen darin, dass:

- wenn ein Leser mit `ReadableStream.getReader()` an einen Stream angehängt wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- wenn irgendein Inhalt vom Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann vom Stream lesen.

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

Dies ist ein häufiges Muster, wenn [ein Offline-Cache mit Service-Workern implementiert](/de/docs/Web/Progressive_web_apps/Guides/Caching) wird. Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Also klont er die Antwort, gibt das Original zurück und speichert den Klon:

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
