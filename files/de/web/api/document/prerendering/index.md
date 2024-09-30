---
title: "Document: prerendering-Eigenschaft"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Die **`prerendering`** schreibgeschützte Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt `true` zurück, wenn das Dokument derzeit im Prozess des Prerenderings ist, wie es über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert wurde.

## Wert

Ein Boolean. Gibt `true` zurück, wenn sich das Dokument gerade im Prerendering-Prozess befindet, und `false`, wenn nicht. Für Dokumente, die das Prerendering abgeschlossen haben oder nicht prerendered wurden, wird `false` zurückgegeben.

## Beispiele

Um eine Aktivität auszuführen, während die Seite gerendert wird, können Sie die `prerendering`-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein prerendered Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert gesetzt, der die Zeit zwischen dem Start des Prerenderings und der tatsächlichen Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für prerendering als auch prerendered Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die prerendered Seite durch das Betrachten der Seite durch den Benutzer aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann genutzt werden, um Aktivitäten zu aktivieren, die vorher standardmäßig beim Laden der Seite gestartet wurden, die Sie jedoch verzögern möchten, bis die Seite tatsächlich vom Benutzer angesehen wird. Der folgende Code richtet einen Ereignislistener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer prerendered Seite beendet ist, oder führt sie sofort auf einer nicht prerendered Seite aus:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

> [!NOTE]
> Weitere Informationen zu den Arten von Aktivitäten, die Sie möglicherweise verzögern möchten, finden Sie auf der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Startseite, insbesondere im Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis
