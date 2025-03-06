---
title: "ElementInternals: ariaExpanded-Eigenschaft"
short-title: ariaExpanded
slug: Web/API/ElementInternals/ariaExpanded
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaExpanded`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attributs wider, das angibt, ob ein von diesem Element besessenes oder gesteuertes Gruppierungselement erweitert oder eingeklappt ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist erweitert.
- `"false"`
  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist eingeklappt.
- `"undefined"`
  - : Das Element besitzt oder steuert kein erweiterbares Gruppierungselement.

## Beispiele

In diesem Beispiel wird der Wert von `ariaExpanded` auf "true" gesetzt.

```js
this.internals_.ariaExpanded = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
