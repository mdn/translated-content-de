---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSUnitValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) repräsentiert Werte, die einen einzelnen [Einheitstyp](/de/docs/Web/CSS/Guides/Values_and_units#units) enthalten.

Zum Beispiel würde der Wert `42px` (ein {{cssxref("&lt;dimension&gt;")}}) durch einen `CSSNumericValue` dargestellt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
  - : Erstellt ein neues `CSSUnitValue` Objekt.

## Instanz-Eigenschaften

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
  - : Eine Zahl, die die Anzahl der Einheiten darstellt.
    Für einen `CSSNumericValue`, der `42px` darstellt, wäre dies `42`.
- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
  - : Gibt eine Zeichenkette zurück, die den Einheitstyp angibt. Für einen `CSSNumericValue`, der `42px` repräsentiert, wäre dies `"px"`.

## Statische Methoden

_Übernimmt auch Methoden von seinem übergeordneten Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)._

## Instanz-Methoden

_Übernimmt auch Methoden von seinem übergeordneten Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)._

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine Methode, um einen [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue` Konstruktoren zu erstellen.

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
