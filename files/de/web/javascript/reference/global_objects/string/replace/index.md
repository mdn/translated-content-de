---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, mehrere oder alle Treffer eines `pattern` durch einen `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und der `replacement` kann ein String oder eine Funktion sein, die für jeden Treffer aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.replace()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
```

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — typischerweise ein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht besitzt, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er die durch `pattern` matchenden Teilstrings. Es werden eine Reihe spezieller Ersetzungsmuster unterstützt; siehe den Abschnitt [Einen String als Ersetzung angeben](#einen_string_als_ersetzung_angeben) unten.
    - Wenn es eine Funktion ist, wird diese für jeden Treffer aufgerufen, und ihr Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Eine Funktion als Ersetzung angeben](#eine_funktion_als_ersetzung_angeben) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, mehrere oder alle Treffer des Musters durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode verändert nicht den String, auf den sie angewendet wird. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Ziel-String und dem `replacement` als Argumenten aufgerufen. Der Rückgabewert dieser Methode wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — beispielsweise wird jede Erwähnung von "Capturing Groups" in der nachfolgenden Beschreibung tatsächlich durch [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt.

Wenn das `pattern` ein leerer String ist, wird der `replacement` am Anfang des Strings eingefügt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regulärer Ausdruck mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Einen String als Ersetzung angeben

Der Ersetzungs-String kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                        |
| `$&`      | Fügt den übereinstimmenden Teilstring ein.                                                                 |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring vorangeht.                             |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring folgt.                                 |
| `$n`      | Fügt die `n`te (`1`-basierte) Capturing Group ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Capturing Group ein, wobei `Name` der Gruppenname ist.                                   |

`$n` und `$<Name>` stehen nur zur Verfügung, wenn das Argument `pattern` ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende Capturing Group im Regex nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Eine Funktion als Ersetzung angeben

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion nach der Übereinstimmung ausgeführt. Das Ergebnis (Rückgabewert) der Funktion wird als Ersetzungs-String verwendet.

> [!NOTE]
> Die oben genannten speziellen Ersetzungsmuster gelten _nicht_ für Strings, die von der Ersetzungsfunktion zurückgegeben werden.

Die Funktion hat die folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Der übereinstimmende Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`te String, der durch eine Capturing Group gefunden wird (einschließlich benannter Capturing Groups), sofern das erste Argument an `replace()` ein {{jsxref("RegExp")}}-Objekt ist. (Entspricht `$1`, `$2` usw. oben.) Beispielsweise, wenn das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` der Treffer für `\a+`, und `p2` der Treffer für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z. B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Offset des übereinstimmenden Teilstrings im gesamten untersuchten String. Wenn beispielsweise der gesamte String `'abcd'` ist und der übereinstimmende Teilstring `'bc'` ist, wird dieses Argument `1` sein.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind, und dessen Werte die übereinstimmenden Teile (`undefined`, wenn nicht übereinstimmt). Nur vorhanden, wenn das `pattern` mindestens eine benannte Capturing Group enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele Capturing Groups es enthält.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrmals für jedes vollständige Muster aufgerufen, das durch einen regulären Ausdruck im ersten Parameter ersetzt werden soll, falls dieser global ist.

## Beispiele

### Definition des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck direkt in `replace()` definiert, inklusive des Ignore-case-Flags.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe [den Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und Ignore-case-Flags mit replace()

Globale Ersetzungen können nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globalen und Ignore-case-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` ermöglichen, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Tauschen von Wörtern in einem String

Das folgende Script tauscht die Wörter im String. Für den Ersetzungstext verwendet das Script [Capturing Groups](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1`- und `$2`-Ersetzungsmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwendung einer Inline-Funktion, die die übereinstimmenden Zeichen verändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird direkt vor der Übereinstimmung eingefügt. Wichtig ist hier, dass zusätzliche Operationen mit dem übereinstimmenden Element durchgeführt werden müssen, bevor es als Ersatz verwendet wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Snippet als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich zu verketten, bevor das Ergebnis zurückgegeben wird.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei `styleHyphenFormat('borderTop')` wird `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ des Treffers weiter transformieren möchten, bevor die endgültige Substitution durchgeführt wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung des Treffers vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Wenn wir dies versucht hätten, ohne eine Funktion zu verwenden, würde {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung haben.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zum gleichen `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ersetzen einer Fahrenheit-Temperatur durch das Celsius-Äquivalent

Das folgende Beispiel ersetzt eine Fahrenheit-Temperatur durch ihr entsprechendes Celsius-Äquivalent. Die Fahrenheit-Temperatur sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Zum Beispiel, wenn die Eingabe `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Temperatur ist der Funktion über ihren zweiten Parameter, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der übergebenen Fahrenheit-Zahl an die Funktion `f2c()`. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion ähnelt dem Perl-Flag `s///e`.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return `${((p1 - 32) * 5) / 9}C`;
  }
  const s = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Erstellen eines generischen Ersatzes

Angenommen, wir möchten einen Ersatz erstellen, der die Offset-Daten an jeden übereinstimmenden String anhängt. Da die Ersetzungsfunktion bereits den Parameter `offset` erhält, wäre dies trivial, wenn das Regex-Muster statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersatz wäre jedoch schwer zu generalisieren, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersatz ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Capturing Groups ab. Wir können [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber auch `offset`, `string` usw. würden in das Array aufgenommen. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise oder möglicherweise nicht übergeben wird, würde es auch erschweren, zu wissen, welches Argument mit `offset` korrespondiert.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das oben erwähnte Beispiel `addOffset` funktioniert nicht, wenn das Regex-Muster eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` der `string` anstelle des `offset` wäre.

Stattdessen müssen Sie die letzten paar Argumente basierend auf dem Typ extrahieren, da `groups` ein Objekt ist, während `string` ein String ist.

```js
function addOffset(match, ...args) {
  const hasNamedGroups = typeof args.at(-1) === "object";
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.replace` in `core-js` mit Fixes und Implementation von aktuellem Verhalten wie `Symbol.replace` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
