---
title: Grundlegende Konzepte des Scroll Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Die Eigenschaften des [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Moduls ermöglichen es Ihnen zu definieren, wie das Scrollen an bestimmten Punkten einrastet, während ein Benutzer durch ein Dokument scrollt.

Die {{Glossary("Scroll_snap", "scroll snap")}} Funktion erlaubt es Ihnen, die Einrastpunkte zu definieren, an denen ein {{Glossary("Scroll_container", "scroll container")}} 's Scrollbereich enden oder „einrasten“ kann, nachdem eine Scroll-Operation abgeschlossen wurde.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie das Einrasten des Scrollens definieren können, müssen Sie das Scrollen bei einem Scroll-Container aktivieren. Dies können Sie erreichen, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Einrasten des Scrollens auf dem Scroll-Container mithilfe der folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob der scrollbare Sichtbereich einrasten kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird bei jedem Kind des Scroll-Containers gesetzt, und Sie können damit die Einrastposition jedes Kindes oder das Fehlen derselben definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass während des Scrollens ein Kind eingerastet wird und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann an Kinderlementen gesetzt werden, die während des Scrollens eingerastet werden sollen, um einen Versatz von der definierten Box zu erzeugen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container gesetzt werden, um einen Einrastversatz zu erzeugen.

Das nachstehende Beispiel demonstriert das Einrasten des Scrollens entlang der vertikalen Achse, die von `scroll-snap-type` definiert ist. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>` Elements angewendet, was den Punkt bestimmt, an dem das Scrollen jedes Kindes stoppen soll.

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

Die {{CSSxRef("scroll-snap-type")}} Eigenschaft muss die Achse kennen, entlang der das Einrasten des Scrollens erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Einrasten des Scrollens entlang beider Achsen zu aktivieren.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, dass der Inhalt _muss_ an einem bestimmten Punkt einrasten, egal wo das Scrollen sich befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an dem Punkt einrasten _kann_, aber nicht muss.

Die Verwendung von `mandatory` schafft eine sehr konsistente Scrollerfahrung - Sie wissen, dass der Browser immer an jedem definierten Punkt einrasten wird. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, am oberen Rand des Bildschirms sein wird, wenn das Scrollen beendet ist. Es kann jedoch zu Problemen führen, wenn der Inhalt größer als erwartet ist - Benutzer könnten sich in der frustrierenden Lage befinden, einen bestimmten Punkt im Inhalt nie ansehen zu können. Daher sollte die Nutzung von `mandatory` sorgfältig überlegt werden und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt sich zu jeder Zeit auf dem Bildschirm oder im scrollbaren Abschnitt befindet.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt in einem Ihrer Kindelemente den übergeordneten Container überläuft, da der Benutzer den überlaufenden Inhalt nicht in den Sichtbereich scrollen kann.

Der `proximity` Wert rastet Kindelemente nur an einer Position ein, wenn sie in der Nähe sind, wobei die Browser die genaue Entfernung bestimmen.
Klicken Sie auf „Play“, um das untenstehende Beispiel im MDN Playground zu bearbeiten. Wechseln Sie den `scroll-snap-type` Wert zwischen `mandatory` und `proximity`, um den Effekt auf die Scrollerfahrung zu sehen.

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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} und {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll-Container gesetzt.
Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}} Eigenschaft beinhalten `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, an dem der Inhalt einrasten soll. Klicken Sie auf „Play“ im nachstehenden Beispiel und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich dies auf das Scrollverhalten auswirkt.

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

Wenn `scroll-snap-type` auf `mandatory` gesetzt ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt (was standardmäßig `none` ist), kann der Benutzer dieses Element nicht in den Sichtbereich scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt am Rand des Scroll-Containers einrastet, oder wenn Sie möchten, dass die Einrastposition beim Verwenden von `center` leicht von der Mitte versetzt ist, verwenden Sie die {{CSSxRef("scroll-padding")}} Eigenschaft oder ihre entsprechenden Langformwerte, um etwas Padding hinzuzufügen.

Im Beispiel unten ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt am Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 50 Pixel vom Beginn des Abschnitts entfernt. Ändern Sie den `scroll-padding` Wert, um zu sehen, wie dieser den Abstand verändert.

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

Dies ist potenziell nützlich, wenn Sie ein [fixed](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, die über den gescrollten Inhalt überlappen könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das fixierte Element reservieren, wie im Beispiel unten gezeigt, wo das `<h1>` Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Padding würde die Überschrift beim Einrasten einen Teil des Inhalts überlappen.

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

Die {{CSSxRef("scroll-margin")}} Eigenschaft oder die Langformwerte von Scroll-Margin können auf Kindelemente gesetzt werden, um einen Versatz von der definierten Box festzulegen. Dies erlaubt unterschiedliche Mengen an Platz für verschiedene Kindelemente und kann in Verbindung mit `scroll-padding` beim Elternteil verwendet werden.

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

Mit der {{CSSxRef("scroll-snap-stop")}} Eigenschaft können Sie festlegen, ob das Scrollen an den definierten Einrastpunkten einrasten muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen an jedem Abschnittsbeginn stoppt oder Abschnitte überspringen könnte.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Diese Einstellung kann jedoch auch negative Auswirkungen auf die Benutzererfahrung haben, indem sie verhindert, dass der Benutzer schnell zu seinem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen
