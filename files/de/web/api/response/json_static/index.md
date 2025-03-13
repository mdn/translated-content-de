---
title: "Response: json() statische Methode"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`**-statische Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt eine `Response` zurück, die die bereitgestellten JSON-Daten als Body enthält, zusammen mit einem {{HTTPHeader("Content-Type")}}-Header, der auf `application/json` gesetzt ist. Der Response-Status, die Statusnachricht und zusätzliche Header können ebenfalls festgelegt werden.

Die Methode vereinfacht die Erstellung von `Response`-Objekten zum Zurückgeben von JSON-kodierten Daten. [Service Worker](/de/docs/Web/API/Service_Worker_API) zum Beispiel, fangen Fetch-Anfragen ab, die von einem Browser gemacht werden, und könnten `json()` verwenden, um eine `Response` aus zwischengespeicherten JSON-Daten zu erstellen und sie an den Haupt-Thread zurückzugeben. Die `json()`-Methode kann auch in Servercode verwendet werden, um JSON-Daten für {{Glossary("SPA", "Single-Page-Applications")}} und andere Anwendungen, bei denen eine JSON-Antwort erwartet wird, zurückzugeben.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameter

- `data`
  - : Die JSON-Daten, die als Antwort-Body verwendet werden sollen.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Einstellungen für die Antwort enthält, einschließlich des Statuscodes, des Status-Texts und der Header. Dies ist dasselbe wie der Options-Parameter des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors.

    - `status`
      - : Der Statuscode für die Antwort, z.B. `200`.
    - `statusText`
      - : Die Statusnachricht, die mit dem Statuscode assoziiert ist. Für einen Status von `200` könnte dies `OK` sein.
    - `headers`
      - : Alle Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder als Objektliteral von {{jsxref("String")}} Schlüssel/Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) für eine Referenz).

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn `data` nicht in einen JSON-String konvertiert werden kann. Dies könnte passieren, wenn die Daten ein JavaScript-Objekt sind, das eine Methode hat, oder das eine zirkuläre Referenz besitzt, oder wenn das übergebene Objekt `undefined` ist.

## Beispiele

### Antwort mit JSON-Daten

Dieses interaktive Beispiel zeigt, wie Sie ein JSON-Antwortobjekt erstellen können, und loggt das neu erstellte Objekt zur Inspektion (der Logcode ist verborgen, da er nicht relevant ist).

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

Der folgende Code erstellt ein `Response`-Objekt mit JSON-Body `{ my: "data" }` und Header auf `application/json` gesetzt.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften. Beachten Sie, dass der Body und der Header wie erwartet gesetzt sind und dass der Standardstatus auf `200` gesetzt ist.

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

Der folgende Code erstellt ein `Response`-Objekt mit JSON-Body `{ some: "data", more: "information" }` und Header auf `application/json` gesetzt. Es setzt auch den Status auf `307` und die entsprechende Statusnachricht ("Temporary Redirect").

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften, die wie erwartet gesetzt sind. Beachten Sie, dass die `ok`-Eigenschaft der Antwort auf `false` geändert wurde, da der Statuswert nicht im Bereich von 200 bis 299 liegt.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
