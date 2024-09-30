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

  - : Wenn angegeben, ist `flags` ein String, der die hinzuzufügenden Flags enthält. Alternativ, wenn ein `RegExp` Objekt für das `pattern` bereitgestellt wird, ersetzt der `flags` String die Flags dieses Objekts (und `lastIndex` wird auf `0` zurückgesetzt).

    `flags` kann jede Kombination der folgenden Zeichen enthalten:

    - [`d` (indices)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Erzeugt Indizes für übereinstimmende Teilzeichenfolgen.
    - [`g` (global)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Findet alle Übereinstimmungen, anstatt nach der ersten Übereinstimmung zu stoppen.
    - [`i` (ignore case)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Beim Abgleichen werden Groß-/Kleinschreibungsunterschiede ignoriert.
    - [`m` (multiline)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Behandelt Anfangs- und Endaussagen (`^` und `$`) als über mehrere Zeilen hinweg. Mit anderen Worten, es wird der Anfang oder das Ende _jeder_ Zeile (abgegrenzt durch `\n` oder `\r`) abgeglichen, nicht nur das absolute Anfang oder Ende der gesamten Eingabezeichenfolge.
    - [`s` (dotAll)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Erlaubt, dass `.` auch Zeilenumbrüche abgleicht.
    - [`u` (unicode)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Behandelt `pattern` als Folge von Unicode-Codepunkten.
    - [`v` (unicodeSets)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Eine Erweiterung des `u` Flags, die Mengennotation in Zeichensatzklassen sowie Eigenschaften von Strings ermöglicht.
    - [`y` (sticky)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Vergleicht nur ab dem durch die `lastIndex`-Eigenschaft dieses regulären Ausdrucks im Zielstring angegebenen Index. Versucht nicht, von späteren Indizes abzugleichen.

### Rückgabewert

`RegExp(pattern)` gibt `pattern` direkt zurück, wenn alle folgenden Bedingungen erfüllt sind:

- `RegExp()` wird ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen;
- [`pattern` ist ein regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (was normalerweise bedeutet, dass es sich nicht um eine Unterklasse handelt);
- `flags` ist `undefined`.

In allen anderen Fällen erstellt der Aufruf von `RegExp()` mit oder ohne `new` ein neues `RegExp` Objekt. Wenn `pattern` ein regulärer Ausdruck ist, ist die [Quelle](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) des neuen Objekts `pattern.source`; andernfalls ist die Quelle `pattern`, [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn der `flags` Parameter nicht `undefined` ist, ist das neue Objekt [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) der Wert des Parameters; andernfalls sind die `flags` des Objekts `pattern.flags` (wenn `pattern` ein regulärer Ausdruck ist).

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `pattern` kann nicht als gültiger regulärer Ausdruck geparst werden.
    - `flags` enthält wiederholte Zeichen oder ein Zeichen außerhalb der erlaubten.

## Beispiele

### Literalnotation und Konstruktor

Es gibt zwei Möglichkeiten, ein `RegExp` Objekt zu erstellen: Eine _Literalnotation_ und ein _Konstruktor_.

- Die _Literalnotation_ nimmt ein Muster zwischen zwei Schrägstrichen, gefolgt von optionalen Flags, nach dem zweiten Schrägstrich.
- Die _Konstruktormethode_ nimmt entweder einen String oder ein `RegExp` Objekt als ersten Parameter und einen String optionaler Flags als zweiten Parameter.

Die folgenden drei Ausdrücke erstellen denselben regulären Ausdruck:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Bevor reguläre Ausdrücke verwendet werden können, müssen sie kompiliert werden. Dieser Prozess ermöglicht es ihnen, Vergleiche effizienter auszuführen. Es gibt zwei Möglichkeiten, zu kompilieren und ein `RegExp` Objekt zu erhalten.

Die Literalnotation führt zur Kompilierung des regulären Ausdrucks, wenn der Ausdruck ausgewertet wird. Der Konstruktor des `RegExp` Objekts, `new RegExp('ab+c')`, führt hingegen zur Kompilierung des regulären Ausdrucks zur Laufzeit.

Verwenden Sie einen String als erstes Argument des `RegExp()` Konstruktors, wenn Sie den [regulären Ausdruck aus dynamischen Eingaben erstellen](#einen_regulären_ausdruck_aus_dynamischen_eingaben_erstellen) möchten.

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

- [Polyfill vieler moderner `RegExp`-Funktionen (`dotAll`, `sticky` Flags, benannte Erfassungsgruppen usw.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
