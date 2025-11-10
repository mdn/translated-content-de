---
title: "SyntaxError: Das Schlüsselwort new kann nicht mit einer optionalen Verkettung verwendet werden"
slug: Web/JavaScript/Reference/Errors/Bad_new_optional
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "das Schlüsselwort new kann nicht mit einer optionalen Verkettung verwendet werden" tritt auf, wenn der Konstruktor eines {{jsxref("Operators/new", "new")}}-Ausdrucks eine [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn eine optionale Verkettung zwischen dem Konstruktor und der geklammerten Argumentliste vorhanden ist.

## Nachricht

```plain
SyntaxError: Invalid optional chain from new expression (V8-based)
SyntaxError: new keyword cannot be used with an optional chain (Firefox)
SyntaxError: Cannot call constructor in an optional chain. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu erzeugen. Die erste Möglichkeit ist, wenn der Konstruktor-Ausdruck eine optionale Verkettungsausdruck ist, wie hier:

```js-nolint example-bad
new Intl?.DateTimeFormat();
Number?.[parseMethod]`Hello, world!`;
```

Die zweite Möglichkeit ist, wenn `?.` zwischen dem Konstruktor und der Argumentliste auftritt, wie hier:

```js-nolint
new Intl.DateTimeFormat?.();
```

Ein optionales `new` ist speziell verboten, weil seine Syntax kompliziert ist (`new` mit und ohne Argumente) und das Ergebnis unklar ist (es wäre der einzige Fall, in dem `new` nicht zu einem Objektwert ausgewertet wird). Sie müssen die optionale Verkettung in ihre grundlegende Bedingung übersetzen (sehen Sie sich die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen an).

```js
const result =
  Intl.DateTimeFormat === null || Intl.DateTimeFormat === undefined
    ? undefined
    : new Intl.DateTimeFormat();
```

Denken Sie daran, dass die optionale Verkettung nur innerhalb einer geklammerten Einheit kurzschließt. Wenn Sie Ihren Konstruktor-Ausdruck klammern, wird die optionale Verkettung keinen Fehler verursachen, da jetzt der Konstruktor nicht mehr kurzschließt und das Ergebnis klar ist (der Konstruktor wird `undefined` produzieren und dann die `new`-Ausdruck verursachen, um einen Fehler zu werfen).

```js-nolint
new (Intl?.DateTimeFormat)(); // Throws if Intl?.DateTimeFormat is undefined
```

Dies ist jedoch sowieso etwas unsinnig, da die optionale Verkettung Fehler innerhalb der Eigenschafts-Zugriffs-Kette verhindert, dann aber garantiert einen Fehler bei der Verwendung von `new` erzeugt. Sie möchten wahrscheinlich immer noch eine Bedingungsprüfung verwenden.

Beachten Sie, dass die optionale Verkettung nur als Konstruktor-Ausdruck verboten ist. Sie können die optionale Verkettung in der Argumentliste verwenden oder die optionale Verkettung auf den gesamten `new`-Ausdruck anwenden.

```js example-good
new Intl.DateTimeFormat(navigator?.languages);
new Intl.DateTimeFormat().resolvedOptions?.();
```

Beachten Sie, dass es nicht nötig ist, `?.` auf dem `new`-Ausdruck selbst zu verwenden: `new a()?.b`, weil `new` garantiert einen nicht-nullish Objektwert erzeugt.

## Siehe auch

- {{jsxref("Operators/new", "new")}}
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Ursprüngliche Diskussion darüber, ob "optional new" erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/22)
