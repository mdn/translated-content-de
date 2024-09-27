---
title: "Performance: measure() Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`measure()`**-Methode erstellt ein benanntes [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt, das eine Zeitmessung zwischen zwei Marken in der Leistungszeitleiste des Browsers darstellt.

Beim Messen zwischen zwei Marken gibt es jeweils eine _Startmarkierung_ und eine _Endmarkierung_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben ist, wird der Startzeitstempel auf null gesetzt, und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekte als Start- und Endmarken zu identifizieren.

Um nur eine `endMark` anzugeben, müssen Sie ein leeres `measureOptions`-Objekt bereitstellen: `performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`

  - : Ein String, der den Namen der Messung repräsentiert.

- `measureOptions` {{optional_inline}}

  - : Ein Objekt, das Messoptionen enthalten kann.

    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung aufgenommen werden sollen. Standardmäßig `null`. Muss [struktur-klonfähig](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `start` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Startzeit verwendet werden soll, oder ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, die als Startzeit verwendet werden soll.

        Wenn dies ein String ist, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist es in der gleichen Weise wie `startMark` definiert.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarkenzeiten. Wenn weggelassen, ist dies standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now); die Zeit, die seit der Erstellung des Kontexts vergangen ist. Wenn angegeben, müssen Sie entweder `start` oder `end` angeben, aber nicht beide.
    - `end` {{optional_inline}}

      - : Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der als Endzeit verwendet werden soll, oder ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, die als Endzeit verwendet werden soll.

        Wenn dies ein String ist, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) benennt, dann ist es in der gleichen Weise wie `endMark` definiert.

- `startMark` {{optional_inline}}
  - : Ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungszeitleiste benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieser Marke wird zur Berechnung der Messung verwendet.
- `endMark` {{optional_inline}}
  - : Ein String, der eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) in der Leistungszeitleiste benennt. Die [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Eigenschaft dieser Marke wird zur Berechnung der Messung verwendet.
    Wenn Sie dieses Argument übergeben möchten, müssen Sie entweder `startMark` oder ein leeres `measureOptions`-Objekt übergeben.

### Rückgabewert

Der erstellte [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Eintrag.

Die zurückgegebene _Messung_ wird die folgenden Eigenschaftswerte haben:

- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) - gesetzt auf `"measure"`.
- [`name`](/de/docs/Web/API/PerformanceEntry/name) - gesetzt auf das `name`-Argument.
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) - gesetzt auf:

  - einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.start` angegeben.
  - den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Startmarke, wenn in `measureOptions.start` oder `startMark` angegeben
  - einen Zeitstempel, berechnet aus `measureOptions.end` und `measureOptions.duration` (wenn `measureOptions.start` nicht angegeben wurde)
  - 0, wenn es nicht angegeben ist und nicht aus anderen Werten bestimmt werden kann.

- [`duration`](/de/docs/Web/API/PerformanceEntry/duration) - gesetzt auf einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer der Messung ist, berechnet durch Subtraktion des `startTime` vom Endzeitstempel.

  Der Endzeitstempel ist einer von:

  - einem [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn in `measureOptions.end` angegeben.
  - der [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) einer Endmarke, wenn eine in `measureOptions.end` oder `endMark` angegeben ist
  - einem Zeitstempel, berechnet aus `measureOptions.start` und `measureOptions.duration` (wenn `measureOptions.end` nicht angegeben wurde)
  - dem Wert, der von [`Performance.now()`](/de/docs/Web/API/Performance/now) zurückgegeben wird, wenn keine Endmarke angegeben ist oder aus anderen Werten bestimmt werden kann.

- [`detail`](/de/docs/Web/API/PerformanceMeasure) - gesetzt auf den in `measureOptions` übergebenen Wert.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dies kann in jedem Fall ausgelöst werden, in dem der Beginn, das Ende oder die Dauer zweideutig sein könnten:

    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist angegeben mit `duration`, aber ohne Angabe von `start` oder `end`.
    - `measureOptions` ist angegeben mit allen `start`, `end` und `duration`.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die benannte Marke existiert nicht.

    - Eine Endmarke ist entweder über `endMark` oder `measureOptions.end` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem passenden Namen.
    - Eine Endmarke ist entweder über `endMark` oder `measureOptions.end` angegeben, kann aber nicht konvertiert werden, um mit einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle übereinzustimmen.
    - Eine Startmarke ist entweder über `startMark` oder `measureOptions.start` angegeben, aber es gibt keine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) im Leistungsbuffer mit dem passenden Namen.
    - Eine Startmarke ist entweder über `startMark` oder `measureOptions.start` angegeben, kann aber nicht konvertiert werden, um mit einem schreibgeschützten Attribut in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle übereinzustimmen.

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der `measureOptions.detail`-Wert ist ungleich `null` und kann nicht mit dem HTML-"StructuredSerialize"-Algorithmus serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail`-Wert ist ungleich `null` und der Speicher kann während der Serialisierung mit dem HTML-"StructuredSerialize"-Algorithmus nicht zugewiesen werden.

## Beispiele

### Dauer zwischen benannten Markern messen

Angenommen, Sie haben zwei eigene Marker `"login-started"` und `"login-finished"`, können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt wird dann eine `duration`-Eigenschaft bereitstellen, die Ihnen die verstrichene Zeit zwischen den beiden Markern angibt.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Dauer mit benutzerdefinierten Start- und Endzeiten messen

Um fortgeschrittenere Messungen durchzuführen, können Sie einen `measureOptions`-Parameter übergeben. Zum Beispiel können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft aus einem [`click`-Ereignis](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Zusätzliche Messdetails bereitstellen

Sie können die `details`-Eigenschaft verwenden, um zusätzliche Informationen jeglicher Art bereitzustellen. Vielleicht möchten Sie zum Beispiel aufzeichnen, welches HTML-Element angeklickt wurde.

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
