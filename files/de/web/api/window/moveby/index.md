---
title: "Window: moveBy() Methode"
short-title: moveBy()
slug: Web/API/Window/moveBy
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("CSSOM view API")}}

Die **`moveBy()`** Methode des [`Window`](/de/docs/Web/API/Window)
Interfaces verschiebt das aktuelle Fenster um einen angegebenen Betrag.

> [!NOTE]
> Diese Funktion bewegt das Fenster relativ zu seiner aktuellen
> Position. Im Gegensatz dazu bewegt [`window.moveTo()`](/de/docs/Web/API/Window/moveTo) das Fenster zu einer absoluten
> Position.

## Syntax

```js-nolint
moveBy(deltaX, deltaY)
```

### Parameter

- `deltaX`
  - : Die Anzahl der Pixel, um die das Fenster horizontal verschoben wird.
    Positive Werte nach rechts, während negative Werte nach links verschieben.
- `deltaY`
  - : Die Anzahl der Pixel, um die das Fenster vertikal verschoben wird. Positive
    Werte nach unten, während negative Werte nach oben verschieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verschiebt das Fenster 10 Pixel nach rechts und 10 Pixel nach oben.

```js
function budge() {
  moveBy(10, -10);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Seit Firefox 7 können Websites ein Browserfenster nicht mehr verschieben [in den folgenden Fällen](https://bugzil.la/565541#c24):

1. Sie können ein Fenster oder Tab nicht verschieben, das nicht von [`Window.open()`](/de/docs/Web/API/Window/open) erstellt wurde.
2. Sie können ein Fenster oder Tab nicht verschieben, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion bewegt das Fenster möglicherweise nicht synchron.
> In einigen Umgebungen (wie Wayland oder Mobilgeräten) wird das Fenster
> möglicherweise überhaupt nicht bewegt. Derzeit gibt es keine Möglichkeit, ein Verschiebungsereignis zu hören, siehe
> [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
