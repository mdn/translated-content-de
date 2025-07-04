---
title: "console: count() statische Methode"
short-title: count()
slug: Web/API/console/count_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.count()`** protokolliert, wie oft dieser spezielle Aufruf von `count()` aufgerufen wurde.

## Syntax

```js-nolint
console.count()
console.count(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Ein String. Falls angegeben, gibt `count()` die Anzahl der Male aus, die es mit diesem Label aufgerufen wurde. Wenn nicht angegeben, verhält sich `count()`, als ob es mit dem Label "default" aufgerufen wurde.

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
greet();
console.count();
```

Die Konsolenausgabe wird in etwa so aussehen:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

Das Label wird als `default` angezeigt, da kein explizites Label angegeben wurde.

Wenn wir die Variable `user` als `label`-Argument beim ersten Aufruf von `console.count()` und den String "alice" beim zweiten übergeben:

```js
function greet(user) {
  console.count(user);
  return `hi ${user}`;
}

greet("bob");
greet("alice");
greet("alice");
console.count("alice");
```

Werden wir eine Ausgabe wie diese sehen:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

Wir pflegen jetzt separate Zähler, die nur auf dem Wert von `label` basieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.count()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#count)
- [Node.js-Dokumentation für `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chrome-Dokumentation für `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
