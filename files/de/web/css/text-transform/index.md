---
title: text-transform
slug: Web/CSS/text-transform
l10n:
  sourceCommit: dad91b2a7c51b05d98cd79e436f61565810a42a5
---

{{CSSRef}}

Die **`text-transform`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Text eines Elements kapitalisiert wird. Sie kann verwendet werden, um Text in Großbuchstaben, Kleinbuchstaben oder mit jedem Wort in Großbuchstaben erscheinen zu lassen. Sie kann auch die Lesbarkeit für Ruby-Annotationen verbessern.

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

Die `text-transform` Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß- und Kleinschreibung wie die folgenden:

- In türkeitischen Sprachen, wie Türkisch (`tr`), Aserbaidschanisch (`az`), Krimtatarisch (`crh`), Wolgatatarisch (`tt`) und Baschkirisch (`ba`), gibt es zwei Arten von `i`, mit und ohne Punkt, und zwei Groß-/Kleinschreibung-Paare: `i`/`İ` und `ı`/`I`.
- Im Deutschen (`de`) wird das `ß` in Großbuchstaben zu `SS`.
- Im Niederländischen (`nl`) wird das `ij` Digraph zu `IJ`, selbst bei `text-transform: capitalize`, das nur den ersten Buchstaben eines Wortes in Großbuchstaben setzt.
- Im Griechischen (`el`) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer das disjunktive Eta (`ή`/`Ή`). Ebenso verlieren Diphthonge mit einem Akzent auf dem ersten Vokal den Akzent und erhalten eine Diärese auf dem zweiten Vokal (`άι`/`ΑΪ`).
- Im Griechischen (`el`) hat das kleine Sigma-Zeichen zwei Formen: `σ` und `ς`. `ς` wird nur verwendet, wenn Sigma ein Wort beendet. Wenn `text-transform: lowercase` auf ein großes Sigma (`Σ`) angewendet wird, muss der Browser die richtige Kleinbuchstabenform basierend auf dem Kontext auswählen.
- Im Irischen (`ga`) bleiben bestimmte vorangestellte Buchstaben klein, wenn der Grundbuchstabe großgeschrieben wird, zum Beispiel wird `text-transform: uppercase` `ar aon tslí` in `AR AON tSLÍ` ändern und nicht, wie man vielleicht erwarten würde, `AR AON TSLÍ` (nur Firefox). In einigen Fällen wird ein Bindestrich beim Großschreiben auch entfernt: `an t-uisce` wird zu `AN tUISCE` transformiert (und der Bindestrich wird korrekt von `text-transform: lowercase` wiedereingefügt).

Die Sprache wird durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) HTML-Attribut oder das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang) XML-Attribut definiert.

> [!NOTE]
> Die Unterstützung für sprachspezifische Fälle variiert zwischen den Browsern. Schauen Sie also in der [Browserkompatibilitätstabelle](#browserkompatibilität) nach.

## Syntax

```css
/* Schlüsselwort-Werte */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;
text-transform: math-auto;

/* Globale Werte */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

- `capitalize`

  - : Ist ein Schlüsselwort, das den ersten _Buchstaben_ jedes Wortes in Großbuchstaben umwandelt. Andere Zeichen bleiben unverändert (sie behalten ihre ursprüngliche Groß-/Kleinschreibung, wie im Text des Elements geschrieben). Ein Buchstabe wird als ein Zeichen definiert, das Teil der allgemeinen Kategorien Letter oder Number von Unicode ist; daher werden Satzzeichen oder Symbole am Anfang eines Wortes ignoriert.

    > [!NOTE]
    > Autoren sollten nicht erwarten, dass `capitalize` den sprachspezifischen Titelschreibkonventionen folgt (wie das Überspringen von Artikeln im Englischen).

    > [!NOTE]
    > Das Schlüsselwort `capitalize` war in CSS 1 und CSS 2.1 unter-spezifiziert. Dies führte zu Unterschieden zwischen Browsern in der Berechnung des ersten Buchstabens (Firefox betrachtete `-` und `_` als Buchstaben, andere Browser nicht. Sowohl Webkit als auch Gecko betrachteten fälschlicherweise buchstabenbasierte Symbole wie `ⓐ` als echte Buchstaben). Durch die präzise Definition des korrekten Verhaltens beseitigt CSS Text Level 3 dieses Durcheinander. Die Zeile `capitalize` in der Browserkompatibilitätstabelle enthält die Version, in der die verschiedenen Engines dieses jetzt präzise definierte Verhalten unterstützten.

- `uppercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Großbuchstaben umwandelt.
- `lowercase`
  - : Ist ein Schlüsselwort, das alle Zeichen in Kleinbuchstaben umwandelt.
- `none`
  - : Ist ein Schlüsselwort, das verhindert, dass die Groß-/Kleinschreibung aller Zeichen geändert wird.
- `full-width`
  - : Ist ein Schlüsselwort, das das Schreiben eines Zeichens — hauptsächlich Ideogramme und lateinische Schriften — in einem Quadrat erzwingt, sodass sie in den üblichen ostasiatischen Schriften (wie Chinesisch oder Japanisch) ausgerichtet werden können.
- `full-size-kana`
  - : Wird im Allgemeinen für {{htmlelement("ruby")}}-Anmerkungstexte verwendet, das Schlüsselwort konvertiert alle kleinen Kana-Zeichen in die entsprechenden vollwertigen Kana, um Lesbarkeitsprobleme bei den normalerweise für Ruby verwendeten kleinen Schriftgrößen zu kompensieren.
- `math-auto`
  - : Wird verwendet, um Text automatisch dort, wo es angebracht ist, in mathematische kursiv darzustellen. Es transformiert lateinische und griechische Buchstaben sowie einige andere mathematisch verwandte Symbole in [kursiv mathematische Symbole](https://www.unicode.org/charts/PDF/U1D400.pdf), aber nur, wenn es auf einen Textknoten angewendet wird, der ein einzelnes Zeichen enthält. Zum Beispiel wird "x" zu "𝑥" (U+1D465), aber "exp" bleibt "exp".
    Es wird hauptsächlich verwendet, um das Verhalten von {{mathmlelement("mi")}} Elementen in MathML zu spezifizieren. Sie sollten in der Regel MathML-Markup verwenden, das automatisch das richtige Styling anwendet.

## Barrierefreiheit

Große Abschnitte von Text, der mit einem `text-transform` Wert von `uppercase` gesetzt ist, können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN Understanding WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel mit "none"

```html
<p>
  Initialer String
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
  Initialer String
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
  Initialer String
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

Dies demonstriert, wie anfängliche Satzzeichen eines Wortes ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, also das erste Unicode-Zeichen, das Teil der allgemeinen Kategorien Letter oder Number ist.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Interpunktion)', '100%', '100px') }}

### Beispiel mit "capitalize" (Symbole)

```html
<p>
  Initialer String
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

Dies demonstriert, wie anfängliche Symbole ignoriert werden. Das Schlüsselwort zielt auf den ersten Buchstaben ab, also das erste Unicode-Zeichen, das Teil der allgemeinen Kategorien Letter oder Number ist.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Symbole)', '100%', '100px') }}

### Beispiel mit "capitalize" (Niederländisches ij-Digraph)

```html
<p>
  Initialer String
  <strong lang="nl">Das niederländische Wort: "ijsland" beginnt mit einem Digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >Das niederländische Wort: "ijsland" beginnt mit einem Digraph.</span
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

Dies demonstriert, wie das niederländische _ij_ Digraph wie ein einziger Buchstabe behandelt werden muss.

{{ EmbedLiveSample('Beispiel mit "capitalize" (Niederländisches ij-Digraph)', '100%', '100px') }}

### Beispiel mit "uppercase" (allgemein)

```html
<p>
  Initialer String
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

Dies demonstriert, wie der Text in Großbuchstaben umgewandelt wird.

{{ EmbedLiveSample('Beispiel mit "uppercase" (allgemein)', '100%', '100px') }}

### Beispiel mit "uppercase" (Griechische Vokale)

```html
<p>
  Initialer String
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

Dies demonstriert, wie die griechischen Vokale außer dem disjunktiven _Eta_ keinen Akzent haben sollten und der Akzent auf dem ersten Vokal eines Vokalpaars zu einer Diärese auf dem zweiten Vokal wird.

{{ EmbedLiveSample('Beispiel mit "uppercase" (Griechische Vokale)', '100%', '100px') }}

### Beispiel mit "lowercase" (allgemein)

```html
<p>
  Initialer String
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

Dies demonstriert, wie der Text in Kleinbuchstaben umgewandelt wird.

{{ EmbedLiveSample('Beispiel mit "lowercase" (allgemein)', '100%', '100px') }}

### Beispiel mit "lowercase" (Griechisches Σ)

```html
<p>
  Initialer String
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

Dies demonstriert, wie das griechische Zeichen Sigma (`Σ`) entsprechend dem Kontext in das reguläre kleine Sigma (`σ`) oder die am Wortende befindliche Variante (`ς`) umgewandelt wird.

{{ EmbedLiveSample('Beispiel mit "lowercase" (Griechisches Σ)', '100%', '100px') }}

### Beispiel mit "lowercase" (Litauisch)

```html
<p>
  Initialer String
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
  Initialer String
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

Einige Zeichen existieren in zwei Formaten: normale Breite und Vollbreite, mit unterschiedlichen Unicode-Codierungen. Die Vollbreiten-Version wird verwendet, um sie nahtlos mit asiatischen ideografischen Zeichen zu mischen.

{{ EmbedLiveSample('Beispiel mit "full-width" (allgemein)', '100%', '175px') }}

### Beispiel mit "full-width" (Japanische Halbbreiten-Katakana)

```html
<p>
  Initialer String
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

Die japanischen Halbbreiten-Katakana wurden verwendet, um Katakana in 8-Bit-Zeichencodes darzustellen. Im Gegensatz zu regulären (vollbreiten) Katakana-Zeichen wird ein Buchstabe mit Dakuten (Stimmzeichen) als zwei Codierungen dargestellt, der Körper des Buchstabens und Dakuten. Die `full-width` kombiniert diese zu einem einzigen Codepunkt, wenn diese Zeichen in Vollbreite umgewandelt werden.

{{ EmbedLiveSample('Beispiel mit "full-width" (Japanische Halbbreiten-Katakana)', '100%', '175px') }}

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

Wir geben jedem `.math-id` Element `text-transform: math-auto`. Beachten Sie jedoch, dass nur die `x`-Zeichen kursiv werden, während `sin` und `cos` unverändert bleiben.

```css
.math-id {
  text-transform: math-auto;
}
```

{{ EmbedLiveSample('Beispiel mit "math-auto"', '', '100px') }}

Es wird jedoch empfohlen, [MathML](/de/docs/Web/MathML) für mathematische Formeln zu verwenden, da es eine robustere und zugänglichere Möglichkeit bietet, mathematischen Inhalt darzustellen. Hier ist die gleiche Formel unter Verwendung von MathML:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}
