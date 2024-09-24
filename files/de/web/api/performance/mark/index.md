---
title: "Performance: mark()-Methode"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die **`mark()`**-Methode erstellt ein benanntes {{domxref("PerformanceMark")}}-Objekt, das einen hochauflösenden Zeitstempelmarker in der Leistungstimeline des Browsers darstellt.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Markierung darstellt. Darf nicht denselben Namen wie eine der Eigenschaften der veralteten {{domxref("PerformanceTiming")}}-Schnittstelle haben.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zum Festlegen eines Zeitstempels und zusätzlicher Metadaten für die Markierung.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Markierung aufgenommen werden. Standardmäßig `null`. Muss [structured-cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `startTime` {{optional_inline}}
      - : {{domxref("DOMHighResTimeStamp")}} zur Verwendung als Markierungszeit. Standardmäßig {{domxref("performance.now()")}}.

### Rückgabewert

Der erstellte {{domxref("PerformanceMark")}}-Eintrag.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der `name` einer der Eigenschaften der veralteten {{domxref("PerformanceTiming")}}-Schnittstelle ist. Siehe das [Beispiel unten](#reservierte_namen).
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

### Erstellen benannter Markierungen

Das folgende Beispiel verwendet `mark()`, um benannte {{domxref("PerformanceMark")}}-Einträge zu erstellen. Sie können mehrere Markierungen mit demselben Namen erstellen. Sie können sie auch zuweisen, um eine Referenz auf das erstellte {{domxref("PerformanceMark")}}-Objekt zu haben.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Erstellen von Markierungen mit Details

Die Leistungsmarkierung ist konfigurierbar mit dem `markOptions`-Objekt, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft speichern können, die von jedem Typ sein kann.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Erstellen von Markierungen mit einer anderen Startzeit

Der Standardzeitstempel der `mark()`-Methode ist {{domxref("performance.now()")}}. Sie können ihn auf eine andere Zeit setzen, indem Sie die `startTime`-Option in `markOptions` verwenden.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### Reservierte Namen

Beachten Sie, dass zur Wahrung der Abwärtskompatibilität Namen, die Teil der veralteten {{domxref("PerformanceTiming")}}-Schnittstelle sind, nicht verwendet werden können. Das folgende Beispiel löst einen Fehler aus:

```js example-bad
performance.mark("navigationStart");
// SyntaxError: "navigationStart" ist Teil des
// PerformanceTiming-Interface,
// und kann nicht als Markierungsname verwendet werden
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
