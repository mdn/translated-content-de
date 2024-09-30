---
title: "TrustedTypePolicyFactory: emptyScript-Eigenschaft"
short-title: emptyScript
slug: Web/API/TrustedTypePolicyFactory/emptyScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`emptyScript`**-Schreibgeschützte Eigenschaft der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle gibt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt zurück, das eine leere Zeichenfolge enthält.

Dieses Objekt kann verwendet werden, wenn die Anwendung eine leere Zeichenfolge in eine Einsinkstelle einfügen muss, die ein `TrustedScript`-Objekt erwartet.

## Wert

Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.

## Beispiele

Die [Spezifikation](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicyfactory-emptyscript) erklärt, dass das `emptyScript`-Objekt verwendet werden kann, um Unterstützung für die dynamische Code-Kompilierung zu erkennen.

Native Trusted Types Implementierungen können `eval(TrustedScript)` unterstützen, daher wird im untenstehenden Beispiel eine native Implementierung `false` für `eval(trustedTypes.emptyScript)` zurückgeben. Ein Polyfill wird ein wahrheitsgemäßes Objekt zurückgeben.

```js
const supportsTS = !eval(trustedTypes.emptyScript);
eval(supportsTS ? myTrustedScriptObj : myTrustedScriptObj.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
