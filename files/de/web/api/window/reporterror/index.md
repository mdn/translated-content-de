---
title: "Window: reportError()-Methode"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("DOM")}}

Die **`reportError()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces kann verwendet werden, um Fehler an die Konsole oder Event-Handler globaler Bereiche zu melden, wodurch ein nicht abgefangener JavaScript-Ausnahmefall simuliert wird.

Diese Funktion ist hauptsächlich für benutzerdefinierte Event-Dispatching- oder Callback-manipulierende Bibliotheken gedacht.
Bibliotheken können diese Funktion nutzen, um Fehler im Callback-Code abzufangen und sie an den Top-Level-Handler weiterzuleiten.
Dies stellt sicher, dass eine Ausnahme in einem Callback nicht verhindert, dass andere verarbeitet werden, während gleichzeitig die Stack-Trace-Informationen für das Debugging auf Top-Ebene leicht verfügbar bleiben.

## Syntax

```js-nolint
reportError(throwable)
```

### Parameter

- `throwable`
  - : Ein Fehlerobjekt wie ein {{jsxref("TypeError")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Methode wird ohne Fehlerargument aufgerufen.

## Beispiele

Feature-Test für die Methode mit:

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

Der folgende Code zeigt, wie Sie einen Fehler erstellen und melden können und wie dieser entweder mit der `onerror`-Event-Handler-Eigenschaft oder durch Hinzufügen eines Listeners für das `error`-Event abgefangen werden kann.
Beachten Sie, dass der Handler, der `onerror` zugewiesen ist, `true` zurückgeben muss, um zu verhindern, dass das Ereignis weiterverbreitet wird.

```js
const newError = new Error("Some error message", "someFile.js", 11);
window.reportError(newError);

window.onerror = (message, source, lineno, colno, error) => {
  console.error(`message: ${error.message}, lineno: ${lineno}`);
  return true;
};

window.addEventListener("error", (error) => {
  console.error(error.filename);
});

// Output
// > "message:Some error message, lineno: 11"
// > "someFile.js"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window`](/de/docs/Web/API/Window)
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
- [`error`](/de/docs/Web/API/Window/error_event) Ereignis
- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event) Ereignis
- [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
