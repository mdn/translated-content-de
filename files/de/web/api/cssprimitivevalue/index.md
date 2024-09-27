---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`CSSPrimitiveValue`**-Schnittstelle leitet sich von der [`CSSValue`](/de/docs/Web/API/CSSValue)-Schnittstelle ab und repräsentiert den aktuell berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt und als experimentell angesehen wird.

Diese Schnittstelle repräsentiert einen einzelnen CSS-Wert. Sie kann verwendet werden, um den Wert einer bestimmten Stileigenschaft, die derzeit in einem Block gesetzt ist, zu bestimmen oder um eine bestimmte Stileigenschaft explizit innerhalb des Blocks zu setzen. Eine Instanz dieser Schnittstelle kann über die [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue)-Methode der [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle erhalten werden. Ein `CSSPrimitiveValue`-Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Konvertierungen sind zwischen absoluten Werten erlaubt (von Millimetern zu Zentimetern, von Grad zu Radianten usw.), jedoch nicht zwischen relativen Werten. (Zum Beispiel kann ein Pixelwert nicht in einen Zentimeterwert umgewandelt werden.) Prozentwerte können nicht konvertiert werden, da sie relativ zum übergeordneten Wert (oder einem anderen Eigenschaftswert) sind. Es gibt eine Ausnahme für Farbprozentwerte: Da ein Farbprozentwert relativ zum Bereich 0-255 ist, kann ein Farbprozentwert in eine Zahl umgewandelt werden (siehe auch die [`RGBColor`](/de/docs/Web/API/RGBColor)-Schnittstelle).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein `unsigned short`, der den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                                    |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}} Funktion. Der Wert kann mit der `getStringValue()`-Methode abgerufen werden.                                                    |
    | `CSS_CM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                               |
    | `CSS_COUNTER`    | Der Wert ist eine [counter oder counters](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Funktion. Der Wert kann mit der `getCounterValue()`-Methode abgerufen werden. |
    | `CSS_DEG`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                       |
    | `CSS_DIMENSION`  | Der Wert ist eine {{CSSxRef("&lt;number&gt;")}} mit einer unbekannten Dimension. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                              |
    | `CSS_EMS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                              |
    | `CSS_EXS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                              |
    | `CSS_GRAD`       | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grads. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                      |
    | `CSS_HZ`         | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann mit der getFloatValue-Methode abgerufen werden.                                                      |
    | `CSS_IDENT`      | Der Wert ist ein Identifikator. Der Wert kann mit der `getStringValue()`-Methode abgerufen werden.                                                                              |
    | `CSS_IN`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                      |
    | `CSS_KHZ`        | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                              |
    | `CSS_MM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                               |
    | `CSS_MS`         | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                               |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                     |
    | `CSS_PC`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Picas. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                     |
    | `CSS_PERCENTAGE` | Der Wert ist eine {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                          |
    | `CSS_PT`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                   |
    | `CSS_PX`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                    |
    | `CSS_RAD`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Radianten. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                  |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}} Funktion. Der Wert kann mit der `getRectValue()`-Methode abgerufen werden.                                          |
    | `CSS_RGBCOLOR`   | Der Wert ist eine {{CSSxRef("&lt;color&gt;")}}. Der Wert kann mit der `getRGBColorValue()`-Methode abgerufen werden.                                                            |
    | `CSS_S`          | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann mit der `getFloatValue()`-Methode abgerufen werden.                                                    |
    | `CSS_STRING`     | Der Wert ist eine {{CSSxRef("&lt;string&gt;")}}. Der Wert kann mit der `getStringValue()`-Methode abgerufen werden.                                                             |
    | `CSS_UNKNOWN`    | Der Wert ist kein anerkannter CSS2-Wert. Der Wert kann nur über das [`cssText`](/de/docs/Web/API/CSSValue/cssText)-Attribut abgerufen werden.                                   |
    | `CSS_URI`        | Der Wert ist eine {{CSSxRef("url", "url()")}}. Der Wert kann mit der `getStringValue()`-Methode abgerufen werden.                                                               |

## Instanz-Methoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den [counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Wert zu erhalten. Wenn dieser CSS-Wert keinen Zählerwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mit der [`Counter`](/de/docs/Web/API/Counter)-Schnittstelle erreicht werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um einen Gleitkommawert in einer angegebenen Einheit zu erhalten. Wenn dieser CSS-Wert keinen Gleitkommawert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um die RGB-Farbe zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mit der [`RGBColor`](/de/docs/Web/API/RGBColor)-Schnittstelle erreicht werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Wenn dieser CSS-Wert keinen Rect-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mit der [`Rect`](/de/docs/Web/API/Rect)-Schnittstelle erreicht werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Wenn der CSS-Wert keinen String-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}}
  - : Eine Methode, um den Gleitkommawert mit einer angegebenen Einheit festzulegen. Wenn die Eigenschaft, die mit diesem Wert verbunden ist, die angegebene Einheit oder den Gleitkommawert nicht akzeptieren kann, bleibt der Wert unverändert und es wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}}
  - : Eine Methode, um den String-Wert mit der angegebenen Einheit festzulegen. Wenn die Eigenschaft, die mit diesem Wert verbunden ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und es wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardtrack befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
