---
title: <absolute-size>
slug: Web/CSS/Reference/Values/absolute-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) beschreibt die absoluten Größen-Schlüsselwörter. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} genutzt.

Die Schriftgröße-Schlüsselwörter sind dem veralteten HTML-Attribut `size` zugeordnet. Siehe den Abschnitt [HTML size Attribut](#html_size_attribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>` Datentyp wird durch einen Schlüsselwortwert definiert, der aus der folgenden Liste ausgewählt wird.

- `xx-small`
  - : Eine absolute Größe, die 60% der Größe von `medium` entspricht. Zugeordnet zum veralteten `size="1"`.

- `x-small`
  - : Eine absolute Größe, die 75% der Größe von `medium` entspricht.

- `small`
  - : Eine absolute Größe, die 89% der Größe von `medium` entspricht. Zugeordnet zum veralteten `size="2"`.

- `medium`
  - : Die bevorzugte Schriftgröße des Nutzers. Dieser Wert wird als Referenzmittelwert verwendet. Zugeordnet zu `size="3"`.

- `large`
  - : Eine absolute Größe, die 20% größer als `medium` ist. Zugeordnet zum veralteten `size="4"`.

- `x-large`
  - : Eine absolute Größe, die 50% größer als `medium` ist. Zugeordnet zum veralteten `size="5"`.

- `xx-large`
  - : Eine absolute Größe, die doppelt so groß wie `medium` ist. Zugeordnet zum veralteten `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß wie `medium` ist. Zugeordnet zum veralteten `size="7"`.

## Beschreibung

Jeder `<absolute-size>` Schlüsselwortwert ist relativ zur Größe `medium` und den individuellen Gerätecharakteristika, wie z. B. der Geräteauflösung, dimensioniert. Benutzeragenten führen eine Tabelle mit Schriftgrößen für jede Schrift, wobei die `<absolute-size>` Schlüsselwörter als Index verwendet werden.

In CSS1 (1996) war der Skalierungsfaktor zwischen benachbarten Schlüsselwortwert-Indizes 1,5, was zu groß war. In CSS2 (1998) war der Skalierungsfaktor zwischen benachbarten Schlüsselwortwert-Indizes 1,2, was Probleme für die kleinen Werte verursachte. Da ein einziger fester Faktor zwischen benachbarten absoluten Größen-Schlüsselwörtern problematisch war, gibt es keine feste Faktor-Empfehlung mehr. Die einzige Empfehlung zur Wahrung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht kleiner als `9px` sein sollte.

Für jeden `<absolute-size>` Schlüsselwortwert listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML-Attribut `size`](#html_size_attribut).

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-Attribut `size` | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML size Attribut

Das `size` Attribut, um die Schriftgröße in HTML festzulegen, ist veraltet. Der Attributwert war entweder eine Ganzzahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine Ganzzahl vorangestellt von `+` oder `-`, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete, die `size` um eins zu erhöhen, und `-2` bedeutete, die Größe um zwei zu verringern. Der berechnete Wert wurde mit einem Minimum von `1` und einem maximal berechneten Wert von `7` begrenzt.

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
- [CSS Fonts](/de/docs/Web/CSS/Guides/Fonts) Modul
