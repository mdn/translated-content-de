---
title: "`@page` CSS at-rule"
short-title: "@page"
slug: Web/CSS/Reference/At-rules/@page
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@page`** Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu modifizieren. Sie zielt auf die Dimensionen, Ausrichtung und Ränder der Seite ab und verändert diese. Die `@page` Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder eine Teilmenge durch ihre verschiedenen Pseudo-Klassen anzusprechen.

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

Die `@page` Regel kann nur Seitendeskriptoren und [Rand-Regeln](#randregeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- {{cssxref("margin")}}
  - : Gibt die Seitenränder an. Einzelne Rand-Attribute {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}} können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Rotation wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des enthaltenden Blocks der Seitenbox an. Im allgemeinen Fall, wo eine Seitenbox auf ein Blatt gedruckt wird, gibt es auch die Größe des Zielblattes an.

Die Spezifikationen erwähnen die folgenden CSS-Eigenschaften, die für Seitenboxen mittels der @page Regel anwendbar sind. Diese wurden jedoch _noch nicht_ von einem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Feature                   | CSS properties        |
| ------------------------- | --------------------- |
| bidi Properties           | direction             |
| Hintergrundeigenschaften  | background-color      |
|                           | background-image      |
|                           | background-repeat     |
|                           | background-attachment |
|                           | background-position   |
|                           | background            |
| Rahmeneigenschaften       | border-top-width      |
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
| Zähleigenschaften         | counter-reset         |
|                           | counter-increment     |
| Farbe                     | color                 |
| Schriftarteneigenschaften | font-family           |
|                           | font-size             |
|                           | font-style            |
|                           | font-variant          |
|                           | font-weight           |
|                           | font                  |
| Höheneigenschaften        | height                |
|                           | min-height            |
|                           | max-height            |
| Zeilenhöhe                | line-height           |
| Randeigenschaften         | margin-top            |
|                           | margin-right          |
|                           | margin-bottom         |
|                           | margin-left           |
|                           | margin                |
| Umrisseigenschaften       | outline-width         |
|                           | outline-style         |
|                           | outline-color         |
|                           | outline               |
| Polstereigenschaften      | padding-top           |
|                           | padding-right         |
|                           | padding-bottom        |
|                           | padding-left          |
|                           | padding               |
| Anführungszeichen         | quotes                |
| Texteigenschaften         | letter-spacing        |
|                           | text-align            |
|                           | text-decoration       |
|                           | text-indent           |
|                           | text-transform        |
|                           | white-space           |
|                           | word-spacing          |
| Sichtbarkeit              | visibility            |
| Breieteneigenschaften     | width                 |
|                           | min-width             |
|                           | max-width             |

</details>

## Beschreibung

Die @page Regel definiert Eigenschaften der Seitenbox. Die `@page` Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) abgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie man mit viewportbezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax` umgeht. Zwischenzeitlich sollten Sie diese nicht innerhalb einer `@page` Regel verwenden.

### Verwandte Eigenschaften

Die `@page` Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration unter Verwendung der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Wo der `<page-body>` Folgendes beinhaltet:

- Seiten-Eigenschaften
- Seiten-Rand-Eigenschaften

und `<pseudo-page>` repräsentiert diese Pseudo-Klassen:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Randregeln

Die Randregeln werden innerhalb der `@page` Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den in dem Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments ab und wendet die Änderungen basierend auf den eingestellten Seiten-Rand-Eigenschaften an.

Andere Randregeln umfassen:

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

Die Seitenrand-Eigenschaften sind die Reihe von CSS-Eigenschaften, die in jeder einzelnen Randregel festgelegt werden können. Dazu gehören:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Feature                   | CSS properties        |
| ------------------------- | --------------------- |
| bidi Properties           | direction             |
| Hintergrundeigenschaften  | background-color      |
|                           | background-image      |
|                           | background-repeat     |
|                           | background-attachment |
|                           | background-position   |
|                           | background            |
| Rahmeneigenschaften       | border-top-width      |
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
| Zähleigenschaften         | counter-reset         |
|                           | counter-increment     |
| Inhalt                    | content               |
| Farbe                     | color                 |
| Schriftarteneigenschaften | font-family           |
|                           | font-size             |
|                           | font-style            |
|                           | font-variant          |
|                           | font-weight           |
|                           | font                  |
| Höheneigenschaften        | height                |
|                           | min-height            |
|                           | max-height            |
| Zeilenhöhe                | line-height           |
| Randeigenschaften         | margin-top            |
|                           | margin-right          |
|                           | margin-bottom         |
|                           | margin-left           |
|                           | margin                |
| Umrisseigenschaften       | outline-width         |
|                           | outline-style         |
|                           | outline-color         |
|                           | outline               |
| Polstereigenschaften      | padding-top           |
|                           | padding-right         |
|                           | padding-bottom        |
|                           | padding-left          |
|                           | padding               |
| Anführungszeichen         | quotes                |
| Texteigenschaften         | letter-spacing        |
|                           | text-align            |
|                           | text-decoration       |
|                           | text-indent           |
|                           | text-transform        |
|                           | white-space           |
|                           | word-spacing          |
| Vertikale Ausrichtung     | vertical-align        |
| Sichtbarkeit              | visibility            |
| Breieteneigenschaften     | width                 |
|                           | min-width             |
|                           | max-width             |
| Z-Index                   | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen eine pro-Seiten Darstellung und das Hinzufügen von [Seitenumbrüchen](/de/docs/Web/CSS/Guides/Fragmentation) auf deklarative Weise beim Drucken.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für den Einsatz in Drucklayouts zu erstellen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Beispielen.

## Beispiele

### Verwendung der size-Eigenschaft, um die Ausrichtung der Seite zu ändern

Dieses Beispiel zeigt, wie man die `<section>`s in einzelne Seiten im `landscape`-Format aufteilt, wobei jede Seite beim Drucken einen 20%-Rand hat.
Das Klicken auf die Drucktaste öffnet ein Druckdialogfeld mit den HTML-Abschnitten, die in einzelne Seiten aufgeteilt sind.

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

Sehen Sie sich die verschiedenen [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von `@page` für Beispiele an.

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
- [CSS gedruckte Medien](/de/docs/Web/CSS/Guides/Paged_media) Modul
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zum Fortschritts-Tracking des Themas (seitenbasierte Zähler usw.)
