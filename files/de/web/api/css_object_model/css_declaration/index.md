---
title: CSS-Deklaration
slug: Web/API/CSS_Object_Model/CSS_Declaration
l10n:
  sourceCommit: e87af7c2d48e6679acbb5172836e81fe2bc30f2d
---

{{ APIRef("CSSOM") }}

Eine **CSS-Deklaration** ist ein abstraktes Konzept, das im DOM nicht als Objekt exponiert wird. Es repräsentiert ein Paar aus CSS-Eigenschaft und -Wert.

Eine CSS-Deklaration hat die folgenden zugehörigen Eigenschaften:

- Eigenschaftsname
  - : Der Eigenschaftsname der Deklaration, zum Beispiel {{cssxref("background-color")}}.
- Wert
  - : Der Wert der Deklaration als Liste von Komponentenwerten.
- Wichtige-Markierung
  - : Entweder gesetzt oder nicht gesetzt.
- Groß-/Kleinschreibungs-Markierung
  - : Wird gesetzt, wenn der Eigenschaftsname gemäß der Spezifikation als groß-/kleinschreibungssensitiv definiert ist, andernfalls nicht gesetzt.

## Einfaches Beispiel

Das folgende Beispiel zeigt eine CSS-Regel mit einem [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für das {{htmlelement("Heading_Elements","&lt;h1&gt;")}}-Element. Der CSS-Deklarationsblock sind die Zeilen zwischen den geschweiften Klammern und enthält zwei CSS-Deklarationen. Eine für {{cssxref("font-style")}} und eine weitere für {{cssxref("color")}}.

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## Spezifikationen

{{Specifications}}
