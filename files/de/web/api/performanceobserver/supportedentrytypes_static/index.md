---
title: "PerformanceObserver: Die statische Eigenschaft supportedEntryTypes"
short-title: supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Performance API")}}

Die statische, schreibgeschützte Eigenschaft **`supportedEntryTypes`** der {{domxref("PerformanceObserver")}}-Schnittstelle gibt ein Array der vom Benutzeragenten unterstützten {{domxref("PerformanceEntry.entryType","entryType")}}-Werte zurück.

Da die Liste der unterstützten Einträge je nach Browser variiert und sich weiterentwickelt, ermöglicht diese Eigenschaft Webentwicklern zu überprüfen, welche verfügbar sind.

## Wert

Ein Array von {{domxref("PerformanceEntry.entryType")}}-Werten.

## Beispiele

### Verwendung der Konsole zur Überprüfung unterstützter Typen

Um herauszufinden, welche {{domxref("PerformanceEntry.entryType","entryType")}}-Werte ein Browser unterstützt, geben Sie <kbd>PerformanceObserver.supportedEntryTypes</kbd> in die Konsole ein. Dies gibt ein Array der unterstützten Werte zurück.

```js
PerformanceObserver.supportedEntryTypes;

// gibt ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "mark", "measure", "navigation", "paint", "resource"] in Chrome 89 zurück
```

### Überprüfung von nicht unterstützten Typen

Die folgende Funktion überprüft die Unterstützung eines Arrays möglicher Entry-Typen. Die nicht unterstützten Typen werden in der Konsole protokolliert, allerdings könnten diese Informationen auch auf clientseitigen Analysediensten protokolliert werden, um anzuzeigen, dass der besondere Typ nicht beobachtet werden konnte.

```js
function detectSupport(entryTypes) {
  for (const entryType of entryTypes) {
    if (!PerformanceObserver.supportedEntryTypes.includes(entryType)) {
      console.log(entryType);
    }
  }
}

detectSupport(["resource", "mark", "first-input", "largest-contentful-paint"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
