---
title: clearInterval() globale Funktion
slug: conflicting/Web/API/Window/clearInterval
original_slug: Web/API/clearInterval
l10n:
  sourceCommit: 3ce863eafe2d98caca1b395691c47f255947a6e0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`clearInterval()`**-Methode beendet eine zeitgesteuerte, wiederholte Aktion, die zuvor durch einen Aufruf von [`setInterval()`](/de/docs/Web/API/SetInterval) eingerichtet wurde. Wenn der angegebene Parameter keine zuvor eingerichtete Aktion identifiziert, macht diese Methode nichts.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameter

- `intervalID`
  - : Der Bezeichner der wiederholten Aktion, die Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setInterval()` zurückgegeben.

Es ist anzumerken, dass der Pool von IDs, der von [`setInterval()`](/de/docs/Web/API/SetInterval) und [`setTimeout()`](/de/docs/Web/API/SetTimeout) verwendet wird, geteilt wird. Das bedeutet, Sie können technisch `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/ClearTimeout) austauschbar verwenden. Zur Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe die [`setInterval()` Beispiele](/de/docs/Web/API/setInterval#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`clearTimeout()`](/de/docs/Web/API/ClearTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
