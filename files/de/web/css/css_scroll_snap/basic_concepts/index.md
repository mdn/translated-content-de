---
title: Grundkonzepte des Scroll Snap
short-title: Basic concepts
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die Eigenschaften im Modul [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) ermöglichen es Ihnen, festzulegen, wie das Scrollen zu bestimmten Punkten schnappt, während ein Benutzer durch ein Dokument scrollt.

Die {{Glossary("Scroll_snap", "Scroll Snap")}}-Funktion ermöglicht es Ihnen, die Snap-Positionen zu definieren, an denen das {{Glossary("Scroll_container", "Scroll-Container")}}-Viewport nach Abschluss eines Scrollvorgangs enden oder "schnappen" kann.

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie Scroll Snapping definieren können, müssen Sie das Scrollen auf einem Scroll Container aktivieren. Dies können Sie tun, indem Sie sicherstellen, dass der Scroll Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll Snapping auf dem Scroll Container mit den folgenden zwei Haupteigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob das scrollbare Viewport gesnappt werden kann, ob das Snapping erforderlich oder optional ist und auf welcher Achse das Snapping erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll Containers gesetzt, und Sie können sie verwenden, um die Snap-Position jedes Kindes oder deren Fehlen zu definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft sorgt dafür, dass ein Kind während des Scrollens gesnappt wird und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kindelemente gesetzt werden, die während des Scrollens gesnappt werden, um einen Versatz vom definierten Kasten zu erzeugen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll Container gesetzt werden, um einen Snapping-Offset zu erzeugen.

Das folgende Beispiel demonstriert Scroll Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich gilt `scroll-snap-align` für alle Kinder des `<section>`-Elements und bestimmt den Punkt, an dem das Scrollen jedes Kindes stoppen soll.

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

Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft muss die Achse kennen, entlang derer das Scroll Snapping stattfindet. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll Snapping entlang beider Achsen zu aktivieren.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, dass der Inhalt unbedingt an einem bestimmten Punkt schnappen muss, egal wo sich das Scroll befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt möglicherweise an den Punkt snappen kann, aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis — Sie wissen, dass der Browser immer an jedem definierten Punkt die Seite snappt. Dies bedeutet, dass Sie sicher sein können, dass etwas, was Sie am oberen Rand des Bildschirms erwarten, dort auch sein wird, wenn das Scrollen beendet ist. Es kann jedoch Probleme verursachen, wenn der Inhalt größer ist als erwartet — Benutzer könnten sich in der frustrierenden Lage befinden, dass sie nie zu einem bestimmten Punkt im Inhalt scrollen können. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt werden und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder dem scrollbaren Abschnitt zu jeder Zeit vorhanden ist.

> [!NOTE]
> Verwenden Sie nie `mandatory`, wenn der Inhalt eines Ihrer Kindelemente den übergeordneten Container überläuft, da der Benutzer dann nicht in der Lage sein wird, den überfließenden Inhalt sichtbar zu machen.

Der Wert `proximity` snappt Kindelemente nur an eine Position, wenn sie sich in der Nähe befinden, wobei die Browser den genauen Abstand bestimmen.
Klicken Sie auf "Play", um das Beispiel unten im MDN Playground zu bearbeiten. Ändern Sie den Wert von `scroll-snap-type` zwischen `mandatory` und `proximity`, um den Effekt auf das Scrollerlebnis zu sehen.

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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf den Scroll Container gesetzt.
Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}}-Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll Container anzugeben, zu dem der Inhalt schnappen sollte. Klicken Sie auf "Play" im folgenden Beispiel und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich das Scroll-Verhalten ändert.

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

Wenn `scroll-snap-type` `mandatory` ist und `scroll-snap-align` bei einem Kind auf `none` gesetzt oder nicht gesetzt ist (wobei es standardmäßig auf `none` gesetzt wird), kann der Benutzer dieses Element nicht in den sichtbaren Bereich scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt an den Rand des Scroll Containers snappt, oder wenn Sie die Snap-Position bei Verwendung von `center` leicht vom Zentrum versetzen möchten, verwenden Sie die {{CSSxRef("scroll-padding")}}-Eigenschaft oder ihre entsprechenden Langformwerte, um etwas Padding hinzuzufügen.

Im folgenden Beispiel ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts snappt, hält das Scrollen 50 Pixel vom Anfang des Abschnitts entfernt an. Ändern Sie den Wert von `scroll-padding`, um zu sehen, wie sich der Abstand ändert.

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

Dies ist potenziell nützlich, wenn Sie ein [fixed](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning)-Element wie eine Navigationsleiste haben, die über den gescrollten Inhalt gelegt werden könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das fixe Element reservieren, wie im Beispiel unten gezeigt, in dem das `<h1>`-Element während des Scrollens auf dem Bildschirm bleibt. Ohne Padding würde die Überschrift beim Snappen über einige Inhalte überlappen.

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

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die Langform-Scroll-Margin-Werte können auf Kindelemente gesetzt werden, um einen Versatz vom definierten Kasten zu bestimmen. Dies ermöglicht unterschiedlich große Abstände für verschiedene Kindelemente und kann in Verbindung mit `scroll-padding` auf dem übergeordneten Element verwendet werden.

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

Mit der {{CSSxRef("scroll-snap-stop")}}-Eigenschaft können Sie angeben, ob das Scrollen an den definierten Snap-Punkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder über Abschnitte hinweg springt.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich an ihnen vorbeiscrollen. Diese Einstellung kann jedoch auch die Benutzererfahrung negativ beeinflussen, da sie Benutzer daran hindert, schnell zu ihrem gewünschten Inhalt zu scrollen.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) am 12 Days of Web (2019)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
