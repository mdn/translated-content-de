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
Eigenschaft ist ein String, der das [`color`](/de/docs/Web/HTML/Element/font#color) HTML-Attribut widerspiegelt und entweder eine benannte Farbe oder eine im hexadezimalen #RRGGBB-Format angegebene Farbe enthält.

Das Format des Strings muss einem der folgenden HTML-Mikrosyntaxen entsprechen (siehe [`<color>`](/de/docs/Web/CSS/color_value)):

| Mikrosyntax              | Beschreibung                     | Beispiele                 |
| ------------------------ | -------------------------------- | ------------------------- |
| Gültiger Farbname-String | _nameOfColor (Groß- und Kleinschreibung ignorieren)_ | `Green`, `green`, `GREEN` |
| Gültiger Hex-Farbstring  | _#RRGGBB_                        | `#008000`                 |
| RGB mit Dezimalwerten    | _rgb(x x x) (x im Bereich 0-255)_ | `rgb(0 128 0)`            |

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.color = null` gleichbedeutend mit `elt.color = ""` ist.

## Beispiele

```js
// Nimmt an, dass es ein <font id="f">-Element im HTML gibt

const f = document.getElementById("f");
f.color = "green";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("HTMLFontElement")}}-Schnittstelle, zu der es gehört.
