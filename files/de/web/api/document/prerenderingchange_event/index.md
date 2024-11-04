---
title: "Dokument: prerenderingchange Ereignis"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: 420ee5d00e14eec60923ada0e48325e44d613a1b
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`**-Ereignis wird bei einem vorab gerenderten Dokument ausgelöst, wenn es aktiviert wird (d. h. der Benutzer die Seite betrachtet).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verhindern von Codeausführung während des Prerenderings

Das Beispiel zeigt, wie man Code zurückstellen kann, der ansonsten während des Prerenderings ausgeführt würde, bis nach der Aktivierung der Seite.
Dies ist nützlich, um Analysecode zu verschieben, der nur relevant ist, wenn und falls die Seite tatsächlich betrachtet wird.

Der Code überprüft, ob das Prerendering läuft, indem er [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) verwendet. Falls ja, wird ein Event-Listener hinzugefügt, der eine Analyse-Initialisierungsfunktion ausführt, sobald die Seite aktiviert wird.
Auf einer Seite, die nicht vorgerendert wird, wird der Analysecode sofort ausgeführt.

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

Beachten Sie, dass dieser Code nicht verwendet werden sollte, um zu messen, wie oft ein Prerender aktiviert wird, da der Code möglicherweise ausgeführt wird, nachdem eine vorgerenderte Seite bereits aktiviert wurde.

> [!NOTE]
> Sehen Sie sich die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Übersichtsseite an, insbesondere den Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions), um mehr über die Arten von Aktivitäten zu erfahren, die Sie möglicherweise verzögern möchten, bis das Prerendering abgeschlossen ist.

### Messen von Prerendering-Aktivierungen

Dieser Code zeigt, wie man misst, wie oft ein Prerender aktiviert wird.
Es verwendet das `prerenderingchange`, um Aktivierungsereignisse zu verfolgen, und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), um Navigationsaktivierungen zu verfolgen.

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
