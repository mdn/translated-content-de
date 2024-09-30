---
title: "PerformanceObserver: PerformanceObserver() Konstruktor"
short-title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
l10n:
  sourceCommit: 65fc487656497520a54dd9db81daa4068c05b85b
---

{{APIRef("Performance API")}}

Der **`PerformanceObserver()`**-Konstruktor erstellt ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekt mit dem angegebenen Beobachter-`callback`. Der Beobachter-Callback wird aufgerufen, wenn [Performance-Entry-Ereignisse](/de/docs/Web/API/PerformanceEntry) für die registrierten [Entry-Typen](/de/docs/Web/API/PerformanceEntry/entryType) aufgezeichnet werden, über die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode.

## Syntax

```js-nolint
new PerformanceObserver(callback)
```

### Parameter

- `callback`

  - : Ein `PerformanceObserverCallback`-Callback, das aufgerufen wird, wenn beobachtete Performance-Ereignisse aufgezeichnet werden. Wenn der Callback aufgerufen wird, stehen folgende Parameter zur Verfügung:

    - `entries`
      - : Die [Liste der Performance-Observer-Entries](/de/docs/Web/API/PerformanceObserverEntryList).
    - `observer`
      - : Das [`observer`](/de/docs/Web/API/PerformanceObserver)-Objekt, das die oben genannten Entries erhält.
    - `options`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `droppedEntriesCount`

          - : Die Anzahl der Einträge, die nicht aufgezeichnet werden konnten, weil der interne Puffer des [`Performance`](/de/docs/Web/API/Performance)-Objekts voll war.

            Beachten Sie, dass dies nur bereitgestellt wird, wenn der Beobachter den Callback das erste Mal aufruft und die gepufferten Einträge wiedergegeben werden. Sobald der Beobachter mit zukünftigen Beobachtungen beginnt, benötigt er den Puffer nicht mehr. Nach dem ersten Mal wird `options` ein leeres Objekt (`{}`) sein.

### Rückgabewert

Ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekt, das den angegebenen `callback` aufruft, wenn beobachtete Performance-Ereignisse eintreten.

## Beispiele

### Erstellen eines PerformanceObservers

Das folgende Beispiel erstellt einen `PerformanceObserver`, der nach "mark"-([`PerformanceMark`](/de/docs/Web/API/PerformanceMark)) und "measure"-([`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)) Ereignissen sucht. Der `perfObserver`-Callback liefert eine `list` ([`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)), die es Ihnen ermöglicht, die beobachteten Performance-Entries zu erhalten.

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

### Verworfene Buffer-Einträge

Sie können [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) mit einem `buffered`-Flag verwenden, um vergangene Performance-Entries abzuhören. Es gibt jedoch ein Limit der Puffergröße. Der Performance-Observer-Callback enthält ein `options`-Objekt: Wenn der Beobachter den Callback das erste Mal aufruft, hat der `options`-Parameter eine `droppedEntriesCount`-Eigenschaft, die Ihnen mitteilt, wie viele Einträge aufgrund des vollen Pufferspeichers verworfen wurden. Nachfolgende Callbacks haben einen leeren `options`-Parameter.

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

In der Regel gibt es viele Einträge der Ressourcentiming, und für genau diese Einträge können Sie auch einen größeren Puffer mit [`performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) einstellen und das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)-Ereignis überwachen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
