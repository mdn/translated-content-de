---
title: "CSSPrimitiveValue: setFloatValue()-Methode"
short-title: setFloatValue()
slug: Web/API/CSSPrimitiveValue/setFloatValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`setFloatValue()`**-Methode der {{domxref("CSSPrimitiveValue")}}-Schnittstelle wird verwendet, um einen Fließkommawert festzulegen. Wenn die Eigenschaft, die mit diesem Wert verknüpft ist, die angegebene Einheit oder den Fließkommawert nicht akzeptieren kann, bleibt der Wert unverändert und es wird eine {{domxref("DOMException")}} ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt und als experimentell angesehen wird.

## Syntax

```js-nolint
setFloatValue(unitType, floatValue)
```

### Parameter

- `unitType`

  - : Eine `unsigned short`, die den Code für den Einheitentyp darstellt, in dem der
    Wert zurückgegeben werden soll. Gültige Werte sind:

    | Konstante        | Beschreibung                                                                                                        |
    | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zentimetern.                                                       |
    | `CSS_DEG`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad.                                                               |
    | `CSS_DIMENSION`  | Der Wert ist ein {{cssxref("&lt;number&gt;")}} mit einer unbekannten Dimension.                                      |
    | `CSS_EMS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in em-Einheiten.                                                     |
    | `CSS_EXS`        | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in ex-Einheiten.                                                     |
    | `CSS_GRAD`       | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grads.                                                             |
    | `CSS_HZ`         | Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Hertz. Der Wert kann durch die Verwendung der getFloatValue-Methode abgerufen werden. |
    | `CSS_IN`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zoll.                                                             |
    | `CSS_KHZ`        | Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Kilohertz.                                                   |
    | `CSS_MM`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Millimetern.                                                     |
    | `CSS_MS`         | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Millisekunden.                                                     |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}.                                                          |
    | `CSS_PC`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Picas.                                                           |
    | `CSS_PERCENTAGE` | Der Wert ist ein {{cssxref("&lt;percentage&gt;")}}.                                                               |
    | `CSS_PT`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Punkten.                                                         |
    | `CSS_PX`         | Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Pixeln.                                                          |
    | `CSS_RAD`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radiant.                                                          |
    | `CSS_S`          | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Sekunden.                                                         |

- `floatValue`
  - : Ein `float`, der den neuen Fließkommawert darstellt.

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
        Ein <code>INVALID_ACCESS_ERR</code> wird ausgelöst, wenn der CSS-Wert keinen Fließkommawert enthält oder wenn der Zeichenfolgenwert nicht in die
        angegebene Einheit konvertiert werden kann.<br />Ein NO_MODIFICATION_ALLOWED_ERR wird ausgelöst, wenn diese
        Eigenschaft schreibgeschützt ist.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, ist aber seitdem aus allen
Standardisierungsbemühungen herausgefallen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
