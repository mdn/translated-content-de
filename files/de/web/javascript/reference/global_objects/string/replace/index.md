---
title: String.prototype.replace()
short-title: replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`replace()`** von {{jsxref("String")}}-Werten gibt einen neuen String zurück, in dem eine, mehrere oder alle Übereinstimmungen mit einem `pattern` durch ein `replacement` ersetzt wurden. `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein. `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String bleibt unverändert.

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein – ein typisches Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert ohne `Symbol.replace`-Methode wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, ersetzt er den Teilstring, der mit `pattern` übereinstimmt. Es werden mehrere spezielle Ersetzungsmuster unterstützt; siehe den Abschnitt [Einen String als Ersetzung angeben](#einen_string_als_ersetzung_angeben) weiter unten.
    - Wenn es eine Funktion ist, wird sie für jede Übereinstimmung aufgerufen. Ihr Rückgabewert wird als Ersetzungstext verwendet. Die an diese Funktion übergebenen Argumente werden im Abschnitt [Eine Funktion als Ersetzung angeben](#eine_funktion_als_ersetzung_angeben) weiter unten beschrieben.

### Rückgabewert

Ein neuer String, in dem eine, mehrere oder alle Übereinstimmungen mit dem Muster durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem Flag `g` oder stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumenten aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall wird das Verhalten von `replace()` vollständig durch die Methode `[Symbol.replace]()` bestimmt – beispielsweise wird jede unten beschriebene Funktionalität von „Capturing Groups“ tatsächlich durch [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt.

Wenn `pattern` ein leerer String ist, wird die Ersetzung dem Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regulärer Ausdruck mit dem Flag `g` ist der einzige Fall, in dem `replace()` mehr als eine Ersetzung vornimmt. Weitere Informationen dazu, wie Eigenschaften regulärer Ausdrücke (insbesondere das Flag [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)) mit `replace()` zusammenwirken, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Einen String als Ersetzung angeben

Der Ersetzungsstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `$$`      | Ein `"$"`.                                                                                           |
| `$&`      | Den übereinstimmenden Teilstring.                                                                    |
| `` $` ``  | Den Teil des Strings, der dem übereinstimmenden Teilstring vorausgeht.                               |
| `$'`      | Den Teil des Strings, der auf den übereinstimmenden Teilstring folgt.                                |
| `$n`      | Die `n`-te (`1`-indizierte) Capturing Group, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Die benannte Capturing Group, wobei `Name` der Gruppenname ist.                                      |

`$n` und `$<Name>` sind nur verfügbar, wenn das Argument `pattern` ein {{jsxref("RegExp")}}-Objekt ist. Wenn `pattern` ein String ist oder die entsprechende Capturing Group im regulären Ausdruck nicht vorhanden ist, wird das Muster als Literal ersetzt. Wenn die Gruppe vorhanden ist, aber keine Übereinstimmung aufweist (weil sie Teil einer Alternative ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Eine Funktion als Ersetzung angeben

Sie können als zweiten Parameter eine Funktion angeben. In diesem Fall wird die Funktion aufgerufen, nachdem die Übereinstimmung ermittelt wurde. Das Ergebnis der Funktion (ihr Rückgabewert) wird als Ersetzungsstring verwendet.

> [!NOTE]
> Die oben genannten speziellen Ersetzungsmuster gelten _nicht_ für Strings, die von der Ersetzungsfunktion zurückgegeben werden.

Die Funktion hat die folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind:

- `match`
  - : Der übereinstimmende Teilstring. (Entspricht dem oben genannten `$&`.)
- `p1`, `p2`, …, `pN`
  - : Der `n`-te durch eine Capturing Group gefundene String (einschließlich benannter Capturing Groups), sofern das erste Argument von `replace()` ein {{jsxref("RegExp")}}-Objekt ist. (Entspricht den oben genannten `$1`, `$2` usw.) Wenn `pattern` beispielsweise `/(\a+)(\b+)/` ist, enthält `p1` die Übereinstimmung für `\a+` und `p2` die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Alternative ist (z. B. `"abc".replace(/(a)|(b)/, replacer)`), ist die nicht übereinstimmende Alternative `undefined`.
- `offset`
  - : Die Position des übereinstimmenden Teilstrings innerhalb des gesamten untersuchten Strings. Wenn der gesamte String beispielsweise `'abcd'` und der übereinstimmende Teilstring `'bc'` ist, hat dieses Argument den Wert `1`.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen und dessen Werte die übereinstimmenden Teile sind (`undefined`, wenn keine Übereinstimmung vorliegt). Nur vorhanden, wenn `pattern` mindestens eine benannte Capturing Group enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist – und, falls ja, wie viele Capturing Groups es enthält.

Im folgenden Beispiel wird `newString` auf `'abc - 12345 - #$*%'` gesetzt:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/(\D*)(\d*)(\W*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Wenn der reguläre Ausdruck im ersten Parameter global ist, wird die Funktion für jede zu ersetzende vollständige Übereinstimmung aufgerufen.

## Beispiele

### Den regulären Ausdruck in replace() definieren

Im folgenden Beispiel wird der reguläre Ausdruck in `replace()` definiert und enthält das Flag zum Ignorieren der Groß- und Kleinschreibung.

```js
const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...
```

Dies gibt `'Twas the night before Christmas...'` aus.

> [!NOTE]
> Weitere Erläuterungen zu regulären Ausdrücken finden Sie im [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

### Die Flags global und ignoreCase mit replace() verwenden

Eine globale Ersetzung ist nur mit einem regulären Ausdruck möglich. Im folgenden Beispiel enthält der reguläre Ausdruck die [Flags für globale Suche und zum Ignorieren der Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags). Dadurch kann `replace()` jedes Vorkommen von `'apples'` im String durch `'oranges'` ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newStr = str.replace(re, "oranges");
console.log(newStr); // oranges are round, and oranges are juicy.
```

Dies gibt `'oranges are round, and oranges are juicy'` aus.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersetzungstext verwendet das Skript [Capturing Groups](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die Ersetzungsmuster `$1` und `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
```

Dies gibt `'Cruz, Maria'` aus.

### Eine Inline-Funktion verwenden, die die übereinstimmenden Zeichen verändert

In diesem Beispiel werden alle Großbuchstaben im String in Kleinbuchstaben umgewandelt und unmittelbar vor der jeweiligen Übereinstimmung wird ein Bindestrich eingefügt. Entscheidend ist dabei, dass das übereinstimmende Element weiterverarbeitet werden muss, bevor es als Ersetzung zurückgegeben wird.

Die Ersetzungsfunktion nimmt den übereinstimmenden Ausschnitt als Parameter entgegen. Sie verwendet ihn, um die Groß- und Kleinschreibung zu ändern und den Bindestrich voranzustellen, bevor sie das Ergebnis zurückgibt.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Für `styleHyphenFormat('borderTop')` wird `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ der Übereinstimmung vor der endgültigen Ersetzung weiterverarbeiten möchten, müssen wir eine Funktion verwenden. So wird die Übereinstimmung vor dem Aufruf der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) ausgewertet. Wenn wir versucht hätten, dies ohne Funktion mit der Übereinstimmung zu tun, hätte {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Der Grund dafür ist, dass `'$&'.toLowerCase()` zunächst als String-Literal ausgewertet würde (mit demselben `'$&'` als Ergebnis), bevor die Zeichen als Muster verwendet werden.

### Einen Fahrenheit-Temperaturwert durch sein Celsius-Äquivalent ersetzen

Das folgende Beispiel ersetzt einen Fahrenheit-Temperaturwert durch den entsprechenden Celsius-Temperaturwert. Der Fahrenheit-Wert muss eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl mit der Endung `"C"` zurück. Wenn die Eingabezahl beispielsweise `"212F"` ist, gibt die Funktion `"100C"` zurück. Ist die Zahl `"0F"`, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` prüft auf eine beliebige Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist für die Funktion über ihren zweiten Parameter `p1` zugänglich. Die Funktion berechnet die Celsius-Zahl anhand der Fahrenheit-Gradzahl, die der Funktion `f2c()` als String übergeben wird. `f2c()` gibt anschließend die Celsius-Zahl zurück. Diese Funktion ahmt das Flag `s///e` von Perl nach.

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

### Eine generische Ersetzungsfunktion erstellen

Angenommen, wir möchten eine Ersetzungsfunktion erstellen, die an jeden übereinstimmenden String die Positionsangabe anhängt. Da die Ersetzungsfunktion den Parameter `offset` bereits erhält, ist dies einfach, wenn der reguläre Ausdruck im Voraus bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Diese Ersetzungsfunktion lässt sich jedoch nur schwer verallgemeinern, wenn sie mit beliebigen regulären Ausdrücken funktionieren soll. Die Ersetzungsfunktion ist _variadisch_ – die Anzahl ihrer Argumente hängt von der Anzahl der vorhandenen Capturing Groups ab. Wir können [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, doch damit würden auch `offset`, `string` usw. im Array erfasst. Da `groups` je nach regulärem Ausdruck übergeben werden kann oder auch nicht, ist es außerdem schwierig, allgemeingültig zu bestimmen, welches Argument `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das obige Beispiel `addOffset` funktioniert nicht, wenn der reguläre Ausdruck eine benannte Gruppe enthält. In diesem Fall wäre `args.at(-2)` nämlich `string` statt `offset`.

Stattdessen müssen Sie die letzten Argumente anhand ihres Typs bestimmen, da `groups` ein Objekt und `string` ein String ist.

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

- [Polyfill für `String.prototype.replace` in `core-js` mit Korrekturen und Implementierung modernen Verhaltens wie der Unterstützung von `Symbol.replace`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
