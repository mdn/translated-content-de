---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{CSSRef}}

Die **`@page`** At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu ändern. Sie zielt auf die Dimensionen, die Ausrichtung und die Ränder der Seite ab und modifiziert diese. Die `@page` At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder einen Teil davon mithilfe ihrer verschiedenen Pseudoklassen zu adressieren.

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

Die `@page` At-Regel kann nur Seitenbeschreibungen und [Rand-At-Regeln](#rand-at-regeln) enthalten. Die folgenden Beschreibungen wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout auf das Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des umgebenden Blocks des Seitenrahmens an. Im allgemeinen Fall, bei dem ein Seitenrahmen auf ein Seitenblatt gerendert wird, gibt es auch die Größe des Zielseitenblatts an.

Die Spezifikation erwähnt folgende CSS-Eigenschaften als anwendbar auf Seitenrahmen über die @page At-Regel. Diese wurden jedoch _noch nicht_ von einem Benutzeragenten unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Merkmal               | CSS-Eigenschaften      |
| --------------------- | --------------------- |
| bidi Eigenschaften    | direction             |
| Hintergrund-Eigenschaften | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| Rand-Eigenschaften    | border-top-width      |
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
| Schriftarten-Eigenschaften | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höheneigenschaften    | height                |
|                       | min-height            |
|                       | max-height            |
| Zeilenhöhe              | line-height           |
| Randeigenschaften     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss-Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Auffüllen-Eigenschaften | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Zitate                | quotes                |
| Texteigenschaften     | letter-spacing        |
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

Die @page Regel definiert Eigenschaften der Seitenbox. Die `@page` At-Regel kann über das CSS-Objektmodell-Interface [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) aufgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewport-bezogenen {{cssxref("&lt;length&gt;")}} Einheiten wie `vh`, `vw`, `vmin` und `vmax` umgegangen werden soll. Verwenden Sie diese Einheiten derzeit nicht innerhalb einer `@page` At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mit der Eigenschaft `page` aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden.

## Formale Syntax

{{csssyntax}}

Wo der `<page-body>` beinhaltet:

- seiteneigenschaften
- seitenrand-eigenschaften

und `<pseudo-page>` diese Pseudoklassen darstellt:

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Rand-At-Regeln

> [!WARNING]
> Die Rand-At-Regeln wurden von keinem Benutzeragenten implementiert (Stand: August 2023).

Die Rand-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den im Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments und wendet die Änderungen basierend auf den festgelegten seitenrand-eigenschaften an.

Weitere Rand-At-Regeln umfassen:

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

Die Seitenrand-Eigenschaften sind die Menge der CSS-Eigenschaften, die in jeder einzelnen Rand-At-Regel festgelegt werden können. Sie umfassen:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Merkmal               | CSS-Eigenschaften      |
| --------------------- | --------------------- |
| bidi Eigenschaften    | direction             |
| Hintergrund-Eigenschaften | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| Rand-Eigenschaften    | border-top-width      |
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
| Schriftarten-Eigenschaften | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höheneigenschaften    | height                |
|                       | min-height            |
|                       | max-height            |
| Zeilenhöhe              | line-height           |
| Randeigenschaften     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss-Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Auffüllen-Eigenschaften | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Zitate                | quotes                |
| Texteigenschaften     | letter-spacing        |
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

Benannte Seiten ermöglichen das Durchführen eines seitenweisen Layouts und das Hinzufügen von [Seitenumbruch](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, unterschiedliche Seitenkonfigurationen für den Einsatz in Drucklayouts zu erstellen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Verwendung der size Eigenschaft zur Änderung der Seitenausrichtung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `Querformat` aufgeteilt werden, wobei jede Seite beim Drucken einen Rand von 20% hat.

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

Durch Klicken auf die Druck-Schaltfläche wird ein Druckdialog gestartet, mit dem die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.
{{ EmbedLiveSample('Using the size property to change the page orientation', '100%', 520) }}

### @page Pseudoklassen-Beispiele

Bitte beziehen Sie sich auf die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele.

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die `@page` [`size`](/de/docs/Web/CSS/@page/size) Beschreibung
- Die {{Cssxref("page")}} Eigenschaft
- Siehe das [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Ticket in Bugzilla zur Nachverfolgung des Fortschritts zu diesem Thema (seitenbezogene Zähler usw.)
- [CSS Seitengestaltung](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C Seitengestaltung Polyfill](https://pagedjs.org/documentation/1-the-big-picture/)
