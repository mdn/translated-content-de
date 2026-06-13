---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{APIRef}}{{SeeCompatTable}}

Das **`CSSPseudoElement`** Interface repräsentiert ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Instanzen dieses Interfaces können durch Aufrufen von [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) oder [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo) erhalten werden.

## Instanz-Eigenschaften

- [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das letzte ursprüngliche [`Element`](/de/docs/Web/API/Element) des Pseudoelements zurück.
- [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das unmittelbare ursprüngliche Element des Pseudoelements zurück.
- [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Pseudoelement-Selektor als Zeichenkette zurück.

## Instanz-Methoden

- [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo) {{experimental_inline}}
  - : Gibt eine `CSSPseudoElement` Instanz zurück, die ein spezifisches [verschachteltes Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) darstellt.

## Beschreibung

Das **`CSSPseudoElement`** Interface repräsentiert ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements). Sie können eine Repräsentation eines Pseudoelements, das einem DOM-Element zugeordnet ist, mit der Methode [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) abrufen oder eine Repräsentation eines [verschachtelten Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) (zum Beispiel der `::marker` in `::before::marker`) mit der Methode [`CSSPseudoElement.pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo).

Die Eigenschaft [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) gibt eine Zeichenkette zurück, die den Typ des Pseudoelements repräsentiert. Unterstützte Typen sind:

- {{cssxref("::after")}}
- {{cssxref("::before")}}
- {{cssxref("::marker")}}

Die Eigenschaften [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) und [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent) klingen ähnlich, weisen jedoch einen Unterschied in der Funktionalität auf:

- Die `element`-Eigenschaft gibt immer ein [`Element`](/de/docs/Web/API/Element) zurück: Eine Referenz zum letzten ursprünglichen Element des Pseudoelements oder des verschachtelten Pseudoelements.
- Die `parent`-Eigenschaft gibt eine Referenz zum _unmittelbaren_ ursprünglichen Element des Pseudoelements zurück: Dies kann entweder ein [`Element`](/de/docs/Web/API/Element) oder ein `CSSPseudoElement` im Fall eines [verschachtelten Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) sein.

## Beispiele

### Einfaches Beispiel mit Element.pseudo

Mit Pseudoelementen fügen die meisten modernen Browser automatisch Anführungszeichen um den Text in einem {{HTMLElement('q')}}-Element hinzu. (Eine Stilregel kann erforderlich sein, um in älteren Browsern Anführungszeichen hinzuzufügen.) Das folgende Beispiel zeigt die grundlegenden Eigenschaften des `CSSPseudoElement` Objekts, das das öffnende Anführungszeichen darstellt.

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
- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
