---
title: RegExp() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`RegExp()`**-Konstruktor erstellt {{jsxref("RegExp")}}-Objekte.

Für eine Einführung in reguläre Ausdrücke lesen Sie das Kapitel über [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

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

> **Note:** `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, manchmal jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`

  - : Der Text des regulären Ausdrucks. Dies kann auch ein anderes `RegExp`-Objekt sein.

- `flags` {{optional_inline}}

  - : Falls angegeben, ist `flags` ein String, der die hinzuzufügenden Flags enthält. Alternativ, wenn ein `RegExp`-Objekt für das `pattern` bereitgestellt wird, ersetzt der `flags`-String die Flags dieses Objekts (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann jede Kombination der folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Generieren Sie Indizes für Übereinstimmungen von Unterstrings.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Finden Sie alle Übereinstimmungen, anstatt nach der ersten Übereinstimmung zu stoppen.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Beim Abgleich werden Unterschiede in der Groß- und Kleinschreibung ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandeln Sie Anfangs- und Ende-Annahmen (`^` und `$`) als über mehrere Zeilen arbeitend. Mit anderen Worten, treffen Sie den Anfang oder das Ende _jeder_ Zeile (abgegrenzt durch `\n` oder `\r`), nicht nur den ganz Anfang oder das Ende des gesamten Eingabestrings.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Erlaubt `.` das Matchen von Zeilenumbrüchen.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandeln Sie `pattern` als eine Sequenz von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade für das `u`-Flag, das Set-Notation in Zeichenklassen sowie Eigenschaften von Zeichenfolgen ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Übereinstimmung nur ab dem durch die `lastIndex`-Eigenschaft dieses regulären Ausdrucks angegebenen Index im Zielstring. Es wird nicht versucht, von späteren Indizes zu matchen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen erfüllt sind:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein RegEx](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (meistens bedeutet das, es ist keine Unterklasse);
- `flags` ist `undefined`.

In allen anderen Fällen erstellt der Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp`-Objekt. Wenn `pattern` ein RegEx ist, ist die neue [Quelle](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des Objekts `pattern.source`; andernfalls ist ihre Quelle `pattern` [gezwungen zu einem String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags`-Parameter nicht `undefined` ist, sind die neuen [Flags](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) des Objekts der Wert des Parameters; andernfalls sind seine `flags` `pattern.flags` (wenn `pattern` ein RegEx ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein außerhalb der erlaubten Zeichen liegendes Zeichen.

## Beispiele

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und ein _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags, nach dem zweiten Schrägstrich.
- Die _Konstrukturfunktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String aus optionalen Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Vorgang ermöglicht es ihnen, Übereinstimmungen effizienter durchzuführen. Es gibt zwei Möglichkeiten, einen `RegExp`-Objekt zu kompilieren und zu erhalten.

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als das erste Argument des `RegExp()`-Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischer Eingabe erstellen möchten](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben).

### Erstellen eines regulären Ausdrucks aus dynamischen Eingaben

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

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky`-Flags, benannte Erfassungsgruppen usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
