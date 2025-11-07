---
title: "PerformanceMark: PerformanceMark() Konstruktor"
short-title: PerformanceMark()
slug: Web/API/PerformanceMark/PerformanceMark
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Der **`PerformanceMark()`**-Konstruktor erstellt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem angegebenen Namen.

Im Gegensatz zu [`performance.mark()`](/de/docs/Web/API/Performance/mark) werden von dem Konstruktor erstellte Performance-Marken nicht zur Performance-Zeitleiste des Browsers hinzugefügt. Das bedeutet, dass Aufrufe der `getEntries*()`-Methoden der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle ([`getEntries()`](/de/docs/Web/API/Performance/getEntries), [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) oder [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)) keine Einträge für diese Marken anzeigen werden.

## Syntax

```js-nolint
new PerformanceMark(name)
new PerformanceMark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Marke repräsentiert.
- `markOptions` {{optional_inline}}
  - : Ein Objekt, um einen Zeitstempel und zusätzliche Metadaten für die Marke anzugeben.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Marke aufgenommen werden sollen. Standardmäßig `null`.
        - `devtools` {{optional_inline}} {{experimental_inline}}
          - : Einige Browser verwenden ein strukturiertes `devtools`-Objekt innerhalb des `detail`-Objekts als Teil einer Extensibility API, die diese in benutzerdefinierten Tracks in Performance-Diagrammen anzeigt. Weitere Informationen finden Sie in der [Chrome Extensibility API-Dokumentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).
            - `dataType` {{experimental_inline}}
              - : Ein String, der auf `marker` gesetzt sein muss. Identifiziert als Marker.
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Standardmäßig `"primary"`. Muss eine der folgenden sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Array von Schlüssel-Wert-Paaren. Werte können jeder JSON-kompatible Typ sein.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Kurze Beschreibung für das Tooltip.
    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Markierungszeit verwendet werden soll. Standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der `name`, der dieser Methode übergeben wird, bereits in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle existiert.
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Erstellen benannter Marker

Das folgende Beispiel zeigt, wie [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge erstellt werden und anschließend nicht Teil der Performance-Zeitleiste des Browsers sind.

```js
new PerformanceMark("squirrel");
new PerformanceMark("monkey");
new PerformanceMark("dog");

const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 0
```

### DevTools Extensibility API

Für Browser, die die [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) unterstützen, können Sie den `detail`-Parameter verwenden, um weitere Details in einem `devtools`-Objekt bereitzustellen, das in Performance-Profilen angezeigt wird:

```js
// Marker indicating when the processed image was uploaded
performance.mark("Image Upload", {
  detail: {
    devtools: {
      dataType: "marker",
      color: "secondary",
      properties: [
        ["Image Size", "2.5MB"],
        ["Upload Destination", "Cloud Storage"],
      ],
      tooltipText: "Processed image uploaded",
    },
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`performance.mark()`](/de/docs/Web/API/Performance/mark)
