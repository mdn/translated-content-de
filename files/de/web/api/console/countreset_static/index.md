---
title: "console: countReset() statische Methode"
short-title: countReset()
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.countReset()`** setzt den Zähler zurück, der mit [`console.count()`](/de/docs/Web/API/console/count_static) verwendet wird.

## Syntax

```js-nolint
console.countReset()
console.countReset(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String. Falls angegeben, setzt `countReset()` den Zähler für dieses Label auf 0 zurück. Bei Auslassung setzt `countReset()` den Standardzähler auf 0 zurück.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Zum Beispiel, gegebenen Code wie diesen:

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

Die Konsolenausgabe wird so aussehen:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

Beachten Sie, dass der Aufruf von `console.counterReset()` den Wert des Standardzählers auf null zurücksetzt.

Wenn wir die Variable `user` als `label` Argument mit dem String "bob" beim ersten Aufruf von `console.count()`, und den String "alice" beim zweiten übergeben:

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

Das Zurücksetzen des Werts des Zählers "bob" ändert nur den Wert dieses Zählers. Der Wert von "alice" bleibt unverändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation zu `console.countReset()` in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#countreset)
- [Node.js-Dokumentation zu `console.countReset()`](https://nodejs.org/docs/latest/api/console.html#consolecountresetlabel)
- [Dokumentation zu `console.countReset()` in Google Chrome](https://developer.chrome.com/docs/devtools/console/api/#countreset)
