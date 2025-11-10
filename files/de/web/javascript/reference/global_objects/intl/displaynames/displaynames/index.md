---
title: Intl.DisplayNames() Konstruktor
short-title: Intl.DisplayNames()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Der **`Intl.DisplayNames()`** Konstruktor erstellt {{jsxref("Intl.DisplayNames")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames() constructor")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## Syntax

```js-nolint
new Intl.DisplayNames(locales, options)
```

> [!NOTE]
> `Intl.DisplayNames()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Lokalisierungskennungen. Die Standardlokalisierung der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keine der angegebenen Lokalisierungen unterstützt wird. Weitere Details zur allgemeinen Form und Interpretation des `locales` Arguments finden Sie in [der Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften in der Reihenfolge enthält, in der sie abgerufen werden:
    - `localeMatcher` {{optional_inline}}
      - : Der zu verwendende Lokalisierungs-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Lokalisierungsidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `style` {{optional_inline}}
      - : Der zu verwendende Formatierungsstil. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`; der Standardwert ist `"long"`.
    - `type`
      - : Der Typ der Anzeigennamen, die von [`of()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of) zurückgegeben werden. Mögliche Werte sind `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` und `"dateTimeField"`.
    - `fallback` {{optional_inline}}
      - : Was von `of()` zurückgegeben werden soll, wenn die Eingabe strukturell gültig ist, aber kein passender Anzeigename vorhanden ist. Mögliche Werte sind:
        - `"code"` (Standard)
          - : Gibt den Eingabecode selbst zurück.
        - `"none"`
          - : Gibt `undefined` zurück.
    - `languageDisplay` {{optional_inline}}
      - : Wie Sprachennamen angezeigt werden sollen. Nur in Verbindung mit `type: "language"` nutzbar. Mögliche Werte sind:
        - `"dialect"` (Standard)
          - : Besondere regionale Dialekte mit ihrem eigenen Namen anzeigen. Z.B. wird `"nl-BE"` als `"Flämisch"` angezeigt.
        - `"standard"`
          - : Alle Sprachen im Standardformat anzeigen. Z.B. wird `"nl-BE"` als `"Niederländisch (Belgien)"` angezeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options.type` nicht bereitgestellt wird.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Lokalisierung wird ein formatierter String in der Standardlokalisierung mit Standardoptionen zurückgegeben.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Verwendung des Typs `dateTimeField`

Beispiel zur Verwendung von `dateTimeField` als Typoption, wird die lokalisierten Datums- und Zeitnamen-Strings zurückgeben.

```js
const dn = new Intl.DisplayNames("pt", { type: "dateTimeField" });
console.log(dn.of("era")); // 'era'
console.log(dn.of("year")); // 'ano'
console.log(dn.of("month")); // 'mês'
console.log(dn.of("quarter")); // 'trimestre'
console.log(dn.of("weekOfYear")); // 'semana'
console.log(dn.of("weekday")); // 'dia da semana'
console.log(dn.of("dayPeriod")); // 'AM/PM'
console.log(dn.of("day")); // 'dia'
console.log(dn.of("hour")); // 'hora'
console.log(dn.of("minute")); // 'minuto'
console.log(dn.of("second")); // 'segundo'
```

### Verwendung des Typs `calendar`

Beispiel zur Verwendung von `calendar` als Typoption, wird die lokalisierten Kalendernamen-Strings zurückgeben.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Verwendung des Typs `language` mit `languageDisplay`

Beispiel zur Verwendung von `language` als Typ mit `languageDisplay` Optionen.

```js
// Using `dialect` option
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// Using `standard` option
const dnStd = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});
console.log(dnStd.of("en-GB")); // 'English (United Kingdom)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
