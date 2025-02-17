---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt die Schlüsselwörter für absolute Größen. Dieser Datentyp wird in den Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}} verwendet.

Die Schriftgrößenschlüsselwörter sind dem veralteten HTML-Attribut `size` zugeordnet. Siehe den Abschnitt [HTML size-Attribut](#html_size-attribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>`-Datentyp wird unter Verwendung eines Schlüsselwortwerts aus der folgenden Liste definiert.

- `xx-small`

  - : Eine absolute Größe, die 60% der Größe von `medium` beträgt. Zugeordnet zu dem veralteten Attribut `size="1"`.

- `x-small`

  - : Eine absolute Größe, die 75% der Größe von `medium` beträgt.

- `small`

  - : Eine absolute Größe, die 89% der Größe von `medium` beträgt. Zugeordnet zu dem veralteten Attribut `size="2"`.

- `medium`

  - : Die bevorzugte Schriftgröße eines Benutzers. Dieser Wert wird als Referenzmittelwert verwendet. Zugeordnet zu `size="3"`.

- `large`

  - : Eine absolute Größe, die 20% größer als `medium` ist. Zugeordnet zu dem veralteten Attribut `size="4"`.

- `x-large`

  - : Eine absolute Größe, die 50% größer als `medium` ist. Zugeordnet zu dem veralteten Attribut `size="5"`.

- `xx-large`

  - : Eine absolute Größe, die doppelt so groß wie `medium` ist. Zugeordnet zu dem veralteten Attribut `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß wie `medium` ist. Zugeordnet zu dem veralteten Attribut `size="7"`.

## Beschreibung

Jedes `<absolute-size>`-Schlüsselwort wird relativ zur Größe von `medium` und den individuellen Gerätecharakteristika wie der Geräteurflösung berechnet. Benutzeragenten führen eine Tabelle der Schriftgrößen für jede Schriftart, wobei die `<absolute-size>`-Schlüsselwörter als Index verwendet werden.

In CSS1 (1996) war der Skalierungsfaktor zwischen benachbarten Schlüsselwertindizes 1,5, was zu groß war. In CSS2 (1998) wurde der Skalierungsfaktor auf 1,2 reduziert, was jedoch Probleme bei kleinen Werten verursachte. Da ein einzelnes festes Verhältnis zwischen benachbarten `<absolute-size>`-Schlüsselwörtern problematisch befunden wurde, gibt es keine feste Verhältnis-Empfehlung mehr. Die einzige Empfehlung zur Verbesserung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht kleiner als `9px` sein sollte.

Für jeden `<absolute-size>`-Schlüsselwortwert listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Element/Heading_Elements) Überschriften und die Zuordnung zum veralteten [HTML `size`-Attribut](#html_size-attribut) auf.

| `<absolute-size>`     | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| --------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor     | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften    | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML `size`-Attribut  | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML size-Attribut

Das `size`-Attribut zum Setzen der Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine ganze Zahl, der ein `+` oder `-` vorangestellt war, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete eine Erhöhung der `size` um eins, und `-2` bedeutete eine Reduzierung um zwei, wobei der berechnete Wert auf ein Minimum von `1` und ein Maximum von `7` begrenzt wurde.

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

- CSS-Datentyp {{cssxref("relative-size")}}
- CSS Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}}
- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
