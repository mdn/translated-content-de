---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Das **`CSSPrimitiveValue`**-Interface leitet sich vom [`CSSValue`](/de/docs/Web/API/CSSValue)-Interface ab und repräsentiert den aktuell berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser
> implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

Dieses Interface repräsentiert einen einzelnen CSS-Wert. Es kann verwendet werden, um den Wert einer bestimmten Stileigenschaft zu bestimmen, die derzeit in einem Block festgelegt ist, oder um eine bestimmte Stileigenschaft explizit innerhalb des Blocks festzulegen. Eine Instanz dieses Interfaces könnte von der Methode [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Interfaces erhalten werden. Ein `CSSPrimitiveValue`-Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Umwandlungen sind zwischen absoluten Werten erlaubt (von Millimetern zu Zentimetern, von Grad zu Radiant, usw.), jedoch nicht zwischen relativen Werten. (Zum Beispiel kann ein Pixelwert nicht in einen Zentimeterwert umgewandelt werden.) Prozentwerte können nicht umgewandelt werden, da sie relativ zum Elternelementwert (oder einem anderen Eigenschaftswert) sind. Es gibt eine Ausnahme für Farbprozentwerte: Da ein Farbprozentwert relativ zum Bereich 0-255 ist, kann ein Farbprozentwert in eine Zahl umgewandelt werden (siehe auch das [`RGBColor`](/de/docs/Web/API/RGBColor)-Interface).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned short`, der den Typ des Wertes repräsentiert. Mögliche Werte sind:

    | Konstanten       | Beschreibung                                                                                                                                                                   |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}}-Funktion. Der Wert kann mit der Methode `getStringValue()` abgefragt werden.                                                   |
    | `CSS_CM`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                               |
    | `CSS_COUNTER`    | Der Wert ist eine [counter oder counters](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)-Funktion. Der Wert kann mit der Methode `getCounterValue()` abgefragt werden. |
    | `CSS_DEG`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                       |
    | `CSS_DIMENSION`  | Der Wert ist ein {{CSSxRef("&lt;number&gt;")}} mit einer unbekannten Dimension. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                              |
    | `CSS_EMS`        | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                              |
    | `CSS_EXS`        | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                              |
    | `CSS_GRAD`       | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Grads. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                      |
    | `CSS_HZ`         | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann mit der Methode getFloatValue abgefragt werden.                                                     |
    | `CSS_IDENT`      | Der Wert ist eine Kennung. Der Wert kann mit der Methode `getStringValue()` abgefragt werden.                                                                                  |
    | `CSS_IN`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                      |
    | `CSS_KHZ`        | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                             |
    | `CSS_MM`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                               |
    | `CSS_MS`         | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                              |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                    |
    | `CSS_PC`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Picas. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                     |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                          |
    | `CSS_PT`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                   |
    | `CSS_PX`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                    |
    | `CSS_RAD`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Radianten. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                  |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}}-Funktion. Der Wert kann mit der Methode `getRectValue()` abgefragt werden.                                         |
    | `CSS_RGBCOLOR`   | Der Wert ist ein {{CSSxRef("&lt;color&gt;")}}. Der Wert kann mit der Methode `getRGBColorValue()` abgefragt werden.                                                            |
    | `CSS_S`          | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann mit der Methode `getFloatValue()` abgefragt werden.                                                   |
    | `CSS_STRING`     | Der Wert ist ein {{CSSxRef("&lt;string&gt;")}}. Der Wert kann mit der Methode `getStringValue()` abgefragt werden.                                                             |
    | `CSS_UNKNOWN`    | Der Wert ist kein anerkannter CSS2-Wert. Der Wert kann nur über das Attribut [`cssText`](/de/docs/Web/API/CSSValue/cssText) abgefragt werden.                                  |
    | `CSS_URI`        | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. Der Wert kann mit der Methode `getStringValue()` abgefragt werden.                                                   |

## Instanz-Methoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den [Counter](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)-Wert abzurufen. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über das [`Counter`](/de/docs/Web/API/Counter)-Interface erreicht werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um einen Gleitkommawert in einer bestimmten Einheit zu erhalten. Wenn dieser CSS-Wert keinen Gleitkommawert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um die RGB-Farbe zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über das [`RGBColor`](/de/docs/Web/API/RGBColor)-Interface erreicht werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Wenn dieser CSS-Wert keinen Rect-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über das [`Rect`](/de/docs/Web/API/Rect)-Interface erreicht werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Wenn der CSS-Wert keinen String-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Methode, um den Gleitkommawert mit einer bestimmten Einheit festzulegen. Wenn die Eigenschaft, die mit diesem Wert verbunden ist, die angegebene Einheit oder den Gleitkommawert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Methode, um den String-Wert mit der angegebenen Einheit festzulegen. Wenn die Eigenschaft, die mit diesem Wert verbunden ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seither aus jeglichem
Standardisierungsbemühen entfernt.

Sie wurde durch eine moderne, aber nicht kompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
