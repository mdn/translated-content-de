---
title: border-radius
slug: Web/CSS/border-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die Ecken des äußeren Randbereichs eines Elements ab. Sie können einen einzelnen Radius einstellen, um kreisförmige Ecken zu erzeugen, oder zwei Radien, um elliptische Ecken zu erzeugen.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

Der Radius gilt für das gesamte {{cssxref("background")}}, selbst wenn das Element keinen Rahmen hat; die genaue Position des Zuschnitts wird durch die Eigenschaft {{cssxref("background-clip")}} definiert.

Die `border-radius` Eigenschaft gilt nicht für Tabellenelemente, wenn {{cssxref("border-collapse")}} auf `collapse` gesetzt ist.

> [!NOTE]
> Wie bei jeder Kurzschreibweise können einzelne Untereigenschaften nicht geerbt werden, wie in `border-radius:0 0 inherit inherit`, was bestehende Definitionen teilweise überschreiben würde. Stattdessen müssen die einzelnen Langform-Eigenschaften verwendet werden.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Zusammenfassung der folgenden CSS-Eigenschaften:

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

Die `border-radius` Eigenschaft wird wie folgt angegeben:

- Ein oder zwei, drei oder vier {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte. Dies wird verwendet, um einen einzigen Radius für die Ecken festzulegen.
- Optional gefolgt von "/" und ein, zwei, drei oder vier `<length>` oder `<percentage>` Werte. Dies wird verwendet, um einen zusätzlichen Radius festzulegen, sodass Sie elliptische Ecken haben können.

### Werte

<table>
  <tbody>
    <tr>
      <td><em>radius</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Alle 4 Ecken sind abgerundet." src="all-corner.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in jeder Ecke des Randes verwendet wird. Es wird nur in der
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
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in den Ecken oben links und unten rechts des Elementfeldes
        verwendet wird. Es wird nur in der Zwei-Werte-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right-and-bottom-left</em></td>
      <td>
        <img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die 2 Ecken oben rechts und unten links sind abgerundet." src="top-right-bottom-left.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in den Ecken oben rechts und unten links des Elementfeldes
        verwendet wird. Es wird nur in der Zwei- und Drei-Werte-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben links ist abgerundet." src="top-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in der Ecke oben links des Elementfeldes verwendet wird. Es
        wird nur in der Drei- und Vier-Werte-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>top-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke oben rechts ist abgerundet." src="top-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in der Ecke oben rechts des Elementfeldes verwendet wird. Es
        wird nur in der Vier-Werte-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-right</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten rechts ist abgerundet." src="bottom-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in der Ecke unten rechts des Elementfeldes verwendet wird. Es
        wird nur in der Drei- und Vier-Werte-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>bottom-left</em></td>
      <td><img alt="Ein hellblaues Rechteck mit einem hellgrauen Rand. Die Ecke unten links ist abgerundet." src="bottom-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein
        {{cssxref("&lt;percentage&gt;")}} und bezeichnet einen
        Radius, der in der Ecke unten links des Elementfeldes verwendet wird. Es
        wird nur in der Vier-Werte-Syntax verwendet.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Bezeichnet die Größe des Kreises Radius oder der halben großen und halben kleinen Achsen der Ellipse unter Verwendung von Längenwerten. Negative Werte sind ungültig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Bezeichnet die Größe des Kreises Radius oder der halben großen und halben kleinen Achsen der Ellipse unter Verwendung von Prozentwerten. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kästchens; Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kästchens. Negative Werte sind ungültig.

Zum Beispiel:

```css
border-radius: 1em/5em;

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
  border-radius: 13em/3em;
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
  height: 80px;
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
  border-radius: 13em/3em;
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

{{EmbedLiveSample("Beispiele", "200", "1150")}}

### Live-Beispiele

- Beispiel 1 : <https://jsfiddle.net/Tripad/qnGKj/2/>
- Beispiel 2 : <https://jsfiddle.net/Tripad/qnGKj/3/>
- Beispiel 3 : <https://jsfiddle.net/Tripad/qnGKj/4/>
- Beispiel 4 : <https://jsfiddle.net/Tripad/qnGKj/5/>
- Beispiel 5 : <https://jsfiddle.net/Tripad/qnGKj/6/>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Border-Radius-bezogene CSS-Eigenschaften: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
