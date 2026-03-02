---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: 21f3703f37be2ab064fb8cff005438f47f92a1de
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Zeitleiste fest, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

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

Die Eigenschaft `animation-timeline` wird als ein oder mehrere durch Kommas getrennte Werte angegeben, von denen jeder einer der folgenden sein kann:

- `none`
  - : Die Animation ist nicht mit einer Zeitleiste verknüpft, und es tritt keine Animation auf.

- `auto`
  - : Die Zeitleiste der Animation ist die Standard-[`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das Wurzelelement, den nächsten Scroller oder sich selbst als anonyme Scroll-Fortschrittszeitleiste und optional die Scrollrichtung des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert den nächstgelegenen Vorfahren-Scroll-Container als anonyme Ansicht-Fortschrittszeitleiste und überschreibt optional die Standardachsendirektion `baseline` und die `auto` Start- und Endeinsätze.

- `<dashed-ident>`
  - : Der Name einer scrollgesteuerten oder ansicht-Fortschrittszeitleiste, wie sie durch die Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} des Scroll-Containers definiert ist (oder die Kurzform-Eigenschaft {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}).

## Beschreibung

Die Standardzeitleiste für eine CSS-Keyframe-Animation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die Eigenschaft `animation-timeline` kann verwendet werden, um eine benannte oder anonyme Scroll-Fortschritts- oder Ansicht-Fortschrittszeitleiste festzulegen. Alternativ kann sie verwendet werden, um explizit die standardmäßige zeitbasierte Dokumentzeitleiste festzulegen, um den Fortschritt der Animation eines Elements zu steuern oder überhaupt keine Zeitleiste zu haben. In diesem Fall findet keine Animation statt.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die Standard-Dokumentzeitleiste, die durch das Verstreichen der Zeit seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist, und wird mit einem Wert von `auto` ausgewählt, oder indem überhaupt kein `animation-timeline`-Wert angegeben wird, da dies der Standardwert ist.
- [Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation wird durch das Scrollen eines scrollbaren Elements, oder _Scroller_, horizontal oder vertikal fortgeschritten. Das Element, das die Scroll-Fortschrittszeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
    - [Benannte Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird explizit benannt, indem die Eigenschaft {{cssxref("scroll-timeline-name")}} (oder die Kurzform-Eigenschaft {{cssxref("scroll-timeline")}}) auf ein {{cssxref("dashed-ident")}} gesetzt wird; dieser `<dashed-ident>`-Name wird dann als Wert der Eigenschaft `animation-timeline` festgelegt.
    - [Anonyme Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf die Funktion {{cssxref("animation-timeline/scroll", "scroll()")}} gesetzt. Die zwei optionalen Parameter der Funktion definieren den Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, und die zu verwendende Scroll-Achse.
- [Ansicht-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Keyframe-Animation wird basierend auf der Änderung der Sichtbarkeit eines Elements in einem Scroller fortgeschritten; dieses Element ist als _Subjekt_ bekannt. Standardmäßig befindet sich die Zeitleiste bei `0%`, wenn das Element zum ersten Mal an einem Rand des Scrollers sichtbar wird, und bei `100%`, wenn sein Endrand den gegenüberliegenden Rand des Scrollers verlässt. Eine Ansicht-Fortschrittszeitleiste kann auf zwei Arten spezifiziert werden:
    - [Benannte Ansicht-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subjekt wird explizit benannt, indem die Eigenschaft {{cssxref("view-timeline-name")}} (oder die Kurzform-Eigenschaft {{cssxref("view-timeline")}}) auf ein `<dashed-ident>` gesetzt wird. Wenn Sie die Eigenschaft `animation-timeline` des zu animierenden Elements auf diesen `<dashed-ident>` setzen, bestimmt die Sichtbarkeit des Subjekts den Fortschritt der Animation des Elements. Beachten Sie, dass das zu animierende Element nicht dasselbe wie das Subjekt sein muss.
    - [Anonyme Ansicht-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf eine {{cssxref("animation-timeline/view", "view()")}}-Funktion gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Sichtbereichs seines nächstgelegenen Eltern-Sclollers animiert wird.
- Keine Zeitleiste
  - : Alle Animationszeitleisten können durch Auswahl eines Wertes von `none` entfernt werden. Wenn `animation-timeline: none` gesetzt ist, tritt keine Animation auf, da keine Zeitleiste vorhanden ist, der gefolgt werden könnte.

Die Eigenschaft `animation-timeline` ist in der {{cssxref("animation")}}-Kurzform als reiner Reset-Wert enthalten. Das bedeutet, dass das Einschließen von `animation` einen zuvor erklärten `animation-timeline`-Wert auf `auto` zurücksetzt. Da diese Komponente der Kurzform nur zurückgesetzt wird, kann über `animation` kein spezifischer Wert gesetzt werden. Wenn Sie [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) erstellen, müssen Sie `animation-timeline` nach der Deklaration einer `animation`-Kurzform erklären, damit es wirksam wird.

Wenn Sie mehrere durch Kommas getrennte Werte angeben, wird jeder `animation-timeline`-Wert auf eine einzige Animation in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}-Werte erscheinen. Wenn die Anzahl der Werte in der `animation-timeline`-Deklaration größer ist als die Anzahl der `animation-name`-Werte, werden die überzähligen Zeitleistenwerte ignoriert. Wenn weniger `animation-timeline`-Werte als `animation-name`-Werte vorhanden sind, werden die `animation-timeline`-Werte in der Reihenfolge wiederholt, bis jeder `animation-name` eine zugeordnete Zeitleiste hat.

Wenn zwei oder mehr Zeitleisten denselben `<dashed-ident>`-Namen und dieselbe Spezifizität teilen, wird diejenige verwendet, die zuletzt innerhalb des Kaskade erklärt wurde. Wenn keine Zeitleiste gefunden wird, die mit einem innerhalb des `animation-timeline` eingeschlossenen Namen übereinstimmt, wird der `animation-name`, der mit diesem Wert verbunden ist, nicht mit einer Zeitleiste verknüpft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `animation-timeline`-Eigenschaft zusammen mit den Werten `none`, `auto` und Standard (`auto`).

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

Wir verwenden das [flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander zu setzen. Wir verwenden [erzeugten Inhalt](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir gestalten alle Elemente gleich, indem wir die `rotate`-{{cssxref("@keyframes")}}-Animation anwenden, die das Element um eine volle Drehung dreht. Mit der {{cssxref("animation")}}-Kurzform deklarieren wir unendliche, 2-sekündige, linear fortschreitende Iterationen der `rotate`-Animation, wobei die Richtung jeder Animation alterniert.

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

Der einzige Unterschied ist die `animation-timeline`-Deklaration (oder das Fehlen dieser im Falle von `default`) für jedes `<div>`.

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

Da die `animation-timeline`-Eigenschaft in der {{cssxref("animation")}}-Kurzform als Reset-Wert enthalten ist, muss die `animation-timeline` nach der `animation`-Kurzform kommen oder mit größerer Spezifizität als die `animation`-Kurzform angewendet werden, um angewendet zu werden.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Beachten Sie, dass die Deklaration eines Wertes von `auto` die gleiche Wirkung hat wie das Zulassen, dass die `animation-timeline` auf diesen Wert standardmäßig gesetzt wird, und dass `none` alle Zeitleisten von dem Element entfernt, sodass im Fall von `none` keine Animation stattfindet.

### Festlegen einer benannten Scroll-Fortschrittszeitleiste

In diesem Beispiel wird die Animationszeitleiste auf eine horizontale Scroll-Fortschrittszeitleiste gesetzt.

#### HTML

Unser Container umfasst drei Streckelemente, die breit genug sein werden, um sicherzustellen, dass unser Container ein Scroll-Container ist. Das mittlere enthält eine Form, die wir animieren werden.

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

Wir definieren den Container als Flex-Container und setzen eine {{cssxref("width")}} auf den Container, die die Hälfte der Breite seiner kombinierten Flex-Kinder beträgt. Durch Hinzufügen eines {{cssxref("overflow-x")}}-Wertes von `scroll` wird er zu einem horizontalen Scrollbalken gesetzt.

Unsere Scroll-Fortschrittszeitleiste, definiert unter Verwendung der Eigenschaften {{cssxref("scroll-timeline-name")}} und {{cssxref("scroll-timeline-axis")}}, heißt `--square-timeline`. Diese Zeitleiste wird auf unser `#shape`-Element mit `animation-timeline: --square-timeline` angewendet.

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

Der untenstehende CSS-Code definiert ein Quadrat, das sich in abwechselnden Richtungen gemäß der Zeitleiste dreht, die von der Eigenschaft `animation-timeline` bereitgestellt wird, die auf die oben genannte `--square-timeline`-Zeitleiste gesetzt ist. Die Animation ist so eingestellt, dass sie zweimal in abwechselnden Richtungen auftritt, während sie durch den Ansichtbereich passiert. Wir haben [gekerbte Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt deutlicher zu machen.

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

Wir übernehmen den gesamten CSS vom vorherigen Beispiel und setzen nur die Eigenschaft `animation-timeline`, um den Wert des vorherigen Beispiels zu überschreiben. Die Zeitleiste wird durch den Wert `scroll(inline nearest)` bereitgestellt, der die Scrollleiste in der Inline-Richtung des nächsten Vorfahren-Elements mit Scrollleisten auswählt. Dies ist die vertikale Scrollleiste des `#container`-Elements, da die `.stretcher`-Elemente keinen überfließenden Inhalt haben und daher keine Scroll-Container sind.

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

Scrollen Sie, um das Quadrat-Element animiert zu sehen.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Festlegen einer benannten Ansicht-Fortschrittszeitleiste

In diesem Beispiel demonstrieren wir, wie man eine benannte Ansicht-Fortschrittszeitleiste erstellt und anwendet. Zwei Elemente werden animiert, wobei verschiedene Elemente als Scroller dienen.

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

Unser HTML enthält viel Text in einem Container innerhalb eines Scrollers, den wir aus Gründen der Kürze ausgeblendet haben. In der Mitte der Textmenge fügen wir zwei `<div>`-Elemente ein, die wir basierend auf der Sichtbarkeit des Elements selbst im ersten Fall und basierend auf der Sichtbarkeit seines Elternteils im zweiten Fall animieren werden:

```html live-sample___named_view
<div class="animated-element self">SELF</div>
<div class="animated-element parent">PARENT</div>
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

Wir erstellen eine Keyframe-Animation, die die Transparenz und Skalierung des Elements ändert, und wenden sie auf beide animierten Elemente an:

```css live-sample___named_view
@keyframes animation-effect {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}

.animated-element {
  animation: animation-effect 1ms linear;
}
```

Das Element `self` wird explizit als Scroller für sich selbst benannt, indem die Eigenschaft `view-timeline-name` auf ein `<dashed-ident>` gesetzt wird und auch dieser `<dashed-ident>`-Name als Wert der Eigenschaft `animation-timeline` gesetzt wird. Im Fall `parent` setzen wir den `container` als Scroller für das animierte Element:

```css live-sample___named_view
.self {
  view-timeline-name: --self-scroller-element;
  animation-timeline: --self-scroller-element;
}
.container {
  view-timeline-name: --parent-scroller-element;
}
.parent {
  animation-timeline: --parent-scroller-element;
}
```

Zusätzliche CSS-Deklarationen wurden aus Gründen der Kürze ausgeblendet.

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

  .animated-element {
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

Beachten Sie, wie die Sichtbarkeit des `self`-Elements seine eigene Animation steuert. In diesem Fall befindet sich das Element bei `0%` des Keyframes, wenn die obere Kante den Ansichtbereich oder den sichtbaren Teil des Scrollports betritt, und erreicht das `100%`-Keyframe nur, wenn die untere Kante den Ansichtbereich verlässt.

Das `parent`-Element wird nur sichtbar, wenn der Elternteil sichtbar ist, was bedeutet, dass es, wenn es in den Ansichtbereich kommt, bereits etwa `25%` des Weges durch die Animation ist. Es ist nur etwa `75%` durch seine Animation, wenn es den oberen Teil des Ansichtbereichs verlässt.

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
- [CSS Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
