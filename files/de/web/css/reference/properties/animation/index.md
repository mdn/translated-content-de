---
title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`animation`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft wendet eine Animation zwischen Stilen an. Es ist eine Kurzschreibweise für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`animation-delay`](/de/docs/Web/CSS/Reference/Properties/animation-delay)
- [`animation-direction`](/de/docs/Web/CSS/Reference/Properties/animation-direction)
- [`animation-duration`](/de/docs/Web/CSS/Reference/Properties/animation-duration)
- [`animation-fill-mode`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode)
- [`animation-iteration-count`](/de/docs/Web/CSS/Reference/Properties/animation-iteration-count)
- [`animation-name`](/de/docs/Web/CSS/Reference/Properties/animation-name)
- [`animation-play-state`](/de/docs/Web/CSS/Reference/Properties/animation-play-state)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`animation-timing-function`](/de/docs/Web/CSS/Reference/Properties/animation-timing-function)

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

Die `animation`-Eigenschaft wird als eine oder mehrere einzelne Animationen angegeben, die durch Kommas getrennt sind.

Jede einzelne Animation wird wie folgt spezifiziert:

- null, ein oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}} Werts

- null oder ein Vorkommen der folgenden Werte:
  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}}, oder ein {{cssxref("&lt;string&gt;")}} sein kann

> [!NOTE]
> {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, und {{cssxref("animation-range-end")}} sind derzeit nicht in dieser Liste enthalten, da aktuelle Implementierungen nur zurückgesetzt werden. Das bedeutet, dass das Einfügen von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt und zuvor deklarierte `animation-range-start` und `animation-range-end` Werte auf `normal` zurücksetzt. Diese Eigenschaften können jedoch nicht über `animation` gesetzt werden. Wenn Sie [CSS Scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen, müssen Sie diese Eigenschaften deklarieren, nachdem Sie die `animation` Kurzschreibweise deklariert haben, damit sie wirksam wird.

### Werte

- `<single-easing-function>`
  - : Bestimmt den Typ der Übergangs. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile auf das Ziel der Animation vor und nach ihrer Ausführung angewendet werden. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen, und der zweite wird der {{cssxref("animation-delay")}} zugewiesen.

Die Reihenfolge anderer Werte innerhalb jeder Animationsdefinition ist ebenfalls wichtig, um einen {{cssxref("animation-name")}} Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzschreibweise als Wert für eine andere Animations-Eigenschaft als `animation-name` geparst werden kann, wird der Wert zuerst dieser Eigenschaft und nicht `animation-name` zugewiesen. Aus diesem Grund ist die empfohlene Praxis, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten anzugeben, wenn Sie die `animation`-Kurzschreibweise verwenden; dies gilt auch, wenn Sie mehrere, durch Kommas getrennte Animationen mit der `animation`-Kurzschreibweise angeben.

Obwohl ein Animationsname festgelegt werden muss, damit eine Animation angewendet wird, sind alle Werte der `animation`-Kurzschreibweise optional und standardmäßig auf den Ausgangswert für jede Langschreibweise der Animationskomponente eingestellt. Der Initialwert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name` Wert in der `animation`-Kurzschreibweise-Eigenschaft deklariert ist, keine Animation auf eine der Eigenschaften angewendet wird.

Wenn der `animation-duration` Wert in der `animation`-Kurzschreibweise weggelassen wird, ist der Standardwert für diese Eigenschaft `0s`. In diesem Fall wird die Animation immer noch ausgeführt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst), aber keine Animation wird sichtbar sein.

Im Falle des `animation-fill-mode` [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften, als wären sie in einem Satz [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stacking-Kontext erstellt wird, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation abgeschlossen ist.

## Barrierefreiheit

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Bedenken wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für Vestibulär Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen und die [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Vorliebe für reduzierte animierte Erlebnisse geäußert haben.

- [Gestaltung sicherer Webanimationen für Bewegungsempfindlichkeit · Ein Artikel von An A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verstehen des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Die Animation von [CSS Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Eigenschaften wird nicht empfohlen. Die Animation jeglicher Boxmodell-Eigenschaft ist von Natur aus CPU-intensiv; erwägen Sie stattdessen, die [transform](/de/docs/Web/CSS/Reference/Properties/transform) Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne erhebt sich
zum Zentrum des Ansichtsfensters und fällt dann aus dem Sichtfeld.

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

### Animierung mehrerer Eigenschaften

Basierend auf der Sonnensanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne ändert, während sie auf- und untergeht. Die Sonne beginnt dunkelrot, wenn sie unter dem Horizont ist, und wechselt zu einem hellen Orange, wenn sie die Spitze erreicht.

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

### Anwendung mehrerer Animationen

Hier ist eine Sonne, die auf einem hellblauen Hintergrund auf- und untergeht. Die Sonne dreht sich allmählich durch ein Regenbogen von Farben. Das Timing der Sonnensposition und -farbe ist unabhängig.

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

### Kaskadierung mehrerer Animationen

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne springt zwischen den
linken und rechten Seiten des Ansichtsfensters hin und her. Die Sonne bleibt im
Ansichtsfenster, obwohl eine Aufstiegsanimation definiert ist. Die Transform-Eigenschaft der Aufstiegsanimation
wird von der Sprung-Animation 'überschrieben'.

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
