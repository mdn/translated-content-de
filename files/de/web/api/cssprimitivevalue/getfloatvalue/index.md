---
title: "CSSPrimitiveValue: Methode getFloatValue()"
short-title: getFloatValue()
slug: Web/API/CSSPrimitiveValue/getFloatValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getFloatValue()`** Methode des {{domxref("CSSPrimitiveValue")}} Interfaces wird verwendet, um einen Gleitkommawert in einer angegebenen Einheit zu erhalten. Falls dieser CSS-Wert keinen Gleitkommawert enthält oder nicht in die angegebene Einheit umgewandelt werden kann, wird eine {{domxref("DOMException")}} ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Für Ihr Anliegen können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getFloatValue(unit)
```

### Parameter

- `unit`

  - : Ein `unsigned short`, der den Code für den Einheitstyp darstellt, in dem der Wert zurückgegeben werden soll. Gültige Werte sind:

    | Konstante        | Beschreibung                                                                                                                |
    | ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | `CSS_CM`         | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Zentimetern.                                                             |
    | `CSS_DEG`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad.                                                                      |
    | `CSS_DIMENSION`  | Der Wert ist eine {{cssxref("&lt;number&gt;")}} mit unbekannter Dimension.                                                  |
    | `CSS_EMS`        | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Em-Einheiten.                                                            |
    | `CSS_EXS`        | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Ex-Einheiten.                                                            |
    | `CSS_GRAD`       | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Graden.                                                                    |
    | `CSS_HZ`         | Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Hertz. Der Wert kann mit der Methode getFloatValue erhalten werden.   |
    | `CSS_IN`         | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Zoll.                                                                    |
    | `CSS_KHZ`        | Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Kilohertz.                                                            |
    | `CSS_MM`         | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Millimetern.                                                             |
    | `CSS_MS`         | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Millisekunden.                                                             |
    | `CSS_NUMBER`     | Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}.                                                                   |
    | `CSS_PC`         | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Picas.                                                                   |
    | `CSS_PERCENTAGE` | Der Wert ist eine {{cssxref("&lt;percentage&gt;")}}.                                                                        |
    | `CSS_PT`         | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Punkten.                                                                 |
    | `CSS_PX`         | Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Pixel.                                                                   |
    | `CSS_RAD`        | Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radiant.                                                                   |
    | `CSS_S`          | Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Sekunden.                                                                  |

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
        Ein <code>INVALID_ACCESS_ERR</code> wird ausgelöst, wenn der CSS-Wert
        keinen Gleitkommawert enthält oder wenn der Gleitkommawert nicht in die
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

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus jeglichen Standardisierungsbemühungen entfernt.

Sie wurde durch das moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardisierungspfad befindet.

## Kompatibilität der Browser

{{Compat}}
