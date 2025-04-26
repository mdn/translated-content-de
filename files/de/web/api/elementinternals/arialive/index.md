---
title: "ElementInternals: ariaLive-Eigenschaft"
short-title: ariaLive
slug: Web/API/ElementInternals/ariaLive
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaLive`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attributs wider, das angibt, dass ein Element aktualisiert wird und die Arten von Aktualisierungen beschreibt, die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können von benutzerdefinierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"assertive"`
  - : Gibt an, dass Aktualisierungen der Region die höchste Priorität haben und dem Benutzer sofort präsentiert werden sollten.
- `"off"`
  - : Gibt an, dass Aktualisierungen der Region dem Benutzer nicht präsentiert werden sollten, es sei denn, der Benutzer fokussiert derzeit diese Region.
- `"polite"`
  - : Gibt an, dass Aktualisierungen der Region bei der nächsten günstigen Gelegenheit präsentiert werden sollten, z. B. am Ende des aktuellen Satzes oder wenn der Benutzer eine Pause beim Tippen macht.

## Beispiele

In diesem Beispiel wird der Wert von `ariaLive` auf "assertive" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaLive = "assertive";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
