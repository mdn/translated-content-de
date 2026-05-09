---
title: "CSSValue: cssValueType-Eigenschaft"
short-title: cssValueType
slug: Web/API/CSSValue/cssValueType
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{Deprecated_header}}{{non-standard_header}}

Die **`cssValueType`**-Eigenschaft der [`CSSValue`](/de/docs/Web/API/CSSValue)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Typ des aktuell berechneten CSS-Werts darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihre Absicht zu verwirklichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt und als experimentell betrachtet wird.

## Wert

Ein `unsigned short`, der einen Code darstellt, der den Typ des Werts definiert. Mögliche Werte sind:

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
        Der Wert wird vererbt und <code>cssText</code> enthält
        <code>"inherit"</code>.
      </td>
    </tr>
    <tr>
      <td><code>CSS_PRIMITIVE_VALUE</code></td>
      <td>
        Der Wert ist ein primitiver Wert und eine Instanz der
        [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle kann
        durch die Verwendung von bindungsspezifischen Casting-Methoden auf dieser Instanz der
        <code>CSSValue</code>-Schnittstelle erhalten werden.
      </td>
    </tr>
    <tr>
      <td><code>CSS_VALUE_LIST</code></td>
      <td>
        Der Wert ist eine <code>CSSValue</code>-Liste und eine Instanz der
        [`CSSValueList`](/de/docs/Web/API/CSSValueList)-Schnittstelle kann durch die
        Verwendung von bindungsspezifischen Casting-Methoden auf dieser Instanz der
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

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus jedem Standardisierungsversuch gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
