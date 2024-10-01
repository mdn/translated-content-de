---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{CSSRef}}

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) beschreibt die Schlüsselwörter für absolute Größen. Dieser Datentyp wird in den {{cssxref("font")}}-Kurzform- und {{cssxref("font-size")}}-Eigenschaften verwendet.

Die Schriftgrößenschlüsselwörter werden dem veralteten HTML-`size`-Attribut zugeordnet. Siehe den Abschnitt [HTML-Size-Attribut](#html-size-attribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>`-Datentyp wird mit einem Schlüsselwortwert definiert, der aus der unten stehenden Liste ausgewählt wird.

- `xx-small`

  - : Eine absolute Größe, die 60% der Größe von `medium` entspricht. Zugeordnet dem veralteten `size="1"`.

- `x-small`

  - : Eine absolute Größe, die 75% der Größe von `medium` entspricht.

- `small`

  - : Eine absolute Größe, die 89% der Größe von `medium` entspricht. Zugeordnet dem veralteten `size="2"`.

- `medium`

  - : Die vom Nutzer bevorzugte Schriftgröße. Dieser Wert wird als Referenzmittelwert verwendet. Zugeordnet `size="3"`.

- `large`

  - : Eine absolute Größe, die 20% größer ist als `medium`. Zugeordnet dem veralteten `size="4"`.

- `x-large`

  - : Eine absolute Größe, die 50% größer ist als `medium`. Zugeordnet dem veralteten `size="5"`.

- `xx-large`

  - : Eine absolute Größe, die doppelt so groß ist wie `medium`. Zugeordnet dem veralteten `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß ist wie `medium`. Zugeordnet dem veralteten `size="7"`.

## Beschreibung

Jeder `<absolute-size>`-Schlüsselwortwert wird relativ zur `medium`-Größe und den individuellen Geräteeigenschaften wie der Geräteauflösung dimensioniert. Benutzeragenten führen eine Tabelle von Schriftgrößen für jede Schriftart, wobei die `<absolute-size>`-Schlüsselwörter als Index dienen.

In CSS1 (1996) war der Skalierungsfaktor zwischen benachbarten Schlüsselwortwertindizes 1,5, was zu groß war. In CSS2 (1998) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortwertindizes 1,2, was bei den kleinen Werten Probleme verursachte. Da ein einzelnes festes Verhältnis zwischen benachbarten absoluten Größen-Schlüsselwörtern problematisch war, gibt es keine feste Verhältnisempfehlung mehr. Die einzige Empfehlung zur Beibehaltung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht weniger als `9px` betragen sollte.

Für jeden `<absolute-size>`-Schlüsselwortwert listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Element/Heading_Elements)-Überschriften und die Zuordnung zum veralteten [HTML-`size`-Attribut](#html-size-attribut) auf.

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-`size`-Attribut | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML-Size-Attribut

Das `size`-Attribut zur Festlegung der Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine ganze Zahl, der ein `+` oder `-` vorangestellt war, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete, die `size` um eins zu erhöhen, und `-2` bedeutete, die Größe um zwei zu verringern, wobei der berechnete Wert auf ein Minimum von `1` und ein maximales errechnetes Maximum von `7` beschränkt wurde.

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

- CSS-{{cssxref("relative-size")}}-Datentyp
- CSS-{{cssxref("font")}}- und {{cssxref("font-size")}}-Eigenschaften
- [CSS Fonts](/de/docs/Web/CSS/CSS_fonts)-Modul
