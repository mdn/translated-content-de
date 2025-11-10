---
title: animation-iteration-count
slug: Web/CSS/Reference/Properties/animation-iteration-count
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`animation-iteration-count`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie oft eine Animationsfolge abgespielt werden soll, bevor sie stoppt.

{{InteractiveExample("CSS Demo: animation-iteration-count")}}

```css interactive-example-choice
animation-iteration-count: 0;
```

```css interactive-example-choice
animation-iteration-count: 2;
```

```css interactive-example-choice
animation-iteration-count: 1.5;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Select a count to start!</div>
</section>
```

```css interactive-example
#example-element {
  align-items: center;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#play-status {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
const el = document.getElementById("example-element");
const status = document.getElementById("play-status");

function update() {
  status.textContent = "delaying";
  el.className = "";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      el.className = "animating";
    });
  });
}

el.addEventListener("animationstart", () => {
  status.textContent = "playing";
});

el.addEventListener("animationend", () => {
  status.textContent = "finished";
});

const observer = new MutationObserver(() => {
  update();
});

observer.observe(el, {
  attributes: true,
  attributeFilter: ["style"],
});

update();
```

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

## Syntax

```css
/* Keyword value */
animation-iteration-count: infinite;

/* <number> values */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Multiple values */
animation-iteration-count: 2, 0, infinite;

/* Global values */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: revert-layer;
animation-iteration-count: unset;
```

Die **`animation-iteration-count`**-Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben.

### Werte

- `infinite`
  - : Die Animation wird endlos wiederholt.
- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Wiederholungen der Animation; dies ist standardmäßig `1`. Sie können nicht-ganzzahlige Werte angeben, um einen Teil eines Animationszyklus abzuspielen: zum Beispiel wird `0.5` die Hälfte des Animationszyklus abspielen. Negative Werte sind ungültig.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, bei denen die Anzahl der Animationen und `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerteeigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) bewirkt eine Angabe von `animation-iteration-count`, dass die Animation über den Verlauf der Zeitachsen-Entwicklung so oft wiederholt wird. Wenn keine `animation-iteration-count` angegeben wird, tritt die Animation nur einmal auf. `infinite` ist ein gültiger Wert für scroll-gesteuerte Animationen, führt jedoch zu einer Animation, die nicht funktioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Iterationsanzahl

Diese Animation wird 10 Mal ausgeführt.

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: 10;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### Ergebnis

Bewegen Sie die Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting iteration count","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
