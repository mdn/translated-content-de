---
title: Verwenden von Abfragezuständen für das Scrollen von Containern
slug: Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Abfragezustände für das Scrollen von Containern** sind eine Art von [Container-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container). Anstatt Stile selektiv auf Nachkommenelemente basierend auf der Größe des Containers anzuwenden, ermöglichen es Abfragen zum Scrollzustand, Stile selektiv auf Nachkommenelemente basierend auf dem Scrollzustand des Containers anzuwenden. Dies kann beinhalten, ob der Container teilweise gescrollt ist, an einem Vorfahren, der ein {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} ist, einrastet oder über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position) positioniert und an eine Begrenzung eines Vorfahren, der ein {{Glossary("scroll_container", "Scrollcontainer")}} ist, angeheftet wurde.

Dieser Artikel erklärt, wie man Abfragezustände für das Scrollen von Containern verwendet, indem an jedem Typ ein Beispiel durchlaufen wird. Es wird vorausgesetzt, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu in den Container-Abfragen sind, lesen Sie [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries), bevor Sie fortfahren.

## Typen von Abfragen zum Scrollzustand eines Containers

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Fragt ab, ob ein Container in der angegebenen Richtung über benutzerinitiierte Scrollvorgänge gescrollt werden kann (zum Beispiel durch Ziehen des Scrollbalkens oder durch Nutzung einer Trackpad-Geste). Anders ausgedrückt: Gibt es in der angegebenen Richtung überlaufende Inhalte, zu denen gescrollt werden kann? Dies ist nützlich, um Stile anzuwenden, die sich auf die Scrollposition eines Scrollcontainers beziehen. Zum Beispiel könnten Sie einen Hinweis anzeigen, der Benutzer dazu ermutigt, nach unten zu scrollen, um mehr Inhalte zu sehen, wenn der Scrollbalken oben ist, und diesen ausblenden, wenn der Benutzer tatsächlich begonnen hat zu scrollen.
- `snapped`: Fragt ab, ob ein Container an einem Vorfahren, der ein [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container ist, entlang einer angegebenen Achse einrasten wird. Dies ist nützlich, um Stile anzuwenden, wenn ein Element an einen Scroll-Snap-Container einrastet. Zum Beispiel könnten Sie ein eingerastetes Element auf irgendeine Weise hervorheben oder einige seiner zuvor versteckten Inhalte sichtbar machen.
- `stuck`: Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an eine Kante seines Scroll-Container-Vorfahren haftet. Dies ist nützlich, um `position: sticky` Elemente anders zu stylen, wenn sie haften — zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Syntaxübersicht

Um ein Containerelement als Abfrage-Container für den Scrollzustand festzulegen, setzen Sie die {{cssxref("container-type")}} Eigenschaft auf diesem mit einem Wert von `scroll-state`. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, so dass Sie es mit einer bestimmten Container-Abfrage anvisieren können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}} Block erstellen, der die Abfrage, die Regeln, die auf die Kinder des Containers angewendet werden, wenn der Test bestanden wird, und optional den `container-name` des Containers oder der Container, die Sie abfragen möchten, spezifiziert. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage auf alle Scrollzustands-Abfrage-Container auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um zu bestimmen, ob der Container zu seiner oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Abfragen zum Scrollzustand von anderen Container-Abfragen zu trennen, werden die Scrollzustands-Deskriptoren und Werte in Klammern gesetzt, die mit `scroll-state` vorangestellt sind (`scroll-state( ... )`). Diese Konstrukte sehen aus wie Funktionen, sind es aber nicht.

## Verwendung von `scrollable` Abfragen

Abfragen zu Scrollzuständen mit [`scrollable`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: value)`, testen, ob ein scrollender Vorfahre eines Containers in der angegebenen Richtung über benutzerinitiiertes Scrollen gescrollt werden kann. Wenn nicht, gibt die Abfrage false zurück.

Der `value` gibt die Richtung an, für die Sie die Verfügbarkeit des Scrollens testen, zum Beispiel:

- `top`: Testet, ob der Container zu seiner oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container zu seiner `inline-end` Kante gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test bestanden wird, werden die Regeln im `@container` Block auf Nachkommen des passenden Scrollcontainers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen scrollenden Container voller Inhalte haben und einen nützlichen kleinen Link, um bei Bedarf zurück nach oben zu scrollen. Wir verwenden eine `scrollable` Abfrage, um den Link nur anzuzeigen, wenn der Benutzer begonnen hat, durch den Inhalt zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genug Inhalt enthält, um das Dokument zu scrollen, gefolgt von einem [zum Anfang zurück Link](/de/docs/Web/HTML/Reference/Elements/a#result_8):

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

Wir haben den größten Teil des HTML für Kürze ausgeblendet.

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

Der `.back-to-top` Link erhält einen {{cssxref("position")}} Wert von `fixed`, wird in der unteren rechten Ecke des Viewports platziert und mit einem {{cssxref("translate")}} Wert von `80px 0` aus dem Viewport verschoben. Ein {{cssxref("transition")}} Wert wird die `translate` und {{cssxref("background-color")}} animieren, wenn einer der Werte sich ändert.

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

Der {{Glossary("scroll_container", "Scrollcontainer")}} in diesem Beispiel ist das `<html>` Element selbst, das als Abfrage-Container für den Scrollzustand mit einem {{cssxref("container-type")}} Wert von `scroll-state` bezeichnet wird. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, aber nützlich in Fällen, in denen der Code zu einem Codebestand mit mehreren Abfrage-Containern für den Scrollzustand hinzugefügt wird, die mit verschiedenen Abfragen angezielt werden.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Anschließend definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen, der von dieser Abfrage angesprochen wird, und die Abfrage selbst — `scrollable: top` — festlegt. Diese Abfrage wendet die im Block enthaltenen Regeln nur dann an, wenn das `<html>` Element zu seiner oberen Kante gescrollt werden kann — mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. Wenn dies der Fall ist, wird `translate: 0 0` auf den `.back-to-top` Link angewendet, der ihn wieder auf den Bildschirm zurückbewegt.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Wir haben den Rest des Beispiel-CSS zur Kürze ausgeblendet.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen, und beobachten Sie, wie der "zurück nach oben" Link als Ergebnis erscheint und aufgrund des `transition` sanft von der rechten Seite des Viewports animiert wird. Wenn Sie wieder nach oben scrollen, indem Sie den Link aktivieren oder manuell scrollen, bewegt sich der "zurück nach oben" Link off-screen.

## Verwendung von `snapped` Abfragen

Relevant nur, wenn [Scroll-Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) implementiert ist, testen Scrollzustands-[`snapped`](/de/docs/Web/CSS/Reference/At-rules/@container#snapped) Abfragen (geschrieben als `scroll-state(snapped: value)`), ob ein Container an einen Vorfahren, der ein {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} ist, entlang der angegebenen Achse einrasten wird. Wenn nicht, gibt die Abfrage false zurück.

Der `value` in diesem Fall gibt die Richtung an, in die Sie die Fähigkeit des Elements zum Einrasten testen, zum Beispiel:

- `x`: Testet, ob der Container horizontal an seinen Scroll-Snap-Container-Vorfahren einrastet.
- `inline`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in der Inline-Richtung einrastet.
- `y`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in beiden Richtungen einrastet.

Um einen Container mit einer nicht-`none` `snapped` Scrollzustands-Abfrage auszuwerten, muss er ein Container mit einem Scroll-Snap-Container-Vorfahren sein, das heißt, der Vorfahre hat einen {{cssxref("scroll-snap-type")}} Wert, der nicht `none` ist. Die Container-Abfrage `scroll-state(snapped: none)` entspricht Scrollzustands-Containern, die keinen Scrollcontainer-Vorfahren haben.

Die Auswertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis auf dem Scroll-Snap-Container ausgelöst wird.

Wenn der Test bestanden wird, werden die Regeln im `@container` Block auf Nachkommen des passenden Zielcontainers für das Scroll-Snap angewendet.

In diesem Beispiel betrachten wir einen Scroll-Snap-Container mit Kindern, die vertikal an ihn einrasten und verwenden eine `snapped` Abfrage, um die Kinder nur dann zu stylen, wenn sie eingerastet oder dabei sind, einzurasten.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}} Element, das ein Scroll-Snap-Container sein wird. Darin befinden sich mehrere {{htmlelement("section")}} Elemente, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper {{htmlelement("div")}} und ein `<h2>` [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu schaffen, da Container-Abfragen das Styling von Nachkommen eines Containers ermöglichen, nicht jedoch des Containers selbst.

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

Wir haben den größten Teil des HTML für Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("overflow")}} Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>` Element, um daraus einen vertikalen Scrollcontainer zu machen. Außerdem setzen wir einen {{cssxref("scroll-snap-type")}} Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, an dem Snap-Ziele entlang der y-Achse einrasten; `mandatory` bedeutet, dass ein Snap-Ziel _immer_ eingerastet wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>` Elemente werden durch das Setzen eines nicht-`none` {{cssxref("scroll-snap-align")}} Werts als Snap-Ziele bezeichnet. Der `center` Wert bedeutet, dass sie in der Mitte an den Container einrasten.

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

Wir möchten es ermöglichen, dass die `<section>` Elemente abgefragt werden. Insbesondere möchten wir testen, ob die `<section>` Elemente dabei sind, an ihren Container zu schnappen, deshalb kennzeichnen wir sie als Abfrage-Container für den Scrollzustand, indem wir einen {{cssxref("container-type")}} Wert von `scroll-state` auf sie setzen. Wir geben ihnen auch einen {{cssxref("container-name")}}, der nicht unbedingt notwendig ist, aber nützlich sein wird, wenn unser Code später komplexer wird und wir mehrere Scrollzustands-Abfrage-Container haben, die wir mit verschiedenen Abfragen anvisieren möchten.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Anschließend definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen, den wir mit dieser Abfrage anvisieren, und die Abfrage selbst — `snapped: y` — festlegt. Diese Abfrage wendet die im Block enthaltenen Regeln nur dann an, wenn ein `<section>` Element vertikal an seinen Container einrastet. Wenn dies der Fall ist, wenden wir ein neues {{cssxref("background")}} und {{cssxref("color")}} auf das `<section>` Element ein und dessen Kind `.wrapper` `<div>` an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis wird unten gezeigt. Versuchen Sie, den Container nach oben und unten zu scrollen und beobachten Sie, wie sich der `<section>` Stil ändert, wenn er an seinen Container einrastet.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck` Abfragen

Scrollzustands-[`stuck`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: value)`, testen, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an eine Kante seines Scrollcontainer-Vorfahren haftet. Wenn nicht, gibt die Abfrage false zurück.

Der `value` in diesem Fall gibt die Kante des Scrollcontainers an, an die Sie die Haftung testen, zum Beispiel:

- `top`: Testet, ob der Container an die obere Kante seines Scrollcontainer-Vorfahren haftet.
- `block-end`: Testet, ob der Container an die Block-End-Kante seines Scrollcontainer-Vorfahren haftet.
- `none`: Testet, ob der Container an keiner Kante seines Scrollcontainer-Vorfahren haftet. Beachten Sie, dass `none` Abfragen übereinstimmen, selbst wenn der Container nicht `position: sticky` darauf gesetzt hat.

Wenn die Abfrage true zurückgibt, werden die Regeln im `@container` Block auf Nachkommen des passenden `position: sticky` Containers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen scrollenden Container mit überlaufendem Inhalt haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers haften, wenn sie an diese Position scrollen. Wir verwenden eine `stuck` Scrollzustands-Abfrage, um die Überschriften anders zu stylen, wenn sie an der oberen Kante haften.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genug Inhalt enthält, um das Dokument zu scrollen. Es ist mit mehreren {{htmlelement("section")}} Elementen strukturiert, die jeweils einen {{htmlelement("header")}} mit verschachtelten Inhalten enthalten:

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

Wir haben den größten Teil des HTML für Kürze ausgeblendet.

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

Jedes `<header>` hat einen {{cssxref("position")}} Wert von `sticky` und einen {{cssxref("top")}} Wert von `0`, der sie an der oberen Kante des Scrollcontainers haftet. Um zu testen, ob die `<header>` Elemente an der oberen Kante des Containers haften, werden sie als Abfrage-Container für den Scrollzustand mit einem {{cssxref("container-type")}} Wert von `scroll-state` bezeichnet. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, wird aber nützlich, wenn dieser Code zu einem Codebestand mit mehreren Scrollzustands-Abfrage-Containern hinzugefügt wird, die mit verschiedenen Abfragen anvisiert werden.

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

Wir geben auch den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente ein grundlegendes Styling und einen {{cssxref("transition")}} Wert, so dass sie sich sanft animieren, wenn ihre {{cssxref("background")}} Werte ändern.

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

Anschließend definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen, den wir mit dieser Abfrage anvisieren, und die Abfrage selbst — `stuck: top` — festlegt. Diese Abfrage wendet die im Block enthaltenen Regeln nur dann an, wenn ein `<header>` Element an der oberen Kante seines Scrollcontainers haftet. Wenn dies der Fall ist, werden ein anderes `background` und ein {{cssxref("box-shadow")}} auf das enthaltene `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #cccccc;
    box-shadow: 0 5px 2px #00000077;
  }
}
```

Wir haben den Rest des CSS zur Kürze ausgeblendet.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen und beobachten Sie, wie sich die `<h2>` und `<p>` Elemente zu einem neuen Farbschema übergehen, wenn sie an der oberen Kante ihres Containers haften.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS-Bedingte Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [CSS Positionierung](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
