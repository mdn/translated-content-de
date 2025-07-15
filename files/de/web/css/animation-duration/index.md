---
title: animation-duration
slug: Web/CSS/animation-duration
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`animation-duration`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Dauer fest, die eine Animation benötigt, um einen Zyklus abzuschließen.

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
  border: 5px solid #333;
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
"use strict";

window.addEventListener("load", () => {
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
});
```

Es ist oft praktisch, die Kurzschreibweise {{ cssxref("animation") }} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

- `auto`
  - : Für zeitbasierte Animationen entspricht `auto` einem Wert von `0s` (siehe unten). Für [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) füllt `auto` die gesamte Zeitleiste mit der Animation aus.

- {{cssxref("&lt;time&gt;")}}
  - : Die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Diese kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein, und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert von `0s` verwendet. In diesem Fall wird die Animation dennoch ausgeführt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst). Ob die Animation bei einer Dauer von `0s` sichtbar ist, hängt vom Wert von [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) ab, wie unten erläutert:
    - Wenn `animation-fill-mode` auf `backwards` oder `both` gesetzt ist, wird während des [`animation-delay`](/de/docs/Web/CSS/animation-delay) Countdowns der erste Frame der Animation angezeigt, wie durch `animation-direction` definiert.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` gesetzt ist, wird nach Ablauf der `animation-delay` der letzte Frame der Animation angezeigt, wie durch `animation-direction` definiert.
    - Wenn `animation-fill-mode` auf `none` gesetzt ist, hat die Animation keinen sichtbaren Effekt.

> [!NOTE]
> Negative Werte sind ungültig und führen dazu, dass die Deklaration ignoriert wird. Einige frühe, mit Präfix versehene Implementierungen könnten sie als identisch mit `0s` betrachten.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte in einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerteigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS scrollgesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) macht es wenig Sinn, einen `animation-duration` Wert in Sekunden oder Millisekunden anzugeben. In Tests schien es keinen Effekt auf Zeitleistenanimationen des Scrollfortschritts zu haben, während es bei Ansichtsfortschritts-Zeitleistenanimationen die Animation am Ende der Zeitleiste zu geschehen schien. Allerdings erfordert Firefox, dass ein `animation-duration` gesetzt ist, damit die Animation erfolgreich angewendet wird. Es wird daher empfohlen, `animation-duration` auf `1ms` einzustellen, damit die Animationen in Firefox funktionieren, der Effekt aber nicht zu sehr verändert wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Animationdauer festlegen

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

Fahren Sie mit der Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting animation duration","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
