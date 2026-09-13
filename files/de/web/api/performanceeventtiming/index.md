---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die `PerformanceEventTiming`-Schnittstelle der Event Timing API bietet Einblicke in die Latenz bestimmter Ereignistypen, die durch Benutzerinteraktionen ausgelöst werden.

## Beschreibung

Diese API ermöglicht die Sichtbarkeit bei langsamen Ereignissen, indem sie Ereigniszeitstempel und Dauer für bestimmte Ereignistypen bereitstellt ([siehe unten](#exponierte_ereignisse)). Zum Beispiel können Sie die Zeit zwischen einer Benutzeraktion und dem Beginn ihres Ereignis-Handlers oder die Zeit, die ein Ereignis-Handler zum Ausführen benötigt, überwachen.

Diese API ist besonders nützlich für die Messung der {{Glossary("Interaction_to_Next_Paint", "Interaktion bis zur nächsten Wiedergabe")}} (INP): der längsten Zeitspanne (abzüglich einiger Ausreißer) vom Punkt, an dem ein Benutzer mit Ihrer App interagiert, bis zu dem Punkt, an dem der Browser tatsächlich in der Lage war, auf diese Interaktion zu reagieren.

Normalerweise arbeiten Sie mit `PerformanceEventTiming`-Objekten, indem Sie eine Instanz von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) erstellen und dann deren [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode aufrufen, wobei Sie `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die analysiert werden können. Siehe das [nachfolgende Beispiel](#abrufen_von_ereignis-timing-informationen) für mehr.

Standardmäßig werden `PerformanceEventTiming`-Einträge angezeigt, wenn ihre `duration` 104ms oder mehr beträgt. Forschungsergebnisse legen nahe, dass Benutzereingaben, die nicht innerhalb von 100ms bearbeitet werden, als langsam gelten und 104ms sind das erste Vielfache von 8, das größer als 100ms ist (aus Sicherheitsgründen wird diese API auf das nächste Vielfache von 8ms gerundet).
Sie können jedoch den [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) auf einen anderen Schwellenwert einstellen, indem Sie die `durationThreshold`-Option in der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode verwenden.

Diese Schnittstelle erbt Methoden und Eigenschaften von ihrem übergeordneten Element, [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry):

{{InheritanceDiagram}}

### Exponierte Ereignisse

Die folgenden Ereignistypen werden von der Event Timing API angezeigt:

<table>
  <tbody>
    <tr>
      <th scope="row">Klickevents</th>
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
      <th scope="row">Zeigereignisse</th>
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

Bitte beachten Sie, dass die folgenden Ereignisse nicht in der Liste enthalten sind, da es sich um kontinuierliche Ereignisse handelt und zu diesem Zeitpunkt keine aussagekräftigen Ereigniszählungen oder Leistungsmetriken erhalten werden können: [`mousemove`](/de/docs/Web/API/Element/mousemove_event), [`pointermove`](/de/docs/Web/API/Element/pointermove_event),
[`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event), [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`rad`](/de/docs/Web/API/Element/wheel_event), [`drag`](/de/docs/Web/API/HTMLElement/drag_event).

Um eine Liste aller exponierten Ereignisse zu erhalten, können Sie auch Schlüssel in der [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) Karte nachschlagen:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Konstruktor

Diese Schnittstelle hat keinen eigenen Konstruktor. Siehe das [nachfolgende Beispiel](#abrufen_von_ereignis-timing-informationen), um zu erfahren, wie Sie normalerweise die Informationen erhalten, die die `PerformanceEventTiming`-Schnittstelle bereitstellt.

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ereignis-Timing-Leistungseintragstypen, indem sie wie folgt qualifiziert werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit von `startTime` bis zur nächsten Rendering-Wiedergabe darstellt (gerundet auf das nächste Vielfache von 8ms).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"event"` (für lange Ereignisse) oder `"first-input"` (für die erste Benutzerinteraktion) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Typ des zugeordneten Ereignisses zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die [`timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des zugeordneten Ereignisses darstellt. Dies ist die Zeit, zu der das Ereignis erstellt wurde und kann als Proxy für die Zeit betrachtet werden, zu der die Benutzerinteraktion stattfand.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceEventTiming.cancelable`](/de/docs/Web/API/PerformanceEventTiming/cancelable) {{ReadOnlyInline}}
  - : Gibt die [`cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des zugeordneten Ereignisses zurück.
- [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) {{ReadOnlyInline}}
  - : Gibt die ID zurück, die die Benutzerinteraktion, welche das zugeordnete Ereignis ausgelöst hat, eindeutig identifiziert.
- [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der das Ereignisdispatch gestartet wurde. Um die Zeit zwischen einer Benutzeraktion und dem Zeitpunkt, an dem der Ereignis-Handler zu laufen beginnt, zu messen, berechnen Sie `processingStart-startTime`.
- [`PerformanceEventTiming.processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der das Ereignisdispatch beendet wurde. Um die Zeit zu messen, die der Ereignis-Handler zum Ausführen benötigte, berechnen Sie `processingEnd-processingStart`.
- [`PerformanceEventTiming.target`](/de/docs/Web/API/PerformanceEventTiming/target) {{ReadOnlyInline}}
  - : Gibt das letzte Ziel des zugeordneten Ereignisses zurück, falls es nicht entfernt wird.

## Instanzmethoden

- [`PerformanceEventTiming.toJSON()`](/de/docs/Web/API/PerformanceEventTiming/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Darstellung des `PerformanceEventTiming`-Objekts zurückzugeben.

## Beispiele

### Abrufen von Ereignis-Timing-Informationen

Um Ereignis-Timing-Informationen zu erhalten, erstellen Sie eine Instanz von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) und rufen Sie dann seine [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, wobei Sie `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Sie müssen auch `buffered` auf `true` setzen, um Zugriff auf Ereignisse zu erhalten, die der Benutzeragent beim Erstellen des Dokuments gepuffert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die analysiert werden können.

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

Sie können auch einen anderen [`durationThreshold`](/de/docs/Web/API/PerformanceObserver/observe#durationthreshold) einstellen. Der Standardwert ist 104ms und der minimale mögliche Dauer-Schwellenwert ist 16ms.

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
