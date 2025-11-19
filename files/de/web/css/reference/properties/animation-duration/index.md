---
title: animation-duration
slug: Web/CSS/Reference/Properties/animation-duration
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`animation-duration`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Länge der Zeit fest, die eine Animation benötigt, um einen Zyklus zu vollenden.

Es ist oft praktisch, die Kurzschrift-Eigenschaft {{ cssxref("animation") }} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

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

- `auto`
  - : Bei zeitbasierten Animationen entspricht `auto` einem Wert von `0s` (siehe unten). Bei [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) füllt `auto` die gesamte Timeline mit der Animation.

- {{cssxref("&lt;time&gt;")}}
  - : Die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Diese kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein, und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert von `0s` verwendet, in welchem Fall die Animation dennoch ausgeführt wird (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst). Ob die Animation sichtbar ist, wenn die Dauer `0s` beträgt, hängt vom Wert von [`animation-fill-mode`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode) ab, wie unten erklärt:
    - Wenn `animation-fill-mode` auf `backwards` oder `both` gesetzt ist, wird der erste Frame der Animation wie in `animation-direction` definiert während des [`animation-delay`](/de/docs/Web/CSS/Reference/Properties/animation-delay) Countdown angezeigt.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` gesetzt ist, wird der letzte Frame der Animation, wie in `animation-direction` definiert, nach Ablauf des `animation-delay` angezeigt.
    - Wenn `animation-fill-mode` auf `none` gesetzt ist, hat die Animation keine sichtbare Wirkung.

> [!NOTE]
> Negative Werte sind ungültig und führen dazu, dass die Deklaration ignoriert wird. Einige frühe, mit Präfix versehene Implementierungen könnten sie als identisch mit `0s` behandeln.

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte in einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) macht es wenig Sinn, einen `animation-duration` Wert in Sekunden oder Millisekunden anzugeben. In Tests schien es keinen Einfluss auf Scroll-Fortschritt-Timeline-Animationen zu haben, während es bei Darstellungs-Fortschritt-Timeline-Animationen die Animation ans Ende der Timeline verschob. Firefox erfordert jedoch, dass eine `animation-duration` gesetzt ist, damit die Animation erfolgreich angewendet wird. Daher wird empfohlen, `animation-duration` auf `1ms` zu setzen, damit Animationen in Firefox funktionieren, aber der Effekt nicht zu stark verändert wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Animationsdauer festlegen

Diese Animation hat eine Animationsdauer von 0,7 Sekunden.

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

Siehe [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
