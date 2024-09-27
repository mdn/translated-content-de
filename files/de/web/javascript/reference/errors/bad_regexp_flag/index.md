---
title: 'SyntaxError: ungültiges reguläres Ausdruck-Flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiges reguläres Ausdruck-Flag" tritt auf, wenn die Flags in einem regulären Ausdruck ein Flag enthalten, das nicht zu den folgenden gehört: `d`, `g`, `i`, `m`, `s`, `u`, `v` oder `y`. Sie kann auch ausgelöst werden, wenn der Ausdruck mehr als ein Vorkommen eines gültigen Flags enthält oder wenn die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags zusammen verwendet werden.

## Nachricht

```plain
SyntaxError: Invalid flags supplied to RegExp constructor 'x' (V8-based)
SyntaxError: Invalid regular expression flags (V8-based)
SyntaxError: invalid regular expression flag x (Firefox)
SyntaxError: Invalid flags supplied to RegExp constructor. (Safari)
SyntaxError: Invalid regular expression: invalid flags (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der reguläre Ausdruck enthält ungültige Flags, oder gültige Flags wurden mehr als einmal im Ausdruck verwendet.

Die gültigen (erlaubten) Flags sind `d`, `g`, `i`, `m`, `s`, `u`, `v` und `y`. Sie werden im Detail unter [Reguläre Ausdrücke > Erweiterte Suche mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) eingeführt.

Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags sind gegenseitig ausschließend, daher können sie nicht zusammen verwendet werden. Sie können die Referenzen lesen, um die Unterschiede in ihrem Verhalten zu verstehen.

## Beispiele

In einem regulären Ausdruckliteral, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, werden die Flags nach dem zweiten Schrägstrich definiert.
Reguläre Ausdruck-Flags können separat oder zusammen in beliebiger Reihenfolge verwendet werden.
Diese Syntax zeigt, wie die Flags mit dem regulären Ausdruckliteral deklariert werden:

```js
const re = /pattern/flags;
```

Sie können auch in der Konstruktorfunktion des {{jsxref("RegExp")}} Objekts (zweiter Parameter) definiert werden:

```js
const re = new RegExp("pattern", "flags");
```

Hier ist ein Beispiel, das nur die korrekten Flags zeigt.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

Unten ist ein Beispiel, das die Verwendung einiger ungültiger Flags `b`, `a` und `r` zeigt:

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

Der folgende Code ist falsch, da `W`, `e` und `b` keine gültigen Flags sind.

```js example-bad
const obj = {
  url: /docs/Web,
};

// SyntaxError: invalid regular expression flag "W"
```

Ein Ausdruck, der zwei Schrägstriche enthält, wird als reguläres Ausdruckliteral interpretiert.
Höchstwahrscheinlich war die Absicht, ein Stringliteral zu erstellen, mit einfachen oder doppelten Anführungszeichen, wie unten gezeigt:

```js example-good
const obj = {
  url: "/docs/Web",
};
```

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
