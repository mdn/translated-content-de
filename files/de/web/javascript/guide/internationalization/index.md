---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Meta_programming")}}

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript Internationalisierungs-API, die eine Vielzahl von lokalisierungs- und kultursensitiven Daten und Operationen bereitstellt.

## Datums- und Zeitformatierung

Das {{jsxref("Intl.DateTimeFormat")}}-Objekt ist nützlich für die Formatierung von Datum und Uhrzeit. Das folgende Beispiel formatiert ein Datum für Englisch, wie es in den Vereinigten Staaten verwendet wird. (Das Ergebnis unterscheidet sich in einer anderen Zeitzone.)

```js
// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// Local timezone vary depending on your settings
// In CEST, logs: 07/17/14, 02:00 AM GMT+2
// In PDT, logs: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));
```

## Zahlenformatierung

Das {{jsxref("Intl.NumberFormat")}}-Objekt ist nützlich für die Formatierung von Zahlen, beispielsweise Währungen.

```js
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

## Sortierung

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich für das Vergleichen und Sortieren von Zeichenfolgen.

Zum Beispiel gibt es im Deutschen tatsächlich zwei verschiedene Sortierreihenfolgen, _Telefonbuch_ und _Wörterbuch_. Die Telefonbuchsortierung betont den Klang, und es ist so, als ob "ä", "ö" usw. vor dem Sortieren zu "ae", "oe" usw. erweitert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
```

Einige deutsche Wörter werden mit zusätzlichen Umlauten konjugiert, daher ist es in Wörterbüchern sinnvoll, die Reihenfolge ohne Berücksichtigung von Umlauten festzulegen (außer bei der Sortierung von Wörtern, die sich _nur_ durch Umlaute unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

Für weitere Informationen zur {{jsxref("Intl")}}-API siehe [Einführung in die JavaScript Internationalisierungs-API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Meta_programming")}}
