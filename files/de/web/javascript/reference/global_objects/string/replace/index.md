---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{JSRef}}

Die **`replace()`** Methode von {{jsxref("String")}} Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Treffer eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jeden Treffer aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.prototype.replace()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /dog/i;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
```

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace` Methode nicht hat, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird es das Teilstring ersetzen, das mit `pattern` übereinstimmt. Eine Reihe von speziellen Ersatzmustern wird unterstützt; siehe den Abschnitt [Angeben eines Strings als Ersatz](#angeben_eines_strings_als_ersatz) unten.
    - Wenn es eine Funktion ist, wird sie für jeden Treffer aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Angeben einer Funktion als Ersatz](#angeben_einer_funktion_als_ersatz) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Treffer des Musters durch den angegebenen Ersatz ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode (einschließlich `RegExp`-Objekten) ist, wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Der Rückgabewert dieser Methode wird der Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()` Methode kodiert — zum Beispiel ist jede Erwähnung von "erfassenden Gruppen" in der folgenden Beschreibung tatsächlich Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird der Ersatz am Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regexp mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Für weitere Informationen darüber, wie RegEx-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flag) mit `replace()` interagieren, siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Angeben eines Strings als Ersatz

Der Ersatzstring kann die folgenden speziellen Ersatzmuster enthalten:

| Muster    | Einfügen                                                                                                        |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                             |
| `$&`      | Fügt das übereinstimmende Teilstring ein.                                                                       |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring vorausgeht.                                 |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring folgt.                                      |
| `$n`      | Fügt die `n`-te (`1`-indizierte) erfassende Gruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte erfassende Gruppe ein, wobei `Name` der Gruppenname ist.                                      |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende erfassende Gruppe im Regex nicht vorhanden ist, wird das Muster als Literale ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Angeben einer Funktion als Ersatz

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem die Übereinstimmung durchgeführt wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersatz-String verwendet.

> [!NOTE]
> Die oben erwähnten speziellen Ersatzmuster gelten _nicht_ für von der Ersetzungsfunktion zurückgegebene Strings.

Die Funktion hat die folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Das übereinstimmende Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`-te String, gefunden durch eine erfassende Gruppe (einschließlich benannter erfassender Gruppen), vorausgesetzt, das erste Argument von `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, etc. oben.) Zum Beispiel, wenn das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` das Match für `\a+`, und `p2` ist das Match für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), ist die nicht übereinstimmende Alternative `undefined`.
- `offset`
  - : Der Offset des übereinstimmenden Teilstrings innerhalb des gesamten zu prüfenden Strings. Zum Beispiel, wenn der gesamte String `'abcd'` war und das übereinstimmende Teilstring `'bc'` war, dann wäre dieses Argument `1`.
- `string`
  - : Der gesamte zu prüfende String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und deren Werte die übereinstimmenden Teile sind (`undefined`, wenn nicht übereinstimmt). Nur vorhanden, wenn das `pattern` mindestens eine benannte erfassende Gruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele erfassende Gruppen es hat.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/(\D*)(\d*)(\W*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrmals aufgerufen, um jeden vollständigen Treffer zu ersetzen, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Definieren des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Ignore-Case-Flag.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe den [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und IgnoreCase-Flags mit replace()

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globalen und Ignore-Case-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` erlauben, jedes Vorkommen von `'apples'` im String mit `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersetzungstext verwendet das Skript [erfassende Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1` und `$2` Ersetzungsmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwenden einer Inline-Funktion, die die übereinstimmenden Zeichen modifiziert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt und ein Bindestrich wird direkt vor der Übereinstimmungsstelle eingefügt. Das Wichtige hier ist, dass zusätzliche Operationen auf dem übereinstimmenden Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert den übereinstimmenden Ausschnitt als Parameter und verwendet ihn, um den Fall zu transformieren und den Bindestrich zu verketten, bevor sie ihn zurückgibt.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei `styleHyphenFormat('borderTop')` wird `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ des Matches weiter transformieren möchten, bevor die endgültige Ersetzung erfolgt, müssen wir eine Funktion verwenden. Dadurch wird die Auswertung des Matches vor der [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) Methode erzwungen. Hätten wir versucht, das Match ohne eine Funktion zu nutzen, hätte {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung gehabt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zu demselben `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ersetzen eines Fahrenheit-Grads durch sein Celsius-Äquivalent

Das folgende Beispiel ersetzt ein Fahrenheit-Grad durch sein Celsius-Äquivalent. Das Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Zum Beispiel, wenn die Eingangszahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` prüft auf jede Zahl, die mit `F` endet. Die Nummer der Fahrenheit-Grade ist durch ihren zweiten Parameter `p1` für die Funktion zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Anzahl der in die `f2c()`-Funktion übergebenen Fahrenheit-Grade fest. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion approximiert Perls `s///e`-Flag.

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

### Erstellen eines generischen Ersetzers

Angenommen, wir möchten einen Ersetzer erstellen, der die Offset-Daten zu jedem übereinstimmenden String anfügt. Da die Ersetzerfunktion den `offset`-Parameter bereits erhält, wird es trivial, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn wir wollen, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen erfassenden Gruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, etc. in das Array aufnehmen. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise oder möglicherweise nicht übergeben wird, würde es auch schwierig machen, allgemein zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das `addOffset`-Beispiel oben funktioniert nicht, wenn der Regex eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` der `string` anstelle des `offset` wäre.

Stattdessen müssen Sie die letzten Argumente basierend auf dem Typ extrahieren, da `groups` ein Objekt ist, während `string` ein String ist.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Fixes und Implementierung von modernem Verhalten wie `Symbol.replace` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
