---
title: "Document: linkColor-Eigenschaft"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}} {{Deprecated_header}}

Die **`Document.linkColor`**-Eigenschaft ruft die Farbe von Links innerhalb des Dokuments ab oder setzt sie.

Diese Eigenschaft ist veraltet. Alternativ können Sie die CSS-{{cssxref("color")}}-Eigenschaft entweder auf HTML-Ankerlinks ({{HtmlElement("a")}}) oder auf {{cssxref(":link")}}-Pseudoklassen anwenden. Eine weitere Alternative ist `document.body.link`, obwohl dies [in HTML 4.01 veraltet ist](https://www.w3.org/TR/html401/struct/global.html#adef-link).

## Wert

Ein String, der die Farbe als Wort (z.B. `red`) oder als Hexadezimalwert (z.B. `#ff0000`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.linkColor = null` gleichbedeutend ist mit `document.linkColor = ""`.

## Beispiele

```js
document.linkColor = "blue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist blau (`#0000ee` in hexadezimaler Schreibweise).

## Siehe auch

- [`document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor)
- [`document.alinkColor`](/de/docs/Web/API/Document/alinkColor)
