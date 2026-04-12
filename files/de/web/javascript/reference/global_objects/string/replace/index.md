---
title: String.prototype.replace()
short-title: replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: f3358a1485c53669466009ab561129bb7d65d8d2
---

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, in dem ein, mehrere oder alle Übereinstimmungen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der originale String bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.prototype.replace()")}}

```js interactive-example
const paragraph = "This dog's name is just Dog! Yes, that is the name.";

console.log(paragraph.replace("name", "nickname"));
// Expected output: "This dog's nickname is just Dog! Yes, that is the name."

console.log(paragraph.replace(/\bis\b/, "was"));
// Expected output: "This dog's name was just Dog! Yes, that is the name."

console.log(paragraph.replace(/\bis\b/g, "was"));
// Expected output: "This dog's name was just Dog! Yes, that was the name."
```

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht die `Symbol.replace`-Methode besitzt, wird zu einem String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es sich um einen String handelt, wird dieser den durch `pattern` übereinstimmenden Teilstring ersetzen. Es werden eine Reihe von speziellen Ersatzmustern unterstützt; siehe den Abschnitt [Einen String als Ersatz angeben](#einen_string_als_ersatz_angeben) unten.
    - Wenn es sich um eine Funktion handelt, wird diese für jede Übereinstimmung aufgerufen und ihr Rückgabewert wird als Ersatztext verwendet. Die dieser Funktion übergebenen Argumente sind im Abschnitt [Eine Funktion als Ersatz angeben](#eine_funktion_als_ersatz_angeben) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem eine, mehrere oder alle Übereinstimmungen des Musters durch den angegebenen Ersatz ersetzt werden.

## Beschreibung

Diese Methode verändert nicht den String-Wert, an dem sie aufgerufen wird. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und einen Ersatz durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall wird das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — zum Beispiel wird jede Erwähnung von "Erfassungsgruppen" in der unten stehenden Beschreibung tatsächlich durch die Funktionalität von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt.

Wenn das `pattern` ein leerer String ist, wird der Ersatz dem Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein RegExp mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Weitere Informationen darüber, wie regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Einen String als Ersatz angeben

Der Ersatzstring kann die folgenden speziellen Ersatzmuster enthalten:

| Muster    | Fügt ein                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                         |
| `$&`      | Fügt den übereinstimmenden Teilstring ein.                                                                  |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring vorausgeht.                             |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring folgt.                                  |
| `$n`      | Fügt die `n`te (1-indizierte) Erfassungsgruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Erfassungsgruppe ein, wobei `Name` der Gruppenname ist.                                   |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn `pattern` ein String ist, oder wenn die entsprechende Erfassungsgruppe im Regex nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Eine Funktion als Ersatz angeben

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem die Übereinstimmung durchgeführt wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersatzstring verwendet.

> [!NOTE]
> Die oben genannten speziellen Ersatzmuster gelten _nicht_ für Strings, die von der Ersetzer-Funktion zurückgegeben werden.

Die Funktion hat die folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Der übereinstimmende Teilstring. (Entspricht `"$&"` oben.)
- `p1`, `p2`, …, `pN`
  - : Der n-te String, der von einer Erfassungsgruppe (einschließlich benannter Erfassungsgruppen) gefunden wurde, vorausgesetzt, das erste Argument von `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `"$1"`, `"$2"`, usw. oben.) Wenn das `pattern` beispielsweise `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+`, und `p2` ist die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Offset des übereinstimmenden Teilstrings innerhalb des gesamten untersuchten Strings. Wenn der gesamte String beispielsweise `'abcd'` war und der übereinstimmende Teilstring `'bc'` war, dann wird dieses Argument `1` sein.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und dessen Werte die übereinstimmenden Teile sind (`undefined`, wenn nicht übereinstimmt). Nur vorhanden, wenn das `pattern` mindestens eine benannte Erfassungsgruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, wenn ja, wie viele Erfassungsgruppen es hat.

Im folgenden Beispiel wird `newString` auf `'abc - 12345 - #$*%'` gesetzt:

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

### Den regulären Ausdruck in replace() definieren

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Flag für Groß-/Kleinschreibung ignorieren.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe [den Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und ignoreCase-Flags mit replace()

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [Flags für global und Groß-/Kleinschreibung ignorieren](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` ermöglichen, jedes Vorkommen von `'apples'` im String mit `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String austauschen

Das folgende Skript tauscht die Wörter im String aus. Für den Ersatztext verwendet das Skript [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die Ersatzmuster `$1` und `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwenden einer Inline-Funktion, die die übereinstimmenden Zeichen ändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt und ein Bindestrich wird direkt vor der Übereinstimmungsposition eingefügt. Das Wichtige hier ist, dass zusätzliche Operationen am übereinstimmenden Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzer-Funktion akzeptiert das übereinstimmende Snippet als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich zu verketten, bevor es zurückgegeben wird.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Gibt `styleHyphenFormat('borderTop')` `'border-top'` zurück.

Da wir das Ergebnis des Abgleichs weiter transformieren möchten, bevor die endgültige Substitution vorgenommen wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung des Übereinstimmens vor der [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode. Hätten wir versucht, dies ohne eine Funktion nur mit der Übereinstimmung zu tun, hätte die {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Das liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zu demselben `'$&'` führt), bevor die Zeichen als Muster verwendet würden.

### Ersetzen eines Fahrenheit-Grads durch seinen Celsius-Äquivalent

Das folgende Beispiel ersetzt einen Fahrenheit-Grad durch seinen äquivalenten Celsius-Grad. Der Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn die Eingabezahl beispielsweise `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft auf eine Zahl, die mit `F` endet. Die Zahl der Fahrenheit-Grade ist für die Funktion durch ihren zweiten Parameter, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Zahl der Fahrenheit-Grade, die als String an die `f2c()`-Funktion übergeben wurden. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion nähert sich Perl's `s///e`-Flag an.

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

### Eine generische Ersetzerfunktion erstellen

Angenommen, wir möchten eine Ersetzerfunktion erstellen, die die Offset-Daten an jeden übereinstimmenden String anhängt. Da die Ersetzerfunktion bereits den `offset`-Parameter erhält, wird es trivial, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Diese Ersetzerfunktion wäre jedoch schwer zu verallgemeinern, wenn wir möchten, dass sie mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ — die Anzahl der empfangenen Argumente hängt von der Anzahl der vorhandenen Erfassungsgruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, etc. in das Array aufnehmen. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise oder möglicherweise nicht übergeben werden, würde es ebenfalls schwierig machen, generell zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das `addOffset`-Beispiel oben funktioniert nicht, wenn das Regex eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` der `string` statt des `offset` wäre.

Stattdessen müssen Sie die letzten Argumente anhand des Typs extrahieren, da `groups` ein Objekt ist, während `string` ein String ist.

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
- Leitfaden zu [Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
