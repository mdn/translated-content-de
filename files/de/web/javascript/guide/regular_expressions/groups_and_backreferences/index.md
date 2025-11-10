---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen liefern zusätzliche Informationen zu Untermatches, wenn ein regulärer Ausdruck verwendet wird, um eine Zeichenkette abzugleichen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.

{{InteractiveExample("JavaScript Demo: RegExp Groups and backreferences")}}

```js interactive-example
// Groups
const imageDescription = "This image has a resolution of 1440×900 pixels.";
const regexpSize = /(\d+)×(\d+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);
// Expected output: "Width: 1440 / Height: 900."

// Backreferences
const findDuplicates = "foo foo bar";
const regex = /\b(\w+)\s+\1\b/g;
console.log(findDuplicates.match(regex));
// Expected output: Array ["foo foo"]
```

## Typen

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Erfassende Gruppe:</strong></a>
          Passt zu <code><em>x</em></code> und merkt sich das Match. Zum Beispiel
          passt <code>/(foo)/</code> zu "foo" in "foo bar" und merkt sich dies.
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den
          Ergebnissen befinden sich die Matches der erfassenden Gruppen typischerweise in einem Array, dessen Elemente in der gleichen Reihenfolge wie die linken Klammern der erfassenden Gruppe sind. Dies ist normalerweise die Reihenfolge der erfassenden Gruppen selbst. Dies wird wichtig, wenn erfassende Gruppen verschachtelt sind. Matches werden mit dem Index der Elemente des Ergebnisses (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Performance-Nachteil. Wenn Sie den erfassten Unterstring nicht erneut verwenden müssen, bevorzugen Sie nicht-erfassende Klammern (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code> Flag gesetzt ist. Sie können jedoch weiterhin
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >
          verwenden, um alle Matches zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Passt zu "x" und speichert es in der Eigenschaft `groups` der zurückgegebenen Matches unter dem angegebenen Namen <code>&#x3C;Name></code>. Die spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die amerikanische Vorwahl aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", merkt sich das Match aber nicht. Der abgeglichene Unterstring kann nicht aus den Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikator:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die Flags <code>i</code>, <code>m</code> und <code>s</code> können in einem Modifikator verwendet werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Rückverweis:</strong></a>
          Wo "n" eine positive ganze Zahl ist. Passt zu dem gleichen Unterstring, der von der n-ten erfassenden Gruppe im regulären Ausdruck (linke Klammer zählend) abgeglichen wurde. Zum Beispiel, <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf das letzte Teilstring-Match der <strong>benannten erfassenden Gruppe</strong>, die durch <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel, <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Beginn eines Rückverweises auf eine benannte erfassende Gruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Gruppen

In diesem Beispiel gleichen wir zwei Wörter in einem strukturierten Format ab, indem wir erfassende Gruppen verwenden, um sie sich zu merken. `\w+` passt zu einem oder mehreren Wortzeichen, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen abzugleichen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Weitere Beispiele finden Sie im [Referenzdokument zur erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group).

### Verwendung benannter Gruppen

Dieses Beispiel ist dasselbe wie oben, jedoch verwenden wir benannte erfassende Gruppen, um die abgeglichenen Wörter stattdessen zu merken. Auf diese Weise können wir auf die abgeglichenen Wörter nach ihren Bedeutungen zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

Weitere Beispiele finden Sie im [Referenzdokument zur benannten erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

### Verwendung von Gruppen und Rückverweisen

In diesem Beispiel gleichen wir zuerst ein einzelnes oder doppeltes Anführungszeichen mit `['"]` ab, merken es uns, gleichen eine beliebige Anzahl von Zeichen mit `.*?` ab (`*?` ist ein [nicht-gieriger Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir das gemerkte Anführungszeichenzeichen wieder mit `\1` abgleichen. Die `\1` ist ein Rückverweis auf die erste erfassende Gruppe, die denselben Anführungszeichentyp abgleicht. Das Ergebnis sind daher zwei Zeichenfolgen: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Weitere Beispiele finden Sie im [Referenzdokument zum Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

### Verwendung von Gruppen und Match-Indizes

Mit dem `d`-Flag werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede abgeglichene Gruppe mit dem ursprünglichen Text korrelieren möchten — zum Beispiel um Compiler-Diagnosen bereitzustellen.

```js
const code = `function add(x, y) {
  return x + y;
}`;
const functionRegexp =
  /(function\s+)(?<name>[$_\p{ID_Start}][$\p{ID_Continue}]*)/du;
const match = functionRegexp.exec(code);
const lines = code.split("\n");
lines.splice(
  1,
  0,
  " ".repeat(match.indices[1][1] - match.indices[1][0]) +
    "^".repeat(match.indices.groups.name[1] - match.indices.groups.name[0]),
);
console.log(lines.join("\n"));
// function add(x, y) {
//          ^^^
//   return x + y;
// }
```

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Leitfaden zu Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Leitfaden zu Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Leitfaden zu Quantifizierern](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
