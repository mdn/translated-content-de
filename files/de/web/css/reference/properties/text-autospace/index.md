---
title: "`text-autospace` CSS property"
short-title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
l10n:
  sourceCommit: a32e2ce750837a97815278ef91aa07d3d3f73719
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-autospace`** können Sie den Abstand zwischen chinesischen, japanischen oder koreanischen (CJK) Zeichen und Nicht-CJK-Zeichen festlegen.

Viele typografische Konventionen für CJK-Schriften erfordern einen kleinen Abstand zwischen CJK-Zeichen und westlichen Buchstaben oder Zahlen (siehe die Beschreibungen der W3C-Konventionen für das Textlayout im [Chinesischen](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) und [Japanischen](https://www.w3.org/International/jlreq/#japanese_and_western_mixed_text_composition)). Manche Autoren fügen dafür manuell ein Leerzeichen ein. `text-autospace` fügt diesen Abstand stattdessen auf Ebene der Layout-Engine hinzu, ohne zusätzliche Zeichen im Textinhalt zu benötigen.

Die Größe des Abstands kann mit der Eigenschaft {{cssxref("text-autospace-size")}} festgelegt werden.

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
  - : Bewirkt das Standardverhalten: Zwischen CJK- und Nicht-CJK-Zeichen sowie um Satzzeichen herum wird automatisch Abstand eingefügt. Dieser Wert hat denselben Effekt wie die Kombination von [`ideograph-alpha`](#ideograph-alpha) und [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Ermöglicht eine genauere Steuerung des Abstands. Akzeptiert das Schlüsselwort `no-autospace` oder eine Kombination aus einem oder mehreren der Werte `ideograph-alpha`, `ideograph-numeric` und `punctuation`, optional gefolgt von `insert` oder `replace`.
    - `no-autospace`
      - : Deaktiviert den automatischen Abstand zwischen CJK- und Nicht-CJK-Zeichen.
    - `ideograph-alpha`
      - : Fügt nur zwischen ideografischen Zeichen (z. B. Katakana und Han) und nicht ideografischen Buchstaben (z. B. lateinischen Buchstaben) Abstand hinzu. Zwischen ideografischen Zeichen und nicht ideografischen Ziffern wird kein Abstand hinzugefügt.
    - `ideograph-numeric`
      - : Fügt nur zwischen ideografischen Zeichen (z. B. Katakana und Han) und nicht ideografischen Ziffern (z. B. lateinischen Ziffern) Abstand hinzu. Zwischen ideografischen Zeichen und nicht ideografischen Buchstaben wird kein Abstand hinzugefügt.
    - `punctuation`
      - : Fügt um Satzzeichen herum geschützten Abstand hinzu, sofern sprachspezifische typografische Konventionen dies erfordern.
    - `insert`
      - : Fügt den angegebenen Abstand nur hinzu, wenn zwischen den ideografischen und nicht ideografischen Schriften noch kein Abstand vorhanden ist.
    - `replace`
      - : Ersetzt vorhandenen Abstand (z. B. {{Glossary("Whitespace", "U+0020")}}) zwischen ideografischen und nicht ideografischen Zeichen durch den angegebenen Abstand.
- `auto`
  - : Überlässt dem Browser die Wahl eines typografisch geeigneten Abstands. Der Abstand kann je nach Browser und Plattform variieren.

> [!NOTE]
> Wenn weder `insert` noch `replace` angegeben ist, entspricht das Verhalten dem von `insert`.

> [!NOTE]
> Die Wirkung dieser Eigenschaft wird zu der der Eigenschaften {{CSSXRef("word-spacing")}} und {{CSSXRef("letter-spacing")}} addiert. Der durch `letter-spacing` festgelegte Abstand wird zu dem von `text-autospace` erzeugten Abstand hinzugefügt. Dasselbe gilt für `word-spacing`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('text-autospace-size')}}
- {{cssxref('text-spacing-trim')}}
- Die Einheiten [`ic`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths)
- Das Modul [CSS Text](/de/docs/Web/CSS/Guides/Text)
- [Gemischter Textsatz im horizontalen Schreibmodus](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) in „Requirements for Chinese Text Layout“ auf w3.org
- [Gemischter japanischer und westlicher Textsatz](https://www.w3.org/International/jlreq/#japanese_and_western_mixed_text_composition) in „Requirements for Japanese Text Layout“ auf w3.org
