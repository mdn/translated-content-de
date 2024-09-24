---
title: "Dokument: alinkColor-Eigenschaft"
short-title: alinkColor
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}{{Deprecated_header}}

Gibt die Farbe eines aktiven Links im Dokumentenkörper zurück oder legt diese fest. Ein Link ist aktiv während der Zeit zwischen den `mousedown`- und `mouseup`-Ereignissen.

## Wert

Ein String, der den Namen der Farbe (z.B. `blue`, `darkblue`, etc.) oder den hexadezimalen Wert der Farbe (z.B. `#0000FF`) enthält.

Wenn dieser auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.alinkColor = null` gleichbedeutend ist mit `document.alinkColor = ""`.

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist rot (`#ee0000` in hexadezimal).

`document.alinkColor` ist in [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) veraltet. Eine Alternative ist der CSS-Selektor {{Cssxref(":active")}}.

Eine weitere Alternative ist `document.body.aLink`, obwohl dies in [HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-alink) zugunsten der CSS-Alternative als veraltet markiert ist.

Firefox unterstützt sowohl `alinkColor`/`:active` als auch {{Cssxref(":focus")}}.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
