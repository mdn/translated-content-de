---
title: CSS-Deklaration
slug: Web/API/CSS_Object_Model/CSS_Declaration
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

Eine **CSS-Deklaration** ist ein abstraktes Konzept, das im DOM nicht als Objekt verfügbar ist. Es stellt eine Paarung aus einer CSS-Eigenschaft und einem Wert dar.

Eine CSS-Deklaration hat die folgenden zugeordneten Eigenschaften:

- Eigenschaftsname
  - : Der Eigenschaftsname der Deklaration, zum Beispiel {{cssxref("background-color")}}.
- Wert
  - : Der Wert der Deklaration als Liste von Komponentenwerten.
- Wichtig-Flag
  - : Entweder gesetzt oder nicht gesetzt.
- Groß-/Kleinschreibungssensitiv-Flag
  - : Wird gesetzt, wenn der Eigenschaftsname laut Spezifikation case-sensitive definiert ist, andernfalls nicht gesetzt.

## Einfaches Beispiel

Das folgende Beispiel zeigt eine CSS-Regel mit einem [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für das {{htmlelement("Heading_Elements","&lt;h1&gt;")}}-Element. Der CSS-Deklarationsblock sind die Zeilen zwischen den geschweiften Klammern. Er enthält zwei CSS-Deklarationen: eine für {{cssxref("font-style")}} und eine andere für {{cssxref("color")}}.

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## Spezifikationen

{{Specifications}}
