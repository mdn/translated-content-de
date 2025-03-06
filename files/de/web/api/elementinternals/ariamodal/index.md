---
title: "ElementInternals: ariaModal-Eigenschaft"
short-title: ariaModal
slug: Web/API/ElementInternals/ariaModal
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaModal`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)-Attributs wider, welches angibt, ob ein Element modalen Charakter hat, wenn es angezeigt wird.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik für ein benutzerdefiniertes Element festzulegen. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärungsartikel](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

- [ARIA: dialog role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
