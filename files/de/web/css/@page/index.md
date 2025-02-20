---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 2b3eb646cec5c9bc74e263b7880a52ad52e37913
---

{{CSSRef}}

Die **`@page`**-At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu ändern. Sie zielt auf die Dimensionen, die Ausrichtung und die Ränder der Seite ab und modifiziert diese. Die `@page`-At-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder einen Teil davon mit ihren verschiedenen Pseudoklassen anzusprechen.

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

Die `@page`-At-Regel kann nur Seitendeskriptoren und [Margin-At-Regeln](#margin-at-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst das Layout der Seite nicht; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des enthaltenden Blocks der Seitenbox an. Im allgemeinen Fall, bei dem eine Seitenbox auf ein einzelnes Seitenblatt gerendert wird, gibt sie auch die Größe des Zielseitenblatts an.

Die Spezifikation erwähnt die folgenden CSS-Eigenschaften, die auf Seitenboxen über die @page-At-Regel anwendbar sind. Diese wurden jedoch _noch nicht von einem Benutzeragenten unterstützt_.

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
| Polster-Eigenschaften     | padding-top           |
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

Die @page-Regel definiert die Eigenschaften der Seitenbox. Die `@page`-At-Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) angesprochen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewportbezogenen {{cssxref("&lt;length&gt;")}}-Einheiten, `vh`, `vw`, `vmin` und `vmax` umgegangen werden soll. Verwenden Sie diese meanwhile nicht innerhalb einer `@page`-At-Regel.

### Verwandte Eigenschaften

Die `@page`-At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der `page`-Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden.

## Formale Syntax

{{csssyntax}}

Wobei der `<page-body>` Folgendes beinhaltet:

- Seiten-Eigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` diese Pseudoklassen darstellt:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

Die Margin-At-Regeln werden innerhalb der `@page`-At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den in dem Style-Block gesetzten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf den oberen linken Bereich des Dokuments ab und wendet die Änderungen basierend auf den gesetzten Seitenrand-Eigenschaftswerten an.

Weitere Margin-At-Regeln beinhalten:

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

Die Seitenrand-Eigenschaften sind die Menge von CSS-Eigenschaften, die in jeder individuellen Margin-At-Regel gesetzt werden können. Sie beinhalten:

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
| Polster-Eigenschaften     | padding-top           |
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

Benannte Seiten ermöglichen das Durchführen eines pro-Seiten-Layouts und das Hinzufügen von [Seitenumbrüchen](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken.

Benannte Seiten können mit der {{Cssxref("page")}}-Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seiteneinstellungen für den Druck-Layouts zu erstellen.

Ein Beispiel hierfür finden Sie in den [Seitenbeispielen](/de/docs/Web/CSS/page#examples).

## Beispiele

### Verwendung der Size-Eigenschaft, um die Seitenausrichtung zu ändern

Dieses Beispiel zeigt, wie man die `<section>`-Elemente in einzelne Seiten im `Querformat` aufteilt, wobei jede Seite beim Drucken einen Rand von 20% hat. Beim Klicken auf die Drucktaste wird ein Druckdialog geöffnet, mit dem die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.

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

### @Page-Pseudoklassen-Beispiele

Siehe die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele.

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
- [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C-Seitenmedien-Polyfill](https://pagedjs.org/documentation/1-the-big-picture/) auf pagedjs.org
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Verfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler, etc.)
