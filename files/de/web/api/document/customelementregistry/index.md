---
title: "Dokument: customElementRegistry-Eigenschaft"
short-title: customElementRegistry
slug: Web/API/Document/customElementRegistry
l10n:
  sourceCommit: 57ea7eecce9dee3bd3a874ce184a48cf993c0699
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`customElementRegistry`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt das diesem Dokument zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück oder `null`, wenn keines festgelegt wurde.

Für Dokumente, die einem [`Window`](/de/docs/Web/API/Window) zugeordnet sind (etwa das Hauptdokument einer Seite), ist dies die globale `CustomElementRegistry`, die auch über die Eigenschaft [`window.customElements`](/de/docs/Web/API/Window/customElements) zugänglich ist. Programmgesteuert erstellte Dokumente (beispielsweise über [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument)) besitzen standardmäßig eine `null`-Custom-Element-Registry.

Diese Eigenschaft ist über denselben Eigenschaftsnamen [`customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) auch für [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte verfügbar.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`.

## Beispiele

### Zugriff auf die Custom-Element-Registry eines Dokuments

Dieses Beispiel zeigt, dass die `customElementRegistry` des Hauptdokuments dieselbe globale Registry ist, die über [`window.customElements`](/de/docs/Web/API/Window/customElements) verfügbar ist, während programmgesteuert über [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) erstellte Dokumente standardmäßig eine `null`-Registry besitzen.

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
- [Bereichsbezogene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) in [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
