---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: c699955e1e368bd42d6ea9318a6afc9256c3036f
---

Der **`@page`** At-Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von Druckseiten zu ändern. Sie zielt auf die Dimensionen, die Ausrichtung und die Ränder der Seite ab und modifiziert diese. Die `@page` At-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder einen Teil mittels ihrer verschiedenen Pseudoklassen zu zielen.

## Syntax

```css
/* Targets all the pages */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* Targets all even-numbered pages */
@page :left {
  margin-top: 4in;
}

/* Targets all odd-numbered pages */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* Targets all selectors with `page: wide;` set */
@page wide {
  size: a4 landscape;
}

@page {
  /* margin box at top right showing page number */
  @top-right {
    content: "Page " counter(pageNumber);
  }
}
```

### Seiteneigenschaften

Die `@page` At-Regel kann nur Seiten-Deskriptoren und [Margin-At-Regeln](#margin-at-regeln) enthalten. Folgende Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Individuelle Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des enthaltenen Blocks der Seitenbox an. Im Allgemeinen Fall, wo eine Seitenbox auf ein Seitenblatt gerendert wird, zeigt es auch die Größe des Zielseitenblatts an.

Die Spezifikation erwähnt folgende CSS-Eigenschaften, die über die @page At-Regel auf Seitenboxen anwendbar sind. Diese werden jedoch von keinem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Funktion                  | CSS-Eigenschaften     |
| ------------------------- | --------------------- |
| bidi-Eigenschaften        | direction             |
| Hintergrund-Eigenschaften | background-color      |
|                           | background-image      |
|                           | background-repeat     |
|                           | background-attachment |
|                           | background-position   |
|                           | background            |
| Rand-Eigenschaften        | border-top-width      |
|                           | border-right-width    |
|                           | border-bottom-width   |
|                           | border-left-width     |
|                           | border-width          |
|                           | border-top-color      |
|                           | border-right-color    |
|                           | border-bottom-color   |
|                           | border-left-color     |
|                           | border-color          |
|                           | border-top-style      |
|                           | border-right-style    |
|                           | border-bottom-style   |
|                           | border-left-style     |
|                           | border-short-style    |
|                           | border-top            |
|                           | border-right          |
|                           | border-bottom         |
|                           | border-left           |
|                           | border                |
| Zähler-Eigenschaften      | counter-reset         |
|                           | counter-increment     |
| Farbe                     | color                 |
| Schrift-Eigenschaften     | font-family           |
|                           | font-size             |
|                           | font-style            |
|                           | font-variant          |
|                           | font-weight           |
|                           | font                  |
| Höhen-Eigenschaften       | height                |
|                           | min-height            |
|                           | max-height            |
| Zeilenhöhe                | line-height           |
| Rand-Eigenschaften        | margin-top            |
|                           | margin-right          |
|                           | margin-bottom         |
|                           | margin-left           |
|                           | margin                |
| Umriss-Eigenschaften      | outline-width         |
|                           | outline-style         |
|                           | outline-color         |
|                           | outline               |
| Abstands-Eigenschaften    | padding-top           |
|                           | padding-right         |
|                           | padding-bottom        |
|                           | padding-left          |
|                           | padding               |
| Anführungen               | quotes                |
| Text-Eigenschaften        | letter-spacing        |
|                           | text-align            |
|                           | text-decoration       |
|                           | text-indent           |
|                           | text-transform        |
|                           | white-space           |
|                           | word-spacing          |
| Sichtbarkeit              | visibility            |
| Breiten-Eigenschaften     | width                 |
|                           | min-width             |
|                           | max-width             |

</details>

## Beschreibung

Die @page-Regel definiert die Eigenschaften der Seitenbox. Die `@page` At-Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) aufgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewport-bezogenen {{cssxref("&lt;length&gt;")}}-Einheiten, `vh`, `vw`, `vmin` und `vmax`, umzugehen ist. Verwenden Sie sie vorerst nicht innerhalb einer `@page` At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Wo das `<page-body>` Folgendes umfasst:

- Seiteneigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` repräsentiert diese Pseudoklassen:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

Die Margin-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den im Stilblock gesetzten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments und wendet die Änderungen basierend auf den festgelegten Seitenrand-Eigenschaften an.

Weitere Margin-At-Regeln umfassen:

```css-nolint
@top-left-corner
@top-left
@top-center
@top-right
@top-right-corner
@bottom-left-corner
@bottom-left
@bottom-center
@bottom-right
@bottom-right-corner
@left-top
@left-middle
@left-bottom
@right-top
@right-middle
@right-bottom
```

### Seitenrand-Eigenschaften

Die Seitenrand-Eigenschaften sind der Satz von CSS-Eigenschaften, die in einer einzelnen Margin-At-Regel gesetzt werden können. Sie umfassen:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Funktion                  | CSS-Eigenschaften     |
| ------------------------- | --------------------- |
| bidi-Eigenschaften        | direction             |
| Hintergrund-Eigenschaften | background-color      |
|                           | background-image      |
|                           | background-repeat     |
|                           | background-attachment |
|                           | background-position   |
|                           | background            |
| Rand-Eigenschaften        | border-top-width      |
|                           | border-right-width    |
|                           | border-bottom-width   |
|                           | border-left-width     |
|                           | border-width          |
|                           | border-top-color      |
|                           | border-right-color    |
|                           | border-bottom-color   |
|                           | border-left-color     |
|                           | border-color          |
|                           | border-top-style      |
|                           | border-right-style    |
|                           | border-bottom-style   |
|                           | border-left-style     |
|                           | border-short-style    |
|                           | border-top            |
|                           | border-right          |
|                           | border-bottom         |
|                           | border-left           |
|                           | border                |
| Zähler-Eigenschaften      | counter-reset         |
|                           | counter-increment     |
| Inhalt                    | content               |
| Farbe                     | color                 |
| Schrift-Eigenschaften     | font-family           |
|                           | font-size             |
|                           | font-style            |
|                           | font-variant          |
|                           | font-weight           |
|                           | font                  |
| Höhen-Eigenschaften       | height                |
|                           | min-height            |
|                           | max-height            |
| Zeilenhöhe                | line-height           |
| Rand-Eigenschaften        | margin-top            |
|                           | margin-right          |
|                           | margin-bottom         |
|                           | margin-left           |
|                           | margin                |
| Umriss-Eigenschaften      | outline-width         |
|                           | outline-style         |
|                           | outline-color         |
|                           | outline               |
| Abstands-Eigenschaften    | padding-top           |
|                           | padding-right         |
|                           | padding-bottom        |
|                           | padding-left          |
|                           | padding               |
| Anführungen               | quotes                |
| Text-Eigenschaften        | letter-spacing        |
|                           | text-align            |
|                           | text-decoration       |
|                           | text-indent           |
|                           | text-transform        |
|                           | white-space           |
|                           | word-spacing          |
| Vertikale Ausrichtung     | vertical-align        |
| Sichtbarkeit              | visibility            |
| Breiten-Eigenschaften     | width                 |
|                           | min-width             |
|                           | max-width             |
| z-index                   | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, pro Seite Layouts zu erstellen und [Seitenumbrüche](/de/docs/Web/CSS/CSS_fragmentation) in deklarativer Weise beim Drucken hinzuzufügen.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für den Einsatz in Drucklayouts zu erstellen.

Ein Beispiel hierzu finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Verwendung der Größe-Eigenschaft zur Änderung der Seitenorientierung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `Querformat` aufgeteilt werden können, wobei jede Seite einen 20% Rand beim Drucken hat.
Das Klicken auf den Druckknopf öffnet einen Druckdialog mit den HTML-Abschnitten, die in Einzelseiten aufgeteilt sind.

```html live-sample___page-size
<button>Print page</button>
<article>
  <section>
    <h2>Header one</h2>
    <p>Paragraph one.</p>
  </section>
  <section>
    <h2>Header two</h2>
    <p>Paragraph two.</p>
  </section>
  <section>
    <h2>Header three</h2>
    <p>Paragraph three.</p>
  </section>
</article>
```

```js live-sample___page-size
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});
```

```css live-sample___page-size
@page {
  size: landscape;
  margin: 2cm;
}

section {
  page-break-after: always;
  break-after: page;
}

@media print {
  button {
    display: none;
  }
}
```

```css hidden live-sample___page-size
body {
  font-family: "Helvetica", sans-serif;
  background-color: silver;
}

article {
  width: 100%;
}

section {
  display: grid;
  background-color: white;
  border-radius: 0.6rem;
  justify-items: center;
  padding: 1rem;
  width: 50%;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  margin: 0 auto;
  margin-block-end: 1rem;
  border: 1px dashed;
}
```

{{EmbedLiveSample('page-size', '100%', '540', , , , , "allow-modals")}}

### Beispiele für @page Pseudoklassen

Sehen Sie sich die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele an.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("page")}} Eigenschaft
- Die `@page` [`size`](/de/docs/Web/CSS/@page/size) Deskriptor
- [CSS paged media](/de/docs/Web/CSS/CSS_paged_media) Modul
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Nachverfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler, etc.)
