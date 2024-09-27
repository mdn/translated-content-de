---
title: "Document: prerenderingchange Ereignis"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`**-Ereignis wird auf einem prerendered Dokument ausgelöst, wenn es aktiviert wird (d. h. der Benutzer die Seite betrachtet).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishändler-Eigenschaft.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Code richtet einen Ereignislistener ein, um eine Funktion auszuführen, sobald das Prerendering auf einer prerendered Seite abgeschlossen ist (das Prerendering wird über [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) erkannt), oder führt sie sofort auf einer nicht prerendered Seite aus:

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
> Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Landing-Seite und insbesondere den Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) für weitere Informationen zu den Arten von Aktivitäten, die Sie möglicherweise verzögern möchten, bis das Prerendering abgeschlossen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft
