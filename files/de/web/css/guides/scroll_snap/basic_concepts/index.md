---
title: Grundlegende Konzepte des Scroll Snap
short-title: Grundlegende Konzepte
slug: Web/CSS/Guides/Scroll_snap/Basic_concepts
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul ermöglichen es Ihnen, festzulegen, wie das Scrollen auf bestimmte Punkte springt, während ein Benutzer durch ein Dokument scrollt.

Die {{Glossary("Scroll_snap", "scroll snap")}}-Funktion erlaubt es Ihnen, die Punkte zu definieren, an denen der Scrollbereich eines {{Glossary("Scroll_container", "scroll containers")}} nach einer Scroll-Operation endet oder "snappt".

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie das Scroll Snapping definieren können, müssen Sie das Scrollen in einem Scroll-Container aktivieren. Dies können Sie sicherstellen, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Anschließend können Sie das Scroll Snapping auf dem Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob der scrollbare Viewport gesnappt werden kann, ob das Snapping erforderlich oder optional ist und auf welcher Achse das Snapping erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird bei jedem Kind des Scroll-Containers festgelegt und Sie können sie verwenden, um die Snap-Position jedes Kindes oder das Fehlen davon zu definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens gesnappt und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kindelemente angewendet werden, die während des Scrollens gesnappt werden, um einen Rand vom definierten Kasten zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container angewendet werden, um einen Snap-Offset zu schaffen.

Das folgende Beispiel zeigt das Scroll Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich gilt `scroll-snap-align` für alle Kinder des `<section>`-Elements und bestimmt, wo das Scrollen jedes Kindes stoppen soll.

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

Die Eigenschaft {{CSSxRef("scroll-snap-type")}} benötigt die Achse, entlang der das Scroll Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll Snapping entlang beider Achsen zu ermöglichen.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` übergeben. Das Schlüsselwort `mandatory` gibt dem Browser an, dass der Inhalt _auf jeden Fall_ zu einem bestimmten Punkt snappen muss, unabhängig davon, wo sich der Scroll befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt möglicherweise zu dem Punkt snappt, es aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer zu jedem definierten Punkt snappt. Dies bedeutet, dass Sie sich sicher sein können, dass etwas, das Sie erwarten, sich oben auf dem Bildschirm befindet, wenn das Scrollen beendet ist. Es kann jedoch Probleme verursachen, wenn der Inhalt größer ist als erwartet – Benutzer könnten in die frustrierende Lage kommen, nie in der Lage zu sein, einen bestimmten Punkt im Inhalt anzuzeigen. Daher sollte die Verwendung von `mandatory` sorgfältig abgewogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt sich jederzeit auf dem Bildschirm oder im scrollbaren Abschnitt befindet.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt in einem Ihrer Kind-Elemente den übergeordneten Container überflutet, da der Benutzer den überfließenden Inhalt nicht ins Blickfeld scrollen kann.

Der Wert `proximity` snappt Kind-Elemente nur, wenn sich diese in der Nähe befinden, wobei die Browser den genauen Abstand bestimmen.
Klicken Sie auf "Wiedergabe", um das folgende Beispiel im MDN Playground zu bearbeiten. Wechseln Sie den Wert von `scroll-snap-type` zwischen `mandatory` und `proximity`, um den Effekt auf das Scroll-Erlebnis zu sehen.

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

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} am Scroll-Container eingestellt.
Wenn der Inhalt den Container nicht überflutet, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Gültige Werte für die Eigenschaft {{CSSxRef("scroll-snap-align")}} sind `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, zu dem der Inhalt snappen soll. Klicken Sie auf "Wiedergabe" im folgenden Beispiel und ändern Sie den Wert von `scroll-snap-align`, um zu sehen, wie dies das Scroll-Verhalten ändert.

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

Wenn `scroll-snap-type` auf `mandatory` eingestellt ist und `scroll-snap-align` bei einem Kind entweder auf `none` eingestellt oder nicht eingestellt ist (wobei es standardmäßig `none` ist), kann der Benutzer dieses Element nicht ins Blickfeld scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt an den Rand des Scroll-Containers snappt, oder wenn Sie möchten, dass die Snap-Position bei der Verwendung von `center` leicht versetzt ist, verwenden Sie die Eigenschaft {{CSSxRef("scroll-padding")}} oder deren Entsprechung in Langform, um etwas Polsterung hinzuzufügen.

Im folgenden Beispiel ist `scroll-padding` auf `50px` eingestellt. Wenn der Inhalt zu Beginn der zweiten und dritten Abschnitte snappt, stoppt das Scrollen 50 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den Wert von `scroll-padding` zu ändern, um zu sehen, wie sich der Abstand ändert.

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

Dies ist potenziell nützlich, wenn Sie ein [fixiertes](/de/docs/Web/CSS/Reference/Properties/position#fixed_positioning) Element wie eine Navigationsleiste haben, das über den gescrollten Inhalt überlappen könnte. Mit `scroll-padding` können Sie Platz für das fixierte Element reservieren, wie im folgenden Beispiel gezeigt, in dem das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Polsterung würde die Überschrift einige Inhalte überlappen, wenn das Snappen erfolgt.

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

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die Langform der Scroll-Randwerte können auf Kind-Elementen festgelegt werden und definieren einen Vorsprung vom definierten Kasten. Dies ermöglicht unterschiedliche Abstände für verschiedene Kind-Elemente und kann zusammen mit `scroll-padding` auf dem übergeordneten Element verwendet werden.

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

Mit der {{CSSxRef("scroll-snap-stop")}}-Eigenschaft können Sie angeben, ob das Scrollen unbedingt an den definierten Snap-Punkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen zu Beginn jedes Abschnitts stoppen oder über Abschnitte hinweg überspringen könnte.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Allerdings kann diese Einstellung auch negativ das Benutzererlebnis beeinflussen, indem sie den Benutzer daran hindert, schnell zu seinem gewünschten Inhalt zu scrollen.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS-Scroll-Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen
