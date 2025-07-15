---
title: <ratio>
slug: Web/CSS/ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<ratio>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt das proportionale Verhältnis zwischen zwei Werten. Er repräsentiert hauptsächlich das Seitenverhältnis, das Breite zu Höhe in Beziehung setzt. Zum Beispiel wird `<ratio>` als Wert für die `aspect-ratio` Medienfeature in {{cssxref("@media")}} Media Queries, das `aspect-ratio` Größenfeature in {{cssxref("@container")}} Container Queries und als Wert für die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft verwendet.

## Syntax

Der `<ratio>`-Datentyp ist ein {{cssxref("&lt;number&gt;")}} gefolgt von einem Schrägstrich ('/', Unicode `U+002F SOLIDUS`) und einer zweiten {{cssxref("&lt;number&gt;")}}. Beide Zahlen müssen positiv sein. Leerzeichen vor und nach dem Schrägstrich sind optional. Die erste Zahl repräsentiert die Breite, während die zweite die Höhe repräsentiert. Zusätzlich ist ein einzelner {{cssxref("&lt;number&gt;")}} als Wert zulässig.

Zwei Verhältnisse werden verglichen, indem die numerischen Werte der Quotienten verglichen werden. Zum Beispiel ist 16/16 kleiner als 16/9, da es sich zu 1 auflöst, während das zweite sich zu 1,7 auflöst. Das bedeutet, das Seitenverhältnis eines hohen Bildschirms ist kleiner als das eines breiten Bildschirms, und Porträtbilder haben kleinere Seitenverhältnisse als Landschaftsbilder.

### Häufige Seitenverhältnisse

| Verhältnis              |                                                                                          | Nutzung                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `4/3` oder `1.33333`    | ![Ein Rechteck, das drei Einheiten hoch und vier Einheiten breit ist](ratio4_3.png)      | Traditionelles TV-Format im zwanzigsten Jahrhundert. |
| `16/9` oder `1.7777778` | ![Ein Rechteck, das neun Einheiten hoch und sechzehn Einheiten breit ist](ratio16_9.png) | Modernes "Widescreen"-TV-Format.                     |
| `185/100` oder `1.85`   | ![Ein Rechteck, das 1 Einheit hoch und 1,85 Einheiten breit ist](ratio1_1.85.png)        | Das häufigste Filmformat seit den 1960er Jahren.     |
| `239/100` oder `2.39`   | ![Ein Rechteck, das 1 Einheit hoch und 2,39 Einheiten breit ist](ratio1_2.39.png)        | "Widescreen", anamorphisches Filmformat.             |

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in einer Media Query

```css
@media screen and (aspect-ratio >= 16/9) {
  /* … */
}
```

### Verwendung in einer @container-Größenabfrage

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

- [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio) Mediendeskriptor
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Leitfaden
- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) Leitfaden
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
