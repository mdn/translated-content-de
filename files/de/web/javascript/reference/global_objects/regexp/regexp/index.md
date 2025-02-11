---
title: RegExp()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`RegExp()`**-Konstruktor erstellt {{jsxref("RegExp")}}-Objekte.

Für eine Einführung in reguläre Ausdrücke lesen Sie das Kapitel [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

{{InteractiveExample("JavaScript Demo: RegExp Constructor")}}

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

> **Note:** `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, manchmal jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`

  - : Der Text des regulären Ausdrucks. Dies kann auch ein anderes `RegExp`-Objekt sein.

- `flags` {{optional_inline}}

  - : Falls angegeben, ist `flags` eine Zeichenkette, die die hinzuzufügenden Flags enthält. Alternativ wird, falls ein `RegExp`-Objekt als `pattern` übergeben wird, die Zeichenkette `flags` alle Flags dieses Objekts ersetzen (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann eine beliebige Kombination der folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Generieren Sie Indizes für Teilstring-Übereinstimmungen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Finden Sie alle Übereinstimmungen, anstatt nach der ersten Übereinstimmung zu stoppen.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Bei der Suche werden Unterschiede in Groß- und Kleinschreibung ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandeln Sie Anfangs- und Endbehauptungen (`^` und `$`) als arbeitend über mehrere Zeilen. In anderen Worten, stimmen Sie mit dem Anfang oder Ende _jeder_ Zeile überein (begrenzt durch `\n` oder `\r`), nicht nur mit dem Anfang oder Ende des gesamten Eingabestrings.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Erlaubt es, dass `.` auch Zeilenumbrüche entspricht.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandeln Sie `pattern` als eine Sequenz von Unicode-Codepoints.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade des `u`-Flags, das Mengen-Notation in Zeichenklassen sowie Eigenschaften von Zeichenketten aktiviert.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Passt nur vom durch die Eigenschaft `lastIndex` dieses regulären Ausdrucks im Zielstring angegebenen Index an. Versuch keine Übereinstimmung von späteren Indizes.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen erfüllt sind:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (was normalerweise bedeutet, dass es keine Subklasse ist);
- `flags` ist `undefined`.

In allen anderen Fällen erstellen sowohl der Aufruf von `RegExp()` mit als auch ohne `new` ein neues `RegExp`-Objekt. Falls `pattern` ein regulärer Ausdruck ist, ist die [source](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls ist sie `pattern`, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Falls der Parameter `flags` nicht `undefined` ist, ist die [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) des neuen Objekts der Wert des Parameters; andernfalls entspricht der `flags`-Wert des neuen Objekts `pattern.flags` (falls `pattern` ein regulärer Ausdruck ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein Zeichen außerhalb der erlaubten.

## Beispiele

### Literalsyntax und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: Eine _Literalsyntax_ und einen _Konstruktor_.

- Die _Literalsyntax_ verwendet ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags, nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ benötigt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String mit optionalen Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Es gibt zwei Wege, einen `RegExp`-Objekt durch Kompilieren zu erhalten.

Die Literalsyntax führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zu einer Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als das erste Argument für den `RegExp()`-Konstruktor, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#einen_regulären_ausdruck_aus_dynamischen_eingaben_erstellen).

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

- [Polyfill für viele moderne `RegExp`-Funktionen (`dotAll`, `sticky`-Flags, benannte Gruppen, usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Leitfaden für [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
