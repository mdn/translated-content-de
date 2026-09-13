---
title: "Dokument: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/Document/bgColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die veraltete `bgColor`-Eigenschaft ruft die Hintergrundfarbe des aktuellen Dokuments ab oder setzt diese.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimaler Wert (z.B. `"#ff0000"`) darstellt.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.bgColor = null` gleichbedeutend ist mit `document.bgColor = ""`.

## Beispiele

```js
document.bgColor = "darkblue";
```

## Hinweise

Der Standardwert für diese Eigenschaft in Firefox ist Weiß (`#ffffff` in hexadezimal).

`document.bgColor` ist im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-bgcolor) veraltet. Die empfohlene Alternative ist die Verwendung von CSS-Stil {{Cssxref("background-color")}}, auf die über das DOM mit `document.body.style.backgroundColor` zugegriffen werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
