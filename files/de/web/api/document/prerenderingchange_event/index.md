---
title: "Dokument: prerenderingchange Ereignis"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`**-Ereignis wird bei einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Benutzer die Seite anzeigt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("prerenderingchange", (event) => { })

onprerenderingchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verhindern, dass Code während des Prerenderings ausgeführt wird

Das Beispiel zeigt, wie man Code, der ansonsten während des Prerenderings ausgeführt würde, aufschiebt, bis die Seite aktiviert wurde.
Dies ist nützlich, um Analytik-Code zu verzögern, der nur relevant ist, wenn und falls die Seite tatsächlich angezeigt wird.

Der Code überprüft, ob Prerendering läuft, indem [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) verwendet wird, und fügt in diesem Fall einen Ereignislistener hinzu, der eine Initialisierungsfunktion für Analytik ausführt, sobald die Seite aktiviert wird.
Auf einer Seite, die nicht vorgerendert wird, wird der Analytik-Code sofort ausgeführt.

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

Beachten Sie, dass dieser Code nicht verwendet werden sollte, um zu messen, wie oft ein Vorab-Rendern aktiviert wird, da der Code möglicherweise ausgeführt wird, nachdem eine vorgerenderte Seite bereits aktiviert wurde.

> [!NOTE]
> Siehe die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Hauptseite und insbesondere den Abschnitt [Unsichere spekulative Ladebedingungen](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) für weitere Informationen zu den Arten von Aktivitäten, die Sie möglicherweise aufschieben möchten, bis das Prerendering abgeschlossen ist.

### Messen von Prerendering-Aktivierungen

Dieser Code zeigt, wie man misst, wie oft ein Vorab-Rendern aktiviert wird.
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
