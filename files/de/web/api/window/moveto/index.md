---
title: "Window: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`moveTo()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces bewegt das aktuelle Fenster zu den angegebenen Koordinaten.

> [!NOTE]
> Diese Funktion bewegt das Fenster zu einem absoluten Ort. Im Gegensatz dazu bewegt [`window.moveBy()`](/de/docs/Web/API/Window/moveBy) das Fenster relativ zu seiner aktuellen Position.

## Syntax

```js-nolint
moveTo(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate, zu der bewegt werden soll.
- `y`
  - : Die vertikale Koordinate, zu der bewegt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel bewegt das Fenster in die obere linke Ecke des Bildschirms.

```js
function origin() {
  window.moveTo(0, 0);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Seit Firefox 7 können Websites ein Browserfenster nicht mehr in den folgenden Fällen verschieben [in the following cases](https://bugzil.la/565541#c24):

1. Sie können ein Fenster oder einen Tab, der nicht durch [`Window.open()`](/de/docs/Web/API/Window/open) erstellt wurde, nicht verschieben.
2. Sie können ein Fenster oder einen Tab nicht verschieben, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron verschieben.
> In einigen Umgebungen (wie Wayland oder mobilen Geräten) könnte das Fenster überhaupt nicht verschoben werden. Derzeit gibt es keine Möglichkeit, ein Move-Ereignis zu überwachen, siehe
> [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
