---
title: "Dokument: customElementRegistry Eigenschaft"
short-title: customElementRegistry
slug: Web/API/Document/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`customElementRegistry`** der [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das mit diesem Dokument verbunden ist, oder `null`, wenn keines festgelegt wurde.

Für Dokumente, die mit einem [`Window`](/de/docs/Web/API/Window) verbunden sind (wie das Hauptdokument einer Seite), ist dies das globale `CustomElementRegistry`, das auch über die [`window.customElements`](/de/docs/Web/API/Window/customElements)-Eigenschaft zugänglich ist. Programmgesteuert erstellte Dokumente (zum Beispiel über [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument)) haben standardmäßig ein `null`-Custom-Element-Registry.

Diese Eigenschaft ist auch auf [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten über denselben Eigenschaften-Namen [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) verfügbar.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`.

## Beispiele

### Zugriff auf die Custom-Element-Registry eines Dokuments

Dieses Beispiel zeigt, dass die `customElementRegistry` des Hauptdokuments dieselbe globale Registry ist, die über [`window.customElements`](/de/docs/Web/API/Window/customElements) verfügbar ist, während programmgesteuert erstellte Dokumente über [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) standardmäßig eine `null`-Registry haben.

```js
// The main document's registry is the global one:
console.log(document.customElementRegistry === window.customElements); // true (for Window-associated documents)

// Documents created programmatically have a null registry:
const newDoc = document.implementation.createHTMLDocument("New document");
console.log(newDoc.customElementRegistry); // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry)
- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
- [`window.customElements`](/de/docs/Web/API/Window/customElements)
- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
