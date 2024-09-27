---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`replace()`** von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Übereinstimmungen eines `pattern` durch ein `replacement` ersetzt wurden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` ein String ist, wird nur die erste Vorkommen ersetzt. Der Original-String bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — ein typisches Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die Methode `Symbol.replace` nicht hat, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird es den durch `pattern` übereinstimmenden Teilstring ersetzen. Eine Reihe von speziellen Ersatzmustern wird unterstützt; siehe den Abschnitt [Einen String als Ersatz angeben](#einen_string_als_ersatz_angeben) unten.
    - Wenn es eine Funktion ist, wird sie für jede Übereinstimmung aufgerufen und ihr Rückgabewert wird als Ersatztext verwendet. Die der Funktion bereitgestellten Argumente sind im Abschnitt [Eine Funktion als Ersatz angeben](#eine_funktion_als_ersatz_angeben) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Übereinstimmungen des Musters durch das angegebene Ersatzmuster ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag, oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die Methode `[Symbol.replace]()` kodiert — zum Beispiel jede Erwähnung von "erfassenden Gruppen" in der nachstehenden Beschreibung ist tatsächlich eine Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung am Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein Regexp mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Für weitere Informationen darüber, wie Regexp-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Einen String als Ersatz angeben

Der Ersatzstring kann die folgenden speziellen Ersatzmuster enthalten:

| Muster    | Fügt ein                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                            |
| `$&`      | Fügt den übereinstimmenden Teilstring ein.                                                                     |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring vorausgeht.                                |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring folgt.                                     |
| `$n`      | Fügt die `n`-te (`1`-indiziert) erfassende Gruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte erfassende Gruppe ein, wobei `Name` der Gruppenname ist.                                     |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende erfassende Gruppe im Regexp nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Eine Funktion als Ersatz angeben

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem die Übereinstimmung vorgenommen wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersatzstring verwendet.

> [!NOTE]
> Die oben erwähnten speziellen Ersatzmuster gelten _nicht_ für Strings, die von der Ersetzungsfunktion zurückgegeben werden.

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
  - : Der `n`-te String, der von einer Erfassungsgruppe gefunden wurde (einschließlich benannter erfassender Gruppen), vorausgesetzt, das erste Argument zu `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, usw. oben.) Zum Beispiel, wenn das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+` und `p2` die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Versatz des übereinstimmenden Teilstrings innerhalb des gesamten zu untersuchenden Strings. Zum Beispiel, wenn der gesamte String `'abcd'` war und der übereinstimmende Teilstring `'bc'`, dann ist dieses Argument `1`.
- `string`
  - : Der gesamte zu untersuchende String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen und deren Werte die übereinstimmenden Teile (`undefined` wenn nicht übereingestimmt) sind. Nur vorhanden, wenn das `pattern` mindestens eine benannte erfassende Gruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, wenn ja, wie viele Erfassungsgruppen es hat.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach aufgerufen, um jede vollständige Übereinstimmung zu ersetzen, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Definieren des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und umfasst das ignorierte Fall-Flag.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Dies gibt `'Twas the night before Christmas...'` aus.

> [!NOTE]
> Siehe [den Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und ignoreCase-Flags mit replace()

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globalen und ignore case-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` erlauben, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies gibt `'oranges are round, and oranges are juicy'` aus.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersatztext verwendet das Skript [erfassende Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die Ersatzmuster `$1` und `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies gibt `'Cruz, Maria'` aus.

### Verwenden einer Inline-Funktion, die die übereinstimmenden Zeichen verändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird direkt vor dem Übereinstimmungsort eingefügt. Das Wichtige hier ist, dass zusätzliche Operationen auf dem übereinstimmenden Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Segment als ihren Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich vor der Rückgabe zu verketten.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Angenommen, `styleHyphenFormat('borderTop')`, gibt dies `'border-top'` zurück.

Weil wir das _Ergebnis_ der Übereinstimmung weiter transformieren wollen, bevor die endgültige Substitution stattfindet, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung der Übereinstimmung vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Wenn wir versucht hätten, dies ohne eine Funktion zu tun, hätte die {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung.

```js example-bad
// Won't work
const newString = propertyName.replace(
  /[A-Z]/g,
  "-" + "![](9-b6feccbc.md)".toLowerCase(),
);
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zu demselben `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ersetzen eines Fahrenheit-Werts durch sein Celsius-Äquivalent

Im folgenden Beispiel wird ein Fahrenheit-Wert durch seinen Celsius-Äquivalent ersetzt. Der Fahrenheit-Wert sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Zum Beispiel, wenn die Eingabezahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist für die Funktion durch ihren zweiten Parameter, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Anzahl der Fahrenheit-Grade, die als String an die Funktion `f2c()` übergeben wird. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion approximiert Perls `s///e`-Flag.

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

### Einen generischen Ersetzer erstellen

Angenommen, wir möchten einen Ersetzer erstellen, der die Offset-Daten an jeden übereinstimmenden String anhängt. Da die Ersetzungsfunktion den Parameter `offset` bereits erhält, wird dies trivial sein, wenn das Regexp statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn wir ihn mit jedem regulären Ausdrucksmuster arbeiten lassen wollen. Der Ersetzer ist _variadisch_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Erfassungsgruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, usw. in das Array sammeln. Die Tatsache, dass `groups` möglicherweise übertragen wird oder nicht, je nach der Identität des Regexp, würde es auch schwierig machen, generisch zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das obige Beispiel `addOffset` funktioniert nicht, wenn das Regexp eine benannte Gruppe enthält, denn in diesem Fall wäre `args.at(-2)` der `string` statt des `offset`.

Stattdessen müssen Sie die letzten Parameter basierend auf dem Typ extrahieren, weil `groups` ein Objekt ist, während `string` ein String ist.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung des modernen Verhaltens wie `Symbol.replace`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
