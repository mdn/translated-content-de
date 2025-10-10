---
title: <ratio>
slug: Web/CSS/ratio
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<ratio>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) beschreibt das proportionale Verhältnis zwischen zwei Werten. Er stellt hauptsächlich das Seitenverhältnis dar, das Breite zu Höhe in Beziehung setzt. Zum Beispiel wird das `<ratio>` als Wert für das `aspect-ratio` Medienmerkmal in {{cssxref("@media")}} Medienabfragen, das `aspect-ratio` Größenmerkmal in {{cssxref("@container")}} Containerabfragen und als Wert für die CSS-Eigenschaft {{cssxref("aspect-ratio")}} verwendet.

## Syntax

Der `<ratio>` Datentyp ist ein {{cssxref("&lt;number&gt;")}} gefolgt von einem Schrägstrich ('/', Unicode `U+002F SOLIDUS`) und einer zweiten {{cssxref("&lt;number&gt;")}}. Beide Zahlen müssen positiv sein. Leerzeichen vor und nach dem Schrägstrich sind optional. Die erste Zahl steht für die Breite, während die zweite für die Höhe steht. Zusätzlich ist ein einzelnes {{cssxref("&lt;number&gt;")}} als Wert erlaubt.

Zwei Verhältnisse werden durch Vergleich der numerischen Werte der Quotienten verglichen. Zum Beispiel ist 16/16 kleiner als 16/9, da es sich zu 1 auflöst, während das zweite sich zu 1,7 auflöst. Dies bedeutet, dass das Seitenverhältnis eines hohen Bildschirms kleiner ist als das eines breiten Bildschirms, und Porträtbilder haben kleinere Seitenverhältnisse als Landschaftsbilder.

### Übliche Seitenverhältnisse

| Verhältnis              |                                                                                          | Verwendung                                           |
| ----------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `4/3` oder `1.33333`    | ![Ein Rechteck, das drei Einheiten hoch und vier Einheiten breit ist](ratio4_3.png)      | Traditionelles TV-Format im zwanzigsten Jahrhundert. |
| `16/9` oder `1.7777778` | ![Ein Rechteck, das neun Einheiten hoch und sechzehn Einheiten breit ist](ratio16_9.png) | Modernes "Widescreen"-TV-Format.                     |
| `185/100` oder `1.85`   | ![Ein Rechteck, das 1 Einheit hoch und 1,85 Einheiten breit ist](ratio1_1.85.png)        | Das häufigste Filmformat seit den 1960er Jahren.     |
| `239/100` oder `2.39`   | ![Ein Rechteck, das 1 Einheit hoch und 2,39 Einheiten breit ist](ratio1_2.39.png)        | "Widescreen", anamorphes Filmformat.                 |

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in einer Medienabfrage

```css
@media screen and (aspect-ratio >= 16/9) {
  /* … */
}
```

### Verwendung in einer @container Abfrage

```css
@container (aspect-ratio > 1) and (width < 20em) {
  /* … */
}
```

### Verwendung als CSS-Eigenschaftswert

```css
.square {
  aspect-ratio: 1 / 1;
}
.circle {
  aspect-ratio: 1;
  border-radius: 50%;
}
.portrait {
  aspect-ratio: 5 / 7;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio) Medienmerkmal
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Leitfaden zu CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) Leitfaden
- [CSS Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
- [CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
