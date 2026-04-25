---
title: "`animation-timeline` CSS property"
short-title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
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

Die `animation-timeline`-Eigenschaft wird als ein oder mehrere kommagetrennte Werte angegeben, von denen jeder einer der folgenden sein kann:

- `none`
  - : Die Animation ist mit keiner Zeitleiste verbunden und es erfolgt keine Animation.

- `auto`
  - : Die Zeitleiste der Animation ist die Standard-[`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das Wurzelelement, den nächstgelegenen Scroller oder sich selbst als anonyme Scrollfortschritts-Zeitleiste und optional die Scrollrichtung des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert den nächstgelegenen Vorfahren-Scroll-Container als anonyme Ansichtsfortschritts-Zeitleiste und überschreibt optional die Standardachse `baseline` sowie die Inset-Werte für den Beginn und das Ende.

- `<dashed-ident>`
  - : Der Name einer scrollgesteuerten oder ansichtsfortschritts-Zeitleiste, wie sie durch die {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft des Scroll-Containers (oder die Kurzform {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}) definiert wird.

## Beschreibung

Die Standardzeitleiste für eine CSS-Keyframe-Animation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die `animation-timeline`-Eigenschaft kann verwendet werden, um eine benannte oder anonyme Scrollfortschritts- oder Ansichtsfortschritts-Zeitleiste einzustellen. Alternativ kann sie verwendet werden, um explizit die standardmäßige zeitbasierte Dokument-Zeitleiste festzulegen, um den Fortschritt der Animation eines Elements zu steuern oder keine Zeitleiste zu haben, in welchem Fall das Element nicht animiert wird.

Folgende Zeitleistentypen können über `animation-timeline` festgelegt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die Standarddokument-Zeitleiste, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen in Verbindung gebracht wird und mit einem Wert von `auto` ausgewählt wird, oder indem kein `animation-timeline`-Wert angegeben wird, da dies der Standardwert ist.
- [Scrollfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation schreitet durch das Scrollen eines scrollbaren Elements, eines _Scrollers_, horizontal oder vertikal voran. Das Element, das die Scrollfortschritts-Zeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
    - [Benannte Scrollfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird explizit benannt, indem die {{cssxref("scroll-timeline-name")}} Eigenschaft (oder die Kurzform {{cssxref("scroll-timeline")}}) auf einen {{cssxref("dashed-ident")}} gesetzt wird; dieser `<dashed-ident>` Name wird dann als Wert der `animation-timeline`-Eigenschaft festgelegt.
    - [Anonyme Scrollfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die `animation-timeline`-Eigenschaft des zu animierenden Elements wird auf die {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion gesetzt. Die beiden optionalen Parameter der Funktion definieren den Scroller, der die Scrollfortschritts-Zeitleiste bereitstellt und die zu verwendende Scrollachse.
- [Ansichtsfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Keyframe-Animation schreitet voran basierend auf der Veränderung der Sichtbarkeit eines Elements innerhalb eines Scrollers; dieses Element wird als das _Subjekt_ bezeichnet. Standardmäßig ist die Zeitleiste bei `0%`, wenn das Element zum ersten Mal an einem Rand des Scrollers sichtbar wird, und bei `100%`, wenn die Endkante den gegenüberliegenden Rand des Scrollers verlässt. Eine Ansichtsfortschritts-Zeitleiste kann auf zwei Arten angegeben werden:
    - [Benannte Ansichtsfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subjekt wird explizit als Scroller für sich selbst benannt, indem die {{cssxref("view-timeline-name")}} Eigenschaft (oder die Kurzform {{cssxref("view-timeline")}}) auf einen `<dashed-ident>` festgelegt wird, und dieser `<dashed-ident>` Name als Wert der `animation-timeline`-Eigenschaft gesetzt wird. Beachten Sie, dass das zu animierende Element nicht das gleiche wie das Subjekt sein muss.
    - [Anonyme Ansichtsfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die `animation-timeline`-Eigenschaft des zu animierenden Elements ist auf eine {{cssxref("animation-timeline/view", "view()")}}-Funktion gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Scrollbereichs des nächstgelegenen Elternscrollers animiert wird.
- Keine Zeitleiste
  - : Alle Animationszeitleisten können entfernt werden, indem ein Wert von `none` ausgewählt wird. Wenn `animation-timeline: none` gesetzt ist, wird keine Animation erfolgen, da es keine Zeitleiste gibt, der zu folgen ist.

Die `animation-timeline`-Eigenschaft ist als Rücksetz-Wert in der {{cssxref("animation")}}-Kurzform enthalten. Dies bedeutet, dass beim Einschließen von `animation` ein zuvor erklärter `animation-timeline`-Wert auf `auto` zurückgesetzt wird. Da diese Komponente der Kurzform nur zum Zurücksetzen dient, kann kein spezifischer Wert über `animation` festgelegt werden. Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) müssen Sie `animation-timeline` nach der Deklaration einer `animation`-Kurzform deklarieren, damit sie wirksam wird.

Wenn Sie mehrere kommagetrennte Werte angeben, wird jeder `animation-timeline`-Wert auf eine einzelne Animation in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}-Werte erscheinen. Wenn die Anzahl der Werte in der `animation-timeline`-Deklaration größer ist als die Anzahl der `animation-name`-Werte, werden die überschüssigen Zeitleistenwerte ignoriert. Wenn weniger `animation-timeline`-Werte als `animation-name`-Werte vorhanden sind, werden die `animation-timeline`-Werte der Reihe nach wiederholt, bis jeder `animation-name` eine zugehörige Zeitleiste hat.

Wenn zwei oder mehr Zeitleisten denselben `<dashed-ident>`-Namen und dieselbe Spezifität teilen, wird die zuletzt deklarierte innerhalb der Kaskade verwendet. Wenn keine Zeitleiste gefunden wird, die mit einem in der `animation-timeline` enthaltenen Namen übereinstimmt, wird der `animation-name`, der mit diesem Wert verknüpft ist, keiner Zeitleiste zugewiesen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `animation-timeline`-Eigenschaft zusammen mit den Werten `none`, `auto` und dem Standardwert (`auto`).

#### HTML

Wir haben einen {{htmlelement("article")}} mit drei {{htmlelement("section")}}-Kindern. Jedes `<section>` hat eine einzigartige `id` und ein {{htmlelement("div")}}-Kind.

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

Wir verwenden [Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander zu setzen. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir stylen alle Elemente gleichermaßen und wenden die `rotate`-{{cssxref("@keyframes")}}-Animation an, die das Element um eine volle Drehung dreht. Mit der {{cssxref("animation")}}-Kurzform erklären wir unendliche, 2-sekündige, linear fortschreitende Wiederholungen der `rotate`-Animation, die die Richtung jeder Animation abwechseln.

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

Der einzige Unterschied ist die Deklaration der `animation-timeline` (oder das Fehlen davon im Fall von `default`) für jedes `<div>`.

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
      padding: 1rem 0;
    }
  }
}
```

Da die `animation-timeline`-Eigenschaft in der {{cssxref("animation")}}-Kurzform als rücksetzender Wert enthalten ist, muss die `animation-timeline` nach der `animation`-Kurzform angegeben werden oder mit größerer Spezifität als die `animation`-Kurzform angewendet werden, um wirksam zu sein.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Beachten Sie, dass die Deklaration eines Wertes von `auto` den gleichen Effekt hat, als würde man der `animation-timeline` erlauben, auf diesen Wert zu standardisieren, und dass `none` alle Zeitleisten vom Element entfernt, sodass keine Animation im `none`-Fall erfolgt.

### Festlegen einer benannten Scrollfortschritts-Zeitleiste

In diesem Beispiel wird die Animationszeitleiste auf eine horizontale Scrollfortschritts-Zeitleiste eingestellt.

#### HTML

Unser Container beinhaltet drei Streckerelemente, die breit genug sind, um sicherzustellen, dass unser Container ein Scrollcontainer ist. Das mittlere enthält eine Form, die wir animieren werden.

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

Wir definieren den Container als Flex-Container und setzen eine {{cssxref("width")}} für den Container, die die Hälfte der Breite seiner kombinierten Flex-Kinder beträgt. Durch Hinzufügen eines {{cssxref("overflow-x")}}-Wertes von `scroll` wird er zu einem horizontalen Scrollbalken.

Unsere Scrollfortschritts-Zeitleiste, definiert durch die {{cssxref("scroll-timeline-name")}} und {{cssxref("scroll-timeline-axis")}} Eigenschaften, trägt den Namen `--square-timeline`. Diese Zeitleiste wird auf unser `#shape`-Element angewendet, indem `animation-timeline: --square-timeline` gesetzt wird.

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

Der folgende CSS-Code definiert ein Quadrat, das sich entsprechend der Zeitleiste, die durch die `animation-timeline`-Eigenschaft bereitgestellt wird, dreht. Diese ist auf die oben genannte `--square-timeline`-Zeitleiste eingestellt. Die Animation soll zweimal in alternierenden Richtungen auftreten, sobald es den Ansichtsbereich durchläuft. Wir haben [eckige Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt deutlicher zu machen.

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
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um das animierte Element zu sehen.

{{EmbedLiveSample("named_scroll", "100%", "150px")}}

### Festlegen einer anonymen Scrollfortschritts-Zeitleiste

Dieses Beispiel baut auf dem vorherigen auf und wendet eine anonyme Scrollfortschritts-Zeitleiste unter Verwendung der `scroll()` Funktion an.

#### CSS

Wir übernehmen alle CSS aus dem vorherigen Beispiel, setzen nur die `animation-timeline`-Eigenschaft, um den Wert des vorherigen Beispiels zu überschreiben. Die Zeitleiste wird durch den `scroll(inline nearest)`-Wert bereitgestellt, der den Scrollbalken in der Inline-Richtung des nächstgelegenen Vorfahrenelements mit Scrollbalken auswählt. Dies ist der vertikale Scrollbalken des `#container`-Elements, da die `.stretcher`-Elemente keinen überlaufenden Inhalt haben und daher keine Scroll-Container sind.

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
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um das quadratische Element animiert zu sehen.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Festlegen einer benannten Ansichtsfortschritts-Zeitleiste

In diesem Beispiel demonstrieren wir, wie man eine benannte Ansichtsfortschritts-Zeitleiste erstellt und anwendet. Zwei Elemente werden animiert, wobei unterschiedliche Elemente als Scroller dienen.

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

Unser HTML beinhaltet viel Text in einem Container innerhalb eines Scrollers, den wir der Kürze halber ausgeblendet haben. In der Mitte der Textwand fügen wir zwei `<div>`-Elemente ein, die wir basierend auf der Sichtbarkeit des Elements selbst im ersten Fall und basierend auf der Sichtbarkeit seines Elternteils im zweiten Fall animieren:

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

Wir erstellen eine Keyframe-Animation, die die Deckkraft und Skalierung des Elements ändert, und wenden sie auf beide animierten Elemente an:

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

Das `self`-Element wird explizit als Scroller für sich selbst benannt, indem die `view-timeline-name`-Eigenschaft auf einen `<dashed-ident>` gesetzt wird und auch dieser `<dashed-ident>` Name als Wert der `animation-timeline`-Eigenschaft gesetzt wird. Im `parent`-Fall legen wir den `container` als Scroller für das animierte Element fest:

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

Weitere CSS-Deklarationen wurden der Kürze halber ausgeblendet.

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

Scrollen Sie den Container, um beide Elemente animiert zu sehen.

{{EmbedLiveSample("named_view", "100%", "350px")}}

Beachten Sie, wie die Sichtbarkeit des `self`-Elements seine eigene Animation steuert. In diesem Fall befindet sich das Element beim Eintritt der oberen Kante in den Ansichtsbereich oder den sichtbaren Teil des Scrollbereichs an der `0%` Keyframe und erreicht nur die `100%` Keyframe, wenn die Unterkante den Ansichtsbereich verlässt.

Das `parent`-Element wird erst sichtbar, wenn der Elternteil sichtbar ist. Das bedeutet, dass es, wenn es sichtbar wird, bereits etwa `25%` der Animation durchlaufen hat. Es ist etwa `75%` seiner Animation durchlaufen, wenn es den oberen Rand des Ansichtsbereichs verlässt.

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
- [CSS-Animationsmodule](/de/docs/Web/CSS/Guides/Animations)
- [CSS-scrollgesteuerte Animationsmodule](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
