---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Das **`CSSPrimitiveValue`** Interface leitet sich vom [`CSSValue`](/de/docs/Web/API/CSSValue) Interface ab und repräsentiert den aktuellen berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein getipptes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das ungetypte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

Dieses Interface repräsentiert einen einzelnen CSS-Wert. Es kann verwendet werden, um den Wert einer bestimmten Stileigenschaft zu bestimmen, die derzeit in einem Block festgelegt ist, oder um eine bestimmte Stileigenschaft explizit innerhalb des Blocks festzulegen. Eine Instanz dieses Interfaces kann durch die Methode [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Interfaces erhalten werden. Ein `CSSPrimitiveValue` Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Umwandlungen sind zwischen absoluten Werten erlaubt (von Millimetern zu Zentimetern, von Grad zu Radianten und so weiter), nicht jedoch zwischen relativen Werten. (Zum Beispiel kann ein Pixelwert nicht in einen Zentimeterwert umgewandelt werden.) Prozentwerte können nicht umgewandelt werden, da sie relativ zum übergeordneten Wert (oder einem anderen Eigenschaftswert) sind. Es gibt eine Ausnahme für Farbprozentsätze: Da ein Farbprozentsatz relativ zum Bereich 0-255 ist, kann ein Farbprozentsatz in eine Zahl umgewandelt werden (siehe auch das [`RGBColor`](/de/docs/Web/API/RGBColor) Interface).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned short`, der den Typ des Wertes repräsentiert. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                                    |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}} Funktion. Der Wert kann durch die `getStringValue()` Methode erhalten werden.                                                   |
    | `CSS_CM`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                               |
    | `CSS_COUNTER`    | Der Wert ist eine [counter oder counters](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Funktion. Der Wert kann durch die `getCounterValue()` Methode erhalten werden. |
    | `CSS_DEG`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                       |
    | `CSS_DIMENSION`  | Der Wert ist ein {{CSSxRef("&lt;number&gt;")}} mit einer unbekannten Dimension. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                              |
    | `CSS_EMS`        | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                              |
    | `CSS_EXS`        | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                              |
    | `CSS_GRAD`       | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Grads. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                      |
    | `CSS_HZ`         | Der Wert ist ein {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann durch die getFloatValue Methode erhalten werden.                                                      |
    | `CSS_IDENT`      | Der Wert ist ein Bezeichner. Der Wert kann durch die `getStringValue()` Methode erhalten werden.                                                                                |
    | `CSS_IN`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                      |
    | `CSS_KHZ`        | Der Wert ist ein {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                              |
    | `CSS_MM`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                               |
    | `CSS_MS`         | Der Wert ist ein {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                               |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                    |
    | `CSS_PC`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Pikas. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                     |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                          |
    | `CSS_PT`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                   |
    | `CSS_PX`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                    |
    | `CSS_RAD`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Radianten. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                  |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}} Funktion. Der Wert kann durch die `getRectValue()` Methode erhalten werden.                                         |
    | `CSS_RGBCOLOR`   | Der Wert ist ein {{CSSxRef("&lt;color&gt;")}}. Der Wert kann durch die `getRGBColorValue()` Methode erhalten werden.                                                            |
    | `CSS_S`          | Der Wert ist ein {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann durch die `getFloatValue()` Methode erhalten werden.                                                    |
    | `CSS_STRING`     | Der Wert ist ein {{CSSxRef("&lt;string&gt;")}}. Der Wert kann durch die `getStringValue()` Methode erhalten werden.                                                             |
    | `CSS_UNKNOWN`    | Der Wert ist kein anerkannter CSS2 Wert. Der Wert kann nur durch das [`cssText`](/de/docs/Web/API/CSSValue/cssText) Attribut erhalten werden.                                   |
    | `CSS_URI`        | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. Der Wert kann durch die `getStringValue()` Methode erhalten werden.                                                   |

## Instanz-Methoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den [counter](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Wert zu erhalten. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mit dem [`Counter`](/de/docs/Web/API/Counter) Interface erreicht werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um einen Float-Wert in einer angegebenen Einheit zu erhalten. Wenn dieser CSS-Wert keinen Float-Wert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um die RGB-Farbe zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mit dem [`RGBColor`](/de/docs/Web/API/RGBColor) Interface erreicht werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Wenn dieser CSS-Wert keinen Rect-Wert enthält, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mit dem [`Rect`](/de/docs/Web/API/Rect) Interface erreicht werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Wenn der CSS-Wert keinen String-Wert enthält, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Methode, um den Float-Wert mit einer angegebenen Einheit festzulegen. Wenn die mit diesem Wert verbundene Eigenschaft die angegebene Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und ein [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Methode, um den String-Wert mit der angegebenen Einheit festzulegen. Wenn die mit diesem Wert verbundene Eigenschaft die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und ein [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seither aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardtrack befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
