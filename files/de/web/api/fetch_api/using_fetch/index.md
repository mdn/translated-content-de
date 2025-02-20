---
title: Verwendung der Fetch API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 8d4f36535d03f77ba044baf7a41298818e759d03
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Erstellen von HTTP-Anfragen und zum Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest): Im Gegensatz zu `XMLHttpRequest`, das Callback-Funktionen verwendet, ist Fetch auf Versprechen (Promises) basiert und integriert sich mit modernen Webfunktionen wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Mit der Fetch API erstellen Sie eine Anfrage, indem Sie [`fetch()`](/de/docs/Web/API/Window/fetch) aufrufen. Diese Funktion ist als globale Funktion sowohl im [`window`](/de/docs/Web/API/Window)- als auch im [`worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext verfügbar. Sie übergeben entweder ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine Zeichenkette mit der abzurufenden URL sowie ein optionales Argument zur Konfiguration der Anfrage.

Die `fetch()`-Funktion gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt wird, das die Antwort des Servers repräsentiert. Sie können dann den Status der Anfrage überprüfen und den Körper der Antwort in verschiedenen Formaten, einschließlich Text und JSON, extrahieren, indem Sie die entsprechende Methode auf der Antwort aufrufen.

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

Wir deklarieren eine Zeichenkette mit der URL und rufen dann `fetch()` auf, wobei wir die URL ohne zusätzliche Optionen übergeben.

Die `fetch()`-Funktion wird das Versprechen bei einigen Fehlern ablehnen, nicht jedoch, wenn der Server mit einem Fehlerstatus wie {{httpstatus("404")}} antwortet: Daher überprüfen wir auch den Status der Antwort und werfen, wenn er nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{Glossary("JSON", "JSON")}} ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Methode von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass wie `fetch()` selbst auch `json()` asynchron ist, ebenso wie alle anderen Methoden zum Zugriff auf den Inhalt des Antwortkörpers.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses detaillierter betrachten.

## Eine Anfrage machen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der Ressource, die abgerufen werden soll. Dies kann eines der folgenden sein:
   - eine Zeichenkette, die die URL enthält
   - ein Objekt, wie eine Instanz von [`URL`](/de/docs/Web/API/URL), das einen {{Glossary("stringifier", "stringifier")}} enthält, der eine Zeichenkette mit der URL erzeugt
   - eine [`Request`](/de/docs/Web/API/Request)-Instanz
2. optional ein Objekt, das Optionen zur Konfiguration der Anfrage enthält.

In diesem Abschnitt werden wir einige der am häufigsten verwendeten Optionen betrachten. Um über alle Optionen zu lesen, die angegeben werden können, sehen Sie sich die Referenzseite von [`fetch()`](/de/docs/Web/API/Window/fetch) an.

### Die Methode setzen

Standardmäßig führt `fetch()` eine {{httpmethod("GET")}}-Anfrage aus, aber Sie können die `method`-Option verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, dann muss die `method` einer von `GET`, `POST` oder `HEAD` sein.

### Einen Körper setzen

Der Anfragkörper ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen einschließen, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie z.B. {{httpmethod("POST")}} oder {{httpmethod("PUT")}}-Anfragen. Wenn Sie beispielsweise eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage ausführen und die Datei als Anfragkörper einfügen.

Um einen Anfragkörper festzulegen, übergeben Sie ihn als `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Körper als Instanz eines der folgenden Typen bereitstellen:

- eine Zeichenkette
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- [`Blob`](/de/docs/Web/API/Blob)
- [`File`](/de/docs/Web/API/File)
- [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
- [`FormData`](/de/docs/Web/API/FormData)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)

Andere Objekte werden mithilfe ihrer `toString()`-Methode in Zeichenketten konvertiert. Zum Beispiel können Sie ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt verwenden, um Formulardaten zu kodieren (siehe [Header setzen](#header_setzen) für weitere Informationen):

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

Beachten Sie, dass Anfragkörper genauso wie Antwortkörper Streams sind und das Ausführen der Anfrage den Stream liest, sodass Sie, wenn eine Anfrage einen Körper enthält, sie nicht zweimal ausführen können:

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

Siehe [Gesperrte und gestörte Streams](#gesperrte_und_gestörte_streams) für weitere Informationen.

### Header setzen

Anfrageheader geben dem Server Informationen über die Anfrage: beispielsweise teilt der {{httpheader("Content-Type")}}-Header dem Server in einer `POST`-Anfrage das Format des Anfragkörpers mit.

Um Anfrageheader festzulegen, weisen Sie sie der `headers`-Option zu.

Sie können hier ein Objekt-Literal mit `header-name: header-value`-Eigenschaften übergeben:

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

Alternativ dazu können Sie ein [`Headers`](/de/docs/Web/API/Headers)-Objekt konstruieren, Header zu diesem Objekt mit [`Headers.append()`](/de/docs/Web/API/Headers/append) hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

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

Im Vergleich zur Verwendung einfacher Objekte bietet das `Headers`-Objekt einige zusätzliche Eingabebereinigungen. Zum Beispiel normalisiert es Headernamen auf Kleinbuchstaben, entfernt führende und nachgestellte Leerzeichen von Headerwerten und verhindert, dass bestimmte Header gesetzt werden. Viele Header werden automatisch vom Browser gesetzt und können nicht von einem Skript gesetzt werden: Diese werden {{Glossary("Forbidden_header_name", "verbotene Headernamen")}} genannt. Wenn die [`mode`](/de/docs/Web/API/Request/mode)-Option auf `no-cors` gesetzt ist, wird die Menge der erlaubten Header weiter eingeschränkt.

### Daten in einer GET-Anfrage senden

`GET`-Anfragen haben keinen Körper, aber Sie können immer noch Daten an den Server senden, indem Sie sie als Abfragezeichenkette an die URL anhängen. Dies ist eine übliche Methode, um Formulardaten an den Server zu senden. Sie können dies durch Verwenden von [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) zum Kodieren der Daten tun und diese dann an die URL anhängen:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Cross-Origin-Anfragen erstellen

Ob eine Anfrage cross-origin gemacht werden kann, wird durch den Wert der [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option bestimmt. Dieser kann einen der drei Werte annehmen: `cors`, `same-origin` oder `no-cors`.

- Für Fetch-Anfragen ist der Standardwert von `mode` `cors`, was bedeutet, dass, wenn die Anfrage cross-origin ist, sie den [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwenden wird. Das bedeutet, dass:

  - wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem richtigen {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, andernfalls teilt der Browser die Antwort nicht mit dem Absender.
  - wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [Preflight-Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests), um zu überprüfen, ob der Server CORS versteht und die Anfrage zulässt. Die tatsächliche Anfrage wird erst gesendet, wenn der Server auf die Preflight-Anfrage mit den entsprechenden CORS-Headern antwortet.

- Wenn `mode` auf `same-origin` gesetzt ist, werden Cross-Origin-Anfragen vollständig untersagt.

- Wenn `mode` auf `no-cors` gesetzt ist, wird CORS für Cross-Origin-Anfragen deaktiviert. Dies beschränkt die Setzung der Header und beschränkt die Methoden auf GET, HEAD und POST. Die Antwort ist _opak_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind. Meistens sollte eine Website `no-cors` nicht verwenden: Die Hauptanwendung dafür liegt in bestimmten Anwendungsfällen von Service Workern.

Weitere Details finden Sie in der Referenzdokumentation für [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

### Einbeziehung von Anmeldedaten

Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldedaten sendet, sowie ob der Browser irgendwelche **`Set-Cookie`**-Antwortheader respektiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: niemals Anmeldedaten in der Anfrage senden oder Anmeldedaten in die Antwort einbeziehen.
- `same-origin` (der Standard): Anmeldedaten nur für Same-Origin-Anfragen senden und einbeziehen.
- `include`: Anmeldedaten immer einbeziehen, selbst cross-origin.

Beachten Sie, dass, wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, das Cookie nicht cross-site gesendet wird, selbst wenn `credentials` auf `include` gesetzt ist.

Das Einbeziehen von Anmeldedaten in Cross-Origin-Anfragen kann eine Website anfällig für {{Glossary("CSRF", "CSRF")}}-Angriffe machen, sodass der Server, selbst wenn `credentials` auf `include` gesetzt ist, auch ihrer Einbeziehung zustimmen muss, indem er den {{httpheader("Access-Control-Allow-Credentials")}}-Header in seiner Antwort einfügt. Darüber hinaus muss der Server in diesem Fall den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader explizit angeben (das heißt, `*` ist nicht erlaubt).

Das bedeutet, dass, wenn `credentials` auf `include` gesetzt ist und die Anfrage cross-origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldedaten gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, andernfalls gibt der Browser dem Absender einen Netzwerkfehler zurück. Wenn der Server die richtigen Header setzt, wird die Antwort, einschließlich Anmeldedaten, dem Absender zugestellt.

- Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [Preflight-Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldedaten, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}}- und {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader setzen, andernfalls gibt der Browser dem Absender einen Netzwerkfehler zurück. Wenn der Server die richtigen Header setzt, wird der Browser mit der tatsächlichen Anfrage, einschließlich Anmeldedaten, fortfahren und die tatsächliche Antwort, einschließlich Anmeldedaten, dem Absender zustellen.

### Ein `Request`-Objekt erstellen

Der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor nimmt dieselben Argumente wie `fetch()` selbst. Das bedeutet, dass Sie anstelle von Passieren von Optionen an `fetch()` dieselben Optionen an den `Request()`-Konstruktor übergeben und dann dieses Objekt an `fetch()` übergeben können.

Zum Beispiel können wir eine POST-Anfrage machen, indem wir Optionen an `fetch()` übergeben, indem wir Code wie diesen verwenden:

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

Um eine Anfrage abbrechbar zu machen, erstellen Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und weisen Sie sein [`AbortSignal`](/de/docs/Web/API/AbortSignal) der `signal`-Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die `abort()`-Methode des Controllers auf. Die `fetch()`-Funktion wird das Versprechen mit einer `AbortError`-Ausnahme zurückweisen.

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

Wenn die Anfrage nach der Erfüllung der `fetch()`-Funktion, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, wird der Versuch, den Körper der Antwort zu lesen, mit einer `AbortError`-Ausnahme zurückgewiesen.

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

## Umgang mit der Antwort

Sobald der Browser den Antwortstatus und die Header vom Server erhalten hat (und möglicherweise, bevor der Antwortkörper selbst empfangen wurde), wird das von `fetch()` zurückgegebene Versprechen mit einem [`Response`](/de/docs/Web/API/Response)-Objekt erfüllt.

### Überprüfen des Antwortstatus

Das von `fetch()` zurückgegebene Versprechen wird bei einigen Fehlern, wie einem Netzwerkausfall oder einem schlechten Schema, abgelehnt. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, erfüllt `fetch()` sich mit einer `Response`, sodass wir den Status überprüfen müssen, bevor wir den Antwortkörper lesen können.

Die [`Response.status`](/de/docs/Web/API/Response/status)-Eigenschaft zeigt uns den numerischen Statuscode, und die [`Response.ok`](/de/docs/Web/API/Response/ok)-Eigenschaft gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

Ein gängiges Muster ist, den Wert von `ok` zu überprüfen und zu werfen, wenn er `false` ist:

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

Antworten haben eine [`type`](/de/docs/Web/API/Response/type)-Eigenschaft, die einer der folgenden Werte sein kann:

- `basic`: Die Anfrage war eine Same-Origin-Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin-CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin-einfache Anfrage, die mit dem `no-cors`-Modus durchgeführt wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort, wie folgt:

- Basic-Antworten schließen Antwort-Header von der Liste der {{Glossary("Forbidden_response_header_name", "verbotenen Antwort-Headernamen")}} aus.

- CORS-Antworten enthalten nur Antwort-Header aus der Liste der {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}.

- Opaque-Antworten und opake Umleitungsantworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Körper.

### Überprüfen von Headern

Ähnlich wie bei der Anfrage verfügt die Antwort über eine [`headers`](/de/docs/Web/API/Response/headers)-Eigenschaft, die ein [`Headers`](/de/docs/Web/API/Headers)-Objekt ist und alle Antwortheader enthält, die für Skripte freigegeben sind, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp gemacht werden.

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

Die `Response`-Schnittstelle stellt eine Reihe von Methoden zur Verfügung, um den gesamten Körperinhalt in verschiedenen Formaten abzurufen:

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
- [`Response.json()`](/de/docs/Web/API/Response/json)
- [`Response.text()`](/de/docs/Web/API/Response/text)

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Inhalt des Körpers erfüllt wird.

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im entsprechenden Format vorliegt: Zum Beispiel, wenn Sie `json()` auf einer Antwort aufrufen, die nicht als JSON geparst werden kann.

### Streamen des Antwortkörpers

Anfrage- und Antwortkörper sind tatsächlich [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser nicht den gesamten Antwortinhalt im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Dies bedeutet auch, dass der Aufrufer den Inhalt inkrementell verarbeiten kann, während er empfangen wird.

Betrachten Sie beispielsweise eine `GET`-Anfrage, die eine große Textdatei abruft und sie auf irgendeine Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir [`Response.text()`](/de/docs/Web/API/Response/text) verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir einen Teil davon verarbeiten können.

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren", "", "nocode")}} wir asynchron über den Stream und verarbeiten jeden Chunk, sobald er eintrifft.

Beachten Sie, dass Sie beim direkten Zugriff auf den Körper die Rohbytes der Antwort erhalten und ihn selbst transformieren müssen. In diesem Fall rufen wir [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) auf, um die Antwort durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten, der die UTF-8-kodierten Körperdaten als Text dekodiert.

### Verarbeitung einer Textdatei Zeile für Zeile

Im folgenden Beispiel holen wir eine Textressource ab und verarbeiten sie Zeile für Zeile, indem wir einen regulären Ausdruck verwenden, um nach Zeilenenden zu suchen. Der Einfachheit halber nehmen wir an, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

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

Die Konsequenzen davon, dass Anfrage- und Antwortkörper Streams sind, sind:

- Wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _gesperrt_, und nichts anderes kann den Stream lesen.
- Wenn irgendein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_, und nichts anderes kann den Stream lesen.

Das bedeutet, dass es nicht möglich ist, denselben Antwort- oder Anfragekörper mehr als einmal zu lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Caches mit Service Workern](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort zwischenspeichern. Daher kopiert er die Antwort, gibt das Original zurück und speichert die Kopie:

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
