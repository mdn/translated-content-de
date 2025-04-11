---
title: "HTMLFontElement: color Eigenschaft"
short-title: color
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{deprecated_header}}{{APIRef("HTML DOM")}}

Die veraltete
**`HTMLFontElement.color`**
Eigenschaft ist ein String, der das [`color`](/de/docs/Web/HTML/Reference/Elements/font#color) HTML-Attribut widerspiegelt, welches entweder eine benannte Farbe oder eine im hexadezimalen Format #RRGGBB spezifizierte Farbe enthält.

Das Format des Strings muss einem der folgenden HTML-Mikrosyntaxen entsprechen (siehe [`<color>`](/de/docs/Web/CSS/color_value)):

| Mikrosyntax               | Beschreibung                                     | Beispiele                 |
| ------------------------- | ------------------------------------------------ | ------------------------- |
| Gültiger Farbnamen-String | _nameOfColor (Groß-/Kleinschreibung ignorieren)_ | `Green`, `green`, `GREEN` |
| Gültiger Hex-Farbstring   | _#RRGGBB_                                        | `#008000`                 |
| RGB mit Dezimalwerten     | _rgb(x x x) (x im Bereich 0-255)_                | `rgb(0 128 0)`            |

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null` Wert in den leeren String (`""`) umgewandelt, daher ist `elt.color = null` gleichbedeutend mit `elt.color = ""`.

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

- Das [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) Interface, zu dem es gehört.
