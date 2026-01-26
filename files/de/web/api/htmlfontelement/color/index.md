---
title: "HTMLFontElement: color-Eigenschaft"
short-title: color
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{deprecated_header}}{{APIRef("HTML DOM")}}

Die veraltete
**`HTMLFontElement.color`**
Eigenschaft ist ein String, der das [`color`](/de/docs/Web/HTML/Reference/Elements/font#color) HTML-Attribut widerspiegelt und entweder eine benannte Farbe oder eine Farbe im hexadezimalen #RRGGBB-Format enthält.

Das Format der Zeichenkette muss einem der folgenden HTML-Mikrosyntaxen folgen (siehe {{cssxref("&lt;color&gt;")}}):

| Mikrosyntax                  | Beschreibung                                     | Beispiele                 |
| ---------------------------- | ------------------------------------------------ | ------------------------- |
| Gültiger Farbname-String     | _nameOfColor (Groß-/Kleinschreibung irrelevant)_ | `Green`, `green`, `GREEN` |
| Gültiger Hex-Farbname-String | _#RRGGBB_                                        | `#008000`                 |
| RGB mit Dezimalwerten        | _rgb(x x x) (x im Bereich 0-255)_                | `rgb(0 128 0)`            |

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in eine leere Zeichenkette (`""`) umgewandelt, sodass `elt.color = null` äquivalent zu `elt.color = ""` ist.

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
