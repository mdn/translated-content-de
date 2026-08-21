---
title: CSSValue
slug: Web/API/CSSValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Das **`CSSValue`** Interface repräsentiert den aktuellen berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Instanz-Eigenschaften

- [`CSSValue.cssText`](/de/docs/Web/API/CSSValue/cssText) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein String, der den aktuellen Wert darstellt.
- [`CSSValue.cssValueType`](/de/docs/Web/API/CSSValue/cssValueType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned short`, der einen Code darstellt, der den Typ des Wertes definiert. Mögliche Werte sind:

    | Konstante             | Beschreibung                                                                                                                                                                                                                                                 |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `CSS_CUSTOM`          | Der Wert ist ein benutzerdefinierter Wert.                                                                                                                                                                                                                   |
    | `CSS_INHERIT`         | Der Wert wird vererbt und der `cssText` enthält `"inherit"`.                                                                                                                                                                                                 |
    | `CSS_PRIMITIVE_VALUE` | Der Wert ist ein primitiver Wert und eine Instanz des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Interfaces kann durch die Verwendung von bindungsspezifischen Casting-Methoden auf dieser Instanz des `CSSValue` Interfaces erhalten werden. |
    | `CSS_VALUE_LIST`      | Der Wert ist eine `CSSValue`-Liste und eine Instanz des [`CSSValueList`](/de/docs/Web/API/CSSValueList) Interfaces kann durch die Verwendung von bindungsspezifischen Casting-Methoden auf dieser Instanz des `CSSValue` Interfaces erhalten werden.         |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsvorhaben gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
