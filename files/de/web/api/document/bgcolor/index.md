---
title: "Dokument: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/Document/bgColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die veraltete `bgColor`-Eigenschaft ruft die Hintergrundfarbe des aktuellen Dokuments ab oder setzt sie.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als Hexadezimalwert (z.B. `"#ff0000"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.bgColor = null` äquivalent zu `document.bgColor = ""` ist.

## Beispiele

```js
document.bgColor = "darkblue";
```

## Hinweise

Der Standardwert für diese Eigenschaft in Firefox ist Weiß (`#ffffff` in Hexadezimal).

`document.bgColor` ist in [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-bgcolor) veraltet. Die empfohlene Alternative ist die Verwendung des CSS-Stils {{Cssxref("background-color")}}, der über das DOM mit `document.body.style.backgroundColor` zugänglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
