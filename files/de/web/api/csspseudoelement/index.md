---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

{{APIRef}}{{SeeCompatTable}}

Das **`CSSPseudoElement`** Interface repräsentiert ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Instanzen dieses Interfaces können durch Aufruf von [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) oder [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo) erhalten werden.

## Instanz-Eigenschaften

- [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das letztendliche ursprungsgebende [`Element`](/de/docs/Web/API/Element) des Pseudoelements zurück.
- [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das unmittelbare ursprungsgebende Element des Pseudoelements zurück.
- [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Pseudoelement-Selektor als String zurück.

## Instanz-Methoden

- [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo)
  - : Gibt eine `CSSPseudoElement`-Instanz zurück, die ein bestimmtes [verschachteltes Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) repräsentiert.

## Beschreibung

Das **`CSSPseudoElement`** Interface repräsentiert ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements). Sie können eine Repräsentation eines an ein DOM-Element angehängten Pseudoelements mit der Methode [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) abrufen, oder eine Repräsentation eines [verschachtelten Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) (zum Beispiel das `::marker` in `::before::marker`) mit der Methode [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo).

Die Eigenschaft [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) gibt einen String zurück, der den Typ des Pseudoelements repräsentiert. Unterstützte Typen sind:

- {{cssxref("::after")}}
- {{cssxref("::before")}}
- {{cssxref("::marker")}}

Die Eigenschaften [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) und [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent) klingen ähnlich, haben jedoch einen Unterschied in der Funktionalität:

- Die `element`-Eigenschaft gibt immer ein [`Element`](/de/docs/Web/API/Element) zurück: Eine Referenz auf das letztendliche ursprungsgebende Element des Pseudoelements oder verschachtelten Pseudoelements.
- Die `parent`-Eigenschaft gibt eine Referenz auf das _unmittelbare_ ursprungsgebende Element des Pseudoelements zurück: Dies kann entweder ein [`Element`](/de/docs/Web/API/Element) oder ein `CSSPseudoElement` im Fall eines [verschachtelten Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) sein.

## Beispiele

### Einfaches Beispiel mit Element.pseudo

Unter Verwendung von Pseudoelementen fügen die meisten modernen Browser automatisch Anführungszeichen um Text innerhalb eines {{HTMLElement('q')}}-Elements hinzu. (Eine Stilregel kann erforderlich sein, um in älteren Browsern Anführungszeichen hinzuzufügen.) Das folgende Beispiel demonstriert die grundlegenden Eigenschaften des `CSSPseudoElement`-Objekts, das das öffnende Anführungszeichen repräsentiert.

```js
const element = document.querySelector("q");
const cssPseudoElement = element.pseudo("::before");
console.log(cssPseudoElement.element); // Outputs [object HTMLQuoteElement]
console.log(cssPseudoElement.type); // Outputs '::before'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- Modul zu [CSS-Pseudoelementen](/de/docs/Web/CSS/Guides/Pseudo-elements)
