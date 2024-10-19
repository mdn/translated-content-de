---
title: "Window: reportError()-Methode"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: a44e9fc017ec15af0b8e0c0101ea895b9cb30522
---

{{APIRef("DOM")}}

Die **`reportError()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle kann verwendet werden, um Fehler an die Konsole oder Ereignishandler globaler Bereiche zu melden und emuliert so eine nicht abgefangene JavaScript-Ausnahme.

Dieses Feature ist in erster Linie für benutzerdefinierte Event-Dispatching- oder Callback-Manipulationsbibliotheken gedacht.
Bibliotheken können diese Funktion nutzen, um Fehler im Callback-Code abzufangen und sie an den obersten Handler weiterzuleiten.
Dies stellt sicher, dass eine Ausnahme in einem Callback nicht verhindert, dass andere behandelt werden, während gleichzeitig sichergestellt wird, dass Stack-Trace-Informationen für das Debugging auf oberster Ebene leicht zugänglich sind.

## Syntax

```js-nolint
reportError(throwable)
```

### Parameter

- `throwable`
  - : Ein Fehlerobjekt wie zum Beispiel ein {{jsxref("TypeError")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Methode wird ohne ein Fehlerargument aufgerufen.

## Beispiele

Funktionsprüfung für die Methode mit:

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

Der folgende Code zeigt, wie Sie einen Fehler erstellen und melden können und wie er entweder mit der `onerror`-Ereignishandlereigenschaft oder durch Hinzufügen eines Listeners für das `error`-Ereignis abgefangen werden kann.
Beachten Sie, dass der Handler, der `onerror` zugewiesen ist, `true` zurückgeben muss, um zu verhindern, dass das Ereignis weiter verbreitet wird.

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
- [`Window`](/de/docs/Web/API/Window): [`error`](/de/docs/Web/API/Window/error_event) Ereignis
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope): [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event) Ereignis
- [`HTMLElement`](/de/docs/Web/API/HTMLElement): [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
