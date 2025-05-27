---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die **`lastIndex`** Daten-Eigenschaft einer {{jsxref("RegExp")}}-Instanz gibt den Index an, bei dem der nächste Suchvorgang beginnen soll.

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

Diese Eigenschaft wird nur gesetzt, wenn die reguläre Ausdrucksinstanz das `g`-Flag zur Angabe einer globalen Suche oder das `y`-Flag zur Angabe einer Sticky-Suche verwendet. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} auf eine gegebene Eingabe aufgerufen wird:

- Wenn `lastIndex` größer ist als die Länge der Eingabe, findet `exec()` keinen Treffer und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner ist als die Länge der Eingabe, versucht `exec()`, die Eingabe ab `lastIndex` zu durchsuchen.
  - Wenn `exec()` einen Treffer findet, wird `lastIndex` auf die Position des Endes des übereinstimmenden Strings in der Eingabe gesetzt.
  - Wenn `exec()` keinen Treffer findet, wird `lastIndex` auf 0 gesetzt.

Andere regex-bezogene Methoden, wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}}, usw., rufen im Hintergrund `exec()` auf, daher haben sie unterschiedliche Auswirkungen auf `lastIndex`. Weitere Informationen finden Sie auf deren jeweiligen Seiten.

## Beispiele

### Verwendung von lastIndex

Betrachten Sie die folgende Sequenz von Anweisungen:

```js
const re = /(hi)?/g;
```

Übereinstimmungen mit dem leeren String.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` zurück mit `lastIndex`, das 2 ist.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element der übereinstimmende String ist. In diesem Fall der leere String, da `lastIndex` 2 war (und noch ist) und `hi` die Länge 2 hat.

### Verwendung von lastIndex mit Sticky-Regexen

Die `lastIndex`-Eigenschaft ist beschreibbar. Sie können sie einstellen, um den regulären Ausdruck bei einem bestimmten Index mit der nächsten Suche beginnen zu lassen.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es stimmt immer genau bei `lastIndex` überein und versucht keine späteren Positionen. Dies ist normalerweise nützlich zum Schreiben von Parsern, wenn Sie nur Token an der aktuellen Position übereinstimmen möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurücksetzen des lastIndex

Das `g`-Flag profitiert ebenfalls vom Setzen von `lastIndex`. Ein häufiges Anwendungsbeispiel ist, wenn der String mitten in einer globalen Suche modifiziert wird. In diesem Fall können wir einen bestimmten Treffer verpassen, wenn der String gekürzt wird. Wir können dies vermeiden, indem wir `lastIndex` zurücksetzen.

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

Versuchen Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu löschen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, da `lastIndex` bereits über dem Index des Links liegt, nachdem der String gekürzt wurde.

> [!WARNING]
> Dieses Beispiel dient nur zur Demonstration. Um mit Markdown umzugehen, sollten Sie wahrscheinlich eine Parsing-Bibliothek anstelle eines Regex verwenden.

### Optimierung der Suche

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, an dem vorherige mögliche Vorkommen ignoriert werden können. Zum Beispiel, statt dies:

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

Dies ist potenziell performanter, da wir das Ausschneiden von Strings vermeiden.

### Vermeidung von Nebeneffekten

Die Nebenwirkungen, die durch `exec()` verursacht werden, können verwirrend sein, insbesondere wenn die Eingabe für jedes `exec()` unterschiedlich ist.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, because lastIndex is non-zero
```

Dies ist noch verwirrender, wenn Sie `lastIndex` manuell modifizieren. Um die Nebenwirkungen zu begrenzen, denken Sie daran, `lastIndex` nach jeder vollständig verarbeiteten Eingabe zurückzusetzen.

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
