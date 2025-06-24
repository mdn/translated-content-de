---
title: RegExp() Konstruktor
short-title: RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`RegExp()`** Konstruktor erstellt {{jsxref("RegExp")}} Objekte.

Für eine Einführung in reguläre Ausdrücke, lesen Sie das Kapitel [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

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

> [!NOTE] > `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, manchmal jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`

  - : Der Text des regulären Ausdrucks. Dies kann auch ein anderes `RegExp` Objekt sein.

- `flags` {{optional_inline}}

  - : Wenn angegeben, ist `flags` ein String, der die hinzuzufügenden Flags enthält. Alternativ wird der `flags`-String, wenn ein `RegExp`-Objekt für das `pattern` geliefert wird, die Flags dieses Objekts ersetzen (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann jede Kombination der folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Erzeugt Indizes für Teilzeichenfolgenübereinstimmungen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Findet alle Übereinstimmungen und stoppt nicht nach der ersten Übereinstimmung.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Beim Abgleich werden Unterschiede der Groß- und Kleinschreibung ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandelt Anfangs- und End-Aussagen (`^` und `$`) als über mehrere Zeilen arbeitend. Mit anderen Worten, den Anfang oder das Ende _jeder_ Zeile zu finden (durch `\n` oder `\r` begrenzt), nicht nur den absoluten Anfang oder das Ende der gesamten Eingabezeichenfolge.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Erlaubt `.` das Matchen von Zeilenumbrüchen.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandelt `pattern` als eine Sequenz von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade des `u`-Flags, das die Set-Notation in Zeichenklassen sowie Eigenschaften von Zeichenfolgen ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Passt nur an dem Index, der durch die `lastIndex` Eigenschaft dieses regulären Ausdrucks in der Zielzeichenfolge angezeigt wird. Versucht nicht, von einem späteren Index zu passen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen zutreffen:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein Regex](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (bedeutet normalerweise, dass es sich nicht um eine Unterklasse handelt);
- `flags` ist `undefined`.

In allen anderen Fällen erstellen sowohl das Aufrufen von `RegExp()` mit als auch ohne `new` ein neues `RegExp` Objekt. Wenn `pattern` ein Regex ist, ist die [source](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls ist seine Quelle `pattern`, [in einen String gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags` Parameter nicht `undefined` ist, sind die [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) des neuen Objekts der Wert des Parameters; andernfalls sind die `flags` des neuen Objekts `pattern.flags` (wenn `pattern` ein Regex ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein beliebiges Zeichen außerhalb der erlaubten.

## Beispiele

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp` Objekt zu erstellen: eine _literale Notation_ und ein _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags, nach dem zweiten Schrägstrich.
- Die _Konstruktorfunktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String optionaler Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Vergleiche effizienter durchzuführen. Es gibt zwei Möglichkeiten, einen `RegExp`-Objekt zu kompilieren und zu erhalten.

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument des `RegExp()` Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben).

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

- [Polyfill von vielen modernen `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
