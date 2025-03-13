---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`lastIndex`** Daten-Eigenschaft einer {{jsxref("RegExp")}} Instanz gibt den Index an, an dem die nächste Übereinstimmung beginnen soll.

{{InteractiveExample("JavaScript Demo: RegExp: lastIndex")}}

```js interactive-example
const regex1 = new RegExp("foo", "g");
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

Diese Eigenschaft wird nur gesetzt, wenn die reguläre Ausdrucksinstanz das `g`-Flag für eine globale Suche oder das `y`-Flag für eine sticky Suche verwendet. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} für eine gegebene Eingabe aufgerufen wird:

- Wenn `lastIndex` größer ist als die Länge der Eingabe, findet `exec()` keine Übereinstimmung und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner ist als die Länge der Eingabe, versucht `exec()`, die Eingabe ab `lastIndex` zu matchen.
  - Wenn `exec()` eine Übereinstimmung findet, wird `lastIndex` auf die Position des Endes des gefundenen Strings in der Eingabe gesetzt.
  - Wenn `exec()` keine Übereinstimmung findet, wird `lastIndex` auf 0 gesetzt.

Andere regexbezogene Methoden, wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}}, etc., rufen `exec()` intern auf, daher haben sie unterschiedliche Auswirkungen auf `lastIndex`. Siehe deren jeweilige Seiten für Details.

## Beispiele

### Verwendung von lastIndex

Betrachten Sie die folgende Abfolge von Befehlen:

```js
const re = /(hi)?/g;
```

Matched den leeren String.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` zurück mit `lastIndex`, gleich 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element der gefundene String ist. In diesem Fall der leere String, weil `lastIndex` 2 war (und immer noch 2 ist) und `hi` die Länge 2 hat.

### Verwendung von lastIndex mit sticky Regexen

Die `lastIndex` Eigenschaft ist beschreibbar. Sie können sie setzen, um den regulären Ausdruck seine nächste Suche an einem bestimmten Index beginnen zu lassen.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es matched immer strikt bei `lastIndex` und versucht nicht, spätere Positionen zu finden. Dies ist meist nützlich für das Schreiben von Parsern, wenn Sie Tokens nur an der aktuellen Position matchen möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurücksetzen von lastIndex

Auch das `g`-Flag profitiert vom Setzen von `lastIndex`. Ein häufiger Anwendungsfall ist, wenn der String in der Mitte einer globalen Suche modifiziert wird. In diesem Fall können wir eine bestimmte Übereinstimmung verpassen, wenn der String verkürzt wird. Wir können dies vermeiden, indem wir `lastIndex` zurücksetzen.

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

Versuchen Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu löschen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, weil `lastIndex` nach der Verkürzung des Strings bereits über dem Index des Links liegt.

> [!WARNING]
> Dieses Beispiel dient nur zur Demonstration. Zur Verarbeitung von Markdown sollten Sie wahrscheinlich stattdessen eine Parser-Bibliothek verwenden.

### Optimierung der Suche

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, an dem vorherige mögliche Vorkommen ignoriert werden können. Zum Beispiel anstelle von:

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

Dies ist potenziell effizienter, da wir das String-Slicing vermeiden.

### Vermeidung von Nebenwirkungen

Die durch `exec()` verursachten Nebenwirkungen können verwirrend sein, insbesondere wenn die Eingabe bei jedem `exec()` unterschiedlich ist.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, because lastIndex is non-zero
```

Dies ist noch verwirrender, wenn Sie `lastIndex` von Hand modifizieren. Um die Nebenwirkungen einzudämmen, denken Sie daran, `lastIndex` zurückzusetzen, nachdem jede Eingabe vollständig verarbeitet wurde.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

Mit etwas Abstraktion können Sie erfordern, dass `lastIndex` vor jedem `exec()`-Aufruf auf einen bestimmten Wert gesetzt wird.

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
