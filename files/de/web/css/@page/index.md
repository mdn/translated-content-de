---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`@page`** At-Regel ist eine CSS-At-Regel, die zur Modifizierung verschiedener Aspekte von gedruckten Seiten verwendet wird. Sie zielt auf die Anpassung der Dimensionen, Orientierung und Ränder der Seite ab. Die `@page` At-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder einen Teil davon unter Verwendung ihrer verschiedenen Pseudo-Klassen anzusprechen.

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

Die `@page` At-Regel kann nur Seiten-Beschreiber und [Rand-At-Regeln](#margin-at-regeln) enthalten. Die folgenden Beschreiber wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom), und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Bestimmt die Orientierung der Seite. Dies beeinflusst das Layout der Seite nicht; die Rotation wird nach dem Layout auf dem Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Bestimmt die Zielgröße und Ausrichtung des Containing-Blocks des Seitenkastens. Im Allgemeinen gibt es auch die Größe des Ziel-Seitenblatts an, wenn ein Seitenkasten auf ein Seitenblatt dargestellt wird.

Die Spezifikation erwähnt, dass die folgenden CSS-Eigenschaften auf Seitenkästen über die @page At-Regel anwendbar sind. Aber diese wurden von keinem Benutzer-Agenten unterstützt.

<details>
<summary>Verbleibende Seiten-Eigenschaften</summary>

| Feature               | CSS properties        |
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

Die @page Regel definiert Eigenschaften des Seitenkastens. Die `@page` At-Regel kann über das CSS-Objektmodell-Interface [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) zugegriffen werden.

> [!NOTE]
> Das W3C diskutiert, wie auf Viewport-bezogene {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax`, gehandhabt werden sollen. Verwenden Sie diese zwischenzeitlich nicht innerhalb einer `@page` At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel erlaubt dem Anwender, der Regel einen Namen zuzuweisen, der dann in einer Deklaration unter Verwendung der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt es einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Wo der `<page-body>` Folgendes enthält:

- page-properties
- page-margin properties

und `<pseudo-page>` diese Pseudo-Klassen darstellt:

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Margin-At-Regeln

> [!WARNING]
> Die Margin-At-Regeln wurden von keinem Benutzer-Agenten implementiert (Stand: August 2023).

Die Margin-At-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den in der Style-Deklaration festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf den oberen linken Teil des Dokuments und wendet die Änderungen basierend auf den festgelegten page-margin-Eigenschaften an.

Weitere Margin-At-Regeln umfassen:

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

### Page-Margin Eigenschaften

Die Page-Margin Eigenschaften sind der Satz von CSS-Eigenschaften, die in einer beliebigen individuellen Margin-At-Regel festgelegt werden können. Sie umfassen:

<details>
<summary>Page-Margin Eigenschaften</summary>

| Feature               | CSS properties        |
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

Benannte Seiten ermöglichen es, layout- und [Seitenumbrüche](/de/docs/Web/CSS/CSS_fragmentation) auf deklarative Weise beim Drucken vorzunehmen.

Benannte Seiten können mithilfe der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies erlaubt es, unterschiedliche Seitenkonfigurationen für den Druck-Layouteinsatz zu erstellen.

Ein Beispiel hierfür finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Verwendung der Size-Eigenschaft zum Ändern der Seitenorientierung

Dieses Beispiel zeigt, wie die `<section>`s in einzelne Seiten im `landscape`-Format unterteilt werden, wobei jede Seite beim Drucken einen 20%igen Rand hat.

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

Durch Klicken auf die Druckschaltfläche wird ein Druckdialog geöffnet, bei dem die HTML-Abschnitte in einzelne Seiten unterteilt werden.
{{ EmbedLiveSample('Using the size property to change the page orientation', '100%', 520) }}

### Beispiele für die @page Pseudo-Klasse

Bitte beachten Sie die verschiedenen [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele.

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
- Siehe das [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) Ticket in Bugzilla zur Verfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler etc.)
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C paged media polyfill](https://pagedjs.org/documentation/1-the-big-picture/)
