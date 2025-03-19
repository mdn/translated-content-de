---
title: Verwendung von Container-Scroll-State-Abfragen
slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 32142cbf6ab60da6987aee2e11f59c5ee916ea49
---

{{CSSRef}}

**Container-Scroll-State-Abfragen** sind eine Art von [Container-Abfrage](/de/docs/Web/CSS/@container). Anstatt Styles selektiv auf nachfolgende Elemente basierend auf der Größe des Containers anzuwenden, ermöglichen es Scroll-State-Abfragen, Styles basierend auf dem Scroll-Zustand des Containers anzuwenden. Dies kann beinhalten, ob der Container teilweise gescrollt ist, an einen Vorfahren, der als {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} definiert ist, eingerastet ist, oder über [`position: sticky`](/de/docs/Web/CSS/position) positioniert ist und an einer Grenze eines Vorfahren-Containers, der als {{Glossary("scroll_container", "Scroll-Container")}} definiert ist, haftet.

Dieser Artikel erklärt, wie man Container-Scroll-State-Abfragen verwendet, indem er ein Beispiel für jeden Typ durchläuft. Es wird vorausgesetzt, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu in Bezug auf Container-Abfragen sind, lesen Sie [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries), bevor Sie fortfahren.

## Arten von Container-Scroll-State-Abfragen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Fragt ab, ob ein Container in die gegebene Richtung durch benutzerinitiiertes Scrollen (z. B. durch Ziehen des Scrollbalkens oder eine Trackpad-Geste) gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der gegebenen Richtung, der gescrollt werden kann? Dies ist nützlich, um Styling in Bezug auf die Scroll-Position eines Scroll-Containers anzuwenden. Zum Beispiel könnten Sie einen Hinweis anzeigen, der Personen ermutigt, nach unten zu scrollen und mehr Inhalt zu sehen, wenn der Scrollbalken oben ist, und diesen Hinweis verbergen, wenn der Benutzer tatsächlich mit dem Scrollen begonnen hat.
- `snapped`: Fragt ab, ob ein Container an einen [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Vorfahren entlang einer gegebenen Achse eingerastet ist oder wird. Dies ist nützlich, um Styles anzuwenden, wenn ein Element an einen Scroll-Snap-Container eingerastet ist. Beispielsweise könnten Sie ein eingerastetes Element auf eine bestimmte Weise hervorheben oder einige seiner zuvor verborgenen Inhalte enthüllen.
- `stuck`: Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an eine Kante seines Scroll-Container-Vorfahren haftet. Dies ist nützlich, um `position: sticky` Elemente anders zu stylen, wenn sie haften — zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Überblick über die Syntax

Um ein Container-Element als eine Scroll-State-Abfrage für Container festzulegen, setzen Sie die {{cssxref("container-type")}} Eigenschaft darauf mit einem Wert von `scroll-state`. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, sodass Sie es mit einer spezifischen Container-Abfrage ansprechen können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}} Block erstellen, der die Abfrage spezifiziert, die Regeln, die auf die Kinder des Containers angewendet werden, wenn der Test erfolgreich ist, und optional, den `container-name` der Container(s), die Sie abfragen möchten. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage auf alle Scroll-State-Query-Container auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um zu bestimmen, ob der Container in Richtung seiner oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Scroll-State-Abfragen von anderen Container-Abfragen zu trennen, werden die Scroll-State-Deskriptoren und Werte in Klammern gesetzt, vorangestellt von `scroll-state` (`scroll-state( ... )`). Diese Konstrukte sehen aus wie Funktionen, sind es aber nicht.

## Verwendung von `scrollable` Abfragen

Scroll-State [`scrollable`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: value)`, testen, ob ein Container in der angegebenen Richtung durch benutzerinitiiertes Scrollen gescrollt werden kann. Ist dies nicht der Fall, gibt die Abfrage false zurück.

Der `value` gibt die Richtung an, in die Sie die Verfügbarkeit des Scrollens testen, zum Beispiel:

- `top`: Testet, ob der Container in Richtung seiner oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container in Richtung seiner Inline-End-Kante gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test erfolgreich ist, werden die Regeln im `@container` Block auf Nachkommen des passenden Scroll-Containers angewendet.

Schauen wir uns ein Beispiel an, in dem wir einen Scroll-Container voller Inhalte haben und einen praktischen kleinen Link, um bei Bedarf zum Anfang zurückzuscrollen. Wir werden eine `scrollable` Abfrage verwenden, um den Link nur dann anzuzeigen, wenn der Benutzer begonnen hat, durch den Inhalt nach unten zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genügend Inhalt enthält, um das Dokument zum Scrollen zu bringen, vorangestellt von einem [Back-to-Top-Link](/de/docs/Web/HTML/Element/a#result_8):

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

Wir haben den Großteil des HTML der Kürze halber versteckt.

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

Der `.back-to-top` Link erhält einen {{cssxref("position")}} Wert von `fixed`, platziert in der unteren rechten Ecke des Viewports, und wird mit einem {{cssxref("translate")}} Wert von `80px 0` aus dem Viewport verschoben. Ein {{cssxref("transition")}} Wert animiert das `translate` und die {{cssxref("background-color")}}, wenn sich einer der Werte ändert.

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

Der {{Glossary("scroll_container", "Scroll-Container")}} in diesem Beispiel ist das `<html>` Element selbst, das als Scroll-State-Abfrage-Container mit einem {{cssxref("container-type")}} Wert von `scroll-state` bezeichnet wird. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, aber nützlich in Fällen, in denen der Code zu einer Codebasis mit mehreren Scroll-State-Abfrage-Controllern hinzugefügt wird, die mit verschiedenen Abfragen gezielt werden.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen setzt, der mit dieser Abfrage gezielt wird, und die Abfrage selbst — `scrollable: top`. Diese Abfrage wendet die innerhalb des Blocks enthaltenen Regeln nur an, wenn das `<html>` Element in Richtung seiner oberen Kante gescrollt werden kann — mit anderen Worten, wenn der Container vorher nach unten gescrollt wurde. Ist das der Fall, wird `translate: 0 0` auf den `.back-to-top` Link angewendet, wodurch er wieder auf dem Bildschirm angezeigt wird.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Wir haben den Rest des Beispiel-CSS der Kürze halber versteckt.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen, und beachten Sie, wie der "back-to-top" Link als Ergebnis erscheint, indem er sanft von der rechten Seite des Viewports aufgrund der `transition` animiert wird. Wenn Sie wieder nach oben scrollen, indem Sie den Link aktivieren oder manuell scrollen, wird der "back-to-top" Link vom Bildschirm weg bewegt.

## Verwendung von `snapped` Abfragen

Relevant nur, wenn [Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) implementiert ist, testen Scroll-State [`snapped`](/de/docs/Web/CSS/@container#snapped) Abfragen (geschrieben als `scroll-state(snapped: value)`), ob ein Container an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} Vorfahren entlang der angegebenen Achse eingerastet ist oder wird. Ist dies nicht der Fall, gibt die Abfrage false zurück.

Der `value` gibt in diesem Fall die Richtung an, in der Sie die Fähigkeit des Elements zum Einrasten testen, zum Beispiel:

- `x`: Testet, ob der Container horizontal an seinen Scroll-Snap-Container-Vorfahren einrastet.
- `inline`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in Inline-Richtung einrastet.
- `y`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in beide Richtungen einrastet.

Um einen Container mit einer nicht-`none` `snapped` Scroll-State-Abfrage zu bewerten, muss es ein Container mit einem Scroll-Snap-Container-Vorfahren sein, das heißt, der Vorfahren hat einen {{cssxref("scroll-snap-type")}} Wert, der nicht `none` ist. Die Container-Abfrage `scroll-state(snapped: none)` entspricht Scroll-State-Controllern, die keinen Scroll-Container-Vorfahren haben.

Die Bewertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis am Scroll-Snap-Container ausgelöst wird.

Wenn der Test erfolgreich ist, werden die Regeln im `@container` Block auf Nachkommen des passenden Scroll-Snap-Zielcontainers angewendet.

In diesem Beispiel schauen wir uns einen Scroll-Snap-Container mit Kindern an, die vertikal daran einrasten, und verwenden eine `snapped` Abfrage, um die Kinder nur dann zu stylen, wenn sie eingerastet sind oder dabei sind, eingerastet zu werden.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}} Element, das ein Scroll-Snap-Container sein wird. Im Inneren sind mehrere {{htmlelement("section")}} Elemente, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper-{{htmlelement("div")}} und eine `<h2>` [Überschrift](/de/docs/Web/HTML/Element/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu schaffen, da Container-Abfragen ermöglichen, die Nachkommen eines Containers zu stylen, nicht den Container selbst.

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

Wir haben den Großteil des HTML der Kürze halber versteckt.

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

Wir setzen einen {{cssxref("overflow")}} Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>` Element, um es in einen vertikalen Scroll-Container zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}} Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, an den Snap-Ziele entlang der y-Achse einrasten; `mandatory` bedeutet, dass ein Snap-Ziel _immer_ eingerastet wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>` Elemente sind durch Setzen eines nicht-`none` {{cssxref("scroll-snap-align")}} Wertes als Snap-Ziele definiert. Der Wert `center` bedeutet, dass sie in der Mitte der Container einrasten werden.

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

Wir wollen die Möglichkeit, die `<section>` Elemente zu abfragen. Genauer gesagt, wollen wir testen, ob die `<section>` Elemente an ihren Container einrasten, daher bezeichnen wir sie als Scroll-State-Abfrage-Container, indem wir einen {{cssxref("container-type")}} Wert von `scroll-state` auf sie setzen. Wir geben ihnen auch einen {{cssxref("container-name")}}, der nicht unbedingt notwendig ist, aber nützlich ist, wenn unser Code später komplexer wird und wir mehrere Scroll-State-Abfrage-Container haben, die wir mit verschiedenen Abfragen ansprechen wollen.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, das den Container-Namen festlegt, den wir mit dieser Abfrage abfragen, und die Abfrage selbst — `snapped: y`. Diese Abfrage wendet die Regeln nur dann an, wenn ein `<section>` Element vertikal an seinen Container einrastet. Ist dies der Fall, wenden wir einen neuen {{cssxref("background")}} und {{cssxref("color")}} auf das `.wrapper` `<div>` Kind des `<section>` Elements an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis wird unten gezeigt. Versuchen Sie den Container nach oben und unten zu scrollen und beachten Sie, wie sich der `<section>` Stil ändert, wenn er an seinen Container einrastet.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck` Abfragen

Scroll-State [`stuck`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: value)`, testen, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einer Kante seines Scroll-Container-Vorfahren haftet. Ist dies nicht der Fall, gibt die Abfrage false zurück.

Der `value` in diesem Fall zeigt die Scroll-Container-Kante an, die Sie testen möchten, zum Beispiel:

- `top`: Testet, ob der Container an der oberen Kante seines Scroll-Container-Vorfahren haftet.
- `block-end`: Testet, ob der Container an der Blockend-Kante seines Scroll-Container-Vorfahren haftet.
- `none`: Testet, ob der Container an keiner Kante seines Scroll-Container-Vorfahren haftet. Beachten Sie, dass `none` Abfragen auch dann zutreffen, wenn der Container nicht `position: sticky` eingestellt hat.

Wenn die Abfrage true zurückgibt, werden die Regeln im `@container` Block auf Nachkommen des passenden `position: sticky` Containers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen Scroll-Container mit überlaufendem Inhalt haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers haften, wenn sie diese Position erreichen. Wir werden eine `stuck` Scroll-State-Abfrage verwenden, um die Überschriften anders zu stylen, wenn sie an der oberen Kante haften.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genügend Inhalt enthält, um das Dokument zum Scrollen zu bringen. Es ist in mehreren {{htmlelement("section")}} Elementen strukturiert, die jeweils einen {{htmlelement("header")}} mit verschachtelten Inhalten enthalten:

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

Wir haben den Großteil des HTML der Kürze halber versteckt.

```html hidden live-sample___stuck
<article>
  <h1>Sticky reader with scroll-state container query</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Nunc vides, quid faciat. Quonam, inquit, modo? Nam quid possumus facere
      melius? Duo Reges: constructio interrete. Cur iustitia laudatur? Videmus
      igitur ut conquiescere ne infantes quidem possint.
    </p>

    <p>
      <strong>Nihil enim hoc differt.</strong> Neutrum vero, inquit ille.
      <em>Huius ego nunc auctoritatem sequens idem faciam.</em> Prioris generis
      est docilitas, memoria; Quae sequuntur igitur?
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Ne discipulum abducam, times. Quis enim redargueret?
      <a href="#">Rationis enim perfectio est virtus;</a>
      Erat enim Polemonis.
    </p>

    <p>
      Qua tu etiam inprudens utebare non numquam. Sed erat aequius Triarium
      aliquid de dissensione nostra iudicare.
      <strong
        >Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse;</strong
      >
      Omnes enim iucundum motum, quo sensus hilaretur.
    </p>
  </section>
  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Confecta res esset.</p>
    </header>

    <p>
      <strong>Nam quid possumus facere melius?</strong> Tu quidem reddes; Omnia
      peccata paria dicitis.
    </p>

    <p>
      <em>Scrupulum, inquam, abeunti;</em> Quae cum dixisset, finem ille. Hoc
      sic expositum dissimile est superiori.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Quid, de quo nulla dissensio est?
      <a href="#">Nunc agendum est subtilius.</a>
      Praeteritis, inquit, gaudeo. Iam in altera philosophiae parte.
    </p>

    <p>
      Itaque ad tempus ad Pisonem omnes. Quantum Aristoxeni ingenium consumptum
      videmus in musicis? Quis non odit sordidos, vanos, leves, futtiles? Atqui
      reperies, inquit, in hoc quidem pertinacem; Duarum enim vitarum nobis
      erunt instituta capienda.
    </p>
  </section>
  <section>
    <header>
      <h2>Hopefully this section provides some clarity?</h2>

      <p>Quid ad utilitatem tantae pecuniae?</p>
    </header>

    <p>
      <strong>Memini me adesse P.</strong> Omnes enim iucundum motum, quo sensus
      hilaretur. Optime, inquam.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Sint modo partes vitae beatae.</a>
      Sic enim censent, oportunitatis esse beate vivere.
      <strong>Sed hoc sane concedamus.</strong> Aliter homines, aliter
      philosophos loqui putas oportere? Non laboro, inquit, de nomine. Bork
    </p>

    <p>
      Quo tandem modo? Ut pulsi recurrant? Quid ad utilitatem tantae pecuniae?
      <strong>Sed in rebus apertissimis nimium longi sumus.</strong>
      Rationis enim perfectio est virtus; Beatus autem esse in maximarum rerum
      timore nemo potest.
    </p>

    <p>
      Nulla erit controversia. Quae in controversiam veniunt, de iis, si placet,
      disseramus. Sed potestne rerum maior esse dissensio? Tria genera bonorum;
      Memini vero, inquam; Quam ob rem tandem, inquit, non satisfacit?
    </p>
  </section>
  <section>
    <header>
      <h2>A summary of sorts</h2>

      <p>Quae est igitur causa istarum angustiarum?</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong>An eiusdem modi?</strong>
      <strong>Et ille ridens: Video, inquit, quid agas;</strong> Conferam tecum,
      quam cuique verso rem subicias; Putabam equidem satis, inquit, me dixisse.
      Sed haec quidem liberius ab eo dicuntur et saepius.
    </p>

    <p>
      Non laboro, inquit, de nomine. <em>Falli igitur possumus.</em>
      <a href="#">Praeteritis, inquit, gaudeo.</a>
      Nescio quo modo praetervolavit oratio. Huius, Lyco, oratione locuples,
      rebus ipsis ielunior. Quod ea non occurrentia fingunt, vincunt Aristonem;
    </p>

    <p>
      Cur deinde Metrodori liberos commendas? Quo modo? Ergo hoc quidem apparet,
      nos ad agendum esse natos. Scrupulum, inquam, abeunti;
    </p>
  </section>
</article>
```

### CSS

Jeder `<header>` hat einen {{cssxref("position")}} Wert von `sticky` und einen {{cssxref("top")}} Wert von `0`, was sie an die obere Kante des Scroll-Containers anheftet. Um zu testen, ob die `<header>` Elemente an der obersten Kante des Containers haften, sind sie als Scroll-State-Abfrage-Container mit einem {{cssxref("container-type")}} Wert von `scroll-state` gekennzeichnet. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, kann aber nützlich sein, wenn dieser Code zu einer Codebasis mit mehreren Scroll-State-Abfrage-Controllern hinzugefügt wird, die mit unterschiedlichen Abfragen gezielt werden.

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

Wir geben auch den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente ein grundlegendes Styling und einen {{cssxref("transition")}} Wert, sodass sie sanft animiert werden, wenn sich ihre {{cssxref("background")}} Werte ändern.

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

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen festlegt, den wir mit dieser Abfrage ansprechen, und die Abfrage selbst — `stuck: top`. Diese Abfrage wendet die enthaltenen Regeln nur an, wenn ein `<header>` Element an der oberen Kante seines Scroll-Containers haftet. Wenn das der Fall ist, wird ein anderer `background` und ein {{cssxref("box-shadow")}} auf die enthaltenen `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #ccc;
    box-shadow: 0 5px 2px #0007;
  }
}
```

Wir haben den Rest des CSS der Kürze halber versteckt.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen und beachten Sie, wie die `<h2>` und `<p>` Elemente in ein neues Farbschema wechseln, wenn sie an die obere Kante ihres Containers haften.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- Modul [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)
- Modul [CSS-Positionierung](/de/docs/Web/CSS/CSS_positioned_layout)
