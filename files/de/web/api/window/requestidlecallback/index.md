---
title: "Window: requestIdleCallback() Methode"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

Die **`window.requestIdleCallback()`** Methode stellt eine Funktion in die Warteschlange, die während der Leerlaufzeiten eines Browsers aufgerufen werden soll. Dies ermöglicht es Entwicklern, Hintergrund- und niedrig priorisierte Arbeiten in der Haupt-Ereignisschleife auszuführen, ohne latenzkritische Ereignisse wie Animationen und Eingabereaktionen zu beeinträchtigen. Funktionen werden in der Regel in der Reihenfolge des Eintreffens (first-in-first-out) aufgerufen; Callbacks, die eine `timeout`-Angabe haben, können jedoch bei Bedarf außer der Reihe aufgerufen werden, um sie vor Ablauf des Zeitlimits auszuführen.

Sie können `requestIdleCallback()` innerhalb einer Leerlauf-Callback-Funktion aufrufen, um einen weiteren Callback zu planen, der frühestens beim nächsten Durchlauf der Ereignisschleife stattfinden soll.

> [!NOTE]
> Eine `timeout`-Option wird für erforderliche Arbeiten nachdrücklich empfohlen, da sonst möglicherweise mehrere Sekunden vergehen, bevor der Callback ausgelöst wird.

## Syntax

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Parameter

- `callback`
  - : Eine Referenz auf eine Funktion, die in naher Zukunft aufgerufen werden soll, wenn die Ereignisschleife im Leerlauf ist. Der Callback-Funktion wird ein [`IdleDeadline`](/de/docs/Web/API/IdleDeadline) Objekt übergeben, das die verfügbare Zeit beschreibt und ob der Callback ausgeführt wurde, weil die Zeitüberschreitung abgelaufen ist.
- `options` {{optional_inline}}

  - : Beinhaltet optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:

    - `timeout`
      - : Wenn die durch diesen Parameter dargestellte Millisekundenanzahl verstrichen ist und der Callback noch nicht aufgerufen wurde, wird eine Aufgabe zur Ausführung des Callbacks in die Ereignisschleife gestellt (auch wenn dies ein Risiko negativer Leistungsauswirkungen birgt). `timeout` muss einen positiven Wert haben oder wird ignoriert.

### Rückgabewert

Eine ID, die verwendet werden kann, um den Callback abzubrechen, indem sie in die [`window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) Methode übergeben wird.

## Beispiele

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
