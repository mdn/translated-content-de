---
title: "@page"
slug: Web/CSS/Reference/At-rules/@page
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@page`** Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu ändern. Sie zielt auf die Dimensionen, die Ausrichtung und die Ränder der Seite und modifiziert diese. Die `@page` Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder einen Teilbereich mit ihren verschiedenen Pseudo-Klassen anzusprechen.

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

Die `@page` Regel kann nur Seitenbeschreibungen und [Randregeln](#randregeln) enthalten. Die folgenden Beschreibungen wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften [`margin-top`](/de/docs/Web/CSS/Reference/Properties/margin-top), [`margin-right`](/de/docs/Web/CSS/Reference/Properties/margin-right), [`margin-bottom`](/de/docs/Web/CSS/Reference/Properties/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/Reference/Properties/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des umschließenden Blocks der Seitenbox an. Im allgemeinen Fall, in dem eine Seitenbox auf ein Seitenblatt gerendert wird, gibt sie auch die Größe des Zielseitenblatts an.

Die Spezifikation erwähnt folgende CSS-Eigenschaften, die auf Seitenboxen über die @page-Regel anwendbar sein sollten. Diese wurden jedoch von keinem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Feature               | CSS-Eigenschaften     |
| --------------------- | --------------------- |
| Bidi-Eigenschaften    | direction             |
| Hintergrund-Eigenschaften | background-color  |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| Rahmen-Eigenschaften  | border-top-width      |
|                       | border-right-width    |
|                       | border-bottom-width   |
|                       | border-left-width     |
|                       | border-width          |
|                       | border-top-color      |
|                       | border-right-color    |
|                       | border-bottom-color   |
|                       | border-left-color     |
|                       | border-color          |
|                       | border-top-style      |
|                       | border-right-style    |
|                       | border-bottom-style   |
|                       | border-left-style     |
|                       | border-short-style    |
|                       | border-top            |
|                       | border-right          |
|                       | border-bottom         |
|                       | border-left           |
|                       | border                |
| Zähler-Eigenschaften  | counter-reset         |
|                       | counter-increment     |
| Farbe                 | color                 |
| Schrift-Eigenschaften | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höhen-Eigenschaften   | height                |
|                       | min-height            |
|                       | max-height            |
| Zeilenhöhe            | line-height           |
| Rand-Eigenschaften    | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss-Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Abstands-Eigenschaften | padding-top          |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Anführungszeichen     | quotes                |
| Text-Eigenschaften    | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| Sichtbarkeit          | visibility            |
| Breiten-Eigenschaften | width                 |
|                       | min-width             |
|                       | max-width             |

</details>

## Beschreibung

Die @page-Regel definiert Eigenschaften des Seitenbox. Die `@page` Regel kann über das CSS-Objektmodell-Interface [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) angesprochen werden.

> [!NOTE]
> Das W3C diskutiert, wie viewport-bezogene {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax`, gehandhabt werden sollen. In der Zwischenzeit verwenden Sie sie nicht innerhalb einer `@page` Regel.

### Verwandte Eigenschaften

Die `@page` Regel ermöglicht es dem Benutzer, einem Stilregel einen Namen zuzuweisen, der dann in einem Deklaration mittels der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Wo das `<page-body>` Folgendes beinhaltet:

- Seiten-Eigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` diese Pseudo-Klassen darstellt:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Randregeln

Die Randregeln werden innerhalb der `@page` Regel verwendet. Sie richten sich jeweils an einen anderen Abschnitt der gedruckten Seite und gestalten den Bereich der gedruckten Seite basierend auf den in dem Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments und wendet die Änderungen basierend auf den festgelegten Seiteneigenschaften an.

Weitere Randregeln sind:

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

Die Seitenrand-Eigenschaften sind eine Gruppe von CSS-Eigenschaften, die in jeder einzelnen Randregel festgelegt werden können. Sie beinhalten:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Feature               | CSS-Eigenschaften     |
| --------------------- | --------------------- |
| Bidi-Eigenschaften    | direction             |
| Hintergrund-Eigenschaften | background-color  |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| Rahmen-Eigenschaften  | border-top-width      |
|                       | border-right-width    |
|                       | border-bottom-width   |
|                       | border-left-width     |
|                       | border-width          |
|                       | border-top-color      |
|                       | border-right-color    |
|                       | border-bottom-color   |
|                       | border-left-color     |
|                       | border-color          |
|                       | border-top-style      |
|                       | border-right-style    |
|                       | border-bottom-style   |
|                       | border-left-style     |
|                       | border-short-style    |
|                       | border-top            |
|                       | border-right          |
|                       | border-bottom         |
|                       | border-left           |
|                       | border                |
| Zähler-Eigenschaften  | counter-reset         |
|                       | counter-increment     |
| Inhalt                | content               |
| Farbe                 | color                 |
| Schrift-Eigenschaften | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höhen-Eigenschaften   | height                |
|                       | min-height            |
|                       | max-height            |
| Zeilenhöhe            | line-height           |
| Rand-Eigenschaften    | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss-Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Abstands-Eigenschaften | padding-top          |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Anführungszeichen     | quotes                |
| Text-Eigenschaften    | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| Vertikale Ausrichtung | vertical-align        |
| Sichtbarkeit          | visibility            |
| Breiten-Eigenschaften | width                 |
|                       | min-width             |
|                       | max-width             |
| Z-Index               | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, pro Seite Layouts zu erstellen und [Seitenumbrüche](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken hinzuzufügen.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, unterschiedliche Seitenkonfigurationen für den Druck-Layouts zu schaffen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Beispielen.

## Beispiele

### Verwenden der Größen-Eigenschaft zum Ändern der Seitenorientierung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format aufgeteilt werden, wobei jede Seite beim Drucken einen 20%igen Rand hat.
Beim Klicken auf die Drucktaste wird ein Druckdialog geöffnet, und die HTML-Abschnitte werden in einzelne Seiten aufgeteilt.

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

### @page Pseudo-Klasse Beispiele

Sehen Sie die verschiedenen [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von `@page` für Beispiele.

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
- [CSS Medientyp-Modul](/de/docs/Web/CSS/CSS_paged_media)
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zum Verfolgen des Fortschritts zu diesem Thema (seitenbezogene Zähler, etc.)
