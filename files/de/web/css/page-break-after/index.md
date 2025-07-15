---
title: page-break-after
slug: Web/CSS/page-break-after
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die Eigenschaft {{cssxref("break-after")}} ersetzt.

Die **`page-break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche _nach_ dem aktuellen Element an.

{{InteractiveExample("CSS Demo: page-break-after")}}

```css interactive-example-choice
page-break-after: auto;
```

```css interactive-example-choice
page-break-after: always;
```

```html interactive-example
<section id="default-example">
  <div>
    <p>
      The effect of this property can be noticed when the document is being
      printed or a preview of a print is displayed.
    </p>
    <button id="print-btn">Show Print Preview</button>
    <div class="box-container">
      <div class="box">Content before the property</div>
      <div class="box" id="example-element">
        Content with 'page-break-after'
      </div>
      <div class="box">Content after the property</div>
    </div>
  </div>
</section>
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

.hide-element {
  display: none;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");
const editorContainer = document.getElementsByClassName(
  "css-editor-container",
)[0];
const exampleHTMLElement = document.getElementById("default-example");

const printableSection = document.createElement("div");
printableSection.setAttribute("id", "printable-section");
printableSection.classList.add("hide-element");
document.body.appendChild(printableSection);

btn.addEventListener("click", () => {
  const exampleContent = exampleHTMLElement.innerHTML;

  editorContainer.classList.add("hide-element");
  printableSection.innerHTML = exampleContent;
  printableSection.classList.remove("hide-element");

  window.print();

  printableSection.classList.add("hide-element");
  printableSection.innerHTML = "";
  editorContainer.classList.remove("hide-element");
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

Diese Eigenschaft gilt für Blockelemente, die eine Box generieren. Sie gilt nicht für ein leeres {{HTMLElement("div")}}, das keine Box generiert.

### Werte

- `auto`
  - : Initialwert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingt immer Seitenumbrüche nach dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche nach dem Element.
- `left`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als linke Seite formatiert wird. Das ist die Seite, die auf der linken Seite des Buchrückens oder die Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Das ist die Seite, die auf der rechten Seite des Buchrückens oder die Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Wenn die Seiten von links nach rechts verlaufen, wirkt dies wie `right`. Wenn die Seiten von rechts nach links verlaufen, wirkt dies wie `left`.
- `verso`
  - : Wenn die Seiten von links nach rechts verlaufen, wirkt dies wie `left`. Wenn die Seiten von rechts nach links verlaufen, wirkt dies wie `right`.

## Alias für Seitenumbruch

Die Eigenschaft `page-break-after` ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-after")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-after` von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Seiten, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

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
