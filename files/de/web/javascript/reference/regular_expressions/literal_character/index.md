---
title: "Literales Zeichen: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Ein **literales Zeichen** gibt an, dass genau dieses Zeichen im Eingabetext gefunden werden soll.

## Syntax

```regex
c
```

### Parameter

- `c`
  - : Ein einzelnes Zeichen, das nicht zu den unten beschriebenen Syntaxzeichen gehört.

## Beschreibung

In regulären Ausdrücken können die meisten Zeichen literal vorkommen. Sie bilden normalerweise die einfachsten Bausteine von Mustern. Hier ist beispielsweise ein Muster aus dem Beispiel zum [Entfernen von HTML-Tags](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags):

```js
const pattern = /<.+?>/g;
```

In diesem Beispiel werden `.`, `+` und `?` als _Syntaxzeichen_ bezeichnet. Sie haben in regulären Ausdrücken eine besondere Bedeutung. Die übrigen Zeichen im Muster (`<` und `>`) sind literale Zeichen. Sie entsprechen sich selbst im Eingabetext: der öffnenden und der schließenden spitzen Klammer.

Die folgenden Zeichen sind in regulären Ausdrücken Syntaxzeichen und können daher nicht als literale Zeichen vorkommen:

- [`^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [`*`, `+`, `?`, `{`, `}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Innerhalb von Zeichenklassen können weitere Zeichen literal vorkommen. Weitere Informationen finden Sie auf der Seite über [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Beispielsweise entsprechen sowohl `\.` als auch `[.]` einem literalen `.`. In [Zeichenklassen im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) ist jedoch eine andere Gruppe von Zeichen als Syntaxzeichen reserviert. Die folgende Tabelle bietet eine möglichst vollständige Übersicht über ASCII-Zeichen und darüber, ob sie in verschiedenen Kontexten mit oder ohne Escape-Zeichen vorkommen dürfen. „✅“ bedeutet, dass das Zeichen für sich selbst steht, „❌“ bedeutet, dass es einen Syntaxfehler auslöst, und „⚠️“ bedeutet, dass das Zeichen gültig ist, aber eine andere Bedeutung hat.

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Zeichen</th>
      <th scope="col" colspan="2">Außerhalb von Zeichenklassen im <code>u</code>- oder <code>v</code>-Modus</th>
      <th scope="col" colspan="2">In Zeichenklassen im <code>u</code>-Modus</th>
      <th scope="col" colspan="2">In Zeichenklassen im <code>v</code>-Modus</th>
    </tr>
    <tr>
      <th scope="col">Ohne Escape-Zeichen</th>
      <th scope="col">Mit Escape-Zeichen</th>
      <th scope="col">Ohne Escape-Zeichen</th>
      <th scope="col">Mit Escape-Zeichen</th>
      <th scope="col">Ohne Escape-Zeichen</th>
      <th scope="col">Mit Escape-Zeichen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>CEFGHIJKLMN<br>OPQRTUVXY_<br>aceghijklmop<br>quxy</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;&lt;=&gt;@`~</code></td>
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
      <td><code>ABZz</code></td>
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
// The table above is created with the help of this:
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
> Die Zeichen, die in Zeichenklassen im `v`-Modus sowohl mit als auch ohne Escape-Zeichen vorkommen können, sind genau diejenigen, die als „doppelte Satzzeichen“ verboten sind. Weitere Informationen finden Sie unter [Zeichenklassen im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

Wenn Sie ein Syntaxzeichen literal finden möchten, müssen Sie es mit einem Backslash (`\`) [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). Um beispielsweise ein literales `*` zu finden, müssen Sie `\*` in das Muster schreiben. Die Verwendung von Syntaxzeichen als literale Zeichen führt entweder zu unerwarteten Ergebnissen oder zu Syntaxfehlern. Beispielsweise ist `/*/` kein gültiger regulärer Ausdruck, weil dem Quantifizierer kein Muster vorausgeht. Im [nicht Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können `]`, `{` und `}` literal vorkommen, wenn sie nicht als Ende einer Zeichenklasse oder als Begrenzungszeichen eines Quantifizierers interpretiert werden können. Dies ist eine [veraltete Syntax zur Wahrung der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

Bestimmte Zeichen, die keine Syntaxzeichen sind, können in Literalen regulärer Ausdrücke nicht als literale Zeichen angegeben werden. `/` kann außerhalb von Zeichenklassen nicht als literales Zeichen in einem Literal eines regulären Ausdrucks vorkommen, weil `/` als Begrenzungszeichen des Literals selbst verwendet wird. Wenn Sie ein literales `/` finden möchten, müssen Sie es dort als `\/` escapen. Innerhalb einer Zeichenklasse kann `/` ohne Escape-Zeichen vorkommen, wie in `/[/]/` (sofern das `v`-Flag nicht gesetzt ist). Auch Zeilenendezeichen können nicht als literale Zeichen in einem Literal eines regulären Ausdrucks vorkommen, weil sich ein Literal nicht über mehrere Zeilen erstrecken kann. Verwenden Sie stattdessen ein [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wie `\n`. Diese Einschränkungen für Begrenzungs- und Zeilenendezeichen gelten nicht bei Verwendung des {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktors. Allerdings haben String-Literale eigene Escape-Regeln (beispielsweise bezeichnet `"\\"` tatsächlich ein einzelnes Backslash-Zeichen, sodass `new RegExp("\\*")` und `/\*/` gleichwertig sind).

Im [nicht Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Muster als Folge von [UTF-16-Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) interpretiert. Das bedeutet, dass Surrogatpaare tatsächlich zwei literale Zeichen darstellen. In Kombination mit anderen Funktionen führt dies zu unerwartetem Verhalten:

```js
/^[😄]$/.test("😄"); // false, because the pattern is interpreted as /^[\ud83d\ude04]$/
/^😄+$/.test("😄😄"); // false, because the pattern is interpreted as /^\ud83d\ude04+$/
```

Im Unicode-bewussten Modus wird das Muster als Folge von Unicode-Codepunkten interpretiert und Surrogatpaare werden nicht aufgeteilt. Daher sollten Sie vorzugsweise immer das `u`-Flag verwenden.

## Beispiele

### Literale Zeichen verwenden

Das folgende Beispiel stammt aus [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes). Die Zeichen `a` und `b` sind literale Zeichen im Muster. `\n` ist ein Zeichen-Escape, weil es in einem Literal eines regulären Ausdrucks nicht literal vorkommen kann.

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

- Leitfaden zu [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
