---
title: "ElementInternals: ariaKeyShortcuts-Eigenschaft"
short-title: ariaKeyShortcuts
slug: Web/API/ElementInternals/ariaKeyShortcuts
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaKeyShortcuts`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)-Attributes wider, das Tastaturkürzel anzeigt, die von einem Autor implementiert wurden, um ein Element zu aktivieren oder den Fokus darauf zu legen.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken auf einem benutzerdefinierten Element. Diese können von Autordefinierten Attributen überschrieben werden, aber sie stellen sicher, dass die Standardsemantik beibehalten wird, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaKeyShortcuts` auf "Alt+Shift+A" gesetzt.

```js
this.internals_.ariaKeyShortcuts = "Alt+Shift+A";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
