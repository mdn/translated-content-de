---
title: "TrustedTypePolicyFactory: emptyScript-Eigenschaft"
short-title: emptyScript
slug: Web/API/TrustedTypePolicyFactory/emptyScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`emptyScript`**-Eigenschaft der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle gibt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt zurück, das einen leeren String enthält.

Dieses Objekt kann verwendet werden, wenn die Anwendung einen leeren String in eine Einsinkstelle einfügen muss, die ein `TrustedScript`-Objekt erwartet.

## Wert

Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.

## Beispiele

Die [Spezifikation](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicyfactory-emptyscript) erklärt, dass das `emptyScript`-Objekt verwendet werden kann, um die Unterstützung für dynamische Codekompilierung zu erkennen.

Native Implementierungen von Trusted Types können `eval(TrustedScript)` unterstützen. Daher wird im folgenden Beispiel bei einer nativen Implementierung `eval(trustedTypes.emptyScript)` false zurückgeben. Ein Polyfill wird ein wahrheitswertiges Objekt zurückgeben.

```js
const supportsTS = !eval(trustedTypes.emptyScript);
eval(supportsTS ? myTrustedScriptObj : myTrustedScriptObj.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
