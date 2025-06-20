---
title: Intl.PluralRules.prototype.select()
short-title: select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`select()`**-Methode von {{jsxref("Intl.PluralRules")}}-Instanzen gibt einen String zurück, der angibt, welche Pluralregel für die lokale formatierte Darstellung einer Zahl verwendet werden soll.

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
  - : Die Zahl, für die eine Pluralregel ermittelt werden soll.

### Rückgabewert

Ein String, der die Pluralisierungskategorie der `number` darstellt.
Dies kann eine der folgenden Kategorien sein: `zero`, `one`, `two`, `few`, `many` oder `other`.

## Beschreibung

Diese Funktion wählt eine Pluralisierungskategorie gemäß den lokalen Einstellungen und Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}}-Objekts aus.
Diese Optionen werden im [`Intl.PluralRules()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)-Konstruktor festgelegt.

## Beispiele

### Verwendung von select()

Zuerst erstellt man ein `Intl.PluralRules`-Objekt und übergibt die passenden `locales`- und `options`-Parameter.
Hier erstellen wir ein Pluralrules-Objekt für Arabisch im ägyptischen Dialekt.
Da `type` nicht angegeben ist, bietet das Rules-Objekt Formatierung für Kardinalzahlen (die Standardeinstellung).

```js
const pr = new Intl.PluralRules("ar-EG");
```

Dann ruft man `select()` für das Rules-Objekt auf und gibt die Zahl an, für die die Pluralform benötigt wird.
Beachten Sie, dass Arabisch 5 Formen für Kardinalzahlen hat, wie gezeigt.

```js
pr.select(0); // 'zero'
pr.select(1); // 'one'
pr.select(2); // 'two'
pr.select(6); // 'few'
pr.select(18); // 'many'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
