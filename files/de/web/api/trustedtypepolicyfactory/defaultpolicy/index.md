---
title: "TrustedTypePolicyFactory: defaultPolicy-Eigenschaft"
short-title: defaultPolicy
slug: Web/API/TrustedTypePolicyFactory/defaultPolicy
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`defaultPolicy`**-Eigenschaft der {{domxref("TrustedTypePolicyFactory")}}-Schnittstelle gibt die Standard-{{domxref("TrustedTypePolicy")}} oder null zurück, wenn diese nicht vorhanden ist.

> [!NOTE]
> Informationen über die Erstellung und Verwendung von Standardrichtlinien finden Sie in der Dokumentation zu [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#the_default_policy).

## Wert

Eine {{domxref("TrustedTypePolicy")}} oder `null`.

## Beispiele

Die erste Zeile unten gibt `null` zurück, da keine Standardrichtlinie erstellt wurde. Sobald eine Standardrichtlinie erstellt wurde, gibt der Aufruf von `defaultPolicy` dieses Richtlinienobjekt zurück.

```js
console.log(trustedTypes.defaultPolicy); // null
const dp = trustedTypes.createPolicy("default", {});
console.log(trustedTypes.defaultPolicy); // a TrustedTypePolicy object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
