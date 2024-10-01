---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`CSSPrimitiveValue`**-Schnittstelle leitet sich von der [`CSSValue`](/de/docs/Web/API/CSSValue)-Schnittstelle ab und repräsentiert den derzeit berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell betrachtet.

Diese Schnittstelle repräsentiert einen einzelnen CSS-Wert. Sie kann verwendet werden, um den Wert einer bestimmten Stileigenschaft, die derzeit in einem Block gesetzt ist, zu bestimmen oder um eine bestimmte Stileigenschaft explizit innerhalb des Blocks zu setzen. Eine Instanz dieser Schnittstelle könnte von der Methode [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) der [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle erhalten werden. Ein `CSSPrimitiveValue`-Objekt tritt nur im Kontext einer CSS-Eigenschaft auf.

Konvertierungen zwischen absoluten Werten (von Millimetern zu Zentimetern, von Grad zu Radiant usw.) sind erlaubt, jedoch nicht zwischen relativen Werten. (Zum Beispiel kann ein Pixelwert nicht in einen Zentimeterwert umgewandelt werden.) Prozentwerte können nicht konvertiert werden, da sie relativ zum übergeordneten Wert (oder einem anderen Eigenschaftswert) sind. Es gibt eine Ausnahme für Farbprozentwerte: Da ein Farbprozentwert sich auf den Bereich 0-255 bezieht, kann ein Farbprozentwert in eine Zahl umgewandelt werden (siehe auch die [`RGBColor`](/de/docs/Web/API/RGBColor)-Schnittstelle).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`CSSValue`](/de/docs/Web/API/CSSValue)_.

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein `unsigned short`, der den Typ des Wertes repräsentiert. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                                       |
    | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}}-Funktion. Der Wert kann durch die `getStringValue()`-Methode erhalten werden.                                                      |
    | `CSS_CM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                 |
    | `CSS_COUNTER`    | Der Wert ist eine [counter- oder counters-](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Funktion. Der Wert kann durch die `getCounterValue()`-Methode erhalten werden. |
    | `CSS_DEG`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grad. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                         |
    | `CSS_DIMENSION`  | Der Wert ist eine {{CSSxRef("&lt;number&gt;")}} mit einer unbekannten Dimension. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                |
    | `CSS_EMS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                |
    | `CSS_EXS`        | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                |
    | `CSS_GRAD`       | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Grads. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                        |
    | `CSS_HZ`         | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Der Wert kann durch die getFloatValue-Methode erhalten werden.                                                        |
    | `CSS_IDENT`      | Der Wert ist ein Bezeichner. Der Wert kann durch die `getStringValue()`-Methode erhalten werden.                                                                                   |
    | `CSS_IN`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Zoll. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                        |
    | `CSS_KHZ`        | Der Wert ist eine {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                |
    | `CSS_MM`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Millimetern. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                 |
    | `CSS_MS`         | Der Wert ist ein {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                  |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{CSSxRef("&lt;number&gt;")}}. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                       |
    | `CSS_PC`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Picas. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                       |
    | `CSS_PERCENTAGE` | Der Wert ist eine {{CSSxRef("&lt;percentage&gt;")}}. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                            |
    | `CSS_PT`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Punkten. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                     |
    | `CSS_PX`         | Der Wert ist eine {{CSSxRef("&lt;length&gt;")}} in Pixeln. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                      |
    | `CSS_RAD`        | Der Wert ist eine {{CSSxRef("&lt;angle&gt;")}} in Radiant. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                      |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}}-Funktion. Der Wert kann durch die `getRectValue()`-Methode erhalten werden.                                            |
    | `CSS_RGBCOLOR`   | Der Wert ist eine {{CSSxRef("&lt;color&gt;")}}. Der Wert kann durch die `getRGBColorValue()`-Methode erhalten werden.                                                              |
    | `CSS_S`          | Der Wert ist ein {{CSSxRef("&lt;time&gt;")}} in Sekunden. Der Wert kann durch die `getFloatValue()`-Methode erhalten werden.                                                       |
    | `CSS_STRING`     | Der Wert ist eine {{CSSxRef("&lt;string&gt;")}}. Der Wert kann durch die `getStringValue()`-Methode erhalten werden.                                                               |
    | `CSS_UNKNOWN`    | Der Wert ist kein erkannter CSS2-Wert. Der Wert kann nur durch das [`cssText`](/de/docs/Web/API/CSSValue/cssText)-Attribut erhalten werden.                                        |
    | `CSS_URI`        | Der Wert ist eine {{CSSxRef("url", "url()")}}. Der Wert kann durch die `getStringValue()`-Methode erhalten werden.                                                                 |

## Instanz-Methoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den [counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Wert zu erhalten. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über die [`Counter`](/de/docs/Web/API/Counter)-Schnittstelle erreicht werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um einen Float-Wert in einer spezifizierten Einheit zu erhalten. Wenn dieser CSS-Wert keinen Float-Wert enthält oder nicht in die spezifizierte Einheit umgewandelt werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den RGB-Farbwert zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können durch die [`RGBColor`](/de/docs/Web/API/RGBColor)-Schnittstelle erreicht werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den Rect-Wert zu erhalten. Wenn dieser CSS-Wert keinen Rect-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können durch die [`Rect`](/de/docs/Web/API/Rect)-Schnittstelle erreicht werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}}
  - : Diese Methode wird verwendet, um den String-Wert zu erhalten. Wenn der CSS-Wert keinen String-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}}
  - : Eine Methode, um den Float-Wert mit einer angegebenen Einheit zu setzen. Wenn die mit diesem Wert verbundene Eigenschaft die angegebene Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}}
  - : Eine Methode, um den String-Wert mit der angegebenen Einheit zu setzen. Wenn die mit diesem Wert verbundene Eigenschaft die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, aber seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber inkompatibles, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
