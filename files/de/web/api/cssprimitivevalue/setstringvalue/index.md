---
title: "CSSPrimitiveValue: setStringValue() Methode"
short-title: setStringValue()
slug: Web/API/CSSPrimitiveValue/setStringValue
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`setStringValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um einen Zeichenfolgenwert festzulegen. Wenn die Eigenschaft, die an diesen Wert gebunden ist, die angegebene Einheit oder den Zeichenfolgenwert nicht akzeptieren kann, bleibt der Wert unverändert und es wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt und als experimentell angesehen wird.

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
    | `CSS_IDENT`  | Der Wert ist ein Identifikator.                           |
    | `CSS_STRING` | Der Wert ist eine {{cssxref("&lt;string&gt;")}}.          |
    | `CSS_URI`    | Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. |

- `stringValue`
  - : Eine Zeichenfolge, die den neuen Zeichenfolgenwert darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der CSS-Wert keinen Zeichenfolgenwert enthält oder wenn der Zeichenfolgenwert nicht in die angegebene Einheit umgewandelt werden kann.
- `NoModificationAllowedError' [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft schreibgeschützt ist.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jedem Standardisierungsbemühen gestrichen.

Es wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) abgelöst, die sich nun im Standardisierungsprozess befindet.

## Browser-Kompatibilität

{{Compat}}
