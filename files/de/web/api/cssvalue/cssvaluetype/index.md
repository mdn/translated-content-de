---
title: "CSSValue: cssValueType-Eigenschaft"
short-title: cssValueType
slug: Web/API/CSSValue/cssValueType
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

Die **`cssValueType`** Leseeigenschaft der
{{domxref("CSSValue")}}-Schnittstelle stellt den Typ der aktuellen berechneten CSS-Eigenschaft dar.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren es nicht.
>
> Um Ihre Ziele zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Wert

Ein `unsigned short`, der einen Code darstellt, der den Typ des Wertes definiert. Mögliche Werte sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CSS_CUSTOM</code></td>
      <td>Der Wert ist ein benutzerdefinierter Wert.</td>
    </tr>
    <tr>
      <td><code>CSS_INHERIT</code></td>
      <td>
        Der Wert wird vererbt und das <code>cssText</code> enthält
        <code>"inherit"</code>.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PRIMITIVE_VALUE</code></td>
      <td>
        Der Wert ist ein primitiver Wert und eine Instanz der
        {{domxref("CSSPrimitiveValue")}}-Schnittstelle kann durch
        verwendung bindungsspezifischer Casting-Methoden auf dieser Instanz der
        <code>CSSValue</code>-Schnittstelle erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_VALUE_LIST</code></td>
      <td>
        Der Wert ist eine <code>CSSValue</code>-Liste und eine Instanz der
        {{domxref("CSSValueList")}}-Schnittstelle kann durch
        Verwendung bindungsspezifischer Casting-Methoden auf dieser Instanz der
        <code>CSSValue</code>-Schnittstelle erhalten werden.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssValueType);
```

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
