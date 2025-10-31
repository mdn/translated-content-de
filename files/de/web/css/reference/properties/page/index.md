---
title: page
slug: Web/CSS/Reference/Properties/page
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`page`**-Eigenschaft von [CSS](/de/docs/Web/CSS) wird verwendet, um die benannte Seite zu spezifizieren, eine spezifische Art von Seite, die durch die {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert ist.

Wenn es mehrere Selektoren gibt, die nacheinander eine benannte Seite verwenden, kann ein erzwungener Seitenumbruch mit [`break-after`](/de/docs/Web/CSS/Reference/Properties/break-after) erforderlich sein.

## Syntax

```css
/* set a named page */
page: exampleName;
page: chapterIntro;

/* Use ancestors named page */
page: auto; /* default value */

/* Global values */
page: inherit;
page: initial;
page: revert;
page: revert-layer;
page: unset;
```

### Werte

- `auto`
  - : Standardwert. Verwenden Sie den Wert des nächstgelegenen Vorfahren mit einem Nicht-`auto`-Wert. Wenn kein Vorfahr einen benannten Seitenwert gesetzt hat, ist der verwendete Wert für auto der leere String.
- {{cssxref("custom-ident")}}
  - : Groß- und kleinschreibungsempfindlicher Name, der in einer [`@page`](/de/docs/Web/CSS/@page) At-Regel definiert ist.

## Offizielle Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Beispiel für benannte Seite

In diesem Beispiel gibt es zwei Teile zu diesem HTML: Drucksteuerungen und den zu druckenden Inhalt.
Die Drucksteuerungen ermöglichen es dem Benutzer, auszuwählen, wie die `section`s in dem `article` gedruckt werden.

```html live-sample___page-property
<!-- print options in a fieldset -->
<fieldset id="printStyle">
  <legend>How would you like to print</legend>
  <label for="single">
    <input type="radio" id="single" name="type" value="single" checked />
    No Pages
  </label>
  <label for="grouped">
    <input type="radio" id="grouped" name="type" value="grouped" />Pages with
    Grouped Chapters
  </label>
  <label for="paged">
    <input type="radio" id="paged" name="type" value="paged" />
    Chapters Paged
  </label>
  <button id="print">Print</button>
</fieldset>

<!-- Content to be printed -->
<article id="print-area" data-print="single">
  <section id="toc">
    <h2>Table of contents</h2>
    <ul>
      <li>Foreword</li>
      <li>Introduction</li>
      <li>Chapter One - named pages</li>
      <li>Chapter Two - page orientation</li>
      <li>Chapter Three - page margins</li>
      <li>Conclusion</li>
    </ul>
  </section>
  <section id="foreword">
    <h2>Foreword</h2>
    <p>
      This book is all about how the CSS <code>@page</code> at-rule can help
      with printing HTML books.
    </p>
  </section>
  <section id="introduction">
    <h2>Introduction</h2>
    <p>
      This book is a concept to show how an <em>HTML</em> document can easily be
      printed out in pages.
    </p>
  </section>
  <section id="chapter1" class="chapter">
    <h2>Named pages</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter2" class="chapter">
    <h2>Page Orientation</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter3" class="chapter">
    <h2>Page Margins</h2>
    <p>There are 16 page margins that can be set:</p>
    <ul>
      <li>@top-left-corner</li>
      <li>@top-left</li>
      <li>@top-center</li>
      <li>@top-right</li>
      <li>@top-right-corner</li>
      <li>@left-top</li>
      <li>@left-middle</li>
      <li>@left-bottom</li>
      <li>@right-top</li>
      <li>@right-middle</li>
      <li>@right-bottom</li>
      <li>@bottom-left-corner</li>
      <li>@bottom-left</li>
      <li>@bottom-center</li>
      <li>@bottom-right</li>
      <li>@bottom-right-corner</li>
    </ul>
    <p>They can be used to show what appears in these parts of the margin</p>
  </section>
  <section id="conclusion">
    <h2>Conclusion</h2>
    <p>Now go ahead and write books.</p>
  </section>
</article>
```

Der erste Teil des CSS richtet die **benannten** Seiten ein, diese umfassen die Größe und Orientierung und auch einigen Inhalt, der in den [`@top-center`-Rand](/de/docs/Web/CSS/@page#margin_at-rules) der gedruckten Seiten eingefügt wird.

```css live-sample___page-property
@page toc {
  size: a4 portrait;
  @top-center {
    content: "Table of contents";
  }
}

@page foreword {
  size: a4 portrait;
  @top-center {
    content: "Foreword";
  }
}

@page introduction {
  size: a4 portrait;
  @top-center {
    content: "Introduction";
  }
}

@page conclusion {
  size: a4 portrait;
  @top-center {
    content: "Conclusion";
  }
}

@page chapter {
  size: a4 landscape;
  @top-center {
    content: "Chapter";
  }
}
```

```css hidden live-sample___page-property
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
body {
  font: 1.1em sans-serif;
}
```

Der nächste Teil des CSS verwendet [Attribut Selektoren](/de/docs/Web/CSS/Attribute_selectors), um die Druckdimensionen, Orientierung und Ränder anzuwenden, die in den benannten `@page`-Regeln im vorangegangenen CSS-Abschnitt definiert wurden, auf Elemente, die die `page`-Eigenschaft verwenden.
Die Abschnitte mit `class="chapter"` sind aufeinanderfolgend und erscheinen als eine Seite.
Das `break-after: page;` wird verwendet, um sie aufzuteilen, wodurch jedes Kapitel in eine separat gedruckte Seite aufgeteilt wird.

```css live-sample___page-property
@media print {
  fieldset {
    display: none;
  }
  section {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
  }
  .chapter {
    border: tomato 2px solid;
  }
  [data-print="grouped"] > #toc,
  [data-print="paged"] > #toc {
    page: toc;
    font-family: "Courier New";
  }
  [data-print="grouped"] > #foreword,
  [data-print="paged"] > #foreword {
    page: foreword;
    font-family: "Courier New";
  }
  [data-print="grouped"] > #introduction,
  [data-print="paged"] > #introduction {
    page: introduction;
    font-family: "Courier New";
  }
  [data-print="grouped"] > #conclusion,
  [data-print="paged"] > #conclusion {
    page: conclusion;
    font-family: "Courier New";
  }
  [data-print="grouped"] > .chapter,
  [data-print="paged"] > .chapter {
    page: chapter;
  }
  [data-print="paged"] > .chapter {
    border: none;
    break-after: page;
  }
  .chapter > ul {
    columns: 2;
  }
}
```

Das JavaScript aktualisiert den Wert des `data-print` Attributs, welches das Attribut ist, auf das die benannte Seite angewendet wird, wenn Sie eine andere Druckoption auswählen:

```js live-sample___page-property
const printArea = document.querySelector("#print-area");
const printButton = document.querySelector("#print");
const printOption = document.querySelector("#printStyle");

printOption.addEventListener("change", (event) => {
  if (event.target.value === "single") {
    printArea.dataset.print = "single";
  } else if (event.target.value === "grouped") {
    printArea.dataset.print = "grouped";
  } else {
    printArea.dataset.print = "paged";
  }
});

printButton.addEventListener("click", () => {
  window.print();
});
```

Was gedruckt wird und was im Druckvorschau-Dialog angezeigt wird, ändert sich je nachdem, welcher Druckstil-Radiobutton ausgewählt ist:

{{EmbedLiveSample('page-property', '100%', '540', , , , , "allow-modals")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
