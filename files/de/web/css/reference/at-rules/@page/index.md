---
title: "@page"
slug: Web/CSS/Reference/At-rules/@page
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Die **`@page`** Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu ändern. Sie zielt darauf ab, die Dimensionen, die Ausrichtung und die Ränder der Seite zu modifizieren. Die `@page` Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder einen Teilbereich davon mithilfe ihrer verschiedenen Pseudoklassen zu steuern.

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

Die `@page` Regel kann nur Seiten-Deskriptoren und [Margin-Regeln](#margin-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)
  - : Bestimmt die Seitenränder. Einzelne Rand-Eigenschaften [`margin-top`](/de/docs/Web/CSS/Reference/Properties/margin-top), [`margin-right`](/de/docs/Web/CSS/Reference/Properties/margin-right), [`margin-bottom`](/de/docs/Web/CSS/Reference/Properties/margin-bottom), und [`margin-left`](/de/docs/Web/CSS/Reference/Properties/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Bestimmt die Ausrichtung der Seite. Dies wirkt sich nicht auf das Layout der Seite aus; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des umgebenden Blocks der Seitenbox an. Im allgemeinen Fall, in dem eine Seitenbox auf ein Blatt Papier gerendert wird, gibt sie auch die Größe des Zielblatts an.

Die Spezifikation erwähnt, dass die folgenden CSS-Eigenschaften auf Seitenboxen über die @page Regel anwendbar sind. Diese werden jedoch _von keinem Benutzeragenten unterstützt_.

<details>
<summary>Verbleibende Seiten-Eigenschaften</summary>

| Funktion                   | CSS-Eigenschaften     |
| -------------------------- | --------------------- |
| bidi-Eigenschaften         | direction             |
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

Die @page Regel definiert Eigenschaften der Seitenbox. Die `@page` Regel kann über das CSS-Objektmodell-Interface [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) abgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit betrachtungsfeldbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin`, und `vmax` umgegangen werden soll. Verwenden Sie diese Einheiten vorerst nicht in einer `@page` Regel.

### Verwandte Eigenschaften

Die `@page` Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden.

## Formale Syntax

{{csssyntax}}

Wo der `<page-body>` umfasst:

- Seiten-Eigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` diese Pseudoklassen repräsentiert:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-Regeln

Die Margin-Regeln werden innerhalb der `@page` Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite und gestalten den Bereich der gedruckten Seite basierend auf den im Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments ab und wendet die Änderungen basierend auf den festgelegten Seitenrand-Eigenschaften an.

Weitere Margin-Regeln sind:

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

Die Seitenrand-Eigenschaften sind die Menge der CSS-Eigenschaften, die in jeder individuellen Margin-Regel festgelegt werden können. Sie beinhalten:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Funktion                   | CSS-Eigenschaften     |
| -------------------------- | --------------------- |
| bidi-Eigenschaften         | direction             |
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
| vertikale Ausrichtung      | vertical-align        |
| Sichtbarkeit               | visibility            |
| Breiten-Eigenschaften      | width                 |
|                            | min-width             |
|                            | max-width             |
| z-Index                    | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, pro Seite ein Layout vorzunehmen und [Seitenumbrüche](/de/docs/Web/CSS/Guides/Fragmentation) in deklarativer Weise beim Drucken hinzuzufügen.

Benannte Seiten können über die {{Cssxref("page")}} Eigenschaft angewendet werden. Dies erlaubt es dem Benutzer, verschiedene Seitenkonfigurationen für Drucklayouts zu erstellen.

Ein Beispiel dafür finden Sie in den [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Beispielen.

## Beispiele

### Verwendung der Größe Eigenschaft, um die Seitenausrichtung zu ändern

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape` Format mit jeweils einem 20 % Rand beim Drucken aufgeteilt werden.
Ein Klick auf die Drucktaste öffnet einen Druckdialog, wobei die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.

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

### @page Pseudoklassen-Beispiele

Sehen Sie sich die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von `@page` für Beispiele an.

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
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Nachverfolgung des Fortschritts zum Thema (seitenbasierte Zähler usw.)
