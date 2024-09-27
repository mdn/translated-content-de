---
title: "PerformanceObserver: PerformanceObserver() Konstruktor"
short-title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
l10n:
  sourceCommit: 65fc487656497520a54dd9db81daa4068c05b85b
---

{{APIRef("Performance API")}}

Der **`PerformanceObserver()`** Konstruktor erstellt ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekt mit dem angegebenen Beobachter-`callback`. Der Beobachter-Callback wird aufgerufen, wenn [Performance-Eintrag-Ereignisse](/de/docs/Web/API/PerformanceEntry) für die registrierten [Eintragstypen](/de/docs/Web/API/PerformanceEntry/entryType), über die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode, aufgezeichnet werden.

## Syntax

```js-nolint
new PerformanceObserver(callback)
```

### Parameter

- `callback`

  - : Ein `PerformanceObserverCallback`-Callback, das aufgerufen wird, wenn beobachtete Performance-Ereignisse aufgezeichnet werden. Wenn der Callback aufgerufen wird, stehen die folgenden Parameter zur Verfügung:

    - `entries`
      - : Die [Liste der Performance-Beobachtereinträge](/de/docs/Web/API/PerformanceObserverEntryList).
    - `observer`
      - : Das [`observer`](/de/docs/Web/API/PerformanceObserver)-Objekt, das die oben genannten Einträge empfängt.
    - `options`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `droppedEntriesCount`

          - : Die Anzahl der Einträge, die nicht aufgezeichnet werden konnten, weil der interne Puffer des [`Performance`](/de/docs/Web/API/Performance)-Objekts voll war.

            Beachten Sie, dass dies nur beim ersten Aufruf des Observers des Callbacks bereitgestellt wird, wenn die gepufferten Einträge wiedergegeben werden. Sobald der Beobachter zukünftige Beobachtungen vornimmt, muss er den Puffer nicht mehr verwenden. Nach dem ersten Mal wird `options` ein leeres Objekt (`{}`) sein.

### Rückgabewert

Ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekt, das den angegebenen `callback` aufruft, wenn beobachtete Performance-Ereignisse auftreten.

## Beispiele

### Erstellen eines PerformanceObserver

Das folgende Beispiel erstellt einen `PerformanceObserver`, der auf "mark" ([`PerformanceMark`](/de/docs/Web/API/PerformanceMark)) und "measure" ([`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)) Ereignisse achtet. Der `perfObserver`-Callback stellt eine `list` ([`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)) bereit, die es Ihnen ermöglicht, beobachtete Performance-Einträge zu erhalten.

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

### Herausgefallene Puffereinträge

Sie können [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) mit einem `buffered`-Flag verwenden, um auf vergangene Performance-Einträge zu hören. Es gibt jedoch eine Puffergrößenbegrenzung. Der Performance-Observer-Callback enthält ein `options`-Objekt: Beim ersten Aufruf des Callbacks durch den Observer enthält der `options`-Parameter eine `droppedEntriesCount`-Eigenschaft, die Ihnen sagt, wie viele Einträge aufgrund des vollen Pufferspeichers herausgefallen sind. Nachfolgende Callbacks werden einen leeren `options`-Parameter haben.

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

Normalerweise gibt es viele Ressourcentiming-Einträge, und speziell für diese Einträge können Sie auch einen größeren Puffer mit [`performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) festlegen und das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)-Ereignis überwachen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
