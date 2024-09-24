---
title: animation-duration
slug: Web/CSS/animation-duration
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-duration`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Dauer fest, die eine Animation benötigt, um einen Zyklus abzuschließen.

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{ cssxref("animation") }} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

  - : Für zeitbasierte Animationen ist `auto` äquivalent zu einem Wert von `0s` (siehe unten). Für [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) füllt `auto` die gesamte Zeitleiste mit der Animation aus.

- {{cssxref("&lt;time&gt;")}}

  - : Die Zeit, die eine Animation benötigt, um einen Zyklus abzuschließen. Dies kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Der Wert muss positiv oder null sein, und die Einheit ist erforderlich.

    Wenn kein Wert angegeben wird, wird der Standardwert von `0s` verwendet, wobei die Animation dennoch ausgeführt wird (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst). Ob die Animation sichtbar sein wird, wenn die Dauer `0s` beträgt, hängt vom Wert von [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode) ab, wie unten erklärt:

    - Wenn `animation-fill-mode` auf `backwards` oder `both` gesetzt ist, wird das erste Bild der Animation, wie durch `animation-direction` definiert, während des [`animation-delay`](/de/docs/Web/CSS/animation-delay) Countdowns angezeigt.
    - Wenn `animation-fill-mode` auf `forwards` oder `both` gesetzt ist, wird das letzte Bild der Animation, wie durch `animation-direction` definiert, angezeigt, nachdem der `animation-delay` abgelaufen ist.
    - Wenn `animation-fill-mode` auf `none` gesetzt ist, hat die Animation keinen sichtbaren Effekt.

> [!NOTE]
> Negative Werte sind ungültig und führen dazu, dass die Deklaration ignoriert wird. Einige frühe, mit Präfix versehene Implementierungen könnten sie als identisch mit `0s` betrachten.

> [!NOTE]
> Wenn Sie mehrere durch Komma getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie den Animationen in der Reihenfolge zugewiesen, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationseigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) macht es eigentlich keinen Sinn, einen `animation-duration` Wert in Sekunden oder Millisekunden anzugeben. In Tests schien es keinen Einfluss auf Scroll-Fortschrittszeitleisten-Animationen zu haben, während es bei View-Fortschrittszeitleisten-Animationen die Animation näher an das Ende der Zeitleiste zu verschieben schien. Allerdings erfordert Firefox, dass eine `animation-duration` festgelegt wird, damit die Animation erfolgreich angewendet wird. Es wird daher empfohlen, `animation-duration` auf `1ms` zu setzen, damit Animationen in Firefox funktionieren, der Effekt jedoch dadurch nicht zu sehr verändert wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Animationsdauer

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

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
