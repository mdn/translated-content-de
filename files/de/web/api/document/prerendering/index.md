---
title: "Dokument: prerendering-Eigenschaft"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}{{non-standard_header}}

Die **`prerendering`** schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt `true` zurück, wenn das Dokument derzeit im Prozess des Vorabladens (prerendering) ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.

## Wert

Ein Boolean. Gibt `true` zurück, wenn das Dokument derzeit im Prozess des Vorabladens ist, und `false`, wenn es nicht der Fall ist. `false` wird für Dokumente zurückgegeben, die das Vorabladen abgeschlossen haben, und für Dokumente, die nicht vorabgeladen wurden.

## Beispiele

Um eine Aktivität während des Vorabladens der Seite auszuführen, können Sie die `prerendering`-Eigenschaft überprüfen. Sie könnten beispielsweise einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorabgeladenes Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert gesetzt, der die Zeit zwischen dem Start des Vorabladens und der tatsächlichen Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für vorabladende als auch für vorabgeladene Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    performance.getEntriesByType("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorabgeladene Seite durch die Betrachtung der Seite durch den Benutzer aktiviert wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie jedoch verzögern möchten, bis die Seite tatsächlich vom Benutzer betrachtet wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Vorabladen auf einer vorabgeladenen Seite abgeschlossen ist oder diese sofort auf einer nicht vorabgeladenen Seite auszuführen:

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
> Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Übersichtsseite und insbesondere den Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) für weitere Informationen zu den Arten von Aktivitäten, die Sie möglicherweise verzögern möchten.

Um zu messen, wie oft ein Vorabladen aktiviert wird, kombinieren Sie alle drei APIs: `document.prerendering`, um Fälle zu erkennen, in denen die Seite derzeit vorabgeladen wird, `prerenderingchange`, um in diesem Fall auf Aktivierungen zu achten, und `activationStart`, um Fälle zu überprüfen, in denen die Seite in der Vergangenheit vorabgeladen wurde.

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
