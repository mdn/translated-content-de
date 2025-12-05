---
title: RegExp() Konstruktor
short-title: RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`RegExp()`** Konstruktor erstellt {{jsxref("RegExp")}} Objekte.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

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
> `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch manchmal mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`
  - : Der Text des regulären Ausdrucks. Dies kann auch ein anderes `RegExp`-Objekt sein.

- `flags` {{optional_inline}}
  - : Wenn angegeben, ist `flags` ein String, der die hinzuzufügenden Flags enthält. Alternativ ersetzt der `flags`-String alle Flags des gelieferten `RegExp`-Objekts als `pattern` (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann eine beliebige Kombination der folgenden Zeichen enthalten:
    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Erzeugt Indizes für Teilstring-Übereinstimmungen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Findet alle Übereinstimmungen anstelle des Stopps nach der ersten Übereinstimmung.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Unterschiede in der Groß-/Kleinschreibung werden beim Abgleich ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandelt Anfangs- und Endprüfungen (`^` und `$`) als über mehrere Zeilen hinweg wirkend. Anders ausgedrückt, es wird der Anfang oder das Ende _jeder_ Zeile (durch `\n` oder `\r` begrenzt) abgeglichen, nicht nur der sehr Anfang oder das Ende der gesamten Eingabe.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Erlaubt es `.` Zeilenumbrüche zu matchen.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandelt `pattern` als eine Folge von Unicode-Codepunkte.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade des `u`-Flags, das Set-Notation in Zeichenklassen sowie Zeichenketteneigenschaften ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Passt nur ab dem durch die `lastIndex`-Eigenschaft dieses regulären Ausdrucks im Zielstring angegebenen Index. Versucht nicht, von späteren Indizes aus abzugleichen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen zutreffen:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein Regex](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (meistens bedeutet dies, dass es keine Unterklasse ist);
- `flags` ist `undefined`.

In allen anderen Fällen erzeugt der Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp`-Objekt. Wenn `pattern` ein Regex ist, ist die [source](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls ist seine Quelle `pattern` [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags`-Parameter nicht `undefined` ist, ist das neue Objekt [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) der Wert des Parameters; andernfalls ist `flags` des Objekts `pattern.flags` (falls `pattern` ein Regex ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einer der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck analysiert werden.
    - `flags` enthält wiederholte Zeichen oder ein nicht erlaubtes Zeichen.

## Beispiele

### Literale Notation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags, nach dem zweiten Schrägstrich.
- Die _Konstruierungsfunktion_ nimmt entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String von optionalen Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen den gleichen regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, effizienter Übereinstimmungen zu erzielen. Es gibt zwei Möglichkeiten, ein `RegExp`-Objekt zu kompilieren und zu erhalten.

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Andererseits führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als das erste Argument des `RegExp()`-Konstruktors, wenn Sie [den regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#erstellen_eines_regulären_ausdrucks_aus_dynamischen_eingaben).

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

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
