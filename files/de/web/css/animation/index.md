---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: 6b62c5d66e283b84ba1f5cbf670fffe72ba05562
---

{{CSSRef}}

Die **`animation`** [Kurzschrift](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Kurzschrift für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, und {{cssxref("animation-timeline")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slidein;

/* two animations */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

Die `animation` Eigenschaft wird als eine oder mehrere einzelne Animationen angegeben, die durch Kommas getrennt sind.

Jede einzelne Animation wird wie folgt spezifiziert:

- null, eine oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}} Wertes

- null oder ein Vorkommen der folgenden Werte:

  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}}, oder ein {{cssxref("&lt;string&gt;")}} sein kann

> **Hinweis:** {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, und {{cssxref("animation-range-end")}} sind derzeit nicht in dieser Liste enthalten, da aktuelle Implementierungen nur zurückgesetzt werden können. Dies bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` und zuvor deklarierte `animation-range-start` und `animation-range-end` Werte auf `normal` zurücksetzt, aber diese Eigenschaften können nicht über `animation` gesetzt werden. Bei der Erstellung von [CSS scroll-driven Animations](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie diese Eigenschaften nach der Deklaration einer `animation` Kurzschrift angeben, damit sie wirksam werden.

### Werte

- `<single-easing-function>`
  - : Bestimmt die Art des Übergangs. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile auf das Animationsziel vor und nach der Ausführung angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen und der zweite der {{cssxref("animation-delay")}}.

Auch die Reihenfolge der anderen Werte innerhalb jeder Animationsdefinition ist wichtig, um einen {{cssxref("animation-name")}} Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation` Kurzschrift als Wert für eine Animationseigenschaft außer `animation-name` geparst werden kann, wird der Wert zuerst dieser Eigenschaft zugewiesen und nicht `animation-name`. Aus diesem Grund wird empfohlen, einen Wert für `animation-name` als letzten Wert in einer Werteliste anzugeben, wenn die `animation` Kurzschrift verwendet wird; dies gilt auch dann, wenn mehrere, durch Kommas getrennte Animationen mit der `animation` Kurzschrift angegeben werden.

Auch wenn für das Anwenden einer Animation ein Animationsname festgelegt werden muss, sind alle Werte der `animation` Kurzschrift optional und standardmäßig auf den Anfangswert für jede Langform-`animation` Komponente gesetzt. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass wenn kein `animation-name` Wert in der `animation` Kurzschrift Eigenschaft deklariert wird, keine Animation auf irgendeine der Eigenschaften angewendet wird.

Wenn der `animation-duration` Wert in der `animation` Kurzschrift Eigenschaft weggelassen wird, ist der Standardwert für diese Eigenschaft `0s`. In diesem Fall wird die Animation dennoch ausgeführt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst), aber es wird keine Animation sichtbar sein.

Im Fall des `animation-fill-mode` [vorwärts](/de/docs/Web/CSS/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften so, als ob sie in einem Satz [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswert enthalten sind. Wenn während der Animation ein neuer Stacking-Kontext erstellt wird, behält das Ziel-Element den Stacking-Kontext nach Abschluss der Animation bei.

## Barrierefreiheit

Blinkende und blitzende Animationen können für Menschen mit kognitiven Bedenken wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Arten von Bewegung ein Auslöser für Vestibuläre Störungen, Epilepsie und Migräne sowie Skotopische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen und die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) zu verwenden, um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Vorliebe für reduzierte Animationen haben.

- [Gestaltung von sichereren Web-Animationen für Bewegungssensitivität · Ein Artikel bei An A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Eigenschaften wird nicht empfohlen. Das Animieren von Boxmodell-Eigenschaften ist von Natur aus CPU-intensiv; überlegen Sie, stattdessen die [transform](/de/docs/Web/CSS/transform) Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne steigt
in die Mitte des Ansichtsfensters und fällt dann aus dem Blickfeld.

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

Basierend auf der Sonnenanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne beim Auf- und Untergang ändert. Die Sonne beginnt dunkelrot, wenn sie unterhalb des Horizonts ist und wechselt zu einem leuchtenden Orange, wenn sie die Spitze erreicht.

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
dreht sich allmählich durch ein Regenbogenspektrum von Farben. Das Timing der Position und der Farbe der Sonne sind unabhängig voneinander.

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

### Kaskadierende Mehrfachanimationen

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne prallt zwischen den
linken und rechten Seiten des Ansichtsfensters hin und her. Die Sonne bleibt im Ansichtsfenster, obwohl eine Aufstiegsanimation definiert ist. Die Transformations-Eigenschaft der Aufstiegsanimation wird von der bounce Animation "überschrieben".

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

Sehen Sie [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples) für zusätzliche Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
