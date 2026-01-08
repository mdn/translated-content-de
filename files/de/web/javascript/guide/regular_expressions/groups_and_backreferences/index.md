---
title: Gruppen und Rückverweise
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
l10n:
  sourceCommit: e166afc6dccac8ac4810a443c069cdb876cc4b5c
---

Gruppen fassen mehrere Muster als Ganzes zusammen, und erfasste Gruppen liefern zusätzliche Teilübereinstimmungsinformationen, wenn ein regulärer Ausdruck verwendet wird, um mit einem String übereinzustimmen. Rückverweise beziehen sich auf eine zuvor erfasste Gruppe im selben regulären Ausdruck.

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
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Erfassungsgruppe:</strong></a>
          Passt auf <code><em>x</em></code> und
          merkt sich die Übereinstimmung. Zum Beispiel passt <code>/(foo)/</code> und
          merkt sich "foo" in "foo bar".
        </p>
        <p>
          Ein regulärer Ausdruck kann mehrere Erfassungsgruppen haben. In den Ergebnissen
          sind Übereinstimmungen mit Erfassungsgruppen typischerweise in einem Array, dessen Mitglieder in
          derselben Reihenfolge wie die linken Klammern in der Erfassungsgruppe sind. Das ist
          normalerweise nur die Reihenfolge der Erfassungsgruppen selbst. Dies
          wird wichtig, wenn Erfassungsgruppen geschachtelt sind. Auf Übereinstimmungen wird
          mithilfe des Index der Elemente des Ergebnisses (<code
            >[1], …, [n]</code
          >) oder über die vordefinierten Eigenschaften des <code>RegExp</code>-Objekts
          (<code>$1, …, $9</code>) zugegriffen.
        </p>
        <p>
          Erfassungsgruppen haben eine Leistungsminderung. Falls Sie den
          übereinstimmenden Teilstring nicht zurückrufen müssen, bevorzugen Sie Klammern ohne Erfassung
          (siehe unten).
        </p>
        <p>
          <code
            ><a
              href="/de/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          gibt keine Gruppen zurück, wenn das <code>/.../g</code>-Flag gesetzt ist. Sie können jedoch weiterhin
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
          Passt auf "x" und speichert es in der
          Gruppen-Eigenschaft der zurückgegebenen Übereinstimmungen unter dem angegebenen Namen
          <code>&#x3C;Name></code>. Die Klammern (<code>&#x3C;</code>
          und <code>></code>) sind für den Gruppennamen erforderlich.
        </p>
        <p>
          Zum Beispiel, um die Vorwahl der Vereinigten Staaten aus einer Telefonnummer
          zu extrahieren, könnten wir <code>/\((?&#x3C;area>\d\d\d)\)/</code> verwenden. Die
          resultierende Nummer würde unter <code>matches.groups.area</code> erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Ohne Erfassung Gruppe:</strong></a>
          Passt auf "x", merkt sich aber
          die Übereinstimmung nicht. Der übereinstimmende Teilstring kann nicht aus den Elementen des resultierenden
          Arrays (<code>[1], …, [n]</code>) oder über die vordefinierten
          Eigenschaften des <code>RegExp</code>-Objekts (<code>$1, …, $9</code>) aufgerufen werden.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
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
          Dabei ist "n" eine positive Ganzzahl. Passt den gleichen Teilstring, der von
          der n-ten Erfassungsgruppe im regulären Ausdruck
          (zählend ab linken Klammern) übereinstimmt. Zum Beispiel,
          <code>/apple(,)\sorange\1/</code> passt "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Benannter Rückverweis:</strong></a>
          Ein Rückverweis auf den letzten Teilstring, der die
          <strong>Benannte Erfassungsgruppe</strong> übereinstimmt, die durch
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
            den Beginn eines Rückverweises auf eine Benannte Erfassungsgruppe anzuzeigen.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Gruppen

In diesem Beispiel passen wir zwei Wörter in einem strukturierten Format an, indem wir Erfassungsgruppen verwenden, um sie zu speichern. `\w+` entspricht einem oder mehreren Wortzeichen, und die Klammern `()` erstellen eine Erfassungsgruppe. Das `g`-Flag wird verwendet, um alle Vorkommen abzugleichen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

Siehe weitere Beispiele im [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)-Referenz.

### Verwendung benannter Gruppen

Dieses Beispiel ist dasselbe wie das obige, aber wir verwenden benannte Erfassungsgruppen, um die übereinstimmenden Wörter zu speichern. Auf diese Weise können wir auf die übereinstimmenden Wörter anhand ihrer Bedeutungen zugreifen.

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstName>\w+), Last_Name: (?<lastName>\w+)/g;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstName} ${match.groups.lastName}`);
}
```

Siehe weitere Beispiele im [benannte Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)-Referenz.

### Verwendung von Gruppen und Rückverweisen

In diesem Beispiel passen wir zuerst ein einzelnes oder doppeltes Anführungszeichen mit `['"]`, speichern es, passen eine beliebige Anzahl von Zeichen mit `.*?` (`*?` ist ein [nicht-gieriger Quantor](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)), bis wir das gespeicherte Anführungszeichen erneut mit `\1` anpassen. Das `\1` ist ein Rückverweis auf die erste Erfassungsgruppe, die denselben Typ von Anführungszeichen übereinstimmt. Das Ergebnis sind also zwei Strings: `"'"` und `'"'`.

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

Siehe weitere Beispiele im [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)-Referenz.

### Verwendung von Gruppen und Übereinstimmungsindizes

Indem Sie das `d`-Flag bereitstellen, werden die Indizes jeder Erfassungsgruppe zurückgegeben. Dies ist besonders nützlich, wenn Sie jede übereinstimmende Gruppe mit dem ursprünglichen Text in Verbindung bringen — zum Beispiel, um Compiler-Diagnosen bereitzustellen.

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
- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Referenz
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
