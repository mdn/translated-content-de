---
title: "console: Statische Methode timeEnd()"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: e61741cfd9f4758eb36694246364ad58e1e8dc56
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.timeEnd()`** stoppt einen Timer, der zuvor mit [`console.time()`](/de/docs/Web/API/console/time_static) gestartet wurde.

Weitere Informationen und Beispiele finden Sie unter [Timer](/de/docs/Web/API/console#timers) in der Dokumentation.

## Syntax

```js-nolint
console.timeEnd()
console.timeEnd(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Eine Zeichenfolge, die den Namen des zu stoppenden Timers angibt. Nach dem Stoppen wird die verstrichene Zeit automatisch in der Konsole angezeigt, zusammen mit einem Hinweis darauf, dass die Zeitmessung beendet wurde. Wird der Parameter weggelassen, wird das Label „default“ verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Entwicklerwerkzeuge können das Intervall zwischen `console.time()` und `console.timeEnd()` auch in einer Leistungsaufzeichnung erfassen. Dieses Profiling-Verhalten ist von der Konsolenausgabe unabhängig und wird von der Console API nicht spezifiziert. Für standardisierte Zeitmessungseinträge, auf die JavaScript zugreifen kann, verwenden Sie [`performance.mark()`](/de/docs/Web/API/Performance/mark) und [`performance.measure()`](/de/docs/Web/API/Performance/measure).

## Beispiele

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Die Ausgabe des obigen Beispiels zeigt zunächst, wie lange der Benutzer zum Schließen des ersten Hinweisfensters benötigt hat. Danach zeigt sie die gesamte Zeit, die zum Schließen beider Hinweisfenster benötigt wurde:

![Timer-Ausgabe in der Firefox-Konsole](timer_output.png)

Beachten Sie, dass der Name des Timers sowohl bei der Ausgabe des Timerwerts mit `console.timeLog()` als auch beim Stoppen angezeigt wird. Der Aufruf von `console.timeEnd()` enthält außerdem den zusätzlichen Hinweis „timer ended“, der verdeutlicht, dass der Timer keine Zeit mehr misst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Beispiele finden Sie unter [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeStamp()`](/de/docs/Web/API/console/timeStamp_static)
- [`performance.mark()`](/de/docs/Web/API/Performance/mark)
- [`performance.measure()`](/de/docs/Web/API/Performance/measure)
- [Microsoft-Edge-Dokumentation zu `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#timeend)
- [Node.js-Dokumentation zu `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google-Chrome-Dokumentation zu `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
