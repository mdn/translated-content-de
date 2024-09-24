---
title: "Performance: measure() Methode"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 6539cd8d3ea65b2755ef5d5c7da202f53636f51f
---

{{APIRef("Performance API")}}

Die **`measure()`**-Methode erstellt ein benanntes {{domxref("PerformanceMeasure")}}-Objekt, das eine Zeitmessung zwischen zwei Markierungen in der Performance-Zeitleiste des Browsers darstellt.

Beim Messen zwischen zwei Markierungen gibt es eine _Startmarke_ und eine _Endmarke_. Der benannte Zeitstempel wird als _Messung_ bezeichnet.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

Wenn nur `measureName` angegeben wird, wird der Startzeitstempel auf null gesetzt und der Endzeitstempel (der zur Berechnung der Dauer verwendet wird) ist der Wert, der von {{domxref("Performance.now()")}} zurückgegeben würde.

Sie können Zeichenfolgen verwenden, um {{domxref("PerformanceMark")}}-Objekte als Start- und Endmarkierungen zu identifizieren.

Um nur eine `endMark` bereitzustellen, müssen Sie ein leeres `measureOptions`-Objekt angeben:
`performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameter

- `measureName`

  - : Ein String, der den Namen der Messung repräsentiert.

- `measureOptions` {{optional_inline}}

  - : Ein Objekt, das Messoptionen enthalten kann.

    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Messung aufgenommen werden sollen. Standardmäßig `null`. Muss [structured-cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `start` {{optional_inline}}

      - : Zeitstempel ({{domxref("DOMHighResTimeStamp")}}), der als Startzeit verwendet werden soll, oder eine Zeichenfolge, die eine {{domxref("PerformanceMark")}} benennt, die als Startzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine {{domxref("PerformanceMark")}} benennt, wird sie auf die gleiche Weise wie `startMark` definiert.

    - `duration` {{optional_inline}}
      - : Dauer (in Millisekunden) zwischen den Start- und Endmarkierungszeiten. Wird diese ausgelassen, wird standardmäßig {{domxref("performance.now()")}} verwendet; die Zeit, die seit der Erstellung des Kontexts vergangen ist. Wird sie angegeben, müssen Sie entweder `start` oder `end` angeben, aber nicht beide.
    - `end` {{optional_inline}}

      - : Zeitstempel ({{domxref("DOMHighResTimeStamp")}}) der als Endzeit verwendet werden soll, oder eine Zeichenfolge, die eine {{domxref("PerformanceMark")}} benennt, die als Endzeit verwendet werden soll.

        Wenn dies eine Zeichenfolge ist, die eine {{domxref("PerformanceMark")}} benennt, wird sie auf die gleiche Weise wie `endMark` definiert.

- `startMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine {{domxref("PerformanceMark")}} in der Performance-Zeitleiste benennt. Die {{domxref("PerformanceEntry.startTime")}}-Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.
- `endMark` {{optional_inline}}
  - : Eine Zeichenfolge, die eine {{domxref("PerformanceMark")}} in der Performance-Zeitleiste benennt. Die {{domxref("PerformanceEntry.startTime")}}-Eigenschaft dieser Markierung wird zur Berechnung der Messung verwendet.
    Wenn Sie dieses Argument übergeben möchten, müssen Sie auch entweder `startMark` oder ein leeres `measureOptions`-Objekt übergeben.

### Rückgabewert

Der erstellte {{domxref("PerformanceMeasure")}}-Eintrag.

Die zurückgegebene _Messung_ wird folgende Eigenschaftswerte haben:

- {{domxref("PerformanceEntry.entryType","entryType")}} - auf "`measure`" gesetzt.
- {{domxref("PerformanceEntry.name","name")}} - auf das "`name`"-Argument gesetzt.
- {{domxref("PerformanceEntry.startTime","startTime")}} - gesetzt auf:

  - ein {{domxref("DOMHighResTimeStamp","Zeitstempel")}}, falls er in `measureOptions.start` angegeben ist.
  - den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} einer Startmarke, falls er in `measureOptions.start` oder `startMark` angegeben ist
  - einen Zeitstempel, der aus dem `measureOptions.end` und `measureOptions.duration` berechnet wurde (falls `measureOptions.start` nicht angegeben wurde)
  - 0, falls er nicht angegeben ist und nicht aus anderen Werten bestimmt werden kann.

- {{domxref("PerformanceEntry.duration","duration")}} - auf einen {{domxref("DOMHighResTimeStamp")}} gesetzt, der die Dauer der Messung ist, berechnet durch Subtraktion von `startTime` vom Endzeitstempel.

  Der Endzeitstempel ist einer der folgenden:

  - ein {{domxref("DOMHighResTimeStamp","Zeitstempel")}}, falls er in `measureOptions.end` angegeben ist.
  - der {{domxref("DOMHighResTimeStamp","Zeitstempel")}} einer Endmarke, falls eine in `measureOptions.end` oder `endMark` angegeben ist
  - ein Zeitstempel, der aus dem `measureOptions.start` und `measureOptions.duration` berechnet wurde (falls `measureOptions.end` nicht angegeben wurde)
  - der Wert, der von {{domxref("Performance.now()")}} zurückgegeben wird, falls keine Endmarke angegeben oder aus anderen Werten bestimmt werden kann.

- {{domxref("PerformanceMeasure","detail")}} - auf den in `measureOptions` übergebenen Wert gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dies kann in jedem Fall ausgelöst werden, in dem der Start, das Ende oder die Dauer unklar sein können:

    - Sowohl `endMark` als auch `measureOptions` sind angegeben.
    - `measureOptions` ist angegeben mit `duration`, aber ohne Angabe von entweder `start` oder `end`.
    - `measureOptions` ist angegeben mit allen `start`, `end` und `duration`.

- `SyntaxError` {{domxref("DOMException")}}

  - : Die benannte Markierung existiert nicht.

    - Eine Endmarke ist entweder mit `endMark` oder `measureOptions.end` angegeben, aber es gibt keine {{domxref('PerformanceMark')}} im Performance-Puffer mit dem passenden Namen.
    - Eine Endmarke ist entweder mit `endMark` oder `measureOptions.end` angegeben, aber sie kann nicht in eine übereinstimmende schreibgeschützte Attribut einer im {{domxref("PerformanceTiming")}}-Interface konvertiert werden.
    - Eine Startmarke ist entweder mit `startMark` oder `measureOptions.start` angegeben, aber es gibt keine {{domxref('PerformanceMark')}} im Performance-Puffer mit dem passenden Namen.
    - Eine Startmarke ist entweder mit `startMark` oder `measureOptions.start` angegeben, aber sie kann nicht in eine übereinstimmende schreibgeschützte Attribut einer im {{domxref("PerformanceTiming")}}-Interface konvertiert werden.

- `DataCloneError` {{domxref("DOMException")}}

  - : Der `measureOptions.detail`-Wert ist nicht-`null` und kann nicht unter Verwendung des HTML-"StructuredSerialize"-Algorithmus serialisiert werden.

- {{jsxref("RangeError")}}
  - : Der `measureOptions.detail`-Wert ist nicht-`null` und während der Serialisierung kann kein Speicher zugewiesen werden, indem der HTML-"StructuredSerialize"-Algorithmus verwendet wird.

## Beispiele

### Dauer zwischen benannten Markierungen messen

Angenommen, es gibt zwei Ihrer eigenen Markierungen `"login-started"` und `"login-finished"`, können Sie eine Messung namens `"login-duration"` erstellen, wie im folgenden Beispiel gezeigt. Das zurückgegebene {{domxref("PerformanceMeasure")}}-Objekt wird dann eine `duration`-Eigenschaft bereitstellen, die Ihnen die verstrichene Zeit zwischen den beiden Markierungen angibt.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Dauer mit benutzerdefinierten Start- und Endzeiten messen

Um fortschrittlichere Messungen durchzuführen, können Sie einen `measureOptions`-Parameter übergeben. Zum Beispiel können Sie die [`event.timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft aus einem [`click`-Ereignis](/de/docs/Web/API/Element/click_event) als Startzeit verwenden.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Zusätzliche Messdetails bereitstellen

Sie können die `details`-Eigenschaft verwenden, um zusätzliche Informationen jeglicher Art bereitzustellen. Vielleicht möchten Sie zum Beispiel festhalten, welches HTML-Element angeklickt wurde.

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
