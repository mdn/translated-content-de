---
title: "Dokument: fgColor Eigenschaft"
short-title: fgColor
slug: Web/API/Document/fgColor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ApiRef}}{{Deprecated_header}}

Die **`fgColor`**-Eigenschaft liest/ändert die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments.

## Wert

Ein String, der die Farbe als Wort (z. B. "red") oder als Hexadezimalwert (z. B. "`#ff0000`") darstellt.

## Beispiele

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist schwarz (`#000000` in Hexadezimal).

`document.fgColor` ist [in DOM Level 2 HTML veraltet](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). Die empfohlene Alternative ist die CSS-Eigenschaft {{Cssxref("color")}} (z. B. `document.body.style.color = "red"`).

Eine weitere Alternative ist `document.body.text`, obwohl diese [in HTML 4.01 veraltet](https://www.w3.org/TR/html401/struct/global.html#adef-text) ist, zugunsten der oben genannten CSS-Alternative.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
