---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: 343a52cdc2920899bce227571c6b30075937d431
---

{{APIRef("Performance API")}}

Die `PerformanceEventTiming`-Schnittstelle der Event Timing API liefert Einblicke in die Latenz bestimmter Ereignistypen, die durch Benutzerinteraktionen ausgelöst werden.

Diese Schnittstelle erbt Methoden und Eigenschaften von ihrer übergeordneten Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry):

{{InheritanceDiagram}}

## Konstruktor

Diese Schnittstelle hat keinen eigenen Konstruktor. Wie Sie die von der `PerformanceEventTiming`-Schnittstelle bereitgestellten Informationen üblicherweise abrufen, zeigt das [Beispiel unten](#informationen_zur_ereigniszeitmessung_abrufen).

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge zur Ereigniszeitmessung und legt ihre Bedeutung wie folgt fest:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit von `startTime` bis zur nächsten Darstellung auf dem Bildschirm angibt (auf die nächsten 8 ms gerundet).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"event"` (für lang andauernde Ereignisse) oder `"first-input"` (für die erste Benutzerinteraktion) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Typ des zugehörigen Ereignisses zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der der Eigenschaft [`timestamp`](/de/docs/Web/API/Event/timeStamp) des zugehörigen Ereignisses entspricht. Dies ist der Zeitpunkt, zu dem das Ereignis erstellt wurde, und kann als Näherungswert für den Zeitpunkt der Benutzerinteraktion betrachtet werden.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`PerformanceEventTiming.cancelable`](/de/docs/Web/API/PerformanceEventTiming/cancelable) {{ReadOnlyInline}}
  - : Gibt die Eigenschaft [`cancelable`](/de/docs/Web/API/Event/cancelable) des zugehörigen Ereignisses zurück.
- [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) {{ReadOnlyInline}}
  - : Gibt die ID zurück, die die Benutzerinteraktion, die das zugehörige Ereignis ausgelöst hat, eindeutig identifiziert.
- [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Ereignisweitergabe begann. Um die Zeit zwischen einer Benutzeraktion und dem Beginn der Ausführung des Event-Handlers zu messen, berechnen Sie `processingStart-startTime`.
- [`PerformanceEventTiming.processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Ereignisweitergabe endete. Um die Ausführungszeit des Event-Handlers zu messen, berechnen Sie `processingEnd-processingStart`.
- [`PerformanceEventTiming.target`](/de/docs/Web/API/PerformanceEventTiming/target) {{ReadOnlyInline}}
  - : Gibt das letzte Ziel des zugehörigen Ereignisses zurück, sofern es nicht entfernt wurde.

## Instanzmethoden

- [`PerformanceEventTiming.toJSON()`](/de/docs/Web/API/PerformanceEventTiming/toJSON)
  - : Überschreibt die Methode [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON), um eine JSON-Darstellung des `PerformanceEventTiming`-Objekts zurückzugeben.

## Beschreibung

Diese API macht langsame Ereignisse sichtbar, indem sie für bestimmte Ereignistypen Zeitstempel und Dauer bereitstellt ([siehe unten](#erfasste_ereignisse)). So können Sie beispielsweise die Zeit zwischen einer Benutzeraktion und dem Beginn ihres Event-Handlers oder die Ausführungszeit eines Event-Handlers überwachen.

Diese API ist besonders nützlich, um {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP) zu messen: die längste Zeitspanne (abzüglich einiger Ausreißer) zwischen einer Interaktion mit Ihrer Anwendung und dem Zeitpunkt, zu dem der Browser tatsächlich darauf reagieren konnte.

Üblicherweise arbeiten Sie mit `PerformanceEventTiming`-Objekten, indem Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz erstellen und anschließend deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) aufrufen. Dabei übergeben Sie `"event"` oder `"first-input"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können. Weitere Informationen finden Sie im [Beispiel unten](#informationen_zur_ereigniszeitmessung_abrufen).

Standardmäßig werden `PerformanceEventTiming`-Einträge bereitgestellt, wenn ihre `duration` mindestens 104 ms beträgt. Untersuchungen legen nahe, dass eine Benutzereingabe als langsam gilt, wenn sie nicht innerhalb von 100 ms verarbeitet wird. 104 ms ist das erste Vielfache von 8 über 100 ms (aus Sicherheitsgründen rundet diese API auf das nächste Vielfache von 8 ms).
Sie können jedoch mit der Option `durationThreshold` der Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) einen anderen Schwellenwert für den [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) festlegen.

Beachten Sie, dass Einträge nur dann zwischengespeichert werden, wenn ihre `duration` mindestens 104 ms beträgt. Das Festlegen von `durationThreshold` ändert daran nichts.
Der Eintrag `"first-input"` ist eine Ausnahme: Er wird auch dann gemeldet, wenn seine `duration` unter dem Schwellenwert liegt, und auch dann zwischengespeichert, wenn sie unter 104 ms liegt.

### Erfasste Ereignisse

Die folgenden Ereignistypen werden von der Event Timing API erfasst:

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
      <th scope="row">Kompositionsereignisse</th>
      <td>
        [`compositionend`](/de/docs/Web/API/Element/compositionend_event),
        [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event),
        [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
      </td>
    </tr>
    <tr>
      <th scope="row">Drag-and-Drop-Ereignisse</th>
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

Beachten Sie, dass die folgenden Ereignisse nicht in der Liste enthalten sind, weil sie kontinuierliche Ereignisse sind und sich derzeit weder aussagekräftige Ereigniszahlen noch Leistungsmetriken für sie ermitteln lassen: [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event),
[`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`wheel`](/de/docs/Web/API/Element/wheel_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event).

Eine Liste aller erfassten Ereignisse erhalten Sie auch, indem Sie die Schlüssel in der Map [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) nachschlagen:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Beispiele

### Informationen zur Ereigniszeitmessung abrufen

Um Informationen zur Ereigniszeitmessung abzurufen, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz und rufen anschließend deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf. Dabei übergeben Sie `"event"` oder `"first-input"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Außerdem müssen Sie `buffered` auf `true` setzen, um auf Ereignisse zugreifen zu können, die der User Agent während der Erstellung des Dokuments zwischengespeichert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können.

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

Sie können auch einen anderen [`durationThreshold`](/de/docs/Web/API/PerformanceObserver/observe#durationthreshold) festlegen. Der Standardwert beträgt 104 ms; der niedrigste mögliche Schwellenwert für die Dauer beträgt 16 ms.
Dieser Aufruf liefert frühere Einträge mit einer Dauer von mindestens 104 ms und neue Einträge mit einer Dauer von mindestens 16 ms, da für den Puffer stets der Standardwert von 104 ms gilt.

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
