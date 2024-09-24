---
title: "Planung: isInputPending() Methode"
short-title: isInputPending()
slug: Web/API/Scheduling/isInputPending
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Die **`isInputPending()`** Methode der {{domxref("Scheduling")}} Schnittstelle ermöglicht es Ihnen zu überprüfen, ob sich ausstehende Eingabeereignisse in der Ereigniswarteschlange befinden, was darauf hinweist, dass der Benutzer versucht, mit der Seite zu interagieren.

Diese Funktion ist nützlich in Situationen, in denen Sie eine Warteschlange von Aufgaben haben und den Hauptthread regelmäßig freigeben möchten, um Benutzerinteraktionen zu ermöglichen, damit die Anwendung so reaktionsschnell und performant wie möglich bleibt. `isInputPending()` ermöglicht es Ihnen, nur dann nachzugeben, wenn eine Eingabe aussteht, anstatt dies in willkürlichen Intervallen zu tun.

`isInputPending()` wird über `navigator.scheduling.isInputPending()` aufgerufen.

## Syntax

```js-nolint
isInputPending()
isInputPending(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen bereitstellt. Derzeit ist die einzige Option:
    - `includeContinuous` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, zeigt dies an, dass kontinuierliche Ereignisse bei der Überprüfung auf ausstehende Eingaben berücksichtigt werden sollen. Kontinuierliche Ereignisse sind vertrauenswürdige Ereignisse (Ereignisse, die vom Browser ausgelöst werden), die nacheinander ausgeführt werden, wie z.B. {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("HTMLElement/drag_event", "drag")}}, {{domxref("Element/pointermove_event", "pointermove")}}, und {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}.

### Rückgabewert

Ein boolescher Wert, der anzeigt, ob sich ausstehende Eingabeereignisse in der Ereigniswarteschlange befinden (`true`) oder nicht (`false`).

## Beispiele

Wir können `isInputPending()` innerhalb einer Aufgabenstruktur verwenden, um die Funktion `yield()` nur dann auszuführen, wenn der Benutzer versucht, mit der Seite zu interagieren:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

async function main() {
  // Erstellen Sie ein Array von Funktionen, die ausgeführt werden sollen
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Auf eine ausstehende Benutzereingabe reagieren
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Entfernen Sie die erste Aufgabe aus dem Aufgabenarray
      const task = tasks.shift();

      // Führen Sie die Aufgabe aus
      task();
    }
  }
}
```

Dies ermöglicht es Ihnen, den Hauptthread nicht zu blockieren, wenn der Benutzer aktiv mit der Seite interagiert, was potenziell eine flüssigere Benutzererfahrung bietet. Wenn jedoch nur bei Bedarf nachgegeben wird, können wir die aktuelle Aufgabe weiter ausführen, wenn keine Benutzereingaben zu verarbeiten sind. Dies verhindert auch, dass Aufgaben hinter andere nicht wesentliche, vom Browser initiierte Aufgaben, die nach der aktuellen geplant wurden, zurückgestellt werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Schnellere Eingabeereignisse mit Facebooks erstem Browser-API-Beitrag](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Bessere JS-Planung mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimieren langer Aufgaben](https://web.dev/articles/optimize-long-tasks#yield_only_when_necessary) auf web.dev (2022)
