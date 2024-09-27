---
title: "ElementInternals: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/ElementInternals/ariaAtomic
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Web Components")}}

Die **`ariaAtomic`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attributs wider, das angibt, ob unterstützende Technologien den gesamten oder nur Teile des geänderten Bereichs präsentieren, basierend auf den durch das `aria-relevant`-Attribut definierten Änderungsbenachrichtigungen.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken für ein benutzerdefiniertes Element. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe das [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien werden nur den geänderten Knoten oder die Knoten präsentieren.
- `"true"`
  - : Unterstützende Technologien werden den gesamten geänderten Bereich als Ganzes präsentieren, einschließlich des benutzerdefinierten Labels, falls vorhanden.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAtomic` im Konstruktor für ein benutzerdefiniertes Element auf "true" gesetzt.

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaAtomic = "true";
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
