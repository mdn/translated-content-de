---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`animation-fill-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie eine CSS-Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.

{{InteractiveExample("CSS Demo: animation-fill-mode")}}

```css interactive-example-choice
animation-fill-mode: none;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: forwards;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: backwards;
animation-delay: 1s;
```

```css interactive-example-choice
animation-fill-mode: both;
animation-delay: 1s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="play-status"></span></div>
  <div id="example-element">Select a mode to start!</div>
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
  animation: slide 1s ease-in 1;
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

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

## Syntax

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* Global values */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### Werte

- `none`
  - : Die Animation wird keine Stile auf das Ziel anwenden, wenn sie nicht ausgeführt wird. Das Element wird stattdessen unter Verwendung anderer darauf angewendeter CSS-Regeln angezeigt. Dies ist der Standardwert.
- `forwards`

  - : Das Ziel behält die berechneten Werte bei, die vom letzten [keyframe](/de/docs/Web/CSS/@keyframes) während der Ausführung festgelegt wurden. Das letzte Keyframe hängt vom Wert von {{cssxref("animation-direction")}} und {{cssxref("animation-iteration-count")}} ab:

    | `animation-direction` | `animation-iteration-count` | zuletzt ermitteltes Keyframe |
    | --------------------- | --------------------------- | ---------------------------- |
    | `normal`              | gerade oder ungerade        | `100%` oder `to`             |
    | `reverse`             | gerade oder ungerade        | `0%` oder `from`             |
    | `alternate`           | gerade                      | `0%` oder `from`             |
    | `alternate`           | ungerade                    | `100%` oder `to`             |
    | `alternate-reverse`   | gerade                      | `100%` oder `to`             |
    | `alternate-reverse`   | ungerade                    | `0%` oder `from`             |

    Animierte Eigenschaften verhalten sich, als ob sie in einem Set [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Ziel-Element den Stacking-Kontext nach Abschluss der Animation bei.

- `backwards`

  - : Die Animation wendet die in dem ersten relevanten [keyframe](/de/docs/Web/CSS/@keyframes) definierten Werte sofort an, sobald sie auf das Ziel angewendet wird, und behält diese während der {{cssxref("animation-delay")}}-Periode bei. Das erste relevante Keyframe hängt vom Wert von {{cssxref("animation-direction")}} ab:

    | `animation-direction`              | erstes relevantes Keyframe |
    | ---------------------------------- | -------------------------- |
    | `normal` oder `alternate`          | `0%` oder `from`           |
    | `reverse` oder `alternate-reverse` | `100%` oder `to`           |

- `both`
  - : Die Animation folgt den Regeln für sowohl Vorwärts als auch Rückwärts, wodurch die Animationseigenschaften in beide Richtungen erweitert werden.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte auf einer `animation-*` Eigenschaft angeben, werden sie auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationseigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE] > `animation-fill-mode` hat bei der Erstellung von [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations) den gleichen Effekt wie bei regulären zeitbasierten Animationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Fill-Modus

Sie können den Effekt von `animation-fill-mode` im folgenden Beispiel sehen. Es zeigt, wie Sie die Animation in ihrem Endzustand verbleiben lassen können, anstatt zum ursprünglichen Zustand zurückzukehren (was der Standard ist).

#### HTML

```html
<p>Move your mouse over the gray box!</p>
<div class="demo">
  <div class="grows-and-stays">This grows and stays big.</div>
  <div class="grows">This just grows.</div>
</div>
```

#### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .grows-and-stays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting fill mode',700,300)}}

Weitere Beispiele finden Sie unter [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
