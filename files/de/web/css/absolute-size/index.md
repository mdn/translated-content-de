---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{CSSRef}}

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) beschreibt die absoluten Größen-Schlüsselwörter. Dieser Datentyp wird in den {{cssxref("font")}}- und {{cssxref("font-size")}}-Eigenschaften verwendet.

Die Schriftgrößen-Schlüsselwörter sind auf das veraltete HTML-`size`-Attribut abgebildet. Siehe den Abschnitt [HTML-Size-Attribut](#html-size-attribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>`-Datentyp wird mithilfe eines Schlüsselwortwerts definiert, der aus der folgenden Liste ausgewählt wird.

- `xx-small`

  - : Eine absolute Größe von 60 % der Größe von `medium`. Abbildbar auf das veraltete `size="1"`.

- `x-small`

  - : Eine absolute Größe von 75 % der Größe von `medium`.

- `small`

  - : Eine absolute Größe von 89 % der Größe von `medium`. Abbildbar auf das veraltete `size="2"`.

- `medium`

  - : Die vom Benutzer bevorzugte Schriftgröße. Dieser Wert wird als Referenz-Mittelwert verwendet. Abbildbar auf `size="3"`.

- `large`

  - : Eine absolute Größe, die 20 % größer ist als `medium`. Abbildbar auf das veraltete `size="4"`.

- `x-large`

  - : Eine absolute Größe, die 50 % größer ist als `medium`. Abbildbar auf das veraltete `size="5"`.

- `xx-large`

  - : Eine absolute Größe, die doppelt so groß ist wie `medium`. Abbildbar auf das veraltete `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß ist wie `medium`. Abbildbar auf das veraltete `size="7"`.

## Beschreibung

Jedes `<absolute-size>`-Schlüsselwort wird relativ zur mittleren `medium`-Größe und den individuellen Geräteeigenschaften, wie der Auflösung des Geräts, dimensioniert. Benutzeragenten pflegen eine Tabelle mit Schriftgrößen für jede Schriftart, wobei die `<absolute-size>`-Schlüsselwörter den Index darstellen.

In CSS1 (1996) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortindizes 1,5, was zu groß war. In CSS2 (1998) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortindizes 1,2, was zu Problemen bei kleinen Werten führte. Da ein einziger fester Faktor zwischen benachbarten absoluten Größen-Schlüsselwörtern problematisch war, gibt es keine feste Verhältnis-Empfehlung mehr. Die einzige Empfehlung zur Erhaltung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht kleiner als `9px` sein sollte.

Für jedes `<absolute-size>`-Schlüsselwort gibt die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Element/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML-`size`-Attribut](#html-size-attribut) an.

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-`size`-Attribut | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML-Size-Attribut

Das `size`-Attribut zur Einstellung einer Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine Ganzzahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine Ganzzahl, die von einem `+` oder `-` vorangestellt wurde, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete eine Erhöhung der `size` um eins und `-2` bedeutete eine Verringerung der Größe um zwei, wobei der berechnete Wert auf ein Minimum von `1` und ein Maximum von `7` begrenzt wurde.

## Beispiele

### Vergleich der Schlüsselwort-Werte

```html
<ul>
  <li class="xx-small">font-size: xx-small;</li>
  <li class="x-small">font-size: x-small;</li>
  <li class="small">font-size: small;</li>
  <li class="medium">font-size: medium;</li>
  <li class="large">font-size: large;</li>
  <li class="x-large">font-size: x-large;</li>
  <li class="xx-large">font-size: xx-large;</li>
  <li class="xxx-large">font-size: xxx-large;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.xx-small {
  font-size: xx-small;
}
.x-small {
  font-size: x-small;
}
.small {
  font-size: small;
}
.medium {
  font-size: medium;
}
.large {
  font-size: large;
}
.x-large {
  font-size: x-large;
}
.xx-large {
  font-size: xx-large;
}
.xxx-large {
  font-size: xxx-large;
}
```

#### Ergebnis

{{EmbedLiveSample('Comparing the keyword values', '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("relative-size")}} Datentyp
- CSS {{cssxref("font")}} und {{cssxref("font-size")}} Eigenschaften
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
