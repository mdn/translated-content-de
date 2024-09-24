---
title: CSSValueList
slug: Web/API/CSSValueList
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die **`CSSValueList`**-Schnittstelle leitet sich von der {{DOMxRef("CSSValue")}}-Schnittstelle ab und bietet die Abstraktion einer geordneten Sammlung von CSS-Werten.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weit verbreitet unterstützt, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell betrachtet.

Einige Eigenschaften erlauben eine leere Liste in ihrer Syntax. In diesem Fall nehmen diese Eigenschaften den Bezeichner `none` an. Eine leere Liste bedeutet also, dass die Eigenschaft den Wert `none` hat.

Die Elemente in der `CSSValueList` sind über einen Ganzzahlenindex zugänglich, beginnend bei 0.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("CSSValue")}}_.

- {{DOMxRef("CSSValueList.length")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein `unsigned long`, das die Anzahl der `CSSValues` in der Liste darstellt.

## Instanz-Methoden

- {{DOMxRef("CSSValueList.item()")}} {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um einen {{DOMxRef("CSSValue")}} nach ordinalem Index abzurufen. Die Reihenfolge in dieser Sammlung repräsentiert die Reihenfolge der Werte in der CSS-Stileigenschaft. Wenn der Index größer oder gleich der Anzahl der Werte in der Liste ist, wird `null` zurückgegeben.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber nicht kompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Weg zur Standardisierung befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValue")}}
