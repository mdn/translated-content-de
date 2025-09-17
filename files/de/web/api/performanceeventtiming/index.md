---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("Performance API")}}

Das `PerformanceEventTiming`-Interface der Event Timing API bietet Einblicke in die Latenz bestimmter Ereignistypen, die durch Benutzerinteraktionen ausgelöst werden.

## Beschreibung

Diese API ermöglicht die Sichtbarkeit langsamer Ereignisse, indem sie Ereigniszeitstempel und Dauer für bestimmte Ereignistypen bereitstellt ([siehe unten](#offengelegte_ereignisse)). Beispielsweise können Sie die Zeit zwischen einer Benutzeraktion und dem Start des zugehörigen Ereignishandlers oder die Zeit messen, die ein Ereignishandler benötigt, um auszuführen.

Diese API ist besonders nützlich zur Messung der {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP): der längsten Zeit (abzüglich einiger Ausreißer) von dem Punkt, an dem ein Benutzer mit Ihrer App interagiert, bis zu dem Punkt, an dem der Browser tatsächlich in der Lage war, auf diese Interaktion zu reagieren.

In der Regel arbeiten Sie mit `PerformanceEventTiming`-Objekten, indem Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz erstellen und dann ihre [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode aufrufen, wobei Sie `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können. Siehe das [Beispiel unten](#erfassen_von_ereignis-timing-informationen) für mehr.

Standardmäßig werden `PerformanceEventTiming`-Einträge angezeigt, wenn ihre `duration` 104 ms oder länger ist. Forschungen legen nahe, dass Benutzereingaben, die nicht innerhalb von 100 ms behandelt werden, als langsam gelten und 104 ms das erste Vielfache von 8 ist, das größer als 100 ms ist (aus Sicherheitsgründen wird diese API auf das nächste Vielfache von 8 ms gerundet). Sie können jedoch den [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) auf einen anderen Schwellenwert einstellen, indem Sie die `durationThreshold`-Option in der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode verwenden.

Dieses Interface erbt Methoden und Eigenschaften von seinem Elternteil, [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry):

{{InheritanceDiagram}}

### Offengelegte Ereignisse

Die folgenden Ereignistypen werden von der Event Timing API offengelegt:

<table>
  <tbody>
    <tr>
      <th scope="row">Klickereignisse</th>
      <td>
        [`auxclick`](/de/docs/Web/API/Element/auxclick_event),
        [`click`](/de/docs/Web/API/Element/click_event),
        [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event),
        [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Kompositionsevents</th>
      <td>
        [`compositionend`](/de/docs/Web/API/Element/compositionend_event),
        [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event),
        [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Drag & Drop-Ereignisse</th>
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
      <th scope="row">Eingabeevents</th>
      <td>
        [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event),
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Tastaturevents</th>
      <td>
        [`keydown`](/de/docs/Web/API/Element/keydown_event),
        [`keypress`](/de/docs/Web/API/Element/keypress_event),
        [`keyup`](/de/docs/Web/API/Element/keyup_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Mausevents</th>
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
      <th scope="row">Zeigerevents</th>
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
      <th scope="row">Touchevents</th>
      <td>
        [`touchstart`](/de/docs/Web/API/Element/touchstart_event),
        [`touchend`](/de/docs/Web/API/Element/touchend_event),
        [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass die folgenden Ereignisse nicht in der Liste enthalten sind, da sie kontinuierliche Ereignisse sind und derzeit keine sinnvollen Ereigniszählungen oder Leistungsmetriken abgeleitet werden können: [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event),
[`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`wheel`](/de/docs/Web/API/Element/wheel_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event).

Um eine Liste aller offengelegten Ereignisse zu erhalten, können Sie auch Schlüssel im [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts)-Verzeichnis nachschlagen:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Konstruktor

Dieses Interface hat keinen eigenen Konstruktor. Siehe das [Beispiel unten](#erfassen_von_ereignis-timing-informationen), um zu erfahren, wie Sie typischerweise die Informationen erhalten, die das `PerformanceEventTiming`-Interface enthält.

## Instanzeigenschaften

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Ereignis-Timing-Leistungseinträge, indem es sie wie folgt qualifiziert:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit vom `startTime` bis zum nächsten Rendering-Paint (auf den nächsten 8ms gerundet) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"event"` (für lange Ereignisse) oder `"first-input"` (für die erste Benutzerinteraktion) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Typ des zugehörigen Ereignisses zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die [`timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des zugehörigen Ereignisses darstellt. Dies ist die Zeit, zu der das Ereignis erstellt wurde, und kann als Stellvertreter für die Zeit angesehen werden, zu der die Benutzerinteraktion stattgefunden hat.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceEventTiming.cancelable`](/de/docs/Web/API/PerformanceEventTiming/cancelable) {{ReadOnlyInline}}
  - : Gibt die [`cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des zugehörigen Ereignisses zurück.
- [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) {{ReadOnlyInline}}
  - : Gibt die ID zurück, die die Benutzerinteraktion, die das zugehörige Ereignis ausgelöst hat, eindeutig identifiziert.
- [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der das Ereignisdispatch begonnen hat. Um die Zeit zwischen einer Benutzeraktion und dem Beginn des Ereignishandlers zu messen, berechnen Sie `processingStart-startTime`.
- [`PerformanceEventTiming.processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der das Ereignisdispatch endete. Um die Zeit zu messen, die der Ereignishandler benötigte, um auszuführen, berechnen Sie `processingEnd-processingStart`.
- [`PerformanceEventTiming.target`](/de/docs/Web/API/PerformanceEventTiming/target) {{ReadOnlyInline}}
  - : Gibt das letzte Ziel des zugehörigen Ereignisses zurück, sofern es nicht entfernt wurde.

## Instanzmethoden

- [`PerformanceEventTiming.toJSON()`](/de/docs/Web/API/PerformanceEventTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceEventTiming`-Objekts zurück.

## Beispiele

### Erfassen von Ereignis-Timing-Informationen

Um Ereignis-Timing-Informationen zu erhalten, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz und rufen dann die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, wobei Sie `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Sie müssen `buffered` auf `true` setzen, um Zugriff auf Ereignisse zu erhalten, die der Benutzer-Agent beim Erstellen des Dokuments gepuffert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können.

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

Sie können auch einen anderen [`durationThreshold`](/de/docs/Web/API/PerformanceObserver/observe#durationthreshold) einstellen. Der Standardwert ist 104 ms und der minimal mögliche Dauerschwellenwert ist 16 ms.

```js
observer.observe({ type: "event", durationThreshold: 16, buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
