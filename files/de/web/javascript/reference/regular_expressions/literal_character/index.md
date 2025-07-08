---
title: "Wörtliches Zeichen: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **wörtliches Zeichen** spezifiziert genau sich selbst, um im Eingabetext überein zu stimmen.

## Syntax

```regex
c
```

### Parameter

- `c`
  - : Ein einzelnes Zeichen, das nicht eines der unten beschriebenen Syntaxzeichen ist.

## Beschreibung

In regulären Ausdrücken können die meisten Zeichen wörtlich erscheinen. Sie sind in der Regel die grundlegendsten Bausteine von Mustern. Hier ist zum Beispiel ein Muster aus dem [Entfernen von HTML-Tags](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags) Beispiel:

```js
const pattern = /<.+?>/g;
```

In diesem Beispiel werden `.`, `+` und `?` als _Syntaxzeichen_ bezeichnet. Sie haben spezielle Bedeutungen in regulären Ausdrücken. Die restlichen Zeichen im Muster (`<` und `>`) sind wörtliche Zeichen. Sie stimmen im Eingabetext mit sich selbst überein: die linken und rechten spitzen Klammern.

Die folgenden Zeichen sind Syntaxzeichen in regulären Ausdrücken und können nicht als wörtliche Zeichen erscheinen:

- [`^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Innerhalb von Zeichenklassen können mehr Zeichen wörtlich erscheinen. Für weitere Informationen siehe die Seite [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Zum Beispiel stimmen `\.` und `[.]` beide mit einem wörtlichen `.` überein. In [v-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gibt es jedoch eine andere Menge von Zeichen, die als Syntaxzeichen reserviert sind. Um am umfassendsten zu sein, ist unten eine Tabelle von ASCII-Zeichen und ob sie in verschiedenen Kontexten mit oder ohne Escape erscheinen dürfen, wobei "✅" bedeutet, dass das Zeichen sich selbst repräsentiert, "❌" bedeutet, dass es einen Syntaxfehler auslöst, und "⚠️" bedeutet, dass das Zeichen gültig ist, aber etwas anderes bedeutet als sich selbst.

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Zeichen</th>
      <th scope="col" colspan="2">Außerhalb von Zeichenklassen im <code>u</code>- oder <code>v</code>-Modus</th>
      <th scope="col" colspan="2">In <code>u</code>-Modus-Zeichenklassen</th>
      <th scope="col" colspan="2">In <code>v</code>-Modus-Zeichenklassen</th>
    </tr>
    <tr>
      <th scope="col">Unescaped</th>
      <th scope="col">Escaped</th>
      <th scope="col">Unescaped</th>
      <th scope="col">Escaped</th>
      <th scope="col">Unescaped</th>
      <th scope="col">Escaped</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>ACEFGHIJKLMN<br>OPQRTUVXYZ_<br>aceghijklmop<br>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;<=>@`~</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>]</code></td>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>()[{}</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>*+?</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>0DSWbdfnrstvw</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td>
    </tr>
    <tr>
      <td><code>B</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>$.</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>✅</td><td>❌</td><td>✅⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
  </tbody>
</table>

<!--
// Die obige Tabelle wurde mit Hilfe von diesem erstellt:
const tbl = {};

for (let i = 32; i < 127; i++) {
  const c = String.fromCharCode(i);
  const res = {};
  const allChars = Array.from({ length: 127 }, (_, i) =>
    String.fromCharCode(i),
  );
  function testProp(prop, cr) {
    try {
      const re = cr();
      const chars = allChars.filter((c) => re.test(c));
      if (chars.length !== 1 || chars[0] !== c) res[prop] = "special";
    } catch {
      res[prop] = "error";
    }
  }
  testProp("outLit", () => new RegExp(`^${c}$`, "u"));
  testProp("uInLit", () => new RegExp(`^[${c}]$`, "u"));
  testProp("vInLit", () => new RegExp(`^[${c}]$`, "v"));
  testProp("outEsc", () => new RegExp(`^\\${c}$`, "u"));
  testProp("uInEsc", () => new RegExp(`^[\\${c}]$`, "u"));
  testProp("vInEsc", () => new RegExp(`^[\\${c}]$`, "v"));
  tbl[c] = res;
}

function groupBy(arr, cb, cb2) {
  const groups = { __proto__: null };
  for (const a of arr) {
    const name = cb(a);
    groups[name] ??= "";
    groups[name] += cb2(a);
  }
  return groups;
}

console.log(
  groupBy(
    Object.entries(tbl),
    (p) =>
      ["outLit", "outEsc", "uInLit", "uInEsc", "vInLit", "vInEsc"]
        .map((k) => {
          switch (p[1][k]) {
            case undefined:
              return "✅";
            case "error":
              return "❌";
            case "special":
              return "⚠️";
          }
        })
        .join(""),
    (p) => p[0],
  ),
);
-->

> [!NOTE]
> Die Zeichen, die sowohl escaped als auch unescaped in v-Modus-Zeichenklassen erscheinen können, sind genau diejenigen, die als "doppelte Interpunktionszeichen" verboten sind. Siehe [v-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) für mehr Informationen.

Wann immer Sie ein Syntaxzeichen wörtlich übereinstimmen möchten, müssen Sie es mit einem Rückwärtsschrägstrich (`\`) [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). Zum Beispiel, um ein wörtliches `*` in einem Muster übereinzustimmen, müssen Sie `\*` im Muster schreiben. Die Verwendung von Syntaxzeichen als wörtliche Zeichen führt entweder zu unerwarteten Ergebnissen oder verursacht Syntaxfehler — zum Beispiel ist `/*/` kein gültiger regulärer Ausdruck, da der Quantifizierer nicht von einem Muster vorangegangen wird. Im [Unicode-unabhängigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können `]`, `{`, und `}` wörtlich erscheinen, wenn es nicht möglich ist, sie als Ende einer Zeichenklasse oder Quantifizierer-Begrenzer zu parsen. Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Reguläre Ausdrücke können nicht mit bestimmten nicht-Syntax wörtlichen Zeichen spezifiziert werden. `/` kann nicht als wörtliches Zeichen in einem regulären Ausdruck-Literal erscheinen, da `/` als Begrenzer des Literals selbst verwendet wird. Sie müssen es als `\/` escapen, wenn Sie ein wörtliches `/` übereinstimmen möchten. Zeilenumbruchzeichen können auch nicht als wörtliche Zeichen in einem regulären Ausdruck-Literal erscheinen, da ein Literal nicht über mehrere Zeilen erstreckt werden kann. Sie müssen stattdessen eine [Zeichen-Entfluchtung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wie `\n` verwenden. Es gibt keine solchen Einschränkungen bei der Verwendung des {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktors, obwohl Zeichen-Literale ihre eigenen Escaping-Regeln haben (zum Beispiel bezeichnet `"\\"` tatsächlich ein einzelnes Rückwärtsschrägstrich-Zeichen, so dass `new RegExp("\\*")` und `/\*/` gleichwertig sind).

Im [Unicode-unabhängigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Muster als Sequenz von [UTF-16-Codierungseinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) interpretiert. Das bedeutet, dass Ersatzpaare tatsächlich zwei wörtliche Zeichen darstellen. Dies führt zu unerwartetem Verhalten, wenn es mit anderen Funktionen kombiniert wird:

```js
/^[😄]$/.test("😄"); // false, because the pattern is interpreted as /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false, because the pattern is interpreted as /^\ud83d\udc04+$/
```

Im Unicode-kompatiblen Modus wird das Muster als Sequenz von Unicode-Codepunkten interpretiert, und Ersatzpaare werden nicht gespalten. Daher sollten Sie immer bevorzugen, das `u`-Flag zu verwenden.

## Beispiele

### Verwendung von wörtlichen Zeichen

Das folgende Beispiel ist aus der [Zeichen-Entfluchtung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes) kopiert. Die Zeichen `a` und `b` sind wörtliche Zeichen im Muster, und `\n` ist ein escaped Zeichen, weil es nicht wörtlich in einem regulären Ausdruck-Literal erscheinen kann.

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichen-Entfluchtung: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
