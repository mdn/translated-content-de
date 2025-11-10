---
title: "PerformanceObserver: observe()-Methode"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`observe()`**-Methode des **[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)**-Interfaces wird verwendet, um die Menge der zu beobachtenden Leistungs-Eintragstypen festzulegen.

Siehe [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste von Eintragstypen und [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) für eine Liste der Eintragstypen, die vom Benutzeragenten unterstützt werden.

Wenn ein passender Leistungseintrag aufgezeichnet wird, wird die Rückruffunktion des Performance-Observers aufgerufen, die beim Erstellen des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) gesetzt wurde.

## Syntax

```js-nolint
observe(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden möglichen Mitgliedern:

    - `buffered`
      - : Ein boolesches Flag, das anzeigt, ob gepufferte Einträge in den Puffer des Observers eingereiht werden sollen. Darf nur mit der `type`-Option verwendet werden.
    - `durationThreshold`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Schwelle für [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge definiert. Standardmäßig 104ms und auf das nächste von 8ms gerundet. Die niedrigste mögliche Schwelle beträgt 16ms. Darf nicht zusammen mit der `entryTypes`-Option verwendet werden.
    - `entryTypes`

      - : Ein Array von Zeichenfolgen, die jeweils einen zu beobachtenden Leistungseintragstyp spezifizieren. Darf nicht zusammen mit
        den Optionen `type`, `buffered` oder `durationThreshold` verwendet werden.

        Siehe [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste gültiger Leistungseintragstypnamen. Nicht erkannte Typen werden ignoriert, obwohl der Browser möglicherweise eine Warnmeldung in der Konsole ausgibt, um Entwicklern bei der Fehlersuche in ihrem Code zu helfen. Wenn keine gültigen Typen gefunden werden, hat `observe()` keine Wirkung.

    - `type`
      - : Eine einzelne Zeichenfolge, die genau einen zu beobachtenden Leistungseintragstyp spezifiziert. Darf nicht zusammen mit der `entryTypes`-Option verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Beobachtung mehrerer Leistungseintragstypen

Dieses Beispiel erstellt einen `PerformanceObserver` und beobachtet die Eintragstypen `"mark"` und `"measure"`, wie sie durch die in der `observe()`-Methode angegebene Option `entryTypes` spezifiziert werden.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### Beobachtung eines einzelnen Leistungseintragstyps

Das folgende Beispiel ruft gepufferte Ereignisse ab und abonniert neuere Ereignisse für Ressourcentiming-Ereignisse ([`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)) mithilfe der Konfigurationsoptionen `buffered` und `type`. Wann immer Sie den Observer so konfigurieren müssen, dass die Option `buffered` oder `durationThreshold` verwendet wird, verwenden Sie `type` anstelle von `entryType`. Andernfalls wird das Sammeln mehrerer Leistungseintragstypen nicht funktionieren.

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
