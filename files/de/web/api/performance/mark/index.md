---
title: "Performance: mark() Methode"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die **`mark()`** Methode erstellt ein benanntes [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekt, das einen hochauflösenden Zeitstempel-Marker in der Leistungszeitleiste des Browsers darstellt.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Markierung darstellt. Darf nicht derselbe Name wie eine der Eigenschaften des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Interface sein.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Angabe eines Zeitstempels und zusätzlicher Metadaten für die Markierung.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Markierung aufgenommen werden sollen. Standardwert ist `null`. Muss [strukturierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Markierungszeit verwendet werden soll. Standardwert ist [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Der erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Eintrag.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Ausgelöst, wenn der `name` eine der Eigenschaften des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Interface ist. Siehe das [Beispiel unten](#reservierte_namen).
- {{jsxref("TypeError")}}: Ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Erstellen benannter Marker

Das folgende Beispiel verwendet `mark()`, um benannte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Einträge zu erstellen. Sie können mehrere Markierungen mit demselben Namen erstellen. Sie können ihnen auch einen Verweis auf das erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekt zuweisen.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Erstellen von Markern mit Details

Der Performance-Mark kann mithilfe des `markOptions` Objekts konfiguriert werden, in dem Sie zusätzliche Informationen in der `detail` Eigenschaft speichern können, die von jedem Typ sein kann.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Erstellen von Markern mit einer anderen Startzeit

Der Standard-Zeitstempel der `mark()` Methode ist [`performance.now()`](/de/docs/Web/API/Performance/now). Sie können ihn auf eine andere Zeit einstellen, indem Sie die `startTime` Option in `markOptions` verwenden.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### Reservierte Namen

Beachten Sie, dass zur Aufrechterhaltung der Rückwärtskompatibilität Namen, die Teil des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Interface sind, nicht verwendet werden können. Das folgende Beispiel wirft einen Fehler:

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
