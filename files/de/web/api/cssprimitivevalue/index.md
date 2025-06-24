---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Das **`CSSPrimitiveValue`** Interface leitet sich vom [`CSSValue`](/de/docs/Web/API/CSSValue) Interface ab und repräsentiert den aktuell berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), welches weniger unterstützt wird und als experimentell gilt.

Dieses Interface repräsentiert einen einzelnen CSS-Wert. Es kann verwendet werden, um den Wert einer bestimmten Stileigenschaft zu bestimmen, die derzeit in einem Block festgelegt ist, oder um eine bestimmte Stileigenschaft explizit innerhalb des Blocks festzulegen. Eine Instanz dieses Interfaces kann von der Methode [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Interface erhalten werden. Ein `CSSPrimitiveValue` Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Umwandlungen sind zwischen absoluten Werten erlaubt (von Millimetern zu Zentimetern, von Grad zu Radiant etc.), jedoch nicht zwischen relativen Werten. (Zum Beispiel kann ein Pixelwert nicht in einen Zentimeterwert umgewandelt werden.) Prozentwerte können nicht umgewandelt werden, da sie relativ zum übergeordneten Wert (oder einem anderen Eigenschaftenwert) sind. Es gibt eine Ausnahme für Prozentwerte bei Farben: Da ein Prozentwert bei Farben relativ zum Bereich 0-255 ist, kann ein Farbprozentsatz in eine Zahl umgewandelt werden (siehe auch das Interface [`RGBColor`](/de/docs/Web/API/RGBColor)).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein `unsigned short`, der den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                                      |
    | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}} Funktion. Der Wert kann durch die Methode `getStringValue()` abgerufen werden.                                                    |
    | `CSS_CM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                               |
    | `CSS_COUNTER`    | Der Wert ist eine [counter oder counters](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Funktion. Der Wert kann durch die Methode `getCounterValue()` abgerufen werden. |
    | `CSS_DEG`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                       |
    | `CSS_DIMENSION`  | Der Wert ist eine {{CSSxRef("&lt;number&gt;")}} mit unbekannter Dimension. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                    |
    | `CSS_EMS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                              |
    | `CSS_EXS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                              |
    | `CSS_GRAD`       | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Graden. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_HZ`         | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                  |
    | `CSS_IDENT`      | Der Wert ist ein Bezeichner. Der Wert kann durch die Methode `getStringValue()` abgerufen werden.                                                                                 |
    | `CSS_IN`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                      |
    | `CSS_KHZ`        | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                              |
    | `CSS_MM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                               |
    | `CSS_MS`         | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                               |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_PC`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Picas. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_PERCENTAGE` | Der Wert ist eine {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                          |
    | `CSS_PT`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                   |
    | `CSS_PX`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                    |
    | `CSS_RAD`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Radiant. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                    |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}} Funktion. Der Wert kann durch die Methode `getRectValue()` abgerufen werden.                                          |
    | `CSS_RGBCOLOR`   | Der Wert ist eine {{CSSxRef("&lt;color&gt;")}}. Der Wert kann durch die Methode `getRGBColorValue()` abgerufen werden.                                                            |
    | `CSS_S`          | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann durch die Methode `getFloatValue()` abgerufen werden.                                                    |
    | `CSS_STRING`     | Der Wert ist eine {{CSSxRef("&lt;string&gt;")}}. Der Wert kann durch die Methode `getStringValue()` abgerufen werden.                                                             |
    | `CSS_UNKNOWN`    | Der Wert ist kein anerkannter CSS2-Wert. Der Wert kann nur über das Attribut [`cssText`](/de/docs/Web/API/CSSValue/cssText) abgerufen werden.                                     |
    | `CSS_URI`        | Der Wert ist eine {{cssxref("url_value", "&lt;url&gt;")}}. Der Wert kann durch die Methode `getStringValue()` abgerufen werden.                                                   |

## Instanzmethoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den [counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Wert zu erhalten. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über das Interface [`Counter`](/de/docs/Web/API/Counter) vorgenommen werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um einen Float-Wert in einer angegebenen Einheit zu erhalten. Wenn dieser CSS-Wert keinen Float-Wert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den RGB-Farbwert zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über das Interface [`RGBColor`](/de/docs/Web/API/RGBColor) vorgenommen werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Wenn dieser CSS-Wert keinen Rect-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über das Interface [`Rect`](/de/docs/Web/API/Rect) vorgenommen werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Wenn der CSS-Wert keinen String-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}}
  - : Eine Methode, um den Float-Wert mit einer angegebenen Einheit festzulegen. Wenn die Eigenschaft, die mit diesem Wert verknüpft ist, die angegebene Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}}
  - : Eine Methode, um den String-Wert mit der angegebenen Einheit festzulegen. Wenn die Eigenschaft, die mit diesem Wert verknüpft ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Spezifikationen

Diese Funktion wurde ursprünglich in der Spezifikation [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) definiert, wurde jedoch seitdem aus jedem Standardisierungsbemühen herausgenommen.

Sie wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
