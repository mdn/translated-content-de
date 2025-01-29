---
title: "WorkerGlobalScope: navigator-Eigenschaft"
short-title: navigator
slug: Web/API/WorkerGlobalScope/navigator
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`navigator`**-Schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface gibt den mit dem Worker verknüpften [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück. Es handelt sich um ein spezifisches Navigator-Objekt, das größtenteils ein Unterset der [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Scopes ist, jedoch für Worker angepasst wurde.

## Wert

Ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) Objekt.

## Beispiele

Wenn Sie das Folgende aufrufen:

```js
console.log(navigator);
```

innerhalb eines Workers (was im Wesentlichen dem Äquivalent von `self.console.log(self.navigator);` wäre, da diese im Worker-Scope aufgerufen werden, welcher mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), erhalten Sie ein [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt in der Konsole ausgegeben — etwas in der Art wie das Folgende:

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

Sie könnten dieses Navigator-Objekt verwenden, um mehr Informationen über die Laufzeitumgebung zu erhalten, so wie Sie es mit einem normalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt tun würden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
