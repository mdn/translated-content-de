---
title: CSS Declaration
slug: Web/API/CSS_Object_Model/CSS_Declaration
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

Eine **CSS-Deklaration** ist ein abstraktes Konzept, das im DOM nicht als Objekt exponiert wird. Sie stellt eine Paarung von CSS-Eigenschaft und -Wert dar.

Eine CSS-Deklaration hat die folgenden zugehörigen Eigenschaften:

- Eigenschaftsname
  - : Der Eigenschaftsname der Deklaration, zum Beispiel {{cssxref("background-color")}}.
- Wert
  - : Der Wert der Deklaration als Liste von Komponentenwerten.
- wichtiges Flag
  - : Entweder gesetzt oder nicht gesetzt.
- Groß-/Kleinschreibungssensibles Flag
  - : Wird gesetzt, wenn der Eigenschaftsname laut Spezifikation als groß-/kleinschreibungssensitiv definiert ist, sonst nicht gesetzt.

## Einfaches Beispiel

Das folgende Beispiel zeigt eine CSS-Regel mit einem [CSS-Deklarations-Block](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für das {{htmlelement("Heading_Elements","&lt;h1&gt;")}}-Element. Der CSS-Deklarations-Block sind die Zeilen zwischen den geschweiften Klammern. Er enthält zwei CSS-Deklarationen: eine für {{cssxref("font-style")}} und eine andere für {{cssxref("color")}}.

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## Spezifikationen

{{Specifications}}
