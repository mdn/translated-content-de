---
title: "WorkerGlobalScope: reportError() Methode"
short-title: reportError()
slug: Web/API/WorkerGlobalScope/reportError
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`reportError()`** Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface kann verwendet werden, um Fehler an die Konsole oder die Ereignishandler globaler Bereiche zu melden und dabei eine nicht abgefangene JavaScript-Ausnahme zu simulieren.

Dieses Feature ist in erster Linie für benutzerdefinierte Event-Dispatching- oder Callback-Manipulations-Bibliotheken vorgesehen.
Bibliotheken können dieses Feature nutzen, um Fehler im Callback-Code abzufangen und auf den obersten Ebenen erneut auszulösen.
Dies stellt sicher, dass eine Ausnahme in einem Callback andere nicht daran hindert, behandelt zu werden, während gleichzeitig sichergestellt wird, dass Stack-Trace-Informationen für das Debugging auf oberster Ebene weiterhin leicht verfügbar sind.

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
  - : Die Methode wird ohne ein Fehlerargument aufgerufen.

## Beispiele

Feature-Test für die Methode mit:

```js
if (typeof self.reportError === "function") {
  // function is defined
}
```

Der folgende Code zeigt, wie Sie einen Fehler erstellen und melden können und wie er entweder mit der `onerror`-Ereignishandler-Eigenschaft oder durch Hinzufügen eines Listeners für das `error`-Ereignis abgefangen werden kann.
Beachten Sie, dass der Handler, der `onerror` zugewiesen ist, `true` zurückgeben muss, um zu verhindern, dass das Ereignis weiter propagiert wird.

```js
const newError = new Error("Some error message", "someFile.js", 11);
self.reportError(newError);

self.onerror = (message, source, lineno, colno, error) => {
  console.error(`message: ${error.message}, lineno: ${lineno}`);
  return true;
};

self.addEventListener("error", (error) => {
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

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`Window.reportError()`](/de/docs/Web/API/Window/reportError)
- [`error`](/de/docs/Web/API/Window/error_event) Ereignis
- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event) Ereignis
- [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
