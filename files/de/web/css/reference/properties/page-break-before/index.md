---
title: "`page-break-before` CSS property"
short-title: page-break-before
slug: Web/CSS/Reference/Properties/page-break-before
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!WARNING]
> Diese Eigenschaft wurde durch die {{cssxref("break-before")}}-Eigenschaft ersetzt.

Die **`page-break-before`** [CSS](/de/docs/Web/CSS)-Eigenschaft passt Seitenumbrüche _vor_ dem aktuellen Element an.

Diese Eigenschaft gilt für Block-Elemente, die eine Box erzeugen. Sie gilt nicht für ein leeres {{ HTMLElement("div") }}, das keine Box erzeugt.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Standardwert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingt immer Seitenumbrüche vor dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche vor dem Element.
- `left`
  - : Erzwingt Seitenumbrüche vor dem Element, so dass die nächste Seite als linke Seite formatiert wird. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite beim Duplexdruck platziert wird.
- `right`
  - : Erzwingt Seitenumbrüche vor dem Element, so dass die nächste Seite als rechte Seite formatiert wird. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite beim Duplexdruck platziert wird.
- `recto`
  - : Wenn die Seiten von links nach rechts fortschreiten, wirkt dies wie `right`. Wenn die Seiten von rechts nach links fortschreiten, wirkt dies wie `left`.
- `verso`
  - : Wenn die Seiten von links nach rechts fortschreiten, wirkt dies wie `left`. Wenn die Seiten von rechts nach links fortschreiten, wirkt dies wie `right`.

## Seitenumbruch-Aliasse

Die Eigenschaft `page-break-before` ist nun eine veraltete Eigenschaft, die durch {{cssxref("break-before")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-before` von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Unterset von Werten sollte wie folgt als Aliasse behandelt werden:

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
