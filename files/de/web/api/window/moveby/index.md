---
title: "Fenster: moveBy()-Methode"
short-title: moveBy()
slug: Web/API/Window/moveBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`moveBy()`**-Methode der {{domxref("Window")}}-Schnittstelle bewegt das aktuelle Fenster um einen angegebenen Betrag.

> [!NOTE]
> Diese Funktion bewegt das Fenster relativ zu seiner aktuellen Position. Im Gegensatz dazu bewegt {{domxref("window.moveTo()")}} das Fenster zu einem absoluten Standort.

## Syntax

```js-nolint
moveBy(deltaX, deltaY)
```

### Parameter

- `deltaX`
  - : Die Anzahl der Pixel, um die das Fenster horizontal verschoben wird.
    Positive Werte bewegen nach rechts, während negative Werte nach links verschieben.
- `deltaY`
  - : Die Anzahl der Pixel, um die das Fenster vertikal verschoben wird. Positive
    Werte bewegen nach unten, während negative Werte nach oben verschieben.

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

Seit Firefox 7 können Websites ein Browserfenster nicht mehr [in den folgenden Fällen](https://bugzil.la/565541#c24) bewegen:

1. Sie können ein Fenster oder Tab nicht bewegen, das nicht durch {{domxref("Window.open()")}} erstellt wurde.
2. Sie können ein Fenster oder Tab nicht bewegen, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion kann das Fenster möglicherweise nicht synchron bewegen.
> In einigen Umgebungen (wie Wayland oder Mobilgeräte) kann es das Fenster
> überhaupt nicht bewegen. Derzeit gibt es keine Möglichkeit, auf ein Bewegungsereignis zu hören, siehe
> [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- {{domxref("Window.moveTo()")}}
