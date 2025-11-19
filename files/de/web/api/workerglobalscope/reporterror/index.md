---
title: "WorkerGlobalScope: reportError()-Methode"
short-title: reportError()
slug: Web/API/WorkerGlobalScope/reportError
l10n:
  sourceCommit: 4f90930051faa1ff1f4278068885e59c5bbb0069
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`reportError()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle kann verwendet werden, um Fehler an die Konsole oder Ereignishandler globaler Geltungsbereiche zu melden und so eine nicht abgefangene JavaScript-Ausnahme zu emulieren.

Diese Funktion ist hauptsächlich für Bibliotheken gedacht, die benutzerdefinierte Ereignisdispositionen oder Callback-Manipulationen durchführen.
Bibliotheken können diese Funktion nutzen, um Fehler in Callback-Code abzufangen und sie an den obersten Handler weiterzuleiten.
Dies stellt sicher, dass eine Ausnahme in einem Callback nicht verhindert, dass andere behandelt werden, und gleichzeitig bleibt die Informationen des Stack-Traces für das Debugging auf oberster Ebene leicht zugänglich.

Weitere Informationen finden Sie unter [`window.reportError()`](/de/docs/Web/API/Window/reportError).

## Syntax

```js-nolint
reportError(throwable)
```

### Parameter

- `throwable`
  - : Jeder JavaScript-Wert, vorzugsweise jedoch ein Fehlerobjekt wie ein {{jsxref("TypeError")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Methode wird ohne ein Fehlerargument aufgerufen.

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
