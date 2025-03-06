---
title: "ElementInternals: ariaBusy-Eigenschaft"
short-title: ariaBusy
slug: Web/API/ElementInternals/ariaBusy
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaBusy`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attributs wider. Dieses Attribut zeigt an, ob ein Element modifiziert wird, da assistive Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.

> [!NOTE]
> Das Setzen von `aria`-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können durch benutzerdefinierte Attribute überschrieben werden, jedoch wird sichergestellt, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element wird aktualisiert.
- `"false"`
  - : Es sind keine erwarteten Aktualisierungen für das Element.

## Beispiele

In diesem Beispiel wird der Wert von `ariaBusy` auf "true" gesetzt.

```js
this.internals_.ariaBusy = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
