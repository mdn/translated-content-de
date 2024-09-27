---
title: "ElementInternals: ariaModal-Eigenschaft"
short-title: ariaModal
slug: Web/API/ElementInternals/ariaModal
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaModal`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal)-Attributs wider, das angibt, ob ein Element beim Anzeigen modal ist.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können von benutzerdefinierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute entfernt oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist modal.
- `"false"`
  - : Das Element ist nicht modal.

## Beispiele

In diesem Beispiel wird der Wert von `ariaModal` auf "true" gesetzt.

```js
this.internals_.ariaModal = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Dialogrolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
