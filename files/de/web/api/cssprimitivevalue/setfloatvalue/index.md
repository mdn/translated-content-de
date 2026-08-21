---
title: "CSSPrimitiveValue: setFloatValue() Methode"
short-title: setFloatValue()
slug: Web/API/CSSPrimitiveValue/setFloatValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`setFloatValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um einen Float-Wert festzulegen. Wenn die Eigenschaft, die diesem Wert zugeordnet ist, die angegebene Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und ein [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weit verbreitet unterstützt, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell betrachtet.

## Syntax

```js-nolint
setFloatValue(unitType, floatValue)
```

### Parameter

- `unitType`
  - : Ein `unsigned short`, der den Code für den Einheitentyp darstellt, in dem der Wert zurückgegeben werden soll. Gültige Werte sind:

    | Konstante        | Beschreibung                                                                                                                  |
    | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zentimetern.                                                                |
    | `CSS_DEG`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad.                                                                        |
    | `CSS_DIMENSION`  | Der Wert ist ein {{cssxref("&lt;number&gt;")}} mit einer unbekannten Dimension.                                               |
    | `CSS_EMS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in EM-Einheiten.                                                               |
    | `CSS_EXS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in EX-Einheiten.                                                               |
    | `CSS_GRAD`       | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Gradianten.                                                                  |
    | `CSS_HZ`         | Der Wert ist ein {{cssxref("&lt;frequency&gt;")}} in Hertz. Der Wert kann mithilfe der getFloatValue-Methode erhalten werden. |
    | `CSS_IN`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zoll.                                                                       |
    | `CSS_KHZ`        | Der Wert ist ein {{cssxref("&lt;frequency&gt;")}} in Kilohertz.                                                               |
    | `CSS_MM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Millimetern.                                                                |
    | `CSS_MS`         | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Millisekunden.                                                               |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}.                                                                     |
    | `CSS_PC`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Picas.                                                                      |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{cssxref("&lt;percentage&gt;")}}.                                                                           |
    | `CSS_PT`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Punkten.                                                                    |
    | `CSS_PX`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Pixeln.                                                                     |
    | `CSS_RAD`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radianten.                                                                   |
    | `CSS_S`          | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Sekunden.                                                                    |

- `floatValue`
  - : Ein `float`, der den neuen Float-Wert darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col"><strong>Typ</strong></th>
      <th scope="col"><strong>Beschreibung</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOMException</code></td>
      <td>
        Ein <code>INVALID_ACCESS_ERR</code> wird ausgelöst, wenn der CSS-Wert keinen Float-Wert enthält oder wenn der String-Wert nicht in die angegebene Einheit umgewandelt werden kann.<br />Ein NO_MODIFICATION_ALLOWED_ERR wird ausgelöst, wenn diese Eigenschaft schreibgeschützt ist.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, ist jedoch seitdem aus jeglichen Standardisierungsbemühungen herausgefallen.

Sie wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun im Standardisierungsprozess befindet.

## Browser-Kompatibilität

{{Compat}}
