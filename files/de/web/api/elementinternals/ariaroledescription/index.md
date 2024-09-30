---
title: "ElementInternals: ariaRoleDescription Eigenschaft"
short-title: ariaRoleDescription
slug: Web/API/ElementInternals/ariaRoleDescription
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRoleDescription`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Attributs wider, das eine für den Menschen lesbare, von den Autoren lokalisierte Beschreibung für die Rolle eines Elements definiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRoleDescription` auf "My custom widget" gesetzt.

```js
this.internals_.ariaRoleDescription = "My custom widget";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

- [ARIA: application role](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
