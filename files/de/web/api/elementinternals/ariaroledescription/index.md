---
title: "ElementInternals: ariaRoleDescription-Eigenschaft"
short-title: ariaRoleDescription
slug: Web/API/ElementInternals/ariaRoleDescription
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRoleDescription`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Attributs wider, welches eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können von den vom Autor definierten Attributen überschrieben werden, jedoch wird sichergestellt, dass die Standardsemantik beibehalten wird, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
