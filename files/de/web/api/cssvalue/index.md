---
title: CSSValue
slug: Web/API/CSSValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die **`CSSValue`**-Schnittstelle stellt den aktuell berechneten Wert einer CSS-Eigenschaft dar.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde abgebrochen, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Instanz-Eigenschaften

- {{DOMxRef("CSSValue.cssText")}} {{Deprecated_Inline}}
  - : Ein String, der den aktuellen Wert darstellt.
- {{DOMxRef("CSSValue.cssValueType")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein `unsigned short`, der einen Code darstellt, der den Typ des Wertes definiert. Mögliche Werte sind:

    | Konstanten           | Beschreibung                                                                                                                                                                                             |
    | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | Der Wert ist ein benutzerdefinierter Wert.                                                                                                                                                               |
    | `CSS_INHERIT`         | Der Wert wird vererbt und `cssText` enthält `"inherit"`.                                                                                                                                                  |
    | `CSS_PRIMITIVE_VALUE` | Der Wert ist ein primitiver Wert und eine Instanz der {{DOMxRef("CSSPrimitiveValue")}}-Schnittstelle kann durch spezifische Casting-Methoden auf dieser Instanz der `CSSValue`-Schnittstelle erhalten werden. |
    | `CSS_VALUE_LIST`      | Der Wert ist eine `CSSValue`-Liste und eine Instanz der {{DOMxRef("CSSValueList")}}-Schnittstelle kann durch spezifische Casting-Methoden auf dieser Instanz der `CSSValue`-Schnittstelle erhalten werden.  |

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jedem Standardisierungsversuch gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValueList")}}
