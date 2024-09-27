---
title: "Response: json() statische Methode"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Fetch API")}}

Die **`json()`** statische Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt eine `Response` zurück, die die bereitgestellten JSON-Daten als Body enthält und einen {{HTTPHeader("Content-Type")}}-Header, der auf `application/json` gesetzt ist.
Der Status der Antwort, die Statusmeldung und zusätzliche Header können ebenfalls festgelegt werden.

Die Methode erleichtert das Erstellen von `Response`-Objekten zum Zurückgeben von JSON-kodierten Daten.
[Service Worker](/de/docs/Web/API/Service_Worker_API), zum Beispiel, können Anfragen abfangen, die von einem Browser gesendet werden, und `json()` verwenden, um eine `Response` aus zwischengespeicherten JSON-Daten zu erstellen, die an den Hauptthread zurückgegeben wird.
Die `json()`-Methode kann auch im Servercode verwendet werden, um JSON-Daten für [Single Page Applications](/de/docs/Glossary/SPA) und andere Anwendungen, bei denen eine JSON-Antwort erwartet wird, zurückzugeben.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameter

- `data`
  - : Die JSON-Daten, die als Antwortkörper verwendet werden sollen.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Einstellungen für die Antwort enthält, einschließlich des Statuscodes, des Statustexts und der Header.
    Dies entspricht dem Optionsparameter des Konstruktors [`Response()`](/de/docs/Web/API/Response/Response).

    - `status`
      - : Der Statuscode für die Antwort, wie z.B. `200`.
    - `statusText`
      - : Die Statusmeldung, die dem Statuscode zugeordnet ist.
        Für einen Status von `200` könnte dies `OK` sein.
    - `headers`
      - : Alle Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers)-Objekt oder einem Objektliteral von {{jsxref("String")}} Schlüssel-Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Headers) für eine Referenz).

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn `data` nicht in einen JSON-String konvertiert werden kann.
    Dies könnte passieren, wenn die Daten ein JavaScript-Objekt mit einer Methode oder einer zirkulären Referenz sind, oder wenn das übergebene Objekt `undefined` ist.

## Beispiele

### Antwort mit JSON-Daten

Dieses Live-Beispiel zeigt, wie Sie ein JSON-Antwortobjekt erstellen und das neu erstellte Objekt zur Inspektion protokollieren können (der Protokollierungscode ist ausgeblendet, da er nicht relevant ist).

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

Der folgende Code erstellt ein `Response`-Objekt mit einem JSON-Körper `{ my: "data" }` und einem Header, der auf `application/json` gesetzt ist.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften.
Beachten Sie, dass der Körper und der Header wie erwartet gesetzt sind und dass der Standardstatus auf `200` gesetzt ist.

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

Der folgende Code erstellt ein `Response`-Objekt mit einem JSON-Körper `{ some: "data", more: "information" }` und einem Header, der auf `application/json` gesetzt ist.
Es setzt auch den Status auf `307` und setzt den entsprechenden Status-Text ("Temporary Redirect").

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften, die wie erwartet gesetzt sind.
Beachten Sie, dass sich die `ok`-Eigenschaft der Antwort zu `false` geändert hat, da der Statuswert nicht im Bereich von 200 bis 299 liegt.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
