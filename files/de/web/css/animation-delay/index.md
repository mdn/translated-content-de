---
title: animation-delay
slug: Web/CSS/animation-delay
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`animation-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie lange gewartet werden soll, nachdem eine Animation auf ein Element angewendet wurde, bevor die Animation beginnt. Die Animation kann später, direkt von ihrem Anfang oder sofort und teilweise während der Animation starten.

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
  border: 5px solid #333;
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
"use strict";

window.addEventListener("load", () => {
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
});
```

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

  - : Der Zeitversatz ab dem Moment, in dem die Animation auf das Element angewendet wird, zu dem sie beginnen soll. Dieser kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Die Einheit ist erforderlich.

    Ein positiver Wert gibt an, dass die Animation nach Ablauf der angegebenen Zeitspanne beginnen soll. Ein Wert von `0s`, der Standardwert, gibt an, dass die Animation beginnen soll, sobald sie angewendet wird.

    Ein negativer Wert führt dazu, dass die Animation sofort beginnt, jedoch teilweise während ihres Zyklus. Wenn Sie zum Beispiel `-1s` als Animationsverzögerungszeit angeben, beginnt die Animation sofort, jedoch 1 Sekunde in die Animationssequenz hinein. Wenn Sie einen negativen Wert für die Animationsverzögerung angeben, jedoch der Startwert implizit ist, wird der Startwert ab dem Moment genommen, in dem die Animation auf das Element angewendet wird.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE] > `animation-delay` hat keine Auswirkungen auf [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

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

Fahren Sie mit der Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

Sehen Sie sich [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
