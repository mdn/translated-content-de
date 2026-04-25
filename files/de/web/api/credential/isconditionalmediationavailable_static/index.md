---
title: "Credential: isConditionalMediationAvailable() statische Methode"
short-title: isConditionalMediationAvailable()
slug: Web/API/Credential/isConditionalMediationAvailable_static
l10n:
  sourceCommit: 0266df57cb5eb52a057e305ba12d49c93f0edb7e
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`isConditionalMediationAvailable()`** der [`Credential`](/de/docs/Web/API/Credential)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich zu `false` auflöst.

Unterklassen von [`Credential`](/de/docs/Web/API/Credential) überschreiben diese Methode, wenn sie bedingte Vermittlung unterstützen. Siehe zum Beispiel [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static).

## Syntax

```js-nolint
Credential.isConditionalMediationAvailable()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu `false` auflöst.

## Beispiele

```js
await Credential.isConditionalMediationAvailable(); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
