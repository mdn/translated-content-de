---
title: "Window: Methode reportError()"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`reportError()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle kann verwendet werden, um Fehler in der Konsole oder in den Ereignis-Handlern globaler Bereiche zu melden, indem ein nicht abgefangener JavaScript-Ausnahmefehler simuliert wird.

Dieses Feature ist in erster Linie für Bibliotheken gedacht, die eigene Ereignissteuerung oder Rückrufmanipulation implementieren.
Bibliotheken können dieses Feature nutzen, um Fehler in Rückruf-Code abzufangen und sie an die oberste Ebene der Verarbeitung weiterzugeben. Dies stellt sicher, dass eine Ausnahme in einem Rückruf nicht verhindert, dass andere behandelt werden, während gleichzeitig sichergestellt wird, dass die Stack-Trace-Informationen auf höchster Ebene leicht zugänglich bleiben, um sie zu debuggen.

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

## Beispiele

### Feature-Erkennung

Feature-Test für die Methode mit:

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

### Telemetrie

`reportError()` ermöglicht das Melden von asynchronen Fehlern ähnlich wie bei integrierten Fehlern. Die Aggregation aller Fehler an einem einzigen Punkt erleichtert die Sammlung von Telemetriedaten über Fehler, die in einer Anwendung auftreten.

Zum Beispiel könnte eine Webanwendung einen globalen [`error`](/de/docs/Web/API/Window/error_event) Ereignis-Listener einrichten, um alle nicht abgefangenen Fehler zu sammeln und sie zwecks Analyse an einen Server zu senden, beispielsweise unter Verwendung von [Sentry](https://sentry.io/):

```js
window.addEventListener("error", (event) => {
  event.preventDefault(); // Prevent the default logging to console
  Sentry.captureException(event.error);
  console.error("Error encountered:", event.error);
  showToastNotification("An error occurred. Our team has been notified.");
});
```

Standardmäßig kann dieser Listener für nicht abgefangene Ausnahmen bei synchroner `<script>`-Ausführung, `setTimeout`-Rückrufen, Ereignis-Handlern, asynchronen Promise-Rückrufen usw. lauschen. Bibliotheken und Anwendungen können `reportError()` nutzen, um ihre eigenen Fehler an diesen Listener zu übermitteln, wodurch sichergestellt wird, dass alle Fehler auf konsistente Weise erfasst werden.

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

Durch die Verwendung von `reportError()` anstelle des unbemerkten Auftretens des Fehlers wird die nachfolgende Code-Ausführung nicht unterbrochen, während dennoch sichergestellt wird, dass der Fehler protokolliert und analysiert werden kann. Diese Funktion kann beispielsweise in einem Test-Runner aufgerufen werden, ohne dass ein zusätzliches `try...catch`-Handling erforderlich ist.

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
