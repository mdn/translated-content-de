---
title: "ElementInternals: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/ElementInternals/ariaCurrent
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaCurrent`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)-Attributs wider, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe von verwandten Elementen darstellt.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Ort, zum Beispiel die aktuelle Seite in einer Breadcrumbs-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten.
- `"time"`
  - : Repräsentiert die aktuelle Uhrzeit innerhalb eines Satzes von Zeiten.
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

- [Using the aria-current attribute](https://tink.uk/using-the-aria-current-attribute/)
