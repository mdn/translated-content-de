---
title: "ElementInternals: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/ElementInternals/ariaLive
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaLive`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attributs wider, das angibt, dass ein Element aktualisiert wird und die Arten von Aktualisierungen beschreibt, die von Benutzeragenten, unterstützenden Technologien und dem Benutzer in der Live-Region erwartet werden können.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Aktualisierungen der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollen.
- `"off"`
  - : Gibt an, dass Aktualisierungen der Region nicht dem Benutzer präsentiert werden sollen, es sei denn, der Benutzer fokussiert sich derzeit auf diese Region.
- `"polite"`
  - : Gibt an, dass Aktualisierungen der Region bei der nächsten günstigen Gelegenheit präsentiert werden sollen, z. B. am Ende des aktuellen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLive` auf "assertive" gesetzt.

```js
this.internals_.ariaLive = "assertive";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
