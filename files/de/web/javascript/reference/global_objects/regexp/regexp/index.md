---
title: RegExp()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`RegExp()`**-Konstruktor erstellt {{jsxref("RegExp")}}-Objekte.

Für eine Einführung in reguläre Ausdrücke lesen Sie das [Kapitel über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide).

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## Syntax

```js-nolint
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

> **Note:** `RegExp()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, manchmal mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `pattern`

  - : Der Text des regulären Ausdrucks. Dies kann auch ein anderes `RegExp`-Objekt sein.

- `flags` {{optional_inline}}

  - : Wenn angegeben, ist `flags` ein String, der die hinzuzufügenden Flags enthält. Alternativ, wenn ein `RegExp`-Objekt für das `pattern` geliefert wird, ersetzt der `flags`-String alle Flags dieses Objekts (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann eine Kombination aus den folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Erzeugt Indizes für Teilstring-Übereinstimmungen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Findet alle Übereinstimmungen anstatt nach der ersten Übereinstimmung anzuhalten.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Groß- und Kleinschreibung werden bei der Übereinstimmung ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandelt Anfangs- und End-Assertierungen (`^` und `$`) als über mehrere Zeilen wirkend. Mit anderen Worten, es wird der Anfang oder das Ende _jeder_ Zeile (begrenzt durch `\n` oder `\r`) und nicht nur der Anfang oder das Ende der gesamten Eingabezeichenkette berücksichtigt.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Erlaubt `.` Zeilenumbrüche zu erfassen.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandelt `pattern` als eine Sequenz von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Ein Upgrade des `u`-Flags, das Set-Notation in Zeichnenklassen sowie Eigenschaften von Zeichenketten aktiviert.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Passt nur den Index an, der durch die `lastIndex`-Eigenschaft dieses regulären Ausdrucks in der Zielzeichenkette angegeben ist. Versucht nicht, von späteren Indizes zu passen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen zutreffen:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein Regex](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (bedeutet normalerweise, dass es keine Unterklasse ist);
- `flags` ist `undefined`.

In allen anderen Fällen erzeugt der Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp`-Objekt. Wenn `pattern` ein Regex ist, ist die neue Objekt-[Quelle](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) `pattern.source`; andernfalls ist die Quelle `pattern` [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags`-Parameter nicht `undefined` ist, sind die neuen Objekt-[`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) der Wert dieses Parameters; andernfalls sind die `flags` `pattern.flags` (falls `pattern` ein Regex ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein nicht erlaubtes Zeichen.

## Beispiele

### Literale Notation und Konstruktor

Es gibt zwei Wege, um ein `RegExp`-Objekt zu erstellen: eine _literale Notation_ und einen _Konstruktor_.

- Die _literale Notation_ erfordert ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags nach dem zweiten Schrägstrich.
- Die _Konstruktor-Funktion_ akzeptiert entweder einen String oder ein `RegExp`-Objekt als ersten Parameter und einen String optionaler Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erzeugen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literale Notation
new RegExp("ab+c", "i"); // Konstruktor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht eine effizientere Durchführung von Übereinstimmungen. Es gibt zwei Wege zur Kompilierung und Generierung eines `RegExp`-Objekts.

Die literale Notation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Im Gegensatz dazu führt der Konstruktor des `RegExp`-Objekts, `new RegExp('ab+c')`, zur Laufzeitkompilierung des regulären Ausdrucks.

Verwenden Sie einen String als erstes Argument des `RegExp()`-Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen möchten](#ein_regulärer_ausdruck_aus_dynamischen_eingaben_erstellen).

### Ein regulärer Ausdruck aus dynamischen Eingaben erstellen

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Gibt ['bacon', 'eggs'] zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von vielen modernen `RegExp`-Funktionen (`dotAll`, `sticky`-Flags, benannte Erfassungsgruppen, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
