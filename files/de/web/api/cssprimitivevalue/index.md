---
title: CSSPrimitiveValue
slug: Web/API/CSSPrimitiveValue
l10n:
  sourceCommit: a3400c39a245e0404c621c2cdbe75ad0a3eb8672
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die Schnittstelle **`CSSPrimitiveValue`** leitet sich von der Schnittstelle [`CSSValue`](/de/docs/Web/API/CSSValue) ab und repräsentiert den aktuellen berechneten Wert einer CSS-Eigenschaft.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS Object Model zu schaffen. Dieser Ansatz wurde aufgegeben und wird von den meisten Browsern nicht implementiert.
>
> Stattdessen können Sie Folgendes verwenden:
>
> - das nicht typisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weithin unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger breit unterstützt wird und als experimentell gilt.

Diese Schnittstelle repräsentiert einen einzelnen CSS-Wert. Mit ihr lässt sich der Wert einer bestimmten, aktuell in einem Block festgelegten Style-Eigenschaft ermitteln oder eine bestimmte Style-Eigenschaft innerhalb des Blocks explizit festlegen. Eine Instanz dieser Schnittstelle kann über die Methode [`getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) der Schnittstelle [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) abgerufen werden. Ein `CSSPrimitiveValue`-Objekt kommt nur im Kontext einer CSS-Eigenschaft vor.

Konvertierungen sind zwischen absoluten Werten möglich (etwa von Millimetern in Zentimeter oder von Grad in Radiant), nicht jedoch zwischen relativen Werten. Ein Pixelwert kann beispielsweise nicht in einen Zentimeterwert umgerechnet werden. Prozentwerte können nicht konvertiert werden, da sie sich auf den übergeordneten Wert (oder den Wert einer anderen Eigenschaft) beziehen. Eine Ausnahme bilden Farbprozentwerte: Da sich ein Farbprozentwert auf den Bereich von 0 bis 255 bezieht, kann er in eine Zahl umgewandelt werden (siehe auch die Schnittstelle [`RGBColor`](/de/docs/Web/API/RGBColor)).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`CSSValue`](/de/docs/Web/API/CSSValue)._

- [`CSSPrimitiveValue.primitiveType`](/de/docs/Web/API/CSSPrimitiveValue/primitiveType) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein `unsigned short`, der den Typ des Werts angibt. Mögliche Werte sind:

    | Konstante        | Beschreibung                                                                                                                                                              |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_ATTR`       | Der Wert ist eine {{CSSxRef("attr", "attr()")}}-Funktion. Er kann mit der Methode `getStringValue()` abgerufen werden.                                                    |
    | `CSS_CM`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Zentimetern. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                |
    | `CSS_COUNTER`    | Der Wert ist eine [counter- oder counters](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)-Funktion. Er kann mit der Methode `getCounterValue()` abgerufen werden. |
    | `CSS_DEG`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Grad. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                        |
    | `CSS_DIMENSION`  | Der Wert ist ein {{CSSxRef("&lt;number&gt;")}} mit unbekannter Dimension. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                     |
    | `CSS_EMS`        | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in em-Einheiten. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                               |
    | `CSS_EXS`        | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in ex-Einheiten. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                               |
    | `CSS_GRAD`       | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Gon. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                         |
    | `CSS_HZ`         | Der Wert ist ein {{CSSxRef("&lt;frequency&gt;")}} in Hertz. Er kann mit der Methode getFloatValue abgerufen werden.                                                       |
    | `CSS_IDENT`      | Der Wert ist ein Bezeichner. Er kann mit der Methode `getStringValue()` abgerufen werden.                                                                                 |
    | `CSS_IN`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Zoll. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                       |
    | `CSS_KHZ`        | Der Wert ist ein {{CSSxRef("&lt;frequency&gt;")}} in Kilohertz. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                               |
    | `CSS_MM`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Millimetern. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                |
    | `CSS_MS`         | Der Wert ist ein {{CSSxRef("&lt;time&gt;")}} in Millisekunden. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                |
    | `CSS_NUMBER`     | Der Wert ist ein einfaches {{CSSxRef("&lt;number&gt;")}}. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_PC`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Pica. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                       |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{CSSxRef("&lt;percentage&gt;")}}. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                           |
    | `CSS_PT`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Punkt. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                      |
    | `CSS_PX`         | Der Wert ist ein {{CSSxRef("&lt;length&gt;")}} in Pixeln. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_RAD`        | Der Wert ist ein {{CSSxRef("&lt;angle&gt;")}} in Radiant. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_RECT`       | Der Wert ist eine {{CSSxRef("shape", "rect()", "#Syntax")}}-Funktion. Er kann mit der Methode `getRectValue()` abgerufen werden.                                          |
    | `CSS_RGBCOLOR`   | Der Wert ist ein {{CSSxRef("&lt;color&gt;")}}. Er kann mit der Methode `getRGBColorValue()` abgerufen werden.                                                             |
    | `CSS_S`          | Der Wert ist ein {{CSSxRef("&lt;time&gt;")}} in Sekunden. Er kann mit der Methode `getFloatValue()` abgerufen werden.                                                     |
    | `CSS_STRING`     | Der Wert ist ein {{CSSxRef("&lt;string&gt;")}}. Er kann mit der Methode `getStringValue()` abgerufen werden.                                                              |
    | `CSS_UNKNOWN`    | Der Wert ist kein erkannter CSS2-Wert. Er kann nur über das Attribut [`cssText`](/de/docs/Web/API/CSSValue/cssText) abgerufen werden.                                     |
    | `CSS_URI`        | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. Er kann mit der Methode `getStringValue()` abgerufen werden.                                                    |

## Instanzmethoden

- [`CSSPrimitiveValue.getCounterValue()`](/de/docs/Web/API/CSSPrimitiveValue/getCounterValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode ruft den [counter](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)-Wert ab. Enthält dieser CSS-Wert keinen counter-Wert, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Die entsprechende Style-Eigenschaft kann über die Schnittstelle [`Counter`](/de/docs/Web/API/Counter) geändert werden.
- [`CSSPrimitiveValue.getFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/getFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode ruft einen Gleitkommawert in einer angegebenen Einheit ab. Enthält dieser CSS-Wert keinen Gleitkommawert oder kann er nicht in die angegebene Einheit umgerechnet werden, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.getRGBColorValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRGBColorValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode ruft die RGB-Farbe ab. Enthält dieser CSS-Wert keinen RGB-Farbwert, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Die entsprechende Style-Eigenschaft kann über die Schnittstelle [`RGBColor`](/de/docs/Web/API/RGBColor) geändert werden.
- [`CSSPrimitiveValue.getRectValue()`](/de/docs/Web/API/CSSPrimitiveValue/getRectValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode ruft den Rect-Wert ab. Enthält dieser CSS-Wert keinen rect-Wert, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Die entsprechende Style-Eigenschaft kann über die Schnittstelle [`Rect`](/de/docs/Web/API/Rect) geändert werden.
- [`CSSPrimitiveValue.getStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/getStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode ruft den String-Wert ab. Enthält der CSS-Wert keinen String-Wert, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`CSSPrimitiveValue.setFloatValue()`](/de/docs/Web/API/CSSPrimitiveValue/setFloatValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode setzt den Gleitkommawert mit einer angegebenen Einheit. Wenn die mit diesem Wert verknüpfte Eigenschaft die angegebene Einheit oder den Gleitkommawert nicht akzeptiert, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.
- [`CSSPrimitiveValue.setStringValue()`](/de/docs/Web/API/CSSPrimitiveValue/setStringValue) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Diese Methode setzt den String-Wert mit der angegebenen Einheit. Wenn die mit diesem Wert verknüpfte Eigenschaft die angegebene Einheit oder den String-Wert nicht akzeptiert, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Spezifikationen

Dieses Feature wurde ursprünglich in der Spezifikation [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) definiert, ist seitdem jedoch aus allen Standardisierungsbemühungen herausgenommen worden.

Es wurde durch die moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) abgelöst, die sich nun im Standardisierungsprozess befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSValue`](/de/docs/Web/API/CSSValue)
- [`CSSValueList`](/de/docs/Web/API/CSSValueList)
