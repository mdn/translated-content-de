---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: 826e8b06d53a6097f26b94300eb39bdd0aba575e
---

{{jsSidebar("JavaScript Guide")}}

Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen liefern zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck zum Abgleich eines Strings verwendet wird. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.

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
          Stimmt mit <code><em>x</em></code> überein und merkt sich die Übereinstimmung. Zum Beispiel stimmt <code>/(foo)/</code> mit "foo" in "foo bar" überein und merkt sich dies.
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den Ergebnissen sind Übereinstimmungen mit erfassenden Gruppen typischerweise in einem Array enthalten, dessen Mitglieder in derselben Reihenfolge sind wie die linken Klammern in der erfassenden Gruppe. Dies ist normalerweise nur die Reihenfolge der erfassenden Gruppen selbst. Dies wird wichtig, wenn erfassende Gruppen geschachtelt sind. Übereinstimmungen werden über den Index der Elemente des Ergebnisses (<code>[1], …, [n]</code>) oder über die vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungseinbruch. Wenn Sie den Teilstring der Übereinstimmung nicht zurückholen müssen, bevorzugen Sie nicht-erfassende Klammern (siehe unten).
        </p>
        <p>
          <code><a href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.prototype.match()</a></code>
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch weiterhin
          <code><a href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">String.prototype.matchAll()</a></code>
          verwenden, um alle Übereinstimmungen zu erhalten.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Stimmt mit "x" überein und speichert es in der Eigenschaft groups der zurückgegebenen Übereinstimmungen unter dem angegebenen Namen <code>&#x3C;Name></code>. Die spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um den USA-Vorwahlcode aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Stimmt mit "x" überein, merkt sich die Übereinstimmung aber nicht. Der übereinstimmende Teilstring kann nicht aus den Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) oder aus den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) zurückgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifikatoren:</strong></a>
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
          Dabei ist "n" eine positive Ganzzahl. Stimmt mit demselben Teilstring überein, der von der n-ten erfassenden Gruppe im regulären Ausdruck übereingestimmt wurde (zählt die linken Klammern). Zum Beispiel stimmt <code>/apple(,)\sorange\1/</code> mit "apple, orange," in "apple, orange, cherry, peach" überein.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der mit der spezifizierten <strong>benannten erfassenden Gruppe</strong> übereinstimmt
          <code>&#x3C;Name></code>.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> stimmt mit "Sir, yes Sir" in "Do you copy? Sir, yes Sir!" überein.
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

In diesem Beispiel stimmen wir zwei Wörter in einem strukturierten Format ab, indem wir erfassende Gruppen verwenden, um sie sich zu merken. `\w+` stimmt mit einem oder mehreren Wortzeichen überein, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen abzugleichen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Sehen Sie mehr Beispiele in der Referenz zur [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group).

### Verwendung benannter Gruppen

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte erfassende Gruppen, um sich die übereinstimmenden Wörter zu merken. Auf diese Weise können wir auf die übereinstimmenden Wörter nach ihrer Bedeutung zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
}
```

Sehen Sie mehr Beispiele in der Referenz zur [benannten erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

### Verwendung von Gruppen und Rückverweisen

In diesem Beispiel stimmen wir zunächst ein einzelnes oder doppeltes Anführungszeichen mit `['"]` ab, merken es uns, stimmen mit einer beliebigen Anzahl von Zeichen mit `.*?` überein (`*?` ist ein [nicht-gieriger Quantifikator](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir das gemerkte Anführungszeichen wieder mit `\1` abgleichen. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, die mit demselben Anführungszeichentyp übereinstimmt. Das Ergebnis sind daher zwei Strings: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Sehen Sie mehr Beispiele in der Referenz zum [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

### Verwendung von Gruppen und Übereinstimmungsindizes

Indem Sie das `d`-Flag bereitstellen, werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede übereinstimmende Gruppe mit dem Originaltext in Beziehung setzen – beispielsweise, um Compiler-Diagnosen bereitzustellen.

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Handbuch
- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Handbuch
- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Handbuch
- [Quantifikatoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Handbuch
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
