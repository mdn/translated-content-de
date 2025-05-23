---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Vorkommen eines `pattern` durch ein `replacement` ersetzt sind. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die bei jedem Treffer aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der Original-String bleibt unverändert.

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein – das typische Beispiel ist ein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht die `Symbol.replace`-Methode hat, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird er den durch `pattern` gefundenen Substring ersetzen. Eine Anzahl spezieller Ersetzungsmuster wird unterstützt; sehen Sie den Abschnitt [Angabe eines Strings als Ersetzung](#angabe_eines_strings_als_ersetzung) unten.
    - Wenn es eine Funktion ist, wird sie bei jedem Treffer aufgerufen und ihr Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Angabe einer Funktion als Ersetzung](#angabe_einer_funktion_als_ersetzung) beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Übereinstimmungen des Musters durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert – zum Beispiel wird jede Erwähnung von "capture groups" in der untenstehenden Beschreibung tatsächlich durch die Funktionalität von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung an den Anfang des Strings gestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein Regex mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehrmals ersetzt. Für weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Angabe eines Strings als Ersetzung

Der Ersetzungsstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                         |
| `$&`      | Fügt den übereinstimmenden Substring ein.                                                                   |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Substring vorausgeht.                              |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Substring folgt.                                   |
| `$n`      | Fügt die `n`-te (`1`-basierte) Übernahmegruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Erfassungsgruppe ein, wobei `Name` der Gruppenname ist.                                   |

`$n` und `$<Name>` stehen nur zur Verfügung, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder die entsprechende Übernahmegruppe im Regex nicht vorhanden ist, wird das Muster als literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Angabe einer Funktion als Ersetzung

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion nach dem Match aufgerufen. Das Ergebnis der Funktion (Rückgabewert) wird als Ersetzungsstring verwendet.

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
  - : Der übereinstimmende Substring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`-te String, der durch eine Capture-Gruppe (einschließlich benannter Übernahmegruppen) gefunden wurde, vorausgesetzt das erste Argument an `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, etc. oben.) Wenn zum Beispiel das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+`, und `p2` ist die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), ist die nicht übereinstimmende Alternative `undefined`.
- `offset`
  - : Der Offset des übereinstimmenden Substrings innerhalb des gesamten Strings, der untersucht wird. Zum Beispiel, wenn der gesamte String `'abcd'` war und der übereinstimmende Substring `'bc'`, dann wäre dieses Argument `1`.
- `string`
  - : Der gesamte String, der untersucht wird.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und dessen Werte die übereinstimmenden Teile sind (`undefined` wenn nicht übereinstimmt). Nur vorhanden, wenn das `pattern` mindestens eine benannte Übernahmegruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist und, falls ja, wie viele Capture-Gruppen es hat.

Das folgende Beispiel wird `newString` auf `'abc - 12345 - #$*%'` setzen:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/(\D*)(\d*)(\W*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jeden vollständigen Treffer, der ersetzt werden soll, aufgerufen, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Definieren des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Klein-/Großbuchstaben ignorierende Flag.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe den [Reguläre Ausdrücke Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der Global- und IgnoreCase-Flags mit replace()

Globale Ersetzung kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [Global- und IgnoreCase-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` erlauben, jedes Vorkommen von `'apples'` im String mit `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String austauschen

Das folgende Skript wechselt die Wörter im String. Für den Ersetzungstext verwendet das Skript [Capture-Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1` und `$2` Ersetzungsmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwenden einer Inline-Funktion, die die übereinstimmenden Zeichen modifiziert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird direkt vor dem Übereinstimmungsort eingefügt. Das Wichtige hier ist, dass zusätzliche Operationen am übereinstimmenden Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Fragment als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich zu konkatenierten, bevor sie zurückkehrt.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Gegeben `styleHyphenFormat('borderTop')`, gibt dies `'border-top'` zurück.

Da wir das _Ergebnis_ des Matches weiter transformieren wollen, bevor die endgültige Ersetzung vorgenommen wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung des Matches vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Wenn wir versucht hätten, dies mit dem Match ohne eine Funktion zu tun, würde die {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung haben.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Das liegt daran, dass `'$&'.toLowerCase()` zunächst als String-Literal ausgewertet würde (was zu demselben `'$&'` führt), bevor die Zeichen als Muster verwendet würden.

### Ersetzen eines Fahrenheit-Grads durch sein Celsius-Äquivalent

Das folgende Beispiel ersetzt einen Fahrenheit-Grad durch sein Äquivalent in Celsius. Der Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn zum Beispiel die Eingabezahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` prüft auf jede Zahl, die mit `F` endet. Die Zahl der Fahrenheit-Grade ist für die Funktion über ihren zweiten Parameter, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Zahl der Fahrenheit-Grade, die als String an die `f2c()` Funktion übergeben werden. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion approximiert das `s///e`-Flag von Perl.

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

### Erstellen eines allgemeinen Ersetzers

Angenommen, wir möchten einen Ersetzer erstellen, der die Offset-Daten an jeden übereinstimmenden String anhängt. Da die Ersetzerfunktion bereits den `offset`-Parameter erhält, wird es trivial, wenn der Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Jedoch wäre es schwierig, diesen Ersetzer zu verallgemeinern, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ – die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Capture-Gruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, etc. in das Array aufnehmen. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise oder möglicherweise nicht übergeben wird, würde es auch schwer machen, generell zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das `addOffset` Beispiel oben funktioniert nicht, wenn der Regex eine benannte Gruppe enthält, weil in diesem Fall `args.at(-2)` der `string` statt des `offset` wäre.

Stattdessen müssen Sie die letzten Argumente basierend auf dem Typ extrahieren, weil `groups` ein Objekt ist, während `string` ein String ist.

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
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
