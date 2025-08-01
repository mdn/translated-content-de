---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: d8ecbd3de36a098b1f83f935e581993e9600a916
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle für das Ausführen von HTTP-Anfragen und die Verarbeitung der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, basiert Fetch auf Versprechen (Promises) und ist in moderne Webfunktionen wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API führen Sie eine Anfrage durch, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, welches als globale Funktion sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext verfügbar ist. Sie übergeben ihr ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String, der die URL enthält, die abgerufen werden soll, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, welches die Antwort des Servers darstellt. Sie können dann den Status der Anfrage überprüfen und den Inhalt der Antwort in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode für die Antwort aufrufen.

Hier ist eine minimale Funktion, die `fetch()` verwendet, um einige JSON-Daten von einem Server abzurufen:

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

Wir deklarieren einen String, der die URL enthält, und rufen dann `fetch()` auf, wobei wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` wird in einigen Fällen das Versprechen ablehnen, jedoch nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn dieser nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}} ab, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts aufrufen und einen ihrer Werte protokollieren. Beachten Sie, dass `json()` ebenso asynchron ist wie `fetch()` selbst, genauso wie alle anderen Methoden zum Zugriff auf den Antwortkörper.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses detaillierter betrachten.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf, wobei Sie folgendes übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann eines der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "stringifier")}} hat, der einen String mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional, ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um über alle Optionen zu lesen, die übergeben werden können, siehe die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss die Methode `GET`, `POST` oder `HEAD` sein.

### Einen Körper festlegen

Der Anfragkörper ist die Nutzlast der Anfrage: Das ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einschließen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei auf den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragkörper einschließen.

Um einen Anfragkörper festzulegen, übergeben Sie ihn als Option `body`:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Sie können den Körper als Instanz einer der folgenden Typen angeben:

- einen String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden mithilfe ihrer Methode `toString()` in Strings konvertiert. Beispielsweise können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Headers festlegen](#headers_festlegen) für weitere Informationen):

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

Beachten Sie, dass Anfragkörper, genau wie Antwortkörper, Streams sind, und das Stellen der Anfrage den Stream liest, sodass, wenn eine Anfrage einen Körper enthält, Sie sie nicht zweimal stellen können:

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

Stattdessen müssen Sie eine [Kopie erstellen](/de/docs/Web/API/Request/clone) der Anfrage, bevor Sie sie senden:

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

Anfrage-Header geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der `Content-Type`-Header bei einer `POST`-Anfrage dem Server das Format des Anfragkörpers mit.

Um Anfrage-Header festzulegen, ordnen Sie sie der Option `headers` zu.

Sie können hier ein Objektliteral übergeben, das Eigenschaften der Form `header-name: header-value` enthält:

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, Header zu diesem Objekt mit [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der Option `headers` zuweisen:

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

Im Vergleich zur Verwendung von einfachen Objekten bietet das `Headers`-Objekt einige zusätzliche Eingabesanierungen. Beispielsweise normalisiert es Header-Namen auf Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen aus Header-Werten und verhindert das Setzen bestimmter Header. Viele Header werden automatisch vom Browser festgelegt und können nicht von einem Skript gesetzt werden: Diese werden als {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}} bezeichnet. Wenn die Option [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt ist, wird die Menge der zulässigen Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Anfragkörper, aber Sie können dennoch Daten an den Server senden, indem Sie sie an die URL als Abfragezeichenfolge anfügen. Dies ist eine übliche Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und sie dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen erstellen

Ob eine Anfrage cross-origin durchgeführt werden kann oder nicht, wird durch den Wert der Option [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) bestimmt. Diese kann einen von drei Werten annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass bei einer cross-origin Anfrage der Mechanismus [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) verwendet wird. Dies bedeutet, dass:
  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, ansonsten teilt der Browser die Antwort nicht mit dem Anrufer.
  - Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [preflighted request](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), um zu überprüfen, ob der Server CORS versteht und die Anfrage zulässt. Die tatsächliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die Preflight-Anfrage mit den entsprechenden CORS-Headern.

- Das Setzen von `mode` auf `same-origin` verbietet cross-origin Anfragen vollständig.

- Das Setzen von `mode` auf `no-cors` deaktiviert CORS für cross-origin Anfragen. Dies schränkt die Header ein, die gesetzt werden dürfen, und beschränkt die Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und der Körper für JavaScript nicht verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Der Hauptanwendungsfall ist für bestimmte Anwendungsfälle von Service Workern.

Siehe die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Einbeziehen von Anmeldeinformationen

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser irgendwelche **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (der Standard): Anmeldeinformationen nur für gleichartige Anfragen senden und einbeziehen.
- `include`: Immer Anmeldeinformationen einbeziehen, auch bei cross-origin Anfragen.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, auch wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldeinformationen in cross-origin Anfragen kann eine Site für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen, daher muss der Server, auch wenn `credentials` auf `include` gesetzt ist, auch die Einbeziehung durch das Hinzufügen des {{httpheader("Access-Control-Allow-Credentials")}}-Headers zu seiner Antwort einverstanden sein. Zusätzlich muss der Server in diesem Fall explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Header der Antwort angeben (das heißt, `*` ist nicht erlaubt).

Das bedeutet, dass, wenn `credentials` auf `include` gesetzt ist und die Anfrage cross-origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Header in der Antwort setzen, sonst gibt der Browser einen Netzwerkfehler an den Anrufer zurück. Wenn der Server die richtigen Header setzt, wird die Antwort, einschließlich Anmeldeinformationen, an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [preflighted request](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Anmeldeinformationen, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Header in der Antwort setzen, sonst gibt der Browser einen Netzwerkfehler an den Anrufer zurück. Wenn der Server die richtigen Header setzt, führt der Browser die tatsächliche Anfrage aus, einschließlich Anmeldeinformationen, und liefert die tatsächliche Antwort, einschließlich Anmeldeinformationen, an den Anrufer.

### Erstellen eines `Request`-Objekts

Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass anstatt Optionen in `fetch()` zu übergeben, Sie dieselben Optionen an den `Request()`-Konstruktor übergeben können und dann dieses Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine POST-Anfrage machen, indem wir Optionen in `fetch()` mit dem folgenden Code übergeben:

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

Dies bedeutet auch, dass Sie eine Anfrage aus einer anderen Anfrage erstellen können, während Sie einige ihrer Eigenschaften mit dem zweiten Argument ändern:

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

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und ordnen Sie dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal`-Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der Aufruf von `fetch()` wird das Versprechen mit einer `AbortError`-Ausnahme ablehnen.

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

Wenn die Anfrage abgebrochen wird, nachdem der Aufruf von `fetch()` erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst empfangen wurde), wird das Versprechen, das von `fetch()` zurückgegeben wird, mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Prüfung des Antwortstatus

Das von `fetch()` zurückgegebene Versprechen wird bei einigen Fehlern abgelehnt, wie bei einem Netzwerkfehler oder einem schlechten Schema. Wenn jedoch der Server mit einem Fehler wie {{httpstatus("404")}} antwortet, dann erfüllt `fetch()` mit einer `Response`, sodass wir den Status überprüfen müssen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Statuscode, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein häufiges Muster ist es, den Wert von `ok` zu überprüfen und eine Ausnahme zu werfen, wenn er `false` ist:

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

### Prüfung des Antworttyps

Antworten haben eine Eigenschaft [`type`](/de/docs/Web/API/Response/type), die einer der folgenden sein kann:

- `basic`: Die Anfrage war eine gleichartige Anfrage.
- `cors`: Die Anfrage war eine cross-origin CORS-Anfrage.
- `opaque`: Die Anfrage war eine cross-origin einfache Anfrage, die mit dem `no-cors`-Modus durchgeführt wurde.
- `opaqueredirect`: Die Anfrage hat die Option `redirect` auf `manual` gesetzt, und der Server hat einen [Redirect-Status](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort wie folgt:

- Basisantworten schließen Antwortheader von der Liste der {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheadernamen")}} aus.

- CORS-Antworten enthalten nur Antwortheader von der {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwortheader")}}-Liste.

- Undurchsichtige Antworten und undurchsichtige Redirect-Antworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Körper.

### Prüfung der Header

Genau wie bei der Anfrage hat die Antwort eine Eigenschaft [`headers`](/de/docs/Web/API/Response/headers), die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwortheader, die Skripten ausgesetzt sind, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp vorgenommen wurden.

Ein häufiger Anwendungsfall dafür ist die Überprüfung des Inhaltstyps, bevor versucht wird, den Körper zu lesen:

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

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Körperinhalt in einer Vielzahl von verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Körperinhalt erfüllt wird.

In diesem Beispiel holen wir ein Bild ab und lesen es als [`Blob`](/de/docs/Web/API/Blob), das wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme auslösen, wenn der Antwortkörper nicht im entsprechenden Format ist: Zum Beispiel, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON geparst werden kann.

### Streaming des Antwortkörpers

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser den gesamten Antwortinhalt nicht puffern muss, bevor der Anrufer ihn mit einer Methode wie `json()` abruft.

Dies bedeutet auch, dass der Anrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Betrachten Sie zum Beispiel eine `GET`-Anfrage, die eine große Textdatei abruft und auf irgendeine Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die ganze Datei empfangen wurde, bevor wir irgendeinen Teil davon verarbeiten können.

Wenn wir die Antwort jedoch streamen, können wir Teile des Körpers verarbeiten, sobald sie aus dem Netzwerk eintreffen:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream, um jeden Chunk zu verarbeiten, sobald er ankommt.

Beachten Sie, dass wenn Sie auf den Körper direkt zugreifen, Sie die rohen Bytes der Antwort erhalten und selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körperdaten als Text dekodiert.

### Eine Textdatei Zeile für Zeile verarbeiten

Im folgenden Beispiel holen wir eine Text-Ressource ab und verarbeiten sie Zeile für Zeile, indem wir einen regulären Ausdruck verwenden, um nach Zeilenumbrüchen zu suchen. Zur Vereinfachung nehmen wir an, dass der Text UTF-8 ist und keine Fetch-Fehler behandelt werden:

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

### Gesperrte und gestörte Streams

Die Konsequenzen daraus, dass Anfrag- und Antwortkörper Streams sind, sind:

- Wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- Wenn ein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann aus dem Stream lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrag-)körper mehr als einmal zu lesen:

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

Wenn Sie den Körper mehrmals lesen müssen, müssen Sie [`Response.clone()`](/de/docs/Web/API/Response/clone) aufrufen, bevor Sie den Körper lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Cache mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort cachen. Daher klont er die Antwort, gibt das Original zurück und cached den Klon:

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
