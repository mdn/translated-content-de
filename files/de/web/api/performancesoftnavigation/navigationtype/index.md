---
title: "PerformanceSoftNavigation: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/PerformanceSoftNavigation/navigationType
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`navigationType`**-Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den Typ der Soft-Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

Diese gibt die gleichen Typen zurück wie [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType).

## Wert

Ein enumerierter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`
  - : Es wird zu einem neuen Ort navigiert, was dazu führt, dass ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird den gleichen [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) verwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`
  - : Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

### Protokollierung des Navigationstyps der Soft-Navigation

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Leistungseinträge zu protokollieren, während sie in der Leistungszeitleiste des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.navigationType);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
