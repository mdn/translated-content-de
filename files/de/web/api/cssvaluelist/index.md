---
title: CSSValueList
slug: Web/API/CSSValueList
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Das **`CSSValueList`**-Interface leitet sich vom [`CSSValue`](/de/docs/Web/API/CSSValue)-Interface ab und bietet die Abstraktion einer geordneten Sammlung von CSS-Werten.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein getyptes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das ungetyptes [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

Einige Eigenschaften erlauben eine leere Liste in ihrer Syntax. In diesem Fall nehmen diese Eigenschaften den `none`-Bezeichner an. Eine leere Liste bedeutet also, dass die Eigenschaft den Wert `none` hat.

Die Elemente in der `CSSValueList` sind über einen ganzzahligen Index zugänglich, beginnend bei 0.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSValueList.length`](/de/docs/Web/API/CSSValueList/length) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned long`, der die Anzahl der `CSSValues` in der Liste darstellt.

## Instanz-Methoden

- [`CSSValueList.item()`](/de/docs/Web/API/CSSValueList/item) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um einen [`CSSValue`](/de/docs/Web/API/CSSValue) nach ordinalem Index abzurufen. Die Reihenfolge in dieser Sammlung entspricht der Reihenfolge der Werte in der CSS-Stileigenschaft. Ist der Index größer oder gleich der Anzahl der Werte in der Liste, wird `null` zurückgegeben.

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, ist jedoch seitdem aus jeglichen Standardisierungsbemühungen gestrichen worden.

Sie wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Weg zur Standardisierung befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValue`](/de/docs/Web/API/CSSValue)
