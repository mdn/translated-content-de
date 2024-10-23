---
title: "ElementInternals: ariaRoleDescription-Eigenschaft"
short-title: ariaRoleDescription
slug: Web/API/ElementInternals/ariaRoleDescription
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Web Components")}}

Die **`ariaRoleDescription`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)-Attributs wider, welches eine für Menschen lesbare und vom Autor lokalisierte Beschreibung der Rolle eines Elements definiert.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik für ein benutzerdefiniertes Element festzulegen. Diese können von vom Autor definierten Attributen überschrieben werden, sichern jedoch, dass die Standardsemantik erhalten bleibt, sollten die Autoren diese Attribute löschen oder sie überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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

## Siehe auch

- [ARIA: Rollenbeschreibung für Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
