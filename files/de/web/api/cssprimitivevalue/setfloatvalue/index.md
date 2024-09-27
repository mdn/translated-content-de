---
title: "CSSPrimitiveValue: setFloatValue() Methode"
short-title: setFloatValue()
slug: Web/API/CSSPrimitiveValue/setFloatValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`setFloatValue()`** Methode der
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um einen Float-Wert festzulegen. Wenn die Eigenschaft,
die diesem Wert zugeordnet ist, die angegebene Einheit oder den Float-Wert nicht akzeptieren kann, bleibt der Wert unverändert und eine [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
setFloatValue(unitType, floatValue)
```

### Parameter

- `unitType`

  - : Ein `unsigned short`, das den Code für den Einheitstyp darstellt, in dem der
    Wert zurückgegeben werden soll. Gültige Werte sind:

    | Konstante        | Beschreibung                                                                                                             |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
    | `CSS_CM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zentimetern.                                                           |
    | `CSS_DEG`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad.                                                                   |
    | `CSS_DIMENSION`  | Der Wert ist ein {{cssxref("&lt;number&gt;")}} mit einer unbekannten Dimension.                                          |
    | `CSS_EMS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in em-Einheiten.                                                          |
    | `CSS_EXS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in ex-Einheiten.                                                          |
    | `CSS_GRAD`       | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Graden.                                                                 |
    | `CSS_HZ`         | Der Wert ist ein {{cssxref("&lt;frequency&gt;")}} in Hertz. Der Wert kann mit der getFloatValue-Methode erhalten werden. |
    | `CSS_IN`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zoll.                                                                  |
    | `CSS_KHZ`        | Der Wert ist ein {{cssxref("&lt;frequency&gt;")}} in Kilohertz.                                                          |
    | `CSS_MM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Millimetern.                                                           |
    | `CSS_MS`         | Der Wert ist ein {{cssxref("&lt;time&gt;")}} in Millisekunden.                                                           |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}.                                                                |
    | `CSS_PC`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Picas.                                                                 |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{cssxref("&lt;percentage&gt;")}}.                                                                      |
    | `CSS_PT`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Punkten.                                                               |
    | `CSS_PX`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Pixeln.                                                                |
    | `CSS_RAD`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radianten.                                                              |
    | `CSS_S`          | Der Wert ist ein {{cssxref("&lt;time&gt;")}} in Sekunden.                                                                |

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
        Ein <code>INVALID_ACCESS_ERR</code> wird ausgelöst, wenn der CSS-Wert keinen
        Float-Wert enthält oder wenn der Zeichenfolgewert nicht in die
        angegebene Einheit umgewandelt werden kann.<br />Ein NO_MODIFICATION_ALLOWED_ERR wird ausgelöst, wenn diese
        Eigenschaft schreibgeschützt ist.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, aber seitdem aus jedem
Standardisierungsprozess gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das nun auf dem Standardtrack ist.

## Browser-Kompatibilität

{{Compat}}
