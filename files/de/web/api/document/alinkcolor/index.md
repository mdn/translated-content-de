---
title: "Dokument: alinkColor-Eigenschaft"
short-title: alinkColor
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Gibt die Farbe eines aktiven Links im Dokumentkörper zurück oder legt sie fest. Ein Link ist aktiv zwischen den `mousedown` und `mouseup` Ereignissen.

## Wert

Ein String, der den Namen der Farbe (z. B. `blue`, `darkblue`, usw.) oder den hexadezimalen Wert der Farbe enthält (z. B. `#0000FF`).

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.alinkColor = null` äquivalent zu `document.alinkColor = ""` ist.

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist rot (`#ee0000` in hexadezimal).

`document.alinkColor` ist in [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-alinkcolor) veraltet. Eine Alternative ist der CSS-Selektor {{Cssxref(":active")}}.

Firefox unterstützt sowohl `alinkColor`/`:active` als auch {{Cssxref(":focus")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
