---
title: "Fenster: requestIdleCallback()-Methode"
short-title: requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("HTML DOM")}}

Die **`window.requestIdleCallback()`** Methode stellt eine Funktion in die Warteschlange, die während der Leerlaufzeiten des Browsers aufgerufen werden soll. Dies ermöglicht es Entwicklern, Hintergrund- und Niedrigprioritätsarbeiten in der Haupt-Ereignisschleife auszuführen, ohne die Latenz-kritischen Ereignisse wie Animationen und Eingabereaktionen zu beeinträchtigen. Funktionen werden im Allgemeinen in der Reihenfolge des Eingangs aufgerufen; jedoch können Rückrufe, die eine `timeout`-Option spezifiziert haben, gegebenenfalls außer der Reihe ausgeführt werden, um sie zu bedienen, bevor die Zeitüberschreitung abläuft.

Sie können `requestIdleCallback()` innerhalb einer Leerlauf-Rückruffunktion aufrufen, um einen weiteren Rückruf zu planen, der frühestens beim nächsten Durchlauf der Ereignisschleife stattfinden soll.

> [!NOTE]
> Es wird dringend empfohlen, eine `timeout`-Option für erforderliche Arbeiten zu verwenden, da andernfalls mehrere Sekunden vergehen können, bevor der Rückruf ausgelöst wird.

## Syntax

```js-nolint
requestIdleCallback(callback)
requestIdleCallback(callback, options)
```

### Parameter

- `callback`
  - : Eine Referenz auf eine Funktion, die in naher Zukunft aufgerufen werden sollte, wenn die Ereignisschleife im Leerlauf ist. Der Rückruffunktion wird ein {{domxref("IdleDeadline")}}-Objekt übergeben, das die verfügbare Zeit beschreibt und ob der Rückruf ausgeführt wurde, weil die Timeout-Periode abgelaufen ist.
- `options` {{optional_inline}}

  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:

    - `timeout`
      - : Wenn die durch diesen Parameter dargestellte Anzahl von Millisekunden verstrichen ist und der Rückruf noch nicht aufgerufen wurde, wird eine Aufgabe zum Ausführen des Rückrufs in die Ereignisschleife gestellt (selbst wenn dies ein negatives Leistungsrisiko birgt). `timeout` muss ein positiver Wert sein, andernfalls wird er ignoriert.

### Rückgabewert

Eine ID, die verwendet werden kann, um den Rückruf zu stornieren, indem sie der Methode {{domxref("window.cancelIdleCallback()")}} übergeben wird.

## Beispiele

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperatives Scheduling der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("setTimeout()")}}
- {{domxref("setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
