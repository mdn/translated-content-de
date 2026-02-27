---
title: Grundkonzepte des Scroll Snap
short-title: Basic concepts
slug: Web/CSS/Guides/Scroll_snap/Basic_concepts
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Die Eigenschaften im [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul ermöglichen es Ihnen, festzulegen, wie das Scrollen beim Durchblättern eines Dokuments an bestimmten Punkten einrastet.

Das {{Glossary("Scroll_snap", "Scroll Snap")}} Feature ermöglicht es, die Einrastpositionen zu definieren, an denen der Scrollport eines {{Glossary("Scroll_container", "Scroll Containers")}} nach Abschluss einer Scroll-Operation enden oder "einrasten" kann.

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie Scroll Snapping definieren können, müssen Sie das Scrollen in einem Scroll Container aktivieren. Dies erreichen Sie, indem Sie sicherstellen, dass der Scroll Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll Snapping auf dem Scroll Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob der Bildlaufbereich einrasten kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll Containers angewendet und ermöglicht es Ihnen, die Einrastposition oder das Fehlen einer solchen für jedes Kind zu definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens erfasst und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kind-Elemente angewendet werden, die während des Scrollens erfasst werden, um eine Randaussparung aus dem definierten Kasten zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll Container angewendet werden, um einen Einrastversatz zu schaffen.

Das folgende Beispiel demonstriert Scroll Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Außerdem wird `scroll-snap-align` auf alle Kindelemente des `<section>` Elements angewendet und bestimmt, an welchem Punkt das Scrollen jedes Kindes stoppen soll.

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

Die {{CSSxRef("scroll-snap-type")}} Eigenschaft muss wissen, an welcher Achse das Scroll Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll Snapping auf beiden Achsen zu aktivieren.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` übergeben. Das Schlüsselwort `mandatory` sagt dem Browser, dass der Inhalt auf jeden Fall an einem bestimmten Punkt einrasten muss, egal wo sich der Scroll befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an den Punkt einrasten kann, aber nicht muss.

Die Verwendung von `mandatory` schafft eine sehr konsistente Scroll-Erfahrung — Sie wissen, dass der Browser immer an jedem definierten Punkt einrasten wird. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, oben auf dem Bildschirm zu sein, auch da sein wird, wenn das Scrollen endet. Allerdings kann es Probleme verursachen, wenn der Inhalt größer ist als erwartet — Benutzer können die frustrierende Erfahrung machen, nie in der Lage zu sein, einen bestimmten Punkt im Inhalt zu scrollen und anzuzeigen. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder dem scrollbaren Bereich zu einem beliebigen Zeitpunkt vorhanden ist.

> [!NOTE]
> Verwenden Sie `mandatory` niemals, wenn der Inhalt in einem Ihrer Kindelemente den übergeordneten Container überfüllt, da der Benutzer den überfließenden Inhalt nicht in den Blick scrollen kann.

Der Wert `proximity` rastet Kindelemente nur dann an einer Position ein, wenn sie nahe dran sind, wobei die genaue Entfernung von den Browsern bestimmt wird.
Klicken Sie auf "Play", um das untenstehende Beispiel im MDN Playground zu bearbeiten. Wechslen Sie den Wert von `scroll-snap-type` zwischen `mandatory` und `proximity`, um die Auswirkung auf die Scroll-Erfahrung zu sehen.

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
Wenn der Inhalt seinen Container nicht überfüllt, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}} Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um anzugeben, an welchem Punkt im Scroll Container der Inhalt einrasten soll. Klicken Sie in dem Beispiel unten auf "Play" und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich das Scrollverhalten ändert.

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

Wenn `scroll-snap-type` auf `mandatory` gesetzt ist und `scroll-snap-align` auf einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt ist (was standardmäßig `none` entspricht), wird der Benutzer nicht in der Lage sein, dieses Element in den Blick zu scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt an den Rand des Scroll Containers einrastet, oder wenn Sie möchten, dass die Einrastposition beim Verwenden von `center` leicht vom Zentrum versetzt ist, verwenden Sie die {{CSSxRef("scroll-padding")}} Eigenschaft oder ihre gleichwertigen Langform-Werte, um etwas Padding hinzuzufügen.

Im untenstehenden Beispiel ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt an den Anfang der zweiten und dritten Sektion einrastet, stoppt das Scrollen 50 Pixel vom Anfang der Sektion entfernt. Ändern Sie den `scroll-padding` Wert, um zu sehen, wie sich die Entfernung ändert.

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

Dies ist potenziell nützlich, wenn Sie ein [fixed](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Element wie eine Navigationsleiste haben, die über geblätterten Inhalt hinweg liegen könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das feste Element reservieren, wie im folgenden Beispiel gezeigt, in dem das `<h1>` Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Padding würde die Überschrift beim Einrasten einen Teil des Inhalts überlappen.

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

Die {{CSSxRef("scroll-margin")}} Eigenschaft oder die Langform-Scroll-Margin-Werte können auf Kindelemente angewendet werden und definieren eine Randaussparung aus dem definierten Kasten. Dies ermöglicht unterschiedliche Mengen von Platz für verschiedene Kindelemente und kann in Verbindung mit `scroll-padding` auf dem übergeordneten Element verwendet werden.

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

Mit der {{CSSxRef("scroll-snap-stop")}} Eigenschaft können Sie festlegen, ob das Scrollen an den definierten Einrastpunkten einrasten muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jeder Sektion stoppt oder an Sektionen vorbeispringen kann.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jede Sektion des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Allerdings kann diese Einstellung auch negative Auswirkungen auf die Benutzererfahrung haben, indem sie den Benutzer daran hindert, schnell zu seinem gewünschten Inhalt zu scrollen.

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Gut gesteuertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
