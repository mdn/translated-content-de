---
title: "`animation-fill-mode` CSS property"
short-title: animation-fill-mode
slug: Web/CSS/Reference/Properties/animation-fill-mode
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`animation-fill-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie eine CSS-Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

Diese Eigenschaft wird als mit Komma getrennte Liste der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Die Animation wendet keine Stile auf das Ziel an, wenn sie nicht ausgeführt wird. Das Element wird stattdessen mit allen anderen darauf angewendeten CSS-Regeln angezeigt. Dies ist der Standardwert.
- `forwards`
  - : Das Ziel behält die berechneten Werte bei, die vom letzten während der Ausführung aufgetretenen [keyframe](/de/docs/Web/CSS/Reference/At-rules/@keyframes) festgelegt werden. Das letzte Keyframe hängt vom Wert von {{cssxref("animation-direction")}} und {{cssxref("animation-iteration-count")}} ab:

    | `animation-direction` | `animation-iteration-count` | Aufgetretenes letztes Keyframe |
    | --------------------- | --------------------------- | ------------------------------ |
    | `normal`              | gerade oder ungerade        | `100%` oder `to`               |
    | `reverse`             | gerade oder ungerade        | `0%` oder `from`               |
    | `alternate`           | gerade                      | `0%` oder `from`               |
    | `alternate`           | ungerade                    | `100%` oder `to`               |
    | `alternate-reverse`   | gerade                      | `100%` oder `to`               |
    | `alternate-reverse`   | ungerade                    | `0%` oder `from`               |

    Animierte Eigenschaften verhalten sich, als wären sie in einem festgelegten {{cssxref("will-change")}} Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext bei, nachdem die Animation beendet ist.

- `backwards`
  - : Die Animation wendet die in der ersten relevanten [keyframe](/de/docs/Web/CSS/Reference/At-rules/@keyframes) definierten Werte an, sobald sie auf das Ziel angewendet wird, und behält diese während der {{cssxref("animation-delay")}}-Periode bei. Das erste relevante Keyframe hängt vom Wert von {{cssxref("animation-direction")}} ab:

    | `animation-direction`              | Erstes relevantes Keyframe |
    | ---------------------------------- | -------------------------- |
    | `normal` oder `alternate`          | `0%` oder `from`           |
    | `reverse` oder `alternate-reverse` | `100%` oder `to`           |

- `both`
  - : Die Animation folgt den Regeln sowohl für vorwärts als auch rückwärts und erweitert so die Animationseigenschaften in beide Richtungen.

> [!NOTE]
> Wenn Sie mehrere kommaseparierte Werte bei einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> `animation-fill-mode` hat denselben Effekt beim Erstellen von [CSS Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) wie bei normalen zeitbasierten Animationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fill-Mode einstellen

In dem folgenden Beispiel können Sie den Effekt von `animation-fill-mode` sehen. Es zeigt, wie Sie die Animation in ihrem Endzustand halten können, anstatt zum ursprünglichen Zustand zurückzukehren (was der Standard ist).

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
  border-top: 100px solid #cccccc;
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

Siehe [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
