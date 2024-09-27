---
title: "ElementInternals: ariaLevel-Eigenschaft"
short-title: ariaLevel
slug: Web/API/ElementInternals/ariaLevel
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaLevel`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attributs wider, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, sollte der Autor diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLevel` auf "1" gesetzt.

```js
this.internals_.ariaLevel = "1";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: heading role](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
