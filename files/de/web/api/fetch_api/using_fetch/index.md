---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle, um HTTP-Anfragen zu stellen und die Antworten zu verarbeiten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Rückruffunktionen verwendet, basiert Fetch auf Promises und ist mit modernen Web-Features wie [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API stellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, welche als globale Funktion sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext verfügbar ist. Sie übergeben ihr ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String mit der zu ladenden URL sowie ein optionales Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Antwort des Servers repräsentiert. Sie können dann den Anfragestatus überprüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Die Funktion `fetch()` wird bei einigen Fehlern das Promise verwerfen, jedoch nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn dieser nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}}, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) von `Response` aufrufen und einen ihrer Werte protokollieren. Beachten Sie, dass `json()`, genauso wie `fetch()` selbst, asynchron ist, ebenso wie alle anderen Methoden, um auf den Inhalt des Antwortkörpers zuzugreifen.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses detaillierter betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann eine der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "Stringifier")}} besitzt, der einen String mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt betrachten wir einige der am häufigsten verwendeten Optionen. Um mehr über alle möglichen Optionen zu lesen, sehen Sie auf der Referenzseite von [`fetch()`](/de/docs/Web/API/Window/fetch) nach.

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, muss `method` `GET`, `POST` oder `HEAD` sein.

### Einen Anfragekörper festlegen

Der Anfragekörper ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einfügen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Zum Beispiel, wenn Sie eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragekörper einfügen.

Um einen Anfragekörper festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Sie können den Körper als Instanz einer der folgenden Typen angeben:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden durch ihre `toString()`-Methode in Strings konvertiert. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Header setzen](#header_festlegen) für mehr Informationen):

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

Beachten Sie, dass wie bei Antwortkörpern auch Anfragkörper Streams sind, und das Stellen der Anfrage den Stream liest, so dass eine Anfrage mit einem Körper nicht zweimal gemacht werden kann:

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

Stattdessen müssten Sie [einen Klon erstellen](/de/docs/Web/API/Request/clone) der Anfrage, bevor sie gesendet wird:

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

Anfrageheader geben dem Server Informationen über die Anfrage: Beispielsweise sagt der {{httpheader("Content-Type")}}-Header bei einer `POST`-Anfrage dem Server, in welchem Format der Körper der Anfrage vorliegt.

Um Anfrageheader festzulegen, weisen Sie sie der `headers`-Option zu.

Sie können hier ein Objektliteral übergeben, das `header-name: header-value`-Eigenschaften enthält:

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, dem Objekt Header mit [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und das `Headers`-Objekt dann der `headers`-Option zuweisen:

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

Im Vergleich zur Verwendung einfacher Objekte bietet das `Headers`-Objekt zusätzliche Eingabesanitierung. Beispielsweise normalisiert es Header-Namen in Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen aus Header-Werten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "verbotene Anfrageheader")}} genannt. Wenn die [`mode`](/de/docs/Web/API/Request/mode)-Option auf `no-cors` gesetzt ist, wird das Set der erlaubten Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können dennoch Daten an den Server senden, indem Sie diese als Query-String an die URL anhängen. Dies ist eine übliche Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und sie dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen durchführen

Ob eine Anfrage über Ursprung hinweg gemacht werden kann oder nicht, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option bestimmt. Diese kann einen der drei Werte `cors`, `same-origin` oder `no-cors` annehmen.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass, wenn die Anfrage über Ursprung hinweg ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwendet. Das bedeutet, dass:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, andernfalls wird der Browser die Antwort nicht mit dem Anrufer teilen.
  - wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorabgefragte Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) senden, um zu überprüfen, ob der Server CORS versteht und die Anfrage erlaubt, und die tatsächliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorabgefragte Anfrage mit den entsprechenden CORS-Headern.

- Das Setzen von `mode` auf `same-origin` untersagt vollständig über Ursprung hinweggehende Anfragen.

- Das Setzen von `mode` auf `no-cors` deaktiviert CORS für über Ursprung hinweggehende Anfragen. Dies beschränkt die setzbaren Header und beschränkt die Methoden auf GET, HEAD und POST. Die Antwort ist _opak_, was bedeutet, dass ihre Header und der Körper für JavaScript nicht verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung liegt in bestimmten Service-Worker-Anwendungsfällen.

Sehen Sie die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Mit Anmeldeinformationen arbeiten

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser auf **`Set-Cookie`**-Antwortheader achtet, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einschließen.
- `same-origin` (Standard): Nur Anmeldeinformationen für gleich ursprungsbezogene Anfragen senden und einschließen.
- `include`: Immer Anmeldeinformationen einschließen, auch über Ursprung hinweg.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht über Sites hinweg gesendet wird, auch wenn `credentials` auf `include` gesetzt ist.

Das Einschließen von Anmeldeinformationen in Anfragen über Ursprung hinweg kann eine Site anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen, daher muss der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch ihrer Aufnahme zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einfügt. Zusätzlich muss in diesem Fall der Server explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (das heißt, `*` ist nicht erlaubt).

Dies bedeutet, dass, wenn `credentials` auf `include` gesetzt ist und die Anfrage über Ursprung hinweggeht:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser gibt einen Netzwerkfehler an den Anrufer zurück. Wenn der Server die korrekten Header setzt, wird die Antwort, einschließlich der Anmeldeinformationen, dem Anrufer zugestellt.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorabgefragte Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser gibt einen Netzwerkfehler an den Anrufer zurück. Wenn der Server die korrekten Header setzt, wird der Browser mit der tatsächlichen Anfrage fortfahren, einschließlich der Anmeldeinformationen, und wird die tatsächliche Antwort, einschließlich der Anmeldeinformationen, dem Anrufer zustellen.

### Ein `Request`-Objekt erstellen

Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) nimmt dieselben Argumente wie `fetch()` selbst. Das bedeutet, dass anstatt Optionen an `fetch()` zu übergeben, können Sie dieselben Optionen dem `Request()`-Konstruktor übergeben und dann dieses Objekt an `fetch()` übergeben.

Zum Beispiel können wir eine POST-Anfrage stellen, indem wir Optionen an `fetch()` mit folgendem Code übergeben:

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

Um die Anfrage abzubrechen, rufen Sie die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des Controllers auf. Der `fetch()`-Aufruf wird das Promise mit einer `AbortError`-Ausnahme verwerfen.

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

Wenn die Anfrage abgebrochen wird, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, dann wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und potenziell bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Überprüfen des Antwortstatus

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern, wie einem Netzwerkfehler oder einem schlechten Schema, abgelehnt. Wenn jedoch der Server mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, daher müssen wir den Status überprüfen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Statuscode an, und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein gebräuchliches Muster ist, den Wert von `ok` zu überprüfen und eine Ausnahme zu werfen, wenn er `false` ist:

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

### Überprüfen des Antworttyps

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einer der folgenden sein kann:

- `basic`: Die Anfrage war eine gleiche Ursprungsanfrage.
- `cors`: Die Anfrage war eine über Ursprung hinausgehende CORS-Anfrage.
- `opaque`: Die Anfrage war eine über Ursprung hinausragende einfache Anfrage, die im `no-cors`-Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage setzte die `redirect`-Option auf `manual`, und der Server gab einen [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurück.

Der Typ bestimmt den möglichen Inhalt der Antwort wie folgt:

- Basic-Antworten schließen Antwortheader aus der Liste {{Glossary("Forbidden_response_header_name", "verbotene Antwortheadernamen")}} aus.

- CORS-Antworten enthalten nur Antwortheader aus der {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsfreigegebenen Antwortheader")}}-Liste.

- Opake Antworten und opake Umleitungsantworten haben einen `status` von `0`, eine leere Liste von Headern und einen `null`-Körper.

### Überprüfen von Headern

Genau wie die Anfrage verfügt auch die Antwort über eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, das ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dies enthält alle Antwortheader, die Skripten zur Verfügung stehen, unter Berücksichtigung der Ausschlüsse basierend auf dem Antworttyp.

Ein häufiger Anwendungsfall hierfür ist, den Inhaltstyp zu überprüfen, bevor versucht wird, den Körper zu lesen:

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

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Inhalt des Körpers in einer Vielzahl unterschiedlicher Formate abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Dies sind alles asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Körperinhalt erfüllt wird.

In diesem Beispiel laden wir ein Bild und lesen es als [`Blob`](/de/docs/Web/API/Blob), das wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: beispielsweise, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser den gesamten Antwortinhalt nicht vollständig im Speicher puffern muss, bevor es vom Anrufer mit einer Methode wie `json()` abgerufen wird.

Das bedeutet auch, dass der Anrufer den Inhalt schrittweise während des Empfangs verarbeiten kann.

Zum Beispiel, betrachten Sie eine `GET`-Anfrage, die eine große Textdatei lädt und auf irgendeine Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir irgendetwas davon verarbeiten können.

Wenn wir stattdessen die Antwort streamen, können wir Teile des Körpers verarbeiten, während sie vom Netzwerk empfangen werden:

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

Beachten Sie, dass wenn Sie den Körper direkt so zugreifen, erhalten Sie die rohen Bytes der Antwort und müssen sie selbst transformieren. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-codierten Körpers als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel laden wir eine Textressource und verarbeiten sie zeilenweise, indem wir mit einem regulären Ausdruck nach Zeilenumbrüchen suchen. Zur Vereinfachung nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fehler bei Fetch:

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

Die Konsequenzen von Anfragen- und Antwortkörpern als Streams sind, dass:

- Wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, ist der Stream _gesperrt_, und nichts anderes kann den Stream lesen.
- Wenn ein beliebiger Inhalt aus dem Stream gelesen wurde, ist der Stream _gestört_, und nichts anderes kann aus dem Stream lesen.

Das bedeutet, dass es nicht möglich ist, den gleichen Antwort- (oder Anfrage-)Körper mehrmals zu lesen:

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

    const json1 = await response1.json();
    const json2 = await response2.json();
  } catch (error) {
    console.error(error.message);
  }
}
```

Dies ist ein übliches Muster beim [Implementieren eines Offline-Caches mit Service-Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, sie aber auch cachen. Also klont er die Antwort, gibt das Original zurück und speichert den Klon:

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
