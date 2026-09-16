---
title: "`animation-timeline` CSS property"
short-title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-timeline`** legt die Timeline fest, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

## Syntax

```css
/* Keyword values */
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

Die Eigenschaft `animation-timeline` wird als ein oder mehrere durch Kommas getrennte Werte angegeben, wobei jeder davon einer der folgenden sein kann:

- `none`
  - : Die Animation ist keiner Timeline zugeordnet, und es findet keine Animation statt.

- `auto`
  - : Die Timeline der Animation ist die standardmäßige [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das Root-Element, den nächsten Scroller oder das Element selbst als anonyme Scroll-Fortschritts-Timeline und optional die Scrollrichtung des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert den nächsten übergeordneten Scroll-Container als anonyme View-Fortschritts-Timeline und überschreibt optional die Standard-Achsenrichtung `baseline` sowie die automatischen Start- und End-Insets `auto`.

- `<dashed-ident>`
  - : Der Name einer scrollgesteuerten oder View-Fortschritts-Timeline, wie durch die Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} des Scroll-Containers definiert (oder durch die Kurzformeigenschaft {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}).

## Beschreibung

Die Standard-Timeline für eine CSS-Keyframe-Animation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die Eigenschaft `animation-timeline` kann verwendet werden, um eine benannte oder anonyme Scroll-Fortschritts- oder View-Fortschritts-Timeline festzulegen. Alternativ kann sie verwendet werden, um die standardmäßige zeitbasierte Dokument-Timeline explizit festzulegen, den Fortschritt einer Animation eines Elements zu steuern oder überhaupt keine Timeline zu verwenden; in diesem Fall wird das Element nicht animiert.

Über `animation-timeline` können die folgenden Typen von Timelines festgelegt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die Standard-Dokument-Timeline, die durch das Verstreichen der Zeit seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Timeline, die traditionell mit CSS-Animationen verbunden ist. Sie wird mit dem Wert `auto` ausgewählt oder indem überhaupt kein Wert für `animation-timeline` angegeben wird, da dies der Standardwert ist.
- [Scroll-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation schreitet durch das horizontale oder vertikale Scrollen eines scrollbaren Elements oder _Scrollers_ fort. Das Element, das die Scroll-Fortschritts-Timeline bereitstellt, kann auf zwei Arten angegeben werden:
    - [Benannte Scroll-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird explizit benannt, indem die Eigenschaft {{cssxref("scroll-timeline-name")}} (oder die Kurzformeigenschaft {{cssxref("scroll-timeline")}}) auf ein {{cssxref("dashed-ident")}} gesetzt wird; dieser Name `<dashed-ident>` wird dann als Wert der Eigenschaft `animation-timeline` festgelegt.
    - [Anonyme Scroll-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf die Funktion {{cssxref("animation-timeline/scroll", "scroll()")}} gesetzt. Die zwei optionalen Parameter der Funktion definieren den Scroller, der die Scroll-Fortschritts-Timeline bereitstellt, und die zu verwendende Scroll-Achse.
- [View-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Keyframe-Animation schreitet basierend auf der Änderung der Sichtbarkeit eines Elements innerhalb eines Scrollers fort; dieses Element wird als _Subjekt_ bezeichnet. Standardmäßig befindet sich die Timeline bei `0%`, wenn das Element erstmals an einer Kante des Scrollers sichtbar wird, und bei `100%`, wenn seine Endkante die gegenüberliegende Kante des Scrollers verlässt. Eine View-Fortschritts-Timeline kann auf zwei Arten angegeben werden:
    - [Benannte View-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subjekt wird explizit benannt, indem die Eigenschaft {{cssxref("view-timeline-name")}} (oder die Kurzformeigenschaft {{cssxref("view-timeline")}}) auf ein `<dashed-ident>` gesetzt wird. Wenn Sie die Eigenschaft `animation-timeline` des zu animierenden Elements auf dieses `<dashed-ident>` setzen, steuert die Sichtbarkeit des Subjekts den Fortschritt der Animation des Elements. Beachten Sie, dass das zu animierende Element nicht mit dem Subjekt identisch sein muss.
    - [Anonyme View-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die Eigenschaft `animation-timeline` des zu animierenden Elements wird auf eine Funktion {{cssxref("animation-timeline/view", "view()")}} gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Scrollports seines nächsten übergeordneten Scrollers animiert wird.
- Keine Timeline
  - : Alle Animations-Timelines können durch Auswahl des Werts `none` entfernt werden. Wenn `animation-timeline: none` gesetzt ist, findet keine Animation statt, da keine Timeline vorhanden ist, der gefolgt werden kann.

Die Eigenschaft `animation-timeline` ist in der Kurzformeigenschaft {{cssxref("animation")}} als Wert enthalten, der nur zurückgesetzt werden kann. Das bedeutet, dass die Verwendung von `animation` einen zuvor deklarierten Wert von `animation-timeline` auf `auto` zurücksetzt. Da diese Komponente der Kurzform nur zurückgesetzt werden kann, kann über `animation` kein bestimmter Wert festgelegt werden. Beim Erstellen von [scrollgesteuerten CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) müssen Sie `animation-timeline` nach einer beliebigen Kurzformdeklaration von `animation` deklarieren, damit sie wirksam wird.

Wenn Sie mehrere durch Kommas getrennte Werte angeben, wird jeder Wert von `animation-timeline` in der Reihenfolge, in der die Werte von {{cssxref("animation-name")}} erscheinen, auf eine einzelne Animation angewendet. Ist die Anzahl der Werte in der Deklaration `animation-timeline` größer als die Anzahl der Werte von `animation-name`, werden die überschüssigen Timeline-Werte ignoriert. Gibt es weniger Werte von `animation-timeline` als Werte von `animation-name`, werden die Werte von `animation-timeline` der Reihe nach wiederholt, bis jedem `animation-name` eine Timeline zugeordnet ist.

Wenn zwei oder mehr Timelines denselben Namen `<dashed-ident>` und dieselbe Spezifität haben, wird die zuletzt innerhalb der Kaskade deklarierte verwendet. Wenn keine Timeline gefunden wird, die einem in `animation-timeline` enthaltenen Namen entspricht, wird der diesem Wert zugeordnete `animation-name` keiner Timeline zugeordnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung der Eigenschaft `animation-timeline` zusammen mit den Werten `none`, `auto` und dem Standardwert (`auto`).

#### HTML

Wir haben ein {{htmlelement("article")}} mit drei untergeordneten {{htmlelement("section")}}-Elementen. Jedes `<section>` hat eine eindeutige `id` und ein untergeordnetes {{htmlelement("div")}}-Element.

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

Wir verwenden das [Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander anzuordnen. Wir verwenden [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir gestalten alle Elemente gleich und wenden die Animation `rotate` mit {{cssxref("@keyframes")}} an, die das Element um eine volle Umdrehung dreht. Mit der Kurzformeigenschaft {{cssxref("animation")}} deklarieren wir unendliche, zwei Sekunden lange, linear fortschreitende Iterationen der Animation `rotate`, wobei die Richtung jeder Animation abwechselt.

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

Der einzige Unterschied ist die Deklaration von `animation-timeline` – oder ihr Fehlen im Fall von `default` – für jedes `<div>`.

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

Da die Eigenschaft `animation-timeline` in der Kurzformeigenschaft {{cssxref("animation")}} als Wert enthalten ist, der nur zurückgesetzt werden kann, muss `animation-timeline` nach der Kurzformeigenschaft `animation` stehen oder mit einer höheren Spezifität als die Kurzformeigenschaft `animation` angewendet werden, damit sie wirksam wird.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Beachten Sie, dass die Deklaration eines Werts von `auto` denselben Effekt hat wie das Standardverhalten von `animation-timeline`, und dass `none` alle Timelines vom Element entfernt, sodass im Fall von `none` keine Animation stattfindet.

### Festlegen einer benannten Scroll-Fortschritts-Timeline

In diesem Beispiel wird die Animations-Timeline auf eine horizontale Scroll-Fortschritts-Timeline gesetzt.

#### HTML

Unser Container enthält drei Streckelemente, die breit genug sind, damit unser Container ein Scroll-Container wird. Das mittlere enthält eine Form, die wir animieren werden.

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

Wir definieren den Container als Flex-Container und legen für den Container eine {{cssxref("width")}} fest, die halb so breit ist wie seine kombinierten Flex-Kindelemente. Das Hinzufügen eines {{cssxref("overflow-x")}}-Werts von `scroll` sorgt dafür, dass er eine horizontale Scrollbar erhält.

Unsere Scroll-Fortschritts-Timeline, die mit den Eigenschaften {{cssxref("scroll-timeline-name")}} und {{cssxref("scroll-timeline-axis")}} definiert wird, heißt `--square-timeline`. Diese Timeline wird mithilfe von `animation-timeline: --square-timeline` auf unser Element `#shape` angewendet.

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

Das folgende CSS definiert ein Quadrat, das entsprechend der von der Eigenschaft `animation-timeline` bereitgestellten Timeline in abwechselnde Richtungen rotiert, welche auf die oben benannte Timeline `--square-timeline` gesetzt ist. Die Animation ist so eingestellt, dass sie beim Durchlaufen des Viewports zweimal und in abwechselnden Richtungen ausgeführt wird. Wir haben [ausgeklinkte Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt deutlicher zu machen.

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

### Festlegen einer anonymen Scroll-Fortschritts-Timeline

Dieses Beispiel erweitert das vorherige und wendet mithilfe der Funktion `scroll()` eine anonyme Scroll-Fortschritts-Timeline an.

#### CSS

Wir übernehmen das gesamte CSS aus dem vorherigen Beispiel und setzen nur die Eigenschaft `animation-timeline`, um den Wert aus dem vorherigen Beispiel zu überschreiben. Die Timeline wird durch den Wert `scroll(inline nearest)` bereitgestellt, der die Scrollbar in Inline-Richtung des nächsten übergeordneten Elements auswählt, das Scrollbars hat. Dies ist die vertikale Scrollbar des Elements `#container`, da die Elemente `.stretcher` keinen überlaufenden Inhalt haben und daher keine Scroll-Container sind.

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

Scrollen Sie, um das animierte quadratische Element zu sehen.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Festlegen einer benannten View-Fortschritts-Timeline

In diesem Beispiel demonstrieren wir, wie eine benannte View-Fortschritts-Timeline erstellt und angewendet wird. Zwei Elemente werden animiert, wobei unterschiedliche Elemente als Scroller dienen.

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

Unser HTML enthält viel Text in einem Container innerhalb eines Scrollers, den wir aus Gründen der Kürze ausgeblendet haben. In der Mitte des Textblocks fügen wir zwei `<div>`-Elemente ein, die wir im ersten Fall basierend auf der Sichtbarkeit des Elements selbst und im zweiten Fall basierend auf der Sichtbarkeit seines übergeordneten Elements animieren:

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

Wir erstellen eine Keyframe-Animation, welche die Deckkraft und Skalierung des Elements ändert, und wenden sie auf beide animierten Elemente an:

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

Das Element `self` wird explizit als Scroller für sich selbst benannt, indem die Eigenschaft `view-timeline-name` auf ein `<dashed-ident>` gesetzt wird und dieser Name `<dashed-ident>` ebenfalls als Wert der Eigenschaft `animation-timeline` festgelegt wird. Im Fall von `parent` setzen wir den `container` als Scroller für das animierte Element:

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

Weitere CSS-Deklarationen wurden aus Gründen der Kürze ausgeblendet.

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

Beachten Sie, wie die Sichtbarkeit des Elements `self` seine eigene Animation steuert. In diesem Fall befindet sich das Element beim `0%`-Keyframe, wenn die obere Kante den Viewport bzw. den sichtbaren Teil des Scrollports betritt, und erreicht den `100%`-Keyframe erst, wenn die untere Kante den Viewport verlässt.

Das Element `parent` wird erst sichtbar, wenn dieses übergeordnete Element sichtbar ist. Das bedeutet, dass es beim Erscheinen bereits etwa `25%` der Animation durchlaufen hat. Wenn es den oberen Bereich des Viewports verlässt, hat es erst etwa `75%` seiner Animation durchlaufen.

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
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
