---
title: "PerformanceSoftNavigation: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/PerformanceSoftNavigation/navigationType
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die **`navigationType`** schreibgeschützte Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den Typ der Soft-Navigation zurück — `push`, `reload`, `replace` oder `traverse`.

Diese liefert die gleichen Typen wie [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType).

## Wert

Ein aufgezählter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`
  - : Ein neuer Ort wird navigiert, was dazu führt, dass ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`
  - : Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

### Protokollierung des Navigationstyps der Soft-Navigation

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation` Leistungseinträge zu protokollieren, sobald sie in der Leistungs-Timeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
