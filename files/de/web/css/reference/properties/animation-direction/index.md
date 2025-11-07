---
title: animation-direction
slug: Web/CSS/Reference/Properties/animation-direction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`animation-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation vorwärts, rückwärts oder abwechselnd vorwärts und rückwärts abgespielt werden soll.

{{InteractiveExample("CSS Demo: animation-direction")}}

```css interactive-example-choice
animation-direction: normal;
```

```css interactive-example-choice
animation-direction: reverse;
```

```css interactive-example-choice
animation-direction: alternate;
```

```css interactive-example-choice
animation-direction: alternate-reverse;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
  <button id="play-pause">Play</button>
</section>
```

```css interactive-example
#example-element {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-play-state: paused;
  animation-timing-function: ease-in;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#example-element.running {
  animation-play-state: running;
}

#play-pause {
  font-size: 2rem;
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
const button = document.getElementById("play-pause");

button.addEventListener("click", () => {
  if (el.classList.contains("running")) {
    el.classList.remove("running");
    button.textContent = "Play";
  } else {
    el.classList.add("running");
    button.textContent = "Pause";
  }
});
```

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

## Syntax

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### Werte

- `normal`
  - : Die Animation spielt _vorwärts_ in jedem Zyklus. Mit anderen Worten, jedes Mal, wenn die Animation zyklisch läuft, wird die Animation auf den Anfangszustand zurückgesetzt und beginnt von neuem. Dies ist der Standardwert.
- `reverse`
  - : Die Animation spielt _rückwärts_ in jedem Zyklus. Mit anderen Worten, jedes Mal, wenn die Animation zyklisch läuft, wird die Animation auf den Endzustand zurückgesetzt und beginnt von neuem. Animationsschritte werden rückwärts ausgeführt und auch die Beschleunigungsfunktionen werden umgekehrt. Beispielsweise wird eine `ease-in`-Beschleunigungsfunktion zu `ease-out`.
- `alternate`
  - : Die Animation kehrt die Richtung in jedem Zyklus um, wobei die erste Iteration _vorwärts_ abgespielt wird. Die Zählung zur Bestimmung, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.
- `alternate-reverse`
  - : Die Animation kehrt die Richtung in jedem Zyklus um, wobei die erste Iteration _rückwärts_ abgespielt wird. Die Zählung zur Bestimmung, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.

> [!NOTE]
> Wenn mehrere kommagetrennte Werte auf einer `animation-*`-Eigenschaft angegeben werden, werden sie auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und die `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) funktioniert das Festlegen eines `animation-direction` wie erwartet, zum Beispiel bewirkt `reverse`, dass die Animation im Verlauf des Zeitstrahls umgekehrt abläuft. Ein Wert von `alternate` (in Kombination mit einem {{cssxref("animation-iteration-count")}}) verursacht, dass die Animation vorwärts und rückwärts läuft, wenn der Zeitstrahl fortschreitet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehrung der Animationsrichtung

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
  animation-direction: reverse;
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

{{EmbedLiveSample("Reversing the animation direction","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
