---
title: Grundkonzepte des Scroll-Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{CSSRef}}

Die Eigenschaften im Modul [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) ermöglichen es Ihnen, zu definieren, wie das Scrollen beim Durchlaufen eines Dokuments an bestimmten Punkten einrasten kann.

Das {{Glossary("Scroll_snap", "scroll snap")}}-Feature erlaubt es Ihnen, die Einrastpositionen zu definieren, zu denen der Scrollport eines {{Glossary("Scroll_container", "scroll container")}} nach Abschluss eines Scrollvorgangs gelangen kann.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie Scroll-Snapping definieren können, müssen Sie das Scrollen in einem Scroll-Container aktivieren. Dies können Sie tun, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Danach können Sie das Scroll-Snapping am Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob der scrollbare Viewport einrasten kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird für jedes Kind des Scroll-Containers gesetzt und Sie können damit die Einrastposition jedes Kindes oder das Fehlen einer solchen definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft sorgt dafür, dass ein Kind während des Scrollens eingerastet und nicht übergangen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann an Kindelementen gesetzt werden, die während des Scrollens eingerastet werden, um einen Abstand von der definierten Box zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container gesetzt werden, um einen Einrastversatz zu schaffen.

Das unten stehende Beispiel demonstriert das Scroll-Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert wird. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>`-Elements angewendet und bestimmt den Punkt, an dem das Scrollen jedes Kindes enden soll.

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

Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft muss die Achse kennen, entlang der das Scroll-Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Snapping entlang beider Achsen zu ermöglichen.

Sie können außerdem die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` weist den Browser an, dass der Inhalt _muss_ an einen bestimmten Punkt einrasten, egal wo sich das Scrollen befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt möglicherweise an den Punkt einrastet, es aber nicht muss.

Die Verwendung von `mandatory` sorgt für ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer an jedem definierten Punkt einrastet. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie am oberen Rand des Bildschirms erwarten, dort sein wird, wenn das Scrollen endet. Es kann jedoch Probleme verursachen, wenn der Inhalt größer ist als erwartet – Benutzer könnten sich in der frustrierenden Situation wiederfinden, dass sie niemals an einen bestimmten Punkt im Inhalt scrollen können. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt erfolgen und nur in Situationen eingesetzt werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder im scrollbaren Abschnitt zu jeder Zeit vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt in einem Ihrer Kindelemente den übergeordneten Container überläuft, da der Benutzer nicht in der Lage sein wird, den überlaufenden Inhalt ins Blickfeld zu scrollen.

Der `proximity`-Wert rastet Kindelemente nur dann an einer Position ein, wenn sie sich in der Nähe befinden, wobei die Browser den genauen Abstand bestimmen.
Klicken Sie auf "Play", um das Beispiel unten im MDN Playground zu bearbeiten. Wechseln Sie den Wert von `scroll-snap-type` zwischen `mandatory` und `proximity`, um den Effekt auf das Scroll-Erlebnis zu sehen.

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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll-Container gesetzt.
Wenn der Inhalt nicht seinen Container überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}}-Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzuzeigen, an dem der Inhalt einrasten soll. Klicken Sie im Beispiel unten auf "Play" und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich dies auf das Scrollverhalten auswirkt.

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

Wenn `scroll-snap-type` `mandatory` ist und `scroll-snap-align` auf einem Kind entweder auf `none` gesetzt oder nicht gesetzt ist (in diesem Fall wird es standardmäßig auf `none` gesetzt), kann der Benutzer dieses Element nicht ins Blickfeld scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt am Rand des Scroll-Containers einrastet, oder wenn Sie möchten, dass die Einrastposition leicht vom Zentrum versetzt ist, wenn `center` verwendet wird, verwenden Sie die {{CSSxRef("scroll-padding")}}-Eigenschaft oder die entsprechenden Langform-Werte, um etwas Polsterung hinzuzufügen.

Im Beispiel unten ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt am Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 50 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den `scroll-padding`-Wert zu ändern, um zu sehen, wie sich dies auf die Distanz auswirkt.

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

Dies kann nützlich sein, wenn Sie ein [fixed](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, die sonst den gescrollten Inhalt überlappen könnte. Mit `scroll-padding` können Sie Platz für das feste Element reservieren, wie im unten stehenden Beispiel gezeigt, wo das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Polsterung würde die Überschrift beim Einrasten einen Teil des Inhalts überlappen.

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

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die Langform-Werte der Scroll-Margin können an Kindelementen gesetzt werden, um einen Abstand von der definierten Box zu schaffen. Dadurch können unterschiedliche Mengen an Platz für verschiedene Kindelemente bereitgestellt werden und sie kann zusammen mit `scroll-padding` am übergeordneten Element verwendet werden.

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

Verwenden Sie die {{CSSxRef("scroll-snap-stop")}}-Eigenschaft, um anzugeben, ob das Scrollen an den definierten Einrastpunkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder Abschnitte überspringen kann.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollbereichs sehen und nicht versehentlich daran vorbeiscrollen. Allerdings kann diese Einstellung auch die Benutzererfahrung negativ beeinflussen, indem sie verhindert, dass der Benutzer schnell zu seinem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
