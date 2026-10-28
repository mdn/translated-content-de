---
title: "`text-autospace` CSS property"
short-title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
l10n:
  sourceCommit: c91282d3f1f546ba4bc98a107ef97ce298846a91
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-autospace`** können Sie festlegen, welcher Abstand zwischen chinesischen, japanischen und koreanischen (CJK) Zeichen und Nicht-CJK-Zeichen eingefügt wird.

Viele typografische Konventionen für CJK-Texte erfordern einen kleinen Abstand zwischen CJK-Zeichen und westlichen Buchstaben oder Ziffern (siehe die Beschreibungen des W3C zu den Konventionen für das Textlayout im [Chinesischen](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) und [Japanischen](https://www.w3.org/TR/jlreq/#composition_of_japanese_and_western_mixed_texts)). Manche Autoren fügen dafür manuell ein Leerzeichen ein. `text-autospace` erzeugt diesen Abstand hingegen auf Ebene der Layout-Engine, ohne zusätzliche Zeichen im Textinhalt zu benötigen.

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
  - : Legt das Standardverhalten fest, bei dem automatisch Abstände zwischen CJK- und Nicht-CJK-Zeichen sowie um Satzzeichen eingefügt werden. Dieser Wert hat dieselbe Wirkung wie die gemeinsame Angabe von [`ideograph-alpha`](#ideograph-alpha) und [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Ermöglicht eine genauere Steuerung der Abstände. Akzeptiert das Schlüsselwort `no-autospace` oder eine Kombination aus einem oder mehreren der Werte `ideograph-alpha`, `ideograph-numeric` und `punctuation`, optional gefolgt von `insert` oder `replace`.
    - `no-autospace`
      - : Deaktiviert automatische Abstände zwischen CJK- und Nicht-CJK-Zeichen.
    - `ideograph-alpha`
      - : Fügt Abstände nur zwischen ideografischen Zeichen (wie Katakana und Han) und nicht ideografischen Buchstaben (wie lateinischen Buchstaben) ein. Zwischen ideografischen Zeichen und nicht ideografischen Ziffern werden keine Abstände eingefügt.
    - `ideograph-numeric`
      - : Fügt Abstände nur zwischen ideografischen Zeichen (wie Katakana und Han) und nicht ideografischen Ziffern (wie lateinischen Ziffern) ein. Zwischen ideografischen Zeichen und nicht ideografischen Buchstaben werden keine Abstände eingefügt.
    - `punctuation`
      - : Fügt um Satzzeichen geschützte Abstände ein, sofern sprachspezifische typografische Konventionen dies erfordern.
    - `insert`
      - : Fügt den angegebenen Abstand nur dann ein, wenn zwischen den ideografischen und nicht ideografischen Schriftsystemen noch keine Leerzeichen vorhanden sind.
    - `replace`
      - : Ersetzt vorhandene Leerzeichen (wie {{Glossary("Whitespace", "U+0020")}}) zwischen ideografischen und nicht ideografischen Zeichen durch den angegebenen Abstand.
- `auto`
  - : Überlässt dem Browser die Wahl eines typografisch geeigneten Abstands. Der Abstand kann je nach Browser und Plattform variieren.

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
- [Zusammensetzung gemischter Texte im horizontalen Schreibmodus](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) in „Requirements for Chinese Text Layout“ auf w3.org
- [Zusammensetzung gemischter japanischer und westlicher Texte](https://www.w3.org/International/jlreq/#japanese_and_western_mixed_text_composition) in „Requirements for Japanese Text Layout“ auf w3.org
