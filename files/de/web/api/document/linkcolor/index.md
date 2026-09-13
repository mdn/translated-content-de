---
title: "Dokumentation: linkColor-Eigenschaft"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die **`Document.linkColor`**-Eigenschaft liest/legt die Farbe von
Links innerhalb des Dokuments fest.

Diese Eigenschaft ist veraltet. Als Alternative können Sie die CSS
{{cssxref("color")}}-Eigenschaft entweder auf HTML-Anker-Links ({{HtmlElement("a")}}) oder auf
{{cssxref(":link")}}-Pseudoklassen anwenden.

## Wert

Ein String, der die Farbe als Wort (z.B. `red`) oder als Hexadezimalwert (z.B. `#ff0000`) darstellt.

Wenn sie auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.linkColor = null` gleichbedeutend ist mit `document.linkColor = ""`.

## Beispiele

```js
document.linkColor = "blue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist blau (`#0000ee` in
Hexadezimalnotation).

## Siehe auch

- [`document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor)
- [`document.alinkColor`](/de/docs/Web/API/Document/alinkColor)
