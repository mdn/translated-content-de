---
title: Grundlegende Konzepte des Scroll-Snap
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul ermöglichen es Ihnen zu definieren, wie das Scrollen zu bestimmten Punkten einrastet, während ein Benutzer durch ein Dokument scrollt.

Die {{Glossary("Scroll_snap", "Scroll-Snap")}}-Funktion lässt Sie die Einrastpunkte definieren, an denen der Scrollport eines {{Glossary("Scroll_container", "Scroll-Containers")}} enden oder nach einer Scrolloperation "einrasten" kann.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie das Scroll-Einrasten definieren können, müssen Sie das Scrollen auf einem Scroll-Container aktivieren. Dies können Sie erreichen, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll-Einrasten auf dem Scroll-Container durch die Verwendung der folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob der scrollbare Viewport einrasten kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird bei jedem Kind des Scroll-Containers gesetzt und Sie können damit die Einrastposition jedes Kindes oder deren Fehlen definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens eingerastet wird und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann bei Kindelementen, die während des Scrollens eingerastet werden, gesetzt werden, um einen Vorsprung aus dem definierten Feld zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf dem Scroll-Container gesetzt werden, um einen Einrastversatz zu schaffen.

Das Beispiel unten demonstriert das Scroll-Einrasten entlang der vertikalen Achse, die durch `scroll-snap-type` definiert wird. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>`-Elements angewendet und legt den Punkt fest, an dem das Scrollen jedes Kindes stoppen sollte.

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

Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft muss die Achse kennen, entlang der das Scroll-Einrasten erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Einrasten entlang beider Achsen zu ermöglichen.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, ob der Inhalt auf jeden Fall an einem bestimmten Punkt einrasten muss, unabhängig davon, wo der Scroll ist. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an einem Punkt einrasten kann, aber nicht muss.

Die Verwendung von `mandatory` sorgt für ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer zu jedem definierten Punkt einrastet. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, oben auf dem Bildschirm zu sehen sein wird, tatsächlich dort ist, wenn das Scrollen beendet ist. Allerdings kann es Probleme geben, wenn der Inhalt größer ist als erwartet – Benutzer könnten sich in der frustrierenden Lage befinden, nie scrollen und einen bestimmten Punkt im Inhalt sehen zu können. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt und nur in Situationen eingesetzt werden, in denen Sie wissen, wie viel Inhalt jederzeit auf dem Bildschirm oder im scrollbaren Bereich vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt innerhalb eines Ihrer Kindelemente den übergeordneten Container überfluten wird, da der Benutzer den überfließenden Inhalt nicht in den sichtbaren Bereich scrollen kann.

Der `proximity`-Wert rastet Kindelemente nur dann an einer Position ein, wenn sie sich in der Nähe befinden, wobei die Browser den genauen Abstand bestimmen. Klicken Sie auf "Play", um das Beispiel unten im MDN Playground zu bearbeiten. Wechseln Sie den Wert von `scroll-snap-type` zwischen `mandatory` und `proximity`, um die Auswirkungen auf das Scrollerlebnis zu sehen.

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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll-Container gesetzt. Wenn der Inhalt nicht über seinen Container hinausgeht, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}}-Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container zu kennzeichnen, zu dem der Inhalt einrasten soll. Klicken Sie auf "Play" im Beispiel unten und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich dies auf das Scrollverhalten auswirkt.

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

Wenn `scroll-snap-type` auf `mandatory` gesetzt ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt ist (wobei es dann auf `none` standardmäßig eingestellt ist), wird der Benutzer nicht in der Lage sein, dieses Element in den sichtbaren Bereich zu scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt bis zum Rand des Scroll-Containers einrastet, oder wenn Sie möchten, dass die Einrastposition leicht von `center` aus versetzt ist, verwenden Sie die {{CSSxRef("scroll-padding")}}-Eigenschaft oder ihre entsprechenden Langversionen, um etwas Abstand hinzuzufügen.

Im folgenden Beispiel ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 50 Pixel vom Beginn des Abschnitts entfernt. Ändern Sie den `scroll-padding`-Wert, um zu sehen, wie sich dieser Abstand ändert.

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

Dies ist potenziell nützlich, wenn Sie ein [feststehendes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, die dazu führen könnte, dass gescrollter Inhalt überlappt wird. Durch die Verwendung von `scroll-padding` können Sie Platz für das feste Element reservieren, wie im Beispiel unten gezeigt, wo das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Polsterung würde die Überschrift einige der Inhalte überlappen, wenn das Einrasten geschieht.

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
  background-color: black;
  color: white;
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

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die Langversionen der Scroll-Margin-Werte können bei Kindelementen gesetzt werden und definieren einen Vorsprung aus dem definierten Feld. Dies ermöglicht unterschiedliche Abstände für verschiedene Kindelemente und kann in Verbindung mit `scroll-padding` beim übergeordneten Element verwendet werden.

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

Mit der {{CSSxRef("scroll-snap-stop")}}-Eigenschaft können Sie festlegen, ob das Scrollen an den definierten Einrastpunkten enden muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder es möglich ist, Abschnitte zu überspringen.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Diese Einstellung kann jedoch auch negative Auswirkungen auf die Benutzererfahrung haben, indem sie verhindert, dass der Benutzer schnell zu seinem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll-Snap-Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
