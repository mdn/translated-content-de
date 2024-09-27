---
title: "IntersectionObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Intersection Observer API")}}

Die Methode **`takeRecords()`** des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) gibt ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten zurück, eines für jedes gezielte Element, das seit der letzten Überprüfung der Schnittpunkte eine Schnittpunktänderung erfahren hat, entweder explizit durch einen Aufruf dieser Methode oder implizit durch einen automatischen Aufruf des Rückrufs des Beobachters.

> [!NOTE]
> Wenn Sie den Rückruf verwenden, um diese Änderungen zu überwachen, müssen Sie diese Methode nicht aufrufen. Der Aufruf dieser Methode löscht die ausstehenden Schnittpunktlisten, sodass der Rückruf nicht ausgeführt wird.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, eines für jedes Ziel-Element, dessen Schnittpunkt mit der Wurzel sich seit der letzten Überprüfung der Schnittpunkte geändert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
