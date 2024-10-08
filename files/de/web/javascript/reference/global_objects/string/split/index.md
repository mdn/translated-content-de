---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`split()`** Methode von {{jsxref("String")}}-Werten nimmt ein Muster und teilt diesen String in eine geordnete Liste von Teilstrings, indem nach dem Muster gesucht wird. Diese Teilstrings werden in ein Array gelegt, und das Array wird zurückgegeben.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Syntax

```js-nolint
split(separator)
split(separator, limit)
```

### Parameter

- `separator`
  - : Das Muster, das beschreibt, wo jede Trennung erfolgen soll. Kann `undefined`, ein String oder ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode sein – das typische Beispiel ist ein {{jsxref("RegExp", "regulärer Ausdruck", "", 1)}}. Das Weglassen von `separator` oder das Übergeben von `undefined` bewirkt, dass `split()` ein Array mit dem aufrufenden String als einzigem Element zurückgibt. Alle Werte, die nicht `undefined` sind oder Objekte mit einer `[Symbol.split]()`-Methode, werden [zu Strings umgeformt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).
- `limit` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl, die eine Begrenzung für die Anzahl der im Array enthaltenen Teilstrings festlegt. Wenn angegeben, wird der String bei jedem Vorkommen des angegebenen `separator` geteilt, hört jedoch auf, sobald `limit`-Einträge im Array platziert wurden. Übrig gebliebener Text wird gar nicht in das Array aufgenommen.
    - Das Array kann weniger Einträge als `limit` enthalten, wenn das Ende des Strings erreicht wird, bevor das Limit erreicht ist.
    - Wenn `limit` `0` ist, wird `[]` zurückgegeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Strings, das an jedem Punkt geteilt wird, an dem der `separator` im gegebenen String vorkommt.

## Beschreibung

Wenn `separator` ein nicht-leerer String ist, wird der Zielstring durch alle Vorkommen des `separator` geteilt, ohne den `separator` in den Ergebnissen einzuschließen. Zum Beispiel könnte ein String, der durch Tabulatoren getrennte Werte (TSV) enthält, geparst werden, indem ein Tabulatorzeichen als Trennzeichen übergeben wird, wie `myString.split("\t")`. Wenn `separator` mehrere Zeichen enthält, muss diese gesamte Zeichenfolge gefunden werden, um zu teilen. Wenn `separator` am Anfang (oder Ende) des Strings vorkommt, hat dies dennoch die Wirkung des Teilens, was zu einem leeren (d.h. null Länge) String an der ersten (oder letzten) Position des zurückgegebenen Arrays führt. Wenn `separator` nicht in `str` vorkommt, enthält das zurückgegebene Array ein Element, das aus dem gesamten String besteht.

Wenn `separator` ein leerer String (`""`) ist, wird `str` in ein Array jedes seiner UTF-16-"Zeichen" umgewandelt, ohne leere Strings an beiden Enden des resultierenden Strings.

> **Hinweis:** `"".split("")` ist daher die einzige Möglichkeit, ein leeres Array zu erzeugen, wenn ein String als `separator` übergeben wird und `limit` nicht `0` ist.

> [!WARNING]
> Wenn der leere String (`""`) als Trennzeichen verwendet wird, wird der String **nicht** durch _vom Benutzer wahrgenommene Zeichen_ ([Graphemschichten](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) oder Unicode-Zeichen (Codepunkte) geteilt, sondern durch UTF-16-Codeeinheiten. Dies zerstört [Ersatzpaarungen](https://unicode.org/faq/utf_bom.html#utf16-2). Siehe ["Wie wandeln Sie einen String in ein Zeichen-Array in JavaScript um?" auf StackOverflow](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).

Wenn `separator` ein regulärer Ausdruck ist, der leere Strings abgleicht, hängt es davon ab, ob der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, ob die Aufteilung durch UTF-16-Codeeinheiten oder Unicode-Codepunkte erfolgt.

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

Wenn `separator` ein regulärer Ausdruck mit Fangruppen ist, werden jedes Mal, wenn `separator` übereinstimmt, die gefangenen Gruppen (einschließlich aller `undefined`-Ergebnisse) in das Ausgabe-Array eingefügt. Dieses Verhalten wird durch die [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode des regulären Ausdrucks definiert.

Wenn `separator` ein Objekt mit einer [`Symbol.split`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)-Methode ist, wird diese Methode mit dem Zielstring und `limit` als Argumente aufgerufen, und `this` wird auf das Objekt gesetzt. Sein Rückgabewert wird zum Rückgabewert von `split`.

Jeder andere Wert wird in einen String umgewandelt, bevor er als Trennzeichen verwendet wird.

## Beispiele

### Verwendung von split()

Wenn der String leer ist und ein nicht-leerer `separator` angegeben ist, gibt `split()` `[""]` zurück. Wenn sowohl der String als auch das `separator` leere Strings sind, wird ein leeres Array zurückgegeben.

```js
const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []
```

Das folgende Beispiel definiert eine Funktion, die einen String in ein Array von Strings unter Verwendung von `separator` teilt. Nach dem Teilen des Strings protokolliert die Funktion Meldungen, die den ursprünglichen String (vor dem Teilen), das verwendete Trennzeichen, die Anzahl der Elemente im Array und die einzelnen Array-Elemente anzeigen.

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

Im folgenden Beispiel sucht `split()` nach null oder mehr Leerzeichen, gefolgt von einem Semikolon, gefolgt von null oder mehr Leerzeichen—und entfernt, wenn gefunden, die Leerzeichen und das Semikolon aus dem String. `nameList` ist das Array, das als Ergebnis von `split()` zurückgegeben wird.

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

Dies protokolliert zwei Zeilen; die erste Zeile protokolliert den ursprünglichen String, und die zweite Zeile protokolliert das resultierende Array.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Begrenzte Anzahl an Teilungen zurückgeben

Im folgenden Beispiel sucht `split()` nach Leerzeichen in einem String und gibt die ersten 3 gefundenen Teilungen zurück.

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
```

### Aufteilen mit einem `RegExp`, um Teile des Trennzeichens im Ergebnis einzuschließen

Wenn `separator` ein regulärer Ausdruck ist, der Klammer-Ausdrücke `( )` enthält, werden übereinstimmende Ergebnisse im Array einbezogen.

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **Hinweis:** `\d` trifft auf die [Zeichenklasse](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) für Ziffern zwischen 0 und 9 zu.

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

- [Polyfill von `String.prototype.split` in `core-js` mit Korrekturen und Implementierung eines modernen Verhaltens wie `Symbol.split` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
