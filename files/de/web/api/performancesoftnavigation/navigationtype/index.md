---
title: "PerformanceSoftNavigation: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/PerformanceSoftNavigation/navigationType
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigationType`**-Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den Typ der Softnavigation zurück — `push`, `reload`, `replace` oder `traverse`.

Dies gibt dieselben Typen zurück wie [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType).

## Wert

Ein aufgezählter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`
  - : Eine neue Position wird navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wird.
- `reload`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`
  - : Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufs-Eintrag ersetzt. Dieser neue Eintrag verwendet denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key), erhält jedoch eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id).
- `traverse`
  - : Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

### Protokollierung des Navigationstyps der Softnavigation

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performance-Einträge zu protokollieren, wenn sie in der Performance-Zeitleiste des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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
