---
title: "Dokument: prerenderingchange Event"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`** Ereignis wird auf einem prerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite anzeigt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verhindern, dass Code während des Prerenderings ausgeführt wird

Das Beispiel zeigt, wie Code, der sonst während des Prerenderings ausgeführt würde, so lange aufgeschoben wird, bis die Seite aktiviert wird.
Dies ist nützlich, um Analyse-Code zu verschieben, der nur relevant ist, wenn und falls die Seite tatsächlich angesehen wird.

Der Code prüft, ob Prerendering läuft, indem [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) verwendet wird, und fügt in diesem Fall einen Ereignislistener hinzu, um eine Analyse-Initialisierungsfunktion auszuführen, sobald die Seite aktiviert wird. Auf einer Seite, die nicht prerendert wird, wird der Analyse-Code sofort ausgeführt.

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

Beachten Sie, dass dieser Code nicht verwendet werden sollte, um zu messen, wie oft ein Prerender aktiviert wird, da der Code möglicherweise ausgeführt wird, nachdem eine prerenderte Seite bereits aktiviert wurde.

> [!NOTE]
> Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Startseite und insbesondere den Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) für weitere Informationen zu den Arten von Aktivitäten, die Sie nach Abschluss des Prerenderings verzögern möchten.

### Messen von Prerendering-Aktivierungen

Dieser Code zeigt, wie oft ein Prerender aktiviert wird. Es nutzt `prerenderingchange`, um Aktivierungsereignisse zu verfolgen, und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), um Navigationsaktivierungen zu verfolgen.

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
- [`prerendering`](/de/docs/Web/API/Document/prerendering) Eigenschaft
- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) Eigenschaft
