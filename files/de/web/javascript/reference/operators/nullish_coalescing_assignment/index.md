---
title: Nullish-Koaleszenz-Zuweisung (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Nullish-Koaleszenz-Zuweisungsoperator (`??=`)**, auch bekannt als **logischer Nullish-Zuweisungsoperator**, wertet nur den rechten Operanden aus und weist den linken zu, wenn der linke Operand {{Glossary("nullish")}} (`null` oder `undefined`) ist.

{{EmbedInteractiveExample("pages/js/expressions-nullish-coalescing-assignment.html")}}

## Syntax

```js-nolint
x ??= y
```

## Beschreibung

Die Nullish-Koaleszenz-Zuweisung [_führt zu einer Kurzschlussauswertung_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), d.h. `x ??= y` ist äquivalent zu `x ?? (x = y)`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung vorgenommen, wenn die linke Seite nicht nullish ist, aufgrund der Kurzschlussauswertung des [Nullish-Koaleszenz-Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing). Zum Beispiel wirft das Folgende keinen Fehler, obwohl `x` `const` ist:

```js
const x = 1;
x ??= 2;
```

Auch würde das Folgende den Setter nicht auslösen:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter aufgerufen");
  },
};

x.value ??= 2;
```

Tatsächlich wird `y` überhaupt nicht ausgewertet, wenn `x` nicht nullish ist.

```js
const x = 1;
x ??= console.log("y ausgewertet");
// Nichts wird geloggt
```

## Beispiele

### Verwendung der Nullish-Koaleszenz-Zuweisung

Sie können den Nullish-Koaleszenz-Zuweisungsoperator verwenden, um Standardwerte zu Objekteigenschaften zuzuweisen. Im Vergleich zur Verwendung von Destructuring und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value) wird der Standardwert bei `??=` auch angewendet, wenn die Eigenschaft den Wert `null` hat.

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish-Koaleszenz-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
