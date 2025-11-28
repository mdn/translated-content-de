---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: f6b253c16e6b1b9fe568c082a6f9f9bbd18a1c5d
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

## Syntax

```css
/* Keyword */
animation-timeline: none;
animation-timeline: auto;

/* Named timeline */
animation-timeline: --timeline_name;

/* Anonymous scroll progress timeline */
animation-timeline: scroll();
animation-timeline: scroll(x root);

/* Anonymous view progress timeline */
animation-timeline: view();
animation-timeline: view(inline);
animation-timeline: view(x 200px auto);

/* Multiple values */
animation-timeline: --progress-bar-timeline, --carousel-timeline;
animation-timeline: auto, view(20% 80%), none, scroll(inline nearest);

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Werte

Die `animation-timeline`-Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben, von denen jeder einer der folgenden sein kann:

- `none`
  - : Die Animation ist nicht mit einer Zeitleiste verbunden, und es erfolgt keine Animation.

- `auto`
  - : Die Zeitleiste der Animation ist die standardmäßige [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das `root`-Element, den nächsten `scroller` oder `self` als anonyme Scroll-Fortschrittszeitleiste und optional die Scrolldirection des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert den nächsten Vorfahren-Scrollcontainer als anonyme View-Fortschrittszeitleiste, wobei optional die Standardrichtung der `baseline`-Achse und die `auto`-Start- und Endeinlagen überschrieben werden.

- `<dashed-ident>`
  - : Der Name einer Scroll-gesteuerten oder View-Fortschrittszeitleiste, wie sie durch die `scroll-timeline-name`- oder `view-timeline-name`-Eigenschaft des Scrollcontainers definiert ist (oder die `scroll-timeline` oder `view-timeline`-Kurzschreibweise).

## Beschreibung

Die Standardzeitleiste für eine CSS-Keyframe-Animation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die `animation-timeline`-Eigenschaft kann verwendet werden, um eine benannte oder anonyme Scroll-Fortschritts- oder View-Fortschrittszeitleiste festzulegen. Alternativ kann sie verwendet werden, um die standardmäßige zeitbasierte Dokumentzeitleiste explizit einzustellen, um den Fortschritt der Animation eines Elements zu steuern oder um überhaupt keine Zeitleiste zu haben, in diesem Fall wird das Element nicht animiert.

Die folgenden Arten von Zeitleisten können über die `animation-timeline` festgelegt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die Standard-Dokumentzeitleiste, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist, und wird mit einem Wert von `auto` ausgewählt oder indem kein `animation-timeline`-Wert angegeben wird, da dies der Standardwert ist.
- [Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation wird durch das horizontale oder vertikale Scrollen eines scrollbaren Elements oder `scroller` fortgesetzt. Das Element, das die Scroll-Fortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
    - [Benannte Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird explizit benannt, indem die `scroll-timeline-name`-Eigenschaft (oder die `scroll-timeline`-Kurzschreibweise) auf einen `<dashed-ident>` gesetzt wird; dieser `<dashed-ident>`-Name wird dann als Wert der `animation-timeline`-Eigenschaft festgelegt.
    - [Anonyme Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die `animation-timeline`-Eigenschaft des zu animierenden Elements wird auf die `scroll()`-Funktion gesetzt. Die zwei optionalen Parameter der Funktion definieren den Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, und die zu verwendende Scrollachse.
- [View-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Keyframe-Animation wird auf der Grundlage der Veränderung der Sichtbarkeit eines Elements innerhalb eines Scrollers fortgesetzt; dieses Element wird als das _Subjekt_ bezeichnet. Standardmäßig ist die Zeitleiste bei `0%`, wenn das Element das erste Mal sichtbar an einem Rand des Scrollers wird, und bei `100%`, wenn sein Endrand den gegenüberliegenden Rand des Scrollers verlässt. Eine View-Fortschrittszeitleiste kann auf zwei Arten festgelegt werden:
    - [Benannte View-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subjekt wird explizit benannt, indem die `view-timeline-name`-Eigenschaft (oder die `view-timeline`-Kurzschreibweise) auf einen `<dashed-ident>` gesetzt wird. Wenn Sie die `animation-timeline`-Eigenschaft des zu animierenden Elements auf diesen `<dashed-ident>` setzen, steuert die Sichtbarkeit des Subjekts die Fortschreitung der Animation des Elements. Beachten Sie, dass das zu animierende Element nicht das gleiche wie das Subjekt sein muss.
    - [Anonyme View-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die `animation-timeline`-Eigenschaft des zu animierenden Elements wird auf eine `view()`-Funktion gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Scrollports seines nächstgelegenen Eltern-Scrollers animiert wird.
- Keine Zeitleiste
  - : Alle Animationzeitleisten können entfernt werden, indem ein Wert von `none` ausgewählt wird. Wenn `animation-timeline: none` gesetzt ist, wird keine Animation auftreten, da es keine Zeitleiste gibt, der gefolgt werden kann.

Die `animation-timeline`-Eigenschaft ist in der `animation`-Kurzschreibweise als nur-zurücksetzbarer Wert enthalten. Das bedeutet, dass das Einschließen von `animation` einen zuvor erklärten `animation-timeline`-Wert auf `auto` zurücksetzt. Da diese Komponente der Kurzschreibweise nur zurückgesetzt wird, kann ein spezifischer Wert nicht über `animation` gesetzt werden. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) müssen Sie `animation-timeline` nach der Deklaration einer beliebigen `animation`-Kurzschreibweise deklarieren, damit sie wirksam wird.

Wenn Sie mehrere durch Kommas getrennte Werte angeben, wird jeder `animation-timeline`-Wert in der Reihenfolge, in der die `animation-name`-Werte erscheinen, auf eine einzelne Animation angewendet. Wenn die Anzahl der Werte in der `animation-timeline`-Deklaration größer als die Anzahl der `animation-name`-Werte ist, werden die überzähligen Zeitleistenwerte ignoriert. Wenn es weniger `animation-timeline`-Werte als `animation-name`-Werte gibt, werden die `animation-timeline`-Werte in der Reihenfolge wiederholt, bis jeder `animation-name` mit einer zugehörigen Zeitleiste verbunden ist.

Wenn zwei oder mehr Zeitleisten denselben `<dashed-ident>`-Namen und dieselbe Spezifität haben, wird die zuletzt innerhalb der Kaskade deklarierte verwendet. Wenn keine Zeitleiste gefunden wird, die mit einem innerhalb des `animation-timeline` enthaltenen Namen übereinstimmt, wird der mit diesem Wert assoziierte `animation-name` nicht mit einer Zeitleiste verbunden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `animation-timeline`-Eigenschaft sowie die Werte `none`, `auto` und den Standardwert (`auto`).

#### HTML

Wir haben ein {{htmlelement("article")}} mit drei {{htmlelement("section")}}-Kindern. Jedes `<section>` hat eine eindeutige `id` und ein {{htmlelement("div")}}-Kind.

```html
<article>
  <section id="none">
    <div></div>
  </section>
  <section id="auto">
    <div></div>
  </section>
  <section id="default">
    <div></div>
  </section>
</article>
```

#### CSS

Wir verwenden das [Flex-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander anzuordnen. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir formatieren alle Elemente gleich und wenden die `rotate`-Animation der {{cssxref("@keyframes")}} an, die das Element um eine volle Drehung rotiert. Mit der Kurzschreibweise {{cssxref("animation")}} deklarieren wir unendliche, 2-Sekunden, linear fortschreitende Iterationen der `rotate`-Animation, wobei die Richtung jeder Animation wechselt.

```css
article {
  display: flex;
  gap: 10px;
  text-align: center;
}
section {
  background-color: beige;
  padding: 20px;
}
section::after {
  content: attr(id);
  display: block;
}
div {
  height: 100px;
  width: 100px;
  background-color: magenta;
  animation: rotate 2s infinite alternate linear;
}
@keyframes rotate {
  to {
    rotate: 1turn;
  }
}
```

Der einzige Unterschied ist die Deklaration der `animation-timeline` (oder das Fehlen dieser im Fall von `default`) für jedes `<div>`.

```css
#none div {
  animation-timeline: none;
}
#auto div {
  animation-timeline: auto;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: none) {
    body::before {
      content: "Your browser doesn't support the `animation-timeline` property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

Da die `animation-timeline`-Eigenschaft in der Kurzschreibweise {{cssxref("animation")}} als ein nur-zurücksetzbarer Wert enthalten ist, muss die `animation-timeline` nach der Kurzschreibweise `animation` kommen oder mit größerer Spezifität als die Kurzschreibweise `animation` angewendet werden, um angewendet zu werden.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Beachten Sie, dass die Deklaration eines Werts für `auto` denselben Effekt hat wie das Zulassen, dass die `animation-timeline` auf diesen Wert standardmäßig gesetzt wird, und dass `none` alle Zeitleisten vom Element entfernte, sodass im Fall von `none` keine Animation erfolgt.

### Festlegen einer benannten Scroll-Fortschrittszeitleiste

In diesem Beispiel wird die Animationzeitleiste auf eine horizontale Scroll-Fortschrittszeitleiste gesetzt.

#### HTML

Unser Container enthält drei Stretcher-Elemente, die breit genug sind, um sicherzustellen, dass unser Container ein Scroll-Container ist. Der mittlere enthält eine Form, die wir animieren werden.

```html live-sample___named_scroll live-sample___anonymous_scroll
<div id="container">
  <div class="stretcher"></div>
  <div class="stretcher">
    <div id="shape"></div>
  </div>
  <div class="stretcher"></div>
</div>
```

#### CSS

Wir definieren den Container als Flex-Container, wobei wir eine {{cssxref("width")}} auf dem Container setzen, die die Hälfte der Breite seiner kombinierten Flex-Kinder beträgt. Die Hinzufügung eines {{cssxref("overflow-x")}}-Wertes von `scroll` setzt sie auf ein horizontales Scrollbar.

Unsere Scroll-Fortschrittszeitleiste, definiert unter Verwendung der `scroll-timeline-name`- und `scroll-timeline-axis`-Eigenschaften, trägt den Namen `--square-timeline`. Diese Zeitleiste wird auf unser `#square`-Element angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

```css live-sample___named_scroll live-sample___anonymous_scroll
#container {
  display: flex;
  width: 300px;
  border: 1px solid;

  overflow-x: scroll;
  scroll-timeline-axis: inline;
  scroll-timeline-name: --square-timeline;
}

.stretcher {
  flex: 0 0 200px;
}
```

Der unten stehende CSS definiert ein Quadrat, das gemäß der von der `animation-timeline`-Eigenschaft bereitgestellten Zeitleiste rotiert, die auf die obige benannte `--square-timeline`-Zeitleiste gesetzt ist. Die Animation soll zweimal in wechselnden Richtungen animiert werden, während sie durch den Viewport läuft. Wir haben [eingeritzte Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt deutlicher zu machen.

```css live-sample___named_scroll live-sample___anonymous_scroll
#shape {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  corner-shape: notch;

  animation: rotateAnimation 1ms linear 2 alternate;
  animation-timeline: --square-timeline;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```css hidden live-sample___named_scroll live-sample___named_view
@layer no-support {
  @supports not (animation-timeline: --square-timeline) {
    body::before {
      content: "Your browser doesn't support named animation timelines.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um das animierte Element zu sehen.

{{EmbedLiveSample("named_scroll", "100%", "150px")}}

### Festlegen einer anonymen Scroll-Fortschrittszeitleiste

Dieses Beispiel baut auf dem vorherigen auf und wendet eine anonyme Scroll-Fortschrittszeitleiste unter Verwendung der `scroll()`-Funktion an.

#### CSS

Wir fügen den gesamten CSS aus dem vorherigen Beispiel hinzu und setzen lediglich die `animation-timeline`-Eigenschaft, um den Wert des vorherigen Beispiels außer Kraft zu setzen. Die Zeitleiste wird vom Wert `scroll(inline nearest)`, welcher das Scrollbar in der Inline-Richtung des nächsten Vorfahren-Elements mit Scrollbars auswählt, bereitgestellt. Dies ist die vertikale Scrollleiste des `#container`-Elements, da die `.stretcher`-Elemente keinen überfließenden Inhalt haben und daher keine Scroll-Container sind.

```css live-sample___anonymous_scroll
#shape {
  animation-timeline: scroll(inline nearest);
}
```

```css hidden live-sample___anonymous_scroll
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Your browser doesn't support the scroll() function.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um das quadratische Element animiert zu sehen.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Festlegen einer benannten View-Fortschrittszeitleiste

In diesem Beispiel zeigen wir, wie eine benannte View-Fortschrittszeitleiste erstellt und angewendet wird. Zwei Elemente werden animiert, wobei unterschiedliche Elemente als Scroller dienen.

#### HTML

```html-nolint hidden live-sample___named_view
<main class="scroller">
  <div class="container">
    <h1>Directions</h1>
    <h2>Lincoln Memorial to Martin Luther King, Jr. Memorial</h2>
    <ol>
      <li>Head south on Lincoln Memorial Circle</li>
      <li>Turn right toward Independence Ave</li>
      <li>Turn left onto Independence Ave</li>
      <li>Turn right onto West Basin Dr</li>
      <li>Look up when you reach 64 Independence Ave!</li>
    </ol>
    <section>
```

Unser HTML enthält viel Text in einem Container innerhalb eines Scrollers, den wir der Kürze halber verborgen haben. Inmitten der Textwand fügen wir zwei `<div>`-Elemente ein, die wir basierend auf der Sichtbarkeit des Elements selbst im ersten Fall und basierend auf der Sichtbarkeit seines Elternteils im zweiten Fall animieren werden:

```html live-sample___named_view
<div class="animatedElement self">SELF</div>
<div class="animatedElement parent">PARENT</div>
```

```html-nolint hidden live-sample___named_view
</section>
<h2>Martin Luther King, Jr. Memorial to Lincoln Memorial</h2>
<ol>
  <li>Head north toward Independence Ave SW</li
  ><li>Turn left onto Independence Ave</li
  ><li>Turn right toward the Korean War Veterans Memorial</li
  ><li>Take a photo of the memorial as you walk past it.</li
  ><li>Head north on Lincoln Memorial Circle</li
  ><li>Look up. You can't miss it!</li>
</ol>
  </div>
</main>
```

#### CSS

Wir erstellen eine Keyframe-Animation, die die Deckkraft und Skala des Elements ändert, und wenden sie auf beide animierten Elemente an:

```css live-sample___named_view
@keyframes animationEffect {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}

.animatedElement {
  animation: animationEffect 1ms linear;
}
```

Das `self`-Element wird explizit als der Scroller für sich selbst benannt, indem die `view-timeline-name`-Eigenschaft auf einen `<dashed-ident>` gesetzt und auch dieser `<dashed-ident>`-Name als Wert der `animation-timeline`-Eigenschaft gesetzt wird. Im `parent`-Fall setzen wir den `container` als den Scroller für das animierte Element:

```css live-sample___named_view
.self {
  view-timeline-name: --selfScrollerElement;
  animation-timeline: --selfScrollerElement;
}
.container {
  view-timeline-name: --parentScrollerElement;
}
.parent {
  animation-timeline: --parentScrollerElement;
}
```

Zusätzliche CSS-Deklarationen wurden der Kürze halber verborgen.

```css hidden live-sample___named_view
@layer setup {
  section {
    display: flex;
    gap: 10px;
  }
  main {
    width: 400px;
    padding: 1em;
    height: 300px;
    overflow: scroll;
    border: 1px solid;
    background-color: beige;
    font-family: sans-serif;
  }

  li {
    margin-bottom: 0.75lh;
  }

  .animatedElement {
    height: 200px;
    width: calc(100% - 2em);
    margin: auto;
    background-color: forestgreen;
    background-image:
      repeating-linear-gradient(37deg, transparent 0 52px, beige 52px 57px),
      repeating-linear-gradient(94deg, transparent 0 52px, beige 52px 57px);
    border: 1px solid;
    font-size: 3em;
    place-content: center;
  }
}
```

#### Ergebnis

Scrollen Sie den Container, um beide Elemente animieren zu sehen.

{{EmbedLiveSample("named_view", "100%", "350px")}}

Beachten Sie, wie die Sichtbarkeit des `self`-Elements seine eigene Animation steuert. In diesem Fall ist das Element am `0%`-Keyframe, wenn die obere Kante den Viewport oder den sichtbaren Teil des Scrollports betritt, und erreicht nur den `100%`-Keyframe, wenn die untere Kante den Viewport verlässt.

Das `parent`-Element wird nur sichtbar, wenn dieser Elternteil sichtbar ist, was bedeutet, dass es, wenn es in Sichtweite kommt, bereits etwa `25%` der Animation durchlaufen hat. Es ist erst etwa `75%` der Animation durchlaufen, wenn es den oberen Rand des Viewports verlässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [Leitfaden: Verwenden von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
