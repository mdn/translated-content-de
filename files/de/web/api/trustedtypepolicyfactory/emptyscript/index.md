---
title: "TrustedTypePolicyFactory: emptyScript-Eigenschaft"
short-title: emptyScript
slug: Web/API/TrustedTypePolicyFactory/emptyScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`emptyScript`**-Eigenschaft des {{domxref("TrustedTypePolicyFactory")}}-Interfaces gibt ein {{domxref("TrustedScript")}}-Objekt zurück, das einen leeren String enthält.

Dieses Objekt kann verwendet werden, wenn die Anwendung einen leeren String in einen Einspeisepunkt einfügen muss, der ein `TrustedScript`-Objekt erwartet.

## Wert

Ein {{domxref("TrustedScript")}}-Objekt.

## Beispiele

Die [Spezifikation](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicyfactory-emptyscript) erklärt, dass das `emptyScript`-Objekt verwendet werden kann, um die Unterstützung für die dynamische Codekompilierung zu erkennen.

Natürliche Implementierungen der Trusted Types können `eval(TrustedScript)` unterstützen, weshalb im folgenden Beispiel eine native Implementierung für `eval(trustedTypes.emptyScript)` `false` zurückgeben wird. Ein Polyfill wird ein wahres Objekt zurückgeben.

```js
const supportsTS = !eval(trustedTypes.emptyScript);
eval(supportsTS ? myTrustedScriptObj : myTrustedScriptObj.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
