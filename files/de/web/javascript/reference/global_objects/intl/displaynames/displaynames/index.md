---
title: Intl.DisplayNames() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.DisplayNames()`** Konstruktor erstellt {{jsxref("Intl.DisplayNames")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntax

```js-nolint
new Intl.DisplayNames(locales, options)
```

> **Note:** `Intl.DisplayNames()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales`
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifier. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifier unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden:
    - `localeMatcher` {{optional_inline}}
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Erkennung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `style` {{optional_inline}}
      - : Der zu verwendende Formatierungsstil. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`; der Standardwert ist `"long"`.
    - `type`
      - : Der Typ von Anzeigenamen, der von [`of()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of) zurückgegeben werden soll. Mögliche Werte sind `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` und `"dateTimeField"`.
    - `fallback` {{optional_inline}}
      - : Was von `of()` zurückgegeben werden soll, wenn die Eingabe strukturell gültig ist, es jedoch keinen übereinstimmenden Anzeigenamen gibt. Mögliche Werte sind:
        - `"code"` (Standard)
          - : Gibt den Eingabecode selbst zurück.
        - `"none"`
          - : Gibt `undefined` zurück.
    - `languageDisplay` {{optional_inline}}
      - : Wie Sprachennamen angezeigt werden sollen. Nur zusammen mit `type: "language"` verwendbar. Mögliche Werte sind:
        - `"dialect"` (Standard)
          - : Zeigt spezielle regionale Dialekte mit ihrem eigenen Namen an. Z.B. wird `"nl-BE"` als `"Flemish"` angezeigt.
        - `"standard"`
          - : Zeigt alle Sprachen im Standardformat an. Z.B. wird `"nl-BE"` als `"Dutch (Belgium)"` angezeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `options.type` nicht angegeben ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Locale wird ein formatierter String im Standard-Locale mit den Standardoptionen zurückgegeben.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Verwendung des Typs `dateTimeField`

Beispiel mit `dateTimeField` als Typoption, das die lokalisierten Datums- und Zeitnamen-Strings zurückgibt.

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

Beispiel mit `calendar` als Typoption, das die lokalisierten Kalendernamen-Strings zurückgibt.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Verwendung des Typs `language` mit `languageDisplay`

Beispiel mit `language` als Typ mit `languageDisplay` Optionen.

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
