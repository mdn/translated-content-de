---
title: "ElementInternals: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/ElementInternals/ariaCurrent
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaCurrent`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attributs wider, das das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe von verwandten Elementen darstellt.

> [!NOTE]
> Das Festlegen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb einer Gruppe von Seiten.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Standort, zum Beispiel die aktuelle Seite in einer Breadcrumb-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten.
- `"time"`
  - : Repräsentiert die aktuelle Zeit innerhalb einer Gruppe von Zeiten.
- `"true"`
  - : Repräsentiert das aktuelle Element innerhalb einer Gruppe.
- `"false"`
  - : Repräsentiert nicht das aktuelle Element innerhalb einer Gruppe.

## Beispiele

In diesem Beispiel wird der Wert von `ariaCurrent` auf "page" gesetzt.

```js
this.internals_.ariaCurrent = "page";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des aria-current-Attributs](https://tink.uk/using-the-aria-current-attribute/)
