---
title: "HTMLFontElement: color-Eigenschaft"
short-title: color
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{deprecated_header}}{{APIRef("HTML DOM")}}

Die veraltete
**`HTMLFontElement.color`**
Eigenschaft ist ein String, der das [`color`](/de/docs/Web/HTML/Element/font#color) HTML-Attribut widerspiegelt. Er enthält entweder eine benannte Farbe oder eine Farbe, die im hexadezimalen Format #RRGGBB angegeben ist.

Das Format des Strings muss einer der folgenden HTML-Mikrosyntaxen entsprechen (siehe [`<color>`](/de/docs/Web/CSS/color_value)):

| Mikrosyntax              | Beschreibung                                             | Beispiele                 |
| ------------------------ | -------------------------------------------------------- | ------------------------- |
| Gültiger Farbname-String | _nameOfColor (Groß- und Kleinschreibung wird ignoriert)_ | `Green`, `green`, `GREEN` |
| Gültiger Hex-Farb-String | _#RRGGBB_                                                | `#008000`                 |
| RGB mit Dezimalwerten    | _rgb(x x x) (x im Bereich 0-255)_                        | `rgb(0 128 0)`            |

## Wert

Ein String.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, so dass `elt.color = null` äquivalent zu `elt.color = ""` ist.

## Beispiele

```js
// Assumes there is <font id="f"> element in the HTML

const f = document.getElementById("f");
f.color = "green";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) Schnittstelle, zu der es gehört.
