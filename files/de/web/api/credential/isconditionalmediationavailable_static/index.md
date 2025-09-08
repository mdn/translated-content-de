---
title: "Credential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/Credential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: 616b1da6696a833451891ad8c767ff15474b08f7
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isConditionalMediationAvailable()`** des [`Credential`](/de/docs/Web/API/Credential)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich auf `false` auflöst.

Unterklassen von [`Credential`](/de/docs/Web/API/Credential) überschreiben diese Methode, wenn sie bedingte Vermittlung unterstützen. Siehe zum Beispiel [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static).

## Syntax

```js-nolint
Credential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf `false` auflöst.

## Beispiele

```js
await Credential.isConditionalMediationAvailable(); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
