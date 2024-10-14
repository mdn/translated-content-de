---
title: "PerformanceObserver: PerformanceObserver() Konstruktor"
short-title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Der **`PerformanceObserver()`** Konstruktor erstellt ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekt mit dem angegebenen Beobachter-`callback`. Der Beobachter-Callback wird aufgerufen, wenn [Performance-Eintrag-Ereignisse](/de/docs/Web/API/PerformanceEntry) für die [Eintragstypen](/de/docs/Web/API/PerformanceEntry/entryType), die registriert wurden, aufgezeichnet werden, über die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode.

## Syntax

```js-nolint
new PerformanceObserver(callback)
```

### Parameter

- `callback`

  - : Ein `PerformanceObserverCallback`-Callback, das aufgerufen wird, wenn beobachtete Performance-Ereignisse aufgezeichnet werden. Wenn der Callback aufgerufen wird, sind die folgenden Parameter verfügbar:

    - `entries`
      - : Die [Liste der Performance-Beobachter-Einträge](/de/docs/Web/API/PerformanceObserverEntryList).
    - `observer`
      - : Das [`observer`](/de/docs/Web/API/PerformanceObserver)-Objekt, das die oben genannten Einträge empfängt.
    - `options`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `droppedEntriesCount`

          - : Die Anzahl der Einträge, die nicht aufgezeichnet werden konnten, weil der interne Puffer des [`Performance`](/de/docs/Web/API/Performance)-Objekts voll war.

            Beachten Sie, dass dies nur das erste Mal bereitgestellt wird, wenn der Beobachter den Callback aufruft, wenn die gepufferten Einträge wiedergegeben werden. Nachdem der Beobachter beginnt, zukünftige Beobachtungen vorzunehmen, benötigt er den Puffer nicht mehr. Nach dem ersten Mal wird `options` ein leeres Objekt (`{}`) sein.

### Rückgabewert

Ein neues [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekt, das den angegebenen `callback` aufruft, wenn beobachtete Performance-Ereignisse auftreten.

## Beispiele

### Einen PerformanceObserver erstellen

Das folgende Beispiel erstellt einen `PerformanceObserver`, der auf "mark" ([`PerformanceMark`](/de/docs/Web/API/PerformanceMark)) und "measure" ([`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)) Ereignisse achtet. Der `perfObserver`-Callback liefert eine `list` ([`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)), die es Ihnen ermöglicht, beobachtete Performance-Einträge zu erhalten.

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

### Verlorene Puffereinträge

Sie können [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) mit einem `buffered`-Flag verwenden, um frühere Performance-Einträge abzuhören. Es gibt jedoch eine Puffergrößenbeschränkung. Der Performance-Observer-Callback enthält ein `options`-Objekt: Beim ersten Aufruf des Callbacks durch den Beobachter hat der `options`-Parameter eine `droppedEntriesCount`-Eigenschaft, die angibt, wie viele Einträge aufgrund des vollen Pufferspeichers verloren gingen. Nachfolgende Callbacks haben einen leeren `options`-Parameter.

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

Normalerweise gibt es viele Ressourcentimingeinträge, und speziell für diese Einträge können Sie ebenfalls einen größeren Puffer mit [`performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) einstellen und das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event) Ereignis beobachten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
