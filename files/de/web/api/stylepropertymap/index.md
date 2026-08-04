---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}}

Das **`StylePropertyMap`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist nur im Fenster-Thread verfügbar; im Gegensatz zu anderen Interfaces in dieser API kann es nicht in [`Worker`](/de/docs/Web/API/Worker)- oder [`Worklet`](/de/docs/Web/API/Worklet)-Kontexten aufgerufen werden.
> Worklets erhalten einen schreibgeschützten Schnappschuss des Stils eines Elements über [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)._

- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Fügt eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem Wert zum `StylePropertyMap` hinzu.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Entfernt alle Deklarationen im `StylePropertyMap`.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Entfernt die CSS-Deklaration mit der angegebenen Eigenschaft.
- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Ändert die CSS-Deklaration mit der angegebenen Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
