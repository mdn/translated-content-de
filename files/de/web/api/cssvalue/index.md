---
title: CSSValue
slug: Web/API/CSSValue
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Das **`CSSValue`**-Interface repräsentiert den aktuellen berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt und als experimentell angesehen wird.

## Instanz-Eigenschaften

- [`CSSValue.cssText`](/de/docs/Web/API/CSSValue/cssText) {{Deprecated_Inline}}
  - : Ein String, der den aktuellen Wert darstellt.
- [`CSSValue.cssValueType`](/de/docs/Web/API/CSSValue/cssValueType) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein `unsigned short`, der einen Code repräsentiert, der den Typ des Wertes definiert. Mögliche Werte sind:

    | Konstante             | Beschreibung                                                                                                                                                                                                                                            |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | Der Wert ist ein benutzerdefinierter Wert.                                                                                                                                                                                                              |
    | `CSS_INHERIT`         | Der Wert ist vererbt und `cssText` enthält `"inherit"`.                                                                                                                                                                                                 |
    | `CSS_PRIMITIVE_VALUE` | Der Wert ist ein primitiver Wert und eine Instanz des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces kann durch Verwendung von bindingspezifischen Casting-Methoden auf dieser Instanz des `CSSValue`-Interfaces erhalten werden. |
    | `CSS_VALUE_LIST`      | Der Wert ist eine `CSSValue`-Liste und eine Instanz des [`CSSValueList`](/de/docs/Web/API/CSSValueList)-Interfaces kann durch Verwendung von bindingspezifischen Casting-Methoden auf dieser Instanz des `CSSValue`-Interfaces erhalten werden.         |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jeglichem Standardisierungsprozess entfernt.

Es wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
