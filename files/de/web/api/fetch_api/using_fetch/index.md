---
title: Verwendung der Fetch-API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zur Durchführung von HTTP-Anfragen und Verarbeitung der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): im Gegensatz zu `XMLHttpRequest`, das Rückrufe verwendet, basiert Fetch auf Promises und ist in moderne Web-Features integriert, wie [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Mit der Fetch-API führen Sie eine Anfrage durch, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, was sowohl in den [`window`](/de/docs/Web/API/Window)- als auch [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontexten als globale Funktion verfügbar ist. Sie übergeben ihr ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String, der die zu holende URL enthält, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Antwort des Servers darstellt. Sie können dann den Anfragestatus überprüfen und den Inhalt der Antwort in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Die Funktion `fetch()` wird das Promise bei einigen Fehlern zurückweisen, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen einen Fehler, wenn er nicht OK ist.

Andernfalls holen wir den Antwortinhalt als {{Glossary("JSON", "JSON")}}, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass `json()` genauso wie `fetch()` selbst asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Antwortinhalt.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die abgerufen werden soll. Dies kann eines der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt sehen wir uns einige der am häufigsten verwendeten Optionen an. Um alle Optionen zu lesen, die angegeben werden können, sehen Sie die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig macht `fetch()` eine {{httpmethod("GET")}}-Anfrage, aber Sie können die Option `method` verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die Option `mode` auf `no-cors` gesetzt ist, muss `method` `GET`, `POST` oder `HEAD` sein.

### Einen Body festlegen

Der Anfragbody ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Body mit `GET`-Anfragen einfügen, aber er ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage machen und die Datei als Anfragbody einfügen.

Um einen Anfragbody festzulegen, übergeben Sie ihn als Option `body`:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
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

Andere Objekte werden mit ihrer `toString()`-Methode in Strings umgewandelt. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Kopfzeilen festlegen](#kopfzeilen_festlegen) für mehr Informationen):

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

Beachten Sie, dass genauso wie Antwortbodies, Anfragbodies Streams sind, und die Anfrage zu machen, den Stream liest. Wenn eine Anfrage einen Body enthält, können Sie sie nicht zweimal senden:

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

Stattdessen müssen Sie [einen Klon erstellen](/de/docs/Web/API/Request/clone) der Anfrage, bevor Sie sie senden:

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

Mehr Informationen finden Sie unter [Gesperrte und beeinträchtigte Streams](#gesperrte_und_beeinträchtigte_streams).

### Kopfzeilen festlegen

Anfragekopfzeilen geben dem Server Informationen über die Anfrage: Zum Beispiel sagt in einer `POST`-Anfrage der {{httpheader("Content-Type")}}-Header dem Server das Format des Anfrabodys.

Um Anfragekopfzeilen festzulegen, weisen Sie sie der Option `headers` zu.

Sie können hier ein Objektliteral mit `header-name: header-value`-Eigenschaften übergeben:

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, Kopfzeilen zu diesem Objekt mittels [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der Option `headers` zuweisen:

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

Im Vergleich zur Verwendung von einfachen Objekten bietet das `Headers`-Objekt einige zusätzliche Eingabesicherungen. Zum Beispiel normalisiert es Header-Namen zu Kleinbuchstaben, entfernt führende und abschließende Leerzeichen aus Header-Werten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden vom Browser automatisch gesetzt und können nicht von einem Skript gesetzt werden: Diese nennt man {{Glossary("Forbidden_request_header", "Verbotene Anfrageheader")}}. Wenn die Option [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt ist, wird die Menge der erlaubten Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Body, aber Sie können dennoch Daten durch Anhängen an die URL als Query-String an den Server senden. Dies ist eine gängige Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und diese dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Abfragen ausführen

Ob eine Anfrage Cross-Origin gemacht werden kann oder nicht, wird durch den Wert der Option [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) bestimmt. Diese kann einen von drei Werten haben: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass wenn die Anfrage Cross-Origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) Mechanismus verwenden wird. Das bedeutet:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, dann wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, oder der Browser wird die Antwort nicht mit dem Aufrufer teilen.
  - wenn die Anfrage keine einfache Anfrage ist, dann wird der Browser eine [vorabgeprüfte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) senden, um zu überprüfen, ob der Server CORS versteht und die Anfrage erlaubt, und die eigentliche Anfrage wird erst gesendet, wenn der Server auf die vorabgeprüfte Anfrage mit den entsprechenden CORS-Headern antwortet.

- Wenn `mode` auf `same-origin` gesetzt ist, sind Cross-Origin-Anfragen vollständig untersagt.

- Wenn `mode` auf `no-cors` gesetzt ist, wird CORS für Cross-Origin-Anfragen deaktiviert. Dies schränkt die Header ein, die gesetzt werden dürfen, und beschränkt die Methoden auf GET, HEAD und POST. Die Antwort ist _opak_, was bedeutet, dass ihre Header und der Body für JavaScript nicht verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung dafür ist für bestimmte Service-Worker-Anwendungsfälle.

Siehe die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Einschließen von Anmeldeinformationen

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht sowie ob der Browser gesetzte **`Set-Cookie`**-Header respektiert, setzen Sie die Option `credentials`, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder in die Antwort aufnehmen.
- `same-origin` (der Standard): Anmeldeinformationen nur für Same-Origin-Anfragen senden und aufnehmen.
- `include`: Anmeldeinformationen immer einschließen, auch bei Cross-Origin.

Beachten Sie, dass wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einschließen von Anmeldeinformationen bei Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Daher muss, auch wenn `credentials` auf `include` gesetzt ist, der Server ihrer Aufnahme zustimmen, indem der {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort enthalten ist. Außerdem muss der Server in dieser Situation explizit den Origin des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header angeben (d.h. `*` ist nicht erlaubt).

Das bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header setzen, oder der Browser wird einen Netzwerkfehler an den Aufrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird die Antwort, einschließlich Anmeldeinformationen, an den Aufrufer übermittelt.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorabgeprüfte Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header setzen, oder der Browser wird einen Netzwerkfehler an den Aufrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird der Browser mit der eigentlichen Anfrage, einschließlich Anmeldeinformationen, fortfahren und die eigentliche Antwort, einschließlich Anmeldeinformationen, an den Aufrufer übermitteln.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt die gleichen Argumente an wie `fetch()` selbst. Das bedeutet, dass Sie anstelle das Übergeben von Optionen an `fetch()`, die gleichen Optionen an den `Request()`-Konstruktor übergeben und dann das Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine POST-Anfrage machen, indem wir Optionen mittels Code wie diesem an `fetch()` übergeben:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten das jedoch umschreiben, um die gleichen Argumente an den `Request()`-Konstruktor zu übergeben:

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

Das bedeutet auch, dass Sie eine Anfrage von einer anderen Anfrage erstellen können, während Sie einige ihrer Eigenschaften mittels des zweiten Arguments ändern:

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

Wenn die Anfrage nach dem Erfüllen des `fetch()`-Aufrufs abgebrochen wird, jedoch bevor der Antwortbody gelesen wurde, wird der Versuch, den Antwortbody zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise bevor der Antwortbody selbst eingegangen ist), wird das Promise, das von `fetch()` zurückgegeben wird, mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Antwortstatus überprüfen

Das Promise, das von `fetch()` zurückgegeben wird, wird bei einigen Fehlern, wie z.B. einem Netzwerkfehler oder einem schlechten Schema, abgelehnt. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, dann erfüllt `fetch()` mit einer `Response`, sodass wir den Status überprüfen müssen, bevor wir den Antwortbody lesen können.

Die Eigenschaft [`Response.status`](/de/docs/Web/API/Response/status) gibt uns den numerischen Status-Code an und die Eigenschaft [`Response.ok`](/de/docs/Web/API/Response/ok) gibt `true` zurück, wenn der Status im [200er-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

Ein häufiges Muster ist es, den Wert von `ok` zu überprüfen und einen Fehler zu werfen, falls es `false` ist:

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

### Antworttyp überprüfen

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einer der folgenden sein kann:

- `basic`: Die Anfrage war eine Same-Origin-Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem `no-cors`-Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage setzte die `redirect`-Option auf `manual`, und der Server gab einen [Weiterleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) zurück.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwortheader aus der Liste {{Glossary("Forbidden_response_header_name", "Verbotene Antwortheader-Namen")}} aus.

- CORS-Antworten beinhalten nur Antwortheader aus der Liste {{Glossary("CORS-safelisted_response_header", "CORS-safeliste Antwortheader")}}.

- Opaque-Antworten und opaque Weiterleitungsantworten haben einen `status` von `0`, eine leere Headerliste und einen `null`-Body.

### Header überprüfen

Genauso wie die Anfrage hat auch die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist und das enthält alle Antwortheader, die an Skripts offengelegt sind, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp vorgenommen wurden.

Ein häufiger Anwendungsfall hierfür ist es, den Inhaltstyp zu überprüfen, bevor versucht wird, den Body zu lesen:

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

### Antwortbody lesen

Das `Response`-Interface bietet eine Reihe von Methoden, um den gesamten Body-Inhalt in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Body-Inhalt erfüllt wird.

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortbody nicht im passenden Format vorliegt: zum Beispiel, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortbody streamen

Anfrage- und Antwortbodys sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser nicht den gesamten Antwortinhalt im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt schrittweise verarbeiten kann, sobald er empfangen wird.

Betrachten Sie zum Beispiel eine `GET`-Anfrage, die eine große Textdatei abruft und auf bestimmte Weise verarbeitet oder dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) wie oben verwenden, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir irgendeinen Teil davon verarbeiten können.

Wenn wir stattdessen die Antwort streamen, können wir Teile des Bodys verarbeiten, sobald sie aus dem Netzwerk empfangen werden:

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

Beachten Sie, dass Sie, wenn Sie den Body direkt wie oben beschrieben abrufen, die rohen Bytes der Antwort bekommen und ihn selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Bodydaten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel rufen wir eine Textressource ab und verarbeiten sie zeilenweise, indem wir einen regulären Ausdruck verwenden, um nach Zeilenumbrüchen zu suchen. Zur Vereinfachung nehmen wir an, dass der Text UTF-8 ist und behandeln keine Fehler beim Abrufen:

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

### Gesperrte und beeinträchtigte Streams

Die Konsequenzen, dass Anfragen und Antwortbodies Streams sind, sind:

- Wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, ist der Stream _gesperrt_, und nichts anderes kann den Stream lesen.
- Wenn irgendein Inhalt vom Stream gelesen wurde, ist der Stream _beeinträchtigt_, und nichts anderes kann vom Stream lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-)Body mehrmals zu lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Cache mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. So klont er die Antwort, gibt das Original zurück und cacht den Klon:

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

- [Service-Worker-API](/de/docs/Web/API/Service_Worker_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [CORS](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
- [Fetch-Beispiele auf GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
