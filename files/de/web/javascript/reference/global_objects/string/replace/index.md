---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt eine neue Zeichenkette zurück, bei der ein, einige oder alle Übereinstimmungen eines `pattern` durch einen `replacement` ersetzt werden. Das `pattern` kann eine Zeichenkette oder ein {{jsxref("RegExp")}} sein, und der `replacement` kann eine Zeichenkette oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` eine Zeichenkette ist, wird nur das erste Auftreten ersetzt. Die ursprüngliche Zeichenkette bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann eine Zeichenkette oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht hat, wird in eine Zeichenkette umgewandelt.
- `replacement`
  - : Kann eine Zeichenkette oder eine Funktion sein.
    - Wenn es eine Zeichenkette ist, wird es die Teilzeichenkette ersetzen, die durch `pattern` übereinstimmt. Eine Reihe spezieller Ersetzungsmuster wird unterstützt; siehe den Abschnitt [Eine Zeichenkette als Ersetzung angeben](#eine_zeichenkette_als_ersetzung_angeben) unten.
    - Wenn es eine Funktion ist, wird sie für jede Übereinstimmung aufgerufen und ihr Rückgabewert wird als Ersetzungstext verwendet. Die der Funktion bereitgestellten Argumente sind im Abschnitt [Eine Funktion als Ersetzung angeben](#eine_funktion_als_ersetzung_angeben) unten beschrieben.

### Rückgabewert

Eine neue Zeichenkette, bei der ein, einige oder alle Übereinstimmungen des Musters durch die angegebene Ersetzung ersetzt wurden.

## Beschreibung

Diese Methode verändert den Zeichenkettenwert, auf dem sie aufgerufen wird, nicht. Sie gibt eine neue Zeichenkette zurück.

Ein Zeichenfolgenmuster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen regulären Ausdruck mit dem `g`-Flag oder verwenden Sie stattdessen [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit der Zielzeichenkette und `replacement` als Argumenten aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replace()`. In diesem Fall ist das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — beispielsweise ist jede Erwähnung von "Erfassungsgruppen" in der unten stehenden Beschreibung eigentlich Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` eine leere Zeichenkette ist, wird die Ersetzung am Anfang der Zeichenkette eingefügt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regulärer Ausdruck mit dem `g`-Flag ist der einzige Fall, in dem `replace()` mehr als einmal ersetzt. Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Eine Zeichenkette als Ersetzung angeben

Die Ersetzungszeichenkette kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Einfügen                                                                                      |
| --------- | --------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                           |
| `$&`      | Fügt die übereinstimmende Teilzeichenkette ein.                                               |
| `` $` ``  | Fügt den Teil der Zeichenkette ein, der der übereinstimmenden Teilzeichenkette vorausgeht.    |
| `$'`      | Fügt den Teil der Zeichenkette ein, der der übereinstimmenden Teilzeichenkette folgt.         |
| `$n`      | Fügt die `n`te (`1`-indizierte) Erfassungsgruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Erfassungsgruppe ein, wobei `Name` der Gruppenname ist.                     |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` eine Zeichenkette ist oder wenn die entsprechende Erfassungsgruppe nicht im Regex vorhanden ist, wird das Muster als Literalmuster ersetzt. Wenn die Gruppe vorhanden, aber nicht übereinstimmend ist (weil sie Teil einer Disjunktion ist), wird sie durch eine leere Zeichenkette ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group

"foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

"foo".replace(/(f)|(g)/, "$2");
// "oo"; the second group exists but isn't matched
```

### Eine Funktion als Ersetzung angeben

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion nach der Übereinstimmung aufgerufen. Das Ergebnis der Funktion (Rückgabewert) wird als Ersetzungszeichenfolge verwendet.

> [!NOTE]
> Die oben erwähnten speziellen Ersetzungsmuster gelten _nicht_ für Zeichenfolgen, die aus der Ersetzungsfunktion zurückgegeben werden.

Die Signatur der Funktion ist wie folgt:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Die übereinstimmende Teilzeichenkette. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Die `n`te Zeichenkette, die durch eine Erfassungsgruppe (einschließlich benannter Erfassungsgruppen) gefunden wurde, vorausgesetzt, das erste Argument von `replace()` ist ein {{jsxref("RegExp")}}-Objekt. (Entspricht `$1`, `$2`, usw. oben.) Zum Beispiel, wenn das `pattern` `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+` und `p2` die Übereinstimmung für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Offset der übereinstimmenden Teilzeichenkette innerhalb der gesamten betrachteten Zeichenkette. Zum Beispiel, wenn die gesamte Zeichenkette `'abcd'` ist und die übereinstimmende Teilzeichenkette `'bc'` ist, dann wird dieses Argument `1` sein.
- `string`
  - : Die gesamte betrachtete Zeichenkette.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und dessen Werte die übereinstimmenden Teile (`undefined`, wenn nicht übereinstimmend) sind. Nur vorhanden, wenn das `pattern` mindestens eine benannte Erfassungsgruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist — und, falls ja, wie viele Erfassungsgruppen es hat.

Das folgende Beispiel setzt `newString` auf `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach aufgerufen, um jedes vollständige Vorkommen zu ersetzen, wenn der reguläre Ausdruck im ersten Parameter global ist.

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
> Siehe [den Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) für weitere Erklärungen zu regulären Ausdrücken.

### Verwendung der globalen und ignoreCase-Flags mit replace()

Eine globale Ersetzung kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel enthält der reguläre Ausdruck die [globale und ignore case Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` erlauben, jedes Vorkommen von `'apples'` in der Zeichenkette durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies protokolliert `'oranges are round, and oranges are juicy'`.

### Wörter in einer Zeichenkette vertauschen

Das folgende Skript vertauscht die Wörter in der Zeichenkette. Für den Ersetzungstext verwendet das Skript [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die Ersetzungsmuster `$1` und `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies protokolliert `'Cruz, Maria'`.

### Verwendung einer Inline-Funktion, die die übereinstimmenden Zeichen modifiziert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben in der Zeichenkette in Kleinbuchstaben umgewandelt, und ein Bindestrich wird unmittelbar vor der Übereinstimmungsstelle eingefügt. Wichtig ist, dass zusätzliche Operationen an dem übereinstimmenden Element erforderlich sind, bevor es als Ersetzung zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Segment als Parameter und verwendet es, um die Groß-/Kleinschreibung zu transformieren und den Bindestrich vor der Rückgabe zu verketten.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei `styleHyphenFormat('borderTop')` wird `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ der Übereinstimmung weiter transformieren möchten, bevor die endgültige Ersetzung vorgenommen wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung der Übereinstimmung vor der Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Wenn wir versucht hätten, dies ohne Funktion zu tun, hätte {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung gehabt.

```js example-bad
// Won't work
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zunächst als stringify-Literal ausgewertet würde (was dasselbe `'$&'` ergibt), bevor die Zeichen als Muster verwendet würden.

### Ersetzen eines Fahrenheit-Wertes mit seinem Celsius-Äquivalent

Das folgende Beispiel ersetzt einen Fahrenheit-Wert durch seinen äquivalenten Celsius-Wert. Der Fahrenheit-Wert sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Zum Beispiel, wenn die Eingabezahl `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` prüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Grade ist für die Funktion über ihren zweiten Parameter, `p1`, zugänglich. Die Funktion setzt die Celsius-Zahl basierend auf der Anzahl der Fahrenheit-Grade, die als Zeichenkette an die `f2c()`-Funktion übergeben werden. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion ähnelt Perls `s///e`-Flag.

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

Angenommen, wir möchten einen Ersetzer erstellen, der die Offset-Daten an jede übereinstimmende Zeichenkette anhängt. Da die Ersetzerfunktion bereits den `offset`-Parameter empfängt, wäre dies trivial, wenn der Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Dieser Ersetzer wäre jedoch schwer zu verallgemeinern, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadisch_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der vorhandenen Erfassungsgruppen ab. Wir können [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, aber es würde auch `offset`, `string`, usw. in das Array sammeln. Dass `groups` je nach Identität des Regexes möglicherweise oder möglicherweise nicht übergeben wird, würde es auch erschweren, allgemein zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das oben stehende `addOffset`-Beispiel funktioniert nicht, wenn der Regex eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` die `string` anstelle des `offset` wäre.

Stattdessen müssen Sie die letzten paar Argumente basierend auf dem Typ extrahieren, denn `groups` ist ein Objekt, während `string` eine Zeichenkette ist.

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
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
