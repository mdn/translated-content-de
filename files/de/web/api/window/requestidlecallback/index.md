---
title: "Window: requestIdleCallback()-Methode"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}

Die **`window.requestIdleCallback()`**-Methode fügt eine Funktion in die Warteschlange ein, die während der Leerlaufzeiten eines Browsers aufgerufen werden soll. Dies ermöglicht Entwicklern, Hintergrund- und niedrig priorisierte Arbeiten in der Haupt-Ereignisschleife auszuführen, ohne latenzkritische Ereignisse wie Animationen und Eingaben zu beeinträchtigen. Funktionen werden im Allgemeinen in der Reihenfolge ihres Eingangs aufgerufen; jedoch können Rückruffunktionen, die eine `timeout`-Spezifikation haben, außerhalb dieser Reihenfolge aufgerufen werden, falls erforderlich, um sie vor Ablauf des Timeouts auszuführen.

Sie können `requestIdleCallback()` innerhalb einer Leerlauf-Rückruffunktion aufrufen, um eine weitere Rückrufaktion einzuplanen, die frühestens in der nächsten Schleifeniteration stattfinden soll.

> [!NOTE]
> Eine `timeout`-Option wird dringend für notwendige Arbeiten empfohlen, da andernfalls möglicherweise mehrere Sekunden vergehen, bevor der Rückruf ausgelöst wird.

## Syntax

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Parameter

- `callback`
  - : Eine Referenz auf eine Funktion, die in naher Zukunft aufgerufen werden soll, wenn die Ereignisschleife im Leerlauf ist. Der Rückruf wird ein [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)-Objekt übergeben, das die verfügbare Zeit und ob der Rückruf ausgeführt wurde, weil die Timeout-Phase abgelaufen ist, beschreibt.
- `options` {{optional_inline}}

  - : Beinhaltet optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:

    - `timeout`
      - : Wenn die durch diesen Parameter dargestellte Anzahl von Millisekunden abgelaufen ist und der Rückruf noch nicht aufgerufen wurde, wird eine Aufgabe zum Ausführen des Rückrufs in der Ereignisschleife eingeplant (auch wenn dies ein negatives Leistungsrisiko birgt). `timeout` muss ein positiver Wert sein oder wird ignoriert.

### Rückgabewert

Eine ID, die verwendet werden kann, um den Rückruf abzubrechen, indem sie in die Methode [`window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback) übergeben wird.

## Beispiele

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
- [`setTimeout()`](/de/docs/Web/API/Settimeout)
- [`setInterval()`](/de/docs/Web/API/Setinterval)
- [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)
