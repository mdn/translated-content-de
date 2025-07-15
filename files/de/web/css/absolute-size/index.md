---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<absolute-size>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt die Schlüsselwörter für absolute Größen. Dieser Datentyp wird in den {{cssxref("font")}}-Kurznotationen und {{cssxref("font-size")}}-Eigenschaften verwendet.

Die Schriftgrößenschlüsselwörter werden auf das veraltete HTML-`size`-Attribut abgebildet. Siehe den Abschnitt [HTML-Größenattribut](#html-größenattribut) unten.

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der `<absolute-size>`-Datentyp wird mit einem Schlüsselwortwert definiert, der aus der folgenden Liste ausgewählt wird.

- `xx-small`
  - : Eine absolute Größe von 60 % der Größe von `medium`. Abgebildet auf das veraltete `size="1"`.

- `x-small`
  - : Eine absolute Größe von 75 % der Größe von `medium`.

- `small`
  - : Eine absolute Größe von 89 % der Größe von `medium`. Abgebildet auf das veraltete `size="2"`.

- `medium`
  - : Die bevorzugte Schriftgröße eines Benutzers. Dieser Wert wird als Referenzmittelwert verwendet. Abgebildet auf `size="3"`.

- `large`
  - : Eine absolute Größe, die 20 % größer ist als `medium`. Abgebildet auf das veraltete `size="4"`.

- `x-large`
  - : Eine absolute Größe, die 50 % größer ist als `medium`. Abgebildet auf das veraltete `size="5"`.

- `xx-large`
  - : Eine absolute Größe, die doppelt so groß ist wie `medium`. Abgebildet auf das veraltete `size="6"`.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß ist wie `medium`. Abgebildet auf das veraltete `size="7"`.

## Beschreibung

Jeder `<absolute-size>`-Schlüsselwortwert wird relativ zur `medium`-Größe und den individuellen Gerätemerkmalen, wie z.B. der Geräteauflösung, dimensioniert. Benutzeragenten führen eine Tabelle mit Schriftgrößen für jede Schriftart, wobei die `<absolute-size>`-Schlüsselwörter als Index dienen.

In CSS1 (1996) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortwerteindizes 1,5, was zu groß war. In CSS2 (1998) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwortwerteindizes 1,2, was bei den kleinen Werten Probleme verursachte. Da ein einziger fester Faktor zwischen benachbarten Schlüsselwörtern der absoluten Größe problematisch war, gibt es keine feste Faktor-Empfehlung mehr. Die einzige Empfehlung zur Wahrung der Lesbarkeit ist, dass die kleinste Schriftgröße nicht weniger als `9px` betragen sollte.

Für jeden `<absolute-size>`-Schlüsselwortwert listet die folgende Tabelle den Skalierungsfaktor, die Zuordnung zu [<h1> bis <h6>](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)-Überschriften und die Zuordnung zum veralteten [HTML-`size`-Attribut](#html-größenattribut) auf.

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-`size`-Attribut | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML-Größenattribut

Das `size`-Attribut zur Einstellung der Schriftgröße in HTML ist veraltet. Der Attributwert war entweder eine ganze Zahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte waren eine Zahl, der ein `+` oder `-` vorausging, um die Schriftgröße entsprechend zu erhöhen oder zu verringern. Ein Wert von `+1` bedeutete, die `size` um eins zu erhöhen und `-2` bedeutete, die Größe um zwei zu verringern, wobei der berechnete Wert auf ein Minimum von `1` und einen maximalen berechneten Wert von `7` beschränkt war.

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
- CSS-Eigenschaften {{cssxref("font")}} und {{cssxref("font-size")}}
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
