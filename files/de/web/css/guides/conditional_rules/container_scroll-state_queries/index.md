---
title: Verwendung von Container-Scrollstatus-Abfragen
slug: Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

**Container-Scrollstatus-Abfragen** sind eine Art von [Container-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container). Anstatt Stile auf Nachkommenelemente basierend auf der Größe des Containers selektiv anzuwenden, ermöglichen Scrollstatus-Abfragen, Stile basierend auf dem Scrollstatus des Containers selektiv anzuwenden. Dies kann umfassen, ob der Container teilweise gescrollt ist, an einen Vorfahren mit {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} geschnappt ist oder mit [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scrollcontainers")}} Vorfahren haftet.

Dieser Artikel erklärt, wie Container-Scrollstatus-Abfragen verwendet werden, indem er ein Beispiel für jeden Typ durchgeht. Es wird vorausgesetzt, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu bei Container-Abfragen sind, lesen Sie [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries), bevor Sie fortfahren.

## Arten von Container-Scrollstatus-Abfragen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Fragt ab, ob ein Container in die gegebene Richtung über benutzerinitiierte Scrollvorgänge gescrollt werden kann (zum Beispiel durch Ziehen des Scrollbalkens oder Verwendung einer Trackpad-Geste). Mit anderen Worten, gibt es in der gegebenen Richtung überlaufende Inhalte, zu denen gescrollt werden kann? Dies ist nützlich, um Stile in Bezug auf die Scrollposition eines Scrollcontainers anzuwenden. Zum Beispiel könnten Sie einen Hinweis anzeigen, der dazu ermutigt, nach unten zu scrollen, um mehr Inhalte zu sehen, wenn der Scrollbalken oben ist, und ihn ausblenden, wenn der Benutzer tatsächlich zu scrollen begonnen hat.
- `scrolled`: Fragt ab, ob ein Container zuletzt in die gegebene Richtung gescrollt wurde. Dadurch können Sie Stile basierend auf der Scrollrichtung des Benutzers selektiv anwenden, zum Beispiel eine obere Menüleiste, die nur angezeigt wird, wenn der Benutzer nach oben scrollt.
- `snapped`: Fragt ab, ob ein Container im Begriff ist, an einen Vorfahren mit [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container entlang einer gegebenen Achse geschnappt zu werden. Dies ist nützlich, um Stile anzuwenden, wenn ein Element an einen Scroll Snap Container geschnappt wird. Zum Beispiel könnten Sie ein geschnapptes Element auf irgendeine Weise hervorheben oder einige seiner Inhalte zeigen, die zuvor versteckt waren.
- `stuck`: Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an eine Kante seines Scrollcontainer-Vorfahren haftet. Dies ist nützlich, um `position: sticky`-Elemente anders zu stylen, wenn sie haften — zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Syntaxübersicht

Um ein Containerelement als Scrollstatus-Abfrage-Container festzulegen, setzen Sie die {{cssxref("container-type")}} Eigenschaft mit einem Wert von `scroll-state`. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, damit Sie es mit einer spezifischen Container-Abfrage ansprechen können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}} Block erstellen, der die Abfrage spezifiziert, die Regeln, die auf die Kinder des Containers angewendet werden, wenn der Test besteht, und optional den `container-name` der Container, die Sie abfragen möchten. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage auf alle Scrollstatus-Abfragen-Container auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um zu bestimmen, ob der Container in Richtung seiner oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Scrollstatus-Abfragen von anderen Container-Abfragen zu trennen, werden die Scrollstatus-Deskriptoren und -Werte in Klammern gesetzt, vorangestellt von `scroll-state` (`scroll-state( ... )`). Diese Konstrukte sehen aus wie Funktionen, sind es aber nicht.

## Verwendung von `scrollable` Abfragen

Scrollstatus-[`scrollable`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: <keyword>)`, testen, ob ein Containerfilter in die gegebene Richtung über benutzergeführtes Scrollen gescrollt werden kann. Wenn nicht, ergibt die Abfrage false.

Der Schlüsselwortwert gibt die Richtung an, für die Sie die Scrollverfügbarkeit testen, zum Beispiel:

- `top`: Testet, ob der Container in Richtung seiner oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container in Richtung seiner Inline-Ende-Kante gescrollt werden kann.
- `y`: Testet, ob der Container in einer oder beiden Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test bestanden wird, werden die Regeln im `@container` Block auf die Nachkommen des passenden Scrollcontainers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen scrollenden Container voller Inhalte haben und einen praktischen kleinen Link, um zurück nach oben zu scrollen, wenn gewünscht. Wir verwenden eine `scrollable` Abfrage, um den Link nur anzuzeigen, wenn der Benutzer begonnen hat, durch den Inhalt nach unten zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genügend Inhalte enthält, um das Dokument zum Scrollen zu bringen, vorangestellt von einem [Link-zurück-nach-oben](/de/docs/Web/HTML/Reference/Elements/a#result_8):

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

Ein Großteil des HTML-Codes wurde zur Kürze ausgeblendet.

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

Der `.back-to-top` Link erhält einen {{cssxref("position")}} Wert von `fixed`, wird in die untere rechte Ecke des Viewports gesetzt und außerhalb des Viewports mit einem {{cssxref("translate")}} Wert von `80px 0` verschoben. Ein {{cssxref("transition")}} Wert animiert das `translate` und {{cssxref("background-color")}}, wenn sich einer der beiden Werte ändert.

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

Der {{Glossary("scroll_container", "Scrollcontainer")}} in diesem Beispiel ist das `<html>` Element selbst, das als ein Scrollstatus-Abfrage-Container mit einem {{cssxref("container-type")}} Wert von `scroll-state` bezeichnet wird. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, kann jedoch nützlich sein, wenn der Code zu einem Codebase hinzugefügt wird, das mehrere Scrollstatus-Abfrage-Container enthält, die mit verschiedenen Abfragen gezielt angesprochen werden.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen angibt, der von dieser Abfrage anvisiert wird, und die Abfrage selbst — `scrollable: top`. Diese Abfrage wendet die innerhalb des Blocks enthaltenen Regeln nur dann an, wenn das `<html>` Element nach oben gescrollt werden kann — mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. In diesem Fall wird `translate: 0 0` auf den `.back-to-top` Link angewendet, wodurch er zurück auf den Bildschirm verschoben wird.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Der Rest des Beispiel-CSS ist der Kürze halber ausgeblendet.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen, und beachten Sie, wie der "zurück-nach-oben"-Link als Ergebnis erscheint, der sich aufgrund des `transition` sanft von der rechten Seite des Viewports einblendet. Wenn Sie durch Aktivieren des Links oder manuelles Scrollen zurück nach oben scrollen, bewegt sich der "zurück-nach-oben"-Link wieder aus dem Bildschirm.

## Verwendung von `scrolled` Abfragen

Scrollstatus-[`scrolled`](/de/docs/Web/CSS/Reference/At-rules/@container#scrolled) Abfragen, geschrieben als `scroll-state(scrolled: <keyword>)`, testen, ob ein Container-Vorfahre zuletzt in die gegebene Richtung gescrollt wurde. Wenn nicht, ergibt die Abfrage false.

Der Schlüsselwortwert gibt die Richtung an, die Sie testen. Zum Beispiel:

- `block-start`: Testet, ob der Container zuletzt in Richtung seiner Block-Start-Kante gescrollt wurde.
- `right`: Testet, ob der Container zuletzt in Richtung seiner rechten Kante gescrollt wurde.
- `y`: Testet, ob der Container zuletzt auf oder ab entlang der y-Achse gescrollt wurde.
- `none`: Testet, ob der Container kein {{Glossary("scroll_container", "Scrollcontainer")}} ist oder seit dem Rendern nicht in irgendeine Richtung gescrollt wurde.

Wenn der Test true ergibt, werden die Regeln im `@container` Block auf die Nachkommen des passenden Scrollcontainers angewendet.

Sehen wir uns ein Beispiel mit einem Scrollcontainer und einer `scrolled` Abfrage an, die obere und untere Inhalts-"Balken" nur dann anzeigt, wenn der Benutzer nach oben oder unten scrollt.

### HTML

In unserem HTML haben wir ein {{htmlelement("article")}} Element, das genügend Inhalte enthält, um das Dokument zum Scrollen zu bringen, vorangestellt von zwei {{htmlelement("div")}} Elementen, die unsere oberen und unteren "Balken" darstellen:

```html
<div class="bar" id="top-bar">You're currently scrolling towards the top.</div>
<div class="bar" id="bottom-bar">
  You're currently scrolling towards the bottom.
</div>
<article>
  <h1>Document with scrolled container query</h1>
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

Ein Großteil des HTML-Codes wurde zur Kürze ausgeblendet.

```html hidden live-sample___scrolled
<div class="bar" id="top-bar">You're currently scrolling towards the top.</div>
<div class="bar" id="bottom-bar">
  You're currently scrolling towards the bottom.
</div>
<article>
  <h1>Document with scrolled container query</h1>
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

Die "Balken" erhalten ein einfaches Styling. Am wichtigsten ist, dass sie einen {{cssxref("position")}} Wert von `fixed` erhalten, den wir mit {{cssxref("left")}} und {{cssxref("right")}} Werten von beiden Seiten versetzen.

```css hidden live-sample___scrolled
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 90%;
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

```css live-sample___scrolled
.bar {
  border-radius: 10px;
  border: 1px solid black;
  background-color: #00000099;
  padding: 10px;
  color: white;
  text-shadow: 1px 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 5px;
  right: 5px;
}
```

Anschließend setzen wir negative {{cssxref("top")}} und {{cssxref("bottom")}} Längenwerte auf die oberen und unteren Balken, sodass sie standardmäßig über und unter dem Viewport verborgen sind. Wir fügen ein {{cssxref("transition")}} hinzu, um sie bei Änderung ihrer {{cssxref("translate")}} Werte sanft einzublenden.

```css live-sample___scrolled
#top-bar {
  top: -50px;
  transition: 0.6s translate;
}

#bottom-bar {
  bottom: -50px;
  transition: 0.6s translate;
}
```

Der {{Glossary("scroll_container", "Scrollcontainer")}} in diesem Beispiel ist das `<html>` Element selbst, das als Scrollstatus-Abfrage-Container mit einem {{cssxref("container-type")}} Wert von `scroll-state` bezeichnet wird. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, aber nützlich, wenn eine Codebasis über mehrere Scrollstatus-Abfrage-Container verfügt, die mit verschiedenen Abfragen gezielt angesprochen werden.

```css live-sample___scrolled
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir zwei {{cssxref("@container")}} Blöcke, die beide den Container-Namen `scroller` anvisieren. Der erste Block definiert eine Abfrage `scrolled: block-end` und der zweite eine Abfrage `scrolled: block-start`. Diese Abfragen wenden die in ihrem Block enthaltenen Regeln nur dann an, wenn das `<html>` Element zuletzt in Richtung seiner Block-Ende-Kante oder Block-Start-Kante gescrollt wurde. Mit anderen Worten, wenn der Container nach unten oder oben gescrollt wird. Wenn eine dieser Bedingungen wahr wird, erhält der Balken, der sich im Block befindet, einen `translate` Wert, der ihn auf den Bildschirm verschiebt. Der Balken im `@condition`, der nicht mehr wahr ist, bewegt sich aus dem Bildschirm.

```css live-sample___scrolled
@container scroller scroll-state(scrolled: block-start) {
  #top-bar {
    translate: 0 55px;
  }
}

@container scroller scroll-state(scrolled: block-end) {
  #bottom-bar {
    translate: 0 -55px;
  }
}
```

Der Rest des Beispiel-CSS ist der Kürze halber ausgeblendet.

### Ergebnis

{{EmbedLiveSample("scrolled", "100%", "400px")}}

Versuchen Sie, das Dokument hoch- und runterzuscrollen, und beachten Sie, wie die verschiedenen Balken als Ergebnis erscheinen und sich sanft ein- und ausblenden.

## Verwendung von `snapped` Abfragen

Relevant nur, wenn [Scrollsnap](/de/docs/Web/CSS/Guides/Scroll_snap) implementiert ist, testen Scrollstatus-[`snapped`](/de/docs/Web/CSS/Reference/At-rules/@container#snapped) Abfragen, geschrieben als `scroll-state(snapped: <keyword>)`, ob ein Container an einen Vorfahren mit {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} entlang der gegebenen Achse geschnappt werden soll. Wenn nicht, ergibt die Abfrage false.

Der Schlüsselwortwert gibt in diesem Fall die Richtung an, in der Sie die Fähigkeit des Elements testen, zu schnappen, zum Beispiel:

- `x`: Testet, ob der Container horizontal an seinen Scroll-Snap-Container-Vorfahren geschnappt wird.
- `inline`: Testet, ob der Container in der Inline-Richtung an seinen Scroll-Snap-Container-Vorfahren geschnappt wird.
- `y`: Testet, ob der Container in beiden Richtungen an seinen Scroll-Snap-Container-Vorfahren geschnappt wird.

Um einen Container mit einer nicht-`none` `snapped` Scrollstatus-Abfrage auszuwerten, muss er ein Container mit einem Scroll-Snap-Container-Vorfahren sein, d.h. der Vorfahre hat einen {{cssxref("scroll-snap-type")}} Wert, der nicht `none` ist. Die Container-Abfrage `scroll-state(snapped: none)` entspricht Scrollstatus-Containern, die keinen Scrollcontainer-Vorfahren haben.

Die Auswertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis am Scroll Snap Container ausgelöst wird.

Wenn der Test besteht, werden die Regeln im `@container` Block auf die Nachkommen des passenden Scroll-Snap-Zielcontainers angewendet.

In diesem Beispiel schauen wir uns einen Scroll-Snap-Container mit Kindern an, die vertikal an ihn schnappen und verwenden eine `snapped` Abfrage, um die Kinder nur dann zu stylen, wenn sie geschnappt sind oder gerade geschnappt werden sollen.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}} Element, das ein Scroll Snap Container sein wird. Darin befinden sich mehrere {{htmlelement("section")}} Elemente, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper-{{htmlelement("div")}} und eine `<h2>` [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu erstellen, da Container-Abfragen das Stylen von Nachkommen eines Containers ermöglichen, nicht des Containers selbst.

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

Ein Großteil des HTML-Codes wurde zur Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("overflow")}} Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>` Element, um es in einen vertikalen Scrollcontainer zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}} Wert von `y mandatory` auf `<main>`, um es in einen Scroll-Snap-Container zu konvertieren, an den Snap-Ziele entlang der y-Achse geschnappt werden; `mandatory` bedeutet, dass immer an ein Snap-Ziel geschnappt wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>` Elemente werden als Snap-Ziele benannt, indem sie einen nicht-`none` {{cssxref("scroll-snap-align")}} Wert erhalten. Der `center` Wert bedeutet, dass sie am Container an ihren Mittelpunktspunkten geschnappt werden.

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

Wir möchten, dass die `<section>` Elemente abgefragt werden können. Insbesondere möchten wir testen, ob die `<section>` Elemente im Prozess sind, an ihren Container zu schnappen, daher kennzeichnen wir sie als Scrollstatus-Abfrage-Container durch Setzen eines {{cssxref("container-type")}} Werts von `scroll-state`. Wir geben ihnen auch einen {{cssxref("container-name")}}, der nicht unbedingt erforderlich ist, aber nützlich sein wird, wenn unser Code später komplexer wird und wir mehrere Scrollstatus-Abfrage-Container haben, die mit verschiedenen Abfragen gezielt angesprochen werden sollen.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen festlegt, den wir mit dieser Abfrage anvisieren, und die Abfrage selbst — `snapped: y`. Diese Abfrage wendet die im Block enthaltenen Regeln nur an, wenn ein `<section>` Element vertikal an seinen Container geschnappt wird. Wenn dies der Fall ist, wenden wir einen neuen {{cssxref("background")}} und {{cssxref("color")}} auf das `<section>` Element's Kind-`.wrapper` `<div>` an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis wird unten gezeigt. Versuchen Sie, den Container hoch und runter zu scrollen, und beachten Sie, wie sich der Stil des `<section>` ändert, wenn es an seinen Container geschnappt wird.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck` Abfragen

Scrollstatus-[`stuck`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: <keyword>)`, testen, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an eine Kante seines Scrollcontainer-Vorfahren haftet. Wenn nicht, ergibt die Abfrage false.

Der Schlüsselwortwert gibt in diesem Fall die Kante des Scrollcontainers an, die Sie testen, zum Beispiel:

- `top`: Testet, ob der Container an der oberen Kante seines Scrollcontainer-Vorfahren haftet.
- `block-end`: Testet, ob der Container an der Block-Ende-Kante seines Scrollcontainer-Vorfahren haftet.
- `none`: Testet, ob der Container an keiner Kante seines Scrollcontainer-Vorfahren haftet. Beachten Sie, dass `none` Abfragen auch dann übereinstimmen, wenn der Container nicht `position: sticky` auf diesem gesetzt hat.

Wenn die Abfrage true ergibt, werden die Regeln im `@container` Block auf die Nachkommen des passenden `position: sticky` Containers angewendet.

Sehen wir uns ein Beispiel an, bei dem wir einen scrollenden Container mit überlaufenden Inhalten haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers haften, wenn sie an dieser Position scrollen. Wir verwenden eine `stuck` Scrollstatus-Abfrage, um die Überschriften anders zu stylen, wenn sie an der oberen Kante haften.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genügend Inhalte enthält, um das Dokument zum Scrollen zu bringen. Es ist mit mehreren {{htmlelement("section")}} Elementen strukturiert, die je einen {{htmlelement("header")}} mit verschachtelten Inhalten enthalten:

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

Ein Großteil des HTML-Codes wurde zur Kürze ausgeblendet.

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

Jedes `<header>` hat einen {{cssxref("position")}} Wert von `sticky` und einen {{cssxref("top")}} Wert von `0`, wodurch sie an der oberen Kante des Scrollcontainers haften. Um zu testen, ob die `<header>` Elemente an der oberen Kante des Containers haften, werden sie als Scrollstatus-Abfrage-Container mit einem {{cssxref("container-type")}} Wert von `scroll-state` bezeichnet. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, kann jedoch nützlich sein, wenn dieser Code zu einer Codebasis mit mehreren Scrollstatus-Abfrage-Containern hinzugefügt wird, die mit verschiedenen Abfragen gezielt angesprochen werden.

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

Wir geben den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente auch ein grundlegendes Styling und einen {{cssxref("transition")}} Wert, damit sie sanft animiert werden, wenn sich ihre {{cssxref("background")}}-Werte ändern.

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

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen festlegt, den wir mit dieser Abfrage anvisieren, und die Abfrage selbst — `stuck: top`. Diese Abfrage wendet die innerhalb des Blocks enthaltenen Regeln nur an, wenn ein `<header>` Element an der oberen Kante seines Scrollcontainers haftet. Wenn dies der Fall ist, wird ein anderes `background` und ein {{cssxref("box-shadow")}} auf die enthaltene `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #cccccc;
    box-shadow: 0 5px 2px #00000077;
  }
}
```

```css hidden live-sample___scrollable live-sample___scrolled live-sample___snapped live-sample___stuck
@supports not (container-type: scroll-state) {
  body::before {
    content: "Your browser does not support `scroll-state` container queries.";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

Der Rest des CSS wurde der Kürze halber ausgeblendet.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen, und beachten Sie, wie die `<h2>` und `<p>` Elemente in ein neues Farbschema übergehen, wenn sie an der oberen Kante ihres Containers haften.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS bedingte Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [CSS Positionierung](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
