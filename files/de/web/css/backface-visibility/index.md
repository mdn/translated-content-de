---
title: backface-visibility
slug: Web/CSS/backface-visibility
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

Die **`backface-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Rückseite eines Elements sichtbar ist, wenn es dem Benutzer zugewandt ist.

{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}

Die Rückseite eines Elements ist ein Spiegelbild seiner Vorderseite. Obwohl unsichtbar in 2D, kann die Rückseite sichtbar werden, wenn eine Transformation dazu führt, dass das Element im 3D-Raum gedreht wird. (Diese Eigenschaft hat keine Wirkung auf 2D-Transformationen, die keine Perspektive haben.)

## Syntax

```css
/* Keyword values */
backface-visibility: visible;
backface-visibility: hidden;

/* Global values */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: revert;
backface-visibility: revert-layer;
backface-visibility: unset;
```

Die `backface-visibility` Eigenschaft wird als eines der unten aufgeführten Schlüsselwörter angegeben.

### Werte

- `visible`
  - : Die Rückseite ist sichtbar, wenn sie dem Benutzer zugewandt ist.
- `hidden`
  - : Die Rückseite ist verborgen und macht das Element effektiv unsichtbar, wenn es weg vom Benutzer gedreht wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Würfel mit transparenten und undurchsichtigen Flächen

Dieses Beispiel zeigt einen Würfel mit transparenten Flächen und einen mit undurchsichtigen Flächen.

#### HTML

```html
<table>
  <tr>
    <th><code>backface-visibility: visible;</code></th>
    <th><code>backface-visibility: hidden;</code></th>
  </tr>
  <tr>
    <td>
      <div class="container">
        <div class="cube showbf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>
        Since all faces are partially transparent, the back faces (2, 4, 5) are
        visible through the front faces (1, 3, 6).
      </p>
    </td>
    <td>
      <div class="container">
        <div class="cube hidebf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>The three back faces (2, 4, 5) are hidden.</p>
    </td>
  </tr>
</table>
```

#### CSS

```css
/* Classes that will show or hide the
   three back faces of the "cube" */
.showbf div {
  backface-visibility: visible;
}

.hidebf div {
  backface-visibility: hidden;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 255 0 / 100%);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Ergebnis

{{EmbedLiveSample('Cube_with_transparent_and_opaque_faces', '100%', 360)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
