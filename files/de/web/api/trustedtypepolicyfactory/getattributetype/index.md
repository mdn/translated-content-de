---
title: "TrustedTypePolicyFactory: getAttributeType() Methode"
short-title: getAttributeType()
slug: Web/API/TrustedTypePolicyFactory/getAttributeType
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`getAttributeType()`** Methode der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) Schnittstelle ermöglicht es Webentwicklern zu überprüfen, ob ein Trusted Type für ein Element erforderlich ist und welcher Trusted Type verwendet wird.

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
  - : Ein String, der einen Namespace enthält; wenn leer, wird der HTML-Namespace verwendet.
- `attrNS` {{optional_inline}}
  - : Ein String, der einen Namespace enthält; wenn leer, wird null verwendet.

### Rückgabewert

Ein String mit einem der folgenden Werte:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Oder, null.

## Beispiele

In diesem Beispiel gibt das Übergeben des {{htmlelement("script")}} Elements und des `src` Attributs an `getAttributeType()` "TrustedScriptURL" zurück.

```js
console.log(trustedTypes.getAttributeType("script", "src")); // "TrustedScriptURL"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
