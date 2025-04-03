---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, in dem ein, mehrere oder alle Treffer eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jeden Treffer aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.prototype.replace()")}}

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht hat, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er den durch `pattern` gefundenen Teilstring. Eine Anzahl spezieller Ersetzungsmuster wird unterstützt; siehe den Abschnitt [Angabe eines Strings als Ersetzung](#angabe_eines_strings_als_ersetzung) unten.
    - Wenn es eine Funktion ist, wird sie für jedes Vorkommen aufgerufen und ihr Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Angabe einer Funktion als Ersetzung](#angabe_einer_funktion_als_ersetzung) unten beschrieben.

### Rückgabewert

Ein neuer String, in dem ein, mehrere oder alle Treffer des Musters durch die angegebene Ersetzung ersetzt werden.

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — zum Beispiel ist jede Erwähnung von "Capturing Groups" in der folgenden Beschreibung tatsächlich eine Funktionalität, die durch [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung an den Anfang des Strings gestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein Regexp mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehrmals ersetzt. Für weitere Informationen darüber, wie Regexp-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Angabe eines Strings als Ersetzung

Der Ersatzstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                      |
| `$&`      | Fügt den passenden Teilstring ein.                                                                       |
| `` $` ``  | Fügt den Abschnitt des Strings ein, der dem passenden Teilstring vorausgeht.                             |
| `$'`      | Fügt den Abschnitt des Strings ein, der dem passenden Teilstring folgt.                                  |
| `$n`      | Fügt die `n`te (`1`-basierte) Capturing Group ein, wobei `n` eine positive Ganzzahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Capturing Group ein, wobei `Name` der Gruppenname ist.                                 |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende Capturing Group im Regex nicht vorhanden ist, wird das Muster buchstäblich ersetzt. Wenn die Gruppe vorhanden, aber nicht abgeglichen ist (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Angabe einer Funktion als Ersetzung

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem der Treffer durchgeführt wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersatzstring verwendet.

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
  - : Der gefundene Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`te durch eine Capture Group gefundene String (einschließlich benannter Capturing Groups), vorausgesetzt, das erste Argument von `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, etc. oben.) Wenn zum Beispiel das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` der Treffer für `\a+` und `p2` der Treffer für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), ist die nicht abgeglichenen Alternative `undefined`.
- `offset`
  - : Der Offset des gefundenen Teilstrings innerhalb des gesamten untersuchten Strings. Wenn zum Beispiel der ganze String `'abcd'` war und der gefundene Teilstring `'bc'` war, dann ist dieses Argument `1`.
- `string`
  - : Der ganze untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen und dessen Werte die übereinstimmenden Teile sind (`undefined`, wenn nicht übereinstimmend). Nur vorhanden, wenn das `pattern` mindestens eine benannte Capturing Group enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, wenn ja, wie viele Capture Groups es hat.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jedes vollständige Vorkommen, das ersetzt werden soll, aufgerufen, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Definierung des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Flag für Groß-/Kleinschreibung ignorieren.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe [den regulären Ausdrucksleitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und ignoreCase-Flags mit replace()

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globalen und ignore case Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` ermöglichen, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String umschalten

Das folgende Skript schaltet die Wörter im String. Für den Ersetzungstext verwendet das Skript [Capturing Groups](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1`- und `$2`-Ersatzmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwenden einer Inline-Funktion, die die gefundenen Zeichen modifiziert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird kurz vor der Fundstelle eingefügt. Das Wichtige hierbei ist, dass zusätzliche Operationen an dem gefundenen Element notwendig sind, bevor es als Ersatz zurückgegeben wird.

Die Ersatzfunktion akzeptiert das gefundene Fragment als Parameter und nutzt es, um den Fall zu transformieren und den Bindestrich vor der Rückgabe zu verketten.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei `styleHyphenFormat('borderTop')` wird `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ des Treffers weiter transformieren möchten, bevor die endgültige Ersetzung vorgenommen wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung des Treffers vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Hätten wir versucht, dies ohne eine Funktion mit dem Treffer zu tun, hätte das {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung gehabt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies ist, weil `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zum gleichen `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ersetzen eines Fahrenheit-Grads durch den Celsius-Äquivalent

Das folgende Beispiel ersetzt ein Fahrenheit-Grad durch sein äquivalentes Celsius-Grad. Das Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn die Eingabezahl zum Beispiel `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` prüft auf jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grad ist über den zweiten Parameter der Funktion, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Anzahl der in einer Zeichenkette an die `f2c()`-Funktion übergebenen Fahrenheit-Grad. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion ahmt das `s///e`-Flag von Perl nach.

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

### Erstellen eines allgemeinen Ersetzungsfunktores

Angenommen, wir möchten einen Ersetzungsfunkter erstellen, der die Offset-Daten an jeden übereinstimmenden String anhängt. Da die Ersetzungsfunktion bereits den `offset`-Parameter erhält, wird dies trivial, wenn der Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzungsfunkter wäre jedoch schwer zu verallgemeinern, wenn wir ihn mit jedem Regex-Muster zum Laufen bringen wollen. Der Ersetzungsfunkter ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Capturing Groups ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber dies würde auch `offset`, `string` usw. in das Array aufnehmen. Die Tatsache, dass `groups` je nachdem, welche Regex verwendet wird, möglicherweise oder möglicherweise nicht übergeben wird, würde es auch schwierig machen, allgemein zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das Beispiel `addOffset` oben funktioniert nicht, wenn der Regex eine benannte Gruppe enthält, denn in diesem Fall wäre `args.at(-2)` der `string` anstelle des `offset`.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung von modernem Verhalten wie `Symbol.replace`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
