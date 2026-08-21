---
title: "CSSPrimitiveValue: primitiveType Eigenschaft"
short-title: primitiveType
slug: Web/API/CSSPrimitiveValue/primitiveType
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`primitiveType`** schreibgeschützte Eigenschaft des
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces repräsentiert den Typ eines CSS-Werts.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das nicht typisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Wert

Ein `unsigned short`, das den Typ des Wertes darstellt. Mögliche Werte sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CSS_ATTR</code></td>
      <td>
        Der Wert ist eine {{cssxref("attr", "attr()")}}-Funktion. Der Wert kann durch die Methode <code>getStringValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_CM</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Zentimetern. Der Wert kann durch die
        Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_COUNTER</code></td>
      <td>
        Der Wert ist eine
        <a href="/de/docs/Web/CSS/Guides/Counter_styles/Using_counters">
          Counter- oder Counters-Funktion</a>.
        Der Wert kann durch die Methode <code>getCounterValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_DEG</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_DIMENSION</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;number&gt;")}} mit einer unbekannten Dimension. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_EMS</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Em-Einheiten. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_EXS</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Ex-Einheiten. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_GRAD</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_HZ</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Hertz. Der Wert kann durch die Methode getFloatValue erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_IDENT</code></td>
      <td>
        Der Wert ist ein Bezeichner. Der Wert kann durch die Methode <code>getStringValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_IN</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Zoll. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_KHZ</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Kilohertz. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_MM</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Millimetern. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_MS</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Millisekunden. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_NUMBER</code></td>
      <td>
        Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PC</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Picas. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PERCENTAGE</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;percentage&gt;")}}. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PT</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Punkten. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PX</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;length&gt;")}} in Pixeln. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RAD</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radianten. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RECT</code></td>
      <td>
        Der Wert ist eine {{cssxref("shape", "rect()", "#Syntax")}}-Funktion. Der Wert kann durch die Methode <code>getRectValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RGBCOLOR</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;color&gt;")}}. Der Wert kann durch die Methode <code>getRGBColorValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_S</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Sekunden. Der Wert kann durch die Methode <code>getFloatValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_STRING</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;string&gt;")}}. Der Wert kann durch die Methode <code>getStringValue()</code> erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_UNKNOWN</code></td>
      <td>
        Der Wert ist kein erkennbarer CSS2-Wert. Der Wert kann nur durch das Attribut [`cssText`](/de/docs/Web/API/CSSValue/cssText) erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_URI</code></td>
      <td>
        Der Wert ist ein {{cssxref("url_value", "&lt;url&gt;")}}. Der Wert kann durch die Methode <code>getStringValue()</code> erhalten werden.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.primitiveType);
```

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, ist aber seither aus jedem Standardisierungsversuch entfernt worden.

Es wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standard-Pfad befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue)
