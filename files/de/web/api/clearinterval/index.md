---
title: clearInterval() globale Funktion
short-title: clearInterval()
slug: Web/API/clearInterval
l10n:
  sourceCommit: 3ce863eafe2d98caca1b395691c47f255947a6e0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`clearInterval()`**-Methode beendet eine zeitgesteuerte, wiederholende Aktion, die zuvor durch einen Aufruf von [`setInterval()`](/de/docs/Web/API/SetInterval) eingerichtet wurde. Wenn der übergebene Parameter keine zuvor eingerichtete Aktion identifiziert, bewirkt diese Methode nichts.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameter

- `intervalID`
  - : Der Bezeichner der wiederholten Aktion, die Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setInterval()` zurückgegeben.

Es ist erwähnenswert, dass der Pool von IDs, der durch [`setInterval()`](/de/docs/Web/API/SetInterval) und [`setTimeout()`](/de/docs/Web/API/SetTimeout) verwendet wird, geteilt wird, was bedeutet, dass Sie `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/ClearTimeout) technisch austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe die [`setInterval()`-Beispiele](/de/docs/Web/API/setInterval#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`clearTimeout()`](/de/docs/Web/API/ClearTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
