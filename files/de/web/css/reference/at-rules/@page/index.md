---
title: "@page"
slug: Web/CSS/Reference/At-rules/@page
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`@page`** At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte gedruckter Seiten zu ändern. Sie zielt auf die Dimensionen, die Orientierung und die Ränder der Seite ab und modifiziert diese. Die `@page` At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder einen Teil davon mittels ihrer verschiedenen Pseudoklassen anzusprechen.

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

Die `@page` At-Regel kann nur Seitenbeschreibungen und [Margin-At-Regeln](#margin-at-regeln) enthalten. Die folgenden Beschreibungen wurden von mindestens einem Browser implementiert:

- {{cssxref("margin")}}
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften wie {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}} können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Gibt die Orientierung der Seite an. Dies hat keinen Einfluss auf das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Bestimmt die Zielgröße und Orientierung des die Seite enthaltenen Blockes. Im allgemeinen Fall, wenn ein Seitenblock auf ein Blatt projiziert wird, zeigt es auch die Größe des Ziel-Seitenblattes an.

Die Spezifikation erwähnt, dass die folgenden CSS-Eigenschaften auf Seitenboxen über die @page-At-Regel anwendbar sein sollen. Diese werden jedoch _noch nicht_ von einem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Merkmal                  | CSS-Eigenschaften     |
| ------------------------ | --------------------- |
| bidi-Eigenschaften       | direction             |
| Hintergrundeigenschaften | background-color      |
|                          | background-image      |
|                          | background-repeat     |
|                          | background-attachment |
|                          | background-position   |
|                          | background            |
| Randeigenschaften        | border-top-width      |
|                          | border-right-width    |
|                          | border-bottom-width   |
|                          | border-left-width     |
|                          | border-width          |
|                          | border-top-color      |
|                          | border-right-color    |
|                          | border-bottom-color   |
|                          | border-left-color     |
|                          | border-color          |
|                          | border-top-style      |
|                          | border-right-style    |
|                          | border-bottom-style   |
|                          | border-left-style     |
|                          | border-short-style    |
|                          | border-top            |
|                          | border-right          |
|                          | border-bottom         |
|                          | border-left           |
|                          | border                |
| Zählereigenschaften      | counter-reset         |
|                          | counter-increment     |
| Farbe                    | color                 |
| Schriftarteigenschaften  | font-family           |
|                          | font-size             |
|                          | font-style            |
|                          | font-variant          |
|                          | font-weight           |
|                          | font                  |
| Höheneigenschaften       | height                |
|                          | min-height            |
|                          | max-height            |
| Zeilenhöhe               | line-height           |
| Randeigenschaften        | margin-top            |
|                          | margin-right          |
|                          | margin-bottom         |
|                          | margin-left           |
|                          | margin                |
| Umrisseigenschaften      | outline-width         |
|                          | outline-style         |
|                          | outline-color         |
|                          | outline               |
| Abständeigenschaften     | padding-top           |
|                          | padding-right         |
|                          | padding-bottom        |
|                          | padding-left          |
|                          | padding               |
| Anführungszeichen        | quotes                |
| Texteigenschaften        | letter-spacing        |
|                          | text-align            |
|                          | text-decoration       |
|                          | text-indent           |
|                          | text-transform        |
|                          | white-space           |
|                          | word-spacing          |
| Sichtbarkeit             | visibility            |
| Breiteeigenschaften      | width                 |
|                          | min-width             |
|                          | max-width             |

</details>

## Beschreibung

Die @page-Regel definiert Eigenschaftten der Seitenbox. Die `@page` At-Regel ist über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) zugänglich.

> [!NOTE]
> Das W3C diskutiert, wie mit viewport-bezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax` umgegangen wird. Verwenden Sie diese Einheiten vorerst nicht innerhalb einer `@page` At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration durch die Verwendung der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht einen Selektor, eine benutzerdefinierte **benannte Seite** zu nutzen.

## Formale Syntax

{{csssyntax}}

Wobei der `<page-body>` umfasst:

- Seiteneigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` diese Pseudoklassen repräsentiert:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

Die Margin-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Jede zielt auf einen anderen Abschnitt der gedruckten Dokumentseite ab und gestaltet den Bereich der gedruckten Seite basierend auf den im Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf den oberen linken Bereich des Dokuments ab und wendet die Änderungen basierend auf den Seitenrand-Eigenschaften an.

Andere Margin-At-Regeln umfassen:

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

Die Seitenrand-Eigenschaften sind der Satz von CSS-Eigenschaften, der in einer beliebigen einzelnen Margin-At-Regel gesetzt werden kann. Sie umfassen:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Merkmal                  | CSS-Eigenschaften     |
| ------------------------ | --------------------- |
| bidi-Eigenschaften       | direction             |
| Hintergrundeigenschaften | background-color      |
|                          | background-image      |
|                          | background-repeat     |
|                          | background-attachment |
|                          | background-position   |
|                          | background            |
| Randeigenschaften        | border-top-width      |
|                          | border-right-width    |
|                          | border-bottom-width   |
|                          | border-left-width     |
|                          | border-width          |
|                          | border-top-color      |
|                          | border-right-color    |
|                          | border-bottom-color   |
|                          | border-left-color     |
|                          | border-color          |
|                          | border-top-style      |
|                          | border-right-style    |
|                          | border-bottom-style   |
|                          | border-left-style     |
|                          | border-short-style    |
|                          | border-top            |
|                          | border-right          |
|                          | border-bottom         |
|                          | border-left           |
|                          | border                |
| Zählereigenschaften      | counter-reset         |
|                          | counter-increment     |
| Inhalt                   | content               |
| Farbe                    | color                 |
| Schriftarteigenschaften  | font-family           |
|                          | font-size             |
|                          | font-style            |
|                          | font-variant          |
|                          | font-weight           |
|                          | font                  |
| Höheneigenschaften       | height                |
|                          | min-height            |
|                          | max-height            |
| Zeilenhöhe               | line-height           |
| Randeigenschaften        | margin-top            |
|                          | margin-right          |
|                          | margin-bottom         |
|                          | margin-left           |
|                          | margin                |
| Umrisseigenschaften      | outline-width         |
|                          | outline-style         |
|                          | outline-color         |
|                          | outline               |
| Abständeigenschaften     | padding-top           |
|                          | padding-right         |
|                          | padding-bottom        |
|                          | padding-left          |
|                          | padding               |
| Anführungszeichen        | quotes                |
| Texteigenschaften        | letter-spacing        |
|                          | text-align            |
|                          | text-decoration       |
|                          | text-indent           |
|                          | text-transform        |
|                          | white-space           |
|                          | word-spacing          |
| Vertikale Ausrichtung    | vertical-align        |
| Sichtbarkeit             | visibility            |
| Breiteeigenschaften      | width                 |
|                          | min-width             |
|                          | max-width             |
| z-Index                  | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen, ein pro-Seiten-Layout zu gestalten und [Seitenumbrüche](/de/docs/Web/CSS/Guides/Fragmentation) auf deklarative Weise beim Drucken hinzuzufügen.

Benannte Seiten können über die {{Cssxref("page")}} Eigenschaft angewendet werden. Dies erlaubt es dem Benutzer, unterschiedliche Seitenkonfigurationen zur Nutzung in Drucklayouts zu erstellen.

Ein Beispiel dafür findet sich in den [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Beispielen.

## Beispiele

### Die Verwendung der `size`-Eigenschaft zur Änderung der Seitenorientierung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format mit einem 20% Rand bei jedem Ausdruck aufgeteilt werden können.
Durch den Klick auf die Druckschaltfläche wird ein Druckdialog geöffnet, wobei die HTML-Abschnitte in einzelne Seiten aufgeteilt sind.

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

Sehen Sie sich die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) der `@page` für Beispiele an.

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
- [CSS Paged Media](/de/docs/Web/CSS/Guides/Paged_media) Modul
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Verfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler, etc.)
