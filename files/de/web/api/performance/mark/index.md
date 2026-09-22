---
title: "Performance: Methode mark()"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: e61741cfd9f4758eb36694246364ad58e1e8dc56
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`mark()`** erstellt ein benanntes [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt, das einen hochauflösenden Zeitstempel-Marker in der Performance-Timeline des Browsers darstellt.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Markers angibt. Der Name darf nicht mit einer der Eigenschaften der veralteten Schnittstelle [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) übereinstimmen.

- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Angabe eines Zeitstempels und zusätzlicher Metadaten für den Marker.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in den Marker aufgenommen werden sollen. Der Standardwert ist `null`. Die Metadaten müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
        - `devtools` {{optional_inline}} {{experimental_inline}}
          - : Einige Browser verwenden innerhalb des `detail`-Objekts ein strukturiertes `devtools`-Objekt als Teil einer Extensibility API, die diese Daten in benutzerdefinierten Spuren von Performance-Traces anzeigt. Weitere Informationen finden Sie in der [Dokumentation zur Extensibility API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).
            - `dataType` {{experimental_inline}}
              - : Ein String, der auf `marker` gesetzt sein muss. Kennzeichnet den Eintrag als Marker.
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Der Standardwert ist `"primary"`. Der Wert muss einer der folgenden sein: `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"` oder `"error"`.
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Ein Array aus Schlüssel-Wert-Paaren. Die Werte können jeden JSON-kompatiblen Typ haben.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Eine kurze Beschreibung für den Tooltip.

    - `startTime` {{optional_inline}}
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Zeitpunkt des Markers verwendet wird. Der Standardwert ist [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Der erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Eintrag.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn `name` eine der Eigenschaften der veralteten Schnittstelle [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) ist. Siehe das [Beispiel unten](#reservierte_namen).
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Benannte Marker erstellen

Das folgende Beispiel verwendet `mark()`, um benannte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge zu erstellen. Sie können mehrere Marker mit demselben Namen erstellen. Sie können sie auch einer Variablen zuweisen, um eine Referenz auf das erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt zu erhalten.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Marker mit zusätzlichen Angaben erstellen

Der Performance-Marker lässt sich über das `markOptions`-Objekt konfigurieren. In dessen Eigenschaft `detail` können Sie zusätzliche Informationen beliebigen Typs angeben.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Marker mit einem anderen Startzeitpunkt erstellen

Der Standardzeitstempel der Methode `mark()` ist [`performance.now()`](/de/docs/Web/API/Performance/now). Mit der Option `startTime` in `markOptions` können Sie einen anderen Zeitpunkt festlegen.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### DevTools Extensibility API

In Browsern, die die [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) unterstützen, können Sie über den Parameter `detail` zusätzliche Angaben in einem `devtools`-Objekt bereitstellen. Diese werden in Performance-Profilen angezeigt:

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

Beachten Sie, dass Namen, die Teil der veralteten Schnittstelle [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) sind, aus Gründen der Abwärtskompatibilität nicht verwendet werden können. Das folgende Beispiel löst eine Ausnahme aus:

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

## Siehe auch

- [`performance.measure()`](/de/docs/Web/API/Performance/measure)
- [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
