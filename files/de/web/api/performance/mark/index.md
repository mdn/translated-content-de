---
title: "Performance: mark()-Methode"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die **`mark()`**-Methode erstellt ein benanntes [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt, das einen Hochaufgelösten Zeitstempel in der Performance-Zeitachse des Browsers darstellt.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Markierung darstellt. Der Name darf nicht identisch mit einem der Eigenschaften des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces sein.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Angabe eines Zeitstempels und zusätzlicher Metadaten für die Markierung.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Markierung aufgenommen werden sollen. Standardmäßig `null`. Muss [structured-cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Markierungszeit verwendet werden soll. Standardmäßig [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Der erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Eintrag.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der `name` eine der Eigenschaften des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces ist. Siehe das [Beispiel unten](#reservierte_namen).
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Erstellen benannter Markierungen

Das folgende Beispiel verwendet `mark()`, um benannte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge zu erstellen. Sie können mehrere Markierungen mit demselben Namen erstellen. Sie können sie auch zuweisen, um eine Referenz auf das erstellte [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt zu haben.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Erstellen von Markierungen mit Details

Die Leistungsmarkierung ist mithilfe des `markOptions`-Objekts konfigurierbar, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft speichern können, die jeglicher Typ sein kann.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Erstellen von Markierungen mit einer anderen Startzeit

Der Standardzeitstempel der `mark()`-Methode ist [`performance.now()`](/de/docs/Web/API/Performance/now). Sie können ihn mit der `startTime`-Option in `markOptions` auf eine andere Zeit einstellen.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### Reservierte Namen

Beachten Sie, dass aus Gründen der Abwärtskompatibilität Namen, die Teil des veralteten [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces sind, nicht verwendet werden können. Das folgende Beispiel löst einen Fehler aus:

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
