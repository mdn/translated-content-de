---
title: "PerformanceObserver: Konstruktor PerformanceObserver()"
short-title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
l10n:
  sourceCommit: 65fc487656497520a54dd9db81daa4068c05b85b
---

{{APIRef("Performance API")}}

Der **`PerformanceObserver()`** Konstruktor erstellt ein neues {{domxref("PerformanceObserver")}} Objekt mit dem angegebenen Beobachter-`callback`. Der Beobachter-Callback wird aufgerufen, wenn {{domxref("PerformanceEntry","performance entry events", '', 'true')}} für die registrierten {{domxref("PerformanceEntry.entryType","entry types",'','true')}} aufgezeichnet werden, mittels der {{domxref("PerformanceObserver.observe","observe()")}} Methode.

## Syntax

```js-nolint
new PerformanceObserver(callback)
```

### Parameter

- `callback`

  - : Ein `PerformanceObserverCallback` Callback, der aufgerufen wird, wenn beobachtete Performance-Ereignisse aufgezeichnet werden. Wenn der Callback aufgerufen wird, stehen die folgenden Parameter zur Verfügung:

    - `entries`
      - : Die {{domxref("PerformanceObserverEntryList","Liste der Performance Observer Einträge", '', 'true')}}.
    - `observer`
      - : Das {{domxref("PerformanceObserver","Beobachter")}} Objekt, das die oben genannten Einträge erhält.
    - `options`

      - : Ein Objekt mit folgenden Eigenschaften:

        - `droppedEntriesCount`

          - : Die Anzahl der Einträge, die nicht aufgezeichnet werden konnten, weil der interne Puffer des {{domxref("Performance")}} Objekts voll war.

            Beachten Sie, dass dies nur beim ersten Aufruf des Beobachters bereitgestellt wird, wenn die gepufferten Einträge wiedergegeben werden. Sobald der Beobachter mit zukünftigen Beobachtungen beginnt, muss er den Puffer nicht mehr verwenden. Nach dem ersten Mal wird `options` ein leeres Objekt (`{}`) sein.

### Rückgabewert

Ein neues {{domxref("PerformanceObserver")}} Objekt, das den angegebenen `callback` aufruft, wenn beobachtete Performance-Ereignisse auftreten.

## Beispiele

### Erstellen eines PerformanceObservers

Das folgende Beispiel erstellt einen `PerformanceObserver`, der auf "mark" ({{domxref("PerformanceMark")}}) und "measure" ({{domxref("PerformanceMeasure")}}) Ereignisse achtet.
Der `perfObserver` Callback stellt eine `list` ({{domxref("PerformanceObserverEntryList")}}) bereit, die es Ihnen ermöglicht, beobachtete Performance-Einträge zu erhalten.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

### Nicht aufgezeichnete Puffereinträge

Sie können {{domxref("PerformanceObserver")}} mit einem `buffered`-Flag verwenden, um vergangene Performance-Einträge zu überwachen.
Es gibt jedoch eine Begrenzung der Puffergröße. Der Performance Observer Callback enthält ein `options` Objekt: Das erste Mal, wenn der Observer den Callback aufruft, wird der `options` Parameter eine `droppedEntriesCount` Eigenschaft haben, die angibt, wie viele Einträge aufgrund des vollen Pufferspeichers nicht aufgezeichnet wurden. Nachfolgende Callbacks haben einen leeren `options` Parameter.

```js
function perfObserver(list, observer, options) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
  if (options?.droppedEntriesCount > 0) {
    console.warn(
      `${options?.droppedEntriesCount} entries got dropped due to the buffer being full.`,
    );
  }
}

const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });
```

Normalerweise gibt es viele Resource Timing Einträge, und speziell für diese Einträge können Sie auch einen größeren Puffer verwenden, indem Sie {{domxref("performance.setResourceTimingBufferSize()")}} verwenden und auf das {{domxref("Performance/resourcetimingbufferfull_event", "resourcetimingbufferfull")}} Ereignis achten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
