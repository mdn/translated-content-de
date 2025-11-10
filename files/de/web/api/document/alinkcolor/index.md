---
title: "Dokumentation: alinkColor-Eigenschaft"
short-title: alinkColor
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}{{Deprecated_header}}

Gibt die Farbe eines aktiven Links im Dokumentkörper zurück oder legt diese fest. Ein Link ist aktiv während der Zeit zwischen den `mousedown`- und `mouseup`-Ereignissen.

## Wert

Ein String, der den Namen der Farbe enthält (z. B., `blue`, `darkblue`, usw.) oder den hexadezimalen Wert der Farbe (z. B., `#0000FF`).

Wird der Wert auf `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.alinkColor = null` äquivalent zu `document.alinkColor = ""` ist.

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist rot (`#ee0000` in hexadezimaler Darstellung).

`document.alinkColor` ist im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-alinkcolor) veraltet. Eine Alternative ist der CSS-Selektor {{Cssxref(":active")}}.

Firefox unterstützt sowohl `alinkColor`/`:active` als auch {{Cssxref(":focus")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
