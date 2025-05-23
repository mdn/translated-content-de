---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: bccce51ad7f3fd5e5ff7e4231b6391a000c8faf6
---

{{jsSidebar("JavaScript Leitfaden")}}

Gruppen gruppieren mehrere Muster als Ganzes, und erfassende Gruppen liefern zusätzliche Informationen zu Teilübereinstimmungen, wenn ein regulärer Ausdruck auf eine Zeichenkette angewendet wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.

{{InteractiveExample("JavaScript Demo: RegExp Gruppen und Rückverweise")}}

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Erfassungsgruppe:</strong></a>
          Passt zu <code><em>x</em></code> und
          merkt sich die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> zu
          "foo" in "foo bar" und merkt es sich.
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den Ergebnissen
          befinden sich die Übereinstimmungen zu erfassenden Gruppen typischerweise in einem Array, dessen Mitglieder
          in der gleichen Reihenfolge wie die linken Klammern in der erfassenden Gruppe sind. Dies ist
          normalerweise nur die Reihenfolge der Erfassungsgruppen selbst. Dies
          wird wichtig, wenn erfassende Gruppen verschachtelt sind. Übereinstimmungen werden
          über die Indizes der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder über die vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassungsgruppen haben eine Leistungseinbuße. Wenn Sie das
          gematchte Teilstring nicht abrufen müssen, bevorzugen Sie nicht-erfassende Klammern
          (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch
          immer noch
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
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte Erfassungsgruppe:</strong></a>
          Passt "x" und speichert es in
          der Eigenschaft "groups" der zurückgegebenen Übereinstimmungen unter dem angegebenen
          Namen <code>&#x3C;Name></code>. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Um beispielsweise den US-amerikanischen Vorwahlbereich aus einer Telefonnummer
          zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code> angezeigt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", merkt sich aber nicht
          die Übereinstimmung. Der gematchte Teilstring kann nicht aus den
          Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder über die vordefinierten
          Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikator:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das umschlossene Muster. Nur die <code>i</code>-, <code>m</code>- und <code>s</code>-Flags können in einem Modifikator verwendet werden.
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
          Dabei ist "n" eine positive ganze Zahl. Passt zu demselben Teilstring, der von
          der n-ten Erfassergruppe im regulären Ausdruck
          (gezählt von den linken Klammern) gematcht wurde. Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt zu "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf das letzte Teilstring, das mit der
          <strong>Benannten Erfassergruppe</strong> übereinstimmt, angegeben durch
          <code>&#x3C;Name></code>.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt zu "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Anfang eines Rückverweises auf eine Benannte Erfassergruppe zu
            kennzeichnen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwenden von Gruppen

In diesem Beispiel passen wir zwei Wörter in einem strukturierten Format an, indem wir erfassende Gruppen verwenden, um sie zu merken. `\w+` passt zu einem oder mehreren Wortzeichen, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen zu matchen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Weitere Beispiele finden Sie im [Erfassergruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)-Referenz.

### Verwenden benannter Gruppen

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte Erfassergruppen, um die gematchten Wörter zu merken. So können wir auf die gematchten Wörter anhand ihrer Bedeutung zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

Weitere Beispiele finden Sie im [benannte Erfassergruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)-Referenz.

### Verwenden von Gruppen und Rückverweisen

In diesem Beispiel matchen wir zuerst ein einzelnes oder doppeltes Anführungszeichen mit `['"]`, merken es uns, matchen eine beliebige Anzahl von Zeichen mit `.*?` (`*?` ist ein [nicht-gieriger Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir das gematchte Anführungszeichen erneut mit `\1` matchen. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, die denselbe Typ von Anführungszeichen matcht. Das Ergebnis sind daher zwei Strings: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Weitere Beispiele finden Sie im [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)-Referenz.

### Verwenden von Gruppen und Match-Indizes

Durch Bereitstellung des `d`-Flags werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede gematchte Gruppe mit dem ursprünglichen Text korrelieren möchten — z.B. um Compiler-Diagnosen bereitzustellen.

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
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassergruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte Erfassergruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
