---
title: Verwendung der Fetch-API
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 667c1884597a2b576a5b51e0129f3c27a532cff6
---

{{DefaultAPISidebar("Fetch API")}}

Die [Fetch-API](/de/docs/Web/API/Fetch_API) bietet eine JavaScript-Schnittstelle zum Erstellen von HTTP-Anfragen und zum Verarbeiten der Antworten.

Fetch ist der moderne Ersatz für {{domxref("XMLHttpRequest")}}: Im Gegensatz zu `XMLHttpRequest`, das Callbacks verwendet, ist Fetch auf Promises basierend und ist mit modernen Web-Features wie [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) integriert.

Mit der Fetch-API senden Sie eine Anfrage, indem Sie {{domxref("Window/fetch", "fetch()")}} aufrufen. Diese Funktion ist sowohl im {{domxref("Window", "window", "", "", "nocode")}}- als auch im {{domxref("WorkerGlobalScope", "worker", "", "", "nocode")}}-Kontext global verfügbar. Sie übergeben ein {{domxref("Request")}}-Objekt oder einen String mit der zu holenden URL sowie ein optionales Argument zur Konfiguration der Anfrage.

Die Funktion `fetch()` gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Response")}}-Objekt erfüllt wird, das die Antwort des Servers darstellt. Dann können Sie den Status der Anfrage überprüfen und den Inhalt des Antwortkörpers in verschiedenen Formaten, einschließlich Text und JSON, durch Aufrufen der entsprechenden Methode der Antwort extrahieren.

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

Wir deklarieren eine Zeichenkette, die die URL enthält, und rufen dann `fetch()` auf, ohne zusätzliche Optionen zu übergeben.

Die Funktion `fetch()` wird das Promise bei einigen Fehlern ablehnen, aber nicht, wenn der Server eine Fehlermeldung wie {{httpstatus("404")}} sendet: Daher überprüfen wir auch den Antwortstatus und werfen eine Ausnahme, wenn dieser nicht OK ist.

Andernfalls holen wir den Inhalt des Antwortkörpers als {{glossary("JSON")}}, indem wir die Methode {{domxref("Response.json()", "json()")}} von `Response` aufrufen und einen seiner Werte protokollieren. Beachten Sie, dass `json()` ebenso wie `fetch()` selbst asynchron ist, wie alle anderen Methoden, um den Inhalt des Antwortkörpers zuzugreifen.

Im Rest dieser Seite werden wir die verschiedenen Phasen dieses Prozesses genauer betrachten.

## Eine Anfrage erstellen

Um eine Anfrage zu erstellen, rufen Sie `fetch()` auf und übergeben:

1. eine Definition der zu holenden Ressource. Dies kann sein:
   - ein String, der die URL enthält
   - ein Objekt, zum Beispiel eine Instanz von {{domxref("URL")}}, das einen {{glossary("stringifier")}} hat, der einen String mit der URL erzeugt
   - eine {{domxref("Request")}}-Instanz
2. optional ein Objekt mit Optionen zur Konfiguration der Anfrage.

In diesem Abschnitt betrachten wir einige der am häufigsten verwendeten Optionen. Um alle möglichen Optionen zu lesen, siehe die Referenzseite von [`fetch()`](/de/docs/Web/API/Window/fetch).

### Die Methode festlegen

Standardmäßig sendet `fetch()` eine {{httpmethod("GET")}}-Anfrage, aber Sie können die `method`-Option verwenden, um eine andere [Anfragemethode](/de/docs/Web/HTTP/Methods) zu verwenden:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, muss `method` einer der Werte `GET`, `POST` oder `HEAD` sein.

### Einen Körper festlegen

Der Anfragekörper ist die Nutzlast der Anfrage: Es ist das, was der Client an den Server sendet. Sie können keinen Körper mit `GET`-Anfragen übergeben, aber es ist nützlich für Anfragen, die Inhalte an den Server senden, wie {{httpmethod("POST")}}- oder {{httpmethod("PUT")}}-Anfragen. Zum Beispiel, wenn Sie eine Datei an den Server hochladen möchten, könnten Sie eine `POST`-Anfrage stellen und die Datei als Anfragekörper einschließen.

Um einen Anfragekörper festzulegen, übergeben Sie ihn als die `body`-Option:

```js
const response = await fetch("https://example.org/post", {
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Sie können den Körper als eine Instanz eines der folgenden Typen angeben:

- einen String
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}
- {{domxref("ReadableStream")}}

Beachten Sie, dass wie auch Antwortkörper, Anfragetexte Streams sind und das Senden der Anfrage den Stream liest, sodass eine Anfrage mit einem Körper nicht zweimal gesendet werden kann:

```js example-bad
const request = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const response1 = await fetch(request);
console.log(response1.status);

// Wird eine Ausnahme auslösen: "Der Körper wurde bereits verbraucht."
const response2 = await fetch(request);
console.log(response2.status);
```

Stattdessen müssen Sie {{domxref("Request.clone()", "ein Duplikat erstellen", "", "nocode")}} der Anfrage erstellen, bevor Sie sie senden:

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

Anfrageheader geben dem Server Informationen über die Anfrage: Zum Beispiel teilt der {{httpheader("Content-Type")}}-Header dem Server das Format des Anfragekörpers mit. Viele Header werden automatisch vom Browser gesetzt und können nicht durch ein Skript gesetzt werden: Diese werden {{glossary("Verbotene Headernamen")}} genannt.

Um Anfrageheader festzulegen, weisen Sie sie der `headers`-Option zu.

Sie können hier ein Objektliteral übergeben, das `header-name: header-value` Eigenschaften enthält:

```js
const response = await fetch("https://example.org/post", {
  headers: {
    "Content-Type": "application/json",
  },
  // ...
});
```

Alternativ können Sie ein {{domxref("Headers")}}-Objekt konstruieren, Header zu diesem Objekt mit {{domxref("Headers.append()")}} hinzufügen und dann das `Headers`-Objekt der `headers`-Option zuweisen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  headers: myHeaders,
  // ...
});
```

Wenn die `mode`-Option auf `no-cors` gesetzt ist, können Sie nur {{glossary("CORS-safelisted request header", "CORS-safelisted request headers")}} setzen.

### POST-Anfragen machen

Wir können die Optionen `method`, `body` und `headers` kombinieren, um eine POST-Anfrage zu machen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

### Cross-Origin-Anfragen machen

Ob eine Anfrage Cross-Origin sein kann oder nicht, wird durch den Wert der `mode`-Option bestimmt. Dieser kann einen der folgenden drei Werte annehmen: `cors`, `no-cors` oder `same-origin`.

- Standardmäßig ist `mode` auf `cors` gesetzt, was bedeutet, dass wenn die Anfrage Cross-Origin ist, dann wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) Mechanismus verwendet. Das bedeutet:

  - Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage immer gesendet, aber der Server muss mit dem richtigen {{httpheader("Access-Control-Allow-Origin")}}-Header antworten, sonst wird der Browser die Antwort nicht mit dem Absender teilen.
  - Wenn die Anfrage keine einfache Anfrage ist, sendet der Browser eine [vorab gesendete Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests), um zu überprüfen, dass der Server CORS versteht und die Anfrage erlaubt, und die echte Anfrage wird nur gesendet, wenn der Server korrekt auf die vorab gesendete Anfrage mit den entsprechenden CORS-Headern antwortet.

- Das Setzen von `mode` auf `same-origin` verbietet Cross-Origin-Anfragen vollständig.

- Das Setzen von `mode` auf `no-cors` bedeutet, dass die Anfrage eine einfache Anfrage sein muss, was die einzustellenden Header einschränkt und die Methoden auf `GET`, `HEAD` und `POST` beschränkt.

### Einschließen von Anmeldedaten

Anmeldedaten sind Cookies, {{glossary("TLS")}} Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Um zu steuern, ob der Browser Anmeldedaten sendet oder nicht, sowie ob der Browser auf **`Set-Cookie`**-Antwortheader reagiert, setzen Sie die `credentials`-Option, die einen der folgenden drei Werte annehmen kann:

- `omit`: Niemals Anmeldedaten in der Anfrage senden oder in der Antwort einschließen.
- `same-origin` (die Standardeinstellung): Nur Anmeldedaten für gleichherkomst-Anfragen senden und einschließen.
- `include`: Immer Anmeldedaten einschließen, auch Cross-Origin.

Beachten Sie, dass wenn das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut eines Cookies auf `Strict` oder `Lax` gesetzt ist, dann wird das Cookie nicht site-übergreifend gesendet, auch wenn `credentials` auf `include` gesetzt ist.

Das Einschließen von Anmeldedaten in Cross-Origin-Anfragen kann eine Seite anfällig für {{glossary("CSRF")}}-Angriffe machen, also muss selbst wenn `credentials` auf `include` gesetzt ist, der Server auch deren Einschluss zustimmen, indem er den {{httpheader("Access-Control-Allow-Credentials")}} Header in seine Antwort aufnimmt. Zusätzlich muss der Server in dieser Situation explizit den Ursprung des Clients im {{httpheader("Access-Control-Allow-Origin")}} Header der Antwort spezifizieren (d.h. `*` ist nicht erlaubt).

Das bedeutet, dass wenn `credentials` auf `include` gesetzt ist und die Anfrage Cross-Origin ist, dann:

- Wenn die Anfrage eine [einfache Anfrage](/de/docs/Web/HTTP/CORS#simple_requests) ist, wird die Anfrage mit Anmeldedaten gesendet, aber der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Antwortheader setzen, oder der Browser gibt dem Absender einen Netzwerkfehler zurück. Wenn der Server die korrekten Header setzt, wird die Antwort, inklusive Anmeldedaten, dem Absender übergeben.

- Wenn die Anfrage keine einfache Anfrage ist, wird der Browser eine [vorab gesendete Anfrage](/de/docs/Web/HTTP/CORS#preflighted_requests) ohne Anmeldedaten senden, und der Server muss die {{httpheader("Access-Control-Allow-Credentials")}} und {{httpheader("Access-Control-Allow-Origin")}} Antwortheader setzen, oder der Browser gibt dem Absender einen Netzwerkfehler zurück. Wenn der Server die korrekten Header setzt, wird der Browser mit der echten Anfrage fortfahren, inklusive Anmeldedaten, und die echte Antwort, inklusive Anmeldedaten, dem Absender übergeben.

### Ein `Request`-Objekt erstellen

Der {{domxref("Request.Request()", "Request()")}} Konstruktor nimmt die gleichen Argumente wie `fetch()` selbst. Das bedeutet, dass anstatt Optionen in `fetch()` zu übergeben, können Sie die gleichen Optionen dem `Request()`-Konstruktor übergeben und dieses Objekt dann an `fetch()` übergeben.

Zum Beispiel können wir eine POST-Anfrage machen, indem wir Optionen in `fetch()` übergeben durch Code wie diesen:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

Wir könnten dies jedoch umschreiben, um die gleichen Argumente dem `Request()`-Konstruktor zu übergeben:

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

Dies bedeutet auch, dass Sie eine Anfrage aus einer anderen Anfrage erstellen können, während Sie einige der Eigenschaften mit dem zweiten Argument ändern:

```js
async function post(request) {
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Erfolg:", result);
  } catch (error) {
    console.error("Fehler:", error);
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

Um eine Anfrage stornierbar zu machen, erstellen Sie einen {{domxref("AbortController")}} und weisen Sie dessen {{domxref("AbortSignal")}} der `signal`-Eigenschaft der Anfrage zu.

Um die Anfrage abzubrechen, rufen Sie die {{domxref("AbortController.abort()", "abort()")}} Methode des Controllers auf. Der `fetch()`-Aufruf wird das Promise mit einer `AbortError`-Ausnahme ablehnen.

```js
const controller = new AbortController();

const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async () => {
  try {
    console.log("Fetch startet");
    const response = await fetch("https://example.org/get", {
      signal: controller.signal,
    });
    console.log(`Antwort: ${response.status}`);
  } catch (e) {
    console.error(`Fehler: ${e}`);
  }
});

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {
  controller.abort();
  console.log("Fetch abgebrochen");
});
```

Wenn die Anfrage nach dem Erfüllen des `fetch()`-Aufrufs abgebrochen wird, aber bevor der Antwortkörper gelesen wurde, dann wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // Die nächste Zeile wird `AbortError` werfen
  const text = await response.text();
  console.log(text);
}
```

## Umgang mit der Antwort

Sobald der Browser den Antwortstatus und -header vom Server erhalten hat (und möglicherweise bevor der Antwortkörper selbst erhalten wurde), wird das von `fetch()` zurückgegebene Promise mit einem {{domxref("Response")}}-Objekt erfüllt.

### Überprüfen des Antwortstatus

Das von `fetch()` zurückgegebene Promise wird bei einigen Fehlern abgelehnt, wie einem Netzwerkausfall oder einem schlechten Schema. Wenn der Server jedoch mit einem Fehler wie {{httpstatus("404")}} antwortet, dann wird `fetch()` mit einer `Response` erfüllt, sodass wir den Status überprüfen müssen, bevor wir den Antwortkörper lesen können.

Die Eigenschaft {{domxref("Response.status")}} gibt uns den numerischen Statuscode, und die Eigenschaft {{domxref("Response.ok")}} gibt `true` zurück, wenn der Status im [200-Bereich](/de/docs/Web/HTTP/Status#successful_responses) liegt.

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

### Überprüfen des Antworttyps

Antworten haben eine {{domxref("Response.type", "type")}} Eigenschaft, die einen der folgenden Werte haben kann:

- `basic`: Die Anfrage war eine gleichherkunfts-Anfrage.
- `cors`: Die Anfrage war eine Cross-Origin CORS-Anfrage.
- `opaque`: Die Anfrage war eine Cross-Origin einfache Anfrage, die im `no-cors`-Modus gemacht wurde.
- `opaqueredirect`: Die Anfrage hat die `redirect`-Option auf `manual` gesetzt, und der Server hat einen [Umleitungsstatus](/de/docs/Web/HTTP/Status#redirection_messages) zurückgegeben.

Der Typ bestimmt den möglichen Inhalt der Antwort, wie folgt:

- Basic-Antworten schließen Antwortheader von der {{glossary("Forbidden response header name")}} Liste aus.

- CORS-Antworten beinhalten nur Antwortheader von der {{glossary("CORS-safelisted response header")}} Liste.

- Opaque-Antworten und Undurchsichtige Umleitungsantworten haben einen `status` von `0`, eine leere Header-Liste und einen `null`-Body.

### Überprüfen der Header

Genau wie die Anfrage hat auch die Antwort eine {{domxref("Response.headers", "headers")}}-Eigenschaft, die ein {{domxref("Headers")}}-Objekt ist, und dies enthält alle Antwortheader, die für Skripte zugänglich sind, vorbehaltlich der Ausschlüsse, die basierend auf dem Antworttyp gemacht werden.

Ein häufiges Anwendungsfall dafür ist das Überprüfen des Content-Types, bevor versucht wird, den Body zu lesen:

```js
async function fetchJSON(request) {
  try {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oh je, wir haben kein JSON bekommen!");
    }
    // Andernfalls können wir den Body als JSON lesen
  } catch (error) {
    console.error("Fehler:", error);
  }
}
```

### Lesen des Antwortkörpers

Die `Response`-Schnittstelle bietet eine Reihe von Methoden, um die gesamten Body-Inhalte in verschiedenen Formaten abzurufen:

- {{domxref("Response.arrayBuffer()")}}
- {{domxref("Response.blob()")}}
- {{domxref("Response.formData()")}}
- {{domxref("Response.json()")}}
- {{domxref("Response.text()")}}

Diese sind alle asynchrone Methoden, die ein {{jsxref("Promise")}} zurückgeben, das mit dem Body-Inhalt erfüllt wird.

In diesem Beispiel holen wir ein Bild und lesen es als {{domxref("Blob")}}, das wir dann verwenden können, um eine Objekt-URL zu erstellen:

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

Die Methode wird eine Ausnahme werfen, wenn der Antwortkörper nicht im richtigen Format ist: Zum Beispiel, wenn Sie `json()` auf eine Antwort aufrufen, die nicht als JSON analysiert werden kann.

### Streaming des Antwortkörpers

Anfrage- und Antwortkörper sind tatsächlich {{domxref("ReadableStream")}}-Objekte, und wann immer Sie sie lesen, streamen Sie den Inhalt. Dies ist gut für die Speichereffizienz, da der Browser den gesamten Antwortinhalt nicht im Speicher puffern muss, bevor der Aufrufer ihn mit einer Methode wie `json()` abruft.

Das bedeutet auch, dass der Aufrufer den Inhalt stückweise verarbeiten kann, sobald er empfangen wird.

Betrachten Sie zum Beispiel eine `GET`-Anfrage, die eine große Textdatei abruft und diese in gewisser Weise verarbeitet oder sie dem Benutzer anzeigt:

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

Wenn wir {{domxref("Response.text()")}} verwenden, wie oben, müssen wir warten, bis die gesamte Datei empfangen wurde, bevor wir irgendeinen Teil davon verarbeiten können.

Wenn wir die Antwort jedoch streamen, können wir Teile des Körpers verarbeiten, sobald sie aus dem Netzwerk empfangen werden:

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

In diesem Beispiel {{jsxref("Statements/for-await...of", "iterieren wir asynchron", "", "nocode")}} über den Stream und verarbeiten jedes Chunk, sobald es ankommt.

Beachten Sie, dass wenn Sie den Körper direkt so zugreifen, erhalten Sie die rohen Bytes der Antwort und müssen es selbst transformieren. In diesem Fall rufen wir {{domxref("ReadableStream.pipeThrough()")}} auf, um die Antwort durch einen {{domxref("TextDecoderStream")}} zu leiten, der die UTF-8-kodierten Körperdaten als Text dekodiert.

### Eine Textdatei zeilenweise verarbeiten

Im folgenden Beispiel holen wir eine Textressource und verarbeiten sie Zeile für Zeile, indem wir einen regulären Ausdruck verwenden, um nach Zeilenumbrüchen zu suchen. Der Einfachheit halber gehen wir davon aus, dass der Text UTF-8 ist, und behandeln keine Fetch-Fehler:

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
    // Die letzte Zeile endete nicht mit einem Zeilenumbruch
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

Die Folgen, dass Anfrage- und Antwortkörper Streams sind, sind, dass:

- wenn ein Leser an einen Stream mit `ReadableStream.getReader()` angehängt wurde, dann ist der Stream _gesperrt_ und nichts anderes kann den Stream lesen.
- wenn irgendein Inhalt aus dem Stream gelesen wurde, dann ist der Stream _gestört_ und nichts anderes kann aus dem Stream lesen.

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
    const json2 = await response.json(); // wird eine Ausnahme auslösen
  } catch (error) {
    console.error(error.message);
  }
}
```

Wenn Sie den Körper mehr als einmal lesen müssen, müssen Sie {{domxref("Response.clone()")}} aufrufen, bevor Sie den Körper lesen:

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

Dies ist ein häufiges Muster beim [Implementieren eines Offline-Cache mit Service Workers](/de/docs/Web/Progressive_web_apps/Guides/Caching). Der Service Worker möchte die Antwort an die App zurückgeben, aber auch die Antwort im Cache speichern. Also klont er die Antwort, gibt das Original zurück und speichert das Duplikat im Cache:

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
- [Beispiele zu Fetch auf GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
