---
title: "Window: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`moveTo()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle bewegt das aktuelle Fenster zu den angegebenen Koordinaten.

> [!NOTE]
> Diese Funktion bewegt das Fenster an eine absolute Position. Im Gegensatz dazu bewegt [`window.moveBy()`](/de/docs/Web/API/Window/moveBy) das Fenster relativ zu seiner aktuellen Position.

## Syntax

```js-nolint
moveTo(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate, zu der verschoben werden soll.
- `y`
  - : Die vertikale Koordinate, zu der verschoben werden soll.

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

Ab Firefox 7 können Websites ein Browserfenster [in den folgenden Fällen](https://bugzil.la/565541#c24) nicht mehr verschieben:

1. Sie können ein Fenster oder Tab, das nicht durch [`Window.open()`](/de/docs/Web/API/Window/open) erstellt wurde, nicht verschieben.
2. Sie können ein Fenster oder Tab nicht verschieben, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron verschieben.
> In einigen Umgebungen (wie Wayland oder mobil) könnte es das Fenster überhaupt nicht verschieben. Derzeit gibt es keine Möglichkeit, auf ein Verschiebungsereignis zu hören, siehe [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
