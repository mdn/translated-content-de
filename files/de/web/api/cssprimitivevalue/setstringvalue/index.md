---
title: "CSSPrimitiveValue: setStringValue()-Methode"
short-title: setStringValue()
slug: Web/API/CSSPrimitiveValue/setStringValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`setStringValue()`**-Methode des
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um einen String-Wert festzulegen. Wenn die
Eigenschaft, die an diesen Wert gebunden ist, die angegebene Einheit oder den String-Wert nicht akzeptieren kann, bleibt der
Wert unverändert und es wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weit verbreitet unterstützt, oder
> - das modernere [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Syntax

```js-nolint
setStringValue(stringType, stringValue)
```

### Parameter

- `stringType`

  - : Ein `unsigned short`, das den Typ des Wertes darstellt. Mögliche Werte sind:

    | Konstante    | Beschreibung                                              |
    | ------------ | --------------------------------------------------------- |
    | `CSS_ATTR`   | Der Wert ist eine {{cssxref("attr", "attr()")}}-Funktion. |
    | `CSS_IDENT`  | Der Wert ist ein Bezeichner.                              |
    | `CSS_STRING` | Der Wert ist ein {{cssxref("&lt;string&gt;")}}.           |
    | `CSS_URI`    | Der Wert ist eine {{cssxref("url", "url()")}}.            |

- `stringValue`
  - : Ein String, der den neuen String-Wert darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der CSS-Wert keinen String-Wert enthält
    oder wenn der String-Wert nicht in die angegebene Einheit konvertiert werden kann.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft schreibgeschützt ist.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, ist jedoch seitdem aus jedem Standardisierungsbestreben herausgefallen.

Es wurde durch ein modernes, jedoch inkompatibles, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das jetzt auf dem Standardpfad ist.

## Browser-Kompatibilität

{{Compat}}
