---
title: RegExp() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`RegExp()`** Konstruktor erstellt {{jsxref("RegExp")}} Objekte.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

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

  - : Ist `flags` angegeben, handelt es sich um eine Zeichenkette, die die hinzuzufügenden Flags enthält. Alternativ wird, wenn ein `RegExp` Objekt für das `pattern` bereitgestellt wird, die `flags` Zeichenkette alle Flags dieses Objekts ersetzen (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann jede Kombination der folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Erzeugt Indizes für Teilstring-Übereinstimmungen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Findet alle Übereinstimmungen, anstatt nach der ersten Übereinstimmung zu stoppen.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Bei der Übereinstimmung werden Unterschiede bei der Groß- und Kleinschreibung ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandelt Anfangs- und Endfeststellungen (`^` und `$`) als auf mehrere Zeilen anwendbar. Mit anderen Worten, es wird der Anfang oder das Ende _jeder_ Zeile (abgegrenzt durch `\n` oder `\r`) und nicht nur der Anfang oder das Ende des gesamten Eingabestrings überprüft.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Ermöglicht, dass `.` auch Zeilenumbrüche umfasst.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandelt `pattern` als eine Sequenz von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade zum `u` Flag, das Mengen-Notation in Zeichenklassen sowie Eigenschaften von Zeichenfolgen ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Übereinstimmungen erfolgen nur ab dem durch die `lastIndex` Eigenschaft dieses regulären Ausdrucks angegebenen Index im Zielstring. Es wird nicht versucht, von späteren Indizes aus zu finden.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle der folgenden Bedingungen zutreffen:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein regex](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (was normalerweise bedeutet, dass es keine Unterklasse ist);
- `flags` ist `undefined`.

In allen anderen Fällen erzeugt der Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp` Objekt. Ist `pattern` ein regex, ist die [source](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls wird die Quelle von `pattern` [als Zeichenkette umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags` Parameter nicht `undefined` ist, ist das neue Objekt [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) der Wert des Parameters; andernfalls sind die `flags` von `pattern.flags` (wenn `pattern` ein regex ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein Zeichen außerhalb der erlaubten.

## Beispiele

### Wörtliche Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp` Objekt zu erstellen: eine _wörtliche Notation_ und einen _Konstruktor_.

- Die _wörtliche Notation_ verwendet ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt als ersten Parameter entweder einen String oder ein `RegExp` Objekt und als zweiten Parameter einen String optionaler Flags.

Die folgenden drei Ausdrücke erstellen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, effizienter Übereinstimmungen zu finden. Es gibt zwei Möglichkeiten, einen `RegExp` Objekt zu kompilieren und zu erhalten.

Die wörtliche Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp` Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument für den `RegExp()` Konstruktor, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen](#einen_regulären_ausdruck_aus_dynamischen_eingaben_erstellen) möchten.

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

- [Polyfill vieler moderner `RegExp` Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
