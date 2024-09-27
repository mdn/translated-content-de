---
title: "ElementInternals: ariaValueMin-Eigenschaft"
short-title: ariaValueMin
slug: Web/API/ElementInternals/ariaValueMin
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaValueMin`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attributes wider, das den minimal erlaubten Wert für ein Bereichs-Widget definiert.

> [!NOTE]
> Durch das Setzen von aria-Attributen auf `ElementInternals` können Standardsemantiken auf einem benutzerdefinierten Element definiert werden. Diese können durch benutzerdefinierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Zahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaValueMin` auf "10" gesetzt.

```js
this.internals_.ariaValueMin = "10";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
