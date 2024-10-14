---
title: "PerformanceObserver: observe() Methode"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`observe()`** Methode des **[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)** Interface wird verwendet, um die Menge der zu beobachtenden Performance-Eintragstypen festzulegen.

Siehe [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste von Eintragstypen und [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) für eine Liste von Eintragstypen, die vom Benutzeragenten unterstützt werden.

Wenn ein übereinstimmender Performance-Eintrag aufgezeichnet wird, wird die Callback-Funktion des PerformanceObservers aufgerufen, die beim Erstellen des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) festgelegt wurde.

## Syntax

```js-nolint
observe(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden möglichen Mitgliedern:

    - `buffered`
      - : Ein boolesches Flag, das angibt, ob zwischengespeicherte Einträge in den Puffer des Observers gestellt werden sollen. Muss nur mit der `type` Option verwendet werden.
    - `durationThreshold`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Schwellenwert für [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Einträge definiert. Standardwert ist 104ms und wird auf das nächste Vielfache von 8ms gerundet. Der niedrigste mögliche Schwellenwert ist 16ms. Darf nicht zusammen mit der Option `entryTypes` verwendet werden.
    - `entryTypes`

      - : Ein Array von Zeichenfolgen, die jeweils einen zu beobachtenden Performance-Eintragstyp spezifizieren. Darf nicht zusammen mit den Optionen `type`, `buffered` oder `durationThreshold` verwendet werden.

        Siehe [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste gültiger Performance-Eintragstypnamen. Nicht erkannte Typen werden ignoriert, obwohl der Browser möglicherweise eine Warnmeldung an die Konsole ausgibt, um Entwicklern zu helfen, ihren Code zu debuggen. Wenn keine gültigen Typen gefunden werden, hat `observe()` keine Wirkung.

    - `type`
      - : Eine einzelne Zeichenfolge, die genau einen zu beobachtenden Performance-Eintragstyp spezifiziert. Darf nicht zusammen mit der Option `entryTypes` verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Beobachtung mehrerer Performance-Eintragstypen

Dieses Beispiel erstellt einen `PerformanceObserver` und beobachtet die Eintragstypen `"mark"` und `"measure"`, wie es durch die `entryTypes` Option in der `observe()` Methode festgelegt wird.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### Beobachtung eines einzelnen Performance-Eintragstyps

Das folgende Beispiel ruft zwischengespeicherte Ereignisse ab und abonniert neuere Ereignisse für Ressourcentimings ([`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)) unter Verwendung der Konfigurationsoptionen `buffered` und `type`. Wann immer Sie den Observer so konfigurieren müssen, dass er die Option `buffered` oder `durationThreshold` verwendet, verwenden Sie `type` anstelle von `entryType`. Andernfalls wird das Sammeln mehrerer Typen von Performance-Einträgen nicht funktionieren.

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
