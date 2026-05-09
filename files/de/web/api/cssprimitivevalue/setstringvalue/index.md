---
title: "CSSPrimitiveValue: Methode setStringValue()"
short-title: setStringValue()
slug: Web/API/CSSPrimitiveValue/setStringValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Die **`setStringValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um einen Zeichenfolgenwert festzulegen. Wenn die Eigenschaft, die mit diesem Wert verbunden ist, die angegebene Einheit oder den Zeichenfolgenwert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Syntax

```js-nolint
setStringValue(stringType, stringValue)
```

### Parameter

- `stringType`
  - : Ein `unsigned short`, der den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante    | Beschreibung                                              |
    | ------------ | --------------------------------------------------------- |
    | `CSS_ATTR`   | Der Wert ist eine {{cssxref("attr", "attr()")}}-Funktion. |
    | `CSS_IDENT`  | Der Wert ist ein Bezeichner.                              |
    | `CSS_STRING` | Der Wert ist eine {{cssxref("&lt;string&gt;")}}.          |
    | `CSS_URI`    | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. |

- `stringValue`
  - : Eine Zeichenfolge, die den neuen Zeichenfolgenwert darstellt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der CSS-Wert keinen Zeichenfolgenwert enthält oder der Zeichenfolgenwert nicht in die angegebene Einheit umgewandelt werden kann.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft schreibgeschützt ist.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seither aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
