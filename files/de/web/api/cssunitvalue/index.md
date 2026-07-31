---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte, die einen einzelnen [Einheitentyp](/de/docs/Web/CSS/Guides/Values_and_units#units) enthalten.

Zum Beispiel würde der Wert `42px` (ein {{cssxref("&lt;dimension&gt;")}}) durch einen `CSSNumericValue` dargestellt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
  - : Erstellt ein neues `CSSUnitValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
  - : Gibt ein Double zurück, das die Anzahl der Einheiten angibt.
    Für einen `CSSNumericValue`, der `42px` darstellt, wäre dies `42`.
- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
  - : Gibt einen String zurück, der den Einheitentyp angibt. Für einen `CSSNumericValue`, der `42px` darstellt, wäre dies `"px"`.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Instanz-Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

### Grundlegende Verwendung

Das Folgende zeigt eine Methode zur Erstellung eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus individuellen `CSSUnitValue`-Konstruktoren.

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
