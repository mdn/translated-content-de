---
title: <absolute-size>
slug: Web/CSS/Reference/Values/absolute-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt die Schlüsselwörter für absolute Größen. Dieser Datentyp wird in der {{cssxref("font")}} Kurzform und den {{cssxref("font-size")}} Eigenschaften verwendet.

Die Schriftgrößenschlüsselwörter sind dem veralteten HTML `size` Attribut zugeordnet. Siehe den Abschnitt [HTML size Attribut](#html_size_attribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>` Datentyp wird mit einem Schlüsselwortwert definiert, der aus der folgenden Liste ausgewählt wird.

- `xx-small`
  - : Eine absolute Größe von 60% der Größe von `medium`. Zugeordnet zum veralteten `size="1"`.

- `x-small`
  - : Eine absolute Größe von 75% der Größe von `medium`.

- `small`
  - : Eine absolute Größe von 89% der Größe von `medium`. Zugeordnet zum veralteten `size="2"`.

- `medium`
  - : Die bevorzugte Schriftgröße eines Nutzers. Dieser Wert wird als Referenzmittelwert verwendet. Zugeordnet zu `size="3"`.

- `large`
  - : Eine absolute Größe, die 20% größer ist als `medium`. Zugeordnet zum veralteten `size="4"`.

- `x-large`
  - : Eine absolute Größe, die 50% größer ist als `medium`. Zugeordnet zum veralteten `size="5"`.

- `xx-large`
  - : Eine absolute Größe, die doppelt so groß ist wie `medium`. Zugeordnet zum veralteten `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß ist wie `medium`. Zugeordnet zum veralteten `size="7"`.

## Beschreibung

Jedes `<absolute-size>` Schlüsselwort wird relativ zur Größe von `medium` und den individuellen Eigenschaften des Geräts, wie der Geräteauflösung, festgelegt. Benutzeragenten pflegen eine Tabelle von Schriftgrößen für jede Schriftart, wobei die `<absolute-size>` Schlüsselwörter den Index darstellen.

In CSS1 (1996) war der Skalierungsfaktor zwischen benachbarten Schlüsselwortwert-Indizes 1,5, was zu groß war. In CSS2 (1998) war der Skalierungsfaktor zwischen benachbarten Schlüsselwortwert-Indizes 1,2, was Probleme für die kleinen Werte verursachte. Da sich ein einziger fester Quotient zwischen benachbarten Schlüsselwörtern für absolute Größen als problematisch erwies, gibt es keine feste Quotientempfehlung mehr. Die einzige Empfehlung zur Aufrechterhaltung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht kleiner als `9px` sein sollte.

Für jeden `<absolute-size>` Schlüsselwortwert listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML `size` Attribut](#html_size_attribut) auf.

| `<absolute-size>`     | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| --------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor     | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML Überschriften    | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML `size` Attribut  | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML size Attribut

Das `size` Attribut zur Einstellung der Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine ganze Zahl, der `+` oder `-` vorangestellt war, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete eine Erhöhung der `size` um eins und `-2` eine Verringerung der Größe um zwei, wobei der berechnete Wert auf ein Minimum von `1` und ein maximales berechnetes Wert von `7` begrenzt wurde.

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
- [CSS Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
