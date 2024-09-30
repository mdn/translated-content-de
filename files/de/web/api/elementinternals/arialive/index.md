---
title: "ElementInternals: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/ElementInternals/ariaLive
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaLive`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attributs wider, das angibt, dass ein Element aktualisiert wird und die Art der Updates beschreibt, die Benutzeragenten, unterstützende Technologien und der Benutzer von der Live-Region erwarten können.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass Standardsemantiken beibehalten werden, sollte der Autor diese Attribute löschen oder sie überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Updates am Bereich die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Updates am Bereich dem Benutzer nicht präsentiert werden sollten, es sei denn, der Benutzer ist derzeit auf diesen Bereich fokussiert.
- `"polite"`
  - : Gibt an, dass Updates am Bereich bei der nächsten passenden Gelegenheit präsentiert werden sollten, z. B. am Ende eines gesprochenen Satzes oder wenn der Benutzer das Tippen unterbricht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLive` auf "assertive" gesetzt.

```js
this.internals_.ariaLive = "assertive";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
