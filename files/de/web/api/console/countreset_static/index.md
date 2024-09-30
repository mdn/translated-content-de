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
  - : Ein String. Wenn angegeben, setzt `countReset()` den Zähler für dieses Label auf 0 zurück. Wird es weggelassen, setzt `countReset()` den Standardzähler auf 0 zurück.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Zum Beispiel ergibt der folgende Code:

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

eine Konsolenausgabe, die in etwa so aussieht:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Beachten Sie, dass der Aufruf von `console.countReset()` den Wert des Standardzählers auf Null setzt.

Wenn wir die Variable `user` als `label`-Argument mit dem String "bob" bei der ersten Verwendung von `console.count()` übergeben und den String "alice" bei der zweiten:

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

sehen wir eine Ausgabe wie diese:

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

- [Microsoft Edge-Dokumentation zu `console.countReset()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#countreset)
- [Node.JS-Dokumentation zu `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Google Chrome-Dokumentation zu `console.countReset()`](https://developer.chrome.com/docs/devtools/console/api/#countreset)
