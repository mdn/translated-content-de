---
title: "Performance: measure()-Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`measure()`**-Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt, das eine Zeitmessung zwischen zwei Marken in der Leistungszeitleiste des Browsers darstellt.

Beim Messen zwischen zwei Marken gibt es eine _Startmarke_ und eine _Endmarke_. Der benannte Zeitstempel wird als _Measure_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben ist, wird der Start-Zeitstempel auf null gesetzt, und der End-Zeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekte als Start- und Endmarken zu identifizieren.

Um nur eine `endMark` bereitzustellen, müssen Sie ein leeres `measureOptions`-Objekt verwenden:
`performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`
  - : Ein String, der den Namen des Measure darstellt.

- `measureOptions` {{optional_inline}}
  - : Ein Objekt, das Messoptionen enthalten kann.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die im Measure enthalten sein sollen. Standardmäßig `null`. Muss [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
        - `devtools`
          - : Einige Browser verwenden ein strukturiertes `devtools`-Objekt innerhalb des `detail`-Objekts als Teil einer Erweiterungs-API, die diese in benutzerdefinierte Spuren in Leistungs-Traces einbindet. Weitere Informationen finden Sie in der [Chrome's Extensibility API Dokumentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).
            - `dataType` {{experimental_inline}}
              - : String mit einem Wert von `track-entry` (zum Definieren einer neuen Spur) oder `marker` (zum Definieren eines Eintrags in einer Spur).
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Standardmäßig `"primary"`. Muss einer der folgenden Werte sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.
            - `track` {{optional_inline}} {{experimental_inline}}
              - : String des Namens der benutzerdefinierten Spur (erforderlich für `track-entry`).
            - `trackGroup` {{optional_inline}} {{experimental_inline}}
              - : String des Namens der Gruppierung innerhalb einer benutzerdefinierten Spur (erforderlich für `track-entry`).
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Array aus Schlüssel-Wert-Paaren. Werte können jeder JSON-kompatible Typ sein.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Kurze Beschreibung für das Tooltip.

    - `start` {{optional_inline}}
      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet werden soll, oder ein String, der den Namen einer [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) angibt, die als Startzeit verwendet werden soll.

        Wenn dies ein String ist, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist er auf die gleiche Weise wie `startMark` definiert.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarkenzeiten. Wenn weggelassen, ist dies standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now); die Zeit, die seit der Erstellung des Kontexts verstrichen ist. Wenn angegeben, müssen Sie entweder `start` oder `end` angeben, aber nicht beide.

    - `end` {{optional_inline}}
      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet werden soll, oder ein String, der den Namen einer [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) angibt, die als Endzeit verwendet werden soll.

        Wenn dies ein String ist, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist er auf die gleiche Weise wie `endMark` definiert.

- `startMark` {{optional_inline}}
  - : Ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungszeitleiste benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieser Marke wird zur Berechnung des Measure verwendet.

- `endMark` {{optional_inline}}
  - : Ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungszeitleiste benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieser Marke wird zur Berechnung des Measure verwendet.
    Wenn Sie dieses Argument übergeben möchten, müssen Sie entweder `startMark` oder ein leeres `measureOptions`-Objekt übergeben.

### Rückgabewert

Der [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Eintrag, der erstellt wurde.

Das zurückgegebene _Measure_ wird die folgenden Eigenschaftswerte haben:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - wird auf `"measure"` gesetzt.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - wird auf das `name`-Argument gesetzt.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - wird gesetzt auf:
  - einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.start` angegeben.
  - den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Startmarke, wenn in `measureOptions.start` oder `startMark` angegeben.
  - einen Zeitstempel berechnet aus `measureOptions.end` und `measureOptions.duration` (wenn `measureOptions.start` nicht angegeben wurde).
  - 0, wenn es nicht angegeben ist und nicht aus anderen Werten ermittelt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - wird auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) gesetzt, der die Dauer des Measure ist, berechnet durch Subtraktion der `startTime` vom End-Zeitstempel.

  Der End-Zeitstempel ist einer der folgenden:
  - ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Endmarke, wenn eine in `measureOptions.end` oder `endMark` angegeben ist.
  - ein Zeitstempel berechnet aus `measureOptions.start` und `measureOptions.duration` (wenn `measureOptions.end` nicht angegeben wurde).
  - der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegebene Wert, wenn keine Endmarke angegeben ist oder aus anderen Werten ermittelt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - wird auf den Wert gesetzt, der in `measureOptions` übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Dies kann in jedem Fall ausgelöst werden, in dem der Start, das Ende oder die Dauer möglicherweise mehrdeutig sind:
    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist mit `duration` angegeben, ohne `start` oder `end` anzugeben.
    - `measureOptions` ist mit allen `start`, `end` und `duration` angegeben.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die benannte Marke existiert nicht.
    - Eine Endmarke wird entweder mit `endMark` oder `measureOptions.end` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem übereinstimmenden Namen.
    - Eine Endmarke wird entweder mit `endMark` oder `measureOptions.end` angegeben, aber sie kann nicht in eine Übereinstimmung mit einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle umgewandelt werden.
    - Eine Startmarke wird entweder mit `startMark` oder `measureOptions.start` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem übereinstimmenden Namen.
    - Eine Startmarke wird entweder mit `startMark` oder `measureOptions.start` angegeben, aber sie kann nicht in eine Übereinstimmung mit einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle umgewandelt werden.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `measureOptions.detail`-Wert ist nicht-`null` und kann nicht mit dem HTML-Algorithmus "StructuredSerialize" serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail`-Wert ist nicht-`null` und der Speicher kann während der Serialisierung mit dem HTML-Algorithmus "StructuredSerialize" nicht zugeteilt werden.

## Beispiele

### Messen der Dauer zwischen benannten Markern

Angenommen, Sie haben zwei eigene Marker, `"login-started"` und `"login-finished"`, können Sie eine Messung mit dem Namen `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt stellt dann eine `duration`-Eigenschaft bereit, die Ihnen die vergangene Zeit zwischen den beiden Markern angibt.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Messen der Dauer mit benutzerdefinierten Start- und Endzeiten

Um fortgeschrittenere Messungen durchzuführen, können Sie einen `measureOptions`-Parameter übergeben. Beispielsweise können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft eines [`click`-Events](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Zusätzliche Messdetails bereitstellen

Sie können die `details`-Eigenschaft verwenden, um zusätzliche Informationen jeglicher Art bereitzustellen. Vielleicht möchten Sie aufzeichnen, welches HTML-Element angeklickt wurde.

```js
performance.measure("login-click", {
  detail: { htmlElement: myElement.id },
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### DevTools Extensibility API

Für Browser, die die [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) unterstützen, können Sie den `detail`-Parameter verwenden, um weitere Details in einem `devtools`-Objekt bereitzustellen, das zur Anzeige in Leistungsprofilen verwendet wird:

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
