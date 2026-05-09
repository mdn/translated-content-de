---
title: CSSValueList
slug: Web/API/CSSValueList
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`CSSValueList`**-Schnittstelle leitet sich von der [`CSSValue`](/de/docs/Web/API/CSSValue)-Schnittstelle ab und bietet die Abstraktion einer geordneten Sammlung von CSS-Werten.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihre Anforderungen zu erfüllen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

Einige Eigenschaften erlauben eine leere Liste in ihrer Syntax. In diesem Fall nehmen diese Eigenschaften den `none`-Bezeichner an. Eine leere Liste bedeutet also, dass die Eigenschaft den Wert `none` hat.

Die Elemente in der `CSSValueList` sind über einen ganzzahligen Index zugänglich, beginnend bei 0.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSValueList.length`](/de/docs/Web/API/CSSValueList/length) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned long`, der die Anzahl der `CSSValues` in der Liste darstellt.

## Instanz-Methoden

- [`CSSValueList.item()`](/de/docs/Web/API/CSSValueList/item) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um einen [`CSSValue`](/de/docs/Web/API/CSSValue) anhand eines Ordnungsindexes abzurufen. Die Reihenfolge in dieser Sammlung entspricht der Reihenfolge der Werte in der CSS-Stileigenschaft. Wenn der Index größer oder gleich der Anzahl der Werte in der Liste ist, gibt diese `null` zurück.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jedem Standardisierungsversuch gestrichen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValue`](/de/docs/Web/API/CSSValue)
