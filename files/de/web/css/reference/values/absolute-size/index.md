---
title: <absolute-size>
slug: Web/CSS/Reference/Values/absolute-size
l10n:
  sourceCommit: 2645539130f36327a0f2d6f1040c3945098da234
---

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt die Schlüsselwörter der absoluten Größe. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} verwendet.

Die Schriftgrößenschlüsselwörter sind dem veralteten HTML-Attribut `size` zugeordnet. Siehe den Abschnitt [HTML-Attribut size](#html-attribut_size) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>`-Datentyp wird durch einen Schlüsselwortwert definiert, der aus der folgenden Liste ausgewählt wird.

- `xx-small`
  - : Eine absolute Größe von 60 % der Größe von `medium`. Zugeordnet zum veralteten `size="1"`.

- `x-small`
  - : Eine absolute Größe von 75 % der Größe von `medium`.

- `small`
  - : Eine absolute Größe von 89 % der Größe von `medium`. Zugeordnet zum veralteten `size="2"`.

- `medium`
  - : Die bevorzugte Schriftgröße eines Benutzers. Dieser Wert wird als mittlerer Referenzwert verwendet. Zugeordnet zu `size="3"`.

- `large`
  - : Eine absolute Größe, die 20 % größer als `medium` ist. Zugeordnet zum veralteten `size="4"`.

- `x-large`
  - : Eine absolute Größe, die 50 % größer als `medium` ist. Zugeordnet zum veralteten `size="5"`.

- `xx-large`
  - : Eine absolute Größe, die doppelt so groß wie `medium` ist. Zugeordnet zum veralteten `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß wie `medium` ist. Zugeordnet zum veralteten `size="7"`.

## Beschreibung

Jedes `<absolute-size>`-Schlüsselwort wird relativ zur Größe `medium` und den individuellen Geräteeigenschaften wie der Geräteauflösung definiert. Benutzeragenten halten eine Tabelle mit Schriftgrößen für jede Schriftart, wobei die `<absolute-size>`-Schlüsselwörter als Index dienen.

In CSS1 (1996) war der Skalierungsfaktor zwischen benachbarten Schlüsselwörtern 1,5, was zu groß war. In CSS2 (1998) war der Skalierungsfaktor zwischen benachbarten Schlüsselwörtern 1,2, was Probleme für kleine Werte verursachte. Da sich das feste Verhältnis zwischen benachbarten absoluten Größen als problematisch erwies, gibt es keine feste Verhältnisempfehlung mehr. Die einzige Empfehlung zur Erhaltung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht kleiner als `9px` sein sollte.

Für jedes `<absolute-size>`-Schlüsselwort listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML-Attribut size](#html-attribut_size).

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-Attribut `size` | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML-Attribut size

Das `size`-Attribut, um die Schriftgröße in HTML festzulegen, ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine ganze Zahl, der ein `+` oder `-` vorangestellt war, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete, dass die `size` um eins erhöht wurde, und `-2` bedeutete, dass die Größe um zwei verringert wurde, wobei der berechnete Wert bei einem Minimum von `1` und einem maximal berechneten Wert von `7` begrenzt wurde.

## Beispiele

### Vergleich der Schlüsselwortwerte

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
- [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts) Modul
