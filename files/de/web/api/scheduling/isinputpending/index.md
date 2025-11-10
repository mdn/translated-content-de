---
title: "Scheduling: isInputPending()-Methode"
short-title: isInputPending()
slug: Web/API/Scheduling/isInputPending
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Die **`isInputPending()`**-Methode des [`Scheduling`](/de/docs/Web/API/Scheduling)-Interfaces ermöglicht es Ihnen zu überprüfen, ob es ausstehende Eingabeereignisse in der Ereignis-Warteschlange gibt, was darauf hinweist, dass der Benutzer versucht, mit der Seite zu interagieren.

Diese Funktion kann in Situationen nützlich sein, in denen Sie eine Warteschlange von Aufgaben haben, die ausgeführt werden sollen, und regelmäßig dem Haupt-Thread Vorfahrt einräumen möchten, um die Benutzerinteraktion zu ermöglichen, damit die Anwendung so reaktionsschnell und leistungsfähig wie möglich bleibt. `isInputPending()` ermöglicht es Ihnen, nur dann Vorfahrt zu gewähren, wenn Eingaben anstehen, anstatt dies in willkürlichen Intervallen zu tun.

> [!WARNING]
> Die `isInputPending()`-Methode wurde durch Funktionen ersetzt, die im [`Scheduler`](/de/docs/Web/API/Scheduler)-Interface verfügbar sind, wie zum Beispiel [`yield()`](/de/docs/Web/API/Scheduler/yield), die besser zur Lösung von Planungsaufgaben entworfen wurden. Siehe [Verwenden Sie `isInputPending()` nicht](https://web.dev/articles/optimize-long-tasks#isinputpending) für weitere Details.

`isInputPending()` wird mit `navigator.scheduling.isInputPending()` aufgerufen.

## Syntax

```js-nolint
isInputPending()
isInputPending(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen bereitstellt. Derzeit ist die einzige Option:
    - `includeContinuous` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird dadurch angezeigt, dass kontinuierliche Ereignisse beim Überprüfen auf ausstehende Eingaben berücksichtigt werden sollten. Kontinuierliche Ereignisse sind vertrauenswürdige Ereignisse (vom Browser ausgelöste Ereignisse), die aufeinanderfolgend gefeuert werden, wie [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`wheel`](/de/docs/Web/API/Element/wheel_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event) und [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event).

### Rückgabewert

Ein boolescher Wert, der angibt, ob ausstehende Eingabeereignisse in der Ereignis-Warteschlange vorhanden sind (`true`) oder nicht (`false`).

## Beispiele

Wir können `isInputPending()` innerhalb einer Aufgabenlaufstruktur verwenden, um die `yield()`-Funktion nur auszuführen, wenn der Benutzer versucht, mit der Seite zu interagieren:

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

Dies ermöglicht es Ihnen, den Haupt-Thread nicht zu blockieren, wenn der Benutzer aktiv mit der Seite interagiert, was möglicherweise ein reibungsloseres Benutzererlebnis bietet. Indem wir jedoch nur dann Vorfahrt gewähren, wenn dies erforderlich ist, können wir die aktuelle Aufgabe fortsetzen, wenn keine Benutzereingaben zu verarbeiten sind. Dies verhindert auch, dass Aufgaben in die Warteschlange hinter andere nicht wesentliche vom Browser initiierte Aufgaben gestellt werden, die nach der aktuellen Aufgabe geplant wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Scheduler`](/de/docs/Web/API/Scheduler)-Interface
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [Faster input events with Facebook's first browser API contribution](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Better JS scheduling with isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks#yield_only_when_necessary) auf web.dev (2022)
