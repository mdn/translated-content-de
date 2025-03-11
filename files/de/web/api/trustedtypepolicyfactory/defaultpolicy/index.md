---
title: "TrustedTypePolicyFactory: defaultPolicy-Eigenschaft"
short-title: defaultPolicy
slug: Web/API/TrustedTypePolicyFactory/defaultPolicy
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`defaultPolicy`** des [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Interfaces gibt die Standard-[`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) zurück oder `null`, wenn diese leer ist.

Siehe [Die Standardrichtlinie](/de/docs/Web/API/Trusted_Types_API#the_default_policy) für mehr Details.

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
