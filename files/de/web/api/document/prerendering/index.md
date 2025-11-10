---
title: "Dokument: prerendering-Eigenschaft"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Die schreibgeschützte Eigenschaft **`prerendering`** des [`Document`](/de/docs/Web/API/Document) Interface gibt `true` zurück, wenn das Dokument derzeit im Prozess des Prerendings ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn das Dokument derzeit im Prozess des Prerendings ist, und `false`, wenn es dies nicht ist. `false` wird für Dokumente zurückgegeben, die das Prerendering abgeschlossen haben, und für Dokumente, die nicht prerendert wurden.

## Beispiele

Um eine Aktivität auszuführen, während die Seite prerendert wird, können Sie die `prerendering`-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein prerendertes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Wert gesetzt, der die Zeit zwischen dem Start des Prerendings und der tatsächlichen Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für prerendernde _als auch_ für prerendert fortgeschrittene Seiten überprüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    performance.getEntriesByType("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die prerendert-Seite durch das Betrachten durch den Benutzer aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie jedoch verzögern möchten, bis die Seite tatsächlich vom Benutzer betrachtet wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering beendet ist, auf einer prerendert-Seite, oder führt sie sofort auf einer nicht prerendert-Seite aus:

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
> Weitere Informationen darüber, welche Art von Aktivitäten Sie möglicherweise verzögern möchten, finden Sie auf der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Startseite und insbesondere im Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions).

Um zu messen, wie oft ein Prerender aktiviert wird, kombinieren Sie alle drei APIs: `document.prerendering`, um Fälle zu erkennen, in denen die Seite derzeit prerendert wird, `prerenderingchange`, um auf Aktivierungen in diesem Fall zu achten, und `activationStart`, um Fälle zu überprüfen, in denen die Seite in der Vergangenheit prerendert wurde.

```js
if (document.prerendering) {
  document.addEventListener(
    "prerenderingchange",
    () => {
      console.log("Prerender activated after this script ran");
    },
    { once: true },
  );
} else if (performance.getEntriesByType("navigation")[0]?.activationStart > 0) {
  console.log("Prerender activated before this script ran");
} else {
  console.log("This page load was not via prerendering");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) Eigenschaft
