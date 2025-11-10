---
title: "Performance: mark() Methode"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`mark()`** Methode erstellt ein benanntes [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt, das einen hochauflösenden Zeitstempel-Marker in der Leistungstimeline des Browsers darstellt.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Markers darstellt. Darf nicht denselben Namen wie eine der Eigenschaften der veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle haben.

- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Angabe eines Zeitstempels und zusätzlicher Metadaten für den Marker.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in den Marker aufgenommen werden. Standardmäßig `null`. Muss [structured-cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
        - `devtools` {{optional_inline}} {{experimental_inline}}
          - : Einige Browser verwenden ein strukturiertes `devtools`-Objekt innerhalb des `detail`-Objekts als Teil einer Extensibility API, um diese in benutzerdefinierten Spuren in Leistungsprofilen anzuzeigen. Weitere Informationen finden Sie in der [Chrome's Extensibility API Dokumentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).
            - `dataType` {{experimental_inline}}
              - : Ein String, der auf `marker` gesetzt werden muss. Identifiziert als ein Marker.
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Standard ist `"primary"`. Muss einer von `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"` sein.
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Array von Schlüssel-Wert-Paaren. Werte können jeden JSON-kompatiblen Typ haben.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Kurzbeschreibung für Tooltip.

    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Markierungszeit verwendet werden soll. Standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Der erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Eintrag.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der `name` einer der Eigenschaften der veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle ist. Siehe das [Beispiel unten](#reservierte_namen).
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Erstellen benannter Marker

Im folgenden Beispiel wird `mark()` verwendet, um benannte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge zu erstellen. Sie können mehrere Marker mit demselben Namen erstellen. Sie können sie auch zuweisen, um eine Referenz auf das erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt zu haben.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Erstellen von Markern mit Details

Der Leistungsmarker ist konfigurierbar über das `markOptions`-Objekt, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft angeben können, die von jedem Typ sein kann.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Erstellen von Markern mit einer anderen Startzeit

Der Standard-Zeitstempel der `mark()`-Methode ist [`performance.now()`](/de/docs/Web/API/Performance/now). Sie können ihn mit der `startTime`-Option in `markOptions` auf eine andere Zeit setzen.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### Extensibility API von DevTools

Für Browser, die die [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) unterstützen, können Sie den `detail`-Parameter verwenden, um mehr Details in einem `devtools`-Objekt anzugeben, das verwendet wird, um dies in Leistungsprofilen anzuzeigen:

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

### Reservierte Namen

Beachten Sie, dass zur Aufrechterhaltung der Rückwärtskompatibilität keine Namen verwendet werden können, die Teil der veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle sind. Das folgende Beispiel löst eine Ausnahme aus:

```js example-bad
performance.mark("navigationStart");
// SyntaxError: "navigationStart" is part of
// the PerformanceTiming interface,
// and cannot be used as a mark name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
