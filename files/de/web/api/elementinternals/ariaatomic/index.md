---
title: "ElementInternals: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/ElementInternals/ariaAtomic
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaAtomic`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Attributs wider, welches angibt, ob unterstützende Technologien entweder den gesamten geänderten Bereich oder nur Teile davon basierend auf den durch das `aria-relevant`-Attribut definierten Änderungsbenachrichtigungen präsentieren.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen aber sicher, dass die Standardsemantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Für weitere Informationen siehe die [Accessibility Object Model Erklärung](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien werden nur den oder die geänderten Knoten präsentieren.
- `"true"`
  - : Unterstützende Technologien werden den gesamten geänderten Bereich als Ganzes präsentieren, einschließlich des vom Autor definierten Labels, falls eines existiert.

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
