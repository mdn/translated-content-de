---
title: "TrustedTypePolicyFactory: getPropertyType()-Methode"
short-title: getPropertyType()
slug: Web/API/TrustedTypePolicyFactory/getPropertyType
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`getPropertyType()`**-Methode der {{domxref("TrustedTypePolicyFactory")}}-Schnittstelle ermöglicht es Webentwicklern zu überprüfen, ob ein Trusted Type für eine Eigenschaft eines Elements erforderlich ist.

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
  - : Ein String, der einen Namespace enthält, bei Leerlassen wird standardmäßig der HTML-Namespace verwendet.

### Rückgabewert

Ein String mit einem der folgenden Werte:

- `"TrustedHTML"`
- `"TrustedScript"`
- `"TrustedScriptURL"`

Oder, `null`.

## Beispiele

In diesem Beispiel ergibt das Übergeben des {{htmlelement("div")}}-Elements und des `innerHTML`-Attributs an `getPropertyType()` den Wert "TrustedHTML".

```js
console.log(trustedTypes.getPropertyType("div", "innerHTML")); // "TrustedHTML"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
