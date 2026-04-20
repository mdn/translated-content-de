---
title: "`text-transform` CSS property"
short-title: text-transform
slug: Web/CSS/Reference/Properties/text-transform
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-transform`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Text eines Elements großgeschrieben wird. Sie kann verwendet werden, um Text durchgängig in Großbuchstaben oder Kleinbuchstaben erscheinen zu lassen oder mit jedem Wort großgeschrieben. Sie kann auch helfen, die Lesbarkeit von Ruby zu verbessern.

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

Die `text-transform`-Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß-/Kleinschreibung, wie die folgenden:

- In Turksprachen wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolga-Tatarisch (`tt`) und Baschkirisch (`ba`) gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird das `ß` zu `SS` im Großbuchstaben.
- Im Niederländischen (`nl`) wird das `ij` als Digraph `IJ`, auch mit `text-transform: capitalize`, welches nur den ersten Buchstaben eines Wortes in Großbuchstaben setzt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben geschrieben wird (`ά`/`Α`), mit Ausnahme des disjunkten Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten einen Diäresis auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat der Kleinbuchstabe Sigma zwei Formen: `σ` und `ς`. `ς` wird nur verwendet, wenn Sigma ein Wort beendet. Bei Anwendung von `text-transform: lowercase` auf ein Großbuchstaben-Sigma (`Σ`) muss der Browser die richtige Kleinbuchstabenform basierend auf dem Kontext auswählen.
- Im Irischen (`ga`) bleiben bestimmte vorangestellte Buchstaben in Kleinbuchstaben, wenn der Basisanfang großgeschrieben wird, sodass `text-transform: uppercase` zum Beispiel `ar aon tslí` in `AR AON tSLÍ` ändert und nicht, wie man erwarten könnte, `AR AON TSLÍ` (nur in Firefox). In einigen Fällen wird beim Großschreiben auch ein Bindestrich entfernt: `an t-uisce` wird in `AN tUISCE` umgewandelt (und der Bindestrich wird korrekt durch `text-transform: lowercase` wieder eingesetzt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-HTML-Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang)-XML-Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Fälle variiert zwischen den Browsern, daher sollten Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) überprüfen.

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
  - : Ist ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Schreibeweise wie im Text des Elements geschrieben). Ein Buchstabe ist definiert als ein Zeichen, das Teil von Unicode-Kategorien Buchstabe oder Zahl ist; daher werden Satzzeichen oder Symbole zu Beginn eines Wortes ignoriert.

    > [!WARNING]
    > In vielen Sprachen gilt es als falsch, jeden einzelnen Wortanfang eines Satzes groß zu schreiben, auch nicht in Titeln und Namen. Wenn Sie die Sprache des Textes, auf den der Stil angewendet wird, nicht kennen, sollten Sie `capitalize` vermeiden. Zudem erzeugt `capitalize` keine Titelmuster, da es keine sprachspezifischen Regeln wie das Überspringen von Artikeln im Englischen anwendet.

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 ungenau spezifiziert. Dies führte zu Unterschieden zwischen den Browsern in der Berechnung des ersten Buchstaben (Firefox betrachtete `-` und `_` als Buchstaben, aber andere Browser nicht. Sowohl WebKit als auch Gecko betrachteten fehlerhaft buchstabenbasierte Symbole wie `ⓐ` als echte Buchstaben.) Durch die präzise Festlegung des korrekten Verhaltens räumt CSS Text Level 3 dieses Durcheinander auf. Die `capitalize`-Zeile in der Browser-Kompatibilitätstabelle enthält die Version, in der die verschiedenen Engines dieses jetzt präzise definierte Verhalten unterstützen.

- `uppercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ist ein Schlüsselwort, das verhindert, dass die Groß-/Kleinschreibung aller Zeichen geändert wird.
- `full-width`
  - : Ist ein Schlüsselwort, das das Schreiben eines Zeichens – hauptsächlich Ideogramme und lateinische Schriften – innerhalb eines Quadrates erzwingt, damit sie in den üblichen ostasiatischen Skripten (wie Chinesisch oder Japanisch) ausgerichtet werden können.
- `full-size-kana`
  - : Wird allgemein für {{htmlelement("ruby")}}-Annotationstext verwendet, das Schlüsselwort konvertiert alle kleinen Kana-Zeichen in gleichwertige volle Kana, um Lesbarkeitsprobleme bei den typischerweise in Ruby verwendeten kleinen Schriftgrößen auszugleichen.
- `math-auto`
  - : Wird verwendet, um Text automatisch in mathematischen Kursivschrift anzuzeigen, wo es angemessen ist. Es transformiert lateinische und griechische Buchstaben sowie einige andere mathematikbezogene Symbole in [kursiv mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf), jedoch nur, wenn es auf einen Textknoten mit einem einzigen Zeichen angewendet wird. Zum Beispiel wird "x" zu "𝑥" (U+1D465), aber "exp" bleibt "exp".
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}}-Elementen in MathML zu spezifizieren. Im Allgemeinen sollten Sie MathML-Markup verwenden, das automatisch das richtige Styling anwendet.

## Barrierefreiheit

Große Textabschnitte mit einem `text-transform`-Wert von `uppercase` können für Menschen mit kognitiven Bedenken, z. B. Dyslexie, schwer lesbar sein.

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

Dies demonstriert keine Textumwandlung.

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

Dies demonstriert, wie vorangestellte Satzzeichen eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das ist das erste Unicode-Zeichen Teil der Kategorie Buchstabe oder Zahl.

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

Dies demonstriert, wie vorrangige Symbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, das ist das erste Unicode-Zeichen Teil der Kategorie Buchstabe oder Zahl.

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

Dies demonstriert, wie der niederländische _ij_-Digraph als ein einzelner Buchstabe behandelt werden muss.

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

Dies demonstriert, wie griechische Vokale außer disjutktivem _eta_ keinen Akzent haben sollten, und der Akzent auf dem ersten Vokal eines Vokalpaars zu einem Diäresis auf dem zweiten Vokal wird.

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

Dies demonstriert, wie das griechische Zeichen Sigma (`Σ`) in das reguläre Kleinbuchstaben-Sigma (`σ`) oder die wortabschließende Variante (`ς`) umgewandelt wird, je nach Kontext.

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

Einige Zeichen existieren in zwei Formaten: Normalbreite und volle Breite, mit unterschiedlichen Unicode-Kodierungspunkten. Die vollbreite Version wird verwendet, um sie nahtlos mit asiatischen Ideogrammen zu mischen.

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### Beispiel mit "full-width" (Japanische Halbweite Katakana)

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

Die japanischen Halbweite-Katakana wurden verwendet, um Katakana in 8-Bit-Zeichencodes darzustellen. Im Gegensatz zu regulären (vollbreiten) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmzeichen) als zwei Kodierungspunkte dargestellt, der Buchstabenkörper und das Dakuten. `full-width` kombiniert diese in einen einzigen Kodierungspunkt, wenn diese Zeichen in volle Breite konvertiert werden.

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

In diesem Beispiel verwenden wir HTML-Markup, um eine mathematische Formel zu erstellen:

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
