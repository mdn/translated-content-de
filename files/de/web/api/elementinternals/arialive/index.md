---
title: "ElementInternals: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/ElementInternals/ariaLive
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaLive`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attributs wider, das angibt, dass ein Element aktualisiert wird, und beschreibt die Arten von Updates, die von Benutzeragenten, unterstützenden Technologien und dem Benutzer in der Live-Region erwartet werden können.

> [!NOTE]
> Das Setzen von Aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Updates der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Updates der Region dem Benutzer nicht präsentiert werden sollten, es sei denn, der Benutzer ist derzeit auf diese Region fokussiert.
- `"polite"`
  - : Gibt an, dass Updates der Region bei der nächsten günstigen Gelegenheit präsentiert werden sollten, z. B. am Ende des Sprechens des aktuellen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLive` auf "assertive" gesetzt.

```js
this.internals_.ariaLive = "assertive";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
