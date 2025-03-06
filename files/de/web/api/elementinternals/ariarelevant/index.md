---
title: "ElementInternals: ariaRelevant-Eigenschaft"
short-title: ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}{{Non-standard_header}}

Die **`ariaRelevant`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attributs wider, welches angibt, welche Benachrichtigungen vom User-Agent ausgelöst werden, wenn der Zugänglichkeitsbaum innerhalb eines Livebereichs modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollten.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Für weitere Informationen siehe das [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der einen oder mehrere der folgenden Werte enthält, getrennt durch Leerzeichen:

- "additions"
  - : Hinzufügungen von Node-Elementen innerhalb des Livebereichs sollten als relevant betrachtet werden.
- "removals"
  - : Das Löschen von Nodes aus dem Livebereich sollte als relevant betrachtet werden.
- "text"
  - : Änderungen am Textinhalt bestehender Nodes sollten als relevant betrachtet werden.
- "all"
  - : Entspricht `"additions removals text"`.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRelevant` auf "all" gesetzt.

```js
this.internals_.ariaRelevant = "all";
```

## Browser-Kompatibilität

{{Compat}}
