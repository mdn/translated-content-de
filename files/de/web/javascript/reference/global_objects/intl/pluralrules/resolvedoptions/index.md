---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.PluralRules")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Locale- und Pluralformatierungsoptionen widerspiegeln, die während der Initialisierung dieses `Intl.PluralRules`-Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-pluralrules-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Locale- und Pluralformatierungsoptionen widerspiegeln, die während der Initialisierung des gegebenen {{jsxref("Intl.PluralRules")}}-Objekts berechnet wurden.

Das Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP-47-Sprachtag für die tatsächlich verwendete Locale. Wenn im Eingabe-BCP-47-Sprachtag Unicode-Erweiterungswerte angefordert wurden, die zu dieser Locale führten, sind die angeforderten und für diese Locale unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `pluralCategories`
  - : Ein {{jsxref("Array")}} von Pluralkategorien, die von der gegebenen Locale verwendet werden, ausgewählt aus der Liste `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` und `"other"`.
- `type`

  - : Der verwendete Typ (`cardinal` oder `ordinal`).

- `roundingIncrement` {{experimental_inline}}
  - : Die Rundungsinkrement-Präzision (das Inkrement, das beim Runden von Zahlen verwendet wird).
    Dies ist der im Argument `options.roundingIncrement` im Konstruktor angegebene Wert.
- `roundingMode` {{experimental_inline}}
  - : Der Rundungsmodus.
    Dies ist der im Argument `options.roundingMode` im Konstruktor angegebene Wert oder der Standardwert: `halfExpand`.
- `roundingPriority` {{experimental_inline}}
  - : Die Priorität zur Lösung von Rundungskonflikten, wenn sowohl "FractionDigits" als auch "SignificantDigits" angegeben sind.
    Dies ist der im Argument `options.roundingPriority` im Konstruktor angegebene Wert oder der Standardwert: `auto`.
- `trailingZeroDisplay` {{experimental_inline}}
  - : Die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen.
    Dies ist der im Argument `options.trailingZeroDisplay` im Konstruktor angegebene Wert oder der Standardwert: `"auto"`.

Nur eine der folgenden beiden Gruppen von Eigenschaften ist enthalten:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : Die in dem `options`-Argument angegebenen oder als Standardwerte ausgefüllten Werte.
    Diese Eigenschaften sind nur vorhanden, wenn weder `minimumSignificantDigits` noch `maximumSignificantDigits` im `options`-Argument angegeben wurden.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : Die in dem `options`-Argument angegebenen oder als Standardwerte ausgefüllten Werte.
    Diese Eigenschaften sind nur vorhanden, wenn mindestens eine von ihnen im `options`-Argument angegeben wurde.

## Beispiele

### Verwendung der resolvedOptions()-Methode

Der untenstehende Code zeigt die Erstellung eines `PluralRules`-Objekts, gefolgt von der Protokollierung jedes der aufgelösten Optionen.

```js
// Create a PluralRules instance
const de = new Intl.PluralRules("de-DE", {
  maximumSignificantDigits: 2,
  trailingZeroDisplay: "auto",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.pluralCategories); // Array ["one", "other"]
console.log(usedOptions.type); // "cardinal"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // undefined (maximumSignificantDigits is set)
console.log(usedOptions.maximumFractionDigits); //undefined (maximumSignificantDigits is set)
console.log(usedOptions.minimumSignificantDigits); // 1
console.log(usedOptions.maximumSignificantDigits); //2
console.log(usedOptions.roundingIncrement); // 1
console.log(usedOptions.roundingMode); // "halfExpand"
console.log(usedOptions.roundingPriority); // "auto"
console.log(usedOptions.trailingZeroDisplay); // "auto"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
