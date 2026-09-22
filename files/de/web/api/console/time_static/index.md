---
title: "console: Statische Methode time()"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: e61741cfd9f4758eb36694246364ad58e1e8dc56
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.time()`** startet einen Timer, mit dem Sie messen können, wie lange ein Vorgang dauert. Sie geben jedem Timer einen eindeutigen Namen. Auf einer Seite können bis zu 10.000 Timer gleichzeitig laufen. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die seit dem Start des Timers verstrichene Zeit in Millisekunden aus.

Weitere Informationen und Beispiele finden Sie unter [Timer](/de/docs/Web/API/console#timers) in der Dokumentation zu [`console`](/de/docs/Web/API/console).

## Syntax

```js-nolint
console.time()
console.time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des neuen Timers angibt. Dieser Name identifiziert den Timer. Verwenden Sie denselben Namen beim Aufruf von [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), um den Timer zu stoppen und die Zeit in der Konsole auszugeben. Wird der Parameter weggelassen, wird das Label `"default"` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Entwicklerwerkzeuge können das Intervall zwischen `console.time()` und `console.timeEnd()` auch in einer Leistungsaufzeichnung erfassen. Dieses Profiling-Verhalten ist von der Konsolenausgabe unabhängig und nicht durch die Console API spezifiziert. Verwenden Sie [`performance.mark()`](/de/docs/Web/API/Performance/mark) und [`performance.measure()`](/de/docs/Web/API/Performance/measure), um standardisierte Zeitmessungseinträge zu erstellen, auf die JavaScript zugreifen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Beispiele finden Sie unter [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
- [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static)
- [`performance.mark()`](/de/docs/Web/API/Performance/mark)
- [`performance.measure()`](/de/docs/Web/API/Performance/measure)
- [Microsoft-Edge-Dokumentation zu `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#time)
- [Node.js-Dokumentation zu `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google-Chrome-Dokumentation zu `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
