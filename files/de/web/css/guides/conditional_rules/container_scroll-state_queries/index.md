---
title: Verwendung von Container-Scroll-State-Abfragen
slug: Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: c55c9e2191ad434c496c3a1edd323f8ba24486d6
---

**Container-Scroll-State-Abfragen** sind eine Art von [Container-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container). Anstatt Stile basierend auf der Größe des Containers selektiv auf Nachfahrenelemente anzuwenden, ermöglichen es Scroll-State-Abfragen, Stile basierend auf dem Scrollzustand des Containers selektiv auf Nachfahrenelemente anzuwenden. Dies kann beinhalten, ob der Container teilweise gescrollt wird, an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} Vorfahren eingerastet ist oder über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position) positioniert und an eine Begrenzung eines {{Glossary("scroll_container", "Scroll-Containers")}} Vorfahren angedockt ist.

Dieser Artikel erklärt, wie Sie Container-Scroll-State-Abfragen verwenden, indem er ein Beispiel für jeden Typ durchgeht. Es wird davon ausgegangen, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu in Container-Abfragen sind, lesen Sie [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries), bevor Sie fortfahren.

## Arten von Container-Scroll-State-Abfragen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Fragt, ob ein Container in die angegebene Richtung durch benutzerinitiiertes Scrollen gescrollt werden kann (zum Beispiel durch Ziehen des Scrollbalkens oder mit einer Trackpad-Geste). Mit anderen Worten, gibt es überfließenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Dies ist nützlich, um Stile zu anzuwenden, die sich auf die Scrollposition eines Scroll-Containers beziehen. Zum Beispiel könnten Sie einen Hinweis anzeigen, der die Leute ermutigt, nach unten zu scrollen, um mehr Inhalt zu sehen, wenn der Scrollbalken oben ist, und ihn ausblenden, wenn der Benutzer tatsächlich mit dem Scrollen begonnen hat.
- `scrolled`: Fragt, ob ein Container zuletzt in die angegebene Richtung gescrollt wurde. Dies ermöglicht es Ihnen, Stile basierend auf der Scrollrichtung des Benutzers selektiv anzuwenden, zum Beispiel eine obere Menüleiste, die nur angezeigt wird, wenn der Benutzer nach oben scrollt.
- `snapped`: Fragt, ob ein Container an einen [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container Vorfahren entlang einer angegebenen Achse eingerastet wird. Dies ist nützlich, um Stile anzuwenden, wenn ein Element an einen Scroll-Snap-Container eingerastet ist. Zum Beispiel möchten Sie das eingerastete Element auf irgendeine Weise hervorheben oder einen zuvor versteckten Inhalt enthüllen.
- `stuck`: Fragt, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einer Kante seines Scroll-Container Vorfahren klebt. Dies ist nützlich, um `position: sticky` Elemente unterschiedlich zu gestalten, wenn sie kleben — zum Beispiel könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Übersicht über die Syntax

Um ein Containerelement als Scroll-State-Abfragecontainer zu etablieren, setzen Sie die {{cssxref("container-type")}} Eigenschaft darauf mit einem Wert von `scroll-state`. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, sodass Sie ihn mit einer spezifischen Container-Abfrage anvisieren können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}} Block erstellen, der die Abfrage, die Regeln, die auf Kinder des Containers angewendet werden, wenn der Test besteht, und optional den `container-name` der Container, die Sie abfragen möchten, angibt. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage für alle Scroll-State-Abfragecontainer auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um festzustellen, ob der Container in Richtung seiner oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Scroll-State-Abfragen von anderen Container-Abfragen zu trennen, werden die Scroll-State-Deskriptoren und Werte in Klammern gesetzt, vorangestellt von `scroll-state` (`scroll-state( ... )`). Diese Konstrukte sehen aus wie Funktionen, sind es aber nicht.

## Verwendung von `scrollable` Abfragen

Scroll-State [`scrollable`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: <keyword>)`, testen, ob ein Container-Vorfahren in der angegebenen Richtung durch benutzerinitiiertes Scrollen gescrollt werden kann. Wenn nicht, gibt die Abfrage false zurück.

Der Schlüsselwortwert gibt die Richtung an, für die Sie die Verfügbarkeit des Scrolling testen, zum Beispiel:

- `top`: Testet, ob der Container in Richtung seiner oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container in Richtung seiner inline-end Kante gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachfahren des passenden Scroll-Containers angewendet.

Schauen wir uns ein Beispiel an, in dem wir einen Scroll-Container voller Inhalt haben und einen praktischen kleinen Link, um bei Bedarf wieder nach oben zu scrollen. Wir verwenden eine `scrollable` Abfrage, um den Link nur anzuzeigen, wenn der Benutzer begonnen hat, den Inhalt herunterzuscrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element, das genug Inhalt enthält, um das Dokument zu scrollen, vorangestellt von einem [Zurück-zum-Anfang-Link](/de/docs/Web/HTML/Reference/Elements/a#result_8):

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

Wir haben den größten Teil des HTML zur Kürze ausgeblendet.

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

Dem `.back-to-top` Link wird ein {{cssxref("position")}} Wert von `fixed` zugewiesen, er wird in der unteren rechten Ecke des Viewports platziert und mittels eines {{cssxref("translate")}} Werts von `80px 0` aus dem Viewport verschoben. Ein {{cssxref("transition")}} Wert animiert das `translate` und die {{cssxref("background-color")}}, wenn sich einer der Werte ändert.

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

Der {{Glossary("scroll_container", "Scroll-Container")}} in diesem Beispiel ist das `<html>` Element selbst, das als Scroll-State-Abfragecontainer mit einem {{cssxref("container-type")}} Wert von `scroll-state` gekennzeichnet ist. Der {{cssxref("container-name")}} ist nicht unbedingt notwendig, aber nützlich in Fällen, in denen der Code in einen Codebestand mit mehreren Scroll-State-Abfragecontainern, die mit unterschiedlichen Abfragen angesprochen werden, eingefügt wird.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen festlegt, der von dieser Abfrage anvisiert wird, und die Abfrage selbst — `scrollable: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur dann an, wenn das `<html>` Element in Richtung seiner oberen Kante gescrollt werden kann — mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. Ist das der Fall, wird `translate: 0 0` auf den `.back-to-top` Link angewendet, der ihn zurück auf den Bildschirm verschiebt.

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

Versuchen Sie, das Dokument herunterzuscrollen, und beachten Sie, wie der "Zurück-zum-Anfang" Link erscheint und aufgrund des `transition` sanft von der rechten Seite des Viewports animiert wird. Wenn Sie durch Aktivieren des Links oder manuelles Scrollen wieder nach oben scrollen, wird der "Zurück-zum-Anfang" Link wieder aus dem Bildschirm verschoben.

## Verwendung von `scrolled` Abfragen

Scroll-State [`scrolled`](/de/docs/Web/CSS/Reference/At-rules/@container#scrolled) Abfragen, geschrieben als `scroll-state(scrolled: <keyword>)`, testen, ob ein Container-Vorfahren zuletzt in die angegebene Richtung gescrollt wurde. Wenn nicht, gibt die Abfrage false zurück.

Der Schlüsselwortwert gibt die Richtung an, die Sie testen. Zum Beispiel:

- `block-start`: Testet, ob der Container zuletzt in Richtung seiner block-start Kante gescrollt wurde.
- `right`: Testet, ob der Container zuletzt in Richtung seiner rechten Kante gescrollt wurde.
- `y`: Testet, ob der Container zuletzt nach oben oder unten entlang der y-Achse gescrollt wurde.
- `none`: Testet, ob der Container kein {{Glossary("scroll_container", "Scroll-Container")}} ist oder seit dem Rendern nicht in irgendeine Richtung gescrollt wurde.

Wenn der Test true zurückgibt, werden die Regeln innerhalb des `@container` Blocks auf die Nachfahren des passenden Scroll-Containers angewendet.

Schauen wir uns ein Beispiel eines Scroll-Containers mit einer `scrolled` Abfrage an, die obere und untere Inhalts-"Leisten" nur dann anzeigt, wenn der Benutzer nach oben oder unten scrollt.

### HTML

In unserem HTML haben wir ein {{htmlelement("article")}} Element mit genügend Inhalt, um das Dokument zu scrollen, vorangestellt von zwei {{htmlelement("div")}} Elementen, die unsere oberen und unteren "Leisten" darstellen:

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

Wir haben den größten Teil des HTML zur Kürze ausgeblendet.

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

Den "Leisten" wird ein grundlegendes Styling zugewiesen. Am bedeutendsten wird ihnen ein {{cssxref("position")}} Wert von `fixed` zugewiesen, den wir mithilfe von {{cssxref("left")}} und {{cssxref("right")}} Werten von beiden Seiten versetzen.

```css hidden live-sample___scrolled
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
  border: 1px solid #000;
  background-color: #0009;
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

Als nächstes setzen wir negative {{cssxref("top")}} und {{cssxref("bottom")}} Längenwerte auf die oberen und unteren Leisten, damit sie standardmäßig oberhalb und unterhalb des Viewports verborgen sind. Wir fügen ein {{cssxref("transition")}} hinzu, damit sie sanft animiert eingeblendet werden, wenn sich ihre {{cssxref("translate")}} Werte ändern.

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

Der {{Glossary("scroll_container", "Scroll-Container")}} in diesem Beispiel ist das `<html>` Element selbst, das als Scroll-State-Abfragecontainer mit einem {{cssxref("container-type")}} Wert von `scroll-state` gekennzeichnet ist. Der {{cssxref("container-name")}} ist nicht unbedingt notwendig, aber es ist nützlich, wenn ein Codebestand mehrere Scroll-State-Abfragecontainer hat, die mit unterschiedlichen Abfragen angesprochen werden.

```css live-sample___scrolled
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir zwei {{cssxref("@container")}} Blöcke, die beide den `scroller` Container-Namen anvisieren. Der erste Block definiert eine Abfrage `scrolled: block-end` und der zweite definiert eine Abfrage `scrolled: block-start`. Diese Abfragen wenden die Regeln in ihrem Block nur an, wenn das `<html>` Element zuletzt in Richtung seiner block-end-Kante oder block-start-Kante gescrollt wurde. Mit anderen Worten, wenn der Container nach unten oder oben gescrollt wird. Wenn eine der Bedingungen wahr wird, hat die im Block referenzierte Leiste einen `translate` Wert, der sie auf den Bildschirm verschiebt. Die im `@condition` referenzierte Leiste, die nicht mehr wahr ist, wird aus dem Bildschirm heraus verschoben.

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

Wir haben den Rest des Beispiel-CSS zur Kürze ausgeblendet.

### Ergebnis

{{EmbedLiveSample("scrolled", "100%", "400px")}}

Versuchen Sie, das Dokument nach oben und unten zu scrollen, und beachten Sie, wie die verschiedenen Leisten als Ergebnis erscheinen und sanft auf- und abgleiten.

## Verwendung von `snapped` Abfragen

Nur relevant, wenn [Scroll-Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) implementiert ist, testen Scroll-State [`snapped`](/de/docs/Web/CSS/Reference/At-rules/@container#snapped) Abfragen, geschrieben als `scroll-state(snapped: <keyword>)`, ob ein Container entlang der angegebenen Achse an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} Vorfahren eingerastet werden soll. Wenn nicht, gibt die Abfrage false zurück.

Der Schlüsselwortwert gibt in diesem Fall die Richtung an, in der Sie die Fähigkeit des Elements, einzurasten, testen, zum Beispiel:

- `x`: Testet, ob der Container horizontal an seinen Scroll-Snap-Container-Vorfahren einrastet.
- `inline`: Testet, ob der Container an seinen Scroll-Snap-Container-Vorfahren in der Inline-Richtung einrastet.
- `y`: Testet, ob der Container in beide Richtungen an seinen Scroll-Snap-Container-Vorfahren einrastet.

Um einen Container mit einer nicht-`none` `snapped` Scroll-State-Abfrage zu bewerten, muss es sich um einen Container mit einem Scroll-Snap-Container-Vorfahren handeln, das heißt, der Vorfahre hat einen {{cssxref("scroll-snap-type")}} Wert ungleich `none`. Die Container-Abfrage `scroll-state(snapped: none)` passt auf Scroll-State-Container, die keinen Scroll-Container-Vorfahren haben.

Die Bewertung erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis am Scroll-Snap-Container ausgelöst wird.

Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachfahren des passenden Scroll-Snap-Zielcontainers angewendet.

In diesem Beispiel betrachten wir einen Scroll-Snap-Container mit Kindern, die vertikal an ihn einrasten, und verwenden eine `snapped` Abfrage, um die Kinder nur dann zu stylen, wenn sie eingerastet oder im Begriff sind, eingerastet zu werden.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}} Element, das ein Scroll-Snap-Container sein wird. Darin befinden sich mehrere {{htmlelement("section")}} Elemente, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper {{htmlelement("div")}} und eine `<h2>` [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu schaffen, da Container-Abfragen das Stylen von Nachfahren eines Containers ermöglichen, nicht des Containers selbst.

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

Wir haben den größten Teil des HTML zur Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("overflow")}} Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>` Element, um es in einen vertikalen Scroll-Container zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}} Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, zu dem Snap-Ziele entlang der y-Achse einrasten werden; `mandatory` bedeutet, dass ein Snap-Ziel _immer_ eingerastet wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>` Elemente werden durch Setzen eines {{cssxref("scroll-snap-align")}} Werts ungleich `none` als Snap-Ziele bezeichnet. Der `center` Wert bedeutet, dass sie an ihrem Mittelpunkt an den Container einrasten.

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

Wir möchten die `<section>` Elemente abfragbar machen. Insbesondere möchten wir testen, ob die `<section>` Elemente gerade dabei sind, an ihren Container einzurasten, also kennzeichnen wir sie als Scroll-State-Abfragecontainer, indem wir einen {{cssxref("container-type")}} Wert von `scroll-state` darauf setzen. Wir geben ihnen auch einen {{cssxref("container-name")}}, was nicht unbedingt notwendig ist, aber nützlich wird, wenn unser Code später komplexer wird und wir mehrere Scroll-State-Abfragecontainer haben, die wir mit unterschiedlichen Abfragen anvisieren möchten.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen festlegt, den wir mit dieser Abfrage anvisieren, und die Abfrage selbst — `snapped: y`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn ein `<section>` Element vertikal an seinen Container einrastet. Wenn das der Fall ist, wenden wir einen neuen {{cssxref("background")}} und {{cssxref("color")}} auf die `.wrapper` `<div>` an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis ist unten gezeigt. Versuchen Sie, den Container nach oben und unten zu scrollen, und beachten Sie, wie sich der Stil des `<section>` ändert, wenn es an seinen Container eingerastet wird.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck` Abfragen

Scroll-State [`stuck`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: <keyword>)`, testen, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einer Kante seines Scroll-Container Vorfahren klebt. Wenn nicht, gibt die Abfrage false zurück.

Der Schlüsselwortwert in diesem Fall gibt die Kante des Scroll-Containers an, die Sie testen, zum Beispiel:

- `top`: Testet, ob der Container an der oberen Kante seines Scroll-Container Vorfahren klebt.
- `block-end`: Testet, ob der Container an der block-end Kante seines Scroll-Container Vorfahren klebt.
- `none`: Testet, ob der Container an keiner Kante seines Scroll-Container Vorfahren klebt. Beachten Sie, dass `none` Abfragen auch zutreffen, wenn der Container nicht `position: sticky` gesetzt hat.

Wenn die Abfrage true zurückgibt, werden die Regeln im `@container` Block auf die Nachfahren des passenden `position: sticky` Containers angewendet.

Schauen wir uns ein Beispiel an, bei dem wir einen Scroll-Container mit überlaufendem Inhalt haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers haften, wenn sie dorthin gescrollt werden. Wir verwenden eine `stuck` Scroll-State-Abfrage, um die Überschriften anders zu stylen, wenn sie an der oberen Kante haften.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element mit genug Inhalt, um das Dokument zu scrollen. Es ist strukturiert mit mehreren {{htmlelement("section")}} Elementen, die jeweils eine {{htmlelement("header")}} mit verschachteltem Inhalt enthalten:

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

Wir haben den größten Teil des HTML zur Kürze ausgeblendet.

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

Jedes `<header>` hat einen {{cssxref("position")}} Wert von `sticky` und einen {{cssxref("top")}} Wert von `0`, was sie an die obere Kante des Scroll-Containers anheftet. Um zu testen, ob die `<header>` Elemente an der oberen Kante des Containers haften, werden sie als Scroll-State-Abfragecontainer mit einem {{cssxref("container-type")}} Wert von `scroll-state` gekennzeichnet. Der {{cssxref("container-name")}} ist nicht unbedingt notwendig, aber nützlich, wenn dieser Code in einen Codebestand mit mehreren Scroll-State-Abfragecontainern eingefügt wird, die mit unterschiedlichen Abfragen anvisiert werden.

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

Wir geben auch den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente ein grundlegendes Styling und einen {{cssxref("transition")}} Wert, damit sie sanft animieren, wenn sich ihre {{cssxref("background")}} Werte ändern.

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

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Container-Namen festlegt, den wir mit dieser Abfrage anvisieren, und die Abfrage selbst — `stuck: top`. Diese Abfrage wendet die Regeln innerhalb des Blocks nur an, wenn ein `<header>` Element an der oberen Kante seines Scroll-Containers klebt. Wenn das der Fall ist, wird ein anderer `background` und ein {{cssxref("box-shadow")}} auf die enthaltenen `<h2>` und `<p>` angewendet.

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

Wir haben den Rest des CSS zur Kürze ausgeblendet.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen, und beachten Sie, wie die `<h2>` und `<p>` Elemente in ein neues Farbschema übergehen, wenn sie an der oberen Kante ihres Containers kleben.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwenden von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS bedingte Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [CSS Positionierung](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
