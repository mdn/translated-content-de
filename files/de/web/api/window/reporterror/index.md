---
title: "Window: reportError() Methode"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: 4f90930051faa1ff1f4278068885e59c5bbb0069
---

{{APIRef("DOM")}}

Die **`reportError()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle kann verwendet werden, um Fehler in der Konsole oder in den Ereignishandlern globaler Gültigkeitsbereiche zu melden, indem ein nicht abgefangener JavaScript-Fehler simuliert wird.

Dieses Feature ist in erster Linie für Bibliotheken gedacht, die benutzerdefinierte Ereignis-Dispatching- oder Callback-Manipulationen durchführen.
Bibliotheken können dieses Feature verwenden, um Fehler im Callback-Code abzufangen und sie erneut an den übergeordneten Handler weiterzuleiten.
Dies stellt sicher, dass eine Ausnahme in einem Callback keine anderen daran hindert, behandelt zu werden, während gleichzeitig sichergestellt wird, dass Stack-Trace-Informationen auf oberster Ebene leicht verfügbar sind, um Fehler zu beheben.

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
  - : Die Methode wird ohne Argument aufgerufen, das einen Fehler darstellt.

## Beispiele

### Feature-Erkennung

Feature-Test für die Methode unter Verwendung von:

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

### Telemetrie

`reportError()` ermöglicht es, asynchrone Fehler genauso zu melden wie eingebaute Fehler. Das Sammeln aller Fehler an einem einzigen Punkt erleichtert es, Telemetriedaten über auftretende Fehler in einer Anwendung zu erfassen.

Zum Beispiel könnte eine Webanwendung einen globalen [`error`](/de/docs/Web/API/Window/error_event)-Ereignislistener einrichten, um alle nicht abgefangenen Fehler zu sammeln und zur Analyse an einen Server zu senden, wie z.B. durch die Nutzung von [Sentry](https://sentry.io/):

```js
window.addEventListener("error", (event) => {
  event.preventDefault(); // Prevent the default logging to console
  Sentry.captureException(event.error);
  console.error("Error encountered:", event.error);
  showToastNotification("An error occurred. Our team has been notified.");
});
```

Standardmäßig kann dieser Listener für nicht abgefangene Ausnahmen lauschen, die in synchroner `<script>`-Ausführung, `setTimeout`-Callbacks, Ereignishandlern, asynchronen Promise-Callbacks usw. geworfen werden. Bibliotheken und Anwendungen können `reportError()` verwenden, um ihre eigenen Fehler an diesen Listener zu übermitteln und sicherzustellen, dass alle Fehler auf konsistente Weise erfasst werden.

```js
function fetchUser(userId) {
  return fetch(`/api/users?id=${encodeURIComponent(userId)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch user with ID ${userId}`);
      }
      return response.json();
    })
    .catch((error) => {
      // Report the error to the global error handler
      window.reportError(error);
    });
}
```

Durch die Verwendung von `reportError()` anstatt den Fehler nicht abgefangen zu lassen, wird die nachfolgende Codeausführung nicht unterbrochen, während gleichzeitig sichergestellt wird, dass der Fehler protokolliert und analysiert werden kann. Diese Funktion kann beispielsweise in einem Test-Runner ohne zusätzliche `try...catch`-Handhabung aufgerufen werden.

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
