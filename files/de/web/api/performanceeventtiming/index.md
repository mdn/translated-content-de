---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{APIRef("Performance API")}}

Das `PerformanceEventTiming`-Interface der Event Timing API bietet Einblicke in die Latenz bestimmter Ereignistypen, die durch Benutzerinteraktionen ausgelöst werden.

## Beschreibung

Diese API ermöglicht es, langsame Ereignisse sichtbar zu machen, indem sie Zeitstempel von Ereignissen und die Dauer für bestimmte Ereignistypen bereitstellt ([siehe unten](#exponierte_ereignisse)). Beispielsweise können Sie die Zeit zwischen einer Benutzeraktion und dem Start Ihres Ereignis-Handlers oder die Zeit, die ein Ereignis-Handler benötigt, um ausgeführt zu werden, überwachen.

Diese API ist besonders nützlich zur Messung der {{Glossary("first input delay")}} (FID): die Zeit von dem Moment, in dem ein Benutzer erstmals mit Ihrer App interagiert, bis zu dem Punkt, an dem der Browser tatsächlich auf diese Interaktion reagieren kann.

Normalerweise arbeiten Sie mit `PerformanceEventTiming`-Objekten, indem Sie eine {{domxref("PerformanceObserver")}}-Instanz erstellen und dann ihre [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode mit dem Wert `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option aufrufen. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können. Siehe das [Beispiel unten](#abrufen_von_ereignistiming-informationen) für mehr Informationen.

Standardmäßig werden `PerformanceEventTiming`-Einträge exponiert, wenn ihre `duration` 104ms oder größer ist. Untersuchungen zeigen, dass Benutzerinput, der nicht innerhalb von 100ms verarbeitet wird, als langsam angesehen wird, und 104ms ist das erste Vielfache von 8, das größer als 100ms ist (aus Sicherheitsgründen wird diese API auf das nächste Vielfache von 8ms gerundet). Sie können jedoch den {{domxref("PerformanceObserver")}} auf einen anderen Schwellenwert mit der `durationThreshold`-Option in der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode setzen.

Dieses Interface erbt Methoden und Eigenschaften von seinem Elternteil, {{domxref("PerformanceEntry")}}:

{{InheritanceDiagram}}

### Exponierte Ereignisse

Die folgenden Ereignistypen werden von der Event Timing API bereitgestellt:

<table>
  <tbody>
    <tr>
      <th scope="row">Klick-Ereignisse</th>
      <td>
        {{domxref("Element/auxclick_event", "auxclick")}},
        {{domxref("Element/click_event", "click")}},
        {{domxref("Element/contextmenu_event", "contextmenu")}},
        {{domxref("Element/dblclick_event", "dblclick")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Kompositionsereignisse</th>
      <td>
        {{domxref("Element/compositionend_event", "compositionend")}},
        {{domxref("Element/compositionstart_event", "compositionstart")}},
        {{domxref("Element/compositionupdate_event", "compositionupdate")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Drag &amp; Drop-Ereignisse</th>
      <td>
        {{domxref("HTMLElement/dragend_event", "dragend")}},
        {{domxref("HTMLElement/dragenter_event", "dragenter")}},
        {{domxref("HTMLElement/dragleave_event", "dragleave")}},
        {{domxref("HTMLElement/dragover_event", "dragover")}},
        {{domxref("HTMLElement/dragstart_event", "dragstart")}},
        {{domxref("HTMLElement/drop_event", "drop")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Eingabeereignisse</th>
      <td>
        {{domxref("Element/beforeinput_event", "beforeinput")}},
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Tastaturereignisse</th>
      <td>
        {{domxref("Element/keydown_event", "keydown")}},
        {{domxref("Element/keypress_event", "keypress")}},
        {{domxref("Element/keyup_event", "keyup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Mausereignisse</th>
      <td>
        {{domxref("Element/mousedown_event", "mousedown")}},
        {{domxref("Element/mouseenter_event", "mouseenter")}},
        {{domxref("Element/mouseleave_event", "mouseleave")}},
        {{domxref("Element/mouseout_event", "mouseout")}},
        {{domxref("Element/mouseover_event", "mouseover")}},
        {{domxref("Element/mouseup_event", "mouseup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Zeigerereignisse</th>
      <td>
        {{domxref("Element/pointerover_event", "pointerover")}},
        {{domxref("Element/pointerenter_event", "pointerenter")}},
        {{domxref("Element/pointerdown_event", "pointerdown")}},
        {{domxref("Element/pointerup_event", "pointerup")}},
        {{domxref("Element/pointercancel_event", "pointercancel")}},
        {{domxref("Element/pointerout_event", "pointerout")}},
        {{domxref("Element/pointerleave_event", "pointerleave")}},
        {{domxref("Element/gotpointercapture_event", "gotpointercapture")}},
        {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Touch-Ereignisse</th>
      <td>
        {{domxref("Element/touchstart_event", "touchstart")}},
        {{domxref("Element/touchend_event", "touchend")}},
        {{domxref("Element/touchcancel_event", "touchcancel")}}
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass die folgenden Ereignisse nicht in der Liste enthalten sind, da sie kontinuierliche Ereignisse sind und derzeit keine aussagekräftigen Ereigniszählungen oder Leistungsmetriken erzielt werden können: {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/pointermove_event", "pointermove")}},
{{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}, {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("HTMLElement/drag_event", "drag")}}.

Um eine Liste aller exponierten Ereignisse zu erhalten, können Sie auch Schlüssel im {{domxref("performance.eventCounts")}}-Map nachschlagen:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Konstruktor

Dieses Interface hat keinen eigenen Konstruktor. Sehen Sie sich das [Beispiel unten](#abrufen_von_ereignistiming-informationen) an, um zu erfahren, wie Sie normalerweise die Informationen erhalten, die das `PerformanceEventTiming`-Interface enthält.

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften für Ereignisleistungs-Eintragsarten, indem es sie wie folgt qualifiziert:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit von `startTime` bis zum nächsten Rendering-Paint darstellt (auf das nächste Vielfache von 8ms gerundet).
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Gibt `"event"` (für lange Ereignisse) oder `"first-input"` (für die erste Benutzerinteraktion) zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Gibt den zugehörigen Ereignistyp zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die [`timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des zugehörigen Ereignisses darstellt. Dies ist die Zeit, zu der das Ereignis erstellt wurde und kann als Proxy für die Uhrzeit der Benutzerinteraktion betrachtet werden.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- {{domxref("PerformanceEventTiming.cancelable")}} {{ReadOnlyInline}}
  - : Gibt die [`cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des zugehörigen Ereignisses zurück.
- {{domxref("PerformanceEventTiming.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ID zurück, die die Benutzerinteraktion, die das zugehörige Ereignis ausgelöst hat, eindeutig identifiziert.
- {{domxref("PerformanceEventTiming.processingStart")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit darstellt, zu der die Ereignisdisposition begann. Um die Zeit zwischen einer Benutzeraktion und der Zeit zu messen, in der das Ereignis-Handler zu laufen beginnt, berechnen Sie `processingStart-startTime`.
- {{domxref("PerformanceEventTiming.processingEnd")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit darstellt, zu der die Ereignisdisposition endete. Um die Zeit zu messen, die der Ereignis-Handler benötigt hat, berechnen Sie `processingEnd-processingStart`.
- {{domxref("PerformanceEventTiming.target")}} {{ReadOnlyInline}}
  - : Gibt das letzte Ziel des zugehörigen Ereignisses zurück, sofern es nicht entfernt wurde.

## Instanz-Methoden

- {{domxref("PerformanceEventTiming.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `PerformanceEventTiming`-Objekts zurück.

## Beispiele

### Abrufen von Ereignistiming-Informationen

Um Ereignistiming-Informationen zu erhalten, erstellen Sie eine {{domxref("PerformanceObserver")}}-Instanz und rufen dann ihre [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode mit dem Wert `"event"` oder `"first-input"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option auf. Sie müssen `buffered` auf `true` setzen, um Zugriff auf Ereignisse zu erhalten, die der Benutzer-Agent beim Erstellen des Dokuments gepuffert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceEventTiming`-Objekten aufgerufen, die Sie analysieren können.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Gesamtdauer
    const duration = entry.duration;

    // Eingabeverzögerung (vor der Verarbeitung des Ereignisses)
    const delay = entry.processingStart - entry.startTime;

    // Dauer der synchronen Ereignisverarbeitung
    // (zwischen Start und Ende der Disposition)
    const eventHandlerTime = entry.processingEnd - entry.processingStart;
    console.log(`Gesamtdauer: ${duration}`);
    console.log(`Ereignisverzögerung: ${delay}`);
    console.log(`Dauer des Ereignis-Handlers: ${eventHandlerTime}`);
  });
});

// Registrieren Sie den Observer für Ereignisse
observer.observe({ type: "event", buffered: true });
```

Sie können auch einen anderen [`durationThreshold`](/de/docs/Web/API/PerformanceObserver/observe#durationthreshold) setzen. Der Standardwert ist 104ms und die minimale mögliche Dauergrenze beträgt 16ms.

```js
observer.observe({ type: "event", durationThreshold: 16, buffered: true });
```

### Berichterstattung über die First Input Delay (FID)

Die {{Glossary("first input delay")}} oder FID misst die Zeit von dem Moment, in dem ein Benutzer erstmals mit einer Seite interagiert (z.B. wenn er/sie auf einen Link klickt oder auf eine Schaltfläche tippt), bis zu dem Zeitpunkt, an dem der Browser tatsächlich in der Lage ist, mit der Verarbeitung von Ereignis-Handlern als Reaktion auf diese Interaktion zu beginnen.

```js
// Verfolgen Sie, ob (und wann) die Seite zuerst versteckt wurde, siehe:
// https://github.com/w3c/page-visibility/issues/29
// HINWEIS: Idealerweise würde diese Überprüfung im <head>-Element des Dokuments durchgeführt,
// um Fälle zu vermeiden, in denen sich der Sichtbarkeitsstatus ändert, bevor dieser Code ausgeführt wird.
let firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
document.addEventListener(
  "visibilitychange",
  (event) => {
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
  },
  { once: true },
);

// Sendet die übergebenen Daten an einen Analyse-Endpunkt. Dieser Code
// verwendet `/analytics`; Sie können es durch Ihre eigene URL ersetzen.
function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  // Verwenden Sie `navigator.sendBeacon()`, falls verfügbar,
// und greifen Sie andernfalls auf `fetch()` zurück.
  (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
    fetch("/analytics", { body, method: "POST", keepalive: true });
}

// Verwenden Sie einen try/catch-Block anstelle von Feature-Detection für `first-input`-
// Unterstützung, da einige Browser beim Verwenden der neuen `type`-Option einen Fehler werfen.
// https://webkit.org/b/209216
try {
  function onFirstInputEntry(entry) {
    // Melden Sie FID nur, wenn die Seite nicht ausgeblendet war, bevor
    // der Eintrag verarbeitet wurde. Dies tritt typischerweise auf, wenn eine
    // Seite in einem Hintergrund-Tab geladen wird.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Melden Sie den FID-Wert an einen Analyse-Endpunkt.
      sendToAnalytics({ fid });
    }
  }

  // Erstellen Sie einen PerformanceObserver, der
  // `onFirstInputEntry` für jeden Eintrag aufruft.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Beachten Sie Einträge vom Typ `first-input`, einschließlich gepufferter Einträge,
  // d.h. Einträge, die aufgetreten sind, bevor `observe()` unten aufgerufen wurde.
  po.observe({
    type: "first-input",
    buffered: true,
  });
} catch (e) {
  // Tun Sie nichts, wenn der Browser diese API nicht unterstützt.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
