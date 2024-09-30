---
title: "Window: reportError() Methode"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("DOM")}}

Die **`reportError()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces kann verwendet werden, um Fehler an die Konsole oder Ereignis-Handler globaler Bereiche zu melden, ähnlich wie bei einer nicht abgefangenen JavaScript-Ausnahme.

Dieses Feature ist hauptsächlich für benutzerdefinierte Bibliotheken zur Ereignisverteilung oder zur Manipulation von Callback-Funktionen gedacht.
Bibliotheken können dieses Feature nutzen, um Fehler im Callback-Code abzufangen und sie erneut dem obersten Handler zu übergeben.
Dies stellt sicher, dass eine Ausnahme in einem Callback nicht verhindert, dass andere verarbeitet werden, und gleichzeitig sind die Stack-Trace-Informationen für das Debugging auf der obersten Ebene weiterhin verfügbar.

## Syntax

```js-nolint
reportError(throwable)
```

### Parameter

- `throwable`
  - : Ein Error-Objekt wie ein {{jsxref("TypeError")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Methode wird ohne Fehler-Argument aufgerufen.

## Beispiele

Feature-Test für die Methode:

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

Der folgende Code zeigt, wie Sie einen Fehler erstellen und melden können und wie dieser entweder über die `onerror`-Ereignishandler-Eigenschaft oder durch Hinzufügen eines Listeners für das `error`-Ereignis abgefangen werden kann.
Beachten Sie, dass der Handler, der `onerror` zugewiesen wird, `true` zurückgeben muss, um die weitere Ausbreitung des Ereignisses zu stoppen.

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
