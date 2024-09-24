---
title: "PerformanceMark: PerformanceMark() Konstruktor"
short-title: PerformanceMark()
slug: Web/API/PerformanceMark/PerformanceMark
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Der **`PerformanceMark()`** Konstruktor erstellt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} mit dem angegebenen Namen.

Im Gegensatz zu {{domxref("Performance.mark","performance.mark()")}} werden Leistungsmarkierungen, die durch den Konstruktor erstellt werden, nicht zur Leistungstimeline des Browsers hinzugefügt. Dies bedeutet, dass Aufrufe der `getEntries*()`-Methoden der {{domxref("Performance")}}-Schnittstelle ({{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}} oder {{domxref("Performance.getEntriesByType","getEntriesByType()")}}) keine Einträge für diese Markierungen anzeigen.

## Syntax

```js-nolint
new PerformanceMark(name)
new PerformanceMark(name, markOptions)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Markierung darstellt.
- `markOptions` {{optional_inline}}
  - : Ein Objekt zum Spezifizieren eines Zeitstempels und zusätzlicher Metadaten für die Markierung.
    - `detail` {{optional_inline}}
      - : Beliebige Metadaten, die in die Markierung aufgenommen werden sollen. Standard ist `null`.
    - `startTime` {{optional_inline}}
      - : {{domxref("DOMHighResTimeStamp")}}, der als Markierungszeit verwendet werden soll. Standard ist {{domxref("performance.now()")}}.

### Rückgabewert

Ein {{domxref("PerformanceMark")}} Objekt.

### Ausnahmen

- {{jsxref("SyntaxError")}}: Wird ausgelöst, wenn der angegebene `name` bereits in der {{domxref("PerformanceTiming")}}-Schnittstelle existiert.
- {{jsxref("TypeError")}}: Wird ausgelöst, wenn `startTime` negativ ist.

## Beispiele

Das folgende Beispiel zeigt, wie {{domxref("PerformanceMark")}}-Einträge konstruiert werden und dann nicht Teil der Leistungstimeline des Browsers sind.

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

- {{domxref("Performance.mark","performance.mark()")}}
