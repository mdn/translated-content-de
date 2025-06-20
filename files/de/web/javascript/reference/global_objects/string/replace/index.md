---
title: String.prototype.replace()
short-title: replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Übereinstimmungen eines `pattern` durch einen `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und der `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn das `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht hat, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er die durch `pattern` übereinstimmende Teilzeichenkette. Eine Anzahl spezieller Ersatzmuster wird unterstützt; siehe den Abschnitt [Einen String als Ersatz angeben](#einen_string_als_ersatz_angeben) unten.
    - Wenn es eine Funktion ist, wird sie für jede Übereinstimmung aufgerufen und ihr Rückgabewert wird als Ersetzungstext verwendet. Die dieser Funktion bereitgestellten Argumente sind im Abschnitt [Eine Funktion als Ersatz angeben](#eine_funktion_als_ersatz_angeben) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Übereinstimmungen des Musters durch den angegebenen Ersatz ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder nutzen Sie [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Ziel-String und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird der Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode codiert — beispielsweise ist jede Erwähnung von "Capturing-Gruppen" in der untenstehenden Beschreibung tatsächlich eine Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird der Ersatz an den Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regulärer Ausdruck mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Für weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Einen String als Ersatz angeben

Der Ersetzungsstring kann die folgenden speziellen Ersatzmuster enthalten:

| Muster    | Fügt ein                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                      |
| `$&`      | Fügt die übereinstimmende Teilzeichenkette ein.                                                          |
| `` $` ``  | Fügt den Teil des Strings ein, der der übereinstimmenden Teilzeichenkette vorausgeht.                    |
| `$'`      | Fügt den Teil des Strings ein, der der übereinstimmenden Teilzeichenkette folgt.                         |
| `$n`      | Fügt die `n`-te (`1`-indizierte) Capturing-Gruppe ein, wobei `n` eine positive Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Capturing-Gruppe ein, wobei `Name` der Gruppenname ist.                                |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende Capturing-Gruppe im Regex nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden, aber nicht übereinstimmend ist (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

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
> Die oben erwähnten speziellen Ersatzmuster gelten _nicht_ für Strings, die von der Ersatzfunktion zurückgegeben werden.

Die Funktion hat die folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Die übereinstimmende Teilzeichenkette. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Die `n`-te Zeichenkette, die durch eine Capturing-Gruppe (einschließlich benannter Capturing-Gruppen) gefunden wurde, vorausgesetzt, das erste Argument für `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2` usw. oben.) Beispielsweise ist bei `pattern` `/(\a+)(\b+)/` `p1` das Übereinstimmungsergebnis für `\a+`, und `p2` für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), ist die nicht übereinstimmende Alternative `undefined`.
- `offset`
  - : Der Versatz der übereinstimmenden Teilzeichenkette innerhalb des gesamten zu untersuchenden Strings. Beispiel: Wenn der gesamte String `'abcd'` war und die übereinstimmende Teilzeichenkette `'bc'` war, ist dieses Argument `1`.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und deren Werte die übereinstimmenden Abschnitte sind (`undefined`, wenn nicht übereinstimmend). Nur vorhanden, wenn das `pattern` mindestens eine benannte Capturing-Gruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele Capturing-Gruppen es hat.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/(\D*)(\d*)(\W*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jedes voll zu ersetzende Match aufgerufen, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Den regulären Ausdruck in replace() definieren

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und schließt das Flag "ignore case" ein.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Weitere Erklärungen zu regulären Ausdrücken finden Sie im [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

### Verwenden der globalen und ignoreCase Flags mit replace()

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel beinhaltet der reguläre Ausdruck die [globalen und „ignore case“-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), wodurch `replace()` jedes Vorkommen von `'apples'` im String durch `'oranges'` ersetzt.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersetzungstext verwendet das Skript [Capturing-Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1`- und `$2`-Ersatzmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Eine Inline-Funktion verwenden, die die übereinstimmenden Zeichen ändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt und ein Bindestrich wird direkt vor der Übereinstimmungsstelle eingefügt. Wichtig ist hier, dass zusätzliche Operationen am übereinstimmenden Element durchgeführt werden müssen, bevor es als Ersatz zurückgegeben wird.

Die Ersatzfunktion akzeptiert das übereinstimmende Schnipsel als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich zu verketten, bevor sie zurückgegeben wird.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei `styleHyphenFormat('borderTop')` ergibt dies `'border-top'`.

Da wir das _Ergebnis_ des Matches weiter transformieren wollen, bevor die endgültige Ersetzung erfolgt, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung des Matches vor der [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode. Hätten wir versucht, dies mit dem Match ohne eine Funktion zu tun, würde {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung haben.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet werden würde (was zu demselben `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ein Fahrenheit-Grad durch sein Celsius-Äquivalent ersetzen

Das folgende Beispiel ersetzt einen Fahrenheit-Grad durch sein entsprechendes Celsius-Äquivalent. Der Fahrenheit-Grad sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Beispielsweise, wenn die Eingabezahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` prüft auf jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist in der Funktion über ihren zweiten Parameter, `p1`, zugänglich. Die Funktion legt die Celsius-Zahl basierend auf der Anzahl der in einem String an die `f2c()`-Funktion übergebenen Fahrenheit-Grade fest. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion nähert sich dem `s///e`-Flag von Perl an.

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

### Einen generischen Ersetzer machen

Angenommen, wir möchten einen Ersetzer erstellen, der die Offsetdaten an jeden übereinstimmenden String anfügt. Da die Ersetzerfunktion bereits das `offset`-Parameter erhält, wird es trivial sein, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Capturing-Gruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string` usw. in das Array sammeln. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise übergeben wird oder nicht, würde es ebenfalls schwierig machen, generell zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das `addOffset`-Beispiel oben funktioniert nicht, wenn das Regex ein benanntes Muster enthält, da in diesem Fall `args.at(-2)` der `string` statt dem `offset` wäre.

Stattdessen müssen Sie die letzten Argumente basierend auf ihrem Typ extrahieren, da `groups` ein Objekt ist, während `string` ein String ist.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Fixes und Implementierung moderner Verhaltensweisen wie `Symbol.replace`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
