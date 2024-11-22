---
title: "console: countReset() statische Methode"
short-title: countReset()
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.countReset()`** statische Methode setzt den Zähler zurück, der mit [`console.count()`](/de/docs/Web/API/Console/count_static) verwendet wurde.

## Syntax

```js-nolint
console.countReset()
console.countReset(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String. Wenn angegeben, setzt `countReset()` den Zähler für dieses Label auf 0 zurück. Wenn weggelassen, setzt `countReset()` den Standardzähler auf 0 zurück.

### Rückgabewert

Es gibt keinen Rückgabewert ({{jsxref("undefined")}}).

## Beispiele

Zum Beispiel, bei einem Code wie diesem:

```js
function greet(user) {
  console.count();
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.count();
console.countReset();
```

Die Konsolenausgabe wird ungefähr so aussehen:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Beachten Sie, dass der Aufruf von `console.counterReset()` den Wert des Standardzählers auf null zurücksetzt.

Wenn wir die Variable `user` als `label`-Argument mit dem String "bob" beim ersten Aufruf von `console.count()` und den String "alice" beim zweiten übergeben:

```js
function greet(user) {
  console.count(user);
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.countReset("bob");
console.count("alice");
```

werden wir eine Ausgabe wie diese sehen:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

Das Zurücksetzen des Wertes des Zählers "bob" ändert nur den Wert dieses Zählers. Der Wert von "alice" bleibt unverändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.countReset()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#countreset)
- [Node.js-Dokumentation für `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Google Chrome-Dokumentation für `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
