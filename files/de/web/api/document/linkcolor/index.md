---
title: "Dokument: linkColor-Eigenschaft"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}} {{Deprecated_header}}

Die **`Document.linkColor`**-Eigenschaft ruft die Farbe der Links im Dokument ab oder setzt sie.

Diese Eigenschaft ist veraltet. Als Alternative können Sie die CSS-{{cssxref("color")}}-Eigenschaft entweder auf HTML-Anker-Links ({{HtmlElement("a")}}) oder auf {{cssxref(":link")}}-Pseudoklassen anwenden. Eine weitere Alternative ist `document.body.link`, obwohl dies [in HTML 4.01 veraltet ist](https://www.w3.org/TR/html401/struct/global.html#adef-link).

## Wert

Ein String, der die Farbe als Wort (z.B. `red`) oder hexadezimalen Wert (z.B. `#ff0000`) darstellt.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, daher ist `document.linkColor = null` gleichbedeutend mit `document.linkColor = ""`.

## Beispiele

```js
document.linkColor = "blue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist blau (`#0000ee` in
hexadezimal).

## Siehe auch

- {{domxref("document.vlinkColor")}}
- {{domxref("document.alinkColor")}}
