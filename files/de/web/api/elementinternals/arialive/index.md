---
title: "ElementInternals: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/ElementInternals/ariaLive
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaLive`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attributs wider, welches anzeigt, dass ein Element aktualisiert wird, und beschreibt die Arten von Aktualisierungen, die von den Benutzeragenten, unterstützenden Technologien und Benutzern von der Live-Region erwartet werden können.

> [!NOTE]
> Das Festlegen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, sichert jedoch, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model erklärt](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Aktualisierungen der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Aktualisierungen der Region dem Benutzer nicht präsentiert werden sollten, es sei denn, der Benutzer fokussiert momentan auf diese Region.
- `"polite"`
  - : Gibt an, dass Aktualisierungen der Region bei der nächsten geeigneten Gelegenheit präsentiert werden sollten, beispielsweise am Ende eines gesprochenen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLive` auf "assertive" gesetzt.

```js
this.internals_.ariaLive = "assertive";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
