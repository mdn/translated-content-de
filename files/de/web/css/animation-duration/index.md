---
title: animation-duration
slug: Web/CSS/animation-duration
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-duration`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie lange eine Animation braucht, um einen Zyklus zu vollenden.

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

Es ist oft praktisch, die Kurzschreibweise {{ cssxref("animation") }} zu verwenden, um alle Animationseigenschaften gleichzeitig festzulegen.

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

  - : Bei zeitbasierten Animationen ist `auto` gleichbedeutend mit einem Wert von `0s` (siehe unten). Bei [CSS scrollgesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) füllt `auto` die gesamte Zeitleiste mit der Animation.

- {{cssxref("&lt;time&gt;")}}

  - : Die Zeit, die eine Animation benötigt, um einen Zyklus zu vollenden. Diese kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein, und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert von `0s` verwendet. In diesem Fall wird die Animation dennoch ausgeführt (die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst). Ob die Animation sichtbar ist, wenn die Dauer `0s` beträgt, hängt vom Wert von [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) ab, wie unten erläutert:

    - Wenn `animation-fill-mode` auf `backwards` oder `both` eingestellt ist, wird der erste Frame der Animation gemäß `animation-direction` während des [`animation-delay`](/de/docs/Web/CSS/animation-delay) Countdowns angezeigt.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` eingestellt ist, wird der letzte Frame der Animation gemäß `animation-direction` nach Ablauf der `animation-delay` angezeigt.
    - Wenn `animation-fill-mode` auf `none` eingestellt ist, hat die Animation keinen sichtbaren Effekt.

> [!NOTE]
> Negative Werte sind ungültig, was dazu führt, dass die Deklaration ignoriert wird. Einige frühe, mit Präfixen versehene Implementierungen könnten sie als identisch mit `0s` betrachten.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS scrollgesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) macht es keinen wirklichen Sinn, einen `animation-duration` Wert in Sekunden oder Millisekunden anzugeben. In Tests schien es keinen Einfluss auf Scrollfortschritts-Zeitleistenanimationen zu haben, während es bei Sichten-Fortschritts-Zeitleistenanimationen die Animation näher zum Ende der Zeitleiste zu treiben schien. Firefox erfordert jedoch, dass `animation-duration` gesetzt ist, damit die Animation erfolgreich angewendet wird. Es wird daher empfohlen, `animation-duration` auf `1ms` zu setzen, damit Animationen in Firefox funktionieren, ohne dass der Effekt dadurch zu stark verändert wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Animation-Dauer festlegen

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

Sehen Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
