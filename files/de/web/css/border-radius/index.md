---
title: border-radius
slug: Web/CSS/border-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die Ecken eines äußeren Rahmenrands eines Elements ab. Sie können einen einzelnen Radius setzen, um runde Ecken zu erhalten, oder zwei Radien, um elliptische Ecken zu erzeugen.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

Der Radius gilt für den gesamten {{cssxref("background")}}, selbst wenn das Element keinen Rahmen hat; die genaue Position der Abschnitte wird durch die Eigenschaft {{cssxref("background-clip")}} definiert.

Die `border-radius`-Eigenschaft gilt nicht für Tabellenelemente, wenn {{cssxref("border-collapse")}} auf `collapse` gesetzt ist.

> [!NOTE]
> Wie bei jeder Kurzform-Eigenschaft können einzelne Untereigenschaften nicht vererbt werden, wie beispielsweise in `border-radius:0 0 inherit inherit`, was teilweise bestehende Definitionen überschreiben würde. Stattdessen müssen die einzelnen Langform-Eigenschaften verwendet werden.

## Konstituierende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-top-left-radius`](/de/docs/Web/CSS/border-top-left-radius)
- [`border-top-right-radius`](/de/docs/Web/CSS/border-top-right-radius)
- [`border-bottom-right-radius`](/de/docs/Web/CSS/border-bottom-right-radius)
- [`border-bottom-left-radius`](/de/docs/Web/CSS/border-bottom-left-radius)

## Syntax

```css
/* Die Syntax des ersten Radius erlaubt ein bis vier Werte */
/* Radius wird für alle 4 Seiten gesetzt */
border-radius: 10px;

/* oben-links-und-unten-rechts | oben-rechts-und-unten-links */
border-radius: 10px 5%;

/* oben-links | oben-rechts-und-unten-links | unten-rechts */
border-radius: 2px 4px 2px;

/* oben-links | oben-rechts | unten-rechts | unten-links */
border-radius: 1px 0 3px 4px;

/* Die Syntax des zweiten Radius erlaubt ein bis vier Werte */
/* (erste Radiuswerte) / Radius */
border-radius: 10px / 20px;

/* (erste Radiuswerte) / oben-links-und-unten-rechts | oben-rechts-und-unten-links */
border-radius: 10px 5% / 20px 30px;

/* (erste Radiuswerte) / oben-links | oben-rechts-und-unten-links | unten-rechts */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (erste Radiuswerte) / oben-links | oben-rechts | unten-rechts | unten-links */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Globale Werte */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: revert-layer;
border-radius: unset;
```

Die `border-radius`-Eigenschaft wird folgendermaßen angegeben:

- ein, zwei, drei oder vier {{cssxref("&lt;length&gt;")}}- oder {{cssxref("&lt;percentage&gt;")}}-Werte. Diese werden verwendet, um einen einzelnen Radius für die Ecken festzulegen.
- optional gefolgt von "/" und ein, zwei, drei oder vier `<length>`- oder `<percentage>`-Werten. Diese werden verwendet, um einen zusätzlichen Radius festzulegen, damit Sie elliptische Ecken haben können.

### Werte

<table>
  <tbody>
    <tr>
      <td><em>radius</em></td>
      <td><img alt="A light blue rectangle with a light gray border. All 4 corners are rounded." src="all-corner.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in jeder Ecke des Rahmens verwendet wird. Es wird nur in der Ein-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>oben-links-und-unten-rechts</em></td>
      <td>
        <img alt="A light blue rectangle with a light gray border. The 2 corners on the top left and the bottom right have are rounded." src="top-left-bottom-right.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in den Ecken oben links und unten rechts des Boxelements verwendet wird. Es wird nur in der Zwei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>oben-rechts-und-unten-links</em></td>
      <td>
        <img alt="A light blue rectangle with a light gray border. The 2 corners on the top right and the bottom left are rounded." src="top-right-bottom-left.png" />
      </td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in den Ecken oben rechts und unten links des Boxelements verwendet wird. Es wird nur in der Zwei- und Drei-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>oben-links</em></td>
      <td><img alt="A light blue rectangle with a light gray border. The corner on the top left is rounded." src="top-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in der Ecke oben links des Boxelements verwendet wird. Es wird nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>oben-rechts</em></td>
      <td><img alt="A light blue rectangle with a light gray border. The corner on the top right is rounded." src="top-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in der Ecke oben rechts des Boxelements verwendet wird. Es wird nur in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>unten-rechts</em></td>
      <td><img alt="A light blue rectangle with a light gray border. The bottom right corner is rounded." src="bottom-right.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in der Ecke unten rechts des Boxelements verwendet wird. Es wird nur in der Drei- und Vier-Wert-Syntax verwendet.
      </td>
    </tr>
    <tr>
      <td><em>unten-links</em></td>
      <td><img alt="A light blue rectangle with a light gray border. The bottom left corner is rounded." src="bottom-left.png" /></td>
      <td>
        Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt einen Radius an, der für den Rahmen in der Ecke unten links des Boxelements verwendet wird. Es wird nur in der Vier-Wert-Syntax verwendet.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Gibt die Größe des Kreisradius oder der Halbachsen der Ellipse an und verwendet Längenwerte. Negative Werte sind ungültig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Gibt die Größe des Kreisradius oder der Halbachsen der Ellipse an und verwendet Prozentwerte. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box; Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

Zum Beispiel:

```css
border-radius: 1em/5em;

/* Es ist gleichbedeutend mit: */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* Es ist gleichbedeutend mit: */
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

{{EmbedLiveSample("Examples", "200", "1150")}}

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

- Border-radius-bezogene CSS-Eigenschaften: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
