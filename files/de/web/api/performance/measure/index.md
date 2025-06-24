---
title: "Performance: `measure()` Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`measure()`**-Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt, das eine Zeitmessung zwischen zwei Markern in der Leistungstimeline des Browsers darstellt.

Beim Messen zwischen zwei Markern gibt es einen _Startmarker_ und einen _Endmarker_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben ist, wird der Startzeitstempel auf null gesetzt, und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekte als Start- und Endmarker zu identifizieren.

Um nur einen `endMark` anzugeben, müssen Sie ein leeres `measureOptions`-Objekt bereitstellen:
`performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`

  - : Ein String, der den Namen der Messung darstellt.

- `measureOptions` {{optional_inline}}

  - : Ein Objekt, das Messoptionen enthalten kann.

    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung aufgenommen werden sollen. Standardmäßig `null`. Muss [strukturierbar klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `start` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet werden soll, oder ein String, der einen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, der als Startzeit verwendet wird.

        Wenn dies ein String ist, der einen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist er auf die gleiche Weise wie `startMark` definiert.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endzeitpunkten. Wenn weggelassen, wird dies standardmäßig auf [`performance.now()`](/de/docs/Web/API/Performance/now) gesetzt; die Zeit, die seit Erstellung des Kontexts vergangen ist. Wenn angegeben, müssen Sie entweder `start` oder `end` angeben, aber nicht beide.
    - `end` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet werden soll, oder ein String, der einen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, der als Endzeit verwendet wird.

        Wenn dies ein String ist, der einen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist er auf die gleiche Weise wie `endMark` definiert.

- `startMark` {{optional_inline}}
  - : Ein String, der einen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungstimeline benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieses Markers wird zur Berechnung der Messung verwendet.
- `endMark` {{optional_inline}}
  - : Ein String, der einen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungstimeline benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieses Markers wird zur Berechnung der Messung verwendet.
    Um dieses Argument zu übergeben, müssen Sie entweder `startMark` oder ein leeres `measureOptions`-Objekt übergeben.

### Rückgabewert

Der erstellte [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Eintrag.

Die zurückgegebene _Messung_ hat folgende Eigenschaftswerte:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - auf `"measure"` gesetzt.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - auf das `name`-Argument gesetzt.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - gesetzt auf:

  - einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn im `measureOptions.start` angegeben.
  - den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) eines Startmarkers, wenn im `measureOptions.start` oder `startMark` angegeben.
  - einen Zeitstempel, der aus dem `measureOptions.end` und `measureOptions.duration` berechnet wird (wenn `measureOptions.start` nicht angegeben wurde).
  - 0, wenn er nicht angegeben ist und nicht aus anderen Werten bestimmt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Dauer der Messung ist, berechnet durch Subtraktion der `startTime` vom Endzeitstempel.

  Der Endzeitstempel ist einer der folgenden:

  - ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn im `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) eines Endmarkers, wenn einer im `measureOptions.end` oder `endMark` angegeben ist.
  - ein Zeitstempel, der aus dem `measureOptions.start` und `measureOptions.duration` berechnet wird (wenn `measureOptions.end` nicht angegeben wurde).
  - der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegebene Wert, wenn kein Endmarker angegeben ist oder aus anderen Werten bestimmt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - auf den im `measureOptions` übergebenen Wert gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dies kann in jedem Fall geworfen werden, in dem der Start, das Ende oder die Dauer mehrdeutig sein könnten:
    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist angegeben mit `duration`, jedoch ohne Angabe von entweder `start` oder `end`.
    - `measureOptions` ist angegeben mit allen `start`, `end` und `duration`.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der benannte Marker existiert nicht.
    - Ein Endmarker wird entweder durch `endMark` oder `measureOptions.end` angegeben, aber es gibt keinen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem passenden Namen.
    - Ein Endmarker wird entweder durch `endMark` oder `measureOptions.end` angegeben, aber er kann nicht so konvertiert werden, dass er zu einem schreibgeschützten Attribut im [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interface passt.
    - Ein Startmarker wird entweder durch `startMark` oder `measureOptions.start` angegeben, aber es gibt keinen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem passenden Namen.
    - Ein Startmarker wird entweder durch `startMark` oder `measureOptions.start` angegeben, aber er kann nicht so konvertiert werden, dass er zu einem schreibgeschützten Attribut im [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interface passt.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der `measureOptions.detail`-Wert ist nicht `null` und kann nicht mit dem HTML-Algorithmus 'StructuredSerialize' serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail`-Wert ist nicht `null` und Speicher kann während der Serialisierung mit dem HTML-Algorithmus 'StructuredSerialize' nicht zugewiesen werden.

## Beispiele

### Messung der Dauer zwischen benannten Markern

Gegeben seien zwei Ihrer eigenen Marker `"login-started"` und `"login-finished"`, so können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt wird Ihnen dann eine `duration`-Eigenschaft zur Verfügung stellen, um die verstrichene Zeit zwischen den beiden Markern anzugeben.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Messung der Dauer mit benutzerdefinierten Start- und Endzeiten

Um fortgeschrittenere Messungen durchzuführen, können Sie einen `measureOptions`-Parameter übergeben. Beispielsweise können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft aus einem [`click`-Ereignis](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Bereitstellung zusätzlicher Messdetails

Sie können die `details`-Eigenschaft verwenden, um zusätzliche Informationen jeglicher Art bereitzustellen. Vielleicht möchten Sie beispielsweise aufzeichnen, welches HTML-Element angeklickt wurde.

```js
performance.measure("login-click", {
  detail: { htmlElement: myElement.id },
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
