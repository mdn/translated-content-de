---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Leitfaden")}}

Gruppen fassen mehrere Muster zusammen, und erfassende Gruppen bieten zusätzliche Submatch-Informationen, wenn ein Regulärer Ausdruck verwendet wird, um gegen einen String zu matchen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben Regulären Ausdruck.

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
          Matcht <code><em>x</em></code> und
          speichert das Match. Zum Beispiel, <code>/(foo)/</code> matcht und
          speichert "foo" in "foo bar".
        </p>
        <p>
          Ein Regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den Ergebnissen
          sind Matches von erfassenden Gruppen typischerweise in einem Array, dessen Mitglieder in derselben Reihenfolge angeordnet sind wie die linken Klammern in der erfassenden Gruppe. Dies ist üblicherweise einfach die Reihenfolge der erfassenden Gruppen selbst. Das wird wichtig, wenn erfassende Gruppen verschachtelt sind. Matches werden über den Index der Elemente des Ergebnisses (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungseinbruch. Wenn Sie den gematchten Substring nicht zurückrufen müssen, bevorzugen Sie nicht-erfassende Klammern (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          wird keine Gruppen zurückgeben, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch weiterhin
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
          Matcht "x" und speichert es in der
          Eigenschaft `groups` der zurückgegebenen Matches unter dem Namen, der
          durch <code>&#x3C;Name></code> angegeben ist. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind erforderlich für den Gruppennamen.
        </p>
        <p>
          Um zum Beispiel den Vorwahlbereich der Vereinigten Staaten aus einer Telefonnummer zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Matcht "x" aber speichert
          das Match nicht. Der gematchte Substring kann nicht aus den Elementen des resultierenden
          Arrays (<code>[1], …, [n]</code>) oder von den vordefinierten Eigenschaften des
          <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) zurückgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifier:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die Flags <code>i</code>, <code>m</code> und <code>s</code> können in einem Modifier verwendet werden.
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
          Wo "n" eine positive Ganzzahl ist. Matcht denselben Substring, der von
          der n-ten erfassenden Gruppe im Regulären Ausdruck gematcht wurde
          (zählend nach links stehenden Klammern). Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> matcht "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Substring, der der
          <strong>Benannten erfassenden Gruppe</strong> entspricht, die durch
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> matcht "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um
            den Beginn eines Rückverweises auf eine Benannte erfassende Gruppe
            zu kennzeichnen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Gruppen

In diesem Beispiel matchen wir zwei Wörter in einem strukturierten Format, indem wir erfassende Gruppen verwenden, um sie zu speichern. `\w+` matcht ein oder mehrere Wortzeichen, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen zu matchen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Sehen Sie mehr Beispiele in der [Erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) Referenz.

### Verwendung von benannten Gruppen

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte erfassende Gruppen, um die gematchten Wörter stattdessen zu speichern. Auf diese Weise können wir auf die gematchten Wörter durch ihre Bedeutung zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

Sehen Sie mehr Beispiele in der [Benannte erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) Referenz.

### Verwendung von Gruppen und Rückverweisen

In diesem Beispiel matchen wir zuerst ein einzelnes oder doppeltes Anführungszeichen mit `['"]`, speichern es, matchen eine beliebige Anzahl von Zeichen mit `.*?` (`*?` ist ein [nicht-gieriger Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir das gespeicherte Anführungszeichen erneut mit `\1` matchen. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, welche denselben Typ von Anführungszeichen matcht. Das Ergebnis sind daher zwei Strings: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Sehen Sie mehr Beispiele in der [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) Referenz.

### Verwendung von Gruppen und Match-Indizes

Indem das `d`-Flag bereitgestellt wird, werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede gematchte Gruppe mit dem Originaltext in Beziehung setzen möchten – zum Beispiel, um Compilerdiagnosen bereitzustellen.

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
