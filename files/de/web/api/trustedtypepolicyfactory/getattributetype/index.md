---
title: "TrustedTypePolicyFactory: getAttributeType() Methode"
short-title: getAttributeType()
slug: Web/API/TrustedTypePolicyFactory/getAttributeType
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`getAttributeType()`** Methode des [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Interfaces ermöglicht Webentwicklern zu überprüfen, ob ein Trusted Type für ein Element erforderlich ist und wenn ja, welcher Trusted Type verwendet wird.

## Syntax

```js-nolint
getAttributeType(tagName, attribute)
getAttributeType(tagName, attribute, elementNS)
getAttributeType(tagName, attribute, elementNS, attrNS)
```

### Parameter

- `tagName`
  - : Ein String, der den Namen eines HTML-Tags enthält.
- `attribute`
  - : Ein String, der ein Attribut enthält.
- `elementNS` {{optional_inline}}
  - : Ein String, der einen Namensraum enthält, bei leerem Wert wird der HTML-Namensraum als Standard verwendet.
- `attrNS` {{optional_inline}}
  - : Ein String, der einen Namensraum enthält, bei leerem Wert wird null als Standard verwendet.

### Rückgabewert

Ein String mit einem der folgenden Werte:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Oder null.

## Beispiele

In diesem Beispiel wird für das {{htmlelement("script")}}-Element und das `src`-Attribut der Rückgabewert "TrustedScriptURL" von `getAttributeType()` gegeben.

```js
console.log(trustedTypes.getAttributeType("script", "src")); // "TrustedScriptURL"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
