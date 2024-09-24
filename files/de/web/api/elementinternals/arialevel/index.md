---
title: "ElementInternals: ariaLevel-Eigenschaft"
short-title: ariaLevel
slug: Web/API/ElementInternals/ariaLevel
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaLevel`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level)-Attributs wider, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder diese gar nicht erst hinzufügt. Für weitere Informationen siehe das [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String, der eine ganze Zahl enthält.

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
