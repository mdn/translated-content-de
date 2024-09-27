---
title: "ElementInternals: ariaExpanded-Eigenschaft"
short-title: ariaExpanded
slug: Web/API/ElementInternals/ariaExpanded
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaExpanded`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attributs wider, welches angibt, ob ein Gruppenelement, das von diesem Element besessen oder gesteuert wird, erweitert oder eingeklappt ist.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Erklärer zum Accessibility Object Model](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Gruppenelement, das dieses Element besitzt oder steuert, ist erweitert.
- `"false"`
  - : Das Gruppenelement, das dieses Element besitzt oder steuert, ist eingeklappt.
- `"undefined"`
  - : Das Element besitzt oder steuert kein Gruppenelement, das erweiterbar ist.

## Beispiele

In diesem Beispiel wird der Wert von `ariaExpanded` auf "true" gesetzt.

```js
this.internals_.ariaExpanded = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
