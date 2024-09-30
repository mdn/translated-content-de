---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`lastIndex`** Dateneigenschaft einer {{jsxref("RegExp")}}-Instanz gibt den Index an, von dem aus der nächste Suchvorgang gestartet werden soll.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Wert

Eine nicht negative ganze Zahl.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Diese Eigenschaft wird nur gesetzt, wenn die reguläre Ausdrucksinstanz das `g`-Flag für eine globale Suche oder das `y`-Flag für eine direkte Übereinstimmung verwendet. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} auf eine gegebene Eingabe aufgerufen wird:

- Wenn `lastIndex` größer ist als die Länge der Eingabe, findet `exec()` keine Übereinstimmung und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner als die Länge der Eingabe ist, versucht `exec()`, die Eingabe ab `lastIndex` zu matchen.
  - Wenn `exec()` eine Übereinstimmung findet, wird `lastIndex` auf die Position des Endes des übereinstimmenden String in der Eingabe gesetzt.
  - Wenn `exec()` keine Übereinstimmung findet, wird `lastIndex` auf 0 gesetzt.

Andere Methoden, die mit regulären Ausdrücken arbeiten, wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}} usw., rufen `exec()` im Hintergrund auf, sodass sie unterschiedliche Auswirkungen auf `lastIndex` haben. Siehe deren jeweilige Seiten für Details.

## Beispiele

### Verwenden von lastIndex

Betrachten Sie die folgende Abfolge von Anweisungen:

```js
const re = /(hi)?/g;
```

Übereinstimmungen mit dem leeren String.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` zurück mit `lastIndex` gleich 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element der Übereinstimmungs-String ist. In diesem Fall der leere String, da `lastIndex` 2 war (und immer noch 2 ist) und `hi` die Länge 2 hat.

### Verwenden von lastIndex mit direkten regulären Ausdrücken

Die `lastIndex`-Eigenschaft ist beschreibbar. Sie können sie setzen, um das nächste Suchen des regulären Ausdrucks bei einem bestimmten Index zu starten.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es stimmt immer genau bei `lastIndex` überein und versucht keine späteren Positionen. Dies ist normalerweise beim Schreiben von Parsern nützlich, wenn Sie Tokens nur an der aktuellen Position matchen möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurücksetzen von lastIndex

Das `g`-Flag profitiert ebenfalls vom Setzen von `lastIndex`. Ein häufiger Anwendungsfall ist, wenn der String während einer globalen Suche geändert wird. In diesem Fall könnten wir eine bestimmte Übereinstimmung verpassen, wenn der String verkürzt wird. Dies kann vermieden werden, indem `lastIndex` zurückgesetzt wird.

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

Probieren Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu löschen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, weil der `lastIndex` bereits über dem Index des Links liegt, nachdem der String verkürzt wurde.

> [!WARNING]
> Dieses Beispiel dient nur zur Demonstration. Um mit Markdown umzugehen, sollten Sie wahrscheinlich eine Parsing-Bibliothek anstelle von regulären Ausdrücken verwenden.

### Optimieren der Suche

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, an dem vorherige mögliche Vorkommen ignoriert werden können. Zum Beispiel, anstelle von:

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

Dies ist potenziell leistungsfähiger, da wir das Aufteilen von Strings vermeiden.

### Vermeiden von Nebeneffekten

Die Nebeneffekte, die durch `exec()` verursacht werden, können verwirrend sein, insbesondere wenn die Eingabe für jedes `exec()` unterschiedlich ist.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, because lastIndex is non-zero
```

Dies ist noch verwirrender, wenn Sie `lastIndex` manuell verändern. Um die Nebeneffekte einzuschränken, denken Sie daran, `lastIndex` zurückzusetzen, nachdem jede Eingabe vollständig verarbeitet wurde.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

Mit etwas Abstraktion können Sie erzwingen, dass `lastIndex` vor jedem `exec()`-Aufruf auf einen bestimmten Wert gesetzt wird.

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
