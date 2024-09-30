---
title: "Element: getClientRects() Methode"
short-title: getClientRects()
slug: Web/API/Element/getClientRects
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("DOM")}}

Die **`getClientRects()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt eine Sammlung von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurück, die die Begrenzungsrechtecke für jede [CSS-Rahmenbox](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) in einem Client anzeigen.

Die meisten Elemente haben jeweils nur eine Rahmenbox, aber ein mehrzeiliges [Inline-Element](/de/docs/Glossary/Inline-level_content) (wie z.B. ein mehrzeiliges {{HTMLElement("span")}}-Element, standardmäßig) hat eine Rahmenbox um jede Zeile.

## Syntax

```js-nolint
getClientRects()
```

### Parameter

Keine.

### Rückgabewert

Der zurückgegebene Wert ist eine Sammlung von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten, eines für jede mit dem Element verbundene CSS-Rahmenbox. Jedes [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt beschreibt die Rahmenbox in Pixeln, wobei die obere linke Ecke relativ zur oberen linken Ecke des Viewports liegt. Bei Tabellen mit Bildunterschriften wird die Bildunterschrift einbezogen, auch wenn sie sich außerhalb der Rahmenbox der Tabelle befindet. Wenn die Methode auf SVG-Elemente angewendet wird, die nicht ein äußeres `<svg>` sind, ist der "viewport", zu dem sich die resultierenden Rechtecke beziehen, der vom äußeren `<svg>` etablierte Viewport (und um klarzustellen, die Rechtecke werden auch durch die `viewBox`-Transformation des äußeren `<svg>` transformiert, sofern vorhanden).

Die beim Scrollen des Viewport-Bereichs (oder eines anderen scrollbaren Elements) durchgeführte Scrollmenge wird bei der Berechnung der Rechtecke berücksichtigt.

Die zurückgegebenen Rechtecke schließen nicht die Grenzen von Kinderelementen ein, die möglicherweise überlaufen.

Für HTML-{{HtmlElement("area")}}-Elemente, SVG-Elemente, die selbst nichts rendern, `display:none`-Elemente und allgemein alle Elemente, die nicht direkt gerendert werden, wird eine leere Liste zurückgegeben.

Rechtecke werden auch für CSS-Boxen zurückgegeben, die leere Rahmenboxen haben. Die `left`, `top`, `right` und `bottom`-Koordinaten können dennoch von Bedeutung sein.

Bruchteile von Pixelversetzungen sind möglich.

## Beispiele

Diese Beispiele zeichnen Client-Rechtecke in verschiedenen Farben. Beachten Sie, dass die JavaScript-Funktion, die die Client-Rechtecke zeichnet, über die Klasse `withClientRectsOverlay` mit dem Markup verknüpft ist.

### HTML

Beispiel 1: Dieses HTML erstellt drei Absätze mit einem `<span>` darin, jeder eingebettet in einem `<div>`-Block. Client-Rechtecke werden für den Absatz im zweiten Block und für das `<span>`-Element im dritten Block gezeichnet.

```html
<h3>A paragraph with a span inside</h3>
<p>
  Both the span and the paragraph have a border set. The client rects are in
  red. Note that the p has only one border box, while the span has multiple
  border boxes.
</p>

<div>
  <strong>Original</strong>
  <p>
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>p's rect</strong>
  <p class="withClientRectsOverlay">
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>span's rect</strong>
  <p>
    <span class="withClientRectsOverlay"
      >Paragraph that spans multiple lines</span
    >
  </p>
</div>
```

Beispiel 2: Dieses HTML erstellt drei geordnete Listen. Client-Rechtecke werden für das `<ol>` im zweiten Block und für jedes `<li>`-Element im dritten Block gezeichnet.

```html
<h3>A list</h3>
<p>
  Note that the border box doesn't include the number, so neither do the client
  rects.
</p>

<div>
  <strong>Original</strong>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>ol's rect</strong>
  <ol class="withClientRectsOverlay">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>each li's rect</strong>
  <ol>
    <li class="withClientRectsOverlay">Item 1</li>
    <li class="withClientRectsOverlay">Item 2</li>
  </ol>
</div>
```

Beispiel 3: Dieses HTML erstellt zwei Tabellen mit Bildunterschriften. Client-Rechtecke werden für das `<table>` im zweiten Block gezeichnet.

```html
<h3>A table with a caption</h3>
<p>
  Although the table's border box doesn't include the caption, the client rects
  do include the caption.
</p>

<div>
  <strong>Original</strong>
  <table>
    <caption>
      caption
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <strong>table's rect</strong>
  <table class="withClientRectsOverlay">
    <caption>
      caption
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>
```

### CSS

Das CSS zeichnet Rahmen um den Absatz und das `<span>` in jedem `<div>`-Block für das erste Beispiel, um das `<ol>` und die `<li>` für das zweite Beispiel und um `<table>`, `<th>` und `<td>`-Elemente für das dritte Beispiel.

```css
strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p,
ol,
table {
  border: 1px solid blue;
}
span,
li,
th,
td {
  border: 1px solid green;
}
```

### JavaScript

Der JavaScript-Code zeichnet die Client-Rechtecke für alle HTML-Elemente, denen die CSS-Klasse `withClientRectsOverlay` zugewiesen ist.

```js
function addClientRectsOverlay(elt) {
  /* Absolutely position a div over each client rect so that its border width
     is the same as the rectangle's width.
     Note: the overlays will be out of place if the user resizes or zooms. */
  const rects = elt.getClientRects();
  for (const rect of rects) {
    const tableRectDiv = document.createElement("div");
    tableRectDiv.style.position = "absolute";
    tableRectDiv.style.border = "1px solid red";
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = "0";
    tableRectDiv.style.top = `${rect.top + scrollTop}px`;
    tableRectDiv.style.left = `${rect.left + scrollLeft}px`;
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = `${rect.width - 2}px`;
    tableRectDiv.style.height = `${rect.height - 2}px`;
    document.body.appendChild(tableRectDiv);
  }
}

(() => {
  /* Call function addClientRectsOverlay(elt) for all elements with
     assigned class "withClientRectsOverlay" */
  const elts = document.getElementsByClassName("withClientRectsOverlay");
  for (const elt of elts) {
    addClientRectsOverlay(elt);
  }
})();
```

### Ergebnis

{{EmbedLiveSample('Examples', 680, 650)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
