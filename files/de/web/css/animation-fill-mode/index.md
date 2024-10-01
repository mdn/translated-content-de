---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
l10n:
  sourceCommit: 6b62c5d66e283b84ba1f5cbf670fffe72ba05562
---

{{CSSRef}}

Die **`animation-fill-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie eine CSS-Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

Es ist oft bequem, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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
  - : Die Animation wird keine Stile auf das Ziel anwenden, wenn sie nicht ausgeführt wird. Das Element wird stattdessen mit allen anderen darauf angewendeten CSS-Regeln angezeigt. Dies ist der Standardwert.
- `forwards`

  - : Das Ziel behält die berechneten Werte bei, die vom letzten während der Ausführung aufgetretenen [Keyframe](/de/docs/Web/CSS/@keyframes) festgelegt wurden. Der letzte Keyframe hängt vom Wert von {{cssxref("animation-direction")}} und {{cssxref("animation-iteration-count")}} ab:

    | `animation-direction` | `animation-iteration-count` | letzter Keyframe aufgetreten |
    | --------------------- | --------------------------- | ---------------------------- |
    | `normal`              | gerade oder ungerade        | `100%` oder `to`             |
    | `reverse`             | gerade oder ungerade        | `0%` oder `from`             |
    | `alternate`           | gerade                      | `0%` oder `from`             |
    | `alternate`           | ungerade                    | `100%` oder `to`             |
    | `alternate-reverse`   | gerade                      | `100%` oder `to`             |
    | `alternate-reverse`   | ungerade                    | `0%` oder `from`             |

    Animierte Eigenschaften verhalten sich, als ob sie in einem [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext bei, nachdem die Animation abgeschlossen ist.

- `backwards`

  - : Die Animation wird die in dem ersten relevanten [Keyframe](/de/docs/Web/CSS/@keyframes) definierten Werte anwenden, sobald sie auf das Ziel angewendet wird, und dies während der {{cssxref("animation-delay")}} Periode beibehalten. Der erste relevante Keyframe hängt vom Wert von {{cssxref("animation-direction")}} ab:

    | `animation-direction`              | erster relevanter Keyframe |
    | ---------------------------------- | -------------------------- |
    | `normal` oder `alternate`          | `0%` oder `from`           |
    | `reverse` oder `alternate-reverse` | `100%` oder `to`           |

- `both`
  - : Die Animation folgt den Regeln sowohl für `forwards` als auch für `backwards` und erweitert somit die Animationseigenschaften in beide Richtungen.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerteigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-fill-mode` hat denselben Effekt bei der Erstellung von [CSS-scroll-basierten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fill-Modus einstellen

Sie können die Wirkung von `animation-fill-mode` im folgenden Beispiel sehen. Es demonstriert, wie Sie die Animation im Endzustand verbleiben lassen können, anstatt zum ursprünglichen Zustand zurückzukehren (was der Standard ist).

#### HTML

```html
<p>Move your mouse over the gray box!</p>
<div class="demo">
  <div class="growsandstays">This grows and stays big.</div>
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

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting fill mode',700,300)}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
