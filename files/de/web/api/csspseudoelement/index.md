---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
l10n:
  sourceCommit: 47cff57ce02950e9137634e7923042d156f04081
---

{{APIRef}}{{SeeCompatTable}}

Die **`CSSPseudoElement`**-Schnittstelle repräsentiert ein Pseudo-Element, das das Ziel eines Ereignisses sein oder mit der [Web Animations API](/de/docs/Web/API/Web_Animations_API) animiert werden kann. Instanzen dieser Schnittstelle können durch Aufrufen von [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) erhalten werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das ursprüngliche/übergeordnete [`Element`](/de/docs/Web/API/Element) des Pseudo-Elements zurück.
- [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt den Pseudo-Element-Selektor als Zeichenfolge zurück.

## Instanzmethoden

_`CSSPseudoElement` erweitert [`EventTarget`](/de/docs/Web/API/EventTarget), daher erbt es die folgenden Methoden:_

## Beispiele

### Einfaches Beispiel mit Element.pseudo

Bei der Verwendung von Pseudo-Elementen fügen die meisten modernen Browser automatisch Anführungszeichen um den Text innerhalb eines {{HTMLElement('q')}}-Elements hinzu. (In älteren Browsern kann eine Stilregel erforderlich sein, um Anführungszeichen hinzuzufügen.) Das untenstehende Beispiel zeigt die grundlegenden Eigenschaften des `CSSPseudoElement`-Objekts, welches das öffnende Anführungszeichen repräsentiert.

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
