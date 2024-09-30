---
title: "Window: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`moveTo()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle verschiebt das aktuelle Fenster zu den angegebenen Koordinaten.

> [!NOTE]
> Diese Funktion bewegt das Fenster zu einem absoluten Ort. Im Gegensatz dazu verschiebt [`window.moveBy()`](/de/docs/Web/API/Window/moveBy) das Fenster relativ zu seiner aktuellen Position.

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

Dieses Beispiel verschiebt das Fenster in die obere linke Ecke des Bildschirms.

```js
function origin() {
  window.moveTo(0, 0);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Seit Firefox 7 können Websites ein Browserfenster in [den folgenden Fällen](https://bugzil.la/565541#c24) nicht mehr bewegen:

1. Man kann kein Fenster oder Tab bewegen, das nicht durch [`Window.open()`](/de/docs/Web/API/Window/open) erstellt wurde.
2. Man kann kein Fenster oder Tab verschieben, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron bewegen.
> In einigen Umgebungen (wie Wayland oder mobil) könnte sich das Fenster überhaupt nicht bewegen. Derzeit gibt es keine Möglichkeit, ein Bewegungsevent zu überwachen, siehe [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- [`Window.moveBy()`](/de/docs/Web/API/Window/moveBy)
