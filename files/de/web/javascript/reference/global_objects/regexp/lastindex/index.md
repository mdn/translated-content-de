---
title: "RegExp: lastIndex"
short-title: lastIndex
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`lastIndex`** Dateneigenschaft einer {{jsxref("RegExp")}}-Instanz gibt den Index an, an dem der nächste Suchvorgang beginnen soll.

{{InteractiveExample("JavaScript Demo: RegExp: lastIndex")}}

```js interactive-example
const regex1 = /foo/g;
const str1 = "table football, foosball";

regex1.test(str1);

console.log(regex1.lastIndex);
// Expected output: 9

regex1.test(str1);

console.log(regex1.lastIndex);
// Expected output: 19
```

## Wert

Eine nicht-negative ganze Zahl.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Diese Eigenschaft wird nur gesetzt, wenn die reguläre Ausdrucksinstanz das `g`-Flag für eine globale Suche oder das `y`-Flag für eine hartnäckige Suche verwendet. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} mit einer bestimmten Eingabe aufgerufen wird:

- Wenn `lastIndex` größer als die Länge der Eingabe ist, wird `exec()` keinen Treffer finden und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner als die Länge der Eingabe ist, versucht `exec()` die Eingabe ab `lastIndex` zu matchen.
  - Wenn `exec()` einen Treffer findet, wird `lastIndex` auf die Position des Endes des übereinstimmenden Strings in der Eingabe gesetzt.
  - Wenn `exec()` keinen Treffer findet, wird `lastIndex` auf 0 gesetzt.

Andere regex-bezogene Methoden, wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}}, usw., rufen intern `exec()` auf, weshalb sie unterschiedliche Auswirkungen auf `lastIndex` haben. Einzelheiten finden Sie auf deren jeweiligen Seiten.

## Beispiele

### Verwendung von lastIndex

Betrachten Sie die folgende Abfolge von Anweisungen:

```js
const re = /(hi)?/g;
```

Übereinstimmung mit dem leeren String.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` mit `lastIndex` gleich 2 zurück.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element der übereinstimmende String ist. In diesem Fall der leere String, weil `lastIndex` 2 war (und immer noch 2 ist) und `hi` eine Länge von 2 hat.

### Verwendung von lastIndex mit hartnäckigen Regexes

Die Eigenschaft `lastIndex` ist beschreibbar. Sie können sie setzen, damit der Regex seine nächste Suche an einem bestimmten Index beginnt.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es wird immer streng an `lastIndex` gematcht und versucht keine späteren Positionen. Dies ist normalerweise nützlich zum Schreiben von Parsern, wenn Sie Tokens nur an der aktuellen Position matchen möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurücksetzen von lastIndex

Auch das `g`-Flag profitiert vom Setzen von `lastIndex`. Ein häufiger Anwendungsfall ist, wenn der String mitten in einer globalen Suche verändert wird. In diesem Fall könnten wir einen bestimmten Treffer verpassen, wenn der String verkürzt wird. Dies können wir vermeiden, indem wir `lastIndex` zurücksetzen.

```js
const mdLinkPattern = /\[[^[\]]+\]\((?<link>[^()\s]+)\)/dg;

function resolveMDLink(line) {
  let match;
  let modifiedLine = line;
  while ((match = mdLinkPattern.exec(modifiedLine))) {
    const originalLink = match.groups.link;
    const resolvedLink = originalLink.replaceAll(/^files|\/index\.md$/g, "");
    modifiedLine =
      modifiedLine.slice(0, match.indices.groups.link[0]) +
      resolvedLink +
      modifiedLine.slice(match.indices.groups.link[1]);
    // Rewind the pattern to the end of the resolved link
    mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length;
  }
  return modifiedLine;
}

console.log(
  resolveMDLink(
    "[`lastIndex`](files/en-us/web/javascript/reference/global_objects/regexp/lastindex/index.md)",
  ),
); // [`lastIndex`](/en-us/web/javascript/reference/global_objects/regexp/lastindex)
console.log(
  resolveMDLink(
    "[`ServiceWorker`](files/en-us/web/api/serviceworker/index.md) and [`SharedWorker`](files/en-us/web/api/sharedworker/index.md)",
  ),
); // [`ServiceWorker`](/en-us/web/api/serviceworker) and [`SharedWorker`](/en-us/web/api/sharedworker)
```

Versuchen Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu löschen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, weil `lastIndex` bereits nach dem Index des Links liegt, nachdem der String verkürzt wurde.

> [!WARNING]
> Dieses Beispiel dient nur der Veranschaulichung. Um mit Markdown umzugehen, sollten Sie wahrscheinlich eher eine Parsing-Bibliothek anstelle von Regex verwenden.

### Optimierung der Suche

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, bei dem frühere mögliche Vorkommen ignoriert werden können. Zum Beispiel, statt dies:

```js
const stringPattern = /"[^"]*"/g;
const input = `const message = "Hello " + "world";`;

// Pretend we've already dealt with the previous parts of the string
let offset = 26;
const remainingInput = input.slice(offset);
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset += nextString.index + nextString.length;
```

Betrachten Sie dies:

```js
stringPattern.lastIndex = offset;
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset = stringPattern.lastIndex;
```

Dies ist potenziell performanter, weil wir das Zerschneiden von Strings vermeiden.

### Vermeidung von Nebeneffekten

Die von `exec()` verursachten Nebeneffekte können verwirrend sein, besonders wenn die Eingabe für jedes `exec()` unterschiedlich ist.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, because lastIndex is non-zero
```

Dies ist noch verwirrender, wenn Sie `lastIndex` manuell ändern. Um die Nebeneffekte einzudämmen, denken Sie daran, `lastIndex` zurückzusetzen, nachdem jede Eingabe vollständig verarbeitet wurde.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

Mit etwas Abstraktion können Sie erfordern, dass `lastIndex` auf einen bestimmten Wert gesetzt wird, bevor jeder `exec()`-Aufruf erfolgt.

```js
function createMatcher(pattern) {
  // Create a copy, so that the original regex is never updated
  const regex = new RegExp(pattern, "g");
  return (input, offset) => {
    regex.lastIndex = offset;
    return regex.exec(input);
  };
}

const matchFoo = createMatcher(/foo/);
console.log(matchFoo("foo bar", 0)[0]); // "foo"
console.log(matchFoo("foo baz", 0)[0]); // "foo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
