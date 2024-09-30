---
title: page
slug: Web/CSS/page
l10n:
  sourceCommit: 80291cd55771c14c0ad6005a013cc8e656d62771
---

{{CSSRef}}

Die **`page`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die benannte Seite anzugeben, eine bestimmte Art von Seite, die durch die {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule) definiert ist.

Wenn mehrere Selektoren nacheinander eine benannte Seite verwenden, kann ein erzwungener Seitenumbruch mit [`break-after`](/de/docs/Web/CSS/break-after) erforderlich sein.

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
  - : Standardwert. Verwenden Sie den Wert des nächsten Vorfahren mit einem nicht-`auto` Wert. Wenn kein Vorfahre einen benannten Seitenwert festgelegt hat, ist der verwendete Wert für auto der leere String.
- {{cssxref("custom-ident")}}
  - : Groß-/Kleinschreibung beachtender Name, definiert in einer [`@page`](/de/docs/Web/CSS/@page) At-Regel.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für benannte Seite

#### HTML

Dieses HTML besteht aus zwei Teilen:

- Die Drucksteuerungen
- Der zu druckende Inhalt

Die Drucksteuerungen ermöglichen es dem Benutzer auszuwählen, wie die `section`-Elemente im `article` gedruckt werden.

```html
<!-- print options -->
<fieldset id="printStyle">
  <legend>How would you like to print</legend>
  <label for="single"
    ><input type="radio" id="single" name="type" value="single" checked />No
    Pages</label
  >
  <label for="double"
    ><input type="radio" id="grouped" name="type" value="grouped" />Pages with
    Grouped Chapters</label
  >
  <label for="double"
    ><input type="radio" id="paged" name="type" value="paged" />Chapters
    Paged</label
  >
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

#### CSS

```css hidden
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
```

Der erste Teil des CSS richtet die **benannten** Seiten ein, einschließlich Größe und Ausrichtung sowie etwas Inhalt, der im [`@top-center` Rand](/de/docs/Web/CSS/@page#margin_at-rules) der gedruckten Seiten eingefügt wird.

```css
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

Der nächste Teil des CSS verwendet [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um die Druckdimensionen, Ausrichtung und Ränder, die in den benannten `@page` Regeln im vorherigen CSS-Abschnitt definiert sind, auf Elemente anzuwenden, die die `page` Eigenschaft verwenden.

Die Abschnitte mit `class="chapter"` sind aufeinanderfolgend und erscheinen als eine Seite. Das `break-after: page;` wird verwendet, um sie aufzuteilen, wodurch jedes Kapitel auf einer separat gedruckten Seite erscheint.

```css
@media print {
  fieldset {
    display: none;
  }
  section {
    font-size: 2rem;
    font-family: Roboto;
  }
  .chapter {
    border: tomato 2px solid;
  }
  [data-print="grouped"] > #toc,
  [data-print="paged"] > #toc {
    page: toc;
    font-family: Courier;
  }
  [data-print="grouped"] > #foreword,
  [data-print="paged"] > #foreword {
    page: foreword;
    font-family: Courier;
  }
  [data-print="grouped"] > #introduction,
  [data-print="paged"] > #introduction {
    page: introduction;
    font-family: Courier;
  }
  [data-print="grouped"] > #conclusion,
  [data-print="paged"] > #conclusion {
    page: conclusion;
    font-family: Courier;
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

#### JavaScript

Das JavaScript aktualisiert den Wert des `data-print` Attributs, welches das Attribut ist, auf das die benannte Seite angewendet wird, wenn Sie eine andere Druckoption auswählen:

```js
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

#### Ergebnis

Was gedruckt wird und was im Druckvorschau-Dialog angezeigt wird, ändert sich, je nachdem welcher Druckstil über das Optionsfeld ausgewählt ist.

{{ EmbedLiveSample('Named page example', '100%', 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
