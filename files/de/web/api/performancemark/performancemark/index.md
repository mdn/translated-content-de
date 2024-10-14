---
title: "PerformanceMark: PerformanceMark() Konstruktor"
short-title: PerformanceMark()
slug: Web/API/PerformanceMark/PerformanceMark
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Der **`PerformanceMark()`** Konstruktor erzeugt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem angegebenen Namen.

Im Gegensatz zu [`performance.mark()`](/de/docs/Web/API/Performance/mark) werden Performance-Marken, die durch den Konstruktor erstellt werden, nicht zur Leistungstimeline des Browsers hinzugefügt. Das bedeutet, dass Aufrufe der `getEntries*()` Methoden der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle ([`getEntries()`](/de/docs/Web/API/Performance/getEntries), [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) oder [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)) keine Einträge für diese Marken anzeigen.

## Syntax

```js-nolint
new PerformanceMark(name)
new PerformanceMark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Marke darstellt.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Angabe eines Zeitstempels und zusätzlicher Metadaten für die Marke.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Marke einbezogen werden sollen. Standard ist `null`.
    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Markierungszeit verwendet werden soll. Standard ist [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der `name`, der dieser Methode übergeben wird, bereits in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle existiert.
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

Das folgende Beispiel zeigt, wie [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge erstellt werden und dann nicht Teil der Leistungstimeline des Browsers sind.

```js
new PerformanceMark("squirrel");
new PerformanceMark("monkey");
new PerformanceMark("dog");

const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`performance.mark()`](/de/docs/Web/API/Performance/mark)
