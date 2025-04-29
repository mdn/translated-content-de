---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
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

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal zu setzen.

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
  - : Die Animation wird keine Stile auf das Ziel anwenden, wenn sie nicht ausgeführt wird. Das Element wird stattdessen mit allen anderen angewendeten CSS-Regeln angezeigt. Dies ist der Standardwert.
- `forwards`

  - : Das Ziel behält die berechneten Werte bei, die vom letzten [Schlüsselbild](/de/docs/Web/CSS/@keyframes) während der Ausführung festgelegt wurden. Das letzte Schlüsselbild hängt vom Wert von {{cssxref("animation-direction")}} und {{cssxref("animation-iteration-count")}} ab:

    | `animation-direction` | `animation-iteration-count` | letztes Schlüsselbild |
    | --------------------- | --------------------------- | --------------------- |
    | `normal`              | gerade oder ungerade        | `100%` oder `to`      |
    | `reverse`             | gerade oder ungerade        | `0%` oder `from`      |
    | `alternate`           | gerade                      | `0%` oder `from`      |
    | `alternate`           | ungerade                    | `100%` oder `to`      |
    | `alternate-reverse`   | gerade                      | `100%` oder `to`      |
    | `alternate-reverse`   | ungerade                    | `0%` oder `from`      |

    Animierte Eigenschaften verhalten sich, als ob sie in einem Set aus [`will-change`](/de/docs/Web/CSS/will-change) enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielobjekt den Stapelkontext bei, nachdem die Animation beendet ist.

- `backwards`

  - : Die Animation wendet die in dem ersten relevanten [Schlüsselbild](/de/docs/Web/CSS/@keyframes) definierten Werte an, sobald sie auf das Ziel angewendet wird und behält diese während der {{cssxref("animation-delay")}}-Periode bei. Das erste relevante Schlüsselbild hängt vom Wert des {{cssxref("animation-direction")}} ab:

    | `animation-direction`              | erstes relevantes Schlüsselbild |
    | ---------------------------------- | ------------------------------- |
    | `normal` oder `alternate`          | `0%` oder `from`                |
    | `reverse` oder `alternate-reverse` | `100%` oder `to`                |

- `both`
  - : Die Animation befolgt die Regeln für sowohl vorwärts als auch rückwärts und erweitert somit die Animationseigenschaften in beide Richtungen.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte auf einer `animation-*` Eigenschaft spezifizieren, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-fill-mode` hat denselben Effekt bei der Erstellung von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fill-Modus setzen

Sie können die Wirkung von `animation-fill-mode` im folgenden Beispiel sehen. Es zeigt, wie Sie die Animation im Endzustand verbleiben lassen können, anstatt zum ursprünglichen Zustand zurückzukehren (was der Standard ist).

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

Sehen Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
