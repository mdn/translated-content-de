---
title: "`animation-delay` CSS property"
short-title: animation-delay
slug: Web/CSS/Reference/Properties/animation-delay
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`animation-delay`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Wartezeit an, die vom Anwenden der Animation auf ein Element bis zum Beginn der Animation vergeht. Die Animation kann später starten, sofort von Beginn an oder sofort in der Mitte der Animation.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

Diese Eigenschaft wird als durch Kommas getrennte Liste von `<time>`-Werten angegeben:

- {{cssxref("&lt;time&gt;")}}
  - : Der Zeitversatz ab dem Moment, in dem die Animation auf das Element angewendet wird, zu dem die Animation beginnen soll. Dies kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Die Einheit ist erforderlich.

    Ein positiver Wert gibt an, dass die Animation nach Ablauf der angegebenen Zeit beginnen soll. Ein Wert von `0s`, welcher der Standardwert ist, gibt an, dass die Animation sofort beginnen soll, sobald sie angewendet wird.

    Ein negativer Wert führt dazu, dass die Animation sofort, aber mitten in ihrem Zyklus beginnt. Zum Beispiel, wenn Sie `-1s` als Animationsverzögerungszeit angeben, beginnt die Animation sofort, wird jedoch 1 Sekunde in die Animationssequenz hinein starten. Wenn Sie einen negativen Wert für die Animationsverzögerung angeben, aber der Startwert implizit ist, wird der Startwert vom Moment genommen, in dem die Animation auf das Element angewendet wird.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen von mehreren Animations-Eigenschaftswerten](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> `animation-delay` hat keine Auswirkung auf [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer Animationsverzögerung

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

Fahren Sie mit der Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
