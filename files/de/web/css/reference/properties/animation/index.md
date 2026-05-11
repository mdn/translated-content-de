---
title: "`animation` CSS-Eigenschaft"
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 8fbdeb7fdee69284a6423044f24b8b4a7140028f
---

Die **`animation`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Shorthand für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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
  - : Der Name eines {{cssxref("@keyframes")}}-Attributs, das die Animation spezifiziert, die auf ein Element angewendet wird. Der Anfangswert für {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Bestimmt die Zeitdauer, die eine Animation benötigt, um einen Zyklus abzuschließen. Der Wert muss einer der verfügbaren in {{cssxref("animation-duration")}} sein. Der Anfangswert ist `0s`.
- `<easing-function>`
  - : Bestimmt die Art der Übergänge. Der Wert muss einer der verfügbaren in {{cssxref("animation-timing-function")}} sein. Der Anfangswert ist `ease`.
- `<animation-delay>`
  - : Bestimmt die Wartezeit ab Anwendungsbeginn der Animation auf ein Element, bevor die Ausführung der Animation beginnt. Der Wert muss einer der verfügbaren in {{cssxref("animation-delay")}} sein. Der Anfangswert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der verfügbaren in {{cssxref("animation-direction")}} sein. Der Anfangswert für {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der verfügbaren in {{cssxref("animation-iteration-count")}} sein. Der Anfangswert für {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile auf das Ziel der Animation vor und nach ihrer Ausführung angewendet werden sollen. Der Wert muss einer der verfügbaren in {{cssxref("animation-fill-mode")}} sein. Der Anfangswert für {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der verfügbaren in {{cssxref("animation-play-state")}} sein. Der Anfangswert für {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Bestimmt die Zeitleiste, die zur Steuerung des Fortschritts der Animation verwendet wird. Der Wert muss einer der verfügbaren in {{cssxref("animation-timeline")}} sein. Der Anfangswert ist `auto`.

## Beschreibung

Die `animation`-Eigenschaft wird als eine oder mehrere einzelne Animationen spezifiziert, getrennt durch Kommas. Jede `animation` innerhalb der kommagetrennten Liste von Animationen bestimmt die {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}. Wenn eine der Komponenten in einer `animation`-Deklaration nicht enthalten ist, wird der Komponentenwert auf den initialen Wert der Komponente gesetzt.

### animation-name

Die `<animation-name>`-Komponente jeder Animation ist der Name der Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name`-Wert in der `animation`-Shorthand-Eigenschaft deklariert wird, keine Animation auf irgendeine der Eigenschaften angewendet wird.

Die Reihenfolge der anderen Werte innerhalb einer Animationsdefinition ist wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Shorthand als Wert für eine andere Animationseigenschaft als `animation-name` geparst werden kann, wird der Wert zuerst auf diese Eigenschaft und nicht auf `animation-name` angewendet. Aus diesem Grund ist es empfohlen, den Wert für `animation-name` als letzten Wert in einer Liste von Werten zu spezifizieren, wenn die `animation`-Shorthand verwendet wird; das gilt auch dann, wenn mehrere, kommagetrennte Animationen mit der `animation`-Shorthand spezifiziert werden.

### Zeitwerte

Jede Animation kann null, einen oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Wertes enthalten. Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen, und der zweite wird der {{cssxref("animation-delay")}} zugewiesen.

Wenn kein `animation-duration`-Wert in der `animation`-Shorthand-Eigenschaft angegeben wird, wird die Dauer standardmäßig auf `0s` gesetzt. In diesem Fall findet die Animation dennoch statt (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst), aber keine Animation wird für den Benutzer sichtbar sein.

### animation-timeline

Wenn keine `<animation-timeline>` in der `animation`-Shorthand enthalten ist, setzt die Shorthand-Deklaration alle zuvor deklarierten `animation-timeline`-Werte auf `auto`, wodurch die Zeitleiste auf die Standard-[`documentTimeline`](/de/docs/Web/API/DocumentTimeline) gesetzt wird.

Wenn ein `<animation-timeline>`-Wert enthalten ist, der User-Agent jedoch keine `<animation-timeline>`-Werte innerhalb der Shorthand unterstützt, ist die gesamte `animation`-Deklaration ungültig und wird ignoriert. Aus diesem Grund muss bei der Erstellung von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die `animation-timeline`-Eigenschaft nach der Deklaration von irgendeiner `animation`-Shorthand deklariert werden, damit sie wirksam wird.

Alternativ kann die `<animation-timeline>` innerhalb der `animation`-Shorthand in einem CSS-{{cssxref("@supports")}}-Block gesetzt werden, wie zum Beispiel:

```css
@supports (animation: view()) {
  /* CSS for browsers supporting <animation-timeline> within `animation` shorthand */
}
```

### animation-fill-mode und neue Stapelkontexte

Im Fall des `animation-fill-mode` [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)-Wertes verhalten sich die animierten Eigenschaften, als ob sie in einer Menge von {{cssxref("will-change")}}-Eigenschaften enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wird, behält das Zielelement den Stapelkontext bei, nachdem die Animation abgeschlossen ist.

## Barrierefreiheit

Blinkende und blitzende Animationen können problematisch für Personen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Außerdem können bestimmte Arten von Bewegungen ein Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie skotopische Empfindlichkeit sein.

Es ist ratsam, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen und die [reduced motion `@media`-Abfrage](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Vorliebe für reduzierte animierte Erlebnisse geäußert haben.

- [Designing Safer Web Animation For Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) über A List Apart (2015)
- [An Introduction to the Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/) über CSS-Tricks (2017)
- [Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/) über WebKit (2017)
- [Understanding WCAG, Guideline 2.2 — Enough Time: Provide users enough time to read and use content](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding WCAG Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) über W3C (2026)

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Es wird davon abgeraten, Eigenschaften des [CSS-Boxmodells](/de/docs/Web/CSS/Guides/Box_model) zu animieren, da dies zu Layout-Neuberechnungen und Neuzeichnungen führt. Das Animieren von Boxmodell-Eigenschaften ist an sich CPU-intensiv; es wird empfohlen, stattdessen die [transform](/de/docs/Web/CSS/Reference/Properties/transform)-Eigenschaft zu animieren.

### Grundlegende Anwendung: ein Sonnenaufgang

In diesem Beispiel demonstrieren wir die grundlegende Anwendung der `animation`-Shorthand, indem wir eine gelbe Sonne über einem hellblauen Himmel animieren. Die Sonne steigt in die Mitte des Ansichtsbereichs und verschwindet dann aus dem Sichtfeld.

#### HTML

Wir fügen ein einzelnes {{htmlelement("div")}}-Element hinzu, um unsere Sonne darzustellen.

```html
<div class="sun"></div>
```

#### CSS

Wir beginnen mit der Erstellung der Sonne und des Himmels. Der Himmel ist die {{cssxref(":root")}} des HTML-Dokuments. Wir verbergen alle Inhalte, die außerhalb des Ansichtsbereichs liegen, was in unserem Fall jeder Teil der Sonne unterhalb des Horizonts ist, indem wir das {{cssxref("overflow")}} auf hidden setzen. Wir verwenden auch die {{cssxref("justify-content")}}-Eigenschaft, um die Sonne im Hintergrund zu zentrieren. Wir färben die Sonne gelb, deklarieren ihre {{cssxref("height")}} als die Höhe des Ansichtsbereichs (`100vh`) und setzen ihre Breite auf die gleiche Höhe, indem wir das {{cssxref("aspect-ratio")}} auf `1` setzen. Wir verwandeln das quadratische `<div>` in einen Kreis mithilfe der {{cssxref("border-radius")}}-Eigenschaft.

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
  aspect-ratio: 1;
  animation: 4s linear 0s infinite alternate sunrise;
}
```

Als Nächstes definieren wir einige Animations-{{cssxref("@keyframes")}}, die das Element, auf das sie angewendet werden, über den Ansichtsbereich hinaus schieben und dann das Element in seine Ausgangsposition zurückbringen, indem [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) verwendet werden:

```css
@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

Der letzte Schritt besteht darin, die Animation anzuwenden! Wir verwenden die `animation`-Shorthand-Eigenschaft, um die `sunrise`-Keyframe-Animation auf das `.sun` `<div>` anzuwenden. Die Animation ist eingestellt, unendlich oft zu laufen, wobei jede Iteration 4 Sekunden dauert; die Animationsrichtung wechselt mit jeder Iteration:

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### Ergebnisse

{{EmbedLiveSample('Basic usage: a sunrise')}}

### Anwendung mehrerer Animationen

Dieses Beispiel zeigt, wie mehrere Animationen auf ein einzelnes Element angewendet werden können. Aufbauend auf dem vorherigen Beispiel mit einer Sonne, die über einem hellblauen Hintergrund auf- und untergeht, werden wir hier die Sonne allmählich durch einen Regenbogen von Farben rotieren lassen. Die Zeitsteuerung der Position und der Farbe der Sonne sind unabhängig voneinander.

```html hidden
<div class="sun"></div>
```

```css hidden
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
}

@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

Wir verwenden das gleiche HTML und CSS wie im vorherigen Beispiel und fügen eine zweite Reihe von Animations-`@keyframes` hinzu, um einen {{cssxref("filter")}} anzuwenden, der den Farbton durch alle möglichen Werte mit der [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) Filterfunktion rotieren lässt:

```css
@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

Dann wenden wir die beiden Animationen auf unsere Sonne an. Mehrere Animationen sind durch Kommas getrennt, und die Parameter jeder Animation werden unabhängig festgelegt:

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying multiple animations')}}

### Kaskadieren mehrerer Animationen

Dieses Beispiel demonstriert, was passiert, wenn mehrere Animationen Werte für die gleiche Eigenschaft definieren. Dieses Beispiel erweitert das [Grundlegende Anwendung](#basic_usage_a_sunrise)-Beispiel, wobei zwei Animationen angewendet werden, die beide einen {{cssxref("transform")}}-Wert setzen.

```html hidden
<div class="sun"></div>
```

```css hidden
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
}
```

Wir verwenden das gleiche HTML und CSS wie im ersten Beispiel, einschließlich der Original-`sunrise`-Animation und einer zweiten Animation namens `bounce`. Die beiden Animationen deklarieren Werte für die gleiche Eigenschaft:

```css
@keyframes sunrise {
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

Wir wenden beide Animationen auf die Sonne an. Wenn zwei Animationen unterschiedliche Werte für die gleiche Eigenschaft anwenden, überschreiben die später in der Kaskade deklarierten Animationen die zuvor deklarierten Animationen. In diesem Fall "gewinnt" der `transform`-Wert der `bounce`-Animation die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade) und überschreibt die von `sunrise` gesetzte Transformation, sodass sich die Sonne nur horizontal bewegt.

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### Ergebnisse

{{EmbedLiveSample('Cascading Multiple Animations')}}

Die Sonne bewegt sich zwischen den linken und rechten Seiten des Ansichtsbereichs. Die Sonne bleibt innerhalb des Ansichtsbereichs, obwohl die `sunrise`-Animation definiert ist. Die `transform`-Eigenschaft der `sunrise`-Animation wird von der `bounce`-Animation überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript-[`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-API
