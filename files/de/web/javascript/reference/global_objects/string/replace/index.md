---
title: String.prototype.replace()
short-title: replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Vorkommen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein und das `replacement` kann ein String oder eine Funktion sein, die für jeden Treffer aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht die `Symbol.replace`-Methode hat, wird zu einem String gezwungen.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er den durch `pattern` übereinstimmenden Teilstring. Eine Reihe von speziellen Ersetzungsmustern wird unterstützt; siehe den Abschnitt [Angabe eines Strings als Ersetzung](#angabe_eines_strings_als_ersetzung) unten.
    - Wenn es eine Funktion ist, wird diese für jeden Treffer aufgerufen und der Rückgabewert wird als Ersetzungstext verwendet. Die an diese Funktion übergebenen Argumente sind im Abschnitt [Angabe einer Funktion als Ersetzung](#angabe_einer_funktion_als_ersetzung) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Vorkommen des Musters durch die angegebene Ersetzung ersetzt werden.

## Beschreibung

Diese Methode verändert nicht den Stringwert, auf dem sie aufgerufen wird. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — zum Beispiel ist jede Erwähnung von "Aufnahmegruppen" in der untenstehenden Beschreibung tatsächlich eine Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung an den Anfang des Strings angefügt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regulärer Ausdruck mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Weitere Informationen darüber, wie Eigenschaften von regulären Ausdrücken (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Angabe eines Strings als Ersetzung

Der Ersetzungsstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                         |
| `$&`      | Fügt den zusammenpassenden Teilstring ein.                                                                  |
| `` $` ``  | Fügt den Teil des Strings ein, der dem zusammenpassenden Teilstring vorausgeht.                             |
| `$'`      | Fügt den Teil des Strings ein, der dem zusammenpassenden Teilstring folgt.                                  |
| `$n`      | Fügt die `n`te (`1`-indizierte) Aufnahmegruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Aufnahmegruppe ein, wobei `Name` der Gruppenname ist.                                     |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder die entsprechende Aufnahmegruppe nicht im Regex vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden, aber nicht übereinstimmend ist (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Angabe einer Funktion als Ersetzung

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem der Treffer gefunden wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersetzungsstring verwendet.

> [!NOTE]
> Die oben genannten speziellen Ersetzungsmuster gelten _nicht_ für Strings, die von der Ersetzungsfunktion zurückgegeben werden.

Die Funktion hat die folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente an die Funktion sind wie folgt:

- `match`
  - : Der übereinstimmende Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`te String, der von einer Aufnahmegruppe (einschließlich benannter Aufnahmegruppen) gefunden wurde, vorausgesetzt, das erste Argument von `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, etc. oben.) Wenn zum Beispiel das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+` und `p2` die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z. B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Offset des übereinstimmenden Teilstrings innerhalb des gesamten untersuchten Strings. Zum Beispiel, wenn der gesamte String `'abcd'` war und der übereinstimmende Teilstring `'bc'` war, dann ist dieses Argument `1`.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und dessen Werte die übereinstimmenden Teile sind (`undefined`, wenn nicht übereinstimmt). Nur vorhanden, wenn das `pattern` mindestens eine benannte Aufnahmegruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele Aufnahmegruppen es enthält.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/(\D*)(\d*)(\W*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jede vollständige Übereinstimmung aufgerufen, die ersetzt werden soll, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Definieren des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Flag für Groß- und Kleinschreibung.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe [den regulären Ausdruck Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und ignoreCase-Flags mit replace()

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globalen und ignore case-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` ermöglichen, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersetzungstext verwendet das Skript [Aufnahmegruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1` und `$2` Ersetzungsmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwendung einer Inline-Funktion, die die übereinstimmenden Zeichen modifiziert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt und ein Bindestrich wird direkt vor dem Übereinstimmungsort eingefügt. Wichtig dabei ist, dass zusätzliche Operationen am übereinstimmenden Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Snippet als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich vor der Rückgabe zu verketten.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Gegeben `styleHyphenFormat('borderTop')`, wird dies `‘border-top’` zurückgeben.

Da wir das _Ergebnis_ der Übereinstimmung weiter transformieren möchten, bevor die endgültige Ersetzung erfolgt, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung der Übereinstimmung vor der [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode. Hätten wir versucht, dies mit der Übereinstimmung ohne die Funktion zu tun, hätte der {{jsxref("String/toLowerCase", "toLowerCase()")}}-Aufruf keinen Effekt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zum selben `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ersetzen eines Fahrenheit-Grads durch sein Celsius-Äquivalent

Das folgende Beispiel ersetzt ein Fahrenheit-Grad durch sein Celsius-Äquivalent. Das Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn zum Beispiel die Eingabezahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist über seinen zweiten Parameter, `p1`, für die Funktion zugänglich. Die Funktion setzt die Anzahl der Celsius-Grade basierend auf der Anzahl der übertragenen Fahrenheit-Grade in einem String an die `f2c()`-Funktion. `f2c()` gibt dann den Celsius-Wert zurück. Diese Funktion ähnelt Perl's `s///e`-Flag.

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

Angenommen, wir möchten einen Ersetzer erstellen, der die Offsets zu jedem übereinstimmenden String hinzufügt. Da die Ersetzungsfunktion bereits den `offset`-Parameter erhält, wäre es trivial, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn er mit jedem Regex-Muster funktionieren soll. Der Ersetzer ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Aufnahmegruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, etc. in das Array aufnehmen. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise oder möglicherweise nicht übergeben wird, würde es auch erschweren, generisch zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das obenstehende `addOffset`-Beispiel funktioniert nicht, wenn das Regex eine benannte Gruppe enthält, weil in diesem Fall `args.at(-2)` der `string` statt des `offset` wäre.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie `Symbol.replace`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
