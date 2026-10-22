---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongTaskTiming`**-Schnittstelle stellt Informationen über Aufgaben bereit, die den UI-Thread mindestens 50 Millisekunden lang beanspruchen.

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge zu lang andauernden Aufgaben und legt sie wie folgt fest:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die zwischen Beginn und Ende der Aufgabe verstrichene Zeit mit einer Auflösung von 1 ms angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine der folgenden Zeichenfolgen zurück, die den Browsing-Kontext oder Frame bezeichnet, dem die lang andauernde Aufgabe zugeordnet werden kann:
    - `"cross-origin-ancestor"`
    - `"cross-origin-descendant"`
    - `"cross-origin-unreachable"`
    - `"multiple-contexts"`
    - `"same-origin-ancestor"`
    - `"same-origin-descendant"`
    - `"same-origin"`
    - `"self"`
    - `"unknown"`
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Aufgabe begonnen hat.

Diese Schnittstelle unterstützt außerdem die folgende Eigenschaft:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Folge von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Instanzen zurück.

## Instanzmethoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceLongTaskTiming`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Lang andauernde Aufgaben, die den Hauptthread mindestens 50 ms lang blockieren, verursachen unter anderem:

- Eine verzögerte {{Glossary("Time_to_interactive", "Time to Interactive")}} (TTI).
- Eine hohe oder schwankende Eingabelatenz.
- Eine hohe oder schwankende Latenz bei der Ereignisverarbeitung.
- Ruckelnde Animationen und Scrollbewegungen.

Eine lang andauernde Aufgabe ist ein ununterbrochener Zeitraum, in dem der Haupt-UI-Thread mindestens 50 ms lang beschäftigt ist. Häufige Beispiele sind:

- Lang laufende Event-Handler.
- Aufwendige Reflows und andere erneute Render-Vorgänge.
- Arbeiten, die der Browser zwischen verschiedenen Durchläufen der Ereignisschleife ausführt und die mehr als 50 ms dauern.

Bei lang andauernden Aufgaben wird ein „culprit browsing context container“, kurz „Container“, angegeben. Das ist die übergeordnete Seite oder das {{HTMLElement("iframe")}}-, {{HTMLElement("embed")}}- oder {{HTMLElement("object")}}-Element, in dem die Aufgabe aufgetreten ist.

Bei Aufgaben, die nicht innerhalb der übergeordneten Seite auftreten, kann die Schnittstelle [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) dabei helfen, den für die lang andauernde Aufgabe verantwortlichen Container zu ermitteln. Ihre Eigenschaften `containerId`, `containerName` und `containerSrc` können weitere Informationen über die Herkunft der Aufgabe liefern.

## Beispiele

### Informationen zu lang andauernden Aufgaben abrufen

Um Zeitinformationen zu lang andauernden Aufgaben abzurufen, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz und rufen Sie deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf. Übergeben Sie dabei `"longtask"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Setzen Sie außerdem `buffered` auf `true`, um auf lang andauernde Aufgaben zuzugreifen, die der User Agent während der Erstellung des Dokuments zwischengespeichert hat. Der Callback des `PerformanceObserver`-Objekts wird anschließend mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
