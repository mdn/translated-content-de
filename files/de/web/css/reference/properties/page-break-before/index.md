---
title: "`page-break-before` CSS property"
short-title: page-break-before
slug: Web/CSS/Reference/Properties/page-break-before
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die Eigenschaft {{cssxref("break-before")}} ersetzt.

Die **`page-break-before`**-[CSS](/de/docs/Web/CSS)-Eigenschaft passt Seitenumbrüche _vor_ dem aktuellen Element an.

Diese Eigenschaft gilt für Blockelemente, die eine Box erzeugen. Sie wird nicht auf ein leeres {{ HTMLElement("div") }} angewendet, das keine Box erzeugen wird.

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
  - : Anfangswert. Automatische Seitenumbrüche (weder erzwungen noch verhindert).
- `always`
  - : Erzwingt immer Seitenumbrüche vor dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche vor dem Element.
- `left`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als linke Seite formatiert wird. Es ist die Seite, die auf der linken Seite des Buchrückens oder auf der Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Es ist die Seite, die auf der rechten Seite des Buchrückens oder auf der Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Wenn Seiten von links nach rechts fortschreiten, verhält sich dies wie `right`. Wenn Seiten von rechts nach links fortschreiten, verhält sich dies wie `left`.
- `verso`
  - : Wenn Seiten von links nach rechts fortschreiten, verhält sich dies wie `left`. Wenn Seiten von rechts nach links fortschreiten, verhält sich dies wie `right`.

## Seitenumbruch-Aliasse

Die Eigenschaft `page-break-before` ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-before")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-before` von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

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

### Vermeiden eines Seitenumbruchs vor einem Element

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
