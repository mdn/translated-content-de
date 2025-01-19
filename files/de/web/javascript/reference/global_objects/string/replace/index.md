---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 7d09807ed7594cf5c7b93afc1fa0424a26663b9b
---

{{JSRef}}

Die **`replace()`** Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Vorkommen eines `pattern` durch ein `replacement` ersetzt wurden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jedes Vorkommen aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht die `Symbol.replace`-Methode hat, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt es das Teilstück, das durch `pattern` gefunden wurde. Eine Anzahl spezieller Ersetzungs-Muster wird unterstützt; siehe den Abschnitt [Ein String als Ersetzung angeben](#ein_string_als_ersetzung_angeben) unten.
    - Wenn es eine Funktion ist, wird sie für jedes Vorkommen aufgerufen, und ihr Rückgabewert wird als Ersetzungstext verwendet. Die Argumente, die dieser Funktion übergeben werden, sind im Abschnitt [Eine Funktion als Ersetzung angeben](#eine_funktion_als_ersetzung_angeben) beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Vorkommen des patterns durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf die sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Pattern wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode codiert — beispielsweise sind alle Erwähnungen von "Capturing Groups" in der Beschreibung unten tatsächlich Funktionalitäten, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt werden.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung dem Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein Regexp mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehrfach ersetzt. Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie in [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Ein String als Ersetzung angeben

Der Ersetzungsstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Pattern   | Fügt ein                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                         |
| `$&`      | Fügt das gefundene Teilstück ein.                                                                           |
| `` $` ``  | Fügt den Streckenteil des Strings ein, der dem gefundenen Teilstück vorausgeht.                             |
| `$'`      | Fügt den Streckenteil des Strings ein, der dem gefundenen Teilstück folgt.                                  |
| `$n`      | Fügt die `n`-te (`1`-indexierte) Capturing Group ein, wobei `n` eine positive Ganzzahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Capturing Group ein, wobei `Name` der Gruppenname ist.                                    |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende Capturing Group im Regex nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht abgeglichen wird (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Eine Funktion als Ersetzung angeben

Sie können eine Funktion als zweiten Parameter spezifizieren. In diesem Fall wird die Funktion aufgerufen, nachdem das Vorkommen gefunden wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersetzungs-String verwendet.

> [!NOTE]
> Die oben genannten speziellen Ersetzungsmuster gelten _nicht_ für Strings, die von der Ersetzungsfunktion zurückgegeben werden.

Die Funktion hat folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Das gefundene Teilstück. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`-te String, der von einer Capturing Group gefunden wurde (einschließlich benannter Capturing Groups), vorausgesetzt das erste Argument für `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2` usw. oben.) Wenn beispielsweise das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` der Treffer für `\a+`, und `p2` ist der Treffer für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z. B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht abgeglichene Alternative `undefined` sein.
- `offset`
  - : Der Versatz des gefundenen Teilstücks innerhalb des gesamten untersuchten Strings. Zum Beispiel, wenn der gesamte String `'abcd'` ist und das gefundene Teilstück `'bc'`, dann wird dieses Argument `1` sein.
- `string`
  - : Der gesamte zu untersuchende String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und dessen Werte die gefundenen Teile (falls nicht gefunden, `undefined`) sind. Nur vorhanden, wenn `pattern` mindestens eine benannte Capturing Group enthält.

Die genaue Anzahl von Argumenten hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und wenn ja, wie viele Capturing Groups es hat.

Das folgende Beispiel wird `newString` auf `'abc - 12345 - #$*%'` setzen:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jedes vollständige Vorkommen aufgerufen, das ersetzt werden soll, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Den regulären Ausdruck in replace() definieren

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Ignorieren von Groß-/Kleinschreibung.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe [den regulären Ausdrucks-Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und ignoreCase-Flags mit replace()

Globale Ersetzungen können nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [Flags für global und ignore case](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` erlauben, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String austauschen

Das folgende Skript tauscht die Wörter im String aus. Für den Ersetzungstext verwendet das Skript [Capturing Groups](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die Ersetzungsmuster `$1` und `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwenden einer Inline-Funktion, die die gefundenen Zeichen ändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird direkt vor der Fundstelle eingefügt. Das Wichtige hier ist, dass zusätzliche Operationen am gefundenen Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das gefundene Stück als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich zu verketten, bevor sie es zurückgibt.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei Verwendung von `styleHyphenFormat('borderTop')` wird dies zu `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ des Treffers weiter transformieren möchten, bevor die endgültige Ersetzung vorgenommen wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung des Treffers vor der [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode. Hätten wir versucht, dies ohne eine Funktion mit dem Treffer zu machen, hätte {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung gehabt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zu demselben `'$&'` führt), bevor die Zeichen als Muster verwendet würden.

### Ersetzen eines Fahrenheit-Grades durch seinen Celsius-Äquivalent

Das folgende Beispiel ersetzt ein Fahrenheit-Grad durch sein entsprechendes Celsius-Grad. Das Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn die Eingabezahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist für die Funktion über ihren zweiten Parameter `p1` zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Anzahl der Fahrenheit-Grade, die in einem String an die `f2c()`-Funktion übergeben wird. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion nähert das Perl-Flag `s///e` an.

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

Angenommen, wir möchten einen Ersetzer erstellen, der die Offset-Daten an jeden gefundenen String anhängt. Da die Ersetzerfunktion bereits den Parameter `offset` erhält, wird es trivial sein, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Capturing Groups ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, usw. im Array sammeln. Die Tatsache, dass `groups` je nach Identität des Regex übergeben oder nicht übergeben werden könnte, würde es auch erschweren, generell zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das oben angegebene `addOffset`-Beispiel funktioniert nicht, wenn das Regex eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` der `string` anstelle des `offset` wäre.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung des modernen Verhaltens wie `Symbol.replace`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regulärer Ausdrucks-Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
