---
title: "@page"
slug: Web/CSS/Reference/At-rules/@page
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@page`** At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte von Druckseiten zu ändern. Sie zielt auf die Dimensionen, die Ausrichtung und die Ränder der Seite und modifiziert diese. Die `@page` At-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder einen Teilbereich mithilfe ihrer verschiedenen Pseudo-Klassen zu zielen.

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

Die `@page` At-Regel kann nur Seitendeskriptoren und [Margin at-rules](#margin_at-rules) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/Reference/Properties/margin-top), [`margin-right`](/de/docs/Web/CSS/Reference/Properties/margin-right), [`margin-bottom`](/de/docs/Web/CSS/Reference/Properties/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/Reference/Properties/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des umgebenden Blocks der Seitenbox an. Im Allgemeinen Fall, in dem eine Seitenbox auf ein Seite-Blatt gerendert wird, zeigt sie auch die Größe des Ziel-Seite-Blattes an.

Die Spezifikation erwähnt, dass die folgenden CSS Eigenschaften über die @page At-Regel auf Seitenboxen anwendbar sind. Aber diese werden _noch nicht von einem Benutzeragenten unterstützt_.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Funktion                   | CSS-Eigenschaften     |
| -------------------------- | --------------------- |
| bidi Eigenschaften         | direction             |
| Hintergrund-Eigenschaften  | background-color      |
|                            | background-image      |
|                            | background-repeat     |
|                            | background-attachment |
|                            | background-position   |
|                            | background            |
| Rahmen-Eigenschaften       | border-top-width      |
|                            | border-right-width    |
|                            | border-bottom-width   |
|                            | border-left-width     |
|                            | border-width          |
|                            | border-top-color      |
|                            | border-right-color    |
|                            | border-bottom-color   |
|                            | border-left-color     |
|                            | border-color          |
|                            | border-top-style      |
|                            | border-right-style    |
|                            | border-bottom-style   |
|                            | border-left-style     |
|                            | border-short-style    |
|                            | border-top            |
|                            | border-right          |
|                            | border-bottom         |
|                            | border-left           |
|                            | border                |
| Zähler-Eigenschaften       | counter-reset         |
|                            | counter-increment     |
| Farbe                      | color                 |
| Schrift-Eigenschaften      | font-family           |
|                            | font-size             |
|                            | font-style            |
|                            | font-variant          |
|                            | font-weight           |
|                            | font                  |
| Höhen-Eigenschaften        | height                |
|                            | min-height            |
|                            | max-height            |
| Linienhöhe                 | line-height           |
| Rand-Eigenschaften         | margin-top            |
|                            | margin-right          |
|                            | margin-bottom         |
|                            | margin-left           |
|                            | margin                |
| Kontur-Eigenschaften       | outline-width         |
|                            | outline-style         |
|                            | outline-color         |
|                            | outline               |
| Innenabstand-Eigenschaften | padding-top           |
|                            | padding-right         |
|                            | padding-bottom        |
|                            | padding-left          |
|                            | padding               |
| Anführungszeichen          | quotes                |
| Text-Eigenschaften         | letter-spacing        |
|                            | text-align            |
|                            | text-decoration       |
|                            | text-indent           |
|                            | text-transform        |
|                            | white-space           |
|                            | word-spacing          |
| Sichtbarkeit               | visibility            |
| Breiten-Eigenschaften      | width                 |
|                            | min-width             |
|                            | max-width             |

</details>

## Beschreibung

Die @page Regel definiert Eigenschaften der Seitenbox. Die `@page` At-Regel kann über die CSS Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) aufgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewport-bezogenen {{cssxref("&lt;length&gt;")}} Einheiten umzugehen ist, wie `vh`, `vw`, `vmin` und `vmax`. Verwenden Sie diese daher nicht innerhalb einer `@page` At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mithilfe der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Wo das `<page-body>` einschließt:

- Seiteneigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` diese Pseudo-Klassen darstellt:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin at-rules

Die Margin at-rules werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Bereich der gedruckten Seite, wobei der Bereich der gedruckten Seite basierend auf den im Stilblock festgelegten Eigenschaftswerten gestaltet wird:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Seite des Dokuments und wendet die Änderungen basierend auf den festgelegten Seitenrand-Eigenschaften an.

Weitere Margin-at-Regeln sind:

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

Die Seitenrand-Eigenschaften sind die Menge an CSS-Eigenschaften, die in jeder einzelnen Margin-At-Regel festgelegt werden können. Sie umfassen:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Funktion                   | CSS-Eigenschaften     |
| -------------------------- | --------------------- |
| bidi Eigenschaften         | direction             |
| Hintergrund-Eigenschaften  | background-color      |
|                            | background-image      |
|                            | background-repeat     |
|                            | background-attachment |
|                            | background-position   |
|                            | background            |
| Rahmen-Eigenschaften       | border-top-width      |
|                            | border-right-width    |
|                            | border-bottom-width   |
|                            | border-left-width     |
|                            | border-width          |
|                            | border-top-color      |
|                            | border-right-color    |
|                            | border-bottom-color   |
|                            | border-left-color     |
|                            | border-color          |
|                            | border-top-style      |
|                            | border-right-style    |
|                            | border-bottom-style   |
|                            | border-left-style     |
|                            | border-short-style    |
|                            | border-top            |
|                            | border-right          |
|                            | border-bottom         |
|                            | border-left           |
|                            | border                |
| Zähler-Eigenschaften       | counter-reset         |
|                            | counter-increment     |
| Inhalt                     | content               |
| Farbe                      | color                 |
| Schrift-Eigenschaften      | font-family           |
|                            | font-size             |
|                            | font-style            |
|                            | font-variant          |
|                            | font-weight           |
|                            | font                  |
| Höhen-Eigenschaften        | height                |
|                            | min-height            |
|                            | max-height            |
| Linienhöhe                 | line-height           |
| Rand-Eigenschaften         | margin-top            |
|                            | margin-right          |
|                            | margin-bottom         |
|                            | margin-left           |
|                            | margin                |
| Kontur-Eigenschaften       | outline-width         |
|                            | outline-style         |
|                            | outline-color         |
|                            | outline               |
| Innenabstand-Eigenschaften | padding-top           |
|                            | padding-right         |
|                            | padding-bottom        |
|                            | padding-left          |
|                            | padding               |
| Anführungszeichen          | quotes                |
| Text-Eigenschaften         | letter-spacing        |
|                            | text-align            |
|                            | text-decoration       |
|                            | text-indent           |
|                            | text-transform        |
|                            | white-space           |
|                            | word-spacing          |
| Vertikale Ausrichtung      | vertical-align        |
| Sichtbarkeit               | visibility            |
| Breiten-Eigenschaften      | width                 |
|                            | min-width             |
|                            | max-width             |
| Z-Index                    | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, das Layout pro Seite zu gestalten und [Seitenumbrüche](/de/docs/Web/CSS/Guides/Fragmentation) auf deklarative Weise beim Drucken hinzuzufügen.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für die Verwendung in Drucklayouts zu erstellen.

Ein Beispiel dafür finden Sie in den Beispielen auf der [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Seite.

## Beispiele

### Verwendung der Size-Eigenschaft zur Änderung der Seitenausrichtung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format aufgeteilt werden, wobei jede Seite beim Drucken einen Rand von 20 % aufweist. Durch Klicken auf die Drucken-Schaltfläche wird ein Druckdialog angezeigt, in dem die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.

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

### @page Pseudo-Klassen-Beispiele

Siehe die verschiedenen [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) der `@page` für Beispiele.

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
- Der `@page` [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size) Deskriptor
- [CSS paged media](/de/docs/Web/CSS/Guides/Paged_media) Modul
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Nachverfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler etc.)
