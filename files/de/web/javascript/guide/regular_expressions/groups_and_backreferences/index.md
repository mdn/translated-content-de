---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("JavaScript Leitfaden")}}

Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen liefern zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck verwendet wird, um eine Zeichenkette zu überprüfen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.

{{InteractiveExample("JavaScript Demo: RegExp Groups and backreferences")}}

```js interactive-example
// Groups
const imageDescription = "This image has a resolution of 1440×900 pixels.";
const regexpSize = /([0-9]+)×([0-9]+)/;
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
          Passt zu <code><em>x</em></code> und merkt sich die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> zu und merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen enthalten. In den Ergebnissen befinden sich Übereinstimmungen mit erfassenden Gruppen typischerweise in einem Array, dessen Mitglieder in der gleichen Reihenfolge wie die linken Klammern der erfassenden Gruppen geordnet sind. Dies ist normalerweise genau die Reihenfolge der erfassenden Gruppen selbst. Dies wird wichtig, wenn erfassende Gruppen geschachtelt sind. Übereinstimmungen werden mit dem Index der Elemente des Ergebnisses (<code>[1], …, [n]</code>) oder über die vordefinierten Eigenschaften des Objekts <code>RegExp</code> (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungseinbruch. Wenn Sie das erfasste Teilmuster nicht speichern müssen, sollten Sie bevorzugt nicht-erfassende Klammern verwenden (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Allerdings können Sie dennoch
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >
          verwenden, um alle Übereinstimmungen zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&lt;Name&gt;x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Passt zu "x" und speichert es in der Eigenschaft <code>groups</code> der zurückgegebenen Übereinstimmungen unter dem mit <code>&lt;Name&gt;</code> angegebenen Namen. Die spitzen Klammern (<code>&lt;</code> und <code>&gt;</code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die Vorwahl der Vereinigten Staaten aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&lt;area&gt;\d\d\d)\)/</code> verwenden. Die resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", speichert die Übereinstimmung aber nicht. Das übereinstimmende Teilmuster kann weder aus den Elementen des Ergebnisarrays (<code>[1], …, [n]</code>) noch aus den vordefinierten Eigenschaften des Objekts <code>RegExp</code> (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikator:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das umschlossene Muster. Nur die Flags <code>i</code>, <code>m</code> und <code>s</code> können in einem Modifikator verwendet werden.
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
          Dabei ist "n" eine positive ganze Zahl. Passt zum gleichen Teilstring wie die n-te erfassende Gruppe im regulären Ausdruck (zählt die linken Klammern). Zum Beispiel passt <code>/apple(,)\sorange\1/</code> zu "apple, orange," in "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&lt;Name&gt;</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den zuletzt mit der <strong>benannten erfassenden Gruppe</strong> übereinstimmenden Teilstring, der mit <code>&lt;Name&gt;</code> angegeben wurde.
        </p>
        <p>
          Zum Beispiel, <code>/(?&lt;title&gt;\w+), yes \k&lt;title&gt;/</code> passt zu "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
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

In diesem Beispiel werden zwei Wörter in einem strukturierten Format durch Verwendung von erfassenden Gruppen zusammengeführt. `\w+` passt zu einem oder mehreren Wortzeichen, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen zu erfassen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Weitere Beispiele finden Sie in der Referenz zur [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group).

### Verwendung von benannten Gruppen

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte erfassende Gruppen, um die passenden Wörter anhand ihrer Bedeutung zugänglich zu machen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

Weitere Beispiele finden Sie in der Referenz zur [benannten erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

### Verwendung von Gruppen und Rückverweisen

In diesem Beispiel wird zuerst ein einzelnes oder doppeltes Anführungszeichen mit `['"]` abgeglichen, es wird gespeichert, eine beliebige Anzahl von Zeichen mit `.*?` abgeglichen (`*?` ist ein [nicht-gieriger Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis das gespeicherte Anführungszeichen erneut mit `\1` abgeglichen wird. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, der den gleichen Typ von Anführungszeichen abgleicht. Das Ergebnis sind daher zwei Strings: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Weitere Beispiele finden Sie in der Referenz zum [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

### Verwendung von Gruppen und Übereinstimmungsindizes

Durch Angabe des `d`-Flags werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede erfasste Gruppe mit dem ursprünglichen Text abgleichen möchten – beispielsweise, um Compiler-Diagnosen bereitzustellen.

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
