---
title: "Response: Statische Methode json()"
short-title: json()
slug: Web/API/Response/json_static
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die statische Methode **`json()`** der Schnittstelle [`Response`](/de/docs/Web/API/Response) gibt eine `Response` zurück, deren Body die bereitgestellten JSON-Daten enthält und deren {{HTTPHeader("Content-Type")}}-Header auf `application/json` gesetzt ist.
Auch der Status, der Statustext und zusätzliche Header der Antwort können festgelegt werden.

Die Methode erleichtert das Erstellen von `Response`-Objekten zur Rückgabe JSON-kodierter Daten.
[Service Worker](/de/docs/Web/API/Service_Worker_API) fangen beispielsweise Fetch-Anfragen eines Browsers ab und können `json()` verwenden, um aus zwischengespeicherten JSON-Daten eine `Response` zu erstellen, die an den Hauptthread zurückgegeben wird.
Die Methode `json()` kann auch in serverseitigem Code verwendet werden, um JSON-Daten für {{Glossary("SPA", "Single-Page-Anwendungen")}} und andere Anwendungen zurückzugeben, die eine JSON-Antwort erwarten.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameter

- `data`
  - : Die JSON-Daten, die als Body der Antwort verwendet werden.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit Einstellungen für die Antwort, einschließlich Statuscode, Statustext und Headern.
    Es entspricht dem Optionsparameter des Konstruktors [`Response()`](/de/docs/Web/API/Response/Response).
    - `status`
      - : Der Statuscode der Antwort, beispielsweise `200`.
    - `statusText`
      - : Der zum Statuscode gehörende Statustext.
        Bei einem Status von `200` könnte dies `OK` sein.
    - `headers`
      - : Zusätzliche Header für die Antwort, angegeben als [`Headers`](/de/docs/Web/API/Headers)-Objekt oder als Objektliteral mit {{jsxref("String")}}-Schlüssel-Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) als Referenz).

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `data` nicht in einen JSON-String umgewandelt werden kann.
    Dies kann beispielsweise passieren, wenn die Daten ein JavaScript-Objekt mit einer Methode oder einem zirkulären Verweis sind oder wenn das übergebene Objekt `undefined` ist.

## Beispiele

### Antwort mit JSON-Daten

Dieses interaktive Beispiel zeigt, wie Sie ein JSON-Antwortobjekt erstellen. Das neu erstellte Objekt wird zur Überprüfung protokolliert (der dafür zuständige Code ist ausgeblendet, da er hier nicht relevant ist).

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

Der folgende Code erstellt ein `Response`-Objekt mit dem JSON-Body `{ my: "data" }` und einem auf `application/json` gesetzten Header.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften.
Beachten Sie, dass Body und Header wie erwartet gesetzt sind und der Standardstatus `200` ist.

{{EmbedLiveSample('Response with JSON data','100%', '170')}}

### Antwort mit JSON-Daten und Optionen

Dieses Beispiel zeigt, wie Sie ein JSON-Antwortobjekt mit den Optionen `status` und `statusText` erstellen.

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

Der folgende Code erstellt ein `Response`-Objekt mit dem JSON-Body `{ some: "data", more: "information" }` und einem auf `application/json` gesetzten Header.
Außerdem setzt er den Status auf `307` und den zugehörigen Statustext („Temporary Redirect“).

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

Das Objekt hat die folgenden Eigenschaften, die wie erwartet gesetzt sind.
Beachten Sie, dass die Eigenschaft `ok` der Antwort auf `false` gesetzt ist, da der Statuswert nicht im Bereich von 200 bis 299 liegt.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
