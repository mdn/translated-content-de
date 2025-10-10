---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) beschreibt die absoluten Größenstichworte. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} verwendet.

Die Schriftgrößenstichworte sind dem veralteten HTML-Attribut `size` zugeordnet. Siehe den Abschnitt [HTML-Größenattribut](#html-größenattribut) unten).

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>` Datentyp wird durch einen aus der folgenden Liste gewählten Stichwortwert definiert.

- `xx-small`
  - : Eine absolute Größe, die 60% der Größe von `medium` beträgt. Zugeordnet dem veralteten `size="1"`.

- `x-small`
  - : Eine absolute Größe, die 75% der Größe von `medium` beträgt.

- `small`
  - : Eine absolute Größe, die 89% der Größe von `medium` beträgt. Zugeordnet dem veralteten `size="2"`.

- `medium`
  - : Die vom Benutzer bevorzugte Schriftgröße. Dieser Wert wird als Referenzmittelwert verwendet. Zugeordnet `size="3"`.

- `large`
  - : Eine absolute Größe, die 20% größer als `medium` ist. Zugeordnet dem veralteten `size="4"`.

- `x-large`
  - : Eine absolute Größe, die 50% größer als `medium` ist. Zugeordnet dem veralteten `size="5"`.

- `xx-large`
  - : Eine absolute Größe, die doppelt so groß wie `medium` ist. Zugeordnet dem veralteten `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß wie `medium` ist. Zugeordnet dem veralteten `size="7"`.

## Beschreibung

Jeder `<absolute-size>` Stichwortwert ist relativ zur Größe `medium` und den Eigenschaften des jeweiligen Geräts, wie z.B. der Geräteauflösung, dimensioniert. Benutzeragenten führen eine Tabelle von Schriftgrößen für jede Schrift, wobei die `<absolute-size>` Stichworte den Index darstellen.

In CSS1 (1996) war der Skalierungsfaktor zwischen benachbarten Stichwortwertindizes 1,5, was zu groß war. In CSS2 (1998) war der Skalierungsfaktor zwischen benachbarten Stichwortwertindizes 1,2, was Probleme für die kleinen Werte verursachte. Da sich ein einziger fester Quotient zwischen benachbarten absoluten Größen-Stichworten als problematisch erwies, gibt es keine feste Quotientempfehlung mehr. Die einzige Empfehlung zur Erhaltung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht weniger als `9px` betragen sollte.

Für jeden `<absolute-size>` Stichwortwert listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML-Attribut `size`](#html-größenattribut) auf.

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-Attribut `size` | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML-Größenattribut

Das `size` Attribut zur Einstellung der Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine mit `+` oder `-` vorangestellte ganze Zahl, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete eine Erhöhung der `size` um eins und `-2` bedeutete eine Verringerung der Größe um zwei, wobei der berechnete Wert auf ein Minimum von `1` und ein maximales berechnetes Wert von `7` geklammert wurde.

## Beispiele

### Vergleich der Stichwortwerte

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
- [CSS-Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
