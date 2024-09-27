---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: 0ebc78fd61acddbe9505330f006b706ac786456d
---

{{JSRef}}

Die Methode **`resolvedOptions()`** der Instanzen von {{jsxref("Intl.NumberFormat")}} gibt ein neues Objekt zurück, das Eigenschaften enthält, die die [Spracheinstellungen und Zahlenformatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) widerspiegeln, die während der Initialisierung dieses `Intl.NumberFormat`-Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die [Spracheinstellungen und Zahlenformatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) widerspiegeln, die während der Konstruktion des gegebenen {{jsxref("Intl.NumberFormat")}}-Objekts berechnet wurden.

Das resultierende Objekt hat folgende Eigenschaften:

- `compactDisplay`
  - : Ob die kurze oder lange Form bei kompakten Notationen verwendet wird. Dies ist der im Konstruktor angegebene Wert im Argument [`options.compactDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#compactdisplay) oder der Standardwert: `"short"`. Der Wert ist nur vorhanden, wenn `notation` auf "compact" gesetzt ist, ansonsten `undefined`.
- `currency`
  - : Die Währung, die für die Währungsformatierung verwendet werden soll. Der Wert ist definiert, wenn `style` `"currency"` ist, ansonsten `undefined`. Dies ist der im Konstruktor angegebene Wert im Argument [`options.currency`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency).
- `currencyDisplay`
  - : Das Anzeigeformat für die Währung, wie ein Symbol oder Währungscode. Der Wert ist definiert, wenn `style` `"currency"` ist, ansonsten `undefined`. Dies ist der im Konstruktor angegebene Wert im Argument [`options.currencyDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay) oder der Standardwert: `"symbol"`.
- `currencySign`
  - : Die Methode zur Angabe des Vorzeichens des Währungswerts: `standard` oder `accounting`. Der Wert ist vorhanden, wenn `style` `"currency"` ist, ansonsten `undefined`. Dies ist der im Konstruktor angegebene Wert im Argument [`options.currencySign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencysign) oder der Standardwert: `"standard"`.
- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Spracheinstellung. Entspricht einer der im Konstruktor angeforderten Sprachoptionen [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales).
- `notation`
  - : Die Formatierung, die auf die Zahl angewendet werden soll, wie `standard` oder `engineering`. Dies ist der im Konstruktor angegebene Wert im Argument [`options.notation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation) oder der Standardwert: `"standard"`.
- `numberingSystem`
  - : Das Zahlensystem. Dies ist der im Konstruktor angegebene Wert im Argument [`options.numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#numberingsystem), sofern vorhanden, oder der Wert, der mit dem Unicode-Erweiterungsschlüssel [`nu`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#nu) gesetzt wurde, oder als Standard festgelegt ist.
- `roundingIncrement`
  - : Die Rundungspräzision (der Inkrementwert, der beim Runden von Zahlen verwendet wird). Dies ist der im Konstruktor angegebene Wert im Argument [`options.roundingIncrement`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingincrement).
- `roundingMode`
  - : Der Rundungsmodus. Dies ist der im Konstruktor angegebene Wert für das Argument [`options.roundingMode`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) oder der Standardwert: `halfExpand`.
- `roundingPriority`
  - : Die Priorität zur Lösung von Rundungskonflikten, wenn sowohl "FractionDigits" als auch "SignificantDigits" angegeben sind. Dies ist der im Konstruktor angegebene Wert für das Argument [`options.roundingPriority`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingpriority) oder der Standardwert: `auto`.
- `signDisplay`
  - : Ob das positive/negative Vorzeichen angezeigt werden soll. Dies ist der im Konstruktor angegebene Wert im Argument [`options.signDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay) oder der Standardwert: `"auto"`.
- `unit`
  - : Die Einheit, die für die Einheitsformatierung verwendet werden soll. Der Wert ist nur vorhanden, wenn `style` `"unit"` ist, ansonsten `undefined`. Dies ist der im Konstruktor angegebene Wert im Argument [`options.unit`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit).
- `unitDisplay`
  - : Das Anzeigeformat, das für Einheiten in der Einheitsformatierung verwendet werden soll, z.B. "long", "short" oder "narrow". Der Wert ist nur vorhanden, wenn `style` `"unit"` ist, ansonsten `undefined`. Dies ist der im Konstruktor angegebene Wert im Argument [`options.unitDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unitdisplay) oder der Standardwert: `short`.
- `useGrouping`
  - : Ob Gruppierungszeichen zur Kennzeichnung von "Tausendern", "Millionen" usw. verwendet werden sollen. Dies ist der im Konstruktor angegebene Wert im Argument [`options.useGrouping`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping) oder der Standardwert: `"auto"`.
- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen. Dies ist der im Konstruktor angegebene Wert im Argument [`options.trailingZeroDisplay`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#trailingzerodisplay) oder der Standardwert: `"auto"`.

Nur eine der folgenden beiden Gruppen von Eigenschaften ist enthalten:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : Die für diese Eigenschaften im `options`-Argument angegebenen Werte oder die als Standardwerte festgelegten. Diese Eigenschaften sind nur vorhanden, wenn weder `minimumSignificantDigits` noch `maximumSignificantDigits` im `options`-Argument angegeben wurden.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : Die für diese Eigenschaften im `options`-Argument angegebenen Werte oder die als Standardwerte festgelegten. Diese Eigenschaften sind nur vorhanden, wenn mindestens eine davon im `options`-Argument angegeben wurde.

## Beispiele

### Verwendung der `resolvedOptions`-Methode

```js
// Create a NumberFormat
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined ("notation" not set to "compact")
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.maximumSignificantDigits); // undefined (maximumFractionDigits is set)
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
