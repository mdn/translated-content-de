---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`lastIndex`** Dateneigenschaft einer {{jsxref("RegExp")}} Instanz gibt den Index an, an dem das nächste Matching beginnen soll.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Wert

Eine nicht-negative Ganzzahl.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Diese Eigenschaft wird nur gesetzt, wenn die reguläre Ausdrucksinstanz das `g`-Flag für eine globale Suche oder das `y`-Flag für eine sticky Suche verwendet. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} auf eine gegebene Eingabe aufgerufen wird:

- Wenn `lastIndex` größer ist als die Länge der Eingabe, wird `exec()` kein Match finden, und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner als die Länge der Eingabe ist, wird `exec()` versuchen, die Eingabe beginnend von `lastIndex` zu matchen.
  - Wenn `exec()` ein Match findet, wird `lastIndex` auf die Position des Endes des übereinstimmenden Strings in der Eingabe gesetzt.
  - Wenn `exec()` kein Match findet, wird `lastIndex` auf 0 gesetzt.

Andere regex-bezogene Methoden, wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}}, etc., rufen intern `exec()` auf, was unterschiedliche Auswirkungen auf `lastIndex` hat. Siehe deren jeweilige Seiten für Details.

## Beispiele

### Nutzung von lastIndex

Betrachten Sie die folgende Abfolge von Anweisungen:

```js
const re = /(hi)?/g;
```

Findet den leeren String.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` zurück mit `lastIndex` gleich 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element der übereinstimmende String ist. In diesem Fall der leere String, weil `lastIndex` 2 war (und immer noch ist) und `hi` die Länge 2 hat.

### Nutzung von lastIndex mit sticky Regexen

Die `lastIndex`-Eigenschaft ist schreibbar. Sie können es setzen, um den Regex an einem bestimmten Index mit der nächsten Suche beginnen zu lassen.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es matcht immer strikt bei `lastIndex` und versucht keine späteren Positionen. Dies ist normalerweise nützlich zum Schreiben von Parsern, wenn Sie Tokens nur an der aktuellen Position matchen möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurückspulen von lastIndex

Das `g`-Flag profitiert ebenfalls vom Setzen von `lastIndex`. Ein häufiger Anwendungsfall ist, wenn der String mitten in einer globalen Suche geändert wird. In diesem Fall können wir ein bestimmtes Match verpassen, wenn der String verkürzt wird. Wir können dies vermeiden, indem wir `lastIndex` zurückspulen.

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

Versuchen Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu löschen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, da `lastIndex` bereits über den Index des Links hinaus ist, nachdem der String verkürzt wurde.

> [!WARNING]
> Dieses Beispiel dient nur der Demonstration. Um mit Markdown umzugehen, sollten Sie wahrscheinlich eine Parsing-Bibliothek anstelle von Regex verwenden.

### Optimierung der Suche

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, an dem vorherige mögliche Vorkommen ignoriert werden können. Zum Beispiel, anstatt dies zu tun:

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

Erwägen Sie dies:

```js
stringPattern.lastIndex = offset;
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset = stringPattern.lastIndex;
```

Dies ist potenziell leistungsfähiger, da wir das Zuschneiden von Strings vermeiden.

### Vermeidung von Nebeneffekten

Die Nebeneffekte, die durch `exec()` verursacht werden, können verwirrend sein, besonders wenn die Eingabe bei jeder `exec()`-Ausführung unterschiedlich ist.

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
