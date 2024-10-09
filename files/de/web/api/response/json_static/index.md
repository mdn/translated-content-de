---
title: "Response: json()-statische Methode"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`**-statische Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces gibt eine `Response` zurück, die die angegebenen JSON-Daten als Body enthält und einen {{HTTPHeader("Content-Type")}}-Header, der auf `application/json` gesetzt ist. Der Antwortstatus, Statusmeldung und zusätzliche Header können ebenfalls festgelegt werden.

Die Methode erleichtert das Erstellen von `Response`-Objekten zum Zurückgeben von JSON-codierten Daten. [Service Worker](/de/docs/Web/API/Service_Worker_API) zum Beispiel fangen Fetch-Anfragen, die von einem Browser gesendet werden, ab und könnten `json()` verwenden, um eine `Response` aus zwischengespeicherten JSON-Daten zu erstellen, die an den Hauptthread zurückgegeben wird. Die `json()`-Methode kann auch im Servercode verwendet werden, um JSON-Daten für {{Glossary("SPA", "Single-Page-Anwendungen")}} und alle anderen Anwendungen, bei denen eine JSON-Antwort erwartet wird, zurückzugeben.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameter

- `data`
  - : Die JSON-Daten, die als Antwort-Body verwendet werden sollen.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Einstellungen für die Antwort enthält, einschließlich Statuscode, Statusmeldung und Header. Dies entspricht dem Optionsparameter des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors.

    - `status`
      - : Der Statuscode für die Antwort, wie z. B. `200`.
    - `statusText`
      - : Die Statusmeldung, die mit dem Statuscode verknüpft ist. Bei einem Status von `200` könnte dies `OK` sein.
    - `headers`
      - : Alle Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder Objektliteral von {{jsxref("String")}}-Schlüssel/Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Headers) für eine Referenz).

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn `data` nicht in einen JSON-String konvertiert werden kann. Dies könnte passieren, wenn die Daten ein JavaScript-Objekt mit Methode oder einer zirkulären Referenz sind, oder wenn das übergebene Objekt `undefined` ist.

## Beispiele

### Antwort mit JSON-Daten

Dieses Live-Beispiel zeigt, wie Sie ein JSON-Antwortobjekt erstellen können, und protokolliert das neu erstellte Objekt zur Inspektion (der Protokollierungscode ist ausgeblendet, da er nicht relevant ist).

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await jsonResponse.text();
  log(`body: ${responseText}`);
  jsonResponse.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${jsonResponse.status}`);
  log(`statusText: ${jsonResponse.statusText}`);
  log(`type: ${jsonResponse.type}`);
  log(`url: ${jsonResponse.url}`);
  log(`ok: ${jsonResponse.ok}`);
  log(`redirected: ${jsonResponse.redirected}`);
  log(`bodyUsed: ${jsonResponse.bodyUsed}`);
}
```

Der untenstehende Code erstellt ein `Response`-Objekt mit JSON-Body `{ my: "data" }` und Header, der auf `application/json` gesetzt ist.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften. Beachten Sie, dass der Body und der Header wie erwartet gesetzt sind und der Standardstatus auf `200` gesetzt ist.

{{EmbedLiveSample('Response with JSON data','100%', '170')}}

### Antwort mit JSON-Daten und Optionen

Dieses Beispiel zeigt, wie Sie ein JSON-Antwortobjekt mit `status`- und `statusText`-Optionen erstellen können.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await jsonResponse.text();
  log(`body: ${responseText}`);
  jsonResponse.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${jsonResponse.status}`);
  log(`statusText: ${jsonResponse.statusText}`);
  log(`type: ${jsonResponse.type}`);
  log(`url: ${jsonResponse.url}`);
  log(`ok: ${jsonResponse.ok}`);
  log(`redirected: ${jsonResponse.redirected}`);
  log(`bodyUsed: ${jsonResponse.bodyUsed}`);
}
```

Der untenstehende Code erstellt ein `Response`-Objekt mit JSON-Body `{ some: "data", more: "information" }` und Header, der auf `application/json` gesetzt ist. Es setzt außerdem den Status auf `307` und setzt den entsprechenden Status-Text ("Temporary Redirect").

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften, die wie erwartet gesetzt sind. Beachten Sie, dass sich die `ok`-Eigenschaft der Antwort auf `false` ändert, da der Statuswert nicht im Bereich von 200 bis 299 liegt.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
