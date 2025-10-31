---
title: Verwendung von Container-Scroll-State-Abfragen
slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**Container-Scroll-State-Abfragen** sind eine Art von [Container-Abfrage](/de/docs/Web/CSS/@container). Anstatt Stile selektiv auf abgeleitete Elemente basierend auf der Größe des Containers anzuwenden, ermöglichen es Scroll-State-Abfragen, Stile selektiv basierend auf dem Scroll-Zustand des Containers anzuwenden. Dies kann einschließen, ob der Container teilweise gescrollt wurde, zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} Ahnen gesnappt ist oder über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} Ahnen klebt.

Dieser Artikel erklärt, wie Sie Container-Scroll-State-Abfragen verwenden, indem er ein Beispiel für jeden Typ durchgeht. Es wird vorausgesetzt, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu in Container-Abfragen sind, lesen Sie [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries), bevor Sie fortfahren.

## Arten von Container-Scroll-State-Abfragen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Fragt ab, ob ein Container in die angegebene Richtung durch benutzergesteuertes Scrollen (zum Beispiel durch Ziehen des Scrollbalkens oder Verwenden einer Trackpad-Geste) gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Dies ist nützlich, um Stile im Zusammenhang mit der Scroll-Position eines Scroll-Containers anzuwenden. Zum Beispiel könnten Sie einen Hinweis anzeigen, der die Nutzer dazu ermutigt, nach unten zu scrollen und mehr Inhalt zu sehen, wenn der Scrollbalken oben ist, und ihn ausblenden, wenn der Nutzer tatsächlich mit dem Scrollen begonnen hat.
- `snapped`: Fragt ab, ob ein Container zu einem [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Ahnen entlang einer gegebenen Achse gesnappt wird. Dies ist nützlich, um Stile anzuwenden, wenn ein Element zu einem Scroll-Snap-Container gesnappt ist. Zum Beispiel könnten Sie ein gesnapptes Element in irgendeiner Weise hervorheben oder einige seiner Inhalte enthüllen, die zuvor versteckt waren.
- `stuck`: Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einem Rand seines Scroll-Container-Ahnen festklebt. Dies ist nützlich, um `position: sticky`-Elemente anders zu stylen, wenn sie festkleben — zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Syntaxübersicht

Um ein Container-Element als Scroll-State-Abfragecontainer zu etablieren, setzen Sie die {{cssxref("container-type")}} Eigenschaft darauf mit einem Wert von `scroll-state`. Optional können Sie ihm auch einen {{cssxref("container-name")}} geben, sodass Sie es mit einer spezifischen Container-Abfrage ansprechen können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}} Block erstellen, der die Abfrage, die Regeln, die auf die Kinder des Containers angewendet werden, wenn der Test bestanden wird, und optional den `container-name` der Container, die Sie abfragen möchten, spezifiziert. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage auf alle Scroll-State-Abfragecontainer auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um zu bestimmen, ob der Container zur oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Scroll-State-Abfragen von anderen Container-Abfragen zu trennen, werden die Scroll-State-Deskriptoren und der Wert in Klammern gesetzt, die von `scroll-state` (`scroll-state( ... )`) vorangestellt werden. Diese Konstrukte sehen aus wie Funktionen, sind es aber nicht.

## Verwendung von `scrollable`-Abfragen

Scroll-State-[`scrollable`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: value)`, testen, ob der scrollende Anhang eines Containers in die angegebene Richtung durch benutzergesteuertes Scrollen gescrollt werden kann. Wenn nicht, gibt die Abfrage false zurück.

Der `value` zeigt die Richtung an, in der Sie testen, ob Scrollen verfügbar ist, zum Beispiel:

- `top`: Testet, ob der Container zur oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container zur Inline-End-Kante gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container` Blocks auf die Nachkommen des passenden Scroll-Containers angewendet.

Schauen wir uns ein Beispiel an, in dem wir einen scrollenden Container voller Inhalte haben und einen praktischen kleinen Link, um bei Bedarf zurück zum Anfang zu scrollen. Wir werden eine `scrollable` Abfrage verwenden, um den Link nur anzuzeigen, wenn der Nutzer begonnen hat, durch den Inhalt nach unten zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genug Inhalt enthält, um das Dokument zum Scrollen zu bringen, vorangestellt von einem [Back-to-Top Link](/de/docs/Web/HTML/Reference/Elements/a#result_8):

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

Wir haben den Großteil des HTML aus Gründen der Kürze verborgen.

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

Der `.back-to-top` Link erhält einen {{cssxref("position")}} Wert von `fixed`, wird an der unteren rechten Ecke des Ansichtsfensters platziert und mit einem {{cssxref("translate")}} Wert von `80px 0` aus dem Ansichtsfenster verschoben. Ein {{cssxref("transition")}} Wert animiert den `translate` und die {{cssxref("background-color")}}, wenn sich einer der Werte ändert.

```css hidden live-sample___scrollable
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
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
  border: 1px solid #00000077;
  background-color: #00000077;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 2px black;
  padding-bottom: 10px;
}

.back-to-top:hover,
.back-to-top:focus {
  background: #00000099;
}
```

Der {{Glossary("scroll_container", "Scroll-Container")}} in diesem Beispiel ist das `<html>` Element selbst, bezeichnet als Scroll-State-Abfragecontainer mit einem {{cssxref("container-type")}} Wert von `scroll-state`. Der {{cssxref("container-name")}} ist nicht unbedingt notwendig, aber nützlich in Fällen, in denen der Code zu einem Codebasis mit mehreren Scroll-State-Abfragecontainern hinzugefügt wird, die mit unterschiedlichen Abfragen gezielt angesprochen werden.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Zielcontainer-Namen dieser Abfrage und die Abfrage selbst festlegt — `scrollable: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn das `<html>` Element zu seiner oberen Kante gescrollt werden kann — mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. Wenn das der Fall ist, wird `translate: 0 0` auf den `.back-to-top` Link angewendet, wodurch er wieder auf dem Bildschirm erscheint.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Wir haben den Rest des CSS-Beispiels aus Gründen der Kürze verborgen.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen, und beachten Sie, wie der "Back-to-Top"-Link als Ergebnis erscheint und sich aufgrund der `transition` sanft von der rechten Seite des Ansichtsfensters animiert. Wenn Sie durch Aktivierung des Links oder manuelles Scrollen wieder nach oben scrollen, wird der "Back-to-Top"-Link vom Bildschirm weg animiert.

## Verwendung von `snapped`-Abfragen

Nur relevant, wenn [Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) implementiert ist, testen Scroll-State-[`snapped`](/de/docs/Web/CSS/@container#snapped) Abfragen (geschrieben als `scroll-state(snapped: value)`) ob ein Container zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} Ahnen entlang der gegebenen Achse gedockt wird. Wenn nicht, gibt die Abfrage false zurück.

Der `value` zeigt hier die Richtung an, in der Sie die Fähigkeit des Elements testen, gedockt zu werden, zum Beispiel:

- `x`: Testet, ob der Container horizontal zu seinem Scroll-Snap-Container-Ahnen gedockt wird.
- `inline`: Testet, ob der Container zu seinem Scroll-Snap-Container-Ahnen in der Inline-Richtung gedockt wird.
- `y`: Testet, ob der Container zu seinem Scroll-Snap-Container-Ahnen in beiden Richtungen gedockt wird.

Um einen Container mit einer non-`none` `snapped` Scroll-State-Abfrage zu evaluieren, muss er ein Container mit einem Scroll-Snap-Container-Ahnen sein, das heißt, der Ahne hat einen {{cssxref("scroll-snap-type")}} Wert, der nicht `none` ist. Die Container-Abfrage `scroll-state(snapped: none)` passt auf Scroll-State-Container, die keinen Scroll-Container-Ahnen haben.

Die Bewertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis auf dem Scroll-Snap-Container ausgelöst wird.

Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des passenden Scroll-Snap-Ziel-Containers angewendet.

In diesem Beispiel werfen wir einen Blick auf einen Scroll-Snap-Container mit Kindern, die vertikal zu ihm schnappen und verwenden eine `snapped` Abfrage, um die Kinder nur zu stylen, wenn sie gesnappt sind oder im Begriff sind, gesnappt zu werden.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}} Element, das ein Scroll-Snap-Container sein wird. Darin befinden sich mehrere {{htmlelement("section")}} Elemente, die Schnappziele sein werden. Jedes `<section>` enthält einen Wrapper-{{htmlelement("div")}} und eine `<h2>` [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements). Die Wrapper sind enthalten, um ein Stilelement als Container-Abfragen zu erstellen, da Container-Abfragen das Styling von Nachkommen eines Containers und nicht des Containers selbst ermöglichen.

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

Wir haben den Großteil des HTML aus Gründen der Kürze verborgen.

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

Wir setzen einen {{cssxref("overflow")}} Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>` Element, um es in einen vertikalen Scroll-Container zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}} Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, zu dem Schnappziele entlang der y-Achse andocken werden; `mandatory` bedeutet, dass ein Schnappziel _immer_ angedockt werden wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>` Elemente werden durch Setzen eines non-`none` {{cssxref("scroll-snap-align")}} Werts als Schnappziele bezeichnet. Der `center` Wert bedeutet, dass sie an ihrem Mittelpunkt an den Container andocken.

```css live-sample___snapped
section {
  font-family: "Helvetica", "Arial", sans-serif;
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
  background: #eeeeee;
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

Wir möchten, dass die `<section>` Elemente abgefragt werden können. Besonders möchten wir testen, ob die `<section>` Elemente im Prozess des Andockens an ihren Container sind, daher kennzeichnen wir sie als Scroll-State-Abfragecontainer, indem wir einen {{cssxref("container-type")}} Wert von `scroll-state` auf ihnen setzen. Wir geben ihnen auch einen {{cssxref("container-name")}}, der nicht unbedingt erforderlich ist, aber nützlich sein wird, wenn unser Code später komplexer wird und wir mehrere Scroll-State-Abfragecontainer haben, die wir mit verschiedenen Abfragen ansprechen möchten.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Zielcontainer-Namen dieser Abfrage festlegt und die Abfrage selbst — `snapped: y`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn ein `<section>` Element vertikal zu seinem Container gesnappt wird. Wenn das der Fall ist, wenden wir ein neues {{cssxref("background")}} und {{cssxref("color")}} auf das `<section>` Element's Kind `.wrapper` `<div>` an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis wird unten gezeigt. Versuchen Sie, den Container nach oben und unten zu scrollen, und beachten Sie, wie sich der Stil der `<section>` ändert, wenn es an seinen Container angedockt wird.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck`-Abfragen

Scroll-State-[`stuck`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: value)`, testen, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einem Rand seines Scroll-Container-Ahnen festklebt. Wenn nicht, gibt die Abfrage false zurück.

Der `value` in diesem Fall zeigt den Rand des Scroll-Containers an, den Sie testen, zum Beispiel:

- `top`: Testet, ob der Container an den oberen Rand seines Scroll-Container-Ahnen festgeklebt ist.
- `block-end`: Testet, ob der Container an den Block-Ende-Rand seines Scroll-Container-Ahnen festgeklebt ist.
- `none`: Testet, ob der Container an keinem Rand seines Scroll-Container-Ahnen festgeklebt ist. Beachten Sie, dass `none` Abfragen auch dann passen, wenn der Container nicht `position: sticky` darauf gesetzt hat.

Wenn die Abfrage true zurückgibt, werden die Regeln innerhalb des `@container` Blocks auf die Nachkommen des passenden `position: sticky` Containers angewendet.

Werfen wir einen Blick auf ein Beispiel, bei dem wir einen scrollenden Container mit überlaufendem Inhalt haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers kleben bleiben, wenn sie zu dieser Position scrollen. Wir werden eine `stuck` Scroll-State-Abfrage verwenden, um die Überschriften anders zu stylen, wenn sie an der oberen Kante festkleben.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genug Inhalt enthält, um das Dokument zum Scrollen zu bringen. Es ist mit mehreren {{htmlelement("section")}} Elementen strukturiert, die jeweils eine {{htmlelement("header")}} mit verschachteltem Inhalt enthalten:

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

Wir haben den Großteil des HTML aus Gründen der Kürze verborgen.

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

Jedes `<header>` hat einen {{cssxref("position")}} Wert von `sticky` und einen {{cssxref("top")}} Wert von `0`, was sie an der oberen Kante des Scroll-Containers kleben lässt. Um zu testen, ob die `<header>` Elemente an der oberen Kante des Containers festkleben, werden sie als Scroll-State-Abfragecontainer gekennzeichnet, indem ein {{cssxref("container-type")}} Wert von `scroll-state` auf ihnen gesetzt wird. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, aber nützlich, wenn dieser Code zu einer Code-Basis mit mehreren Scroll-State-Abfragecontainern hinzugefügt wird, die mit verschiedenen Abfragen gezielt angesprochen werden.

```css hidden live-sample___stuck
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
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

Wir geben den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente auch einige grundlegende Stile und einen {{cssxref("transition")}} Wert, damit sie sanft animieren, wenn sich ihre {{cssxref("background")}} Werte ändern.

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

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Zielcontainer-Namen dieser Abfrage festlegt und die Abfrage selbst — `stuck: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn ein `<header>` Element an der oberen Kante seines Scroll-Containers festklebt. Wenn das der Fall ist, wird ein anderes `background` und ein {{cssxref("box-shadow")}} auf das enthaltene `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #cccccc;
    box-shadow: 0 5px 2px #00000077;
  }
}
```

Wir haben den Rest des CSS aus Gründen der Kürze verborgen.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen, und beachten Sie, wie sich die `<h2>` und `<p>` Elemente zu einem neuen Farbschema ändern, wenn sie an der oberen Kante ihres Containers festkleben.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS-Positionierung](/de/docs/Web/CSS/CSS_positioned_layout) Modul
