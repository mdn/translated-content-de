---
title: "Window: moveBy() Methode"
short-title: moveBy()
slug: Web/API/Window/moveBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`moveBy()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces bewegt das aktuelle Fenster um einen angegebenen Betrag.

> [!NOTE]
> Diese Funktion bewegt das Fenster relativ zu seinem aktuellen Standort. Im Gegensatz dazu bewegt [`window.moveTo()`](/de/docs/Web/API/Window/moveTo) das Fenster zu einem absoluten Standort.

## Syntax

```js-nolint
moveBy(deltaX, deltaY)
```

### Parameter

- `deltaX`
  - : Die Anzahl der Pixel, um die das Fenster horizontal verschoben wird. Positive Werte sind nach rechts, während negative Werte nach links sind.
- `deltaY`
  - : Die Anzahl der Pixel, um die das Fenster vertikal verschoben wird. Positive Werte sind nach unten, während negative Werte nach oben sind.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel bewegt das Fenster 10 Pixel nach rechts und 10 Pixel nach oben.

```js
function budge() {
  moveBy(10, -10);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Seit Firefox 7 können Websites ein Browserfenster [in den folgenden Fällen](https://bugzil.la/565541#c24) nicht mehr verschieben:

1. Sie können ein Fenster oder Tab nicht verschieben, das nicht durch [`Window.open()`](/de/docs/Web/API/Window/open) erstellt wurde.
2. Sie können ein Fenster oder Tab nicht verschieben, wenn es in einem Fenster mit mehr als einem Tab ist.

> [!NOTE]
> Diese Funktion bewegt das Fenster möglicherweise nicht synchron. In einigen Umgebungen (wie Wayland oder mobilen Geräten) bewegt sie das Fenster möglicherweise überhaupt nicht. Derzeit gibt es keine Möglichkeit, ein Bewegt-Ereignis abzuhören, siehe [CSS-Arbeitsgruppenausgabe #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
