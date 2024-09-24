---
title: "Dokument: prerenderingchange-Ereignis"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`**-Ereignis wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d. h. der Benutzer die Seite ansieht).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Der folgende Code richtet einen Ereignis-Listener ein, um eine Funktion auszuführen, sobald das Vorab-Rendering auf einer vorab gerenderten Seite abgeschlossen ist (das Vorab-Rendering wird über {{domxref("Document.prerendering")}} erkannt) oder führt es sofort auf einer nicht vorab gerenderten Seite aus:

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
> Weitere Informationen zu den Aktivitäten, die Sie möglicherweise verzögern möchten, bis das Vorab-Rendering abgeschlossen ist, finden Sie auf der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Landingpage und insbesondere im Abschnitt [Unsafe speculative loading conditions](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerendering", "prerendering")}}-Eigenschaft
