---
title: "Performance: measure() Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`measure()`** Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Objekt, das eine Zeitmessung zwischen zwei Markierungen in der Performance-Zeitleiste des Browsers darstellt.

Beim Messen zwischen zwei Markierungen gibt es entsprechend eine _Startmarkierung_ und eine _Endmarkierung_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben ist, wird der Startzeitstempel auf Null gesetzt und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekte als Start- und Endmarkierungen zu identifizieren.

Um nur eine `endMark` bereitzustellen, müssen Sie ein leeres `measureOptions`-Objekt bereitstellen:
`performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`

  - : Eine Zeichenfolge, die den Namen der Messung darstellt.

- `measureOptions` {{optional_inline}}

  - : Ein Objekt, das Messoptionen enthalten kann.

    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung einbezogen werden sollen. Standardmäßig `null`. Muss [strukturklonierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `start` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet wird, oder eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, die als Startzeit verwendet wird.

        Wenn dies eine Zeichenfolge ist, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, ist sie auf die gleiche Weise wie `startMark` definiert.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarkierungen. Wenn weggelassen, wird dies standardmäßig auf [`performance.now()`](/de/docs/Web/API/Performance/now) gesetzt; die seit der Erstellung des Kontexts vergangene Zeit. Wenn angegeben, müssen Sie entweder `start` oder `end` angeben, aber nicht beides.
    - `end` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet wird, oder eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, die als Endzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, ist sie auf die gleiche Weise wie `endMark` definiert.

- `startMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Performance-Zeitleiste bezeichnet. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.
- `endMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Performance-Zeitleiste bezeichnet. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet. Wenn Sie dieses Argument übergeben möchten, müssen Sie entweder `startMark` oder ein leeres `measureOptions`-Objekt ebenfalls übergeben.

### Rückgabewert

Der [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Eintrag, der erstellt wurde.

Die zurückgegebene _Messung_ wird die folgenden Eigenschaftswerte haben:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - auf `"measure"` gesetzt.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - auf das `name`-Argument gesetzt.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - gesetzt auf:

  - einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.start` angegeben.
  - den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Startmarkierung, wenn in `measureOptions.start` oder `startMark` angegeben
  - einen Timestamp, der aus `measureOptions.end` und `measureOptions.duration` berechnet wird (wenn `measureOptions.start` nicht angegeben wurde)
  - 0, wenn es nicht angegeben ist und nicht aus anderen Werten bestimmt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Dauer der Messung durch Subtraktion des `startTime` vom Endzeitstempel darstellt.

  Der Endzeitstempel ist einer der folgenden:

  - ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Endmarkierung, wenn eine in `measureOptions.end` oder `endMark` angegeben ist
  - ein Timestamp, der aus `measureOptions.start` und `measureOptions.duration` berechnet wird (wenn `measureOptions.end` nicht angegeben wurde)
  - der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegebene Wert, wenn keine Endmarkierung angegeben oder aus anderen Werten bestimmt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - auf den in `measureOptions` übergebenen Wert gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Diese Ausnahme kann in jedem Fall ausgelöst werden, bei dem der Start, das Ende oder die Dauer unklar sein könnten:

    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist mit `duration` angegeben, aber ohne entweder `start` oder `end` anzugeben.
    - `measureOptions` ist mit allen von `start`, `end` und `duration` angegeben.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die benannte Markierung existiert nicht.

    - Eine Endmarke wird entweder mit `endMark` oder `measureOptions.end` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Performance-Puffer mit dem entsprechenden Namen.
    - Eine Endmarke wird entweder mit `endMark` oder `measureOptions.end` angegeben, kann aber nicht so konvertiert werden, dass sie einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle entspricht.
    - Eine Startmarke wird entweder mit `startMark` oder `measureOptions.start` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Performance-Puffer mit dem entsprechenden Namen.
    - Eine Startmarke wird entweder mit `startMark` oder `measureOptions.start` angegeben, kann aber nicht so konvertiert werden, dass sie einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle entspricht.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der `measureOptions.detail` Wert ist nicht-`null` und kann nicht mit dem HTML-"StructuredSerialize"-Algorithmus serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail` Wert ist nicht-`null` und es kann während der Serialisierung mithilfe des HTML "StructuredSerialize"-Algorithmus kein Speicher zugewiesen werden.

## Beispiele

### Messung der Dauer zwischen benannten Markierungen

Angenommen, Sie haben zwei eigene Markierungen, `"login-started"` und `"login-finished"`, können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Objekt wird dann eine `duration` Eigenschaft bereitstellen, um Ihnen die vergangene Zeit zwischen den beiden Markierungen mitzuteilen.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Messung der Dauer mit benutzerdefinierten Start- und Endzeiten

Um fortgeschrittenere Messungen durchzuführen, können Sie einen `measureOptions` Parameter übergeben. Beispielsweise können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) Eigenschaft von einem [`click` event](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

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
