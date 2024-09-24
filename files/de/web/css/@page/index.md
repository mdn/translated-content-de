---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`@page`** At-Regel ist eine CSS-Regel, die verwendet wird, um verschiedene Aspekte von gedruckten Seiten zu modifizieren. Sie zielt auf die Modifizierung der Abmessungen, Ausrichtung und Ränder der Seite ab. Die `@page` At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder einen Teil davon mit Hilfe ihrer verschiedenen Pseudoklassen zu steuern.

## Syntax

```css
/* Ziel aller Seiten */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* Ziel aller geradzahligen Seiten */
@page :left {
  margin-top: 4in;
}

/* Ziel aller ungeradzahligen Seiten */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* Ziel aller Selektoren mit eingestelltem `page: wide;` */
@page wide {
  size: a4 landscape;
}

@page {
  /* Randbox oben rechts mit Seitenzahl anzeigen */
  @top-right {
    content: "Page " counter(pageNumber);
  }
}
```

### Seiteneigenschaften

Die `@page` At-Regel kann nur Seiten-Deskriptoren und [Rand-Regeln](#rand-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- [`margin`](/de/docs/Web/CSS/margin)
  - : Gibt die Seitenränder an. Einzelne Rand-Eigenschaften wie [`margin-top`](/de/docs/Web/CSS/margin-top), [`margin-right`](/de/docs/Web/CSS/margin-right), [`margin-bottom`](/de/docs/Web/CSS/margin-bottom) und [`margin-left`](/de/docs/Web/CSS/margin-left) können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Rotation wird erst nach dem Layout im Ausgabemedium angewendet.
- [`size`](/de/docs/Web/CSS/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des Seitenrahmens an. Im Allgemeinen, wenn ein Seitenrahmen auf ein Seitenblatt gerendert wird, gibt es auch die Größe des Zielseitenblatts an.

Die Spezifikation erwähnt folgende CSS-Eigenschaften, die auf Seitenrahmen über die @page At-Regel anwendbar sein sollen, jedoch wurden diese bisher von keinem Benutzeragenten unterstützt.

<details>
<summary>Übrige Seiteneigenschaften</summary>

| Funktion              | CSS-Eigenschaften     |
| --------------------- | --------------------- |
| bidi Eigenschaften    | direction             |
| Hintergrund-Eigenschaften | background-color      |
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
| Zähl-Eigenschaften    | counter-reset         |
|                       | counter-increment     |
| Farbe                 | color                 |
| Schrift-Eigenschaften | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höhe Eigenschaften    | height                |
|                       | min-height            |
|                       | max-height            |
| Zeilenhöhe            | line-height           |
| Außenabstand Eigenschaften | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss-Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Innenabstand Eigenschaften | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Zitate                | quotes                |
| Text-Eigenschaften    | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| Sichtbarkeit          | visibility            |
| Breite Eigenschaften  | width                 |
|                       | min-width             |
|                       | max-width             |

</details>

## Beschreibung

Die @page Regel definiert Eigenschaften des Seitenrahmens. Die `@page` At-Regel kann über das CSS-Objektmodell-Interface {{domxref("CSSPageRule")}} angesprochen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit ansichtsbezogenen {{cssxref("&lt;length&gt;")}} Einheiten umgegangen werden soll, `vh`, `vw`, `vmin`, und `vmax`. Verwenden Sie sie inzwischen nicht innerhalb einer `@page` At-Regel.

### Verwandte Eigenschaften

Die `@page` At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, welcher dann in einer Deklaration mithilfe der `page` Eigenschaft aufgerufen wird.

- {{Cssxref("page")}}
  - : Erlaubt einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden.

## Formale Syntax

{{csssyntax}}

Dabei umfasst der `<page-body>`:

- Seiten-Eigenschaften
- Seitenrand Eigenschaften

und `<pseudo-page>` repräsentiert diese Pseudoklassen:

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Rand-Regeln

> [!WARNING]
> Die Rand-Regeln wurden von keinem Benutzeragenten implementiert (Stand: August 2023).

Die Rand-Regeln werden innerhalb der `@page` At-Regel verwendet. Sie zielen jeweils auf einen anderen Abschnitt der gedruckten Seite ab und gestalten den Bereich der gedruckten Seite basierend auf den in dem Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf das obere linke Dokument und wendet die Änderungen basierend auf den festgelegten page-margin-properties an.

Weitere Rand-Regeln umfassen:

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

### Page-margin Eigenschaften

Die page-margin Eigenschaften sind die Menge von CSS-Eigenschaften, die in jeder individuellen Rand-Regel festgelegt werden können. Sie beinhalten:

<details>
<summary>Page-margin Eigenschaften</summary>

| Funktion              | CSS-Eigenschaften     |
| --------------------- | --------------------- |
| bidi Eigenschaften    | direction             |
| Hintergrund-Eigenschaften | background-color      |
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
| Zähl-Eigenschaften    | counter-reset         |
|                       | counter-increment     |
| Inhalt                | content               |
| Farbe                 | color                 |
| Schrift-Eigenschaften | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| Höhe Eigenschaften    | height                |
|                       | min-height            |
|                       | max-height            |
| Zeilenhöhe            | line-height           |
| Außenabstand Eigenschaften | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| Umriss-Eigenschaften  | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| Innenabstand Eigenschaften | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| Zitate                | quotes                |
| Text-Eigenschaften    | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| vertikale Ausrichtung | vertical-align        |
| Sichtbarkeit          | visibility            |
| Breite Eigenschaften  | width                 |
|                       | min-width             |
|                       | max-width             |
| Z-index               | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, pro Seite Layouts zu erstellen und [Seitenumbrüche](/de/docs/Web/CSS/CSS_fragmentation) deklarativ beim Drucken hinzuzufügen.

Benannte Seiten können mit der {{Cssxref("page")}} Eigenschaft angewendet werden. Dies ermöglicht es dem Benutzer, verschiedene Seitenkonfigurationen für den Einsatz in Drucklayouts zu erstellen.

Ein Beispiel dazu finden Sie in den [`page`](/de/docs/Web/CSS/page#examples) Beispielen.

## Beispiele

### Die Größe verwenden, um die Ausrichtung der Seite zu ändern

Dieses Beispiel zeigt, wie Sie die `<section>`s in einzelne Seiten im `landscape`-Format aufteilen können, wobei jede Seite beim Drucken einen Rand von 20 % hat.

#### HTML

```html
<button>Webseite drucken</button>
<article>
  <section>
    <h2>Überschrift</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Überschrift</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Überschrift</h2>
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

Durch Klicken auf die Drucktaste wird ein Dialogfeld zum Drucken geöffnet, wobei die HTML-Abschnitte in einzelne Seiten unterteilt werden.
{{ EmbedLiveSample('Using the size property to change the page orientation', '100%', 520) }}

### @page Pseudoklassen-Beispiele

Bitte beachten Sie die verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von `@page` für Beispiele.

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
- Siehe das [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) Ticket in Bugzilla zur Nachverfolgung von Fortschritten zu dem Thema (seitenbasierte Zähler usw.)
- [CSS paged media](/de/docs/Web/CSS/CSS_paged_media) Modul
- [Paged.js: W3C paged media Polyfill](https://pagedjs.org/documentation/1-the-big-picture/)
