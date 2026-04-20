---
title: "`page-break-after` CSS property"
short-title: page-break-after
slug: Web/CSS/Reference/Properties/page-break-after
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die {{cssxref("break-after")}} Eigenschaft ersetzt.

Die **`page-break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche _nach_ dem aktuellen Element an.

{{InteractiveExample("CSS Demo: page-break-after")}}

```css interactive-example-choice
page-break-after: auto;
```

```css interactive-example-choice
page-break-after: always;
```

```html interactive-example
<div>
  <p>
    The effect of this property can be noticed when the document is being
    printed or a preview of a print is displayed.
  </p>
  <button id="print-btn">Show Print Preview</button>
  <div class="box-container">
    <div class="box">Content before the property</div>
    <div class="box" id="example-element">Content with 'page-break-after'</div>
    <div class="box">Content after the property</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## Syntax

```css
/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: revert-layer;
page-break-after: unset;
```

Diese Eigenschaft gilt für Block-Elemente, die eine Box erzeugen. Sie wird nicht auf ein leeres {{HTMLElement("div")}} angewendet, das keine Box erzeugt.

### Werte

- `auto`
  - : Anfangswert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingen Sie stets Seitenumbrüche nach dem Element.
- `avoid`
  - : Vermeiden Sie Seitenumbrüche nach dem Element.
- `left`
  - : Erzwingen Sie Seitenumbrüche nach dem Element, sodass die nächste Seite als linke Seite formatiert wird. Dies ist die Seite, die auf der linken Seite des Buchrückens oder die Rückseite der Seite bei Duplexdruck platziert wird.
- `right`
  - : Erzwingen Sie Seitenumbrüche nach dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Dies ist die Seite, die auf der rechten Seite des Buchrückens oder die Vorderseite der Seite bei Duplexdruck platziert wird.
- `recto`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `right`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `left`.
- `verso`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `left`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `right`.

## Seitenumbruch-Aliase

Die `page-break-after` Eigenschaft ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-after")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-after` von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie gewünscht funktionieren. Ein Unterabschnitt von Werten sollte wie folgt als Alias behandelt werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Seitenumbruch nach Fußnoten setzen

```css
/* move to a new page after footnotes */
div.footnotes {
  page-break-after: always;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
