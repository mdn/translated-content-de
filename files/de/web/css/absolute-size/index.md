---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt die Schlüsselwörter für absolute Größen. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} verwendet.

Die Schriftgrößenschlüsselwörter sind dem veralteten HTML-Attribut `size` zugeordnet. Siehe den Abschnitt [HTML size Attribut](#html_size_attribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>` Datentyp wird durch einen aus der unten stehenden Liste ausgewählten Schlüsselwortwert definiert.

- `xx-small`

  - : Eine absolute Größe von 60 % der Größe von `medium`. Zugeordnet dem veralteten `size="1"`.

- `x-small`

  - : Eine absolute Größe von 75 % der Größe von `medium`.

- `small`

  - : Eine absolute Größe von 89 % der Größe von `medium`. Zugeordnet dem veralteten `size="2"`.

- `medium`

  - : Die bevorzugte Schriftgröße des Benutzers. Dieser Wert wird als Referenz-Mittelwert verwendet. Zugeordnet `size="3"`.

- `large`

  - : Eine absolute Größe 20 % größer als `medium`. Zugeordnet dem veralteten `size="4"`.

- `x-large`

  - : Eine absolute Größe 50 % größer als `medium`. Zugeordnet dem veralteten `size="5"`.

- `xx-large`

  - : Eine absolute Größe doppelt so groß wie `medium`. Zugeordnet dem veralteten `size="6"`.

- `xxx-large`
  - : Eine absolute Größe dreimal so groß wie `medium`. Zugeordnet dem veralteten `size="7"`.

## Beschreibung

Jeder `<absolute-size>` Schlüsselwortwert wird relativ zur Größe `medium` und den individuellen Gerätemerkmalen, wie der Geräteauflösung, definiert. Benutzeragenten pflegen eine Tabelle der Schriftgrößen für jede Schriftart, wobei die `<absolute-size>` Schlüsselwörter der Index sind.

In CSS1 (1996) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortwertindizes 1,5, was zu groß war. In CSS2 (1998) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortwertindizes 1,2, was Probleme bei den kleinen Werten verursachte. Da sich ein einheitlicher festgelegter Faktor zwischen benachbarten Schlüsselwörtern als problematisch herausgestellt hat, gibt es keine feste Verhältnisempfehlung mehr. Die einzige Empfehlung zur Wahrung der Lesbarkeit besteht darin, dass die kleinste Schriftgröße nicht weniger als `9px` sein sollte.

Für jeden `<absolute-size>` Schlüsselwortwert zeigt die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [<h1> bis <h6>](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML `size` Attribut](#html_size_attribut).

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML `size` Attribut | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML size Attribut

Das `size` Attribut zur Einstellung der Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine ganze Zahl, der ein `+` oder `-` vorangestellt war, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete eine Erhöhung der `size` um eins und `-2` eine Verringerung der Größe um zwei, wobei der berechnete Wert auf ein Minimum von `1` und ein Maximum von `7` begrenzt wurde.

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
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
