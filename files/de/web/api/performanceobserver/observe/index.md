---
title: "PerformanceObserver: observe()-Methode"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`observe()`**-Methode des **[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)**-Interfaces wird verwendet, um die Menge an Performance-Eintragstypen anzugeben, die beobachtet werden sollen.

Sehen Sie [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste von Eintragstypen und [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) für eine Liste von Eintragstypen, die der Benutzeragent unterstützt.

Wenn ein übereinstimmender Performance-Eintrag aufgezeichnet wird, wird die Callback-Funktion des Performance-Observers aufgerufen, die beim Erstellen des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) festgelegt wurde.

## Syntax

```js-nolint
observe(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden möglichen Mitgliedern:

    - `buffered`
      - : Ein boolesches Flag, das angibt, ob zwischengespeicherte Einträge in den Puffer des Observers gestellt werden sollen. Muss nur mit der Option `type` verwendet werden.
    - `durationThreshold`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Schwelle für [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Einträge definiert. Standardmäßig auf 104 ms festgelegt und auf die nächste von 8 ms gerundet. Die niedrigste mögliche Schwelle beträgt 16 ms. Darf nicht zusammen mit der Option `entryTypes` verwendet werden.
    - `entryTypes`

      - : Ein Array von Zeichenfolgen, die jeweils einen Performance-Eintragstyp angeben, der beobachtet werden soll. Darf nicht zusammen mit den Optionen `type`, `buffered` oder `durationThreshold` verwendet werden.

        Sehen Sie [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) für eine Liste gültiger Performance-Eintragstypnamen. Nicht erkannte Typen werden ignoriert, obwohl der Browser möglicherweise eine Warnmeldung an die Konsole ausgibt, um Entwicklern beim Debuggen ihres Codes zu helfen. Wenn keine gültigen Typen gefunden werden, hat `observe()` keine Wirkung.

    - `type`
      - : Eine einzelne Zeichenkette, die genau einen Performance-Eintragstyp angibt, der beobachtet werden soll. Darf nicht zusammen mit der Option `entryTypes` verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Überwachung mehrerer Performance-Eintragstypen

Dieses Beispiel erstellt einen `PerformanceObserver` und überwacht die Eintragstypen `"mark"` und `"measure"`, wie durch die `entryTypes`-Option, die in der `observe()`-Methode angegeben ist.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### Überwachung eines einzelnen Performance-Eintragstyps

Das folgende Beispiel ruft zwischengespeicherte Ereignisse ab und abonniert neuere Ereignisse für Resource-Timing-Ereignisse ([`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)) mit den Konfigurationsoptionen `buffered` und `type`. Wann immer Sie den Observer konfigurieren müssen, um die Option `buffered` oder `durationThreshold` zu verwenden, verwenden Sie `type` anstelle von `entryType`. Andernfalls funktioniert das Sammeln mehrerer Arten von Performance-Eintragstypen nicht.

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
