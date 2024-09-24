---
title: "ElementInternals: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/ElementInternals/ariaAtomic
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Web Components")}}

Die **`ariaAtomic`**-Eigenschaft des {{domxref("ElementInternals")}}-Interfaces spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attributs wider, das angibt, ob unterstützende Technologien entweder den gesamten oder nur Teile des geänderten Bereichs basierend auf den durch das `aria-relevant`-Attribut definierten Änderungsbenachrichtigungen präsentieren werden.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können von den vom Autor definierten Attributen überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien präsentieren nur den oder die geänderten Knoten.
- `"true"`
  - : Unterstützende Technologien präsentieren den gesamten geänderten Bereich als Ganzes, einschließlich des vom Autor definierten Labels, falls eines vorhanden ist.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAtomic` im Konstruktor eines benutzerdefinierten Elements auf "true" gesetzt.

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
