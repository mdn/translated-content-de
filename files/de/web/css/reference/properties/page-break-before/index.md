---
title: page-break-before
slug: Web/CSS/Reference/Properties/page-break-before
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die {{cssxref("break-before")}}-Eigenschaft ersetzt.

Die **`page-break-before`** [CSS](/de/docs/Web/CSS)-Eigenschaft passt Seitenumbrüche _vor_ dem aktuellen Element an.

Diese Eigenschaft wird auf Blockelemente angewendet, die ein Box-Modell erzeugen. Sie wird nicht auf ein leeres {{ HTMLElement("div") }} angewendet, das kein Box-Modell erzeugt.

{{InteractiveExample("CSS Demo: page-break-before")}}

```css interactive-example-choice
page-break-before: auto;
```

```css interactive-example-choice
page-break-before: always;
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
    <div class="box" id="example-element">Content with 'page-break-before'</div>
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
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Global values */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: revert-layer;
page-break-before: unset;
```

### Werte

- `auto`
  - : Ursprünglicher Wert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingt immer Seitenumbrüche vor dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche vor dem Element.
- `left`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als linke Seite formatiert wird. Es ist die Seite, die auf der linken Seite des Buchrückens liegt oder die Rückseite der Seite beim Duplexdruck.
- `right`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Es ist die Seite, die auf der rechten Seite des Buchrückens liegt oder die Vorderseite der Seite beim Duplexdruck.
- `recto`
  - : Wenn sich die Seiten von links nach rechts fortsetzen, wirkt dies wie `right`. Wenn sich die Seiten von rechts nach links fortsetzen, wirkt dies wie `left`.
- `verso`
  - : Wenn sich die Seiten von links nach rechts fortsetzen, wirkt dies wie `left`. Wenn sich die Seiten von rechts nach links fortsetzen, wirkt dies wie `right`.

## Seitenumbruch-Aliase

Die `page-break-before`-Eigenschaft ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-before")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-before` von Browsern als ein Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt aliasiert werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Seitenumbruch vor einem Element vermeiden

```css
/* Avoid page break before div elements of class note */
div.note {
  page-break-before: avoid;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
