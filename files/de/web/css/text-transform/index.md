---
title: text-transform
slug: Web/CSS/text-transform
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-transform`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Text eines Elements kapitalisiert wird. Sie kann verwendet werden, um Text in Großbuchstaben oder Kleinbuchstaben anzuzeigen, oder um jedes Wort großzuschreiben. Sie kann auch die Lesbarkeit von Ruby-Text verbessern.

{{InteractiveExample("CSS Demo: text-transform")}}

```css interactive-example-choice
text-transform: capitalize;
```

```css interactive-example-choice
text-transform: uppercase;
```

```css interactive-example-choice
text-transform: lowercase;
```

```css interactive-example-choice
text-transform: none;
```

```css interactive-example-choice
text-transform: full-width;
```

```css interactive-example-choice
text-transform: full-size-kana;
```

```css interactive-example-choice
text-transform: math-auto;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <p>
      LONDON. Michaelmas term lately over, and the Lord Chancellor sitting in
      Lincoln's Inn Hall.
    </p>
    <p lang="el">
      Σ is a Greek letter and appears in ΟΔΥΣΣΕΥΣ. Θα πάμε στο "Θεϊκό φαΐ" ή στη
      "Νεράιδα"
    </p>
    <p lang="ja">ァィゥェ ォヵㇰヶ</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2em;
}
```

Die `text-transform` Eigenschaft berücksichtigt sprachspezifische Kapitalisierungsvorschriften wie die folgenden:

- In Turksprachen wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolga-Tatarisch (`tt`) und Baschkirisch (`ba`), gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei Groß-/Kleinschriftpaarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird `ß` zu `SS` in Großbuchstaben.
- Im Niederländischen (`nl`) wird das Digraph `ij` zu `IJ`, auch wenn `text-transform: capitalize` verwendet wird, das normalerweise nur den ersten Buchstaben eines Wortes groß schreibt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben geschrieben wird (`ά`/`Α`), mit Ausnahme des disjunktiven Eta (`ή`/`Ή`). Außerdem verlieren Diphtongs mit einem Akzent auf dem ersten Vokal den Akzent und erhalten ein Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat das kleine Sigma zwei Formen: `σ` und `ς`. `ς` wird nur verwendet, wenn Sigma ein Wort beendet. Bei der Anwendung von `text-transform: lowercase` auf ein großes Sigma (`Σ`) muss der Browser die richtige Kleinbuchstabenform basierend auf dem Kontext wählen.
- Im Irischen (`ga`) bleiben bestimmte vorgestellte Buchstaben klein, wenn der Basiskonsonant groß geschrieben wird, z.B. `text-transform: uppercase` ändert `ar aon tslí` in `AR AON tSLÍ` und nicht, wie man erwarten könnte, in `AR AON TSLÍ` (nur Firefox). In einigen Fällen wird beim Großschreiben auch ein Bindestrich entfernt: `an t-uisce` wird zu `AN tUISCE` (und der Bindestrich wird durch `text-transform: lowercase` korrekt wieder eingesetzt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) HTML-Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) XML-Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Groß-/Kleinschreibung variiert zwischen den Browsern. Überprüfen Sie daher die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```css
/* Keyword values */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;
text-transform: math-auto;

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

- `capitalize`
  - : Ist ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Groß-/Kleinschreibung, wie sie im Text des Elements geschrieben sind). Ein Buchstabe wird als Zeichen definiert, das Teil der allgemeinen Unicode-Kategorien Buchstabe oder Zahl ist; daher werden alle Satzzeichen oder Symbole am Anfang eines Wortes ignoriert.

    > [!NOTE]
    > Autoren sollten nicht erwarten, dass `capitalize` sprachspezifischen Titelkonventionen folgt (wie das Überspringen von Artikeln im Englischen).

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 unzureichend spezifiziert. Dies führte zu Unterschieden zwischen den Browsern in der Art und Weise, wie der erste Buchstabe berechnet wurde (Firefox betrachtete `-` und `_` als Buchstaben, aber andere Browser nicht. Sowohl WebKit als auch Gecko betrachteten buchstabenbasierte Symbole wie `ⓐ` fälschlicherweise als echte Buchstaben). Durch die genaue Definition des richtigen Verhaltens bereinigt CSS Text Level 3 dieses Chaos. Die Zeile `capitalize` in der Tabelle zur Browser-Kompatibilität enthält die Version, in der die verschiedenen Engines begannen, dieses nun genau definierte Verhalten zu unterstützen.

- `uppercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ist ein Schlüsselwort, das verhindert, dass die Groß-/Kleinschreibung aller Zeichen geändert wird.
- `full-width`
  - : Ist ein Schlüsselwort, das das Schreiben eines Zeichens — hauptsächlich Ideogramme und lateinische Schriften — in einem Quadrat erzwingt, sodass sie in den üblichen ostasiatischen Schriften (wie Chinesisch oder Japanisch) ausgerichtet werden können.
- `full-size-kana`
  - : Wird allgemein für die {{htmlelement("ruby")}} Anmerkungstexte verwendet, das Schlüsselwort wandelt alle kleinen Kana-Zeichen in die entsprechenden vollgroßen Kana um, um Lesbarkeitsprobleme bei den kleinen Schriftgrößen zu kompensieren, die typischerweise für Ruby verwendet werden.
- `math-auto`
  - : Wird verwendet, um Text automatisch in mathematischem Kursiv zu rendern, wo es angebracht ist. Es wandelt lateinische und griechische Buchstaben sowie einige andere mathematisch verwandte Symbole in [kursive mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf) um, aber nur, wenn es auf einem Textknoten mit nur einem Zeichen angewendet wird. Zum Beispiel wird "x" zu "𝑥" (U+1D465), aber "exp" bleibt als "exp" erhalten.
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}} Elementen in MathML zu spezifizieren. Es wird allgemein empfohlen, MathML-Markup zu verwenden, das automatisch das richtige Styling anwendet.

## Barrierefreiheit

Große Textabschnitte, die mit einem Wert von `text-transform` auf `uppercase` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwerer zu lesen sein.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis der WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel mit "none"

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

Dies demonstriert keine Texttransformation.

{{ EmbedLiveSample('Beispiel mit "none"', '100%', '100px') }}

### Beispiel mit "capitalize" (allgemein)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Dies demonstriert die Großschreibung des Textes.

{{ EmbedLiveSample('Beispiel mit "capitalize" (allgemein)', '100%', '100px') }}

### Beispiel mit "capitalize" (Interpunktion)

```html
<p>
  Initial String
  <strong
    >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Dies demonstriert, wie Anfangszeichen eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das ist das erste Unicode-Zeichen, das Teil der allgemeinen Kategorie Buchstabe oder Zahl ist.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Interpunktion)', '100%', '100px') }}

### Beispiel mit "capitalize" (Symbole)

```html
<p>
  Initial String
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Dies demonstriert, wie Anfangssymbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das ist das erste Unicode-Zeichen, das Teil der allgemeinen Kategorie Buchstabe oder Zahl ist.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Symbole)', '100%', '100px') }}

### Beispiel mit "capitalize" (niederländisches ij-Digraph)

```html
<p>
  Initial String
  <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >The Dutch word: "ijsland" starts with a digraph.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Dies demonstriert, wie das niederländische _ij_-Digraph als ein einziger Buchstabe behandelt werden muss.

{{ EmbedLiveSample('Beispiel mit "capitalize" (niederländisches ij-Digraph)', '100%', '100px') }}

### Beispiel mit "uppercase" (allgemein)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Dies demonstriert die Umwandlung des Textes in Großbuchstaben.

{{ EmbedLiveSample('Beispiel mit "uppercase" (allgemein)', '100%', '100px') }}

### Beispiel mit "uppercase" (griechische Vokale)

```html
<p>
  Initial String
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span lang="el">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Dies demonstriert, wie griechische Vokale, außer das disjunktive _eta_, keinen Akzent haben sollten, und der Akzent auf dem ersten Vokal eines Vokalpaares zu einem Trema auf dem zweiten Vokal wird.

{{ EmbedLiveSample('Beispiel mit "uppercase" (griechische Vokale)', '100%', '100px') }}

### Beispiel mit "lowercase" (allgemein)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Dies demonstriert die Umwandlung des Textes in Kleinbuchstaben.

{{ EmbedLiveSample('Beispiel mit "lowercase" (allgemein)', '100%', '100px') }}

### Beispiel mit "lowercase" (griechisches Σ)

```html
<p>
  Initial String
  <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Dies demonstriert, wie das griechische Zeichen Sigma (`Σ`) in das reguläre kleine Sigma (`σ`) oder die Wortendform (`ς`) bis umgewandelt wird, je nach Kontext.

{{ EmbedLiveSample('Beispiel mit "lowercase" (griechisches Σ)', '100%', '100px') }}

### Beispiel mit "lowercase" (Litauisch)

```html
<p>
  Initial String
  <strong>Ĩ is a Lithuanian LETTER as is J́</strong>
</p>
<p>
  text-transform: lowercase
  <strong><span lang="lt">Ĩ is a Lithuanian LETTER as is J́</span></strong>
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Dies demonstriert, wie die litauischen Buchstaben `Ĩ` und `J́` ihren Punkt behalten, wenn sie in Kleinbuchstaben umgewandelt werden.

{{ EmbedLiveSample('Beispiel mit "lowercase" (Litauisch)', '100%', '100px') }}

### Beispiel mit "full-width" (allgemein)

```html
<p>
  Initial String
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Einige Zeichen existieren in zwei Formaten: normale Breite und volle Breite, mit unterschiedlichen Unicode-Codierungen. Die Vollbreitenversion wird verwendet, um sie nahtlos mit asiatischen Schriftzeichen zu mischen.

{{ EmbedLiveSample('Beispiel mit "full-width" (allgemein)', '100%', '175px') }}

### Beispiel mit "full-width" (japanisches Halbbreiten-Katakana)

```html
<p>
  Initial String
  <strong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</strong>
</p>
<p>
  text-transform: full-width
  <strong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></strong>
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Das japanische Halbbreiten-Katakana wurde verwendet, um Katakana in 8-Bit-Zeichencodes darzustellen. Im Gegensatz zu normalen (vollbreiten) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmloser Zeichen) als zwei Codierungen dargestellt, dem Körper des Buchstabens und dem Dakuten. `full-width` kombiniert diese zu einem einzigen Codepunkt, wenn diese Zeichen in volle Breite konvertiert werden.

{{ EmbedLiveSample('Beispiel mit "full-width" (japanisches Halbbreiten-Katakana)', '100%', '175px') }}

### Beispiel mit "full-size-kana"

```html
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
```

```css
p:nth-of-type(2) {
  text-transform: full-size-kana;
}
```

{{ EmbedLiveSample('Beispiel mit "full-size-kana"', '100%', '175px') }}

### Beispiel mit "math-auto"

In diesem Beispiel verwenden wir reines HTML-Markup, um eine mathematische Formel zu erstellen:

```html
<div>
  (<span class="math-id">sin</span>&#8198;<span class="math-id">x</span>)<sup
    >2</sup
  >
  + (<span class="math-id">cos</span>&#8198;<span class="math-id">x</span>)<sup
    >2</sup
  >
  = 1
</div>
```

Wir geben jedem `.math-id` Element `text-transform: math-auto`. Beachten Sie jedoch, wie nur die `x`-Zeichen kursiv werden, während `sin` und `cos` unverändert bleiben.

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Beispiel mit "math-auto"', '', '100px') }}

Es wird jedoch empfohlen, [MathML](/de/docs/Web/MathML) für mathematische Formeln zu verwenden, da es eine robustere und zugänglichere Möglichkeit bietet, mathematische Inhalte darzustellen. Hier ist die gleiche Formel in MathML:

```xml
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <semantics>
    <mrow>
      <mo stretchy="false">(</mo>
      <mo lspace="0em" rspace="0em">sin</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stretchy="false">)</mo>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mo stretchy="false">(</mo>
      <mo lspace="0em" rspace="0em">cos</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stretchy="false">)</mo>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <annotation encoding="TeX">(\sin\,x)^2+(\cos\,x)^2=1</annotation>
  </semantics>
</math>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}
