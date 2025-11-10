---
title: Grundkonzepte des Scroll-Snaps
short-title: Basic concepts
slug: Web/CSS/Guides/Scroll_snap/Basic_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Eigenschaften im [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul ermöglichen es Ihnen, festzulegen, wie das Scrolling zu bestimmten Punkten springt, wenn ein Benutzer durch ein Dokument scrollt.

Die {{Glossary("Scroll_snap", "Scroll Snap")}}-Funktion ermöglicht es Ihnen, die Snap-Positionen zu definieren, an denen ein {{Glossary("Scroll_container", "Scroll-Container")}}'s Scrollport enden oder "snappen" kann, nachdem ein Scrollvorgang abgeschlossen wurde.

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie das Scroll-Snappen definieren können, müssen Sie das Scrollen in einem Scroll-Container aktivieren. Dies können Sie tun, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll-Snappen im Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob der scrollbare Viewport snappen kann, ob Snappen erforderlich oder optional ist und auf welcher Achse das Snappen erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll-Containers gesetzt, und Sie können damit die Snap-Position jedes Kindes oder das Fehlen davon definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens gesnappt wird und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kind-Elemente gesetzt werden, die während des Scrollens gesnappt werden, um einen Versatz vom definierten Rahmen zu erstellen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container gesetzt werden, um einen Snapping-Offset zu erstellen.

Das untenstehende Beispiel zeigt das Scroll-Snappen entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>`-Elements angewendet, was den Punkt bestimmt, an dem das Scrollen jedes Kindes enden sollte.

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
  border: 4px solid #333333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #cccccc;
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

Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft muss die Achse kennen, entlang der das Scroll-Snappen erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um den Scroll-Snap auf beiden Achsen wirken zu lassen.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, ob der Inhalt _an_ einem bestimmten Punkt snappen muss, unabhängig von der Position des Scrolls. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt möglicherweise an den Punkt snappen kann, aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer zu jedem definierten Punkt snappen wird. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, oben auf dem Bildschirm ist, dort sein wird, wenn das Scrollen endet. Allerdings kann es Probleme verursachen, wenn der Inhalt größer ist als erwartet – Benutzer könnten sich in der frustrierenden Situation befinden, dass sie nie in der Lage sind, einen bestimmten Punkt im Inhalt zu scrollen und anzuzeigen. Daher sollte die Verwendung von `mandatory` sorgfältig abgewogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder im scrollbaren Abschnitt zu jedem Zeitpunkt vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt in einem Ihrer Kind-Elemente den übergeordneten Container überlappen wird, da der Benutzer den überfließenden Inhalt nicht in den Blick scrollen kann.

Der Wert `proximity` snapt nur Kind-Elemente an eine Position, wenn sie in der Nähe sind, wobei die genaue Entfernung von den Browsern bestimmt wird.
Klicken Sie auf "Play", um das Beispiel unten im MDN Playground zu bearbeiten. Wechseln Sie den `scroll-snap-type`-Wert zwischen `mandatory` und `proximity`, um den Effekt auf die Scrollerfahrung zu sehen.

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
  border: 4px solid #333333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #cccccc;
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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} im Scroll-Container gesetzt.
Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}}-Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, an den der Inhalt snappen sollte. Klicken Sie auf "Play" im Beispiel unten und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich das Scrollverhalten ändert.

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
  border: 4px solid #333333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #cccccc;
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

Wenn `scroll-snap-type` auf `mandatory` eingestellt ist und `scroll-snap-align` auf einem Kind entweder auf `none` eingestellt ist oder nicht festgelegt ist (in welchem Fall es standardmäßig auf `none` gesetzt wird), kann der Benutzer dieses Element nicht in den Blick scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt an den Rand des Scroll-Containers snappt, oder wenn Sie die Snap-Position beim Verwenden von `center` leicht vom Mittelpunkt versetzt haben möchten, verwenden Sie die {{CSSxRef("scroll-padding")}}-Eigenschaft oder ihre entsprechenden ausführlichen Werte, um etwas Padding hinzuzufügen.

Im untenstehenden Beispiel ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts snappt, stoppt das Scrollen 50 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den `scroll-padding`-Wert zu ändern, um zu sehen, wie sich dies auf die Entfernung auswirkt.

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
  border: 4px solid #333333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #cccccc;
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

Dies ist potenziell nützlich, wenn Sie ein [feststehendes](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Element, wie eine Navigationsleiste, haben, die den gescrollten Inhalt überlappen könnte. Mit `scroll-padding` können Sie Platz für das feste Element reservieren, wie im Beispiel unten gezeigt, in dem das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Padding würde die Überschrift beim Snappen einen Teil des Inhalts überlappen.

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
  border: 4px solid #333333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #cccccc;
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

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die ausführlichen Scroll-Margin-Werte können auf Kind-Elemente gesetzt werden und definieren einen Versatz vom definierten Rahmen. Dies ermöglicht unterschiedliche Mengen an Raum für verschiedene Kind-Elemente und kann in Verbindung mit `scroll-padding` auf dem Elternteil verwendet werden.

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
  border: 4px solid #333333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #cccccc;
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

Mit der {{CSSxRef("scroll-snap-stop")}}-Eigenschaft können Sie angeben, ob das Scrollen an den definierten Snap-Punkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder über Abschnitte hinweg gesprungen werden kann.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich an ihnen vorbeiscrollen. Diese Einstellung kann jedoch die Benutzererfahrung negativ beeinflussen, indem sie den Benutzer daran hindert, schnell zum gewünschten Inhalt zu scrollen.

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
