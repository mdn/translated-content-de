---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`CSSPrimitiveValue`**-Schnittstelle leitet sich von der {{DOMxRef("CSSValue")}}-Schnittstelle ab und repräsentiert den aktuell berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das ungetypte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

Diese Schnittstelle repräsentiert einen einzelnen CSS-Wert. Sie kann verwendet werden, um den Wert einer bestimmten Stileigenschaft zu bestimmen, die aktuell in einem Block gesetzt ist, oder um eine bestimmte Stileigenschaft explizit im Block festzulegen. Eine Instanz dieser Schnittstelle kann mit der Methode {{DOMxRef("CSSStyleDeclaration.getPropertyCSSValue()", "getPropertyCSSValue()")}} der {{DOMxRef("CSSStyleDeclaration")}}-Schnittstelle erhalten werden. Ein `CSSPrimitiveValue`-Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Umwandlungen sind zwischen absoluten Werten (von Millimetern zu Zentimetern, von Grad zu Radiant usw.) erlaubt, jedoch nicht zwischen relativen Werten. (Zum Beispiel kann ein Pixelwert nicht in einen Zentimeterwert umgewandelt werden.) Prozentwerte können nicht umgewandelt werden, da sie relativ zum übergeordneten Wert (oder einem anderen Eigenschaftswert) sind. Es gibt eine Ausnahme für Farbprozentwerte: Da ein Farbprozentwert relativ zum Bereich 0-255 ist, kann ein Farbprozentwert in eine Zahl umgewandelt werden (siehe auch die {{DOMxRef("RGBColor")}}-Schnittstelle).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("CSSValue")}}_.

- {{DOMxRef("CSSPrimitiveValue.primitiveType")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein `unsigned short`, der den Typ des Wertes repräsentiert. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                                  |
    | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}}-Funktion. Der Wert kann mit der Methode `getStringValue()` erhalten werden.                                                   |
    | `CSS_CM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                              |
    | `CSS_COUNTER`    | Der Wert ist eine [counter or counters](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Funktion. Der Wert kann mit der Methode `getCounterValue()` erhalten werden. |
    | `CSS_DEG`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                        |
    | `CSS_DIMENSION`  | Der Wert ist eine {{CSSxRef("&lt;number&gt;")}} mit unbekannter Dimension. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                    |
    | `CSS_EMS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                             |
    | `CSS_EXS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                             |
    | `CSS_GRAD`       | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Gradienten. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                 |
    | `CSS_HZ`         | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann mit der Methode getFloatValue erhalten werden.                                                     |
    | `CSS_IDENT`      | Der Wert ist ein Bezeichner. Der Wert kann mit der Methode `getStringValue()` erhalten werden.                                                                                |
    | `CSS_IN`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                     |
    | `CSS_KHZ`        | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                             |
    | `CSS_MM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                              |
    | `CSS_MS`         | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                              |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                     |
    | `CSS_PC`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Picas. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                     |
    | `CSS_PERCENTAGE` | Der Wert ist eine {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                          |
    | `CSS_PT`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                   |
    | `CSS_PX`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                    |
    | `CSS_RAD`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Radianten. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                   |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}}-Funktion. Der Wert kann mit der Methode `getRectValue()` erhalten werden.                                          |
    | `CSS_RGBCOLOR`   | Der Wert ist eine {{CSSxRef("&lt;color&gt;")}}. Der Wert kann mit der Methode `getRGBColorValue()` erhalten werden.                                                           |
    | `CSS_S`          | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann mit der Methode `getFloatValue()` erhalten werden.                                                    |
    | `CSS_STRING`     | Der Wert ist eine {{CSSxRef("&lt;string&gt;")}}. Der Wert kann mit der Methode `getStringValue()` erhalten werden.                                                             |
    | `CSS_UNKNOWN`    | Der Wert ist kein anerkannter CSS2-Wert. Der Wert kann nur mit dem Attribut {{DOMxRef("CSSValue.cssText", "cssText")}} erhalten werden.                                        |
    | `CSS_URI`        | Der Wert ist eine {{CSSxRef("url", "url()")}}. Der Wert kann mit der Methode `getStringValue()` erhalten werden.                                                               |

## Instanz-Methoden

- {{DOMxRef("CSSPrimitiveValue.getCounterValue()")}} {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den [counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Wert zu erhalten. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine {{DOMxRef("DOMException")}} ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mithilfe der {{DOMxRef("Counter")}}-Schnittstelle erreicht werden.
- {{DOMxRef("CSSPrimitiveValue.getFloatValue()")}} {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um einen Float-Wert in einer angegebenen Einheit zu erhalten. Wenn dieser CSS-Wert keinen Float-Wert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird eine {{DOMxRef("DOMException")}} ausgelöst.
- {{DOMxRef("CSSPrimitiveValue.getRGBColorValue()")}} {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um die RGB-Farbe zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine {{DOMxRef("DOMException")}} ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mithilfe der {{DOMxRef("RGBColor")}}-Schnittstelle erreicht werden.
- {{DOMxRef("CSSPrimitiveValue.getRectValue()")}} {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Wenn dieser CSS-Wert keinen Rect-Wert enthält, wird eine {{DOMxRef("DOMException")}} ausgelöst. Änderungen an der entsprechenden Stileigenschaft können mithilfe der {{DOMxRef("Rect")}}-Schnittstelle erreicht werden.
- {{DOMxRef("CSSPrimitiveValue.getStringValue()")}} {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Wenn der CSS-Wert keinen String-Wert enthält, wird eine {{DOMxRef("DOMException")}} ausgelöst.
- {{DOMxRef("CSSPrimitiveValue.setFloatValue()")}} {{Deprecated_Inline}}
  - : Eine Methode, um den Float-Wert mit einer angegebenen Einheit zu setzen. Wenn die Eigenschaft, die mit diesem Wert verknüpft ist, die angegebene Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine {{DOMxRef("DOMException")}} wird ausgelöst.
- {{DOMxRef("CSSPrimitiveValue.setStringValue()")}} {{Deprecated_Inline}}
  - : Eine Methode, um den String-Wert mit der angegebenen Einheit zu setzen. Wenn die Eigenschaft, die mit diesem Wert verknüpft ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine {{DOMxRef("DOMException")}} wird ausgelöst.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, aber seitdem aus allen Standardisierungsversuchen entfernt.

Es wurde durch das moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("CSSValue")}}
- {{DOMxRef("CSSValueList")}}
