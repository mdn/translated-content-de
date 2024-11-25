---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: a53528ac568364c33c348d64bba264a4e01f236d
---

{{jsSidebar("JavaScript Guide")}}

Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen bieten zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck verwendet wird, um mit einem String übereinzustimmen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.

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
          Passt auf <code><em>x</em></code> und
          merkt sich die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den Ergebnissen
          befinden sich Übereinstimmungen mit erfassenden Gruppen typischerweise in einem Array, dessen Mitglieder
          in der gleichen Reihenfolge sind wie die linken Klammern in der erfassenden Gruppe. Dies ist normalerweise
          einfach die Reihenfolge der erfassenden Gruppen selbst. Dies wird wichtig, wenn erfassende Gruppen
          verschachtelt sind. Übereinstimmungen werden über den Index der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder über die vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben ein Leistungseinbuße. Wenn Sie den übereinstimmenden
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
          gibt keine Gruppen zurück, wenn der <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch
          weiterhin
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
          Passt auf "x" und speichert es in
          der Eigenschaft "groups" der zurückgegebenen Übereinstimmungen unter dem durch
          <code>&#x3C;Name></code> angegebenen Namen. Die spitzen Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die US-Vorwahl aus einer Telefonnummer zu extrahieren,
          könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Nicht-erfassende Gruppe:</strong></a>
          Passt auf "x", merkt sich
          jedoch die Übereinstimmung nicht. Der übereinstimmende Teilstring kann weder von den
          Elementen des resultierenden Arrays (<code>[1], …, [n]</code>) noch von den
          vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) zurückgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Modifizierer:</strong></a>
          Aktiviert oder deaktiviert die angegebenen Flags nur für das eingeschlossene Muster. Nur die Flags <code>i</code>, <code>m</code> und <code>s</code> können in einem Modifizierer verwendet werden.
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
          Wo "n" eine positive ganze Zahl ist. Passt auf den gleichen Teilstring, der durch
          die n-te erfassende Gruppe im regulären Ausdruck
          erfasst wurde (linke Klammern zählend). Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt auf "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der mit der
          <strong>benannten erfassenden Gruppe</strong> übereinstimmt, die durch
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt auf "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier buchstäblich verwendet, um
            den Beginn eines Rückverweises auf eine benannte erfassende Gruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gruppen verwenden

In diesem Beispiel vergleichen wir zwei Wörter in einem strukturierten Format, indem wir erfassende Gruppen verwenden, um sie zu merken. `\w+` passt auf ein oder mehrere Wortzeichen, und die Klammern `()` erstellen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen zu erfassen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Siehe weitere Beispiele in der [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)-Referenz.

### Benannte Gruppen verwenden

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte erfassende Gruppen, um die übereinstimmenden Wörter stattdessen zu merken. Auf diese Weise können wir die übereinstimmenden Wörter nach ihrer Bedeutung abrufen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

Siehe weitere Beispiele in der [benannten erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)-Referenz.

### Gruppen und Rückverweise verwenden

In diesem Beispiel erfassen wir zuerst ein einfaches oder doppeltes Anführungszeichen mit `['"]`, merken es uns, erfassen eine beliebige Anzahl von Zeichen mit `.*?` (`*?` ist ein [nicht gieriger Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir das gemerkte Anführungszeichen mit `\1` erneut erfassen. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, die auf denselben Typ von Anführungszeichen passt. Das Ergebnis wird daher zwei Strings sein: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Siehe weitere Beispiele in der [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)-Referenz.

### Gruppen und Übereinstimmungsindizes verwenden

Durch Bereitstellung des `d`-Flags werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede erfasste Gruppe mit dem ursprünglichen Text korrelieren – beispielsweise, um Compiler-Diagnosen bereitzustellen.

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
- [Assertionen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
