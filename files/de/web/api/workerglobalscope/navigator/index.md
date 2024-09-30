---
title: "WorkerGlobalScope: navigator property"
short-title: navigator
slug: Web/API/WorkerGlobalScope/navigator
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`navigator`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt den dem Worker zugeordneten [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück. Es ist ein spezifisches Navigator-Objekt, größtenteils ein Teilmengenbereich des [`Navigator`](/de/docs/Web/API/Navigator) für Browserscopes, jedoch an Worker angepasst.

## Wert

Ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt.

## Beispiele

Wenn Sie das folgende aufrufen

```js
console.log(navigator);
```

innerhalb eines Workers (was im Grunde das Äquivalent zu `self.console.log(self.navigator);` wäre, da diese im Worker-Scope aufgerufen werden, der mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), erhalten Sie ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt, das in die Konsole geschrieben wird — so etwas wie das Folgende:

```plain
Object {onLine: true, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) Ap…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36", product: "Gecko", platform: "MacIntel", appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKi…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"…}
    appCodeName: "Mozilla"
    appName: "Netscape"
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    hardwareConcurrency: 4
    onLine: true
    platform: "MacIntel"
    product: "Gecko"
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    __proto__: Object
```

Sie könnten dieses Navigator-Objekt verwenden, um mehr Informationen über die Laufzeitumgebung zurückzugeben, ähnlich wie Sie es mit einem normalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt tun könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
