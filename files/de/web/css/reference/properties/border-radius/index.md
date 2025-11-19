---
title: border-radius
slug: Web/CSS/Reference/Properties/border-radius
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`border-radius`**-Eigenschaft von [CSS](/de/docs/Web/CSS) rundet die Ecken des äußeren Randes eines Elements ab. Sie können einen einzigen Radius setzen, um runde Ecken zu erzeugen, oder zwei Radien, um elliptische Ecken zu gestalten.

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

## Komponenten-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-top-left-radius`](/de/docs/Web/CSS/Reference/Properties/border-top-left-radius)
- [`border-top-right-radius`](/de/docs/Web/CSS/Reference/Properties/border-top-right-radius)
- [`border-bottom-right-radius`](/de/docs/Web/CSS/Reference/Properties/border-bottom-right-radius)
- [`border-bottom-left-radius`](/de/docs/Web/CSS/Reference/Properties/border-bottom-left-radius)

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

Die `border-radius`-Eigenschaft wird wie folgt spezifiziert:

- ein, zwei, drei oder vier {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Dies wird verwendet, um einen einzigen Radius für die Ecken festzulegen.
- optional gefolgt von "/" und einem, zwei, drei oder vier `<length>` oder `<percentage>` Werten. Dies wird verwendet, um einen zusätzlichen Radius festzulegen, sodass Sie elliptische Ecken haben können.

### Werte

<table>
  <tbody>
    <tr>
      <td><em>radius</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Alle 4 Ecken sind abgerundet." src="all-corner.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in jeder Ecke verwendet werden soll. Es wird nur in der
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
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in den Ecken oben links und unten rechts des
        Elementkastens verwendet wird. Es wird nur in der Zwei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right-and-bottom-left</em></td>
      <td>
        <img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die 2 Ecken oben rechts und unten links sind abgerundet." src="top-right-bottom-left.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in den Ecken oben rechts und unten links des
        Elementkastens verwendet wird. Es wird nur in der Zwei- und Drei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben links ist abgerundet." src="top-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in der Ecke oben links des Elementkastens verwendet wird. Es wird
        nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben rechts ist abgerundet." src="top-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in der Ecke oben rechts des Elementkastens verwendet wird. Es wird nur
        in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten rechts ist abgerundet." src="bottom-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in der Ecke unten rechts des Elementkastens verwendet wird. Es wird nur
        in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten links ist abgerundet." src="bottom-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}}, der einen Radius angibt,
        der für den Rand in der Ecke unten links des Elementkastens verwendet wird. Es wird nur
        in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Bezeichnet die Größe des Kreisradius oder die Halb-Achsen der Ellipse unter Verwendung von Längenwerten. Negative Werte sind ungültig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Bezeichnet die Größe des Kreisradius oder die Halb-Achsen der Ellipse unter Verwendung von Prozentwerten. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens; Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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

Der Radius gilt für den gesamten {{cssxref("background")}}, selbst wenn das Element keinen Rand hat; die genaue Position des Clippings wird durch die Eigenschaft {{cssxref("background-clip")}} definiert.

Die `border-radius`-Eigenschaft gilt nicht für Tabellenelemente, wenn {{cssxref("border-collapse")}} `collapse` ist.

> [!NOTE]
> Wie bei jeder Kurzschreibweise können einzelne Untereigenschaften nicht vererbt werden, wie in `border-radius:0 0 inherit inherit`, welches vorhandene Definitionen teilweise überschreiben würde. Stattdessen müssen die einzelnen Langschreib-Eigenschaften verwendet werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Rahmenstilen

Das folgende Beispiel enthält sieben {{htmlelement("pre")}}-Elemente, die jeweils Kombinationen von `border`- und `border-radius`-Stilen demonstrieren. Die auf jedes `<pre>`-Element angewandten Stile sind als Inhalts des Elements enthalten, sodass Sie die erforderlichen CSS-Deklarationen sehen können, um den zugehörigen Rahmenstil zu erstellen:

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

Wenn ein `border-radius`-Wert ungleich `0` auf eine Rechteck-Ecke angewendet wird, können Sie die Eigenschaft {{cssxref("corner-shape")}} (oder eine ihrer [Lang- und Kurzschreibweisen](/de/docs/Web/CSS/Reference/Properties/corner-shape#corner--shape_shorthands_and_longhands)) verwenden, um benutzerdefinierte Formen an dieser Ecke anzuwenden, wie etwa eine Schräge, Kerbe oder Squircle. Dieses Beispiel demonstriert die Verwendung von `corner-shape`.

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben der Box einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `0 20% 50px 30%` und eine `corner-shape` von `superellipse(0.5) bevel notch squircle` an.

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

Beachten Sie, dass keine Eckform auf die Ecke oben links angewendet wird, da dort ein `border-radius` von `0` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Border-radius-verwandte CSS-Eigenschaften: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
