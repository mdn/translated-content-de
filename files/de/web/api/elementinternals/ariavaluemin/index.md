---
title: "ElementInternals: ariaValueMin-Eigenschaft"
short-title: ariaValueMin
slug: Web/API/ElementInternals/ariaValueMin
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`ariaValueMin`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals) Interfaces spiegelt den Wert des [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) Attributs wider, das den minimal zulässigen Wert für ein Bereich-Widget definiert.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, sollten die autorenspezifischen Attribute gelöscht werden oder überhaupt nicht hinzugefügt werden. Weitere Informationen finden Sie im [Accessibility Object Model Erklär-Dokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

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
