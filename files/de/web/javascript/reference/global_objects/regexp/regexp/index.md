---
title: RegExp() Konstruktor
short-title: RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`RegExp()`** Konstruktor erstellt {{jsxref("RegExp")}} Objekte.

Für eine Einführung in reguläre Ausdrücke lesen Sie das Kapitel [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

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

> **Note:** `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch manchmal mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`

  - : Der Text des regulären Ausdrucks. Dies kann auch ein anderes `RegExp` Objekt sein.

- `flags` {{optional_inline}}

  - : Wenn angegeben, ist `flags` ein String, der die hinzuzufügenden Flags enthält. Alternativ, wenn ein `RegExp` Objekt für das `pattern` bereitgestellt wird, ersetzt der `flags`-String alle Flags dieses Objekts (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann jede Kombination der folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Indizes für Teilzeichenfolgen-Matches erzeugen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Alle Übereinstimmungen finden anstatt beim ersten Treffer zu stoppen.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Beim Abgleich werden Unterschiede in der Groß- und Kleinschreibung ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandle Anfangs- und Endaussagen (`^` und `$`) als über mehrere Zeilen arbeitend. Mit anderen Worten, den Anfang oder das Ende _jeder_ Zeile (durch `\n` oder `\r` begrenzt) abgleichen, nicht nur den sehr Anfang oder das Ende der gesamten Eingabezeichenfolge.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Ermöglicht es, dass `.` auch Zeilenumbrüche abgleicht.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandle `pattern` als eine Folge von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade des `u`-Flags, das Set-Notation in Zeichenklassen sowie Eigenschaften von Zeichenfolgen ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Vergleicht nur ab dem Index, der durch die `lastIndex`-Eigenschaft dieses regulären Ausdrucks in der Zielzeichenfolge angegeben ist. Versucht nicht, aus späteren Indizes abzugleichen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle der folgenden Bedingungen zutreffen:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein Regex](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (bedeutet in der Regel, dass es keine Unterklasse ist);
- `flags` ist `undefined`.

In allen anderen Fällen erzeugt der Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp`-Objekt. Wenn `pattern` ein Regex ist, ist die [source](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls ist seine Quelle `pattern` [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags`-Parameter nicht `undefined` ist, ist das neue Objekt [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) der Wert des Parameters; andernfalls sind seine `flags` `pattern.flags` (wenn `pattern` ein Regex ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein Zeichen außerhalb der erlaubten.

## Beispiele

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String von optionalen Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erzeugen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Es gibt zwei Möglichkeiten, einen `RegExp`-Objekt zu kompilieren und zu erhalten.

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zu einer Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument des `RegExp()` Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen](#regulären_ausdruck_aus_dynamischen_eingaben_erstellen) möchten.

### Regulären Ausdruck aus dynamischen Eingaben erstellen

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

- [Polyfill von vielen modernen `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
