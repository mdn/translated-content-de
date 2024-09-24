---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
l10n:
  sourceCommit: 23d4eb925c7394922e271e733421716e4055b095
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSUnitValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) repräsentiert Werte, die einen einzelnen Einheitstyp enthalten. Zum Beispiel würde "42px" durch einen `CSSNumericValue` dargestellt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
  - : Erstellt ein neues `CSSUnitValue`-Objekt.

## Instanzeigenschaften

- {{domxref('CSSUnitValue.value')}}
  - : Gibt eine Dezimalzahl zurück, die die Anzahl der Einheiten angibt.
- {{domxref('CSSUnitValue.unit')}}
  - : Gibt eine Zeichenkette zurück, die den Einheitstyp angibt.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("CSSNumericValue")}} erben._

## Instanzmethoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("CSSNumericValue")}} erben._

## Beispiele

Das folgende Beispiel zeigt eine Methode zum Erstellen eines {{domxref('CSSPositionValue')}} aus einzelnen `CSSUnitValue`-Konstruktoren.

```js
let pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "px"),
);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
