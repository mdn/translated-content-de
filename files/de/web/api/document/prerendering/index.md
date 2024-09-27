---
title: "Document: prerendering-Eigenschaft"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Die **`prerendering`**-Schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt `true` zurück, wenn das Dokument derzeit im Prerendering-Prozess ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn das Dokument derzeit im Prerendering-Prozess ist, und `false`, wenn nicht. `false` wird für Dokumente zurückgegeben, die das Prerendering abgeschlossen haben, sowie für Dokumente, die nicht prerendered wurden.

## Beispiele

Um eine Aktivität auszuführen, während die Seite prerendert wird, können Sie die `prerendering`-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen durchführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein prerendered Dokument aktiviert wird, wird [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Wert gesetzt, der die Zeit zwischen dem Start des Prerenderings und der tatsächlichen Aktivierung des Dokuments darstellt. Die folgende Funktion kann sowohl für prerendering als auch prerendered Seiten überprüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die prerendered Seite vom Benutzer betrachtet wird, wird das [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event)-Ereignis ausgelöst. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet würden, die Sie jedoch verzögern möchten, bis die Seite tatsächlich vom Benutzer betrachtet wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer prerendered Seite abgeschlossen ist, oder sie sofort auf einer nicht prerendered Seite auszuführen:

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
> Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Übersichtsseite und insbesondere den Abschnitt [Unsafe speculative loading conditions](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) für weitere Informationen über die Arten von Aktivitäten, die Sie möglicherweise verzögern möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) Ereignis
