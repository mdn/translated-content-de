---
title: Die Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 667c1884597a2b576a5b51e0129f3c27a532cff6
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle für das Erstellen von HTTP-Anfragen und das Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): im Gegensatz zu `XMLHttpRequest`, das Rückruffunktionen verwendet, ist Fetch auf `Promise`-Basis aufgebaut und integriert in moderne Webfeatures wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Mit der Fetch API führen Sie eine Anfrage durch Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) durch, welches als globale Funktion sowohl im {{domxref("Window", "window", "", "", "nocode")}} als auch im {{domxref("WorkerGlobalScope", "worker", "", "", "nocode")}} Kontext verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String mit der zu holenden URL, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die `fetch()`-Funktion gibt ein {{jsxref("Promise")}} zurück, welches mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Antwort des Servers darstellt. Danach können Sie den Status der Anfrage prüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Wir deklarieren einen String, der die URL enthält, und rufen dann `fetch()` auf, wobei die URL ohne zusätzliche Optionen übergeben wird.

Die `fetch()`-Funktion wird bei einigen Fehlern das Promise ablehnen, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: deshalb prüfen wir auch den Antwortstatus und lösen einen Fehler aus, wenn er nicht erfolgreich ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als [JSON](/de/docs/Glossary/JSON) ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Methode von `Response` aufrufen und protokollieren einen seiner Werte. Beachten Sie, dass `json()`, wie `fetch()` selbst, asynchron ist, ebenso wie alle anderen Methoden zum Zugreifen auf den Antwortkörperinhalt.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann eines der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), die einen [Stringifier](/de/docs/Glossary/stringifier) hat, der einen String mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional ein Objekt mit Konfigurationsoptionen für die Anfrage.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um alle Optionen zu lesen, die angegeben werden können, siehe die Referenzseite [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage durch, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` eine von `GET`, `POST` oder `HEAD` sein.

### Ein Body festlegen

Der Anfragkörper ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Body bei `GET`-Anfragen einfügen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie z.B. {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie z.B. eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage machen und die Datei als Anfragkörper einfügen.

Um einen Anfragkörper festzulegen, geben Sie ihn als Option `body` an:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Body als Instanz eines der folgenden Typen angeben:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Beachten Sie, dass ebenso wie bei Antwortkörpern, Anfragkörper Ströme sind, und das Erstellen der Anfrage liest den Strom, sodass wenn eine Anfrage einen Body enthält, Sie diese nicht zweimal stellen können:

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

Stattdessen müssten Sie [eine Kopie erstellen](/de/docs/Web/API/Request/clone) der Anfrage, bevor Sie sie senden:

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

Siehe [Gesperrte und gestörte Ströme](#gesperrte_und_gestörte_streams) für weitere Informationen.

### Header festlegen

Anfrageheader liefern dem Server Informationen über die Anfrage: z.B. sagt der {{httpheader("Content-Type")}}-Header dem Server das Format des Anfragkörpers. Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: diese werden [verbotene Headernamen](/de/docs/Glossary/Forbidden_header_name) genannt.

Um Anfrageheader festzulegen, weisen Sie sie der Option `headers` zu.

Sie können hier ein Objektliteral übergeben, das `header-name: header-value`-Eigenschaften enthält:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt erstellen, Header zu diesem Objekt hinzufügen, indem Sie [`Headers.append()`](/de/docs/Web/API/Headers/append) verwenden, und dann das `Headers`-Objekt der `headers`-Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, können Sie nur [CORS-sicher gelistete Anfrageheader](/de/docs/Glossary/CORS-safelisted_request_header) setzen.

### POST-Anfragen durchführen

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

Ob eine Anfrage cross-origin erfolgen kann oder nicht, wird durch den Wert der `mode`-Option bestimmt. Diese kann einen der drei Werte annehmen: `cors`, `no-cors` oder `same-origin`.

- Standardmäßig ist der `mode` auf `cors` gesetzt, was bedeutet, dass, wenn die Anfrage cross-origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet. Das bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, oder der Browser wird die Antwort nicht mit dem Aufrufer teilen.
  - Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorgelagerte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) senden, um zu prüfen, ob der Server CORS versteht und die Anfrage zulässt, und die echte Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorgelagerte Anfrage mit den entsprechenden CORS-Headern.

- Wenn `mode` auf `same-origin` gesetzt ist, sind Cross-Origin-Anfragen vollständig verboten.

- Wenn `mode` auf `no-cors` gesetzt ist, muss die Anfrage eine einfache Anfrage sein, was die einzustellenden Header einschränkt und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.

### Einbeziehung von Anmeldeinformationen

Anmeldeinformationen sind Cookies, [TLS](/de/docs/Glossary/TLS)-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet und ob der Browser **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die Option `credentials`, die einen der folgenden drei Werte haben kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder Anmeldeinformationen in der Antwort einbeziehen.
- `same-origin` (Standard): Anmeldeinformationen nur für gleichstammige Anfragen senden und einbeziehen.
- `include`: Immer Anmeldeinformationen einbeziehen, auch bei Cross-Origin.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht sitzneutral gesendet wird, auch wenn `credentials` auf `include` gesetzt ist.

Die Einbeziehung von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website anfällig für [CSRF](/de/docs/Glossary/CSRF)-Angriffe machen, daher muss, selbst wenn `credentials` auf `include` gesetzt ist, der Server auch deren Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einfügt. Darüber hinaus muss der Server explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (d.h. `*` ist nicht erlaubt).

Das bedeutet, wenn `credentials` auf `include` gesetzt ist und die Anfrage cross-origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser gibt dem Aufrufer einen Netzwerkfehler zurück. Wenn der Server die richtigen Header setzt, wird die Antwort, einschließlich der Anmeldeinformationen, an den Aufrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorgelagerte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser gibt dem Aufrufer einen Netzwerkfehler zurück. Wenn der Server die richtigen Header setzt, wird der Browser mit der echten Anfrage, einschließlich der Anmeldeinformationen, folgen und die echte Antwort, einschließlich der Anmeldeinformationen, an den Aufrufer liefern.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt dieselben Argumente wie `fetch()` selbst. Das bedeutet, dass anstelle von Optionen direkt bei `fetch()` Sie dieselben Optionen an den `Request()`-Konstruktor übergeben können und dann dieses Objekt an `fetch()` übergeben.

Beispielsweise können wir eine POST-Anfrage stellen, indem wir Optionen in `fetch()` mit einem Code wie diesem übergeben:

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

Wenn die Anfrage abgebrochen wird, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, wird das Versuchen, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst empfangen wurde), wird das Promise, das von `fetch()` zurückgegeben wird, mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Überprüfen des Antwortstatus

Das Promise, das von `fetch()` zurückgegeben wird, wird bei einigen Fehlern abgelehnt, wie z.B. einem Netzwerkfehler oder einem fehlerhaften Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, dann wird `fetch()` mit einem `Response` erfüllt, sodass wir den Status überprüfen müssen, bevor wir den Antwortkörper lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status)-Eigenschaft gibt uns den numerischen Statuscode an und die [`Response.ok`](/de/docs/Web/API/Response/ok)-Eigenschaft gibt `true` zurück, wenn der Status im [200 Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

Ein übliches Muster ist es, den Wert von `ok` zu überprüfen und einen Fehler auszulösen, wenn er `false` ist:

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

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einen der folgenden Werte haben kann:

- `basic`: die Anfrage war eine gleichstammige Anfrage.
- `cors`: die Anfrage war eine Cross-Origin CORS-Anfrage.
- `opaque`: die Anfrage war eine Cross-Origin einfache Anfrage, die mit dem Modus `no-cors` gemacht wurde.
- `opaqueredirect`: die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort, wie folgt:

- Grundlegende Antworten schließen Antwortheader von der Liste [verbotene Antwortheadernamen](/de/docs/Glossary/Forbidden_response_header_name) aus.

- CORS-Antworten beinhalten nur Antwortheader von der Liste [CORS-sicher gelistete Antwortheader](/de/docs/Glossary/CORS-safelisted_response_header).

- Opaque-Antworten und opake Umleitung Antworten haben einen `status` von `0`, eine leere Headerliste und einen `null`-Körper.

### Header überprüfen

Genau wie bei der Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dies enthält alle Antwortheader, die Skripten zugänglich gemacht werden, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp gemacht wurden.

Ein häufiges Anwendungsfall ist es, den Inhaltstyp zu überprüfen, bevor versucht wird, den Körper zu lesen:

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

Die `Response`-Schnittstelle bietet eine Reihe von Methoden, um den gesamten Inhalt des Körpers in verschiedenen Formaten zu erhalten:

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

Die Methode wirft eine Ausnahme aus, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: zum Beispiel, wenn Sie `json()` auf einem Antwortbody aufrufen, der nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser nicht den gesamten Antwortinhalt im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt inkrementell verarbeiten kann, während dieser empfangen wird.

Zum Beispiel, betrachten Sie eine `GET`-Anfrage, die eine große Textdatei abruft und sie auf irgendeine Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir die Antwort stattdessen streamen, können wir Stücke des Körpers verarbeiten, sobald sie aus dem Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jedes Stück, wie es ankommt.

Beachten Sie, dass wenn Sie direkt auf den Körper wie diesen zugreifen, Sie die rohen Bytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körperdaten als Text decodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel rufen wir eine Textressource ab und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Der Einfachheit halber nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fehler bei fetch:

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

Die Konsequenzen daraus, dass Anfrage- und Antwortkörper Streams sind, sind, dass:

- wenn ein Leser über `ReadableStream.getReader()` an einen Stream angehängt wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- wenn jeglicher Inhalt vom Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann von dem Stream lesen.

Dies bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-)körper mehrmals zu lesen:

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

Falls Sie den Körper mehrmals lesen müssen, müssen Sie [`Response.clone()`](/de/docs/Web/API/Response/clone) aufrufen, bevor Sie den Körper lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Cache mit Service Workers](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Also klont es die Antwort, gibt das Original zurück und zwischenspeichert die Kopie:

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
