---
title: "ElementInternals: ariaCurrent-Eigenschaft"
short-title: ariaCurrent
slug: Web/API/ElementInternals/ariaCurrent
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaCurrent`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current)-Attributs wider, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder Satzes verwandter Elemente darstellt.

> [!NOTE]
> Durch das Setzen von aria-Attributen auf `ElementInternals` können Standardsemantiken auf einem benutzerdefinierten Element definiert werden. Diese können von vom Autor definierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken beibehalten werden, sollten die Autoren diese Attribute löschen oder überhaupt nicht hinzufügen. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Eine Zeichenfolge mit einem der folgenden Werte:

- `"page"`
  - : Repräsentiert die aktuelle Seite innerhalb eines Satzes von Seiten.
- `"step"`
  - : Repräsentiert den aktuellen Schritt innerhalb eines Prozesses.
- `"location"`
  - : Repräsentiert den aktuellen Standort, zum Beispiel die aktuelle Seite in einer Breadcrumb-Hierarchie.
- `"date"`
  - : Repräsentiert das aktuelle Datum innerhalb einer Sammlung von Daten.
- `"time"`
  - : Repräsentiert die aktuelle Uhrzeit innerhalb eines Satzes von Zeiten.
- `"true"`
  - : Repräsentiert das aktuelle Element innerhalb eines Satzes.
- `"false"`
  - : Repräsentiert nicht das aktuelle Element innerhalb eines Satzes.

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
