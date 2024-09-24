---
title: "CSSPrimitiveValue: Methode setStringValue()"
short-title: setStringValue()
slug: Web/API/CSSPrimitiveValue/setStringValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`setStringValue()`**-Methode des {{domxref("CSSPrimitiveValue")}}-Interfaces wird verwendet, um einen String-Wert festzulegen. Wenn die Eigenschaft, die mit diesem Wert verbunden ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der Wert unverändert und ein {{domxref("DOMException")}} wird ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
setStringValue(stringType, stringValue)
```

### Parameter

- `stringType`

  - : Ein `unsigned short`, der den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante    | Beschreibung                                                |
    | ------------ | ------------------------------------------------------------ |
    | `CSS_ATTR`   | Der Wert ist eine {{cssxref("attr", "attr()")}}-Funktion.    |
    | `CSS_IDENT`  | Der Wert ist ein Bezeichner.                                 |
    | `CSS_STRING` | Der Wert ist ein {{cssxref("&lt;string&gt;")}}.              |
    | `CSS_URI`    | Der Wert ist eine {{cssxref("url", "url()")}}.               |

- `stringValue`
  - : Ein String, der den neuen String-Wert darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der CSS-Wert keinen String-Wert enthält oder wenn der String-Wert nicht in die angegebene Einheit umgewandelt werden kann.
- `NoModificationAllowedError' {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Eigenschaft schreibgeschützt ist.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, aber seitdem aus jedem Standardisierungsprozess entfernt.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
