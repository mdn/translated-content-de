---
title: transform-style
slug: Web/CSS/transform-style
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`transform-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Kinder eines Elements im dreidimensionalen Raum positioniert oder in der Ebene des Elements abgeflacht werden.

{{InteractiveExample("CSS Demo: transform-style")}}

```css interactive-example-choice
transform-style: flat;
```

```css interactive-example-choice
transform-style: preserve-3d;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all layer" id="example-element">
    <p>Parent</p>
    <div class="numeral"><code>rotate3d(1, 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css interactive-example
.layer {
  background: #623e3f;
  border-radius: 0.75rem;
  color: white;
  transform: perspective(200px) rotateY(30deg);
}

.numeral {
  background-color: #ffba08;
  border-radius: 0.2rem;
  color: #000;
  margin: 1rem;
  padding: 0.2rem;
  transform: rotate3d(1, 1, 1, 45deg);
}
```

Wenn sie abgeflacht sind, existieren die Kinder des Elements nicht eigenständig im dreidimensionalen Raum.

Da diese Eigenschaft nicht vererbt wird, muss sie für alle nicht-Blatt-Nachfahren des Elements festgelegt werden.

## Syntax

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: revert-layer;
transform-style: unset;
```

### Werte

- `flat`
  - : Gibt an, dass die Kinder des Elements in der Ebene des Elements selbst liegen.
- `preserve-3d`
  - : Gibt an, dass die Kinder des Elements im dreidimensionalen Raum positioniert werden sollen.

## Beschreibung

Die Spezifikation listet einige [Gruppierungseigenschaftswerte](https://drafts.csswg.org/css-transforms-2/#grouping-property-values) auf, die den Benutzeragenten dazu zwingen, eine abgeflachte Darstellung der Nachfahr-Elemente zu erstellen, bevor sie angewendet werden können. Daher erzwingen sie, dass das Element einen [benutzten Wert](/de/docs/Web/CSS/CSS_cascade/used_value) von `transform-style: flat` hat, selbst wenn `preserve-3d` angegeben ist. Diese Eigenschaftswerte umfassen:

- {{cssxref("overflow")}}: jeder Wert außer `visible` oder `clip`.
- {{cssxref("opacity")}}: jeder Wert kleiner als `1`.
- {{cssxref("filter")}}: jeder Wert außer `none`.
- {{cssxref("clip")}}: jeder Wert außer `auto`.
- {{cssxref("clip-path")}}: jeder Wert außer `none`.
- {{cssxref("isolation")}}: benutzter Wert von `isolate`.
- {{cssxref("mask-image")}}: jeder Wert außer `none`.
- {{cssxref("mask-border-source")}}: jeder Wert außer `none`.
- {{cssxref("mix-blend-mode")}}: jeder Wert außer `normal`.
- {{cssxref("contain")}}: `paint` und jede andere Eigenschafts-/Wertkombination, die Mal-Kontainment verursacht. Dies schließt jede Eigenschaft ein, die den benutzten Wert der `contain`-Eigenschaft beeinflusst, wie z.B. `content-visibility: hidden`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der Transformationsstile

In diesem Beispiel haben wir einen 3D-Würfel, der mit Transformationen erstellt wurde. Der übergeordnete Container der Würfelseiten hat standardmäßig `transform-style: preserve-3d` gesetzt, sodass er im dreidimensionalen Raum transformiert wird und Sie ihn wie beabsichtigt sehen können.

Wir bieten auch ein Kontrollkästchen an, mit dem Sie zwischen diesem und `transform-style: flat` umschalten können. In diesem alternativen Zustand sind die Würfelseiten alle in die Ebene ihres übergeordneten Elements abgeflacht, und Sie können sie möglicherweise gar nicht sehen, abhängig vom verwendeten Browser.

#### HTML

```html
<section id="example-element">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>

<div class="checkbox">
  <label for="preserve"><code>preserve-3d</code></label>
  <input type="checkbox" id="preserve" checked />
</div>
```

#### CSS

```css
#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: #fff;
}

.front {
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### JavaScript

```js
const cube = document.getElementById("example-element");
const checkbox = document.getElementById("preserve");

checkbox.addEventListener("change", () => {
  cube.style.transformStyle = checkbox.checked ? "preserve-3d" : "flat";
});
```

#### Ergebnis

{{EmbedLiveSample('Transform_style_demonstration', '100%', 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
