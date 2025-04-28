---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Übereinstimmungen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht besitzt, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird es das Teilstring ersetzen, das vom `pattern` gefunden wurde. Eine Reihe spezieller Ersatzmuster wird unterstützt; siehe den Abschnitt [Spezifizieren eines Strings als Ersatz](#spezifizieren_eines_strings_als_ersatz) unten.
    - Wenn es eine Funktion ist, wird sie für jedes Vorkommen aufgerufen und ihr Rückgabewert wird als Ersatztext verwendet. Die der Funktion übergebenen Argumente werden im Abschnitt [Spezifizieren einer Funktion als Ersatz](#spezifizieren_einer_funktion_als_ersatz) unten beschrieben.

### Rückgabewert

Ein neuer String, in dem ein, einige oder alle Übereinstimmungen des Musters durch den angegebenen Ersatz ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf den sie angewendet wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Ziel-String und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — zum Beispiel ist jede Erwähnung von "Capturing Groups" in der untenstehenden Beschreibung tatsächlich eine Funktionalität, die durch [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird der Ersatz an den Anfang des Strings angefügt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regexp mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Weitere Informationen dazu, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Spezifizieren eines Strings als Ersatz

Der Ersatzstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| `$$`      | Fügt ein `"$"` ein.                                                                                          |
| `$&`      | Fügt das gefundene Teilstring ein.                                                                           |
| `` $` ``  | Fügt den Teil des Strings ein, der dem gefundenen Teilstring vorausgeht.                                     |
| `$'`      | Fügt den Teil des Strings ein, der dem gefundenen Teilstring folgt.                                          |
| `$n`      | Fügt die `n`te (`1`-indizierte) Capturing Group ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Capturing Group ein, wobei `Name` der Gruppenname ist.                                     |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende Capturing Group nicht im Regex vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Spezifizieren einer Funktion als Ersatz

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem der Abgleich erfolgt ist. Das Ergebnis der Funktion (Rückgabewert) wird als Ersatzstring verwendet.

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
  - : Das gefundene Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`te String, der von einer Capturing Group (einschließlich benannter Capturing Groups) gefunden wurde, sofern das erste Argument von `replace()` ein {{jsxref("RegExp")}}-Objekt ist. (Entspricht `$1`, `$2`, usw. oben.) Wenn zum Beispiel das Muster `/(\a+)(\b+)/` ist, dann ist `p1` der Match für `\a+` und `p2` der Match für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Versatz des gefundenen Teilstrings innerhalb des gesamten Strings, der untersucht wird. Zum Beispiel, wenn der gesamte String `'abcd'` war und das gefundene Teilstring `'bc'` war, dann wird dieses Argument `1` sein.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen und dessen Werte die gefundenen Teile (`undefined` bei nicht gefundenem) sind. Nur vorhanden, wenn das `pattern` mindestens eine benannte Capturing Group enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele Capturing Groups es hat.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jedes vollständige Übereinstimmung aufgerufen, die ersetzt werden soll, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Den regulären Ausdruck in replace() definieren

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Ignore-Case-Flag.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies gibt `'Twas the night before Christmas...'` aus.

> [!NOTE]
> Weitere Erklärungen zu regulären Ausdrücken finden Sie im [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

### Verwenden des globalen und IgnoreCase-Flags mit replace()

Ein globales Ersetzen kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globalen und Ignore-Case-Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` ermöglichen, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies gibt `'oranges are round, and oranges are juicy'` aus.

### Wörter in einem String austauschen

Das folgende Skript tauscht die Wörter im String aus. Für den Ersetzungstext verwendet das Skript [Capturing Groups](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die Ersetzungsmuster `$1` und `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies gibt `'Cruz, Maria'` aus.

### Verwenden einer Inline-Funktion, die die gefundenen Zeichen ändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird direkt vor der Fundstelle eingefügt. Das Wichtige hier ist, dass zusätzliche Operationen auf das gefundene Element erforderlich sind, bevor es als Ersatz zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das gefundene Snippet als Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich vor der Rückgabe zu verketten.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Gegeben `styleHyphenFormat('borderTop')`, gibt dies `'border-top'` zurück.

Da wir das _Ergebnis_ der Übereinstimmung weiter transformieren möchten, bevor der endgültige Ersatz vorgenommen wird, müssen wir eine Funktion verwenden. Dies zwingt die Auswertung der Übereinstimmungen vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Wenn wir versucht hätten, dies ohne Funktion zu tun, hätte die {{jsxref("String/toLowerCase", "toLowerCase()")}} keinen Effekt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zuerst als String-Literal ausgewertet würde (was zu derselben `'$&'` führt), bevor die Zeichen als Muster verwendet werden.

### Ersetzen einer Fahrenheit-Gradzahl durch ihr Celsius-Äquivalent

Das folgende Beispiel ersetzt eine Fahrenheit-Gradzahl durch ihr entsprechendes Celsius-Äquivalent. Die Fahrenheit-Gradzahl sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn die Eingabenummer z.B. `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Nummer `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grad ist über den zweiten Parameter der Funktion, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf die Anzahl der in das `f2c()`-Array eingegebenen Fahrenheit-Grad. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion nähert sich Perl's `s///e`-Flag an.

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

Angenommen, wir möchten einen Ersetzer erstellen, der die Versatzdaten an jeden gefundenen String anhängt. Da die Ersetzerfunktion bereits den Parameter `offset` erhält, wird es trivial sein, wenn der Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu generalisieren, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Capturing Groups ab. Wir können [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string` usw. in das Array aufnehmen. Die Tatsache, dass `groups` je nach Identität des Regex übergeben werden kann oder nicht, würde es auch erschweren, generisch zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das obige `addOffset`-Beispiel funktioniert nicht, wenn der Regex eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` der `string` anstelle des `offset` wäre.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung modernen Verhaltens wie `Symbol.replace`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
