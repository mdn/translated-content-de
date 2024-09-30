---
title: transform-origin
slug: Web/SVG/Attribute/transform-origin
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef()}}

Das **`transform-origin`** SVG-Attribut legt den Ursprung für die Transformationen eines Elements fest.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

> [!NOTE]
> Als Präsentationsattribut in SVG entspricht `transform-origin` im Syntax und Verhalten der CSS-Eigenschaft `transform-origin` und kann als CSS-Eigenschaft zur Gestaltung von SVG verwendet werden. Weitere Informationen finden Sie in der [CSS transform-origin](/de/docs/Web/CSS/transform-origin) Eigenschaft.

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Werte</strong></td>
      <td>Siehe {{cssxref("transform-origin", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <td><strong>Standardwert</strong></td>
      <td><code>0, 0</code></td>
    </tr>
    <tr>
      <td><strong>Animierbar</strong></td>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Der Standardwert von `transform-origin` ist `0 0` für alle SVG-Elemente, außer für Wurzel-`<svg>`-Elemente und `<svg>`-Elemente, die ein direktes Kind eines [foreignObject](/de/docs/Web/SVG/Element/foreignObject) sind und deren transform-origin `50% 50%` beträgt, wie bei anderen CSS-Elementen.

Die `transform-origin`-Eigenschaft kann mit einem, zwei oder drei Werten angegeben werden, wobei jeder Wert einen Versatz darstellt. Nicht explizit definierte Versätze werden auf ihre entsprechenden [Anfangswerte](/de/docs/Web/CSS/initial_value) zurückgesetzt.

Wenn ein einzelner {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert definiert ist, stellt er den horizontalen Versatz dar.

Wenn zwei oder mehr Werte definiert sind und entweder kein Wert ein Schlüsselwort ist oder das einzige verwendete Schlüsselwort `center` ist, dann repräsentiert der erste Wert den horizontalen Versatz und der zweite den vertikalen Versatz.

- Einwert-Syntax:

  - Der Wert muss eine {{cssxref("length")}} oder eines der Schlüsselwörter `left`, `center`, `right`, `top` und `bottom` sein.

- Zweiwert-Syntax:

  - Ein Wert muss eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder eines der Schlüsselwörter `left`, `center` und `right` sein.
  - Der andere Wert muss eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder eines der Schlüsselwörter `top`, `center` und `bottom` sein.

- Dreiwert-Syntax:

  - Die ersten beiden Werte sind dieselben wie bei der Zweiwert-Syntax.
  - Der dritte Wert muss eine {{cssxref("length")}} sein. Er repräsentiert immer den Z-Versatz.

## Beispiel

Dieses Beispiel zeigt den Code für ein PNG-Bild und drei SVG-Bilder:

1. Ein PNG-Referenzbild.
2. Ein SVG-Referenzbild, das keine Transformation verwendet.
3. Ein SVG-Bild, das `transform-origin` zur Transformation verwendet, wobei das erwartete Ergebnis ein Bild ist, das mit dem Referenzbild identisch ist.
4. Ein SVG-Bild, das nicht `transform-origin`, sondern nur [`transform`](/de/docs/Web/SVG/Attribute/transform) zur Transformation verwendet, mit dem erwarteten Ergebnis eines Bildes, das dem Referenzbild identisch ist.

Das vierte Bild zeigt, wie die Transformation in Browsern durchgeführt werden kann, die `transform-origin` nicht unterstützen — da der Code für das vierte Bild dieselbe Transformation wie der `transform-origin`-basierte Code des dritten Bildes durchführt, jedoch nur mithilfe von `transform` und ohne `transform-origin`.

> [!NOTE]
> Diese Beispiele verwenden eine modifizierte Version eines Code-Snippets in einer Stack Overflow [Frage](https://stackoverflow.com/questions/67057190/safari-doesnt-respect-transform-origin-svg-attribute) von [Maxim Kulikov](https://stackoverflow.com/users/1033939/maxim-kulikov) sowie eine modifizierte Version eines Code-Snippets in einer [Antwort](https://stackoverflow.com/questions/67057190/safari-doesnt-respect-transform-origin-svg-attribute/67057754) von [Michael Mullany](https://stackoverflow.com/users/271353/michael-mullany), die die Frage begleitet. Beide Code-Snippets werden unter den Bedingungen der [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) Lizenz verwendet.)

### HTML

```html
<h4>Reference image</h4>

<div>
  <figure>
    <img src="reference.png" alt="PNG reference image" />
    <figcaption>
      Figure 1. PNG reference image. The images following this should look
      exactly the same as this.
    </figcaption>
  </figure>
</div>

<div>
  <figure>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="100" stroke="none" fill="black" />
      <line
        x1="100"
        y1="0"
        x2="100"
        y2="200"
        stroke="rebeccapurple"
        stroke-width="2" />
      <line
        x1="0"
        y1="100"
        x2="200"
        y2="100"
        stroke="rebeccapurple"
        stroke-width="2" />

      <circle cx="100" cy="100" r="75" stroke="none" fill="blue" />
      <line
        x1="100"
        y1="25"
        x2="100"
        y2="175"
        stroke="rebeccapurple"
        stroke-width="1.5" />
      <line
        x1="25"
        y1="100"
        x2="175"
        y2="100"
        stroke="rebeccapurple"
        stroke-width="1.5" />

      <circle cx="100" cy="100" r="50" stroke="none" fill="red" />
      <line
        x1="100"
        y1="50"
        x2="100"
        y2="150"
        stroke="rebeccapurple"
        stroke-width="1" />
      <line
        x1="50"
        y1="100"
        x2="150"
        y2="100"
        stroke="rebeccapurple"
        stroke-width="1" />

      <circle cx="100" cy="100" r="25" stroke="none" fill="yellow" />
      <line
        x1="100"
        y1="75"
        x2="100"
        y2="125"
        stroke="rebeccapurple"
        stroke-width="0.5" />
      <line
        x1="75"
        y1="100"
        x2="125"
        y2="100"
        stroke="rebeccapurple"
        stroke-width="0.5" />
    </svg>
    <figcaption>
      Figure 2. SVG reference image. The images following this should look
      exactly the same as this.
    </figcaption>
  </figure>
</div>

<h4>Transformation with transform-origin</h4>

<div>
  <figure>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200">
      <defs>
        <g id="target-g-1">
          <circle cx="100" cy="100" r="100" stroke="none" />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="rebeccapurple"
            stroke-width="2" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="rebeccapurple"
            stroke-width="2" />
        </g>
      </defs>

      <use href="#target-g-1" fill="black" />
      <use
        href="#target-g-1"
        fill="blue"
        transform="scale(0.75 0.75)"
        transform-origin="100 100" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="200"
        height="200"
        viewBox="0 0 200 200">
        <use
          href="#target-g-1"
          fill="red"
          transform="scale(0.5 0.5)"
          transform-origin="100 100" />
        <use
          href="#target-g-1"
          fill="yellow"
          transform="scale(0.25 0.25)"
          transform-origin="100 100" />
      </svg>
    </svg>

    <figcaption>
      Figure 3. transform-origin used. This image should look exactly the same
      as the reference image in Figure 2.
    </figcaption>
  </figure>
</div>

<h4>Transformation without transform-origin</h4>

<div>
  <figure>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200">
      <defs>
        <g id="target-g-1">
          <circle cx="100" cy="100" r="100" stroke="none" />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="rebeccapurple"
            stroke-width="2" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="rebeccapurple"
            stroke-width="2" />
        </g>
      </defs>

      <use href="#target-g-1" fill="black" />
      <use
        href="#target-g-1"
        fill="blue"
        transform="translate(100 100) scale(0.75 0.75) translate(-100 -100)" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="200"
        height="200"
        viewBox="0 0 200 200">
        <use
          href="#target-g-1"
          fill="red"
          transform="translate(100 100) scale(0.5 0.5) translate(-100 -100)" />
        <use
          href="#target-g-1"
          fill="yellow"
          transform="translate(100 100) scale(0.25 0.25) translate(-100 -100)" />
      </svg>
    </svg>

    <figcaption>
      Figure 4. transform-origin not used. This image should look exactly the
      same as the reference image in Figure 2.
    </figcaption>
  </figure>
</div>
```

### CSS

```css
h4 {
  font-family: sans-serif;
}

figure {
  border: thin #c0c0c0 solid;
  display: inline-flex;
  flex-flow: column;
  padding: 5px;
  max-width: 200px;
  margin: auto;
}

figcaption {
  margin-top: 5px;
  background-color: #222;
  color: #fff;
  font: smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

### Ergebnis

{{ EmbedLiveSample('Example', 700, 1350) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
