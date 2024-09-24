---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
l10n:
  sourceCommit: 47cff57ce02950e9137634e7923042d156f04081
---

{{APIRef}}{{SeeCompatTable}}

Das **`CSSPseudoElement`**-Interface repräsentiert ein Pseudoelement, das das Ziel eines Ereignisses sein oder mit der {{DOMxRef('Web Animations API', '', '', 'true')}} animiert werden kann. Instanzen dieses Interfaces können durch Aufruf von {{DOMxRef('Element.pseudo()')}} erhalten werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{DOMxRef('CSSPseudoElement.element')}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das ursprüngliche/elterliche {{DOMxRef('Element')}} des Pseudoelements zurück.
- {{DOMxRef('CSSPseudoElement.type')}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Pseudoelement-Selektor als Zeichenkette zurück.

## Instanzmethoden

_`CSSPseudoElement` erweitert {{DOMxRef('EventTarget')}}, daher erbt es die folgenden Methoden:_

## Beispiele

### Einfaches Beispiel mit Element.pseudo

Unter Verwendung von Pseudoelementen werden die meisten modernen Browser automatisch Anführungszeichen um Text innerhalb eines {{HTMLElement('q')}}-Elements hinzufügen. (Eine Stilregel kann erforderlich sein, um Anführungszeichen in älteren Browsern hinzuzufügen.) Das untenstehende Beispiel demonstriert die grundlegenden Eigenschaften des `CSSPseudoElement`-Objekts, das das eröffnende Anführungszeichen darstellt.

```js
const element = document.querySelector("q");
const cssPseudoElement = element.pseudo("::before");
console.log(cssPseudoElement.element); // Outputs [object HTMLQuoteElement]
console.log(cssPseudoElement.type); // Outputs '::before'
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef('Element.pseudo()')}}
- {{DOMxRef('Web Animations API', '', '', 'true')}}
- {{DOMxRef('Element.animate()')}}
