---
title: "CSSPrimitiveValue: Methode getFloatValue()"
short-title: getFloatValue()
slug: Web/API/CSSPrimitiveValue/getFloatValue
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getFloatValue()`**-Methode des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um einen Float-Wert in einer angegebenen Einheit zu erhalten. Wenn dieser CSS-Wert keinen Float-Wert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde abgebrochen und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getFloatValue(unit)
```

### Parameter

- `unit`

  - : Ein `unsigned short`, der den Code für den Einheitentyp darstellt, in dem der Wert zurückgegeben werden soll. Gültige Werte sind:

    | Konstante        | Beschreibung                                                                                                              |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zentimetern.                                                            |
    | `CSS_DEG`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad.                                                                    |
    | `CSS_DIMENSION`  | Der Wert ist ein {{cssxref("&lt;number&gt;")}} mit einer unbekannten Dimension.                                           |
    | `CSS_EMS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in em-Einheiten.                                                           |
    | `CSS_EXS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in ex-Einheiten.                                                           |
    | `CSS_GRAD`       | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Graden.                                                                  |
    | `CSS_HZ`         | Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Hertz. Der Wert kann mit der getFloatValue-Methode erhalten werden. |
    | `CSS_IN`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zoll.                                                                   |
    | `CSS_KHZ`        | Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Kilohertz.                                                          |
    | `CSS_MM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Millimetern.                                                            |
    | `CSS_MS`         | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Millisekunden.                                                           |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}.                                                                 |
    | `CSS_PC`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Picas.                                                                  |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{cssxref("&lt;percentage&gt;")}}.                                                                       |
    | `CSS_PT`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Punkten.                                                                |
    | `CSS_PX`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Pixeln.                                                                 |
    | `CSS_RAD`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radianten.                                                               |
    | `CSS_S`          | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Sekunden.                                                                |

### Rückgabewert

Ein `float`-Wert in der angegebenen Einheit.

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
        Ein <code>INVALID_ACCESS_ERR</code> wird ausgelöst, wenn der CSS-Wert keinen
        Float-Wert enthält oder wenn der Float-Wert nicht in die
        angegebene Einheit umgewandelt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("margin-top");
console.log(cssValue.getFloatValue(CSSPrimitiveValue.CSS_CM));
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus jeglichen Standardisierungsbemühungen gestrichen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
