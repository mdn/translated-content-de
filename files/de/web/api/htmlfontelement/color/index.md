---
title: "HTMLFontElement: color-Eigenschaft"
short-title: color
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die veraltete **`HTMLFontElement.color`**-Eigenschaft ist ein String, der das [`color`](/de/docs/Web/HTML/Reference/Elements/font#color) HTML-Attribut widerspiegelt und entweder eine benannte Farbe oder eine in hexadezimalem #RRGGBB-Format angegebene Farbe enthält.

Das Format des Strings muss einem der folgenden HTML-Mikrosyntaxen entsprechen (siehe {{cssxref("&lt;color&gt;")}}):

| Mikrosyntax              | Beschreibung                        | Beispiele                 |
| ------------------------ | ----------------------------------- | ------------------------- |
| Gültiger Farbname-String | _nameOfColor (nicht case-sensitiv)_ | `Green`, `green`, `GREEN` |
| Gültiger Hex-Farb-String | _#RRGGBB_                           | `#008000`                 |
| RGB mit Dezimalwerten    | _rgb(x x x) (x im Bereich 0-255)_   | `rgb(0 128 0)`            |

## Wert

Ein String.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.color = null` äquivalent zu `elt.color = ""` ist.

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
