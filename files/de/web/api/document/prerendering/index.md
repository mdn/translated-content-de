---
title: "Dokument: prerendering-Eigenschaft"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: 420ee5d00e14eec60923ada0e48325e44d613a1b
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Die **`prerendering`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ist schreibgeschützt und gibt `true` zurück, wenn das Dokument derzeit im Prozess des Prerenderings ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn sich das Dokument derzeit im Prozess des Prerenderings befindet, und `false`, wenn nicht. Für Dokumente, die das Prerendering abgeschlossen haben, und Dokumente, die nicht prerendered wurden, wird `false` zurückgegeben.

## Beispiele

Um eine Aktivität auszuführen, während die Seite prerendert wird, können Sie die `prerendering`-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein prerendered Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Wert gesetzt, der die Zeit zwischen dem Start des Prerenderings und der tatsächlichen Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für prerendering- als auch für prerendered-Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    performance.getEntriesByType("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die prerendered Seite vom Benutzer durch Ansicht der Seite aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu ermöglichen, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie aber verzögern möchten, bis die Seite tatsächlich vom Benutzer angesehen wird. Der folgende Code richtet einen Ereignis-Listener ein, der eine Funktion ausführt, sobald das Prerendering abgeschlossen ist, auf einer prerendered-Seite, oder sie führt diese sofort auf einer nicht-prerendered-Seite aus:

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
> Weitere Informationen zu den Arten von Aktivitäten, die Sie möglicherweise verzögern möchten, finden Sie auf der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Hauptseite und insbesondere im Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions).

Um zu messen, wie oft ein Prerender aktiviert wird, kombinieren Sie alle drei APIs: `document.prerendering`, um Fälle zu erkennen, in denen die Seite derzeit prerendert wird, `prerenderingchange`, um Aktivierungen in diesem Fall zu beobachten, und `activationStart`, um Fälle zu prüfen, in denen die Seite in der Vergangenheit prerendered wurde.

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
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart)-Eigenschaft
