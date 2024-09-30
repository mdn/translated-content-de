---
title: "ElementInternals: ariaAtomic-Eigenschaft"
short-title: ariaAtomic
slug: Web/API/ElementInternals/ariaAtomic
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Web Components")}}

Die **`ariaAtomic`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Attributs wider, das angibt, ob unterstützende Technologien entweder die gesamte oder nur Teile der geänderten Region basierend auf den durch das `aria-relevant`-Attribut definierten Änderungsbenachrichtigungen präsentieren werden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden. Es wird jedoch sichergestellt, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Unterstützende Technologien präsentieren nur den oder die geänderten Knoten.
- `"true"`
  - : Unterstützende Technologien präsentieren die gesamte geänderte Region im Ganzen, einschließlich des vom Autor definierten Labels, falls vorhanden.

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
