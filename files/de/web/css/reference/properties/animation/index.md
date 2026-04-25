---
title: "`animation` CSS-Eigenschaft"
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`animation`** [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, und {{cssxref("animation-timeline")}}.

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

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("animation-name")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}

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

### Werte

Eine oder mehrere `<animation>`-Deklarationen, getrennt durch Kommata, wobei jedes `<animation>` folgendes umfasst:

- `<keyframes-name>` oder `none`
  - : Der Name einer {{cssxref("@keyframes")}}-Regel, die die auf ein Element anzuwendende Animation spezifiziert. Der Anfangswert für {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Bestimmt die Dauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Der Wert muss einer der in {{cssxref("animation-duration")}} verfügbaren sein. Der Anfangswert ist `0s`.
- `<easing-function>`
  - : Bestimmt die Art des Übergangs. Der Wert muss einer der in {{cssxref("animation-timing-function")}} verfügbaren sein. Der Anfangswert ist `ease`.
- `<animation-delay>`
  - : Bestimmt die Zeitspanne, die nach dem Anwenden der Animation auf ein Element gewartet werden soll, bevor die Animation beginnt. Der Wert muss einer der in {{cssxref("animation-delay")}} verfügbaren sein. Der Anfangswert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile auf das Ziel der Animation vor und nach deren Ausführung angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Bestimmt die Zeitleiste, die verwendet wird, um den Fortschritt der Animation zu kontrollieren. Der Wert muss einer der in {{cssxref("animation-timeline")}} verfügbaren sein. Der Anfangswert ist `auto`.

## Beschreibung

Die `animation`-Eigenschaft wird als eine oder mehrere einzelne Animationen angegeben, die durch Kommata getrennt sind. Jede `animation` in der Liste der durch Kommata getrennten Animationen legt {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, und {{cssxref("animation-timeline")}} fest. Wenn keine der Komponenten in einer `animation`-Deklaration enthalten ist, wird der Komponentwert auf den Anfangswert der Komponente gesetzt.

### animation-name

Die `<animation-name>`-Komponente jeder Animation ist der Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name`-Wert in der Kurzform `animation` deklariert wird, keine Animation auf irgendeine der Eigenschaften angewendet wird.

Die Reihenfolge anderer Werte innerhalb einer Animationsdefinition ist wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzform als ein Wert für eine andere Animationseigenschaft als `animation-name` geparst werden kann, wird der Wert zuerst auf diese Eigenschaft angewendet und nicht auf `animation-name`. Aus diesem Grund ist die empfohlene Praxis, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten zu spezifizieren, wenn die Kurzform `animation` verwendet wird; dies gilt auch, wenn mehrere, durch Kommata getrennte Animationen mit der Kurzform `animation` spezifiziert werden.

### Zeitwerte

Jede Animation kann null, eins oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Wertes enthalten. Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird {{cssxref("animation-duration")}} zugewiesen, und der zweite {{cssxref("animation-delay")}}.

Wenn kein `animation-duration`-Wert in der `animation`-Kurzform spezifiziert ist, beträgt die Dauer standardmäßig `0s`. In diesem Fall wird die Animation dennoch durchgeführt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event)-Ereignisse werden ausgelöst), aber es ist für den Benutzer keine Animation sichtbar.

### animation-timeline

Die aktuellen Implementierungen von `animation` sind nur Rücksetzbar: Wenn kein `<animation-timeline>` in der `animation`-Kurzform enthalten ist, setzt die Kurzform-Deklaration alle zuvor erklärten `animation-timeline`-Werte auf `auto` zurück.

Standardmäßig ist das `animation-timeline` die [`documentTimeline`](/de/docs/Web/API/DocumentTimeline). Wenn ein Wert enthalten ist, der Benutzeragent jedoch keine `<animation-timeline>`-Werte innerhalb der Kurzform unterstützt, ist die Deklaration ungültig und wird ignoriert.

Dies bedeutet, dass, wenn Sie [CSS-scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen, Sie die `animation-timeline`-Eigenschaft nach dem Deklarieren einer `animation`-Kurzform deklarieren müssen, damit sie wirksam wird.

Alternativ kann das `animation-timeline` innerhalb der `animation`-Kurzform innerhalb eines CSS-{{cssxref("@supports")}}-Blocks verwendet werden, wie zum Beispiel:

```css
@supports (animation: view()) {
  /* CSS for browsers that support setting <animation-timeline> within the animation shorthand */
}
```

### animation-fill-mode und neue Stacking-Kontexte

Im Fall des `animation-fill-mode` [vorwärts](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)-Wertes verhalten sich animierte Eigenschaften, als ob sie in einem Satz {{cssxref("will-change")}}-Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wird, behält das Ziel-Element den Stacking-Kontext bei, nachdem die Animation abgeschlossen ist.

## Barrierefreiheit

Blinkende und blitzende Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegung Auslöser für Vestibularstörrungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Überlegen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren der Animation sowie die Verwendung des [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) bereitzustellen, um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für reduzierte Animationserlebnisse geäußert haben.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS-Boxmodel](/de/docs/Web/CSS/Guides/Box_model)-Eigenschaften wird nicht empfohlen. Das Animieren jeglicher Boxmodell-Eigenschaft ist von Natur aus CPU-intensiv; ziehen Sie stattdessen in Betracht, die [transform](/de/docs/Web/CSS/Reference/Properties/transform)-Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne steigt
bis zur Mitte des Viewports und fällt dann außer Sichtweite.

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

Ergänzend zur Sonnenanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne beim Auf- und Untergang ändert. Die Sonne beginnt unterhalb des Horizonts in dunklem Rot und wechselt zu einem hellen Orange, wenn sie den höchsten Punkt erreicht.

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
dreht sich allmählich durch ein Farbenspektrum. Der Timing der Position der Sonne und die Farbe sind unabhängig.

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

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne hüpft zwischen den
linken und rechten Seiten des Viewports hin und her. Die Sonne bleibt im Viewport, obwohl eine Aufstiegsanimation definiert ist. Die Transform-Eigenschaft der Aufstiegsanimation
wird von der Sprunganimation "überschrieben".

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
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
