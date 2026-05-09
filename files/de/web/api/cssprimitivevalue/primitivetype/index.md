---
title: "CSSPrimitiveValue: primitiveType Eigenschaft"
short-title: primitiveType
slug: Web/API/CSSPrimitiveValue/primitiveType
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Die **`primitiveType`** schreibgeschützte Eigenschaft des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle repräsentiert den Typ eines CSS-Werts.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weit verbreitet unterstützt, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Wert

Ein `unsigned short`, der den Typ des Werts darstellt. Mögliche Werte sind:

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
        Der Wert ist eine {{cssxref("attr", "attr()")}} Funktion. Der Wert kann
        mit der <code>getStringValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_CM</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zentimetern.
        Der Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_COUNTER</code></td>
      <td>
        Der Wert ist eine <a href="/de/docs/Web/CSS/Guides/Counter_styles/Using_counters">counter oder counters</a> Funktion. Der Wert kann mit der
        <code>getCounterValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_DEG</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grad. Der Wert
        kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_DIMENSION</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;number&gt;")}} mit einer unbekannten
        Dimension. Der Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_EMS</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in em-Einheiten. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_EXS</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in ex-Einheiten. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_GRAD</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Grads. Der Wert
        kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_HZ</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in Hertz.
        Der Wert kann mit der getFloatValue Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_IDENT</code></td>
      <td>
        Der Wert ist ein Bezeichner. Der Wert kann mit der
        <code>getStringValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_IN</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Zoll. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_KHZ</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;frequency&gt;")}} in
        Kilohertz. Der Wert kann mit der
        <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_MM</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Millimetern.
        Der Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_MS</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Millisekunden. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_NUMBER</code></td>
      <td>
        Der Wert ist eine einfache {{cssxref("&lt;number&gt;")}}. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PC</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Picas. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PERCENTAGE</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;percentage&gt;")}}. Der Wert
        kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PT</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Punkten. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PX</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;length&gt;")}} in Pixeln. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RAD</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;angle&gt;")}} in Radianten. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RECT</code></td>
      <td>
        Der Wert ist eine {{cssxref("shape", "rect()", "#Syntax")}}
        Funktion. Der Wert kann mit der <code>getRectValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_RGBCOLOR</code></td>
      <td>
        Der Wert ist ein {{cssxref("&lt;color&gt;")}}. Der Wert kann
        mit der <code>getRGBColorValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_S</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;time&gt;")}} in Sekunden. Der
        Wert kann mit der <code>getFloatValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_STRING</code></td>
      <td>
        Der Wert ist eine {{cssxref("&lt;string&gt;")}}. Der Wert kann
        mit der <code>getStringValue()</code> Methode abgerufen werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_UNKNOWN</code></td>
      <td>
        Der Wert ist kein erkannter CSS2-Wert. Der Wert kann nur mit dem
        [`cssText`](/de/docs/Web/API/CSSValue/cssText) Attribut abgerufen
        werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_URI</code></td>
      <td>
        Der Wert ist eine {{cssxref("url_value", "&lt;url&gt;")}}. Der Wert kann
        mit der <code>getStringValue()</code> Methode abgerufen werden.
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

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, ist aber seitdem aus jedem Standardisierungsprozess ausgeschlossen worden.

Es wurde durch ein modernes, aber inkompatibles, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Weg zur Standardisierung befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue)
