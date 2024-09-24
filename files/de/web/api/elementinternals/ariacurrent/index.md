---
title: "ElementInternals: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/ElementInternals/ariaCurrent
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaCurrent`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attributs wider, das das Element kennzeichnet, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantik auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, aber stellen Sie sicher, dass die Standard-Semantik erhalten bleibt, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb eines Seitensatzes.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Standort, beispielsweise die aktuelle Seite in einer Breadcrumb-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Datensammlung.
- `"time"`
  - : Repräsentiert die aktuelle Uhrzeit innerhalb einer Reihe von Zeiten.
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
