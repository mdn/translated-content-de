---
title: "Document: linkColor-Eigenschaft"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}} {{Deprecated_header}}

Die **`Document.linkColor`**-Eigenschaft erhält/setzt die Farbe von
Links innerhalb des Dokuments.

Diese Eigenschaft ist veraltet. Als Alternative kann die CSS
{{cssxref("color")}}-Eigenschaft entweder auf HTML-Ankerlinks ({{HtmlElement("a")}}) oder auf
{{cssxref(":link")}} Pseudoklassen gesetzt werden. Eine andere Alternative ist
`document.body.link`, obwohl diese in [HTML 4.01 veraltet ist](https://www.w3.org/TR/html401/struct/global.html#adef-link).

## Wert

Ein String, der die Farbe als Wort (z. B. `red`) oder hexadezimalen Wert (z. B. `#ff0000`) darstellt.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, daher ist `document.linkColor = null` gleichbedeutend mit `document.linkColor = ""`.

## Beispiele

```js
document.linkColor = "blue";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist blau (`#0000ee` in
hexadecimal).

## Siehe auch

- [`document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor)
- [`document.alinkColor`](/de/docs/Web/API/Document/alinkColor)
