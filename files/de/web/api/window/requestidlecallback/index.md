---
title: "Window: requestIdleCallback() Methode"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: eca008fcfa2d482164b7989254e77ed1817d7388
---

{{APIRef("HTML DOM")}}

Die **`window.requestIdleCallback()`** Methode reiht eine Funktion ein, die während der Leerlaufzeiten eines Browsers aufgerufen werden soll. Dies ermöglicht Entwicklern, Hintergrund- und Arbeiten mit niedriger Priorität im Hauptthread durchzuführen, ohne latenzkritische Ereignisse wie Animationen und Eingabeantworten zu beeinträchtigen. Funktionen werden im Allgemeinen in der Reihenfolge ihres Eingangs aufgerufen; jedoch können Callbacks, die eine `timeout`-Einstellung haben, außer der Reihe aufgerufen werden, wenn dies notwendig ist, um sie vor Ablauf des Zeitlimits auszuführen.

Sie können `requestIdleCallback()` innerhalb einer Leerlaufrückruffunktion aufrufen, um einen weiteren Callback zu planen, der nicht früher als beim nächsten Durchlauf der Ereignisschleife stattfindet.

> [!NOTE]
> Eine `timeout`-Option wird für erforderliche Arbeiten dringend empfohlen, da es ansonsten möglich ist, dass mehrere Sekunden vergehen, bevor der Callback ausgelöst wird.

## Syntax

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Parameter

- `callback`
  - : Eine Referenz auf eine Funktion, die in naher Zukunft aufgerufen werden soll, wenn die Ereignisschleife im Leerlauf ist. Der Rückruf-Funktion wird ein [`IdleDeadline`](/de/docs/Web/API/IdleDeadline) Objekt übergeben, das beschreibt, wie viel Zeit verfügbar ist und ob der Callback aufgrund des abgelaufenen Zeitlimits ausgeführt wurde.
- `options` {{optional_inline}}

  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:

    - `timeout`
      - : Wenn die Anzahl der durch diesen Parameter repräsentierten Millisekunden verstrichen ist und der Callback noch nicht aufgerufen wurde, wird eine Aufgabe zur Ausführung des Callbacks in die Ereignisschleife gestellt (selbst wenn dadurch ein negativer Leistungseinfluss riskiert wird). `timeout` muss ein positiver Wert sein oder wird ignoriert.

### Rückgabewert

Eine ID, die verwendet werden kann, um den Callback zu stornieren, indem sie in die Methode [`window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) übergeben wird.

## Beispiele

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperatives Scheduling der Background Tasks API](/de/docs/Web/API/Background_Tasks_API).

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
