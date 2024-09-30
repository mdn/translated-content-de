---
title: "PerformanceObserver: observe()-Methode"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`observe()`**-Methode des Interfaces **[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)** wird verwendet, um die Menge der zu beobachtenden Performance-Entry-Typen anzugeben.

Siehe [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste von Entry-Typen und [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) für eine Liste der Entry-Typen, die der Benutzeragent unterstützt.

Wenn ein passender Performance-Entry aufgezeichnet wird, wird die Callback-Funktion des Performance-Observers aufgerufen, die beim Erstellen des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) festgelegt wurde.

## Syntax

```js-nolint
observe(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden möglichen Mitgliedern:

    - `buffered`
      - : Ein boolesches Flag, um anzugeben, ob gepufferte Einträge in den Puffer des Beobachters eingereiht werden sollen. Muss nur mit der `type`-Option verwendet werden.
    - `durationThreshold`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Schwellenwert für [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge definiert. Standardmäßig auf 104ms gesetzt und auf das nächste von 8ms gerundet. Der niedrigste mögliche Schwellenwert ist 16ms. Darf nicht zusammen mit der `entryTypes`-Option verwendet werden.
    - `entryTypes`

      - : Ein Array von Strings, wobei jeder String einen Performance-Entry-Typ angibt, der beobachtet werden soll. Darf nicht zusammen mit den Optionen `type`, `buffered` oder `durationThreshold` verwendet werden.

        Siehe [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste gültiger Performance-Entry-Typ-Namen. Nicht erkannte Typen werden ignoriert, obwohl der Browser möglicherweise eine Warnmeldung in der Konsole ausgibt, um Entwicklern bei der Fehlersuche zu helfen. Wenn keine gültigen Typen gefunden werden, hat `observe()` keine Wirkung.

    - `type`
      - : Ein einzelner String, der genau einen Performance-Entry-Typ angibt, der beobachtet werden soll. Darf nicht zusammen mit der `entryTypes`-Option verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Beobachten mehrerer Performance-Entry-Typen

Dieses Beispiel erstellt einen `PerformanceObserver` und überwacht die `"mark"`- und `"measure"`-Entry-Typen, wie sie durch die `entryTypes`-Option in der `observe()`-Methode angegeben sind.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### Beobachten eines einzelnen Performance-Entry-Typs

Im folgenden Beispiel werden gepufferte Ereignisse abgerufen und neuere Ereignisse für Ressourcentiming-Ereignisse ([`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)) abonniert, indem die `buffered`- und `type`-Konfigurationsoptionen verwendet werden. Wann immer Sie den Beobachter so konfigurieren müssen, dass die `buffered`- oder `durationThreshold`-Option verwendet wird, verwenden Sie `type` anstelle von `entryType`. Das Sammeln mehrerer Typen von Performance-Entry-Typen funktioniert ansonsten nicht.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "resource" events
  });
});
observer.observe({ type: "resource", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
