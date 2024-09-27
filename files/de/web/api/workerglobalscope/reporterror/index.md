---
title: "WorkerGlobalScope: reportError() Methode"
short-title: reportError()
slug: Web/API/WorkerGlobalScope/reportError
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`reportError()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle kann verwendet werden, um Fehler an die Konsole oder Ereignishandler globaler Bereiche zu melden, ähnlich wie bei einer nicht abgefangenen JavaScript-Ausnahme.

Diese Funktion ist in erster Linie für benutzerdefinierte Bibliotheken zur Ereignisverteilung oder Callback-Manipulation gedacht. Bibliotheken können diese Funktion verwenden, um Fehler im Callback-Code abzufangen und sie an den Top-Level-Handler weiterzuleiten. Dies stellt sicher, dass eine Ausnahme in einem Callback nicht verhindert, dass andere behandelt werden, und gleichzeitig sichergestellt wird, dass Stack-Trace-Informationen für das Debugging auf Top-Level-Ebene leicht verfügbar sind.

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

Der folgende Code zeigt, wie Sie möglicherweise einen Fehler erstellen und melden und wie er entweder mit der `onerror` Ereignishandlereigenschaft oder durch Hinzufügen eines Listeners für das `error` Ereignis abgefangen werden kann. Beachten Sie, dass der Handler, der `onerror` zugewiesen ist, `true` zurückgeben muss, um die weitere Propagierung des Ereignisses zu stoppen.

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
