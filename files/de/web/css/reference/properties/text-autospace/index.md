---
title: "`text-autospace` CSS property"
short-title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-autospace`** können Sie den Abstand zwischen chinesischen, japanischen oder koreanischen (CJK) und anderen Zeichen festlegen.

Viele typografische Konventionen für CJK-Schriften erfordern einen kleinen Abstand zwischen CJK-Zeichen und westlichen Buchstaben oder Zahlen (siehe die Beschreibungen des W3C zu den Konventionen für den Textsatz im [Chinesischen](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) und [Japanischen](https://www.w3.org/International/jlreq/#japanese_and_western_mixed_text_composition)). Manche Autoren fügen dafür manuell ein Leerzeichen ein. `text-autospace` fügt diesen Abstand dagegen auf Ebene der Layout-Engine hinzu, ohne zusätzliche Zeichen im Textinhalt zu benötigen.

{{InteractiveExample("CSS Demo: text-autospace")}}

```css interactive-example-choice
text-autospace: no-autospace;
```

```css interactive-example-choice
text-autospace: normal;
```

```css interactive-example-choice
text-autospace: ideograph-alpha;
```

```css interactive-example-choice
text-autospace: ideograph-numeric;
```

```css interactive-example-choice
text-autospace: auto;
```

```html interactive-example
<section id="default-example">
  <div id="example-element" lang="zh">
    <p>HTML超文本标记语言</p>
    <p>42四十二</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font: 2rem sans-serif;
}

p {
  margin: 0;
}
```

## Syntax

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha ideograph-numeric punctuation;
text-autospace: ideograph-alpha ideograph-numeric;
text-autospace: ideograph-alpha ideograph-numeric insert;
text-autospace: auto;

/* Global values */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### Werte

- `normal`
  - : Bewirkt das Standardverhalten, bei dem Abstände zwischen CJK- und Nicht-CJK-Zeichen sowie um Satzzeichen automatisch eingefügt werden. Dieser Wert hat dieselbe Wirkung wie die gemeinsame Verwendung von [`ideograph-alpha`](#ideograph-alpha) und [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Ermöglicht eine genauere Steuerung des Abstandsverhaltens. Akzeptiert das Schlüsselwort `no-autospace` oder eine Kombination aus einem oder mehreren der Werte `ideograph-alpha`, `ideograph-numeric` und `punctuation`, optional gefolgt von `insert` oder `replace`.
    - `no-autospace`
      - : Deaktiviert automatische Abstände zwischen CJK- und Nicht-CJK-Zeichen.
    - `ideograph-alpha`
      - : Fügt nur zwischen ideografischen Zeichen (etwa Katakana und Han) und nicht ideografischen Buchstaben (etwa lateinischen Buchstaben) einen Abstand hinzu. Zwischen ideografischen Zeichen und nicht ideografischen Zahlen wird kein Abstand hinzugefügt.
    - `ideograph-numeric`
      - : Fügt nur zwischen ideografischen Zeichen (etwa Katakana und Han) und nicht ideografischen Zahlen (etwa lateinischen Ziffern) einen Abstand hinzu. Zwischen ideografischen Zeichen und nicht ideografischen Buchstaben wird kein Abstand hinzugefügt.
    - `punctuation`
      - : Fügt um Satzzeichen einen geschützten Abstand hinzu, soweit dies sprachspezifische typografische Konventionen erfordern.
    - `insert`
      - : Fügt den festgelegten Abstand nur hinzu, wenn zwischen ideografischen und nicht ideografischen Schriften noch kein Abstand vorhanden ist.
    - `replace`
      - : Ersetzt vorhandene Abstände (etwa {{Glossary("Whitespace", "U+0020")}}) zwischen ideografischen und nicht ideografischen Zeichen durch den festgelegten Abstand.
- `auto`
  - : Überlässt dem Browser die Wahl eines typografisch geeigneten Abstands. Der Abstand kann je nach Browser und Plattform unterschiedlich sein.

> [!NOTE]
> Wenn weder `insert` noch `replace` angegeben ist, entspricht das Verhalten dem von `insert`.

> [!NOTE]
> Diese Eigenschaft wirkt zusätzlich zu den Eigenschaften {{CSSXRef("word-spacing")}} und {{CSSXRef("letter-spacing")}}. Der durch `letter-spacing` festgelegte Abstand wird zu dem durch `text-autospace` erzeugten Abstand addiert. Dasselbe gilt für `word-spacing`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('text-spacing-trim')}}
- Die Einheiten [`ic`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths)
- Das Modul [CSS Text](/de/docs/Web/CSS/Guides/Text)
- [Gemischter Textsatz im horizontalen Schreibmodus](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) in „Requirements for Chinese Text Layout“ auf w3.org
- [Gemischter japanischer und westlicher Textsatz](https://www.w3.org/International/jlreq/#japanese_and_western_mixed_text_composition) in „Requirements for Japanese Text Layout“ auf w3.org
