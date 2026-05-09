---
title: CSSValue
slug: Web/API/CSSValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}{{non-standard_header}}

Das **`CSSValue`**-Interface repräsentiert den aktuell berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das umfassend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell betrachtet.

## Instanz-Eigenschaften

- [`CSSValue.cssText`](/de/docs/Web/API/CSSValue/cssText) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein String, der den aktuellen Wert darstellt.
- [`CSSValue.cssValueType`](/de/docs/Web/API/CSSValue/cssValueType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned short`, der einen Code darstellt, der den Typ des Wertes definiert. Mögliche Werte sind:

    | Konstante             | Beschreibung                                                                                                                                                                                                                             |
    | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | Der Wert ist ein benutzerdefinierter Wert.                                                                                                                                                                                               |
    | `CSS_INHERIT`         | Der Wert ist vererbt und `cssText` enthält `"inherit"`.                                                                                                                                                                                  |
    | `CSS_PRIMITIVE_VALUE` | Der Wert ist ein primitiver Wert und eine Instanz des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces kann durch binding-spezifische Casting-Methoden auf dieser Instanz des `CSSValue`-Interfaces erhalten werden. |
    | `CSS_VALUE_LIST`      | Der Wert ist eine `CSSValue`-Liste und eine Instanz des [`CSSValueList`](/de/docs/Web/API/CSSValueList)-Interfaces kann durch binding-spezifische Casting-Methoden auf dieser Instanz des `CSSValue`-Interfaces erhalten werden.         |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seither aus jedem Standardisierungsbemühen entfernt.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
