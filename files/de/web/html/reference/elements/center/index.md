---
title: "`<center>` HTML zentriertes Textelement"
short-title: <center>
slug: Web/HTML/Reference/Elements/center
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<center>`** [HTML](/de/docs/Web/HTML)-Element ist ein {{Glossary("Block-level_content", "Block-Level-Element")}}, das seine Block-Level- oder Inline-Inhalte horizontal innerhalb des umgebenden Elements zentriert darstellt. Das Container-Element ist normalerweise, muss aber nicht zwingend das {{HTMLElement("body")}}-Element sein.

Dieses Tag wurde in HTML 4 (und XHTML 1) zugunsten der [CSS](/de/docs/Web/CSS) {{Cssxref("text-align")}}-Eigenschaft als veraltet eingestuft, welche auf das {{HTMLElement("div")}}-Element oder auf ein einzelnes {{HTMLElement("p")}} angewendet werden kann. Zum Zentrieren von Blöcken verwenden Sie andere CSS-Eigenschaften wie {{Cssxref("margin-left")}} und {{Cssxref("margin-right")}} und setzen Sie diese auf `auto` (oder setzen Sie {{Cssxref("margin")}} auf `0 auto`).

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
> Das Anwenden von {{cssxref("text-align", "text-align: center")}} auf ein {{HTMLElement("div")}}- oder {{HTMLElement("p")}}-Element zentriert den _Inhalt_ dieser Elemente, während die Gesamtabmessungen unverändert bleiben.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
