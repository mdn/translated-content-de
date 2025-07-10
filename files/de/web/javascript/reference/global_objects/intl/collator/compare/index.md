---
title: Intl.Collator.prototype.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`compare()`**-Methode von {{jsxref("Intl.Collator")}} Instanzen vergleicht zwei
Strings entsprechend der Sortierreihenfolge dieses Collator-Objekts.

{{InteractiveExample("JavaScript Demo: Intl.Collator.prototype.compare()")}}

```js interactive-example
const enCollator = new Intl.Collator("en");
const deCollator = new Intl.Collator("de");
const svCollator = new Intl.Collator("sv");

console.log(enCollator.compare("z", "a") > 0);
// Expected output: true

console.log(deCollator.compare("z", "ä") > 0);
// Expected output: true

console.log(svCollator.compare("z", "ä") > 0);
// Expected output: false
```

## Syntax

```js-nolint
compare(string1, string2)
```

### Parameter

- `string1`, `string2`
  - : Die Strings, die miteinander verglichen werden sollen.

### Rückgabewert

Eine Zahl, die angibt, wie `string1` und `string2` gemäß der Sortierreihenfolge dieses {{jsxref("Intl.Collator")}}-Objekts verglichen werden:

- Ein negativer Wert, wenn `string1` vor `string2` kommt;
- Ein positiver Wert, wenn `string1` nach `string2` kommt;
- 0, wenn sie als gleich angesehen werden.

## Beispiele

### Verwendung von compare für Array-Sortierung

Verwenden Sie die `compare`-Funktion zur Sortierung von Arrays. Beachten Sie, dass die Funktion
an den Collator gebunden ist, von dem sie abgeleitet wurde, so dass sie direkt an
{{jsxref("Array.prototype.sort()")}} übergeben werden kann.

```js
const a = ["Offenbach", "Österreich", "Odenwald"];
const collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", ")); // "Odenwald, Österreich, Offenbach"
```

### Verwendung von compare für Array-Suche

Verwenden Sie die `compare`-Funktion zur Suche nach passenden Strings in Arrays:

```js
const a = ["Congrès", "congres", "Assemblée", "poisson"];
const collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
const s = "congres";
const matches = a.filter((v) => collator.compare(v, s) === 0);
console.log(matches.join(", ")); // "Congrès, congres"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
