---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{APIRef("Performance API")}}

Das `PerformanceEventTiming`-Interface der Event Timing API bietet Einblicke in die Latenz bestimmter Ereignistypen, die durch Benutzerinteraktion ausgelöst werden.

## Beschreibung

Diese API ermöglicht Einblick in langsame Ereignisse, indem sie Ereignis-Timestamps und die Dauer für bestimmte Ereignistypen bereitstellt ([siehe unten](#exponierte_ereignisse)). So können Sie zum Beispiel die Zeit zwischen einer Benutzeraktion und dem Beginn des zugehörigen Ereignishandlers oder die Ausführungsdauer eines Ereignishandlers überwachen.

Diese API ist besonders nützlich, um die {{Glossary("first_input_delay", "erste Eingabeverzögerung")}} (FID) zu messen: die Zeit vom Zeitpunkt der ersten Benutzerinteraktion mit Ihrer App bis zu dem Zeitpunkt, an dem der Browser tatsächlich in der Lage ist, auf diese Interaktion zu reagieren.

Typischerweise arbeiten Sie mit `PerformanceEventTiming`-Objekten, indem Sie eine Instanz des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) erstellen und dann dessen [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode aufrufen, wobei Sie `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Der `PerformanceObserver`-Objektaufruf wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können. Sehen Sie das [Beispiel unten](#abrufen_von_ereignis-timing-informationen) für mehr.

Standardmäßig werden `PerformanceEventTiming`-Einträge freigegeben, wenn ihre `duration` 104 ms oder mehr beträgt. Untersuchungen legen nahe, dass Benutzereingaben, die nicht innerhalb von 100 ms behandelt werden, als langsam gelten, und 104 ms ist das erste Vielfache von 8, das größer als 100 ms ist (aus Sicherheitsgründen wird diese API auf das nächste Vielfache von 8 ms gerundet). Allerdings können Sie den [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) mit einem anderen Schwellwert einstellen, indem Sie die Option `durationThreshold` in der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode verwenden.

Dieses Interface erbt Methoden und Eigenschaften von seinem Elternteil, [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry):

{{InheritanceDiagram}}

### Exponierte Ereignisse

Die folgenden Ereignistypen werden von der Event Timing API bereitgestellt:

<table>
  <tbody>
    <tr>
      <th scope="row">Klick-Ereignisse</th>
      <td>
        [`auxclick`](/de/docs/Web/API/Element/auxclick_event),
        [`click`](/de/docs/Web/API/Element/click_event),
        [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event),
        [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Kompositionsereignisse</th>
      <td>
        [`compositionend`](/de/docs/Web/API/Element/compositionend_event),
        [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event),
        [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Drag &amp; Drop-Ereignisse</th>
      <td>
        [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event),
        [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event),
        [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event),
        [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event),
        [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event),
        [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Eingabeereignisse</th>
      <td>
        [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event),
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Tastaturereignisse</th>
      <td>
        [`keydown`](/de/docs/Web/API/Element/keydown_event),
        [`keypress`](/de/docs/Web/API/Element/keypress_event),
        [`keyup`](/de/docs/Web/API/Element/keyup_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Mausereignisse</th>
      <td>
        [`mousedown`](/de/docs/Web/API/Element/mousedown_event),
        [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event),
        [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event),
        [`mouseout`](/de/docs/Web/API/Element/mouseout_event),
        [`mouseover`](/de/docs/Web/API/Element/mouseover_event),
        [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Pointer-Ereignisse</th>
      <td>
        [`pointerover`](/de/docs/Web/API/Element/pointerover_event),
        [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event),
        [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event),
        [`pointerup`](/de/docs/Web/API/Element/pointerup_event),
        [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event),
        [`pointerout`](/de/docs/Web/API/Element/pointerout_event),
        [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event),
        [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event),
        [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Touch-Ereignisse</th>
      <td>
        [`touchstart`](/de/docs/Web/API/Element/touchstart_event),
        [`touchend`](/de/docs/Web/API/Element/touchend_event),
        [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass die folgenden Ereignisse nicht in der Liste aufgeführt sind, da es sich um kontinuierliche Ereignisse handelt und derzeit keine aussagekräftigen Ereigniszählungen oder Leistungsmetriken gewonnen werden können: [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event),
[`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`wheel`](/de/docs/Web/API/Element/wheel_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event).

Um eine Liste aller freigegebenen Ereignisse zu erhalten, können Sie auch Schlüssel in der [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts)-Map nachschlagen:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Konstruktor

Dieses Interface hat keinen eigenen Konstruktor. Sehen Sie das [Beispiel unten](#abrufen_von_ereignis-timing-informationen), um zu erfahren, wie Sie typischerweise die Informationen erhalten, die das `PerformanceEventTiming`-Interface enthält.

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ereignis-Timing-Leistungseintragstypen, indem es sie wie folgt qualifiziert:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit von `startTime` bis zum nächsten Rendering-Paint (auf die nächsten 8 ms gerundet) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"event"` (für lange Ereignisse) oder `"first-input"` (für die erste Benutzerinteraktion) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Typ des zugehörigen Ereignisses zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die [`timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des zugehörigen Ereignisses darstellt. Dies ist die Zeit, zu der das Ereignis erstellt wurde, und kann als Proxy für die Zeit betrachtet werden, zu der die Benutzerinteraktion stattfand.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceEventTiming.cancelable`](/de/docs/Web/API/PerformanceEventTiming/cancelable) {{ReadOnlyInline}}
  - : Gibt die [`cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des zugehörigen Ereignisses zurück.
- [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID zurück, die die Benutzerinteraktion eindeutig identifiziert, die das zugehörige Ereignis ausgelöst hat.
- [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der die Ereignisausgabe begann. Um die Zeit zwischen einer Benutzeraktion und der Zeit, zu der der Ereignishandler zu laufen beginnt, zu messen, berechnen Sie `processingStart-startTime`.
- [`PerformanceEventTiming.processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der die Ereignisausgabe endete. Um die Zeit, die der Ereignishandler zu laufen benötigte, zu messen, berechnen Sie `processingEnd-processingStart`.
- [`PerformanceEventTiming.target`](/de/docs/Web/API/PerformanceEventTiming/target) {{ReadOnlyInline}}
  - : Gibt das letzte Ziel des zugehörigen Ereignisses zurück, wenn es nicht entfernt wird.

## Instanz-Methoden

- [`PerformanceEventTiming.toJSON()`](/de/docs/Web/API/PerformanceEventTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceEventTiming`-Objekts zurück.

## Beispiele

### Abrufen von Ereignis-Timing-Informationen

Um Informationen zur Ereignis-Timing zu erhalten, erstellen Sie eine Instanz von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) und rufen dann dessen [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, wobei Sie `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Sie müssen auch `buffered` auf `true` setzen, um Zugriff auf Ereignisse zu erhalten, die der Nutzer-Agent während des Dokumentaufbaus gepuffert hat. Der `PerformanceObserver`-Objektaufruf wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Full duration
    const duration = entry.duration;

    // Input delay (before processing event)
    const delay = entry.processingStart - entry.startTime;

    // Synchronous event processing time
    // (between start and end dispatch)
    const eventHandlerTime = entry.processingEnd - entry.processingStart;
    console.log(`Total duration: ${duration}`);
    console.log(`Event delay: ${delay}`);
    console.log(`Event handler duration: ${eventHandlerTime}`);
  });
});

// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

Sie können auch ein anderes [`durationThreshold`](/de/docs/Web/API/PerformanceObserver/observe#durationthreshold) festlegen. Der Standardwert ist 104 ms und die minimale mögliche Dauer-Schwelle beträgt 16 ms.

```js
observer.observe({ type: "event", durationThreshold: 16, buffered: true });
```

### Berichterstattung über die erste Eingabeverzögerung (FID)

Die {{Glossary("first_input_delay", "erste Eingabeverzögerung")}} oder FID misst die Zeit vom Zeitpunkt der ersten Interaktion eines Benutzers mit einer Seite (d. h. wenn er auf einen Link klickt oder auf eine Schaltfläche tippt) bis zu dem Zeitpunkt, an dem der Browser tatsächlich in der Lage ist, mit der Verarbeitung von Ereignishandlern als Reaktion auf diese Interaktion zu beginnen.

```js
// Keep track of whether (and when) the page was first hidden, see:
// https://github.com/w3c/page-visibility/issues/29
// NOTE: ideally this check would be performed in the document <head>
// to avoid cases where the visibility state changes before this code runs.
let firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
document.addEventListener(
  "visibilitychange",
  (event) => {
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
  },
  { once: true },
);

// Sends the passed data to an analytics endpoint. This code
// uses `/analytics`; you can replace it with your own URL.
function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  // Use `navigator.sendBeacon()` if available,
  // falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
    fetch("/analytics", { body, method: "POST", keepalive: true });
}

// Use a try/catch instead of feature detecting `first-input`
// support, since some browsers throw when using the new `type` option.
// https://webkit.org/b/209216
try {
  function onFirstInputEntry(entry) {
    // Only report FID if the page wasn't hidden prior to
    // the entry being dispatched. This typically happens when a
    // page is loaded in a background tab.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Report the FID value to an analytics endpoint.
      sendToAnalytics({ fid });
    }
  }

  // Create a PerformanceObserver that calls
  // `onFirstInputEntry` for each entry.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Observe entries of type `first-input`, including buffered entries,
  // i.e. entries that occurred before calling `observe()` below.
  po.observe({
    type: "first-input",
    buffered: true,
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
