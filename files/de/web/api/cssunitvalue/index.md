---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: efab12f729b549406b2e0789a87590572f5af6af
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSUnitValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte, die einen einzelnen [Einheitstyp](/de/docs/Web/CSS/Guides/Values_and_units#units) enthalten.

Zum Beispiel würde der Wert `42px` (eine {{cssxref("&lt;dimension&gt;")}}) durch einen `CSSNumericValue` dargestellt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
  - : Erstellt ein neues `CSSUnitValue` Objekt.

## Instanz-Eigenschaften

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
  - : Gibt eine double-Zahl zurück, die die Anzahl der Einheiten angibt. Für einen `CSSNumericValue`, der `42px` repräsentiert, wäre dies `42`.
- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
  - : Gibt einen String zurück, der den Einheitstyp angibt. Für einen `CSSNumericValue`, der `42px` repräsentiert, wäre dies `"px"`.

## Statische Methoden

_Das Interface kann auch Methoden von seinem Eltern-Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Instanz-Methoden

_Das Interface kann auch Methoden von seinem Eltern-Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

Das folgende zeigt eine Methode zur Erstellung eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus individuellen `CSSUnitValue` Konstruktoren.

```js
let pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "px"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units), eine Auflistung aller möglichen Einheiten und Datentypen
