---
title: Verwenden der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: e1bf8952b600e20ec7334ff261e2b9d86ac90d52
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle, um HTTP-Anfragen zu stellen und die Antworten zu verarbeiten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Rückrufe verwendet, basiert Fetch auf Promises und ist in moderne Webfunktionen wie [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) integriert.

Mit der Fetch API stellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, die sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext als globale Funktion verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String, der die zu holende URL enthält, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Serverantwort darstellt. Sie können dann den Anfragestatus überprüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten extrahieren, einschließlich Text und JSON, indem Sie die entsprechende Methode für die Antwort aufrufen.

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

Die Funktion `fetch()` wird das Promise bei einigen Fehlern ablehnen, aber nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Response-Status und werfen einen Fehler, wenn er nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}}, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Methode von `Response` aufrufen und ein oder mehrere seiner Werte protokollieren. Beachten Sie, dass `json()` wie `fetch()` selbst asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Inhalts des Antwortkörpers.

Im weiteren Verlauf dieser Seite werden wir uns die verschiedenen Phasen dieses Prozesses genauer ansehen.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann eines der folgenden sein:
   - ein String mit der URL
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional, ein Objekt, das Optionen zur Konfiguration der Anfrage enthält.

In diesem Abschnitt werden wir uns einige der am häufigsten verwendeten Optionen ansehen. Um alle Optionen zu lesen, die angegeben werden können, besuchen Sie die [`fetch()`](/de/docs/Web/API/Window/fetch) Referenzseite.

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, Sie können jedoch die Option `method` verwenden, um eine andere [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, muss `method` eine der Optionen `GET`, `POST` oder `HEAD` sein.

### Einen Anfragekörper festlegen

Der Anfragekörper ist die Nutzlast der Anfrage: es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einschließen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie z.B. {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei auf den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragekörper einfügen.

Um einen Anfragekörper festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Sie können den Körper als Instanz eines beliebigen der folgenden Typen bereitstellen:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden mithilfe ihrer `toString()`-Methode in Strings umgewandelt. Beispielsweise können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Header festlegen](#header_festlegen) für weitere Informationen):

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

Beachten Sie, dass Anfrageressourcen wie Antwortkörper Streams sind und das Stellen der Anfrage den Stream liest, was bedeutet, dass, wenn eine Anfrage einen Körper enthält, Sie ihn nicht zweimal stellen können:

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

Stattdessen müssten Sie vor dem Senden [einen Klon erstellen](/de/docs/Web/API/Request/clone) der Anfrage:

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

Anfrage-Header geben dem Server Informationen über die Anfrage: zum Beispiel teilt der {{httpheader("Content-Type")}}-Header bei einer `POST`-Anfrage dem Server das Format des Anfragekörpers mit.

Um Anfrage-Header festzulegen, weisen Sie diese der `headers`-Option zu.

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, Header zu diesem Objekt mithilfe von [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

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

Im Vergleich zur Verwendung einfacher Objekte bietet das `Headers`-Objekt eine zusätzliche Eingabesäuberung. Es normalisiert beispielsweise Header-Namen zu Kleinbuchstaben, entfernt führende und abschließende Leerzeichen von Header-Werten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch durch den Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_request_header", "Verbotene Anfrage-Header")}} genannt. Wenn die [`mode`](/de/docs/Web/API/Request/mode)-Option auf `no-cors` gesetzt ist, wird die Menge der erlaubten Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können dennoch Daten an den Server senden, indem Sie sie der URL als Abfragezeichenfolge anhängen. Dies ist eine häufige Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und sie dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin Anfragen stellen

Ob eine Anfrage cross-origin gestellt werden kann, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option bestimmt. Diese kann einen der drei Werte annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert für `mode` `cors`, was bedeutet, dass, wenn die Anfrage cross-origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwendet. Das bedeutet:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem korrekten {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, oder der Browser wird die Antwort nicht mit dem Absender teilen.
  - wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [preflighted Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) senden, um zu überprüfen, ob der Server CORS versteht und die Anfrage zulässt. Die eigentliche Anfrage wird erst gesendet, wenn der Server auf die preflighted Anfrage mit den entsprechenden CORS-Headern antwortet.

- Wenn `mode` auf `same-origin` gesetzt ist, werden Cross-Origin Anfragen vollständig verboten.

- Wenn `mode` auf `no-cors` gesetzt wird, wird CORS für Cross-Origin Anfragen deaktiviert. Dies schränkt die Header ein, die gesetzt werden können, und beschränkt Methoden auf GET, HEAD und POST. Die Antwort ist _opaquep_, was bedeutet, dass ihre Header und der Körper für JavaScript nicht verfügbar sind. Meistens sollte eine Website nicht `no-cors` verwenden: Die Hauptanwendung dafür ist für bestimmte Service Worker Anwendungsfälle.

Lesen Sie die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Anmeldeinformationen einschließen

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin` (der Standard): Nur für same-origin Anfragen Anmeldeinformationen senden und einschließen.
- `include`: Immer Anmeldeinformationen, auch Cross-Origin, einbeziehen.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Anmeldeinformationen in Cross-Origin Anfragen einzuschließen, kann eine Seite anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen. Selbst wenn `credentials` auf `include` gesetzt ist, muss der Server auch ihrer Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einfügt. Zusätzlich muss der Server in diesem Fall explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader angeben (d.h. `*` ist nicht erlaubt).

Das bedeutet, dass, wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird einen Netzfehler an den Anrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird die Antwort, einschließlich Anmeldeinformationen, an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine präliminäre Anfrage ohne Anmeldeinformationen, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, oder der Browser wird einen Netzfehler an den Anrufer zurückgeben. Wenn der Server die korrekten Header setzt, wird der Browser mit der eigentlichen Anfrage fortfahren, einschließlich Anmeldeinformationen, und die eigentliche Antwort, einschließlich Anmeldeinformationen, an den Anrufer liefern.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst an. Das bedeutet, dass Sie, anstatt Optionen an `fetch()` zu übergeben, die gleichen Optionen an den `Request()`-Konstruktor übergeben können und dann dieses Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine `POST`-Anfrage stellen, indem wir Optionen an `fetch()` übergeben, wie in diesem Code:

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

Das bedeutet auch, dass Sie eine Anfrage von einer anderen Anfrage erstellen können, während Sie einige ihrer Eigenschaften mithilfe des zweiten Arguments ändern:

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

Wenn die Anfrage abgebrochen wird, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sobald der Browser den Status und die Header der Antwort vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Antwortstatus prüfen

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern abgelehnt, wie z.B. einem Netzwerkfehler oder einem schlechten Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, wird `fetch()` mit einer `Response` erfüllt, und wir müssen den Status prüfen, bevor wir den Antwortkörper lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status)-Eigenschaft gibt uns den numerischen Statuscode an, und die [`Response.ok`](/de/docs/Web/API/Response/ok)-Eigenschaft gibt `true` zurück, wenn der Status im [200er-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

Ein häufiges Muster besteht darin, den Wert von `ok` zu überprüfen und einen Fehler zu werfen, wenn er `false` ist:

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

### Antworttyp prüfen

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einen der folgenden Werte annehmen kann:

- `basic`: Die Anfrage war eine Same-Origin-Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem `no-cors`-Modus ausgeführt wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt die möglichen Inhalte der Antwort wie folgt:

- Basisantworten schließen Antwortheader von der {{Glossary("Forbidden_response_header_name", "Verbotene Antwort-Header-Name")}} Liste aus.

- CORS-Antworten enthalten nur Antwortheader von der {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response Header")}} Liste.

- Opaque-Antworten und opaqueredirect-Antworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Körper.

### Header prüfen

Genauso wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dieses enthält alle Antwortheader, die für Skripte zugänglich sind, abhängig von den Ausschlüssen basierend auf dem Antworttyp.

Ein häufig verwendeter Anwendungsfall dafür ist das Überprüfen des Content-Types, bevor versucht wird, den Körper zu lesen:

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

Das `Response` Interface bietet verschiedene Methoden, um den gesamten Inhalt des Körpers in verschiedenen Formaten abzurufen:

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

Die Methode wirft eine Ausnahme, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: Wenn Sie beispielsweise `json()` aufrufen, bei einer Antwort, die nicht als JSON analysiert werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind eigentlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser nicht den gesamten Antwortinhalt im Speicher puffern muss, bevor der Anrufer diesen mit einer Methode wie `json()` abruft.

Dies bedeutet auch, dass der Anrufer den Inhalt inkrementell verarbeiten kann, sobald er empfangen wird.

Zum Beispiel, betrachten Sie eine `GET`-Anfrage, die eine große Textdatei abruft und sie in irgendeiner Weise verarbeitet, oder sie dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wird, bevor wir einen Teil davon verarbeiten können.

Wenn wir die Antwort streamen, können wir Teile des Körpers verarbeiten, während sie aus dem Netzwerk ankommen:

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

Beachten Sie, dass, wenn Sie direkt auf den Körper zugreifen, Sie die rohen Bytes der Antwort erhalten und diese selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körperdaten als Text dekodiert.

### Textdatei zeilenweise verarbeiten

Im folgenden Beispiel rufen wir eine Textressource ab und verarbeiten sie zeilenweise, wobei wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Zur Vereinfachung nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

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

Die Konsequenzen daraus, dass Anfrage- und Antwortkörper Streams sind, sind, dass:

- wenn ein Leser einem Stream mit `ReadableStream.getReader()` hinzugefügt wurde, dann ist der Stream _gesperrt_, und nichts anderes kann den Stream lesen.
- wenn ein beliebiger Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_, und nichts anderes kann aus dem Stream lesen.

Das bedeutet, es ist nicht möglich, den gleichen Antwort- (oder Anfrage-) Körper mehr als einmal zu lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Cache mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Daher klont er die Antwort, gibt das Original zurück und cacht den Klon:

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
