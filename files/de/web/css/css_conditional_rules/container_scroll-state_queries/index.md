---
title: Verwendung von Abfrage nach Containerverschiebungszuständen
slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 9fc1511293944aacab750f84dfe1a6753bd8a73f
---

{{CSSRef}}

**Abfragen nach Containerverschiebungszuständen** sind eine Art von [Containerabfrage](/de/docs/Web/CSS/@container). Anstatt selektiv Styles für Nachkommenelemente basierend auf der Größe des Containers anzuwenden, ermöglichen es Verschiebungszustandsabfragen, Styles basierend auf dem Scrollzustand des Containers selektiv anzuwenden. Dies kann beinhalten, ob der Container teilweise gescrollt wird, an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}}-Vorfahren geschnappt wird oder über [`position: sticky`](/de/docs/Web/CSS/position) positioniert und an eine Grenze eines {{Glossary("scroll_container", "Scrollcontainers")}}-Vorfahren angeheftet ist.

Dieser Artikel erklärt, wie man Abfragen nach Containerverschiebungszuständen verwendet und durchläuft ein Beispiel jeder Art. Es wird vorausgesetzt, dass Sie mit den Grundlagen der Containerabfragen vertraut sind. Falls Sie neu bei Containerabfragen sind, lesen Sie [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) bevor Sie fortfahren.

## Arten von Abfragen nach Containerverschiebungszuständen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Überprüft, ob ein Container in der angegebenen Richtung durch benutzerinitiierte Scrollen (zum Beispiel durch Ziehen des Scrollbalkens oder eine Trackpad-Geste) gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der gegebenen Richtung, der gescrollt werden kann? Dies ist nützlich, um Styles anzuwenden, die sich auf die Scrollposition eines Scrollcontainers beziehen. Zum Beispiel könnten Sie einen Hinweis anzeigen, der dazu ermutigt, nach unten zu scrollen und mehr Inhalt zu sehen, wenn der Scrollbalken oben ist, und diesen verstecken, wenn der Benutzer tatsächlich mit dem Scrollen begonnen hat.
- `snapped`: Überprüft, ob ein Container an einen [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Vorfahren entlang einer gegebenen Achse geschnappt ist oder werden wird. Dies ist nützlich, um Styles anzuwenden, wenn ein Element an einen Scroll Snap Container geschnappt ist. Zum Beispiel könnten Sie ein gesnapptes Element in irgendeiner Weise hervorheben oder einen Teil seines Inhalts enthüllen, der zuvor versteckt war.
- `stuck`: Überprüft, ob ein Container mit einem {{cssxref("position")}}-Wert von `sticky` an eine Kante seines Scrollcontainer-Vorfahren angeheftet ist. Dies ist nützlich, um `position: sticky`-Elemente anders zu stylen, wenn sie angeheftet sind – zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Syntaxübersicht

Um ein Containerelement als Abfragecontainer für Verschiebungszustände festzulegen, setzen Sie die {{cssxref("container-type")}}-Eigenschaft darauf mit einem Wert von `scroll-state`. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, sodass Sie es mit einer spezifischen Containerabfrage ansprechen können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}}-Block erstellen, der die Abfrage und die Regeln festlegt, die auf die Kinder des Containers angewendet werden, wenn der Test positiv ausfällt, und optional den `container-name` des Containers/der Container, den/die Sie abfragen möchten. Wenn Sie keinen `container-name` angeben, wird die Containerabfrage auf alle Abfragecontainer für Verschiebungszustände auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um festzustellen, ob der Container nach oben gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Verschiebungszustandsabfragen von anderen Containerabfragen zu trennen, werden die Verschiebungszustandsdeskriptoren und der Wert in Klammern gesetzt, vorangestellt von `scroll-state` (`scroll-state( ... )`). Diese Konstrukte sehen wie Funktionen aus, sind es aber nicht.

## Verwendung von `scrollable` Abfragen

Abfragen nach Verschiebungszuständen [`scrollable`](/de/docs/Web/CSS/@container#scrollable), geschrieben als `scroll-state(scrollable: value)`, testen, ob ein Scrollcontainer-Vorfahre eines Containers in der gegebenen Richtung durch benutzerinitiierte Scrollen gescrollt werden kann. Wenn nicht, gibt die Abfrage falsch zurück.

Der `value` zeigt die Richtung an, in der Sie die Verfügbarkeit des Scrollens testen, zum Beispiel:

- `top`: Testet, ob der Container nach oben gescrollt werden kann.
- `inline-end`: Testet, ob der Container zum Inline-Ende hin gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test positiv ausfällt, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des passenden Scrollcontainers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen scrollenden Container voller Inhalt haben und einen praktischen kleinen Link, um bei Bedarf zum Anfang zurückzuscrollen. Wir werden eine `scrollable` Abfrage verwenden, um den Link nur dann anzuzeigen, wenn der Benutzer begonnen hat, durch den Inhalt zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}}-Element, das ausreichend Inhalt enthält, um das Dokument scrollen zu lassen, vorhergehend von einem [zurück-zum-Anfang Link](/de/docs/Web/HTML/Element/a#result_8):

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

Wir haben den größten Teil des HTMLs aus Gründen der Kürze ausgeblendet.

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

Der `.back-to-top` Link erhält einen {{cssxref("position")}}-Wert von `fixed`, wird in die untere rechte Ecke des Ansichtsfensters platziert und mit einem {{cssxref("translate")}}-Wert von `80px 0` aus dem Ansichtsfenster bewegt. Ein {{cssxref("transition")}}-Wert wird die `translate`- und {{cssxref("background-color")}}-Änderungen animieren, wenn sich einer dieser Werte ändert.

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

Der {{Glossary("scroll_container", "Scrollcontainer")}} in diesem Beispiel ist das `<html>`-Element selbst, bezeichnet als Abfragecontainer für Verschiebungszustände mit einem {{cssxref("container-type")}}-Wert von `scroll-state`. Der {{cssxref("container-name")}} ist nicht zwingend erforderlich, aber nützlich in Fällen, in denen der Code zu einer Codebasis mit mehreren Abfragecontainern für Verschiebungszustände hinzugefügt wird, die mit verschiedenen Abfragen gezielt angesprochen werden.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den gezielten Container-Namen und die Abfrage selbst - `scrollable: top` - festlegt. Diese Abfrage wendet die im Block enthaltenen Regeln nur an, wenn das `<html>`-Element nach oben gescrollt werden kann – mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. Wenn dies der Fall ist, wird `translate: 0 0` auf den `.back-to-top` Link angewendet, was ihn wieder auf den Bildschirm verschiebt.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Wir haben den Rest des Beispiel-CSS aus Gründen der Kürze ausgeblendet.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen und beachten Sie, wie der "zurück-zum-Anfang"-Link erscheint, als Ergebnis der `transition`, die ihn reibungslos von der rechten Seite des Ansichtsfensters erscheinen lässt. Wenn Sie zum Anfang zurückscrollen, indem Sie den Link aktivieren oder manuell scrollen, wird der "zurück-zum-Anfang"-Link aus dem Bildschirm verschoben.

## Verwendung von `snapped` Abfragen

Relevant nur, wenn [Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) implementiert ist, testen Abfragen nach Verschiebungszuständen [`snapped`](/de/docs/Web/CSS/@container#snapped), geschrieben als `scroll-state(snapped: value)`, ob ein Container an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}}-Vorfahren entlang der gegebenen Achse geschnappt ist oder werden wird. Wenn nicht, gibt die Abfrage falsch zurück.

Der `value` zeigt in diesem Fall die Richtung an, in der Sie die Fähigkeit des Elements testen zu schnappen, zum Beispiel:

- `x`: Testet, ob der Container horizontal zu seinem Scroll-Snap-Container-Vorfahren schnappt.
- `inline`: Testet, ob der Container in der Inline-Richtung zu seinem Scroll-Snap-Container-Vorfahren schnappt.
- `y`: Testet, ob der Container zu seinem Scroll-Snap-Container-Vorfahren in beide Richtungen schnappt.

Um einen Container mit einer nicht-`none` `snapped` Verschiebungszustandsabfrage auszuwerten, muss er ein Container mit einem Scroll-Snap-Container-Vorfahren sein, das heißt, der Vorfahre hat einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none`. Die Containerabfrage `scroll-state(snapped: none)` passt zu Verschiebungszustandscontainern, die keinen Scroll-Container-Vorfahren haben.

Die Auswertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis auf dem Scroll-Snap-Container ausgelöst wird.

Wenn der Test positiv ausfällt, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des passenden Scroll-Snap-Zielcontainers angewendet.

In diesem Beispiel schauen wir uns einen Scroll-Snap-Container mit Kindern an, die vertikal zu ihm schnappen, und verwenden eine `snapped` Abfrage, um die Kinder nur dann zu stylen, wenn sie geschnappt oder dabei sind geschnappt zu werden.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}}-Element, das ein Scroll-Snap-Container wird. Darin befinden sich mehrere {{htmlelement("section")}}-Elemente, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper-{{htmlelement("div")}} und eine `<h2>` [Überschrift](/de/docs/Web/HTML/Element/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu erstellen, da Containerabfragen es ermöglichen, die Nachkommen eines Containers zu stylen, nicht den Container selbst.

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

Wir haben den größten Teil des HTMLs aus Gründen der Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("overflow")}}-Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>`-Element, um es in einen vertikalen Scrollcontainer zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}}-Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, an den Snap-Ziele entlang der y-Achse schnappen werden; `mandatory` bedeutet, dass ein Snap-Ziel _immer_ geschnappt wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>`-Elemente werden als Snap-Ziele durch Setzen eines nicht-`none` {{cssxref("scroll-snap-align")}}-Wertes gekennzeichnet. Der Wert `center` bedeutet, dass sie in der Mitte des Containers schnappen werden.

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

Wir möchten die `<section>`-Elemente für Abfragen aktivieren. Genauer gesagt wollen wir testen, ob die `<section>`-Elemente zu ihrem Container schnappen, also bezeichnen wir sie als Abfragecontainer für Verschiebungszustände, indem wir einen {{cssxref("container-type")}}-Wert von `scroll-state` auf sie setzen. Wir geben ihnen auch einen {{cssxref("container-name")}}, der nicht zwingend erforderlich ist, aber nützlich sein wird, wenn unser Code später komplexer wird und wir mehrere Abfragecontainer für Verschiebungszustände haben, die wir mit verschiedenen Abfragen ansprechen wollen.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Containernamen festlegt, den wir mit dieser Abfrage ansprechen, und die Abfrage selbst – `snapped: y`. Diese Abfrage wendet die Regeln, die innerhalb des Blocks enthalten sind, nur an, wenn ein `<section>`-Element vertikal zu seinem Container geschnappt wird. Wenn dies der Fall ist, wenden wir eine neue {{cssxref("background")}} und {{cssxref("color")}} auf das `<section>`-Element des Kindes `.wrapper` `<div>` an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis wird unten gezeigt. Versuchen Sie, den Container auf und ab zu scrollen und beachten Sie, wie sich der Stil des `<section>` ändert, wenn es zu seinem Container geschnappt wird.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck` Abfragen

Abfragen nach Verschiebungszuständen [`stuck`](/de/docs/Web/CSS/@container#scrollable), geschrieben als `scroll-state(stuck: value)`, testen, ob ein Container mit einem {{cssxref("position")}}-Wert von `sticky` an eine Kante seines Scrollcontainer-Vorfahren angeheftet ist. Wenn nicht, gibt die Abfrage falsch zurück.

Der `value` zeigt in diesem Fall die Kante des Scrollcontainers an, die Sie testen möchten, zum Beispiel:

- `top`: Testet, ob der Container an die obere Kante des Scrollcontainer-Vorfahren angeheftet ist.
- `block-end`: Testet, ob der Container an die Block-End-Kante des Scrollcontainer-Vorfahren angeheftet ist.
- `none`: Testet, ob der Container an keine Kanten seines Scrollcontainer-Vorfahren angeheftet ist. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container keine `position: sticky` darauf gesetzt hat.

Wenn die Abfrage wahr zurückgibt, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des passenden `position: sticky` Containers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen scrollenden Container mit überlaufendem Inhalt haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an die oberste Kante des Containers haften, wenn sie bis zu dieser Position gescrollt werden. Wir werden eine `stuck` Verschiebungszustandsabfrage verwenden, um die Überschriften unterschiedlich zu stylen, wenn sie an die oberste Kante angeheftet sind.

### HTML

Im HTML haben wir ein {{htmlelement("article")}}-Element, das ausreichend Inhalt enthält, um das Dokument scrollen zu lassen. Es ist mit mehreren {{htmlelement("section")}}-Elementen strukturiert, wobei jede ein {{htmlelement("header")}} mit verschachtelten Inhalten enthält:

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

Wir haben den größten Teil des HTMLs aus Gründen der Kürze ausgeblendet.

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

Jedes `<header>` erhält einen {{cssxref("position")}}-Wert von `sticky` und einen {{cssxref("top")}}-Wert von `0`, was sie an die oberste Kante des Scrollcontainers anheftet. Um zu testen, ob die `<header>`-Elemente an die obere Kante des Containers angeheftet sind, werden sie als Abfragecontainer für Verschiebungszustände mit einem {{cssxref("container-type")}}-Wert von `scroll-state` bezeichnet. Der {{cssxref("container-name")}} ist nicht zwingend erforderlich, aber nützlich, wenn dieser Code zu einer Codebasis mit mehreren Abfragecontainern für Verschiebungszustände hinzugefügt wird, die mit verschiedenen Abfragen gezielt angesprochen werden.

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

Wir geben den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente auch einige grundlegende Stile und einen {{cssxref("transition")}}-Wert, damit diese reibungslos animieren, wenn ihre {{cssxref("background")}}-Werte sich ändern.

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

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Containernamen festlegt, den wir mit dieser Abfrage ansprechen, und die Abfrage selbst – `stuck: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur dann an, wenn ein `<header>`-Element an die Oberseite seines Scrollcontainers angeheftet ist. Wenn dies der Fall ist, wird eine andere `background` und ein {{cssxref("box-shadow")}} auf die enthaltenen `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #ccc;
    box-shadow: 0 5px 2px #0007;
  }
}
```

Wir haben den Rest des CSS aus Gründen der Kürze ausgeblendet.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen und beachten Sie, wie die `<h2>` und `<p>`-Elemente zu einem neuen Farbschema übergehen, wenn sie an die obere Kante ihres Containers angeheftet werden.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS Positionierung](/de/docs/Web/CSS/CSS_positioned_layout) Modul
