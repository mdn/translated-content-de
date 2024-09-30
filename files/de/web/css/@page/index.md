---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`@page`** Regel ist eine CSS At-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu ändern. Sie zielt darauf ab, die Dimensionen, die Ausrichtung und die Ränder der Seite zu modifizieren. Die `@page` Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder eine Teilmenge mithilfe ihrer verschiedenen Pseudoklassen zu beeinflussen.

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

Die `@page` At-Regel kann nur Seitendeskriptoren und [Margin-At-Regeln](#margin-at-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des Seitenboxen enthaltenden Blocks an. Im Allgemeinen, wenn eine Seitenbox auf ein Blatt Papier dargestellt wird, gibt sie auch die Größe des Zielblatts an.

Die Spezifikation erwähnt folgende CSS-Eigenschaften, die für Seitenboxen über die @page At-Regel anwendbar sind. Diese wurden jedoch _noch nicht unterstützt_ von einem Benutzeragent.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Feature               | CSS Eigenschaften     |
| --------------------- | --------------------- |
| bidi Eigenschaften    | direction             |
| Hintergrund Eigenschaften | background-color  |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| Rahmen Eigenschaften  | border-top-width      |
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
| Zähleigenschaften     | counter-reset         |
|                       | counter-increment     |
| Farbe                 | color                 |
| Schriftart Eigenschaften | font-family        |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höhen-Eigenschaften   | height                |
|                       | min-height            |
|                       | max-height            |
| Linienhöhe            | line-height           |
| Rand-Eigenschaften    | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Abstandseigenschaften | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Zitate                | quotes                |
| Text Eigenschaften    | letter-spacing        |
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

Die @page Regel definiert Eigenschaften der Seitenbox. Die `@page` At-Regel kann über die CSS Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) aufgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewport-bezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin`, und `vmax` umgegangen werden soll. In der Zwischenzeit sollten diese nicht innerhalb einer `@page` At-Regel verwendet werden.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der `page` Eigenschaft verwendet wird.

- {{Cssxref("page")}}
  - : Ermöglicht einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Hierbei umfasst der `<page-body>`:

- seiteneigenschaften
- seitenrand-Eigenschaften

und `<pseudo-page>` repräsentiert diese Pseudoklassen:

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

> [!WARNING]
> Die Margin-At-Regeln wurden von keinem Benutzeragenten implementiert (aktualisiert: August 2023).

Die Margin-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab, um den Bereich der gedruckten Seite basierend auf den in dem Stilblock festgelegten Eigenschaftswerten zu stylen:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments ab und wendet die Änderungen basierend auf den festgelegten Seitenrand-Eigenschaften an.

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

Die Seitenrand-Eigenschaften sind die Menge an CSS-Eigenschaften, die in einer individuellen Margin-At-Regel festgelegt werden können. Sie umfassen:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Feature               | CSS Eigenschaften     |
| --------------------- | --------------------- |
| bidi Eigenschaften    | direction             |
| Hintergrund Eigenschaften | background-color  |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| Rahmen Eigenschaften  | border-top-width      |
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
| Zähleigenschaften     | counter-reset         |
|                       | counter-increment     |
| Inhalt                | content               |
| Farbe                 | color                 |
| Schriftart Eigenschaften | font-family        |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höhen-Eigenschaften   | height                |
|                       | min-height            |
|                       | max-height            |
| Linienhöhe            | line-height           |
| Rand-Eigenschaften    | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Abstandseigenschaften | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Zitate                | quotes                |
| Text Eigenschaften    | letter-spacing        |
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

Benannte Seiten ermöglichen die Durchführung von Layouts pro Seite und das Hinzufügen von [Seitenumbrüchen](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für Drucklayouts zu erstellen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Verwendung der size-Eigenschaft, um die Seitenausrichtung zu ändern

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format mit einem 20% Rand gedruckt werden.

#### HTML

```html
<button>Print Webpage</button>
<article>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
</article>
```

#### CSS

```css
@page {
  size: landscape;
  margin: 20%;
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

```css hidden
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
  margin-block-end: 1.5rem;
  border: 1px dashed;
}
```

#### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});
```

#### Ergebnis

Durch Klicken auf die Drucktaste wird ein Druckdialog gestartet, in dem die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.
{{ EmbedLiveSample('Using the size property to change the page orientation', '100%', 520) }}

### @page Pseudo-Klassen-Beispiele

Bitte beziehen Sie sich auf die verschiedenen [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele.

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der `@page` [`size`](/de/docs/Web/CSS/@page/size) Deskriptor
- Die {{Cssxref("page")}} Eigenschaft
- Siehe das [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) Ticket in Bugzilla, um den Fortschritt zu verfolgen (seitenbasierte Zähler etc.)
- [CSS geschachtelte Medien](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C geschachtelte Medien Polyfill](https://pagedjs.org/documentation/1-the-big-picture/)
