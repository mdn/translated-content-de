---
title: <ratio>
slug: Web/CSS/ratio
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<ratio>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt das proportionale Verhältnis zwischen zwei Werten. Er repräsentiert hauptsächlich das Seitenverhältnis, welches die Breite zur Höhe in Beziehung setzt. Zum Beispiel wird der `<ratio>` als Wert für die `aspect-ratio` Medienfunktion in {{cssxref("@media")}} Media-Queries, als `aspect-ratio` Größenfunktion in {{cssxref("@container")}} Container-Queries und als Wert für die CSS {{cssxref("aspect-ratio")}} Eigenschaft verwendet.

## Syntax

Der `<ratio>`-Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einem Schrägstrich ('/', Unicode `U+002F SOLIDUS`) und einem zweiten {{cssxref("&lt;number&gt;")}}. Beide Zahlen müssen positiv sein. Leerzeichen vor und nach dem Schrägstrich sind optional. Die erste Zahl repräsentiert die Breite, während die zweite die Höhe darstellt. Zusätzlich ist auch ein einzelner {{cssxref("&lt;number&gt;")}} als Wert zulässig.

Zwei Verhältnisse werden durch Vergleichen der Quotienten ihrer numerischen Werte verglichen. Zum Beispiel ist 16/16 kleiner als 16/9, weil es zu 1 und das zweite zu 1,7 führt. Das bedeutet, dass das Seitenverhältnis eines hohen Bildschirms kleiner ist als das eines breiten Bildschirms, und Porträts kleinere Seitenverhältnisse haben als Landschaftsaufnahmen.

### Häufige Seitenverhältnisse

| Verhältnis              |                                                                                          | Verwendung                                           |
| ----------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `4/3` oder `1.33333`    | ![Ein Rechteck, das drei Einheiten hoch und vier Einheiten breit ist](ratio4_3.png)      | Traditionelles TV-Format im zwanzigsten Jahrhundert. |
| `16/9` oder `1.7777778` | ![Ein Rechteck, das neun Einheiten hoch und sechzehn Einheiten breit ist](ratio16_9.png) | Modernes "Widescreen"-TV-Format.                     |
| `185/100` oder `1.85`   | ![Ein Rechteck, das 1 Einheit hoch und 1.85 Einheiten breit ist](ratio1_1.85.png)        | Das häufigste Filmformat seit den 1960er Jahren.     |
| `239/100` oder `2.39`   | ![Ein Rechteck, das 1 Einheit hoch und 2.39 Einheiten breit ist](ratio1_2.39.png)        | "Widescreen", anamorphen Filmformat.                 |

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Verwendung in einer Media-Query

```css
@media screen and (min-aspect-ratio: 16/9) {
  /* … */
}
```

### Verwendung in einer @container-Größenabfrage

```css
@container (aspect-ratio > 1) and (width < 20em) {
  /* … */
}
```

### Verwendung als Wert für eine CSS-Eigenschaft

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

- [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio) Mediendeskriptor
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) Leitfaden
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) Leitfaden
- [CSS Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
- [CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
