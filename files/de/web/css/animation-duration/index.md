---
title: animation-duration
slug: Web/CSS/animation-duration
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-duration`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Zeitspanne fest, die eine Animation benötigt, um einen Zyklus abzuschließen.

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

Es ist oft praktisch, die Kurzschreibweise {{ cssxref("animation") }} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

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

  - : Bei zeitbasierten Animationen entspricht `auto` einem Wert von `0s` (siehe unten). Bei [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) füllt `auto` die gesamte Zeitleiste mit der Animation.

- {{cssxref("&lt;time&gt;")}}

  - : Die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert `0s` verwendet, in diesem Fall wird die Animation dennoch ausgeführt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst). Ob die Animation sichtbar sein wird, wenn die Dauer `0s` beträgt, hängt von dem Wert von [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) ab, wie unten erklärt:

    - Wenn `animation-fill-mode` auf `backwards` oder `both` gesetzt ist, wird der erste Frame der Animation, wie durch `animation-direction` definiert, während des [`animation-delay`](/de/docs/Web/CSS/animation-delay) Countdowns angezeigt.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` gesetzt ist, wird der letzte Frame der Animation, wie durch `animation-direction` definiert, nach dem Ablauf des `animation-delay` angezeigt.
    - Wenn `animation-fill-mode` auf `none` gesetzt ist, hat die Animation keinen sichtbaren Effekt.

> [!NOTE]
> Negative Werte sind ungültig und führen dazu, dass die Deklaration ignoriert wird. Einige frühe, prae fixierte Implementierungen könnten sie als identisch mit `0s` betrachten.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) macht es wenig Sinn, einen `animation-duration` Wert in Sekunden oder Millisekunden anzugeben. In Tests schien es keine Auswirkung auf Scrollfortschritts-Zeitleistenanimationen zu haben, während es bei Ansichtsfortschritts-Zeitleistenanimationen die Animation näher an das Ende der Zeitleiste zu schieben schien. Firefox erfordert jedoch, dass ein `animation-duration` festgelegt wird, damit die Animation erfolgreich angewendet werden kann. Es wird daher empfohlen, `animation-duration` auf `1ms` einzustellen, damit Animationen in Firefox funktionieren, ohne dass der Effekt dadurch zu stark verändert wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Animationsdauer

Diese Animation hat eine animation-duration von 0.7 Sekunden.

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

Weitere Beispiele finden Sie unter [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
