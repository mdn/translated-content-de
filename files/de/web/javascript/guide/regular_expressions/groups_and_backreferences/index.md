---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: 826e8b06d53a6097f26b94300eb39bdd0aba575e
---

{{jsSidebar("JavaScript Guide")}}

Gruppen fassen mehrere Muster als Ganzes zusammen, und erfassende Gruppen liefern zusätzliche Informationen zu Teilübereinstimmungen, wenn ein regulärer Ausdruck verwendet wird, um Übereinstimmungen in einem String zu finden. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im gleichen regulären Ausdruck.

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
          speichert die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> auf "foo" in "foo bar" und
          speichert es.
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere erfassende Gruppen haben. In den
          Ergebnissen werden Übereinstimmungen mit erfassenden Gruppen typischerweise in einem Array gespeichert, dessen Elemente in der gleichen
          Reihenfolge wie die öffnenden Klammern der erfassenden Gruppe sind. Dies
          ist normalerweise einfach die Reihenfolge der erfassenden Gruppen. Dies
          wird wichtig, wenn erfassende Gruppen verschachtelt sind. Übereinstimmungen
          werden durch den Index der Elementergebnisse (<code
            >[1], …, [n]</code
          >) oder über die vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>) abgerufen.
        </p>
        <p>
          Erfassende Gruppen haben einen Leistungsnachteil. Wenn Sie den
          erfassten Teilstring nicht benötigen, ziehen Sie nicht-erfassende Klammern
          vor (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          wird keine Gruppen zurückgeben, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >
          verwenden, um alle Übereinstimmungen zu erzielen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Benannte erfassende Gruppe:</strong></a>
          Passt auf "x" und speichert es unter dem angegebenen Namen
          <code>&#x3C;Name></code> in der Gruppen-Eigenschaft der zurückgegebenen Übereinstimmungen. Die
          spitzen Klammern (<code>&#x3C;</code> und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um den Vorwahlbereich der Vereinigten Staaten aus einer Telefonnummer zu extrahieren,
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
          Passt auf "x" aber speichert die Übereinstimmung nicht. Der erfasste Teilstring kann nicht aus den Ergebniselementen (<code>[1], …, [n]</code>) oder den vordefinierten Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) abgerufen werden.
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
          Dabei ist "n" eine positive ganze Zahl. Passt auf den gleichen Teilstring wie die
          n-te erfassende Gruppe im regulären Ausdruck (zählend ab der linken Klammer). Zum Beispiel,
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
          Ein Rückverweis auf den letzten Teilstring, der auf die
          <strong>Benannte erfasste Gruppe</strong> passt, die durch
          <code>&#x3C;Name></code> angegeben ist.
        </p>
        <p>
          Zum Beispiel,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> passt auf "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>\k</code> wird hier wörtlich verwendet, um den Beginn eines Rückverweises
            auf eine benannte erfassende Gruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Gruppen

In diesem Beispiel passen wir zwei Wörter in einem strukturierten Format, indem wir erfassende Gruppen verwenden, um sie zu speichern. `\w+` passt auf ein oder mehrere Wortzeichen, und die Klammern `()` erzeugen eine erfassende Gruppe. Das `g`-Flag wird verwendet, um alle Vorkommen zu erfassen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Weitere Beispiele finden Sie in der Referenz zu [erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group).

### Verwendung von benannten Gruppen

Dieses Beispiel ist dasselbe wie oben, aber wir verwenden benannte erfassende Gruppen, um die erfassten Wörter stattdessen zu speichern. Auf diese Weise können wir auf die erfassten Wörter nach ihrer Bedeutung zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
}
```

Weitere Beispiele finden Sie in der Referenz zur [benannten erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

### Verwendung von Gruppen und Rückverweisen

In diesem Beispiel passen wir zuerst ein einfaches oder doppeltes Anführungszeichen mit `['"]`, merken es uns, passen eine beliebige Anzahl von Zeichen mit `.*?` (`*?` ist ein [nicht-gieriger Quantifizierer](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)) bis wir wieder das erinnerte Anführungszeichen mit `\1` erreichen. Das `\1` ist ein Rückverweis auf die erste erfassende Gruppe, die auf die gleiche Art von Anführungszeichen passt. Das Ergebnis sind daher zwei Strings: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Weitere Beispiele finden Sie in der Referenz zum [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference).

### Verwendung von Gruppen und Übereinstimmungsindizes

Durch Angabe des `d`-Flags werden die Indizes jeder erfassenden Gruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede erfasste Gruppe mit dem ursprünglichen Text korrelieren möchten — zum Beispiel, um Compiler-Diagnosen bereitzustellen.

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

- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions) für reguläre Ausdrücke
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) zu Zeichengruppen
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) zu Assertions
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) zu Quantifizierern
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Referenz](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu regulären Ausdrücken
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
