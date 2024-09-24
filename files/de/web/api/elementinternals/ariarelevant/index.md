---
title: "ElementInternals: ariaRelevant-Eigenschaft"
short-title: ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}{{Non-standard_header}}

Die **`ariaRelevant`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attributs wider, welches angibt, welche Benachrichtigungen der User-Agent auslöst, wenn der Barrierefreiheitsbaum innerhalb eines Live-Bereichs geändert wird. Diese Eigenschaft wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live`-Bereich relevant sind und angekündigt werden sollten.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der einen oder mehrere der folgenden Werte enthält, durch Leerzeichen getrennt:

- "additions"
  - : Hinzufügungen von Elementknoten innerhalb des Live-Bereichs sollten als relevant betrachtet werden.
- "removals"
  - : Löschungen von Knoten aus dem Live-Bereich sollten als relevant betrachtet werden.
- "text"
  - : Änderungen am Textinhalt bestehender Knoten sollten als relevant betrachtet werden.
- "all"
  - : Entspricht `"additions removals text"`.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRelevant` auf "all" gesetzt.

```js
this.internals_.ariaRelevant = "all";
```

## Browser-Kompatibilität

{{Compat}}
