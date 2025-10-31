---
title: page-break-after
slug: Web/CSS/Reference/Properties/page-break-after
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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

Diese Eigenschaft gilt für Blockelemente, die eine Box erzeugen. Sie wird nicht auf ein leeres {{HTMLElement("div")}} angewendet, das keine Box erzeugt.

### Werte

- `auto`
  - : Initialwert. Automatische Seitenumbrüche (weder erzwungen noch verhindert).
- `always`
  - : Immer Seitenumbrüche nach dem Element erzwingen.
- `avoid`
  - : Seitenumbrüche nach dem Element vermeiden.
- `left`
  - : Seitenumbrüche nach dem Element erzwingen, so dass die nächste Seite als linke Seite formatiert wird. Diese befindet sich auf der linken Seite des Buchrückens oder auf der Rückseite der Seite im Duplexdruck.
- `right`
  - : Seitenumbrüche nach dem Element erzwingen, so dass die nächste Seite als rechte Seite formatiert wird. Diese befindet sich auf der rechten Seite des Buchrückens oder auf der Vorderseite der Seite im Duplexdruck.
- `recto`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `right`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `left`.
- `verso`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `left`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `right`.

## Alias für Seitenumbrüche

Die `page-break-after` Eigenschaft ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-after")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-after` von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt aliasiert werden:

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

### Einen Seitenumbruch nach Fußnoten einstellen

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
