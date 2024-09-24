---
title: Globale Funktion reportError()
short-title: reportError()
slug: Web/API/reportError
l10n:
  sourceCommit: b1de0127fcd1ea9615cfc97b56a139049aafc20a
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

Die globale Methode **`reportError()`** kann verwendet werden, um Fehler an die Konsole oder globale Ereignishandler zu melden und dabei eine nicht abgefangene JavaScript-Ausnahme zu simulieren.

Diese Funktion ist in erster Linie für benutzerdefinierte Bibliotheken zur Ereignisverteilung oder Callback-Manipulation gedacht. Bibliotheken können diese Funktion nutzen, um Fehler im Callback-Code abzufangen und sie an den Top-Level-Handler weiterzuleiten. Dies stellt sicher, dass eine Ausnahme in einem Callback andere nicht daran hindert, verarbeitet zu werden, während gleichzeitig die Stack-Trace-Informationen für das Debugging auf Top-Ebene verfügbar bleiben.

<!-- {{EmbedInteractiveExample("pages/js/self-reporterror.html")}} -->

## Syntax

```js-nolint
reportError(throwable)
```

### Parameter

- `throwable`
  - : Ein Fehlerobjekt wie z.B. ein {{jsxref("TypeError")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Methode wird ohne Fehlerargument aufgerufen.

## Beispiele

Feature-Test für die Methode mit:

```js
if (typeof self.reportError === "function") {
  // Funktion ist definiert
}
```

Der folgende Code zeigt, wie Sie einen Fehler erzeugen und melden können und wie er entweder mit dem globalen `onerror`-Handler oder durch Hinzufügen eines Listeners für das `error`-Ereignis abgefangen werden kann. Beachten Sie, dass der Handler, der `onerror` zugewiesen ist, `true` zurückgeben muss, um die weitere Ausbreitung des Ereignisses zu stoppen.

```js
const newError = new Error("Some error message", "someFile.js", 11);
self.reportError(newError);

window.onerror = (message, source, lineno, colno, error) => {
  console.error(`message: ${error.message}, lineno: ${lineno}`);
  return true;
};

self.addEventListener("error", (error) => {
  console.error(error.filename);
});

// Ausgabe
// > "message:Some error message, lineno: 11"
// > "someFile.js"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window`](/de/docs/Web/API/Window)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis
