---
title: border-radius
slug: Web/CSS/border-radius
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`border-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die Ecken des äußeren Rahmenrandes eines Elements ab. Sie können einen einzelnen Radius festlegen, um kreisförmige Ecken zu erstellen, oder zwei Radien, um elliptische Ecken zu erzeugen.

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

Der Radius gilt für den gesamten {{cssxref("background")}}, selbst wenn das Element keinen Rahmen hat; die exakte Position des Ausschnitts wird durch die {{cssxref("background-clip")}} Eigenschaft definiert.

Die `border-radius` Eigenschaft gilt nicht für Tabellenelemente, wenn {{cssxref("border-collapse")}} auf `collapse` gesetzt ist.

> [!NOTE]
> Wie bei jeder abgekürzten Eigenschaft können einzelne Untereigenschaften nicht vererbt werden, wie in `border-radius:0 0 inherit inherit`, was bestehende Definitionen teilweise überschreiben würde. Stattdessen müssen die einzelnen Langformen verwendet werden.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-top-left-radius`](/de/docs/Web/CSS/border-top-left-radius)
- [`border-top-right-radius`](/de/docs/Web/CSS/border-top-right-radius)
- [`border-bottom-right-radius`](/de/docs/Web/CSS/border-bottom-right-radius)
- [`border-bottom-left-radius`](/de/docs/Web/CSS/border-bottom-left-radius)

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

Die `border-radius` Eigenschaft wird spezifiziert als:

- ein, zwei, drei oder vier {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Dies wird verwendet, um einen einzelnen Radius für die Ecken festzulegen.
- optional gefolgt von "/" und einem, zwei, drei oder vier `<length>` oder `<percentage>` Werten. Dies wird verwendet, um einen zusätzlichen Radius festzulegen, sodass Sie elliptische Ecken haben können.

### Werte

<table>
  <tbody>
    <tr>
      <td><em>radius</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Alle 4 Ecken sind abgerundet." src="all-corner.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in jeder Ecke des Rahmens verwendet werden soll. Es wird nur in der
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
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in den Ecken oben links und unten rechts des Elementrahmens
        verwendet werden soll. Es wird nur in der Zwei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right-and-bottom-left</em></td>
      <td>
        <img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die 2 Ecken oben rechts und unten links sind abgerundet." src="top-right-bottom-left.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in den Ecken oben rechts und unten links des Elementrahmens
        verwendet werden soll. Es wird nur in der Zwei- und Drei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben links ist abgerundet." src="top-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in der oberen linken Ecke des Elementrahmens verwendet werden soll. Es wird
        nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben rechts ist abgerundet." src="top-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in der oberen rechten Ecke des Elementrahmens verwendet werden soll. Es wird
        nur in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten rechts ist abgerundet." src="bottom-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in der unteren rechten Ecke des Elementrahmens verwendet werden soll. Es wird
        nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten links ist abgerundet." src="bottom-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, das einen Radius angibt,
        der für den Rahmen in der unteren linken Ecke des Elementrahmens verwendet werden soll. Es wird
        nur in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die Größe des Kreisradius oder die Halbachsen der Ellipse mit Längenwerten an. Negative Werte sind ungültig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Gibt die Größe des Kreisradius oder die Halbachsen der Ellipse mit Prozentwerten an. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens; Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

Beispiel:

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

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Rahmenstilen

Das folgende Beispiel enthält sieben {{htmlelement("pre")}} Elemente, von denen jedes Kombinationen von `border` und `border-radius` Stilen demonstriert.
Die auf jedes `<pre>` Element angewendeten Stile sind als Inhalt des Elements enthalten, sodass Sie die CSS-Deklarationen sehen können, die erforderlich sind, um den zugehörigen Rahmenstil zu erstellen:

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

Wenn ein nicht-`0` `border-radius` Wert auf eine Kastenecke angewendet wird, können Sie die {{cssxref("corner-shape")}} Eigenschaft (oder eine ihrer [Lang- und Kurzformen](/de/docs/Web/CSS/corner-shape#corner--shape_shorthands_and_longhands)) verwenden, um benutzerdefinierte Formen auf diese Ecke anzuwenden, wie z. B. eine Fase, eine Kerbe oder ein abgerundetes Rechteck. Dieses Beispiel zeigt die Verwendung von `corner-shape`.

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir aus Platzgründen weggelassen haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `0 20% 50px 30%` und eine `corner-shape` von `superellipse(0.5) bevel notch squircle` an.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

Beachten Sie, dass in der oberen linken Ecke keine Eckform angewendet wird, da dort ein `border-radius` von `0` festgelegt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Border-Radius-verwandte CSS-Eigenschaften: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
