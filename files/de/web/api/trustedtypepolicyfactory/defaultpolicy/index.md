---
title: "TrustedTypePolicyFactory: defaultPolicy-Eigenschaft"
short-title: defaultPolicy
slug: Web/API/TrustedTypePolicyFactory/defaultPolicy
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`defaultPolicy`** der Schnittstelle [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) gibt die Standard-[`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) zurück oder `null`, wenn diese leer ist.

> [!NOTE]
> Informationen zur Erstellung und Nutzung von Standardrichtlinien finden Sie in der Dokumentation zu [`createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#the_default_policy).

## Wert

Eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) oder `null`.

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
