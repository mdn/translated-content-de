---
title: "<center>: Das zentrierte Textelement"
slug: Web/HTML/Reference/Elements/center
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<center>`**-[HTML](/de/docs/Web/HTML)-Element ist ein {{Glossary("Block-level_content", "Block-Element")}}, das seine Block- oder Inline-Inhalte horizontal in der Mitte innerhalb seines umgebenden Elements anzeigt. Der Container ist normalerweise, aber nicht zwingend, {{HTMLElement("body")}}.

Dieses Tag wurde in HTML 4 (und XHTML 1) zugunsten der [CSS](/de/docs/Web/CSS) {{Cssxref("text-align")}}-Eigenschaft veraltet, die auf das {{HTMLElement("div")}}-Element oder auf ein einzelnes {{HTMLElement("p")}} angewendet werden kann. Für die Zentrierung von Blöcken verwenden Sie andere CSS-Eigenschaften wie {{Cssxref("margin-left")}} und {{Cssxref("margin-right")}} und setzen Sie sie auf `auto` (oder setzen Sie {{Cssxref("margin")}} auf `0 auto`).

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
> Wenn {{cssxref("text-align", "text-align: center")}} auf ein {{HTMLElement("div")}}- oder {{HTMLElement("p")}}-Element angewendet wird, werden die _Inhalte_ dieser Elemente zentriert, wobei deren Gesamtabmessungen unverändert bleiben.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
