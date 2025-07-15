---
title: Verwendung von Container-Scrollzustandsabfragen
slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 93ca748b6242a54899af617756a9c325a7071793
---

**Container-Scrollzustandsabfragen** sind eine Art von [Container-Abfrage](/de/docs/Web/CSS/@container). Anstatt Stilregeln selektiv auf abgeleitete Elemente basierend auf der Größe des Containers anzuwenden, ermöglichen Scrollzustandsabfragen, Stilregeln auf abgeleitete Elemente basierend auf dem Scrollzustand des Containers selektiv anzuwenden. Dies kann beinhalten, ob der Container teilweise gescrollt, an einen Vorfahrencontainer, der ein {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} ist, angeschnappt ist oder über [`position: sticky`](/de/docs/Web/CSS/position) positioniert und an eine Grenze eines Vorfahren, der ein {{Glossary("scroll_container", "Scroll-Container")}} ist, angeheftet ist.

Dieser Artikel erklärt, wie man Container-Scrollzustandsabfragen verwendet, indem er ein Beispiel für jeden Typ durchläuft. Es wird vorausgesetzt, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu im Bereich der Container-Abfragen sind, lesen Sie zuerst [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries), bevor Sie fortfahren.

## Arten von Container-Scrollzustandsabfragen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Fragt ab, ob ein Container in die gegebene Richtung durch benutzerinitiiertes Scrollen gescrollt werden kann (zum Beispiel durch Ziehen der Scrollleiste oder durch eine Trackpad-Geste). Mit anderen Worten, gibt es überfließenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Dies ist nützlich für Stilregeln in Bezug auf die Scrollposition eines Scroll-Containers. Zum Beispiel könnten Sie einen Hinweis anzeigen, der die Benutzer ermutigt, nach unten zu scrollen, um mehr Inhalt zu sehen, wenn die Scrollleiste oben ist, und ihn ausblenden, wenn der Benutzer tatsächlich angefangen hat zu scrollen.
- `snapped`: Fragt ab, ob ein Container an einem Vorfahren, der ein [Scroll-Snap-Container](/de/docs/Web/CSS/CSS_scroll_snap) ist, entlang einer bestimmten Achse angeschnappt wird. Dies ist nützlich für das Anwenden von Stilregeln, wenn ein Element an einen Scroll-Snap-Container angeschnappt ist. Zum Beispiel könnten Sie ein angeschnapptes Element auf eine bestimmte Weise hervorheben oder Teile seines zuvor versteckten Inhalts enthüllen.
- `stuck`: Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von `sticky` an einer Kante seines Vorfahrencontainers, der ein Scroll-Container ist, haften bleibt. Dies ist nützlich, um `position: sticky`-Elemente unterschiedlich zu stylen, wenn sie angeheftet sind — zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Syntaxübersicht

Um ein Containerelement als Scrollzustands-Abfragecontainer zu etablieren, setzen Sie die {{cssxref("container-type")}}-Eigenschaft auf ihm mit einem Wert von `scroll-state`. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, sodass Sie es mit einer spezifischen Container-Abfrage ansprechen können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}}-Block erstellen, der die Abfrage, die Regeln, die auf die Kinder des Containers angewendet werden, wenn der Test bestanden wird, und optional, den `container-name` der Container(s), die Sie abfragen möchten, spezifiziert. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage auf alle Scrollzustands-Abfragecontainer auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um festzustellen, ob der Container zu seiner oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Scrollzustandsabfragen von anderen Containerabfragen zu trennen, werden die Scrollzustands-Deskriptoren und Werte in Klammern gesetzt, gefolgt von `scroll-state` (`scroll-state( ... )`). Diese Konstrukte sehen aus wie Funktionen, sind es aber nicht.

## Verwendung von `scrollable`-Abfragen

Scrollzustands-[`scrollable`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: value)`, testen, ob ein Container in der gegebenen Richtung durch benutzerinitiiertes Scrollen gescrollt werden kann. Wenn nicht, gibt die Abfrage false zurück.

Der `value` gibt die Richtung an, in der Sie die Verfügbarkeit des Scrollens testen, zum Beispiel:

- `top`: Testet, ob der Container zu seiner oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container zu seiner inline-end-Kante gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des passenden Scroll-Containers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen scrollenden Container voller Inhalt haben und einen handlichen kleinen Link, um bei Bedarf wieder nach oben zu scrollen. Wir werden eine `scrollable`-Abfrage verwenden, um den Link nur dann anzuzeigen, wenn der Benutzer angefangen hat, durch den Inhalt nach unten zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}}-Element, das genug Inhalt enthält, um das Dokument zum Scrollen zu bringen, gefolgt von einem [Zurück-zum-Anfang-Link](/de/docs/Web/HTML/Reference/Elements/a#result_8):

```html
<a class="back-to-top" href="#" aria-label="Top of page">↑</a>
<article>
  <h1>Reader with container query-controlled "back-to-top" link</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  ...
</article>
```

Wir haben den Großteil des HTMLs der Kürze halber versteckt.

```html hidden live-sample___scrollable
<a class="back-to-top" href="#" aria-label="Scroll back to top">↑</a>
<article>
  <h1>Reader with container query-controlled "back-to-top" link</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Mauris non malesuada est, sed vestibulum nibh. Duis vestibulum iaculis
      lectus, eu sagittis dolor dignissim iaculis. Nunc et orci sed sapien
      eleifend placerat. Curabitur dapibus risus eget odio sollicitudin, sit
      amet luctus justo pellentesque.
    </p>

    <p>
      <strong>Morbi non pharetra quam.</strong> Fusce vestibulum sem diam, ac
      consequat augue consectetur ut. Donec at augue viverra, tempus urna sit
      amet, porta augue.
      <em>Phasellus fringilla tincidunt sem ullamcorper varius.</em> Aenean
      gravida feugiat sem nec ultricies.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Sed pellentesque placerat mi sed maximus. Sed vitae dui vitae mi pulvinar
      gravida sed et libero.
      <a href="#">Duis nec venenatis dolor, sed tristique felis.</a>
      Integer dapibus facilisis leo elementum vulputate. Curabitur a urna quis
      nulla vulputate tincidunt quis ac enim.
    </p>

    <p>
      Cras non elit vel leo dignissim convallis. Duis eros urna, varius sit amet
      lorem vel, feugiat euismod est.
      <strong>Aliquam ornare eu elit ut iaculis.</strong>
      Suspendisse vulputate tempor leo, non rhoncus risus aliquam vel.
    </p>
  </section>
  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Suspendisse varius est ac turpis mollis cursus.</p>
    </header>

    <p>
      <strong
        >Curabitur faucibus condimentum eros, ut auctor felis lacinia
        sed.</strong
      >
      Praesent vitae scelerisque eros.
    </p>

    <p>
      <em>Ut vitae suscipit augue.</em> Cras et orci condimentum ante dignissim
      iaculis. Sed consectetur quis est sed dignissim. Nulla egestas orci erat,
      et commodo arcu feugiat ut.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Sed non tempor massa, at accumsan ante. Pellentesque habitant morbi
      <a href="#">tristique senectus</a> et netus et malesuada fames ac turpis
      egestas.
    </p>

    <p>
      Pellentesque placerat luctus tempor. Nunc congue dapibus eros, at
      vulputate nulla. Sed rutrum eleifend magna vel porta. Integer cursus orci
      faucibus turpis scelerisque, nec pharetra arcu molestie.
    </p>
  </section>
  <section>
    <header>
      <h2>Hopefully this section provides some clarity?</h2>

      <p>Curabitur facilisis ornare lorem et eleifend.</p>
    </header>

    <p>
      <strong>Aenean mollis non neque sed finibus.</strong> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse sagittis viverra urna.
      In hac habitasse platea dictumst. Vestibulum neque orci, mollis sagittis
      augue et, pharetra vehicula diam.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Pellentesque sollicitudin</a> nunc quis nisl condimentum, ac
      iaculis libero feugiat.
      <strong>Nullam ultrices purus a nulla dignissim hendrerit.</strong> In
      molestie consectetur est quis pulvinar.
    </p>

    <p>
      Vivamus ac erat eu est lobortis commodo. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. In nulla turpis,
      <strong>mollis et est tempor</strong>, dignissim aliquam metus. Proin eu
      arcu quis erat mollis pulvinar. Vivamus at facilisis neque.
    </p>

    <p>
      Integer bibendum laoreet erat, quis vulputate mauris bibendum nec. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Nam ut est in arcu interdum hendrerit.
    </p>
  </section>
  <section>
    <header>
      <h2>A summary of sorts</h2>

      <p>Nunc facilisis augue quis ex porta aliquam.</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong
        >Fusce nisi enim, venenatis a est vel, varius placerat lacus.</strong
      >
      Nunc tempus rutrum nisl bibendum aliquet. Pellentesque vitae nunc sed nisl
      tincidunt elementum a sit amet nisi. Morbi pretium at dolor in pulvinar.
      Curabitur dapibus eleifend accumsan.
    </p>

    <p>
      Donec rhoncus, leo vitae mollis maximus, tellus lorem interdum arcu, eu
      <em>tempor lectus libero in risus</em>. Ut sit amet magna vitae mauris
      tempor bibendum. <a href="#">Integer id mauris ut ex mattis finibus.</a>
    </p>

    <p>
      Curabitur dui felis, elementum et tellus id, blandit facilisis lorem.
      Aliquam sed posuere ligula, at auctor ipsum. Morbi dignissim accumsan
      tellus pretium iaculis.
    </p>
  </section>
</article>
```

### CSS

Der `.back-to-top`-Link hat einen {{cssxref("position")}}-Wert von `fixed`, platziert an der unteren rechten Ecke des Viewports, und wird mithilfe eines {{cssxref("translate")}}-Werts von `80px 0` aus dem Viewport bewegt. Ein {{cssxref("transition")}}-Wert animiert das `translate` und die {{cssxref("background-color")}}, wenn sich einer der Werte ändert.

```css hidden live-sample___scrollable
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___scrollable
.back-to-top {
  width: 64px;
  height: 64px;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  translate: 80px 0;
  transition:
    0.4s translate,
    0.2s background-color;
}
```

```css hidden live-sample___scrollable
.back-to-top {
  text-decoration: none;
  border-radius: 50%;
  border: 1px solid #0007;
  background-color: #0007;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 2px black;
  padding-bottom: 10px;
}

.back-to-top:hover,
.back-to-top:focus {
  background: #0009;
}
```

Der {{Glossary("scroll_container", "Scroll-Container")}} in diesem Beispiel ist das `<html>`-Element selbst, das als Scrollzustands-Abfragecontainer mit einem {{cssxref("container-type")}}-Wert von `scroll-state` angegeben ist. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, aber nützlich in Fällen, in denen das Code-Snippet zu einer Codebasis mit mehreren Scrollzustands-Abfragecontainern hinzugefügt wird, die mit verschiedenen Abfragen angesprochen werden.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Container-Namen festlegt, auf den sich diese Abfrage bezieht, und die Abfrage selbst — `scrollable: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn das `<html>`-Element zu seiner oberen Kante gescrollt werden kann — mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. Ist dies der Fall, wird `translate: 0 0` auf den `.back-to-top`-Link angewendet, der ihn zurück auf den Bildschirm bewegt.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Wir haben den Rest des Beispiel-CSS der Kürze halber ausgeblendet.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen, und beachten Sie, wie der "Zurück-zum-Anfang"-Link erscheint, indem er sanft von der rechten Seite des Viewports aufgrund des `transition` animiert wird. Wenn Sie durch Aktivieren des Links oder manuelles Scrollen wieder nach oben scrollen, bewegt sich der "Zurück-zum-Anfang"-Link außerhalb des Bildschirms.

## Verwendung von `snapped`-Abfragen

Scrollzustands-[`snapped`](/de/docs/Web/CSS/@container#snapped) Abfragen, die nur relevant sind, wenn [Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) implementiert ist, (geschrieben als `scroll-state(snapped: value)`) testen, ob ein Container an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}-Vorfahren entlang der angegebenen Achse angeschnappt wird. Wenn nicht, gibt die Abfrage false zurück.

Der `value` in diesem Fall gibt die Richtung an, in der Sie testen, ob das Element angeschnappt werden kann, zum Beispiel:

- `x`: Testet, ob der Container horizontal an seinen Scroll-Snap-Container-Vorfahren angeschnappt wird.
- `inline`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in der Inline-Richtung angeschnappt wird.
- `y`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in beiden Richtungen angeschnappt wird.

Um einen Container mit einer nicht-`none` `snapped`-Scrollzustandsabfrage zu bewerten, muss es sich um einen Container mit einem Scroll-Snap-Container-Vorfahren handeln, das heißt, der Vorfahrer hat einen {{cssxref("scroll-snap-type")}}-Wert, der nicht `none` ist. Die Containerabfrage `scroll-state(snapped: none)` passt zu Scrollzustandscontainern, die keinen Scroll-Container-Vorfahren haben.

Die Bewertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis beim Scroll-Snap-Container ausgelöst wird.

Wenn der Test besteht, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des passenden Scroll-Snap-Zielcontainers angewendet.

In diesem Beispiel betrachten wir einen Scroll-Snap-Container mit Kindern, die vertikal an ihn angeschnappt werden, und verwenden eine `snapped`-Abfrage, um die Kinder nur dann zu stylen, wenn sie angeschnappt oder dabei sind, angeschnappt zu werden.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}}-Element, das ein Scroll-Snap-Container sein wird. Darin befinden sich mehrere {{htmlelement("section")}}-Elemente, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper-{{htmlelement("div")}} und eine `<h2>`- [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu erstellen, da Containerabfragen es ermöglichen, die Nachkommen eines Containers zu stylen, nicht den Container selbst.

```html
<main>
  <section>
    <div class="wrapper">
      <h2>Section 1</h2>
    </div>
  </section>

  ...
</main>
```

Wir haben den Großteil des HTMLs der Kürze halber versteckt.

```html hidden live-sample___snapped
<main>
  <section>
    <div class="wrapper">
      <h2>Section 1</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 2</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 3</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 4</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 5</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 6</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 7</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 8</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 9</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 10</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 11</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 12</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 13</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 14</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 15</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 16</h2>
    </div>
  </section>
</main>
```

### CSS

```css hidden live-sample___snapped
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

/* body and main sizing */

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

main {
  gap: 50px;
}
```

Wir setzen einen {{cssxref("overflow")}}-Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>`-Element, um es in einen vertikalen Scroll-Container zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}}-Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, der Snap-Ziele entlang der y-Achse anzieht; `mandatory` bedeutet, dass ein Snap-Ziel _immer_ angeschnappt wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>`-Elemente werden als Snap-Ziele durch das Setzen eines nicht-`none` {{cssxref("scroll-snap-align")}}-Werts bezeichnet. Der `center`-Wert bedeutet, dass sie an ihrem Mittelpunkt an den Container schnappen.

```css live-sample___snapped
section {
  font-family: Arial, Helvetica, sans-serif;
  width: 150px;
  height: 150px;
  margin: 50px auto;

  scroll-snap-align: center;
}
```

```css hidden live-sample___snapped
.wrapper {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    0.6s background,
    0.6s color;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}
```

Wir möchten die `<section>`-Elemente für Abfragen aktivieren. Genauer gesagt, möchten wir testen, ob die `<section>`-Elemente im Prozess sind, an ihren Container zu schnappen, also geben wir ihnen ein {{cssxref("container-type")}}-Wert von `scroll-state`, um sie als Scrollzustands-Abfragecontainer zu kennzeichnen. Wir geben ihnen auch einen {{cssxref("container-name")}}, was nicht unbedingt erforderlich, aber nützlich ist, wenn unser Code später komplexer wird und wir mehrere Scrollzustands-Abfragecontainer mit verschiedenen Abfragen anvisieren möchten.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Container-Namen, den wir mit dieser Abfrage anpeilen, und die Abfrage selbst festlegt — `snapped: y`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn ein `<section>`-Element vertikal an seinen Container geschnappt wird. Ist dies der Fall, wenden wir einen neuen {{cssxref("background")}} und {{cssxref("color")}} auf das `<section>`-Element an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis wird unten gezeigt. Versuchen Sie, den Container hoch und runter zu scrollen, und beachten Sie, wie sich der Stil des `<section>`-Elements ändert, wenn es an seinen Container geschnappt wird.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck`-Abfragen

Scrollzustands-[`stuck`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: value)`, testen, ob ein Container mit einem {{cssxref("position")}}-Wert von `sticky` an einer Kante seines Vorfahren-Containers, der ein Scroll-Container ist, haften bleibt. Wenn nicht, gibt die Abfrage false zurück.

Der `value` in diesem Fall gibt die Kante des Scroll-Containers an, an der Sie testen, ob der Container hängen bleibt, zum Beispiel:

- `top`: Testet, ob der Container an der oberen Kante seines Vorfahrencontainers, der ein Scroll-Container ist, hängt.
- `block-end`: Testet, ob der Container an der Block-End-Kante seines Vorfahrencontainers, der ein Scroll-Container ist, hängt.
- `none`: Testet, ob der Container an keiner Kante seines Vorfahrencontainers, der ein Scroll-Container ist, hängt. Beachten Sie, dass `none`-Abfragen übereinstimmen, selbst wenn der Container keine `position: sticky` auf sich gesetzt hat.

Wenn die Abfrage true zurückgibt, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des passenden `position: sticky`-Containers angewendet.

Betrachten wir ein Beispiel, bei dem wir einen scrollenden Container mit überfließendem Inhalt haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers hängen bleiben, wenn sie zu dieser Position scrollen. Wir werden eine `stuck`-Scrollzustandsabfrage verwenden, um die Überschriften anders zu stylen, wenn sie an der oberen Kante haften bleiben.

### HTML

Im HTML haben wir ein {{htmlelement("article")}}-Element, das genug Inhalt enthält, um das Dokument zum Scrollen zu bringen. Es ist mit mehreren {{htmlelement("section")}}-Elementen strukturiert, von denen jedes ein {{htmlelement("header")}} mit verschachteltem Inhalt enthält:

```html
<article>
  <h1>Sticky reader with scroll-state container query</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Confecta res esset.</p>
    </header>

    ...
  </section>

  ...
</article>
```

Wir haben den Großteil des HTMLs der Kürze halber versteckt.

```html hidden live-sample___stuck
<article>
  <h1>Sticky reader with scroll-state container query</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Id deserunt exercitation in incididunt in dolor ipsum enim occaecat quis
      officia et. In dolore Lorem anim enim. Dolor nulla deserunt laboris irure
      incididunt labore tempor amet consectetur. Commodo eu tempor qui laboris
      duis ipsum adipisicing sunt. Do anim laboris commodo aliquip consequat ut
      eiusmod mollit sint nostrud sunt exercitation do.
    </p>

    <p>
      <strong>Est proident voluptate dolore.</strong> Aute irure ea culpa mollit
      <em>anim aute proident consectetur.</em> Duis deserunt consequat elit non.
      Cupidatat et amet anim labore est. Incididunt aute incididunt ex amet
      sint.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Ullamco duis qui amet sunt eu nulla deserunt dolore officia irure nulla.
      <a href="#">Qui enim dolore est virtus;</a>
      Erat enim consectetur.
    </p>

    <p>
      Dolor aliquip officia id esse Lorem ullamco ea veniam.
      <strong>Voluptate cillum commodo anim veniam;</strong>
      Ad nulla amet anim eu incididunt reprehenderit proident in aliqua sit
      commodo magna.
    </p>
  </section>
  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Confecta res esset.</p>
    </header>

    <p>
      <strong>Nam quid possums facere delius?</strong> Tu quidem reddes; Omnis
      peccant para dicts.
    </p>

    <p>
      <em>Pariatur ex cupidatat exercitation</em> reprehenderit quis culpa est
      proident pariatur ut.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Non nulla pariatur cillum pariatur.
      <a href="#">Ipsum magna proident fugiat qui duis et.</a>
      Reprehenderit sit ipsum ut adipisicing aliqua eiusmod nulla consectetur
      deserunt dolor dolor.
    </p>

    <p>
      Cupidatat deserunt adipisicing adipisicing occaecat voluptate duis laboris
      excepteur labore et in aliquip aute. Quis aliquip reprehenderit dolor
      nostrud cupidatat nostrud nisi occaecat elit. Magna dolor ullamco eiusmod
      deserunt elit cillum qui amet. Dolor ad consequat anim commodo eu sunt do
      tempor eu velit est.
    </p>
  </section>
  <section>
    <header>
      <h2>Hopefully this section provides some clarity?</h2>

      <p>Dolor consectetur esse aute eiusmod ex reprehenderit cupidatat.</p>
    </header>

    <p>
      <strong>Ipsum quis sint incididunt aliquip</strong>. Duis tempor sunt enim
      Lorem ut officia cillum magna.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Sint modo partes vitae beatae.</a>
      Ipsum esse nostrud incididunt ipsum ipsum esse aliquip Lorem enim.
      <strong>Sed hoc sane concedays.</strong> Voluptate qui consequat dolor
      dolor dolore ex. Enim dolor enim sit proident. Ad laborum incididunt
      dolore aliquip exercitation exercitation. Sunt cupidatat esse enim duis
      proident.
    </p>

    <p>
      Labore dolor cupidatat ut velit in minim cupidatat enim nisi proident
      eiusmod.
      <strong
        >Non nostrud consectetur est occaecat ut esse esse tempor eiusmod
        non.</strong
      >
      Cupidatat aliqua dolore est sit ad exercitation nostrud nostrud eu. Qui
      consequat et aliquip ea labore.
    </p>

    <p>
      Pariatur quis quis nostrud exercitation pariatur magna veniam Lorem
      commodo cupidatat irure reprehenderit. Nostrud pariatur est pariatur elit
      sit ea voluptate minim mollit. Aliqua pariatur cupidatat et cillum. Velit
      exercitation adipisicing laboris ullamco. Incididunt id eiusmod id cillum
      qui anim. Aliquip minim nostrud excepteur dolore deserunt pariatur eu
      eiusmod reprehenderit ullamco magna.
    </p>
  </section>
  <section>
    <header>
      <h2>A summary of sorts</h2>

      <p>Irure adipisicing occaecat dolore in ex voluptate.</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong>An quidem modi?</strong>
      <strong
        >Excepteur non Lorem ex aliqua est reprehenderit incididunt sunt in
        ullamco in et;</strong
      >
      Aliqua veniam nulla magna anim labore amet proident nisi mollit non.
      Consequat incididunt exercitation nisi consequat culpa officia aliqua
      veniam. Anim aliqua consectetur pariatur mollit proident incididunt id.
    </p>

    <p>
      Non labore, inquit, de nomin. <em>Fall igniter possimus.</em>
      <a href="#">Preterits, inquit, gaud.</a>
      Est commodo adipisicing qui duis excepteur sit ea irure amet voluptate
      deserunt anim deserunt.
    </p>

    <p>
      Ad mollit laboris reprehenderit magna tempor. Consequat pariatur esse
      ipsum duis laboris.
    </p>
  </section>
</article>
```

### CSS

Jedes `<header>` hat einen {{cssxref("position")}}-Wert von `sticky` und einen {{cssxref("top")}}-Wert von `0`, was sie an der oberen Kante des Scroll-Containers haften lässt. Um zu testen, ob die `<header>`-Elemente an der Containeroberkante hängen, werden sie als Scrollzustands-Abfragecontainer mit einem {{cssxref("container-type")}}-Wert von `scroll-state` gekennzeichnet. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, ist jedoch nützlich, wenn dieser Code zu einer Codebasis mit mehreren Scrollzustands-Abfragecontainern hinzugefügt wird, die mit verschiedenen Abfragen anvisiert werden.

```css hidden live-sample___stuck
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___stuck
header {
  background: white;
  position: sticky;
  top: 0;
  container-type: scroll-state;
  container-name: sticky-heading;
}
```

Wir geben den `<h2>`- und `<p>`-Elementen innerhalb der `<header>`-Elemente auch ein grundlegendes Styling und einen {{cssxref("transition")}}-Wert, sodass sie sanft animieren, wenn sich ihre {{cssxref("background")}}-Werte ändern.

```css live-sample___stuck
h2,
header p {
  margin: 0;
  transition: 0.4s background;
}

h2 {
  padding: 20px 5px;
  margin-bottom: 10px;
}

header p {
  font-style: italic;
  padding: 10px 5px;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Container-Namen festlegt, den wir mit dieser Abfrage anpeilen, und die Abfrage selbst — `stuck: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn ein `<header>`-Element an die obere Kante seines Scroll-Containers getragen wird. In diesem Fall werden ein anderes `background` und ein {{cssxref("box-shadow")}} auf das enthaltene `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #ccc;
    box-shadow: 0 5px 2px #0007;
  }
}
```

Wir haben den Rest des CSS der Kürze halber ausgeblendet.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen, und beachten Sie, wie die `<h2>`- und `<p>`-Elemente zu einem neuen Farbschema wechseln, wenn sie an der oberen Kante ihres Containers hängen bleiben.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Positionierung](/de/docs/Web/CSS/CSS_positioned_layout) Modul
