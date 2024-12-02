---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: ad0a2fcf64106edbda83459a7aac0e6f395a4b19
---

{{CSSRef}}

Die **`@page`** At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte gedruckter Seiten zu modifizieren. Sie zielt auf die Anpassungen der Dimensionen, Ausrichtung und Ränder der Seite ab. Die `@page` At-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder einen Teil davon mithilfe ihrer verschiedenen Pseudoklassen zu definieren.

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

Die `@page` At-Regel kann nur Seiten-Deskriptoren und [Margin-At-Regeln](#margin-at-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Einzelne Margin-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des Seitenrahmens an. Im Allgemeinen, wenn ein Seitenrahmen auf ein Blatt Papier gerendert wird, gibt dies auch die Größe des Zielblatts an.

Die Spezifikation erwähnt folgende CSS-Eigenschaften, die auf Seitenrahmen über die @page At-Regel anwendbar sein sollen. Diese wurden jedoch _noch nicht_ von einem Benutzeragenten unterstützt.

<details>
<summary>Übrige Seiten-Eigenschaften</summary>

| Funktion                    | CSS-Eigenschaften     |
| --------------------------- | --------------------- |
| bidi-Eigenschaften          | direction             |
| Hintergrund-Eigenschaften   | background-color      |
|                             | background-image      |
|                             | background-repeat     |
|                             | background-attachment |
|                             | background-position   |
|                             | background            |
| Rahmen-Eigenschaften        | border-top-width      |
|                             | border-right-width    |
|                             | border-bottom-width   |
|                             | border-left-width     |
|                             | border-width          |
|                             | border-top-color      |
|                             | border-right-color    |
|                             | border-bottom-color   |
|                             | border-left-color     |
|                             | border-color          |
|                             | border-top-style      |
|                             | border-right-style    |
|                             | border-bottom-style   |
|                             | border-left-style     |
|                             | border-short-style    |
|                             | border-top            |
|                             | border-right          |
|                             | border-bottom         |
|                             | border-left           |
|                             | border                |
| Zähler-Eigenschaften        | counter-reset         |
|                             | counter-increment     |
| Farbe                       | color                 |
| Schrift-Eigenschaften       | font-family           |
|                             | font-size             |
|                             | font-style            |
|                             | font-variant          |
|                             | font-weight           |
|                             | font                  |
| Höhen-Eigenschaften         | height                |
|                             | min-height            |
|                             | max-height            |
| Zeilenhöhe                  | line-height           |
| Margin-Eigenschaften        | margin-top            |
|                             | margin-right          |
|                             | margin-bottom         |
|                             | margin-left           |
|                             | margin                |
| Umriss-Eigenschaften        | outline-width         |
|                             | outline-style         |
|                             | outline-color         |
|                             | outline               |
| Innenabstands-Eigenschaften | padding-top           |
|                             | padding-right         |
|                             | padding-bottom        |
|                             | padding-left          |
|                             | padding               |
| Anführungszeichen           | quotes                |
| Text-Eigenschaften          | letter-spacing        |
|                             | text-align            |
|                             | text-decoration       |
|                             | text-indent           |
|                             | text-transform        |
|                             | white-space           |
|                             | word-spacing          |
| Sichtbarkeit                | visibility            |
| Breiten-Eigenschaften       | width                 |
|                             | min-width             |
|                             | max-width             |

</details>

## Beschreibung

Die @page Regel definiert die Eigenschaften des Seitenrahmens. Die `@page` At-Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) aufgerufen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit Viewport-bezogenen {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax` umzugehen ist. In der Zwischenzeit sollten Sie diese nicht innerhalb einer `@page` At-Regel verwenden.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es, einen Namen zuzuweisen, der dann in einer Erklärung mit der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden.

## Formale Syntax

{{csssyntax}}

Wo der `<page-body>` enthält:

- Seiten-Eigenschaften
- Seiten-Margin-Eigenschaften

und `<pseudo-page>` diese Pseudoklassen darstellt:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

Die Margin-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen auf einen anderen Bereich der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den im Style-Block festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf die obere linke Ecke des Dokuments und wendet die basierenden Änderungen auf die festgelegten Seiten-Margin-Eigenschaften an.

Andere Margin-At-Regeln beinhalten:

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

### Seiten-Margin-Eigenschaften

Die Seiten-Margin-Eigenschaften sind die Menge an CSS-Eigenschaften, die in einer beliebigen individuellen Margin-At-Regel festgelegt werden können. Sie umfassen:

<details>
<summary>Seiten-Margin-Eigenschaften</summary>

| Funktion                    | CSS-Eigenschaften     |
| --------------------------- | --------------------- |
| bidi-Eigenschaften          | direction             |
| Hintergrund-Eigenschaften   | background-color      |
|                             | background-image      |
|                             | background-repeat     |
|                             | background-attachment |
|                             | background-position   |
|                             | background            |
| Rahmen-Eigenschaften        | border-top-width      |
|                             | border-right-width    |
|                             | border-bottom-width   |
|                             | border-left-width     |
|                             | border-width          |
|                             | border-top-color      |
|                             | border-right-color    |
|                             | border-bottom-color   |
|                             | border-left-color     |
|                             | border-color          |
|                             | border-top-style      |
|                             | border-right-style    |
|                             | border-bottom-style   |
|                             | border-left-style     |
|                             | border-short-style    |
|                             | border-top            |
|                             | border-right          |
|                             | border-bottom         |
|                             | border-left           |
|                             | border                |
| Zähler-Eigenschaften        | counter-reset         |
|                             | counter-increment     |
| Inhalt                      | content               |
| Farbe                       | color                 |
| Schrift-Eigenschaften       | font-family           |
|                             | font-size             |
|                             | font-style            |
|                             | font-variant          |
|                             | font-weight           |
|                             | font                  |
| Höhen-Eigenschaften         | height                |
|                             | min-height            |
|                             | max-height            |
| Zeilenhöhe                  | line-height           |
| Margin-Eigenschaften        | margin-top            |
|                             | margin-right          |
|                             | margin-bottom         |
|                             | margin-left           |
|                             | margin                |
| Umriss-Eigenschaften        | outline-width         |
|                             | outline-style         |
|                             | outline-color         |
|                             | outline               |
| Innenabstands-Eigenschaften | padding-top           |
|                             | padding-right         |
|                             | padding-bottom        |
|                             | padding-left          |
|                             | padding               |
| Anführungszeichen           | quotes                |
| Text-Eigenschaften          | letter-spacing        |
|                             | text-align            |
|                             | text-decoration       |
|                             | text-indent           |
|                             | text-transform        |
|                             | white-space           |
|                             | word-spacing          |
| vertikale Ausrichtung       | vertical-align        |
| Sichtbarkeit                | visibility            |
| Breiten-Eigenschaften       | width                 |
|                             | min-width             |
|                             | max-width             |
| z-Index                     | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen die Durchführung von Layouts pro Seite und das Hinzufügen von [Seitenumbrüchen](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für den Einsatz in Drucklayouts zu erstellen.

Ein Beispiel dafür finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Verwenden der Size-Eigenschaft zum Ändern der Seitenausrichtung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format aufgeteilt werden, wobei jede Seite beim Drucken einen Rand von 20% hat.

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

Ein Klick auf die Drucktaste öffnet ein Druckdialog, bei dem die HTML-Abschnitte in einzelne Seiten aufgeteilt werden.

{{EmbedLiveSample('Using the size property to change the page orientation', '100%', 520)}}

### Beispiele für @page Pseudoklassen

Bitte beziehen Sie sich auf die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele.

- {{Cssxref(":blank")}}
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
- Siehe das [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) Ticket in Bugzilla zur Nachverfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler usw.)
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C Paged Media Polyfill](https://pagedjs.org/documentation/1-the-big-picture/)
