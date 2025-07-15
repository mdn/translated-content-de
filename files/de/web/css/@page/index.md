---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@page`**-Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu modifizieren. Sie zielt darauf ab, die Dimensionen, die Ausrichtung und die Ränder der Seite anzupassen. Die `@page`-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder eine Teilmenge davon mit ihren verschiedenen Pseudo-Klassen anzusprechen.

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

### Seiten-Eigenschaften

Die `@page`-Regel kann nur Seiten-Deskriptoren und [Margin-Regeln](#margin-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Individuelle Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Rotation wird erst nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des umschließenden Blocks des Seitenkastens an. Im allgemeinen Fall, in dem ein Seitenkasten auf ein Blatt gerendert wird, gibt es auch die Größe des Ziel-Blattes an.

Die Spezifikation erwähnt, dass die folgenden CSS-Eigenschaften über die `@page`-Regel auf Seitenkästen anwendbar sind. Diese wurden jedoch von keinem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiten-Eigenschaften</summary>

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
| Zeilenhöhe                 | line-height           |
| Rand-Eigenschaften         | margin-top            |
|                            | margin-right          |
|                            | margin-bottom         |
|                            | margin-left           |
|                            | margin                |
| Umriss-Eigenschaften       | outline-width         |
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

Die `@page`-Regel definiert Eigenschaften des Seitenkastens. Die `@page`-Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) abgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit ansichtsbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax` umgegangen werden soll. Verwenden Sie diese derzeit nicht innerhalb einer `@page`-Regel.

### Verwandte Eigenschaften

Die `@page`-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der `page`-Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht einem Selektor, eine vom Benutzer definierte **benannte Seite** zu verwenden.

## Formale Syntax

{{csssyntax}}

Dabei schließt das `<page-body>` ein:

- Seiten-Eigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` repräsentiert diese Pseudo-Klassen:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-Regeln

Die Margin-Regeln werden innerhalb der `@page`-Regel verwendet. Sie zielen auf verschiedene Abschnitte der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den im Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments ab und wendet die Änderungen basierend auf den festgelegten Seitenrand-Eigenschaften an.

Andere Margin-Regeln umfassen:

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

Die Seitenrand-Eigenschaften sind der Satz von CSS-Eigenschaften, die in einer einzelnen Margin-Regel festgelegt werden können. Sie umfassen:

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
| Zeilenhöhe                 | line-height           |
| Rand-Eigenschaften         | margin-top            |
|                            | margin-right          |
|                            | margin-bottom         |
|                            | margin-left           |
|                            | margin                |
| Umriss-Eigenschaften       | outline-width         |
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

Benannte Seiten ermöglichen es, pro Seite ein eigenes Layout zu erstellen und [Seitenumbrüche](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken hinzuzufügen.

Benannte Seiten können mit der {{Cssxref("page")}}-Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für den Druck zu erstellen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Verwendung der size-Eigenschaft zum Ändern der Seitenorientierung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format aufgeteilt werden, wobei jede Seite beim Drucken einen 20%-Rand hat. Durch Klicken auf die Schaltfläche zum Drucken wird ein Druckdialog geöffnet, bei dem die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.

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

### @page Pseudo-Klassen Beispiele

Sehen Sie sich die verschiedenen [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) der `@page` für Beispiele an.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("page")}}-Eigenschaft
- Der `@page` [`size`](/de/docs/Web/CSS/@page/size) Deskriptor
- [CSS Seitenausgabe](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C Seitenausgabe Polyfill](https://pagedjs.org/documentation/1-the-big-picture/) auf pagedjs.org
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Verfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler, etc.)
