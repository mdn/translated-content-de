---
title: "ElementInternals: ariaSelected-Eigenschaft"
short-title: ariaSelected
slug: Web/API/ElementInternals/ariaSelected
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaSelected`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attributs wider, welches den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantik für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, gewährleisten jedoch, dass die Standard-Semantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"false"`
  - : Das Element ist nicht ausgewählt.
- `"undefined"`
  - : Das Element ist nicht

## Beispiele

In diesem Beispiel wird der Wert von `ariaSelected` auf "true" gesetzt.

```js
this.internals_.ariaSelected = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Rolle tab](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
