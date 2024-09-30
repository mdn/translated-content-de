---
title: "Document: alinkColor-Eigenschaft"
short-title: alinkColor
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}{{Deprecated_header}}

Gibt die Farbe eines aktiven Links im Dokumentenkörper zurück oder legt diese fest. Ein Link ist aktiv während der Zeit zwischen den `mousedown`- und `mouseup`-Ereignissen.

## Wert

Ein String, der den Namen der Farbe (z.B. `blue`, `darkblue`, etc.) oder den hexadezimalen Wert der Farbe (z.B. `#0000FF`) enthält.

Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.alinkColor = null` gleichbedeutend mit `document.alinkColor = ""` ist.

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist rot (`#ee0000` in Hexadezimal).

`document.alinkColor` ist im [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) veraltet. Eine Alternative ist der CSS-Selektor {{Cssxref(":active")}}.

Eine weitere Alternative ist `document.body.aLink`, obwohl dies im [HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-alink) zugunsten der CSS-Alternative ebenfalls veraltet ist.

Firefox unterstützt sowohl `alinkColor`/`:active` als auch {{Cssxref(":focus")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
