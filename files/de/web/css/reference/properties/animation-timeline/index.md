---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Zeitleiste fest, die den Fortschritt einer CSS-Animation steuert.

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

Die `animation-timeline` Eigenschaft wird als ein oder mehrere Werte angegeben, die durch Kommas getrennt sind, wobei jeder Wert einer der folgenden sein kann:

- `none`
  - : Die Animation ist nicht mit einer Zeitleiste verbunden und es findet keine Animation statt.

- `auto`
  - : Die Zeitleiste der Animation ist die Standard-[`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das Wurzelelement, den nächstgelegenen Scroller oder sich selbst als anonyme Scroll-Fortschrittszeitleiste und optional die Scrolldirection des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert das nächstgelegene übergeordnete Scroll-Container als anonyme Sichtfortschrittszeitleiste, die standardmäßig die `baseline` Achsrichtung und die `auto` Start- und Endeinzüge überschreiben kann.

- `<dashed-ident>`
  - : Der Name einer scrollgetriebenen oder sichtfortschritts Zeitleiste, wie sie vom Scroll-Container mit der Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} (oder der Abkürzung {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}) definiert wird.

## Beschreibung

Die Standardzeitleiste für eine CSS-Keyframe-Animation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die `animation-timeline` Eigenschaft kann verwendet werden, um eine benannte oder anonyme Scroll-Fortschritts- oder Sichtfortschrittszeitleiste festzulegen. Alternativ kann sie verwendet werden, um explizit die standardmäßige zeitbasierte Dokumentzeitleiste festzulegen, um den Fortschritt der Animation eines Elements zu steuern oder um überhaupt keine Zeitleiste zu haben, in welchem Fall das Element nicht animiert wird.

Die folgenden Arten von Zeitleisten können über `animation-timeline` eingestellt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die standardmäßige Dokumentzeitleiste, die durch das Vergehen der Zeit seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen assoziiert wird und mit einem Wert von `auto` ausgewählt wird oder indem kein `animation-timeline` Wert angegeben wird, da dies der Standardwert ist.
- [Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation wird durch das horizontale oder vertikale Scrollen eines scrollbaren Elements oder Scrollers fortschreitend. Das Element, das die Scroll-Fortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
    - [Benannte Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird explizit benannt, indem die Eigenschaft {{cssxref("scroll-timeline-name")}} (oder die Abkürzung {{cssxref("scroll-timeline")}}) auf ein {{cssxref("dashed-ident")}} gesetzt wird; dieser `<dashed-ident>` Name wird dann als Wert der Eigenschaft `animation-timeline` gesetzt.
    - [Anonyme Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf die Funktion {{cssxref("animation-timeline/scroll", "scroll()")}} gesetzt. Die zwei optionalen Parameter der Funktion definieren den Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, und die zu verwendende Scrollachse.
- [Sichtfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Keyframe-Animation wird basierend auf der Veränderung der Sichtbarkeit eines Elements innerhalb eines Scrollers fortschreitend; dieses Element wird als _Subjekt_ bezeichnet. Standardmäßig befindet sich die Zeitleiste bei `0%`, wenn das Element zum ersten Mal an einem Rand des Scrollers sichtbar wird, und bei `100%`, wenn sein Endrand den gegenüberliegenden Rand des Scrollers verlässt. Eine Sichtfortschrittszeitleiste kann auf zwei Arten spezifiziert werden:
    - [Benannte Sichtfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subjekt wird explizit benannt, indem die Eigenschaft {{cssxref("view-timeline-name")}} (oder die Abkürzung {{cssxref("view-timeline")}}) auf ein `<dashed-ident>` gesetzt wird. Wenn Sie die Eigenschaft `animation-timeline` des zu animierenden Elements auf dieses `<dashed-ident>` setzen, steuert die Sichtbarkeit des Subjekts den Fortschritt der Animation des Elements. Beachten Sie, dass das zu animierende Element nicht mit dem Subjekt identisch sein muss.
    - [Anonyme Sichtfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf eine {{cssxref("animation-timeline/view", "view()")}} Funktion gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Scrollports seines nächstgelegenen Elternscrollers animiert wird.
- Keine Zeitleiste
  - : Alle Animationszeitleisten können entfernt werden, indem ein Wert von `none` ausgewählt wird. Wenn `animation-timeline: none` gesetzt ist, findet keine Animation statt, da es keine Zeitleiste gibt, der gefolgt wird.

Die `animation-timeline` Eigenschaft ist in der {{cssxref("animation")}} Abkürzung als ein nur-zurücksetzender Wert enthalten. Das heißt, dass die Aufnahme von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt. Da diese Komponente der Abkürzung nur zurücksetzt, kann ein spezifischer Wert nicht über `animation` gesetzt werden. Bei der Erstellung von [CSS Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) müssen Sie `animation-timeline` nach der Deklaration einer `animation` Abkürzung deklarieren, damit sie wirksam wird.

Wenn Sie mehrere durch Kommas getrennte Werte angeben, wird jeder `animation-timeline` Wert auf eine einzelne Animation in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}} Werte auftreten. Wenn die Anzahl der Werte in der `animation-timeline` Deklaration größer ist als die Anzahl der `animation-name` Werte, werden die überschüssigen Zeitleistenwerte ignoriert. Wenn weniger `animation-timeline` Werte als `animation-name` Werte vorhanden sind, werden die `animation-timeline` Werte in der angegebenen Reihenfolge wiederholt, bis jeder `animation-name` einen zugeordneten Zeitleistenwert hat.

Wenn zwei oder mehr Zeitleisten den gleichen `<dashed-ident>` Namen und die gleiche Spezifität teilen, wird die zuletzt innerhalb der Kaskade deklarierte verwendet. Wenn keine Zeitleiste gefunden wird, die mit einem in der `animation-timeline` enthaltenen Namen übereinstimmt, wird der `animation-name`, der mit diesem Wert assoziiert ist, nicht mit einer Zeitleiste assoziiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung der `animation-timeline` Eigenschaft zusammen mit den Werten `none`, `auto` und dem Standardwert (`auto`).

#### HTML

Wir haben einen {{htmlelement("article")}} mit drei {{htmlelement("section")}} Kindern. Jedes `<section>` hat eine eindeutige `id` und ein {{htmlelement("div")}} Kind.

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

Wir verwenden das [flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander anzuordnen. Wir nutzen [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir gestalten alle Elemente gleich, indem wir die `rotate` {{cssxref("@keyframes")}} Animation anwenden, die das Element um eine volle Drehung dreht. Mit der {{cssxref("animation")}} Abkürzung deklarieren wir unendliche, 2-sekündige, linear fortschreitende Iterationen der `rotate` Animation, indem wir die Richtung jeder Animation abwechseln.

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

Der einzige Unterschied ist die (oder das Fehlen der) `animation-timeline` Deklaration für jedes `<div>`.

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

Da die `animation-timeline` Eigenschaft in der {{cssxref("animation")}} Abkürzung als ein nur-zurücksetzender Wert enthalten ist, muss `animation-timeline` nach der `animation` Abkürzung kommen oder mit größerer Spezifität angewendet werden als die `animation` Abkürzung, um angewendet zu werden.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Beachten Sie, dass das Deklarieren eines Wertes von `auto` den gleichen Effekt hat wie das Zulassen, dass `animation-timeline` auf diesen Wert voreingestellt bleibt, und dass `none` alle Zeitleisten vom Element entfernt, sodass im `none` Fall keine Animation stattfindet.

### Einstellung einer benannten Scroll-Fortschrittszeitleiste

In diesem Beispiel wird die Animationszeitleiste auf eine horizontale Scroll-Fortschrittszeitleiste gesetzt.

#### HTML

Unser Container enthält drei Dehnelemente, die breit genug sind, um sicherzustellen, dass unser Container ein Scroll-Container ist. Das mittlere davon enthält eine Form, die wir animieren werden.

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

Wir definieren den Container als Flex-Container, wobei wir eine {{cssxref("width")}} am Container setzen, die halb so breit ist wie seine kombinierten Flex-Kinder. Durch das Hinzufügen eines {{cssxref("overflow-x")}} Wertes von `scroll` wird er zu einem Scroll-Container mit horizontalem Scrollbalken.

Unsere Scroll-Fortschrittszeitleiste, definiert durch die Eigenschaften {{cssxref("scroll-timeline-name")}} und {{cssxref("scroll-timeline-axis")}}, wird `--square-timeline` genannt. Diese Zeitleiste wird auf unser `#square` Element mit `animation-timeline: --square-timeline` angewendet.

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

Das CSS unten definiert ein Quadrat, das sich in alternierenden Richtungen dreht, entsprechend der Zeitleiste, die von der Eigenschaft `animation-timeline` bereitgestellt wird, die auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist. Die Animation ist so eingestellt, dass sie zweimal stattfindet, in wechselnden Richtungen, während sie durch die Ansicht scrollt. Wir haben [Nischen-Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt deutlicher zu machen.

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

### Einstellung einer anonymen Scroll-Fortschrittszeitleiste

Dieses Beispiel erweitert das vorherige, indem eine anonyme Scroll-Fortschrittszeitleiste mit der Funktion `scroll()` angewendet wird.

#### CSS

Wir übernehmen das gesamte CSS aus dem vorherigen Beispiel und setzen nur die `animation-timeline` Eigenschaft, um den Wert des vorherigen Beispiels zu überschreiben. Die Zeitleiste wird durch den Wert `scroll(inline nearest)` bereitgestellt, der die Scrollleiste in Richtung der Inlinescrollachse des nächstgelegenen übergeordneten Elements, das über Scrollleisten verfügt, auswählt. Dies ist die vertikale Scrollleiste des `#container` Elements, da die `.stretcher` Elemente keinen überlaufenden Inhalt haben und daher keine Scroll-Container sind.

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

### Einstellung einer benannten Sichtfortschrittszeitleiste

In diesem Beispiel demonstrieren wir, wie eine benannte Sichtfortschrittszeitleiste erstellt und angewendet wird. Zwei Elemente werden animiert, wobei verschiedene Elemente als Scroller dienen.

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

Unser HTML enthält viel Text in einem Container innerhalb eines Scrollers, den wir der Kürze halber ausgeblendet haben. In der Mitte der Textwand fügen wir zwei `<div>` Elemente hinzu, die wir basierend auf der Sichtbarkeit des Elements selbst im ersten Fall und basierend auf der Sichtbarkeit seines übergeordneten Elements im zweiten Fall animieren werden:

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

Wir erstellen eine Keyframe-Animation, die die Deckkraft und die Skalierung des Elements ändert und sie auf beide animierte Elemente anwendet:

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

Das `self` Element wird explizit als Scroller für sich selbst benannt, indem die Eigenschaft `view-timeline-name` auf ein `<dashed-ident>` gesetzt wird, und auch der `<dashed-ident>` Name als Wert der Eigenschaft `animation-timeline` gesetzt wird. Im `parent`-Fall setzen wir `container` als Scroller für das animierte Element:

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

Zusätzliche CSS-Deklarationen wurden der Kürze halber versteckt.

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

Scrollen Sie den Container, um beide Elemente zu sehen, wenn sie animiert werden.

{{EmbedLiveSample("named_view", "100%", "350px")}}

Beachten Sie, wie die Sichtbarkeit des `self` Elements seine eigene Animation steuert. In diesem Fall befindet sich das Element an der `0%` Schlüsselbild, wenn die obere Kante in den Sichtbereich oder den sichtbaren Teil des Scrollports eintritt, und erreicht nur dann die `100%` Schlüsselbild, wenn die untere Kante den Sichtbereich verlässt.

Das `parent` Element wird nur sichtbar, wenn der Elternteil sichtbar ist, was bedeutet, dass es, wenn es in den Sichtbereich kommt, bereits etwa `25%` der Animation durchlaufen hat. Es ist nur etwa `75%` seiner Animation, wenn es den oberen Teil des Sichtbereichs verlässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [Leitfaden: Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
