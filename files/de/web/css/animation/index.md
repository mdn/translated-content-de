---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`animation`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Kurzschreibweise für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

{{InteractiveExample("CSS Demo: animation")}}

```css interactive-example-choice
animation: 3s ease-in 1s infinite reverse both running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite alternate slide-in;
```

```css interactive-example-choice
animation: 0.5s linear 1s infinite alternate slide-in;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  margin: 20px;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@keyframes slide-in {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `animation`-Eigenschaft wird als eine oder mehrere Einzelanimationen angegeben, die durch Kommas getrennt sind.

Jede einzelne Animation wird wie folgt angegeben:

- null, eine oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Werts

- null oder ein Vorkommen der folgenden Werte:
  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann

> [!NOTE]
> {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, und {{cssxref("animation-range-end")}} sind derzeit nicht in dieser Liste enthalten, da aktuelle Implementierungen nur Rücksetzaktionen sind. Das bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt und zuvor deklarierte `animation-range-start`- und `animation-range-end`-Werte auf `normal` zurücksetzt. Diese Eigenschaften können jedoch nicht über `animation` festgelegt werden. Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie diese Eigenschaften nach der Deklaration einer `animation`-Kurzschreibweise deklarieren, damit sie wirksam werden.

### Werte

- `<single-easing-function>`
  - : Bestimmt den Typ der Übergangs. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation ausgeführt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung auf das Ziel der Animation angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen, und der zweite wird der {{cssxref("animation-delay")}} zugewiesen.

Die Reihenfolge anderer Werte innerhalb jeder Animationsdefinition ist ebenfalls wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzform als ein Wert für eine Animationseigenschaft außer `animation-name` geparst werden kann, wird der Wert zunächst dieser Eigenschaft und nicht `animation-name` zugewiesen. Aus diesem Grund wird empfohlen, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten anzugeben, wenn die `animation`-Kurzform verwendet wird; dies gilt auch dann, wenn Sie mehrere, durch Kommas getrennte Animationen mit der `animation`-Kurzform angeben.

Obwohl ein Animationsname festgelegt werden muss, damit eine Animation angewendet wird, sind alle Werte der `animation`-Kurzform optional und standardmäßig auf den Anfangswert für jede Langform-`animation`-Komponente eingestellt. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name`-Wert in der `animation`-Kurzform deklariert wird, es keine Animation gibt, die auf eine der Eigenschaften angewendet wird.

Wenn der `animation-duration`-Wert in der `animation`-Kurzform weggelassen wird, wird der Wert dieser Eigenschaft standardmäßig auf `0s` gesetzt. In diesem Fall findet die Animation dennoch statt (die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst), aber es wird keine Animation sichtbar.

Für den `animation-fill-mode`-Wert [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) verhalten sich animierte Eigenschaften so, als wären sie in einem festgelegten [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stapelkontext erstellt wird, behält das Zielobjekt den Stapelkontext bei, nachdem die Animation beendet ist.

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Außerdem können bestimmte Bewegungsarten ein Auslöser für vestibuläre Störungen, Epilepsie sowie Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie die Bereitstellung eines Mechanismus zum Anhalten oder Deaktivieren von Animationen sowie die Verwendung der [Motion-Reduced-Media-Abfrage](/de/docs/Web/CSS/@media/prefers-reduced-motion), um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für weniger animierte Erlebnisse geäußert haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Motion-Reduced-Media-Abfrage | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verstehen des Erfolgs-Kriteriums 2.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS Box Model](/de/docs/Web/CSS/CSS_box_model)-Eigenschaften wird nicht empfohlen. Das Animieren von Eigenschaften des Box-Modells ist von Natur aus rechenintensiv; erwägen Sie stattdessen, die [transform](/de/docs/Web/CSS/transform)-Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einem hellblauen Himmel. Die Sonne steigt
bis zur Mitte des Ansichtsfensters auf und fällt dann außer Sicht.

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

Als Erweiterung der Sonnenanimation aus dem vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne ändert, während sie aufsteigt und untergeht. Die Sonne beginnt dunkelrot, wenn sie unterhalb des Horizonts ist, und ändert sich zu einem hellen Orange, wenn sie den Gipfel erreicht.

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
rotiert allmählich durch ein Spektrum von Farben. Die Zeitabstimmung der
Position und Farbe der Sonne sind unabhängig voneinander.

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

### Mehrfachanimationen kaskadieren

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne springt zwischen den
linken und rechten Seiten des Ansichtsfensters hin und her. Die Sonne bleibt im Ansichtsfenster, obwohl eine Aufstiegsanimation definiert ist. Die Transformations-Eigenschaft der Aufstiegsanimation
wird durch die Sprunganimation 'überschrieben'.

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

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples) für zusätzliche Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
