---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`lastIndex`** Dateneigenschaft einer {{jsxref("RegExp")}}-Instanz gibt den Index an, an dem der nächste Suchvorgang beginnen soll.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Wert

Eine nicht-negative Ganzzahl.

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Diese Eigenschaft wird nur gesetzt, wenn die reguläre Ausdrucksinstanz das `g`-Flag für eine globale Suche oder das `y`-Flag für eine klebrige Suche verwendet hat. Die folgenden Regeln gelten, wenn {{jsxref("RegExp/exec", "exec()")}} auf einem bestimmten Eingabewert aufgerufen wird:

- Wenn `lastIndex` größer als die Länge der Eingabe ist, wird `exec()` keinen Treffer finden, und `lastIndex` wird auf 0 gesetzt.
- Wenn `lastIndex` gleich oder kleiner als die Länge der Eingabe ist, versucht `exec()`, die Eingabe ab `lastIndex` zu durchsuchen.
  - Wenn `exec()` einen Treffer findet, wird `lastIndex` auf die Position des Endes der übereinstimmenden Zeichenkette in der Eingabe gesetzt.
  - Wenn `exec()` keinen Treffer findet, wird `lastIndex` auf 0 gesetzt.

Andere Methoden, die mit regulären Ausdrücken arbeiten, wie {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}}, usw., rufen `exec()` im Hintergrund auf, sodass sie unterschiedliche Auswirkungen auf `lastIndex` haben. Details finden Sie auf den jeweiligen Seiten.

## Beispiele

### Verwendung von lastIndex

Betrachten Sie die folgende Anweisungssequenz:

```js
const re = /(hi)?/g;
```

Übereinstimmung mit der leeren Zeichenfolge.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["hi", "hi"]` zurück mit `lastIndex` gleich 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Gibt `["", undefined]` zurück, ein leeres Array, dessen nulltes Element die übereinstimmende Zeichenkette ist. In diesem Fall die leere Zeichenkette, weil `lastIndex` 2 war (und immer noch 2 ist) und `hi` eine Länge von 2 hat.

### Verwendung von lastIndex mit klebrigen regulären Ausdrücken

Die `lastIndex`-Eigenschaft ist beschreibbar. Sie können sie setzen, um den regulären Ausdruck die nächste Suche an einem bestimmten Index beginnen zu lassen.

Das `y`-Flag erfordert fast immer das Setzen von `lastIndex`. Es stimmt immer streng bei `lastIndex` überein und versucht keine späteren Positionen. Dies ist normalerweise nützlich beim Schreiben von Parsern, wenn Sie nur an der aktuellen Position übereinstimmende Token möchten.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Zurücksetzen von lastIndex

Auch das `g`-Flag profitiert von der Einstellung von `lastIndex`. Ein häufiges Anwendungsbeispiel ist, wenn die Zeichenkette in der Mitte einer globalen Suche geändert wird. In diesem Fall könnten wir einen bestimmten Treffer verpassen, wenn die Zeichenkette verkürzt wird. Wir können dies verhindern, indem wir `lastIndex` zurücksetzen.

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

Versuchen Sie, die Zeile `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` zu löschen und das zweite Beispiel auszuführen. Sie werden feststellen, dass der zweite Link nicht korrekt ersetzt wird, da der `lastIndex` bereits über dem Index des Links liegt, nachdem die Zeichenkette verkürzt wurde.

> [!WARNING]
> Dieses Beispiel dient nur zur Demonstration. Um mit Markdown umzugehen, sollten Sie wahrscheinlich eine Parser-Bibliothek anstelle von Regex verwenden.

### Suchoptimierung

Sie können die Suche optimieren, indem Sie `lastIndex` auf einen Punkt setzen, an dem vorherige mögliche Vorkommen ignoriert werden können. Zum Beispiel, anstatt dies zu tun:

```js
const stringPattern = /"[^"]*"/g;
const input = `const message = "Hello " + "world";`;

// Stellen Sie sich vor, wir haben bereits die vorherigen Teile der Zeichenkette bearbeitet
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

Dies ist potenziell effizienter, da wir das Slicen der Zeichenkette vermeiden.

### Vermeiden von Nebeneffekten

Die durch `exec()` verursachten Nebeneffekte können verwirrend sein, insbesondere wenn die Eingaben für jedes `exec()` unterschiedlich sind.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, weil lastIndex ungleich null ist
```

Dies ist noch verwirrender, wenn Sie `lastIndex` manuell ändern. Um die Nebeneffekte einzudämmen, denken Sie daran, `lastIndex` zurückzusetzen, nachdem jede Eingabe vollständig verarbeitet wurde.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

Mit etwas Abstraktion können Sie verlangen, dass `lastIndex` auf einen bestimmten Wert gesetzt wird, bevor jeder `exec()`-Aufruf stattfindet.

```js
function createMatcher(pattern) {
  // Erstellen Sie eine Kopie, damit der ursprüngliche Regex nie aktualisiert wird
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
