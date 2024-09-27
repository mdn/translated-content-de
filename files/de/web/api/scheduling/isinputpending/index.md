---
title: "Scheduling: isInputPending() Methode"
short-title: isInputPending()
slug: Web/API/Scheduling/isInputPending
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Die **`isInputPending()`**-Methode der [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle ermöglicht es Ihnen zu überprüfen, ob Eingabeereignisse in der Ereigniswarteschlange anstehen, was darauf hinweist, dass der Benutzer versucht, mit der Seite zu interagieren.

Diese Funktion kann nützlich sein, wenn Sie eine Warteschlange von Aufgaben haben und regelmäßig zur Hauptausführung zurückkehren möchten, um Benutzerinteraktionen zu ermöglichen, damit die App so reaktionsschnell und leistungsfähig wie möglich bleibt. `isInputPending()` ermöglicht es, nur dann zurückzukehren, wenn Eingaben anstehen, statt dies in willkürlichen Abständen zu tun.

> [!WARNING]
> Die Methode `isInputPending()` wurde durch Funktionen auf der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wie [`yield()`](/de/docs/Web/API/Scheduler/yield) ersetzt, die besser für die Aufgabenplanung geeignet sind. Weitere Details finden Sie unter [Don't use `isInputPending()`](https://web.dev/articles/optimize-long-tasks#isinputpending).

`isInputPending()` wird mit `navigator.scheduling.isInputPending()` aufgerufen.

## Syntax

```js-nolint
isInputPending()
isInputPending(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen. Derzeit gibt es nur die folgende Option:
    - `includeContinuous` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, gibt er an, dass kontinuierliche Ereignisse bei der Überprüfung auf anstehende Eingaben berücksichtigt werden sollen. Kontinuierliche Ereignisse sind vertrauenswürdige Ereignisse (Ereignisse, die vom Browser ausgegeben werden), die nacheinander ausgelöst werden, wie [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`wheel`](/de/docs/Web/API/Element/wheel_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event).

### Rückgabewert

Ein boolescher Wert, der angibt, ob Eingabeereignisse in der Ereigniswarteschlange anstehen (`true`) oder nicht (`false`).

## Beispiele

Wir können `isInputPending()` in einer Aufgabenlaufstruktur verwenden, um die `yield()`-Funktion nur dann auszuführen, wenn der Benutzer versucht, mit der Seite zu interagieren:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Yield to a pending user input
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Shift the first task off the tasks array
      const task = tasks.shift();

      // Run the task
      task();
    }
  }
}
```

Dies ermöglicht es Ihnen, die Hauptausführung nicht zu blockieren, wenn der Benutzer aktiv mit der Seite interagiert, was möglicherweise eine reibungslosere Benutzererfahrung bietet. Indem wir jedoch nur dann zurückkehren, wenn es notwendig ist, können wir die aktuelle Aufgabe weiterführen, wenn keine Benutzereingaben zu bearbeiten sind. Dies verhindert auch, dass Aufgaben hinter andere nicht essentielle, vom Browser initiierte Aufgaben zurückgestellt werden, die nach der aktuellen Aufgabe geplant wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_task_scheduling_api)
- [Schnellere Eingabeereignisse mit Facebooks erstem Beitrag zur Browser-API](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Bessere JS-Zeitplanung mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks#yield_only_when_necessary) auf web.dev (2022)
