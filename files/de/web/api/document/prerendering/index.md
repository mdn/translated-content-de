---
title: "Dokument: prerendering-Eigenschaft"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Die schreibgeschützte **`prerendering`**-Eigenschaft des {{domxref("Document")}}-Interfaces gibt `true` zurück, wenn das Dokument derzeit durch den [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) im Prozess des Vorabladens (prerendering) ist.

## Wert

Ein Boolean. Gibt `true` zurück, wenn das Dokument derzeit im Prozess des Vorabladens ist, und `false`, wenn nicht. `false` wird für Dokumente zurückgegeben, die das Vorabladen abgeschlossen haben und für Dokumente, die nicht vorab geladen wurden.

## Beispiele

Um eine Aktivität auszuführen, während die Seite vorab geladen wird, können Sie die `prerendering`-Eigenschaft überprüfen. Sie könnten zum Beispiel einige Analysen ausführen:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

Wenn ein vorab geladenes Dokument aktiviert wird, wird {{domxref("PerformanceNavigationTiming.activationStart")}} auf einen {{domxref("DOMHighResTimeStamp")}}-Wert gesetzt, der die Zeit zwischen dem Start des Vorabladens und der tatsächlichen Aktivierung des Dokuments darstellt. Die folgende Funktion kann auf vorab ladende _und_ vorab geladene Seiten prüfen:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Wenn die vorab geladene Seite durch die Ansicht des Benutzers aktiviert wird, löst das {{domxref("Document.prerenderingchange_event", "prerenderingchange")}}-Ereignis aus. Dies kann verwendet werden, um Aktivitäten zu aktivieren, die zuvor standardmäßig beim Laden der Seite gestartet wurden, die Sie jedoch hinauszögern möchten, bis die Seite tatsächlich vom Benutzer angesehen wird. Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Vorabladen abgeschlossen ist, auf einer vorab geladenen Seite, oder führt sie sofort auf einer nicht vorab geladenen Seite aus:

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
> Weitere Informationen zu den Arten von Aktivitäten, die Sie möglicherweise hinauszögern möchten, finden Sie auf der Landingpage der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) und insbesondere im Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}}-Ereignis
