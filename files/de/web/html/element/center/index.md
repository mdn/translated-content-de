---
title: "<center>: Das zentrierte Textelement"
slug: Web/HTML/Element/center
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<center>`** [HTML](/de/docs/Web/HTML)-Element ist ein {{Glossary("Block-level_content", "Block-Element")}}, das seine Block- oder Inline-Inhalte horizontal innerhalb seines umgebenden Elements zentriert anzeigt. Das umgebende Element ist normalerweise, aber nicht zwingend, das {{HTMLElement("body")}}-Element.

Dieses Tag wurde in HTML 4 (und XHTML 1) zugunsten der [CSS](/de/docs/Web/CSS) {{Cssxref("text-align")}}-Eigenschaft veraltet, die auf das {{HTMLElement("div")}}-Element oder auf ein einzelnes {{HTMLElement("p")}} angewendet werden kann. Für das Zentrieren von Blöcken verwenden Sie andere CSS-Eigenschaften wie {{Cssxref("margin-left")}} und {{Cssxref("margin-right")}} und setzen diese auf `auto` (oder setzen Sie {{Cssxref("margin")}} auf `0 auto`).

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
<div style="text-align:center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

### Ergebnis

{{EmbedLiveSample("Example 2 (CSS alternative)")}}

## Beispiel 3 (CSS-Alternative)

```html
<p style="text-align:center">
  This line will be centered.<br />
  And so will this line.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example 3 (CSS alternative)")}}

> [!NOTE]
> Das Anwenden von {{cssxref("text-align", "text-align: center")}} auf ein {{HTMLElement("div")}}- oder {{HTMLElement("p")}}-Element zentriert den _Inhalt_ dieser Elemente, während deren Gesamtabmessungen unverändert bleiben.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
