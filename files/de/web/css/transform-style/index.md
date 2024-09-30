---
title: transform-style
slug: Web/CSS/transform-style
l10n:
  sourceCommit: 478a7e522593f720c1f8c882b7db82cfe8c11862
---

{{CSSRef}}

Die **`transform-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die Kinder eines Elements im 3D-Raum positioniert werden oder in der Ebene des Elements abgeflacht sind.

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

Wenn abgeflacht, existieren die Kinderelemente nicht eigenständig im 3D-Raum.

Da diese Eigenschaft nicht vererbt wird, muss sie für alle nicht-Blatt-Nachfahren des Elements gesetzt werden.

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
  - : Gibt an, dass die Kinder des Elements im 3D-Raum positioniert werden sollten.

## Beschreibung

Die Spezifikation listet einige [Gruppierungseigenschaftswerte](https://drafts.csswg.org/css-transforms-2/#grouping-property-values) auf, die vom User Agent verlangen, eine abgeflachte Darstellung der Nachkommenelemente zu erstellen, bevor sie angewendet werden können, und erzwingen daher, dass das Element einen [verwendeten Wert](/de/docs/Web/CSS/used_value) von `transform-style: flat` hat, selbst wenn `preserve-3d` angegeben ist. Diese Eigenschaftswerte umfassen:

- {{cssxref("overflow")}}: jeden Wert außer `visible` oder `clip`.
- {{cssxref("opacity")}}: jeden Wert kleiner als `1`.
- {{cssxref("filter")}}: jeden Wert außer `none`.
- {{cssxref("clip")}}: jeden Wert außer `auto`.
- {{cssxref("clip-path")}}: jeden Wert außer `none`.
- {{cssxref("isolation")}}: verwendeter Wert von `isolate`.
- {{cssxref("mask-image")}}: jeden Wert außer `none`.
- {{cssxref("mask-border-source")}}: jeden Wert außer `none`.
- {{cssxref("mix-blend-mode")}}: jeden Wert außer `normal`.
- {{cssxref("contain")}}: `paint` und jede andere Eigenschaft/Wert-Kombination, die Mal-Inhaltserfassung verursacht. Dies umfasst jede Eigenschaft, die den verwendeten Wert der `contain`-Eigenschaft beeinflusst, wie zum Beispiel `content-visibility: hidden`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der Transform-Eigenschaft

In diesem Beispiel haben wir einen 3D-Würfel erstellt, der Transformationen verwendet. Der übergeordnete Container der Würfelflächen hat standardmäßig `transform-style: preserve-3d` gesetzt, sodass er im 3D-Raum transformiert wird und Sie ihn wie beabsichtigt sehen können.

Wir bieten auch ein Kontrollkästchen, das Ihnen ermöglicht, zwischen diesem und `transform-style: flat` umzuschalten. In diesem alternativen Zustand werden die Würfelflächen alle auf die Ebene ihres übergeordneten Elements abgeflacht, und Sie könnten sie möglicherweise gar nicht sehen, abhängig vom verwendeten Browser.

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
