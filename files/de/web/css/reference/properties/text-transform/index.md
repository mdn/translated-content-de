---
title: "`text-transform` CSS property"
short-title: text-transform
slug: Web/CSS/Reference/Properties/text-transform
l10n:
  sourceCommit: 8cabac65af6de8faa8ef7af3389d4b6b601a4cb4
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-transform`** legt fest, wie die Groß- und Kleinschreibung des Textes eines Elements verändert wird. Mit ihr lässt sich Text vollständig in Groß- oder Kleinbuchstaben oder mit einem Großbuchstaben am Anfang jedes Wortes darstellen. Sie kann außerdem die Lesbarkeit von Ruby-Annotationen verbessern.

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

Die Eigenschaft `text-transform` berücksichtigt sprachspezifische Regeln für die Groß- und Kleinschreibung, darunter:

- In Turksprachen wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolgatatarisch (`tt`) und Baschkirisch (`ba`) gibt es zwei Arten von `i`, mit und ohne Punkt, sowie zwei zugehörige Paare aus Klein- und Großbuchstaben: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird `ß` bei der Umwandlung in Großbuchstaben zu `SS`.
- Im Niederländischen (`nl`) wird der Digraph `ij` zu `IJ`, auch bei `text-transform: capitalize`, das nur den ersten Buchstaben eines Wortes großschreibt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das gesamte Wort in Großbuchstaben geschrieben wird (`ά`/`Α`). Eine Ausnahme ist das disjunktive Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten stattdessen ein Trema auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat der Kleinbuchstabe Sigma zwei Formen: `σ` und `ς`. `ς` wird nur am Ende eines Wortes verwendet. Wenn `text-transform: lowercase` auf ein großes Sigma (`Σ`) angewendet wird, muss der Browser anhand des Kontexts die richtige Kleinbuchstabenform wählen.
- Im Irischen (`ga`) bleiben bestimmte vorangestellte Buchstaben klein, wenn der Anfangsbuchstabe des Stammworts großgeschrieben wird. Beispielsweise ändert `text-transform: uppercase` `ar aon tslí` in `AR AON tSLÍ` und nicht, wie vielleicht erwartet, in `AR AON TSLÍ` (nur Firefox). In manchen Fällen wird bei der Umwandlung in Großbuchstaben auch ein Bindestrich entfernt: Aus `an t-uisce` wird `AN tUISCE` (und `text-transform: lowercase` fügt den Bindestrich wieder korrekt ein).

Die Sprache wird durch das HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) oder das XML-Attribut [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) festgelegt.

> [!NOTE]
> Die Unterstützung sprachspezifischer Regeln unterscheidet sich je nach Browser. Prüfen Sie daher die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

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
  - : Ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in einen Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (ihre im Text des Elements angegebene Groß- oder Kleinschreibung bleibt erhalten). Als Buchstabe gilt hier ein Zeichen, das zu den allgemeinen Unicode-Kategorien für Buchstaben oder Zahlen gehört. Satzzeichen und Symbole am Anfang eines Wortes werden daher ignoriert.

    > [!WARNING]
    > In vielen Sprachen gilt es als falsch, jedes Wort eines Satzes großzuschreiben, auch in Titeln und Namen. Wenn Sie nicht wissen, auf welche Sprache der Textstil angewendet wird, sollten Sie `capitalize` vermeiden. Außerdem erzeugt `capitalize` keine sprachgerechte Titelschreibweise, da es sprachspezifische Regeln – etwa das Auslassen von Artikeln im Englischen – nicht berücksichtigt.

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 nicht ausreichend spezifiziert. Dadurch unterschieden sich Browser darin, wie sie den ersten Buchstaben bestimmten (Firefox behandelte `-` und `_` als Buchstaben, andere Browser dagegen nicht. Sowohl WebKit als auch Gecko behandelten buchstabenähnliche Symbole wie `ⓐ` fälschlicherweise als Buchstaben). CSS Text Level 3 legt das korrekte Verhalten präzise fest und beseitigt damit diese Unklarheiten. Die Zeile zu `capitalize` in der Tabelle zur Browser-Kompatibilität gibt an, ab welcher Version die verschiedenen Engines dieses nun genau definierte Verhalten unterstützen.

- `uppercase`
  - : Ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ein Schlüsselwort, das Änderungen der Groß- und Kleinschreibung aller Zeichen verhindert.
- `full-width`
  - : Ein Schlüsselwort, das die Darstellung eines Zeichens – insbesondere eines Ideogramms oder eines Zeichens der lateinischen Schrift – innerhalb eines Quadrats erzwingt. So kann es an den Zeichen der üblichen ostasiatischen Schriften (etwa Chinesisch oder Japanisch) ausgerichtet werden.
- `full-size-kana`
  - : Dieses Schlüsselwort wird im Allgemeinen für den Annotationstext von {{htmlelement("ruby")}} verwendet. Es wandelt alle kleinen Kana-Zeichen in die entsprechenden Kana in voller Größe um, damit sie bei den für Ruby typischen kleinen Schriftgrößen besser lesbar sind.
- `math-auto`
  - : Wird verwendet, um Text dort, wo es angebracht ist, automatisch in mathematischer Kursivschrift darzustellen. Es wandelt lateinische und griechische Buchstaben sowie einige andere mathematische Symbole in [kursive mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf) um, allerdings nur, wenn es auf einen Textknoten angewendet wird, der genau ein Zeichen enthält. Beispielsweise wird aus „x“ ein „𝑥“ (U+1D465), während „exp“ unverändert bleibt.
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}}-Elementen in MathML festzulegen. Im Allgemeinen sollten Sie MathML-Markup verwenden, das die passende Formatierung automatisch anwendet.

## Barrierefreiheit

Längere Textabschnitte, die mit dem `text-transform`-Wert `uppercase` dargestellt werden, können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C: WCAG 2.2 verstehen](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel mit „none“

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

Dieses Beispiel zeigt Text ohne Änderung der Groß- und Kleinschreibung.

{{ EmbedLiveSample('Example using "none"', '100%', '100px') }}

### Beispiel mit „capitalize“ (allgemein)

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

Dieses Beispiel zeigt, wie Wörter mit einem Großbuchstaben beginnen.

{{ EmbedLiveSample('Example using "capitalize" (general)', '100%', '100px') }}

### Beispiel mit „capitalize“ (Satzzeichen)

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

Dieses Beispiel zeigt, dass Satzzeichen am Anfang eines Wortes ignoriert werden. Das Schlüsselwort wirkt auf den ersten Buchstaben, also auf das erste Unicode-Zeichen, das zu den allgemeinen Kategorien für Buchstaben oder Zahlen gehört.

{{ EmbedLiveSample('Example using "capitalize" (punctuation)', '100%', '100px') }}

### Beispiel mit „capitalize“ (Symbole)

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

Dieses Beispiel zeigt, dass Symbole am Anfang eines Wortes ignoriert werden. Das Schlüsselwort wirkt auf den ersten Buchstaben, also auf das erste Unicode-Zeichen, das zu den allgemeinen Kategorien für Buchstaben oder Zahlen gehört.

{{ EmbedLiveSample('Example using "capitalize" (symbols)', '100%', '100px') }}

### Beispiel mit „capitalize“ (niederländischer Digraph ij)

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

Dieses Beispiel zeigt, dass der niederländische Digraph _ij_ wie ein einzelner Buchstabe behandelt werden muss.

{{ EmbedLiveSample('Example using "capitalize" (Dutch ij digraph)', '100%', '100px') }}

### Beispiel mit „uppercase“ (allgemein)

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

Dieses Beispiel zeigt die Umwandlung von Text in Großbuchstaben.

{{ EmbedLiveSample('Example using "uppercase" (general)', '100%', '100px') }}

### Beispiel mit „uppercase“ (griechische Vokale)

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

Dieses Beispiel zeigt, dass griechische Vokale mit Ausnahme des disjunktiven _Eta_ ihren Akzent verlieren und dass aus dem Akzent auf dem ersten Vokal eines Vokalpaars ein Trema auf dem zweiten Vokal wird.

{{ EmbedLiveSample('Example using "uppercase" (Greek vowels)', '100%', '100px') }}

### Beispiel mit „lowercase“ (allgemein)

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

Dieses Beispiel zeigt die Umwandlung von Text in Kleinbuchstaben.

{{ EmbedLiveSample('Example using "lowercase" (general)', '100%', '100px') }}

### Beispiel mit „lowercase“ (griechisches Σ)

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

Dieses Beispiel zeigt, wie das griechische Sigma (`Σ`) je nach Kontext in das normale kleine Sigma (`σ`) oder die Variante am Wortende (`ς`) umgewandelt wird.

{{ EmbedLiveSample('Example using "lowercase" (Greek Σ)', '100%', '100px') }}

### Beispiel mit „lowercase“ (Litauisch)

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

Dieses Beispiel zeigt, wie die litauischen Buchstaben `Ĩ` und `J́` bei der Umwandlung in Kleinbuchstaben ihren Punkt behalten.

{{ EmbedLiveSample('Example using "lowercase" (Lithuanian)', '100%', '100px') }}

### Beispiel mit „full-width“ (allgemein)

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

Einige Zeichen gibt es in zwei Formen mit unterschiedlichen Unicode-Codepunkten: in normaler und in voller Breite. Die vollbreite Form ermöglicht eine gleichmäßige Darstellung zusammen mit asiatischen ideografischen Zeichen.

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### Beispiel mit „full-width“ (japanische halbbreite Katakana)

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

Japanische halbbreite Katakana wurden verwendet, um Katakana in 8-Bit-Zeichencodierungen darzustellen. Anders als bei gewöhnlichen (vollbreiten) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmhaftigkeitszeichen) durch zwei Codepunkte dargestellt: den Grundbuchstaben und das Dakuten. `full-width` verbindet diese bei der Umwandlung in vollbreite Zeichen zu einem einzigen Codepunkt.

{{ EmbedLiveSample('Example using "full-width" (Japanese half-width katakana)', '100%', '175px') }}

### Beispiel mit „full-size-kana“

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

### Beispiel mit „math-auto“

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

Wir weisen jedem `.math-id`-Element `text-transform: math-auto` zu. Beachten Sie jedoch, dass nur die `x`-Zeichen kursiv werden, während `sin` und `cos` unverändert bleiben.

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Example using "math-auto"', '', '100px') }}

Für mathematische Formeln empfiehlt sich jedoch [MathML](/de/docs/Web/MathML), da es eine zuverlässigere und barrierefreiere Darstellung mathematischer Inhalte ermöglicht. Hier ist dieselbe Formel mit MathML:

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
