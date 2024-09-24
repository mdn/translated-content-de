---
title: clearInterval() globale Funktion
short-title: clearInterval()
slug: Web/API/clearInterval
l10n:
  sourceCommit: 3ce863eafe2d98caca1b395691c47f255947a6e0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`clearInterval()`** Methode storniert eine zeitlich festgelegte, wiederkehrende Aktion, die zuvor durch einen Aufruf von {{domxref("setInterval", "setInterval()")}} eingerichtet wurde. Wenn der übergebene Parameter keine zuvor eingerichtete Aktion identifiziert, führt diese Methode nichts aus.

## Syntax

```js-nolint
clearInterval(intervalID)
```

### Parameter

- `intervalID`
  - : Der Bezeichner der wiederkehrenden Aktion, die Sie abbrechen möchten. Diese ID wurde durch den entsprechenden Aufruf von `setInterval()` zurückgegeben.

Es ist erwähnenswert, dass der Pool von IDs, der von {{domxref("setInterval", "setInterval()")}} und {{domxref("setTimeout()")}} verwendet wird, geteilt wird, was bedeutet, dass Sie technisch gesehen `clearInterval()` und {{domxref("clearTimeout", "clearTimeout()")}} austauschbar verwenden können. Aus Gründen der Klarheit sollten Sie dies jedoch vermeiden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe die [`setInterval()` Beispiele](/de/docs/Web/API/setInterval#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("setTimeout()")}}
- {{domxref("setInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("Window.requestAnimationFrame()")}}
