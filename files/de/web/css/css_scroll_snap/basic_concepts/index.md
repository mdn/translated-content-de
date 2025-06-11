---
title: Grundkonzepte des Scroll-Snap
short-title: Basic concepts
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul ermöglichen es Ihnen, festzulegen, wie das Scrollen an bestimmten Punkten einrastet, während ein Benutzer durch ein Dokument scrollt.

Das {{Glossary("Scroll_snap", "scroll snap")}} Feature ermöglicht es Ihnen, die Einrastpunkte festzulegen, an denen ein {{Glossary("Scroll_container", "scroll container")}}'s Scrollfenster möglicherweise endet oder "einrastet", nachdem ein Scrollvorgang abgeschlossen ist.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie das Scroll-Einrasten definieren können, müssen Sie das Scrollen in einem Scroll-Container aktivieren. Dies können Sie tun, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll-Einrasten im Scroll-Container mithilfe der folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob das scrollbare Ansichtsfenster einrasten kann, ob Einrasten erforderlich oder optional ist, und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird bei jedem Kind des Scroll-Containers eingestellt, und Sie können sie verwenden, um die Einrastposition jedes Kindes oder das Fehlen einer solchen zu definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens eingerastet wird und nicht übersprungen werden kann.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann bei Kindelementen eingestellt werden, die während des Scrollens eingerastet werden, um einen Rand nach außen vom definierten Kasten zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann im Scroll-Container eingestellt werden, um einen Einrastversatz zu erzeugen.

Das folgende Beispiel demonstriert das Scroll-Einrasten entlang der vertikalen Achse, die durch `scroll-snap-type` definiert wird. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>` Elements angewendet, was den Punkt vorgibt, an dem das Scrollen jedes Kindes stoppen sollte.

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

Die {{CSSxRef("scroll-snap-type")}} Eigenschaft muss wissen, auf welcher Achse das Scroll-Einrasten stattfindet. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Einrasten auf beiden Achsen funktionieren zu lassen.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, dass der Inhalt unabhängig davon, wo sich der Scroll befindet, an einem bestimmten Punkt einrasten _muss_. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an dem Punkt einrasten kann, aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis — Sie wissen, dass der Browser immer zu jedem definierten Punkt einrasten wird. Dies bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, sich am oberen Rand des Bildschirms zu befinden, nach dem Scrollen dort sein wird. Allerdings kann es Probleme verursachen, wenn der Inhalt größer ist als erwartet — Benutzer könnten sich in der frustrierenden Situation befinden, niemals in der Lage zu sein, einen bestimmten Punkt im Inhalt zu scrollen und anzusehen. Daher sollte die Verwendung von `mandatory` sorgfältig in Betracht gezogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt jederzeit auf dem Bildschirm oder im scrollbaren Abschnitt vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt innerhalb eines Ihrer Kindelemente über den übergeordneten Container hinausläuft, da der Benutzer nicht in der Lage sein wird, den überlaufenden Inhalt in den sichtbaren Bereich zu scrollen.

Der `proximity` Wert lässt Kindelemente nur dann an einer Position einrasten, wenn sie sich in der Nähe befinden, wobei die genauen Abstände von den Browsern bestimmt werden.
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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf den Scroll-Container gesetzt.
Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Gültige Werte für die {{CSSxRef("scroll-snap-align")}} Eigenschaft umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, an dem der Inhalt einrasten soll. Klicken Sie im untenstehenden Beispiel auf "Play" und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie sich dies auf das Scrollverhalten auswirkt.

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

Wenn `scroll-snap-type` auf `mandatory` gesetzt ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt oder nicht gesetzt ist (wobei es standardmäßig auf `none` gesetzt wird), wird der Benutzer nicht in der Lage sein, dieses Element in den sichtbaren Bereich zu scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt am Rand des Scroll-Containers einrastet, oder wenn Sie möchten, dass die Einrastposition leicht von der Mitte versetzt wird, wenn Sie `center` verwenden, setzen Sie die {{CSSxRef("scroll-padding")}} Eigenschaft oder deren äquivalenten Langformwerte ein, um etwas Padding hinzuzufügen.

Im Beispiel unten ist `scroll-padding` auf `50px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 50 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den `scroll-padding` Wert zu ändern, um zu sehen, wie sich dies auf den Abstand auswirkt.

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

Dies ist potenziell nützlich, wenn Sie ein [festes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, das sonst gescrollten Inhalt überlappen könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das feste Element reservieren, wie im Beispiel unten gezeigt, bei dem das `<h1>` Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Padding würde die Überschrift einen Teil des Inhalts überlappen, wenn das Einrasten erfolgt.

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

Die {{CSSxRef("scroll-margin")}} Eigenschaft oder die Langformwerte der Rollränder können bei Kind-Elementen gesetzt werden und definieren einen Rand nach außen vom definierten Kasten. Dies ermöglicht unterschiedliche Platzmengen für unterschiedliche Kindelemente und kann in Verbindung mit `scroll-padding` auf dem Elternteil verwendet werden.

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

Durch die Verwendung der {{CSSxRef("scroll-snap-stop")}} Eigenschaft können Sie bestimmen, ob das Scrollen an den definierten Einrastpunkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder Abschnitte überspringen kann.

Mit dieser Eigenschaftendefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich an ihnen vorbeiscrollen. Allerdings kann diese Einstellung auch die Benutzererfahrung negativ beeinflussen, indem sie verhindert, dass der Benutzer schnell zu dem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS-Einrasten beim Scrollen](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll-Snap-Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
