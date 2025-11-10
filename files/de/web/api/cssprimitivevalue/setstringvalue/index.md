---
title: "CSSPrimitiveValue: setStringValue() Methode"
short-title: setStringValue()
slug: Web/API/CSSPrimitiveValue/setStringValue
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`setStringValue()`** Methode der
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um einen String-Wert zu setzen. Wenn die
Eigenschaft, die an diesen Wert gebunden ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der
Wert unverändert und ein [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
setStringValue(stringType, stringValue)
```

### Parameter

- `stringType`

  - : Ein `unsigned short`, der den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante    | Beschreibung                                              |
    | ------------ | --------------------------------------------------------- |
    | `CSS_ATTR`   | Der Wert ist eine {{cssxref("attr", "attr()")}} Funktion. |
    | `CSS_IDENT`  | Der Wert ist ein Bezeichner.                              |
    | `CSS_STRING` | Der Wert ist ein {{cssxref("&lt;string&gt;")}}.           |
    | `CSS_URI`    | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. |

- `stringValue`
  - : Ein String, der den neuen String-Wert darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der CSS-Wert keinen String-Wert enthält
    oder wenn der String-Wert nicht in die angegebene Einheit konvertiert werden kann.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft nur lesbar ist.

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, aber seitdem aus allen Standardisierungsbemühungen gestrichen.

Sie wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
