---
title: "Window: requestIdleCallback()-Methode"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}

Die **`window.requestIdleCallback()`**-Methode reiht eine Funktion zur Ausführung in den Leerlaufzeiten eines Browsers ein. Dies ermöglicht es Entwicklern, Hintergrundarbeiten und Arbeiten mit niedriger Priorität in der Hauptereignisschleife auszuführen, ohne latenzkritische Ereignisse wie Animationen und Eingaben zu beeinträchtigen. Funktionen werden im Allgemeinen in der Reihenfolge des Eingangs ausgeführt; allerdings können Rückrufe, für die eine `timeout`-Option angegeben ist, bei Bedarf außer der Reihe aufgerufen werden, um sie vor Ablauf des Zeitlimits auszuführen.

Sie können `requestIdleCallback()` innerhalb einer Leerlaufrückruffunktion aufrufen, um einen weiteren Rückruf zu planen, der frühestens in der nächsten Schleifeniteration stattfinden soll.

> [!NOTE]
> Eine `timeout`-Option wird für erforderliche Arbeiten dringend empfohlen, da sonst mehrere Sekunden vergehen können, bevor der Rückruf ausgelöst wird.

## Syntax

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Parameter

- `callback`
  - : Eine Referenz zu einer Funktion, die in naher Zukunft aufgerufen werden soll, wenn die Ereignisschleife im Leerlauf ist. Der Rückruffunktion wird ein [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)-Objekt übergeben, das die verfügbare Zeit und ob der Rückruf ausgeführt wurde, weil die Zeitbegrenzung abgelaufen ist, beschreibt.
- `options` {{optional_inline}}

  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:

    - `timeout`
      - : Wenn die in Millisekunden angegebene Zeit abgelaufen ist und der Rückruf noch nicht aufgerufen wurde, wird eine Aufgabe zur Ausführung des Rückrufs in der Ereignisschleife eingereiht (auch wenn dies das Risiko einer negativen Leistungsbeeinträchtigung birgt). `timeout` muss einen positiven Wert haben, sonst wird er ignoriert.

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
- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)
