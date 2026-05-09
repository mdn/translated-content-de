---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Das **`CSSPrimitiveValue`** Interface leitet sich vom [`CSSValue`](/de/docs/Web/API/CSSValue) Interface ab und repräsentiert den aktuell berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Dieses Interface war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt und als experimentell angesehen wird.

Dieses Interface repräsentiert einen einzelnen CSS-Wert. Es kann verwendet werden, um den Wert einer spezifischen Stil-Eigenschaft zu bestimmen, die derzeit in einem Block gesetzt ist, oder um eine spezifische Stil-Eigenschaft explizit innerhalb des Blocks zu setzen. Eine Instanz dieses Interfaces könnte mittels der Methode [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Interfaces erhalten werden. Ein `CSSPrimitiveValue` Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Konvertierungen sind zwischen absoluten Werten erlaubt (von Millimetern zu Zentimetern, von Grad zu Radiant usw.), aber nicht zwischen relativen Werten. (Ein Pixelwert kann beispielsweise nicht in einen Zentimeterwert konvertiert werden.) Prozentwerte können nicht konvertiert werden, da sie relativ zum übergeordneten Wert (oder einem anderen Eigenschaftswert) sind. Eine Ausnahme besteht für Farbprozentwerte: Da ein Farbprozentwert relativ zum Bereich 0-255 ist, kann ein Farbprozentwert in eine Zahl umgewandelt werden (siehe auch das [`RGBColor`](/de/docs/Web/API/RGBColor) Interface).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned short`, der den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                                    |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}} Funktion. Der Wert kann durch die Methode `getStringValue()` erhalten werden.                                                   |
    | `CSS_CM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                              |
    | `CSS_COUNTER`    | Der Wert ist eine [counter oder counters](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Funktion. Der Wert kann durch die Methode `getCounterValue()` erhalten werden. |
    | `CSS_DEG`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                      |
    | `CSS_DIMENSION`  | Der Wert ist eine {{CSSxRef("&lt;number&gt;")}} mit einer unbekannten Dimension. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                             |
    | `CSS_EMS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                             |
    | `CSS_EXS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                             |
    | `CSS_GRAD`       | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grads. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                     |
    | `CSS_HZ`         | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                 |
    | `CSS_IDENT`      | Der Wert ist ein Bezeichner. Der Wert kann durch die Methode `getStringValue()` erhalten werden.                                                                                |
    | `CSS_IN`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                     |
    | `CSS_KHZ`        | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                             |
    | `CSS_MM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                              |
    | `CSS_MS`         | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                              |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                    |
    | `CSS_PC`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Picas. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                    |
    | `CSS_PERCENTAGE` | Der Wert ist eine {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                         |
    | `CSS_PT`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                  |
    | `CSS_PX`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                   |
    | `CSS_RAD`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Rad. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                       |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}} Funktion. Der Wert kann durch die Methode `getRectValue()` erhalten werden.                                         |
    | `CSS_RGBCOLOR`   | Der Wert ist eine {{CSSxRef("&lt;color&gt;")}}. Der Wert kann durch die Methode `getRGBColorValue()` erhalten werden.                                                           |
    | `CSS_S`          | Der Wert ist eine {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann durch die Methode `getFloatValue()` erhalten werden.                                                   |
    | `CSS_STRING`     | Der Wert ist eine {{CSSxRef("&lt;string&gt;")}}. Der Wert kann durch die Methode `getStringValue()` erhalten werden.                                                            |
    | `CSS_UNKNOWN`    | Der Wert ist kein erkannter CSS2-Wert. Der Wert kann nur durch das Attribut [`cssText`](/de/docs/Web/API/CSSValue/cssText) erhalten werden.                                     |
    | `CSS_URI`        | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. Der Wert kann durch die Methode `getStringValue()` erhalten werden.                                                   |

## Instanz-Methoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den [counter](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Wert zu erhalten. Falls dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Eine Modifikation der entsprechenden Stil-Eigenschaft kann mittels des [`Counter`](/de/docs/Web/API/Counter) Interfaces erreicht werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um einen Float-Wert in einer spezifizierten Einheit zu erhalten. Falls dieser CSS-Wert keinen Float-Wert enthält oder nicht in die spezifizierte Einheit konvertiert werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den RGB-Farbwert zu erhalten. Falls dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Eine Modifikation der entsprechenden Stil-Eigenschaft kann mittels des [`RGBColor`](/de/docs/Web/API/RGBColor) Interfaces erreicht werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Falls dieser CSS-Wert keinen Rect-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Eine Modifikation der entsprechenden Stil-Eigenschaft kann mittels des [`Rect`](/de/docs/Web/API/Rect) Interfaces erreicht werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Falls der CSS-Wert keinen String-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Methode, um den Float-Wert mit einer spezifizierten Einheit zu setzen. Falls die mit diesem Wert verknüpfte Eigenschaft die spezifizierte Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Methode, um den String-Wert mit der spezifizierten Einheit zu setzen. Falls die mit diesem Wert verknüpfte Eigenschaft die spezifizierte Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, ist aber seitdem aus jeglichen Standardisierungsbemühungen entfernt worden.

Es wurde durch ein modernes, aber inkompatibles, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
