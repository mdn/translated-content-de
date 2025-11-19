---
title: animation-delay
slug: Web/CSS/Reference/Properties/animation-delay
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`animation-delay`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, wie lange abgewartet wird, nachdem die Animation auf ein Element angewendet wurde, bevor mit der Ausführung der Animation begonnen wird. Die Animation kann später, sofort ab ihrem Anfang oder sofort und mitten in der Animation beginnen.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

{{InteractiveExample("CSS Demo: animation-delay")}}

```css interactive-example-choice
animation-delay: 250ms;
```

```css interactive-example-choice
animation-delay: 2s;
```

```css interactive-example-choice
animation-delay: -2s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Select a delay to start!</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#play-status {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: 2;
  animation-direction: alternate;
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

## Syntax

```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;

/* Global values */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### Werte

- {{cssxref("&lt;time&gt;")}}
  - : Der Zeitversatz, ab dem Zeitpunkt, zu dem die Animation auf das Element angewendet wird, an dem die Animation beginnen soll. Dies kann in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Die Einheit ist erforderlich.

    Ein positiver Wert gibt an, dass die Animation nach Ablauf der angegebenen Zeit beginnen soll. Ein Wert von `0s`, der Standardwert, gibt an, dass die Animation beginnen soll, sobald sie angewendet wird.

    Ein negativer Wert bewirkt, dass die Animation sofort beginnt, jedoch mitten in ihrem Zyklus. Wenn Sie beispielsweise `-1s` als Animationsverzögerungszeit angeben, beginnt die Animation sofort, jedoch 1 Sekunde nach Beginn der Animationssequenz. Wenn Sie einen negativen Wert für die Animationsverzögerung angeben, aber der Startwert implizit ist, wird der Startwert vom Moment an genommen, zu dem die Animation auf das Element angewendet wird.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s auftreten. Für Situationen, in denen die Anzahl der Animationen und `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> `animation-delay` hat keine Auswirkung auf [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen einer Animationsverzögerung

Diese Animation hat eine Verzögerung von 2 Sekunden.

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
  animation-delay: 2s;
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

Bewegen Sie den Mauszeiger über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
