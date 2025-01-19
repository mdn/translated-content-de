---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
l10n:
  sourceCommit: 7d09807ed7594cf5c7b93afc1fa0424a26663b9b
---

{{JSRef}}

Die **`split()`**-Methode von {{jsxref("String")}}-Werten nimmt ein Muster und teilt diesen String in eine geordnete Liste von Teilstrings auf, indem nach dem Muster gesucht wird, legt diese Teilstrings in einem Array ab und gibt das Array zurück.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Syntax

```js-nolint
split(separator)
split(separator, limit)
```

### Parameter

- `separator`
  - : Das Muster, das beschreibt, wo jeder Teilungsvorgang stattfinden sollte. Kann `undefined`, ein String oder ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode sein — das typische Beispiel ist ein {{jsxref("RegExp", "regulärer Ausdruck", "", 1)}}. Das Weglassen von `separator` oder die Übergabe von `undefined` führt dazu, dass `split()` ein Array mit dem aufrufenden String als einzigem Element zurückgibt. Alle Werte, die nicht `undefined` oder Objekte mit einer `[Symbol.split]()`-Methode sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).
- `limit` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die eine Begrenzung für die Anzahl der Teilstrings angibt, die in das Array aufgenommen werden sollen. Wenn angegeben, teilt es den String bei jeder Vorkommen des angegebenen `separator`, aber stoppt, wenn `limit` Einträge im Array abgelegt worden sind. Jeder verbleibende Text wird überhaupt nicht in das Array aufgenommen.
    - Das Array kann weniger Einträge als `limit` enthalten, wenn das Ende des Strings erreicht wird, bevor das Limit erreicht ist.
    - Wenn `limit` `0` ist, wird `[]` zurückgegeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Strings, geteilt an jedem Punkt, an dem der `separator` im gegebenen String vorkommt.

## Beschreibung

Wenn `separator` ein nicht leerer String ist, wird der Zielstring durch alle Vorkommen des `separator` geteilt, ohne den `separator` in die Ergebnisse einzubeziehen. Zum Beispiel könnte ein String, der durch Tabs getrennte Werte (TSV) enthält, analysiert werden, indem ein Tab-Zeichen als Separator übergeben wird, wie `myString.split("\t")`. Wenn `separator` mehrere Zeichen enthält, muss diese gesamte Zeichenfolge gefunden werden, um zu teilen. Wenn `separator` am Anfang (oder Ende) des Strings erscheint, hat es immer noch die Wirkung einer Teilung, was dazu führt, dass ein leerer (d. h. Null-Länge) String an der ersten (oder letzten) Position des zurückgegebenen Arrays erscheint. Wenn `separator` nicht in `str` vorkommt, enthält das zurückgegebene Array ein Element, das aus dem gesamten String besteht.

Wenn `separator` ein leerer String (`""`) ist, wird `str` in ein Array seiner einzelnen UTF-16-"Zeichen" umgewandelt, ohne leere Strings an beiden Enden des resultierenden Strings.

> **Hinweis:** `"".split("")` ist daher der einzige Weg, um ein leeres Array zu erzeugen, wenn ein String als `separator` übergeben wird und `limit` nicht `0` ist.

> [!WARNING]
> Wenn der leere String (`""`) als Separator verwendet wird, wird der String **nicht** nach _benutzerwahrgenommenen Zeichen_ ([Graphem-Clustern](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) oder Unicode-Zeichen (Codepunkte) geteilt, sondern nach UTF-16-Codes. Dies zerstört [Surrogatpaare](https://unicode.org/faq/utf_bom.html#utf16-2). Siehe ["Wie bekommt man ein String in ein Zeichenarray in JavaScript?" auf Stack Overflow](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).

Wenn `separator` ein regulärer Ausdruck ist, der leere Strings matcht, hängt es davon ab, ob das Match durch UTF-16-Code-Einheiten oder Unicode-Codepunkte geteilt wird, ob der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist.

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

Wenn `separator` ein regulärer Ausdruck mit erfassten Gruppen ist, werden jedes Mal, wenn `separator` matcht, die erfassten Gruppen (einschließlich aller `undefined`-Ergebnisse) in das Ausgabearray eingefügt. Dieses Verhalten wird durch die [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode des regulären Ausdrucks festgelegt.

Wenn `separator` ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode ist, wird diese Methode mit dem Zielstring und `limit` als Argumente aufgerufen, und `this` wird auf das Objekt gesetzt. Sein Rückgabewert wird das Rückgabewert von `split`.

Jeder andere Wert wird in einen String umgewandelt, bevor er als Separator verwendet wird.

## Beispiele

### Nutzung von split()

Wenn der String leer ist und ein nicht leerer Separator angegeben ist, gibt `split()` `[""]` zurück. Wenn sowohl der String als auch der Separator leere Strings sind, wird ein leeres Array zurückgegeben.

```js
const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []
```

Das folgende Beispiel definiert eine Funktion, die einen String in ein Array von Strings aufteilt
unter Verwendung von `separator`. Nach der Teilung des Strings protokolliert die Funktion
Nachrichten, die den ursprünglichen String (vor der Teilung), den verwendeten Separator, die
Anzahl der Elemente im Array und die einzelnen Array-Elemente anzeigen.

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

Im folgenden Beispiel sucht `split()` nach null oder mehr Leerzeichen, gefolgt
von einem Semikolon, gefolgt von null oder mehr Leerzeichen und entfernt, wenn gefunden, die Leerzeichen und
das Semikolon aus dem String. `nameList` ist das Array, das als Ergebnis von `split()` zurückgegeben wird.

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

Dies protokolliert zwei Zeilen; die erste Zeile protokolliert den ursprünglichen String, und die zweite Zeile protokolliert
das resultierende Array.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Begrenzte Anzahl von Teilungen zurückgeben

Im folgenden Beispiel sucht `split()` nach Leerzeichen in einem String und gibt
die ersten 3 Teilungen zurück, die es findet.

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
```

### Teilung mit einem `RegExp` um Teile des Separators in das Ergebnis einzuschließen

Wenn `separator` ein regulärer Ausdruck ist, der Klammerausdrücke `( )` enthält, werden die Übereinstimmungen in das Array aufgenommen.

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **Hinweis:** `\d` entspricht der [Zeichenklasse](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) für Ziffern zwischen 0 und 9.

### Verwendung eines benutzerdefinierten Splitters

Ein Objekt mit einer `Symbol.split`-Methode kann als Splitter mit benutzerdefiniertem Verhalten verwendet werden.

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

Das folgende Beispiel verwendet einen internen Zustand, um bestimmtes Verhalten zu erzwingen und sicherzustellen, dass ein "gültiges" Ergebnis erzeugt wird.

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

- [Polyfill von `String.prototype.split` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie `Symbol.split` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
