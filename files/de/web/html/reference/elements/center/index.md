---
title: "`<center>` HTML zentriertes Textelement"
short-title: <center>
slug: Web/HTML/Reference/Elements/center
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<center>`**-[HTML](/de/docs/Web/HTML)-Element ist ein {{Glossary("Block-level_content", "Block-Level-Element")}}, das seine Block-Level- oder Inline-Inhalte horizontal innerhalb seines umgebenden Elements zentriert darstellt. Der Container ist in der Regel, muss aber nicht unbedingt, das {{HTMLElement("body")}} sein.

Dieses Tag wurde in HTML 4 (und XHTML 1) zugunsten der [CSS](/de/docs/Web/CSS) {{Cssxref("text-align")}}-Eigenschaft veraltet, die auf das {{HTMLElement("div")}}-Element oder auf ein einzelnes {{HTMLElement("p")}} angewendet werden kann. Zum Zentrieren von Blöcken verwenden Sie andere CSS-Eigenschaften wie {{Cssxref("margin-left")}} und {{Cssxref("margin-right")}} und setzen Sie diese auf `auto` (oder setzen Sie {{Cssxref("margin")}} auf `0 auto`).

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

## Beispiel 1

```html
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

### Ergebnis

{{EmbedLiveSample("Example 1")}}

## Beispiel 2 (CSS-Alternative)

```html
<div class="center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

```css
.center {
  text-align: center;
}
```

### Ergebnis

{{EmbedLiveSample("Example 2 (CSS alternative)")}}

## Beispiel 3 (CSS-Alternative)

```html
<p class="center">
  This line will be centered.<br />
  And so will this line.
</p>
```

```css
.center {
  text-align: center;
}
```

### Ergebnis

{{EmbedLiveSample("Example 3 (CSS alternative)")}}

> [!NOTE]
> Das Anwenden von {{cssxref("text-align", "text-align: center")}} auf ein {{HTMLElement("div")}}- oder {{HTMLElement("p")}}-Element zentriert die _Inhalte_ dieser Elemente, während ihre Gesamtabmessungen unverändert bleiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
