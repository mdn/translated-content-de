---
title: "TrustedTypePolicyFactory: getPropertyType()-Methode"
short-title: getPropertyType()
slug: Web/API/TrustedTypePolicyFactory/getPropertyType
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`getPropertyType()`**-Methode des [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Interfaces ermöglicht es Webentwicklern zu prüfen, ob ein Trusted Type für die Eigenschaft eines Elements erforderlich ist.

## Syntax

```js-nolint
getPropertyType(tagName, property)
getPropertyType(tagName, property, elementNS)
```

### Parameter

- `tagName`
  - : Ein String, der den Namen eines HTML-Tags enthält.
- `property`
  - : Ein String, der eine Eigenschaft enthält, zum Beispiel `"innerHTML"`.
- `elementNS` {{optional_inline}}
  - : Ein String, der einen Namensraum enthält; wenn leer, wird der HTML-Namensraum als Standard verwendet.

### Rückgabewert

Ein String mit einem der folgenden Werte:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Oder, `null`.

## Beispiele

In diesem Beispiel gibt das Übergeben des {{htmlelement("div")}}-Elements und des `innerHTML`-Attributs an `getPropertyType()` "TrustedHTML" zurück.

```js
console.log(trustedTypes.getPropertyType("div", "innerHTML")); // "TrustedHTML"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
