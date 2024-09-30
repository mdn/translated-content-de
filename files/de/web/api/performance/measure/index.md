---
title: "Performance: measure() Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`measure()`** Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Objekt, das eine Zeitmessung zwischen zwei Markierungen in der Performance-Zeitleiste des Browsers darstellt.

Beim Messen zwischen zwei Markierungen gibt es jeweils eine _Startmarke_ und eine _Endmarke_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben ist, wird der Startzeitstempel auf null gesetzt, und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekte als Start- und Endmarkierungen zu identifizieren.

Um nur eine `endMark` anzugeben, müssen Sie ein leeres `measureOptions` Objekt bereitstellen: `performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`

  - : Ein String, der den Namen der Messung darstellt.

- `measureOptions` {{optional_inline}}

  - : Ein Objekt, das Messoptionen enthalten kann.

    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung einbezogen werden sollen. Standardmäßig `null`. Muss [strukturiert klonierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `start` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet wird, oder ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, die als Startzeit verwendet wird.

        Wenn dies ein String ist, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, dann ist es in gleicher Weise wie `startMark` definiert.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarken-Zeiten. Wenn weggelassen, ist dies standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now); die Zeit, die seit der Erschaffung des Kontexts vergangen ist. Wenn angegeben, müssen Sie entweder `start` oder `end`, aber nicht beides, ebenfalls angeben.
    - `end` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet wird, oder ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, die als Endzeit verwendet wird.

        Wenn dies ein String ist, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, dann ist es in gleicher Weise wie `endMark` definiert.

- `startMark` {{optional_inline}}
  - : Ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Performance-Zeitleiste bezeichnet. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.
- `endMark` {{optional_inline}}
  - : Ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Performance-Zeitleiste bezeichnet. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.
    Wenn Sie dieses Argument übergeben wollen, müssen Sie auch entweder `startMark` oder ein leeres `measureOptions` Objekt übergeben.

### Rückgabewert

Der erstellte [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Eintrag.

Die zurückgegebene _Messung_ wird folgende Eigenschaftswerte haben:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - auf `"measure"` gesetzt.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - auf das `name` Argument gesetzt.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - auf folgendes gesetzt:

  - ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.start` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Startmarke, wenn in `measureOptions.start` oder `startMark` angegeben
  - ein Zeitstempel, berechnet aus `measureOptions.end` und `measureOptions.duration` (wenn `measureOptions.start` nicht angegeben war)
  - 0, wenn es nicht angegeben ist und nicht aus anderen Werten bestimmt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Dauer der Messung ist, berechnet durch Subtraktion der `startTime` vom Endzeitstempel.

  Der Endzeitstempel ist einer von:

  - ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Endmarke, wenn in `measureOptions.end` oder `endMark` angegeben
  - ein Zeitstempel, berechnet aus `measureOptions.start` und `measureOptions.duration` (wenn `measureOptions.end` nicht angegeben war)
  - der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben wird, wenn keine Endmarke angegeben oder aus anderen Werten bestimmt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - auf den in `measureOptions` angegebenen Wert gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dies kann in jedem Fall auftreten, in dem der Start, das Ende oder die Dauer mehrdeutig sein könnten:

    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist mit `duration` angegeben, aber weder `start` noch `end` werden spezifiziert.
    - `measureOptions` ist mit allen `start`, `end` und `duration` angegeben.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die benannte Markierung existiert nicht.

    - Eine Endmarke wird entweder mit `endMark` oder `measureOptions.end` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) mit dem übereinstimmenden Namen im Performance-Puffer.
    - Eine Endmarke wird entweder mit `endMark` oder `measureOptions.end` angegeben, kann aber nicht so konvertiert werden, dass sie einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle entspricht.
    - Eine Startmarke wird entweder mit `startMark` oder `measureOptions.start` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) mit dem übereinstimmenden Namen im Performance-Puffer.
    - Eine Startmarke wird entweder mit `startMark` oder `measureOptions.start` angegeben, kann aber nicht so konvertiert werden, dass sie einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle entspricht.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der Wert von `measureOptions.detail` ist nicht-`null` und kann nicht unter Verwendung des HTML-Algorithmus "StructuredSerialize" serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der Wert von `measureOptions.detail` ist nicht-`null` und während der Serialisierung kann aufgrund der HTML-Algorithmus "StructuredSerialize" kein Speicher zugewiesen werden.

## Beispiele

### Dauer zwischen benannten Markern messen

Wenn Sie über zwei Ihrer eigenen Marker `"login-started"` und `"login-finished"` verfügen, können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Objekt wird dann eine `duration` Eigenschaft bieten, um Ihnen die vergangene Zeit zwischen den beiden Markern mitzuteilen.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Dauer mit benutzerdefinierten Start- und Endzeiteingaben messen

Um fortgeschrittenere Messungen durchzuführen, können Sie ein `measureOptions` Parameter übergeben. Beispielsweise können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) Eigenschaft von einem [`click` Ereignis](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Zusätzliche Messdetails bereitstellen

Sie können die `details` Eigenschaft verwenden, um zusätzliche Informationen jeglicher Art bereitzustellen. Vielleicht möchten Sie beispielsweise aufzeichnen, welches HTML-Element angeklickt wurde.

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
