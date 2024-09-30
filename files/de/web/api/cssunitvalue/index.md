---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: 23d4eb925c7394922e271e733421716e4055b095
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSUnitValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte, die einen einzelnen Einheitstyp enthalten. Zum Beispiel würde "42px" durch einen `CSSNumericValue` dargestellt werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnitValue()`](/de/docs/Web/API/CSSUnitValue/CSSUnitValue)
  - : Erstellt ein neues `CSSUnitValue`-Objekt.

## Instanzeigenschaften

- [`CSSUnitValue.value`](/de/docs/Web/API/CSSUnitValue/value)
  - : Gibt einen Doppelwert zurück, der die Anzahl der Einheiten angibt.
- [`CSSUnitValue.unit`](/de/docs/Web/API/CSSUnitValue/unit)
  - : Gibt einen String zurück, der den Einheitstyp angibt.

## Statische Methoden

_Das Interface kann auch Methoden von seinem übergeordneten Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Instanzmethoden

_Das Interface kann auch Methoden von seinem übergeordneten Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

Das folgende Beispiel zeigt eine Methode zum Erstellen eines [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue) aus individuellen `CSSUnitValue`-Konstruktoren.

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
