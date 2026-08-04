---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSUnitValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert Werte, die einen einzelnen [Einheitstyp](/de/docs/Web/CSS/Guides/Values_and_units#units) enthalten.

Zum Beispiel würde der Wert `42px` (ein {{cssxref("&lt;dimension&gt;")}}) durch einen `CSSNumericValue` dargestellt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
  - : Erstellt ein neues `CSSUnitValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
  - : Gibt eine Gleitkommazahl zurück, die die Anzahl der Einheiten angibt.
    Für einen `CSSNumericValue`, der `42px` repräsentiert, wäre dies `42`.
- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
  - : Gibt einen String zurück, der den Typ der Einheit angibt. Für einen `CSSNumericValue`, der `42px` repräsentiert, wäre dies `"px"`.

## Statische Methoden

_Das Interface kann auch Methoden von seinem übergeordneten Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Instanz-Methoden

_Das Interface kann auch Methoden von seinem übergeordneten Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine Methode zur Erstellung eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue`-Konstruktoren.

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
- [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units), eine Liste aller möglichen Einheiten und Datentypen
