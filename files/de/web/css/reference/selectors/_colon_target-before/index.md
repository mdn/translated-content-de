---
title: :target-before
slug: Web/CSS/Reference/Selectors/:target-before
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

Die **`:target-before`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Scroll-Markierungen aus, die sich _vor_ der aktiven Scroll-Markierung (diejenige, die derzeit {{cssxref(":target-current")}} entspricht) innerhalb einer Scroll-Markierungsgruppe befinden. Sie können diesen Selektor verwenden, um Navigationspunkte vor der aktuellen Navigationsposition innerhalb einer Scroll-Markierungsgruppe zu gestalten.

> [!NOTE]
> Die `:target-before` Pseudoklasse ist nur gültig auf {{cssxref("::scroll-marker")}} Pseudoelementen und Elementen, die als Scroll-Markierungen über die {{cssxref("scroll-target-group")}} Eigenschaft festgelegt wurden.

## Syntax

```css-nolint
:target-before {
  /* ... */
}
```

## Beispiele

### Styling von Navigationselementen vor und nach der aktiven Scrollmarke

In diesem Beispiel verwenden wir die `:target-before` und {{cssxref(":target-after")}} Pseudo-Klassen, um die Scroll-Markierungen vor und nach der aktiven zu kennzeichnen. Dadurch werden Elemente angezeigt, die der Benutzer bereits gesehen hat, und solche, die noch kommen.

#### HTML

Das Markup enthält ein Inhaltsverzeichnis, das mit einer geordneten Liste ({{htmlelement("ol")}}/{{htmlelement("li")}}) und {{htmlelement("a")}} Elementen erstellt wurde. Dies wird von einer Reihe von {{htmlelement("section")}} Elementen mit Inhalten gefolgt.

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapter 1</a></li>
    <li><a href="#ch2">Chapter 2</a></li>
    <li><a href="#ch3">Chapter 3</a></li>
    <li><a href="#ch4">Chapter 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Prose of the century</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>

  <!-- ... -->
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>

  <!-- ... -->
</section>

<!-- ... -->
```

```html hidden live-sample___targeting-before-and-after
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapter 1</a></li>
    <li><a href="#ch2">Chapter 2</a></li>
    <li><a href="#ch3">Chapter 3</a></li>
    <li><a href="#ch4">Chapter 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>My story</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>Chapter 3</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>Chapter 4</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
```

#### CSS

Wir haben `scroll-target-group: auto` auf das `<ol>` gesetzt, um es in einen Scroll-Markierungsgruppen-Container zu verwandeln und dem Browser die Entscheidung zu überlassen, welches `<a>` Element die aktive Scroll-Markierung zu einem bestimmten Zeitpunkt ist (also welcher Link aktuell im Blickfeld ist). Wir gestalten dann die `:target-current` Pseudoklasse mit einer `roten` {{cssxref("color")}}, damit sie deutlich heraussticht.

```css hidden live-sample___targeting-before-and-after
body {
  font: 1.2em / 1.5 system-ui;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

section {
  padding-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

ol {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  background: white;
}

@supports not selector(:target-before) {
  body::before {
    content: "Your browser does not support the :target-before and :target-after pseudo-classes.";
    color: black;
    background-color: #ffcd33;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
```

```css live-sample___targeting-before-and-after
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

Schließlich verwenden wir die `:target-before` Pseudoklasse, um alle `<a>` Elemente vor der aktiven Scroll-Markierung mit einer grauen Farbe und Durchstreichung zu gestalten, um sie abgeschlossen/fertig aussehen zu lassen. Wir verwenden die `:target-after` Pseudoklasse, um alle `<a>` Elemente nach der aktiven Scroll-Markierung mit einer hellen Unterstreichung zu stylen.

```css live-sample___targeting-before-and-after
a:target-before {
  color: gray;
  text-decoration: line-through;
}

a:target-after {
  text-decoration: underline orange 2px;
}
```

#### Ergebnis

Versuchen Sie, durch Klicken auf die Links oder durch Scrollen zu navigieren. In beiden Fällen sehen Sie, dass die rote Textfarbe zwischen den Links wechselt, um mit dem aktuellen Abschnitt im Sichtfeld übereinzustimmen. Die Links vor und nach dem aktuellen roten Link werden ebenfalls aktualisiert, um die in den `a:target-before` und `a:target-after` Regeln definierten Stile zu verwenden.

{{EmbedLiveSample("targeting-before-and-after", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-marker-group")}}
- {{cssxref("scroll-target-group")}}
- {{cssxref(":target-current")}}, {{cssxref(":target-after")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Karussell-Galerie](https://chrome.dev/carousel/) über chrome.dev (2025)
