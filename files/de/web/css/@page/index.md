---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`@page`** At-Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu modifizieren. Sie zielt auf die Dimensionen, die Ausrichtung und die Ränder der Seite ab und modifiziert diese. Die `@page` At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder einen Teilbereich mit ihren verschiedenen Pseudoklassen anzusprechen.

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

Die `@page` At-Regel kann nur Seiten-Beschreiber und [Rand-At-Regeln](#rand-at-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)
  - : Bestimmt die Seitenränder. Individuelle Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/Reference/Properties/margin-top), [`margin-right`](/de/docs/Web/CSS/Reference/Properties/margin-right), [`margin-bottom`](/de/docs/Web/CSS/Reference/Properties/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/Reference/Properties/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Legt die Ausrichtung der Seite fest. Dies beeinflusst das Seitenlayout nicht; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Legt die Zielgröße und Ausrichtung des umgebenden Blocks des Seitenkastens fest. Im allgemeinen Fall, in dem ein Seitenkasten auf ein Blatt gerendert wird, gibt er auch die Größe des Zielblatts an.

Die Spezifikation nennt die folgenden CSS-Eigenschaften als anwendbar auf Seitenkästen über die @page-Regel. Diese werden jedoch noch von keinem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Feature                   | CSS properties        |
| ------------------------- | --------------------- |
| bidi-Eigenschaften        | direction             |
| Hintergrund-Eigenschaften | background-color      |
|                           | background-image      |
|                           | background-repeat     |
|                           | background-attachment |
|                           | background-position   |
|                           | background            |
| Rahmen-Eigenschaften      | border-top-width      |
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
| Auffüll-Eigenschaften     | padding-top           |
|                           | padding-right         |
|                           | padding-bottom        |
|                           | padding-left          |
|                           | padding               |
| Anführungszeichen         | quotes                |
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

Die @page-Regel definiert Eigenschaften des Seitenkastens. Die `@page` At-Regel kann über die CSS-Objekt-Modellschnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) angesprochen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewportbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax` umzugehen ist. Verwenden Sie sie bis dahin nicht innerhalb einer `@page`-At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel erlaubt es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der `page`-Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt einem Selektor, eine vom Benutzer definierte **benannte Seite** zu verwenden

## Formaler Syntax

{{csssyntax}}

Wo das `<page-body>` umfasst:

- seitenbeschreibende Eigenschaften
- seitenrand-Eigenschaften

und `<pseudo-page>` diese Pseudoklassen repräsentiert:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Rand-At-Regeln

Die Rand-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite des Dokuments ab und gestalten den Bereich der gedruckten Seite basierend auf den in dem Stilblock festgelegten Eigenschaften:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf den oberen linken Bereich des Dokuments und setzt die Änderungen auf Basis der festgelegten Seitenrand-Eigenschaften um.

Andere Rand-At-Regeln umfassen:

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

Die Seitenrand-Eigenschaften sind die Menge an CSS-Eigenschaften, die in jeder einzelnen Rand-At-Regel festgelegt werden können. Sie umfassen:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Feature                   | CSS properties        |
| ------------------------- | --------------------- |
| bidi-Eigenschaften        | direction             |
| Hintergrund-Eigenschaften | background-color      |
|                           | background-image      |
|                           | background-repeat     |
|                           | background-attachment |
|                           | background-position   |
|                           | background            |
| Rahmen-Eigenschaften      | border-top-width      |
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
| Auffüll-Eigenschaften     | padding-top           |
|                           | padding-right         |
|                           | padding-bottom        |
|                           | padding-left          |
|                           | padding               |
| Anführungszeichen         | quotes                |
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
| z-Index                   | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, ein seitenweises Layout und das Hinzufügen von [Seitenumbrüchen](/de/docs/Web/CSS/CSS_fragmentation) deklarativ beim Drucken durchzuführen.

Benannte Seiten können über die {{Cssxref("page")}} Eigenschaft angewendet werden. Dies erlaubt es dem Benutzer, verschiedene Seitenkonfigurationen zur Verwendung in Drucklayouts zu erstellen.

Ein Beispiel dafür finden Sie in den [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Beispielen.

## Beispiele

### Verwendung der Eigenschaft size zum Ändern der Seitenausrichtung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `Querformat` aufgeteilt werden, wobei jede Seite beim Drucken einen Rand von 20% aufweist.
Das Klicken auf die Drucktaste öffnet einen Druckdialog mit den HTML-Abschnitten, die in einzelne Seiten aufgeteilt sind.

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

### Beispiele für @page-Pseudoklassen

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
- Der `@page` [`size`](/de/docs/Web/CSS/@page/size) Deskriptor
- [CSS paged media](/de/docs/Web/CSS/CSS_paged_media) Modul
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Verfolgung des Fortschritts in Bezug auf das Thema (seitenbasierte Zähler usw.)
