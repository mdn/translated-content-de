---
title: "Window: requestIdleCallback() Methode"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die **`window.requestIdleCallback()`** Methode reiht eine Funktion in die Warteschlange ein, die während der Leerlaufzeiten eines Browsers aufgerufen werden soll. Dies ermöglicht es Entwicklern, im Hintergrund und mit niedriger Priorität auf dem Hauptthread zu arbeiten, ohne latenzkritische Ereignisse wie Animationen und Eingabereaktionen zu beeinträchtigen. Funktionen werden in der Regel in der Reihenfolge des ersten Eintreffens aufgerufen; jedoch können Rückrufe, die eine `timeout`-Angabe haben, außer der Reihe aufgerufen werden, falls nötig, um sie vor Ablauf des Zeitlimits auszuführen.

Sie können `requestIdleCallback()` innerhalb einer Leerlaufrückruffunktion aufrufen, um einen weiteren Rückruf zu planen, der nicht vor dem nächsten Durchlauf durch die Ereignisschleife stattfindet.

> [!NOTE]
> Eine `timeout`-Option wird dringend für erforderliche Arbeiten empfohlen,
> da andernfalls möglicherweise mehrere Sekunden vergehen, bevor der Rückruf ausgelöst wird.

## Syntax

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Parameter

- `callback`
  - : Eine Referenz zu einer Funktion, die in naher Zukunft aufgerufen werden soll, wenn die Ereignisschleife im Leerlauf ist. Der Rückruffunktion wird ein [`IdleDeadline`](/de/docs/Web/API/IdleDeadline) Objekt übergeben, das die verfügbare Zeit beschreibt und ob der Rückruf ausgeführt wurde, weil die Zeitüberschreitung abgelaufen ist.
- `options` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `timeout`
      - : Falls die Anzahl der Millisekunden, die durch diesen Parameter dargestellt werden, verstrichen sind und der Rückruf noch nicht aufgerufen wurde, wird eine Aufgabe zur Ausführung des Rückrufs in der Ereignisschleife eingereiht (auch wenn dies das Risiko negativer Auswirkungen auf die Leistung birgt). `timeout` muss ein positiver Wert sein, ansonsten wird er ignoriert.

### Rückgabewert

Eine ID, die verwendet werden kann, um den Rückruf zu stornieren, indem sie in die Methode [`window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) übergeben wird.

## Beispiele

Sehen Sie sich unser [komplettes Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API) an.

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
