---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`lastIndex`** Daten-Eigenschaft einer {{jsxref("RegExp")}}-Instanz gibt den Index an, an dem der nächste Treffer starten soll.

{{InteractiveExample("JavaScript Demo: RegExp.lastIndex")}}

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

Eine nicht-negative Ganzzahl.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Diese Eigenschaft wird nur gesetzt, wenn die verwendete reguläre Ausdrucksinstanz das `g`-Flag für eine globale Suche oder das `y`-Flag für eine sticky-Suche verwendet. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} für eine gegebene Eingabe aufgerufen wird:

- Wenn `lastIndex` größer als die Länge der Eingabe ist, findet `exec()` keinen Treffer, und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner als die Länge der Eingabe ist, versucht `exec()` die Eingabe von `lastIndex` aus zu durchsuchen.
  - Wenn `exec()` einen Treffer findet, wird `lastIndex` auf die Position des Endes der Übereinstimmung innerhalb der Eingabe gesetzt.
  - Wenn `exec()` keinen Treffer findet, wird `lastIndex` auf 0 gesetzt.

Andere methodenbezogene Regex-Funktionen wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}} usw. rufen intern `exec()` auf, weshalb `lastIndex` unterschiedlich beeinflusst wird. Weitere Informationen finden Sie auf den jeweiligen Seiten.

## Beispiele

### Verwendung von lastIndex

Betrachten Sie die folgende Abfolge von Anweisungen:

```js
const re = /(hi)?/g;
```

Findet die leere Zeichenkette.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` zurück, mit `lastIndex` gleich 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element die entsprechende Übereinstimmung ist. In diesem Fall die leere Zeichenkette, da `lastIndex` 2 war (und immer noch ist) und `hi` die Länge 2 hat.

### Verwendung von lastIndex mit sticky-RegExes

Die `lastIndex`-Eigenschaft ist beschreibbar. Sie können sie setzen, um den regulären Ausdruck an einer bestimmten Position mit der nächsten Suche beginnen zu lassen.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es passt nur strikt an der `lastIndex`-Position und versucht keine späteren Positionen. Dies ist oft nützlich für das Schreiben von Parsern, wenn Sie Tokens nur an der aktuellen Position abgleichen möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurücksetzen von lastIndex

Das `g`-Flag profitiert ebenfalls vom Setzen von `lastIndex`. Ein häufiger Anwendungsfall ist, wenn die Zeichenkette während einer globalen Suche geändert wird. In diesem Fall können wir ein bestimmtes Match verpassen, wenn die Zeichenkette verkürzt wird. Dies können wir vermeiden, indem wir `lastIndex` zurücksetzen.

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

Versuchen Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu entfernen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, da `lastIndex` bereits hinter dem Index des Links liegt, nachdem die Zeichenkette verkürzt wurde.

> [!WARNING]
> Dieses Beispiel dient nur der Veranschaulichung. Um Markdown zu verarbeiten, sollten Sie stattdessen wahrscheinlich eine Parsing-Bibliothek verwenden.

### Optimierung der Suche

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, an dem frühere mögliche Vorkommen ignoriert werden können. Beispielsweise, anstelle von:

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

Erwägen Sie Folgendes:

```js
stringPattern.lastIndex = offset;
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset = stringPattern.lastIndex;
```

Dies ist potenziell leistungsfähiger, da wir das Zuschneiden von Zeichenketten vermeiden.

### Vermeidung von Seiteneffekten

Die Seiteneffekte, die durch `exec()` verursacht werden, können verwirrend sein, besonders wenn die Eingabe für jedes `exec()` unterschiedlich ist.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, because lastIndex is non-zero
```

Dies ist noch verwirrender, wenn Sie `lastIndex` manuell verändern. Um die Seiteneffekte einzudämmen, denken Sie daran, `lastIndex` zurückzusetzen, nachdem jede Eingabe vollständig verarbeitet wurde.

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
