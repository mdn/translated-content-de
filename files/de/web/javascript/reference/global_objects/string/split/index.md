---
title: String.prototype.split()
short-title: split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`split()`** von {{jsxref("String")}}-Werten nimmt ein Muster entgegen und teilt den String in eine geordnete Liste von Teilstrings auf, indem sie nach dem Muster sucht. Sie fügt diese Teilstrings in ein Array ein und gibt das Array zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.split()", "taller")}}

```js interactive-example
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

## Syntax

```js-nolint
split(separator)
split(separator, limit)
```

### Parameter

- `separator`
  - : Das Muster, das angibt, an welchen Stellen der String aufgeteilt wird. Es kann `undefined`, ein String oder ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode sein – ein typisches Beispiel ist ein {{jsxref("RegExp", "regular expression", "", 1)}}. Wird `separator` weggelassen oder `undefined` übergeben, gibt `split()` ein Array zurück, das den aufrufenden String als einziges Element enthält. Alle Werte, die nicht `undefined` sind und keine Objekte mit einer `[Symbol.split]()`-Methode sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).
- `limit` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die die Anzahl der Teilstrings begrenzt, die in das Array aufgenommen werden. Wenn dieser Parameter angegeben wird, wird der String bei jedem Vorkommen des angegebenen `separator` aufgeteilt. Sobald jedoch `limit` Einträge in das Array aufgenommen wurden, endet die Aufteilung. Verbleibender Text wird nicht in das Array aufgenommen.
    - Das Array kann weniger als `limit` Einträge enthalten, wenn das Ende des Strings erreicht wird, bevor das Limit erreicht ist.
    - Wenn `limit` `0` ist, wird `[]` zurückgegeben.

### Rückgabewert

Wenn `separator` ein String ist, wird ein {{jsxref("Array")}} von Strings zurückgegeben. Der String wird an jeder Stelle aufgeteilt, an der `separator` vorkommt.

Wenn `separator` ein regulärer Ausdruck ist, enthält das zurückgegebene {{jsxref("Array")}} außerdem die [erfassten Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) jedes Treffers des Trennmusters; Einzelheiten finden Sie weiter unten. Erfasste Gruppen können ohne Treffer bleiben und haben dann im Array den Wert `undefined`.

Wenn `separator` eine benutzerdefinierte `[Symbol.split]()`-Methode besitzt, wird deren Rückgabewert direkt zurückgegeben.

## Beschreibung

Wenn `separator` ein nicht leerer String ist, wird der Ziel-String an allen Vorkommen von `separator` aufgeteilt, ohne `separator` in die Ergebnisse aufzunehmen. Ein String mit tabulatorgetrennten Werten (TSV) lässt sich beispielsweise verarbeiten, indem ein Tabulatorzeichen als Trennzeichen übergeben wird, etwa mit `myString.split("\t")`. Wenn `separator` aus mehreren Zeichen besteht, muss die gesamte Zeichenfolge gefunden werden, damit der String aufgeteilt wird. Wenn `separator` am Anfang (oder Ende) des Strings steht, wird der String auch dort aufgeteilt. Dadurch steht an der ersten (oder letzten) Position des zurückgegebenen Arrays ein leerer String (also ein String der Länge null). Wenn `separator` in `str` nicht vorkommt, enthält das zurückgegebene Array ein einziges Element mit dem gesamten String.

Wenn `separator` ein leerer String (`""`) ist, wird `str` in ein Array seiner einzelnen UTF-16-„Zeichen“ umgewandelt, ohne leere Strings am Anfang oder Ende des resultierenden Arrays.

> [!NOTE]
> `"".split("")` ist daher die einzige Möglichkeit, ein leeres Array zu erzeugen, wenn ein String als `separator` übergeben wird und `limit` nicht `0` ist.

> [!WARNING]
> Wenn der leere String (`""`) als Trennzeichen verwendet wird, wird der String **nicht** nach _für Benutzer wahrnehmbaren Zeichen_ ([Graphemclustern](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) oder Unicode-Zeichen (Codepunkten) aufgeteilt, sondern nach UTF-16-Codeeinheiten. Dadurch werden [Surrogatpaare](https://unicode.org/faq/utf_bom.html#utf16-2) zerstört. Siehe [„How do you get a string to a character array in JavaScript?“ auf Stack Overflow](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).

Wenn `separator` ein regulärer Ausdruck ist, der auf leere Strings passt, hängt es davon ab, ob der reguläre Ausdruck [Unicode-aware](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, ob nach UTF-16-Codeeinheiten oder Unicode-Codepunkten aufgeteilt wird.

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

Wenn `separator` ein regulärer Ausdruck mit erfassten Gruppen ist, werden bei jedem Treffer von `separator` die erfassten Gruppen (einschließlich etwaiger `undefined`-Ergebnisse) in das Ausgabe-Array eingefügt. Dieses Verhalten wird durch die [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode des regulären Ausdrucks festgelegt.

Wenn `separator` ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode ist, wird diese Methode mit dem Ziel-String und `limit` als Argumenten aufgerufen, wobei `this` auf das Objekt gesetzt ist. Ihr Rückgabewert wird zum Rückgabewert von `split`.

Jeder andere Wert wird vor der Verwendung als Trennzeichen in einen String umgewandelt.

## Beispiele

### split() verwenden

Wenn der String leer und ein nicht leeres Trennzeichen angegeben ist, gibt `split()` `[""]` zurück. Wenn sowohl der String als auch das Trennzeichen leer sind, wird ein leeres Array zurückgegeben.

```js
const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []
```

Das folgende Beispiel definiert eine Funktion, die einen String mithilfe von `separator` in ein Array von Strings aufteilt. Nach der Aufteilung gibt die Funktion Meldungen mit dem ursprünglichen String (vor der Aufteilung), dem verwendeten Trennzeichen, der Anzahl der Elemente im Array und den einzelnen Array-Elementen aus.

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("The original string is:", stringToSplit);
  console.log("The separator is:", separator);
  console.log(
    "The array has",
    arrayOfStrings.length,
    "elements:",
    arrayOfStrings.join(" / "),
  );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

Dieses Beispiel erzeugt die folgende Ausgabe:

```plain
The original string is: "Oh brave new world that has such people in it."
The separator is: " "
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

The original string is: "Oh brave new world that has such people in it."
The separator is: "undefined"
The array has 1 elements: Oh brave new world that has such people in it.

The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
The separator is: ","
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
```

### Leerzeichen aus einem String entfernen

Im folgenden Beispiel sucht `split()` nach null oder mehr Leerzeichen, gefolgt von einem Semikolon und anschließend wieder null oder mehr Leerzeichen. Wenn eine solche Folge gefunden wird, entfernt die Aufteilung die Leerzeichen und das Semikolon aus dem String. `nameList` ist das von `split()` zurückgegebene Array.

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

Dies gibt zwei Zeilen aus: Die erste Zeile enthält den ursprünglichen String, die zweite das resultierende Array.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Eine begrenzte Anzahl von Aufteilungen zurückgeben

Im folgenden Beispiel sucht `split()` in einem String nach Leerzeichen und gibt die ersten 3 gefundenen Teilstrings zurück.

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
```

### Mit einem `RegExp` aufteilen und Teile des Trennmusters in das Ergebnis aufnehmen

Wenn `separator` ein regulärer Ausdruck mit erfassenden Klammern `( )` ist, werden die erfassten Treffer in das Array aufgenommen.

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> [!NOTE]
> `\d` entspricht der [Zeichenklasse](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) für Ziffern zwischen 0 und 9.

### Einen benutzerdefinierten Splitter verwenden

Ein Objekt mit einer `Symbol.split`-Methode kann als Splitter mit benutzerdefiniertem Verhalten verwendet werden.

Das folgende Beispiel teilt einen String mithilfe eines internen Zustands auf, der aus einer hochzählenden Zahl besteht:

```js
const splitByNumber = {
  [Symbol.split](str) {
    let num = 1;
    let pos = 0;
    const result = [];
    while (pos < str.length) {
      const matchPos = str.indexOf(num, pos);
      if (matchPos === -1) {
        result.push(str.substring(pos));
        break;
      }
      result.push(str.substring(pos, matchPos));
      pos = matchPos + String(num).length;
      num++;
    }
    return result;
  },
};

const myString = "a1bc2c5d3e4f";
console.log(myString.split(splitByNumber)); // [ "a", "bc", "c5d", "e", "f" ]
```

Das folgende Beispiel verwendet einen internen Zustand, um ein bestimmtes Verhalten durchzusetzen und sicherzustellen, dass ein „gültiges“ Ergebnis erzeugt wird.

```js
const DELIMITER = ";";

// Split the commands, but remove any invalid or unnecessary values.
const splitCommands = {
  [Symbol.split](str, lim) {
    const results = [];
    const state = {
      on: false,
      brightness: {
        current: 2,
        min: 1,
        max: 3,
      },
    };
    let pos = 0;
    let matchPos = str.indexOf(DELIMITER, pos);

    while (matchPos !== -1) {
      const subString = str.slice(pos, matchPos).trim();

      switch (subString) {
        case "light on":
          // If the `on` state is already true, do nothing.
          if (!state.on) {
            state.on = true;
            results.push(subString);
          }
          break;

        case "light off":
          // If the `on` state is already false, do nothing.
          if (state.on) {
            state.on = false;
            results.push(subString);
          }
          break;

        case "brightness up":
          // Enforce a brightness maximum.
          if (state.brightness.current < state.brightness.max) {
            state.brightness.current += 1;
            results.push(subString);
          }
          break;

        case "brightness down":
          // Enforce a brightness minimum.
          if (state.brightness.current > state.brightness.min) {
            state.brightness.current -= 1;
            results.push(subString);
          }
          break;
      }

      if (results.length === lim) {
        break;
      }

      pos = matchPos + DELIMITER.length;
      matchPos = str.indexOf(DELIMITER, pos);
    }

    // If we broke early due to reaching the split `lim`, don't add the remaining commands.
    if (results.length < lim) {
      results.push(str.slice(pos).trim());
    }

    return results;
  },
};

const commands =
  "light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
console.log(commands.split(splitCommands, 3)); // ["light on", "brightness up", "brightness down"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.split` in `core-js` mit Korrekturen und Implementierung modernen Verhaltens wie der Unterstützung von `Symbol.split`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.split`](https://www.npmjs.com/package/string.prototype.split)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
