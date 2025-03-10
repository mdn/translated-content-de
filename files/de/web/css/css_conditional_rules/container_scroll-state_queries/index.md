---
title: Verwendung von Container-Scroll-Zustandsabfragen
slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

**Container-Scroll-Zustandsabfragen** sind eine Art von [Container-Abfragen](/de/docs/Web/CSS/@container). Anstatt Stile abhängig von der Größe des Containers selektiv auf Nachbarelemente anzuwenden, ermöglichen Scroll-Zustandsabfragen die selektive Anwendung von Stilen auf Nachbarelemente basierend auf dem Scroll-Zustand des Containers. Dies kann beinhalten, ob der Container teilweise gescrollt, an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} Vorfahren angeheftet oder über [`position: sticky`](/de/docs/Web/CSS/position) positioniert und an eine Grenze eines {{Glossary("scroll_container", "Scroll Containers")}} Vorfahren angeheftet ist.

Dieser Artikel erklärt, wie Container-Scroll-Zustandsabfragen verwendet werden, und führt durch ein Beispiel für jeden Typ. Es wird vorausgesetzt, dass Sie die Grundlagen von Container-Abfragen kennen. Wenn Sie neu bei Container-Abfragen sind, lesen Sie [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries), bevor Sie fortfahren.

## Arten von Container-Scroll-Zustandsabfragen

Es gibt drei `@container` Deskriptoren, die Sie in einer `scroll-state()` Abfrage verwenden können:

- `scrollable`: Abfragt, ob ein Container in die gegebene Richtung durch benutzerinitiierte Scroll-Aktionen scrollbar ist (zum Beispiel durch Ziehen des Scrollbalkens oder eine Trackpad-Geste). Mit anderen Worten: Gibt es überlaufenden Inhalt in der gegebenen Richtung, zu dem gescrollt werden kann? Dies ist nützlich, um Stile im Zusammenhang mit der Scrollposition eines Scroll-Containers zu applizieren. Zum Beispiel könnten Sie einen Hinweis anzeigen, der Benutzer dazu ermutigt, nach unten zu scrollen und mehr Inhalte zu sehen, wenn der Scrollbalken oben ist, und ihn ausblenden, wenn der Benutzer tatsächlich begonnen hat zu scrollen.
- `snapped`: Abfragt, ob ein Container an einen [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Vorfahren entlang einer gegebenen Achse geheftet ist oder sein wird. Dies ist nützlich für das Anwenden von Stilen, wenn ein Element an einen Scroll-Snap-Container geheftet ist. Beispielsweise könnten Sie ein geheftetes Element in irgendeiner Weise hervorheben oder einige seiner zuvor versteckten Inhalte sichtbar machen.
- `stuck`: Abfragt, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einer Kante seines Scroll-Containers-Vorfahren feststeckt. Dies ist nützlich für das Styling von `position: sticky` Elementen, wenn sie feststecken – z. B. könnten Sie ihnen ein anderes Farbschema oder Layout geben.

## Überblick über die Syntax

Um ein Containerelement als Scroll-Zustandsabfragecontainer zu etablieren, setzen Sie die Eigenschaft {{cssxref("container-type")}} mit dem Wert `scroll-state` darauf. Sie können ihm optional auch einen {{cssxref("container-name")}} geben, sodass Sie ihn mit einer spezifischen Container-Abfrage ansprechen können:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

Sie können dann einen {{cssxref("@container")}}-Block erstellen, der die Abfrage spezifiziert, die Regeln, die auf die Kinder des Containers angewendet werden, wenn der Test erfolgreich ist, und optional den `container-name` der Container, die Sie abfragen möchten. Wenn Sie keinen `container-name` angeben, wird die Container-Abfrage auf alle Scroll-Zustandsabfragecontainer auf der Seite angewendet.

Hier fragen wir nur Container mit dem Namen `my-container` ab, um zu bestimmen, ob der Container in Richtung seiner oberen Kante gescrollt werden kann:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> Um Scroll-Zustandsabfragen von anderen Container-Abfragen zu trennen, werden die Scroll-Zustands-Deskriptoren und -Werte in Klammern gesetzt, vorangestellt durch `scroll-state` (`scroll-state( ... )`). Diese Konstrukte sehen wie Funktionen aus, sind es jedoch nicht.

## Verwendung von `scrollable` Abfragen

Scroll-Zustands-[`scrollable`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(scrollable: value)`, testen, ob ein Container-Vorfahre in die gegebene Richtung durch benutzerinitiierte Scrollaktionen gescrollt werden kann. Wenn nicht, gibt die Abfrage false zurück.

Der `value` gibt an, in welcher Richtung Sie die Scrollverfügbarkeit testen, zum Beispiel:

- `top`: Testet, ob der Container in Richtung seiner oberen Kante gescrollt werden kann.
- `inline-end`: Testet, ob der Container in Richtung seiner Inline-End-Kante gescrollt werden kann.
- `y`: Testet, ob der Container in eine oder beide Richtungen entlang seiner y-Achse gescrollt werden kann.

Wenn der Test erfolgreich ist, werden die Regeln im `@container`-Block auf Nachfahren des passenden Scroll-Containers angewendet.

Schauen wir uns ein Beispiel an, in dem wir einen scrollenden Container voller Inhalte und einen praktischen kleinen Link haben, um bei Bedarf zurück zum Anfang zu scrollen. Wir werden eine `scrollable`-Abfrage verwenden, um den Link nur anzuzeigen, wenn der Benutzer begonnen hat, durch den Inhalt nach unten zu scrollen.

### HTML

Im HTML haben wir ein {{htmlelement("article")}}-Element mit genug Inhalt, um das Dokument zum Scrollen zu bringen, vorausgehend von einem [Zurück-zur-Spitze-Link](/de/docs/Web/HTML/Element/a#result_8):

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

Wir haben das meiste HTML der Kürze halber verborgen.

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

Der `.back-to-top` Link erhält einen {{cssxref("position")}} Wert von `fixed`, wird unten rechts in der Ansicht platzieren und mit einem {{cssxref("translate")}} Wert von `80px 0` aus der Ansicht verschoben. Ein {{cssxref("transition")}} Wert wird die `translate` und {{cssxref("background-color")}} animieren, wenn sich einer der Werte ändert.

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

Der {{Glossary("scroll_container", "Scroll-Container")}} in diesem Beispiel ist das `<html>`-Element selbst, als Scroll-Zustandsabfragecontainer mit einem {{cssxref("container-type")}}-Wert von `scroll-state` gekennzeichnet. Der {{cssxref("container-name")}} ist nicht unbedingt erforderlich, aber nützlich in Fällen, in denen der Code zu einer Codebasis hinzugefügt wird, die mehrere gezielte Scroll-Zustandsabfragecontainer mit unterschiedlichen Abfragen enthält.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}} Block, der den Containernamen festlegt, der durch diese Abfrage angesprochen wird, sowie die Abfrage selbst — `scrollable: top`. Diese Abfrage wendet die Regeln im Block nur dann an, wenn das `<html>` Element an seiner oberen Kante gescrollt werden kann — mit anderen Worten, wenn der Container zuvor nach unten gescrollt wurde. Ist dies der Fall, wird `translate: 0 0` auf den `.back-to-top`-Link angewendet, welcher ihn wieder auf den Bildschirm zurückbringt.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

Wir haben den restlichen Beispiel-CSS der Kürze halber verborgen.

### Ergebnis

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Versuchen Sie, das Dokument nach unten zu scrollen, und bemerken Sie, wie der "Zurück-zur-Spitze"-Link als Ergebnis erscheint und sanft von der rechten Seite der Ansicht animiert wird, bedingt durch den `transition`. Wenn Sie zurück zum Anfang scrollen, indem Sie den Link aktivieren oder manuell scrollen, wird der "Zurück-zur-Spitze"-Link aus dem Bildschirm heraus animiert.

## Verwendung von `snapped` Abfragen

Nur relevant, wenn [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) implementiert ist, testen Scroll-Zustands-[`snapped`](/de/docs/Web/CSS/@container#snapped) Abfragen (geschrieben als `scroll-state(snapped: value)`) ob ein Container ist oder wird, an einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} Vorfahr entlang der gegebenen Achse geheftet. Gibt false zurück, wenn nicht.

Der `value` gibt in diesem Fall die Richtung an, in der Sie die Fähigkeit des Elements zum Snap testen, zum Beispiel:

- `x`: Testet, ob der Container horizontal zu seinem Scroll-Snap-Container-Vorfahren snappt.
- `inline`: Testet, ob der Container in Inline-Richtung zu seinem Scroll-Snap-Container-Vorfahren snappt.
- `y`: Testet, ob der Container in beide Richtungen zu seinem Scroll-Snap-Container-Vorfahren snappt.

Um einen Container mit einer nicht-`none` `snapped`-Scroll-Zustandsabfrage zu evaluieren, muss es ein Container mit einem Scroll-Snap-Container-Vorfahren sein, das heißt, der Vorfahre hat einen {{cssxref("scroll-snap-type")}} Wert, der nicht `none` ist. Die Container-Abfrage `scroll-state(snapped: none)` passt zu Scroll-Zustandscontainern, die keinen Scroll-Container-Vorfahren haben.

Die Evaluation erfolgt, wenn das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis auf dem Scroll-Snap-Container ausgelöst wird.

Wenn der Test erfolgreich ist, werden die Regeln im `@container`-Block auf Nachfahren des passenden Scroll-Snap-Zielcontainers angewendet.

In diesem Beispiel werden wir uns einen Scroll-Snap-Container mit Kindern ansehen, die vertikal zu ihm snap und eine `snapped`-Abfrage verwenden, um die Kinder nur dann zu stylen, wenn sie gesnapped oder kurz davor sind, gesnapped zu werden.

### HTML

Das HTML besteht aus einem {{htmlelement("main")}}-Element, das ein Scroll-Snap-Container wird. Darin sind mehrere {{htmlelement("section")}}-Elemente enthalten, die Snap-Ziele sein werden. Jedes `<section>` enthält einen Wrapper-{{htmlelement("div")}} und eine `<h2>` [Überschrift](/de/docs/Web/HTML/Element/Heading_Elements). Die Wrapper sind enthalten, um ein Stilziel zu schaffen, da Container-Abfragen das Styling von Nachfahren eines Containers ermöglichen, nicht des Containers selbst.

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

Wir haben das meiste HTML der Kürze halber verborgen.

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

Wir setzen einen {{cssxref("overflow")}} Wert von `scroll` und eine feste {{cssxref("height")}} auf das `<main>` Element, um es in einen vertikalen Scroll-Container zu verwandeln. Wir setzen auch einen {{cssxref("scroll-snap-type")}} Wert von `y mandatory`, um `<main>` in einen Scroll-Snap-Container zu verwandeln, zu dem Snap-Ziele entlang der y-Achse gesnapped werden; `mandatory` bedeutet, dass ein Snap-Ziel _immer_ gesnapped wird.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

Die `<section>` Elemente werden als Snap-Ziele durch Setzen eines nicht-`none` {{cssxref("scroll-snap-align")}} Werts bezeichnet. Der `center` Wert bedeutet, dass sie an ihr Zentrumspunkt an den Container gesnapped werden.

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

Wir möchten die `<section>` Elemente abfragbar machen. Genauer gesagt möchten wir testen, ob die `<section>` Elemente zu ihrem Container snappen, daher kennzeichnen wir sie als Scroll-Zustandsabfragecontainer, indem wir ihnen einen {{cssxref("container-type")}} Wert von `scroll-state` geben. Wir geben ihnen auch einen {{cssxref("container-name")}}, welcher nicht unbedingt erforderlich ist, aber nützlich sein wird, wenn unser Code später komplexer wird und wir mehrere gezielte Scroll-Zustandsabfragecontainer mit unterschiedlichen Abfragen haben.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Containernamen festlegt, den wir mit dieser Abfrage ansprechen, und die Abfrage selbst — `snapped: y`. Diese Abfrage wendet die Regeln im Block nur dann an, wenn ein `<section>`-Element vertikal zu seinem Container snappen angesetzt ist. Wenn das der Fall ist, wenden wir einen neuen {{cssxref("background")}} und {{cssxref("color")}} auf das Kind `<div>` der `<section>`-Elemente an, um es hervorzuheben.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Ergebnis

Das gerenderte Ergebnis sehen Sie unten. Versuchen Sie, den Container nach oben und unten zu scrollen, und bemerken Sie, wie sich der Stil des `<section>` Elements ändert, wenn es zu seinem Container gesnapped wird.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Verwendung von `stuck` Abfragen

Scroll-Zustands-[`stuck`](/de/docs/Web/CSS/@container#scrollable) Abfragen, geschrieben als `scroll-state(stuck: value)`, testen, ob ein Container mit einem {{cssxref("position")}} Wert von `sticky` an einer Kante seines Scroll-Containers-Vorfahren feststeckt. Wenn nicht, gibt die Abfrage false zurück.

Der `value` gibt in diesem Fall die Kante des Scroll-Containers an, die getestet wird, beispielsweise:

- `top`: Testet, ob der Container an der oberen Kante seines Scroll-Container-Vorfahren feststeckt.
- `block-end`: Testet, ob der Container an der Block-End-Kante seines Scroll-Container-Vorfahren feststeckt.
- `none`: Testet, ob der Container an keiner Kante seines Scroll-Container-Vorfahren feststeckt. Beachten Sie, dass `none` Abfragen auch dann übereinstimmen, wenn der Container `position: sticky` nicht gesetzt hat.

Wenn die Abfrage true zurückgibt, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des passenden `position: sticky`-Containers angewendet.

Schauen wir uns ein Beispiel an, in dem wir einen scrollenden Container mit überlaufenden Inhalten haben, in dem die Überschriften auf `position: sticky` gesetzt sind und an der oberen Kante des Containers festkleben, wenn sie auf diese Position scrollen. Wir werden eine `stuck`-Scroll-Zustandsabfrage verwenden, um die Überschriften anders zu stylen, wenn sie an der oberen Kante feststecken.

### HTML

Im HTML haben wir ein {{htmlelement("article")}} Element mit genug Inhalt, um das Dokument zum Scrollen zu bringen. Es ist mit mehreren {{htmlelement("section")}} Elementen strukturiert, die jeweils ein {{htmlelement("header")}} mit verschachtelten Inhalten enthalten:

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

Wir haben das meiste HTML der Kürze halber verborgen.

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

Jedes `<header>` hat einen {{cssxref("position")}} Wert von `sticky` und einen {{cssxref("top")}} Wert von `0`, was sie an der oberen Kante des Scroll-Containers festkleben lässt. Um zu testen, ob die `<header>` Elemente an der oberen Kante des Containers festkleben, sind sie als Scroll-Zustandsabfragecontainer mit einem {{cssxref("container-type")}} Wert von `scroll-state` gekennzeichnet. Der {{cssxref("container-name")}} ist nicht zwingend erforderlich, aber nützlich, wenn dieser Code zu einer Codebasis mit mehreren gezielten Scroll-Zustandsabfragecontainern mit unterschiedlichen Abfragen hinzugefügt wird.

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

Wir geben den `<h2>` und `<p>` Elementen innerhalb der `<header>` Elemente auch ein grundlegendes Styling und einen {{cssxref("transition")}} Wert, sodass sie sanft animieren, wenn sich ihre {{cssxref("background")}} Werte ändern.

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

Als nächstes definieren wir einen {{cssxref("@container")}}-Block, der den Containernamen festlegt, den wir mit dieser Abfrage ansprechen, und die Abfrage selbst — `stuck: top`. Diese Abfrage wendet die Regeln im Block nur dann an, wenn ein `<header>` Element an der oberen Kante seines Scroll-Containers feststeckt. In diesem Fall werden ein anderer `background` und ein {{cssxref("box-shadow")}} auf das enthaltene `<h2>` und `<p>` angewendet.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #ccc;
    box-shadow: 0 5px 2px #0007;
  }
}
```

Wir haben den restlichen CSS der Kürze halber verborgen.

### Ergebnis

Versuchen Sie, das Dokument nach unten und oben zu scrollen, und bemerken Sie, wie die `<h2>` und `<p>` Elemente zu einem neuen Farbschema übergehen, wenn sie an der oberen Kante ihres Containers feststecken.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## Siehe auch

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [CSS Positionierung](/de/docs/Web/CSS/CSS_positioned_layout) Modul
