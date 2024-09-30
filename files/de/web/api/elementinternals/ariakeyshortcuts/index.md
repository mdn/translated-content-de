---
title: "ElementInternals: ariaKeyShortcuts-Eigenschaft"
short-title: ariaKeyShortcuts
slug: Web/API/ElementInternals/ariaKeyShortcuts
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaKeyShortcuts`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts)-Attributs wider, welches Tastaturkürzel angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
