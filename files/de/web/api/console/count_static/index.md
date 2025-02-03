---
title: "console: count() statische Methode"
short-title: count()
slug: Web/API/console/count_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
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
  - : Ein String. Wenn angegeben, gibt `count()` die Anzahl der Aufrufe mit diesem Label aus. Wenn weggelassen, verhält sich `count()`, als ob es mit dem Label "default" aufgerufen wurde.

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

Die Konsolenausgabe sieht etwa so aus:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

Das Label wird als `default` angezeigt, weil kein explizites Label angegeben wurde.

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

Wir führen jetzt separate Zählungen basierend auf dem Wert von `label`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge Dokumentation für `console.count()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#count)
- [Node.js Dokumentation für `console.count()`](https://nodejs.org/docs/latest/api/console.html#consolecountlabel)
- [Google Chrome Dokumentation für `console.count()`](https://developer.chrome.com/docs/devtools/console/api/#count)
