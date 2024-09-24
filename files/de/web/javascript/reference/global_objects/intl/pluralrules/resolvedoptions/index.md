---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von Instanzen von {{jsxref("Intl.PluralRules")}} gibt ein neues Objekt mit Eigenschaften zurück, die die beim Initialisieren dieses `Intl.PluralRules`-Objekts berechneten Locale- und Pluralformatierungsoptionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-pluralrules-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die beim Initialisieren des gegebenen {{jsxref("Intl.PluralRules")}}-Objekts berechneten Locale- und Pluralformatierungsoptionen widerspiegeln.

Das Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Das BCP 47-Sprachkennzeichen für die tatsächlich verwendete Locale. Wenn im Eingabe-BCP 47-Sprachkennzeichen Unicode-Erweiterungswerte angefordert wurden, die zu dieser Locale führten, sind die angeforderten und für diese Locale unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `pluralCategories`
  - : Ein {{jsxref("Array")}} der im gegebenen Locale verwendeten Pluralkategorien, ausgewählt aus der Liste `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` und `"other"`.
- `type`

  - : Der verwendete Typ (`cardinal` oder `ordinal`).

- `roundingIncrement` {{experimental_inline}}
  - : Die Rundungsinkrementpräzision (das verwendete Inkrement beim Runden von Zahlen).
    Dies ist der im Konstruktor angegebene Wert im Argument `options.roundingIncrement`.
- `roundingMode` {{experimental_inline}}
  - : Der Rundungsmodus.
    Dies ist der im Konstruktor angegebene Wert für das Argument `options.roundingMode` oder der Standardwert: `halfExpand`.
- `roundingPriority` {{experimental_inline}}
  - : Die Priorität zur Auflösung von Rundungskonflikten, wenn sowohl "FractionDigits" als auch "SignificantDigits" angegeben sind.
    Dies ist der im Konstruktor angegebene Wert für das Argument `options.roundingPriority` oder der Standardwert: `auto`.
- `trailingZeroDisplay` {{experimental_inline}}
  - : Die Strategie zur Anzeige von abschließenden Nullen bei ganzen Zahlen.
    Dies ist der im Konstruktor angegebene Wert im Argument `options.trailingZeroDisplay` oder der Standardwert: `"auto"`.

Nur eine der folgenden beiden Gruppen von Eigenschaften ist enthalten:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : Die im `options`-Argument angegebenen Werte oder als Standardwerte aufgefüllt.
    Diese Eigenschaften sind nur vorhanden, wenn weder `minimumSignificantDigits` noch `maximumSignificantDigits` im `options`-Argument angegeben wurden.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : Die im `options`-Argument angegebenen Werte oder als Standardwerte aufgefüllt.
    Diese Eigenschaften sind nur vorhanden, wenn mindestens eine davon im `options`-Argument angegeben wurde.

## Beispiele

### Verwendung der Methode resolvedOptions()

Der folgende Code zeigt die Konstruktion eines `PluralRules`-Objekts, gefolgt von der Ausgabe jeder der verwendeten Optionen.

```js
// Erstellen Sie eine PluralRules-Instanz
const de = new Intl.PluralRules("de-DE", {
  maximumSignificantDigits: 2,
  trailingZeroDisplay: "auto",
});

// Lösen Sie die Optionen auf
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.pluralCategories); // Array ["one", "other"]
console.log(usedOptions.type); // "cardinal"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // undefined (maximumSignificantDigits ist gesetzt)
console.log(usedOptions.maximumFractionDigits); //undefined (maximumSignificantDigits ist gesetzt)
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
