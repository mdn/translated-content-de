---
title: CSS-Typ `<absolute-size>`
short-title: <absolute-size>
slug: Web/CSS/Reference/Values/absolute-size
l10n:
  sourceCommit: 1c750f4aaa4462d570112a79df5e779d892e9a8d
---

Der **`<absolute-size>`**-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) von [CSS](/de/docs/Web/CSS) beschreibt Schlüsselwörter für absolute Schriftgrößen. Dieser Datentyp wird in der Kurzschreibweise {{cssxref("font")}} und der Eigenschaft {{cssxref("font-size")}} verwendet.

Die Schlüsselwörter für Schriftgrößen sind dem veralteten HTML-Attribut `size` zugeordnet. Siehe den Abschnitt zum [HTML-Attribut `size`](#html-attribut_`size`) weiter unten.

## Zugehörige Eigenschaften

Dieser Datentyp wird in Werten der folgenden CSS-Eigenschaften akzeptiert:

- {{cssxref("font-size")}}
- {{cssxref("font")}} als Kurzschreibweise

## Syntax

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Werte

Der Datentyp `<absolute-size>` wird durch eines der folgenden Schlüsselwörter definiert.

- `xx-small`
  - : Eine absolute Größe, die 60 % der Größe von `medium` entspricht. Dem veralteten `size="1"` zugeordnet.

- `x-small`
  - : Eine absolute Größe, die 75 % der Größe von `medium` entspricht.

- `small`
  - : Eine absolute Größe, die 89 % der Größe von `medium` entspricht. Dem veralteten `size="2"` zugeordnet.

- `medium`
  - : Die vom Benutzer bevorzugte Schriftgröße. Dieser Wert dient als mittlerer Referenzwert. `size="3"` zugeordnet.

- `large`
  - : Eine absolute Größe, die 20 % größer als `medium` ist. Dem veralteten `size="4"` zugeordnet.

- `x-large`
  - : Eine absolute Größe, die 50 % größer als `medium` ist. Dem veralteten `size="5"` zugeordnet.

- `xx-large`
  - : Eine absolute Größe, die doppelt so groß wie `medium` ist. Dem veralteten `size="6"` zugeordnet.

- `xxx-large`
  - : Eine absolute Größe, die dreimal so groß wie `medium` ist. Dem veralteten `size="7"` zugeordnet.

## Beschreibung

Die Größe jedes `<absolute-size>`-Schlüsselworts wird relativ zur Größe `medium` und zu den Eigenschaften des jeweiligen Geräts, etwa seiner Auflösung, bestimmt. User Agents verwalten für jede Schriftart eine Tabelle mit Schriftgrößen, in der die `<absolute-size>`-Schlüsselwörter als Indizes dienen.

In CSS1 (1996) betrug der Skalierungsfaktor zwischen benachbarten Schlüsselwörtern 1,5, was zu groß war. In CSS2 (1998) betrug er 1,2, was bei kleinen Werten zu Problemen führte. Da sich ein einheitliches festes Verhältnis zwischen benachbarten Schlüsselwörtern für absolute Größen als problematisch erwiesen hat, wird kein festes Verhältnis mehr empfohlen. Um die Lesbarkeit zu gewährleisten, wird lediglich empfohlen, dass die kleinste Schriftgröße nicht unter `9px` liegen sollte.

Die folgende Tabelle zeigt für jedes `<absolute-size>`-Schlüsselwort den Skalierungsfaktor, die Zuordnung zu den Überschriften [`<h1>` bis `<h6>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und die Zuordnung zum veralteten [HTML-Attribut `size`](#html-attribut_`size`).

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| Skalierungsfaktor    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| HTML-Überschriften   | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML-Attribut `size` | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML-Attribut `size`

Das HTML-Attribut `size` zum Festlegen der Schriftgröße ist veraltet. Sein Wert war entweder eine Ganzzahl zwischen `1` und `7` oder ein relativer Wert. Relative Werte bestanden aus einer Ganzzahl mit vorangestelltem `+` beziehungsweise `-`, um die Schriftgröße zu erhöhen beziehungsweise zu verringern. Der Wert `+1` erhöhte `size` um eins, während `-2` die Größe um zwei verringerte. Der berechnete Wert wurde dabei auf mindestens `1` und höchstens `7` begrenzt.

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
- Modul [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts)
