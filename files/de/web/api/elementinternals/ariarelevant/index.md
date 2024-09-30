---
title: "ElementInternals: ariaRelevant-Eigenschaft"
short-title: ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}{{Non-standard_header}}

Die **`ariaRelevant`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Attributs wider, welches angibt, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Accessibility-Baum innerhalb einer Live-Region geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken bei einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber es wird sichergestellt, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie in der [Accessibility Object Model Beschreibung](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der einen oder mehrere der folgenden, durch Leerzeichen getrennten Werte enthält:

- "additions"
  - : Hinzufügungen von Element-Knoten innerhalb der Live-Region sollten als relevant betrachtet werden.
- "removals"
  - : Das Löschen von Knoten aus der Live-Region sollte als relevant betrachtet werden.
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
