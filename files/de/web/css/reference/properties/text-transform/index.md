---
title: text-transform
slug: Web/CSS/Reference/Properties/text-transform
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die **`text-transform`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Text eines Elements großgeschrieben wird. Sie kann verwendet werden, um Text vollständig in Großbuchstaben, Kleinbuchstaben oder mit jedem Wort in Großbuchstaben darzustellen. Sie kann auch helfen, die Lesbarkeit von Ruby zu verbessern.

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

Die `text-transform` Eigenschaft berücksichtigt sprachspezifische Regeln für Groß- und Kleinschreibung, wie zum Beispiel:

- In Turksprachen, wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolgatatarisch (`tt`), und Baschkirisch (`ba`), gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei Groß-/Kleinschreibungspaare: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird das `ß` in Großbuchstaben zu `SS`.
- Im Niederländischen (`nl`) transformiert der `ij` Digraph zu `IJ`, selbst mit `text-transform: capitalize`, welches nur den ersten Buchstaben eines Wortes in Großbuchstaben setzt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), mit Ausnahme des disjunkten Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten ein Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat das Kleinbuchstaben-Sigma zwei Formen: `σ` und `ς`. `ς` wird nur verwendet, wenn Sigma ein Wort beendet. Bei Anwendung von `text-transform: lowercase` auf ein Großbuchstaben-Sigma (`Σ`) muss der Browser die richtige Kleinbuchstabenform basierend auf dem Kontext wählen.
- Im Irischen (`ga`) bleiben bestimmte vorangestellte Buchstaben in Kleinbuchstaben, wenn der Basisanfang großgeschrieben wird, sodass zum Beispiel `text-transform: uppercase` `ar aon tslí` zu `AR AON tSLÍ` ändert und nicht, wie man vielleicht erwarten könnte, zu `AR AON TSLÍ` (nur Firefox). In einigen Fällen wird beim Großbuchstabieren auch ein Bindestrich entfernt: `an t-uisce` wird zu `AN tUISCE` transformiert (und der Bindestrich wird korrekt durch `text-transform: lowercase` wieder eingefügt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) HTML-Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) XML-Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Fälle variiert zwischen Browsern, überprüfen Sie daher die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

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
  - : Ist ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Groß-/Kleinschreibung, wie sie im Text des Elements geschrieben sind). Ein Buchstabe ist definiert als ein Zeichen, das Teil von Unicodes allgemeiner Kategorie für Buchstaben oder Zahlen ist; daher werden irgendwelche Satzzeichen oder Symbole am Anfang eines Wortes ignoriert.

    > [!NOTE]
    > Autoren sollten nicht erwarten, dass `capitalize` sprachspezifische Großschreibungsregeln (wie das Überspringen von Artikeln im Englischen) befolgt.

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 ungenau spezifiziert. Dies führte zu Unterschieden zwischen Browsern in der Art und Weise, wie der erste Buchstabe berechnet wurde (Firefox betrachtete `-` und `_` als Buchstaben, andere Browser nicht. Sowohl WebKit als auch Gecko betrachteten irrtümlich auf Buchstaben basierende Symbole wie `ⓐ` als echte Buchstaben). Durch die präzise Definition des korrekten Verhaltens bereinigt CSS Text Level 3 dieses Durcheinander. Die `capitalize`-Zeile in der Browser-Kompatibilitätstabelle enthält die Version, in der die verschiedenen Engines dieses nun präzise definierte Verhalten zu unterstützen begannen.

- `uppercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ist ein Schlüsselwort, das verhindert, dass die Groß-/Kleinschreibung aller Zeichen geändert wird.
- `full-width`
  - : Ist ein Schlüsselwort, das das Schreiben eines Zeichens – hauptsächlich Ideogramme und lateinische Schriftzeichen – innerhalb eines Quadrats erzwingt, sodass sie gemäß der üblichen ostasiatischen Schriftsysteme (wie Chinesisch oder Japanisch) ausgerichtet werden können.
- `full-size-kana`
  - : Allgemein verwendet für {{htmlelement("ruby")}} Annotationstext, wandelt das Schlüsselwort alle kleinen Kana-Zeichen in die entsprechenden Kana in voller Größe um, um Lesbarkeitsprobleme bei den kleinen Schriftgrößen zu kompensieren, die typischerweise für Ruby verwendet werden.
- `math-auto`
  - : Wird verwendet, um Text dort, wo es angebracht ist, automatisch in mathematische Kursivschrift zu rendern. Es transformiert lateinische und griechische Buchstaben und einige andere mathematisch bezogene Symbole in [kursive mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf), aber nur wenn es auf einen Textknoten angewendet wird, der ein einzelnes Zeichen enthält. Beispielsweise wird "x" zu "𝑥" (U+1D465), aber "exp" bleibt "exp".
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}} Elementen in MathML zu spezifizieren. Sie sollten im Allgemeinen MathML-Markup verwenden, das die richtige Formatierung automatisch anwendet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `text-transform`-Wert von `uppercase` versehen sind, können für Menschen mit kognitiven Bedenken wie Legasthenie schwer lesbar sein.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

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

Dies demonstriert, dass keine Texttransformation stattfindet.

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

Dies demonstriert die Großschreibung von Text.

{{ EmbedLiveSample('Example using "capitalize" (general)', '100%', '100px') }}

### Beispiel mit "capitalize" (Satzzeichen)

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

Dies demonstriert, wie anfängliche Satzzeichen eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das heißt, das erste Unicode-Zeichen, das Teil der Kategorie Buchstaben oder Zahlen ist.

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

Dies demonstriert, wie anfängliche Symbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das heißt, das erste Unicode-Zeichen, das Teil der Kategorie Buchstaben oder Zahlen ist.

{{ EmbedLiveSample('Example using "capitalize" (symbols)', '100%', '100px') }}

### Beispiel mit "capitalize" (Niederländischer ij-Digraph)

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

Dies demonstriert, wie der niederländische _ij_-Digraph wie ein einzelner Buchstabe behandelt werden muss.

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

Dies demonstriert, wie griechische Vokale außer disjunktem _eta_ keinen Akzent haben sollten und der Akzent auf dem ersten Vokal eines Vokalpaars zu einem Trema auf dem zweiten Vokal wird.

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

Dies demonstriert, wie das griechische Zeichen Sigma (`Σ`) in das reguläre Kleinbuchstaben-Sigma (`σ`) oder die wortfinale Variante (`ς`) transformiert wird, abhängig vom Kontext.

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

Dies demonstriert, wie die litauischen Buchstaben `Ĩ` und `J́` ihren Punkt behalten, wenn sie in Kleinbuchstaben umgewandelt werden.

{{ EmbedLiveSample('Example using "lowercase" (Lithuanian)', '100%', '100px') }}

### Beispiel mit "full-width" (allgemein)

```html
<p>
  Initial String
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;&lt;=&gt;?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;&lt;=&gt;?@{|}~</span
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

Einige Zeichen existieren in zwei Formaten: Normalbreite und Vollbreite, mit unterschiedlichen Unicode-Codepunkten. Die Vollbreite-Version wird verwendet, um sie reibungslos mit asiatischen ideografischen Zeichen zu mischen.

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### Beispiel mit "full-width" (japanische Halbbreite-Katakana)

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

Die japanischen Halbbreiten-Katakana wurden verwendet, um Katakana in 8-Bit-Zeichenkodierungen darzustellen. Im Gegensatz zu regulären (vollbreiten) Katakana-Zeichen wird ein Buchstabe mit Dakuten (stimmhaftes Lautzeichen) als zwei Codepunkte dargestellt, der Buchstabenkörper und Dakuten. Der `full-width` kombiniert diese bei der Konvertierung dieser Zeichen in Vollbreite zu einem einzigen Codepunkt.

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

Sie werden jedoch ermutigt, [MathML](/de/docs/Web/MathML) für mathematische Formeln zu verwenden, da es eine robustere und zugänglichere Möglichkeit bietet, mathematische Inhalte darzustellen. Hier ist dieselbe Formel mit MathML:

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
