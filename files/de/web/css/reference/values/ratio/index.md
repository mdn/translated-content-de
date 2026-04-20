---
title: "`<ratio>` CSS-Typ"
short-title: <ratio>
slug: Web/CSS/Reference/Values/ratio
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<ratio>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt das proportionale Verhältnis zwischen zwei Werten. Er repräsentiert hauptsächlich das Seitenverhältnis, das die Breite zur Höhe in Beziehung setzt. Zum Beispiel wird `<ratio>` als Wert für das `aspect-ratio` Medienmerkmal in {{cssxref("@media")}}-Medienabfragen, das `aspect-ratio` Größenmerkmal in {{cssxref("@container")}} Container-Abfragen und als Wert für die CSS-Eigenschaft {{cssxref("aspect-ratio")}} verwendet.

## Syntax

Der `<ratio>` Datentyp ist eine {{cssxref("&lt;number&gt;")}}, gefolgt von einem Schrägstrich ('/', Unicode `U+002F SOLIDUS`) und einer zweiten {{cssxref("&lt;number&gt;")}}. Beide Zahlen müssen positiv sein. Leerzeichen vor und nach dem Schrägstrich sind optional. Die erste Zahl repräsentiert die Breite, während die zweite die Höhe darstellt. Zusätzlich ist ein einzelnes {{cssxref("&lt;number&gt;")}} als Wert zulässig.

Zwei Verhältnisse werden durch den Vergleich der numerischen Werte ihrer Quotienten verglichen. Zum Beispiel ist 16/16 weniger als 16/9, da es sich zu 1 auflöst, während sich das zweite zu 1,7 auflöst. Dies bedeutet, dass das Seitenverhältnis eines hohen Bildschirms kleiner ist als das eines breiten Bildschirms und Porträtbilder kleinere Seitenverhältnisse haben als Landschaftsbilder.

### Übliche Seitenverhältnisse

| Verhältnis              |                                                                                          | Nutzung                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `4/3` oder `1.33333`    | ![Ein Rechteck, das drei Einheiten hoch und vier Einheiten breit ist](ratio4_3.png)      | Traditionelles TV-Format im zwanzigsten Jahrhundert. |
| `16/9` oder `1.7777778` | ![Ein Rechteck, das neun Einheiten hoch und sechzehn Einheiten breit ist](ratio16_9.png) | Modernes "Widescreen"-TV-Format.                     |
| `185/100` oder `1.85`   | ![Ein Rechteck, das 1 Einheit hoch und 1.85 Einheiten breit ist](ratio1_1.85.png)        | Das häufigste Filmformat seit den 1960er Jahren.     |
| `239/100` oder `2.39`   | ![Ein Rechteck, das 1 Einheit hoch und 2.39 Einheiten breit ist](ratio1_2.39.png)        | "Widescreen", anamorphes Filmformat.                 |

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in einer Medienabfrage

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

- [`aspect-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/aspect-ratio) Mediendeskriptor
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) Leitfaden
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries) Leitfaden
- [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [CSS-Enthaltung](/de/docs/Web/CSS/Guides/Containment) Modul
- [CSS-Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
