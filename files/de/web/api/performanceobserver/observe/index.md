---
title: "PerformanceObserver: observe()-Methode"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("Performance API")}}

Die **`observe()`**-Methode des **{{domxref("PerformanceObserver")}}**-Interfaces wird verwendet, um den Satz von Performance-Entry-Typen anzugeben, die beobachtet werden sollen.

Siehe {{domxref("PerformanceEntry.entryType")}} für eine Liste der Entry-Typen und {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} für eine Liste der vom Benutzeragent unterstützten Entry-Typen.

Wenn ein übereinstimmendes Performance-Entry aufgezeichnet wird, wird die Callback-Funktion des Performance-Observers, die beim Erstellen des {{domxref("PerformanceObserver")}} festgelegt wurde, aufgerufen.

## Syntax

```js-nolint
observe(options)
```

### Parameter

- `options`

  - : Ein Objekt mit den folgenden möglichen Mitgliedern:

    - `buffered`
      - : Eine boolesche Markierung, die angibt, ob gepufferte Entries in den Puffer des Observers gestellt werden sollen. Muss nur mit der Option "`type`" verwendet werden.
    - `durationThreshold`
      - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Schwellenwert für {{domxref("PerformanceEventTiming")}}-Einträge definiert. Standardwert ist 104 ms und wird auf das nächstgelegene 8 ms gerundet. Der niedrigste mögliche Schwellenwert ist 16 ms. Darf nicht zusammen mit der `entryTypes`-Option verwendet werden.
    - `entryTypes`

      - : Ein Array von Strings, von denen jeder einen zu beobachtenden Performance-Entry-Typ angibt. Darf nicht zusammen mit den Optionen "`type`", "`buffered`" oder "`durationThreshold`" verwendet werden.

        Siehe {{domxref("PerformanceEntry.entryType")}} für eine Liste gültiger Namen von Performance-Entry-Typen. Nicht erkannte Typen werden ignoriert, obwohl der Browser möglicherweise eine Warnmeldung an die Konsole ausgibt, um Entwicklern beim Debuggen ihres Codes zu helfen. Wenn keine gültigen Typen gefunden werden, hat `observe()` keine Wirkung.

    - `type`
      - : Ein einzelner String, der genau einen zu beobachtenden Performance-Entry-Typ angibt. Darf nicht zusammen mit der `entryTypes`-Option verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Beobachten mehrerer Performance-Entry-Typen

Dieses Beispiel erstellt einen `PerformanceObserver` und beobachtet die Entry-Typen `"mark"` und `"measure"`, wie sie in der durch die `observe()`-Methode angegebenen `entryTypes`-Option festgelegt sind.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Verarbeiten von "mark"- und "measure"-Ereignissen
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### Beobachten eines einzelnen Performance-Entry-Typs

Das folgende Beispiel ruft gepufferte Ereignisse ab und abonniert neuere Ereignisse für Ressourcentiming-Ereignisse ({{domxref("PerformanceResourceTiming")}}) unter Verwendung der Optionen `buffered` und `type`. Immer wenn Sie den Observer konfigurieren müssen, um die Option `buffered` oder `durationThreshold` zu verwenden, verwenden Sie `type` anstelle von `entryType`. Andernfalls funktioniert das Sammeln mehrerer Performance-Entry-Typen nicht.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Verarbeiten von "resource"-Ereignissen
  });
});
observer.observe({ type: "resource", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
