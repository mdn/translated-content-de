---
title: text-transform
slug: Web/CSS/text-transform
l10n:
  sourceCommit: dad91b2a7c51b05d98cd79e436f61565810a42a5
---

{{CSSRef}}

Die **`text-transform`**-Eigenschaft [CSS](/de/docs/Web/CSS) gibt an, wie der Text eines Elements kapitalisiert werden soll. Sie kann verwendet werden, um Text vollständig in Großbuchstaben oder Kleinbuchstaben darzustellen oder jedes Wort zu kapitalisieren. Sie kann auch zur Verbesserung der Lesbarkeit bei Ruby-Bezeichnern beitragen.

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

Die `text-transform`-Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß- und Kleinschreibung, wie die folgenden:

- In Turksprachen wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolgatatarisch (`tt`) und Baschkirisch (`ba`) gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird `ß` in Großbuchstaben zu `SS`.
- Im Niederländischen (`nl`) wird der `ij` Digraph zu `IJ`, selbst bei `text-transform: capitalize`, das nur den ersten Buchstaben eines Wortes groß schreibt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das ganze Wort groß geschrieben wird (`ά`/`Α`), mit Ausnahme des disjunktiven Eta (`ή`/`Ή`). Diphthonge mit Akzent auf dem ersten Vokal verlieren den Akzent und bekommen ein Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat das Kleinsigma-Zeichen zwei Formen: `σ` und `ς`. `ς` wird nur am Wortende verwendet. Bei der Anwendung von `text-transform: lowercase` auf ein Großsigma (`Σ`) muss der Browser die richtige Kleinform basierend auf dem Kontext wählen.
- Im Irischen (`ga`) bleiben bestimmte vorangestellte Buchstaben in Kleinbuchstaben, wenn der Basisanfang groß geschrieben wird. So verändert `text-transform: uppercase` `ar aon tslí` zu `AR AON tSLÍ` und nicht, wie man erwarten könnte, zu `AR AON TSLÍ` (nur in Firefox). In einigen Fällen wird ein Bindestrich beim Großschreiben ebenfalls entfernt: `an t-uisce` verwandelt sich in `AN tUISCE` (und der Bindestrich wird durch `text-transform: lowercase` korrekt wieder eingefügt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-HTML-Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang)-XML-Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Fälle variiert zwischen den Browsern. Überprüfen Sie daher die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

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

  - : Ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Schreibweise, wie im Text des Elements geschrieben). Ein Buchstabe wird als ein Zeichen definiert, das Bestandteil von Unicodes Buchstaben- oder Zahlenkategorien ist; somit werden alle Satzzeichen oder Symbole am Anfang eines Wortes ignoriert.

    > [!NOTE]
    > Autoren sollten nicht erwarten, dass `capitalize` sprachspezifische Titelkonventionen befolgt (wie das Übergehen von Artikeln im Englischen).

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 unzureichend spezifiziert. Das führte zu Unterschieden zwischen den Browsern in der Art, wie der erste Buchstabe berechnet wurde (Firefox betrachtete `-` und `_` als Buchstaben, aber andere Browser nicht. Sowohl Webkit als auch Gecko betrachteten zeichenbasierte Symbole wie `ⓐ` fälschlicherweise als echte Buchstaben). Durch die präzise Definition des korrekten Verhaltens räumt CSS Text Level 3 diese Probleme aus. Die `capitalize`-Zeile in der Tabelle zur Browser-Kompatibilität enthält die Version, ab der die verschiedenen Engines dieses nun präzise definierte Verhalten unterstützen.

- `uppercase`
  - : Ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ein Schlüsselwort, das verhindert, dass die Schreibweise der Zeichen geändert wird.
- `full-width`
  - : Ein Schlüsselwort, das die Schreibweise eines Zeichens — hauptsächlich Ideogramme und lateinische Skripte — innerhalb eines Quadrats erzwingt, um sie in den üblichen ostasiatischen Schriften (wie Chinesisch oder Japanisch) auszurichten.
- `full-size-kana`
  - : Allgemein verwendet für {{htmlelement("ruby")}}-Annotationen, wandelt das Schlüsselwort alle kleinen Kana-Zeichen in die entsprechenden Kana in voller Größe um, um die Lesbarkeitsprobleme bei den normalerweise bei Ruby verwendeten kleinen Schriftgrößen zu kompensieren.
- `math-auto`
  - : Wird verwendet, um Text dort automatisch in mathematischer Kursivschrift darzustellen, wo es angebracht ist. Es wandelt lateinische und griechische Buchstaben und einige andere mathematikbezogene Symbole in [kursiv mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf) um, jedoch nur, wenn es auf einen Textknoten angewendet wird, der ein einzelnes Zeichen enthält. Zum Beispiel wird "x" zu "𝑥" (U+1D465), aber "exp" bleibt "exp".
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}}-Elementen in MathML zu spezifizieren. Sie sollten generell MathML-Markup verwenden, das stilistische Anweisungen automatisch richtig anwendet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `text-transform`-Wert von `uppercase` gesetzt werden, können für Menschen mit kognitiven Schwierigkeiten, wie etwa Dyslexie, schwer zu lesen sein.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

Dies demonstriert keine Texttransformation.

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

Dies demonstriert die Kapitalisierung von Text.

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

Dies zeigt, wie anfängliche Satzzeichen eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, der das erste der Unicode-Zeichen ist, welches zur Buchstaben- oder Zahlenkategorie gehört.

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

Dies demonstriert, wie anfängliche Symbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, der das erste der Unicode-Zeichen ist, welches zur Buchstaben- oder Zahlenkategorie gehört.

{{ EmbedLiveSample('Example using "capitalize" (symbols)', '100%', '100px') }}

### Beispiel mit "capitalize" (niederländisches ij Digraph)

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

Dies zeigt, wie der niederländische _ij_ Digraph wie ein einzelner Buchstabe behandelt werden muss.

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

Dies demonstriert die Umwandlung des Textes in Großbuchstaben.

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

Dies zeigt, wie griechische Vokale außer dem disjunktiven _Eta_ keinen Akzent haben sollten und der Akzent auf dem ersten Vokal eines Vokalpaares zu einem Trema auf dem zweiten Vokal wird.

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

Dies demonstriert die Umwandlung des Textes in Kleinbuchstaben.

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

Dies demonstriert, wie das griechische Zeichen "Sigma" (`Σ`) in das reguläre Kleinsigma (`σ`) oder die am Ende eines Wortes vorkommende Variante (`ς`) umgewandelt wird, je nach Kontext.

{{ EmbedLiveSample('Example using "lowercase" (Greek Σ)', '100%', '100px') }}

### Beispiel mit "lowercase" (litauisch)

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

Dies zeigt, wie litauische Buchstaben `Ĩ` und `J́` ihren Punkt behalten, wenn sie in Kleinbuchstaben umgewandelt werden.

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

Einige Zeichen existieren in zwei Formaten: Normale Breite und volle Breite, mit unterschiedlichen Unicode-Codepunkten. Die volle Version wird verwendet, um sie nahtlos mit asiatischen ideografischen Zeichen zu mischen.

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### Beispiel mit "full-width" (japanisches halbe Breite Katakana)

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

Die japanischen Katakana-Halbebreiten wurden verwendet, um Katakana in 8-Bit-Zeichencodes darzustellen. Im Gegensatz zu regulären (Vollbreite) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmhaftigkeitszeichen) als zwei Codepunkte dargestellt, der Körper des Buchstabens und das Dakuten. Das `full-width` kombiniert diese in einen einzigen Codepunkt, wenn diese Zeichen in volle Breite umgewandelt werden.

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

Wir geben jedem `.math-id`-Element `text-transform: math-auto`. Beachten Sie jedoch, dass nur die `x`-Zeichen kursiv werden, während `sin` und `cos` unverändert bleiben.

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Example using "math-auto"', '', '100px') }}

Es wird jedoch empfohlen, [MathML](/de/docs/Web/MathML) für mathematische Formeln zu verwenden, da es eine robustere und zugänglichere Möglichkeit bietet, mathematische Inhalte darzustellen. Hier die gleiche Formel mit MathML:

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
