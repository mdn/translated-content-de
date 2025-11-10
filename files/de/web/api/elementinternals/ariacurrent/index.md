---
title: "ElementInternals: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/ElementInternals/ariaCurrent
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaCurrent`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)-Attributs wider, welches das Element kennzeichnet, das das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente repräsentiert.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Standort, zum Beispiel die aktuelle Seite in einer Brotkrumen-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten.
- `"time"`
  - : Repräsentiert die aktuelle Zeit innerhalb eines Satzes von Zeiten.
- `"true"`
  - : Repräsentiert das aktuelle Element innerhalb einer Menge.
- `"false"`
  - : Repräsentiert nicht das aktuelle Element innerhalb einer Menge.

## Beispiele

In diesem Beispiel wird der Wert von `ariaCurrent` auf "page" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaCurrent = "page";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des aria-current-Attributs](https://tink.uk/using-the-aria-current-attribute/)
