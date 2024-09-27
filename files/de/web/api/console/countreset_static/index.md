---
title: "console: countReset() statische Methode"
short-title: countReset()
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.countReset()`** statische Methode setzt den Zähler zurück, der mit [`console.count()`](/de/docs/Web/API/Console/count_static) verwendet wird.

## Syntax

```js-nolint
countReset()
countReset(label)
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

Wenn wir die Variable `user` als `label`-Parameter mit dem String "bob" beim ersten Aufruf von `console.count()` und den String "alice" beim zweiten übergeben:

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

Erhalten wir eine Ausgabe wie diese:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

Das Zurücksetzen des Zählers "bob" ändert nur den Wert dieses Zählers. Der Wert von "alice" bleibt unverändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation von Microsoft Edge für `console.countReset()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#countreset)
- [Node.JS-Dokumentation für `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Dokumentation von Google Chrome für `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
