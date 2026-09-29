---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}

Das `PerformanceEventTiming`-Interface der Event Timing API liefert Informationen über die Latenz bestimmter Ereignistypen, die durch Benutzerinteraktionen ausgelöst werden.

## Beschreibung

Diese API macht langsame Ereignisse sichtbar, indem sie Zeitstempel und Dauer für bestimmte Ereignistypen bereitstellt ([siehe unten](#bereitgestellte_ereignisse)). So können Sie beispielsweise die Zeit zwischen einer Benutzeraktion und dem Beginn der Ausführung ihres Event-Handlers messen oder ermitteln, wie lange die Ausführung eines Event-Handlers dauert.

Diese API ist besonders nützlich, um die {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} (INP) zu messen: die längste Zeitspanne (abzüglich einiger Ausreißer) zwischen der Interaktion eines Benutzers mit Ihrer App und dem Zeitpunkt, an dem der Browser tatsächlich auf diese Interaktion reagieren konnte.

Üblicherweise arbeiten Sie mit `PerformanceEventTiming`-Objekten, indem Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz erstellen und anschließend deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) aufrufen. Dabei übergeben Sie `"event"` oder `"first-input"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können. Weitere Informationen finden Sie im [Beispiel unten](#informationen_zum_event_timing_abrufen).

Standardmäßig werden `PerformanceEventTiming`-Einträge bereitgestellt, wenn ihre `duration` mindestens 104 ms beträgt. Forschungsergebnisse deuten darauf hin, dass eine Benutzereingabe als langsam gilt, wenn sie nicht innerhalb von 100 ms verarbeitet wird. 104 ms ist das erste Vielfache von 8, das größer als 100 ms ist (aus Sicherheitsgründen rundet diese API auf das nächste Vielfache von 8 ms).
Sie können für den [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) jedoch einen anderen Schwellenwert festlegen, indem Sie die Option `durationThreshold` in der Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) verwenden.

Dieses Interface erbt Methoden und Eigenschaften von seinem übergeordneten Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry):

{{InheritanceDiagram}}

### Bereitgestellte Ereignisse

Die Event Timing API stellt die folgenden Ereignistypen bereit:

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

Die folgenden Ereignisse sind nicht in der Liste enthalten, da es sich um kontinuierliche Ereignisse handelt und sich für sie derzeit keine aussagekräftigen Ereigniszahlen oder Leistungsmetriken ermitteln lassen: [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event),
[`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`wheel`](/de/docs/Web/API/Element/wheel_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event).

Um eine Liste aller bereitgestellten Ereignisse zu erhalten, können Sie auch die Schlüssel in der Map [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) nachschlagen:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Konstruktor

Dieses Interface hat keinen eigenen Konstruktor. Wie Sie die Informationen, die das `PerformanceEventTiming`-Interface enthält, üblicherweise abrufen, zeigt das [Beispiel unten](#informationen_zum_event_timing_abrufen).

## Instanzeigenschaften

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge des Typs Event Timing mit den jeweils beschriebenen Bedeutungen:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeitspanne von `startTime` bis zur nächsten Darstellung auf dem Bildschirm angibt (auf die nächsten 8 ms gerundet).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"event"` (für lang andauernde Ereignisse) oder `"first-input"` (für die erste Benutzerinteraktion) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Typ des zugehörigen Ereignisses zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Eigenschaft [`timestamp`](/de/docs/Web/API/Event/timeStamp) des zugehörigen Ereignisses angibt. Dies ist der Zeitpunkt, zu dem das Ereignis erstellt wurde, und kann als Näherungswert für den Zeitpunkt der Benutzerinteraktion betrachtet werden.

Dieses Interface unterstützt außerdem die folgenden Eigenschaften:

- [`PerformanceEventTiming.cancelable`](/de/docs/Web/API/PerformanceEventTiming/cancelable) {{ReadOnlyInline}}
  - : Gibt die Eigenschaft [`cancelable`](/de/docs/Web/API/Event/cancelable) des zugehörigen Ereignisses zurück.
- [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) {{ReadOnlyInline}}
  - : Gibt die ID zurück, die die Benutzerinteraktion, die das zugehörige Ereignis ausgelöst hat, eindeutig identifiziert.
- [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Weitergabe des Ereignisses begann. Um die Zeit zwischen einer Benutzeraktion und dem Beginn der Ausführung des Event-Handlers zu messen, berechnen Sie `processingStart-startTime`.
- [`PerformanceEventTiming.processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Weitergabe des Ereignisses endete. Um die Ausführungsdauer des Event-Handlers zu messen, berechnen Sie `processingEnd-processingStart`.
- [`PerformanceEventTiming.target`](/de/docs/Web/API/PerformanceEventTiming/target) {{ReadOnlyInline}}
  - : Gibt das letzte Ziel des zugehörigen Ereignisses zurück, sofern es nicht entfernt wurde.

## Instanzmethoden

- [`PerformanceEventTiming.toJSON()`](/de/docs/Web/API/PerformanceEventTiming/toJSON)
  - : Gibt ein als JSON serialisierbares einfaches Objekt zurück, das das `PerformanceEventTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Informationen zum Event Timing abrufen

Um Informationen zum Event Timing abzurufen, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz und rufen anschließend deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf. Dabei übergeben Sie `"event"` oder `"first-input"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Außerdem müssen Sie `buffered` auf `true` setzen, um Zugriff auf Ereignisse zu erhalten, die der User Agent während der Erstellung des Dokuments zwischengespeichert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können.

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
