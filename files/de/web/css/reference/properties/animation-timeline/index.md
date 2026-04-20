---
title: "`animation-timeline` CSS property"
short-title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Timeline an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

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
  - : Die Animation ist nicht mit einer Timeline verknüpft, und es findet keine Animation statt.

- `auto`
  - : Die Timeline der Animation ist die Standard-[`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Definiert das Wurzelelement, den nächsten Scroller oder sich selbst als eine anonyme Scrollfortschrittstimeline und optional die Scrollrichtung des Scrollers.

- {{cssxref("animation-timeline/view", "view()")}}
  - : Definiert den nächsten Vorfahre des Scrollcontainers als eine anonyme Ansichtsfortschrittstimeline, mit der optionalen Überschreibung der Standard-`baseline`-Ausrichtungsrichtung und den `auto` Start- und Endabsätzen.

- `<dashed-ident>`
  - : Der Name einer scrollgesteuerten oder betrachtungsfortschrittgesteuerten Timeline, wie er durch die Eigenschaft {{cssxref('scroll-timeline-name')}} des Scrollcontainers oder die {{cssxref('view-timeline-name')}}-Eigenschaft (oder die Kurzschreibweise {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}) definiert ist.

## Beschreibung

Die Standard-Timeline für eine CSS-Schlüsselbildanimation ist die zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline). Die `animation-timeline`-Eigenschaft kann verwendet werden, um eine benannte oder anonyme Scrollfortschritts- oder Ansichtsfortschrittstimeline festzulegen. Alternativ kann sie verwendet werden, um ausdrücklich die standardmäßige zeitbasierte Dokumenten-Timeline festzulegen, um den Fortschritt einer Elementanimation zu steuern, oder um überhaupt keine Timeline zu haben, wodurch das Element nicht mehr animiert wird.

Die folgenden Arten von Timelines können über `animation-timeline` festgelegt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Die Standard-Dokumenten-Timeline, die durch den seit dem ersten Laden des Dokuments im Browser vergangenen Zeitraum fortschreitet. Diese Timeline ist traditionell mit CSS-Animationen verbunden und wird mit einem Wert von `auto` oder durch das Weglassen eines `animation-timeline`-Wertes ausgewählt, da dies der Standardwert ist.
- [Scroll-Fortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
  - : Die Animation schreitet durch das horizontale oder vertikale Scrollen eines scrollbaren Elements oder _Scrollers_ voran. Das Element, das die Scrollfortschrittstimeline bereitstellt, kann auf zwei Arten angegeben werden:
    - [Benannte Scrollfortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines)
      - : Der Scroller wird ausdrücklich benannt, indem die Eigenschaft {{cssxref("scroll-timeline-name")}} (oder die Kurzschreibweise {{cssxref("scroll-timeline")}}) auf ein {{cssxref("dashed-ident")}} gesetzt wird; dieser `<dashed-ident>` Name wird dann als Wert der `animation-timeline`-Eigenschaft festgelegt.
    - [Anonyme Scrollfortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines)
      - : Die `animation-timeline`-Eigenschaft des zu animierenden Elements wird auf die Funktion {{cssxref("animation-timeline/scroll", "scroll()")}} festgelegt. Die zwei optionalen Parameter der Funktion definieren den Scroller, der die Scrollfortschrittstimeline bereitstellt, und die zu verwendende Scrollachse.
- [Ansichtsfortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)
  - : Eine Schlüsselbildanimation schreitet basierend auf der Veränderung der Sichtbarkeit eines Elements innerhalb eines Scrollers voran; dieses Element wird als _Subjekt_ bezeichnet. Standardmäßig ist die Timeline bei `0%`, wenn das Element zum ersten Mal an einem Rand des Scrollers sichtbar wird, und bei `100%`, wenn sein Endrand den gegenüberliegenden Rand des Scrollers verlässt. Eine Ansichtsfortschrittstimeline kann auf zwei Arten angegeben werden:
    - [Benannte Ansichtsfortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
      - : Das Subjekt wird ausdrücklich benannt, indem die Eigenschaft {{cssxref("view-timeline-name")}} (oder die Kurzschreibweise {{cssxref("view-timeline")}}) auf ein `<dashed-ident>` gesetzt wird. Wenn Sie die `animation-timeline`-Eigenschaft des zu animierenden Elements auf dieses `<dashed-ident>` setzen, steuert die Sichtbarkeit des Subjekts den Fortschritt der Animation des Elements. Beachten Sie, dass das zu animierende Element nicht das gleiche wie das Subjekt sein muss.
    - [Anonyme Ansichtsfortschrittstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function)
      - : Die `animation-timeline`-Eigenschaft des zu animierenden Elements wird auf eine {{cssxref("animation-timeline/view", "view()")}}-Funktion gesetzt, wodurch es basierend auf seiner Sichtbarkeit innerhalb des Scrollports seines nächsten Elternscrollers animiert wird.
- Keine Timeline
  - : Alle Animationstimelines können durch Auswahl eines Wertes von `none` entfernt werden. Wenn `animation-timeline: none` festgelegt ist, findet keine Animation statt, da keine Timeline vorhanden ist, der gefolgt werden kann.

Die `animation-timeline`-Eigenschaft ist in der {{cssxref("animation")}}-Kurzschreibweise als nur zurücksetzbarer Wert enthalten. Dies bedeutet, dass das Einbeziehen von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt. Da diese Komponente der Kurzschreibweise nur zurücksetzbar ist, kann über `animation` kein spezifischer Wert festgelegt werden. Wenn Sie [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) erstellen, müssen Sie `animation-timeline` nach der Deklaration einer `animation`-Kurzschreibweise deklarieren, damit es wirksam wird.

Wenn Sie mehrere durch Kommas getrennte Werte angeben, wird jeder `animation-timeline`-Wert auf eine einzelne Animation in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}-Werte erscheinen. Wenn die Anzahl der Werte in der `animation-timeline`-Deklaration größer als die Anzahl der `animation-name`-Werte ist, werden die überschüssigen Timeline-Werte ignoriert. Wenn weniger `animation-timeline`-Werte als `animation-name`-Werte vorhanden sind, werden die `animation-timeline`-Werte in der Reihenfolge wiederholt, bis jeder `animation-name` eine zugeordnete Timeline hat.

Wenn zwei oder mehr Timelines denselben `<dashed-ident>`-Namen und dieselbe Spezifität haben, wird die zuletzt in der Kaskade deklarierte verwendet. Wenn keine Timeline gefunden wird, die einem im `animation-timeline` enthaltenen Namen entspricht, wird der `animation-name`, der diesem Wert zugeordnet ist, nicht mit einer Timeline verknüpft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung der `animation-timeline`-Eigenschaft sowie der Werte `none`, `auto` und Standard (`auto`).

#### HTML

Wir haben einen {{htmlelement("article")}} mit drei {{htmlelement("section")}}-Kindern. Jedes `<section>` hat eine eindeutige `id` und ein {{htmlelement("div")}}-Kind.

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

Wir verwenden das [flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die drei Abschnitte nebeneinander anzuordnen. Wir verwenden [Generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content), um die `id` anzuzeigen. Wir stylen alle Elemente gleich und wenden die {{cssxref("@keyframes")}}-Animation `rotate` an, die das Element um eine volle Umdrehung dreht. Unter Verwendung der {{cssxref("animation")}}-Kurzschreibweise deklarieren wir unendliche, 2-sekündige, linear voranschreitende Iterationen der `rotate`-Animation, wobei die Richtung jeder Animation abwechselnd geändert wird.

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

Der einzige Unterschied ist die Deklaration von `animation-timeline` (oder das Fehlen davon im Fall von `default`) für jedes `<div>`.

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

Da die `animation-timeline`-Eigenschaft in der {{cssxref("animation")}}-Kurzschreibweise als nur zurücksetzbarer Wert enthalten ist, muss die `animation-timeline` nach der `animation`-Kurzschreibweise kommen oder mit größerer Spezifität als die `animation`-Kurzschreibweise angewendet werden, um wirksam zu werden.

#### Ergebnisse

{{EmbedLiveSample("basic usage", "100%", "170px")}}

Bitte beachten Sie, dass die Deklaration eines Wertes von `auto` denselben Effekt hat wie das Zulassen, dass die `animation-timeline` auf diesen Wert zurückgesetzt wird, und dass `none` alle Timelines vom Element entfernt, sodass im Fall von `none` keine Animation stattfindet.

### Festlegung einer benannten Scrollfortschrittstimeline

In diesem Beispiel wird die Animationstimeline auf eine horizontale Scrollfortschrittstimeline festgelegt.

#### HTML

Unser Container enthält drei Strecker-Elemente, die breit genug sind, um sicherzustellen, dass unser Container ein Scrollcontainer ist. Das mittlere enthält eine Form, die wir animieren werden.

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

Wir definieren den Container als flexiblen Container und setzen eine {{cssxref("width")}} auf den Container, die der Hälfte der Breite seiner kombinierten flexiblen Kinder entspricht. Das Hinzufügen eines {{cssxref("overflow-x")}}-Wertes von `scroll` sorgt dafür, dass er eine horizontale Scrollleiste hat.

Unsere Scrollfortschrittstimeline, die mit den Eigenschaften {{cssxref("scroll-timeline-name")}} und {{cssxref("scroll-timeline-axis")}} definiert wird, heißt `--square-timeline`. Diese Timeline wird auf unser `#shape`-Element angewendet, indem `animation-timeline: --square-timeline` gesetzt wird.

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

Der unten stehende CSS-Code definiert ein Quadrat, das in abwechselnden Richtungen gemäß der von der `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht, die auf die oben genannte `--square-timeline`-Timeline gesetzt ist. Die Animation ist so eingestellt, dass sie zweimal in abwechselnden Richtungen auftritt, während sie durch den Viewport geht. Wir haben [gezackte Ecken](/de/docs/Web/CSS/Reference/Properties/corner-shape) hinzugefügt, um den Animationseffekt offensichtlicher zu machen.

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

### Festlegung einer anonymen Scrollfortschrittstimeline

Dieses Beispiel erweitert das vorherige, indem es eine anonyme Scrollfortschrittstimeline unter Verwendung der `scroll()`-Funktion anwendet.

#### CSS

Wir fügen den gesamten CSS-Code aus dem vorherigen Beispiel ein und setzen lediglich die `animation-timeline`-Eigenschaft, um den Wert des vorherigen Beispiels zu überschreiben. Die Timeline wird durch den Wert `scroll(inline nearest)` bereitgestellt, der die Scrollleiste in der Inline-Richtung des nächsten Vorfahreselements mit Scrollleisten auswählt. Dies ist die vertikale Scrollleiste des `#container`-Elements, da die `.stretcher`-Elemente keine überlaufenden Inhalte haben und daher keine Scrollcontainer sind.

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

Scrollen Sie, um das quadratische Element zu sehen, das animiert wird.

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### Festlegung einer benannten Ansichtsfortschrittstimeline

In diesem Beispiel demonstrieren wir, wie man eine benannte Ansichtsfortschrittstimeline erstellt und anwendet. Zwei Elemente werden animiert, wobei unterschiedliche Elemente als Scroller dienen.

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

Unser HTML enthält viel Text in einem Container innerhalb eines Scrollers, den wir aus Gründen der Kürze ausgeblendet haben. In der Mitte der Textwand fügen wir zwei `<div>`-Elemente ein, die wir basierend auf der Sichtbarkeit des Elements selbst im ersten Fall und basierend auf der Sichtbarkeit seines Elternteils im zweiten Fall animieren werden:

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

Wir erstellen eine Schlüsselbildanimation, die die Deckkraft und Größe des Elements ändert, und wenden sie auf beide animierten Elemente an:

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

Das `self`-Element wird ausdrücklich als Scroller für sich selbst benannt, indem die Eigenschaft `view-timeline-name` auf ein `<dashed-ident>` gesetzt und auch dieser `<dashed-ident>`-Name als Wert der `animation-timeline`-Eigenschaft festgelegt wird. Im Fall von `parent` setzen wir den `container` als Scroller für das animierte Element:

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

Scrollen Sie den Container, um beide Elemente zu sehen, die animiert werden.

{{EmbedLiveSample("named_view", "100%", "350px")}}

Beachten Sie, wie die Sichtbarkeit des `self`-Elements seine eigene Animation steuert. In diesem Fall ist das Element beim Eintritt des oberen Randes in den Viewport oder den sichtbaren Teil des Scrollports bei `0%` des Schlüsselbildes und erreicht erst `100%`, wenn der untere Rand den Viewport verlässt.

Das `parent`-Element wird erst sichtbar, wenn dieser Elternteil sichtbar ist, was bedeutet, dass es bereits etwa `25%` der Animation durchlaufen hat, wenn es in Sicht kommt. Wenn es den oberen Rand des Viewports verlässt, hat es erst etwa `75%` der Animation durchlaufen.

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
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
