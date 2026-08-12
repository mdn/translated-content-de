---
title: "Performance: measure() Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 786bb11d1f331396b17be6feacda7023c8043834
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`measure()`** Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt, das eine Zeitmessung zwischen zwei Markierungen in der Leistungstimeline des Browsers darstellt.

Beim Messen zwischen zwei Markierungen gibt es eine _Startmarkierung_ und eine _Endmarkierung_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben wird, wird der Startzeitstempel auf null gesetzt und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekte als Start- und Endmarkierungen zu identifizieren.

Um nur eine `endMark` anzugeben, müssen Sie ein leeres `measureOptions`-Objekt bereitstellen:
`performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`
  - : Eine Zeichenfolge, die den Namen der Messung darstellt.

- `measureOptions` {{optional_inline}}
  - : Ein Objekt, das Messoptionen enthalten kann.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung aufgenommen werden. Standardmäßig `null`. Muss [strukturklonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
        - `devtools`
          - : Einige Browser verwenden ein strukturiertes `devtools`-Objekt innerhalb des `detail`-Objekts als Teil einer Erweiterungs-API, die diese in benutzerdefinierten Spuren in Leistungstraces anzeigt. Weitere Informationen finden Sie in der [Dokumentation zur Extensibility API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).
            - `dataType` {{experimental_inline}}
              - : Zeichenfolge mit einem Wert von `track-entry` (zur Definition einer neuen Spur) oder `marker` (zur Definition eines Eintrags in einer Spur).
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Standardwert `"primary"`. Muss eine der folgenden sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.
            - `track` {{optional_inline}} {{experimental_inline}}
              - : Zeichenfolge des Namens der benutzerdefinierten Spur (erforderlich für `track-entry`).
            - `trackGroup` {{optional_inline}} {{experimental_inline}}
              - : Zeichenfolge des Namens der Gruppierung innerhalb einer benutzerdefinierten Spur (erforderlich für `track-entry`).
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Array von Schlüssel-Wert-Paaren. Werte können jeder JSON-kompatible Typ sein.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Kurze Beschreibung für das Tooltip.

    - `start` {{optional_inline}}
      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet werden soll, oder eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, die für die Startzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, dann ist es auf die gleiche Weise definiert wie `startMark`.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarkierungen. Wenn weggelassen, wird dies standardmäßig auf [`performance.now()`](/de/docs/Web/API/Performance/now) gesetzt; die Zeit, die seit der Erstellung des Kontexts vergangen ist. Wenn angegeben, müssen Sie entweder `start` oder `end` angeben, aber nicht beides.

    - `end` {{optional_inline}}
      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet werden soll, oder eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, die für die Endzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) bezeichnet, dann ist es auf die gleiche Weise definiert wie `endMark`.

- `startMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungstimeline bezeichnet. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.

- `endMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungstimeline bezeichnet. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.
    Wenn Sie dieses Argument übergeben möchten, müssen Sie auch entweder `startMark` oder ein leeres `measureOptions`-Objekt übergeben.

### Rückgabewert

Der erstellte [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Eintrag.

Die zurückgegebene _Messung_ wird die folgenden Eigenschaftswerte haben:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - auf `"measure"` gesetzt.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - auf das `name`-Argument gesetzt.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - gesetzt auf:
  - einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.start` angegeben.
  - den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Startmarkierung, wenn in `measureOptions.start` oder `startMark` angegeben
  - einen Zeitstempel, der aus den `measureOptions.end` und `measureOptions.duration` berechnet wurde (wenn `measureOptions.start` nicht angegeben war)
  - 0, wenn es nicht angegeben ist und nicht aus anderen Werten ermittelt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - gesetzt auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer der Messung ist, die durch Subtrahieren der `startTime` vom Endzeitstempel berechnet wird.

  Der Endzeitstempel ist einer von:
  - einem [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Endmarkierung, wenn eine in `measureOptions.end` oder `endMark` angegeben ist
  - ein Zeitstempel, der aus den `measureOptions.start` und `measureOptions.duration` berechnet wird (wenn `measureOptions.end` nicht angegeben wurde)
  - der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben wird, wenn keine Endmarkierung angegeben ist oder aus anderen Werten bestimmt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - gesetzt auf den in `measureOptions` übergebenen Wert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Diese Ausnahme kann in jedem Fall auftreten, bei dem die Start-, End- oder Dauerwerte mehrdeutig sein könnten:
    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist mit `duration` angegeben, ohne dass entweder `start` oder `end` spezifiziert wurde.
    - `measureOptions` ist mit allen von `start`, `end` und `duration` angegeben.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die benannte Markierung existiert nicht.
    - Eine Endmarkierung wird entweder mit `endMark` oder `measureOptions.end` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem passenden Namen.
    - Eine Endmarkierung wird entweder mit `endMark` oder `measureOptions.end` angegeben, kann aber nicht in eine Übereinstimmung mit einem schreibgeschützten Attribut im [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interface konvertiert werden.
    - Eine Startmarkierung wird entweder mit `startMark` oder `measureOptions.start` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem passenden Namen.
    - Eine Startmarkierung wird entweder mit `startMark` oder `measureOptions.start` angegeben, kann aber nicht in eine Übereinstimmung mit einem schreibgeschützten Attribut im [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interface konvertiert werden.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `measureOptions.detail`-Wert ist nicht-`null` und kann nicht mit dem HTML-„StructuredSerialize“-Algorithmus serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail`-Wert ist nicht-`null` und es kann während der Serialisierung mit dem HTML-„StructuredSerialize“-Algorithmus kein Speicher zugewiesen werden.

## Beispiele

### Messen der Dauer zwischen benannten Markierungen

Angenommen, Sie haben zwei eigene Markierungen `"login-started"` und `"login-finished"`, können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt wird dann eine `duration`-Eigenschaft bereitstellen, die Ihnen die verstrichene Zeit zwischen den beiden Markierungen mitteilt.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Messen der Dauer mit benutzerdefinierten Start- und Endzeiten

Für komplexere Messungen können Sie einen `measureOptions`-Parameter übergeben. Zum Beispiel können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft von einem [`click` Ereignis](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Zusätzliche Messdetails bereitstellen

Sie können die `details`-Eigenschaft verwenden, um zusätzliche Informationen jeglichen Typs bereitzustellen. Vielleicht möchten Sie beispielsweise aufzeichnen, welches HTML-Element angeklickt wurde.

```js
performance.measure("login-click", {
  detail: { htmlElement: myElement.id },
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### DevTools Extensibility API

Für Browser, die die [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) unterstützen, können Sie den `detail`-Parameter verwenden, um weitere Details in einem `devtools`-Objekt bereitzustellen, das verwendet wird, um dieses in Leistungsprofilen anzuzeigen:

```js
const imageProcessingTimeStart = performance.now();

// ... later in your code

performance.measure("Image Processing Complete", {
  start: imageProcessingTimeStart,
  end: performance.now(),
  detail: {
    // This data appears in the "Summary"
    extraInfo: {
      imageId: "xyz-123",
      source: "cache",
      checkUrl: "https://example.com/check/xyz-123",
    },
    // The devtools object controls the track visualization
    devtools: {
      dataType: "track-entry",
      track: "Image Processing Tasks",
      trackGroup: "My Tracks",
      color: "tertiary-dark",
      properties: [
        ["Filter Type", "Gaussian Blur"],
        // Values can be objects, arrays, or other types
        ["Resize Dimensions", { w: 500, h: 300 }],
        // String values that are URLs get linkified
        ["Image URL", "https://example.com/img.png"],
      ],
      tooltipText: "Image processed successfully",
    },
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
