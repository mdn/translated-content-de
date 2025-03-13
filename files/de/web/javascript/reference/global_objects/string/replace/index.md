---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem ein, einige oder alle Übereinstimmungen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der Original-String bleibt unverändert.

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
    - Wenn es ein String ist, ersetzt er das durch `pattern` gefundene Teilstring. Eine Reihe spezieller Ersetzungsmuster wird unterstützt; siehe den Abschnitt [Angeben eines Strings als Ersetzung](#angeben_eines_strings_als_ersetzung) unten.
    - Wenn es eine Funktion ist, wird diese für jede Übereinstimmung aufgerufen und ihr Rückgabewert wird als Ersetzungstext verwendet. Die der Funktion übergebenen Argumente sind im Abschnitt [Angeben einer Funktion als Ersetzung](#angeben_einer_funktion_als_ersetzung) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein, einige oder alle Übereinstimmungen des Musters durch die angegebene Ersetzung ersetzt werden.

## Beschreibung

Diese Methode verändert nicht den String, auf dem sie aufgerufen wird. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Ziel-String und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode codiert — zum Beispiel ist jede Erwähnung von "_capture groups_" in der nachfolgenden Beschreibung tatsächlich Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung an den Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein Regex mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Angeben eines Strings als Ersetzung

Der Ersetzungs-String kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                  |
| `$&`      | Fügt das übereinstimmende Teilstring ein.                                                            |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring vorausgeht.                      |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring folgt.                           |
| `$n`      | Fügt die `n`-te (`1`-indizierte) Gruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Gruppe ein, wobei `Name` der Gruppenname ist.                                      |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder die entsprechende Gruppe im Regex nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber nicht übereinstimmt (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Angeben einer Funktion als Ersetzung

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem die Übereinstimmung durchgeführt wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersetzungsstring verwendet.

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
  - : Das übereinstimmende Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Der `n`-te String, der durch eine Gruppe erfasst wurde (einschließlich benannter Gruppen), vorausgesetzt, das erste Argument zu `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, usw. oben.) Zum Beispiel, wenn das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+`, und `p2` ist die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Offset des übereinstimmenden Teilstrings innerhalb des gesamten untersuchten Strings. Zum Beispiel, wenn der ganze String `'abcd'` ist und das übereinstimmende Teilstring `'bc'`, dann ist dieses Argument `1`.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und deren Werte die übereinstimmenden Teile (falls nicht übereinstimmend ist es `undefined`). Nur vorhanden, wenn das `pattern` mindestens eine benannte Gruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele Erfassungsgruppen es hat.

Das folgende Beispiel wird `newString` auf `'abc - 12345 - #$*%'` setzen:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach für jede vollständige Übereinstimmung aufgerufen, die ersetzt werden soll, wenn der reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Definition des regulären Ausdrucks in replace()

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Flag für Groß-/Kleinschreibung ignorieren.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Dies protokolliert `'Twas the night before Christmas...'`.

> [!NOTE]
> Siehe den [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwenden der globalen und Groß/Kleinschreibung ignorieren Flags mit replace()

Eine globale Ersetzung kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globale und Groß-/Kleinschreibung ignorieren Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die `replace()` erlauben, jedes Vorkommen von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersetzungstext verwendet das Skript [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1` und `$2` Ersetzungsmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwenden einer Inline-Funktion, die die übereinstimmenden Zeichen ändert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben konvertiert, und ein Bindestrich wird genau vor der Übereinstimmungsstelle eingefügt. Das Wichtigste hierbei ist, dass zusätzliche Operationen am übereinstimmenden Element erforderlich sind, bevor es als Ersetzung zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Fragment als ihren Parameter und verwendet es, um den Fall zu transformieren und den Bindestrich anzuhängen, bevor es zurückgegeben wird.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei Eingabe von `styleHyphenFormat('borderTop')`, gibt dies zurück `'border-top'`.

Da wir das Ergebnis der Übereinstimmung weiter transformieren möchten, bevor die endgültige Ersetzung vorgenommen wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung der Übereinstimmung vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Hätten wir versucht, dies mit der Übereinstimmung ohne eine Funktion zu tun, hätte {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung gehabt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies ist, weil `'$&'.toLowerCase()` zuerst als Literalzeichenfolge ausgewertet werden würde (wobei das gleiche `'$&'` resultiert), bevor die Zeichen als Muster verwendet werden.

### Ersetzen eines Fahrenheit-Grades durch seinen Celsius-Äquivalent

Das folgende Beispiel ersetzt ein Fahrenheit-Grad durch seinen Celsius-Äquivalent. Die Fahrenheit-Grade sollten eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Zum Beispiel, wenn die Eingabennummer `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist für die Funktion über ihren zweiten Parameter, `p1`, zugänglich. Die Funktion setzt die Celsius-Nummer basierend auf der Anzahl der übergebenen Fahrenheit-Grade in einer Zeichenfolge an die `f2c()`-Funktion. `f2c()` gibt dann die Celsius-Nummer zurück. Diese Funktion approximiert Perls `s///e`-Flag.

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

Angenommen, wir möchten einen Ersetzer erstellen, der die Offset-Daten an jeden übereinstimmenden String anhängt. Da die Ersetzer-Funktion bereits den `Offset`-Parameter erhält, ist es trivial, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadic_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der enthaltenen Erfassungsgruppen ab. Wir können [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, etc. in das Array aufnehmen. Die Tatsache, dass `groups` möglicherweise oder möglicherweise nicht übergeben wird, je nach Identität des Regex, würde es auch erschweren, zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das `addOffset`-Beispiel oben funktioniert nicht, wenn das Regex eine benannte Gruppe enthält, weil in diesem Fall `args.at(-2)` die `string` statt des `offset` wäre.

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

- [Polyfill von `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie `Symbol.replace` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden für Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
