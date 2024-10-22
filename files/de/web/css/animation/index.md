---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`animation`** [Shorthand-](/de/docs/Web/CSS/Shorthand_properties) [CSS-](/de/docs/Web/CSS) Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`animation-delay`](/de/docs/Web/CSS/animation-delay)
- [`animation-direction`](/de/docs/Web/CSS/animation-direction)
- [`animation-duration`](/de/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/de/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/de/docs/Web/CSS/animation-name)
- [`animation-play-state`](/de/docs/Web/CSS/animation-play-state)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`animation-timing-function`](/de/docs/Web/CSS/animation-timing-function)

## Syntax

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slide-in;

/* two animations */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

Die `animation`-Eigenschaft wird als eine oder mehrere einzelne Animationen angegeben, getrennt durch Kommas.

Jede einzelne Animation wird wie folgt spezifiziert:

- null, eine oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}} Wertes

- null oder ein Vorkommen der folgenden Werte:

  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann

> **Note:** {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} sind derzeit nicht in dieser Liste enthalten, da aktuelle Implementierungen nur zurückgesetzt werden können. Das bedeutet, dass das Einschließen von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` und zuvor deklarierte `animation-range-start` und `animation-range-end` Werte auf `normal` zurücksetzt, aber diese Eigenschaften können nicht über `animation` gesetzt werden. Wenn Sie [scroll-gesteuerte CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) erstellen, müssen Sie diese Eigenschaften nach der Deklaration einer `animation`-Kurzform deklarieren, damit sie wirksam wird.

### Werte

- `<single-easing-function>`
  - : Bestimmt die Art des Übergangs. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Durchläufe der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in die die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung auf das Ziel der Animation angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} analysiert werden kann, wird dem {{cssxref("animation-duration")}} zugewiesen, und der zweite dem {{cssxref("animation-delay")}}.

Die Reihenfolge der anderen Werte innerhalb jeder Animationsdefinition ist ebenfalls wichtig, um einen {{cssxref("animation-name")}} Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzform als Wert für eine Animations-Eigenschaft außer `animation-name` analysiert werden kann, wird der Wert zuerst auf diese Eigenschaft und nicht auf `animation-name` angewendet. Aus diesem Grund wird empfohlen, den Wert für `animation-name` als letzten Wert in einer Liste von Werten anzugeben, wenn Sie die `animation`-Kurzform verwenden; dies gilt auch, wenn Sie mehrere, durch Kommas getrennte Animationen mit der `animation`-Kurzform angeben.

Obwohl ein Animationsname festgelegt werden muss, damit eine Animation angewendet wird, sind alle Werte der `animation`-Kurzform optional und standardmäßig auf den Anfangswert für jede Langform `animation`-Komponente. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name` Wert in der `animation`-Kurzform-Eigenschaft deklariert wird, keine Animation auf eine der Eigenschaften angewendet wird.

Wenn der `animation-duration` Wert in der `animation`-Kurzform-Eigenschaft weggelassen wird, wird der Wert für diese Eigenschaft auf `0s` standardisiert. In diesem Fall wird die Animation dennoch erfolgen (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst), aber keine Animation wird sichtbar sein.

Im Falle des `animation-fill-mode` [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften so, als ob sie in einem gesetzten [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wird, behält das Ziel-Element den Stapelkontext nach dem Abschluss der Animation bei.

## Barrierefreiheit

Blinkende und aufflackernde Animationen können problematisch für Menschen mit kognitiven Anliegen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie fototoxische Empfindlichkeit sein.

Überlegen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für reduzierte Animationen geäußert haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegungen | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verstehen des Erfolgskriteriums 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Die Animation von [CSS Box Model](/de/docs/Web/CSS/CSS_box_model) Eigenschaften wird nicht empfohlen. Das Animieren einer Box-Model-Eigenschaft ist von Natur aus CPU-intensiv; überlegen Sie, stattdessen die [transform](/de/docs/Web/CSS/transform) Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne erhebt
sich zur Mitte der Ansicht und fällt dann aus dem Blickfeld.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* hides any part of the sun below the horizon */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* centers the sun in the background */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* creates a circular background */
  height: 100vh; /* makes the sun the size of the viewport */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* pushes the sun down past the viewport */
    transform: translateY(110vh);
  }
  to {
    /* returns the sun to its default position */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('Sun_Rise')}}

### Mehrere Eigenschaften animieren

Aufbauend auf die Sonnenanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne beim Auf- und Untergang ändert. Die Sonne beginnt dunkelrot, wenn sie unter dem Horizont ist, und wechselt zu einem hellen Orange, wenn sie den höchsten Punkt erreicht.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* it is possible to animate multiple properties in a single animation */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* unset properties i.e. 'filter' will revert to default values */
  }
}
```

{{EmbedLiveSample('Animating Multiple Properties')}}

### Mehrere Animationen anwenden

Hier ist eine Sonne, die auf einem hellblauen Hintergrund auf- und untergeht. Die Sonne
rotiert allmählich durch ein Regenbogenspektrum. Die Timing von
Position und Farbe der Sonne sind unabhängig.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* multiple animations are separated by commas, each animation's parameters are set independently */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('Applying Multiple Animations')}}

### Überlappende mehrere Animationen

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne prallt zwischen den
linken und rechten Seiten des Ansichtsfensters. Die Sonne bleibt im Ansichtsfenster, obwohl
eine Aufstiegsanimation definiert ist. Die Transform-Eigenschaft der Aufstiegsanimation
wird von der Bounce-Animation 'überschrieben'.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    animations declared later in the cascade will override the
    properties of previously declared animations
  */
  /* bounce 'overwrites' the transform set by rise, hence the sun only moves horizontally */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('Cascading Multiple Animations')}}

Weitere Beispiele finden Sie unter [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
