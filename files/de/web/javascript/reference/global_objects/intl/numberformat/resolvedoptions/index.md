---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: 0ebc78fd61acddbe9505330f006b706ac786456d
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die [lokalen und Zahlenformatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) widerspiegeln, die während der Initialisierung dieses `Intl.NumberFormat` Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die [lokalen und Zahlenformatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) widerspiegeln, die während der Konstruktion des gegebenen {{jsxref("Intl.NumberFormat")}} Objekts berechnet wurden.

Das resultierende Objekt hat folgende Eigenschaften:

- `compactDisplay`
  - : Ob bei der kompakten Notation die Kurz- oder Langform verwendet werden soll.
    Dies ist der Wert, der im [`options.compactDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#compactdisplay) Argument des Konstruktors angegeben wurde, oder der Standardwert: `"short"`.
    Der Wert ist nur vorhanden, wenn `notation` auf "compact" gesetzt ist, und andernfalls `undefined`.
- `currency`
  - : Die Währung, die bei der Währungsformatierung verwendet werden soll.
    Der Wert ist definiert, wenn `style` `"currency"` ist, und andernfalls `undefined`.
    Dies ist der im [`options.currency`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency) Argument des Konstruktors angegebene Wert.
- `currencyDisplay`
  - : Das Anzeigeformat für die Währung, z. B. ein Symbol oder der Währungscode.
    Der Wert ist definiert, wenn `style` `"currency"` ist, und andernfalls `undefined`.
    Dies ist der im [`options.currencyDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay) Argument des Konstruktors angegebene Wert, oder der Standardwert: `"symbol"`.
- `currencySign`
  - : Die Methode zur Angabe des Zeichens des Währungswerts: `standard` oder `accounting`.
    Der Wert ist vorhanden, wenn `style` `"currency"` ist, und andernfalls `undefined`.
    Dies ist der im [`options.currencySign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencysign) Argument des Konstruktors angegebene Wert, oder der Standardwert: `"standard"`.
- `locale`
  - : Der BCP 47 Sprach-Tag für die tatsächlich verwendete Locale.
    Entspricht einer der Locales, die im Konstruktor [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) angefragt wurden.
- `notation`
  - : Die Formatierung, die auf die Zahl angewendet werden soll, z. B. `standard` oder `engineering`.
    Dies ist der im [`options.notation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation) Argument des Konstruktors angegebene Wert, oder der Standardwert: `"standard"`.
- `numberingSystem`
  - : Das Zahlensystem.
    Dies ist der im [`options.numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#numberingsystem) Argument des Konstruktors angegebene Wert, falls vorhanden, oder der Wert, der mit dem Unicode-Erweiterungsschlüssel [`nu`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#nu) gesetzt wurde, oder als Standardwert gefüllt.
- `roundingIncrement`
  - : Die Rundungsinkrement-Präzision (das Inkrement, das beim Runden von Zahlen verwendet wird).
    Dies ist der im [`options.roundingIncrement`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingincrement) Argument des Konstruktors angegebene Wert.
- `roundingMode`
  - : Der Rundungsmodus.
    Dies ist der im [`options.roundingMode`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) Argument des Konstruktors angegebene Wert, oder der Standardwert: `halfExpand`.
- `roundingPriority`
  - : Die Priorität bei der Auflösung von Rundungskonflikten, wenn sowohl "FractionDigits" als auch "SignificantDigits" angegeben sind.
    Dies ist der im [`options.roundingPriority`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingpriority) Argument des Konstruktors angegebene Wert, oder der Standardwert: `auto`.
- `signDisplay`
  - : Ob das positive/negative Zeichen angezeigt werden soll oder nicht.
    Dies ist der im [`options.signDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay) Argument des Konstruktors angegebene Wert, oder der Standardwert: `"auto"`.
- `unit`
  - : Die Einheit, die bei der Einheitsformatierung verwendet werden soll.
    Der Wert ist nur vorhanden, wenn `style` `"unit"` ist, und ist andernfalls `undefined`.
    Dies ist der im [`options.unit`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit) Argument des Konstruktors angegebene Wert.
- `unitDisplay`
  - : Das Anzeigeformat für Einheiten in der Einheitsformatierung, wie "long", "short" oder "narrow".
    Der Wert ist nur vorhanden, wenn `style` `"unit"` ist, und ist andernfalls `undefined`.
    Dies ist der im [`options.unitDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unitdisplay) Argument des Konstruktors angegebene Wert, oder der Standardwert: `short`.
- `useGrouping`
  - : Ob Gruppierungszeichen verwendet werden, um "Tausender", "Millionen" usw. zu kennzeichnen.
    Dies ist der im [`options.useGrouping`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping) Argument des Konstruktors angegebene Wert, oder der Standardwert: `"auto"`.
- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen.
    Dies ist der im [`options.trailingZeroDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#trailingzerodisplay) Argument des Konstruktors angegebene Wert, oder der Standardwert: `"auto"`.

Nur eine der folgenden beiden Gruppen von Eigenschaften ist enthalten:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : Die in den `options` Argumenten angegebenen Werte oder als Standardwerte gefüllt.
    Diese Eigenschaften sind nur vorhanden, wenn weder `minimumSignificantDigits` noch `maximumSignificantDigits` im `options` Argument angegeben wurden.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : Die in den `options` Argumenten angegebenen Werte oder als Standardwerte gefüllt.
    Diese Eigenschaften sind nur vorhanden, wenn mindestens eine von ihnen im `options` Argument angegeben wurde.

## Beispiele

### Verwendung der Methode `resolvedOptions`

```js
// Erstellen eines NumberFormat
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// Auflösung der Optionen
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined ("notation" nicht auf "compact" gesetzt)
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined (maximumFractionDigits gesetzt)
console.log(usedOptions.maximumSignificantDigits); // undefined (maximumFractionDigits gesetzt)
console.log(usedOptions.notation); // "standard"
console.log(usedOptions.roundingIncrement); // 5
console.log(usedOptions.roundingMode); // halfCeil
console.log(usedOptions.roundingPriority); // auto
console.log(usedOptions.signDisplay); // "auto"
console.log(usedOptions.style); // "currency"
console.log(usedOptions.trailingZeroDisplay); // auto
console.log(usedOptions.useGrouping); // auto
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
