---
title: "Response: json() statische Methode"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Fetch API")}}

Die **`json()`** statische Methode der {{domxref("Response")}} Schnittstelle gibt eine `Response` zurück, die die bereitgestellten JSON-Daten als Body enthält und einen {{HTTPHeader("Content-Type")}} Header, der auf `application/json` gesetzt ist. Der Antwortstatus, die Statusnachricht und zusätzliche Header können ebenfalls festgelegt werden.

Die Methode erleichtert es, `Response` Objekte zu erstellen, um JSON-kodierte Daten zurückzugeben. [Service Workers](/de/docs/Web/API/Service_Worker_API) beispielsweise fangen Fetch-Anfragen ab, die von einem Browser ausgeführt werden, und könnten `json()` verwenden, um eine `Response` aus gespeicherten JSON-Daten zu erstellen, die an den Hauptthread zurückgegeben werden soll. Die `json()` Methode kann auch in Server-Code verwendet werden, um JSON-Daten für [Single Page Applications](/de/docs/Glossary/SPA) und alle anderen Anwendungen zurückzugeben, bei denen eine JSON-Antwort erwartet wird.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameter

- `data`
  - : Die JSON-Daten, die als Antwortbody verwendet werden sollen.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Einstellungen für die Antwort enthält, einschließlich des Statuscodes, des Status-Textes und der Header.
    Dies ist dasselbe wie der Optionsparameter des {{domxref("Response.Response", "Response()")}} Konstruktors.

    - `status`
      - : Der Statuscode für die Antwort, wie zum Beispiel `200`.
    - `statusText`
      - : Die Statusnachricht, die mit dem Statuscode verbunden ist.
        Für einen Status von `200` könnte dies `OK` sein.
    - `headers`
      - : Beliebige Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem {{domxref("Headers")}} Objekt oder Objektliteral von {{jsxref("String")}} Schlüssel/Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Headers) für eine Referenz).

### Rückgabewert

Ein {{domxref("Response")}} Objekt.

### Ausnahmen

- `TypeError`
  - : Ausgelöst, wenn `data` nicht in einen JSON-String konvertiert werden kann. Dies könnte passieren, wenn die Daten ein JavaScript-Objekt sind, das eine Methode hat, oder das eine zirkuläre Referenz hat, oder wenn das übergebene Objekt `undefined` ist.

## Beispiele

### Antwort mit JSON-Daten

Dieses Live-Beispiel zeigt, wie Sie ein JSON-Antwortobjekt erstellen können, und protokolliert das neu erstellte Objekt zur Inspektion (das Protokollierungscode ist ausgeblendet, da es nicht relevant ist).

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

Der Code unten erstellt ein `Response` Objekt mit einem JSON-Body `{ my: "data" }` und der Kopfzeile, die auf `application/json` gesetzt ist.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften. Beachten Sie, dass der Body und der Header wie erwartet gesetzt sind und der Standardstatus auf `200` gesetzt ist.

{{EmbedLiveSample('Response with JSON data','100%', '170')}}

### Antwort mit JSON-Daten und Optionen

Dieses Beispiel zeigt, wie Sie ein JSON-Antwortobjekt mit `status` und `statusText` Optionen erstellen können.

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

Der Code unten erstellt ein `Response` Objekt mit einem JSON-Body `{ some: "data", more: "information" }` und der Kopfzeile, die auf `application/json` gesetzt ist. Er setzt auch den Status auf `307` und setzt den entsprechenden Status-Text ("Temporary Redirect").

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften, die wie erwartet gesetzt werden. Beachten Sie, dass sich die `ok`-Eigenschaft der Antwort auf `false` geändert hat, da der Statuswert nicht im Bereich von 200 bis 299 liegt.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
