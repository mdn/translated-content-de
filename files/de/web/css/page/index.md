---
title: Seite
slug: Web/CSS/page
l10n:
  sourceCommit: 80291cd55771c14c0ad6005a013cc8e656d62771
---

{{CSSRef}}

Die **`page`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um eine benannte Seite zu spezifizieren, eine spezifische Art von Seite, die durch die {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule) definiert ist.

Wenn es mehrere Selektoren gibt, die nacheinander eine benannte Seite verwenden, kann ein erzwungener Seitenumbruch mit [`break-after`](/de/docs/Web/CSS/break-after) erforderlich sein.

## Syntax

```css
/* eine benannte Seite festlegen */
page: exampleName;
page: chapterIntro;

/* Benannte Seite von Vorfahren verwenden */
page: auto; /* Standardwert */

/* Globale Werte */
page: inherit;
page: initial;
page: revert;
page: revert-layer;
page: unset;
```

### Werte

- `auto`
  - : Standardwert. Verwenden Sie den Wert des nächsten Vorfahren mit einem nicht-`auto` Wert. Wenn kein Vorfahre einen benannten Seitenwert gesetzt hat, ist der verwendete Wert für auto der leere String.
- {{cssxref("custom-ident")}}
  - : Groß-/Kleinschreibungsempfindlicher Name, definiert in einer [`@page`](/de/docs/Web/CSS/@page) At-Regel.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für eine benannte Seite

#### HTML

Es gibt zwei Teile in diesem HTML:

- Die Drucksteuerungen
- Der Inhalt, der gedruckt werden soll

Die Drucksteuerungen erlauben es dem Benutzer auszuwählen, wie die `section`s im `article` gedruckt werden.

```html
<!-- Druckoptionen -->
<fieldset id="printStyle">
  <legend>Wie möchten Sie drucken</legend>
  <label for="single"
    ><input type="radio" id="single" name="type" value="single" checked />Keine
    Seiten</label
  >
  <label for="double"
    ><input type="radio" id="grouped" name="type" value="grouped" />Seiten mit
    gruppierten Kapiteln</label
  >
  <label for="double"
    ><input type="radio" id="paged" name="type" value="paged" />Kapitel
    paginiert</label
  >
  <button id="print">Drucken</button>
</fieldset>
<!-- Zu druckender Inhalt -->
<article id="print-area" data-print="single">
  <section id="toc">
    <h2>Inhaltsverzeichnis</h2>
    <ul>
      <li>Vorwort</li>
      <li>Einführung</li>
      <li>Kapitel Eins - benannte Seiten</li>
      <li>Kapitel Zwei - Seitenorientierung</li>
      <li>Kapitel Drei - Seitenränder</li>
      <li>Fazit</li>
    </ul>
  </section>
  <section id="foreword">
    <h2>Vorwort</h2>
    <p>
      Dieses Buch handelt davon, wie die CSS <code>@page</code> At-Regel beim
      Drucken von HTML-Büchern helfen kann.
    </p>
  </section>
  <section id="introduction">
    <h2>Einführung</h2>
    <p>
      Dieses Buch ist ein Konzept, um zu zeigen, wie ein <em>HTML</em>-Dokument
      einfach auf Seiten gedruckt werden kann.
    </p>
  </section>
  <section id="chapter1" class="chapter">
    <h2>Benannte Seiten</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter2" class="chapter">
    <h2>Seitenorientierung</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter3" class="chapter">
    <h2>Seitenränder</h2>
    <p>Es gibt 16 Seitenränder, die eingestellt werden können:</p>
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
    <p>Sie können verwendet werden, um anzuzeigen, was in diesen Teilen des Randes erscheint</p>
  </section>
  <section id="conclusion">
    <h2>Fazit</h2>
    <p>Nun machen Sie sich daran, Bücher zu schreiben.</p>
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

Der erste Teil des CSS richtet die **benannten** Seiten ein, diese beinhalten die Größe und Orientierung sowie einige Inhalte, die in den [`@top-center` Rand](/de/docs/Web/CSS/@page#margin_at-rules) der gedruckten Seiten eingefügt werden.

```css
@page toc {
  size: a4 portrait;
  @top-center {
    content: "Inhaltsverzeichnis";
  }
}

@page foreword {
  size: a4 portrait;
  @top-center {
    content: "Vorwort";
  }
}

@page introduction {
  size: a4 portrait;
  @top-center {
    content: "Einführung";
  }
}

@page conclusion {
  size: a4 portrait;
  @top-center {
    content: "Fazit";
  }
}

@page chapter {
  size: a4 landscape;
  @top-center {
    content: "Kapitel";
  }
}
```

Der nächste Teil des CSS verwendet [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), um die in den benannten `@page`-Regeln definierten Druckdimensionen, -orientierungen und -ränder auf Elemente mit der `page` Eigenschaft anzuwenden, die im vorherigen CSS-Abschnitt definiert wurden.

Die Abschnitte mit `class="chapter"` sind aufeinanderfolgend und erscheinen als eine Seite. Die `break-after: page;`-Eigenschaft wird verwendet, um sie aufzuteilen, wodurch jedes Kapitel auf eine separat gedruckte Seite verteilt wird.

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

Das JavaScript aktualisiert den Wert des `data-print` Attributs, welches das Attribut ist, auf das die benannte Seite angewendet wird, wenn eine andere Druckoption ausgewählt wird:

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

Was gedruckt wird und was im Druckvorschau-Dialog angezeigt wird, ändert sich je nachdem, welcher Radio-Button für den Druckstil ausgewählt ist.

{{ EmbedLiveSample('Named page example', '100%', 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
