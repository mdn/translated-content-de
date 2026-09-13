---
title: "CSSValue: cssValueType-Eigenschaft"
short-title: cssValueType
slug: Web/API/CSSValue/cssValueType
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`cssValueType`** schreibgeschützte Eigenschaft des [`CSSValue`](/de/docs/Web/API/CSSValue)-Interfaces repräsentiert den Typ des aktuellen berechneten CSS-Eigenschaftswerts.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Wert

Ein `unsigned short`, das einen Code darstellt, der den Typ des Wertes definiert. Mögliche Werte sind:

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
        Der Wert wird vererbt und der <code>cssText</code> enthält
        <code>"inherit"</code>.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PRIMITIVE_VALUE</code></td>
      <td>
        Der Wert ist ein primitiver Wert und eine Instanz des
        [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces kann durch binding-spezifische Casting-Methoden auf diese Instanz des
        <code>CSSValue</code>-Interfaces erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_VALUE_LIST</code></td>
      <td>
        Der Wert ist eine <code>CSSValue</code>-Liste und eine Instanz des
        [`CSSValueList`](/de/docs/Web/API/CSSValueList)-Interfaces kann durch binding-spezifische Casting-Methoden auf diese Instanz des
        <code>CSSValue</code>-Interfaces erhalten werden.
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

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
