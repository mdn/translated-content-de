---
title: "SyntaxError: new keyword cannot be used with an optional chain"
slug: Web/JavaScript/Reference/Errors/Bad_new_optional
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die JavaScript-Ausnahme "`new`-Schlüsselwort kann nicht mit einer optionalen Kette verwendet werden" tritt auf, wenn der Konstruktor eines {{jsxref("new")}}-Ausdrucks eine [optionale Kette](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ist oder wenn sich eine optionale Kette zwischen dem Konstruktor und der geklammerten Argumentliste befindet.

## Nachricht

```plain
SyntaxError: Invalid optional chain from new expression (V8-based)
SyntaxError: new keyword cannot be used with an optional chain (Firefox)
SyntaxError: Cannot call constructor in an optional chain. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt zwei Möglichkeiten, diesen Fehler zu verursachen. Die erste Möglichkeit tritt auf, wenn der Konstruktor-Ausdruck eine optionale Ketten-Ausdruck ist, wie folgt:

```js-nolint example-bad
new Intl?.DateTimeFormat();
Number?.[parseMethod]`Hello, world!`;
```

Die zweite Möglichkeit ist, wenn `?.` zwischen dem Konstruktor und der Argumentenliste auftritt, wie folgt:

```js-nolint
new Intl.DateTimeFormat?.();
```

Optionales `new` ist speziell verboten, weil seine Syntax kompliziert ist (`new` mit und ohne Argumente) und das Ergebnis unklar ist (es wäre der einzige Fall, in dem `new` nicht zu einem Objektwert evaluiert wird). Sie müssen die optionale Verkettung in ihre zugrundeliegende Bedingung umwandeln (siehe [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) für weitere Informationen).

```js
const result =
  Intl.DateTimeFormat === null || Intl.DateTimeFormat === undefined
    ? undefined
    : new Intl.DateTimeFormat();
```

Denken Sie daran, dass die optionale Verkettung nur innerhalb einer geklammerten Einheit kurzgeschlossen wird. Wenn Sie Ihren Konstruktor-Ausdruck klammern, verursacht die optionale Verkettung keinen Fehler, da der Konstruktor nun nicht kurzgeschlossen wird und das Ergebnis klar ist (der Konstruktor wird `undefined` erzeugen und dann wird der `new`-Ausdruck einen Fehler auslösen).

```js-nolint
new (Intl?.DateTimeFormat)(); // Throws if Intl?.DateTimeFormat is undefined
```

Dies ist jedoch ohnehin etwas unsinnig, da optionale Verkettung Fehler innerhalb der Eigenschaften-Access-Kette verhindert, dann aber garantiert einen Fehler beim Aufruf von `new` erzeugt. Sie möchten wahrscheinlich immer noch eine bedingte Prüfung verwenden.

Beachten Sie, dass optionale Verkettung nur als Konstruktor-Ausdruck verboten ist. Sie können optionale Verkettung innerhalb der Argumentenliste verwenden oder die optionale Verkettung auf den gesamten `new`-Ausdruck anwenden.

```js example-good
new Intl.DateTimeFormat(navigator?.languages);
new Intl.DateTimeFormat().resolvedOptions?.();
```

Beachten Sie, dass es nicht erforderlich ist, `?.` auf den `new`-Ausdruck selbst zu verwenden: `new a()?.b`, da `new` garantiert einen nicht-nullischen Objektwert produziert.

## Siehe auch

- {{jsxref("new")}}
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Originaldiskussion darüber, ob "optional new" erlaubt sein sollte](https://github.com/tc39/proposal-optional-chaining/issues/22)
