---
title: Intl.PluralRules.prototype.select()
short-title: select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Die Methode **`select()`** von {{jsxref("Intl.PluralRules")}}-Instanzen gibt einen String zurück, der angibt, welche Pluralregel für die gebietsschemaabhängige Formatierung einer Zahl verwendet werden soll.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.prototype.select()")}}

```js interactive-example
console.log(new Intl.PluralRules("ar-EG").select(0));
// Expected output: "zero"

console.log(new Intl.PluralRules("ar-EG").select(5));
// Expected output: "few"

console.log(new Intl.PluralRules("ar-EG").select(55));
// Expected output: "many"

console.log(new Intl.PluralRules("en").select(0));
// Expected output: "other"
```

## Syntax

```js-nolint
select(number)
```

### Parameter

- `number`
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder String, für den eine Pluralregel ermittelt werden soll. Strings werden auf dieselbe Weise wie bei der [Konvertierung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst. Allerdings verwendet `select()` den exakten Wert, den der String darstellt, und vermeidet so einen Präzisionsverlust bei der impliziten Konvertierung in eine Zahl.

### Rückgabewert

Ein String, der die Pluralkategorie von `number` angibt.
Er kann `zero`, `one`, `two`, `few`, `many` oder `other` sein.

## Beschreibung

Diese Funktion wählt eine Pluralkategorie entsprechend dem Gebietsschema und den Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}}-Objekts aus.
Diese Optionen werden im Konstruktor [`Intl.PluralRules()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) festgelegt.

## Beispiele

### `select()` verwenden

Erstellen Sie zunächst ein `Intl.PluralRules`-Objekt und übergeben Sie die entsprechenden Parameter `locales` und `options`.
Hier erstellen wir ein Objekt mit Pluralregeln für Arabisch im ägyptischen Dialekt.
Da `type` nicht angegeben ist, stellt das Regelobjekt die Formatierung für Kardinalzahlen bereit (die Standardeinstellung).

```js
const pr = new Intl.PluralRules("ar-EG");
```

Rufen Sie dann `select()` für das Regelobjekt auf und geben Sie die Zahl an, für die die Pluralform benötigt wird.
Beachten Sie, dass Arabisch sechs Formen für Kardinalzahlen hat, wie gezeigt.

```js
pr.select(0); // 'zero'
pr.select(1); // 'one'
pr.select(2); // 'two'
pr.select(6); // 'few'
pr.select(18); // 'many'
pr.select(100); // 'other'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
