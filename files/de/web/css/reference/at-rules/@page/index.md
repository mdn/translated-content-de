---
title: "`@page` CSS at-rule"
short-title: "@page"
slug: Web/CSS/Reference/At-rules/@page
l10n:
  sourceCommit: d571e753a6e1aa3f37c775f0308690bc738cdbe6
---

Die **`@page`**-At-Regel ist eine CSS-At-Regel, die verwendet wird, um verschiedene Aspekte gedruckter Seiten zu ändern. Sie zielt auf die Abmessungen, Ausrichtung und Ränder der Seite ab und ändert diese. Die `@page`-At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder mithilfe ihrer verschiedenen Pseudoklassen eine Teilmenge davon anzusprechen.

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

Die `@page`-At-Regel kann nur Seitendeskriptoren und [Rand-At-Regeln](#rand-at-regeln) enthalten. Die folgenden Deskriptoren wurden von mindestens einem Browser implementiert:

- {{cssxref("margin")}}
  - : Gibt die Seitenränder an. Die einzelnen Randeigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}} können ebenfalls verwendet werden.
- [`page-orientation`](/de/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : Gibt die Ausrichtung der Seite an. Dies beeinflusst nicht das Layout der Seite; die Drehung wird im Ausgabemedium nach dem Layout angewendet.
- [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
  - : Gibt die Zielgröße und Ausrichtung des enthaltenden Blocks des Seitenbereichs an. Im allgemeinen Fall, in dem ein Seitenbereich auf einem einzelnen Seitenblatt gerendert wird, gibt sie auch die Größe des Zielseitenblatts an.

Die Spezifikation erwähnt, dass die folgenden CSS-Eigenschaften über die `@page`-At-Regel auf Seitenbereiche anwendbar sind. Diese werden jedoch bislang von keinem User Agent unterstützt.

<details>
<summary>Verbleibende Seiteneigenschaften</summary>

| Funktion                   | CSS-Eigenschaften     |
| -------------------------- | --------------------- |
| bidi-Eigenschaften         | direction             |
| Hintergrundeigenschaften   | background-color      |
|                            | background-image      |
|                            | background-repeat     |
|                            | background-attachment |
|                            | background-position   |
|                            | background            |
| Rahmeneigenschaften        | border-top-width      |
|                            | border-right-width    |
|                            | border-bottom-width   |
|                            | border-left-width     |
|                            | border-width          |
|                            | border-top-color      |
|                            | border-right-color    |
|                            | border-bottom-color   |
|                            | border-left-color     |
|                            | border-color          |
|                            | border-top-style      |
|                            | border-right-style    |
|                            | border-bottom-style   |
|                            | border-left-style     |
|                            | border-short-style    |
|                            | border-top            |
|                            | border-right          |
|                            | border-bottom         |
|                            | border-left           |
|                            | border                |
| Zählereigenschaften        | counter-reset         |
|                            | counter-increment     |
| Farbe                      | color                 |
| Schrifteigenschaften       | font-family           |
|                            | font-size             |
|                            | font-style            |
|                            | font-variant          |
|                            | font-weight           |
|                            | font                  |
| Höheneigenschaften         | height                |
|                            | min-height            |
|                            | max-height            |
| Zeilenhöhe                 | line-height           |
| Randeigenschaften          | margin-top            |
|                            | margin-right          |
|                            | margin-bottom         |
|                            | margin-left           |
|                            | margin                |
| Kontureigenschaften        | outline-width         |
|                            | outline-style         |
|                            | outline-color         |
|                            | outline               |
| Innenabstandseigenschaften | padding-top           |
|                            | padding-right         |
|                            | padding-bottom        |
|                            | padding-left          |
|                            | padding               |
| Anführungszeichen          | quotes                |
| Texteigenschaften          | letter-spacing        |
|                            | text-align            |
|                            | text-decoration       |
|                            | text-indent           |
|                            | text-transform        |
|                            | white-space           |
|                            | word-spacing          |
| Sichtbarkeit               | visibility            |
| Breiteneigenschaften       | width                 |
|                            | min-width             |
|                            | max-width             |

</details>

## Beschreibung

Die `@page`-Regel definiert Eigenschaften des Seitenbereichs. Auf die `@page`-At-Regel kann über die CSS-Objektmodell-Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) zugegriffen werden.

> [!NOTE]
> Das W3C diskutiert, wie mit viewport-bezogenen {{cssxref("&lt;length&gt;")}}-Einheiten, `vh`, `vw`, `vmin` und `vmax` umgegangen werden soll. Verwenden Sie diese daher vorerst nicht innerhalb einer `@page`-At-Regel.

### Verwandte Eigenschaften

Die `@page`-At-Regel ermöglicht es dem Benutzer, der Regel einen Namen zuzuweisen, der dann in einer Deklaration mithilfe der Eigenschaft `page` aufgerufen wird.

- {{Cssxref("page")}}
  - : Ermöglicht einem Selektor, eine benutzerdefinierte **benannte Seite** zu verwenden

## Formale Syntax

{{csssyntax}}

Dabei enthält `<page-body>`:

- Seiteneigenschaften
- Seitenrand-Eigenschaften

und `<pseudo-page>` stellt diese Pseudoklassen dar:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Rand-At-Regeln

Die Rand-At-Regeln werden innerhalb der `@page`-At-Regel verwendet. Jede zielt auf einen anderen Bereich der gedruckten Dokumentseite ab und gestaltet den Bereich der gedruckten Seite basierend auf den im Stilblock festgelegten Eigenschaftswerten:

```css
@page {
  @top-left {
    /* page-margin-properties */
  }
}
```

**`@top-left`** zielt auf den oberen linken Bereich des Dokuments ab und wendet die Änderungen basierend auf den festgelegten Seitenrand-Eigenschaften an.

Weitere Rand-At-Regeln sind:

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

Die Seitenrand-Eigenschaften sind die CSS-Eigenschaften, die in einer einzelnen Rand-At-Regel festgelegt werden können. Dazu gehören:

<details>
<summary>Seitenrand-Eigenschaften</summary>

| Funktion                   | CSS-Eigenschaften     |
| -------------------------- | --------------------- |
| bidi-Eigenschaften         | direction             |
| Hintergrundeigenschaften   | background-color      |
|                            | background-image      |
|                            | background-repeat     |
|                            | background-attachment |
|                            | background-position   |
|                            | background            |
| Rahmeneigenschaften        | border-top-width      |
|                            | border-right-width    |
|                            | border-bottom-width   |
|                            | border-left-width     |
|                            | border-width          |
|                            | border-top-color      |
|                            | border-right-color    |
|                            | border-bottom-color   |
|                            | border-left-color     |
|                            | border-color          |
|                            | border-top-style      |
|                            | border-right-style    |
|                            | border-bottom-style   |
|                            | border-left-style     |
|                            | border-short-style    |
|                            | border-top            |
|                            | border-right          |
|                            | border-bottom         |
|                            | border-left           |
|                            | border                |
| Zählereigenschaften        | counter-reset         |
|                            | counter-increment     |
| Inhalt                     | content               |
| Farbe                      | color                 |
| Schrifteigenschaften       | font-family           |
|                            | font-size             |
|                            | font-style            |
|                            | font-variant          |
|                            | font-weight           |
|                            | font                  |
| Höheneigenschaften         | height                |
|                            | min-height            |
|                            | max-height            |
| Zeilenhöhe                 | line-height           |
| Randeigenschaften          | margin-top            |
|                            | margin-right          |
|                            | margin-bottom         |
|                            | margin-left           |
|                            | margin                |
| Kontureigenschaften        | outline-width         |
|                            | outline-style         |
|                            | outline-color         |
|                            | outline               |
| Innenabstandseigenschaften | padding-top           |
|                            | padding-right         |
|                            | padding-bottom        |
|                            | padding-left          |
|                            | padding               |
| Anführungszeichen          | quotes                |
| Texteigenschaften          | letter-spacing        |
|                            | text-align            |
|                            | text-decoration       |
|                            | text-indent           |
|                            | text-transform        |
|                            | white-space           |
|                            | word-spacing          |
| Vertikale Ausrichtung      | vertical-align        |
| Sichtbarkeit               | visibility            |
| Breiteneigenschaften       | width                 |
|                            | min-width             |
|                            | max-width             |
| z-index                    | z-index               |

</details>

## Benannte Seiten

Benannte Seiten ermöglichen es, beim Drucken deklarativ ein Layout pro Seite auszuführen und [Seitenumbrüche](/de/docs/Web/CSS/Guides/Fragmentation) hinzuzufügen.

Benannte Seiten können mithilfe der Eigenschaft {{Cssxref("page")}} angewendet werden. Dadurch kann der Benutzer unterschiedliche Seitenkonfigurationen zur Verwendung in Drucklayouts erstellen.

Ein Beispiel hierfür finden Sie in den Beispielen für [`page`](/de/docs/Web/CSS/Reference/Properties/page#examples).

## Beispiele

### Verwenden der Eigenschaft size zum Ändern der Seitenausrichtung

Dieses Beispiel zeigt, wie die `<section>`s beim Drucken in einzelne Seiten im `landscape`-Format aufgeteilt werden, wobei jede Seite einen Rand von 20 % hat.
Durch Klicken auf die Druckschaltfläche wird ein Druckdialog geöffnet, in dem die HTML-Abschnitte in einzelne Seiten aufgeteilt sind.

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

Beispiele finden Sie bei den verschiedenen [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von `@page`.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaft {{cssxref("page")}}
- Der `@page`-Deskriptor [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size)
- Modul [CSS Paged Media](/de/docs/Web/CSS/Guides/Paged_media)
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443)-Bugzilla zur Nachverfolgung des Fortschritts zu diesem Thema (seitenbasierte Zähler usw.)
