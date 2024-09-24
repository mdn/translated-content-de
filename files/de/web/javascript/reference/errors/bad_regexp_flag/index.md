---
title: "SyntaxError: ungültiges reguläres Ausdrucks-Flag \"x\""
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiges reguläres Ausdrucks-Flag" tritt auf, wenn die Flags in einem regulären Ausdruck irgendein Flag enthalten, das nicht eines der folgenden ist: `d`, `g`, `i`, `m`, `s`, `u`, `v` oder `y`. Sie kann auch auftreten, wenn der Ausdruck mehr als eine Instanz eines gültigen Flags enthält oder wenn die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags zusammen verwendet werden.

## Nachricht

```plain
SyntaxError: Invalid flags supplied to RegExp constructor 'x' (V8-based)
SyntaxError: Invalid regular expression flags (V8-based)
SyntaxError: invalid regular expression flag x (Firefox)
SyntaxError: Invalid flags supplied to RegExp constructor. (Safari)
SyntaxError: Invalid regular expression: invalid flags (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der reguläre Ausdruck enthält ungültige Flags oder gültige Flags wurden mehr als einmal im Ausdruck verwendet.

Die gültigen (erlaubten) Flags sind `d`, `g`, `i`, `m`, `s`, `u`, `v` und `y`. Sie werden ausführlicher beschrieben in [Reguläre Ausdrücke > Erweiterte Suche mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).

Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags schließen sich gegenseitig aus, so dass sie nicht zusammen verwendet werden können. In den Referenzen können Sie nachlesen, welche Unterschiede in ihrem Verhalten bestehen.

## Beispiele

In einem regulären Ausdrucksliteral, das aus einem Muster besteht, das zwischen Schrägstrichen eingeschlossen ist, werden die Flags nach dem zweiten Schrägstrich definiert.
Reguläre Ausdrucks-Flags können getrennt oder gemeinsam in beliebiger Reihenfolge verwendet werden.
Diese Syntax zeigt, wie die Flags mit dem regulären Ausdrucksliteral deklariert werden:

```js
const re = /pattern/flags;
```

Sie können auch in der Konstruktorfunktion des {{jsxref("RegExp")}} Objekts (zweiter Parameter) definiert werden:

```js
const re = new RegExp("pattern", "flags");
```

Hier ist ein Beispiel, das die Verwendung nur korrekter Flags zeigt.

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

Ein Ausdruck mit zwei Schrägstrichen wird als reguläres Ausdrucksliteral interpretiert.
Höchstwahrscheinlich war die Absicht, ein Zeichenfolgenliteral zu erstellen, indem einfache oder doppelte Anführungszeichen wie unten gezeigt verwendet werden:

```js example-good
const obj = {
  url: "/docs/Web",
};
```

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
