---
title: "IntersectionObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`takeRecords()`**-Methode der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle gibt ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten zurück, jeweils eines für jedes anvisierte Element, das seit dem letzten Prüfen der Überschneidungen eine Änderung erfahren hat, sei es durch einen expliziten Aufruf dieser Methode oder implizit durch einen automatischen Aufruf des Rückrufs des Observers.

> [!NOTE]
> Wenn Sie den Rückruf verwenden, um diese Änderungen zu überwachen, müssen Sie diese Methode nicht aufrufen.
> Durch das Aufrufen dieser Methode wird die Liste der ausstehenden Überschneidungen geleert, sodass der Rückruf nicht ausgeführt wird.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, je eines für jedes Ziel-Element, dessen Überschneidung mit der Wurzel sich seit dem letzten Prüfen der Überschneidungen geändert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
