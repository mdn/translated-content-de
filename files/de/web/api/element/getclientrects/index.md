---
title: "Element: getClientRects()-Methode"
short-title: getClientRects()
slug: Web/API/Element/getClientRects
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("DOM")}}

Die **`getClientRects()`**-Methode der {{domxref("Element")}}
Schnittstelle gibt eine Sammlung von {{DOMxRef("DOMRect")}}-Objekten zurück, die die
begrenzenden Rechtecke für jedes [CSS-Rahmen-Box](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) in einem Client angeben.

Die meisten Elemente haben jeweils nur eine Rahmen-Box, aber ein mehrzeiliges [Inline-Element](/de/docs/Glossary/Inline-level_content) (wie z.B. ein mehrzeiliges
{{HTMLElement("span")}}-Element, standardmäßig) hat eine Rahmen-Box um jede Zeile.

## Syntax

```js-nolint
getClientRects()
```

### Parameter

Keine.

### Rückgabewert

Der zurückgegebene Wert ist eine Sammlung von {{DOMxRef("DOMRect")}}-Objekten, jeweils eines für jede CSS-Rahmen-Box, die mit dem Element verknüpft ist. Jedes {{DOMxRef("DOMRect")}}-Objekt beschreibt die Rahmen-Box in Pixeln, wobei die linke obere Ecke relativ zur linken oberen Ecke des Viewports ist. Bei Tabellen mit Beschriftungen ist die Beschriftung enthalten, auch wenn sie außerhalb der Rahmen-Box der Tabelle liegt. Wenn diese Methode auf SVG-Elemente angewendet wird, die nicht das äußere `<svg>` sind, ist der "Viewport", relativ zu dem die resultierenden Rechtecke sind, der Viewport, den das äußere `<svg>`-Element festlegt (und um klar zu sein, die Rechtecke werden auch durch die `viewBox`-Transformation des äußeren `<svg>` transformiert, falls vorhanden).

Die Scrollmenge, die im Viewport-Bereich (oder einem anderen scrollbaren Element) durchgeführt wurde, wird bei der Berechnung der Rechtecke berücksichtigt.

Die zurückgegebenen Rechtecke schließen die Begrenzungen von untergeordneten Elementen, die möglicherweise überlaufen, nicht ein.

Für HTML-{{HtmlElement("area")}}-Elemente, SVG-Elemente, die selbst nichts rendern, `display:none`-Elemente und allgemein alle Elemente, die nicht direkt gerendert werden, wird eine leere Liste zurückgegeben.

Rechtecke werden auch für CSS-Boxen zurückgegeben, die leere Rahmen-Boxen haben. Die `left`, `top`, `right` und `bottom` Koordinaten können dennoch sinnvoll sein.

Bruchteile von Pixel-Offsets sind möglich.

## Beispiele

Diese Beispiele zeichnen Client-Rechtecke in verschiedenen Farben. Beachten Sie, dass die JavaScript-Funktion, die die Client-Rechtecke malt, über die Klasse `withClientRectsOverlay` mit dem Markup verbunden ist.

### HTML

Beispiel 1: Dieses HTML erzeugt drei Absätze mit einem `<span>` darin, jeweils eingebettet in einen `<div>`-Block. Client-Rechtecke werden für den
Absatz im zweiten Block und für das `<span>`-Element im
dritten Block gemalt.

```html
<h3>Ein Absatz mit einem Span darin</h3>
<p>
  Sowohl der Span als auch der Absatz haben eine eingestellte Grenze. Die Client-Rechtecke sind in
  rot. Beachten Sie, dass das p nur eine Rahmen-Box hat, während der Span mehrere
  Rahmen-Boxen hat.
</p>

<div>
  <strong>Original</strong>
  <p>
    <span>Absatz, der sich über mehrere Zeilen erstreckt</span>
  </p>
</div>

<div>
  <strong>p's Rechteck</strong>
  <p class="withClientRectsOverlay">
    <span>Absatz, der sich über mehrere Zeilen erstreckt</span>
  </p>
</div>

<div>
  <strong>span's Rechteck</strong>
  <p>
    <span class="withClientRectsOverlay"
      >Absatz, der sich über mehrere Zeilen erstreckt</span
    >
  </p>
</div>
```

Beispiel 2: Dieses HTML erstellt drei geordnete Listen. Client-Rechtecke werden für das
`<ol>` im zweiten Block und für jedes `<li>`-
Element im dritten Block gemalt.

```html
<h3>Eine Liste</h3>
<p>
  Beachten Sie, dass die Rahmen-Box die Nummer nicht enthält, also enthalten die Client-Rechtecke diese auch nicht.
</p>

<div>
  <strong>Original</strong>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>ol's Rechteck</strong>
  <ol class="withClientRectsOverlay">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>jedes li's Rechteck</strong>
  <ol>
    <li class="withClientRectsOverlay">Item 1</li>
    <li class="withClientRectsOverlay">Item 2</li>
  </ol>
</div>
```

Beispiel 3: Dieses HTML erstellt zwei Tabellen mit Beschriftungen. Client-Rechtecke werden für die `<table>` im zweiten Block gemalt.

```html
<h3>Eine Tabelle mit einer Beschriftung</h3>
<p>
  Obwohl die Rahmen-Box der Tabelle die Beschriftung nicht enthält, enthalten die Client-Rechtecke die Beschriftung.
</p>

<div>
  <strong>Original</strong>
  <table>
    <caption>
      Beschriftung
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
  <strong>table's Rechteck</strong>
  <table class="withClientRectsOverlay">
    <caption>
      Beschriftung
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

Das CSS zeichnet Rahmen um den Absatz und das `<span>` innerhalb
jedes `<div>`-Blocks für das erste Beispiel, um das
`<ol>` und `<li>` für das zweite Beispiel, und um
`<table>`, `<th>`, und `<td>`
Elemente für das dritte Beispiel.

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

Der JavaScript-Code zeichnet die Client-Rechtecke für alle HTML-Elemente, denen die CSS-Klasse
`withClientRectsOverlay` zugewiesen ist.

```js
function addClientRectsOverlay(elt) {
  /* Absolut positionieren Sie ein div über jedem Client-Rechteck, sodass die Breite des Rahmens
     dieselbe ist wie die Breite des Rechtecks.
     Hinweis: Die Overlays sind verschoben, wenn der Benutzer die Größe ändert oder zoomt. */
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
    // Wir möchten, dass rect.width die Breite des Rahmens ist, daher ist die Inhaltsbreite 2px weniger.
    tableRectDiv.style.width = `${rect.width - 2}px`;
    tableRectDiv.style.height = `${rect.height - 2}px`;
    document.body.appendChild(tableRectDiv);
  }
}

(() => {
  /* Funktion addClientRectsOverlay(elt) für alle Elemente mit zugewiesener Klasse
     "withClientRectsOverlay" aufrufen */
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

- {{DOMxRef("Element.getBoundingClientRect()")}}
