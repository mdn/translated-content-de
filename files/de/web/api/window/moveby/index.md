---
title: "Window: moveBy() Methode"
short-title: moveBy()
slug: Web/API/Window/moveBy
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`moveBy()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces verschiebt das aktuelle Fenster um einen angegebenen Betrag.

> [!NOTE]
> Diese Funktion verschiebt das Fenster relativ zu seiner aktuellen
> Position. Im Gegensatz dazu verschiebt [`window.moveTo()`](/de/docs/Web/API/Window/moveTo) das Fenster an eine absolute Position.

## Syntax

```js-nolint
moveBy(deltaX, deltaY)
```

### Parameter

- `deltaX`
  - : Die Anzahl der Pixel, um die das Fenster horizontal verschoben werden soll.
    Positive Werte sind nach rechts, während negative Werte nach links sind.
- `deltaY`
  - : Die Anzahl der Pixel, um die das Fenster vertikal verschoben werden soll. Positive
    Werte sind nach unten, während negative Werte nach oben sind.

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

Ab Firefox 7 können Webseiten ein Browserfenster [in den folgenden Fällen](https://bugzil.la/565541#c24) nicht mehr bewegen:

1. Sie können ein Fenster oder Tab, das nicht durch [`Window.open()`](/de/docs/Web/API/Window/open) erstellt wurde, nicht bewegen.
2. Sie können ein Fenster oder Tab nicht bewegen, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion bewegt das Fenster möglicherweise nicht synchron.
> In einigen Umgebungen (wie Wayland oder mobilen Geräten) bewegt sie das Fenster
> möglicherweise überhaupt nicht. Derzeit gibt es keine Möglichkeit, ein Verschiebungsereignis zu überwachen, siehe
> [CSS-Arbeitsgruppenproblem #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo)
