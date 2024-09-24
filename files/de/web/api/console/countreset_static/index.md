---
title: "console: countReset() statische Methode"
short-title: countReset()
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.countReset()`** statische Methode setzt den Zähler zurück, der mit {{domxref("console/count_static", "console.count()")}} verwendet wird.

## Syntax

```js-nolint
countReset()
countReset(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String. Wenn angegeben, setzt `countReset()` den Zähler für dieses Label auf 0 zurück. Falls weggelassen, wird der Standardzähler auf 0 zurückgesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

Sie werden eine Konsolenausgabe in etwa wie folgt sehen:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Beachten Sie, dass der Aufruf von `console.counterReset()` den Wert des Standardzählers auf Null zurücksetzt.

Wenn wir die `user`-Variable als `label`-Argument mit dem String "bob" beim ersten Aufruf von `console.count()` übergeben und den String "alice" beim zweiten:

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

Werden wir eine Ausgabe wie diese sehen:

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
- [Node.JS-Dokumentation für `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Google Chrome-Dokumentation für `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
