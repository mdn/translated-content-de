---
title: "Document: linkColor-Eigenschaft"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}} {{Deprecated_header}}

Die **`Document.linkColor`**-Eigenschaft liest/setzt die Farbe der Links innerhalb des Dokuments.

Diese Eigenschaft ist veraltet. Als Alternative können Sie die CSS-{{cssxref("color")}}-Eigenschaft entweder auf HTML-Ankerlinks ({{HtmlElement("a")}}) oder auf {{cssxref(":link")}}-Pseudoklassen anwenden.

## Wert

Ein String, der die Farbe als Wort (z.B. `red`) oder als Hexadezimalwert (z.B. `#ff0000`) darstellt.

Wenn sie auf den Wert `null` gesetzt wird, wird dieser Wert in den leeren String (`""`) umgewandelt, sodass `document.linkColor = null` äquivalent zu `document.linkColor = ""` ist.

## Beispiele

```js
document.linkColor = "blue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist blau (`#0000ee` in Hexadezimal).

## Siehe auch

- [`document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor)
- [`document.alinkColor`](/de/docs/Web/API/Document/alinkColor)
