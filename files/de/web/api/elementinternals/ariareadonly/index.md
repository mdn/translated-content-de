---
title: "ElementInternals: ariaReadOnly-Eigenschaft"
short-title: ariaReadOnly
slug: Web/API/ElementInternals/ariaReadOnly
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaReadOnly`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attributs wider, welches anzeigt, dass das Element nicht bearbeitbar ist, aber dennoch bedienbar ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht die Definition von Standardsemantiken für ein benutzerdefiniertes Element. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Der Benutzer kann den Wert des Elements nicht ändern.
- `"false"`
  - : Der Benutzer kann den Wert des Elements festlegen.

## Beispiele

In diesem Beispiel wird der Wert von `ariaReadOnly` auf "true" gesetzt.

```js
this.internals_.ariaReadonly = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
