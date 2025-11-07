---
title: "Performance: measure() Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`measure()`** Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Objekt, das eine Zeitmessung zwischen zwei Marken in der Leistungstimeline des Browsers darstellt.

Beim Messen zwischen zwei Marken gibt es jeweils eine _Startmarke_ und eine _Endmarke_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben ist, wird der Startzeitstempel auf null gesetzt und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekte als Start- und Endmarken zu identifizieren.

Um nur eine `endMark` bereitzustellen, müssen Sie ein leeres `measureOptions` Objekt bereitstellen: `performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`
  - : Eine Zeichenfolge, die den Namen der Messung darstellt.

- `measureOptions` {{optional_inline}}
  - : Ein Objekt, das Messoptionen enthalten kann.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung einbezogen werden sollen. Standardmäßig `null`. Muss [strukturklon-bar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
        - `devtools`
          - : Einige Browser verwenden ein strukturiertes `devtools` Objekt innerhalb des `detail` Objekts als Teil einer Extensibility API, die diese in benutzerdefinierten Spuren in Leistungstraces anzeigt. Siehe die [Chrome's Extensibility API-Dokumentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api) für weitere Informationen.
            - `dataType` {{experimental_inline}}
              - : Zeichenfolge mit dem Wert `track-entry` (zum Definieren einer neuen Spur) oder `marker` (zum Definieren eines Eintrags in einer Spur).
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Standardmäßig `"primary"`. Muss eines der folgenden Werte sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.
            - `track` {{optional_inline}} {{experimental_inline}}
              - : Zeichenfolge des Namens der benutzerdefinierten Spur (erforderlich für `track-entry`).
            - `trackGroup` {{optional_inline}} {{experimental_inline}}
              - : Zeichenfolge des Namens der Gruppierung innerhalb einer benutzerdefinierten Spur (erforderlich für `track-entry`).
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Array von Schlüssel-Wert-Paaren. Werte können jeden JSON-kompatiblen Typ haben.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Kurze Beschreibung für Tooltip.

    - `start` {{optional_inline}}
      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) der als Startzeit verwendet werden soll, oder eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, die als Startzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist diese in derselben Weise definiert wie `startMark`.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarkenzeiten. Wenn nicht angegeben, wird standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now) verwendet; die Zeit, die seit der Erstellung des Kontexts verstrichen ist. Wenn angegeben, müssen Sie entweder `start` oder `end` angeben, jedoch nicht beide.

    - `end` {{optional_inline}}
      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) der als Endzeit verwendet werden soll, oder eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, die als Endzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist diese in derselben Weise definiert wie `endMark`.

- `startMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungstimeline benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaft dieser Marke wird zur Berechnung der Messung verwendet.

- `endMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungstimeline benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Eigenschaft dieser Marke wird zur Berechnung der Messung verwendet.
    Wenn Sie dieses Argument übergeben möchten, müssen Sie entweder `startMark` oder ein leeres `measureOptions` Objekt übergeben.

### Rückgabewert

Der erstellte [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Eintrag.

Die zurückgegebene _Messung_ wird folgende Eigenschaftswerte haben:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - auf `"measure"` gesetzt.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - auf das `name` Argument gesetzt.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - gesetzt auf:
  - einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), falls in `measureOptions.start` angegeben.
  - den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Startmarke, falls in `measureOptions.start` oder `startMark` angegeben.
  - einen Zeitstempel, der aus `measureOptions.end` und `measureOptions.duration` berechnet wurde (falls `measureOptions.start` nicht angegeben wurde).
  - 0, falls er nicht angegeben ist und nicht aus anderen Werten bestimmt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Dauer der Messung ist, die durch Subtrahieren des `startTime` vom Endzeitstempel berechnet wird.

  Der Endzeitstempel ist einer der folgenden:
  - ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), falls in `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Endmarke, falls eine in `measureOptions.end` oder `endMark` angegeben ist.
  - ein Zeitstempel, der aus `measureOptions.start` und `measureOptions.duration` berechnet wurde (falls `measureOptions.end` nicht angegeben wurde).
  - der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben wird, falls keine Endmarke angegeben ist oder aus anderen Werten bestimmt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - auf den in `measureOptions` übergebenen Wert gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Dies kann in jedem Fall ausgelöst werden, in dem der Start, das Ende oder die Dauer mehrdeutig sein könnten:
    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist mit `duration` angegeben, aber ohne Angabe entweder von `start` oder `end`.
    - `measureOptions` ist angegeben mit allen `start`, `end` und `duration`.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die benannte Marke existiert nicht.
    - Eine Endmarke ist mit entweder `endMark` oder `measureOptions.end` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem übereinstimmenden Namen.
    - Eine Endmarke ist mit entweder `endMark` oder `measureOptions.end` angegeben, aber sie kann nicht konvertiert werden, um mit einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle übereinzustimmen.
    - Eine Startmarke ist mit entweder `startMark` oder `measureOptions.start` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem übereinstimmenden Namen.
    - Eine Startmarke ist mit entweder `startMark` oder `measureOptions.start` angegeben, aber sie kann nicht konvertiert werden, um mit einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle übereinzustimmen.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `measureOptions.detail` Wert ist nicht-`null` und kann nicht unter Verwendung des HTML "StructuredSerialize" Algorithmus serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail` Wert ist nicht-`null` und es kann während der Serialisierung unter Verwendung des HTML "StructuredSerialize" Algorithmus kein Speicher zugewiesen werden.

## Beispiele

### Messen der Dauer zwischen benannten Markern

Angenommen, Sie haben zwei eigene Marker `"login-started"` und `"login-finished"`, können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) Objekt stellt dann eine `duration` Eigenschaft bereit, die Ihnen die verstrichene Zeit zwischen den beiden Markern anzeigt.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Messen der Dauer mit benutzerdefinierten Start- und Endzeiten

Um fortschrittlichere Messungen durchzuführen, können Sie einen `measureOptions` Parameter übergeben. Zum Beispiel können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp) Eigenschaft eines [`click` Events](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Bereitstellen zusätzlicher Messdetails

Sie können die `details` Eigenschaft verwenden, um zusätzliche Informationen beliebigen Typs bereitzustellen. Vielleicht möchten Sie zum Beispiel festhalten, welches HTML-Element angeklickt wurde.

```js
performance.measure("login-click", {
  detail: { htmlElement: myElement.id },
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### DevTools Extensibility API

Für Browser, die die [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) unterstützen, können Sie den `detail` Parameter verwenden, um mehr Details in einem `devtools` Objekt bereitzustellen, das in Leistungsprofilen angezeigt wird:

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
