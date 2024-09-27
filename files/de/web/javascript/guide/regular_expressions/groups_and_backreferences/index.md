---
title: Gruppen und Rückbezüge
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: 826e8b06d53a6097f26b94300eb39bdd0aba575e
---

{{jsSidebar("JavaScript Guide")}}

Gruppen gruppieren mehrere Muster als Ganzes, und erfassende Gruppen liefern zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck verwendet wird, um mit einem String übereinzustimmen. Rückbezüge beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.

{{EmbedInteractiveExample("pages/js/regexp-groups-backreferences.html")}}

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
          Passt zu <code><em>x</em></code> und
          merkt sich die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> zu
          und merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den Ergebnissen
          erscheinen Übereinstimmungen der erfassenden Gruppen typischerweise in einem Array, dessen Mitglieder
          in der gleichen Reihenfolge wie die linken Klammern in der erfassenden Gruppe
          angeordnet sind. Dies ist normalerweise nur die Reihenfolge der erfassenden Gruppen
          selbst. Dies wird wichtig, wenn erfassende Gruppen verschachtelt sind.
          Übereinstimmungen werden über den Index der Elemente des Ergebnisses
          (<code>[1], …, [n]</code>) oder über die vordefinierten Eigenschaften des
          <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungseinfluss. Wenn Sie den erfassten
          Teilstring nicht zurückrufen müssen, bevorzugen Sie nicht-erfassende Klammern
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
          dennoch
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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Passt zu "x" und speichert es
          unter dem in <code>&#x3C;Name></code> angegebenen Namen in der Gruppen-Eigenschaft der
          zurückgegebenen Übereinstimmungen. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Um beispielsweise die US-Vorwahl aus einer Telefonnummer zu extrahieren,
          könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code>
          erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt zu "x", merkt sich jedoch
          die Übereinstimmung nicht. Der übereinstimmende Teilstring kann nicht aus den
          Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder aus den
          vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>) erinnert werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die <code>i</code>, <code>m</code> und <code>s</code> Flags können in einem Modifier verwendet werden.
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
          der n-ten erfassenden Gruppe im regulären Ausdruck
          übereinstimmt (die linken Klammern werden gezählt). Beispielsweise
          passt <code>/apple(,)\sorange\1/</code> zu "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der den
          <strong>Benannten erfassenden Gruppe</strong> entspricht, der durch
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel passt
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> zu "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Beginn eines Rückbezugs auf eine Benannte erfassende Gruppe
            anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Gruppen

In diesem Beispiel passen wir zwei Wörter in einem strukturierten Format, indem wir erfassende Gruppen verwenden, um sie zu merken. `\w+` passt zu einem oder mehreren Wortzeichen, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen zu finden.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Siehe weitere Beispiele im [erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) Referenz.

### Verwendung benannter Gruppen

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte erfassende Gruppen, um die übereinstimmenden Wörter zu merken. Auf diese Weise können wir auf die übereinstimmenden Wörter basierend auf ihrer Bedeutung zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
}
```

Siehe weitere Beispiele im [benannte erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) Referenz.

### Verwendung von Gruppen und Rückbezügen

In diesem Beispiel passen wir zuerst ein einzelnes oder doppeltes Anführungszeichen mit `['"]`, merken es uns, passen eine beliebige Anzahl von Zeichen mit `.*?` (`*?` ist ein [nicht-gieriger Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir wieder das gemerkte Anführungszeichen mit `\1` passen. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, die zu demselben Typ von Anführungszeichen passt. Das Ergebnis sind daher zwei Zeichenfolgen: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Siehe weitere Beispiele im [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) Referenz.

### Verwendung von Gruppen und Übereinstimmungsindizes

Indem das `d`-Flag bereitgestellt wird, werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede erfasste Gruppe mit dem Originaltext korrelieren möchten - beispielsweise, um Compiler-Diagnosen bereitzustellen.

```js
const code = `function add(x, y) {
  return x + y;
}`;
const functionRegexp =
  /(function\s+)(?<name>[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*)/du;
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
