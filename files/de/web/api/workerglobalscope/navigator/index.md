---
title: "WorkerGlobalScope: navigator-Eigenschaft"
short-title: navigator
slug: Web/API/WorkerGlobalScope/navigator
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`navigator`**-Eigenschaft der {{domxref("WorkerGlobalScope")}}-Schnittstelle gibt das mit dem Worker verbundene {{domxref("WorkerNavigator")}} zurück. Es handelt sich um ein spezielles Navigator-Objekt, das hauptsächlich ein Teilbereich des {{domxref("Navigator")}} für Browsing-Bereiche ist, aber für Worker angepasst wurde.

## Wert

Ein {{domxref("WorkerNavigator")}}-Objekt.

## Beispiele

Wenn Sie den folgenden Befehl innerhalb eines Workers aufrufen

```js
console.log(navigator);
```

(das wäre im Wesentlichen das Äquivalent zu `self.console.log(self.navigator);`, da diese im Geltungsbereich des Workers aufgerufen werden, der mit {{domxref("WorkerGlobalScope.self")}} referenziert werden kann), erhalten Sie ein {{domxref("WorkerNavigator")}}-Objekt in der Konsole angezeigt — etwa Folgendes:

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

Sie könnten dieses Navigator-Objekt verwenden, um weitere Informationen über die Laufzeitumgebung abzurufen, wie Sie es mit einem normalen {{domxref("Navigator")}}-Objekt tun würden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

{{domxref("WorkerNavigator")}}
