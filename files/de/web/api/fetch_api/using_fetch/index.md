---
title: Verwendung der Fetch-API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch-API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Ausführen von HTTP-Anfragen und Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Rückrufe verwendet, ist Fetch auf Promises basierend und integriert mit Funktionen des modernen Webs wie [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS).

Mit der Fetch-API können Sie eine Anfrage ausführen, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen, das als globale Funktion sowohl in den Kontexten [`window`](/de/docs/Web/API/Window) als auch [`worker`](/de/docs/Web/API/WorkerGlobalScope) verfügbar ist. Sie übergeben ein [`Request`](/de/docs/Web/API/Request)-Objekt oder einen String mit der abzurufenden URL, zusammen mit einem optionalen Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Antwort des Servers repräsentiert. Dann können Sie den Status der Anfrage überprüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Wir deklarieren eine Zeichenkette, die die URL enthält, und rufen dann `fetch()` auf, indem wir die URL ohne zusätzliche Optionen übergeben.

Die Funktion `fetch()` wird das Promise bei einigen Fehlern ablehnen, jedoch nicht, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn es nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}} ab, indem wir die Methode [`json()`](/de/docs/Web/API/Response/json) von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass `json()` genau wie `fetch()` selbst asynchron ist, ebenso wie alle anderen Methoden, um auf den Inhalt des Antwortkörpers zuzugreifen.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses detaillierter betrachten.

## Eine Anfrage stellen

Um eine Anfrage zu stellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der abzurufenden Ressource. Dies kann eine der folgenden sein:
   - ein String, der die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "Stringifier")}} hat, der einen String mit der URL erzeugt
   - eine Instanz von [`Request`](/de/docs/Web/API/Request)
2. optional ein Objekt, das Einstellungen zur Konfiguration der Anfrage enthält.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um alle Optionen zu lesen, die angegeben werden können, siehe die Referenzseite zu [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, aber Sie können die `method`-Option verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, muss `method` eine von `GET`, `POST` oder `HEAD` sein.

### Einen Körper festlegen

Der Anfragetext ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einschließen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfragen. Zum Beispiel, wenn Sie eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage senden und die Datei als Anfragetext einschließen.

Um einen Anfragetext festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

Sie können den Körper als Instanz eines der folgenden Typen bereitstellen:

- ein String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden in Strings umgewandelt, indem ihre `toString()`-Methode verwendet wird. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Kopfzeilen einstellen](#kopfzeilen_einstellen) für mehr Informationen):

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

Beachten Sie, dass genauso wie Antwortkörper, auch Anfragetexte Streams sind und das Ausführen der Anfrage den Stream liest, sodass Sie eine Anfrage mit einem Körper nicht zweimal ausführen können:

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

Stattdessen müssten Sie [eine Kopie erstellen](/de/docs/Web/API/Request/clone), bevor Sie die Anfrage senden:

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

Für weitere Informationen siehe [Gesperrte und gestörte Streams](#gesperrte_und_gestörte_streams).

### Kopfzeilen einstellen

Anfragende Kopfzeilen geben dem Server Informationen über die Anfrage: Zum Beispiel gibt in einer `POST`-Anfrage der {{httpheader("Content-Type")}}-Header dem Server das Format des Anfragetextes an.

Um Anfragende Kopfzeilen einzurichten, weisen Sie sie der `headers`-Option zu.

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

Alternativ können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt erstellen, dem Objekt mit [`Headers.append()`](/de/docs/Web/API/Headers/append) Header hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

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

Im Vergleich zur Verwendung von normalen Objekten bietet das `Headers`-Objekt eine zusätzliche Eingabe-Sanitierung. Zum Beispiel normalisiert es Headernamen zu Kleinbuchstaben, entfernt führende und nachgestellte Leerzeichen von Headerwerten und verhindert, dass bestimmte Header festgelegt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript festgelegt werden: Diese werden als {{Glossary("Forbidden_request_header", "Verbotene Anfragende Kopfzeilen")}} bezeichnet. Wenn die [`mode`](/de/docs/Web/API/Request/mode)-Option auf `no-cors` gesetzt ist, wird der Satz erlaubter Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können dem Server dennoch Daten senden, indem Sie sie an die URL als Abfragezeichenfolge anhängen. Dies ist eine übliche Methode, um Formulardaten an den Server zu senden. Sie können dies tun, indem Sie [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) verwenden, um die Daten zu kodieren, und sie dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen ausführen

Ob eine Anfrage Cross-Origin ausgeführt werden kann oder nicht, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option bestimmt. Diese kann einen von drei Werten annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass, wenn die Anfrage Cross-Origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwenden wird. Das bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem richtigen {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, oder der Browser wird die Antwort nicht mit dem Anrufer teilen.
  - Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorabgestimmte Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) senden, um zu überprüfen, dass der Server CORS versteht und die Anfrage zulässt, und die tatsächliche Anfrage wird nicht gesendet, es sei denn, der Server antwortet auf die vorabgestimmte Anfrage mit den entsprechenden CORS-Headern.

- Die Einstellung `mode` auf `same-origin` verbietet Cross-Origin-Anfragen vollständig.

- Die Einstellung `mode` auf `no-cors` deaktiviert CORS für Cross-Origin-Anfragen. Dies schränkt die Header ein, die festgelegt werden dürfen, und beschränkt die Methoden auf GET, HEAD und POST. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper nicht für JavaScript verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung hierfür ist für bestimmte Anwendungsfälle von Service Workern.

Siehe die Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

### Einschließen von Anmeldeinformationen

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldeinformationen sendet oder nicht, sowie ob der Browser **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldeinformationen in der Anfrage senden oder Anmeldeinformationen in der Antwort einschließen.
- `same-origin` (Standard): Nur Anmeldeinformationen für Anfragen gleicher Herkunft senden und einbeziehen.
- `include`: Immer Anmeldeinformationen einbeziehen, selbst bei Cross-Origin.

Beachten Sie, dass wenn das `SameSite`-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, auch wenn `credentials` auf `include` gesetzt wird.

Das Einbeziehen von Anmeldeinformationen in Cross-Origin-Anfragen kann eine Website für {{Glossary("CSRF", "CSRF")}}-Angriffe anfällig machen. Daher muss auch, wenn `credentials` auf `include` gesetzt ist, der Server deren Einbeziehung zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seine Antwort einschließt. Darüber hinaus muss der Server in diesem Fall die ursprüngliche Herkunft des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader explizit angeben (das heißt, `*` ist nicht erlaubt).

Das bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) ist, wird die Anfrage mit Anmeldeinformationen gesendet, aber der Server muss die Header {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} setzen, oder der Browser wird einen Netzwerkfehler an den Anrufer zurückgeben. Wenn der Server die richtigen Header setzt, wird die Antwort, einschließlich Anmeldeinformationen, an den Anrufer geliefert.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorabgestimmte Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) ohne Anmeldeinformationen senden, und der Server muss die Header {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} setzen, oder der Browser wird einen Netzwerkfehler an den Anrufer zurückgeben. Wenn der Server die richtigen Header setzt, wird der Browser die tatsächliche Anfrage folgen lassen, inklusive Anmeldeinformationen, und die tatsächliche Antwort, inklusive Anmeldeinformationen, an den Anrufer liefern.

### Erstellen eines `Request`-Objekts

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass anstatt Optionen in `fetch()` zu übergeben, Sie die gleichen Optionen an den `Request()`-Konstruktor übergeben können und dann dieses Objekt an `fetch()` übergeben.

Zum Beispiel können wir eine POST-Anfrage ausführen, indem wir Optionen in `fetch()` mit folgendem Code übergeben:

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

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen Sie dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal`-Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers auf. Der `fetch()`-Aufruf wird das Promise mit einem `AbortError`-Ausnahme ablehnen.

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

Wenn die Anfrage nach dem Erfüllen des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, wird der Versuch, den Antwortkörper zu lesen, mit einem `AbortError`-Ausnahme ablehnen.

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

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise, bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Promise mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Überprüfen des Antwortstatus

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern abgelehnt, wie bei einem Netzwerkfehler oder einem schlechten Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, dann erfüllt `fetch()` sich mit einer `Response`, sodass wir den Status überprüfen müssen, bevor wir den Antwortkörper lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status)-Eigenschaft gibt uns den numerischen Statuscode, und die [`Response.ok`](/de/docs/Web/API/Response/ok)-Eigenschaft gibt `true` zurück, wenn der Status im [200er-Bereich](/de/docs/Web/HTTP/Reference/Status#successful_responses) liegt.

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

### Überprüfung des Antworttyps

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einen der folgenden Werte annehmen kann:

- `basic`: Die Anfrage war eine gleichstammige Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem `no-cors` Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Umleitungsstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt die möglichen Inhalte der Antwort, wie folgt:

- Basic-Antworten schließen Antwortheader von der Liste der {{Glossary("Forbidden_response_header_name", "Verbotenen Antwortheadernamen")}} aus.

- CORS-Antworten beinhalten nur Antwortheader von der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-Whitelist-Antwortheader")}}.

- Opaque-Antworten und Opaque-Umleitungsantworten haben einen `status` von `0`, eine leere Headerliste und einen `null`-Körper.

### Überprüfen von Headern

Genauso wie die Anfrage hat die Antwort eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist, und dies enthält alle Antwortheader, die Skripten zugänglich sind, unterliegt jedoch den Ausschlüssen, die auf Grundlage des Antworttyps gemacht werden.

Ein häufiger Anwendungsfall hierfür ist es, den Inhaltstyp zu überprüfen, bevor versucht wird, den Körper zu lesen:

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

Die `Response`-Schnittstelle bietet eine Reihe von Methoden, um die gesamten Körperinhalte in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Dies sind alles asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Körperinhalt erfüllt wird.

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: zum Beispiel, wenn Sie `json()` auf einer Antwort aufrufen, die nicht als JSON geparst werden kann.

### Den Antwortkörper streamen

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Arbeitsspeichereffizienz, da der Browser den gesamten Antwortinhalt nicht im Arbeitsspeicher puffern muss, bevor der Anrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Anrufer den Inhalt schrittweise verarbeiten kann, während er empfangen wird.

Betrachten Sie zum Beispiel eine `GET`-Anfrage, die eine große Textdatei abruft und sie auf irgendeine Weise verarbeitet oder dem Benutzer anzeigt:

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

Wenn wir die Antwort stattdessen streamen, können wir Teile des Körpers verarbeiten, während sie aus dem Netzwerk empfangen werden:

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

Beachten Sie, dass wenn Sie direkt auf den Körper zugreifen, Sie die rohen Bytes der Antwort erhalten und müssen sie selbst transformieren. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körperdaten als Text dekodiert.

### Eine Textdatei Zeile für Zeile verarbeiten

Im unteren Beispiel holen wir eine Textressource und verarbeiten sie Zeile für Zeile, indem wir einen regulären Ausdruck verwenden, um nach Zeilenumbrüchen zu suchen. Der Einfachheit halber nehmen wir an, dass der Text UTF-8 ist, und behandeln Fetch-Fehler nicht:

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

Die Konsequenzen daraus, dass Anfrage- und Antwortkörper Streams sind, sind:

- wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _gesperrt_, und nichts anderes kann den Stream lesen.
- wenn irgendein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_, und nichts anderes kann aus dem Stream lesen.

Dies bedeutet, dass es nicht möglich ist, denselben Antwort- (oder Anfrage-) Körper mehr als einmal zu lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Caches mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Also klont er die Antwort, gibt das Original zurück und speichert die Kopie:

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
