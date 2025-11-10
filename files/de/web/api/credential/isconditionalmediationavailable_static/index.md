---
title: "Credential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/Credential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: 463cfc7f25a083241b06a5f5a9a927924f48ca6e
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`isConditionalMediationAvailable()`** statische Methode des [`Credential`](/de/docs/Web/API/Credential)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu `false` aufgelöst wird.

Unterklassen von [`Credential`](/de/docs/Web/API/Credential) überschreiben diese Methode, wenn sie bedingte Vermittlung unterstützen. Siehe zum Beispiel [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static).

## Syntax

```js-nolint
Credential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `false` aufgelöst wird.

## Beispiele

```js
await Credential.isConditionalMediationAvailable(); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
