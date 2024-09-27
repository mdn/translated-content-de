---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: 23d4eb925c7394922e271e733421716e4055b095
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte, die einen einzelnen Einheitstyp enthalten. Zum Beispiel würde "42px" durch einen `CSSNumericValue` repräsentiert.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
  - : Erstellt ein neues `CSSUnitValue`-Objekt.

## Instanz-Eigenschaften

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
  - : Gibt eine Gleitkommazahl zurück, die die Anzahl der Einheiten angibt.
- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
  - : Gibt einen String zurück, der den Typ der Einheit angibt.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erben._

## Instanz-Methoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erben._

## Beispiele

Das folgende zeigt eine Methode zur Erstellung eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus einzelnen `CSSUnitValue`-Konstruktoren.

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
