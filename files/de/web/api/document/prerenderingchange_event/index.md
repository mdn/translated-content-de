---
title: "Document: prerenderingchange-Ereignis"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`**-Ereignis wird bei einem vorgeladenen Dokument ausgelöst, wenn es aktiviert wird (d. h., der Benutzer die Seite betrachtet).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Code richtet einen Ereignis-Listener ein, der eine Funktion ausführt, sobald das Prerendering abgeschlossen ist, auf einer vorgeladenen Seite (das Prerendering wird über [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) erkannt), oder führt sie sofort auf einer nicht vorgeladenen Seite aus:

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
> Sehen Sie sich die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Landingpage an, insbesondere den Abschnitt zu den [Unsicheren spekulativen Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions), um weitere Informationen über Aktivitäten zu erhalten, die Sie möglicherweise verzögern möchten, bis das Prerendering abgeschlossen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [`prerendering`](/de/docs/Web/API/Document/prerendering)-Eigenschaft
