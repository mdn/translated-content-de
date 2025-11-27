---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: 47b45512ee8a42e8a1dcec236225c767cc735334
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Zeitleiste, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

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
  - : Die Animation ist nicht mit einer Zeitleiste verbunden und es erfolgt keine Animation.

- `auto`
  - : Die Zeitleiste der Animation ist die standardmäßige [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das Wurzelelement, den nächsten Scroller oder sich selbst als eine anonyme Fortschrittszeitleiste des Scrollens und optional die Scrollrichtung des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert den nächstgelegenen vorfahren Scroll-Container als eine anonyme Fortschrittszeitleiste der Ansicht, wobei optional die standardmäßige `baseline`-Achsenrichtung und die `auto` Anfänge und Enden-Offsets überschrieben werden.

- `<dashed-ident>`
  - : Der Name einer scrollgesteuerten oder ansichtsbezogenen Zeitleiste, wie sie durch die Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} des Scroll-Containers definiert ist (oder durch die Kurzform {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}).

## Beschreibung

Die Standardzeitleiste für eine CSS-Schlüsselbild-Animation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die Eigenschaft `animation-timeline` kann verwendet werden, um eine benannte oder anonyme Fortschrittszeitleiste des Scrollens oder der Ansicht festzulegen. Alternativ kann sie verwendet werden, um die standardmäßige, zeitbasierte Dokumentzeitleiste explizit zu setzen, um den Fortschritt einer Animation eines Elements zu steuern oder gar keine Zeitleiste zu haben, in welchem Fall das Element nicht animiert.

Die folgenden Zeitleistentypen können über `animation-timeline` festgelegt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die standardmäßige Dokumentzeitleiste, die durch das Verstreichen der Zeit seit dem ersten Laden des Dokuments im Browser fortschreitet. Diese Zeitleiste ist traditionell mit CSS-Animationen verbunden und wird mit einem Wert von `auto` ausgewählt oder indem kein Wert für `animation-timeline` angegeben wird, da dies der Standardwert ist.
- [Scrollfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation wird durch horizontales oder vertikales Scrollen eines scrollbaren Elements oder _Scrollers_ vorangetrieben. Das Element, das die Scrollfortschrittszeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
    - [Benannte Scrollfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird explizit benannt, indem die Eigenschaft {{cssxref("scroll-timeline-name")}} (oder die Kurzform {{cssxref("scroll-timeline")}}) auf eine {{cssxref("dashed-ident")}} gesetzt wird; dieser `<dashed-ident>` Name wird dann als Wert der Eigenschaft `animation-timeline` gesetzt.
    - [Anonyme Scrollfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf die Funktion {{cssxref("animation-timeline/scroll", "scroll()")}} gesetzt. Die beiden optionalen Parameter der Funktion definieren den Scroller, der die Scrollfortschrittszeitleiste bereitstellt, und die zu verwendende Scrollachse.
- [Ansichtfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Schlüsselbild-Animation wird basierend auf der Sichtbarkeitsänderung eines Elements innerhalb eines Scrollers vorangetrieben; dieses Element wird als _Subject_ bezeichnet. Standardmäßig ist die Zeitleiste bei `0%`, wenn das Element zum ersten Mal an einem Rand des Scrollers sichtbar wird und bei `100%`, wenn sein Endrand den gegenüberliegenden Rand des Scrollers verlässt. Eine Ansichtfortschrittszeitleiste kann auf zwei Arten spezifiziert werden:
    - [Benannte Ansichtfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subject wird explizit benannt, indem die Eigenschaft {{cssxref("view-timeline-name")}} (oder die Kurzform {{cssxref("view-timeline")}}) auf einen `<dashed-ident>` gesetzt wird. Wenn Sie die Eigenschaft `animation-timeline` des zu animierenden Elements auf diesen `<dashed-ident>` setzen, steuert die Sichtbarkeit des Subjects den Fortschritt der Animation des Elements. Beachten Sie, dass das zu animierende Element nicht mit dem Subject identisch sein muss.
    - [Anonyme Ansichtfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf eine {{cssxref("animation-timeline/view", "view()")}} Funktion gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Scrollports seines nächsten Eltern-Scrollers animiert wird.
- Keine Zeitleiste
  - : Alle Animationszeitleisten können entfernt werden, indem ein Wert von `none` ausgewählt wird. Wenn `animation-timeline: none` gesetzt ist, erfolgt keine Animation, da es keine Zeitleiste gibt, der gefolgt werden könnte.

Die Eigenschaft `animation-timeline` ist als nur-zurücksetzbarer Wert in der {{cssxref("animation")}} Kurzform enthalten. Das bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt. Da diese Komponente der Kurzform nur zurücksetzbar ist, kann ein spezifischer Wert nicht über `animation` festgelegt werden. Wenn Sie [CSS-Scroll-gestützte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) erstellen, müssen Sie `animation-timeline` deklarieren, nachdem Sie eine `animation`-Kurzform deklariert haben, damit es wirksam wird.

Wenn Sie mehrere durch Kommas getrennte Werte angeben, wird jeder `animation-timeline` Wert in der Reihenfolge, in der die {{cssxref("animation-name")}} Werte erscheinen, auf eine einzelne Animation angewendet. Wenn die Anzahl der Werte in der `animation-timeline`-Deklaration größer ist als die Anzahl der `animation-name`-Werte, werden die überschüssigen Zeitleistenwerte ignoriert. Wenn es weniger `animation-timeline` Werte als `animation-name` Werte gibt, werden die `animation-timeline` Werte in der angegebenen Reihenfolge wiederholt, bis jeder `animation-name` eine zugeordnete Zeitleiste hat.

Wenn zwei oder mehr Zeitleisten denselben `<dashed-ident>` Namen und dieselbe Spezifität teilen, wird die innerhalb der Kaskade zuletzt deklarierte verwendet. Wenn keine Zeitleiste gefunden wird, die einem innerhalb der `animation-timeline` enthaltenen Namen entspricht, ist der mit diesem Wert verbundene `animation-name` nicht mit einer Zeitleiste verbunden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung der Eigenschaft `animation-timeline` zusammen mit den Werten `none`, `auto` und dem Standardwert (`auto`).

#### HTML

Wir haben ein {{htmlelement("article")}} mit drei {{htmlelement("section")}} Kindern. Jedes `<section>` hat eine eindeutige `id` und ein {{htmlelement("div")}} Kind.

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

Wir verwenden das [flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander anzuordnen. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir stylen alle Elemente gleich und wenden die `rotate` {{cssxref("@keyframes")}} Animation an, die das Element um eine volle Umdrehung dreht. Mit der {{cssxref("animation")}}-Kurzform deklarieren wir unendliche, zwei Sekunden dauernde, linear fortschreitende Iterationen der `rotate` Animation und wechseln die Richtung jeder Animation ab.

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

Der einzige Unterschied ist die `animation-timeline` Deklaration (oder das Fehlen dieser im Fall von `default`) für jedes `<div>`.

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

Da die Eigenschaft `animation-timeline` als nur-zurücksetzbarer Wert in der {{cssxref("animation")}}-Kurzform enthalten ist, muss `animation-timeline` nach der `animation`-Kurzform kommen oder mit größerer Spezifität als die `animation`-Kurzform angewendet werden, um angewendet zu werden.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Beachten Sie, dass die Deklaration eines Werts von `auto` denselben Effekt hat wie das Zulassen, dass `animation-timeline` auf diesen Wert standardmäßig festgelegt wird, und dass `none` alle Zeitleisten aus dem Element entfernt, sodass im Fall von `none` keine Animation erfolgt.

### Setzen einer benannten Scrollfortschrittszeitleiste

In diesem Beispiel wird die Animationszeitleiste auf eine horizontale Scrollfortschrittszeitleiste gesetzt.

#### HTML

Unser Container enthält drei Stretcher-Elemente, die breit genug sind, um sicherzustellen, dass unser Container ein Scroll-Container ist. Das mittlere enthält eine Form, die wir animieren werden.

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

Wir definieren den Container als Flex-Container und setzen eine {{cssxref("width")}} auf den Container, die die Hälfte der Breite seiner kombinierten Flex-Kinder beträgt. Das Hinzufügen eines {{cssxref("overflow-x")}} Werts von `scroll` bewirkt, dass es eine horizontale Bildlaufleiste gibt.

Unsere scrollfortschritts Zeitleiste, die mithilfe der Eigenschaften {{cssxref("scroll-timeline-name")}} und {{cssxref("scroll-timeline-axis")}} definiert wird, ist `--square-timeline` benannt. Diese Zeitleiste wird auf unser `#square` Element mit `animation-timeline: --square-timeline` angewendet.

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

Der untenstehende CSS-Code definiert ein Quadrat, das sich in alternativen Richtungen gemäß der von der `animation-timeline`-Eigenschaft bereitgestellten Zeitleiste dreht, die auf die oben genannte Zeitleiste `--square-timeline` eingestellt ist. Die Animation ist so eingestellt, dass sie zweimal auftritt, in wechselnden Richtungen, während sie durch den Ansichtsbereich wandert. Wir haben [gekerbte Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt deutlicher zu machen.

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

Scrollen Sie, um zu sehen, wie das Element animiert wird.

{{EmbedLiveSample("named_scroll", "100%", "150px")}}

### Setzen einer anonymen Scrollfortschrittszeitleiste

Dieses Beispiel erweitert das vorherige, indem eine anonyme Scrollfortschrittszeitleiste mit der Funktion `scroll()` angewendet wird.

#### CSS

Wir nehmen den gesamten CSS-Code aus dem vorherigen Beispiel und setzen nur die Eigenschaft `animation-timeline`, um den Wert des vorherigen Beispiels zu überschreiben. Die Zeitleiste wird durch den Wert `scroll(inline nearest)` bereitgestellt, der die Bildlaufleiste in der Inline-Richtung des nächsten Vorfahren-Elements auswählt, das Bildlaufleisten hat. Dies ist die vertikale Bildlaufleiste des `#container` Elements, da die `.stretcher` Elemente keinen überlaufenden Inhalt haben und daher keine Scroll-Container sind.

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

Scrollen Sie, um zu sehen, wie das Quadrat-Element animiert wird.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Setzen einer benannten Ansichtfortschrittszeitleiste

In diesem Beispiel zeigen wir, wie eine benannte Ansichtfortschrittszeitleiste erstellt und angewendet wird. Zwei Elemente werden animiert, wobei unterschiedliche Elemente als Scroller dienen.

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

Unser HTML enthält viel Text in einem Container innerhalb eines Scrollers, den wir der Kürze halber ausgeblendet haben. Inmitten der Textwand enthalten wir zwei `<div>`-Elemente, die wir basierend auf der Sichtbarkeit des Elements selbst im ersten Fall und basierend auf der Sichtbarkeit seines Elternteils im zweiten Fall animieren werden:

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

Wir erstellen eine Keyframe-Animation, die die Opazität und den Maßstab des Elements ändert, und wenden sie auf beide animierten Elemente an:

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

Das `self`-Element wird explizit als Scroller für sich selbst benannt, indem die Eigenschaft `view-timeline-name` auf einen `<dashed-ident>` gesetzt wird und auch dieser `<dashed-ident>` Name als Wert der `animation-timeline`-Eigenschaft gesetzt wird. Im `parent`-Fall setzen wir den `container` als Scroller für das animierte Element:

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

Zusätzliche CSS-Deklarationen wurden der Kürze halber ausgeblendet.

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

Scrollen Sie den Container, um beide Elemente zu animieren.

{{EmbedLiveSample("named_view", "100%", "350px")}}

Beachten Sie, wie die Sichtbarkeit des `self` Elements seine eigene Animation steuert. In diesem Fall erreicht das Element das Schlüsselbild bei `0%`, wenn der obere Rand in den Ansichtsbereich oder den sichtbaren Teil des Scrollports eintritt, und erreicht nur das Schlüsselbild bei `100%`, wenn der untere Rand den Ansichtsbereich verlässt.

Das `parent`-Element wird erst sichtbar, wenn dieses Elternteil sichtbar ist, was bedeutet, dass es, wenn es sichtbar wird, bereits etwa `25%` des Weges durch die Animation ist. Es ist nur etwa `75%` seiner Animation durchlaufen, wenn es den oberen Rand des Ansichtsbereichs verlässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [Leitfaden: Using CSS animations](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
