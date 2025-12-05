---
title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`animation`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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
  border: 5px solid #333333;
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

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("animation-timing-function")}}

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

Die `animation` Eigenschaft wird als eine oder mehrere einzelne Animationen spezifiziert, getrennt durch Kommata.

Jede individuelle Animation wird wie folgt spezifiziert:

- null, ein oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}} Wertes

- null oder ein Vorkommen der folgenden Werte:
  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann

> [!NOTE]
> {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, und {{cssxref("animation-range-end")}} sind momentan nicht in dieser Liste enthalten, da aktuelle Implementierungen nur zurückgesetzt werden können. Das bedeutet, dass `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` und zuvor deklarierte `animation-range-start` und `animation-range-end` Werte auf `normal` zurücksetzt, aber diese Eigenschaften nicht über `animation` gesetzt werden können. Wenn Sie [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen, müssen Sie diese Eigenschaften nach der Deklaration eines `animation` Shorthands deklarieren, damit sie wirksam werden.

### Werte

- `<single-easing-function>`
  - : Bestimmt den Übergangstyp. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in die die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie die Stile auf das Animationsziel vor und nach der Ausführung angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen, und der zweite wird der {{cssxref("animation-delay")}} zugewiesen.

Die Reihenfolge der anderen Werte innerhalb jeder Animationsdefinition ist ebenfalls wichtig, um einen {{cssxref("animation-name")}} Wert von anderen Werten zu unterscheiden. Wenn ein Wert im `animation` Shorthand als Wert für eine Animationseigenschaft geparst werden kann, die nicht `animation-name` ist, wird der Wert zuerst auf diese Eigenschaft angewendet und nicht auf `animation-name`. Aus diesem Grund ist es die empfohlene Praxis, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten anzugeben, wenn Sie das `animation` Shorthand verwenden, auch wenn Sie mehrere, durch Komma getrennte Animationen mit dem `animation` Shorthand angeben.

Während ein Animationsname festgelegt werden muss, damit eine Animation angewendet wird, sind alle Werte des `animation` Shorthands optional und standardmäßig auf den Anfangswert für jede Langform-`animation`-Komponente gesetzt. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name` Wert im `animation` Shorthand angegeben wird, keine Animation auf eine der Eigenschaften angewendet wird.

Wenn der `animation-duration` Wert im `animation` Shorthand weggelassen wird, ist der Wert für diese Eigenschaft standardmäßig `0s`. In diesem Fall wird die Animation dennoch stattfinden (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst), aber es wird keine sichtbare Animation angezeigt.

Im Falle des `animation-fill-mode` [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften so, als ob sie in einem {{cssxref("will-change")}} Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wird, behält das Ziel-Element den Stacking-Kontext bei, nachdem die Animation abgeschlossen ist.

## Barrierefreiheit

Blinkende und blitzende Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Bewegungen Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie skotopische Empfindlichkeit sein.

Überlegen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren der Animation bereitzustellen, und verwenden Sie die [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für reduzierte Animationserlebnisse angegeben haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein A List Apart Artikel](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegungen | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verstehen der WCAG, Erläuterungen zu Leitlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgs-Kriteriums 2.2.2 | W3C Verstehen der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Eigenschaften wird nicht empfohlen. Das Animieren jeder Box-Modell-Eigenschaft ist inhärent CPU-intensiv; ziehen Sie in Betracht, stattdessen die [transform](/de/docs/Web/CSS/Reference/Properties/transform) Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne steigt in die Mitte des Viewports und fällt dann aus dem Sichtfeld.

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

### Animieren mehrerer Eigenschaften

Aufbauend auf der Sonnenanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne beim Auf- und Untergang ändert. Die Sonne beginnt dunkelrot, wenn sie unter dem Horizont ist, und wechselt zu einem hellen Orange, wenn sie den höchsten Punkt erreicht.

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

### Anwenden mehrerer Animationen

Hier ist eine Sonne, die auf einem hellblauen Hintergrund auf- und untergeht. Die Sonne dreht sich allmählich durch ein Regenbogen von Farben. Das Timing der Position und Farbe der Sonne ist unabhängig.

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

### Überlappende Mehrfach-Animationen

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne springt zwischen den linken und rechten Seiten des Viewports hin und her. Die Sonne bleibt im Viewport, obwohl eine Steiganimations definiert ist. Die Transform-Eigenschaft der Steiganimation wird von der Sprunganimation "überschrieben".

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

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#examples) für zusätzliche Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
