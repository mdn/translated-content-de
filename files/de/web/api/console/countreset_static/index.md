---
title: "console: countReset() statische Methode"
short-title: countReset()
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.countReset()`** statische Methode setzt den mit [`console.count()`](/de/docs/Web/API/console/count_static) verwendeten Zähler zurück.

## Syntax

```js-nolint
console.countReset()
console.countReset(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String. Wenn angegeben, setzt `countReset()` den Zähler für dieses Label auf 0 zurück. Wenn weggelassen, setzt `countReset()` den Standardzähler auf 0 zurück.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Zum Beispiel, bei folgendem Code:

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

Die Konsolenausgabe sieht ungefähr so aus:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Beachten Sie, dass der Aufruf von `console.counterReset()` den Wert des Standardzählers auf null zurücksetzt.

Wenn wir die `user` Variable als das `label` Argument mit dem String "bob" beim ersten Aufruf von `console.count()` übergeben, und den String "alice" beim zweiten:

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

Wir werden eine Ausgabe wie diese sehen:

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

- [Dokumentation von Microsoft Edge für `console.countReset()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#countreset)
- [Node.js-Dokumentation für `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Dokumentation von Google Chrome für `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
