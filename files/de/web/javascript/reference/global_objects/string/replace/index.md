---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`replace()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, in dem ein oder mehrere Übereinstimmungen eines `pattern` durch einen `replacement` ersetzt wurden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und der `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der Original-String bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Syntax

```js-nolint
replace(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht über die `Symbol.replace`-Methode verfügt, wird in einen String umgewandelt.
- `replacement`
  - : Kann ein String oder eine Funktion sein.
    - Wenn es ein String ist, wird er das Teilstring, das von `pattern` übereinstimmt, ersetzen. Eine Reihe spezieller Ersetzungsmuster wird unterstützt; siehe den Abschnitt [Einen String als Ersetzung angeben](#einen_string_als_ersetzung_angeben) unten.
    - Wenn es eine Funktion ist, wird sie für jeden Treffer aufgerufen und ihr Rückgabewert wird als Ersetzungstext verwendet. Die an diese Funktion übergebenen Argumente sind im Abschnitt [Eine Funktion als Ersetzung spezifizieren](#eine_funktion_als_ersetzung_spezifizieren) unten beschrieben.

### Rückgabewert

Ein neuer String, bei dem ein oder mehrere Übereinstimmungen des Musters durch die angegebene Ersetzung ersetzt werden.

## Beschreibung

Diese Methode verändert den Stringwert, auf den sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Ein String-Muster wird nur einmal ersetzt. Um eine globale Suche und Ersetzung durchzuführen, verwenden Sie einen Regulären Ausdruck mit dem `g`-Flag, oder verwenden Sie [`replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird der Rückgabewert von `replace()`. In diesem Fall wird das Verhalten von `replace()` vollständig durch die `[Symbol.replace]()`-Methode kodiert — zum Beispiel ist jede Erwähnung von "Erfassungsgruppen" in der folgenden Beschreibung tatsächlich eine Funktionalität, die von [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) bereitgestellt wird.

Wenn das `pattern` ein leerer String ist, wird die Ersetzung dem Anfang des Strings vorangestellt.

```js
"xxx".replace("", "_"); // "_xxx"
```

Ein regulärer Ausdruck mit dem `g`-Flag ist der einzige Fall, bei dem `replace()` mehr als einmal ersetzt. Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replace()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Einen String als Ersetzung angeben

Der Ersetzungsstring kann die folgenden speziellen Ersetzungsmuster enthalten:

| Muster    | Fügt ein                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------- |
| `$$`      | Fügt ein `"$"` ein.                                                                                |
| `$&`      | Fügt das übereinstimmende Teilstring ein.                                                          |
| `` $` ``  | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring vorangeht.                     |
| `$'`      | Fügt den Teil des Strings ein, der dem übereinstimmenden Teilstring folgt.                         |
| `$n`      | Fügt die `n`te (`1`-basiert) Erfassungsgruppe ein, wobei `n` eine positive ganze Zahl kleiner als 100 ist. |
| `$<Name>` | Fügt die benannte Erfassungsgruppe ein, wobei `Name` der Gruppenname ist.                           |

`$n` und `$<Name>` sind nur verfügbar, wenn das `pattern`-Argument ein {{jsxref("RegExp")}}-Objekt ist. Wenn das `pattern` ein String ist oder wenn die entsprechende Erfassungsgruppe im Regex nicht vorhanden ist, wird das Muster als Literal ersetzt. Ist die Gruppe vorhanden, wird aber nicht erfasst (weil sie Teil einer Disjunktion ist), wird sie durch einen leeren String ersetzt.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; das Regex hat keine zweite Gruppe

"foo".replace("f", "$1");
// "$1oo"; das Muster ist ein String, daher hat es keine Gruppen

"foo".replace(/(f)|(g)/, "$2");
// "oo"; die zweite Gruppe existiert, wird aber nicht erfasst
```

### Eine Funktion als Ersetzung spezifizieren

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird die Funktion aufgerufen, nachdem die Übereinstimmung gefunden wurde. Das Ergebnis der Funktion (Rückgabewert) wird als Ersetzungsstring verwendet.

> [!NOTE]
> Die oben erwähnten speziellen Ersetzungsmuster gelten _nicht_ für Strings, die von der Ersetzungsfunktion zurückgegeben werden.

Die Funktion hat folgende Signatur:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Die Argumente der Funktion sind wie folgt:

- `match`
  - : Das übereinstimmende Teilstring. (Entspricht `$&` oben.)
- `p1`, `p2`, …, `pN`
  - : Die `n`te von einer Erfassungsgruppe gefundene Zeichenfolge (einschließlich benannter Erfassungsgruppen), sofern das erste Argument von `replace()` ein {{jsxref("RegExp")}}-Objekt ist. (Entspricht `$1`, `$2` usw. oben.) Wenn das `pattern` zum Beispiel `/(\a+)(\b+)/` ist, dann ist `p1` die Übereinstimmung für `\a+` und `p2` ist die für `\b+`. Wenn die Gruppe Teil einer Disjunktion ist (z.B. `"abc".replace(/(a)|(b)/, replacer)`), wird die nicht übereinstimmende Alternative `undefined` sein.
- `offset`
  - : Der Offset des übereinstimmenden Teilstrings innerhalb des gesamten untersuchten Strings. Wenn zum Beispiel der gesamte String `'abcd'` ist und das übereinstimmende Teilstring `'bc'` ist, wird dieses Argument `1` sein.
- `string`
  - : Der gesamte untersuchte String.
- `groups`
  - : Ein Objekt, dessen Schlüssel die verwendeten Gruppennamen sind und deren Werte die übereinstimmenden Teile (`undefined` wenn nicht übereinstimmend). Nur vorhanden, wenn das `pattern` mindestens eine benannte Erfassungsgruppe enthält.

Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument ein {{jsxref("RegExp")}}-Objekt ist – und, falls ja, wie viele Erfassungsgruppen es hat.

Das folgende Beispiel wird `newString` auf `'abc - 12345 - #$*%'` setzen:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 ist Nicht-Ziffern, p2 Ziffern und p3 Nicht-Alphanumerika
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

Die Funktion wird mehrfach aufgerufen, um jeden vollständigen Treffer zu ersetzen, wenn der Reguläre Ausdruck im ersten Parameter global ist.

## Beispiele

### Den Regulären Ausdruck in replace() definieren

Im folgenden Beispiel wird der Reguläre Ausdruck in `replace()` definiert und enthält das "ignore case"-Flag.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Dies gibt `'Twas the night before Christmas...'` aus.

> [!NOTE]
> Weitere Erklärungen zu regulären Ausdrücken finden Sie im [Regulärer Ausdrucks-Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions).

### Die globalen und ignoreCase-Flags mit replace() verwenden

Ein globaler Ersatz kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel beinhaltet der reguläre Ausdruck die [globalen und ignore case Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), die es `replace()` ermöglicht, jedes Auftreten von `'apples'` im String durch `'oranges'` zu ersetzen.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Dies gibt `'oranges are round, and oranges are juicy'` aus.

### Wörter in einem String vertauschen

Das folgende Skript vertauscht die Wörter im String. Für den Ersetzungstext verwendet das Skript [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) und die `$1` und `$2` Ersetzungsmuster.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Dies gibt `'Cruz, Maria'` aus.

### Eine Inline-Funktion verwenden, die die übereinstimmenden Zeichen modifiziert

In diesem Beispiel werden alle Vorkommen von Großbuchstaben im String in Kleinbuchstaben umgewandelt, und ein Bindestrich wird direkt vor der Übereinstimmungsstelle eingefügt. Wichtig hierbei ist, dass zusätzliche Operationen auf dem übereinstimmenden Element erforderlich sind, bevor es als Ersetzung zurückgegeben wird.

Die Ersetzungsfunktion akzeptiert das übereinstimmende Fragment als ihren Parameter und verwendet es, um das Format zu transformieren und den Bindestrich davor zurückzugeben.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Bei Verwendung von `styleHyphenFormat('borderTop')` wird `'border-top'` zurückgegeben.

Da wir das _Ergebnis_ der Übereinstimmung weiter transformieren möchten, bevor die endgültige Ersetzung durchgeführt wird, müssen wir eine Funktion verwenden. Dies erzwingt die Auswertung der Übereinstimmung vor der [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode. Hätten wir versucht, dies ohne eine Funktion zu tun, hätte die {{jsxref("String/toLowerCase", "toLowerCase()")}} keine Wirkung.

```js example-bad
// Funktioniert nicht
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Dies liegt daran, dass `'$&'.toLowerCase()` zunächst als Stringliteral ausgewertet würde (was dasselbe `'$&'` ergibt), bevor die Zeichen als Muster verwendet werden.

### Eine Fahrenheit-Stufe durch ihre Celsius-Entsprechung ersetzen

Das folgende Beispiel ersetzt eine Fahrenheit-Stufe durch ihre entsprechende Celsius-Stufe. Die Fahrenheit-Stufe sollte eine Zahl sein, die mit `"F"` endet. Die Funktion gibt die Celsius-Zahl zurück, die mit `"C"` endet. Wenn zum Beispiel die Eingabewert `"212F"` ist, gibt die Funktion `"100C"` zurück. Wenn die Zahl `"0F"` ist, gibt die Funktion `"-17.77777777777778C"` zurück.

Der reguläre Ausdruck `test` überprüft jede Zahl, die mit `F` endet. Die Anzahl der Fahrenheit-Stufen ist für die Funktion über ihren zweiten Parameter, `p1`, zugänglich. Die Funktion definiert die Celsius-Zahl basierend auf der Anzahl der Fahrenheit-Stufen, die als String an die `f2c()`-Funktion übergeben werden. `f2c()` gibt dann die Celsius-Zahl zurück. Diese Funktion nähert sich Perl's `s///e` Flag an.

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

Angenommen, wir möchten einen Ersetzer erstellen, der den Offset-Daten jedem übereinstimmenden String hinzufügt. Da die Ersetzer-Funktion bereits den `offset`-Parameter erhält, wäre dies trivial, wenn das Regex statisch bekannt ist.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Es wäre jedoch schwierig, diesen Ersetzer zu verallgemeinern, wenn wir möchten, dass er mit jedem Regex-Muster funktioniert. Der Ersetzer ist _variadisch_ — die Anzahl der Argumente, die er erhält, hängt von der Anzahl der Erfassungsgruppen ab. Wir können [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden, dies würde jedoch auch `offset`, `string` usw. in das Array aufnehmen. Die Tatsache, dass `groups` je nach Identität des Regex möglicherweise übergeben wird oder nicht, würde es auch schwierig machen, generisch zu wissen, welches Argument dem `offset` entspricht.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

Das obige `addOffset` Beispiel funktioniert nicht, wenn der Regex eine benannte Gruppe enthält, da in diesem Fall `args.at(-2)` der `string` anstatt des `offset` wäre.

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

- [Polyfill of `String.prototype.replace` in `core-js` with fixes and implementation of modern behavior like `Symbol.replace` support](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
