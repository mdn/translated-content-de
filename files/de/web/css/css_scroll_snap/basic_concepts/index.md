---
title: Grundlegende Konzepte des Scroll Snap
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul ermöglichen es Ihnen, zu definieren, wie das Scrollen an bestimmten Punkten stoppt, während ein Benutzer durch ein Dokument scrollt.

Das {{Glossary("Scroll_snap", "scroll snap")}}-Feature ermöglicht es Ihnen, die Stopp-Punkte zu definieren, an denen der Scroll-Bereich eines {{Glossary("Scroll_container", "scroll container")}} nach einer Scroll-Operation enden oder "einrasten" kann.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie Scroll Snap definieren können, müssen Sie das Scrollen in einem Scroll Container aktivieren. Dies können Sie sicherstellen, indem Sie dem Scroll Container eine definierte Größe zuweisen und {{cssxref("overflow")}} aktivieren.

Scroll Snap kann dann im Scroll Container mit den folgenden zwei Schlüssel-Eigenschaften definiert werden:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob und wie der scrollbare Ansichtspunkt einrasten kann, ob Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll Containers angewendet und Sie können damit die Einrastposition jedes Kindes oder das Fehlen dieser Position definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens eingerastet wird und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kindelemente angewendet werden, die während des Scrollens eingerastet werden, um einen Abstand vom definierten Rahmen zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll Container angewendet werden, um einen Einrastversatz zu erstellen.

Das folgende Beispiel zeigt Scroll Snap entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich wird `scroll-snap-align` auf alle Kindelemente des `<section>`-Elements angewendet und bestimmt, an welchem Punkt das Scrollen jedes Kindes stoppen soll.

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

Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft benötigt die Angabe der Achse, entlang derer das Einrasten beim Scrollen erfolgt. Diese kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, damit das Einrasten beim Scrollen auf beiden Achsen funktioniert.

Es können auch die Schlüsselwörter `mandatory` oder `proximity` verwendet werden. Das Schlüsselwort `mandatory` gibt dem Browser an, ob der Inhalt _unbedingt_ an einem bestimmten Punkt einrasten muss, unabhängig davon, wo sich der Scroll befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an dem Punkt einrasten kann, aber nicht muss.

Die Verwendung von `mandatory` sorgt für ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer an jedem definierten Punkt einrasten wird. Dadurch können Sie sicher sein, dass etwas, das Sie erwarten, oben auf dem Bildschirm zu sehen ist, dort sein wird, wenn das Scrollen beendet ist. Es kann jedoch Probleme verursachen, wenn der Inhalt größer ist als erwartet – Benutzer könnten in der unangenehmen Lage sein, nie an einen bestimmten Punkt im Inhalt scrollen zu können. Daher sollte die Verwendung von `mandatory` sorgfältig abgewogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt zu jedem Zeitpunkt auf dem Bildschirm oder der scrollbaren Sektion ist.

> [!NOTE]
> Verwenden Sie `mandatory` niemals, wenn der Inhalt in einem Ihrer Kindelemente die Elternelement-Grenzen überschreitet, da der Benutzer sonst den überlaufenden Inhalt nicht ins Sichtfeld scrollen kann.

Der Wert `proximity` rastet Kind-Elemente nur dann ein, wenn sie sich in der Nähe befinden, wobei die exakte Distanz von den Browsern bestimmt wird. Klicken Sie auf "Play", um das Beispiel unten im MDN Playground zu bearbeiten. Ändern Sie den Wert von `scroll-snap-type` zwischen `mandatory` und `proximity`, um den Effekt, den dies auf das Scroll-Erlebnis hat, zu sehen.

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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll Container gesetzt. Wenn der Inhalt nicht den Container überschreitet, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}}-Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll Container anzugeben, an dem der Inhalt einrasten soll. Klicken Sie auf "Play" im folgenden Beispiel und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich dies auf das Scroll-Verhalten auswirkt.

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

Wenn `scroll-snap-type` auf `mandatory` steht und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt ist (in welchem Fall es standardmäßig `none` ist), wird der Benutzer nicht in der Lage sein, dieses Element ins Sichtfeld zu scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt an den Rand des Scroll Containers einrastet, oder wenn Sie möchten, dass die Einrastposition leicht von der Mitte versetzt ist, wenn Sie `center` verwenden, verwenden Sie die {{CSSxRef("scroll-padding")}}-Eigenschaft oder ihre entsprechenden Langform-Werte, um etwas Polsterung hinzuzufügen.

Im untenstehenden Beispiel ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt am Beginn der zweiten und dritten Sektion einrastet, stoppt das Scrollen 50 Pixel vom Anfang der Sektion entfernt. Versuchen Sie, den Wert von `scroll-padding` zu ändern, um zu sehen, wie dies den Abstand verändert.

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

Dies ist potenziell nützlich, wenn Sie ein [feststehendes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, das die gescrollten Inhalte überlagern könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das feststehende Element reservieren, wie im folgenden Beispiel gezeigt, bei dem das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter gescrollt wird. Ohne Polsterung würde die Überschrift beim Einrasten einige der Inhalte überlagern.

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

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die detaillierten Werte für die Scroll-Marge können auf Kindelemente angewendet werden, um einen Rahmen aus dem definierten Feld heraus zu erzeugen. Dies ermöglicht verschiedene Abstände für unterschiedliche Kindelemente und kann in Verbindung mit `scroll-padding` auf dem Elternteil verwendet werden.

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

Mit der {{CSSxRef("scroll-snap-stop")}}-Eigenschaft können Sie festlegen, ob das Scrollen an den definierten Einrastpunkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder Abschnitte überspringen kann.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich überspringen. Diese Einstellung kann jedoch auch die Benutzererfahrung negativ beeinflussen, indem sie verhindert, dass der Benutzer schnell zu seinen gewünschten Inhalten scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS scroll snap](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
