---
title: Verwendung der Fetch-API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 189a91ff9f82f8fdf6deb5626a733a4eed8b9255
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle für HTTP-Anfragen und die Verarbeitung der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, ist Fetch versprochen-basiert und integriert mit Funktionen des modernen Webs wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Mit der Fetch-API stellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, was sowohl in den {{domxref("Window", "window", "", "", "nocode")}}- als auch in den {{domxref("WorkerGlobalScope", "worker", "", "", "nocode")}}-Kontexten als globale Funktion verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String mit der URL, die abgerufen werden soll, sowie ein optionales Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, welches die Antwort des Servers darstellt. Sie können dann den Status der Anfrage überprüfen und den Inhalt der Antwort in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Wir deklarieren einen String mit der URL und rufen dann `fetch()` auf, wobei wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` wird das Versprechen bei einigen Fehlern ablehnen, nicht aber, wenn der Server mit einem Status wie {{httpstatus("404")}} antwortet: Daher prüfen wir auch den Antwortstatus und werfen, wenn er nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}}, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass wie `fetch()` selbst auch `json()` asynchron ist, ebenso wie alle anderen Methoden, um auf den Inhalt des Antwortkörpers zuzugreifen.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die abgerufen werden soll. Dies kann eines der folgenden sein:
   - ein String mit der URL
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), die einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String mit der URL erzeugt
   - eine Instanz von [`Request`](/de/docs/Web/API/Request)
2. optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um über alle Optionen zu lesen, die angegeben werden können, siehe die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage durch, aber Sie können die `method`-Option verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, muss `method` eine der folgenden sein: `GET`, `POST` oder `HEAD`.

### Einen Körper festlegen

Der Anfrageteil ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einfügen, aber er ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei an den Server hochladen möchten, können Sie eine `POST`-Anfrage erstellen und die Datei als Anfrageteil einfügen.

Um einen Anfragenkörper festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Körper als Instanz eines der folgenden Typen angeben:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Beachten Sie, dass genau wie Antwortkörper auch Anfrageteile Ströme sind, und die Anfrage den Strom liest, sodass, wenn eine Anfrage einen Körper enthält, Sie ihn nicht zweimal ausführen können:

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

Stattdessen sollten Sie [eine Kopie erstellen](/de/docs/Web/API/Request/clone) der Anfrage, bevor Sie sie senden:

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

Weitere Informationen finden Sie unter [Gesperrte und gestörte Ströme](#gesperrte_und_gestörte_ströme).

### Kopfzeilen festlegen

Anfragekopfzeilen geben dem Server Informationen über die Anfrage: Zum Beispiel teilt die Kopfzeile {{httpheader("Content-Type")}} dem Server das Format des Anfragekörpers mit. Viele Kopfzeilen werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "verbotene Kopfzeilennamen")}} genannt.

Um Anfragenkopfzeilen festzulegen, weisen Sie sie der `headers`-Option zu.

Sie können hier ein Objekt-Literal mit `header-name: header-value`-Eigenschaften übergeben:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt erzeugen, Kopfzeilen zu diesem Objekt mit [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} festlegen.

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

Ob eine Anfrage Cross-Origin durchgeführt werden kann oder nicht, wird durch den Wert der `mode`-Option bestimmt. Dieser kann einen der drei Werte haben: `cors`, `no-cors` oder `same-origin`.

- Standardmäßig ist `mode` auf `cors` gesetzt, was bedeutet, dass, wenn die Anfrage Cross-Origin ist, das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet wird. Dies bedeutet, dass:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit der korrekten {{httpheader("Access-Control-Allow-Origin")}}-Kopfzeile antworten, oder der Browser wird die Antwort nicht mit dem Aufrufer teilen.
  - wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [vorabgeprüfte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests), um zu überprüfen, dass der Server CORS versteht und die Anfrage erlaubt, und die echte Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorabgeprüfte Anfrage mit den entsprechenden CORS-Kopfzeilen.

- Wenn `mode` auf `same-origin` gesetzt ist, sind Cross-Origin-Anfragen vollständig untersagt.

- Wenn `mode` auf `no-cors` gesetzt ist, muss die Anfrage eine einfache Anfrage sein, was die Kopfzeilen einschränkt, die gesetzt werden können, und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.

### Anmeldedaten einbeziehen

Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldedaten sendet oder nicht, sowie ob der Browser irgendwelche **`Set-Cookie`**-Antwortkopfzeilen respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldedaten in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (der Standard): Nur Anmeldedaten für same-origin-Anfragen senden und einbeziehen.
- `include`: Immer Anmeldedaten einbeziehen, auch bei Cross-Origin-Anfragen.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldedaten in Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen, sodass selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er die {{httpheader("Access-Control-Allow-Credentials")}}-Kopfzeile in seine Antwort aufnimmt. Darüber hinaus muss der Server in diesem Fall explizit die Herkunft des Clients in der {{httpheader("Access-Control-Allow-Origin")}}-Antwortkopfzeile angeben (d.h. `*` ist nicht erlaubt).

Dies bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldedaten gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortkopfzeilen setzen, oder der Browser wird einen Netzwerkfehler an den Aufrufer zurückgeben. Falls der Server die korrekten Kopfzeilen gesetzt hat, wird die Antwort, einschließlich Anmeldedaten, an den Aufrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [vorabgeprüfte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldedaten und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortkopfzeilen setzen, oder der Browser wird einen Netzwerkfehler an den Aufrufer zurückgeben. Falls der Server die korrekten Kopfzeilen gesetzt hat, wird der Browser die echte Anfrage nachfolgen, einschließlich Anmeldedaten, und die echte Antwort, einschließlich Anmeldedaten, an den Aufrufer liefern.

### Ein `Request`-Objekt erstellen

Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) akzeptiert dieselben Argumente wie `fetch()` selbst. Das bedeutet, anstatt Optionen an `fetch()` zu übergeben, können Sie dieselben Optionen an den `Request()`-Konstruktor übergeben und dann dieses Objekt an `fetch()` übergeben.

Beispielsweise können wir eine POST-Anfrage durch die Übergabe von Optionen an `fetch()` mit folgendem Code erstellen:

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

Um eine Anforderung abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen Sie dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal`-Eigenschaft der Anforderung zu.

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der `fetch()`-Aufruf wird das Versprechen mit einer `AbortError`-Ausnahme ablehnen.

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

Wenn die Anfrage nach dem `fetch()`-Aufruf abgebrochen wird, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Kopfzeilen vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Versprechen mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Antwortstatus überprüfen

Das von `fetch()` zurückgegebene Versprechen wird bei einigen Fehlern abgelehnt, wie zum Beispiel einem Netzwerkfehler oder einem schlechten Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einem `Response` erfüllt, daher müssen wir den Status überprüfen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Statuscode an, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

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

### Die Antwortart überprüfen

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einen der folgenden Werte haben kann:

- `basic`: Die Anfrage war eine same-origin Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem `no-cors`-Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Redirect-Status](/de/docs/Web/HTTP/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwortkopfzeilen von der Liste der {{Glossary("Forbidden_response_header_name", "verbotenen Antwortkopfzeilennamen")}} aus.

- CORS-Antworten enthalten nur Antwortkopfzeilen aus der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}.

- Opaque-Antworten und opaque redirect-Antworten haben einen `status` von `0`, eine leere Kopfzeilenliste und einen `null`-Körper.

### Kopfzeilen überprüfen

Genau wie bei der Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwortkopfzeilen, die für Skripte freigegeben sind, vorbehaltlich der Ausnahmen, die basierend auf dem Antworttyp gemacht wurden.

Ein häufiges Anwendungsbeispiel hierfür ist das Überprüfen des Inhaltstyps, bevor versucht wird, den Körper zu lesen:

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

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Körperinhalt in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Dies sind alles asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, welches mit dem Körperinhalt erfüllt wird.

In diesem Beispiel holen wir ein Bild und lesen es als [`Blob`](/de/docs/Web/API/Blob), das wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im entsprechenden Format ist: zum Beispiel, wenn `json()` auf einem Antwortkörper aufgerufen wird, der nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Das ist gut für die Speichereffizienz, weil der Browser den gesamten Antwortinhalt nicht im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt inkrementell verarbeiten kann, sobald er empfangen wird.

Betrachten Sie zum Beispiel eine `GET`-Anfrage, die eine große Textdatei abruft und diese auf irgendeine Weise bearbeitet oder dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir irgendeinen Teil davon bearbeiten können.

Wenn wir stattdessen die Antwort streamen, können wir Stücke des Körpers bearbeiten, sobald sie vom Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Strom und verarbeiten jedes Stück, sobald es ankommt.

Beachten Sie, dass wenn Sie direkt auf den Körper zugreifen, Sie die rohen Bytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, welcher die UTF-8-codierten Körperdaten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im unten stehenden Beispiel rufen wir eine Textressource ab und verarbeiten sie Zeile für Zeile, wobei wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Der Einfachheit halber nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fehler beim Abrufen:

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

### Gesperrte und gestörte Ströme

Die Konsequenzen davon, dass Anfrage- und Antwortkörper Ströme sind, sind, dass:

- wenn ein Leser an einen Strom mit `ReadableStream.getReader()` angehängt wurde, dann ist der Strom _gesperrt_ und nichts anderes kann den Strom lesen.
- wenn irgendein Inhalt aus dem Strom gelesen wurde, dann ist der Strom _gestört_ und nichts anderes kann den Strom lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-)Körper mehr als einmal zu lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Caches mit Service Workers](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Daher klont er die Antwort, gibt das Original zurück und speichert den Klon zwischen:

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
