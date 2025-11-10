---
title: "ElementInternals: ariaRelevant-Eigenschaft"
short-title: ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}{{Non-standard_header}}

Die **`ariaRelevant`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attributes wider, welches angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der einen oder mehrere der folgenden, durch Leerzeichen getrennte Werte enthält:

- "additions"
  - : Hinzufügungen von Elementknoten innerhalb der Live-Region sollten als relevant angesehen werden.
- "removals"
  - : Löschungen von Knoten in der Live-Region sollten als relevant angesehen werden.
- "text"
  - : Änderungen am Textinhalt bestehender Knoten sollten als relevant angesehen werden.
- "all"
  - : Entspricht `"additions removals text"`.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRelevant` auf "all" gesetzt.

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRelevant = "all";
  }
  // …
}
```

## Browser-Kompatibilität

{{Compat}}
