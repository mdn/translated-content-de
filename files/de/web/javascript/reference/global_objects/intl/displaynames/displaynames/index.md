---
title: Intl.DisplayNames() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Intl.DisplayNames()`**-Konstruktor erstellt {{jsxref("Intl.DisplayNames")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames")}}

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

> **Note:** `Intl.DisplayNames()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Bezeichner. Die Standardsprache des Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden:
    - `localeMatcher` {{optional_inline}}
      - : Der zu verwendende Algorithmus zur Sprachübereinstimmung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Sprachidentifikation und -negotiation](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `style` {{optional_inline}}
      - : Der zu verwendende Formatierungsstil. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`; der Standardwert ist `"long"`.
    - `type`
      - : Der Typ der Anzeigebezeichnungen, die von [`of()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of) zurückgegeben werden sollen. Mögliche Werte sind `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` und `"dateTimeField"`.
    - `fallback` {{optional_inline}}
      - : Was von `of()` zurückgegeben werden soll, wenn die Eingabe strukturell gültig ist, es jedoch keinen entsprechenden Anzeigebezeichner gibt. Mögliche Werte sind:
        - `"code"` (Standard)
          - : Gibt den Eingabecode selbst zurück.
        - `"none"`
          - : Gibt `undefined` zurück.
    - `languageDisplay` {{optional_inline}}
      - : Wie Sprachbezeichnungen dargestellt werden sollen. Kann nur zusammen mit `type: "language"` verwendet werden. Mögliche Werte sind:
        - `"dialect"` (Standard)
          - : Zeigt spezielle regionale Dialekte mit ihrem eigenen Namen an. Z. B. wird `"nl-BE"` als `"Flämisch"` angezeigt.
        - `"standard"`
          - : Zeigt alle Sprachen im Standardformat an. Z. B. wird `"nl-BE"` als `"Niederländisch (Belgien)"` angezeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `options.type` nicht angegeben ist.
- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Nutzung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standardsprache und mit Standardoptionen zurückgegeben.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Verwendung von `dateTimeField` als Typ

Beispiel mit `dateTimeField` als Optionstyp, dies gibt lokalisierte Datums- und Zeitbezeichnungs-Strings zurück.

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

### Verwendung von `calendar` als Typ

Beispiel mit `calendar` als Optionstyp, dies gibt lokalisierte Kalendernamen-Strings zurück.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Verwendung von `language` mit `languageDisplay`

Beispiel für die Verwendung von `language` als Typ mit `languageDisplay`-Optionen.

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
