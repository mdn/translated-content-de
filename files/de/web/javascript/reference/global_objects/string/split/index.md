---
title: String.prototype.split()
short-title: split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`split()`**-Methode von {{jsxref("String")}}-Werten nimmt ein Muster und teilt diesen String in eine geordnete Liste von Teilstrings, indem sie nach dem Muster sucht, fügt diese Teilstrings in ein Array ein und gibt das Array zurück.

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
  - : Das Muster, das beschreibt, wo jede Trennung erfolgen soll. Kann `undefined`, ein String oder ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode sein — das typische Beispiel ist ein {{jsxref("RegExp", "regulärer Ausdruck", "", 1)}}. Wenn `separator` weggelassen oder `undefined` übergeben wird, gibt `split()` ein Array mit dem aufrufenden String als einzigem Element zurück. Alle Werte, die nicht `undefined` oder Objekte mit einer `[Symbol.split]()`-Methode sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).
- `limit` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die eine Begrenzung der Anzahl der Teilstrings angibt, die in das Array aufgenommen werden sollen. Falls angegeben, teilt es den String bei jedem Vorkommen des angegebenen `separator`, stoppt jedoch, wenn `limit` Einträge im Array platziert wurden. Jeder verbleibende Text wird überhaupt nicht in das Array aufgenommen.
    - Das Array kann weniger Einträge als `limit` enthalten, wenn das Ende des Strings erreicht wird, bevor das Limit erreicht ist.
    - Wenn `limit` `0` ist, wird `[]` zurückgegeben.

### Rückgabewert

Wenn `separator` ein String ist, wird ein {{jsxref("Array")}} von Strings zurückgegeben, das an jedem Punkt, an dem der `separator` im gegebenen String vorkommt, aufgeteilt wird.

Wenn `separator` ein regulärer Ausdruck ist, enthält das zurückgegebene {{jsxref("Array")}} ebenfalls die [gefangenen Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) für jedes Trennungsmuster; sehen Sie unten für Details. Die gefangenen Gruppen könnten nicht übereinstimmen, in diesem Fall sind sie `undefined` im Array.

Wenn `separator` eine benutzerdefinierte `[Symbol.split]()`-Methode hat, wird ihr Rückgabewert direkt zurückgegeben.

## Beschreibung

Wenn `separator` ein nicht-leerer String ist, wird der Ziel-String durch alle Vorkommen des `separator` geteilt, ohne dass `separator` in den Ergebnissen enthalten ist. Zum Beispiel könnte ein String, der tabulatorgetrennte Werte (TSV) enthält, analysiert werden, indem ein Tabulatorzeichen als Trenner übergeben wird, etwa `myString.split("\t")`. Wenn `separator` mehrere Zeichen enthält, muss diese gesamte Zeichenfolge gefunden werden, um zu teilen. Wenn `separator` zu Beginn (oder am Ende) des Strings erscheint, hat es dennoch die Wirkung, zu teilen, was dazu führt, dass ein leerer (d.h. null Länge) String an der ersten (oder letzten) Position des zurückgegebenen Arrays erscheint. Wenn `separator` in `str` nicht vorkommt, enthält das zurückgegebene Array ein Element, das aus dem gesamten String besteht.

Wenn `separator` ein leerer String (`""`) ist, wird `str` in ein Array jedes seiner UTF-16-"Zeichen" umgewandelt, ohne leere Zeichenfolgen an den Enden des resultierenden Strings.

> [!NOTE]
> `"".split("")` ist daher die einzige Möglichkeit, ein leeres Array zu erzeugen, wenn ein String als `separator` übergeben wird und `limit` nicht `0` ist.

> [!WARNING]
> Wenn der leere String (`""`) als Trenner verwendet wird, wird der String **nicht** durch _nutzerwahrgenommene Zeichen_ ([Graphem-Cluster](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) oder Unicode-Zeichen (Codepunkte) geteilt, sondern durch UTF-16-Code-Einheiten. Dies zerstört [Surrogat-Paare](https://unicode.org/faq/utf_bom.html#utf16-2). Siehe ["Wie bekommt man ein Zeichenarray aus einem String in JavaScript?" auf Stack Overflow](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).

Wenn `separator` ein regulärer Ausdruck ist, der leere Zeichenfolgen matcht, hängt es davon ab, ob das Match durch UTF-16-Code-Einheiten oder Unicode-Codepunkte getrennt wird, ob der RegExp [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist.

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

Wenn `separator` ein regulärer Ausdruck mit gefangenen Gruppen ist, dann werden jedes Mal, wenn `separator` übereinstimmt, die gefangenen Gruppen (einschließlich aller `undefined`-Ergebnisse) in das Ausgabe-Array eingefügt. Dieses Verhalten wird durch die `[Symbol.split]`-Methode des Regulären Ausdrucks festgelegt.

Wenn `separator` ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode ist, wird diese Methode mit dem Zielstring und `limit` als Argumenten aufgerufen und `this` auf das Objekt gesetzt. Ihr Rückgabewert wird zum Rückgabewert von `split`.

Jeder andere Wert wird vor der Verwendung als `separator` in einen String umgewandelt.

## Beispiele

### Nutzung von split()

Wenn der String leer ist und ein nicht-leerer Separator angegeben wird, gibt `split()` `[""]` zurück. Wenn der String und Separator beide leere Strings sind, wird ein leeres Array zurückgegeben.

```js
const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []
```

Das folgende Beispiel definiert eine Funktion, die einen String in ein Array von Strings unterteilt, indem sie `separator` verwendet. Nachdem der String aufgeteilt wurde, protokolliert die Funktion Nachrichten, die den Originalstring (vor der Teilung), den verwendeten Separator, die Anzahl der Elemente im Array und die einzelnen Array-Elemente angeben.

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

### Entfernen von Leerzeichen aus einem String

Im folgenden Beispiel sucht `split()` nach Null oder mehr Leerzeichen, gefolgt von einem Semikolon, gefolgt von Null oder mehr Leerzeichen – und entfernt, wenn gefunden, die Leerzeichen und das Semikolon aus dem String. `nameList` ist das Array, das als Ergebnis von `split()` zurückgegeben wird.

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

Dies protokolliert zwei Zeilen; die erste Zeile protokolliert den Originalstring, und die zweite Zeile protokolliert das resultierende Array.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Begrenzte Anzahl von Trennungen zurückgeben

Im folgenden Beispiel sucht `split()` nach Leerzeichen in einem String und gibt die ersten 3 Teilungen zurück, die es findet.

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
```

### Teilen mit einem `RegExp`, um Teile des Separators im Ergebnis einzuschließen

Wenn `separator` ein regulärer Ausdruck ist, der gefangene Klammern `( )` enthält, werden übereinstimmende Ergebnisse in das Array aufgenommen.

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> [!NOTE]
> `\d` entspricht der [Zeichenklasse](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) für Ziffern zwischen 0 und 9.

### Verwendung eines benutzerdefinierten Trenners

Ein Objekt mit einer `Symbol.split`-Methode kann als Trenner mit benutzerdefiniertem Verhalten verwendet werden.

Das folgende Beispiel teilt einen String unter Verwendung eines internen Zustands, der aus einer inkrementierenden Zahl besteht:

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

Das folgende Beispiel verwendet einen internen Zustand, um ein bestimmtes Verhalten durchzusetzen und um sicherzustellen, dass ein "gültiges" Ergebnis erzeugt wird.

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

- [Polyfill von `String.prototype.split` in `core-js` mit Korrekturen und Implementierung moderner Verhalten wie `Symbol.split`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.split`](https://www.npmjs.com/package/string.prototype.split)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
