---
title: Konstruktor Intl.DisplayNames()
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

> **Note:** `Intl.DisplayNames()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Sprachkennungen. Die Standard-Lokalisierung der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Sprachkennungen unterstützt wird. Zur allgemeinen Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options`
  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge, in der sie abgerufen werden:
    - `localeMatcher` {{optional_inline}}
      - : Der zu verwendende Algorithmus zur Lokalisierungsanpassung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Identifizierung und Verhandlung der Lokalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `style` {{optional_inline}}
      - : Der zu verwendende Formatierungsstil. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`; der Standardwert ist `"long"`.
    - `type`
      - : Der Typ der zurückzugebenden Anzeigenamen von [`of()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of). Mögliche Werte sind `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` und `"dateTimeField"`.
    - `fallback` {{optional_inline}}
      - : Was von `of()` zurückgegeben werden soll, wenn die Eingabe strukturell gültig ist, aber kein entsprechender Anzeigename vorhanden ist. Mögliche Werte sind:
        - `"code"` (Standard)
          - : Gibt den eingegebenen Code selbst zurück.
        - `"none"`
          - : Gibt `undefined` zurück.
    - `languageDisplay` {{optional_inline}}
      - : Wie die Sprachennamen angezeigt werden sollen. Nur zusammen mit `type: "language"` verwendbar. Mögliche Werte sind:
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

Bei der grundlegenden Verwendung ohne Angabe einer Lokalisierung wird ein formatierter String in der Standard-Lokalisierung und mit Standardoptionen zurückgegeben.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Verwendung von Typ `dateTimeField`

Ein Beispiel mit der Verwendung von `dateTimeField` als Typoption gibt die lokalisierten Datums- und Zeitnamen zurück.

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

### Verwendung von Typ `calendar`

Ein Beispiel mit der Verwendung von `calendar` als Typoption gibt die lokalisierten Kalendarnamen zurück.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Verwendung von Typ `language` mit `languageDisplay`

Ein Beispiel mit der Verwendung von `language` als Typ mit `languageDisplay` Optionen.

```js
// Verwendung der `dialect` Option
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// Verwendung der `standard` Option
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
