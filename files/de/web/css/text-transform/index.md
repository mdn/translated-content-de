---
title: text-transform
slug: Web/CSS/text-transform
l10n:
  sourceCommit: dad91b2a7c51b05d98cd79e436f61565810a42a5
---

{{CSSRef}}

Die **`text-transform`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie der Text eines Elements groß- oder kleingeschrieben wird. Sie kann verwendet werden, um Text in durchgehend Groß- oder Kleinschreibung oder mit jedem Wort großgeschrieben anzuzeigen. Sie kann auch helfen, die Lesbarkeit von Ruby zu verbessern.

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

Die `text-transform` Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß- und Kleinschreibung, wie die folgenden:

- In türkischen Sprachen, wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolgatatarisch (`tt`) und Baschkirisch (`ba`), gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei paarige Formen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird aus `ß` in Großbuchstaben `SS`.
- Im Niederländischen (`nl`) wird das `ij` Digraph `IJ`, sogar mit `text-transform: capitalize`, das normalerweise nur den ersten Buchstaben eines Wortes in Großbuchstaben umwandelt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das gesamte Wort in Großbuchstaben ist (`ά`/`Α`), außer beim disjunktiven Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten ein Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat das Kleinbuchstaben Sigma zwei Formen: `σ` und `ς`. `ς` wird nur verwendet, wenn Sigma ein Wort beendet. Bei Anwendung von `text-transform: lowercase` auf ein großes Sigma (`Σ`) muss der Browser die richtige Kleinbuchstabenform basierend auf dem Kontext wählen.
- Im Irischen (`ga`) bleiben bestimmte Präfixbuchstaben in Kleinbuchstaben, wenn der basierende Anfangsbuchstabe großgeschrieben ist, sodass z. B. `text-transform: uppercase` `ar aon tslí` in `AR AON tSLÍ` ändern wird und nicht, wie man erwarten könnte, in `AR AON TSLÍ` (nur in Firefox). In einigen Fällen wird beim Großschreiben auch ein Bindestrich entfernt: `an t-uisce` wird zu `AN tUISCE` transformiert (und der Bindestrich wird durch `text-transform: lowercase` korrekt wieder eingesetzt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) HTML-Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang) XML-Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Fälle variiert zwischen Browsern, daher überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

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

  - : Ist ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben konvertiert. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Groß-/Kleinschreibung, wie sie im Text des Elements geschrieben sind). Ein Buchstabe ist als ein Zeichen definiert, das Teil der allgemeinen Kategorien Letter oder Number von Unicode ist; daher werden alle Satzzeichen oder Symbole am Anfang eines Wortes ignoriert.

    > [!NOTE]
    > Autoren sollten nicht erwarten, dass `capitalize` sprachspezifische Großschreibkonventionen folgt (wie das Überspringen von Artikeln im Englischen).

    > [!NOTE]
    > Das `capitalize` Schlüsselwort war in CSS 1 und CSS 2.1 unzureichend spezifiziert. Dies führte zu Unterschieden zwischen Browsern bei der Berechnung des ersten Buchstabens (Firefox betrachtete `-` und `_` als Buchstaben, was andere Browser nicht taten. Sowohl Webkit als auch Gecko betrachteten buchstabenbasierte Symbole wie `ⓐ` fälschlicherweise als echte Buchstaben.) Durch die präzise Definition des richtigen Verhaltens klärt CSS Text Level 3 dieses Durcheinander auf. Die `capitalize`-Zeile in der Browser-Kompatibilitätstabelle enthält die Versionen der verschiedenen Engine, die jetzt dieses präzise definierte Verhalten unterstützen.

- `uppercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Großbuchstaben konvertiert.
- `lowercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben konvertiert.
- `none`
  - : Ist ein Schlüsselwort, das verhindert, dass die Groß-/Kleinschreibung aller Zeichen geändert wird.
- `full-width`
  - : Ist ein Schlüsselwort, das das Schreiben eines Zeichens erzwingt – hauptsächlich Ideogramme und lateinische Schriftarten – innerhalb eines Quadrats, sodass sie in den üblichen ostasiatischen Schriften (wie Chinesisch oder Japanisch) ausgerichtet werden können.
- `full-size-kana`
  - : Wird generell für {{htmlelement("ruby")}} Anmerkungstext verwendet, das Schlüsselwort konvertiert alle kleinen Kana-Zeichen zu den entsprechenden vollen Kana, um Lesbarkeitsprobleme bei den kleinen Schriftgrößen, die typischerweise für Ruby verwendet werden, auszugleichen.
- `math-auto`
  - : Wird verwendet, um Text automatisch in mathematischen Kursivschriften darzustellen, wo es angebracht ist. Es transformiert lateinische und griechische Buchstaben und einige andere mathematisch verwandte Symbole in [kursiv mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf), aber nur wenn es auf ein Textknoten mit einem einzelnen Zeichen angewendet wird. Zum Beispiel, "x" wird zu "𝑥" (U+1D465), aber "exp" bleibt als "exp". Es wird primär dazu verwendet, um das Verhalten von {{mathmlelement("mi")}} Elementen in MathML zu spezifizieren. Sie sollten generell MathML-Markup verwenden, das automatisch das richtige Styling anwendet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `text-transform` Wert von `uppercase` eingestellt sind, können für Personen mit kognitiven Bedenken wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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

Dies zeigt keine Texttransformation.

{{ EmbedLiveSample('Example using "none"', '100%', '100px') }}

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

Dies zeigt die Großschreibung von Text.

{{ EmbedLiveSample('Example using "capitalize" (general)', '100%', '100px') }}

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

Dies zeigt, wie Anfänge der Interpunktion eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das der erste Unicode-Charakter ist, der Teil der Letter oder Number Kategorien ist.

{{ EmbedLiveSample('Example using "capitalize" (punctuation)', '100%', '100px') }}

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

Dies zeigt, wie Anfangssymbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das der erste Unicode-Charakter ist, der Teil der Letter oder Number Kategorien ist.

{{ EmbedLiveSample('Example using "capitalize" (symbols)', '100%', '100px') }}

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

Dies zeigt, wie das niederländische _ij_ Digraph wie ein einzelner Buchstabe behandelt werden muss.

{{ EmbedLiveSample('Example using "capitalize" (Dutch ij digraph)', '100%', '100px') }}

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

Dies zeigt die Umwandlung des Textes in Großbuchstaben.

{{ EmbedLiveSample('Example using "uppercase" (general)', '100%', '100px') }}

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

Dies zeigt, wie griechische Vokale außer dem disjunktiven _Eta_ keinen Akzent haben sollten, und der Akzent auf dem ersten Vokal eines Vokalpaares wird ein Trema auf dem zweiten Vokal.

{{ EmbedLiveSample('Example using "uppercase" (Greek vowels)', '100%', '100px') }}

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

Dies zeigt die Umwandlung des Textes in Kleinbuchstaben.

{{ EmbedLiveSample('Example using "lowercase" (general)', '100%', '100px') }}

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

Dies zeigt, wie das griechische Zeichen Sigma (`Σ`) in das reguläre Kleinbuchstaben-Sigma (`σ`) oder die wortfinale Variante (`ς`) transformiert wird, je nach Kontext.

{{ EmbedLiveSample('Example using "lowercase" (Greek Σ)', '100%', '100px') }}

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

Dies zeigt, wie die litauischen Buchstaben `Ĩ` und `J́` ihren Punkt behalten, wenn sie in Kleinbuchstaben umgewandelt werden.

{{ EmbedLiveSample('Example using "lowercase" (Lithuanian)', '100%', '100px') }}

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

Einige Zeichen existieren in zwei Formaten: normale Breite und volle Breite, mit unterschiedlichen Unicode-Codepoints. Die volle Breite wird verwendet, um sie nahtlos mit asiatischen ideografischen Zeichen zu mischen.

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### Beispiel mit "full-width" (japanische Halbbreit-Katakana)

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

Die japanische Halbbreit-Katakana wurde verwendet, um Katakana in 8-Bit-Zeichencodes darzustellen. Anders als reguläre (vollbreite) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmhaftes Klangzeichen) als zwei Codepunkte dargestellt, der Körper des Buchstabens und Dakuten. Die `full-width` kombiniert diese in einen einzelnen Codepunkt, wenn diese Zeichen in volle Breite konvertiert werden.

{{ EmbedLiveSample('Example using "full-width" (Japanese half-width katakana)', '100%', '175px') }}

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

{{ EmbedLiveSample('Example using "full-size-kana"', '100%', '175px') }}

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

Wir geben jedem `.math-id` Element `text-transform: math-auto`. Beachten Sie jedoch, dass nur die `x` Zeichen kursiv werden, während die `sin` und `cos` unverändert bleiben.

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Example using "math-auto"', '', '100px') }}

Sie werden jedoch ermutigt, [MathML](/de/docs/Web/MathML) für mathematische Formeln zu verwenden, da es eine robustere und zugänglichere Möglichkeit bietet, mathematische Inhalte darzustellen. Hier ist die gleiche Formel unter Verwendung von MathML:

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
