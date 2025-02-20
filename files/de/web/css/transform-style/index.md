---
title: transform-style
slug: Web/CSS/transform-style
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`transform-style`**- [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Nachfahren eines Elements im 3D-Raum positioniert werden oder ob sie in der Ebene des Elements abgeflacht werden.

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

Falls abgeflacht, existieren die Nachfahren des Elements nicht eigenständig im 3D-Raum.

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
  - : Gibt an, dass die Nachfahren des Elements in der Ebene des Elements selbst liegen.
- `preserve-3d`
  - : Gibt an, dass die Nachfahren des Elements im 3D-Raum positioniert werden sollen.

## Beschreibung

Die Spezifikation listet einige [Gruppierungseigenschaftswerte](https://drafts.csswg.org/css-transforms-2/#grouping-property-values) auf, die den User-Agent zwingen, eine abgeflachte Darstellung der Nachfahrelemente zu erstellen, bevor sie angewendet werden können. Dies führt dazu, dass das Element einen [Used Value](/de/docs/Web/CSS/CSS_cascade/used_value) von `transform-style: flat` erhält, auch wenn `preserve-3d` angegeben wurde. Zu diesen Eigenschaftswerten gehören:

- {{cssxref("overflow")}}: Jeder Wert außer `visible` oder `clip`.
- {{cssxref("opacity")}}: Jeder Wert kleiner als `1`.
- {{cssxref("filter")}}: Jeder Wert außer `none`.
- {{cssxref("clip")}}: Jeder Wert außer `auto`.
- {{cssxref("clip-path")}}: Jeder Wert außer `none`.
- {{cssxref("isolation")}}: Used Value von `isolate`.
- {{cssxref("mask-image")}}: Jeder Wert außer `none`.
- {{cssxref("mask-border-source")}}: Jeder Wert außer `none`.
- {{cssxref("mix-blend-mode")}}: Jeder Wert außer `normal`.
- {{cssxref("contain")}}: `paint` und jede andere Eigenschaft/Wert-Kombination, die zu einer Mal-Kontainierung führt. Dies schließt jede Eigenschaft ein, die den Used Value der `contain`-Eigenschaft beeinflusst, wie z. B. `content-visibility: hidden`.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Demonstration der Transformationsstil-Eigenschaft

In diesem Beispiel haben wir einen 3D-Würfel, der mithilfe von Transformationen erstellt wurde. Der übergeordnete Container der Würfelflächen hat standardmäßig `transform-style: preserve-3d` gesetzt, sodass er im 3D-Raum transformiert wird und Sie ihn wie vorgesehen sehen können.

Es gibt auch ein Kontrollkästchen, mit dem Sie zwischen diesem Zustand und `transform-style: flat` umschalten können. Im alternativen Zustand werden die Würfelflächen alle auf die Ebene ihres übergeordneten Containers abgeflacht, und möglicherweise können Sie sie überhaupt nicht sehen, je nach verwendetem Browser.

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
