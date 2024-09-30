---
title: <ratio>
slug: Web/CSS/ratio
l10n:
  sourceCommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{CSSRef}}

Der **`<ratio>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) beschreibt das proportionale Verhältnis zwischen Breite und Höhe. Er wird als Wert für das `aspect-ratio` Medienmerkmal in {{cssxref("@media")}} Medienanfragen, das `aspect-ratio` Größenmerkmal in {{cssxref("@container")}} Container-Abfragen und als Wert für die CSS-Eigenschaft {{cssxref("aspect-ratio")}} verwendet.

## Syntax

Der `<ratio>` Datentyp ist eine {{cssxref("&lt;number&gt;")}} gefolgt von einem Schrägstrich ('/', Unicode `U+002F SOLIDUS`) und einer zweiten {{cssxref("&lt;number&gt;")}}. Beide Zahlen müssen positiv sein. Leerzeichen vor und nach dem Schrägstrich sind optional. Die erste Zahl repräsentiert die Breite, während die zweite die Höhe repräsentiert. Zusätzlich ist ein einzelner {{cssxref("&lt;number&gt;")}} als Wert zulässig.

### Häufige Seitenverhältnisse

| Ratio                 |                                                                              | Verwendung                                         |
| --------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------- |
| `4/3` oder `1.33333`  | ![Ein Rechteck, das drei Einheiten hoch und vier Einheiten breit ist](ratio4_3.png)    | Traditionelles TV-Format im zwanzigsten Jahrhundert. |
| `16/9` oder `1.7777778` | ![Ein Rechteck, das neun Einheiten hoch und sechzehn Einheiten breit ist](ratio16_9.png) | Modernes "Breitbild"-TV-Format.                  |
| `185/100` oder `1.85` | ![Ein Rechteck, das 1 Einheit hoch und 1.85 Einheiten breit ist](ratio1_1.85.png)      | Das gebräuchlichste Filmformat seit den 1960er Jahren.   |
| `239/100` oder `2.39` | ![Ein Rechteck, das 1 Einheit hoch und 2.39 Einheiten breit ist](ratio1_2.39.png)      | "Breitbild", anamorphes Filmformat.              |

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in einer Medienabfrage

```css
@media screen and (min-aspect-ratio: 16/9) {
  /* … */
}
```

### Verwendung in einer @container Größenabfrage

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
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Leitfaden
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) Leitfaden
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment) Modul
- [CSS-Kastengröße](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
