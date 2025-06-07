---
title: text-transform
slug: Web/CSS/text-transform
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{CSSRef}}

Die **`text-transform`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, wie der Text eines Elements großgeschrieben wird. Sie kann verwendet werden, um Text in Großbuchstaben oder Kleinbuchstaben erscheinen zu lassen oder mit jedem Wort in Großbuchstaben. Sie kann auch helfen, die Lesbarkeit für Ruby zu verbessern.

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

Die `text-transform` Eigenschaft berücksichtigt sprachspezifische Groß- und Kleinschreibungsregeln wie die folgenden:

- In Turksprachen, wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolga-Tatarisch (`tt`) und Baschkirisch (`ba`), gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei Paarungen von Groß- und Kleinbuchstaben: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird `ß` zu `SS` in Großbuchstaben.
- Im Niederländischen (`nl`) wird das `ij` Digraph zu `IJ`, sogar mit `text-transform: capitalize`, das nur den ersten Buchstaben eines Wortes großschreibt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben ist (`ά`/`Α`), außer für das disjunktive Eta (`ή`/`Ή`). Außerdem verlieren Diphthonge mit Akzent auf dem ersten Vokal den Akzent und erhalten ein Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat das kleine Sigma zwei Formen: `σ` und `ς`. `ς` wird nur verwendet, wenn Sigma ein Wort beendet. Bei Anwendung von `text-transform: lowercase` auf ein großes Sigma (`Σ`) muss der Browser die richtige Kleinbuchstabenform basierend auf dem Kontext wählen.
- Im Irischen (`ga`) bleiben bestimmte Präfixbuchstaben kleingeschrieben, wenn der Basisbuchstabe großgeschrieben wird, sodass beispielsweise `text-transform: uppercase` `ar aon tslí` in `AR AON tSLÍ` ändert und nicht, wie man erwarten könnte, `AR AON TSLÍ` (nur Firefox). In manchen Fällen wird ein Bindestrich auch beim Großschreiben entfernt: `an t-uisce` verwandelt sich in `AN tUISCE` (und der Bindestrich wird korrekt durch `text-transform: lowercase` wieder eingefügt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) HTML Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) XML Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Fälle variiert zwischen Browsern, daher prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

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

  - : Ist ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Schreibweise, wie im Text des Elements geschrieben). Ein Buchstabe ist definiert als ein Zeichen, das Teil der Unicode-Kategorien Letter oder Number ist; daher werden Satzzeichen oder Symbole am Anfang eines Wortes ignoriert.

    > [!NOTE]
    > Autoren sollten nicht erwarten, dass `capitalize` sprachspezifische Titelkonventionen befolgt (wie das Überspringen von Artikeln im Englischen).

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 unpräzise spezifiziert. Dies führte zu Unterschieden zwischen Browsern in der Art und Weise, wie der erste Buchstabe berechnet wurde (Firefox betrachtete `-` und `_` als Buchstaben, andere Browser nicht. Sowohl WebKit als auch Gecko betrachteten buchstabenbasierte Symbole wie `ⓐ` fälschlicherweise als echte Buchstaben). Durch die präzise Definition des richtigen Verhaltens, bereinigt CSS Text Level 3 dieses Durcheinander. Die Zeile `capitalize` in der Browser-Kompatibilitätstabelle enthält die Version, ab der die verschiedenen Engines dieses nun präzise definierte Verhalten unterstützen.

- `uppercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ist ein Schlüsselwort, das verhindert, dass die Groß- oder Kleinschreibung aller Zeichen geändert wird.
- `full-width`
  - : Ist ein Schlüsselwort, das das Schreiben eines Zeichens — hauptsächlich Ideogramme und lateinische Skripte — in einem Quadrat erzwingt, sodass sie in den üblichen ostasiatischen Schriften (wie Chinesisch oder Japanisch) ausgerichtet werden können.
- `full-size-kana`
  - : Allgemein verwendet für {{htmlelement("ruby")}} Anmerkungstext, konvertiert das Schlüsselwort alle kleinen Kana-Zeichen in die entsprechenden vollständigen Kana, um Lesbarkeitsprobleme bei den typischerweise in Ruby verwendeten kleinen Schriftgrößen zu kompensieren.
- `math-auto`
  - : Wird verwendet, um Text automatisch im mathematischen Kursivschriftstil darzustellen, wo es angemessen ist. Es transformiert lateinische und griechische Buchstaben und einige andere math-bezogene Symbole in [kursive mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf), aber nur, wenn es auf einen Textknoten angewendet wird, der ein einzelnes Zeichen enthält. Zum Beispiel wird "x" zu "𝑥" (U+1D465), aber "exp" bleibt "exp".
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}} Elementen in MathML zu spezifizieren. Sie sollten im Allgemeinen MathML-Markup verwenden, das automatisch das richtige Styling anwendet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `text-transform` Wert von `uppercase` gesetzt sind, können für Menschen mit kognitiven Einschränkungen wie Dyslexie schwer zu lesen sein.

- [MDN Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

Dies demonstriert keine Textumwandlung.

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

Dies demonstriert die Textkapitalisierung.

{{ EmbedLiveSample('Beispiel mit "capitalize" (allgemein)', '100%', '100px') }}

### Beispiel mit "capitalize" (Zeichensetzung)

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

Dies demonstriert, wie Anfangszeichensetzungen eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das heißt das erste Unicode-Zeichen, das Teil der Unicode-Kategorien Letter oder Number ist.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Zeichensetzung)', '100%', '100px') }}

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

Dies demonstriert, wie Anfangssymbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das heißt das erste Unicode-Zeichen, das Teil der Unicode-Kategorien Letter oder Number ist.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Symbole)', '100%', '100px') }}

### Beispiel mit "capitalize" (Niederländische ij Digraph)

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

Dies demonstriert, wie das niederländische _ij_ Digraph wie ein einzelner Buchstabe behandelt werden muss.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Niederländische ij Digraph)', '100%', '100px') }}

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

### Beispiel mit "uppercase" (Griechische Vokale)

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

Dies demonstriert, wie griechische Vokale außer dem disjunktiven _Eta_ keinen Akzent haben sollten, und der Akzent auf dem ersten Vokal eines Vokalpaars wird in ein Trema auf dem zweiten Vokal umgewandelt.

{{ EmbedLiveSample('Beispiel mit "uppercase" (Griechische Vokale)', '100%', '100px') }}

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

### Beispiel mit "lowercase" (Griechisches Σ)

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

Dies demonstriert, wie der griechische Buchstabe Sigma (`Σ`) in das reguläre kleine Sigma (`σ`) oder die wortfinale Variante (`ς`) umgewandelt wird, entsprechend dem Kontext.

{{ EmbedLiveSample('Beispiel mit "lowercase" (Griechisches Σ)', '100%', '100px') }}

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

Einige Zeichen existieren in zwei Formaten: normale Breite und volle Breite, mit unterschiedlichen Unicode-Codepunkten. Die Version mit voller Breite wird verwendet, um sie nahtlos mit asiatischen ideografischen Zeichen zu mischen.

{{ EmbedLiveSample('Beispiel mit "full-width" (allgemein)', '100%', '175px') }}

### Beispiel mit "full-width" (Japanisches Halbbreit-Katakana)

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

Das japanische Halbbreit-Katakana wurde verwendet, um Katakana in 8-Bit-Zeichenkodes darzustellen. Im Gegensatz zu regulären (vollbreiten) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmzeichen) als zwei Codepunkte dargestellt, der Buchstabenkörper und das Dakuten. Der `full-width` kombiniert diese in einen einzelnen Codepunkt, wenn diese Zeichen in volle Breite konvertiert werden.

{{ EmbedLiveSample('Beispiel mit "full-width" (Japanisches Halbbreit-Katakana)', '100%', '175px') }}

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

Wir geben jedem `.math-id` Element `text-transform: math-auto`. Beachten Sie jedoch, dass nur die `x` Zeichen kursiv werden, während `sin` und `cos` unverändert bleiben.

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Beispiel mit "math-auto"', '', '100px') }}

Sie werden jedoch ermutigt, [MathML](/de/docs/Web/MathML) für mathematische Formeln zu verwenden, da es eine robustere und zugänglichere Möglichkeit bietet, mathematische Inhalte darzustellen. Hier ist die gleiche Formel mit MathML:

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
