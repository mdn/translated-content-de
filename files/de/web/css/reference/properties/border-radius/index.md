---
title: border-radius
slug: Web/CSS/Reference/Properties/border-radius
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-radius`** [CSS](/de/docs/Web/CSS)-Eigenschaft rundet die Ecken des äußeren Randes eines Elements ab. Sie können einen einzigen Radius festlegen, um kreisförmige Ecken zu erzeugen, oder zwei Radien, um elliptische Ecken zu schaffen.

{{InteractiveExample("CSS Demo: border-radius")}}

```css interactive-example-choice
border-radius: 30px;
```

```css interactive-example-choice
border-radius: 25% 10%;
```

```css interactive-example-choice
border-radius: 10% 30% 50% 70%;
```

```css interactive-example-choice
border-radius: 10% / 50%;
```

```css interactive-example-choice
border-radius: 10px 100px / 120px;
```

```css interactive-example-choice
border-radius: 50% 20% / 10% 40%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with rounded corners.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-bottom-left-radius")}}

## Syntax

```css
/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Global values */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: revert-layer;
border-radius: unset;
```

Die `border-radius`-Eigenschaft wird wie folgt angegeben:

- ein, zwei, drei oder vier {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Dies wird verwendet, um einen einzigen Radius für die Ecken festzulegen.
- optional gefolgt von "/" und ein, zwei, drei oder vier `<length>` oder `<percentage>` Werten. Dies wird verwendet, um einen zusätzlichen Radius festzulegen, sodass elliptische Ecken möglich sind.

### Werte

<table>
  <tbody>
    <tr>
      <td><em>radius</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Alle 4 Ecken sind abgerundet." src="all-corner.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in jeder Ecke des Randes angibt. Es wird nur in der
        Ein-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-left-and-bottom-right</em></td>
      <td>
        <img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die 2 Ecken oben links und unten rechts sind abgerundet." src="top-left-bottom-right.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in den Ecken oben links und unten rechts des Elements
        angibt. Es wird nur in der Zwei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right-and-bottom-left</em></td>
      <td>
        <img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die 2 Ecken oben rechts und unten links sind abgerundet." src="top-right-bottom-left.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in den Ecken oben rechts und unten links des Elements
        angibt. Es wird nur in der Zwei- und Drei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben links ist abgerundet." src="top-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in der Ecke oben links des Elements angibt. Es wird
        nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben rechts ist abgerundet." src="top-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in der Ecke oben rechts des Elements angibt. Es wird
        nur in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten rechts ist abgerundet." src="bottom-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in der Ecke unten rechts des Elements angibt. Es wird
        nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten links ist abgerundet." src="bottom-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius für den
        Rand in der Ecke unten links des Elements angibt. Es wird
        nur in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die Größe des Kreisradius oder die Haupt- und Nebenachsen der Ellipse unter Verwendung von Längenwerten an. Negative Werte sind ungültig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Gibt die Größe des Kreisradius oder die Haupt- und Nebenachsen der Ellipse unter Verwendung von Prozentwerten an. Prozentwerte für die horizontale Achse beziehen sich auf die Breite der Box; Prozentwerte für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

Zum Beispiel:

```css
border-radius: 1em / 5em;

/* It is equivalent to: */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* It is equivalent to: */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## Beschreibung

Der Radius gilt für den gesamten {{cssxref("background")}}, auch wenn das Element keinen Rand hat; die genaue Position des Zuschnitts wird durch die Eigenschaft {{cssxref("background-clip")}} definiert.

Die `border-radius`-Eigenschaft wird nicht auf Tabellenelemente angewendet, wenn {{cssxref("border-collapse")}} auf `collapse` gesetzt ist.

> [!NOTE]
> Wie bei jeder Kurzform-Eigenschaft können einzelne Untereigenschaften nicht vererbt werden, wie in `border-radius:0 0 inherit inherit`, was bestehende Definitionen teilweise überschreiben würde. Stattdessen müssen die einzelnen Langform-Eigenschaften verwendet werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Rahmenstilen

Das folgende Beispiel enthält sieben {{htmlelement("pre")}}-Elemente, von denen jedes Kombinationen aus `border`- und `border-radius`-Stilen demonstriert.
Die auf jedes `<pre>`-Element angewendeten Stile sind als Inhalt des Elements enthalten, sodass Sie die CSS-Deklarationen sehen können, die erforderlich sind, um den zugehörigen Rahmenstil zu erstellen:

```html hidden
<pre id="example-1">
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
</pre>

<pre id="example-2">
  border: groove 1em red;
  border-radius: 2em;
</pre>

<pre id="example-3">
  background: gold;
  border: ridge gold;
  border-radius: 13em / 3em;
</pre>

<pre id="example-4">
  border: none;
  border-radius: 40px 10px;
  background: gold;
</pre>

<pre id="example-5">
  border: none;
  border-radius: 50%;
  background: burlywood;
</pre>

<pre id="example-6">
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
</pre>

<pre id="example-7">
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
</pre>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 50px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em / 3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("Comparing border styles", "", "900")}}

### Verwendung von `corner-shape` mit `border-radius`

Wenn ein nicht-`0` `border-radius`-Wert auf eine Box-Ecke angewendet wird, können Sie die Eigenschaft {{cssxref("corner-shape")}} (oder eine ihrer [Lang- und Kurzformen](/de/docs/Web/CSS/Reference/Properties/corner-shape#corner--shape_shorthands_and_longhands)) verwenden, um benutzerdefinierte Formen auf diese Ecke anzuwenden, wie z.B. eine Abschrägung, eine Kerbe oder eine Squircle. Dieses Beispiel zeigt die Verwendung von `corner-shape`.

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir setzen auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `0 20% 50px 30%` und eine `corner-shape` von `superellipse(0.5) bevel notch squircle`.

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 0 20% 50px 30%;
  corner-shape: superellipse(0.5) bevel notch squircle;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

Beachten Sie, dass keine Eckenform auf die obere linke Ecke angewendet wird, da dort ein `border-radius` von `0` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Border-radius-bezogene CSS-Eigenschaften: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
