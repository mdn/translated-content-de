---
title: Intl.DisplayNames()-Konstruktor
short-title: Intl.DisplayNames()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Intl.DisplayNames()`**-Konstruktor erstellt {{jsxref("Intl.DisplayNames")}}-Objekte.

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

> [!NOTE] > `Intl.DisplayNames()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales`
  - : Eine Zeichenkette mit einem BCP 47-Sprachtag oder einer {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Kennungen. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Kennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften in der Reihenfolge enthält, in der sie abgerufen werden:
    - `localeMatcher` {{optional_inline}}
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe [Lokalisierung und Verhandeln von Locales](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `style` {{optional_inline}}
      - : Der zu verwendende Formatierungsstil. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`; der Standardwert ist `"long"`.
    - `type`
      - : Der Typ der Anzeigennamen, die von [`of()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of) zurückgegeben werden. Mögliche Werte sind `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` und `"dateTimeField"`.
    - `fallback` {{optional_inline}}
      - : Was von `of()` zurückzugeben ist, wenn die Eingabe strukturell gültig ist, aber kein passender Anzeigename gefunden wird. Mögliche Werte sind:
        - `"code"` (Standard)
          - : Gibt den Eingabecode selbst zurück.
        - `"none"`
          - : Gibt `undefined` zurück.
    - `languageDisplay` {{optional_inline}}
      - : Wie Sprachennamen angezeigt werden sollen. Nur in Verbindung mit `type: "language"` verwendbar. Mögliche Werte sind:
        - `"dialect"` (Standard)
          - : Zeigt spezielle regionale Dialekte mit ihrem eigenen Namen an. Zum Beispiel wird `"nl-BE"` als `"Flämisch"` angezeigt.
        - `"standard"`
          - : Zeigt alle Sprachen im Standardformat an. Zum Beispiel wird `"nl-BE"` als `"Niederländisch (Belgien)"` angezeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options.type` nicht angegeben wird.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird eine formatierte Zeichenkette in der Standard-Locale und mit Standardoptionen zurückgegeben.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Verwendung des Typs `dateTimeField`

Beispiel für die Verwendung von `dateTimeField` als Typoption, die die lokalisierten Datum-Zeit-Namenstrings zurückgibt.

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

Beispiel für die Verwendung von `calendar` als Typoption, die die lokalisierten Kalendernamenstrings zurückgibt.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Verwendung des Typs `language` mit `languageDisplay`

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
