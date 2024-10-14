---
title: "Performance: mark() Methode"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`mark()`**-Methode erstellt ein benanntes [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt, das einen hochauflösenden Zeitstempel im Leistungstimeline des Browsers darstellt.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Marks darstellt. Darf nicht derselbe Name sein wie einer der Eigenschaften des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Spezifikation eines Zeitstempels und zusätzlicher Metadaten für das Mark.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die im Mark enthalten sein sollen. Standardmäßig `null`. Muss [strukturierbar kopierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Mark-Zeit verwendet werden soll. Standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Der erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Eintrag.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn `name` einer der Eigenschaften des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces ist. Siehe das [Beispiel unten](#reservierte_namen).
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Erstellen benannter Marker

Das folgende Beispiel verwendet `mark()`, um benannte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge zu erstellen. Sie können mehrere Marks mit demselben Namen erstellen. Sie können ihnen auch zuweisen, um eine Referenz auf das erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt zu haben.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Erstellen von Markern mit Details

Das Performance-Mark ist konfigurierbar mit dem `markOptions`-Objekt, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft platzieren können, die von jedem Typ sein kann.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Erstellen von Markern mit einer anderen Startzeit

Der Standard-Zeitstempel der `mark()`-Methode ist [`performance.now()`](/de/docs/Web/API/Performance/now). Sie können ihn mithilfe der `startTime`-Option in `markOptions` auf eine andere Zeit setzen.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### Reservierte Namen

Beachten Sie, um die Abwärtskompatibilität zu wahren, können Namen, die Teil des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces sind, nicht verwendet werden. Das folgende Beispiel führt zu einem Fehler:

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
