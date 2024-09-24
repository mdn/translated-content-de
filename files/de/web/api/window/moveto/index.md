---
title: "Window: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`moveTo()`**-Methode der {{domxref("Window")}}-Schnittstelle verschiebt das aktuelle Fenster an die angegebenen Koordinaten.

> [!NOTE]
> Diese Funktion bewegt das Fenster zu einer absoluten Position. Im Gegensatz dazu bewegt {{domxref("window.moveBy()")}} das Fenster relativ zu seiner aktuellen Position.

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

Dieses Beispiel verschiebt das Fenster in die obere linke Ecke des Bildschirms.

```js
function origin() {
  window.moveTo(0, 0);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

Seit Firefox 7 können Websites ein Browserfenster in [folgenden Fällen](https://bugzil.la/565541#c24) nicht mehr verschieben:

1. Sie können ein Fenster oder Tab nicht verschieben, das nicht durch {{domxref("Window.open()")}} erstellt wurde.
2. Sie können ein Fenster oder Tab nicht bewegen, wenn es sich in einem Fenster mit mehr als einem Tab befindet.

> [!NOTE]
> Diese Funktion bewegt das Fenster möglicherweise nicht synchron.
> In einigen Umgebungen (wie Wayland oder mobil) bewegt sie das Fenster möglicherweise gar nicht. Derzeit gibt es keine Möglichkeit, ein Verschiebungsereignis zu erkennen, siehe [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## Siehe auch

- {{domxref("Window.moveBy()")}}
