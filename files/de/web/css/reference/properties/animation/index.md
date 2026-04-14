---
title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 7972cd926c2feb93bfc155d05aadd54786a7f66b
---

Die **`animation`**-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) der [CSS](/de/docs/Web/CSS)-Eigenschaft wendet eine Animation zwischen Stilen an. Es ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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

## Konstituierende Eigenschaften

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

Eine oder mehrere einzelne `<animation>`-Deklarationen, getrennt durch Kommas, wobei jede `<animation>` Folgendes enthält:

- `<keyframes-name>` oder `none`
  - : Der Name eines {{cssxref("@keyframes")}}-Regelsatzes, der spezifiziert, welche Animation auf ein Element angewendet werden soll. Der anfängliche Wert für {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Bestimmt die Zeitspanne, die eine Animation benötigt, um einen Zyklus abzuschließen. Der Wert muss einer der verfügbaren in {{cssxref("animation-duration")}} sein. Der anfängliche Wert ist `0s`.
- `<easing-function>`
  - : Bestimmt die Art der Übergangsfunktion. Der Wert muss einer der verfügbaren in {{cssxref("animation-timing-function")}} sein. Der anfängliche Wert ist `ease`.
- `<animation-delay>`
  - : Bestimmt die Zeitspanne, die abgewartet wird, bevor die Animation auf ein Element angewendet wird. Der Wert muss einer der verfügbaren in {{cssxref("animation-delay")}} sein. Der anfängliche Wert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der verfügbaren in {{cssxref("animation-direction")}} sein. Der anfängliche Wert für {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der verfügbaren in {{cssxref("animation-iteration-count")}} sein. Der anfängliche Wert für {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung der Animation auf das Ziel der Animation angewendet werden. Der Wert muss einer der verfügbaren in {{cssxref("animation-fill-mode")}} sein. Der anfängliche Wert für {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der verfügbaren in {{cssxref("animation-play-state")}} sein. Der anfängliche Wert für {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Bestimmt die Zeitlinie, die zur Steuerung des Fortschritts der Animation verwendet wird. Der Wert muss einer der verfügbaren in {{cssxref("animation-timeline")}} sein. Der anfängliche Wert ist `auto`.

## Beschreibung

Die `animation`-Eigenschaft wird als eine oder mehrere einzelne Animationen angegeben, getrennt durch Kommas. Jede `animation` innerhalb der durch Kommas getrennten Liste von Animationen legt die Werte von {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}} fest. Wenn einer der Komponenten in einer `animation`-Deklaration nicht enthalten ist, wird der Wert der Komponente auf den Anfangswert der Komponente gesetzt.

### animation-name

Die `<animation-name>`-Komponente jeder Animation ist der Name der Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann. Der anfängliche Wert von `animation-name` ist `none`, was bedeutet, dass wenn kein `animation-name`-Wert in der `animation`-Kurzformeigenschaft deklariert ist, keine Animation auf irgendeine der Eigenschaften angewendet wird.

Die Reihenfolge der anderen Werte innerhalb einer Animationsdefinition ist wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzform als ein Wert für eine andere Animationseigenschaft als `animation-name` geparst werden kann, wird der Wert zuerst auf diese Eigenschaft angewendet und nicht auf `animation-name`. Aus diesem Grund wird empfohlen, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten bei Verwendung der `animation`-Kurzform anzugeben; dies gilt auch, wenn Sie mehrere, durch Kommas getrennte Animationen mit der `animation`-Kurzform angeben.

### Zeitwerte

Jede Animation kann null, ein oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Werts enthalten. Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen, und der zweite wird der {{cssxref("animation-delay")}} zugewiesen.

Wenn kein `animation-duration`-Wert in der `animation`-Kurzform-Eigenschaft angegeben ist, beträgt die Dauer standardmäßig `0s`. In diesem Fall findet die Animation dennoch statt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Events werden ausgelöst), aber es wird dem Benutzer keine Animation sichtbar sein.

### animation-timeline

Die aktuellen Implementierungen von `animation` sind nur zum Zurücksetzen: Wenn kein `<animation-timeline>` in der `animation`-Kurzform enthalten ist, wird die Kurzform-Deklaration alle zuvor deklarierten `animation-timeline`-Werte auf `auto` zurücksetzen.

Standardmäßig ist die `animation-timeline` die [`documentTimeline`](/de/docs/Web/API/DocumentTimeline). Wenn ein Wert enthalten ist, aber der Benutzeragent `<animation-timeline>`-Werte innerhalb der Kurzform nicht unterstützt, ist die Deklaration ungültig und wird ignoriert.

Dies bedeutet, dass Sie beim Erstellen von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die `animation-timeline` Eigenschaft nach jeder `animation`-Kurzform-Deklaration angeben müssen, damit sie wirksam wird.

Alternativ kann die `animation-timeline` innerhalb der `animation`-Kurzform in einem CSS {{cssxref("@supports")}}-Block verwendet werden, zum Beispiel:

```css
@supports (animation: view()) {
  /* CSS for browsers that support setting <animation-timeline> within the animation shorthand */
}
```

### animation-fill-mode und neue Stacking-Kontexte

Im Falle des `animation-fill-mode` [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften so, als wären sie in einem Wert der Eigenschaft {{cssxref("will-change")}} enthalten. Wenn während der Animation ein neuer Stacking-Kontext erstellt wird, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation abgeschlossen ist.

## Barrierefreiheit

Blinkende und flimmernde Animationen können problematisch für Personen mit kognitiven Problemen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und Scotopic Sensitivity sein.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung von [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für reduzierte Animationserlebnisse angegeben haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel auf A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in Media Query zur Reduzierung von Bewegungen | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegungen | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Die Animation von [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)-Eigenschaften wird nicht empfohlen. Die Animation einer Box-Modell-Eigenschaft ist an sich rechnerintensiv; erwägen Sie stattdessen die Animation der [transform](/de/docs/Web/CSS/Reference/Properties/transform)-Eigenschaft.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne steigt
zum Zentrum des Ansichtsfensters auf und sinkt dann außer Sicht.

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

Ergänzend zur Sonnenanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne beim Auf- und Untergang ändert. Die Sonne beginnt dunkelrot, wenn sie unter dem Horizont ist, und ändert sich zu einem leuchtenden Orange, wenn sie die Spitze erreicht.

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
dreht sich allmählich durch ein Regenbogenspektrum von Farben. Der Zeitablauf der Position und Farbe der Sonne sind unabhängig.

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

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne springt zwischen den
linken und rechten Seiten des Ansichtsfensters. Die Sonne bleibt im Ansichtsfenster, obwohl eine Aufstiegsanimation definiert ist. Die Transform-Eigenschaft der Aufstiegsanimation
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
