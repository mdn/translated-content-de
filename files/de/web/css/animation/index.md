---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: 6b62c5d66e283b84ba1f5cbf670fffe72ba05562
---

{{CSSRef}}

Die **`animation`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft wendet eine Animation zwischen Stilen an. Es ist eine Kurzschreibweise für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Zusammengesetzte Eigenschaften

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
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slidein;

/* two animations */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

Die `animation`-Eigenschaft wird als eine oder mehrere Einzelanimationen, durch Kommas getrennt, angegeben.

Jede einzelne Animation wird wie folgt spezifiziert:

- null, ein oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Wertes

- null oder ein Vorkommen der folgenden Werte:

  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann

> **Note:** {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} sind derzeit nicht in dieser Liste enthalten, da aktuelle Implementierungen nur zurücksetzbar sind. Das bedeutet, dass das Hinzufügen von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt und zuvor deklarierte `animation-range-start`- und `animation-range-end`-Werte auf `normal`, aber diese Eigenschaften können nicht über `animation` festgelegt werden. Wenn Sie [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) erstellen, müssen Sie diese Eigenschaften nach der Deklaration einer `animation`-Kurzschreibweise angeben, damit sie wirksam wird.

### Werte

- `<single-easing-function>`
  - : Bestimmt die Art des Übergangs. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung auf das Ziel der Animation angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} analysiert werden kann, wird der {{cssxref("animation-duration")}} zugeordnet, und der zweite wird {{cssxref("animation-delay")}} zugeordnet.

Die Reihenfolge der anderen Werte innerhalb jeder Animationsdefinition ist ebenfalls wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzschreibweise als Wert für eine andere Animationseigenschaft als `animation-name` analysiert werden kann, wird der Wert zunächst auf diese Eigenschaft angewendet und nicht auf `animation-name`. Aus diesem Grund wird empfohlen, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten anzugeben, wenn die `animation`-Kurzschreibweise verwendet wird; dies gilt auch dann, wenn Sie mehrere, durch Komma getrennte Animationen mit der `animation`-Kurzschreibweise angeben.

Während ein Animationsname gesetzt werden muss, damit eine Animation angewendet wird, sind alle Werte der `animation`-Kurzschreibweise optional und standardmäßig auf den Anfangswert für jede Langform-Komponente von `animation` gesetzt. Der Anfangswert von `animation-name` ist `none`, was bedeutet, wenn im `animation`-Kurzschreibweise keine `animation-name`-Wert angegeben wird, es keine Animation gibt, die auf irgendeine der Eigenschaften angewendet werden kann.

Wenn der `animation-duration`-Wert aus der `animation`-Kurzschreibweise weggelassen wird, wird der Wert dieser Eigenschaft auf `0s` gesetzt. In diesem Fall wird die Animation trotzdem ablaufen (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event)- und [`animationEnd`](/de/docs/Web/API/Element/animationend_event)-Ereignisse werden ausgelöst), aber keine Animation wird sichtbar sein.

Im Fall des `animation-fill-mode` [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards)-Werts verhalten sich animierte Eigenschaften, als ob sie in einem `will-change`-Eigenschaftenwert enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wird, behält das Zielelement den Stapelkontext nach Beendigung der Animation bei.

## Barrierefreiheit

Blinkende und flackernde Animationen können problematisch für Personen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für Vestibulärstörungen, Epilepsie und Migräne sowie Skotopische Empfindlichkeit sein.

Es sollte in Betracht gezogen werden, eine Möglichkeit zum Anhalten oder Deaktivieren der Animation bereitzustellen sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Vorliebe für reduzierte Animationen haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN-Verständnis der WCAG, Erklärung der Richtlinie 2.2](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Eigenschaften wird nicht empfohlen. Das Animieren einer Boxmodelleigenschaft ist von Natur aus CPU-intensiv; ziehen Sie stattdessen in Betracht, die [transform](/de/docs/Web/CSS/transform)-Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Sie steigt zum Zentrum des Ansichtsfensters und fällt dann aus dem Blickfeld.

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

In Anknüpfung an das Sonnen-Animation aus dem vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne beim Auf- und Untergang ändert. Die Sonne beginnt dunkelrot, wenn sie unterhalb des Horizonts ist, und wechselt zu einem hellen Orange, wenn sie ihren höchsten Punkt erreicht.

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

Hier ist eine Sonne, die auf einem hellblauen Hintergrund auf- und untergeht. Die Sonne dreht sich allmählich durch ein Regenbogenfarben. Der Zeitablauf der Position und Farbe der Sonne sind unabhängig.

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

### Mehrere Animationen kaskadieren

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne springt zwischen den linken und rechten Seiten des Ansichtsfensters hin und her. Die Sonne bleibt im Ansichtsfenster, obwohl eine Aufstiegsanimation definiert ist. Die `transform`-Eigenschaft der Aufstiegsanimation wird von der Sprunganimation "überschrieben".

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

Weitere Beispiele finden Sie unter [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
