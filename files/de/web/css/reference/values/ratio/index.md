---
title: <ratio>
slug: Web/CSS/Reference/Values/ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<ratio>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt die proportionale Beziehung zwischen zwei Werten. Er repräsentiert hauptsächlich das Seitenverhältnis, das die Breite zur Höhe in Beziehung setzt. Beispielsweise wird das `<ratio>` als Wert für die `aspect-ratio` Medienmerkmal in {{cssxref("@media")}} Medienabfragen, das `aspect-ratio` Größenmerkmal in {{cssxref("@container")}} Container-Abfragen und als Wert für die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft verwendet.

## Syntax

Der `<ratio>` Datentyp ist eine {{cssxref("&lt;number&gt;")}} gefolgt von einem Schrägstrich ('/', Unicode `U+002F SOLIDUS`) und einer zweiten {{cssxref("&lt;number&gt;")}}. Beide Zahlen müssen positiv sein. Leerzeichen vor und nach dem Schrägstrich sind optional. Die erste Zahl repräsentiert die Breite, während die zweite die Höhe darstellt. Zusätzlich ist ein einzelner {{cssxref("&lt;number&gt;")}} als Wert zulässig.

Zwei Verhältnisse werden durch Vergleich der numerischen Werte der Quotienten verglichen. Zum Beispiel ist 16/16 kleiner als 16/9, da es zu 1 aufgelöst wird, während das zweite zu 1,7 aufgelöst wird. Dies bedeutet, dass das Seitenverhältnis eines hohen Bildschirms kleiner ist als das eines breiten Bildschirms und Hochformatbilder kleinere Seitenverhältnisse haben als Querformatbilder.

### Häufige Seitenverhältnisse

| Verhältnis              |                                                                                          | Verwendung                                           |
| ----------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `4/3` oder `1.33333`    | ![Ein Rechteck, das drei Einheiten hoch und vier Einheiten breit ist](ratio4_3.png)      | Traditionelles TV-Format im zwanzigsten Jahrhundert. |
| `16/9` oder `1.7777778` | ![Ein Rechteck, das neun Einheiten hoch und sechzehn Einheiten breit ist](ratio16_9.png) | Modernes "Widescreen"-TV-Format.                     |
| `185/100` oder `1.85`   | ![Ein Rechteck, das 1 Einheit hoch und 1,85 Einheiten breit ist](ratio1_1.85.png)        | Das gängigste Filmformat seit den 1960er Jahren.     |
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

### Verwendung in einer @container Größe-Abfrage

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

- [`aspect-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/aspect-ratio) Mediendeskriptor
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS-Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) Leitfaden
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries) Leitfaden
- [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment) Modul
- [CSS-Boxgrößen](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
