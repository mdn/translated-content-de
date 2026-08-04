---
title: "WorkerGlobalScope: navigator-Eigenschaft"
short-title: navigator
slug: Web/API/WorkerGlobalScope/navigator
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`navigator`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt den mit dem Worker verbundenen [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück. Es ist ein spezifisches Navigator-Objekt, hauptsächlich ein Unterset des [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Umgebungen, aber an die Bedürfnisse von Workern angepasst.

## Wert

Ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt.

## Beispiele

Wenn Sie das Folgende aufrufen:

```js
console.log(navigator);
```

innerhalb eines Workers (was im Grunde das Äquivalent zu `self.console.log(self.navigator);` wäre, da diese im Worker-Bereich aufgerufen werden, welcher mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), erhalten Sie ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt, das in die Konsole geschrieben wird — etwa so etwas wie das Folgende:

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

Sie könnten dieses Navigator-Objekt verwenden, um mehr Informationen über die Laufzeitumgebung zurückzugeben, so wie Sie es mit einem normalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt tun würden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
