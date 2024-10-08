---
title: "PerformanceMark: PerformanceMark()-Konstruktor"
short-title: PerformanceMark()
slug: Web/API/PerformanceMark/PerformanceMark
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Der **`PerformanceMark()`**-Konstruktor erstellt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem angegebenen Namen.

Im Gegensatz zu [`performance.mark()`](/de/docs/Web/API/Performance/mark) werden Performance-Marken, die durch den Konstruktor erstellt werden, nicht zur Performance-Timeline des Browsers hinzugefügt. Dies bedeutet, dass Aufrufe an die `getEntries*()`-Methoden der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle ([`getEntries()`](/de/docs/Web/API/Performance/getEntries), [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) oder [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)) keine Einträge für diese Marken anzeigen.

## Syntax

```js-nolint
new PerformanceMark(name)
new PerformanceMark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Marke repräsentiert.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zur Angabe eines Zeitstempels und zusätzlicher Metadaten für die Marke.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Marke aufgenommen werden sollen. Voreinstellung ist `null`.
    - `startTime` {{optional_inline}}
      - : [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der als Markierungszeit verwendet werden soll. Standardwert ist [`performance.now()`](/de/docs/Web/API/Performance/now).

### Rückgabewert

Ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der `name`, der dieser Methode übergeben wird, bereits in der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle existiert.
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

Das folgende Beispiel zeigt, wie [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge erstellt werden und dann nicht Teil der Performance-Timeline des Browsers sind.

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
