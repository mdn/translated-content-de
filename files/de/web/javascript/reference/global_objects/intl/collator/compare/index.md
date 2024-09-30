---
title: Intl.Collator.prototype.compare()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`compare()`**-Methode von {{jsxref("Intl.Collator")}}-Instanzen vergleicht zwei
Zeichenfolgen gemäß der Sortierreihenfolge dieses Collator-Objekts.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-compare.html")}}

## Syntax

```js-nolint
compare(string1, string2)
```

### Parameter

- `string1`, `string2`
  - : Die Zeichenfolgen, die miteinander verglichen werden sollen.

### Rückgabewert

Eine Zahl, die angibt, wie `string1` und `string2` gemäß der Sortierreihenfolge dieses {{jsxref("Intl.Collator")}}-Objekts verglichen werden:

- Ein negativer Wert, wenn `string1` vor `string2` kommt;
- Ein positiver Wert, wenn `string1` nach `string2` kommt;
- 0, wenn sie als gleich angesehen werden.

## Beispiele

### Verwendung von compare zum Sortieren eines Arrays

Verwenden Sie die `compare`-Funktion zum Sortieren von Arrays. Beachten Sie, dass die Funktion
an den Collator, von dem sie erhalten wurde, gebunden ist, sodass sie direkt an
{{jsxref("Array.prototype.sort()")}} übergeben werden kann.

```js
const a = ["Offenbach", "Österreich", "Odenwald"];
const collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", ")); // "Odenwald, Österreich, Offenbach"
```

### Verwendung von compare zur Arraysuche

Verwenden Sie die `compare`-Funktion, um passende Zeichenfolgen in Arrays zu finden:

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
