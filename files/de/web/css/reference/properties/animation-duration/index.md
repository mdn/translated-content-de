---
title: animation-duration
slug: Web/CSS/Reference/Properties/animation-duration
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-duration`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Zeitdauer fest, die eine Animation benötigt, um einen Zyklus zu vollenden.

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

Es ist oft praktisch, die Kurzschrift-Eigenschaft {{ cssxref("animation") }} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

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
  - : Für zeitbasierte Animationen ist `auto` gleichbedeutend mit einem Wert von `0s` (siehe unten). Für [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) füllt `auto` die gesamte Zeitleiste mit der Animation.

- {{cssxref("&lt;time&gt;")}}
  - : Die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert von `0s` verwendet, wobei die Animation dennoch ausgeführt wird (die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst). Ob die Animation bei einer Dauer von `0s` sichtbar sein wird, hängt vom Wert des [`animation-fill-mode`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode) ab, wie unten erklärt:
    - Wenn `animation-fill-mode` auf `backwards` oder `both` gesetzt ist, wird der erste Frame der Animation, wie durch `animation-direction` definiert, während des Countdowns von [`animation-delay`](/de/docs/Web/CSS/Reference/Properties/animation-delay) angezeigt.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` gesetzt ist, wird der letzte Frame der Animation, wie durch `animation-direction` definiert, nach Ablauf der `animation-delay` angezeigt.
    - Wenn `animation-fill-mode` auf `none` gesetzt ist, hat die Animation keinen sichtbaren Effekt.

> [!NOTE]
> Negative Werte sind ungültig und führen dazu, dass die Deklaration ignoriert wird. Einige frühe, mit Präfix versehene Implementierungen könnten sie als identisch zu `0s` betrachten.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und die `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) macht es nicht wirklich Sinn, einen `animation-duration`-Wert in Sekunden oder Millisekunden anzugeben. In Tests schien es keinen Einfluss auf Zeitleisten-Animationen zu haben, während es bei Ansichtsfortschritt-Zeitleisten-Animationen die Animation dazu zu bringen schien, näher am Ende der Zeitleiste zu erfolgen. Firefox benötigt jedoch eine Einstellung der `animation-duration`, damit die Animation erfolgreich angewendet wird. Es wird daher empfohlen, `animation-duration` auf `1ms` zu setzen, damit die Animationen in Firefox funktionieren, ohne den Effekt allzu sehr zu ändern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Animationsdauer

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

Fahren Sie mit dem Mauszeiger über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting animation duration","100%","250")}}

Weitere Beispiele finden Sie unter [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
