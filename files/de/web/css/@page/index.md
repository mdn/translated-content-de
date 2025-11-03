---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`@page`**-At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte gedruckter Seiten zu ändern. Sie zielt darauf ab, die Dimensionen, die Ausrichtung und die Ränder der Seite zu modifizieren. Die `@page`-At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder einen Teil davon mit ihren verschiedenen Pseudoklassen zu bearbeiten.

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

- [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)
  - : Gibt die Seitenränder an. Individuelle Abstands-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/Reference/Properties/margin-top), [`margin-right`](/de/docs/Web/CSS/Reference/Properties/margin-right), [`margin-bottom`](/de/docs/Web/CSS/Reference/Properties/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/Reference/Properties/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Bestimmt die Ausrichtung der Seite. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Bestimmt die Zielgröße und Ausrichtung des <page-box>'s enthaltenen Blocks. In der Regel, wo eine <page-box> auf ein Blatt gedruckt wird, gibt sie auch die Größe des Zielfeldes an.

Die Spezifikation erwähnt die folgende CSS-Eigenschaften, die über die @page-At-Regel auf Seitenboxen anwendbar sind. Diese wurden jedoch noch _nicht von einem Benutzeragenten unterstützt_.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Funktion              | CSS-Eigenschaften     |
| --------------------- | --------------------- |
| bidi properties       | direction             |
| background properties | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| border properties     | border-top-width      |
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
| counter properties    | counter-reset         |
|                       | counter-increment     |
| color                 | color                 |
| font properties       | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| height properties     | height                |
|                       | min-height            |
|                       | max-height            |
| line height           | line-height           |
| margin properties     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| outline properties    | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| padding properties    | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| quotes                | quotes                |
| text properties       | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| visibility            | visibility            |
| width properties      | width                 |
|                       | min-width             |
|                       | max-width             |

</details>

## Beschreibung

Die @page-Regel definiert Eigenschaften der Seitenbox. Die `@page`-At-Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) angesprochen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit ansichtsbezogenen {{cssxref("&lt;length&gt;")}}-Einheiten, `vh`, `vw`, `vmin` und `vmax`, umzugehen ist. Verwenden Sie diese zwischenzeitlich nicht innerhalb einer `@page`-At-Regel.

### Verwandte Eigenschaften

Die `@page`-At-Regel erlaubt es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration über die `page`-Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Wo der `<page-body>` Folgendes umfasst:

- Seiteneigenschaften
- Seitenrandeigenschaften

und `<pseudo-page>` diese Pseudoklassen darstellt:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

Die Margin-At-Regeln werden innerhalb der `@page`-At-Regel verwendet. Sie zielen auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den Eigenschaftswerten im Stilblock:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf den oberen linken Bereich des Dokuments und wendet die basierend auf den festgelegten Seitenrandeigenschaften vorgenommenen Änderungen an.

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

### Seitenrandeigenschaften

Die Seitenrandeigenschaften sind eine Gruppe von CSS-Eigenschaften, die in einer beliebigen Margin-At-Regel festgelegt werden können. Diese umfassen:

<details>
<summary>Seitenrandeigenschaften</summary>

| Funktion              | CSS-Eigenschaften     |
| --------------------- | --------------------- |
| bidi properties       | direction             |
| background properties | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| border properties     | border-top-width      |
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
| counter properties    | counter-reset         |
|                       | counter-increment     |
| content               | content               |
| color                 | color                 |
| font properties       | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| height properties     | height                |
|                       | min-height            |
|                       | max-height            |
| line height           | line-height           |
| margin properties     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| outline properties    | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| padding properties    | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| quotes                | quotes                |
| text properties       | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| vertical alignment    | vertical-align        |
| visibility            | visibility            |
| width properties      | width                 |
|                       | min-width             |
|                       | max-width             |
| z-index               | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, eine Seitengestaltung durchzuführen und [Seitenumbrüche](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken hinzuzufügen.

Benannte Seiten können durch die {{Cssxref("page")}}-Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für den Einsatz in Drucklayouts zu erstellen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples) Beispielen.

## Beispiele

### Verwendung der size-Eigenschaft zur Änderung der Seitenausrichtung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format aufgeteilt werden, wobei jede Seite beim Drucken einen 20% Rand hat.
Das Klicken auf die Drucktaste öffnet einen Druckdialog, in dem die HTML-Abschnitte in einzelne Seiten unterteilt sind.

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

Siehe die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von `@page` für Beispiele.

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
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Bugzilla zur Verfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler usw.)
