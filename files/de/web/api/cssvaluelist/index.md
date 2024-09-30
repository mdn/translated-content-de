---
title: CSSValueList
slug: Web/API/CSSValueList
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die **`CSSValueList`** Schnittstelle leitet sich von der [`CSSValue`](/de/docs/Web/API/CSSValue) Schnittstelle ab und bietet die Abstraktion einer geordneten Sammlung von CSS-Werten.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser setzen ihn nicht um.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

Einige Eigenschaften erlauben eine leere Liste in ihrer Syntax. In diesem Fall nehmen diese Eigenschaften den Bezeichner `none` an. Eine leere Liste bedeutet also, dass die Eigenschaft den Wert `none` hat.

Die Elemente in der `CSSValueList` sind über einen integralen Index zugänglich, beginnend bei 0.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSValueList.length`](/de/docs/Web/API/CSSValueList/length) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein `unsigned long`, der die Anzahl der `CSSValues` in der Liste darstellt.

## Instanz-Methoden

- [`CSSValueList.item()`](/de/docs/Web/API/CSSValueList/item) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um einen [`CSSValue`](/de/docs/Web/API/CSSValue) anhand eines ordinalen Indexes abzurufen. Die Reihenfolge in dieser Sammlung repräsentiert die Reihenfolge der Werte in der CSS-Stileigenschaft. Wenn der Index größer oder gleich der Anzahl der Werte in der Liste ist, wird `null` zurückgegeben.

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus jedem Standardisierungsversuch entfernt.

Sie wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValue`](/de/docs/Web/API/CSSValue)
