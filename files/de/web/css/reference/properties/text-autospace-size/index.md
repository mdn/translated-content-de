---
title: "`text-autospace-size` CSS property"
short-title: text-autospace-size
slug: Web/CSS/Reference/Properties/text-autospace-size
l10n:
  sourceCommit: a32e2ce750837a97815278ef91aa07d3d3f73719
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-autospace-size`** legt die Größe des Abstands fest, den die Eigenschaft {{cssxref("text-autospace")}} zwischen chinesischen, japanischen und koreanischen (CJK) Zeichen und Nicht-CJK-Buchstaben und -Zahlen einfügt.

## Syntax

```css
/* <number> values */
text-autospace-size: 0.125;
text-autospace-size: 0.25;
text-autospace-size: 0;

/* Global values */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

## Werte

Für diese Eigenschaft wird ein Wert angegeben:

- {{cssxref("&lt;number&gt;")}}
  - : Gibt die Größe des Abstands als Anteil der Breite eines CJK-Ideogramms an, dargestellt durch die Einheit [`ic`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths). Der Anfangswert ist `0.125`. Negative Werte sind ungültig.

## Beschreibung

Die Eigenschaft `text-autospace-size` legt die Größe des Abstands fest, den die Eigenschaft {{cssxref("text-autospace")}} zwischen chinesischen, japanischen und koreanischen (CJK) Zeichen und Nicht-CJK-Buchstaben und -Zahlen einfügt. Sie wirkt sich nur aus, wenn der Browser Abstände zwischen Ideogrammen und nicht-ideografischen Buchstaben oder Zahlen einfügt. Das ist der Fall, solange `text-autospace` nicht auf `no-autospace` gesetzt ist. Der Wert beeinflusst nicht die Abstände um Satzzeichen.

Der Wert ist ein nicht negativer `<number>`, der die Größe des eingefügten Abstands im Verhältnis zur Größe eines Ideogramms angibt. Der Anfangswert `0.125` fügt beispielsweise einen Abstand von `0.125ic` hinzu – ein Achtel der Breite eines Ideogramms zwischen dem Ideogramm und nicht-ideografischen Buchstaben oder Zahlen. Negative Werte sind ungültig; `0` fügt keinen Abstand hinzu.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstand vergrößern

Dieses Beispiel vergleicht die standardmäßige Abstandsgröße mit einer größeren. In beiden Absätzen ist {{cssxref("text-autospace")}} auf `normal` gesetzt, um zwischen chinesischen und lateinischen Zeichen einen Abstand einzufügen. Im zweiten Absatz wird dieser Abstand mit `text-autospace-size` verdoppelt.

#### HTML

Wir verwenden zwei Absätze mit demselben Text, der sowohl ideografische als auch nicht-ideografische Zeichen enthält.

```html
<p lang="zh">HTML超文本标记语言</p>
<p lang="zh" class="wide">HTML超文本标记语言</p>
```

#### CSS

Wir legen grundlegende Stile für alle Absätze fest. Für den Absatz `wide` setzen wir `text-autospace-size` auf `0.25` – das Doppelte des Standardwerts `0.125`.

```css
p {
  margin: 0;
  text-autospace: normal;
  font: 2rem sans-serif;
}
.wide {
  text-autospace-size: 0.25;
}
```

```css hidden
@supports not (text-autospace-size: 0.25) {
  body::before {
    content: "Your browser does not support the text-autospace-size property.";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("increasing_the_spacing", "100%", 120)}}

Der Abstand zwischen „HTML“ und den chinesischen Zeichen ist im zweiten Absatz doppelt so groß.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-autospace")}}
- {{cssxref("text-spacing-trim")}}
- Einheit [`ic`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths)
- Modul [CSS Text](/de/docs/Web/CSS/Guides/Text)
