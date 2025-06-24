---
title: "PerformanceObserver: PerformanceObserver() Konstruktor"
short-title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Der **`PerformanceObserver()`** Konstruktor erstellt ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Objekt mit dem angegebenen Beobachter-`callback`. Der Beobachter-Callback wird aufgerufen, wenn [Performance-Entry-Ereignisse](/de/docs/Web/API/PerformanceEntry) für die [Entry-Typen](/de/docs/Web/API/PerformanceEntry/entryType), die über die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) Methode registriert wurden, aufgezeichnet werden.

## Syntax

```js-nolint
new PerformanceObserver(callback)
```

### Parameter

- `callback`

  - : Ein `PerformanceObserverCallback` Callback, das aufgerufen wird, wenn beobachtete Performance-Ereignisse aufgezeichnet werden. Wenn der Callback aufgerufen wird, sind die folgenden Parameter verfügbar:

    - `entries`
      - : Die [Liste der Performance-Observer-Einträge](/de/docs/Web/API/PerformanceObserverEntryList).
    - `observer`
      - : Das [`observer`](/de/docs/Web/API/PerformanceObserver) Objekt, das die oben genannten Einträge erhält.
    - `options`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `droppedEntriesCount`

          - : Die Anzahl der Einträge, die nicht aufgezeichnet werden konnten, da der interne Puffer des [`Performance`](/de/docs/Web/API/Performance) Objekts voll war.

            Beachten Sie, dass dies nur beim ersten Aufruf des Callbacks durch den Beobachter bereitgestellt wird, wenn die gepufferten Einträge wiedergegeben werden. Sobald der Beobachter beginnt, zukünftige Beobachtungen zu machen, muss er den Puffer nicht mehr verwenden. Nach dem ersten Mal wird `options` ein leeres Objekt (`{}`) sein.

### Rückgabewert

Ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Objekt, das den angegebenen `callback` aufruft, wenn beobachtete Performance-Ereignisse auftreten.

## Beispiele

### Erstellen eines PerformanceObserver

Das folgende Beispiel erstellt einen `PerformanceObserver`, der auf "mark" ([`PerformanceMark`](/de/docs/Web/API/PerformanceMark)) und "measure" ([`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)) Ereignisse achtet.
Der `perfObserver` Callback liefert eine `list` ([`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)), die es Ihnen ermöglicht, beobachtete Performance-Einträge zu erhalten.

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

### Verworfene Puffereinträge

Sie können [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) mit einem `buffered`-Flag verwenden, um auf vergangene Performance-Einträge zu hören.
Es gibt jedoch eine Begrenzung der Pufferspeichergröße. Der Performance-Observer-Callback enthält ein `options`-Objekt: Beim ersten Aufruf des Callbacks durch den Beobachter wird der `options`-Parameter eine `droppedEntriesCount`-Eigenschaft enthalten, die Ihnen mitteilt, wie viele Einträge aufgrund des vollen Pufferspeichers verworfen wurden. Nachfolgende Callbacks haben einen leeren `options`-Parameter.

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

In der Regel gibt es viele Resource-Timing-Einträge, und speziell für diese Einträge können Sie auch einen größeren Puffer mit [`performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) festlegen und auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event) Ereignis achten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
