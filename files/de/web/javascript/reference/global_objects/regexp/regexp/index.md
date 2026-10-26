---
title: RegExp()-Konstruktor
short-title: RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`RegExp()`**-Konstruktor erstellt {{jsxref("RegExp")}}-Objekte.

Eine Einführung in reguläre Ausdrücke finden Sie im [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

{{InteractiveExample("JavaScript Demo: RegExp() constructor")}}

```js interactive-example
const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");

console.log(regex1);
// Expected output: /\w+/

console.log(regex2);
// Expected output: /\w+/

console.log(regex1 === regex2);
// Expected output: false
```

## Syntax

```js-nolint
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

> [!NOTE]
> `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, allerdings manchmal mit unterschiedlichen Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`
  - : Der Text des regulären Ausdrucks. Dies kann auch ein `RegExp`-Objekt sein.

- `flags` {{optional_inline}}
  - : Falls angegeben, ist `flags` eine Zeichenfolge mit den hinzuzufügenden Flags. Wird für `pattern` ein `RegExp`-Objekt übergeben, ersetzt die Zeichenfolge `flags` stattdessen alle Flags dieses Objekts (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann eine beliebige Kombination der folgenden Zeichen enthalten:
    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Erstellt Indizes für Treffer von Teilzeichenfolgen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Findet alle Treffer, statt nach dem ersten Treffer aufzuhören.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Ignoriert bei der Suche nach Treffern Unterschiede in der Groß- und Kleinschreibung.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandelt Prüfungen auf Anfang und Ende (`^` und `$`) so, dass sie über mehrere Zeilen hinweg funktionieren. Das heißt, es wird der Anfang oder das Ende _jeder_ Zeile (getrennt durch `\n` oder `\r`) abgeglichen, nicht nur der Anfang oder das Ende der gesamten Eingabezeichenfolge.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Ermöglicht es `.` , auch Zeilenumbrüche abzugleichen.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandelt `pattern` als Folge von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Eine Erweiterung des Flags `u`, die Mengennotation in Zeichenklassen sowie Eigenschaften von Zeichenfolgen ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Sucht nur ab dem Index in der Zielzeichenfolge nach einem Treffer, der durch die Eigenschaft `lastIndex` dieses regulären Ausdrucks angegeben wird. Es wird nicht versucht, ab späteren Indizes nach einem Treffer zu suchen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen erfüllt sind:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (was normalerweise bedeutet, dass es sich nicht um eine Unterklasse handelt);
- `flags` ist `undefined`.

In allen anderen Fällen erstellt ein Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp`-Objekt. Wenn `pattern` ein regulärer Ausdruck ist, ist die [source](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls ist seine source der [in eine Zeichenfolge umgewandelte](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) Wert von `pattern`. Wenn der Parameter `flags` nicht `undefined` ist, entspricht [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) des neuen Objekts dem Wert dieses Parameters; andernfalls entspricht `flags` dem Wert von `pattern.flags` (sofern `pattern` ein regulärer Ausdruck ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder Zeichen, die nicht zulässig sind.

## Beispiele

### Literalschreibweise und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: die _Literalschreibweise_ und einen _Konstruktor_.

- Bei der _Literalschreibweise_ steht ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt als ersten Parameter entweder eine Zeichenfolge oder ein `RegExp`-Objekt und als zweiten Parameter eine Zeichenfolge mit optionalen Flags entgegen.

Die folgenden drei Ausdrücke erstellen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dadurch können sie effizienter nach Treffern suchen. Es gibt zwei Möglichkeiten, einen regulären Ausdruck zu kompilieren und ein `RegExp`-Objekt zu erhalten.

Bei der Literalschreibweise wird der reguläre Ausdruck kompiliert, wenn der Ausdruck ausgewertet wird. Der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, hingegen bewirkt, dass der reguläre Ausdruck zur Laufzeit kompiliert wird.

Verwenden Sie eine Zeichenfolge als erstes Argument des `RegExp()`-Konstruktors, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen](#einen_regulären_ausdruck_aus_dynamischen_eingaben_erstellen) möchten.

### Einen regulären Ausdruck aus dynamischen Eingaben erstellen

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Returns ['bacon', 'eggs']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für viele moderne `RegExp`-Funktionen (Flags `dotAll` und `sticky`, benannte Erfassungsgruppen usw.) in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
