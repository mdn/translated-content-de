---
title: "Response: json() statische Methode"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`** statische Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces gibt ein `Response` zurück, welches die bereitgestellten JSON-Daten als Body enthält, sowie ein {{HTTPHeader("Content-Type")}}-Header, der auf `application/json` gesetzt ist. Der Status der Antwort, die Statusnachricht und zusätzliche Header können ebenfalls gesetzt werden.

Die Methode erleichtert die Erstellung von `Response`-Objekten, um JSON-codierte Daten zurückzugeben. [Service Workers](/de/docs/Web/API/Service_Worker_API) beispielsweise fangen Fetch-Anfragen eines Browsers ab und könnten `json()` verwenden, um ein `Response` aus zwischengespeicherten JSON-Daten zu erstellen, das an den Hauptthread zurückgegeben wird. Die `json()`-Methode kann auch im Server-Code verwendet werden, um JSON-Daten für {{Glossary("SPA", "Single Page Applications")}} und andere Anwendungen, bei denen eine JSON-Antwort erwartet wird, zurückzugeben.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameter

- `data`
  - : Die JSON-Daten, die als Antwortkörper verwendet werden sollen.
- `options` {{optional_inline}}
  - : Ein Optionen-Objekt mit Einstellungen für die Antwort, einschließlich des Statuscodes, der Statusnachricht und der Header. Dies entspricht dem Optionen-Parameter des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors.
    - `status`
      - : Der Statuscode für die Antwort, z. B. `200`.
    - `statusText`
      - : Die Statusnachricht, die mit dem Statuscode verknüpft ist. Für einen Status von `200` könnte dies `OK` sein.
    - `headers`
      - : Beliebige Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliterar von {{jsxref("String")}}-Schlüssel/Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) für eine Referenz).

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn `data` nicht in einen JSON-String umgewandelt werden kann. Dies könnte passieren, wenn die Daten ein JavaScript-Objekt mit einer Methode sind, oder das eine zyklische Referenz hat, oder wenn das übergebene Objekt `undefined` ist.

## Beispiele

### Antwort mit JSON-Daten

Dieses Live-Beispiel zeigt, wie Sie ein JSON-Antwortobjekt erstellen können und protokolliert das neu erstellte Objekt zur Inspektion (der Protokollierungscode ist ausgeblendet, da er nicht relevant ist).

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await response.text();
  log(`body: ${responseText}`);
  response.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${response.status}`);
  log(`statusText: ${response.statusText}`);
  log(`type: ${response.type}`);
  log(`url: ${response.url}`);
  log(`ok: ${response.ok}`);
  log(`redirected: ${response.redirected}`);
  log(`bodyUsed: ${response.bodyUsed}`);
}
```

Der folgende Code erstellt ein `Response`-Objekt mit JSON-Body `{ my: "data" }` und Header, der auf `application/json` gesetzt ist.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

Das Objekt hat folgende Eigenschaften. Beachten Sie, dass der Body und der Header wie erwartet gesetzt sind und der Standardstatus auf `200` gesetzt ist.

{{EmbedLiveSample('Response with JSON data','100%', '170')}}

### Antwort mit JSON-Daten und Optionen

Dieses Beispiel zeigt, wie Sie ein JSON-Antwortobjekt mit `status` und `statusText`-Optionen erstellen können.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await response.text();
  log(`body: ${responseText}`);
  response.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${response.status}`);
  log(`statusText: ${response.statusText}`);
  log(`type: ${response.type}`);
  log(`url: ${response.url}`);
  log(`ok: ${response.ok}`);
  log(`redirected: ${response.redirected}`);
  log(`bodyUsed: ${response.bodyUsed}`);
}
```

Der folgende Code erstellt ein `Response`-Objekt mit JSON-Body `{ some: "data", more: "information" }` und Header, der auf `application/json` gesetzt ist. Es setzt auch den Status auf `307` und setzt den entsprechenden Status-Text ("Temporary Redirect").

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften, die wie erwartet gesetzt sind. Beachten Sie, dass sich die `ok`-Eigenschaft der Antwort zu `false` ändert, da der Statuswert nicht im Bereich von 200 bis 299 liegt.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
