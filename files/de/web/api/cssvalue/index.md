---
title: CSSValue
slug: Web/API/CSSValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die **`CSSValue`** Schnittstelle repräsentiert den aktuellen berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Instanzeigenschaften

- [`CSSValue.cssText`](/de/docs/Web/API/CSSValue/cssText) {{Deprecated_Inline}}
  - : Eine Zeichenkette, die den aktuellen Wert darstellt.
- [`CSSValue.cssValueType`](/de/docs/Web/API/CSSValue/cssValueType) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein `unsigned short`, der einen Code darstellt, der den Typ des Wertes definiert. Mögliche Werte sind:

    | Konstante             | Beschreibung                                                                                                                                                                                                                                                        |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CUSTOM`          | Der Wert ist ein benutzerdefinierter Wert.                                                                                                                                                                                                                          |
    | `CSS_INHERIT`         | Der Wert wird geerbt und `cssText` enthält `"inherit"`.                                                                                                                                                                                                             |
    | `CSS_PRIMITIVE_VALUE` | Der Wert ist ein primitiver Wert, und eine Instanz der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle kann durch die Verwendung von bindungsspezifischen Casting-Methoden auf dieser Instanz der `CSSValue` Schnittstelle erhalten werden. |
    | `CSS_VALUE_LIST`      | Der Wert ist eine `CSSValue`-Liste, und eine Instanz der [`CSSValueList`](/de/docs/Web/API/CSSValueList) Schnittstelle kann durch die Verwendung von bindungsspezifischen Casting-Methoden auf dieser Instanz der `CSSValue` Schnittstelle erhalten werden.         |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen entfernt.

Es wurde von einem modernen, aber inkompatiblen, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) abgelöst, das sich jetzt auf dem Weg zur Standardisierung befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
