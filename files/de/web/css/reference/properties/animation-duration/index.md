---
title: "`animation-duration` CSS property"
short-title: animation-duration
slug: Web/CSS/Reference/Properties/animation-duration
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-duration`** legt die Zeitspanne fest, die eine Animation benötigt, um einen Zyklus abzuschließen.

Es ist oft praktisch, die Kurzform-Eigenschaft {{ cssxref("animation") }} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

{{InteractiveExample("CSS Demo: animation-duration")}}

```css interactive-example-choice
animation-duration: 750ms;
```

```css interactive-example-choice
animation-duration: 3s;
```

```css interactive-example-choice
animation-duration: 0s;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
  <button id="play-pause">Play</button>
</section>
```

```css interactive-example
#example-element {
  animation-direction: alternate;
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

## Syntax

```css
/* Single animation */
animation-duration: auto; /* Default */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* Global values */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: revert-layer;
animation-duration: unset;
```

### Werte

Diese Eigenschaft wird als durch Kommas getrennte Liste der folgenden Werte angegeben:

- `auto`
  - : Bei zeitbasierten Animationen entspricht `auto` einem Wert von `0s` (siehe unten). Bei [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) füllt `auto` die gesamte Timeline mit der Animation.

- {{cssxref("&lt;time&gt;")}}
  - : Die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Sie kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein, und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert `0s` verwendet. In diesem Fall wird die Animation trotzdem ausgeführt (die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst). Ob die Animation bei einer Dauer von `0s` sichtbar ist oder nicht, hängt vom Wert von {{cssxref("animation-fill-mode")}} ab, wie unten erläutert:
    - Wenn `animation-fill-mode` auf `backwards` oder `both` gesetzt ist, wird während des Countdowns von {{cssxref("animation-delay")}} das erste Frame der Animation angezeigt, wie durch `animation-direction` definiert.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` gesetzt ist, wird nach Ablauf von `animation-delay` das letzte Frame der Animation angezeigt, wie durch `animation-direction` definiert.
    - Wenn `animation-fill-mode` auf `none` gesetzt ist, hat die Animation keinen sichtbaren Effekt.

> [!NOTE]
> Negative Werte sind ungültig, wodurch die Deklaration ignoriert wird. Einige frühe Implementierungen mit Präfix behandeln sie möglicherweise als identisch mit `0s`.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Informationen zu Situationen, in denen die Anzahl der Animationen und der Werte der `animation-*`-Eigenschaft nicht übereinstimmt, finden Sie unter [Festlegen mehrerer Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) ergibt die Angabe eines `animation-duration`-Werts in Sekunden oder Millisekunden nicht wirklich Sinn. In Tests schien dies bei Scroll-Fortschritts-Timeline-Animationen keine Auswirkung zu haben, während es bei View-Fortschritts-Timeline-Animationen die Animation anscheinend näher an das Ende der Timeline verschob. Firefox erfordert jedoch, dass ein `animation-duration` gesetzt ist, damit die Animation erfolgreich angewendet wird. Es wird daher empfohlen, `animation-duration` auf `1ms` zu setzen, damit Animationen in Firefox funktionieren, ohne dass der Effekt dadurch zu stark verändert wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Animationsdauer festlegen

Diese Animation hat eine `animation-duration` von 0,7 Sekunden.

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

{{EmbedLiveSample("Setting animation duration","100%","250")}}

Weitere Beispiele finden Sie unter [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Weitere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
