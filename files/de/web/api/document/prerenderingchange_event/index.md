---
title: "Dokument: prerenderingchange-Ereignis"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

Das **`prerenderingchange`**-Ereignis wird für ein vorgerendertes Dokument ausgelöst, wenn es aktiviert wird (d.h. wenn der Benutzer die Seite aufruft).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("prerenderingchange", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onprerenderingchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Ausführung von Code während des Vorrenderns verhindern

Das Beispiel zeigt, wie sich die Ausführung von Code, der andernfalls während des Vorrenderns ausgeführt würde, bis nach der Aktivierung der Seite aufschieben lässt.
Dies ist nützlich für Analysecode, der nur relevant ist, wenn die Seite tatsächlich aufgerufen wird.

Der Code prüft mithilfe von [`Document.prerendering`](/de/docs/Web/API/Document/prerendering), ob die Seite gerade vorgerendert wird. Falls ja, fügt er einen Event-Listener hinzu, der nach der Aktivierung der Seite eine Funktion zur Initialisierung des Analysecodes ausführt.
Wird eine Seite nicht vorgerendert, wird der Analysecode sofort ausgeführt.

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

Beachten Sie, dass diese Art von Code nicht verwendet werden sollte, um zu messen, wie oft eine vorgerenderte Seite aktiviert wird: Der Code wird möglicherweise erst ausgeführt, nachdem die Seite bereits aktiviert wurde.

> [!NOTE]
> Weitere Informationen darüber, welche Aktivitäten Sie möglicherweise bis nach Abschluss des Vorrenderns aufschieben sollten, finden Sie auf der Übersichtsseite zur [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API), insbesondere im Abschnitt [Unsichere Bedingungen für spekulatives Laden](/de/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions).

### Aktivierungen vorgerenderter Seiten messen

Dieser Code zeigt, wie Sie messen können, wie oft eine vorgerenderte Seite aktiviert wird.
Er verwendet `prerenderingchange`, um Aktivierungsereignisse zu erfassen, und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), um Navigationsaktivierungen zu erfassen.

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
- Eigenschaft [`prerendering`](/de/docs/Web/API/Document/prerendering)
- Eigenschaft [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart)
