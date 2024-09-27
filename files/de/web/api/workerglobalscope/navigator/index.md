---
title: "WorkerGlobalScope: navigator-Eigenschaft"
short-title: navigator
slug: Web/API/WorkerGlobalScope/navigator
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`navigator`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt den mit dem Worker verknüpften [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück. Es handelt sich um ein spezifisches Navigator-Objekt, das größtenteils ein Untersetzer des [`Navigator`](/de/docs/Web/API/Navigator) für Browserscopes ist, aber an Worker angepasst wurde.

## Wert

Ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt.

## Beispiele

Wenn Sie das folgende innerhalb eines Workers aufrufen

```js
console.log(navigator);
```

(was im Wesentlichen das Äquivalent von `self.console.log(self.navigator);` wäre, da diese im Worker-Scope aufgerufen werden, der mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), wird ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt in die Konsole geschrieben — etwas in der Art:

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

[`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
