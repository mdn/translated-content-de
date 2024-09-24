---
title: "IntersectionObserver: takeRecords() Methode"
short-title: takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Intersection Observer API")}}

Die Methode **`takeRecords()`** des {{domxref("IntersectionObserver")}} gibt ein Array von {{domxref("IntersectionObserverEntry")}}-Objekten zurück, eines für jedes gezielte Element, das seit der letzten Überprüfung der Schnittmengen eine Veränderung erfahren hat, entweder explizit durch einen Aufruf dieser Methode oder implizit durch einen automatischen Aufruf des Beobachter-Callbacks.

> [!NOTE]
> Wenn Sie das Callback verwenden, um diese Änderungen zu überwachen, müssen Sie diese Methode nicht aufrufen. Ein Aufruf dieser Methode löscht die ausstehende Schnittmengenliste, sodass das Callback nicht ausgeführt wird.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("IntersectionObserverEntry")}}-Objekten, eines für jedes Zielobjekt, dessen Schnittpunkt mit dem Root sich seit der letzten Überprüfung der Schnittmengen geändert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
