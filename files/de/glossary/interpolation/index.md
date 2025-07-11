---
title: Interpolation
slug: Glossary/Interpolation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Interpolation ist eine Methode zur Schätzung neuer Datenpunkte basierend auf einer Reihe bekannter Datenpunkte.

Interpolation berechnet Zwischenwerte in Animationen, die HTML-Eigenschaften wie Höhe, Breite usw. ändern. Die Farbinterpolation definiert Zwischenwerte von Farben beim Farbmischen, in Verläufen, beim Kompositing, in Filtern, Übergängen, Animationen und Farb-Funktionen.

Interpolationen sind nicht unbedingt linear. Die meisten interpolierten Werte sind reelle Gleitkommazahlen; jedoch, wenn es keinen Mittelwert zwischen zwei Werten gibt, wie bei Werten, die nur ganze Zahlen akzeptieren, ist die [Interpolation diskret](/de/docs/Web/CSS/integer#interpolation). Der Fortschritt der Interpolation hängt auch von [Easing-Funktionen](/de/docs/Web/CSS/easing-function) in Animationen und Farbverläufen sowie von den Interpolationsmethoden {{CSSXref("color-interpolation-method", "color")}} und {{CSSXref("hue-interpolation-method", "hue")}} in Verläufen ab.

In JavaScript wird der Begriff "[Interpolation](/de/docs/Web/JavaScript/Reference/Template_literals#string_interpolation)" als Beschreibung der Ersetzung von Zeichenfolgen in Template-Literalen verwendet.

## Siehe auch

- {{SVGAttr("color-interpolation")}} SVG-Attribut
- {{CSSXref("color-interpolation")}} CSS-Eigenschaft
- {{CSSXref("color-interpolation-method")}} CSS-Datentyp
- {{CSSXref("hue-interpolation-method")}} CSS-Datentyp
- {{CSSXref("color_value/color-mix", "color-mix()")}} CSS-Funktion
- [Interpolating colors in CSS](/de/docs/Web/CSS/color_value#interpolation)
- [Interpolation](https://en.wikipedia.org/wiki/Interpolation) auf Wikipedia
- [String interpolation](https://en.wikipedia.org/wiki/String_interpolation) auf Wikipedia
