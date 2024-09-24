---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
l10n:
  sourceCommit: 6b62c5d66e283b84ba1f5cbf670fffe72ba05562
---

{{CSSRef}}

Die **`animation-fill-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie eine CSS-Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

Es ist oft praktisch, die Kurzform der Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften gleichzeitig zu setzen.

## Syntax

```css
/* Einzelne Animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Mehrere Animationen */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* Globale Werte */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### Werte

- `none`
  - : Die Animation wird keine Stile auf das Ziel anwenden, wenn sie nicht ausgeführt wird. Stattdessen wird das Element mit allen anderen darauf angewendeten CSS-Regeln dargestellt. Dies ist der Standardwert.
- `forwards`

  - : Das Ziel behält die berechneten Werte, die vom letzten [Keyframe](/de/docs/Web/CSS/@keyframes) während der Ausführung festgelegt wurden. Der letzte Keyframe hängt vom Wert von {{cssxref("animation-direction")}} und {{cssxref("animation-iteration-count")}} ab:

    | `animation-direction` | `animation-iteration-count` | letzter durchlaufener Keyframe |
    | --------------------- | --------------------------- | ----------------------------- |
    | `normal`              | gerade oder ungerade        | `100%` oder `to`              |
    | `reverse`             | gerade oder ungerade        | `0%` oder `from`              |
    | `alternate`           | gerade                      | `0%` oder `from`              |
    | `alternate`           | ungerade                    | `100%` oder `to`              |
    | `alternate-reverse`   | gerade                      | `100%` oder `to`              |
    | `alternate-reverse`   | ungerade                    | `0%` oder `from`              |

    Animierte Eigenschaften verhalten sich, als ob sie in einem Satz [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswerten enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation beendet ist.

- `backwards`

  - : Die Animation wird die Werte, die im ersten relevanten [Keyframe](/de/docs/Web/CSS/@keyframes) definiert sind, anwenden, sobald sie auf das Ziel angewendet wird, und diese während der {{cssxref("animation-delay")}} Zeit beibehalten. Der erste relevante Keyframe hängt vom Wert von {{cssxref("animation-direction")}} ab:

    | `animation-direction`            | erster relevanter Keyframe |
    | -------------------------------- | ------------------------- |
    | `normal` oder `alternate`        | `0%` oder `from`          |
    | `reverse` oder `alternate-reverse` | `100%` oder `to`          |

- `both`
  - : Die Animation wird den Regeln sowohl für forwards als auch backwards folgen und somit die Animationseigenschaften in beide Richtungen erweitern.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Mehrere Animationswerte setzen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-fill-mode` hat dieselbe Wirkung bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitgesteuerten Animationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fill-Modus festlegen

Sie können den Effekt von `animation-fill-mode` im folgenden Beispiel sehen. Es zeigt, wie Sie die Animation im letzten Zustand belassen können, anstatt zum ursprünglichen Zustand (was der Standard ist) zurückzukehren.

#### HTML

```html
<p>Bewegen Sie die Maus über das graue Feld!</p>
<div class="demo">
  <div class="growsandstays">Das wächst und bleibt groß.</div>
  <div class="grows">Das wächst nur.</div>
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

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting fill mode',700,300)}}

Sehen Sie sich [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
