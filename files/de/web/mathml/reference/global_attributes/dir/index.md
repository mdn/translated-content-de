---
title: dir
slug: Web/MathML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 4c302cd01003cf42f175d5ba149e536ab1923df6
---

Das **`dir`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das die Ausrichtungsrichtung des MathML-Elements angibt.

## Syntax

```html-nolint
<math dir="ltr">
<math dir="rtl">
```

### Werte

- `ltr`
  - : Darstellung mathematischer Ausdrücke von links nach rechts (z. B. auf Englisch oder Marokkanisch).
- `rtl`
  - : Darstellung mathematischer Ausdrücke von rechts nach links (z. B. auf Arabisch, Hebräisch, Thaana, Maghreb, Machrek usw.).

## Beschreibung

Die Ausrichtung steuert, ob mathematische Formeln von links nach rechts oder von rechts nach links gerendert werden.

### Spiegeln und Dehnen von MathML-Formeln im RTL-Modus

Beim Rendern einer Sprache, die von rechts nach links geschrieben wird, müssen möglicherweise die Symbole in einer MathML-Formel um die vertikale Achse gespiegelt/gekippt und möglicherweise auch vertikal gedehnt werden.

Das Spiegeln kann unter Verwendung verschiedener Ansätze erreicht werden, um ein "Basissymbol" zu finden:

- _Zeichenweises Spiegeln_: Ersatz eines Zeichens durch den entsprechenden gespiegelten Unicode-Codepunkt, wie durch Unicodes `Bidi_Mirrored`-Eigenschaft definiert (zum Beispiel Ersatz von `>` durch `<` oder `]` durch `[`).
- _Glyphenweises Spiegeln_: Ersatz eines Zeichens durch eine Glyphe, die es in einem gespiegelten Kontext darstellen kann (falls kein direkter Ersatz vorhanden ist).
  Dies erfordert, dass die verwendete Schriftart die [Rechts-nach-links-Spiegelformen (`rtlm`) Schriftarteigenschaft](https://en.wikipedia.org/wiki/List_of_typographic_features#Features_depending_on_writing_direction) unterstützt.

Das Basissymbol kann dann als Schlüssel im OpenType MathVariant-Tabelle verwendet werden, um entweder eine größere Glyphe oder eine Glyphenansammlung zu erhalten.

Beachten Sie, dass effektives Spiegeln und Dehnen eine Schriftart erfordert, die sowohl eine OpenType MathVariant-Tabelle als auch Unterstützung für die `rtlm`-Schriftarteigenschaft umfasst, wie XITS.

### Bevorzugen Sie `dir` gegenüber der CSS-Eigenschaft `direction`

Dieses Attribut kann durch die {{ cssxref("direction") }} CSS-Eigenschaft überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
Da die Ausrichtung von Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wenn möglich.
So werden die Formeln korrekt angezeigt, selbst in einem Browser, der CSS nicht unterstützt oder in dem CSS deaktiviert ist.

> [!NOTE]
> Das `dir`-Attribut wird häufig in der arabischsprachigen Welt auf `rtl` gesetzt.
> Allerdings betten Sprachen, die von rechts nach links geschrieben werden, oft mathematische Inhalte ein, die von links nach rechts geschrieben sind.
> Folglich wird das `auto`-Schlüsselwort des HTML `dir`-Attributs nicht erkannt und standardmäßig setzt das [user agent stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) die Richtungseigenschaft auf dem [`math`](/de/docs/Web/MathML/Reference/Element/math) Element zurück.

## Beispiele

### Grundlegende Verwendung

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<!-- Moroccan style -->
<math display="block" dir="ltr">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>3</mn>
    <mi>ب</mi>
  </msup>
</math>

<!-- Maghreb/Machrek style -->
<math display="block" dir="rtl">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>٣</mn>
    <mi>ب</mi>
  </msup>
</math>
```

{{ EmbedLiveSample("Basic usage", "", 150) }}

### Spiegeln und Dehnen

Dieses Beispiel demonstriert die Effekte der `ltr`- und `rtl`-Richtung für eine komplexere MathML-Formel, einschließlich der Effekte von `largeop` und `stretchy` auf das [`<mo>`](/de/docs/Web/MathML/Reference/Element/mo) Element.

#### MathML

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  font-size: 1.5rem;
}
```

Zuerst verlinken wir ein Stylesheet für die XITS-Schriftart, die die `rtlm`-Schriftarteigenschaft und die für das korrekte Spiegeln und Dehnen von Glyphen erforderliche MathVariant-Tabelle unterstützt.

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/XITS/mathfonts.css" />
```

Die ersten beiden Formeln setzen `largeop` und `stretchy` für die jeweiligen Elemente auf false und werden `ltr` und `rtl` angezeigt.

```html
<math dir="ltr" display="block">
  <mrow>
    <munderover>
      <mo largeop="false">∑</mo>
      <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mn>∞</mn>
    </munderover>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>n</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
  </mrow>
  <mo>∊</mo>
  <mrow>
    <mo stretchy="false">(</mo>
    <mfrac>
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>,</mo>
    <mfrac>
      <mn>7</mn>
      <mn>4</mn>
    </mfrac>
    <mo stretchy="false">]</mo>
  </mrow>
</math>
```

```html
<math dir="rtl" display="block">
  <mrow>
    <munderover>
      <mo largeop="false">∑</mo>
      <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mn>∞</mn>
    </munderover>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>n</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
  </mrow>
  <mo>∊</mo>
  <mrow>
    <mo stretchy="false">(</mo>
    <mfrac>
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>,</mo>
    <mfrac>
      <mn>7</mn>
      <mn>4</mn>
    </mfrac>
    <mo stretchy="false">]</mo>
  </mrow>
</math>
```

Diese Formel ist ebenfalls `rtl`, setzt jedoch `largeop` auf true für den `∑`-Operator, wodurch er größer dargestellt wird.
Es setzt auch `stretchy` auf `true` für die Klammern, was bewirkt, dass sie sich auf die Höhe des enthaltenen Bruchs strecken, in unterstützenden Browsern.

```html
<math dir="rtl" display="block">
  <mrow>
    <munderover>
      <mo largeop="true">∑</mo>
      <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mn>∞</mn>
    </munderover>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>n</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
  </mrow>
  <mo>∊</mo>
  <mrow>
    <mo stretchy="true">(</mo>
    <mfrac>
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>,</mo>
    <mfrac>
      <mn>7</mn>
      <mn>4</mn>
    </mfrac>
    <mo stretchy="true">]</mo>
  </mrow>
</math>
```

#### Ergebnisse

In einem Browser, der RTL-Spiegelung und Dehnung unterstützt, sollte der Output für die drei Formeln wie unten gezeigt erscheinen.
Die ersten beiden zeigen die Formel links-nach-rechts und rechts-nach-links ohne Dehnung.
Die endgültige Formel verwendet `rtl` mit `stretching` und `largeop` für das Summensymbol.

![Screenshot der drei Formvarianten in Firefox, der sowohl Glyphenspiegelung als auch Elemente dehnung unterstützt](example_with_stretchy_and_largeop.png)

In diesem Browser sieht es so aus:

{{ EmbedLiveSample("Mirroring and stretching", "", 250) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("direction")}}
- Das HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) globale Attribut
