---
title: Grundlegende Konzepte des Scroll Snap
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul ermöglichen es Ihnen, zu definieren, wie das Scrollen an bestimmten Punkten einrastet, wenn ein Benutzer durch ein Dokument scrollt.

Die {{Glossary("Scroll_snap", "scroll snap")}}-Funktion ermöglicht es Ihnen, die Positionen zu definieren, an denen der {{Glossary("Scroll_container", "scroll container")}}-Ansichtsbereich nach einem abgeschlossenen Scrollvorgang enden oder "einrasten" soll.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie Scroll-Snapping definieren können, müssen Sie den Bildlauf auf einem Scroll-Container aktivieren. Dies können Sie erreichen, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Anschließend können Sie Scroll-Snapping im Scroll-Container mithilfe der folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob der scrollbare Ansichtsbereich einrastbar ist, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird für jedes Kind des Scroll-Containers festgelegt und Sie können sie verwenden, um die Einrastposition jedes Kindes zu definieren oder deren Fehlen.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens einrastet und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann an Kind-Elementen gesetzt werden, die während des Scrollens einrasten, um einen Vorsprung vom definierten Box zu erstellen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann am Scroll-Container gesetzt werden, um einen Einrastversatz zu erstellen.

Das folgende Beispiel demonstriert das Scroll-Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert wird. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>`-Elements angewendet und bestimmt den Punkt, an dem das Scrollen jedes Kindes stoppen soll.

```html live-sample___mandatory-y
<article class="scroller">
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___mandatory-y
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___mandatory-y
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("mandatory-y", "", "350px")}}

## Verwendung von scroll-snap-type

Die Eigenschaft {{CSSxRef("scroll-snap-type")}} muss die Achse wissen, entlang derer das Scroll-Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Keyword `both` verwenden, um das Scroll-Snapping entlang beider Achsen zu aktivieren.

Sie können auch die Keywords `mandatory` oder `proximity` übergeben. Das Keyword `mandatory` weist den Browser an, dass der Inhalt _muss_ an einem bestimmten Punkt einrasten, egal wo sich das Scrollen befindet. Das Keyword `proximity` bedeutet, dass der Inhalt möglicherweise an dem Punkt einrastet, aber nicht zwingend muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis — Sie wissen, dass der Browser immer an jedem definierten Punkt einrastet. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie an der Spitze des Bildschirms erwarten, dort sein wird, wenn das Scrollen beendet ist. Dies kann jedoch problematisch sein, wenn der Inhalt größer ist als erwartet — Benutzer könnten sich in der frustrierenden Lage befinden, nie in der Lage zu sein, einen bestimmten Punkt im Inhalt zu scrollen und anzuzeigen. Daher sollte die Verwendung von `mandatory` sorgfältig abgewogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt sich auf dem Bildschirm oder im scrollbaren Bereich befindet.

> [!NOTE]
> Verwenden Sie `mandatory` nie, wenn der Inhalt innerhalb eines Ihrer Kind-Elemente den übergeordneten Container überläuft, da der Benutzer den überlaufenden Inhalt nicht in den Ansichtsbereich scrollen kann.

Der `proximity`-Wert lässt Kind-Elemente nur dann an eine Position einrasten, wenn sie sich in der Nähe befinden, wobei die Browser den genauen Abstand bestimmen.
Klicken Sie auf "Abspielen", um das folgende Beispiel im MDN Playground zu bearbeiten. Wechseln Sie den `scroll-snap-type`-Wert zwischen `mandatory` und `proximity`, um zu sehen, wie sich dies auf das Scroll-Erlebnis auswirkt.

```html live-sample___mandatory-proximity
<article class="scroller">
  <section>
    <h2>Section one</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section two</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section three</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
</article>
```

```css hidden live-sample___mandatory-proximity
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___mandatory-proximity
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("mandatory-proximity", "", "350px")}}

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll-Container eingestellt. Wenn der Inhalt nicht über seinen Container hinausgeht, gibt es nichts, was gescrollt werden kann.

## Verwendung von scroll-snap-align

Die gültigen Werte für die Eigenschaft {{CSSxRef("scroll-snap-align")}} umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, an dem der Inhalt einrasten soll. Klicken Sie auf "Abspielen" im Beispiel unten und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich dies auf das Scroll-Verhalten auswirkt.

```html hidden live-sample___align
<article class="scroller">
  <section>
    <h2>Section one</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section two</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section three</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
</article>
```

```css hidden live-sample___align
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___align
.scroller {
  height: 200px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("align", "", "250px")}}

Wenn `scroll-snap-type` `mandatory` ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt oder nicht gesetzt ist (in welchem Fall es standardmäßig auf `none` eingestellt ist), kann der Benutzer dieses Element nicht in den Ansichtsbereich scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt an die Kante des Scroll-Containers einrastet, oder wenn Sie möchten, dass die Einrastposition leicht vom Zentrum versetzt ist, wenn Sie `center` verwenden, verwenden Sie die Eigenschaft {{CSSxRef("scroll-padding")}} oder deren entsprechende Einzelwerte, um etwas Abstände hinzuzufügen.

Im Beispiel unten wird `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 50 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den `scroll-padding`-Wert zu ändern, um zu sehen, wie sich dies auf die Entfernung auswirkt.

```html live-sample___scroll-padding
<article class="scroller">
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-padding
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-padding
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 50px;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("scroll-padding", "", "350px")}}

Dies ist potenziell nützlich, wenn Sie ein [festes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, das dazu führen könnte, dass gescrollte Inhalte überlappen. Mit `scroll-padding` können Sie Platz für das feste Element reservieren, wie im Beispiel unten gezeigt, wo das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Padding würde die Überschrift einige der Inhalte überlappen, wenn das Einrasten erfolgt.

```html hidden live-sample___scroll-padding-sticky
<article class="scroller">
  <h1>Sticky Heading</h1>
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-padding-sticky
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-padding-sticky
.scroller h1 {
  position: sticky;
  top: 0;
  min-height: 40px;
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 0;
}

.scroller h2 {
  margin: 0;
  padding: 0;
}

.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 50px;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("scroll-padding-sticky", "", "350px")}}

## Verwendung von scroll-margin

Die Eigenschaft {{CSSxRef("scroll-margin")}} oder die Einzelwerte der Scroll-Marge können an Kind-Elementen gesetzt werden und definieren einen Vorsprung vom definierten Box. Dies ermöglicht unterschiedliche Abstände für verschiedene Kind-Elemente und kann in Verbindung mit `scroll-padding` am übergeordneten Element verwendet werden.

```html hidden live-sample___scroll-margin
<article class="scroller">
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-margin
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-margin
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
  scroll-margin: 40px;
}
```

{{EmbedLiveSample("scroll-margin", "", "350px")}}

## Verwendung von scroll-snap-stop

Mit der Eigenschaft {{CSSxRef("scroll-snap-stop")}} können Sie festlegen, ob das Scrollen an den definierten Einrastpunkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder Abschnitte übersprungen werden können.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Dieses Setting kann jedoch auch negative Auswirkungen auf die Benutzererfahrung haben, indem es verhindert, dass der Benutzer schnell zu dem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS-Scroll-Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
